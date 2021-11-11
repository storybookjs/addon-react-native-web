import { ComponentMeta } from '@storybook/react';

import { MoreIcon } from './MoreIcon';

export default {
  title: 'libraries/SVG/MoreIcon',
  component: MoreIcon,
} as ComponentMeta<typeof MoreIcon>;

export const Basic = {
  args: {
    color: '#000',
  },
};
