import eslintPluginAstro from 'eslint-plugin-astro'

export default [
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
