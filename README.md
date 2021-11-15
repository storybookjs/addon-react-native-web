# React Native Web addon for Storybook

This addon configures `@storybook/react` to display React Native (RN) projects using React Native for Web (RNW)

- [React Native Web addon for Storybook](#react-native-web-addon-for-storybook)
  - [Getting Started](#getting-started)
  - [Common issues](#common-issues)
  - [Extra config](#extra-config)
    - [Untranspiled react native libraries](#untranspiled-react-native-libraries)
    - [Adding babel plugins](#adding-babel-plugins)
  - [Configuring popular libraries](#configuring-popular-libraries)
  - [Known limitations](#known-limitations)
  - [FAQ](https://github.com/storybookjs/addon-react-native-web/blob/main/FAQ.md)

You can read more about this package [in this blog post](https://www.dannyhwilliams.co.uk/introducing-react-native-web-storybook).

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

## Common issues

Please see the [FAQ](https://github.com/storybookjs/addon-react-native-web/blob/main/FAQ.md) for common issues like the "loader not found" error.

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

### Adding babel plugins

It's common to provide a babel plugin for certain packages in the react native eco system and you can pass a list of these
to the addon.

```
module.exports = {
  addons: [
    /*existing addons,*/
    {
      name: '@storybook/addon-react-native-web',
      options: {
        babelPlugins: ['babel-plugin-name'],
      },
    },
  ],
};
```

## Configuring popular libraries

Many libraries work without extra config, heres some examples of config required for some packages.

Note: react-native-vector-icons requires some extra steps due to fonts required and there will be a future addon
with that config included.

<table>
<tr>
<td>Package</td> <td>Required config</td>
</tr>

<tr>
<td>react-native-svg</td>
<td>No extra config needed</td>
</tr>

<tr>
<td>react-native-gesture-handler</td>
<td>No extra config needed</td>
</tr>

<tr>
<td>react-native-reanimated</td> 
<td>

<details>
<summary>
Click to here to see the config
</summary>

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

</details>
</td>
</tr>

<tr>
<td>native-base</td>
<td> 
<details>
<summary>
Click to here to see the config
</summary>
Due to the vector icons dependency add the following

```js
module.exports = {
  addons: [
    /*existing addons,*/
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-vector-icons'],
      },
    },
  ],
};
```

</details>
</td>
</tr>

<tr>
<td>react-native-paper</td>
<td> 
<details>
<summary>
Click to here to see the config
</summary>
Due to the vector icons dependency add the following

```js
module.exports = {
  addons: [
    /*existing addons,*/
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-vector-icons'],
      },
    },
  ],
};
```

</details>
</td>
</tr>

</table>

## Known limitations

- Libraries that don't support react-native-web will not work
- Components will display on the web so may not be the same as a component on a mobile device since dom versions of those components may be used (like `<div>` and `span`)
  - when using primitives such as View/Text or other cross platform components then the difference should be minimal.
