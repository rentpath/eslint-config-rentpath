module.exports = {
  rules: {
    // enforces no braces where they can be omitted
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 0,
    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': 0,
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // allow file with no default export
    'import/prefer-default-export': 0,
    // ignore references to root directory
    'import/no-extraneous-dependencies': 0,
    // allow import { default as Lib } from 'lib'
    // overrides https://github.com/airbnb/javascript#modules--no-export-from-import
    "import/no-named-default": 0
  }
}
