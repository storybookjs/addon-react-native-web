import { ComponentMeta } from '@storybook/react';

import { SearchIcon } from './SearchIcon';

export default {
  title: 'libraries/SVG/SearchIcon',
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>;

export const Basic = {
  args: {
    color: '#000',
  },
};
