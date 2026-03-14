import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MobileNav } from './MobileNav';
import type { MobileNavLink } from './MobileNav.types';

const links: MobileNavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about', active: true },
  { label: 'Contact', href: '/contact' },
];

describe('MobileNav', () => {
  it('renders hamburger button', () => {
    render(<MobileNav links={links} />);
    expect(screen.getByRole('button', { name: 'Open navigation' })).toBeInTheDocument();
  });

  it('opens drawer on hamburger click', () => {
    render(<MobileNav links={links} />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders navigation links in drawer', () => {
    render(<MobileNav links={links} />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('calls onLinkClick when a link is clicked', () => {
    const onLinkClick = vi.fn();
    render(<MobileNav links={links} onLinkClick={onLinkClick} />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
    fireEvent.click(screen.getByText('Home'));
    expect(onLinkClick).toHaveBeenCalledWith('/');
  });

  it('renders header content in drawer', () => {
    render(<MobileNav links={links} header={<span>Logo</span>} />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
    expect(screen.getByText('Logo')).toBeInTheDocument();
  });

  it('renders footer content in drawer', () => {
    render(<MobileNav links={links} footer={<span>Footer</span>} />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<MobileNav ref={ref} links={links} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
