module.exports = {
  rules: {
    // allow both .jsx and .js react
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
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
    // checks for proper casing and spelling on react syntax
    'react/no-typos': 2
  }
}
