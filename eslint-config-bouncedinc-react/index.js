module.exports = {
  extends: ['airbnb', 'plugin:react/recommended', 'eslint-config-bouncedinc'],
  rules: {
    // TODO: would be nice to remove this, import blocks at the top of files can get long and hard to navigate if they arent organized
    // but it would be more ideal to have this handled by a formatter
    'import/order': 'off',

    // TODO: properties that are also in base, find a way to not override these by accident
    // 'indent': 'off',
    // 'comma-dangle': 'off',
    // 'object-curly-newline': 'off',
    // 'operator-linebreak': 'off',
    // 'no-underscore-dangle': 'off',
    // 'no-plusplus': 'off',
    // 'import/extensions': 'off',
    // 'import/no-named-as-default': 'off',
    // 'import/prefer-default-export': 'off',
    // 'curly': 'off',
    // 'no-restricted-globals': 'off',
    // 'max-len': 'off',
    // 'quotes': 'off',

    // handled by TS
    'react/react-in-jsx-scope': 'off',

    // handled by prettier
    'react/jsx-indent-prop': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-curly-newline': 'off',

    'react/prop-types': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/member-delimiter-style': 0

    // disabled rules from previous eslint web config
    // 'react/display-name': 0,
    // '@typescript-eslint/camelcase': 0,
    // '@typescript-eslint/explicit-function-return-type': 0,
    // '@typescript-eslint/no-var-requires': 0,
    // 'no-console': [
    //   2,
    //   {
    //     allow: ['warn', 'error']
    //   }
    // ],
    // 'no-case-declarations': 0
  },
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true
  }
};
