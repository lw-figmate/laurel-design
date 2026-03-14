import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ColorSwatch } from './ColorSwatch';

describe('ColorSwatch', () => {
  it('renders a button with the correct background color', () => {
    render(<ColorSwatch color="#ff0000" />);
    const btn = screen.getByRole('button');
    expect(btn.style.backgroundColor).toBe('rgb(255, 0, 0)');
  });

  it('has aria-label with color value', () => {
    render(<ColorSwatch color="#00ff00" />);
    expect(screen.getByLabelText('#00ff00')).toBeInTheDocument();
  });

  it('applies selected styles', () => {
    render(<ColorSwatch color="#0000ff" selected />);
    const btn = screen.getByRole('button');
    expect(btn.getAttribute('class')).toContain('ring-2');
  });

  it('handles click', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ColorSwatch color="#000" onClick={onClick} />);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('supports size variants', () => {
    const { rerender } = render(<ColorSwatch color="#000" size="sm" />);
    expect(screen.getByRole('button').getAttribute('class')).toContain('h-5');
    rerender(<ColorSwatch color="#000" size="lg" />);
    expect(screen.getByRole('button').getAttribute('class')).toContain('h-12');
  });
});
