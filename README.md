# Bounce in Style

The Bounce style guide, formatter, and commit validator.

# Goal

- a single source of truth for all linting, formatting, commit message validation, changelog generator, semantic versioning
- minimal config required
- compatible with all Bounce Typescript projects
- separate config for react / react-native

## Progres and whats next

- test current setup in terms of linting / formatting
- try adding airbnb extends (optional, or later)
- setup cli to run: `bis { --staged | --all } { --react }`
- setup commit validator & changelog generator

# Instructions

- Fresh install of Husky (version 6 has some major changes)

```bash
npm install husky -D
npx husky install
```

- Install bounce-in-style

```bash
npm install bounce-in-style -D
```

- Add git hook with Husky

```bash
npx husky add .husky/pre-commit "npx bis"
```

- Add your own `.eslintignore` and `.prettierignore` files to the root of your project.