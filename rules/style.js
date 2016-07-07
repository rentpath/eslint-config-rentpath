module.exports = {
  rules: {
    // require trailing comma in multilines
    'comma-dangle': [2, 'always-multiline'],
    // require function expressions to have a name
    'func-names': 0,
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'never'],
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [2, 'never'],
    // require or disallow Yoda conditions
    'yoda': [2, 'never']
  }
}
