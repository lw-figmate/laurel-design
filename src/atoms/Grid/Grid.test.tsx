import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Grid } from './Grid';

describe('Grid', () => {
  it('renders children', () => {
    render(<Grid><span>Child</span></Grid>);
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('applies grid class', () => {
    const { container } = render(<Grid>Content</Grid>);
    expect(container.firstElementChild!.className).toContain('grid');
  });

  it('applies column count', () => {
    const { container } = render(<Grid columns="3">Content</Grid>);
    expect(container.firstElementChild!.className).toContain('grid-cols-3');
  });

  it('applies default gap', () => {
    const { container } = render(<Grid>Content</Grid>);
    expect(container.firstElementChild!.className).toContain('--laurel-space-4');
  });

  it('applies custom gap', () => {
    const { container } = render(<Grid gap="8">Content</Grid>);
    expect(container.firstElementChild!.className).toContain('--laurel-space-8');
  });

  it('applies alignment', () => {
    const { container } = render(<Grid align="center">Content</Grid>);
    expect(container.firstElementChild!.className).toContain('items-center');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Grid ref={ref}>Content</Grid>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges custom className', () => {
    const { container } = render(<Grid className="custom">Content</Grid>);
    expect(container.firstElementChild!.className).toContain('custom');
  });
});
