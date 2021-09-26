import { ComponentMeta } from '@storybook/react';
import * as HeaderStories from '../Header/Header.stories';
import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

export const LoggedIn = {
  args: HeaderStories.LoggedIn.args,
};

export const LoggedOut = {
  args: HeaderStories.LoggedOut.args,
};
