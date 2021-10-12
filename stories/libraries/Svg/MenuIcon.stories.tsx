import { ComponentMeta } from '@storybook/react';

import { MenuIcon } from './MenuIcon';

export default {
  title: 'libraries/react-native-svg/MenuIcon',
  component: MenuIcon,
  argTypes: { color: { control: 'color' } },
} as ComponentMeta<typeof MenuIcon>;

export const Basic = {
  args: {
    color: '#000',
  },
};
