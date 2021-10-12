import { ComponentMeta } from '@storybook/react';

import { MoreIcon } from './MoreIcon';

export default {
  title: 'libraries/react-native-svg/MoreIcon',
  component: MoreIcon,
  argTypes: { color: { control: 'color' } },
} as ComponentMeta<typeof MoreIcon>;

export const Basic = {
  args: {
    color: '#000',
  },
};
