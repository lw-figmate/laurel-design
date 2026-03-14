import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataList, DataListItem, DataListLabel, DataListValue } from './DataList';

const meta = {
  title: 'Molecules/DataList',
  component: DataList,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
} satisfies Meta<typeof DataList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <DataList>
      <DataListItem>
        <DataListLabel>Name</DataListLabel>
        <DataListValue>Alice Johnson</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Email</DataListLabel>
        <DataListValue>alice@example.com</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Role</DataListLabel>
        <DataListValue>Administrator</DataListValue>
      </DataListItem>
    </DataList>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <DataList orientation="horizontal">
      <DataListItem>
        <DataListLabel>Status</DataListLabel>
        <DataListValue>Active</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Joined</DataListLabel>
        <DataListValue>Jan 1, 2024</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Plan</DataListLabel>
        <DataListValue>Enterprise</DataListValue>
      </DataListItem>
    </DataList>
  ),
};
