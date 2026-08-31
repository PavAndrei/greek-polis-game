import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/shared/i18n';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="ml-auto mr-0 flex items-center gap-2.5">
      {SUPPORTED_LANGUAGES.map((language: SupportedLanguage) => (
        <button
          className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors duration-200 ${i18n.language === language ? 'bg-terracotta-red text-light-sand' : 'bg-smoked-bronze text-dusty-winefired-clay-brown hover:bg-terracotta-red hover:text-light-sand cursor-pointer'}`}
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
