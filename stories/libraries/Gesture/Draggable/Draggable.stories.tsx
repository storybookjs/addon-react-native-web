import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { StyleSheet, Text, View } from 'react-native';

import { Draggable } from './Draggable';

export default {
  title: 'libraries/Gesture Handler/Draggable',
  component: Draggable,
  render: (args) => {
    return (
      <Draggable {...args}>
        <Text>{args.children}</Text>
      </Draggable>
    );
  },
  decorators: [
    (Story) => (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </View>
    ),
  ],
} as ComponentMeta<typeof Draggable>;

export const Basic = {
  args: {
    children: 'Drag me around',
  },
};
