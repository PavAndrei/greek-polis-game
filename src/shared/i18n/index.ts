import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import {
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
  translationResources,
} from './languages';

const DEFAULT_LANGUAGE: SupportedLanguage = 'ru';
const FALLBACK_LANGUAGE: SupportedLanguage = 'en';

void i18n.use(initReactI18next).init({
  resources: translationResources,

  lng: DEFAULT_LANGUAGE,

  fallbackLng: FALLBACK_LANGUAGE,

  interpolation: {
    escapeValue: false,
  },
});

export { SUPPORTED_LANGUAGES };
export { i18n };
export type { SupportedLanguage };
