#!/usr/bin/env node
import arg from 'arg';
import { execSync } from 'child_process';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lintStaged = require('lint-staged');

(async () => {
  const args = arg({
    // Types
    '--react': Boolean,
    '--staged': Boolean,
    '--help': Boolean,
    '--check': Boolean,
    // Aliases
    '-h': '--help'
  });

  if (args['--help']) {
    console.log(`
Usage
  $ npx bis [flags]

Options
  --help        Print help message.
  --react       Use for React & React Native projects.
  --staged      Only run on staged files. Useful when adding as a git hook.
  --check       Only check files. Skips running Prettier and doesn't use the --fix flag for ESLint. 
                This option does not support the --staged flag.
  `);
    return;
  }

  const isStagedChanges = args['--staged'];
  const isReact = args['--react'];
  const isCheck = args['--check'];

  if (isStagedChanges && isCheck) {
    console.error('Cannot provide the --staged and the --check flag together');
    return;
  }

  const prettierCommand =
    'npx prettier --config ./node_modules/prettier-config-bouncedinc/index.json --write';
  const eslintCommand = `npx eslint -c ./node_modules/eslint-config-bouncedinc${
    isReact ? '-react' : ''
  }/index.js ${isCheck ? '' : '--fix'} --cache --ext ts --ext tsx --ext js --ext jsx`;

  if (isStagedChanges) {
    await lintStaged({
      config: {
        '*.{js,jsx,ts,tsx}': [prettierCommand, eslintCommand],
        '*.{json,css,md,yml,yaml}': [prettierCommand]
      }
    });
  } else {
    // append "." for files to format and lint
    if (!isCheck) execSync(prettierCommand + ' .', { stdio: 'inherit' });

    try {
      // errors already get printed automatically, we dont need to
      // print more
      execSync(eslintCommand + ' .', { stdio: 'inherit' });
    } catch (err) {
      return;
    }
  }

  console.log('Formating and linting was successful 🏀');
})();
