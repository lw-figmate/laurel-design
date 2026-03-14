import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders title', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument();
  });

  it('renders custom title', () => {
    render(<LoginForm onSubmit={() => {}} title="Welcome back" />);
    expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();
  });

  it('renders email and password fields', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument();
  });

  it('calls onSubmit with credentials', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    await user.type(screen.getByPlaceholderText('you@example.com'), 'test@example.com');
    await user.type(screen.getByPlaceholderText('••••••••'), 'password123');
    await user.click(screen.getByRole('button', { name: 'Sign in' }));
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
      remember: false,
    });
  });

  it('shows error message', () => {
    render(<LoginForm onSubmit={() => {}} error="Invalid credentials" />);
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<LoginForm onSubmit={() => {}} loading />);
    expect(screen.getByText('Signing in…')).toBeInTheDocument();
  });

  it('renders forgot password link', () => {
    render(<LoginForm onSubmit={() => {}} forgotPasswordHref="/forgot" />);
    expect(screen.getByText('Forgot password?')).toHaveAttribute('href', '/forgot');
  });

  it('renders sign up link', () => {
    render(<LoginForm onSubmit={() => {}} signUpHref="/signup" />);
    expect(screen.getByText('Sign up')).toHaveAttribute('href', '/signup');
  });
});
