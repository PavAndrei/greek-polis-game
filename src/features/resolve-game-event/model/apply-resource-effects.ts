import { ResourceEffects, ResourceValues } from '@/shared/model/resources';

export const applyResourceEffects = (
  resources: ResourceValues,
  effects?: ResourceEffects,
): ResourceValues => {
  if (!effects) {
    return resources;
  }

  const nextResources = { ...resources };

  for (const [resource, value] of Object.entries(effects)) {
    const key = resource as keyof ResourceValues;

    nextResources[key] += value ?? 0;
  }

  return nextResources;
};
