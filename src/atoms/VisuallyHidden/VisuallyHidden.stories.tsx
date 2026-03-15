import type { Meta, StoryObj } from '@storybook/react-vite';
import { VisuallyHidden } from './VisuallyHidden';

const meta = {
  title: 'Atoms/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: ['span', 'div'] },
    children: { control: 'text' },
  },
  args: {
    children: 'This text is visually hidden but available to screen readers',
  },
  parameters: {
    docs: {
      description: {
        component: 'Hides content visually while keeping it accessible to screen readers. Useful for providing additional context to assistive technology.',
      },
    },
  },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <p>There is hidden text below this paragraph (inspect the DOM to see it):</p>
      <VisuallyHidden {...args} />
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <button>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
      </svg>
      <VisuallyHidden>Add item</VisuallyHidden>
    </button>
  ),
};

export const AsDiv: Story = {
  args: { as: 'div', children: 'Hidden div content' },
  render: (args) => (
    <div>
      <p>Hidden div is below (inspect the DOM):</p>
      <VisuallyHidden {...args} />
    </div>
  ),
};
