import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowLeft, Check, Github, Server, Database, Zap } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ui/architecture-diagram";
import { ProjectScreenshots } from "@/components/projects/CaseStudyLayout";

const cover = projects.find((project) => project.id === "prolab-academy")?.image;
const projectScreenshots = cover
  ? [
      cover,
      { src: "/projects/prolab-academy/1.webp", alt: "Экран экзамена ученика в PROlab Academy" },
      { src: "/projects/prolab-academy/2.webp", alt: "Кабинет учителя в PROlab Academy" },
    ]
  : [];

export const metadata: Metadata = {
  title: "PROlab Academy — Case Study",
  description:
    "Production educational platform for teachers and students in Osh, Kyrgyzstan. Programming courses (JavaScript, HTML, CSS) and online exam system with role-based access via RLS. Built with Next.js, TypeScript, Supabase, PostgreSQL, JWT, RLS, E2E Testing.",
  alternates: { canonical: "/projects/prolab-academy" },
  openGraph: {
    title: "PROlab Academy — Case Study",
    description:
      "Production educational platform for teachers and students in Osh, Kyrgyzstan. Programming courses (JavaScript, HTML, CSS) and online exam system with role-based access via RLS. Built with Next.js, TypeScript, Supabase, PostgreSQL, JWT, RLS, E2E Testing.",
    url: "/projects/prolab-academy",
    images: cover ? [{ url: cover.src, alt: cover.alt }] : undefined,
  },
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
  { label: "Next.js", icon: <Zap className="w-5 h-5" aria-hidden="true" /> },
  { label: "Server Actions", icon: <Server className="w-5 h-5" aria-hidden="true" /> },
  { label: "Supabase", icon: <Zap className="w-5 h-5" aria-hidden="true" /> },
  { label: "PostgreSQL", icon: <Database className="w-5 h-5" aria-hidden="true" /> },
];

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
        Назад к проектам
      </Link>

      {/* Preview */}
      {cover && (
        <div className="mt-8 mb-12 md:mb-16 relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius)] border border-line bg-bg-elevated">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover"
          />
        </div>
      )}

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
              Live
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold">
            <a
              href="https://github.com/b4631119-oss/academy-exam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" aria-hidden="true" />
              Код
            </a>
          </Button>
        </div>
      </header>

      {/* Overview */}
      <section className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
          Обзор
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
          Роль
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
          Архитектура
        </p>
        <ArchitectureDiagram nodes={archNodes} />
        <p className="mt-8 text-sm text-muted text-center">
          Next.js → Server Actions → Supabase → PostgreSQL
        </p>
      </section>

      {/* Features */}
      <section className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
          Функции
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
          Стек технологий
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

      <div className="mb-16 md:mb-24">
        <ProjectScreenshots images={projectScreenshots} />
      </div>

      {/* Notes */}
      <section className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
          Примечания
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
        <Button asChild size="lg" variant="outline" className="font-bold">
          <a
            href="https://github.com/b4631119-oss/academy-exam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} className="mr-2" aria-hidden="true" />
            GitHub
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
            Назад к проектам
          </Link>
        </Button>
      </footer>
    </article>
  );
}