import type { SVGProps } from 'react';

export const ResourceSuppliesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 140"
      fill="none"
      {...props}
    >
      <rect x="49" y="10" width="22" height="14" rx="4" fill="currentColor" />

      <rect x="44" y="6" width="32" height="7" rx="3.5" fill="currentColor" />

      <path
        d="
      M48 22
      H72

      C72 31 76 36 83 42
      C91 49 96 59 96 72

      C96 91 84 106 69 116

      L66 132
      H54
      L51 116

      C36 106 24 91 24 72

      C24 59 29 49 37 42
      C44 36 48 31 48 22

      Z
    "
        fill="currentColor"
      />

      <path
        d="
      M43 34
      C31 34 20 42 18 55
      C16 68 22 80 34 85
      L38 76

      C30 72 27 64 29 57
      C30 50 35 46 43 46
      Z
    "
        fill="currentColor"
      />

      <path
        d="
      M77 34
      C89 34 100 42 102 55
      C104 68 98 80 86 85
      L82 76

      C90 72 93 64 91 57
      C90 50 85 46 77 46
      Z
    "
        fill="currentColor"
      />

      <rect x="48" y="130" width="24" height="6" rx="3" fill="currentColor" />
    </svg>
  );
};
