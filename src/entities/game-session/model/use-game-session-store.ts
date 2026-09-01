import { create } from 'zustand';

import type { GameSessionState, GameSessionStore } from './game-session-types';

const gameSessionInitialState: GameSessionState = {
  year: 0,

  resources: {
    gods: 50,
    people: 50,
    army: 50,
    supplies: 50,
  },

  currentGameEventId: 'talking-donkey',
  history: [],
};

export const useGameSessionStore = create<GameSessionStore>()((set) => ({
  ...gameSessionInitialState,

  setResources: (resources) => {
    set({ resources });
  },

  setGameSession: (session) => {
    set(session);
  },
}));

export const useSetResources = () =>
  useGameSessionStore((state) => state.setResources);

export const useResources = () =>
  useGameSessionStore((state) => state.resources);

export const useSetGameSession = () =>
  useGameSessionStore((state) => state.setGameSession);
