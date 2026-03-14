import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InputGroup } from './InputGroup';

describe('InputGroup', () => {
  it('renders children', () => {
    render(
      <InputGroup>
        <input aria-label="test" />
      </InputGroup>,
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders prefix content', () => {
    render(
      <InputGroup prefix="$">
        <input aria-label="test" />
      </InputGroup>,
    );
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('renders suffix content', () => {
    render(
      <InputGroup suffix=".com">
        <input aria-label="test" />
      </InputGroup>,
    );
    expect(screen.getByText('.com')).toBeInTheDocument();
  });

  it('renders both prefix and suffix', () => {
    render(
      <InputGroup prefix="https://" suffix=".com">
        <input aria-label="test" />
      </InputGroup>,
    );
    expect(screen.getByText('https://')).toBeInTheDocument();
    expect(screen.getByText('.com')).toBeInTheDocument();
  });

  it('does not render prefix when not provided', () => {
    const { container } = render(
      <InputGroup>
        <input aria-label="test" />
      </InputGroup>,
    );
    const spans = container.querySelectorAll('span');
    expect(spans.length).toBe(0);
  });

  it('merges custom className', () => {
    const { container } = render(
      <InputGroup className="my-custom">
        <input aria-label="test" />
      </InputGroup>,
    );
    expect(container.firstElementChild!.className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(
      <InputGroup ref={ref}>
        <input aria-label="test" />
      </InputGroup>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
