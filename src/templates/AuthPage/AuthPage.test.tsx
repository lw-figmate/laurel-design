import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AuthPage } from './AuthPage';

describe('AuthPage', () => {
  it('renders children', () => {
    render(<AuthPage><p>Login form</p></AuthPage>);
    expect(screen.getByText('Login form')).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(<AuthPage logo={<img alt="Logo" src="/logo.png" />}><p>Form</p></AuthPage>);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  it('renders side content in split variant', () => {
    render(
      <AuthPage variant="split" sideContent={<p>Welcome message</p>}>
        <p>Form</p>
      </AuthPage>,
    );
    expect(screen.getByText('Welcome message')).toBeInTheDocument();
  });

  it('does not render side panel in centered variant', () => {
    render(
      <AuthPage variant="centered" sideContent={<p>Side</p>}>
        <p>Form</p>
      </AuthPage>,
    );
    expect(screen.queryByText('Side')).not.toBeInTheDocument();
  });

  it('renders footer', () => {
    render(<AuthPage footer={<p>Terms of Service</p>}><p>Form</p></AuthPage>);
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<AuthPage ref={ref}><p>Form</p></AuthPage>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
