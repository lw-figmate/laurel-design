import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CommentThread } from './CommentThread';
import type { Comment } from './CommentThread.types';

const comments: Comment[] = [
  {
    id: '1',
    author: 'Alice',
    content: 'Great post!',
    timestamp: '2 hours ago',
    replies: [
      {
        id: '2',
        author: 'Bob',
        content: 'Thanks Alice!',
        timestamp: '1 hour ago',
      },
    ],
  },
  {
    id: '3',
    author: 'Charlie',
    content: 'Interesting read.',
    timestamp: '30 min ago',
  },
];

describe('CommentThread', () => {
  it('renders comments', () => {
    render(<CommentThread comments={comments} />);
    expect(screen.getByText('Great post!')).toBeInTheDocument();
    expect(screen.getByText('Interesting read.')).toBeInTheDocument();
  });

  it('renders nested replies', () => {
    render(<CommentThread comments={comments} />);
    expect(screen.getByText('Thanks Alice!')).toBeInTheDocument();
  });

  it('renders author names', () => {
    render(<CommentThread comments={comments} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('renders timestamps', () => {
    render(<CommentThread comments={comments} />);
    expect(screen.getByText('2 hours ago')).toBeInTheDocument();
  });

  it('shows reply input when Reply is clicked', () => {
    render(<CommentThread comments={comments} onReply={vi.fn()} />);
    const replyButtons = screen.getAllByText('Reply');
    fireEvent.click(replyButtons[0]);
    expect(screen.getByPlaceholderText('Write a reply...')).toBeInTheDocument();
  });

  it('calls onReply when reply is submitted', () => {
    const onReply = vi.fn();
    render(<CommentThread comments={comments} onReply={onReply} />);
    const replyButtons = screen.getAllByText('Reply');
    fireEvent.click(replyButtons[0]);
    const input = screen.getByPlaceholderText('Write a reply...');
    fireEvent.change(input, { target: { value: 'My reply' } });
    fireEvent.click(screen.getByText('Send'));
    expect(onReply).toHaveBeenCalledWith('1', 'My reply');
  });

  it('calls onDelete when delete button is clicked', () => {
    const onDelete = vi.fn();
    render(<CommentThread comments={comments} onDelete={onDelete} />);
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    expect(onDelete).toHaveBeenCalledWith('1');
  });

  it('renders empty content when no comments', () => {
    render(<CommentThread comments={[]} emptyContent={<span>No comments</span>} />);
    expect(screen.getByText('No comments')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<CommentThread ref={ref} comments={comments} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
