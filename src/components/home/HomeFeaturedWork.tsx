import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Reveal } from "@/components/ui/reveal";

export function HomeFeaturedWork() {
  return (
    <section className="mt-24 md:mt-32" id="work" aria-labelledby="work-heading">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Reveal>
          {/* Section heading */}
          <h2 id="work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-2">
            Featured Work
          </h2>
          <p className="text-muted">Главные проекты — продакшн-продукты и сложные системы.</p>
        </Reveal>

        {/* Featured Projects Grid - 3 cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard
                project={project}
                variant="compact"
                showLiveLink={true}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-bold font-mono text-sm tracking-wider"
            >
              <Link href="/projects/prolab-academy">
                PROlab Academy — Case Study
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
