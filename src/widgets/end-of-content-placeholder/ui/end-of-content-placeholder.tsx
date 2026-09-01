import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const END_OF_CONTENT_IMAGE = '/game-endings/end-of-content-placeholder.webp';

interface EndOfContentPlaceholderProps {
  onRestart?: () => void;
}

export const EndOfContentPlaceholder = ({
  onRestart,
}: EndOfContentPlaceholderProps) => {
  const { t } = useTranslation();
  const [isImageAvailable, setIsImageAvailable] = useState(true);
  const title = t('endOfContent.title');

  return (
    <article className="mx-auto flex min-h-0 w-full max-w-2xl flex-1 flex-col overflow-hidden rounded-lg border border-fired-clay-brown bg-smoked-bronze shadow-2xl shadow-black/20">
      <div className="flex h-44 shrink-0 flex-col gap-3 p-4 sm:h-48 sm:p-5">
        <h2 className="h-16 overflow-hidden text-center text-xl font-semibold text-light-sand sm:text-2xl">
          {title}
        </h2>

        <p className="flex flex-1 items-center justify-center overflow-hidden text-center text-sm leading-6 text-aged-clay sm:text-base sm:leading-7">
          {t('endOfContent.description')}
        </p>
      </div>

      <div className="flex min-h-0 flex-1 justify-center border-t border-fired-clay-brown bg-charcoal-umber px-4 py-3">
        {isImageAvailable ? (
          <img
            className="aspect-[3/4] h-full max-h-full rounded-md object-cover"
            src={END_OF_CONTENT_IMAGE}
            alt={title}
            onError={() => setIsImageAvailable(false)}
          />
        ) : (
          <div className="aspect-[3/4] h-full max-h-full rounded-md border border-fired-clay-brown bg-smoked-bronze" />
        )}
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
