import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { LockScreen } from './LockScreen';

describe('LockScreen', () => {
  it('renders user name', () => {
    render(<LockScreen userName="Jane Doe" onUnlock={() => {}} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('renders password input', () => {
    render(<LockScreen userName="Jane" onUnlock={() => {}} />);
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('calls onUnlock with password', async () => {
    const user = userEvent.setup();
    const handleUnlock = vi.fn();
    render(<LockScreen userName="Jane" onUnlock={handleUnlock} />);
    await user.type(screen.getByLabelText('Password'), 'secret123');
    await user.click(screen.getByRole('button', { name: 'Unlock' }));
    expect(handleUnlock).toHaveBeenCalledWith('secret123');
  });

  it('shows error message', () => {
    render(<LockScreen userName="Jane" onUnlock={() => {}} error="Wrong password" />);
    expect(screen.getByText('Wrong password')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<LockScreen userName="Jane" onUnlock={() => {}} loading />);
    expect(screen.getByRole('button', { name: 'Unlocking…' })).toBeDisabled();
  });

  it('renders sign out button', async () => {
    const user = userEvent.setup();
    const handleSignOut = vi.fn();
    render(<LockScreen userName="Jane" onUnlock={() => {}} onSignOut={handleSignOut} />);
    await user.click(screen.getByText('Sign out'));
    expect(handleSignOut).toHaveBeenCalled();
  });

  it('hides time when showTime is false', () => {
    render(<LockScreen userName="Jane" onUnlock={() => {}} showTime={false} />);
    expect(screen.queryByLabelText('polite')).not.toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<LockScreen ref={ref} userName="Jane" onUnlock={() => {}} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
