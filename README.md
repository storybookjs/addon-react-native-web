# React Native Web addon for Storybook

This addon configures `@storybook/react` to display React Native (RN) projects using React Native for Web (RNW)

- [React Native Web addon for Storybook](#react-native-web-addon-for-storybook)
  - [Getting Started](#getting-started)
  - [Common issues](#common-issues)
  - [Config options](#config-options)
    - [Untranspiled react native libraries](#untranspiled-react-native-libraries)
    - [Aliasing react native web libraries](#aliasing-react-native-web-libraries)
    - [Adding babel plugins](#adding-babel-plugins)
  - [Configuring popular libraries](#configuring-popular-libraries)
  - [Known limitations](#known-limitations)

See the [FAQ](https://github.com/storybookjs/addon-react-native-web/blob/main/FAQ.md) for common questions.

You can read more about this package [in this blog post](https://www.dannyhwilliams.co.uk/introducing-react-native-web-storybook).

To contribute see the contributing guide [here](https://github.com/storybookjs/addon-react-native-web/blob/main/CONTRIBUTING.md)

Heres a screen shot of how you could use this alongside storybook/react-native, the image is taken from the following [starter code](https://github.com/dannyhw/expo-storybook-starter)

![image with storybook on mobile and web](https://user-images.githubusercontent.com/3481514/145904252-92e3dc1e-591f-410f-88a1-b4250f4ba6f2.png)

## Getting Started

Assuming you've got an existing RN project, run the following from the project root:

```sh
npx sb init --type react
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

## Config options

Most packages should work without extra changes however in some cases extra steps are needed.
One common example is "reanimated" which requires some babel config and extra transpilation.

| Options            | Type                      | Description                                                                     |
| ------------------ | ------------------------- | ------------------------------------------------------------------------------- |
| modulesToTranspile | `Array<string>`           | node_modules that need transpiling                                              |
| modulesToAlias     | `{[key: string]: string}` | node_modules that need aliasing                                                 |
| babelPlugins       | `Array<string>`           | Babel plugins you want to apply                                                 |
| projectRoot        | `string`                  | Path to the root of your project, if in a mono repo you might need to set this. |

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

### Aliasing react native web libraries

Some react-native packages recommend module aliasing as a means of importing and using the web variant of an existing package. If you need to add additional key:value pairs to webpack's `config.resolve.alias`, use the `modulesToAlias` option for this addon. You don't need to add react-native-web to this list as it is already included by default.

You can do that like this:

```js
module.exports = {
  addons: [
    /*existing addons,*/
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToAlias: {
          'react-native-package-name': 'react-native-web-package-name',
        },
      },
    },
  ],
};
```

Replace `react-native-package-name` with the name of a real package.

### Adding babel plugins

It's common to provide a babel plugin for certain packages in the react native eco system and you can pass a list of these
to the addon.

```js
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
