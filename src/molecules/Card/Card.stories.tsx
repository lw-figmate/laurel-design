import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { Divider } from '../../atoms/Divider';
import { Badge } from '../../atoms/Badge';

const meta = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    noPadding: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Text>A simple card with some content.</Text>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Text size="xl" weight="semibold">Card Title</Text>
        <Text size="sm" className="text-[var(--laurel-color-neutral-500)]">
          A short description of this card.
        </Text>
      </CardHeader>
      <CardBody>
        <Text>
          This is the main content area of the card. It can contain any elements you need.
        </Text>
      </CardBody>
      <CardFooter>
        <Button size="sm">Action</Button>
        <Button size="sm" variant="ghost">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Text size="lg" weight="semibold">Status</Text>
          <Badge variant="success">Active</Badge>
        </div>
      </CardHeader>
      <CardBody>
        <Text size="sm" className="text-[var(--laurel-color-neutral-500)]">
          Everything is running smoothly.
        </Text>
      </CardBody>
    </Card>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Text size="lg" weight="semibold">Settings</Text>
      </CardHeader>
      <Divider />
      <CardBody>
        <Text size="sm" className="pt-[var(--laurel-space-4)]">
          Configure your preferences below.
        </Text>
      </CardBody>
    </Card>
  ),
};

export const NoPadding: Story = {
  args: { noPadding: true },
  render: (args) => (
    <Card {...args}>
      <img
        src="https://picsum.photos/400/200"
        alt="Placeholder"
        className="w-full h-48 object-cover rounded-t-[var(--laurel-radius-xl)]"
      />
      <div className="p-[var(--laurel-space-6)]">
        <Text size="lg" weight="semibold">Image Card</Text>
        <Text size="sm" className="text-[var(--laurel-color-neutral-500)]">
          A card with an edge-to-edge image.
        </Text>
      </div>
    </Card>
  ),
};
