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
    'no-unused-vars': ['error', { ignoreRestSiblings: true }]
  }
  // env: {}
};
