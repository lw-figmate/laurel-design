import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Stepper, Step } from './Stepper';

describe('Stepper', () => {
  it('renders steps', () => {
    render(
      <Stepper activeStep={0}>
        <Step title="Step 1" />
        <Step title="Step 2" />
        <Step title="Step 3" />
      </Stepper>,
    );
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('marks completed steps with a checkmark', () => {
    const { container } = render(
      <Stepper activeStep={2}>
        <Step title="Step 1" />
        <Step title="Step 2" />
        <Step title="Step 3" />
      </Stepper>,
    );
    const svgs = container.querySelectorAll('svg');
    // Completed steps (index 0 and 1) get checkmark SVGs + the chevron on each step = at least 2
    expect(svgs.length).toBeGreaterThanOrEqual(2);
  });

  it('shows step numbers for incomplete steps', () => {
    render(
      <Stepper activeStep={0}>
        <Step title="Step 1" />
        <Step title="Step 2" />
      </Stepper>,
    );
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders descriptions', () => {
    render(
      <Stepper activeStep={0}>
        <Step title="Account" description="Create your account" />
      </Stepper>,
    );
    expect(screen.getByText('Create your account')).toBeInTheDocument();
  });

  it('has role list for accessibility', () => {
    render(
      <Stepper activeStep={0}>
        <Step title="Step 1" />
      </Stepper>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(
      <Stepper ref={ref} activeStep={0}>
        <Step title="Step 1" />
      </Stepper>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
