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
