import type { ChoiceDirection } from '@/shared/model/game';
import type { ResourceValues } from '@/shared/model/resources';

export interface GameHistoryEntry {
  gameEventId: string;
  year: number;
  choice?: ChoiceDirection;
}

type GameStatus = 'playing' | 'game-over';

export type GameOverReason =
  | 'gods_zero'
  | 'gods_full'
  | 'people_zero'
  | 'people_full'
  | 'army_zero'
  | 'army_full'
  | 'supplies_zero'
  | 'supplies_full';

export interface GameSessionState {
  year: number;

  resources: ResourceValues;

  currentGameEventId: string | null;

  history: GameHistoryEntry[];

  status: GameStatus;
  gameOverReason: GameOverReason | null;
}

type GameSessionActions = {
  setResources: (resources: ResourceValues) => void;

  setGameSession: (session: GameSessionState) => void;

  resetGameSession: () => void;
};

export type GameSessionStore = GameSessionState & GameSessionActions;
