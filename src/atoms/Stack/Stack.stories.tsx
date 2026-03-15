import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from './Stack';
import { STACK_DIRECTIONS, STACK_ALIGNS, STACK_JUSTIFIES, STACK_SPACINGS } from './Stack.types';

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] px-[var(--laurel-space-4)] py-[var(--laurel-space-2)]">
    {children}
  </div>
);

const meta = {
  title: 'Atoms/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: STACK_DIRECTIONS },
    align: { control: 'select', options: STACK_ALIGNS },
    justify: { control: 'select', options: STACK_JUSTIFIES },
    gap: { control: 'select', options: STACK_SPACINGS },
    wrap: { control: 'boolean' },
  },
  args: {
    gap: '4',
  },
  parameters: {
    docs: {
      description: {
        component: 'Vertical or horizontal stack layout using flexbox with token-based spacing. Defaults to a vertical column.',
      },
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <Box>First</Box>
      <Box>Second</Box>
      <Box>Third</Box>
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: { direction: 'row', gap: '4' },
  render: (args) => (
    <Stack {...args}>
      <Box>One</Box>
      <Box>Two</Box>
      <Box>Three</Box>
    </Stack>
  ),
};

export const Centered: Story = {
  args: { align: 'center', justify: 'center', gap: '3' },
  render: (args) => (
    <Stack {...args}>
      <Box>Centered item</Box>
      <Box>Another centered item</Box>
    </Stack>
  ),
};

export const TightSpacing: Story = {
  args: { gap: '1' },
  render: (args) => (
    <Stack {...args}>
      <Box>Tight</Box>
      <Box>Spacing</Box>
      <Box>Items</Box>
    </Stack>
  ),
};

export const WideSpacing: Story = {
  args: { gap: '10' },
  render: (args) => (
    <Stack {...args}>
      <Box>Wide</Box>
      <Box>Spacing</Box>
      <Box>Items</Box>
    </Stack>
  ),
};
