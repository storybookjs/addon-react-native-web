import { Meta, StoryObj } from '@storybook/react';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Card } from './Card';

const styles = StyleSheet.create({
  container: { width: 480 },
});

export default {
  component: Card,

  render: (args) => (
    <PaperProvider theme={DefaultTheme}>
      <View style={styles.container}>
        <Card {...args} />
      </View>
    </PaperProvider>
  ),
} satisfies Meta<typeof Card>;

export const Basic: StoryObj<typeof Card> = {
  args: {
    content:
      'Cillum sit aute cillum velit occaecat adipisicing aliquip sit ex quis ut dolor.',
    title: 'Card title',
    onCancel: () => {},
    onConfirm: () => {},
  },
};
