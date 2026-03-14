import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Feed } from './Feed';
import type { FeedItem } from './Feed.types';

const items: FeedItem[] = [
  { id: '1', author: 'Alice', timestamp: '2h ago', content: <p>Hello world</p>, avatarInitials: 'A' },
  { id: '2', author: 'Bob', timestamp: '3h ago', content: <p>Second post</p>, avatarInitials: 'B' },
  { id: '3', author: 'Carol', timestamp: '4h ago', content: <p>Third post</p>, avatarInitials: 'C' },
];

describe('Feed', () => {
  it('renders feed items', () => {
    render(<Feed items={items} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Hello world')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('renders empty state when no items', () => {
    render(<Feed items={[]} emptyState={<p>No posts</p>} />);
    expect(screen.getByText('No posts')).toBeInTheDocument();
  });

  it('paginates items', () => {
    render(<Feed items={items} pageSize={2} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.queryByText('Carol')).not.toBeInTheDocument();
  });

  it('navigates to next page', async () => {
    const user = userEvent.setup();
    render(<Feed items={items} pageSize={2} />);
    await user.click(screen.getByLabelText('Next page'));
    expect(screen.getByText('Carol')).toBeInTheDocument();
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
  });

  it('renders timestamps', () => {
    render(<Feed items={items} />);
    expect(screen.getByText('2h ago')).toBeInTheDocument();
  });
});
