const GITHUB_API = "https://api.github.com";
const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const REVALIDATE_SECONDS = 3600;

export interface GithubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  homepage: string | null;
  fork: boolean;
}

export interface LanguageStat {
  language: string;
  percentage: number;
}

export interface GithubData {
  user: GithubUser | null;
  repos: GithubRepo[];
  pinnedRepos: GithubRepo[];
  languageStats: LanguageStat[];
  recentRepos: GithubRepo[];
}

export class GithubApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "GithubApiError";
    this.status = status;
  }
}

function getUsername(): string {
  const username = process.env.GITHUB_USERNAME;
  if (!username) {
    throw new Error(
      "GITHUB_USERNAME is not set — add it to .env.local to fetch GitHub data."
    );
  }
  return username;
}

async function githubFetch<T>(path: string): Promise<T> {
  const token = process.env.GITHUB_TOKEN;

  const url = `${GITHUB_API}${path}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    let detail = "";
    try {
      const body = (await response.json()) as { message?: string };
      detail = body.message ? `: ${body.message}` : "";
    } catch {
      // response body is not JSON; keep the status-only message
    }
    throw new GithubApiError(
      `GitHub API request failed (${response.status})${detail} — GET ${url}`,
      response.status
    );
  }

  return (await response.json()) as T;
}

async function githubGraphQLFetch<T>(query: string, variables: Record<string, unknown>): Promise<T> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is required for GraphQL queries");
  }

  const response = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!response.ok) {
    let detail = "";
    try {
      const body = (await response.json()) as { message?: string };
      detail = body.message ? `: ${body.message}` : "";
    } catch {
      // response body is not JSON
    }
    throw new GithubApiError(
      `GitHub GraphQL request failed (${response.status})${detail}`,
      response.status
    );
  }

  const result = (await response.json()) as { data?: T; errors?: Array<{ message: string }> };
  if (result.errors?.length) {
    throw new GithubApiError(result.errors.map((e) => e.message).join(", "), 400);
  }
  return result.data as T;
}

export function getGithubUser(): Promise<GithubUser> {
  return githubFetch<GithubUser>(`/users/${encodeURIComponent(getUsername())}`);
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
  const repos = await githubFetch<GithubRepo[]>(
    `/users/${encodeURIComponent(getUsername())}/repos?per_page=100&sort=updated`
  );
  return repos.filter((repo) => !repo.fork);
}

function languageStatsFromRepos(repos: GithubRepo[]): LanguageStat[] {
  const counts = new Map<string, number>();
  for (const repo of repos) {
    if (repo.language) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }
  if (counts.size === 0) return [];
  const entries = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([language, count]) => ({ language, percentage: Math.round((count / repos.length) * 100) }));
  if (entries.length <= 5) return entries;
  return [
    ...entries.slice(0, 5),
    { language: "Other", percentage: entries.slice(5).reduce((sum, item) => sum + item.percentage, 0) },
  ];
}

// Pinned repositories are read only from GraphQL. An unavailable token/API means no pinned section.
export async function getPinnedRepos(): Promise<GithubRepo[]> {
  const query = `
    query GetPinnedRepos($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage { name }
              updatedAt
              isFork
            }
          }
        }
      }
    }
  `;

  try {
    const token = process.env.GITHUB_TOKEN;
    if (token) {
      const data = await githubGraphQLFetch<{
        user: {
          pinnedItems: {
            nodes: Array<{
              name: string;
              description: string | null;
              url: string;
              stargazerCount: number;
              forkCount: number;
              primaryLanguage: { name: string } | null;
              updatedAt: string;
              isFork: boolean;
            }>;
          };
        };
      }>(query, { login: getUsername() });

      const nodes = data.user?.pinnedItems?.nodes ?? [];
      return nodes.map((n) => ({
          id: 0, // GraphQL doesn't return numeric ID easily; not used for display
          name: n.name,
          full_name: `${getUsername()}/${n.name}`,
          html_url: n.url,
          description: n.description,
          language: n.primaryLanguage?.name ?? null,
          stargazers_count: n.stargazerCount,
          forks_count: n.forkCount,
          topics: [],
          updated_at: n.updatedAt,
          homepage: null,
          fork: n.isFork,
        }));
    }
  } catch {
    return [];
  }

  return [];
}

export async function getGithubData(): Promise<GithubData> {
  const [userResult, reposResult, pinnedResult] = await Promise.allSettled([
    getGithubUser(),
    getGithubRepos(),
    getPinnedRepos(),
  ]);
  const user = userResult.status === "fulfilled" ? userResult.value : null;
  const repos = reposResult.status === "fulfilled" ? reposResult.value : [];
  const pinnedRepos = pinnedResult.status === "fulfilled" ? pinnedResult.value : [];
  const recentRepos = [...repos]
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, 4);

  return { user, repos, pinnedRepos, languageStats: languageStatsFromRepos(repos), recentRepos };
}

export async function getRepoReadme(
  owner: string,
  repo: string
): Promise<string | null> {
  const token = process.env.GITHUB_TOKEN;
  const url = `${GITHUB_API}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(
    repo
  )}/readme`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.raw+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    next: { revalidate: REVALIDATE_SECONDS },
  });

  // 404 means the repo has no README — a normal case, not an error.
  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    let detail = "";
    try {
      const body = (await response.json()) as { message?: string };
      detail = body.message ? `: ${body.message}` : "";
    } catch {
      // response body is not JSON; keep the status-only message
    }
    throw new GithubApiError(
      `GitHub API request failed (${response.status})${detail} — GET ${url}`,
      response.status
    );
  }

  return response.text();
}