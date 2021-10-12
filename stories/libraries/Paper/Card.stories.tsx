import React from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Card } from './Card';

export default {
  component: Card,
  decorators: [
    (Story) => (
      <PaperProvider theme={DefaultTheme}>
        <Story />
      </PaperProvider>
    ),
  ],
  argTypes: {
    onCancel: { action: 'onCancel' },
    onConfirm: { action: 'onConfirm' },
  },
} as ComponentMeta<typeof Card>;

export const Basic: ComponentStoryObj<typeof Card> = {
  args: {
    content:
      'Cillum sit aute cillum velit occaecat adipisicing aliquip sit ex quis ut dolor.',
    title: 'Card title',
  },
};
