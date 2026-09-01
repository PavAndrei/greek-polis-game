export type ResourceId = 'gods' | 'people' | 'army' | 'supplies';
export type ResourceIconId = ResourceId;

export type ResourceValues = Record<ResourceId, number>;
export type ResourceEffects = Partial<ResourceValues>;

export type ResourceDefinition = {
  id: ResourceId;
  labelKey: string;
  icon: ResourceIconId;
};
