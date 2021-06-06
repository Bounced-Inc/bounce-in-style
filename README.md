# Bounce in Style

The Bounce style guide, formatter, and commit validator.

# Goal

- Single source of truth for all linting, formatting, commit message validation, changelog generator, semantic versioning
- Minimal config
- Compatible with all Bounce Typescript projects (Express, React, React Native)

# Install

- Remove any installations of ESLint or Prettier & all associated config files (keep your `.eslintignore` and `.prettierignore` files)
- Install with npm

```bash
# npm
npm install bounce-in-style -D

# yarn
yarn add bounce-in-style -D
```

# Usage

## Git/Husky hook (recommended)

- Fresh install of Husky (version 6 has some major changes, ensure to remove existing Husky installations prior to starting)

```bash
npm uninstall husky
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

- Add git hook with Husky

```bash
# react projects
npx husky add .husky/pre-commit "npx bis --staged --react"

# react-native projects
npx husky add .husky/pre-commit "npx bis --staged --react-native"

# all other projects (ie backend)
npx husky add .husky/pre-commit "npx bis --staged"
```

## CLI

```bash
npx bis -h

# Usage
#   $ npx bis [flags]

#   Options
#   --help               Print help message.
#   -r, --react          Use for React projects.
#   -n, --react-native   Use for React Native projects.
#   -s, --staged         Only run on staged files. Useful when adding as a git hook.
#   -c, --check          Only check files. Skips running Prettier and doesn't use the --fix flag for ESLint.
#                        This option does not support the --staged flag.
```

# Extending ESlint config

We don't recommend extending the config when using internal to Bounce, instead a PR should be made into this repo to add the change for everyone.

If you do need to extend the config, you can treat it like any other eslint config. The simplest way to do so can be seen in the `.eslintrc` file at the root of this repo.

## What's next

- [ ] Setup commit validator & changelog generator
