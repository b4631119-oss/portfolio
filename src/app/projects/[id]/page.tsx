import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { projects, experiments } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";

type Props = {
  params: Promise<{ id: string }>;
};

const allProjects = [...projects, ...experiments];

/** prolab-academy обслуживается отдельным кастомным case study. */
const CASE_STUDY_ROUTE_ID = "prolab-academy";

export function generateStaticParams() {
  return allProjects
    .filter((project) => project.id !== CASE_STUDY_ROUTE_ID)
    .map((project) => ({ id: project.id }));
}

/** Полный набор id задан выше — всё остальное должно отдавать 404, а не пустую страницу. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = allProjects.find((item) => item.id === id);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/projects/${project.id}`,
      images: project.image
        ? [{ url: project.image.src, alt: project.image.alt }]
        : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = allProjects.find((item) => item.id === id);

  if (!project) notFound();

  const caseStudy = project.caseStudy;

  return (
    <article className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24 font-sans">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Все проекты
      </Link>

      {project.image && (
        <div className="mt-8 relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius)] border border-line bg-bg-elevated">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <header className="mt-8 space-y-4">
        {project.role && (
          <span className="block font-mono text-xs text-muted uppercase tracking-wide">
            {project.role}
          </span>
        )}
        <h1 className="font-sans font-bold text-ink text-4xl md:text-5xl leading-tight">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          {project.liveUrl && (
            <Button asChild className="shadow-none font-bold">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} className="mr-2" aria-hidden="true" />
                Live
              </a>
            </Button>
          )}
          <Button asChild variant="outline" className="font-bold">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={18} className="mr-2" aria-hidden="true" />
              Код
            </a>
          </Button>
        </div>
      </header>

      <p className="mt-8 text-muted text-lg leading-relaxed max-w-[70ch]">
        {project.description}
      </p>

      {caseStudy && <CaseStudyLayout caseStudy={caseStudy} />}
    </article>
  );
}
