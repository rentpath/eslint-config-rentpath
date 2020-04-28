# eslint-config-rentpath

RentPath’s extensible shared config for [ESLint](http://eslint.org/)

## Installation
```javascript
# npm
npm i --save-dev eslint @rentpath/eslint-config-rentpath

# yarn
yarn add eslint @rentpath/eslint-config-rentpath --dev
```

## Usage
Add the following entry to your `.eslintrc`
```json
{
  "extends": "@rentpath/eslint-config-rentpath"
}
```

It's easiest to add a script to `package.json` to run linting; for example,
```json
"scripts": {
  "lint": "eslint <path_to_javascript_dir>",
}
```

Then just `$ npm run lint` or `$ yarn lint`

# Releasing

1. Inside your pull request, bump the semantic version in `package.json`
2. Merge the pull request
3. [Draft a release](https://github.com/rentpath/eslint-config-rentpath/releases/new) and enter the semantic version from `package.json` tag. The release workflow will automatically publish your new package to GitHub [here](https://github.com/rentpath/eslint-config-rentpath/packages).
