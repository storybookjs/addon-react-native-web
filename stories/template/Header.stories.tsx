import { ComponentMeta } from '@storybook/react';
import { Header } from './Header';

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

export const LoggedIn = {
  args: { user: {} },
};

export const LoggedOut = { args: {} };
