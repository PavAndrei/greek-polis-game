import type { Character } from '@/entities/character';
import type { GameEvent } from '@/entities/game-event';
import type { ChoiceDirection } from '@/shared/model/game';
import { useTranslation } from 'react-i18next';

interface GameEventCardProps {
  event: GameEvent;
  character?: Character;
  onChoice: (direction: ChoiceDirection) => void;
}

export const GameEventCard = ({
  event,
  character,
  onChoice,
}: GameEventCardProps) => {
  const { t } = useTranslation();
  const characterName = character ? t(character.nameKey) : undefined;

  return (
    <article className="mx-auto flex min-h-0 w-full max-w-2xl flex-1 flex-col overflow-hidden rounded-lg border border-fired-clay-brown bg-smoked-bronze shadow-2xl shadow-black/20">
      <div className="flex h-56 shrink-0 flex-col gap-3 p-4 sm:h-48 sm:p-5">
        <h2 className="h-7 text-center text-lg font-semibold text-light-sand sm:h-8 sm:text-xl">
          {characterName}
        </h2>

        <p className="flex flex-1 items-center justify-center overflow-hidden text-center text-sm leading-5 text-aged-clay sm:text-base sm:leading-7">
          {t(event.textKey)}
        </p>
      </div>

      {character?.portrait && characterName && (
        <div className="flex min-h-0 flex-1 justify-center border-t border-fired-clay-brown bg-charcoal-umber px-4 py-3">
          <img
            className="aspect-[3/4] h-full max-h-full rounded-md object-cover"
            src={character.portrait}
            alt={characterName}
          />
        </div>
      )}

      <div className="mt-auto grid h-28 shrink-0 gap-3 border-t border-fired-clay-brown p-3 sm:h-24 sm:grid-cols-2 sm:p-4">
        <button
          className="flex h-full cursor-pointer items-center justify-center overflow-hidden rounded-md border border-terracotta-red bg-charcoal-umber px-4 py-2 text-center text-sm font-medium text-light-sand transition-colors hover:bg-fired-clay-brown disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!event.leftChoice}
          onClick={() => onChoice('left')}
        >
          {event.leftChoice ? t(event.leftChoice.textKey) : null}
        </button>

        <button
          className="flex h-full cursor-pointer items-center justify-center overflow-hidden rounded-md border border-terracotta-red bg-charcoal-umber px-4 py-2 text-center text-sm font-medium text-light-sand transition-colors hover:bg-fired-clay-brown disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!event.rightChoice}
          onClick={() => onChoice('right')}
        >
          {event.rightChoice ? t(event.rightChoice.textKey) : null}
        </button>
      </div>
    </article>
  );
};
