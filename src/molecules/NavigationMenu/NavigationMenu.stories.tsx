import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from './NavigationMenu';

const meta = {
  title: 'Molecules/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuItem trigger="Home" />
      <NavigationMenuItem trigger="Products">
        <NavigationMenuLink href="/widgets">Widgets</NavigationMenuLink>
        <NavigationMenuLink href="/gadgets">Gadgets</NavigationMenuLink>
        <NavigationMenuLink href="/tools">Tools</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem trigger="About" />
      <NavigationMenuItem trigger="Contact" />
    </NavigationMenu>
  ),
};
