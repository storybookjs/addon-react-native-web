# React Native Web addon for Storybook

This addon configures `@storybook/react` to display React Native (RN) projects using React Native for Web (RNW)

## Getting Started

Assuming you've got an existing RN project, run the following from the project root:

```sh
npx sb@next init --type react
yarn add react-dom react-native-web @storybook/addon-react-native-web --dev
```

Then edit your `.storybook/main.js`:

```js
module.exports = {
  addons: [/*existing addons,*/ '@storybook/addon-react-native-web']
}
```

From here, you should be able to write stories incorporating your RN components according to
the [Storybook for React](https://storybook.js.org/docs/react/get-started/introduction) instructions.

## Known limitations

FIXME