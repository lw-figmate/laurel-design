import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';
import { LINK_VARIANTS, LINK_SIZES } from './Link.types';

const meta = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: LINK_VARIANTS },
    size: { control: 'select', options: LINK_SIZES },
    external: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Click me',
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        component: 'Styled anchor element for navigation. Supports external links with automatic `rel` and `target` attributes.',
      },
    },
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

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-[var(--laurel-space-4)] items-center">
      {LINK_SIZES.map((s) => (
        <Link key={s} href="#" size={s}>{s}</Link>
      ))}
    </div>
  ),
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
