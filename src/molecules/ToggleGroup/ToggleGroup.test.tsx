import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

describe('ToggleGroup', () => {
  it('renders with role group', () => {
    render(
      <ToggleGroup>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('renders toggle items', () => {
    render(
      <ToggleGroup>
        <ToggleGroupItem value="list">List</ToggleGroupItem>
        <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByText('List')).toBeInTheDocument();
    expect(screen.getByText('Grid')).toBeInTheDocument();
  });

  it('selects item on click', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <ToggleGroup onValueChange={handleChange}>
        <ToggleGroupItem value="list">List</ToggleGroupItem>
        <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
      </ToggleGroup>,
    );
    await user.click(screen.getByText('Grid'));
    expect(handleChange).toHaveBeenCalledWith('grid');
  });

  it('marks active item with aria-pressed', async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup defaultValue="list">
        <ToggleGroupItem value="list">List</ToggleGroupItem>
        <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByText('List')).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('Grid')).toHaveAttribute('aria-pressed', 'false');
    await user.click(screen.getByText('Grid'));
    expect(screen.getByText('Grid')).toHaveAttribute('aria-pressed', 'true');
  });

  it('supports multiple selection', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <ToggleGroup multiple defaultValue={['a']} onValueChange={handleChange}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    );
    await user.click(screen.getByText('B'));
    expect(handleChange).toHaveBeenCalledWith(['a', 'b']);
  });

  it('supports disabled items', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <ToggleGroup onValueChange={handleChange}>
        <ToggleGroupItem value="a" disabled>A</ToggleGroupItem>
      </ToggleGroup>,
    );
    await user.click(screen.getByText('A'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(
      <ToggleGroup ref={ref}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
