import { characters } from '@/entities/character';
import { gameEvents } from '@/entities/game-event';
import {
  useGameSessionStore,
  useSetGameSession,
} from '@/entities/game-session';

import { LanguageSwitcher } from '@/features/language-switcher';
import { resolveGameEvent } from '@/features/resolve-game-event';
import type { ChoiceDirection } from '@/shared/model/game';
import { GameEventCard } from '@/widgets/game-event-card';
import { ResourcePanel } from '@/widgets/resources-panel';
// import { useEffect } from 'react';

export const GamePage = () => {
  const currentGameSession = useGameSessionStore((state) => state);

  const event = gameEvents.find(
    (event) => event.id === currentGameSession.currentGameEventId,
  );

  const setGameSession = useSetGameSession();

  if (!event) {
    return null;
  }

  const character = event.characterId
    ? characters[event.characterId]
    : undefined;

  const handleChoice = (direction: ChoiceDirection) => {
    const nextSession = resolveGameEvent(currentGameSession, event, direction);

    setGameSession(nextSession);
  };

  // useEffect(() => {
  //   console.log('Current Game Session:', currentGameSession);
  // }, [currentGameSession]);

  return (
    <div className="max-w-362.5 w-full mx-auto px-2.5 flex flex-col gap-8 py-5">
      <LanguageSwitcher />
      <ResourcePanel />
      <GameEventCard
        event={event}
        character={character}
        onChoice={handleChoice}
      />
    </div>
  );
};
