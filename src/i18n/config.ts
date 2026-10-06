export const locales = ["en", "ru", "uz"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localeFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path === "/" ? "" : path}`;
}
