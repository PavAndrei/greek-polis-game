export { resources } from './model/resource-config';
export {
  clampResourceValue,
  normalizeResources,
} from './model/resource-bounds';
export {
  useGameSessionStore,
  useResources,
  useSetResources,
  useSetGameSession,
  useResetGameSession,
} from './model/use-game-session-store';
export type {
  GameSessionState,
  GameSessionStore,
} from './model/game-session-types';

export type { GameOverReason } from './model/game-session-types';
export { gameEndings } from './model/game-endings';

export type {
  ResourceDefinition,
  ResourceIconId,
  ResourceId,
  ResourceValues,
} from '@/shared/model/resources';
