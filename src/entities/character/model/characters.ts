import type { Character } from './character-types';

export const characters: Record<string, Character> = {
  farmer: {
    id: 'farmer',
    nameKey: 'characters.farmer.name',
    portrait: '/characters/farmer.webp',
  },
  oracle: {
    id: 'oracle',
    nameKey: 'characters.oracle.name',
  },
};
