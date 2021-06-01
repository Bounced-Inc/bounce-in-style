module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    quotes: 'off',
    eqeqeq: 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-restricted-properties': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  env: {
    node: true
  }
};
