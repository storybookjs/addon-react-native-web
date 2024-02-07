import { Meta, StoryObj } from '@storybook/react';

import { ButtonWind } from './ButtonWind';

const meta = {
  title: 'components/ButtonWind',
  component: ButtonWind,
} satisfies Meta<typeof ButtonWind>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Click me',
  },
};
