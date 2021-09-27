import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { NativeBaseProvider } from 'native-base';

import { Box } from './Box';

export default {
  component: Box,
  decorators: [
    (Story) => (
      <NativeBaseProvider>
        <Story />
      </NativeBaseProvider>
    ),
  ],
} as ComponentMeta<typeof Box>;

export const Basic = {
  args: {},
};
