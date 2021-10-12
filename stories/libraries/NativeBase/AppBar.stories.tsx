import React from 'react';
import { ComponentMeta } from '@storybook/react';
import BoxStories from './Box.stories';
import { AppBar } from './AppBar';

export default {
  component: AppBar,
  decorators: BoxStories.decorators,
} as ComponentMeta<typeof AppBar>;

export const Basic = {
  args: {},
};
