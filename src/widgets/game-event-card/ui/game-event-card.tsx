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
    <article className="mx-auto flex w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-fired-clay-brown bg-smoked-bronze shadow-2xl shadow-black/20">
      <div className="flex flex-col gap-5 p-6">
        {character && (
          <h2 className="text-center text-xl font-semibold text-light-sand">
            {characterName}
          </h2>
        )}

        <p className="text-center text-lg leading-8 text-aged-clay">
          {t(event.textKey)}
        </p>

      </div>

      {character?.portrait && characterName && (
        <div className="flex justify-center border-t border-fired-clay-brown bg-charcoal-umber px-6 py-5">
          <img
            className="aspect-[3/4] h-72 rounded-md object-cover"
            src={character.portrait}
            alt={characterName}
          />
        </div>
      )}

      <div className="grid gap-3 border-t border-fired-clay-brown p-4 sm:grid-cols-2">
        <button
          className="cursor-pointer rounded-md border border-terracotta-red bg-charcoal-umber px-4 py-3 text-sm font-medium text-light-sand transition-colors hover:bg-fired-clay-brown disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!event.leftChoice}
          onClick={() => onChoice('left')}
        >
          {event.leftChoice ? t(event.leftChoice.textKey) : null}
        </button>

        <button
          className="cursor-pointer rounded-md border border-terracotta-red bg-charcoal-umber px-4 py-3 text-sm font-medium text-light-sand transition-colors hover:bg-fired-clay-brown disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!event.rightChoice}
          onClick={() => onChoice('right')}
        >
          {event.rightChoice ? t(event.rightChoice.textKey) : null}
        </button>
      </div>
    </article>
  );
};
