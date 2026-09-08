import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Self-taught full-stack developer based in Osh, Kyrgyzstan. Building web products from interface to backend with Next.js, TypeScript, React, Python, and PostgreSQL.",
};

const skills = [
  { name: "Next.js", level: 70 },
  { name: "TypeScript", level: 60 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Git", level: 60 },
] as const;

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
          Я full-stack разработчик, который создаёт надёжные и полезные веб-продукты.
          Работаю через весь стек: от интерфейсов и UX до API, баз данных, аутентификации
          и деплоя.
        </p>
      </header>

      {/* Bio */}
      <section className="mb-16 md:mb-24">
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Мне нравится разбираться в том, как устроены системы, решать задачи и
          превращать идеи в работающие продукты. Пишу код 1–2 года, учился
          смешанно: самостоятельно через видео и статьи, а также через курсы.
          Сейчас строю пет-проекты в одиночку — от идеи до продакшн-деплоя.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
          Навыки
        </p>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-ink">{skill.name}</span>
                <span className="font-mono text-sm text-muted">{skill.level}%</span>
              </div>
              <div className="mt-2 h-2 bg-line rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Categories */}
      <section>
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
          Стек
        </p>
        <div className="flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "Tailwind CSS", "React", "Supabase", "PostgreSQL", "Python", "Django", "C#", "Avalonia"].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-muted bg-bg-elevated px-2.5 py-1 rounded border border-line"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}