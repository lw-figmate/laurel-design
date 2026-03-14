import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { OnboardingWizard } from './OnboardingWizard';

const steps = [
  { title: 'Welcome', description: 'Welcome to our app' },
  { title: 'Setup', description: 'Configure your workspace', content: <input aria-label="Workspace name" /> },
  { title: 'Done', description: 'You are all set!' },
];

describe('OnboardingWizard', () => {
  it('renders the first step', () => {
    render(<OnboardingWizard steps={steps} onComplete={vi.fn()} />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
    expect(screen.getByText('Welcome to our app')).toBeInTheDocument();
  });

  it('navigates to next step on Next click', () => {
    render(<OnboardingWizard steps={steps} onComplete={vi.fn()} />);
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Setup')).toBeInTheDocument();
    expect(screen.getByLabelText('Workspace name')).toBeInTheDocument();
  });

  it('navigates back on Back click', () => {
    render(<OnboardingWizard steps={steps} onComplete={vi.fn()} />);
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Back'));
    expect(screen.getByText('Welcome to our app')).toBeInTheDocument();
  });

  it('calls onComplete on last step', () => {
    const onComplete = vi.fn();
    render(<OnboardingWizard steps={steps} onComplete={onComplete} />);
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Get started'));
    expect(onComplete).toHaveBeenCalled();
  });

  it('calls onSkip when skip is clicked', () => {
    const onSkip = vi.fn();
    render(<OnboardingWizard steps={steps} onComplete={vi.fn()} onSkip={onSkip} />);
    fireEvent.click(screen.getByText('Skip'));
    expect(onSkip).toHaveBeenCalled();
  });

  it('renders custom complete label', () => {
    render(<OnboardingWizard steps={steps} onComplete={vi.fn()} completeLabel="Finish" />);
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Finish')).toBeInTheDocument();
  });

  it('renders progress dots for each step', () => {
    const { container } = render(<OnboardingWizard steps={steps} onComplete={vi.fn()} />);
    const dots = container.querySelectorAll('span.rounded-full');
    expect(dots).toHaveLength(3);
  });

  it('renders illustration when provided', () => {
    const stepsWithIllust = [
      { title: 'Welcome', illustration: <svg data-testid="illust" /> },
    ];
    render(<OnboardingWizard steps={stepsWithIllust} onComplete={vi.fn()} />);
    expect(screen.getByTestId('illust')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<OnboardingWizard ref={ref} steps={steps} onComplete={vi.fn()} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
