import { Meta, StoryObj } from '@storybook/react';

import { Gradient } from './Gradient';

const meta = {
  title: 'libraries/Expo gradient/Gradient',
  component: Gradient,
} satisfies Meta<typeof Gradient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Gradient example',
  },
};
