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
    <li className="flex min-w-0 flex-col items-center gap-1.5">
      <ResourceGaugeIcon
        Icon={Icon}
        value={value}
        colorClassName={iconColorClassName}
      />
      <div className="max-w-full truncate text-center text-xs sm:text-sm">
        {label}: {value}
      </div>
    </li>
  );
};
