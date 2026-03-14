import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NotificationBadge } from './NotificationBadge';

describe('NotificationBadge', () => {
  it('renders children', () => {
    render(
      <NotificationBadge count={5}>
        <button>Inbox</button>
      </NotificationBadge>,
    );
    expect(screen.getByRole('button', { name: 'Inbox' })).toBeInTheDocument();
  });

  it('shows count', () => {
    render(
      <NotificationBadge count={3}>
        <button>Inbox</button>
      </NotificationBadge>,
    );
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('caps count at max', () => {
    render(
      <NotificationBadge count={150} max={99}>
        <button>Inbox</button>
      </NotificationBadge>,
    );
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('does not show badge when count is 0', () => {
    const { container } = render(
      <NotificationBadge count={0}>
        <button>Inbox</button>
      </NotificationBadge>,
    );
    expect(container.querySelector('span')).not.toBeInTheDocument();
  });

  it('shows dot instead of count when dot=true', () => {
    render(
      <NotificationBadge dot>
        <button>Inbox</button>
      </NotificationBadge>,
    );
    const badge = screen.getByLabelText('New notification');
    expect(badge).toBeInTheDocument();
    expect(badge.textContent).toBe('');
  });

  it('has accessible label with count', () => {
    render(
      <NotificationBadge count={5}>
        <button>Inbox</button>
      </NotificationBadge>,
    );
    expect(screen.getByLabelText('5 notifications')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(
      <NotificationBadge ref={ref} count={1}>
        <button>Inbox</button>
      </NotificationBadge>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
