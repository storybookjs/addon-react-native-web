const path = require('path');
const webpack = require('webpack');

const plugins = ['react-native-web'];
try {
  require('react-native-reanimated');
  plugins.push('react-native-reanimated/plugin');
} catch (e) {
  if (e && e.code !== 'MODULE_NOT_FOUND') {
    plugins.push('react-native-reanimated/plugin');
  }
}

module.exports = {
  babel: async (options) => {
    return {
      ...options,
      plugins: [...options.plugins, ...plugins],
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
        plugins: ['@babel/plugin-proposal-class-properties', ...plugins],
      },
    });

    config.resolve.extensions = ['.web.js', ...config.resolve.extensions];

    return config;
  },
};
