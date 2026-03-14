import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProfileCard } from './ProfileCard';

describe('ProfileCard', () => {
  it('renders name', () => {
    render(<ProfileCard name="Jane Doe" />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('renders role when provided', () => {
    render(<ProfileCard name="Jane" role="Developer" />);
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders bio when provided', () => {
    render(<ProfileCard name="Jane" bio="Full-stack developer" />);
    expect(screen.getByText('Full-stack developer')).toBeInTheDocument();
  });

  it('renders stats when provided', () => {
    render(
      <ProfileCard
        name="Jane"
        stats={[
          { label: 'Posts', value: 42 },
          { label: 'Followers', value: 1200 },
        ]}
      />,
    );
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('1200')).toBeInTheDocument();
    expect(screen.getByText('Followers')).toBeInTheDocument();
  });

  it('renders actions when provided', () => {
    render(<ProfileCard name="Jane" actions={<button>Follow</button>} />);
    expect(screen.getByText('Follow')).toBeInTheDocument();
  });

  it('renders avatar with initials', () => {
    render(<ProfileCard name="Jane Doe" initials="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<ProfileCard ref={ref} name="Jane" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('applies custom className', () => {
    const { container } = render(<ProfileCard name="Jane" className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });
});
