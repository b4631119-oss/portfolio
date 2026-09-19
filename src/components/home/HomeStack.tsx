import { Reveal } from "@/components/ui/reveal";
import { techGroups } from "@/data/home";

export function HomeStack() {
  return (
    <section className="mt-24 md:mt-32" id="stack" aria-labelledby="stack-heading">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Reveal>
          <h2 id="stack-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-12">
            Стек технологий
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {techGroups.map((category, index) => (
            <Reveal key={category.label} delay={index * 120}>
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-accent uppercase tracking-wide">
                    {category.label}
                  </span>
                </div>
                <div className="border-b border-line pb-4">
                  <div className="space-y-3">
                    {category.items.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <div key={tech.name} className="flex items-center gap-3">
                          <span
                            className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-ink"
                            style={{ color: tech.color === "currentColor" ? "currentColor" : tech.color }}
                          >
                            {Icon && <Icon size={24} strokeWidth={1.8} aria-hidden="true" />}
                          </span>
                          <span className="text-sm text-ink">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
