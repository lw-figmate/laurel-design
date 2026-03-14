import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar, SidebarItem, SidebarSection } from './Sidebar';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ height: 500 }}><Story /></div>],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: <Text as="strong" weight="bold">Acme App</Text>,
    footer: <Text as="span" size="xs" className="text-neutral-500">v1.0.0</Text>,
    children: (
      <>
        <SidebarSection title="Main">
          <SidebarItem active href="#">Dashboard</SidebarItem>
          <SidebarItem href="#">Analytics</SidebarItem>
          <SidebarItem href="#">Settings</SidebarItem>
        </SidebarSection>
        <SidebarSection title="Support">
          <SidebarItem href="#">Help</SidebarItem>
          <SidebarItem href="#">Docs</SidebarItem>
        </SidebarSection>
      </>
    ),
  },
};

export const Collapsed: Story = {
  args: {
    ...Default.args,
    collapsed: true,
  },
};
