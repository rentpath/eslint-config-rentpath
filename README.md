# eslint-config-rentpath
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

RentPath’s extensible shared config for [ESLint](http://eslint.org/)

## Installation
```javascript
npm i --save-dev eslint eslint-config-rentpath
```

## Usage
Add the following entry to your `.eslintrc`
```json
{
  "extends": "rentpath"
}
```

## Commitizen
  `eslint-config-rentpath` uses [Commitizen](https://commitizen.github.io/cz-cli/) to format commit messages.
  * Install it globally `$ npm install -g commitizen`
 Once you are ready to commit, follow the familiar github workflow, with a slight change.

 ```
 $ git add <files>
 $ git cz
 ```

 `$ git cz` will bring up the Commitizen commit prompt, follow the instructions, and `$ git push` as usual.
