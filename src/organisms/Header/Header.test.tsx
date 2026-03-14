import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('renders logo', () => {
    render(<Header logo={<span>Logo</span>} />);
    expect(screen.getByText('Logo')).toBeInTheDocument();
  });

  it('renders navigation', () => {
    render(<Header logo={<span>L</span>} nav={<nav>Nav</nav>} />);
    expect(screen.getByText('Nav')).toBeInTheDocument();
  });

  it('renders actions', () => {
    render(<Header logo={<span>L</span>} actions={<button>Profile</button>} />);
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('applies sticky class when sticky is true', () => {
    const { container } = render(<Header logo={<span>L</span>} sticky />);
    expect(container.querySelector('header')!.className).toContain('sticky');
  });

  it('renders as header element', () => {
    render(<Header logo={<span>L</span>} />);
    expect(document.querySelector('header')).toBeInTheDocument();
  });
});
