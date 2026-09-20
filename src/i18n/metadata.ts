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
