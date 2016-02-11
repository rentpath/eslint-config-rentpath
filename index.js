module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    './rules/style',
    './rules/es6',
  ].map(require.resolve),
  rules: {}
}
