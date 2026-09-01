import type { Character } from '@/entities/character';
import type { GameEvent } from '@/entities/game-event';
import { ChoiceDirection } from '@/shared/model/game';

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
  return (
    <div>
      {character && (
        <>
          <img src={character.portrait} alt={character.name} />

          <h2>{character.name}</h2>
        </>
      )}

      <p>{event.text}</p>

      <button onClick={() => onChoice('left')}>{event.leftChoice?.text}</button>

      <button onClick={() => onChoice('right')}>
        {event.rightChoice?.text}
      </button>
    </div>
  );
};
