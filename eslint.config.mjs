import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import stylisticJs from '@stylistic/eslint-plugin-js';

// /** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      'capitalized-comments': ['error', 'always'],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/semi': ['error', 'always'],
    },
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
];
