import type { GameOverReason } from './game-session-types';

export interface GameEnding {
  id: GameOverReason;
  titleKey: string;
  descriptionKey: string;
  image: string;
}
