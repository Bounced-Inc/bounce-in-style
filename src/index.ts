#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lintStaged = require('lint-staged');

(async () => {
  try {
    const success = await lintStaged({
      config: {
        "*.{js,jsx,ts,tsx}": [
          "npx prettier --config ./node_modules/prettier-config-bouncedinc --write",
          "npx eslint -c ./node_modules/eslint-config-bouncedinc --cache --fix"
        ]
      }
    });

    console.log(success ? "Format and lint was successful 🏀" : 'Linting failed!');
  } catch (e) {
    // Failed to load configuration
    console.error(e);
  }
})();
