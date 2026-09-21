import { getGithubData } from "@/lib/github";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import type { Metadata } from "next";
import { alternatesFor } from "@/i18n/metadata";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomePrinciples } from "@/components/home/HomePrinciples";
import { HomeExperience } from "@/components/home/HomeExperience";
import { HomeStack } from "@/components/home/HomeStack";
import { HomeGithub } from "@/components/home/HomeGithub";
import { HomeContact } from "@/components/home/HomeContact";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ru";
  const d = getDictionary(locale);
  return { title: `Bilolidin — ${d.home.heroTitle}`, description: d.home.heroDescription, alternates: alternatesFor("/", locale), openGraph: { title: `Bilolidin — ${d.home.heroTitle}`, description: d.home.heroDescription, locale: locale === "en" ? "en_US" : "ru_RU", url: locale === "en" ? "/en" : "/" } };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ru";
  const dictionary = getDictionary(locale);
  const { pinnedRepos, languageStats, recentRepos } = await getGithubData();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24 font-sans">
      <HomeHero dictionary={dictionary} />
      <HomeStack dictionary={dictionary} />
      <HomePrinciples dictionary={dictionary} />
      <HomeAbout dictionary={dictionary} />
      <HomeExperience dictionary={dictionary} />
      <HomeGithub pinnedRepos={pinnedRepos} languageStats={languageStats} recentRepos={recentRepos} dictionary={dictionary} />
      <HomeContact dictionary={dictionary} />
    </div>
  );
}
