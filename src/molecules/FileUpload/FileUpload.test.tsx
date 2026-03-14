import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { FileUpload } from './FileUpload';

describe('FileUpload', () => {
  it('renders upload zone', () => {
    render(<FileUpload />);
    expect(screen.getByText('Click to upload')).toBeInTheDocument();
    expect(screen.getByText(/drag and drop/)).toBeInTheDocument();
  });

  it('renders help text', () => {
    render(<FileUpload helpText="PNG, JPG up to 10MB" />);
    expect(screen.getByText('PNG, JPG up to 10MB')).toBeInTheDocument();
  });

  it('has role button', () => {
    render(<FileUpload />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('is keyboard accessible', async () => {
    const user = userEvent.setup();
    render(<FileUpload />);
    const zone = screen.getByRole('button');
    zone.focus();
    // Should not throw on Enter
    await user.keyboard('{Enter}');
  });

  it('applies disabled state', () => {
    const { container } = render(<FileUpload disabled />);
    expect(container.firstElementChild!.className).toContain('opacity-50');
  });

  it('merges custom className', () => {
    const { container } = render(<FileUpload className="my-custom" />);
    expect(container.firstElementChild!.className).toContain('my-custom');
  });

  it('calls onFilesSelected with files', () => {
    const handleFiles = vi.fn();
    const { container } = render(<FileUpload onFilesSelected={handleFiles} />);
    const input = container.querySelector('input[type="file"]')!;
    const file = new File(['hello'], 'test.txt', { type: 'text/plain' });
    Object.defineProperty(input, 'files', { value: [file] });
    input.dispatchEvent(new Event('change', { bubbles: true }));
    expect(handleFiles).toHaveBeenCalledWith([file]);
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<FileUpload ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
