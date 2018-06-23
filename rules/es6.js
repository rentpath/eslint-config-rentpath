module.exports = {
  rules: {
    // enforces no braces where they can be omitted
    'arrow-body-style': [2, 'as-needed'],
    // require parens in arrow function arguments
    'arrow-parens': [2, 'as-needed'],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // allow file with no default export
    'import/prefer-default-export': 0,
    // ignore references to root directory
    'import/no-extraneous-dependencies': 0,
    // no console!
    'no-console': 'error'
  }
}
