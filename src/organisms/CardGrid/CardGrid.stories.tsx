import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardGrid } from './CardGrid';
import { Card } from '../../molecules/Card';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Organisms/CardGrid',
  component: CardGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof CardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CardGrid>
      {['Design', 'Develop', 'Deploy', 'Monitor', 'Scale', 'Optimize'].map((title) => (
        <Card key={title}>
          <Text as="strong" weight="semibold">{title}</Text>
          <Text as="p" size="sm" className="mt-2 text-neutral-500">
            Description for {title.toLowerCase()} phase.
          </Text>
        </Card>
      ))}
    </CardGrid>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <CardGrid emptyState={<Text as="p" className="text-center text-neutral-500 py-8">No cards to display.</Text>}>
      {null}
    </CardGrid>
  ),
};
