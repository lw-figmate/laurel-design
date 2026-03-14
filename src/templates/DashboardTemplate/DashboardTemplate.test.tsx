import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DashboardTemplate } from './DashboardTemplate';

describe('DashboardTemplate', () => {
  it('renders title via PageHeader', () => {
    render(<DashboardTemplate title="Overview"><p>Content</p></DashboardTemplate>);
    expect(screen.getByText('Overview')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(<DashboardTemplate title="Dashboard"><p>Widget area</p></DashboardTemplate>);
    expect(screen.getByText('Widget area')).toBeInTheDocument();
  });

  it('renders stats when provided', () => {
    render(
      <DashboardTemplate
        title="Dashboard"
        stats={[{ label: 'Users', value: '1,200' }]}
      >
        <p>Content</p>
      </DashboardTemplate>,
    );
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('1,200')).toBeInTheDocument();
  });

  it('renders sidebar when provided', () => {
    render(
      <DashboardTemplate title="Dashboard" sidebar={<p>Activity feed</p>}>
        <p>Content</p>
      </DashboardTemplate>,
    );
    expect(screen.getByText('Activity feed')).toBeInTheDocument();
  });

  it('renders actions', () => {
    render(
      <DashboardTemplate title="Dashboard" actions={<button>Export</button>}>
        <p>Content</p>
      </DashboardTemplate>,
    );
    expect(screen.getByRole('button', { name: 'Export' })).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<DashboardTemplate ref={ref} title="Dashboard"><p>Content</p></DashboardTemplate>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
