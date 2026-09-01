import { ChoiceDirection } from '@/shared/model/game';
import type { ResourceValues } from '@/shared/model/resources';

export interface GameHistoryEntry {
  gameEventId: string;
  year: number;
  choice?: ChoiceDirection;
}

export interface GameSessionState {
  year: number;

  resources: ResourceValues;

  currentGameEventId: string | null;

  history: GameHistoryEntry[];
}

type GameSessionActions = {
  setResources: (resources: ResourceValues) => void;

  setGameSession: (session: GameSessionState) => void;
};

export type GameSessionStore = GameSessionState & GameSessionActions;
