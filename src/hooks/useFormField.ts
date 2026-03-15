import { useState, useCallback } from 'react';
import { validate } from '../utils/form';
import type { ValidationRule, FormFieldState, FieldInputProps } from '../utils/form';

/**
 * Manages a single form field's value, validation, and touched state.
 *
 * @example
 * const email = useFormField('', [validators.required(), validators.email()]);
 * <Input {...email.getInputProps()} />
 * {email.error && <Text>{email.error}</Text>}
 */
export function useFormField(
  initialValue = '',
  rules: ValidationRule<string>[] = [],
) {
  const [state, setState] = useState<FormFieldState>({
    value: initialValue,
    error: undefined,
    touched: false,
  });

  const setValue = useCallback(
    (value: string) => {
      setState((prev) => ({
        ...prev,
        value,
        error: prev.touched ? validate(value, rules) : prev.error,
      }));
    },
    [rules],
  );

  const setTouched = useCallback(() => {
    setState((prev) => {
      const error = validate(prev.value, rules);
      return { ...prev, touched: true, error };
    });
  }, [rules]);

  const reset = useCallback(() => {
    setState({ value: initialValue, error: undefined, touched: false });
  }, [initialValue]);

  const getInputProps = useCallback(
    (id?: string): FieldInputProps => ({
      value: state.value,
      onChange: (e) => setValue(e.target.value),
      onBlur: () => setTouched(),
      'aria-invalid': state.touched && !!state.error,
      'aria-describedby': state.touched && state.error && id ? `${id}-error` : undefined,
    }),
    [state.value, state.error, state.touched, setValue, setTouched],
  );

  return {
    value: state.value,
    error: state.touched ? state.error : undefined,
    touched: state.touched,
    setValue,
    setTouched,
    reset,
    getInputProps,
  } as const;
}
