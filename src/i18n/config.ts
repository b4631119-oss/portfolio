export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";
export const ENABLE_EN = false;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
