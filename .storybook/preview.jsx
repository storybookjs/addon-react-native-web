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
    <GestureHandlerRootView>
      <Story />
    </GestureHandlerRootView>
  ),
];
