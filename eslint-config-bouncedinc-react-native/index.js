module.exports = {
  // root: true,
  // extends: ['@react-native-community', 'eslint-config-bouncedinc-react'],
  extends: ['eslint-config-bouncedinc-react'],
  plugins: ['react-native', '@react-native-community'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    // NOTE: circular dep ignore will be removed in the near future
    'import/no-cycle': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }]
  },
  env: {
    // NOTE: we may need to disable `browser` env from the eslint-config-bouncedinc-react package
    'react-native/react-native': true
  }
};
