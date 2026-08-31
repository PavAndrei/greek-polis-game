export type ResourceId = 'gods' | 'people' | 'army' | 'supplies';
export type ResourceIconId = 'gods' | 'people' | 'army' | 'supplies';

export type ResourceValues = Record<ResourceId, number>;

export type ResourceDefinition = {
  id: ResourceId;
  labelKey: string;
  icon: ResourceIconId;
};
