import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Sidebar, SidebarItem, SidebarSection } from './Sidebar';

describe('Sidebar', () => {
  it('renders children', () => {
    render(<Sidebar><SidebarItem>Dashboard</SidebarItem></Sidebar>);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders header and footer', () => {
    render(
      <Sidebar header={<span>Brand</span>} footer={<span>User</span>}>
        <SidebarItem>Home</SidebarItem>
      </Sidebar>,
    );
    expect(screen.getByText('Brand')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
  });

  it('applies collapsed width', () => {
    const { container } = render(
      <Sidebar collapsed collapsedWidth="60px">
        <SidebarItem>Home</SidebarItem>
      </Sidebar>,
    );
    expect(container.querySelector('aside')!.style.width).toBe('60px');
  });

  it('applies expanded width', () => {
    const { container } = render(
      <Sidebar width="300px">
        <SidebarItem>Home</SidebarItem>
      </Sidebar>,
    );
    expect(container.querySelector('aside')!.style.width).toBe('300px');
  });

  it('renders active item', () => {
    render(
      <Sidebar>
        <SidebarItem active>Dashboard</SidebarItem>
      </Sidebar>,
    );
    expect(screen.getByText('Dashboard').closest('a')!.className).toContain('brand');
  });

  it('renders section with title', () => {
    render(
      <Sidebar>
        <SidebarSection title="Main">
          <SidebarItem>Home</SidebarItem>
        </SidebarSection>
      </Sidebar>,
    );
    expect(screen.getByText('Main')).toBeInTheDocument();
  });
});
