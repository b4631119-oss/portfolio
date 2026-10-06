import { defaultLocale, type Locale } from "@/i18n/config";
import { en } from "@/i18n/en";
import { ru } from "@/i18n/ru";
import { uz } from "@/i18n/uz";
import type { UiDictionary } from "@/i18n/types";

export type { UiDictionary } from "@/i18n/types";

export function getDictionary(locale: Locale = defaultLocale): UiDictionary {
  if (locale === "ru") return ru;
  if (locale === "uz") return uz;
  return en;
}
