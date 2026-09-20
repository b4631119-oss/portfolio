import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { techGroups } from "@/data/home";
import { getDictionary } from "@/i18n";

const d = getDictionary();

export const metadata: Metadata = {
  title: d.pages.aboutTitle,
  description: d.pages.aboutDescription,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24 font-sans">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm mb-12"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {d.buttons.back}
      </Link>

      {/* Header */}
      <header className="mb-12 md:mb-16">
        <h1 className="font-sans font-bold text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          {d.pages.aboutTitle}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          {d.home.aboutIntro}
        </p>
      </header>

      {/* Bio */}
      <section className="mb-16 md:mb-24">
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          {d.home.aboutDetails}
        </p>
      </section>

      {/* Tech Stack */}
      <section>
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
          {d.pages.stack}
        </p>
        <div className="space-y-8">
          {techGroups.map((group) => (
            <div key={group.label} className="space-y-3">
              <p className="font-mono text-xs text-accent uppercase tracking-wide">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="font-mono text-xs text-muted bg-bg-elevated px-2.5 py-1 rounded border border-line"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
