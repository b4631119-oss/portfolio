import Link from "next/link";
import { Star } from "lucide-react";
import { getGithubRepos, getGithubUser, type GithubRepo, type GithubUser } from "@/lib/github";
import { languageColor } from "@/lib/language-colors";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const skills = ["Next.js", "TypeScript", "React", "Tailwind CSS"];

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
  let repos: GithubRepo[] = [];
  let user: GithubUser | null = null;
  let loadError = false;

  try {
    [repos, user] = await Promise.all([getGithubRepos(), getGithubUser()]);
  } catch {
    loadError = true;
  }

  repos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4);

  const stats: Array<{ value: number; label: string }> = [
    ...(user
      ? [
          { value: user.public_repos, label: "репозиториев" },
          { value: user.followers, label: "подписчиков" },
        ]
      : []),
    { value: projects.length, label: "проектов" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 pt-8 md:pt-12 pb-24 font-sans">
      <section>
        <h1 className="font-sans font-bold text-ink text-6xl md:text-8xl leading-[0.95] tracking-tight">
          Привет, я Bilol
        </h1>

        {/* Gradient underline — subtle luxury accent-2 touch */}
        <div
          className="mt-3 h-[2px] w-48"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          }}
          aria-hidden
        />

        <div className="mt-6 w-fit max-w-full">
          <span className="font-mono typewriter text-ink">
            изучаю Next.js, TypeScript и React
          </span>
        </div>

        <p className="mt-8 text-muted text-lg leading-relaxed max-w-[65ch]">
          Строю многостраничные веб-приложения с нуля — разбираюсь в App Router,
          динамических маршрутах и компонентном подходе. Сейчас изучаю Next.js,
          TypeScript и React и применяю знания на практике.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <Button asChild size="lg" className="shadow-none font-bold">
            <Link href="/projects">Проекты</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold">
            <Link href="/contact">Связаться</Link>
          </Button>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <h2 className="font-mono text-lg text-ink">Стек</h2>

        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-3xl md:text-4xl text-muted hover:text-ink transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <div className="flex flex-wrap gap-y-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l border-line first:border-l-0 px-6 first:pl-0"
            >
              <div className="font-sans font-bold text-ink text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h2 className="font-mono text-lg text-ink">Репозитории</h2>
          <Link
            href="/profile"
            className="font-mono text-sm text-accent hover:underline"
          >
            все репозитории
          </Link>
        </div>

        {loadError ? (
          <p className="mt-6 text-muted">
            Не удалось загрузить репозитории — попробуйте позже.
          </p>
        ) : repos.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <article
                key={repo.id}
                className="border border-line p-5 flex flex-col gap-3"
              >
                <h3 className="font-mono text-base text-ink leading-snug">
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
                  <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                    {repo.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted mt-auto pt-1">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        aria-hidden
                        className="h-2 w-2"
                        style={{ backgroundColor: languageColor(repo.language) }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={14} className="text-muted" aria-hidden />
                    {repo.stargazers_count}
                  </span>
                  <time dateTime={repo.updated_at} title={repo.updated_at}>
                    {formatRelativeDate(repo.updated_at)}
                  </time>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}
