import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

describe('Breadcrumb', () => {
  it('renders a nav with aria-label', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Current</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
  });

  it('renders items', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem>Widget</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Widget')).toBeInTheDocument();
  });

  it('renders separators between items', () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Current</BreadcrumbItem>
      </Breadcrumb>,
    );
    const separators = container.querySelectorAll('[aria-hidden="true"]');
    expect(separators.length).toBe(1);
    expect(separators[0].textContent).toBe('/');
  });

  it('supports custom separator', () => {
    const { container } = render(
      <Breadcrumb separator="›">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Current</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(container.querySelector('[aria-hidden="true"]')?.textContent).toBe('›');
  });

  it('marks last item as active with aria-current', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Current</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(screen.getByText('Current')).toHaveAttribute('aria-current', 'page');
  });

  it('renders links for non-active items with href', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Current</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(screen.getByText('Home').tagName).toBe('A');
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
  });

  it('renders span for active item', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Current</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(screen.getByText('Current').tagName).toBe('SPAN');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLElement | null>;
    render(
      <Breadcrumb ref={ref}>
        <BreadcrumbItem>Home</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
