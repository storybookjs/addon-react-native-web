import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: { excludeDecorators: true },
  },
};

export const decorators = [
  (Story) => (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Story />
    </GestureHandlerRootView>
  ),
];
