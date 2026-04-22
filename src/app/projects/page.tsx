"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";
export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 font-medium mb-2">Мои работы</p>
          <h1 className="text-4xl font-bold mb-12">Проекты</h1>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-xl font-semibold hover:text-blue-400 transition-colors"
                >
                  {project.title}
                </Link>
                <div className="flex gap-3 shrink-0">
                  <a
                    
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                   <Code2 size={20} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}