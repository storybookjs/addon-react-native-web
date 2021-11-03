# React Native Web addon for Storybook

This addon configures `@storybook/react` to display React Native (RN) projects using React Native for Web (RNW)

## Getting Started

Assuming you've got an existing RN project, run the following from the project root:

```sh
npx sb@next init --type react
yarn add react-dom react-native-web babel-plugin-react-native-web @storybook/addon-react-native-web --dev
```

Then edit your `.storybook/main.js`:

```js
module.exports = {
  addons: [/*existing addons,*/ '@storybook/addon-react-native-web'],
};
```

From here, you should be able to write stories incorporating your RN components according to
the [Storybook for React](https://storybook.js.org/docs/react/get-started/introduction) instructions.

## Extra config

Most packages should work without extra changes however in some cases extra steps are needed.

One common example is "reanimated" which requires some babel config and extra transpilation.

### Untranspiled react native libraries

Many react-native packages are shipped untranspiled and this doesn't work for the web platform. If you receive errors like "proper loader not found" after adding a package try adding it to the `modulesToTranspile` option for this addon.

You can do that like this:

```js
module.exports = {
  addons: [
    /*existing addons,*/
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-package-name'],
      },
    },
  ],
};
```

Replace `react-native-package-name` with the name of a real package.

### Reanimated support

Reanimated is supported, however you will need to add some options to the addon as follows:

```js
module.exports = {
  addons: [
    /*existing addons,*/
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-reanimated'],
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
  ],
};
```

This is necessary because reanimated uses a babel plugin to enable certain features of the library.

## Known limitations

- Libraries that don't support react-native-web will not work
- Components will display on the web so may not be the same as a component on a mobile device since dom versions of those components may be used (like `<div>` and `span`)
  - when using primitives such as View/Text or other cross platform components then the difference should be minimal.
