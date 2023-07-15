import { Meta } from '@storybook/react';
import { StyleSheet, Text, View } from 'react-native';
import { Draggable } from './Draggable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    // @ts-ignore
    height: '100vh',
  },
});

export default {
  title: 'libraries/Gesture Handler/Draggable',
  component: Draggable,
  render: (args) => {
    return (
      <GestureHandlerRootView style={styles.fill}>
        <View style={styles.container}>
          <Draggable {...args}>
            <Text>{args.children}</Text>
          </Draggable>
        </View>
      </GestureHandlerRootView>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Draggable>;

export const Basic = {
  args: {
    children: 'Drag me around',
  },
};
