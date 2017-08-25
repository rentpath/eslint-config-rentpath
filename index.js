module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/style',
    './rules/es6',
    './rules/react',
  ].map(require.resolve),
  rules: {}
}
