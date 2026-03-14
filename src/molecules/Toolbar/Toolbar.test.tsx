import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Toolbar, ToolbarGroup } from './Toolbar';

describe('Toolbar', () => {
  it('renders with toolbar role', () => {
    render(
      <Toolbar>
        <button>Bold</button>
      </Toolbar>,
    );
    expect(screen.getByRole('toolbar')).toBeInTheDocument();
  });

  it('sets aria-orientation', () => {
    render(
      <Toolbar orientation="vertical">
        <button>Bold</button>
      </Toolbar>,
    );
    expect(screen.getByRole('toolbar')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders children', () => {
    render(
      <Toolbar>
        <button>Bold</button>
        <button>Italic</button>
      </Toolbar>,
    );
    expect(screen.getByText('Bold')).toBeInTheDocument();
    expect(screen.getByText('Italic')).toBeInTheDocument();
  });

  it('renders toolbar groups', () => {
    render(
      <Toolbar>
        <ToolbarGroup>
          <button>Bold</button>
          <button>Italic</button>
        </ToolbarGroup>
        <ToolbarGroup>
          <button>Align</button>
        </ToolbarGroup>
      </Toolbar>,
    );
    expect(screen.getAllByRole('group')).toHaveLength(2);
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(
      <Toolbar ref={ref}>
        <button>Bold</button>
      </Toolbar>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
