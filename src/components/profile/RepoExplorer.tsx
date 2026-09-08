"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { Star, GitFork, FileText } from "lucide-react";
import type { GithubRepo } from "@/lib/github";
import { languageColor } from "@/lib/language-colors";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ReactMarkdown = dynamic(() => import("react-markdown"), {
  ssr: false,
  loading: () => <div className="space-y-3" aria-hidden><Skeleton className="h-4 w-3/4" /><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-5/6" /></div>,
});

type SortKey = "stars" | "updated" | "name";

const sortLabels: Record<SortKey, string> = {
  stars: "по звёздам",
  updated: "по дате обновления",
  name: "по названию",
};

export default function RepoExplorer({ repos }: { repos: GithubRepo[] }) {
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("stars");

  const [openRepo, setOpenRepo] = useState<GithubRepo | null>(null);
  const [loadingRepo, setLoadingRepo] = useState<string | null>(null);
  const [errorRepo, setErrorRepo] = useState<string | null>(null);
  // Caches fetched README content (or null when a repo has none) per repo.
  const [readmes, setReadmes] = useState<Record<string, string | null>>({});

  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    for (const repo of repos) {
      if (repo.language) {
        counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([language]) => language);
  }, [repos]);

  const visible = useMemo(() => {
    const filtered = languageFilter
      ? repos.filter((repo) => repo.language === languageFilter)
      : repos;

    return [...filtered].sort((a, b) => {
      switch (sortKey) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        case "updated":
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        case "name":
          return a.name.localeCompare(b.name);
      }
    });
  }, [repos, languageFilter, sortKey]);

  const chips: Array<{ value: string | null; label: string }> = [
    { value: null, label: "Все" },
    ...languages.map((language) => ({ value: language, label: language })),
  ];

  async function toggleReadme(repo: GithubRepo) {
    if (openRepo?.full_name === repo.full_name) {
      setOpenRepo(null);
      return;
    }

    setOpenRepo(repo);
    setErrorRepo(null);

    // Already fetched before — don't refetch.
    if (readmes[repo.full_name] !== undefined) return;

    const [owner] = repo.full_name.split("/");
    setLoadingRepo(repo.full_name);

    try {
      const response = await fetch(
        `/api/readme?owner=${encodeURIComponent(owner)}&repo=${encodeURIComponent(
          repo.name
        )}`
      );
      if (!response.ok) {
        throw new Error(`README request failed with ${response.status}`);
      }
      const data = (await response.json()) as { content: string | null };
      setReadmes((prev) => ({ ...prev, [repo.full_name]: data.content }));
    } catch {
      setErrorRepo(repo.full_name);
    } finally {
      setLoadingRepo(null);
    }
  }

  const markdownComponents = {
    h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
      <h1
        className="font-sans font-semibold text-xl mt-5 mb-2 first:mt-0"
        {...props}
      />
    ),
    h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
      <h2
        className="font-sans font-semibold text-lg mt-5 mb-2 first:mt-0"
        {...props}
      />
    ),
    h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
      <h3
        className="font-sans font-semibold text-base mt-4 mb-1.5 first:mt-0"
        {...props}
      />
    ),
    h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
      <h4
        className="font-sans font-semibold text-sm mt-4 mb-1.5 first:mt-0"
        {...props}
      />
    ),
    h5: (props: React.ComponentPropsWithoutRef<"h5">) => (
      <h5
        className="font-sans font-semibold text-sm mt-4 mb-1.5 first:mt-0"
        {...props}
      />
    ),
    h6: (props: React.ComponentPropsWithoutRef<"h6">) => (
      <h6
        className="font-sans font-semibold text-sm mt-4 mb-1.5 first:mt-0"
        {...props}
      />
    ),
    p: (props: React.ComponentPropsWithoutRef<"p">) => (
      <p className="my-2.5 first:mt-0 last:mb-0" {...props} />
    ),
    a: (props: React.ComponentPropsWithoutRef<"a">) => {
      const external = props.href?.startsWith("http");
      return (
        <a
          {...props}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-accent hover:underline"
        />
      );
    },
    ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
      <ul className="list-disc pl-5 my-2.5 space-y-1" {...props} />
    ),
    ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
      <ol className="list-decimal pl-5 my-2.5 space-y-1" {...props} />
    ),
    blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className="border-l-2 border-line pl-4 my-3 text-muted"
        {...props}
      />
    ),
    hr: (props: React.ComponentPropsWithoutRef<"hr">) => (
      <hr className="border-line my-4" {...props} />
    ),
    pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
      <pre
        className="bg-[color-mix(in_srgb,var(--line)_20%,transparent)] p-3 overflow-x-auto font-mono text-sm my-3"
        {...props}
      />
    ),
    code: (props: React.ComponentPropsWithoutRef<"code">) => {
      const isBlock =
        typeof props.className === "string" &&
        props.className.includes("language-");
      return isBlock ? (
        <code className="font-mono text-sm" {...props} />
      ) : (
        <code
          className="font-mono bg-[color-mix(in_srgb,var(--line)_40%,transparent)] px-1 text-[0.9em]"
          {...props}
        />
      );
    },
    img: (props: React.ComponentPropsWithoutRef<"img">) => {
      // README images are arbitrary third-party content rendered by
      // react-markdown: dimensions and hosts are unknown, so next/image's
      // optimization + remotePatterns allow-list can't be applied here.
      return (
        // eslint-disable-next-line @next/next/no-img-element -- see reason above
        <img
          {...props}
          alt={props.alt ?? ""}
          className="max-w-full h-auto my-3"
        />
      );
    },
    table: (props: React.ComponentPropsWithoutRef<"table">) => (
      <div className="overflow-x-auto my-3">
        <table className="border-collapse text-sm" {...props} />
      </div>
    ),
    th: (props: React.ComponentPropsWithoutRef<"th">) => (
      <th
        className="border border-line px-2 py-1 text-left font-semibold"
        {...props}
      />
    ),
    td: (props: React.ComponentPropsWithoutRef<"td">) => (
      <td className="border border-line px-2 py-1" {...props} />
    ),
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {chips.map((chip) => {
            const active = languageFilter === chip.value;
            return (
              <button
                key={chip.label}
                type="button"
                onClick={() => setLanguageFilter(chip.value)}
                className={clsx(
                  "bg-transparent p-0 font-mono text-sm pb-0.5 border-b-2 transition-colors cursor-pointer",
                  active
                    ? "text-ink border-accent"
                    : "text-muted border-transparent hover:text-ink"
                )}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        <Select
          value={sortKey}
          onValueChange={(value) => setSortKey(value as SortKey)}
        >
          <SelectTrigger
            aria-label="Сортировка репозиториев"
            className="w-full sm:w-[220px] font-mono text-sm"
          >
            <SelectValue placeholder="Сортировка" />
          </SelectTrigger>
          <SelectContent>
            {(Object.keys(sortLabels) as SortKey[]).map((key) => (
              <SelectItem key={key} value={key} className="font-mono text-sm">
                {sortLabels[key]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 text-muted text-sm">Ничего не найдено.</p>
      ) : (
        <ul className="mt-8 border border-line divide-y divide-line">
          {visible.map((repo) => (
            <li key={repo.id} className="p-5 flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
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

                <button
                  type="button"
                  onClick={() => toggleReadme(repo)}
                  aria-label={`Показать README репозитория ${repo.name}`}
                  className="text-muted hover:text-accent transition-colors shrink-0"
                >
                  <FileText size={16} aria-hidden />
                </button>
              </div>

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
                      style={{
                        backgroundColor: languageColor(repo.language),
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-muted" aria-hidden />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={14} className="text-muted" aria-hidden />
                  {repo.forks_count}
                </span>
                {repo.topics.length > 0 && (
                  <span className="flex flex-wrap items-center gap-1.5">
                    {repo.topics.map((topic) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      <Dialog
        open={openRepo !== null}
        onOpenChange={(open) => {
          if (!open) setOpenRepo(null);
        }}
      >
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-mono text-lg">
              {openRepo?.name ?? ""}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {openRepo
                ? `README репозитория ${openRepo.name}`
                : "README репозитория"}
            </DialogDescription>
          </DialogHeader>

          {openRepo &&
            (errorRepo === openRepo.full_name ? (
              <p className="text-muted text-sm">
                Не удалось загрузить README.
              </p>
            ) : loadingRepo === openRepo.full_name ? (
              <div className="space-y-3 py-1" aria-hidden>
                <Skeleton className="h-4 w-3/4 bg-[color-mix(in_srgb,var(--ink)_7%,transparent)]" />
                <Skeleton className="h-4 w-full bg-[color-mix(in_srgb,var(--ink)_7%,transparent)]" />
                <Skeleton className="h-4 w-5/6 bg-[color-mix(in_srgb,var(--ink)_7%,transparent)]" />
              </div>
            ) : readmes[openRepo.full_name] === null ? (
              <p className="text-muted text-sm">
                У этого репозитория нет README.
              </p>
            ) : readmes[openRepo.full_name] ? (
              <div className="text-sm text-ink leading-relaxed">
                <ReactMarkdown components={markdownComponents}>
                  {readmes[openRepo.full_name]}
                </ReactMarkdown>
              </div>
            ) : null)}
        </DialogContent>
      </Dialog>
    </div>
  );
}