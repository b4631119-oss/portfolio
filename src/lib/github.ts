const GITHUB_API = "https://api.github.com";
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

export function getGithubUser(): Promise<GithubUser> {
  return githubFetch<GithubUser>(`/users/${encodeURIComponent(getUsername())}`);
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
  const repos = await githubFetch<GithubRepo[]>(
    `/users/${encodeURIComponent(getUsername())}/repos?per_page=100&sort=updated`
  );
  return repos.filter((repo) => !repo.fork);
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
