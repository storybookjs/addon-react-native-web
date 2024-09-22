import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from './AppBar';
import { NativeBaseProvider } from 'native-base';

const meta = {
  component: AppBar,
  decorators: [
    (Story) => (
      <NativeBaseProvider>
        <Story />
      </NativeBaseProvider>
    ),
  ],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
