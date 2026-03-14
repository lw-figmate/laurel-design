import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { CheckboxGroup } from './CheckboxGroup';

describe('CheckboxGroup', () => {
  it('renders a fieldset', () => {
    render(
      <CheckboxGroup>
        <label><input type="checkbox" value="a" /> A</label>
      </CheckboxGroup>,
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('renders a legend when label is provided', () => {
    render(
      <CheckboxGroup label="Interests">
        <label><input type="checkbox" value="a" /> A</label>
      </CheckboxGroup>,
    );
    expect(screen.getByText('Interests')).toBeInTheDocument();
  });

  it('calls onValueChange when checkbox is toggled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <CheckboxGroup onValueChange={handleChange}>
        <input type="checkbox" value="a" aria-label="A" />
        <input type="checkbox" value="b" aria-label="B" />
      </CheckboxGroup>,
    );
    await user.click(screen.getByLabelText('A'));
    expect(handleChange).toHaveBeenCalledWith(['a']);
  });

  it('supports multiple selections', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <CheckboxGroup defaultValue={['a']} onValueChange={handleChange}>
        <input type="checkbox" value="a" aria-label="A" />
        <input type="checkbox" value="b" aria-label="B" />
      </CheckboxGroup>,
    );
    await user.click(screen.getByLabelText('B'));
    expect(handleChange).toHaveBeenCalledWith(['a', 'b']);
  });

  it('renders error message', () => {
    render(
      <CheckboxGroup error="Select at least one">
        <label><input type="checkbox" value="a" /> A</label>
      </CheckboxGroup>,
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Select at least one');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLFieldSetElement | null>;
    render(
      <CheckboxGroup ref={ref}>
        <label><input type="checkbox" value="a" /> A</label>
      </CheckboxGroup>,
    );
    expect(ref.current).toBeInstanceOf(HTMLFieldSetElement);
  });
});
