import { Reveal } from "@/components/ui/reveal";
import { getDictionary } from "@/i18n";

const d = getDictionary();

export function HomeExperience() {
  return (
    <section className="mt-24 md:mt-32" id="experience" aria-labelledby="experience-heading">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Reveal>
          <h2 id="experience-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
            {d.home.experienceTitle}
          </h2>
          <div className="mt-8 relative pl-6 border-l border-line">
            <div className="relative">
              <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-accent border-2 border-bg" aria-hidden="true" />
              <div className="space-y-1">
                <p className="font-mono text-xs text-accent">{d.home.experienceDate}</p>
                <p className="font-semibold text-ink text-lg">{d.home.experienceRole}</p>
                <p className="text-sm text-muted">{d.home.experienceType}</p>
                <p className="text-sm text-muted mt-1">
                  {d.home.experienceDescription}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
