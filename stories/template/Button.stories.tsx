import { ComponentMeta } from '@storybook/react';

import { View, StyleSheet } from 'react-native';
import { Button } from './Button';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'flex-start' },
});

export default {
  component: Button,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as ComponentMeta<typeof Button>;

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
