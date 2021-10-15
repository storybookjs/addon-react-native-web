module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['../preset.js', '@storybook/addon-essentials'],
  features: {
    babelModeV7: true,
  },
  babel: (options) => ({
    ...options,
    presets: [...options.presets, '@babel/preset-typescript'],
  }),
};
