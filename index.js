module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/style',
    './rules/es6',
  ].map(require.resolve),
  rules: {}
}

