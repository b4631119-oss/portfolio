import { defaultLocale, type Locale } from "@/i18n/config";
import { ru } from "@/i18n/ru";
import type { UiDictionary } from "@/i18n/types";

export type { UiDictionary } from "@/i18n/types";

export function getDictionary(locale: Locale = defaultLocale): UiDictionary {
  if (locale !== "ru") throw new Error("English dictionary is not enabled yet");
  return ru;
}
