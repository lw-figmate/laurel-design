import { forwardRef, useState } from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import type { OnboardingWizardProps } from './OnboardingWizard.types';

const OnboardingWizard = forwardRef<HTMLDivElement, OnboardingWizardProps>(
  (
    {
      steps,
      onComplete,
      onSkip,
      completeLabel = 'Get started',
      skipLabel = 'Skip',
      className = '',
      ...rest
    },
    ref,
  ) => {
    const [currentStep, setCurrentStep] = useState(0);
    const isLast = currentStep === steps.length - 1;
    const step = steps[currentStep];

    return (
      <div
        ref={ref}
        className={[
          'flex min-h-screen flex-col items-center justify-center',
          'px-[var(--laurel-space-6)] py-[var(--laurel-space-16)]',
          'font-[family-name:var(--laurel-font-sans)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <div className="w-full max-w-lg text-center">
          {step.illustration && <div className="mb-[var(--laurel-space-8)]">{step.illustration}</div>}

          <Text as="h2" size="2xl" weight="bold" className="mb-[var(--laurel-space-2)]">
            {step.title}
          </Text>

          {step.description && (
            <Text as="p" size="md" className="text-[var(--laurel-text-muted)] mb-[var(--laurel-space-6)]">
              {step.description}
            </Text>
          )}

          {step.content && <div className="mb-[var(--laurel-space-8)]">{step.content}</div>}

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-[var(--laurel-space-2)] mb-[var(--laurel-space-8)]">
            {steps.map((_, i) => (
              <span
                key={i}
                className={[
                  'h-2 rounded-full transition-all',
                  i === currentStep ? 'w-6 bg-[var(--laurel-bg-brand)]' : 'w-2 bg-[var(--laurel-bg-control)]',
                ].join(' ')}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-[var(--laurel-space-3)]">
            {onSkip && (
              <Button variant="ghost" onClick={onSkip}>
                {skipLabel}
              </Button>
            )}
            {currentStep > 0 && (
              <Button variant="outline" onClick={() => setCurrentStep((s) => s - 1)}>
                Back
              </Button>
            )}
            <Button
              onClick={() => {
                if (isLast) {
                  onComplete();
                } else {
                  setCurrentStep((s) => s + 1);
                }
              }}
            >
              {isLast ? completeLabel : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

OnboardingWizard.displayName = 'OnboardingWizard';

export { OnboardingWizard };
