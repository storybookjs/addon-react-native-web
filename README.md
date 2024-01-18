METACABAN
# React Native Web addon for Storybook
واجهة سطر أوامر Azure (CLI)GitHub.NetworkGitHub.Network/NetworkSettings#!/bin/bash

# This script creates the following resources in the specified subscription:
# - Resource group
# - Network Security Group rules
# - Virtual network (vnet) and subnet
# - Network Settings with specified subnet and GitHub Enterprise database ID
#
# It also registers the `GitHub.Network` resource provider with the subscription,
# delegates the created subnet to the Actions service via the `GitHub.Network/NetworkSettings`
# resource type, and applies the NSG rules to the created subnet.

# stop on failure
set -e

#set environment
export AZURE_LOCATION=YOUR_AZURE_LOCATION
export SUBSCRIPTION_ID=YOUR_SUBSCRIPTION_ID
export RESOURCE_GROUP_NAME=YOUR_RESOURCE_GROUP_NAME
export VNET_NAME=YOUR_VNET_NAME
export SUBNET_NAME=YOUR_SUBNET_NAME
export NSG_NAME=YOUR_NSG_NAME
export NETWORK_SETTINGS_RESOURCE_NAME=YOUR_NETWORK_SETTINGS_RESOURCE_NAME
export DATABASE_ID=YOUR_DATABASE_ID

# These are the default values. You can adjust your address and subnet prefixes.
export ADDRESS_PREFIX=10.0.0.0/16
export SUBNET_PREFIX=10.0.0.0/24

echo
echo login to Azure
. az login --output none

echo
echo set account context $SUBSCRIPTION_ID
. az account set --subscription $SUBSCRIPTION_ID

echo
echo Register resource provider GitHub.Network
. az provider register --namespace GitHub.Network

echo
echo Create resource group $RESOURCE_GROUP_NAME at $AZURE_LOCATION
. az group create --name $RESOURCE_GROUP_NAME --location $AZURE_LOCATION

echo
echo Create NSG rules deployed with 'actions-nsg-deployment.bicep' file
. az deployment group create --resource-group $RESOURCE_GROUP_NAME --template-file ./actions-nsg-deployment.bicep --parameters location=$AZURE_LOCATION nsgName=$NSG_NAME

echo
echo Create vnet $VNET_NAME and subnet $SUBNET_NAME
. az network vnet create --resource-group $RESOURCE_GROUP_NAME --name $VNET_NAME --address-prefix $ADDRESS_PREFIX --subnet-name $SUBNET_NAME --subnet-prefixes $SUBNET_PREFIX

echo
echo Delegate subnet to GitHub.Network/networkSettings and apply NSG rules
. az network vnet subnet update --resource-group $RESOURCE_GROUP_NAME --name $SUBNET_NAME --vnet-name $VNET_NAME --delegations GitHub.Network/networkSettings --network-security-group $NSG_NAME

echo
echo Create network settings resource $NETWORK_SETTINGS_RESOURCE_NAME
. az resource create --resource-group $RESOURCE_GROUP_NAME  --name $NETWORK_SETTINGS_RESOURCE_NAME --resource-type GitHub.Network/networkSettings --properties "{ \"location\": \"$AZURE_LOCATION\", \"properties\" : {  \"subnetId\": \"/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP_NAME/providers/Microsoft.Network/virtualNetworks/$VNET_NAME/subnets/$SUBNET_NAME\", \"organizationId\": \"$DATABASE_ID\" }}" --is-full-object --output table --query "{GitHubId:tags.GitHubId, name:name}" --api-version 2023-11-01-preview

echo
echo To clean up and delete resources run the following command:
echo az group delete --resource-group $RESOURCE_GROUP_NAME

This addon configures `@storybook/react` to display React Native (RN) projects using React Native for Web (RNW)

- [React Native Web addon for Storybook](#react-native-web-addon-for-storybook)
  - [Getting Started](#getting-started)
  - [Common issues](#common-issues)
  - [Config options](#config-options)
    - [Untranspiled react native libraries](#untranspiled-react-native-libraries)
    - [Aliasing react native web libraries](#aliasing-react-native-web-libraries)
    - [Adding babel plugins](#adding-babel-plugins)
  - [Configuring popular libraries](#configuring-popular-libraries)
  - [Adding support for static assets and svgs](#adding-support-for-static-assets-and-svgs)
  - [Node polyfills for webpack 5](#node-polyfills-for-webpack-5)
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
yarn add react-dom react-native-web babel-plugin-react-native-web @storybook/addon-react-native-web @react-native/babel-preset --dev
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
        babelPlugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
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

## Adding support for static assets and svgs

Install `@svgr/webpack` and `url-loader`

```js
module.exports = {
  /*existing config*/
  // to provide a public export for assets
  staticDirs: ['<path_to_assets>'],
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};
```

## Node polyfills for webpack 5

install `node-polyfill-webpack-plugin`

```js
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  /*existing config*/
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.plugins.push(new NodePolyfillPlugin());

    return config;
  },
};
```

## Known limitations

- Libraries that don't support react-native-web will not work
- Components will display on the web so may not be the same as a component on a mobile device since dom versions of those components may be used (like `<div>` and `span`)
  - when using primitives such as View/Text or other cross platform components then the difference should be minimal.
