import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CookieBanner } from './CookieBanner';

describe('CookieBanner', () => {
  it('renders default message', () => {
    render(<CookieBanner onAccept={vi.fn()} />);
    expect(screen.getByText(/We use cookies/)).toBeInTheDocument();
  });

  it('renders custom message', () => {
    render(<CookieBanner onAccept={vi.fn()} message="Custom cookie message" />);
    expect(screen.getByText('Custom cookie message')).toBeInTheDocument();
  });

  it('renders accept button with default label', () => {
    render(<CookieBanner onAccept={vi.fn()} />);
    expect(screen.getByText('Accept all')).toBeInTheDocument();
  });

  it('calls onAccept when accept button is clicked', () => {
    const onAccept = vi.fn();
    render(<CookieBanner onAccept={onAccept} />);
    fireEvent.click(screen.getByText('Accept all'));
    expect(onAccept).toHaveBeenCalled();
  });

  it('renders reject button when onReject is provided', () => {
    const onReject = vi.fn();
    render(<CookieBanner onAccept={vi.fn()} onReject={onReject} />);
    fireEvent.click(screen.getByText('Reject all'));
    expect(onReject).toHaveBeenCalled();
  });

  it('renders settings button when onSettings is provided', () => {
    const onSettings = vi.fn();
    render(<CookieBanner onAccept={vi.fn()} onSettings={onSettings} settingsLabel="Cookie settings" />);
    fireEvent.click(screen.getByText('Cookie settings'));
    expect(onSettings).toHaveBeenCalled();
  });

  it('renders privacy policy link', () => {
    render(<CookieBanner onAccept={vi.fn()} policyHref="/privacy" />);
    const link = screen.getByText('Learn more');
    expect(link).toHaveAttribute('href', '/privacy');
  });

  it('renders custom accept label', () => {
    render(<CookieBanner onAccept={vi.fn()} acceptLabel="OK" />);
    expect(screen.getByText('OK')).toBeInTheDocument();
  });
});
