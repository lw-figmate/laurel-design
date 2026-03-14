import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Accordion, AccordionItem } from './Accordion';

describe('Accordion', () => {
  it('renders accordion items', () => {
    render(
      <Accordion>
        <AccordionItem value="a" title="Section A">Content A</AccordionItem>
        <AccordionItem value="b" title="Section B">Content B</AccordionItem>
      </Accordion>,
    );
    expect(screen.getByText('Section A')).toBeInTheDocument();
    expect(screen.getByText('Section B')).toBeInTheDocument();
  });

  it('items are collapsed by default', () => {
    render(
      <Accordion>
        <AccordionItem value="a" title="Section A">Content A</AccordionItem>
      </Accordion>,
    );
    expect(screen.queryByText('Content A')).not.toBeInTheDocument();
  });

  it('expands an item when clicked', async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem value="a" title="Section A">Content A</AccordionItem>
      </Accordion>,
    );
    await user.click(screen.getByText('Section A'));
    expect(screen.getByText('Content A')).toBeInTheDocument();
  });

  it('collapses an expanded item when clicked again', async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem value="a" title="Section A">Content A</AccordionItem>
      </Accordion>,
    );
    await user.click(screen.getByText('Section A'));
    expect(screen.getByText('Content A')).toBeInTheDocument();
    await user.click(screen.getByText('Section A'));
    expect(screen.queryByText('Content A')).not.toBeInTheDocument();
  });

  it('only allows one open at a time by default', async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem value="a" title="Section A">Content A</AccordionItem>
        <AccordionItem value="b" title="Section B">Content B</AccordionItem>
      </Accordion>,
    );
    await user.click(screen.getByText('Section A'));
    await user.click(screen.getByText('Section B'));
    expect(screen.queryByText('Content A')).not.toBeInTheDocument();
    expect(screen.getByText('Content B')).toBeInTheDocument();
  });

  it('allows multiple open when multiple=true', async () => {
    const user = userEvent.setup();
    render(
      <Accordion multiple>
        <AccordionItem value="a" title="Section A">Content A</AccordionItem>
        <AccordionItem value="b" title="Section B">Content B</AccordionItem>
      </Accordion>,
    );
    await user.click(screen.getByText('Section A'));
    await user.click(screen.getByText('Section B'));
    expect(screen.getByText('Content A')).toBeInTheDocument();
    expect(screen.getByText('Content B')).toBeInTheDocument();
  });

  it('respects defaultValue', () => {
    render(
      <Accordion defaultValue={['a']}>
        <AccordionItem value="a" title="Section A">Content A</AccordionItem>
      </Accordion>,
    );
    expect(screen.getByText('Content A')).toBeInTheDocument();
  });

  it('calls onValueChange', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Accordion onValueChange={handleChange}>
        <AccordionItem value="a" title="Section A">Content A</AccordionItem>
      </Accordion>,
    );
    await user.click(screen.getByText('Section A'));
    expect(handleChange).toHaveBeenCalledWith(['a']);
  });

  it('sets aria-expanded on the trigger', async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem value="a" title="Section A">Content A</AccordionItem>
      </Accordion>,
    );
    const button = screen.getByRole('button', { name: /Section A/ });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('supports disabled items', async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem value="a" title="Disabled" disabled>Content</AccordionItem>
      </Accordion>,
    );
    await user.click(screen.getByText('Disabled'));
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(
      <Accordion ref={ref}>
        <AccordionItem value="a" title="A">X</AccordionItem>
      </Accordion>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
