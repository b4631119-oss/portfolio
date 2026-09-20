import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project, ProjectTier } from "@/types";
import { getDictionary, type UiDictionary } from "@/i18n";

/** Способ подачи карточки: flagship — крупное превью, standard — среднее, compact — строка. */
export type ProjectCardVariant = "flagship" | "standard" | "compact";

interface ProjectCardProps {
  project: Project;
  variant?: ProjectCardVariant;
  dictionary?: UiDictionary;
}

/** Tier из данных проекта; проекты без tier считаются secondary. */
export function projectTier(project: Project): ProjectTier {
  return project.tier ?? "secondary";
}

/** Tier из данных (flagship/secondary/experiment) → вариант карточки. */
function tierToVariant(tier: ProjectTier): ProjectCardVariant {
  if (tier === "flagship") return "flagship";
  if (tier === "secondary") return "standard";
  return "compact";
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tech) => (
        <Badge key={tech} variant="secondary" className="font-mono text-xs">
          {tech}
        </Badge>
      ))}
    </div>
  );
}

function Preview({
  image,
  sizes,
  className,
}: {
  image: NonNullable<Project["image"]>;
  sizes: string;
  className: string;
}) {
  return (
    <div className={className}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export function ProjectCard({ project, variant, dictionary }: ProjectCardProps) {
  const d = dictionary ?? getDictionary();
  const cardVariant = variant ?? tierToVariant(projectTier(project));
  const detailsHref = `${d.locale === "en" ? "/en" : ""}/projects/${project.id}`;

  if (cardVariant === "flagship") {
    return (
      <article className="bg-bg-elevated border border-line rounded-[var(--radius)] overflow-hidden hover:border-accent/50 transition-colors duration-300">
        {project.image && (
          <Preview
            image={project.image}
            sizes="(min-width: 1280px) 1100px, (min-width: 768px) 90vw, 100vw"
            className="relative aspect-[16/10] w-full bg-bg border-b border-line"
          />
        )}

        <div className="p-8 md:p-12 space-y-6">
          {project.role && (
            <span className="font-mono text-xs text-muted uppercase tracking-wide">
              {d.home.roleLabel}
            </span>
          )}
          <h2 className="font-sans font-bold text-ink text-2xl md:text-3xl leading-tight">
            {project.title}
          </h2>
          <p className="text-muted leading-relaxed max-w-[70ch]">
            {project.description}
          </p>
          <Tags tags={project.tags} />

          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="shadow-none font-bold">
              <Link href={detailsHref}>
                {d.buttons.caseStudy}
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
            {project.liveUrl && (
              <Button asChild size="lg" variant="outline" className="font-bold">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} className="mr-2" aria-hidden="true" />
                  {d.buttons.live}
                </a>
              </Button>
            )}
            <Button asChild size="lg" variant="outline" className="font-bold">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} className="mr-2" aria-hidden="true" />
                {d.buttons.code}
              </a>
            </Button>
          </div>
        </div>
      </article>
    );
  }

  if (cardVariant === "standard") {
    return (
      <article className="bg-bg-elevated border border-line rounded-[var(--radius)] overflow-hidden hover:border-accent/50 transition-colors duration-300 flex flex-col h-full">
        {project.image && (
          <Preview
            image={project.image}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="relative aspect-[16/10] w-full bg-bg border-b border-line"
          />
        )}

        <div className="p-6 flex flex-col flex-1 gap-3">
          <div className="space-y-2">
            {project.role && (
              <span className="font-mono text-xs text-muted uppercase tracking-wide">
                {d.home.roleLabel}
              </span>
            )}
            <h3 className="font-sans font-semibold text-ink text-lg">
              {project.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          <Tags tags={project.tags} />

          <div className="mt-auto pt-4 border-t border-line">
            <Button asChild variant="outline" size="sm" className="font-mono text-xs">
              <Link href={detailsHref}>
                {d.buttons.details}
                <ArrowRight size={12} className="ml-1.5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-bg-elevated border border-line rounded-[var(--radius)] p-5 hover:border-accent/50 transition-colors duration-300">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="min-w-0 space-y-1.5">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-sans font-semibold text-ink text-base">
              {project.title}
            </h3>
            {project.role && (
              <span className="font-mono text-xs text-muted uppercase tracking-wide">
                {d.home.roleLabel}
              </span>
            )}
          </div>
          <p className="text-sm text-muted line-clamp-1">{project.description}</p>
          <Tags tags={project.tags} />
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <Button asChild variant="outline" size="sm" className="font-mono text-xs">
            <Link href={detailsHref}>{d.buttons.details}</Link>
          </Button>
          {project.liveUrl && (
            <Button asChild variant="outline" size="sm" className="font-mono text-xs">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={12} className="mr-1.5" aria-hidden="true" />
                {d.buttons.live}
              </a>
            </Button>
          )}
          <Button asChild variant="outline" size="sm" className="font-mono text-xs">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={12} className="mr-1.5" aria-hidden="true" />
              {d.buttons.code}
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
