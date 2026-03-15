import type { Meta, StoryObj } from '@storybook/react-vite';
import { forwardRef } from 'react';
import { IconAdapter } from './IconAdapter';
import { ICON_SIZES } from './Icon.types';

// Mock external icons to demonstrate the adapter pattern
const MockLucideHeart = forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
);
MockLucideHeart.displayName = 'MockLucideHeart';

const meta = {
  title: 'Atoms/IconAdapter',
  component: IconAdapter,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ICON_SIZES },
    label: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Adapts third-party icon libraries (Lucide, simple-icons) to the design system icon API. Normalizes sizing and accessibility attributes.',
      },
    },
  },
} satisfies Meta<typeof IconAdapter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: MockLucideHeart,
    size: 'md',
  },
};

export const WithLabel: Story = {
  args: {
    icon: MockLucideHeart,
    label: 'Heart',
    size: 'lg',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'end', gap: 16 }}>
      {ICON_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <IconAdapter icon={MockLucideHeart} size={size} />
          <span style={{ fontSize: 11, color: '#666' }}>{size}</span>
        </div>
      ))}
    </div>
  ),
};
