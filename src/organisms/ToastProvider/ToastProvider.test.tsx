import { render, screen, act, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ToastProvider, useToast } from './ToastProvider';

function TestConsumer() {
  const { addToast } = useToast();
  return (
    <button onClick={() => addToast({ message: 'Test toast', variant: 'success' })}>
      Add Toast
    </button>
  );
}

describe('ToastProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders children', () => {
    render(
      <ToastProvider>
        <p>App content</p>
      </ToastProvider>,
    );
    expect(screen.getByText('App content')).toBeInTheDocument();
  });

  it('shows a toast when addToast is called', () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByText('Add Toast'));
    expect(screen.getByText('Test toast')).toBeInTheDocument();
  });

  it('auto-dismisses toast after duration', () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByText('Add Toast'));
    expect(screen.getByText('Test toast')).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(5100);
    });
    expect(screen.queryByText('Test toast')).not.toBeInTheDocument();
  });

  it('dismisses toast when dismiss button is clicked', () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByText('Add Toast'));
    fireEvent.click(screen.getByLabelText('Dismiss'));
    expect(screen.queryByText('Test toast')).not.toBeInTheDocument();
  });

  it('limits visible toasts to maxToasts', () => {
    function MultiConsumer() {
      const { addToast } = useToast();
      return (
        <button onClick={() => {
          addToast({ message: 'Toast 1', duration: 0 });
          addToast({ message: 'Toast 2', duration: 0 });
          addToast({ message: 'Toast 3', duration: 0 });
        }}>
          Add Many
        </button>
      );
    }
    render(
      <ToastProvider maxToasts={2}>
        <MultiConsumer />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByText('Add Many'));
    expect(screen.queryByText('Toast 1')).not.toBeInTheDocument();
    expect(screen.getByText('Toast 2')).toBeInTheDocument();
    expect(screen.getByText('Toast 3')).toBeInTheDocument();
  });
});
