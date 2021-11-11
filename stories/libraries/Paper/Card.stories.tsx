import React from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Card } from './Card';
import { View } from 'react-native';

export default {
  component: Card,

  render: (args) => (
    <PaperProvider theme={DefaultTheme}>
      <View style={{ width: 480 }}>
        <Card {...args} />
      </View>
    </PaperProvider>
  ),
} as ComponentMeta<typeof Card>;

export const Basic: ComponentStoryObj<typeof Card> = {
  args: {
    content:
      'Cillum sit aute cillum velit occaecat adipisicing aliquip sit ex quis ut dolor.',
    title: 'Card title',
  },
};
