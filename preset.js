const path = require('path');
const webpack = require('webpack');

module.exports = {
  babel: async (options) => {
    return {
      ...options,
      plugins: [
        ...options.plugins,
        'react-native-web',
        'react-native-reanimated/plugin',
      ],
    };
  },
  webpackFinal: async (config) => {
    const cwd = process.cwd();

    config.resolve.alias = {
      'react-native$': 'react-native-web',
    };

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'development',
        ),
        __DEV__: process.env.NODE_ENV !== 'production' || true,
      }),
    );

    // fix for uncompiled react-native dependencies
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'babel-loader',
      include: [
        path.resolve(cwd, 'node_modules/react-native-vector-icons'),
        path.resolve(cwd, 'node_modules/react-native-reanimated'),
      ],
      options: {
        presets: [
          '@babel/env',
          '@babel/preset-react',
          'module:metro-react-native-babel-preset',
        ],
        plugins: [
          'react-native-web',
          '@babel/plugin-proposal-class-properties',
          'react-native-reanimated/plugin',
        ],
      },
    });

    config.resolve.extensions = ['.web.js', ...config.resolve.extensions];

    return config;
  },
};
