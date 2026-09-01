import type { ResourceValues } from '@/shared/model/resources';

const MIN_RESOURCE_VALUE = 0;
const MAX_RESOURCE_VALUE = 100;

export const clampResourceValue = (value: number): number =>
  Math.min(MAX_RESOURCE_VALUE, Math.max(MIN_RESOURCE_VALUE, value));

export const normalizeResources = (
  resources: ResourceValues,
): ResourceValues => ({
  gods: clampResourceValue(resources.gods),
  people: clampResourceValue(resources.people),
  army: clampResourceValue(resources.army),
  supplies: clampResourceValue(resources.supplies),
});
