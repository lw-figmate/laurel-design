import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AvatarGroup } from './AvatarGroup';
import { Avatar } from '../../atoms/Avatar';

describe('AvatarGroup', () => {
  it('renders avatars', () => {
    render(
      <AvatarGroup>
        <Avatar initials="AL" />
        <Avatar initials="BO" />
      </AvatarGroup>,
    );
    expect(screen.getByText('AL')).toBeInTheDocument();
    expect(screen.getByText('BO')).toBeInTheDocument();
  });

  it('shows overflow count when exceeding max', () => {
    render(
      <AvatarGroup max={2}>
        <Avatar initials="AL" />
        <Avatar initials="BO" />
        <Avatar initials="CA" />
        <Avatar initials="DV" />
      </AvatarGroup>,
    );
    expect(screen.getByText('AL')).toBeInTheDocument();
    expect(screen.getByText('BO')).toBeInTheDocument();
    expect(screen.getByText('+2')).toBeInTheDocument();
    expect(screen.queryByText('CA')).not.toBeInTheDocument();
  });

  it('does not show overflow when within max', () => {
    render(
      <AvatarGroup max={5}>
        <Avatar initials="AL" />
        <Avatar initials="BO" />
      </AvatarGroup>,
    );
    expect(screen.queryByText(/\+/)).not.toBeInTheDocument();
  });

  it('merges custom className', () => {
    const { container } = render(
      <AvatarGroup className="my-custom">
        <Avatar initials="AL" />
      </AvatarGroup>,
    );
    expect(container.firstElementChild!.className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(
      <AvatarGroup ref={ref}>
        <Avatar initials="AL" />
      </AvatarGroup>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
