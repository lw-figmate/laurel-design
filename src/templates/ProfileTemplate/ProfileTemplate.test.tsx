import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ProfileTemplate } from './ProfileTemplate';

describe('ProfileTemplate', () => {
  it('renders user name', () => {
    render(<ProfileTemplate name="Jane Doe"><p>Content</p></ProfileTemplate>);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('renders bio', () => {
    render(<ProfileTemplate name="Jane" bio="Software engineer"><p>Content</p></ProfileTemplate>);
    expect(screen.getByText('Software engineer')).toBeInTheDocument();
  });

  it('renders profile stats', () => {
    render(
      <ProfileTemplate name="Jane" stats={[{ label: 'Followers', value: 128 }]}>
        <p>Content</p>
      </ProfileTemplate>,
    );
    expect(screen.getByText('Followers')).toBeInTheDocument();
    expect(screen.getByText('128')).toBeInTheDocument();
  });

  it('renders tabs', () => {
    render(
      <ProfileTemplate
        name="Jane"
        tabs={[
          { label: 'Posts', id: 'posts' },
          { label: 'About', id: 'about' },
        ]}
        activeTab="posts"
      >
        <p>Content</p>
      </ProfileTemplate>,
    );
    expect(screen.getByRole('tab', { name: 'Posts' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'About' })).toBeInTheDocument();
  });

  it('calls onTabChange when clicking a tab', async () => {
    const user = userEvent.setup();
    const handleTabChange = vi.fn();
    render(
      <ProfileTemplate
        name="Jane"
        tabs={[{ label: 'Posts', id: 'posts' }, { label: 'About', id: 'about' }]}
        activeTab="posts"
        onTabChange={handleTabChange}
      >
        <p>Content</p>
      </ProfileTemplate>,
    );
    await user.click(screen.getByRole('tab', { name: 'About' }));
    expect(handleTabChange).toHaveBeenCalledWith('about');
  });

  it('renders actions', () => {
    render(
      <ProfileTemplate name="Jane" actions={<button>Edit Profile</button>}>
        <p>Content</p>
      </ProfileTemplate>,
    );
    expect(screen.getByRole('button', { name: 'Edit Profile' })).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<ProfileTemplate name="Jane"><p>Tab content here</p></ProfileTemplate>);
    expect(screen.getByText('Tab content here')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<ProfileTemplate ref={ref} name="Jane"><p>Content</p></ProfileTemplate>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
