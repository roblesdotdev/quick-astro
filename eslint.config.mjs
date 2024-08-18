import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  {
    ignores: [
      '**/.cache/**',
      '**/node_modules/**',
      '**/build/**',
      '**/public/build/**',
      '**/playwright-report/**',
      '**/server-build/**',
      '**/dist/**',
      '**/coverage/**',
    ],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'no-duplicate-imports': 'error',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]
