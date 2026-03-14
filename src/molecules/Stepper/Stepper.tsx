import { forwardRef, Children, isValidElement, cloneElement } from 'react';
import { Text } from '../../atoms/Text';
import type { StepperProps, StepProps } from './Stepper.types';

const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ activeStep, orientation = 'horizontal', children, className = '', ...rest }, ref) => {
    const items = Children.toArray(children).filter(isValidElement);

    return (
      <div
        ref={ref}
        className={[
          'flex font-[family-name:var(--laurel-font-sans)]',
          orientation === 'vertical' ? 'flex-col gap-0' : 'flex-row items-center',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        role="list"
        aria-label="Progress"
        {...rest}
      >
        {items.map((child, index) => {
          const status =
            (child as React.ReactElement<StepProps>).props.status ??
            (index < activeStep ? 'complete' : index === activeStep ? 'active' : 'inactive');

          return (
            <div
              key={index}
              className={[
                'flex',
                orientation === 'vertical' ? 'flex-row gap-[var(--laurel-space-3)]' : 'flex-col items-center flex-1',
              ].join(' ')}
              role="listitem"
            >
              <div className={['flex items-center', orientation === 'horizontal' ? 'w-full' : 'flex-col'].join(' ')}>
                {/* Connector before */}
                {index > 0 && orientation === 'horizontal' && (
                  <div className={['flex-1 h-0.5', status === 'inactive' ? 'bg-[var(--laurel-bg-accent)]' : 'bg-[var(--laurel-bg-brand)]'].join(' ')} />
                )}

                {/* Step circle */}
                <div
                  className={[
                    'flex items-center justify-center shrink-0 rounded-full text-[length:var(--laurel-font-size-xs)] font-[var(--laurel-font-weight-semibold)]',
                    'h-8 w-8',
                    status === 'complete'
                      ? 'bg-[var(--laurel-bg-brand)] text-[var(--laurel-text-on-brand)]'
                      : status === 'active'
                        ? 'border-2 border-[var(--laurel-border-brand)] text-[var(--laurel-text-brand)]'
                        : 'border-2 border-[var(--laurel-border-default)] text-[var(--laurel-text-placeholder)]',
                  ].join(' ')}
                >
                  {status === 'complete' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>

                {/* Connector after */}
                {index < items.length - 1 && orientation === 'horizontal' && (
                  <div className={['flex-1 h-0.5', index < activeStep ? 'bg-[var(--laurel-bg-brand)]' : 'bg-[var(--laurel-bg-accent)]'].join(' ')} />
                )}

                {/* Vertical connector */}
                {index < items.length - 1 && orientation === 'vertical' && (
                  <div className={['w-0.5 flex-1 min-h-6 my-[var(--laurel-space-1)]', index < activeStep ? 'bg-[var(--laurel-bg-brand)]' : 'bg-[var(--laurel-bg-accent)]'].join(' ')} />
                )}
              </div>

              {/* Labels */}
              {isValidElement<StepProps>(child) && (
                <div className={orientation === 'horizontal' ? 'mt-[var(--laurel-space-2)] text-center' : 'pt-[var(--laurel-space-1)]'}>
                  {cloneElement(child, { status })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  },
);

Stepper.displayName = 'Stepper';

const Step = forwardRef<HTMLDivElement, StepProps>(
  ({ title, description, status = 'inactive', className = '', ...rest }, ref) => {
    return (
      <div ref={ref} className={className} {...rest}>
        <Text
          as="span"
          size="sm"
          weight="medium"
          className={status === 'inactive' ? 'text-[var(--laurel-text-placeholder)]' : 'text-[var(--laurel-text-primary)]'}
        >
          {title}
        </Text>
        {description && (
          <Text as="span" size="xs" className="block text-[var(--laurel-text-muted)]">
            {description}
          </Text>
        )}
      </div>
    );
  },
);

Step.displayName = 'Step';

export { Stepper, Step };
