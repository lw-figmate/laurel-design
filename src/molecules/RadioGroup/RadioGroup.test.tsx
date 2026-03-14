import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  it('renders a fieldset', () => {
    render(
      <RadioGroup name="color">
        <label><input type="radio" value="red" /> Red</label>
      </RadioGroup>,
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('renders a legend when label is provided', () => {
    render(
      <RadioGroup name="color" label="Favorite color">
        <label><input type="radio" value="red" /> Red</label>
      </RadioGroup>,
    );
    expect(screen.getByText('Favorite color')).toBeInTheDocument();
  });

  it('injects name prop into radio children', () => {
    render(
      <RadioGroup name="color">
        <input type="radio" value="red" aria-label="Red" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio')).toHaveAttribute('name', 'color');
  });

  it('calls onValueChange when selection changes', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <RadioGroup name="color" onValueChange={handleChange}>
        <label><input type="radio" value="red" /> Red</label>
        <label><input type="radio" value="blue" /> Blue</label>
      </RadioGroup>,
    );
    await user.click(screen.getByLabelText('Blue'));
    expect(handleChange).toHaveBeenCalledWith('blue');
  });

  it('renders error message', () => {
    render(
      <RadioGroup name="color" error="Please select a color">
        <label><input type="radio" value="red" /> Red</label>
      </RadioGroup>,
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Please select a color');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLFieldSetElement | null>;
    render(
      <RadioGroup ref={ref} name="color">
        <input type="radio" value="red" aria-label="Red" />
      </RadioGroup>,
    );
    expect(ref.current).toBeInstanceOf(HTMLFieldSetElement);
  });
});
