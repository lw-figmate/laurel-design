import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer copyright="© 2026 Acme" />);
    expect(screen.getByText('© 2026 Acme')).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(<Footer logo={<span>Logo</span>} />);
    expect(screen.getByText('Logo')).toBeInTheDocument();
  });

  it('renders column links', () => {
    const columns = [
      { title: 'Product', links: [{ label: 'Features', href: '/features' }] },
      { title: 'Company', links: [{ label: 'About', href: '/about' }] },
    ];
    render(<Footer columns={columns} />);
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders as footer element', () => {
    render(<Footer copyright="test" />);
    expect(document.querySelector('footer')).toBeInTheDocument();
  });

  it('renders bottom content', () => {
    render(<Footer copyright="© 2026" bottomContent={<span>Social</span>} />);
    expect(screen.getByText('Social')).toBeInTheDocument();
  });
});
