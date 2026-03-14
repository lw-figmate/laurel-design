import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageLayout } from './PageLayout';

describe('PageLayout', () => {
  it('renders children in main content area', () => {
    render(<PageLayout>Page content</PageLayout>);
    expect(screen.getByText('Page content')).toBeInTheDocument();
  });

  it('renders header when provided', () => {
    render(<PageLayout header={<header>Site Header</header>}>Content</PageLayout>);
    expect(screen.getByText('Site Header')).toBeInTheDocument();
  });

  it('renders sidebar when provided', () => {
    render(<PageLayout sidebar={<aside>Sidebar</aside>}>Content</PageLayout>);
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
  });

  it('renders footer when provided', () => {
    render(<PageLayout footer={<footer>Site Footer</footer>}>Content</PageLayout>);
    expect(screen.getByText('Site Footer')).toBeInTheDocument();
  });

  it('applies maxWidth style to main', () => {
    render(<PageLayout maxWidth="1200px">Content</PageLayout>);
    const main = screen.getByRole('main');
    expect(main).toHaveStyle({ maxWidth: '1200px' });
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<PageLayout ref={ref}>Content</PageLayout>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('applies custom className', () => {
    const { container } = render(<PageLayout className="custom">Content</PageLayout>);
    expect(container.firstChild).toHaveClass('custom');
  });
});
