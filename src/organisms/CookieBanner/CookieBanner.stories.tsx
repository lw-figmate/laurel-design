import type { Meta, StoryObj } from '@storybook/react-vite';
import { CookieBanner } from './CookieBanner';

const meta = {
  title: 'Organisms/CookieBanner',
  component: CookieBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onAccept: () => alert('Accepted'),
    onReject: () => alert('Rejected'),
    policyHref: '/privacy',
  },
};

export const WithSettings: Story = {
  args: {
    onAccept: () => alert('Accepted'),
    onReject: () => alert('Rejected'),
    onSettings: () => alert('Settings'),
    settingsLabel: 'Manage preferences',
    policyHref: '/privacy',
  },
};

export const TopPosition: Story = {
  args: {
    ...Default.args,
    position: 'top',
  },
};

export const CustomMessage: Story = {
  args: {
    onAccept: () => {},
    message: 'This site uses essential cookies for functionality and optional cookies for analytics.',
    acceptLabel: 'OK, got it',
  },
};
