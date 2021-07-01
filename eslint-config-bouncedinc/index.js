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
    'implicit-arrow-linebreak': 'off',
    'func-names': 'off',
    radix: 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    curly: 'off',
    'prefer-destructuring': 'off',

    // handled by @typescript-eslint
    'no-unused-vars': 'off',

    // handled by prettier
    'max-len': 'off',
    'object-curly-newline': 'off',
    indent: 'off',
    'operator-linebreak': 'off',

    // handled by ts
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-redeclare': 'off',
    'default-case': 'off',

    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-restricted-properties': 'error',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // TODO: this would be nice to tighten up
    'brace-style': 'off',
    // TODO: we should try to move `any` to `unknown`
    '@typescript-eslint/no-explicit-any': 'off',
    // TODO: we should remove this / only use it for isNaN
    'no-restricted-globals': 'off'
  },
  env: {
    node: true
  },
  overrides: [
    {
      files: [
        '**/*.{spec,test}.{js,jsx,ts,tsx}',
        '**/__{mocks,tests}__/**/*.{js,ts,tsx}'
      ],
      env: {
        jest: true,
        'jest/globals': true
      },
      // "extends": ["plugin:jest/recommended"] // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn'
      }
    }
  ]
};
