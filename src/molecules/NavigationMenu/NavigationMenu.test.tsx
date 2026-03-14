import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from './NavigationMenu';

describe('NavigationMenu', () => {
  it('renders nav with menubar', () => {
    render(
      <NavigationMenu>
        <NavigationMenuItem trigger="Home" />
      </NavigationMenu>,
    );
    expect(screen.getByRole('menubar')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('shows dropdown on hover', async () => {
    const user = userEvent.setup();
    render(
      <NavigationMenu>
        <NavigationMenuItem trigger="Products">
          <NavigationMenuLink href="/widgets">Widgets</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>,
    );
    await user.hover(screen.getByText('Products'));
    expect(screen.getByText('Widgets')).toBeInTheDocument();
  });

  it('supports active link', async () => {
    const user = userEvent.setup();
    render(
      <NavigationMenu>
        <NavigationMenuItem trigger="Nav">
          <NavigationMenuLink href="/home" active>Home</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>,
    );
    // Hover to open the dropdown so the link is visible
    await user.hover(screen.getByText('Nav'));
    const link = screen.getByText('Home');
    expect(link.getAttribute('class')).toContain('brand');
  });

  it('has aria-haspopup on items with children', async () => {
    const user = userEvent.setup();
    render(
      <NavigationMenu>
        <NavigationMenuItem trigger="Menu">
          <NavigationMenuLink href="/">Link</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>,
    );
    const item = screen.getByRole('menuitem');
    expect(item.getAttribute('aria-haspopup')).toBe('true');
    await user.hover(item);
    expect(item.getAttribute('aria-expanded')).toBe('true');
  });
});
