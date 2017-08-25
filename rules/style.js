module.exports = {
  rules: {
    // allow class methods that don't utilize 'this'
    'class-methods-use-this': 0,
    // require trailing comma in multilines
    'comma-dangle': [2, 'always-multiline'],
    // require function expressions to have a name
    'func-names': 0,
    // allow certain indentation
    'indent': ['error', 2, {
      'outerIIFEBody': 1,
      'ImportDeclaration': 'off',
      'SwitchCase': 1,
      'MemberExpression': 'off',
      'FunctionDeclaration': {
        'parameters': 1,
        'body': 1
      },
      'FunctionExpression': {
        'parameters': 1,
        'body': 1
      },
    }],
    // disabling due to missing error reporting
    'jsx-a11y/href-no-hash': 0,
    // enforce only 1 space after key:
    'key-spacing': ['error', { 'mode': 'strict' }],
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, {
      'max': 1,
      'maxEOF': 1,
      'maxBOF': 0
    }],
    // allow things like __DEV__
    'no-underscore-dangle': 0,
    // no padding inside blocks
    'padded-blocks': ['error', { 'blocks': 'never' }],
    // enforce a new line after any const or let if func / if follows
    'padding-line-between-statements': ['error',
      {
        'blankLine': 'always',
        'prev': ['const', 'let'],
        'next': ['block-like', 'function', 'if']
      },
    ],
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'never'],
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [2, 'never'],
    // require or disallow Yoda conditions
    'yoda': [2, 'never'],
    // allow spaces in certain places
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }]
  }
}
