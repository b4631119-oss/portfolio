import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowLeft, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "PROlab Academy — Case Study",
  description:
    "Educational platform for teachers and students in Osh, Kyrgyzstan. Programming courses (JavaScript, HTML, CSS) and online exam system with role-based access. Built with Next.js, TypeScript, Supabase, PostgreSQL, JWT, RLS, E2E Testing.",
};

const techGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "TypeScript"],
  },
  {
    label: "Backend & Data",
    items: ["Supabase", "PostgreSQL", "JWT", "RLS"],
  },
  {
    label: "Quality",
    items: ["E2E Testing"],
  },
] as const;

const archNodes = [
  { label: "Next.js" },
  { label: "Server Actions" },
  { label: "Supabase" },
  { label: "PostgreSQL" },
] as const;

const features = [
  "Authentication",
  "Teacher dashboard",
  "Student system",
  "Exams",
  "Tests",
  "Results",
  "Answer persistence",
  "RLS-based access control",
  "E2E testing",
  "Production deployment",
] as const;

export default function ProLabAcademyCaseStudy() {
  return (
    <article className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 font-sans">
      {/* Back link */}
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm mb-12"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to work
      </Link>

      {/* Header */}
      <header className="space-y-6 mb-16 md:mb-24">
        <div className="flex flex-wrap gap-2">
          <span className="font-mono text-xs text-muted uppercase tracking-wide">
            Solo Developer
          </span>
          <Badge variant="secondary" className="font-mono text-xs">
            Featured
          </Badge>
        </div>
        <h1 className="font-sans font-bold text-ink text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
          PROlab Academy
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          Образовательная платформа для учителей и учеников в Оше, Кыргызстан —
          курсы программирования и система онлайн-экзаменов с ролевым доступом.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="shadow-none font-bold">
            <a
              href="https://www.prolab-academy.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} className="mr-2" aria-hidden="true" />
              Live Project
            </a>
          </Button>
        </div>
      </header>

      {/* Overview */}
      <section className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
          Overview
        </p>
        <div className="prose prose-invert max-w-none text-muted leading-relaxed space-y-4">
          <p>
            PROlab Academy — это образовательная платформа, созданная для учителей и
            учеников в Оше, Кыргызстан. Платформа предоставляет доступ к курсам
            программирования для начинающих (JavaScript, HTML, CSS) и включает
            полноценную систему онлайн-экзаменов и тестирования.
          </p>
          <p>
            Ключевая особенность — раздельные потоки для учителей и учеников:
            учителя могут создавать курсы, экзамены, просматривать результаты и
            прогресс класса, а ученики — проходить обучение, сдавать тесты и
            видеть свои оценки. Вся логика доступа построена на Row Level Security
            (RLS) в PostgreSQL через Supabase.
          </p>
        </div>
      </section>

      {/* Role */}
      <section className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
          Role
        </p>
        <div className="prose prose-invert max-w-none text-muted leading-relaxed space-y-4">
          <p>
            Solo Developer — спроектировал, разработал и задеплоил всю платформу
            самостоятельно: от архитектуры базы данных и настройки Supabase до
            фронтенда на Next.js, реализации аутентификации, ролевой модели доступа,
            системы экзаменов и E2E-тестов.
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16 md:mb-24" aria-labelledby="architecture-heading">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-6" id="architecture-heading">
          Architecture
        </p>
        <div className="flex flex-col items-center gap-0" aria-hidden="true">
          {archNodes.map((node, index) => (
            <div
              key={node.label}
              className={`
                relative flex items-center gap-3 bg-bg-elevated border border-line rounded-[var(--radius)]
                px-4 py-3 w-full max-w-xs transition-all duration-500 ease-out
                ${index < archNodes.length - 1 ? 'pb-8' : 'pb-3'}
              `}
            >
              {/* Connecting line + dot (except last node) - positioned relative to this node */}
              {index < archNodes.length - 1 && (
                <>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1px] h-6 bg-line"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-2 h-2 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                </>
              )}
              <span className="font-mono text-xs text-muted">
                {node.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted text-center">
          Next.js → Server Actions → Supabase → PostgreSQL
        </p>
      </section>

      {/* Features */}
      <section className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
          Features
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-muted"
            >
              <Check
                size={16}
                className="text-accent shrink-0"
                aria-hidden="true"
              />
              <span className="font-mono text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
          Tech Stack
        </p>
        <div className="space-y-6">
          {techGroups.map((group) => (
            <div key={group.label} className="space-y-3">
              <span className="font-mono text-xs text-muted uppercase tracking-wide">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
          Notes
        </p>
        <div className="prose prose-invert max-w-none text-muted leading-relaxed">
          <p>
            Главная задача при разработке — правильно смоделировать доступ для двух
            принципиально разных типов пользователей (учителя и ученики) и обеспечить
            изоляцию данных на уровне базы. RLS в Supabase/PostgreSQL позволил
            решить это декларативно, без распыления логики авторизации по
            приложению. Работа с Server Actions в Next.js упростила мутации данных
            и убрала необходимость в отдельном API-слое.
          </p>
        </div>
      </section>

      {/* Footer actions */}
      <footer className="pt-8 border-t border-line flex flex-wrap gap-4">
        <Button asChild size="lg" className="shadow-none font-bold">
          <a
            href="https://www.prolab-academy.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} className="mr-2" aria-hidden="true" />
            Live Project
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="font-bold"
        >
          <Link href="/#work">
            <ArrowLeft size={18} className="mr-2" aria-hidden="true" />
            Back to work
          </Link>
        </Button>
      </footer>
    </article>
  );
}