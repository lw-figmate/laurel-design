import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('renders navigation with aria-label', () => {
    render(<Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />);
    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
  });

  it('renders page buttons', () => {
    render(<Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('marks current page with aria-current', () => {
    render(<Pagination totalPages={5} currentPage={3} onPageChange={() => {}} />);
    expect(screen.getByText('3')).toHaveAttribute('aria-current', 'page');
  });

  it('renders previous and next buttons', () => {
    render(<Pagination totalPages={5} currentPage={3} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument();
  });

  it('disables previous on first page', () => {
    render(<Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled();
  });

  it('disables next on last page', () => {
    render(<Pagination totalPages={5} currentPage={5} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
  });

  it('calls onPageChange with correct page when page is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Pagination totalPages={5} currentPage={1} onPageChange={handleChange} />);
    await user.click(screen.getByText('3'));
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange when previous is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Pagination totalPages={5} currentPage={3} onPageChange={handleChange} />);
    await user.click(screen.getByRole('button', { name: 'Previous page' }));
    expect(handleChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when next is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Pagination totalPages={5} currentPage={3} onPageChange={handleChange} />);
    await user.click(screen.getByRole('button', { name: 'Next page' }));
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('renders ellipsis for many pages', () => {
    render(<Pagination totalPages={20} currentPage={10} onPageChange={() => {}} />);
    const ellipses = screen.getAllByText('…');
    expect(ellipses.length).toBeGreaterThanOrEqual(1);
  });
});
