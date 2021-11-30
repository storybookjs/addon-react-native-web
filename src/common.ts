export type Options = {
  modulesToTranspile?: string[];
  babelPlugins?: string[];
  projectRoot?: string;
};

export const getBabelPlugins = (options: Options) => {
  let reactNativeWeb = 'react-native-web';
  if (options.babelPlugins && Array.isArray(options.babelPlugins)) {
    return [reactNativeWeb, ...options.babelPlugins];
  }
  return [reactNativeWeb];
};
