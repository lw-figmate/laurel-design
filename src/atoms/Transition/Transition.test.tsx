import { render, screen, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Transition } from './Transition';

describe('Transition', () => {
  it('renders children when show is true', () => {
    render(<Transition show>Content</Transition>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('does not render children when show is false and unmountOnHide is true', () => {
    render(<Transition show={false}>Content</Transition>);
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('keeps children in DOM when unmountOnHide is false', () => {
    render(<Transition show={false} unmountOnHide={false}>Content</Transition>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('marks hidden content with aria-hidden', () => {
    render(<Transition show={false} unmountOnHide={false}>Content</Transition>);
    const wrapper = screen.getByText('Content').closest('[aria-hidden]');
    expect(wrapper).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies transition classes when show is true', () => {
    render(<Transition show preset="fade">Content</Transition>);
    const wrapper = screen.getByText('Content');
    expect(wrapper.className).toContain('transition-all');
    expect(wrapper.className).toContain('opacity-100');
  });

  it('applies duration token class', () => {
    render(<Transition show duration="slow">Content</Transition>);
    const wrapper = screen.getByText('Content');
    expect(wrapper.className).toContain('--laurel-duration-slow');
  });

  it('calls onEntered after transition end', () => {
    const onEntered = vi.fn();
    render(<Transition show onEntered={onEntered}>Content</Transition>);
    const wrapper = screen.getByText('Content');
    act(() => {
      wrapper.dispatchEvent(new Event('transitionend', { bubbles: true }));
    });
    expect(onEntered).toHaveBeenCalledOnce();
  });
});
