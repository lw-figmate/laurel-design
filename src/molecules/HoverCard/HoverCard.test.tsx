import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { HoverCard } from './HoverCard';

describe('HoverCard', () => {
  beforeEach(() => { vi.useFakeTimers({ shouldAdvanceTime: true }); });
  afterEach(() => { vi.useRealTimers(); });

  it('renders trigger', () => {
    render(<HoverCard trigger={<span>Hover me</span>}>Card content</HoverCard>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('shows card on hover after delay', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<HoverCard trigger={<span>Trigger</span>} openDelay={100}>Content</HoverCard>);
    await user.hover(screen.getByText('Trigger'));
    act(() => { vi.advanceTimersByTime(150); });
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('hides card on mouse leave after delay', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<HoverCard trigger={<span>Trigger</span>} openDelay={0} closeDelay={100}>Content</HoverCard>);
    await user.hover(screen.getByText('Trigger'));
    act(() => { vi.advanceTimersByTime(10); });
    expect(screen.getByText('Content')).toBeInTheDocument();
    await user.unhover(screen.getByText('Trigger'));
    act(() => { vi.advanceTimersByTime(150); });
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('has tooltip role', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<HoverCard trigger={<span>T</span>} openDelay={0}>Info</HoverCard>);
    await user.hover(screen.getByText('T'));
    act(() => { vi.advanceTimersByTime(10); });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });
});
