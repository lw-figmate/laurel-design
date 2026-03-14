import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('renders with progressbar role', () => {
    render(<ProgressBar value={50} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('sets aria-valuenow', () => {
    render(<ProgressBar value={75} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '75');
  });

  it('sets aria-valuemin and aria-valuemax', () => {
    render(<ProgressBar value={50} max={200} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '200');
  });

  it('renders label when provided', () => {
    render(<ProgressBar value={50} label="Uploading..." />);
    expect(screen.getByText('Uploading...')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', 'Uploading...');
  });

  it('shows percentage when showValue is true', () => {
    render(<ProgressBar value={50} showValue />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('clamps value to 0-100%', () => {
    render(<ProgressBar value={150} showValue />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    const { container } = render(<ProgressBar value={50} className="my-custom" />);
    expect(container.firstElementChild!.className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<ProgressBar ref={ref} value={50} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
