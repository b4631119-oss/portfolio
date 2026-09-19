import type { Metadata } from "next";
import Link from "next/link";
import { projects, experiments } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/project/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack production applications and technical experiments — Next.js, TypeScript, C#, .NET, Python, PostgreSQL, and more.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 font-sans">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm mb-12"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back
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
          Featured Work
        </p>
        <div className="space-y-8 md:space-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="featured"
              showLiveLink={true}
            />
          ))}
        </div>
      </section>

      {/* Other Work */}
      <section id="other-work" aria-labelledby="other-work-heading">
        <p id="other-work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
          Other Work
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {experiments.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="compact"
              showLiveLink={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
}