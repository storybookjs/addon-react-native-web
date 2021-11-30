import { getBabelPlugins, Options } from './common';

const babel = (config: any, options: Options) => ({
  ...config,
  plugins: [...config.plugins, ...getBabelPlugins(options)],
});

module.exports = babel;
