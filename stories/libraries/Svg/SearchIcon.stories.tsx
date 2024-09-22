import { Meta, StoryObj } from '@storybook/react';

import { SearchIcon } from './SearchIcon';

const meta = {
  title: 'libraries/SVG/SearchIcon',
  component: SearchIcon,
} satisfies Meta<typeof SearchIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: '#000',
  },
};
