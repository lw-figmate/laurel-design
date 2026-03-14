import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Banner } from './Banner';

describe('Banner', () => {
  it('renders with banner role', () => {
    render(<Banner>Announcement</Banner>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Banner>Site maintenance tonight</Banner>);
    expect(screen.getByText('Site maintenance tonight')).toBeInTheDocument();
  });

  it('applies info variant by default', () => {
    render(<Banner>Info</Banner>);
    expect(screen.getByRole('banner').className).toContain('--laurel-bg-brand');
  });

  it('applies warning variant', () => {
    render(<Banner variant="warning">Watch out</Banner>);
    expect(screen.getByRole('banner').className).toContain('--laurel-bg-warning');
  });

  it('renders action slot', () => {
    render(<Banner action={<button>Learn more</button>}>Info</Banner>);
    expect(screen.getByRole('button', { name: 'Learn more' })).toBeInTheDocument();
  });

  it('renders dismiss button when onDismiss is provided', () => {
    render(<Banner onDismiss={() => {}}>Info</Banner>);
    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
  });

  it('calls onDismiss when dismiss is clicked', async () => {
    const user = userEvent.setup();
    const handleDismiss = vi.fn();
    render(<Banner onDismiss={handleDismiss}>Info</Banner>);
    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(handleDismiss).toHaveBeenCalled();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Banner ref={ref}>Info</Banner>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
