import type { ComponentType, SVGProps } from 'react';

type ResourceGaugeIconProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  value: number;
  maxValue?: number;
  colorClassName: string;
  emptyColorClassName?: string;
  className?: string;
};

const getFillPercent = (value: number, maxValue: number) => {
  if (maxValue <= 0) {
    return 0;
  }

  return Math.min(Math.max(value / maxValue, 0), 1) * 100;
};

export const ResourceGaugeIcon = ({
  Icon,
  value,
  maxValue = 100,
  colorClassName,
  emptyColorClassName = 'text-fired-clay-brown',
  className = '',
}: ResourceGaugeIconProps) => {
  const fillPercent = getFillPercent(value, maxValue);
  const rootClassName = ['relative h-12 w-12 shrink-0', className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={rootClassName}>
      <Icon
        className={`absolute inset-1 h-10 w-10 ${emptyColorClassName}`}
        aria-hidden="true"
        focusable="false"
      />

      <span
        className="absolute inset-x-0 bottom-0 overflow-hidden"
        style={{ height: `${fillPercent}%` }}
      >
        <Icon
          className={`absolute bottom-1 left-1 h-10 w-10 ${colorClassName}`}
          aria-hidden="true"
          focusable="false"
        />
      </span>
    </span>
  );
};
