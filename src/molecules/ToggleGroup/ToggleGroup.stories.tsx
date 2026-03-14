import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

const meta = {
  title: 'Molecules/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    multiple: { control: 'boolean' },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ToggleGroup defaultValue="center" {...args}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup multiple defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Small: Story = {
  render: () => (
    <ToggleGroup size="sm" defaultValue="a">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <ToggleGroup defaultValue="on">
      <ToggleGroupItem value="on">On</ToggleGroupItem>
      <ToggleGroupItem value="off">Off</ToggleGroupItem>
      <ToggleGroupItem value="na" disabled>N/A</ToggleGroupItem>
    </ToggleGroup>
  ),
};
