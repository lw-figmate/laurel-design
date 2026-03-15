import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    vertical: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Groups related buttons together with connected borders and spacing. Supports horizontal and vertical orientations.',
      },
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Save</Button>
      <Button variant="secondary">Cancel</Button>
    </ButtonGroup>
  ),
};

export const ThreeButtons: Story = {
  render: () => (
    <ButtonGroup>
      <Button>First</Button>
      <Button variant="secondary">Second</Button>
      <Button variant="ghost">Third</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup vertical>
      <Button>Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Reset</Button>
    </ButtonGroup>
  ),
};

export const MixedVariants: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Confirm</Button>
      <Button variant="danger">Delete</Button>
    </ButtonGroup>
  ),
};

export const SmallButtons: Story = {
  render: () => (
    <ButtonGroup>
      <Button size="sm">Edit</Button>
      <Button size="sm" variant="secondary">View</Button>
      <Button size="sm" variant="ghost">Share</Button>
    </ButtonGroup>
  ),
};
