import type { GameEnding } from './game-ending-types';
import type { GameOverReason } from './game-session-types';

export const gameEndings: Record<GameOverReason, GameEnding> = {
  gods_zero: {
    id: 'gods_zero',
    titleKey: 'gameOver.endings.godsZero.title',
    descriptionKey: 'gameOver.endings.godsZero.description',
    image: '/game-endings/gods-zero.webp',
  },

  gods_full: {
    id: 'gods_full',
    titleKey: 'gameOver.endings.godsFull.title',
    descriptionKey: 'gameOver.endings.godsFull.description',
    image: '/game-endings/gods-full.webp',
  },

  people_zero: {
    id: 'people_zero',
    titleKey: 'gameOver.endings.peopleZero.title',
    descriptionKey: 'gameOver.endings.peopleZero.description',
    image: '/game-endings/people-zero.webp',
  },

  people_full: {
    id: 'people_full',
    titleKey: 'gameOver.endings.peopleFull.title',
    descriptionKey: 'gameOver.endings.peopleFull.description',
    image: '/game-endings/people-full.webp',
  },

  army_zero: {
    id: 'army_zero',
    titleKey: 'gameOver.endings.armyZero.title',
    descriptionKey: 'gameOver.endings.armyZero.description',
    image: '/game-endings/army-zero.webp',
  },

  army_full: {
    id: 'army_full',
    titleKey: 'gameOver.endings.armyFull.title',
    descriptionKey: 'gameOver.endings.armyFull.description',
    image: '/game-endings/army-full.webp',
  },

  supplies_zero: {
    id: 'supplies_zero',
    titleKey: 'gameOver.endings.suppliesZero.title',
    descriptionKey: 'gameOver.endings.suppliesZero.description',
    image: '/game-endings/supplies-zero.webp',
  },

  supplies_full: {
    id: 'supplies_full',
    titleKey: 'gameOver.endings.suppliesFull.title',
    descriptionKey: 'gameOver.endings.suppliesFull.description',
    image: '/game-endings/supplies-full.webp',
  },
};
