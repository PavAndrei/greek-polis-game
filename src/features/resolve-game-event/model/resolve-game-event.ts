import type { GameEvent } from '@/entities/game-event';
import type { GameSessionState } from '@/entities/game-session';
import type { ChoiceDirection } from '@/shared/model/game';

import { applyResourceEffects } from './apply-resource-effects';
import { getGameOverReason } from './get-game-over-reason';

export const resolveGameEvent = (
  session: GameSessionState,
  event: GameEvent,
  direction: ChoiceDirection,
): GameSessionState => {
  const choice = direction === 'left' ? event.leftChoice : event.rightChoice;

  if (!choice) {
    return session;
  }

  const nextResources = applyResourceEffects(session.resources, choice.effects);

  const gameOverReason = getGameOverReason(nextResources);

  const isGameOver = gameOverReason !== null;

  return {
    ...session,

    year: session.year + 1,

    resources: nextResources,

    history: [
      ...session.history,
      {
        gameEventId: event.id,
        year: session.year,
        choice: direction,
      },
    ],

    status: isGameOver ? 'game-over' : 'playing',

    gameOverReason,

    currentGameEventId: isGameOver ? null : (choice.nextGameEventId ?? null),
  };
};
