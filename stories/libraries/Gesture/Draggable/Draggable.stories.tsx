import { ComponentMeta } from '@storybook/react';
import { StyleSheet, Text, View } from 'react-native';
import { Draggable } from './Draggable';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
      <View style={styles.container}>
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
