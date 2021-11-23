const webpack = require('webpack');
const path = require('path');

const getBabelPlugins = (options) => {
  let reactNativeWeb = 'react-native-web';
  if (options.babelPlugins && Array.isArray(options.babelPlugins)) {
    return [reactNativeWeb, ...options.babelPlugins];
  }
  return [reactNativeWeb];
};

const getModule = (name) => path.join('node_modules', name);

// copied from https://github.com/expo/expo-cli/blob/master/packages/webpack-config/src/loaders/createBabelLoader.ts
const DEFAULT_INCLUDES = [
  getModule('react-native'),
  getModule('react-navigation'),
  getModule('expo'),
  getModule('unimodules'),
  getModule('@react'),
  getModule('@expo'),
  getModule('@use-expo'),
  getModule('@unimodules'),
  getModule('native-base'),
  getModule('styled-components'),
];

const DEFAULT_EXCLUDES = [
  '/node_modules',
  '/bower_components',
  '/.expo/',
  // Prevent transpiling webpack generated files.
  '(webpack)',
];

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

    const babelPlugins = getBabelPlugins(options);
    const root = options?.projectRoot ?? process.cwd();
    const modules = [...DEFAULT_INCLUDES, ...(options.modulesToTranspile || [])];

    // fix for uncompiled react-native dependencies
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'babel-loader',
      // include logic copied from https://github.com/expo/expo-cli/blob/master/packages/webpack-config/src/loaders/createBabelLoader.ts
      include(filename) {
        if (!filename) {
          return false;
        }

        for (const possibleModule of modules) {
          if (filename.includes(path.normalize(possibleModule))) {
            return true;
          }
        }

        if (filename.includes(root)) {
          for (const excluded of DEFAULT_EXCLUDES) {
            if (filename.includes(path.normalize(excluded))) {
              return false;
            }
          }
          return true;
        }
        return false;
      },
      options: {
        root,
        presets: [
          [
            'module:metro-react-native-babel-preset',
            {
              useTransformReactJSXExperimental: true,
            },
          ],
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
        ],
        plugins: [...babelPlugins, '@babel/plugin-proposal-class-properties'],
      },
    });

    config.resolve.extensions = ['.web.js', ...config.resolve.extensions];

    return config;
  },
};
