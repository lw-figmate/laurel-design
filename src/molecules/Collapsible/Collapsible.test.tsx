import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Collapsible } from './Collapsible';

describe('Collapsible', () => {
  it('renders trigger', () => {
    render(<Collapsible trigger="Show more">Hidden content</Collapsible>);
    expect(screen.getByText('Show more')).toBeInTheDocument();
  });

  it('content is hidden by default', () => {
    render(<Collapsible trigger="Show more">Hidden content</Collapsible>);
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('shows content when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<Collapsible trigger="Show more">Hidden content</Collapsible>);
    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Hidden content')).toBeInTheDocument();
  });

  it('hides content when clicked again', async () => {
    const user = userEvent.setup();
    render(<Collapsible trigger="Show more">Hidden content</Collapsible>);
    await user.click(screen.getByRole('button'));
    await user.click(screen.getByRole('button'));
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('sets aria-expanded on trigger', async () => {
    const user = userEvent.setup();
    render(<Collapsible trigger="Show more">Content</Collapsible>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('supports defaultOpen', () => {
    render(<Collapsible trigger="Toggle" defaultOpen>Visible</Collapsible>);
    expect(screen.getByText('Visible')).toBeInTheDocument();
  });

  it('calls onOpenChange', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Collapsible trigger="Toggle" onOpenChange={handleChange}>Content</Collapsible>);
    await user.click(screen.getByRole('button'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('supports controlled mode', () => {
    const { rerender } = render(
      <Collapsible trigger="Toggle" open={false} onOpenChange={() => {}}>Content</Collapsible>,
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
    rerender(
      <Collapsible trigger="Toggle" open={true} onOpenChange={() => {}}>Content</Collapsible>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Collapsible ref={ref} trigger="Toggle">Content</Collapsible>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
