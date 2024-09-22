import { Meta, StoryObj } from '@storybook/react';

import { MenuIcon } from './MenuIcon';

const meta = {
  title: 'libraries/SVG/MenuIcon',
  component: MenuIcon,
} satisfies Meta<typeof MenuIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: '#000',
  },
};
