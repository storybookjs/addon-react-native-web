import { Meta, StoryObj } from '@storybook/react';

import { FolderIcon } from './FolderIcon';

const meta = {
  title: 'libraries/SVG/FolderIcon',
  component: FolderIcon,
} satisfies Meta<typeof FolderIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: '#000',
  },
};
