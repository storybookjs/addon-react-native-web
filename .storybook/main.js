module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  framework: {
    name: './',
    options: {
      fastRrefresh: true,
      modulesToTranspile: [
        'react-native-reanimated',
        'react-native-vector-icons',
      ],
      modulesToAlias: { 'victory-native': 'victory' },
      babelPlugins: ['react-native-reanimated/plugin'],
    },
  },
  addons: ['@storybook/addon-essentials'],
  // core: {
  //   builder: 'webpack5',
  // },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // speeds up storybook build time
      allowSyntheticDefaultImports: false,
      // speeds up storybook build time
      esModuleInterop: false,
      // makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  docs: {
    autodocs: true,
  },
};
