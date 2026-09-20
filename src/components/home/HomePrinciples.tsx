import { Reveal } from "@/components/ui/reveal";
import { workPrinciples } from "@/data/home";
import { getDictionary, type UiDictionary } from "@/i18n";

export function HomePrinciples({ dictionary }: { dictionary?: UiDictionary }) {
  const d = dictionary ?? getDictionary();
  return (
    <section className="mt-24 md:mt-32" id="how-i-work" aria-labelledby="how-i-work-heading">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Reveal>
          <h2 id="how-i-work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-12">
            {d.home.principlesTitle}
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {workPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 80}>
              <article className="bg-bg-elevated border border-line rounded-[var(--radius)] p-6 hover:border-accent/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5 text-accent">
                    <principle.icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-ink text-lg">
                      {d.principles[index]?.title ?? principle.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {d.principles[index]?.description ?? principle.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
