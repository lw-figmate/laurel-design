import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { FilterPanel } from './FilterPanel';

const sections = [
  { title: 'Category', content: <div>Category filters</div> },
  { title: 'Price', content: <div>Price slider</div> },
  { title: 'Color', content: <div>Color options</div>, defaultOpen: false },
];

describe('FilterPanel', () => {
  it('renders title', () => {
    render(<FilterPanel sections={sections} />);
    expect(screen.getByText('Filters')).toBeInTheDocument();
  });

  it('renders section triggers', () => {
    render(<FilterPanel sections={sections} />);
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Color')).toBeInTheDocument();
  });

  it('shows open section content by default', () => {
    render(<FilterPanel sections={sections} />);
    expect(screen.getByText('Category filters')).toBeInTheDocument();
    expect(screen.getByText('Price slider')).toBeInTheDocument();
  });

  it('hides section when defaultOpen is false', () => {
    render(<FilterPanel sections={sections} />);
    expect(screen.queryByText('Color options')).not.toBeInTheDocument();
  });

  it('calls onClear when clear button is clicked', async () => {
    const user = userEvent.setup();
    const handleClear = vi.fn();
    render(<FilterPanel sections={sections} onClear={handleClear} />);
    await user.click(screen.getByRole('button', { name: 'Clear all' }));
    expect(handleClear).toHaveBeenCalledOnce();
  });

  it('renders custom clear label', () => {
    render(<FilterPanel sections={sections} onClear={() => {}} clearLabel="Reset" />);
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });
});
