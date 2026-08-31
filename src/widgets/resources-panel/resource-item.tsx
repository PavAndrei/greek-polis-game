import type { ComponentType, SVGProps } from 'react';

type ResourceItemProps = {
  label: string;
  value: number;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const ResourceItem = ({ label, value, Icon }: ResourceItemProps) => {
  return (
    <li className="flex flex-col items-center gap-2">
      <span className="flex h-12 w-12 items-center justify-center">
        <Icon className="h-10 w-10 shrink-0" aria-hidden="true" focusable="false" />
      </span>
      <div className="text-center">
        {label}: {value}
      </div>
    </li>
  );
};
