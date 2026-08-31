import { en } from './locales/en';
import { ru } from './locales/ru';

export const translationResources = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
} as const;

export const SUPPORTED_LANGUAGES = Object.keys(
  translationResources,
) as SupportedLanguage[];

export type SupportedLanguage = keyof typeof translationResources;
