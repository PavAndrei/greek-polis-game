import { create } from 'zustand';

import type { GameSessionState, GameSessionStore } from './game-session-types';

const gameSessionInitialState: GameSessionState = {
  resources: {
    gods: 50,
    people: 50,
    army: 50,
    supplies: 50,
  },
};

export const useGameSessionStore = create<GameSessionStore>()((set) => ({
  ...gameSessionInitialState,

  setResources: (resources) => {
    set({ resources });
  },
}));

export const useSetResources = () =>
  useGameSessionStore((state) => state.setResources);

export const useResources = () =>
  useGameSessionStore((state) => state.resources);
