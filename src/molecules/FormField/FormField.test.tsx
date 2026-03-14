import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { FormField } from './FormField';

describe('FormField', () => {
  it('renders a label associated with the input', () => {
    render(<FormField label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<FormField label="Name" />);
    const input = screen.getByLabelText('Name');
    await user.type(input, 'Jane');
    expect(input).toHaveValue('Jane');
  });

  it('shows helper text', () => {
    render(<FormField label="Username" helperText="3–20 characters" />);
    expect(screen.getByText('3–20 characters')).toBeInTheDocument();
  });

  it('connects helper text via aria-describedby', () => {
    render(<FormField label="Username" helperText="3–20 characters" />);
    const input = screen.getByLabelText('Username');
    const helperId = input.getAttribute('aria-describedby');
    expect(helperId).toBeTruthy();
    expect(document.getElementById(helperId!)).toHaveTextContent('3–20 characters');
  });

  it('shows error message and hides helper text', () => {
    render(
      <FormField label="Email" helperText="We will not share it" errorMessage="Invalid email" />,
    );
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(screen.queryByText('We will not share it')).not.toBeInTheDocument();
  });

  it('sets aria-invalid on the input when error message is present', () => {
    render(<FormField label="Email" errorMessage="Required" />);
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
  });

  it('connects error message via aria-describedby', () => {
    render(<FormField label="Email" errorMessage="Required" />);
    const input = screen.getByLabelText('Email');
    const errorId = input.getAttribute('aria-describedby');
    expect(errorId).toBeTruthy();
    expect(document.getElementById(errorId!)).toHaveTextContent('Required');
  });

  it('renders error message with role=alert', () => {
    render(<FormField label="Email" errorMessage="Required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Required');
  });

  it('shows required indicator', () => {
    render(<FormField label="Name" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('sets aria-required on the input', () => {
    render(<FormField label="Name" required />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true');
  });

  it('does not set aria-required when not required', () => {
    render(<FormField label="Name" />);
    expect(screen.getByLabelText('Name')).not.toHaveAttribute('aria-required');
  });

  it('disables the input', () => {
    render(<FormField label="Name" disabled />);
    expect(screen.getByLabelText('Name')).toBeDisabled();
  });

  it('forwards ref to the input', () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement | null>;
    render(<FormField ref={ref} label="Name" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('uses external id when provided', () => {
    render(<FormField label="Name" id="custom-id" />);
    expect(screen.getByLabelText('Name')).toHaveAttribute('id', 'custom-id');
  });
});
