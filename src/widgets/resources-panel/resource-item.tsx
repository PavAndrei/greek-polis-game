import type { ComponentType, SVGProps } from 'react';
import { ResourceGaugeIcon } from './resource-gauge-icon';

type ResourceItemProps = {
  label: string;
  value: number;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconColorClassName: string;
};

export const ResourceItem = ({
  label,
  value,
  Icon,
  iconColorClassName,
}: ResourceItemProps) => {
  return (
    <li className="flex flex-col items-center gap-2">
      <ResourceGaugeIcon
        Icon={Icon}
        value={value}
        colorClassName={iconColorClassName}
      />
      <div className="text-center">
        {label}: {value}
      </div>
    </li>
  );
};
