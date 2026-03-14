import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('renders the title', () => {
    render(<EmptyState title="No results" />);
    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<EmptyState title="No results" description="Try a different search" />);
    expect(screen.getByText('Try a different search')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(<EmptyState title="Empty" icon={<span data-testid="icon">📭</span>} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders action when provided', () => {
    render(<EmptyState title="Empty" action={<button>Create new</button>} />);
    expect(screen.getByRole('button', { name: 'Create new' })).toBeInTheDocument();
  });

  it('does not render description when not provided', () => {
    const { container } = render(<EmptyState title="Empty" />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBe(0);
  });

  it('merges custom className', () => {
    const { container } = render(<EmptyState title="Empty" className="my-custom" />);
    expect(container.firstElementChild!.className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<EmptyState ref={ref} title="Empty" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
