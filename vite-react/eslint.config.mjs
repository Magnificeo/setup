import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/* node_modules игнорируется по умолчанию */

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist'] },
  {
    files: ['src/**/*.{js,mjs,cjs,ts}', 'tests/**/*.{js,mjs,cjs,ts}'],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
