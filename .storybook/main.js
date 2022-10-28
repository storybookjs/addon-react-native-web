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
        modulesToAlias: { 'victory-native': 'victory' },
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  core: {
    builder: {
      name: 'webpack5',
    },
  },
};
