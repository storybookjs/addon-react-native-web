const reactWebpack5 = require('@storybook/react-webpack5/preset');
const webpackFinal = require('./dist/cjs/webpack');

module.exports = {
  ...reactWebpack5,
  webpackFinal,
};
