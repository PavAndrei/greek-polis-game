import type { GameEvent } from '@/entities/game-event';
import type { ChoiceDirection } from '@/shared/model/game';

import { applyResourceEffects } from './apply-resource-effects';
import { GameSessionState } from '@/entities/game-session';

export const resolveGameEvent = (
  session: GameSessionState,
  event: GameEvent,
  direction: ChoiceDirection,
): GameSessionState => {
  const choice = direction === 'left' ? event.leftChoice : event.rightChoice;

  if (!choice) {
    return session;
  }

  return {
    ...session,

    year: session.year + 1,

    resources: applyResourceEffects(session.resources, choice.effects),

    history: [
      ...session.history,
      {
        gameEventId: event.id,
        year: session.year,
        choice: direction,
      },
    ],

    currentGameEventId: choice.nextGameEventId ?? null,
  };
};
