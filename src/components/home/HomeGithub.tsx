import Link from "next/link";
import { ExternalLink, GitFork, Star } from "lucide-react";
import type { GithubRepo, LanguageStat } from "@/lib/github";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getDictionary, type UiDictionary } from "@/i18n";

interface HomeGithubProps {
  pinnedRepos: GithubRepo[];
  languageStats: LanguageStat[];
  recentRepos: GithubRepo[];
}

const opacitySteps = [1, 0.8, 0.6, 0.4, 0.25, 0.15];

function formatRelativeDate(iso: string, locale: "ru" | "en", justNow: string): string {
  const then = new Date(iso).getTime();
  const seconds = Math.round((then - Date.now()) / 1000);
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

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
  return justNow;
}

export function HomeGithub({ pinnedRepos, languageStats, recentRepos, dictionary }: HomeGithubProps & { dictionary?: UiDictionary }) {
  const d = dictionary ?? getDictionary();
  return (
    <section className="mt-24 md:mt-32" id="github" aria-labelledby="github-heading">
      <h2 id="github-heading" className="sr-only">GitHub</h2>
      {/* Pinned Repositories */}
      {pinnedRepos.length > 0 && (
        <Reveal delay={160}>
          <div className="mt-12">
            <h3 id="pinned-repos-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
              {d.home.pinned}
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
      
      {languageStats.length > 0 && (
        <Reveal delay={240}>
          <div className="mt-12">
            <h3 id="languages-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
              {d.home.languages}
            </h3>
            <div className="h-2 rounded-full overflow-hidden flex bg-line" role="img" aria-label={d.aria.languageChart}>
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
              {d.home.recent}
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
                      {formatRelativeDate(repo.updated_at, d.locale, d.home.relativeJustNow)}
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
          {d.home.githubError}
        </p>
      )}

      {/* View full profile link */}
      <div className="mt-10 text-center">
        <Button asChild variant="outline" size="lg" className="font-bold font-mono text-sm tracking-wider">
          <Link href={`${d.locale === "en" ? "/en" : ""}/profile`}>
            {d.buttons.profile}
            <ExternalLink size={18} className="ml-2" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
