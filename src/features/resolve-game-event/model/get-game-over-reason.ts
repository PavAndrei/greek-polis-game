import { GameOverReason } from '@/entities/game-session';
import type { ResourceValues } from '@/shared/model/resources';

export const getGameOverReason = (
  resources: ResourceValues,
): GameOverReason | null => {
  if (resources.gods <= 0) return 'gods_zero';
  if (resources.gods >= 100) return 'gods_full';

  if (resources.people <= 0) return 'people_zero';
  if (resources.people >= 100) return 'people_full';

  if (resources.army <= 0) return 'army_zero';
  if (resources.army >= 100) return 'army_full';

  if (resources.supplies <= 0) return 'supplies_zero';
  if (resources.supplies >= 100) return 'supplies_full';

  return null;
};
