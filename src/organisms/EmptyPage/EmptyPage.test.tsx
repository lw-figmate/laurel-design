import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EmptyPage } from './EmptyPage';

describe('EmptyPage', () => {
  it('renders title', () => {
    render(<EmptyPage title="No results found" />);
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<EmptyPage title="Empty" description="Try a different search" />);
    expect(screen.getByText('Try a different search')).toBeInTheDocument();
  });

  it('renders illustration when provided', () => {
    render(<EmptyPage title="Empty" illustration={<svg data-testid="illust" />} />);
    expect(screen.getByTestId('illust')).toBeInTheDocument();
  });

  it('renders action button', () => {
    render(<EmptyPage title="Empty" action={<button>Create new</button>} />);
    expect(screen.getByText('Create new')).toBeInTheDocument();
  });

  it('renders secondary action', () => {
    render(<EmptyPage title="Empty" secondaryAction={<button>Go back</button>} />);
    expect(screen.getByText('Go back')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<EmptyPage ref={ref} title="Empty" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('applies custom className', () => {
    const { container } = render(<EmptyPage title="Empty" className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });
});
