import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Popover } from './Popover';

describe('Popover', () => {
  it('renders trigger', () => {
    render(
      <Popover trigger={<button>Open</button>}>
        <p>Popover content</p>
      </Popover>,
    );
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('does not show content by default', () => {
    render(
      <Popover trigger={<button>Open</button>}>
        <p>Popover content</p>
      </Popover>,
    );
    expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
  });

  it('shows content when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Popover trigger={<button>Open</button>}>
        <p>Popover content</p>
      </Popover>,
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('hides content when trigger is clicked again', async () => {
    const user = userEvent.setup();
    render(
      <Popover trigger={<button>Open</button>}>
        <p>Popover content</p>
      </Popover>,
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Popover content')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
  });

  it('hides content on Escape key', async () => {
    const user = userEvent.setup();
    render(
      <Popover trigger={<button>Open</button>}>
        <p>Popover content</p>
      </Popover>,
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Popover content')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
  });

  it('supports controlled mode', () => {
    const { rerender } = render(
      <Popover trigger={<button>Open</button>} open={false} onOpenChange={() => {}}>
        <p>Popover content</p>
      </Popover>,
    );
    expect(screen.queryByText('Popover content')).not.toBeInTheDocument();

    rerender(
      <Popover trigger={<button>Open</button>} open={true} onOpenChange={() => {}}>
        <p>Popover content</p>
      </Popover>,
    );
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('calls onOpenChange in controlled mode', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Popover trigger={<button>Open</button>} open={false} onOpenChange={handleChange}>
        <p>Popover content</p>
      </Popover>,
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
