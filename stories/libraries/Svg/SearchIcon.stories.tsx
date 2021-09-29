import { ComponentMeta } from '@storybook/react';

import { SearchIcon } from './SearchIcon';

export default {
  title: 'libraries/react-native-svg/SearchIcon',
  component: SearchIcon,
  argTypes: { color: { control: 'color' } },
} as ComponentMeta<typeof SearchIcon>;

export const Basic = {
  args: {
    color: '#000',
  },
};
