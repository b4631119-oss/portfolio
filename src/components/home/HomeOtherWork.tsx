import { experiments } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Reveal } from "@/components/ui/reveal";

export function HomeOtherWork() {
  return (
    <section className="mt-24 md:mt-32" id="other-work" aria-labelledby="other-work-heading">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Reveal>
          {/* Section heading */}
          <h2 id="other-work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-2">
            Other Work
          </h2>
          <p className="text-muted">Пет-проекты и эксперименты.</p>
        </Reveal>

        {/* Experiments Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {experiments.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard
                project={project}
                variant="compact"
                showLiveLink={true}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
