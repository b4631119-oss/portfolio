import { defaultLocale, type Locale } from "@/i18n/config";
import { en } from "@/i18n/en";
import { ru } from "@/i18n/ru";
import type { UiDictionary } from "@/i18n/types";

export type { UiDictionary } from "@/i18n/types";

export function getDictionary(locale: Locale = defaultLocale): UiDictionary {
  return locale === "en" ? en : ru;
}
