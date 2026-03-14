import { forwardRef, useState, useCallback } from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { FormField } from '../../molecules/FormField';
import { Checkbox } from '../../atoms/Checkbox';
import type { LoginFormProps } from './LoginForm.types';

const LoginForm = forwardRef<HTMLFormElement, LoginFormProps>(
  (
    {
      onSubmit,
      title = 'Sign in',
      error,
      loading = false,
      forgotPasswordHref,
      signUpHref,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = useCallback(
      (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ email, password, remember });
      },
      [email, password, remember, onSubmit],
    );

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={[
          'w-full max-w-sm mx-auto font-[family-name:var(--laurel-font-sans)]',
          'space-y-[var(--laurel-space-5)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <Text as="h2" size="xl" weight="bold" className="text-center">
          {title}
        </Text>

        {error && (
          <div
            role="alert"
            className="rounded-[var(--laurel-radius-md)] bg-[var(--laurel-status-error-bg)] border border-[var(--laurel-border-error-muted)] px-[var(--laurel-space-4)] py-[var(--laurel-space-3)]"
          >
            <Text as="span" size="sm" className="text-[var(--laurel-text-error-strong)]">
              {error}
            </Text>
          </div>
        )}

        <FormField
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="you@example.com"
          autoComplete="email"
        />

        <FormField
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="••••••••"
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-[var(--laurel-space-2)] cursor-pointer">
            <Checkbox
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <Text as="span" size="sm">
              Remember me
            </Text>
          </label>

          {forgotPasswordHref && (
            <a
              href={forgotPasswordHref}
              className="text-[length:var(--laurel-font-size-sm)] text-[var(--laurel-text-brand)] hover:underline"
            >
              Forgot password?
            </a>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </Button>

        {signUpHref && (
          <Text as="p" size="sm" className="text-center text-[var(--laurel-text-muted)]">
            Don&apos;t have an account?{' '}
            <a
              href={signUpHref}
              className="text-[var(--laurel-text-brand)] hover:underline font-[var(--laurel-font-weight-medium)]"
            >
              Sign up
            </a>
          </Text>
        )}
      </form>
    );
  },
);

LoginForm.displayName = 'LoginForm';

export { LoginForm };
