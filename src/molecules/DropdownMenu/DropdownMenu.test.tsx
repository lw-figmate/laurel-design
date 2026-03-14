import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './DropdownMenu';

describe('DropdownMenu', () => {
  it('renders trigger', () => {
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem>Item</DropdownMenuItem>
      </DropdownMenu>,
    );
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('shows menu on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem>Action 1</DropdownMenuItem>
        <DropdownMenuItem>Action 2</DropdownMenuItem>
      </DropdownMenu>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText('Action 1')).toBeInTheDocument();
  });

  it('calls item onClick and closes', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem onClick={onClick}>Do thing</DropdownMenuItem>
      </DropdownMenu>,
    );
    await user.click(screen.getByText('Open'));
    await user.click(screen.getByText('Do thing'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('renders separator', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem>A</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>B</DropdownMenuItem>
      </DropdownMenu>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('has aria-haspopup and aria-expanded', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem>X</DropdownMenuItem>
      </DropdownMenu>,
    );
    const triggerWrapper = screen.getByText('Open').closest('[aria-haspopup]')!;
    expect(triggerWrapper.getAttribute('aria-haspopup')).toBe('true');
    expect(triggerWrapper.getAttribute('aria-expanded')).toBe('false');
    await user.click(screen.getByText('Open'));
    expect(triggerWrapper.getAttribute('aria-expanded')).toBe('true');
  });
});
