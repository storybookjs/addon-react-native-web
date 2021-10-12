import { ComponentMeta } from '@storybook/react';

import { FavoriteIcon } from './FavoriteIcon';

export default {
  title: 'libraries/react-native-svg/FavoriteIcon',
  component: FavoriteIcon,
  argTypes: { color: { control: 'color' } },
} as ComponentMeta<typeof FavoriteIcon>;

export const Basic = {
  args: {
    color: '#000',
  },
};
