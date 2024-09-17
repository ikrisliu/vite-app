import js from '@eslint/js'
import ts from 'typescript-eslint'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default ts.config(
  {
    ignores: [
      'dist',
      '**/vite.config.ts',
    ]
  },
  {
    extends: [js.configs.recommended, ...ts.configs.strictTypeChecked],
    languageOptions: {
      ecmaVersion: 2024,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirName,
      },
    },
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    'settings': {
      'react': {
        'version': '18.3',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['strictCamelCase', 'StrictPascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['typeLike', 'enumMember'],
          format: ['StrictPascalCase'],
        },
      ],
    },
  }
)
