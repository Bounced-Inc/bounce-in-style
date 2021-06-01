#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lintStaged = require('lint-staged');

(async () => {
  const success = await lintStaged({
    config: {
      '*.{js,jsx,ts,tsx}': [
        'npx prettier --config ./node_modules/prettier-config-bouncedinc/index.json --write',
        'npx eslint -c ./node_modules/eslint-config-bouncedinc/index.js --cache --fix'
      ]
    }
  });

  console.log(success ? 'Format and lint was successful 🏀' : 'Formatting failed!');
})();
