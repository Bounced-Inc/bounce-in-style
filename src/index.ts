#!/usr/bin/env node
/* eslint-disable no-console */
import arg from 'arg';
import { execSync } from 'child_process';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lintStaged = require('lint-staged');

async function runCli() {
  const args = arg({
    '--react': Boolean,
    '-r': '--react',
    '--react-native': Boolean,
    '-n': '--react-native',
    '--staged': Boolean,
    '-s': '--staged',
    '--check': Boolean,
    '-c': '--check',
    '--help': Boolean,
    '-h': '--help'
  });

  if (args['--help']) {
    console.log(`
  Usage
  $ npx bis [flags]
  
  Options
  --help               Print help message.
  -r, --react          Use for React projects.
  -n, --react-native   Use for React Native projects.
  -s, --staged         Only run on staged files. Useful when adding as a git hook.
  -c, --check          Only check files. Skips running Prettier and doesn't use the --fix flag for ESLint. 
                       This option does not support the --staged flag.
  `);
    return;
  }

  const isStagedChanges = args['--staged'];
  const isReact = args['--react'];
  const isReactNative = args['--react-native'];
  const isCheck = args['--check'];

  if (isStagedChanges && isCheck) {
    throw new Error(
      'Cannot provide the --staged and the --check flag together'
    );
  }

  if (isReact && isReactNative) {
    throw new Error('Cannot use both react and react native config');
  }

  let eslintConfigSuffix = '';
  if (isReactNative) eslintConfigSuffix += '-react-native';
  else if (isReact) eslintConfigSuffix += '-react';

  const eslintFlags = `${
    isCheck ? '' : '--fix'
  } --cache --ext ts --ext tsx --ext js --ext jsx`;

  const prettierCommand =
    'npx prettier --config ./node_modules/prettier-config-bouncedinc/index.json --write';
  const eslintCommand = `npx eslint -c ./node_modules/eslint-config-bouncedinc${eslintConfigSuffix}/index.js ${eslintFlags}`;

  if (isStagedChanges) {
    const success = await lintStaged({
      config: {
        '*.{js,jsx,ts,tsx}': [prettierCommand, eslintCommand],
        '*.{json,css,md,yml,yaml}': [prettierCommand]
      }
    });

    if (!success) {
      throw new Error('lint-staged failed');
    }
  } else {
    // append "." for files to format and lint
    if (!isCheck) {
      execSync(`${prettierCommand} .`, { stdio: 'inherit' });
    }

    execSync(`${eslintCommand} .`, { stdio: 'inherit' });
    console.log('Formating and linting done 🚀');
  }
}

// catch block removes the unhandled promise rejection warning
runCli().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
