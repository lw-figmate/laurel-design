import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { NotificationCenter } from './NotificationCenter';
import type { NotificationItem } from './NotificationCenter.types';

const notifications: NotificationItem[] = [
  { id: '1', title: 'New message', description: 'You have a new message', timestamp: '5m ago', unread: true },
  { id: '2', title: 'Update complete', timestamp: '1h ago', unread: false },
];

describe('NotificationCenter', () => {
  it('renders trigger button', () => {
    render(<NotificationCenter notifications={[]} />);
    expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
  });

  it('shows unread badge count', () => {
    render(<NotificationCenter notifications={notifications} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('opens panel on click', async () => {
    const user = userEvent.setup();
    render(<NotificationCenter notifications={notifications} />);
    await user.click(screen.getByLabelText('Notifications'));
    expect(screen.getByText('New message')).toBeInTheDocument();
    expect(screen.getByText('Update complete')).toBeInTheDocument();
  });

  it('shows empty message when no notifications', async () => {
    const user = userEvent.setup();
    render(<NotificationCenter notifications={[]} emptyMessage="All caught up!" />);
    await user.click(screen.getByLabelText('Notifications'));
    expect(screen.getByText('All caught up!')).toBeInTheDocument();
  });

  it('calls onNotificationClick', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<NotificationCenter notifications={notifications} onNotificationClick={handleClick} />);
    await user.click(screen.getByLabelText('Notifications'));
    await user.click(screen.getByText('New message'));
    expect(handleClick).toHaveBeenCalledWith('1');
  });

  it('shows mark all read button when there are unread items', async () => {
    const user = userEvent.setup();
    const handleMarkAll = vi.fn();
    render(<NotificationCenter notifications={notifications} onMarkAllRead={handleMarkAll} />);
    await user.click(screen.getByLabelText('Notifications'));
    await user.click(screen.getByRole('button', { name: 'Mark all read' }));
    expect(handleMarkAll).toHaveBeenCalledOnce();
  });

  it('closes on Escape', async () => {
    const user = userEvent.setup();
    render(<NotificationCenter notifications={notifications} />);
    await user.click(screen.getByLabelText('Notifications'));
    expect(screen.getByText('New message')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByText('New message')).not.toBeInTheDocument();
  });
});
