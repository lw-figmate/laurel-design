import { forwardRef, useState, useCallback } from 'react';
import { Stepper, Step } from '../../molecules/Stepper';
import { Button } from '../../atoms/Button';
import type { MultiStepFormProps } from './MultiStepForm.types';

const MultiStepForm = forwardRef<HTMLDivElement, MultiStepFormProps>(
  (
    {
      steps,
      onSubmit,
      onCancel,
      orientation = 'horizontal',
      nextLabel = 'Next',
      backLabel = 'Back',
      submitLabel = 'Submit',
      className = '',
      ...rest
    },
    ref,
  ) => {
    const [activeStep, setActiveStep] = useState(0);
    const isFirst = activeStep === 0;
    const isLast = activeStep === steps.length - 1;

    const handleNext = useCallback(() => {
      const step = steps[activeStep];
      if (step.validate && !step.validate()) return;
      if (isLast) {
        onSubmit();
      } else {
        setActiveStep((s) => s + 1);
      }
    }, [activeStep, isLast, steps, onSubmit]);

    const handleBack = useCallback(() => {
      setActiveStep((s) => Math.max(0, s - 1));
    }, []);

    return (
      <div
        ref={ref}
        className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
        {...rest}
      >
        <Stepper activeStep={activeStep} orientation={orientation}>
          {steps.map((step) => (
            <Step key={step.title} title={step.title} description={step.description} />
          ))}
        </Stepper>

        <div className="mt-[var(--laurel-space-8)]">{steps[activeStep].content}</div>

        <div className="flex items-center justify-between mt-[var(--laurel-space-8)]">
          <div>
            {onCancel && (
              <Button variant="ghost" onClick={onCancel} type="button">
                Cancel
              </Button>
            )}
          </div>
          <div className="flex gap-[var(--laurel-space-3)]">
            {!isFirst && (
              <Button variant="outline" onClick={handleBack} type="button">
                {backLabel}
              </Button>
            )}
            <Button onClick={handleNext} type="button">
              {isLast ? submitLabel : nextLabel}
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

MultiStepForm.displayName = 'MultiStepForm';

export { MultiStepForm };
