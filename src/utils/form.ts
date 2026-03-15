/** A single validation rule */
export interface ValidationRule<T = unknown> {
  /** Validation function — return an error string or undefined */
  validate: (value: T) => string | undefined;
}

/** Built-in validators for common patterns */
export const validators = {
  /** Value must not be empty */
  required(message = 'This field is required'): ValidationRule<string> {
    return {
      validate: (value) => (value.trim() ? undefined : message),
    };
  },

  /** Value must be at least `min` characters long */
  minLength(min: number, message?: string): ValidationRule<string> {
    return {
      validate: (value) =>
        value.length >= min ? undefined : (message ?? `Must be at least ${min} characters`),
    };
  },

  /** Value must be at most `max` characters long */
  maxLength(max: number, message?: string): ValidationRule<string> {
    return {
      validate: (value) =>
        value.length <= max ? undefined : (message ?? `Must be at most ${max} characters`),
    };
  },

  /** Value must match the provided regex pattern */
  pattern(regex: RegExp, message = 'Invalid format'): ValidationRule<string> {
    return {
      validate: (value) => (regex.test(value) ? undefined : message),
    };
  },

  /** Value must be a valid email address */
  email(message = 'Invalid email address'): ValidationRule<string> {
    return validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message);
  },
} as const;

/** Run all validation rules against a value, return first error or undefined */
export function validate<T>(value: T, rules: ValidationRule<T>[]): string | undefined {
  for (const rule of rules) {
    const error = rule.validate(value);
    if (error) return error;
  }
  return undefined;
}

/** Validate all fields of a form and return an errors map */
export function validateForm<T extends Record<string, unknown>>(
  values: T,
  schema: Partial<Record<keyof T, ValidationRule<T[keyof T]>[]>>,
): Partial<Record<keyof T, string>> {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const key in schema) {
    const rules = schema[key];
    if (!rules) continue;
    const error = validate(values[key] as T[keyof T], rules);
    if (error) errors[key] = error;
  }

  return errors;
}

/** Form field state for use with useFormField */
export interface FormFieldState {
  value: string;
  error: string | undefined;
  touched: boolean;
}

/** Props shape returned by getFieldProps for use with Input/Textarea */
export interface FieldInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur: () => void;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
}
