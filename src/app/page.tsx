import { getGithubData } from "@/lib/github";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomePrinciples } from "@/components/home/HomePrinciples";
import { HomeExperience } from "@/components/home/HomeExperience";
import { HomeStack } from "@/components/home/HomeStack";
import { HomeGithub } from "@/components/home/HomeGithub";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeFeaturedWork } from "@/components/home/HomeFeaturedWork";
import { HomeOtherWork } from "@/components/home/HomeOtherWork";

export default async function Home() {
  const { pinnedRepos, languageStats, recentRepos } = await getGithubData();

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
