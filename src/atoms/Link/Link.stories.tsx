import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';
import { LINK_VARIANTS } from './Link.types';

const meta = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: LINK_VARIANTS },
    external: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Click me',
    href: '#',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Subtle: Story = {
  args: { variant: 'subtle' },
};

export const External: Story = {
  args: { href: 'https://example.com', external: true, children: 'External link' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-[var(--laurel-space-4)]">
      {LINK_VARIANTS.map((variant) => (
        <Link key={variant} href="#" variant={variant}>
          {variant}
        </Link>
      ))}
    </div>
  ),
};
