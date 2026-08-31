import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/shared/i18n';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      {SUPPORTED_LANGUAGES.map((language: SupportedLanguage) => (
        <button
          key={language}
          onClick={() => {
            i18n.changeLanguage(language);
          }}
        >
          {language}
        </button>
      ))}
    </div>
  );
};

