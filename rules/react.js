module.exports = {
  rules: {
    // allow both .jsx and .js react
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // allow default props like object, array, any
    'react/forbid-prop-types': 0,
    // allow default prop to be unset if not required
    'react/require-default-props': 0,
    // allow component when wants stateless function
    'react/prefer-stateless-function': 0,
    // allow index used as key
    'react/no-array-index-key': 0,
    // allow string set to prop, overkill
    'react/style-prop-object': 0,
    // enforces 3 props per line
    'react/jsx-max-props-per-line': [1, { maximum: 3 }],
    // enforces proper names for jsx components
    'react/jsx-pascal-case': [2, { allowAllCaps: false }],
    // disallow files from having more than one component at all
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    // checks for proper casing and spelling on react syntax
    'react/no-typos': 2,
    // allow dot notation
    'react/destructuring-assignment': 0,
    // enforce multi-line except for things like <Button>Click</Button>
    'react/jsx-one-expression-per-line': [2, { allow: 'literal' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }
}
