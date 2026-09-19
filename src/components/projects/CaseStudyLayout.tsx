import Image from "next/image";
import type { ProjectCaseStudy } from "@/types";

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-mono text-xs tracking-widest text-muted uppercase mb-4">
        {label}
      </h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-muted leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyLayout({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  return (
    <div className="mt-16 space-y-14">
      <Section label="Обзор">
        <p className="text-muted leading-relaxed max-w-[70ch]">{caseStudy.overview}</p>
      </Section>

      {caseStudy.problem && (
        <Section label="Задача">
          <p className="text-muted leading-relaxed max-w-[70ch]">{caseStudy.problem}</p>
        </Section>
      )}

      {caseStudy.scope && (
        <Section label="Роль и scope">
          <p className="text-muted leading-relaxed max-w-[70ch]">{caseStudy.scope}</p>
        </Section>
      )}

      {caseStudy.features && caseStudy.features.length > 0 && (
        <Section label="Ключевые функции">
          <List items={caseStudy.features} />
        </Section>
      )}

      {caseStudy.architecture && (
        <Section label="Архитектура">
          <p className="text-muted leading-relaxed max-w-[70ch]">{caseStudy.architecture}</p>
        </Section>
      )}

      {caseStudy.decisions && caseStudy.decisions.length > 0 && (
        <Section label="Технические решения">
          <List items={caseStudy.decisions} />
        </Section>
      )}

      {caseStudy.limitations && caseStudy.limitations.length > 0 && (
        <Section label="Ограничения">
          <List items={caseStudy.limitations} />
        </Section>
      )}

      {caseStudy.screenshots && caseStudy.screenshots.length > 0 && (
        <Section label="Скриншоты">
          <div className="space-y-6">
            {caseStudy.screenshots.map((shot) => (
              <div
                key={shot.src}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius)] border border-line bg-bg-elevated"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
