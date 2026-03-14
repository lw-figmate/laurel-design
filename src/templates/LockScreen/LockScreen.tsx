import { forwardRef, useState, useCallback } from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import type { LockScreenProps } from './LockScreen.types';

const LockScreen = forwardRef<HTMLDivElement, LockScreenProps>(
  (
    {
      userName,
      avatar,
      onUnlock,
      error,
      loading = false,
      onSignOut,
      backgroundImage,
      showTime = true,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback(
      (e: React.FormEvent) => {
        e.preventDefault();
        onUnlock(password);
      },
      [password, onUnlock],
    );

    return (
      <div
        ref={ref}
        className={[
          'flex min-h-screen flex-col items-center justify-center',
          'bg-[var(--laurel-bg-elevated)] text-[var(--laurel-text-on-brand)]',
          'font-[family-name:var(--laurel-font-sans)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={
          backgroundImage
            ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : undefined
        }
        {...rest}
      >
        {showTime && (
          <div className="mb-[var(--laurel-space-8)] text-center" aria-live="polite">
            <Text as="p" size="2xl" weight="bold">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
            <Text as="p" size="sm" className="opacity-80">
              {new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
            </Text>
          </div>
        )}

        <div className="flex flex-col items-center">
          {avatar && <div className="mb-[var(--laurel-space-4)]">{avatar}</div>}

          <Text as="p" size="lg" weight="semibold" className="mb-[var(--laurel-space-4)]">
            {userName}
          </Text>

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-[var(--laurel-space-3)]">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              autoFocus
              aria-label="Password"
            />

            {error && (
              <Text as="p" size="sm" role="alert" className="text-[var(--laurel-text-error-muted)]">
                {error}
              </Text>
            )}

            <Button type="submit" disabled={loading}>
              {loading ? 'Unlocking…' : 'Unlock'}
            </Button>
          </form>

          {onSignOut && (
            <button
              type="button"
              onClick={onSignOut}
              className="mt-[var(--laurel-space-4)] text-[length:var(--laurel-font-size-sm)] opacity-70 hover:opacity-100 underline bg-transparent border-none text-inherit cursor-pointer"
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    );
  },
);

LockScreen.displayName = 'LockScreen';

export { LockScreen };
