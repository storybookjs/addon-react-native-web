import { ComponentMeta } from '@storybook/react';

import { MenuIcon } from './MenuIcon';

export default {
  title: 'libraries/SVG/MenuIcon',
  component: MenuIcon,
} as ComponentMeta<typeof MenuIcon>;

export const Basic = {
  args: {
    color: '#000',
  },
};
