import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  variant?: "compact" | "featured";
  showLiveLink?: boolean;
}

export function ProjectCard({ project, variant = "compact", showLiveLink = true }: ProjectCardProps) {
  const hasLiveUrl = !!project.liveUrl;
  const hasGithubUrl = !!project.githubUrl;

  if (variant === "featured") {
    return (
      <article className="bg-bg-elevated border border-line rounded-[var(--radius)] p-8 md:p-12 hover:border-accent/50 transition-colors duration-300">
        <div className="lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Browser mockup */}
          <div className="relative w-full aspect-[16/10] bg-bg border border-line rounded-[var(--radius)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-bg-elevated border-b border-line">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-line" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-line" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-line" aria-hidden="true" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 bg-line/30 rounded px-2 flex items-center">
                  {project.liveUrl && (
                    <span className="font-mono text-xs text-muted ml-2">
                      {new URL(project.liveUrl).hostname}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {project.liveUrl && (
              <div className="absolute inset-0 top-10">
                <iframe
                  src={project.liveUrl}
                  title={`${project.title} live preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            {!project.liveUrl && (
              <div className="absolute inset-0 top-10 flex items-center justify-center bg-line/10">
                <span className="font-mono text-xs text-muted">No live preview</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-6 pt-6 lg:pt-0">
            <div className="space-y-2">
              <span className="font-mono text-xs text-muted uppercase tracking-wide">
                Solo Developer
              </span>
              <h2 className="font-sans font-bold text-ink text-2xl md:text-3xl leading-tight">
                {project.title}
              </h2>
            </div>

            <p className="text-muted leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {hasLiveUrl && showLiveLink && (
                <Button asChild size="lg" className="shadow-none font-bold">
                  <a
                    href={project.liveUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-2" aria-hidden="true" />
                    Live Project
                  </a>
                </Button>
              )}
              {hasGithubUrl && (
                <Button asChild size="lg" variant="outline" className="font-bold">
                  <a
                    href={project.githubUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-2" aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
              )}
              {!hasLiveUrl && !hasGithubUrl && (
                <Button asChild size="lg" variant="outline" className="font-bold" disabled>
                  <Link href={`/projects/${project.id}`}>View Details</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Compact variant
  return (
    <article className="bg-bg-elevated border border-line rounded-[var(--radius)] p-6 flex flex-col h-full hover:border-accent/50 transition-colors duration-300">
      <div className="space-y-3">
        <h3 className="font-sans font-semibold text-ink text-lg">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-auto pt-4 border-t border-line">
        <div className="flex flex-wrap gap-2">
          {(hasLiveUrl && showLiveLink) && (
            <Button asChild variant="outline" size="sm" className="flex-1 sm:flex-none font-mono text-xs">
              <a
                href={project.liveUrl!}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={12} className="mr-1.5" aria-hidden="true" />
                Live
              </a>
            </Button>
          )}
          {hasGithubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1 sm:flex-none font-mono text-xs">
              <a
                href={project.githubUrl!}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={12} className="mr-1.5" aria-hidden="true" />
                Code
              </a>
            </Button>
          )}
          {!hasLiveUrl && !hasGithubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1 sm:flex-none font-mono text-xs">
              <Link href={`/projects/${project.id}`}>View</Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}