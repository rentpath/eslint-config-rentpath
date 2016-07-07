module.exports = {
  rules: {
    // disallow trailing commas in object literals
    'comma-dangle': [2, 'never'],
    // require function expressions to have a name
    'func-names': 0,
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1, maxBOF: 0 }],
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'never'],
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [2, 'never'],
    // require or disallow Yoda conditions
    'yoda': [2, 'never']
  }
}
