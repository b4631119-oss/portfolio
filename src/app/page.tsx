import React from "react";
import Link from "next/link";
import { getGithubUser, getGithubRepos, getLanguageStats, getPinnedRepos, type GithubUser, type GithubRepo, type LanguageStat } from "@/lib/github";
import { projects, experiments } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, ShieldCheck, Puzzle, TrendingUp, Code, Server, Database, GitBranch, Star, GitFork, ExternalLink, Github, Send, Mail } from "lucide-react";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Reveal } from "@/components/ui/reveal";

const capabilities = [
  "Frontend",
  "Backend",
  "Database",
  "APIs",
  "Authentication",
  "Testing",
  "Deployment",
] as const;

const systemNodes = [
  { label: "Frontend", icon: "⚡" },
  { label: "API", icon: "⇄" },
  { label: "Backend", icon: "⚙️" },
  { label: "Database", icon: "🗄" },
] as const;

const workPrinciples = [
  {
    icon: Workflow,
    title: "Мыслю системно",
    description:
      "Понимаю всю цепочку: от интерфейса через API и бэкенд до базы данных. Не изолированные куски, а цельная архитектура.",
  },
  {
    icon: ShieldCheck,
    title: "Строю для продакшена",
    description:
      "Учитываю безопасность, валидацию, обработку ошибок, производительность, тестирование и деплой — не только «чтобы работало на моей машине».",
  },
  {
    icon: Puzzle,
    title: "Решаю задачи",
    description:
      "Умею находить и разбираться в сложных багах, понимать причину, а не просто копировать решения со Stack Overflow.",
  },
  {
    icon: TrendingUp,
    title: "Продолжаю учиться",
    description:
      "Постоянно расширяю стек: от фронтенда (Next.js, TypeScript, Tailwind) в сторону полного цикла — Supabase, PostgreSQL, Python, Django, C#.",
  },
] as const;

const techCategories = [
  {
    label: "Frontend",
    icon: Code,
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    icon: Server,
    items: ["Python", "Django", "C#", "Avalonia", "REST API"],
  },
  {
    label: "Database",
    icon: Database,
    items: ["PostgreSQL", "Supabase", "Firebase"],
  },
  {
    label: "Other",
    icon: GitBranch,
    items: ["Git", "GitHub", "Authentication", "Testing", "Deployment", "Bots/APIs"],
  },
] as const;

async function getUser(): Promise<GithubUser | null> {
  try {
    return await getGithubUser();
  } catch {
    return null;
  }
}

async function getPinned(): Promise<GithubRepo[]> {
  try {
    return await getPinnedRepos();
  } catch {
    return [];
  }
}

async function getLangs(): Promise<LanguageStat[]> {
  try {
    return await getLanguageStats();
  } catch {
    return [];
  }
}

async function getRecentRepos(): Promise<GithubRepo[]> {
  try {
    const repos = await getGithubRepos();
    return [...repos].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).slice(0, 4);
  } catch {
    return [];
  }
}

function formatRelativeDate(iso: string): string {
  const then = new Date(iso).getTime();
  const seconds = Math.round((then - Date.now()) / 1000);
  const rtf = new Intl.RelativeTimeFormat("ru", { numeric: "auto" });

  const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 31536000],
    ["month", 2592000],
    ["week", 604800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ];

  for (const [unit, secondsPerUnit] of units) {
    if (Math.abs(seconds) >= secondsPerUnit) {
      return rtf.format(Math.round(seconds / secondsPerUnit), unit);
    }
  }
  return "только что";
}

export default async function Home() {
  const [user, pinnedRepos, languageStats, recentRepos] = await Promise.all([
    getUser(),
    getPinned(),
    getLangs(),
    getRecentRepos(),
  ]);

  const stats: Array<{ value: number; label: string }> = [
    ...(user
      ? [
          { value: user.public_repos, label: "Репозитории" },
          { value: user.followers, label: "Подписчики" },
        ]
      : []),
    { value: projects.length + experiments.length, label: "Проекты" },
  ];

  const githubStats = user
    ? [
        { value: user.public_repos, label: "Репозитории" },
        { value: user.followers, label: "Подписчики" },
      ]
    : [];

  const opacitySteps = [1, 0.8, 0.6, 0.4, 0.25, 0.15];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Glow surface background */}
        <div
          className="absolute inset-0 glow-surface pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              {/* Availability line */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs tracking-widest text-muted uppercase">
                  Open to work
                </span>
                <span
                  className="relative h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
                  aria-hidden="true"
                />
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <p className="font-sans text-muted text-2xl md:text-3xl font-medium leading-tight">
                  Bilol
                </p>
                <h1 className="font-sans font-bold text-ink text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
                  Full-Stack Developer
                </h1>
              </div>

              {/* Supporting statement */}
              <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                Я создаю цифровые продукты — от интерфейса до backend.
              </p>

              {/* Tech signature */}
              <p className="font-mono text-sm text-muted">
                React · Next.js · TypeScript · Python · Django · PostgreSQL
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="shadow-none font-bold">
                  <Link href="/#work">Смотреть проекты</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-bold"
                >
                  <a
                    href="https://github.com/b4631119-oss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: System diagram (desktop only) */}
            <div
              className="hidden lg:block"
              aria-hidden="true"
            >
              <div className="flex flex-col items-center gap-0">
                {systemNodes.map((node, index) => (
                  <Reveal key={node.label} delay={index * 100}>
                    <div
                      className={`
                        relative flex items-center gap-3 bg-bg-elevated border border-line rounded-[var(--radius)]
                        px-4 py-3 w-full max-w-xs transition-all duration-500 ease-out
                        ${index < systemNodes.length - 1 ? 'pb-8' : 'pb-3'}
                      `}
                    >
                      {index < systemNodes.length - 1 && (
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
                      <span className="text-base" aria-hidden="true">
                        {node.icon}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {node.label}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="mt-24 md:mt-32" id="credibility" aria-labelledby="credibility-heading">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <Reveal>
            {/* Section heading */}
            <h2 id="credibility-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
              Создаю реальные продукты
            </h2>

            {/* Capability tags row */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-x-6 md:gap-y-3">
              {capabilities.map((cap) => (
                <span key={cap} className="font-mono text-sm text-muted text-center">
                  {cap}
                </span>
              ))}
            </div>

            {/* Stats row */}
            {stats.length > 0 && (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-8 sm:gap-y-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`px-6 first:pl-0 sm:pl-6 ${index > 0 ? 'pt-2 sm:pt-0' : ''}`}
                  >
                    <div className="font-sans font-bold text-ink text-4xl md:text-5xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-muted font-mono uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-24 md:mt-32" id="about" aria-labelledby="about-heading">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <Reveal>
            <h2 id="about-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
              Обо мне
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted max-w-2xl leading-relaxed">
              <p>
                Я full-stack разработчик, который создаёт надёжные и полезные веб-продукты.
                Работаю через весь стек: от интерфейсов и UX до API, баз данных, аутентификации
                и деплоя.
              </p>
              <p>
                Мне нравится разбираться в том, как устроены системы, решать задачи и
                превращать идеи в работающие продукты.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline" size="lg" className="font-bold font-mono text-sm tracking-wider">
                <Link href="/about">Подробнее</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="mt-24 md:mt-32" id="how-i-work" aria-labelledby="how-i-work-heading">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <Reveal>
            <h2 id="how-i-work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-12">
              Как я работаю
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
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                  <p className="font-semibold text-ink text-lg">Frontend Development</p>
                  <p className="text-sm text-muted">Стажировка</p>
                  <p className="text-sm text-muted mt-1">
                    Работаю над реальными фронтенд-проектами, развиваю навыки продакшен-разработки.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mt-24 md:mt-32" id="stack" aria-labelledby="stack-heading">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <Reveal>
            <h2 id="stack-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-12">
              Стек технологий
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {techCategories.map((category, index) => (
              <Reveal key={category.label} delay={index * 80}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <category.icon size={16} className="text-accent" aria-hidden="true" />
                    <span className="font-mono text-xs text-accent uppercase tracking-wide">
                      {category.label}
                    </span>
                  </div>
                  <ul className="space-y-2.5" role="list">
                    {category.items.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub / Open Source Section */}
      <section className="mt-24 md:mt-32" id="github" aria-labelledby="github-heading">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <Reveal>
            <h2 id="github-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-8">
              Open Source / GitHub
            </h2>
          </Reveal>

          {/* Stats row */}
          {githubStats.length > 0 && (
            <Reveal delay={80}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-8 sm:gap-y-6">
                {githubStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`px-6 first:pl-0 sm:pl-6 ${index > 0 ? 'pt-2 sm:pt-0' : ''}`}
                  >
                    <div className="font-sans font-bold text-ink text-4xl md:text-5xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-muted font-mono uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* Pinned Repositories */}
          {pinnedRepos.length > 0 && (
            <Reveal delay={160}>
              <div className="mt-12">
                <h3 id="pinned-repos-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
                  Закреплённые репозитории
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {pinnedRepos.map((repo, index) => (
                    <Reveal key={repo.name} delay={index * 80}>
                      <article className="bg-bg-elevated border border-line rounded-[var(--radius)] p-5 flex flex-col hover:border-accent/50 transition-colors duration-300">
                        <h3 className="font-sans font-semibold text-ink">
                          <Link
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                          >
                            {repo.name}
                          </Link>
                        </h3>
                        {repo.description && (
                          <p className="mt-2 text-sm text-muted line-clamp-2 leading-relaxed flex-1">
                            {repo.description}
                          </p>
                        )}
                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
                          {repo.language && (
                            <span className="flex items-center gap-1.5">
                              <span
                                className="w-2 h-2 rounded-full bg-accent"
                                aria-hidden="true"
                              />
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Star size={12} className="text-muted" aria-hidden="true" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork size={12} className="text-muted" aria-hidden="true" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* Languages segmented bar */}
          {languageStats.length > 0 && (
            <Reveal delay={240}>
              <div className="mt-12">
                <h3 id="languages-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
                  Языки
                </h3>
                <div className="h-2 rounded-full overflow-hidden flex bg-line" role="img" aria-label="Language distribution">
                  {languageStats.map((stat, index) => (
                    <div
                      key={stat.language}
                      className="h-full"
                      style={{
                        flexBasis: `${stat.percentage}%`,
                        opacity: opacitySteps[index] ?? opacitySteps[opacitySteps.length - 1],
                        backgroundColor: index === 0 ? "var(--accent)" : "var(--accent)",
                      }}
                      title={`${stat.language}: ${stat.percentage}%`}
                    />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted font-mono">
                  {languageStats.map((stat, index) => (
                    <span
                      key={stat.language}
                      className="flex items-center gap-1.5"
                      style={{ opacity: opacitySteps[index] ?? opacitySteps[opacitySteps.length - 1] }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--accent)" }}
                        aria-hidden="true"
                      />
                      {stat.language} {stat.percentage}%
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* Recent Activity */}
          {recentRepos.length > 0 && (
            <Reveal delay={320}>
              <div className="mt-12">
                <h3 id="recent-activity-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
                  Недавняя активность
                </h3>
                <ul className="space-y-3" role="list">
                  {recentRepos.map((repo, index) => (
                    <Reveal key={repo.id} delay={index * 60}>
                      <li className="flex items-center justify-between gap-4">
                        <Link
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm text-ink hover:text-accent transition-colors"
                        >
                          {repo.name}
                        </Link>
                        <time
                          dateTime={repo.updated_at}
                          className="text-sm text-muted shrink-0"
                        >
                          {formatRelativeDate(repo.updated_at)}
                        </time>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* Fallback if all GitHub data failed */}
          {(pinnedRepos.length === 0 && languageStats.length === 0 && recentRepos.length === 0) && (
            <p className="mt-8 text-muted text-center">
              Не удалось загрузить данные GitHub. Попробуйте обновить страницу позже.
            </p>
          )}

          {/* View full profile link */}
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="font-bold font-mono text-sm tracking-wider">
              <Link href="/profile">
                View full GitHub profile
                <ExternalLink size={18} className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-24 md:mt-32 relative" id="contact" aria-labelledby="contact-heading">
        <div className="absolute inset-0 glow-surface pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 id="contact-heading" className="font-sans font-bold text-ink text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Давайте создадим что-то
          </h2>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
            Есть идея, проект или предложение? Давайте превратим это в реальный продукт.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="outline" size="lg" className="font-bold">
              <a
                href="https://github.com/b4631119-oss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold">
              <a
                href="https://t.me/Teg123489"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Send size={18} aria-hidden="true" />
                Telegram
              </a>
            </Button>
            <Button asChild size="lg" className="shadow-none font-bold">
              <a
                href="mailto:bilolmen99876@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail size={18} aria-hidden="true" />
                bilolmen99876@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="mt-24 md:mt-32" id="work" aria-labelledby="work-heading">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <Reveal>
            {/* Section heading */}
            <h2 id="work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-2">
              Featured Work
            </h2>
            <p className="text-muted">Ключевые проекты, которые я создал.</p>
          </Reveal>

          {/* Featured Projects Grid - 3 cards */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard
                  project={project}
                  variant="compact"
                  showLiveLink={true}
                />
              </Reveal>
            ))}
          </div>

          {/* PROlab Academy Case Study Link */}
          <Reveal delay={240}>
            <div className="mt-10 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-bold font-mono text-sm tracking-wider"
              >
                <Link href="/projects/prolab-academy">
                  PROlab Academy — Case Study
                  <ArrowRight size={18} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other Experiments Section */}
      <section className="mt-24 md:mt-32" id="more-work" aria-labelledby="more-work-heading">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <Reveal>
            {/* Section heading */}
            <h2 id="more-work-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-2">
              Other Experiments
            </h2>
            <p className="text-muted">Другие эксперименты и технические проекты.</p>
          </Reveal>

          {/* Experiments Grid */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {experiments.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard
                  project={project}
                  variant="compact"
                  showLiveLink={false}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}