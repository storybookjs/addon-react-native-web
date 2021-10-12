import { ComponentMeta } from '@storybook/react';
import * as HeaderStories from './Header.stories';
import { Page } from './Page';

export default {
  component: Page,
} as ComponentMeta<typeof Page>;

export const LoggedIn = {
  args: HeaderStories.LoggedIn.args,
};

export const LoggedOut = {
  args: HeaderStories.LoggedOut.args,
};
