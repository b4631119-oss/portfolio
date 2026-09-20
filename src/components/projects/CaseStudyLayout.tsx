import Image from "next/image";
import type { ProjectCaseStudy } from "@/types";
import { getDictionary, type UiDictionary } from "@/i18n";

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

export function ProjectScreenshots({
  images,
  label,
  dictionary,
}: {
  images: ProjectCaseStudy["screenshots"];
  label?: string;
  dictionary?: UiDictionary;
}) {
  const d = dictionary ?? getDictionary();
  const sectionLabel = label ?? d.project.screenshots;
  if (!images || images.length === 0) return null;

  return (
    <Section label={sectionLabel}>
      <div className="space-y-6">
        {images.map((shot) => (
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
  );
}

export function CaseStudyLayout({ caseStudy, dictionary }: { caseStudy: ProjectCaseStudy; dictionary?: UiDictionary }) {
  const d = dictionary ?? getDictionary();
  return (
    <div className="mt-16 space-y-14">
      <Section label={d.project.overview}>
        <p className="text-muted leading-relaxed max-w-[70ch]">{caseStudy.overview}</p>
      </Section>

      {caseStudy.problem && (
        <Section label={d.project.problem}>
          <p className="text-muted leading-relaxed max-w-[70ch]">{caseStudy.problem}</p>
        </Section>
      )}

      {caseStudy.scope && (
        <Section label={d.project.scope}>
          <p className="text-muted leading-relaxed max-w-[70ch]">{caseStudy.scope}</p>
        </Section>
      )}

      {caseStudy.features && caseStudy.features.length > 0 && (
        <Section label={d.project.features}>
          <List items={caseStudy.features} />
        </Section>
      )}

      {caseStudy.architecture && (
        <Section label={d.project.architecture}>
          <p className="text-muted leading-relaxed max-w-[70ch]">{caseStudy.architecture}</p>
        </Section>
      )}

      {caseStudy.decisions && caseStudy.decisions.length > 0 && (
        <Section label={d.project.decisions}>
          <List items={caseStudy.decisions} />
        </Section>
      )}

      {caseStudy.limitations && caseStudy.limitations.length > 0 && (
        <Section label={d.project.limitations}>
          <List items={caseStudy.limitations} />
        </Section>
      )}

      {caseStudy.screenshots && <ProjectScreenshots images={caseStudy.screenshots} dictionary={d} />}
    </div>
  );
}
