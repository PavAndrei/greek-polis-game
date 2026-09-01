import { AsyncImage } from '@/shared/ui/async-image';
import { useTranslation } from 'react-i18next';

interface GameOverCardProps {
  titleKey: string;
  descriptionKey: string;
  image: string;
  year: number;
  onRestart?: () => void;
}

export const GameOverCard = ({
  titleKey,
  descriptionKey,
  image,
  year,
  onRestart,
}: GameOverCardProps) => {
  const { t } = useTranslation();
  const title = t(titleKey);

  return (
    <article className="mx-auto flex min-h-0 w-full max-w-2xl flex-1 flex-col overflow-hidden rounded-lg border border-fired-clay-brown bg-smoked-bronze shadow-2xl shadow-black/20">
      <div className="flex h-72 shrink-0 flex-col gap-3 p-4 sm:h-60 sm:p-5 md:h-52">
        <p className="h-5 text-center text-xs font-semibold uppercase tracking-normal text-muted-ochre">
          {t('gameOver.year', { year })}
        </p>

        <h2 className="min-h-8 overflow-hidden text-center text-xl font-semibold text-light-sand sm:text-2xl">
          {title}
        </h2>

        <p className="flex flex-1 items-center justify-center overflow-hidden text-center text-sm leading-5 text-aged-clay sm:text-base sm:leading-6">
          {t(descriptionKey)}
        </p>
      </div>

      <div className="flex min-h-0 flex-1 justify-center border-t border-fired-clay-brown bg-charcoal-umber px-4 py-3">
        <AsyncImage
          className="aspect-[3/4] h-full max-h-full rounded-md object-cover"
          src={image}
          alt={title}
          fallbackClassName="aspect-[3/4] h-full max-h-full rounded-md border border-fired-clay-brown bg-smoked-bronze"
        />
      </div>

      <div className="mt-auto grid h-24 shrink-0 border-t border-fired-clay-brown p-4">
        <button
          onClick={onRestart}
          className="flex h-full cursor-pointer items-center justify-center overflow-hidden rounded-md border border-terracotta-red bg-charcoal-umber px-4 py-2 text-center text-sm font-medium text-light-sand transition-colors hover:bg-fired-clay-brown disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          disabled={!onRestart}
        >
          {t('gameOver.restart')}
        </button>
      </div>
    </article>
  );
};
