import { ComponentMeta } from '@storybook/react';

import { Gradient } from './Gradient';

export default {
  title: 'libraries/Expo gradient/Gradient',
  component: Gradient,
} as ComponentMeta<typeof Gradient>;

export const Basic = {
  args: {
    text: 'Gradient example',
  },
};
