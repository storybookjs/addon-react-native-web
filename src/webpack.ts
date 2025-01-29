import webpack from 'webpack';
import path from 'path';

export type Options = {
  modulesToTranspile?: string[];
  modulesToAlias?: { [key: string]: string };
  babelPlugins?: Array<string | [string, Record<string, string>]>;
  babelPresets?: Array<string | [string, Record<string, string>]>;
  babelPresetReactOptions?: Record<string, any>;
  babelPresetReactNativeOptions?: Record<string, any>;
  projectRoot?: string;
};

export const getBabelPlugins = (options: Options) => {
  let reactNativeWeb = 'react-native-web';
  if (options.babelPlugins && Array.isArray(options.babelPlugins)) {
    return [reactNativeWeb, ...options.babelPlugins];
  }
  return [reactNativeWeb];
};

const getModule = (name: string) => path.join('node_modules', name);

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

const isInstalled = (name: string) => {
  try {
    require(`${name}/package.json`);
    return true;
  } catch (er) {
    return false;
  }
};

const getRnPreset = () => {
  if (isInstalled('@react-native/babel-preset')) {
    console.log('Using @react-native/babel-preset');

    return 'module:@react-native/babel-preset';
  } else if (isInstalled('metro-react-native-babel-preset')) {
    console.log('Using metro-react-native-babel-preset');

    return 'module:metro-react-native-babel-preset';
  } else {
    throw new Error(
      "Couldn't find babel-preset-react-native or metro-react-native-babel-preset.",
    );
  }
};

const webpackFinal = async (config: any, options: Options) => {
  // Add __DEV__ global variable which is relied on by many libraries
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
  );

  // plugin suggested in reanimated docs https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/web-support/
  config.plugins.push(new webpack.DefinePlugin({ process: { env: {} } }));

  const babelPlugins = getBabelPlugins(options);
  const babelPresetReactOptions = options?.babelPresetReactOptions ?? {};
  const babelPresetReactNativeOptions =
    options?.babelPresetReactNativeOptions ?? {};
  const babelPresets = options?.babelPresets ?? [];
  const root = options.projectRoot ?? process.cwd();
  const userModules = options.modulesToTranspile?.map(getModule) ?? [];
  const modules = [...DEFAULT_INCLUDES, ...userModules];
  const userAliases = options.modulesToAlias ?? {};

  // fix for uncompiled react-native dependencies
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    loader: 'babel-loader',
    // include logic copied from https://github.com/expo/expo-cli/blob/master/packages/webpack-config/src/loaders/createBabelLoader.ts
    include(filename: string) {
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
          getRnPreset(),
          {
            useTransformReactJSXExperimental: true,
            ...babelPresetReactNativeOptions,
          },
        ],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
            ...babelPresetReactOptions,
          },
        ],
        ...babelPresets,
      ],
      plugins: [...babelPlugins],
    },
  });

  config.resolve.extensions = [
    '.web.js',
    '.web.jsx',
    '.web.ts',
    '.web.tsx',
    ...config.resolve.extensions,
  ];

  config.resolve.alias = {
    'react-native$': 'react-native-web',
    ...config.resolve.alias,
    ...userAliases,
  };

  return config;
};

module.exports = webpackFinal;
