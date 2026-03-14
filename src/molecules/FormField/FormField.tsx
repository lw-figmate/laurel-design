import { forwardRef, useId } from 'react';
import { Text } from '../../atoms/Text';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';
import type { FormFieldProps } from './FormField.types';

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, errorMessage, helperText, required, id: externalId, inputSize, error, ...inputProps }, ref) => {
    const generatedId = useId();
    const inputId = externalId ?? generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;
    const hasError = !!errorMessage || error;
    const descriptionId = hasError ? errorId : helperText ? helperId : undefined;

    return (
      <div className="flex flex-col gap-[var(--laurel-space-1-5)]">
        <Label htmlFor={inputId} required={required}>
          {label}
        </Label>

        <Input
          ref={ref}
          id={inputId}
          inputSize={inputSize}
          error={hasError}
          aria-describedby={descriptionId}
          aria-required={required || undefined}
          {...inputProps}
        />

        {hasError && errorMessage && (
          <Text
            as="span"
            size="xs"
            id={errorId}
            role="alert"
            className="text-[var(--laurel-text-error)]"
          >
            {errorMessage}
          </Text>
        )}

        {!hasError && helperText && (
          <Text as="span" size="xs" id={helperId} className="text-[var(--laurel-text-muted)]">
            {helperText}
          </Text>
        )}
      </div>
    );
  },
);

FormField.displayName = 'FormField';

export { FormField };
