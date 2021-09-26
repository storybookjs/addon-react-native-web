const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.alias = {
      'react-native$': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
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
      exclude: [/react-native-web/, /\.(native|ios|android)\.(ts|js)x?$/],
      include: [
        path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
        path.resolve(__dirname, '../node_modules/react-native-reanimated'),
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
        ],
      },
    });

    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader', // or directly file-loader
      include: [
        path.resolve(
          __dirname,
          '../node_modules/react-native-vector-icons/MaterialCommunityIcons.js',
        ),
        path.resolve(
          __dirname,
          '../node_modules/react-native-vector-icons/MaterialIcons.js',
        ),
      ],
    });

    config.resolve.extensions = ['.web.js', ...config.resolve.extensions];

    return config;
  },
};
