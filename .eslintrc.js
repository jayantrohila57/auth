module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   extends: [
      'next',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
   ],
   overrides: [
      {
         env: {
            node: true,
         },
         files: ['.eslintrc.{js,cjs}'],
         parserOptions: {
            sourceType: 'script',
         },
      },
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint', 'react'],
   rules: {
      'react/prop-types': 0,
      'react/no-unescaped-entities': 0,
      '@next/next/no-server-import-in-page': 0,
      '@typescript-eslint/no-explicit-any': 0,
      'react/react-in-jsx-scope': 'off',
      'no-html-link-for-pages': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-unused-vars': 'off',
   },
}
