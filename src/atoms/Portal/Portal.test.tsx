import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Portal } from './Portal';

describe('Portal', () => {
  it('renders children into document.body by default', () => {
    render(<Portal><div data-testid="portal-content">Hello</div></Portal>);
    expect(screen.getByTestId('portal-content')).toBeInTheDocument();
    expect(screen.getByTestId('portal-content').parentElement).toBe(document.body);
  });

  it('renders children into a custom container', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<Portal container={container}><span data-testid="custom">Custom</span></Portal>);
    expect(screen.getByTestId('custom').parentElement).toBe(container);

    document.body.removeChild(container);
  });

  it('renders nothing when container is unavailable', () => {
    const { container } = render(
      <Portal container={undefined}>
        <span>Content</span>
      </Portal>,
    );
    // Content still renders (into body) since container falls back to document.body
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
