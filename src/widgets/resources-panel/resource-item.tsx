type ResourceItemProps = {
  label: string;
  value: number;
};

export const ResourceItem = ({ label, value }: ResourceItemProps) => {
  return (
    <li>
      <span>
        {label}: {value}
      </span>
    </li>
  );
};
