module.exports = {
  extends: ['airbnb', 'plugin:react/recommended', 'eslint-config-bouncedinc'],
  rules: {
    // TODO: would be nice to remove this, import blocks at the top of files can get long and hard to navigate if they arent organized
    // but it would be more ideal to have this handled by a formatter
    'import/order': 'off',
    // TODO: this should be removed, but we have way too many prop destructures that do this
    'no-shadow': 'off',
    // TODO: more that should be removed eventually
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',

    // handled by TS
    'react/react-in-jsx-scope': 'off',

    // handled by prettier
    'react/jsx-indent-prop': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-curly-newline': 'off',

    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/display-name': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/iframe-has-title': 'off'
  },
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    },
    react: {
      version: 'detect'
    }
  },
  // rules that we turn off for old js code
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        'react/forbid-prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/require-default-props': 'off',
        'react/no-array-index-key': 'off',
        'react/sort-comp': 'off',
        'no-nested-ternary': 'off',
        'react/prefer-stateless-function': 'off',
        'react/button-has-type': 'off',
        'jsx-a11y/interactive-supports-focus': 'off',
        'no-unused-expressions': 'off',
        'jsx-a11y/label-has-associated-control': 'off',

        // these two shouldnt be allowed, but we have a lot of old code that works well and has these warnings
        'react/no-did-update-set-state': 'off',
        'react/jsx-props-no-spreading': 'off',

        // this is a copy of airbnbs version, with the ForOfStatement rule removed
        'no-restricted-syntax': [
          'error',
          {
            selector: 'ForInStatement',
            message:
              'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
          },
          {
            selector: 'LabeledStatement',
            message:
              'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
          },
          {
            selector: 'WithStatement',
            message:
              '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
          }
        ]
      }
    }
  ]
};
