module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'docs',
        'style',
        'types',
        'refactor',
        'test',
        'build',
        'chore',
        'ci'
      ]
    ],
    'body-max-line-length': [2, 'always', Infinity],
    'footer-max-line-length': [2, 'always', Infinity]
  }
};
