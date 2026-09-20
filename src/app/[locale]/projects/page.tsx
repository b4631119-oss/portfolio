import type { Metadata } from "next";
import Link from "next/link";
import { localizeProjects, projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { ProjectCard, projectTier } from "@/components/project/ProjectCard";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { alternatesFor } from "@/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const d = getDictionary(isLocale(raw) ? raw : "ru");
  return { title: d.pages.projectsTitle, description: d.pages.projectsDescription, alternates: alternatesFor("/projects", isLocale(raw) ? raw : "ru") };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ru";
  const d = getDictionary(locale);
  const localizedProjects = localizeProjects(projects, locale);
  const flagship = localizedProjects.filter((project) => projectTier(project) === "flagship");
  const [lead, ...rest] = flagship;
  const secondary = localizedProjects.filter((project) => projectTier(project) === "secondary");
  const simple = localizedProjects.filter((project) => projectTier(project) === "experiment");

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 font-sans">
      <Link href={locale === "en" ? "/en" : "/"} className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm mb-12"><ArrowLeft size={16} aria-hidden="true" />{d.buttons.back}</Link>
      <header className="mb-16 md:mb-24"><h1 className="font-sans font-bold text-ink text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">{d.pages.projectsTitle}</h1><p className="mt-4 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">{d.pages.projectsDescription}</p></header>
      <section className="mb-24 md:mb-32" id="projects-featured">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-8">{d.home.featuredTitle}</p>
        {lead && <ProjectCard project={lead} variant="flagship" dictionary={d} />}
        {rest.length > 0 && <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-6 md:gap-8">{rest.map((project) => <ProjectCard key={project.id} project={project} variant="flagship" dictionary={d} />)}</div>}
      </section>
      <section id="other-work" aria-labelledby="other-work-heading"><p id="other-work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-8">{d.home.otherTitle}</p>{secondary.length > 0 && <div className="grid md:grid-cols-2 gap-6">{secondary.map((project) => <ProjectCard key={project.id} project={project} dictionary={d} />)}</div>}{simple.length > 0 && <div className="mt-6 space-y-4">{simple.map((project) => <ProjectCard key={project.id} project={project} dictionary={d} />)}</div>}</section>
    </div>
  );
}
