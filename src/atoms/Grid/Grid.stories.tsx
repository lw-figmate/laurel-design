import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from './Grid';
import { GRID_COLUMNS, GRID_SPACINGS } from './Grid.types';

const Cell = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] p-[var(--laurel-space-4)] text-center">
    {children}
  </div>
);

const meta = {
  title: 'Atoms/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'select', options: GRID_COLUMNS },
    gap: { control: 'select', options: GRID_SPACINGS },
    rowGap: { control: 'select', options: GRID_SPACINGS },
    colGap: { control: 'select', options: GRID_SPACINGS },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
  },
  args: {
    columns: '3',
    gap: '4',
  },
  parameters: {
    docs: {
      description: {
        component: 'CSS Grid layout with token-based columns, gap, and alignment props.',
      },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <Cell key={i}>{i + 1}</Cell>
      ))}
    </Grid>
  ),
};

export const TwoColumns: Story = {
  args: { columns: '2' },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 4 }, (_, i) => (
        <Cell key={i}>Cell {i + 1}</Cell>
      ))}
    </Grid>
  ),
};

export const FourColumns: Story = {
  args: { columns: '4', gap: '6' },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 8 }, (_, i) => (
        <Cell key={i}>{i + 1}</Cell>
      ))}
    </Grid>
  ),
};

export const CustomGaps: Story = {
  args: { columns: '3', rowGap: '8', colGap: '2' },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <Cell key={i}>{i + 1}</Cell>
      ))}
    </Grid>
  ),
};

export const AllColumns: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-8)]">
      {GRID_COLUMNS.map((cols) => (
        <div key={cols}>
          <p className="mb-[var(--laurel-space-2)] font-semibold">columns=&quot;{cols}&quot;</p>
          <Grid columns={cols} gap="3">
            {Array.from({ length: Number(cols) }, (_, i) => (
              <Cell key={i}>{i + 1}</Cell>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};
