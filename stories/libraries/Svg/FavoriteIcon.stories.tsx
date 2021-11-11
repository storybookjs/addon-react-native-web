import { ComponentMeta } from '@storybook/react';

import { FavoriteIcon } from './FavoriteIcon';

export default {
  title: 'libraries/SVG/FavoriteIcon',
  component: FavoriteIcon,
} as ComponentMeta<typeof FavoriteIcon>;

export const Basic = {
  args: {
    color: '#000',
  },
};
