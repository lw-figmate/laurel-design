import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Menu, MenuItem } from './Menu';

describe('Menu', () => {
  it('renders with role menu', () => {
    render(
      <Menu>
        <MenuItem>Item 1</MenuItem>
      </Menu>,
    );
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('renders menu items with role menuitem', () => {
    render(
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
      </Menu>,
    );
    expect(screen.getAllByRole('menuitem')).toHaveLength(2);
  });

  it('renders item text', () => {
    render(
      <Menu>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>,
    );
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('calls onClick when a menu item is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Menu>
        <MenuItem onClick={handleClick}>Edit</MenuItem>
      </Menu>,
    );
    await user.click(screen.getByText('Edit'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('supports disabled menu items', () => {
    render(
      <Menu>
        <MenuItem disabled>Can't touch this</MenuItem>
      </Menu>,
    );
    expect(screen.getByRole('menuitem')).toBeDisabled();
  });

  it('does not call onClick on disabled item', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Menu>
        <MenuItem disabled onClick={handleClick}>Disabled</MenuItem>
      </Menu>,
    );
    await user.click(screen.getByRole('menuitem'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('merges custom className on Menu', () => {
    render(
      <Menu className="my-menu">
        <MenuItem>Item</MenuItem>
      </Menu>,
    );
    expect(screen.getByRole('menu').className).toContain('my-menu');
  });

  it('forwards ref on Menu', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(
      <Menu ref={ref}>
        <MenuItem>Item</MenuItem>
      </Menu>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
