module.exports = {
  presets: [
    '@babel/env',
    '@babel/preset-react',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    'react-native-web',
    '@babel/plugin-proposal-class-properties',
    'react-native-reanimated/plugin',
  ],
};
