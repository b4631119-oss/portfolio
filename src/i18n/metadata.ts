import { siteUrl } from "@/data/site";
import { localePath, locales, type Locale } from "@/i18n/config";

export { localePath };

export function openGraphLocale(locale: Locale): string {
  return { en: "en_US", ru: "ru_RU", uz: "uz_UZ" }[locale];
}

export function alternatesFor(path: string, locale: Locale) {
  return {
    canonical: localePath(path, locale),
    languages: {
      ru: `${siteUrl}${localePath(path, "ru")}`,
      en: `${siteUrl}${localePath(path, "en")}`,
      uz: `${siteUrl}${localePath(path, "uz")}`,
      "x-default": `${siteUrl}${path}`,
    },
  };
}

export function socialMetadata(path: string, locale: Locale, title: string, description: string, image = "/opengraph-image") {
  const url = `${siteUrl}${localePath(path, locale)}`;
  const ogLocale = openGraphLocale(locale);
  return {
    openGraph: {
      type: "website" as const,
      title,
      description,
      url,
      locale: ogLocale,
      alternateLocale: locales.filter((item) => item !== locale).map(openGraphLocale),
      images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image" as const, title, description, images: [image] },
  };
}
