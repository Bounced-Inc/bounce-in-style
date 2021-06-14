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
        'docs',
        'style',
        'types',
        'refactor',
        'test',
        'build'
        // 'chore',
        // 'ci',
      ]
    ]
  }
};
