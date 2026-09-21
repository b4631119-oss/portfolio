import { siteUrl } from "@/data/site";
import type { Locale } from "@/i18n/config";

export function localePath(path: string, locale: Locale): string {
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}

export function alternatesFor(path: string, locale: Locale) {
  return {
    canonical: localePath(path, locale),
    languages: {
      ru: `${siteUrl}${localePath(path, "ru")}`,
      en: `${siteUrl}${localePath(path, "en")}`,
      "x-default": `${siteUrl}${path}`,
    },
  };
}

export function socialMetadata(path: string, locale: Locale, title: string, description: string, image = "/opengraph-image") {
  const url = `${siteUrl}${localePath(path, locale)}`;
  const ogLocale = locale === "en" ? "en_US" : "ru_RU";
  return {
    openGraph: {
      type: "website" as const,
      title,
      description,
      url,
      locale: ogLocale,
      alternateLocale: locale === "en" ? ["ru_RU"] : ["en_US"],
      images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image" as const, title, description, images: [image] },
  };
}
