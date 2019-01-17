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
    'no-console': 'error',
    // 3 or more enforces new line in objects
    'object-curly-newline': [2, {
      "ObjectExpression": { multiline: true, minProperties: 0, consistent: true },
      "ObjectPattern": { multiline: true, minProperties: 3, consistent: true },
      "ImportDeclaration": { multiline: true, minProperties: 3, consistent: true },
      "ExportDeclaration": { multiline: true, minProperties: 3, consistent: true },
    }],
    // turn off destructure preference
    'prefer-destructuring': 0
  }
}
