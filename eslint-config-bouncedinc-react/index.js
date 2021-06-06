module.exports = {
  extends: ['eslint-config-bouncedinc', 'plugin:react/recommended', 'airbnb'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    // '@typescript-eslint/camelcase': 0,
    // '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/member-delimiter-style': 0
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
    // jest: true,
    node: true
  }
};
