import react from '@vitejs/plugin-react';

import { Plugin, mergeConfig } from 'vite';
import { Options, getBabelPlugins } from './common';

export function reactNativeWeb(options: { babelPlugins: Array<any> }): Plugin {
  console.log(options.babelPlugins);
  const plugin: Plugin = {
    name: 'vite:react-native-web',
    // enforce: 'pre',
    config(_userConfig, env) {
      return {
        plugins: [
          react({
            babel: {
              plugins: options.babelPlugins,
            },
          }),
        ],
        define: {
          // reanimated support
          'global.__x': {},
          _frameTimestamp: undefined,
          _WORKLET: false,
          __DEV__: `${env.mode === 'development' ? true : false}`,
          'process.env.NODE_ENV': JSON.stringify(
            process.env.NODE_ENV || env.mode,
          ),
        },
        optimizeDeps: {
          include: ['react-native-reanimated'],
          esbuildOptions: {
            jsx: 'transform',
            resolveExtensions: [
              '.web.js',
              '.web.ts',
              '.web.tsx',
              '.js',
              '.jsx',
              '.json',
              '.ts',
              '.tsx',
              '.mjs',
            ],
            loader: {
              '.js': 'jsx',
            },
          },
        },
        resolve: {
          extensions: [
            '.web.js',
            '.web.ts',
            '.web.tsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
            '.mjs',
          ],
          alias: {
            'react-native': 'react-native-web',
          },
        },
      };
    },
  };

  return plugin;
}

const viteFinal = (config: any, options: Options) => {
  const babelPlugins = getBabelPlugins(options);

  const i = config.plugins.findIndex(
    (plg: any) =>
      Array.isArray(plg) && plg.find((p) => p.name === 'vite:react-babel'),
  );

  if (i > -1) {
    config.plugins[i] = null; /*config.plugins[i].filter(
      (p: any) => p.name !== 'vite:react-babel',
    );*/
  }

  //   config.plugins.filter = [rlist];

  //   config = mergeConfig(config, {
  //     plugins: [reactNativeWeb({ babelPlugins })],
  //   });

  config = {
    ...config,
    plugins: [reactNativeWeb({ babelPlugins }), ...config.plugins],
  };

  console.log(config.plugins);

  return config;
};

module.exports = viteFinal;
