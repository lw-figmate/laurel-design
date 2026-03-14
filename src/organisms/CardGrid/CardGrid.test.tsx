import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CardGrid } from './CardGrid';

describe('CardGrid', () => {
  it('renders children in a grid', () => {
    render(
      <CardGrid>
        <div>Card 1</div>
        <div>Card 2</div>
      </CardGrid>,
    );
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
  });

  it('shows empty state when no children', () => {
    render(<CardGrid emptyState={<p>No cards</p>}>{}</CardGrid>);
    expect(screen.getByText('No cards')).toBeInTheDocument();
  });

  it('applies custom grid styles', () => {
    const { container } = render(
      <CardGrid minCardWidth="200px" gap="10px">
        <div>Card</div>
      </CardGrid>,
    );
    const grid = container.firstElementChild as HTMLElement;
    expect(grid.style.gridTemplateColumns).toContain('200px');
    expect(grid.style.gap).toBe('10px');
  });

  it('applies custom className', () => {
    const { container } = render(
      <CardGrid className="custom">
        <div>Card</div>
      </CardGrid>,
    );
    expect(container.firstElementChild!.className).toContain('custom');
  });
});
