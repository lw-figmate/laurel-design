import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: <Text as="strong" size="lg" weight="bold">Acme</Text>,
    columns: [
      { title: 'Product', links: [{ label: 'Features', href: '#' }, { label: 'Pricing', href: '#' }] },
      { title: 'Company', links: [{ label: 'About', href: '#' }, { label: 'Blog', href: '#' }] },
      { title: 'Resources', links: [{ label: 'Docs', href: '#' }, { label: 'Help', href: '#' }] },
      { title: 'Legal', links: [{ label: 'Privacy', href: '#' }, { label: 'Terms', href: '#' }] },
    ],
    copyright: '© 2026 Acme Inc. All rights reserved.',
  },
};
