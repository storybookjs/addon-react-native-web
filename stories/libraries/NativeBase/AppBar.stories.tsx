import { ComponentMeta } from '@storybook/react';
import { AppBar } from './AppBar';
import { NativeBaseProvider } from 'native-base';

export default {
  component: AppBar,
  decorators: [
    (Story) => (
      <NativeBaseProvider>
        <Story />
      </NativeBaseProvider>
    ),
  ],
} as ComponentMeta<typeof AppBar>;

export const Basic = {
  args: {},
};
