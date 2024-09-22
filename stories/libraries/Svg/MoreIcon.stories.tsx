import { Meta, StoryObj } from '@storybook/react';

import { MoreIcon } from './MoreIcon';

const meta = {
  title: 'libraries/SVG/MoreIcon',
  component: MoreIcon,
} satisfies Meta<typeof MoreIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: '#000',
  },
};
