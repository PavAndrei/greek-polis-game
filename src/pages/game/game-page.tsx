import { characters } from '@/entities/character';
import { gameEvents } from '@/entities/game-event';
import {
  useGameSessionStore,
  useResetGameSession,
  useSetGameSession,
} from '@/entities/game-session';

import { LanguageSwitcher } from '@/features/language-switcher';
import { resolveGameEvent } from '@/features/resolve-game-event';
import type { ChoiceDirection } from '@/shared/model/game';
import { EndOfContentPlaceholder } from '@/widgets/end-of-content-placeholder';
import { GameEventCard } from '@/widgets/game-event-card';
import { ResourcePanel } from '@/widgets/resources-panel';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const GamePage = () => {
  const navigate = useNavigate();
  const currentGameSession = useGameSessionStore((state) => state);
  const resetGameSession = useResetGameSession();

  const event = gameEvents.find(
    (event) => event.id === currentGameSession.currentGameEventId,
  );

  const setGameSession = useSetGameSession();

  useEffect(() => {
    console.log('Current Game Session:', currentGameSession);
  }, [currentGameSession]);

  const isEndOfContent =
    currentGameSession.status === 'playing' &&
    currentGameSession.currentGameEventId === null;

  if (!event && !isEndOfContent) {
    return null;
  }

  const character = event?.characterId
    ? characters[event.characterId]
    : undefined;

  const handleChoice = (direction: ChoiceDirection) => {
    if (!event) {
      return;
    }

    const nextSession = resolveGameEvent(currentGameSession, event, direction);

    setGameSession(nextSession);

    if (nextSession.status === 'game-over') {
      navigate('/game-over');
    }
  };

  const handleRestart = () => {
    resetGameSession();

    navigate('/');
  };

  return (
    <main className="h-dvh overflow-hidden px-2 py-3 sm:px-4">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col gap-3">
        <LanguageSwitcher />
        <ResourcePanel />
        {event ? (
          <GameEventCard
            event={event}
            character={character}
            onChoice={handleChoice}
          />
        ) : (
          <EndOfContentPlaceholder onRestart={handleRestart} />
        )}
      </div>
    </main>
  );
};
