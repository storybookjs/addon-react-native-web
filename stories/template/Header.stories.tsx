import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: { user: {} },
};

export const LoggedOut: Story = { args: {} };
