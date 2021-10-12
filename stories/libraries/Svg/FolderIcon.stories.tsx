import { ComponentMeta } from '@storybook/react';

import { FolderIcon } from './FolderIcon';

export default {
  title: 'libraries/react-native-svg/FolderIcon',
  component: FolderIcon,
  argTypes: { color: { control: 'color' } },
} as ComponentMeta<typeof FolderIcon>;

export const Basic = {
  args: {
    size: 24,
    color: '#000',
  },
};
