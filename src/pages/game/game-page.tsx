import { LanguageSwitcher } from '@/features/language-switcher';
import { ResourcePanel } from '@/widgets/resources-panel';

export const GamePage = () => {
  return (
    <div className="max-w-362.5 w-full mx-auto px-2.5">
      <LanguageSwitcher />
      <ResourcePanel />
    </div>
  );
};
