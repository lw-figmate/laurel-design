import type { Meta, StoryObj } from '@storybook/react-vite';
import { MobileNav } from './MobileNav';

const meta = {
  title: 'Organisms/MobileNav',
  component: MobileNav,
  tags: ['autodocs'],
} satisfies Meta<typeof MobileNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'About', href: '/about', active: true },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    links: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Settings', href: '/settings' },
      { label: 'Help', href: '/help' },
    ],
    header: <span className="text-lg font-bold">Laurel</span>,
    footer: <span className="text-sm text-gray-500">v1.0.0</span>,
  },
};
