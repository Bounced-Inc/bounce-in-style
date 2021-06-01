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
- setup cli to run: `bis { --staged | --all } { --react }`. get inspiration from https://github.com/google/gts
- setup commit validator & changelog generator

# Instructions

- Install bounce-in-style and husky

```bash
# with npm
npm install bounce-in-style husky -D

# with yarn
yarn add bounce-in-style husky -D
```

- Add husky to `package.json`

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npx bis"
    }
  }
}
```
