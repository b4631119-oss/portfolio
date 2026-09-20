import { experiments } from "@/data/projects";
import { ProjectCard, projectTier } from "@/components/project/ProjectCard";
import { Reveal } from "@/components/ui/reveal";
import { getDictionary, type UiDictionary } from "@/i18n";

export function HomeOtherWork({ dictionary }: { dictionary?: UiDictionary }) {
  const d = dictionary ?? getDictionary();
  const secondary = experiments.filter((project) => projectTier(project) === "secondary");
  const simple = experiments.filter((project) => projectTier(project) === "experiment");

  return (
    <section className="mt-24 md:mt-32" id="other-work" aria-labelledby="other-work-heading">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Reveal>
          {/* Section heading */}
          <h2 id="other-work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-2">
{d.home.otherTitle}
          </h2>
          <p className="text-muted">{d.home.otherDescription}</p>
        </Reveal>

        {secondary.length > 0 && (
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {secondary.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard project={project} dictionary={d} />
              </Reveal>
            ))}
          </div>
        )}

        {simple.length > 0 && (
          <div className="mt-6 space-y-4">
            {simple.map((project, index) => (
              <Reveal key={project.id} delay={240 + index * 60}>
                <ProjectCard project={project} dictionary={d} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
