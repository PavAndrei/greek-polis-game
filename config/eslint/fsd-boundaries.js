const importDepths = ['../', '../../', '../../../', '../../../../', '../../../../../'];
const fsdLayers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

const parentRelativeLayerImports = importDepths.flatMap((depth) =>
  fsdLayers.map((layer) => `${depth}${layer}/**`),
);

const publicApiImportsOnly = [
  '@/app/**',
  '@/pages/*/**',
  '@/widgets/*/**',
  '@/features/*/**',
  '@/entities/*/**',
  '@/shared/*/*/**',
];

const restrictedImportPatterns = (...patterns) => [
  {
    group: [
      ...new Set([
        ...parentRelativeLayerImports,
        ...publicApiImportsOnly,
        ...patterns,
      ]),
    ],
    message:
      'Import other FSD slices through their public API: @/<layer>/<slice>.',
  },
];

const restrictImports = (...patterns) => ({
  'no-restricted-imports': [
    'error',
    {
      patterns: restrictedImportPatterns(...patterns),
    },
  ],
});

export const fsdBoundaryConfig = [
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: restrictImports(),
  },
  {
    files: ['src/shared/**/*.{ts,tsx}'],
    rules: restrictImports(
      '@/app/**',
      '@/pages/**',
      '@/widgets/**',
      '@/features/**',
      '@/entities/**',
    ),
  },
  {
    files: ['src/entities/**/*.{ts,tsx}'],
    rules: restrictImports(
      '@/app/**',
      '@/pages/**',
      '@/widgets/**',
      '@/features/**',
    ),
  },
  {
    files: ['src/features/**/*.{ts,tsx}'],
    rules: restrictImports('@/app/**', '@/pages/**', '@/widgets/**'),
  },
  {
    files: ['src/widgets/**/*.{ts,tsx}'],
    rules: restrictImports('@/app/**', '@/pages/**'),
  },
  {
    files: ['src/pages/**/*.{ts,tsx}'],
    rules: restrictImports('@/app/**'),
  },
];
