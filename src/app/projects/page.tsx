import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 md:pt-12 pb-24 font-sans">
      <h1 className="font-sans font-bold text-ink text-4xl md:text-5xl">
        Проекты
      </h1>

      <div className="mt-6 divide-y divide-line">
        {projects.map((project) => (
          <div key={project.id} className="py-8">
            <Link
              href={`/projects/${project.id}`}
              className="font-sans font-bold text-ink text-xl hover:text-accent transition-colors"
            >
              {project.title}
            </Link>

            <p className="mt-2 text-muted leading-relaxed max-w-[70ch]">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
