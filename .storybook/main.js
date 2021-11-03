module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '../preset.js',
      options: {
        modulesToTranspile: [
          'react-native-reanimated',
          'react-native-vector-icons',
        ],
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
    '@storybook/addon-essentials',
  ],
  features: {
    babelModeV7: true,
  },
  babel: (options) => ({
    ...options,
    presets: [...options.presets, '@babel/preset-typescript'],
  }),
};
