import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Code2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 pt-8 md:pt-12 pb-24 font-sans">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
      >
        <ArrowLeft size={16} aria-hidden />
        Все проекты
      </Link>

      <h1 className="mt-8 font-sans font-bold text-ink text-4xl md:text-5xl">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="font-mono text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <p className="mt-6 text-muted text-lg leading-relaxed max-w-[70ch]">
        {project.description}
      </p>

      <div className="mt-10 pt-8 border-t border-line flex gap-4 flex-wrap">
        <Button asChild variant="outline">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={18} aria-hidden />
            GitHub
          </a>
        </Button>

        {project.liveUrl && (
          <Button asChild className="shadow-none">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} aria-hidden />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
