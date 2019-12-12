module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['import', '@typescript-eslint'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: true }]
  },
  env: {
    jest: true
  }
};
