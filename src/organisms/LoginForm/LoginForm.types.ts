import type { ComponentPropsWithRef } from 'react';

export interface LoginFormProps extends Omit<ComponentPropsWithRef<'form'>, 'onSubmit'> {
  /** Called with email and password on submit */
  onSubmit: (credentials: { email: string; password: string; remember: boolean }) => void;
  /** Title text (default: 'Sign in') */
  title?: string;
  /** Error message to display */
  error?: string;
  /** Whether the form is in a loading/submitting state */
  loading?: boolean;
  /** Forgot password link href */
  forgotPasswordHref?: string;
  /** Sign up link href */
  signUpHref?: string;
}
