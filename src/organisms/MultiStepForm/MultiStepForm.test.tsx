import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MultiStepForm } from './MultiStepForm';

const steps = [
  { title: 'Step 1', content: <p>First step content</p> },
  { title: 'Step 2', content: <p>Second step content</p> },
  { title: 'Step 3', content: <p>Third step content</p> },
];

describe('MultiStepForm', () => {
  it('renders first step content', () => {
    render(<MultiStepForm steps={steps} onSubmit={() => {}} />);
    expect(screen.getByText('First step content')).toBeInTheDocument();
  });

  it('shows step titles in stepper', () => {
    render(<MultiStepForm steps={steps} onSubmit={() => {}} />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('navigates to next step', async () => {
    const user = userEvent.setup();
    render(<MultiStepForm steps={steps} onSubmit={() => {}} />);
    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('Second step content')).toBeInTheDocument();
    expect(screen.queryByText('First step content')).not.toBeInTheDocument();
  });

  it('navigates back', async () => {
    const user = userEvent.setup();
    render(<MultiStepForm steps={steps} onSubmit={() => {}} />);
    await user.click(screen.getByRole('button', { name: 'Next' }));
    await user.click(screen.getByRole('button', { name: 'Back' }));
    expect(screen.getByText('First step content')).toBeInTheDocument();
  });

  it('calls onSubmit on last step', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();
    render(<MultiStepForm steps={steps} onSubmit={handleSubmit} />);
    await user.click(screen.getByRole('button', { name: 'Next' }));
    await user.click(screen.getByRole('button', { name: 'Next' }));
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(handleSubmit).toHaveBeenCalledOnce();
  });

  it('does not show Back button on first step', () => {
    render(<MultiStepForm steps={steps} onSubmit={() => {}} />);
    expect(screen.queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();
  });

  it('prevents advancing when validate returns false', async () => {
    const user = userEvent.setup();
    const validatedSteps = [
      { title: 'Step 1', content: <p>First</p>, validate: () => false },
      { title: 'Step 2', content: <p>Second</p> },
    ];
    render(<MultiStepForm steps={validatedSteps} onSubmit={() => {}} />);
    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('First')).toBeInTheDocument();
  });

  it('renders cancel button when onCancel is provided', async () => {
    const user = userEvent.setup();
    const handleCancel = vi.fn();
    render(<MultiStepForm steps={steps} onSubmit={() => {}} onCancel={handleCancel} />);
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(handleCancel).toHaveBeenCalledOnce();
  });
});
