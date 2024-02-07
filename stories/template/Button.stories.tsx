import { Meta, StoryObj } from '@storybook/react';

import { View, StyleSheet } from 'react-native';
import { Button } from './Button';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'flex-start' },
});

const meta = {
  component: Button,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
