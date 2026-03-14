import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AddressForm } from './AddressForm';

describe('AddressForm', () => {
  it('renders all form fields', () => {
    render(<AddressForm onSubmit={vi.fn()} />);
    expect(screen.getByPlaceholderText('123 Main St')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Apt, suite, etc.')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('State / Province')).toBeInTheDocument();
    expect(screen.getByText('ZIP / Postal code')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
  });

  it('renders default country options', () => {
    render(<AddressForm onSubmit={vi.fn()} />);
    expect(screen.getByText('United States')).toBeInTheDocument();
    expect(screen.getByText('Canada')).toBeInTheDocument();
  });

  it('renders custom countries', () => {
    render(
      <AddressForm
        onSubmit={vi.fn()}
        countries={[{ label: 'Japan', value: 'JP' }]}
      />,
    );
    expect(screen.getByText('Japan')).toBeInTheDocument();
  });

  it('populates default values', () => {
    render(<AddressForm onSubmit={vi.fn()} defaultValues={{ city: 'Portland' }} />);
    const cityInputs = screen.getAllByRole('textbox');
    const cityInput = cityInputs.find((el) => el.getAttribute('value') === 'Portland');
    expect(cityInput).toBeInTheDocument();
  });

  it('calls onSubmit with form values', () => {
    const onSubmit = vi.fn();
    render(<AddressForm onSubmit={onSubmit} defaultValues={{ street1: '123 Main', city: 'Portland', state: 'OR', zip: '97201', country: 'US' }} />);
    fireEvent.submit(screen.getByPlaceholderText('123 Main St').closest('form')!);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ street1: '123 Main', city: 'Portland' }),
    );
  });

  it('shows cancel button when onCancel is provided', () => {
    const onCancel = vi.fn();
    render(<AddressForm onSubmit={vi.fn()} onCancel={onCancel} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(onCancel).toHaveBeenCalled();
  });

  it('renders custom submit label', () => {
    render(<AddressForm onSubmit={vi.fn()} submitLabel="Update address" />);
    expect(screen.getByText('Update address')).toBeInTheDocument();
  });

  it('disables submit when loading', () => {
    render(<AddressForm onSubmit={vi.fn()} loading />);
    expect(screen.getByText('Saving...')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLFormElement>;
    render(<AddressForm ref={ref} onSubmit={vi.fn()} />);
    expect(ref.current).toBeInstanceOf(HTMLFormElement);
  });
});
