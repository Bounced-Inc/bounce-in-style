# Bounce in Style

The Bounce style guide, formatter, and commit validator.

# Goal

- Single source of truth for all linting, formatting, commit message validation, changelog generator, semantic versioning
- Minimal config
- Compatible with all Bounce Typescript projects (Express, React, React Native)

# Instructions

- Fresh install of Husky (version 6 has some major changes, ensure to remove existing Husky installations prior to starting)

```bash
npm install husky -D
npx husky install
```

- Add this "prepare" script to package.json so that husky gets setup on `npm install`:

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

- Install bounce-in-style

```bash
npm install bounce-in-style -D
```

- Add git hook with Husky

```bash
# react/react-native projects
npx husky add .husky/pre-commit "npx bis --staged --react"

# all other projects (ie backend)
npx husky add .husky/pre-commit "npx bis --staged"
```

- You can add your own `.eslintignore` and `.prettierignore` files to your project root to chose which files get linted and formatted.

# Extending ESlint config

We don't recommend extending the config, instead a PR should be made into this repo to add the change for everyone.

If you need to extend the config, you can extend it like you would any other eslint config. The simplest way to do so can be seen in the `.eslintrc` file at the root of this repo.

## What's next

- try adding airbnb extends
- setup commit validator & changelog generator
