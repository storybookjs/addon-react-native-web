import { ComponentMeta } from '@storybook/react';

import { FolderIcon } from './FolderIcon';

export default {
  title: 'libraries/SVG/FolderIcon',
  component: FolderIcon,
} as ComponentMeta<typeof FolderIcon>;

export const Basic = {
  args: {
    color: '#000',
  },
};
