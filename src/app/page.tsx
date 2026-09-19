import {
  getGithubUser,
  getGithubRepos,
  getLanguageStats,
  getPinnedRepos,
  type GithubUser,
  type GithubRepo,
  type LanguageStat,
} from "@/lib/github";
import { projects, experiments } from "@/data/projects";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomePrinciples } from "@/components/home/HomePrinciples";
import { HomeExperience } from "@/components/home/HomeExperience";
import { HomeStack } from "@/components/home/HomeStack";
import { HomeGithub } from "@/components/home/HomeGithub";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeFeaturedWork } from "@/components/home/HomeFeaturedWork";
import { HomeOtherWork } from "@/components/home/HomeOtherWork";

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

async function getTotalStars(pinned: GithubRepo[]): Promise<number> {
  return pinned.reduce((sum, repo) => sum + repo.stargazers_count, 0);
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

export default async function Home() {
  const [user, pinnedRepos, languageStats, recentRepos] = await Promise.all([
    getUser(),
    getPinned(),
    getLangs(),
    getRecentRepos(),
  ]);

  const totalStars = await getTotalStars(pinnedRepos);

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
        { value: totalStars, label: "Всего звёзд" },
      ]
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24 font-sans">
      <HomeHero />
      <HomeFeaturedWork />
      <HomeOtherWork />
      <HomeStack />
      <HomePrinciples />
      <HomeAbout />
      <HomeExperience />
      <HomeGithub
        pinnedRepos={pinnedRepos}
        languageStats={languageStats}
        recentRepos={recentRepos}
      />
      <HomeContact />
    </div>
  );
}
