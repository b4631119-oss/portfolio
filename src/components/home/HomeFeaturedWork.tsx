import { missingProjectsForPinnedRepos, projectsForPinnedRepos } from "@/data/projects";
import type { GithubRepo } from "@/lib/github";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Reveal } from "@/components/ui/reveal";
import { getDictionary, type UiDictionary } from "@/i18n";

export function HomeFeaturedWork({ pinnedRepos, dictionary }: { pinnedRepos: GithubRepo[]; dictionary?: UiDictionary }) {
  const d = dictionary ?? getDictionary();
  const selectedProjects = projectsForPinnedRepos(pinnedRepos, d.locale);
  const [lead, ...rest] = selectedProjects;
  if (process.env.NODE_ENV === "development") {
    const unmatched = missingProjectsForPinnedRepos(pinnedRepos);
    if (unmatched.length > 0) {
      console.warn("GitHub pinned repositories missing from projects.ts:", unmatched);
    }
  }

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
              <ProjectCard project={lead} variant="selected" dictionary={d} />
            </div>
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-6 md:gap-8">
            {rest.map((project, index) => (
              <Reveal key={project.id} delay={160 + index * 80}>
                <ProjectCard project={project} variant="selected" dictionary={d} />
              </Reveal>
            ))}
          </div>
        )}

        {!lead && (
          <p className="mt-12 text-muted text-center">{d.home.selectedWorkEmpty}</p>
        )}


      </div>
    </section>
  );
}
