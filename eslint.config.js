import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import cypressPlugin from 'eslint-plugin-cypress';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        ...globals.jest,
        ...globals.cypress,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      react,
      prettier: prettierPlugin,
      cypress: cypressPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true }],
      'cypress/no-unnecessary-waiting': 'error',
    },
  },
];
