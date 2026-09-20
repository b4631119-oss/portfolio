import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { projects, experiments } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";
import { getDictionary } from "@/i18n";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { localizeProject } from "@/i18n/projects";
import { alternatesFor } from "@/i18n/metadata";

type Props = { params: Promise<{ locale: string; id: string }> };
const allProjects = [...projects, ...experiments];
const CASE_STUDY_ROUTE_ID = "prolab-academy";

export function generateStaticParams() {
  return locales.flatMap((locale) => allProjects.filter((project) => project.id !== CASE_STUDY_ROUTE_ID).map((project) => ({ locale, id: project.id })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, id } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ru";
  const project = allProjects.find((item) => item.id === id);
  if (!project) return {};
  const localized = localizeProject(project, locale);
  const path = `/projects/${project.id}`;
  return { title: localized.title, description: localized.description, alternates: alternatesFor(path, locale), openGraph: { title: localized.title, description: localized.description, url: locale === "en" ? `/en${path}` : path, locale: locale === "en" ? "en_US" : "ru_RU", images: localized.image ? [{ url: localized.image.src, alt: localized.image.alt }] : undefined } };
}

export default async function ProjectPage({ params }: Props) {
  const { locale: raw, id } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ru";
  const d = getDictionary(locale);
  const project = allProjects.find((item) => item.id === id);
  if (!project) notFound();
  const localized = localizeProject(project, locale);
  const pathPrefix = locale === "en" ? "/en" : "";
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24 font-sans">
      <Link href={`${pathPrefix}/projects`} className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm"><ArrowLeft size={16} aria-hidden="true" />{d.buttons.backToProjects}</Link>
      {localized.image && <div className="mt-8 relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius)] border border-line bg-bg-elevated"><Image src={localized.image.src} alt={localized.image.alt} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" /></div>}
      <header className="mt-8 space-y-4">{localized.role && <span className="block font-mono text-xs text-muted uppercase tracking-wide">{localized.role}</span>}<h1 className="font-sans font-bold text-ink text-4xl md:text-5xl leading-tight">{localized.title}</h1><div className="flex flex-wrap gap-2">{localized.tags.map((tag) => <Badge key={tag} variant="secondary" className="font-mono text-xs">{tag}</Badge>)}</div><div className="flex flex-wrap gap-4 pt-2">{localized.liveUrl && <Button asChild className="shadow-none font-bold"><a href={localized.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} className="mr-2" aria-hidden="true" />{d.buttons.live}</a></Button>}<Button asChild variant="outline" className="font-bold"><a href={localized.githubUrl} target="_blank" rel="noopener noreferrer"><Code2 size={18} className="mr-2" aria-hidden="true" />{d.buttons.code}</a></Button></div></header>
      <p className="mt-8 text-muted text-lg leading-relaxed max-w-[70ch]">{localized.description}</p>
      {localized.caseStudy && <CaseStudyLayout caseStudy={localized.caseStudy} dictionary={d} />}
    </article>
  );
}
