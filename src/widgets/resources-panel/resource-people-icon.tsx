import type { SVGProps } from 'react';

export const ResourcePeopleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      fill="none"
      {...props}
    >
      <circle cx="30" cy="40" r="10" fill="currentColor" />
      <path
        d="
      M13 108
      C13 90 18 58 30 58
      C39 58 45 66 47 80
      C42 84 38 93 36 108
      H13
      Z
    "
        fill="currentColor"
      />

      <circle cx="90" cy="40" r="10" fill="currentColor" />
      <path
        d="
      M107 108
      C107 90 102 58 90 58
      C81 58 75 66 73 80
      C78 84 82 93 84 108
      H107
      Z
    "
        fill="currentColor"
      />

      <circle cx="60" cy="31" r="13" fill="currentColor" />
      <path
        d="
      M33 114
      C34 92 41 56 60 56
      C79 56 86 92 87 114
      H33
      Z
    "
        fill="currentColor"
      />
    </svg>
  );
};
