import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localizeProjects, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ProjectCard, projectTier } from "@/components/project/ProjectCard";
import { Reveal } from "@/components/ui/reveal";
import { getDictionary, type UiDictionary } from "@/i18n";

export function HomeFeaturedWork({ dictionary }: { dictionary?: UiDictionary }) {
  const d = dictionary ?? getDictionary();
  const flagship = localizeProjects(projects, d.locale).filter((project) => projectTier(project) === "flagship");
  const [lead, ...rest] = flagship;
  const caseStudyProject = flagship.find((project) => project.customCaseStudy || project.caseStudy);

  return (
    <section className="mt-24 md:mt-32" id="work" aria-labelledby="work-heading">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Reveal>
          {/* Section heading */}
          <h2 id="work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-2">
            {d.home.featuredTitle}
          </h2>
          <p className="text-muted">{d.home.featuredDescription}</p>
        </Reveal>

        {lead && (
          <Reveal delay={80}>
            <div className="mt-12">
              <ProjectCard project={lead} variant="flagship" dictionary={d} />
            </div>
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-6 md:gap-8">
            {rest.map((project, index) => (
              <Reveal key={project.id} delay={160 + index * 80}>
                <ProjectCard project={project} variant="flagship" dictionary={d} />
              </Reveal>
            ))}
          </div>
        )}

        {caseStudyProject && (
          <Reveal delay={240}>
            <div className="mt-10 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-bold font-mono text-sm tracking-wider"
              >
                <Link href={`${d.locale === "en" ? "/en" : ""}/projects/${caseStudyProject.id}`}>
                  {d.home.caseLink}
                  <ArrowRight size={18} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
