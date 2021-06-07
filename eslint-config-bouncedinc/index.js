module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  rules: {
    quotes: 'off',
    eqeqeq: 'error',
    'no-var': 'error',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'one-var': 'off',
    'no-trailing-spaces': 'off',
    'max-classes-per-file': 'off',
    'one-var-declaration-per-line': 'off',
    'no-return-await': 'off',
    'no-await-in-loop': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'func-names': 'off',
    radix: 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': ['off', 'isNaN'],

    // handled by @typescript-eslint
    'no-unused-vars': 'off',

    // handled by prettier
    'max-len': 'off',

    // handled by ts
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-redeclare': 'off',
    'default-case': 'off',

    'operator-linebreak': 'off',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-restricted-properties': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // TODO: this would be nice to tighten up
    'brace-style': 'off',
    // TODO: we should try to move `any` to `unknown`
    '@typescript-eslint/no-explicit-any': 'off'
  },
  env: {
    node: true
  }
};
