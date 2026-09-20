import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowLeft, Check, Github, Server, Database, Zap } from "lucide-react";
import { getProject, localizeProject } from "@/data/projects";
import { ArchitectureDiagram } from "@/components/ui/architecture-diagram";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { alternatesFor } from "@/i18n/metadata";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ru";
  const project = getProject("prolab-academy");
  const localizedProject = project ? localizeProject(project, locale) : undefined;
  const content = localizedProject?.customCaseStudy;
  if (!content) return {};
  return {
    title: content.metadataTitle,
    description: content.intro,
    alternates: alternatesFor("/projects/prolab-academy", locale),
    openGraph: {
      title: content.metadataTitle,
      description: content.intro,
      url: locale === "en" ? "/en/projects/prolab-academy" : "/projects/prolab-academy",
      locale: locale === "en" ? "en_US" : "ru_RU",
      images: [{ url: "/opengraph-image", alt: content.metadataTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadataTitle,
      description: content.intro,
      images: ["/opengraph-image"],
    },
  };
}

const archNodes = [
  { label: "Next.js", icon: <Zap className="w-5 h-5" aria-hidden="true" /> },
  { label: "Server Actions", icon: <Server className="w-5 h-5" aria-hidden="true" /> },
  { label: "Supabase", icon: <Zap className="w-5 h-5" aria-hidden="true" /> },
  { label: "PostgreSQL", icon: <Database className="w-5 h-5" aria-hidden="true" /> },
];

export default async function ProLabAcademyCaseStudy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ru";
  const project = getProject("prolab-academy");
  const localizedProject = project ? localizeProject(project, locale) : undefined;
  const content = localizedProject?.customCaseStudy;
  if (!content || !localizedProject || !localizedProject.liveUrl) notFound();
  const prefix = locale === "en" ? "/en" : "";
  const { liveUrl, githubUrl, title } = localizedProject;

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 font-sans">
      <Link href={`${prefix}/#work`} className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm mb-12"><ArrowLeft size={16} aria-hidden="true" />{content.back}</Link>
      <header className="space-y-6 mb-16 md:mb-24"><div className="flex flex-wrap gap-2"><span className="font-mono text-xs text-muted uppercase tracking-wide">{content.role}</span><Badge variant="secondary" className="font-mono text-xs">{content.badge}</Badge></div><h1 className="font-sans font-bold text-ink text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">{title}</h1><p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">{content.intro}</p><div className="flex flex-wrap gap-4"><Button asChild size="lg" className="shadow-none font-bold"><a href={liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} className="mr-2" aria-hidden="true" />{content.live}</a></Button><Button asChild size="lg" variant="outline" className="font-bold"><a href={githubUrl} target="_blank" rel="noopener noreferrer"><Github size={18} className="mr-2" aria-hidden="true" />{content.code}</a></Button></div></header>
      <section className="mb-16 md:mb-24"><p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">{content.overview}</p><div className="prose prose-invert max-w-none text-muted leading-relaxed space-y-4"><p>{content.overviewOne}</p><p>{content.overviewTwo}</p></div></section>
      <section className="mb-16 md:mb-24"><p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">{content.roleTitle}</p><div className="prose prose-invert max-w-none text-muted leading-relaxed space-y-4"><p>{content.roleText}</p></div></section>
      <section className="mb-16 md:mb-24" aria-labelledby="architecture-heading"><p className="font-mono text-xs tracking-widest text-muted uppercase mb-6" id="architecture-heading">{content.architecture}</p><ArchitectureDiagram nodes={archNodes} /><p className="mt-8 text-sm text-muted text-center">{content.architectureFlow}</p></section>
      <section className="mb-16 md:mb-24"><p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">{content.features}</p><div className="grid md:grid-cols-2 gap-4">{content.featureItems.map((feature) => <div key={feature} className="flex items-center gap-3 text-muted"><Check size={16} className="text-accent shrink-0" aria-hidden="true" /><span className="font-mono text-sm">{feature}</span></div>)}</div></section>
      <section className="mb-16 md:mb-24"><p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">{content.stack}</p><div className="space-y-6">{content.techGroups.map((group) => <div key={group.label} className="space-y-3"><span className="font-mono text-xs text-muted uppercase tracking-wide">{group.label}</span><div className="flex flex-wrap gap-2">{group.items.map((tech) => <Badge key={tech} variant="secondary" className="font-mono text-sm">{tech}</Badge>)}</div></div>)}</div></section>
      <section className="mb-16 md:mb-24"><p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">{content.notes}</p><div className="prose prose-invert max-w-none text-muted leading-relaxed"><p>{content.notesText}</p></div></section>
      <footer className="pt-8 border-t border-line flex flex-wrap gap-4"><Button asChild size="lg" className="shadow-none font-bold"><a href={liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} className="mr-2" aria-hidden="true" />{content.live}</a></Button><Button asChild size="lg" variant="outline" className="font-bold"><a href={githubUrl} target="_blank" rel="noopener noreferrer"><Github size={18} className="mr-2" aria-hidden="true" />{content.code}</a></Button><Button asChild size="lg" variant="outline" className="font-bold"><Link href={`${prefix}/#work`}><ArrowLeft size={18} className="mr-2" aria-hidden="true" />{content.back}</Link></Button></footer>
    </article>
  );
}
