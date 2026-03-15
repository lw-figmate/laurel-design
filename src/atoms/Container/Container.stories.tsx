import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './Container';
import { CONTAINER_SIZES } from './Container.types';

const meta = {
  title: 'Atoms/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: CONTAINER_SIZES },
    center: { control: 'boolean' },
    padding: { control: 'boolean' },
  },
  args: {
    children: 'Container content',
  },
  parameters: {
    docs: {
      description: {
        component: 'Constrains content to a maximum width with optional centering and horizontal padding. Use as a page-level layout wrapper.',
      },
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Container {...args}>
      <div className="rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] p-[var(--laurel-space-4)]">
        Content inside a container
      </div>
    </Container>
  ),
};

export const Small: Story = {
  args: { size: 'sm' },
  render: (args) => (
    <Container {...args}>
      <div className="rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] p-[var(--laurel-space-4)]">
        Small container (max-w-screen-sm)
      </div>
    </Container>
  ),
};

export const Full: Story = {
  args: { size: 'full' },
  render: (args) => (
    <Container {...args}>
      <div className="rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] p-[var(--laurel-space-4)]">
        Full-width container
      </div>
    </Container>
  ),
};

export const NoPadding: Story = {
  args: { padding: false },
  render: (args) => (
    <Container {...args}>
      <div className="rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] p-[var(--laurel-space-4)]">
        Container without padding
      </div>
    </Container>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-4)]">
      {CONTAINER_SIZES.map((size) => (
        <Container key={size} size={size}>
          <div className="rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] p-[var(--laurel-space-3)] text-center">
            {size}
          </div>
        </Container>
      ))}
    </div>
  ),
};
