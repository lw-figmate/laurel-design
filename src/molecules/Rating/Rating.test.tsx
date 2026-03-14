import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Rating } from './Rating';

describe('Rating', () => {
  it('renders correct number of stars', () => {
    render(<Rating max={5} />);
    expect(screen.getAllByRole('radio')).toHaveLength(5);
  });

  it('supports custom max', () => {
    render(<Rating max={10} />);
    expect(screen.getAllByRole('radio')).toHaveLength(10);
  });

  it('calls onValueChange when star is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating onValueChange={onChange} />);
    await user.click(screen.getByLabelText('3 stars'));
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('toggles off when same star is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating value={3} onValueChange={onChange} />);
    await user.click(screen.getByLabelText('3 stars'));
    expect(onChange).toHaveBeenCalledWith(0);
  });

  it('does not fire when readonly', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating readonly onValueChange={onChange} />);
    await user.click(screen.getByLabelText('2 stars'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('has radiogroup role', () => {
    render(<Rating />);
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
  });

  it('marks filled stars with aria-checked', () => {
    render(<Rating value={3} max={5} />);
    const radios = screen.getAllByRole('radio');
    expect(radios[0].getAttribute('aria-checked')).toBe('true');
    expect(radios[2].getAttribute('aria-checked')).toBe('true');
    expect(radios[3].getAttribute('aria-checked')).toBe('false');
  });
});
