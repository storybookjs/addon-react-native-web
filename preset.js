const path = require('path');
const webpack = require('webpack');

const getBabelPlugins = (options) => {
  let reactNativeWeb = 'react-native-web';
  if (options.babelPlugins && Array.isArray(options.babelPlugins)) {
    return [reactNativeWeb, ...options.babelPlugins];
  }
  return [reactNativeWeb];
};

const getModulesToTranspile = (options) => {
  if (options.modulesToTranspile && Array.isArray(options.modulesToTranspile)) {
    return options.modulesToTranspile.map((moduleName) => {
      // returns the path to the entry point file like addon-react-native-web/node_modules/react-native-reanimated/lib/Animated.js'
      const fullPath = require.resolve(moduleName);

      const stringToFind = `node_modules/${moduleName}/`;

      // remove everything after 'node_modules/module_name/'
      const adjustedPath = fullPath.substring(
        0,
        fullPath.indexOf(stringToFind) + stringToFind.length,
      );

      return adjustedPath;
    });
  }
  return [];
};

module.exports = {
  babel: async (config, options) => ({
    ...config,
    plugins: [...config.plugins, ...getBabelPlugins(options)],
  }),
  webpackFinal: async (config, options) => {
    // swap out react-native for react-native-web
    config.resolve.alias = {
      'react-native$': 'react-native-web',
    };

    // Add __DEV__ global variable which is relied on by many libraries
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'development',
        ),
        __DEV__: process.env.NODE_ENV !== 'production' || true,
      }),
    );

    const modulesToTranspile = getModulesToTranspile(options);

    if (modulesToTranspile.length > 0) {
      const babelPlugins = getBabelPlugins(options);

      // fix for uncompiled react-native dependencies
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        include: modulesToTranspile,
        options: {
          presets: [
            '@babel/env',
            '@babel/preset-react',
            'module:metro-react-native-babel-preset',
          ],
          plugins: ['@babel/plugin-proposal-class-properties', ...babelPlugins],
        },
      });
    }

    config.resolve.extensions = ['.web.js', ...config.resolve.extensions];

    return config;
  },
};
