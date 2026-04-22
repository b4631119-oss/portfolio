import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Code2, ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Все проекты
        </Link>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex gap-2 flex-wrap mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          {project.description}
        </p>

        <div className="flex gap-4">
            <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Code2 size={18} />
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>

      </div>
    </section>
  );
}