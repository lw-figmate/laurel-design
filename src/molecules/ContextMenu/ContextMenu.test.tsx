import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ContextMenu } from './ContextMenu';

describe('ContextMenu', () => {
  const items = [
    { label: 'Cut', onClick: vi.fn() },
    { label: 'Copy', onClick: vi.fn() },
    { separator: true, label: '' },
    { label: 'Paste', onClick: vi.fn() },
  ];

  it('renders children', () => {
    render(<ContextMenu items={items}><div>Right-click me</div></ContextMenu>);
    expect(screen.getByText('Right-click me')).toBeInTheDocument();
  });

  it('shows menu on right-click', async () => {
    const user = userEvent.setup();
    render(<ContextMenu items={items}><div>Target</div></ContextMenu>);
    await user.pointer({ target: screen.getByText('Target'), keys: '[MouseRight]' });
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText('Cut')).toBeInTheDocument();
  });

  it('calls item onClick and closes menu', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <ContextMenu items={[{ label: 'Action', onClick }]}>
        <div>Target</div>
      </ContextMenu>,
    );
    await user.pointer({ target: screen.getByText('Target'), keys: '[MouseRight]' });
    await user.click(screen.getByText('Action'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('renders separators', async () => {
    const user = userEvent.setup();
    render(<ContextMenu items={items}><div>Target</div></ContextMenu>);
    await user.pointer({ target: screen.getByText('Target'), keys: '[MouseRight]' });
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
