import { ResourceValues } from './resource-types';

export interface GameSessionState {
  resources: ResourceValues;
}

type GameSessionActions = {
  setResources: (resources: ResourceValues) => void;
};

export type GameSessionStore = GameSessionState & GameSessionActions;
