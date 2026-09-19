import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { techGroups } from "@/data/home";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Full-stack разработчик из Оша, Кыргызстан: платформа онлайн-экзаменов, система планирования дня и десктопные утилиты. React, Next.js, TypeScript, Firebase, Supabase.",
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
        Back
      </Link>

      {/* Header */}
      <header className="mb-12 md:mb-16">
        <h1 className="font-sans font-bold text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          Обо мне
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          Full-stack разработчик из Оша, Кыргызстан. Делаю веб-продукты целиком:
          интерфейс на React и Next.js, данные в Firebase и Supabase, деплой на Vercel.
        </p>
      </header>

      {/* Bio */}
      <section className="mb-16 md:mb-24">
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Все проекты в портфолио написаны мной. Последний крупный проект — платформа онлайн-экзаменов для учебного центра
          PROlab Academy: отдельные потоки для учителей и учеников, защита от списывания
          и разграничение доступа на уровне базы через Row Level Security. Кроме неё
          делал систему планирования дня с привычками и целями — и десктопную утилиту
          на C# для передачи файлов по локальной сети.
        </p>
      </section>

      {/* Tech Stack */}
      <section>
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
          Стек
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
