import { Reveal } from "@/components/ui/reveal";

export function HomeExperience() {
  return (
    <section className="mt-24 md:mt-32" id="experience" aria-labelledby="experience-heading">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Reveal>
          <h2 id="experience-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
            Опыт
          </h2>
          <div className="mt-8 relative pl-6 border-l border-line">
            <div className="relative">
              <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-accent border-2 border-bg" aria-hidden="true" />
              <div className="space-y-1">
                <p className="font-mono text-xs text-accent">2026 — настоящее время</p>
                <p className="font-semibold text-ink text-lg">Frontend-разработка</p>
                <p className="text-sm text-muted">Стажировка</p>
                <p className="text-sm text-muted mt-1">
                  Фронтенд-задачи в реальных проектах — первый опыт работы вне личных
                  проектов.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
