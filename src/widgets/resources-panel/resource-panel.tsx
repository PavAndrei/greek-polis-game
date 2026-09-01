import {
  resources,
  useResources,
} from '@/entities/game-session';
import type { ResourceIconId } from '@/shared/model/resources';
import { ResourceItem } from './resource-item';
import { useTranslation } from 'react-i18next';
import { ResourceGodsIcon } from './resource-gods-icon';
import { ResourcePeopleIcon } from './resource-people-icon';
import { ResourceSuppliesIcon } from './resource-supplies-icon';
import { ResourceArmyIcon } from './resource-army-icon';
import type { ComponentType, SVGProps } from 'react';

const resourceIconById = {
  gods: ResourceGodsIcon,
  people: ResourcePeopleIcon,
  army: ResourceArmyIcon,
  supplies: ResourceSuppliesIcon,
} satisfies Record<ResourceIconId, ComponentType<SVGProps<SVGSVGElement>>>;

export const ResourcePanel = () => {
  const { t } = useTranslation();

  const resourcesValues = useResources();

  return (
    <ul className="flex justify-between items-center gap-2.5 border border-terracotta-red rounded px-2 py-8 bg-smoked-bronze">
      {resources.map((resource) => (
        <ResourceItem
          key={resource.id}
          label={t(resource.labelKey)}
          value={resourcesValues[resource.id]}
          Icon={resourceIconById[resource.icon]}
          iconColorClassName={'text-terracotta-red'}
        />
      ))}
    </ul>
  );
};
