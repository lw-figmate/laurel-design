import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders a range input', () => {
    render(<Slider label="Volume" />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('renders label', () => {
    render(<Slider label="Brightness" />);
    expect(screen.getByText('Brightness')).toBeInTheDocument();
  });

  it('has correct aria-label', () => {
    render(<Slider label="Volume" />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-label', 'Volume');
  });

  it('shows value when showValue is true', () => {
    render(<Slider label="Volume" value={75} showValue />);
    expect(screen.getByText('75')).toBeInTheDocument();
  });

  it('uses min, max, step attributes', () => {
    render(<Slider min={0} max={200} step={5} label="Volume" />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '200');
    expect(slider).toHaveAttribute('step', '5');
  });

  it('calls onValueChange', async () => {
    const handleChange = vi.fn();
    render(<Slider label="Volume" onValueChange={handleChange} />);
    const slider = screen.getByRole('slider');
    // Simulate native change event
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(slider, '50');
    slider.dispatchEvent(new Event('change', { bubbles: true }));
    expect(handleChange).toHaveBeenCalledWith(50);
  });

  it('supports disabled state', () => {
    render(<Slider label="Volume" disabled />);
    expect(screen.getByRole('slider')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Slider ref={ref} label="Volume" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
