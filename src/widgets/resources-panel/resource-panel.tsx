import { useResources, resources } from '@/entities/game-session';
import { ResourceItem } from './resource-item';
import { useTranslation } from 'react-i18next';

export const ResourcePanel = () => {
  const { t } = useTranslation();

  const resourcesValues = useResources();

  return (
    <ul>
      {resources.map((resource) => (
        <ResourceItem
          key={resource.id}
          label={t(resource.labelKey)}
          value={resourcesValues[resource.id]}
        />
      ))}
    </ul>
  );
};
