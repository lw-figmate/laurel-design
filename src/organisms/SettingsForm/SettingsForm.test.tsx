import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SettingsForm } from './SettingsForm';

const sections = [
  {
    title: 'General',
    description: 'Basic settings',
    content: <input aria-label="Name" defaultValue="Test" />,
  },
  {
    title: 'Notifications',
    content: <input aria-label="Email" type="email" />,
  },
];

describe('SettingsForm', () => {
  it('renders section titles', () => {
    render(<SettingsForm sections={sections} onSubmit={vi.fn()} />);
    expect(screen.getByText('General')).toBeInTheDocument();
    expect(screen.getByText('Notifications')).toBeInTheDocument();
  });

  it('renders section descriptions', () => {
    render(<SettingsForm sections={sections} onSubmit={vi.fn()} />);
    expect(screen.getByText('Basic settings')).toBeInTheDocument();
  });

  it('renders section content', () => {
    render(<SettingsForm sections={sections} onSubmit={vi.fn()} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders submit button with default label', () => {
    render(<SettingsForm sections={sections} onSubmit={vi.fn()} />);
    expect(screen.getByText('Save changes')).toBeInTheDocument();
  });

  it('renders custom submit label', () => {
    render(<SettingsForm sections={sections} onSubmit={vi.fn()} submitLabel="Update" />);
    expect(screen.getByText('Update')).toBeInTheDocument();
  });

  it('calls onSubmit on form submit', () => {
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault());
    render(<SettingsForm sections={sections} onSubmit={onSubmit} />);
    fireEvent.click(screen.getByText('Save changes'));
    expect(onSubmit).toHaveBeenCalled();
  });

  it('shows cancel button when onCancel is provided', () => {
    const onCancel = vi.fn();
    render(<SettingsForm sections={sections} onSubmit={vi.fn()} onCancel={onCancel} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(onCancel).toHaveBeenCalled();
  });

  it('disables submit when loading', () => {
    render(<SettingsForm sections={sections} onSubmit={vi.fn()} loading />);
    expect(screen.getByText('Saving...')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLFormElement>;
    render(<SettingsForm ref={ref} sections={sections} onSubmit={vi.fn()} />);
    expect(ref.current).toBeInstanceOf(HTMLFormElement);
  });
});
