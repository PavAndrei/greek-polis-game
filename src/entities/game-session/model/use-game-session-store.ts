import { create } from 'zustand';

import type { GameSessionState, GameSessionStore } from './game-session-types';
import { normalizeResources } from './resource-bounds';

const getGameSessionInitialState = (): GameSessionState => ({
  year: 0,

  resources: {
    gods: 50,
    people: 50,
    army: 50,
    supplies: 50,
  },

  currentGameEventId: 'talking-donkey',

  history: [],

  status: 'playing',
  gameOverReason: null,
});

export const useGameSessionStore = create<GameSessionStore>()((set) => ({
  ...getGameSessionInitialState(),

  setResources: (resources) => {
    set({ resources: normalizeResources(resources) });
  },

  setGameSession: (session) => {
    set({
      ...session,
      resources: normalizeResources(session.resources),
    });
  },

  resetGameSession: () => {
    set(getGameSessionInitialState());
  },
}));

export const useSetResources = () =>
  useGameSessionStore((state) => state.setResources);

export const useResources = () =>
  useGameSessionStore((state) => state.resources);

export const useSetGameSession = () =>
  useGameSessionStore((state) => state.setGameSession);

export const useResetGameSession = () =>
  useGameSessionStore((state) => state.resetGameSession);
