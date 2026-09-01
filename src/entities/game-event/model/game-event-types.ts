import type { ResourceEffects } from '@/shared/model/resources';

export type GameEventType = 'choice' | 'info';

export interface GameEventChoice {
  text: string;
  effects?: ResourceEffects;

  nextGameEventId?: string | null;
}

export interface GameEvent {
  id: string;
  type: GameEventType;

  characterId?: string;

  text: string;

  leftChoice?: GameEventChoice;
  rightChoice?: GameEventChoice;
}
