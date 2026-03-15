import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from './Flex';

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] px-[var(--laurel-space-4)] py-[var(--laurel-space-2)]">
    {children}
  </div>
);

const meta = {
  title: 'Atoms/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['row', 'row-reverse', 'column', 'column-reverse'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch', 'baseline'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] },
    gap: { control: 'select', options: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'] },
    wrap: { control: 'select', options: [false, true, 'reverse'] },
    flex: { control: 'select', options: ['1', 'auto', 'none'] },
  },
  args: {
    gap: '4',
  },
  parameters: {
    docs: {
      description: {
        component: 'General-purpose flexbox container with token-based gap, alignment, and direction props.',
      },
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Flex {...args}>
      <Box>One</Box>
      <Box>Two</Box>
      <Box>Three</Box>
    </Flex>
  ),
};

export const Column: Story = {
  args: { direction: 'column', gap: '3' },
  render: (args) => (
    <Flex {...args}>
      <Box>First</Box>
      <Box>Second</Box>
      <Box>Third</Box>
    </Flex>
  ),
};

export const Centered: Story = {
  args: { align: 'center', justify: 'center', gap: '4' },
  render: (args) => (
    <Flex {...args} style={{ minHeight: 200 }}>
      <Box>Centered</Box>
    </Flex>
  ),
};

export const SpaceBetween: Story = {
  args: { justify: 'between', align: 'center' },
  render: (args) => (
    <Flex {...args}>
      <Box>Left</Box>
      <Box>Right</Box>
    </Flex>
  ),
};

export const Wrapping: Story = {
  args: { wrap: true, gap: '3' },
  render: (args) => (
    <Flex {...args} style={{ maxWidth: 300 }}>
      {Array.from({ length: 8 }, (_, i) => (
        <Box key={i}>Item {i + 1}</Box>
      ))}
    </Flex>
  ),
};
