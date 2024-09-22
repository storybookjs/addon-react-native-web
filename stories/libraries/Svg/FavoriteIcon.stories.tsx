import { Meta, StoryObj } from '@storybook/react';
import { FavoriteIcon } from './FavoriteIcon';

const meta = {
  title: 'libraries/SVG/FavoriteIcon',
  component: FavoriteIcon,
} satisfies Meta<typeof FavoriteIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: '#000',
  },
};
