import type { Meta, StoryObj } from '@storybook/react-vite';
import { PricingPage } from './PricingPage';

const meta = {
  title: 'Templates/PricingPage',
  component: PricingPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof PricingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Simple, transparent pricing',
    subtitle: 'Choose the plan that works for you. No hidden fees.',
    tiers: [
      { id: 'free', name: 'Free', price: '$0/mo', description: 'For individuals' },
      { id: 'pro', name: 'Pro', price: '$29/mo', description: 'For small teams', highlighted: true, ctaLabel: 'Start free trial' },
      { id: 'enterprise', name: 'Enterprise', price: 'Custom', description: 'For large organizations', ctaLabel: 'Contact sales' },
    ],
    features: [
      { name: 'Users', tiers: { free: '1', pro: '10', enterprise: 'Unlimited' } },
      { name: 'Storage', tiers: { free: '1 GB', pro: '50 GB', enterprise: 'Unlimited' } },
      { name: 'Support', tiers: { free: 'Community', pro: 'Priority', enterprise: 'Dedicated' } },
    ],
  },
};
