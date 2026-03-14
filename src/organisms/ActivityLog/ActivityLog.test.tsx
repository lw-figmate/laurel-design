import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ActivityLog } from './ActivityLog';
import type { ActivityEvent } from './ActivityLog.types';

const events: ActivityEvent[] = [
  { id: '1', title: 'Deployed v1.2', timestamp: '2 hours ago', variant: 'success' },
  { id: '2', title: 'Bug fix merged', description: 'Fixed login issue', timestamp: '4 hours ago' },
  { id: '3', title: 'New user signup', timestamp: '6 hours ago', variant: 'primary' },
];

describe('ActivityLog', () => {
  it('renders all events', () => {
    render(<ActivityLog events={events} />);
    expect(screen.getByText('Deployed v1.2')).toBeInTheDocument();
    expect(screen.getByText('Bug fix merged')).toBeInTheDocument();
    expect(screen.getByText('New user signup')).toBeInTheDocument();
  });

  it('renders event descriptions', () => {
    render(<ActivityLog events={events} />);
    expect(screen.getByText('Fixed login issue')).toBeInTheDocument();
  });

  it('renders timestamps', () => {
    render(<ActivityLog events={events} />);
    expect(screen.getByText('2 hours ago')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<ActivityLog events={events} title="Recent Activity" />);
    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
  });

  it('renders empty message when no events', () => {
    render(<ActivityLog events={[]} emptyMessage="Nothing here" />);
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
  });

  it('renders pagination when totalPages > 1', () => {
    const onPageChange = vi.fn();
    render(
      <ActivityLog
        events={events}
        totalPages={5}
        currentPage={1}
        onPageChange={onPageChange}
      />,
    );
    fireEvent.click(screen.getByLabelText('Next page'));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('does not render pagination when totalPages is 1', () => {
    render(<ActivityLog events={events} totalPages={1} currentPage={1} onPageChange={vi.fn()} />);
    expect(screen.queryByLabelText('Next page')).not.toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<ActivityLog ref={ref} events={events} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('applies custom className', () => {
    const { container } = render(<ActivityLog events={events} className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });
});
