# dummy graphql server

## Setup

### Dependencies

```bash
# switch to correct node version
nvm install

# install dependencies
yarn

# start dev server
yarn dev
```

### VSCode

#### Plugins

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

#### Workspace settings

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "json",
  ],
}
```

## Linting

```bash
# lint
yarn lint

# automatically try to fix linting errors
yarn lint:fix
```
