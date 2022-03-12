module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js', 'commitlint.config.js', 'craco.config.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'quote-props': 'off',
    semi: ['error', 'never'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/semi': 'off',
    'max-len': ['error', { code: 100 }],
  },
}
