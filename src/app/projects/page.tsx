import type { Metadata } from "next";
import Link from "next/link";
import { projects, experiments } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { ProjectCard, projectTier } from "@/components/project/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack production applications and technical experiments — Next.js, TypeScript, C#, .NET, Python, PostgreSQL, and more.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const flagship = projects.filter((project) => projectTier(project) === "flagship");
  const [lead, ...rest] = flagship;
  const secondary = experiments.filter((project) => projectTier(project) === "secondary");
  const simple = experiments.filter((project) => projectTier(project) === "experiment");

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 font-sans">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm mb-12"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Назад
      </Link>

      {/* Header */}
      <header className="mb-16 md:mb-24">
        <h1 className="font-sans font-bold text-ink text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
          Все проекты
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          Продакшн-продукты, сложные системы и пет-проекты.
        </p>
      </header>

      {/* Featured Work */}
      <section className="mb-24 md:mb-32" id="projects-featured">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
          Избранные проекты
        </p>

        {lead && <ProjectCard project={lead} variant="flagship" />}

        {rest.length > 0 && (
          <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-6 md:gap-8">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} variant="flagship" />
            ))}
          </div>
        )}
      </section>

      {/* Other Work */}
      <section id="other-work" aria-labelledby="other-work-heading">
        <p id="other-work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
          Другие проекты
        </p>

        {secondary.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {secondary.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {simple.length > 0 && (
          <div className="mt-6 space-y-4">
            {simple.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
