import type { Meta, StoryObj } from '@storybook/react-vite';
import { PricingTable } from './PricingTable';
import { Badge } from '../../atoms/Badge';

const meta = {
  title: 'Organisms/PricingTable',
  component: PricingTable,
  tags: ['autodocs'],
} satisfies Meta<typeof PricingTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tiers: [
      { id: 'free', name: 'Free', price: '$0/mo', description: 'For individuals' },
      { id: 'pro', name: 'Pro', price: '$19/mo', description: 'For teams', highlighted: true, ctaLabel: 'Start Trial' },
      { id: 'enterprise', name: 'Enterprise', price: '$99/mo', description: 'For organizations' },
    ],
    features: [
      { name: 'Users', tiers: { free: '1', pro: '10', enterprise: 'Unlimited' } },
      { name: 'Storage', tiers: { free: '5 GB', pro: '100 GB', enterprise: '1 TB' } },
      { name: 'API Access', tiers: { free: false, pro: true, enterprise: true } },
      { name: 'Priority Support', tiers: { free: false, pro: false, enterprise: true } },
      { name: 'SSO', tiers: { free: false, pro: false, enterprise: true } },
    ],
    highlightBadge: <Badge variant="primary">Most Popular</Badge>,
    onTierSelect: (id) => alert(`Selected tier: ${id}`),
  },
};
