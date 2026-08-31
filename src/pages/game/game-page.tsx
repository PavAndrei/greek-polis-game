import { LanguageSwitcher } from '@/features/language-switcher';
import { ResourcePanel } from '@/widgets/resources-panel';

export const GamePage = () => {
  return (
    <div>
      <LanguageSwitcher />
      <ResourcePanel />
    </div>
  );
};
