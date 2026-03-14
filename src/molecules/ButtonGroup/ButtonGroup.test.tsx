import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
  it('renders children', () => {
    render(<ButtonGroup><button>A</button><button>B</button></ButtonGroup>);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  it('has role="group"', () => {
    render(<ButtonGroup><button>A</button></ButtonGroup>);
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('renders horizontal by default', () => {
    render(<ButtonGroup><button>A</button></ButtonGroup>);
    expect(screen.getByRole('group').className).toContain('flex-row');
  });

  it('renders vertical when vertical prop is true', () => {
    render(<ButtonGroup vertical><button>A</button></ButtonGroup>);
    expect(screen.getByRole('group').className).toContain('flex-col');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<ButtonGroup ref={ref}><button>A</button></ButtonGroup>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges custom className', () => {
    render(<ButtonGroup className="gap-4"><button>A</button></ButtonGroup>);
    expect(screen.getByRole('group').className).toContain('gap-4');
  });
});
