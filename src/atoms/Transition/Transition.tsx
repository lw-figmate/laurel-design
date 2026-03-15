import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { cn } from '../../utils/cn';
import type { TransitionProps } from './Transition.types';

const presetStyles: Record<string, { enter: string; exit: string }> = {
  fade: { enter: 'opacity-100', exit: 'opacity-0' },
  scale: { enter: 'opacity-100 scale-100', exit: 'opacity-0 scale-95' },
  'slide-up': { enter: 'opacity-100 translate-y-0', exit: 'opacity-0 translate-y-2' },
  'slide-down': { enter: 'opacity-100 translate-y-0', exit: 'opacity-0 -translate-y-2' },
  'slide-left': { enter: 'opacity-100 translate-x-0', exit: 'opacity-0 translate-x-2' },
  'slide-right': { enter: 'opacity-100 translate-x-0', exit: 'opacity-0 -translate-x-2' },
};

const durationClasses: Record<string, string> = {
  fast: 'duration-[var(--laurel-duration-fast)]',
  normal: 'duration-[var(--laurel-duration-normal)]',
  slow: 'duration-[var(--laurel-duration-slow)]',
  slower: 'duration-[var(--laurel-duration-slower)]',
};

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Transition = ({
  show,
  preset = 'fade',
  duration = 'normal',
  unmountOnHide = true,
  onEntered,
  onExited,
  children,
}: TransitionProps) => {
  const [mounted, setMounted] = useState(show);
  const [stage, setStage] = useState<'enter' | 'exit'>(show ? 'enter' : 'exit');
  const ref = useRef<HTMLDivElement>(null);
  const initialRender = useRef(true);

  useIsomorphicLayoutEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (show) {
      setMounted(true);
      queueMicrotask(() => setStage('enter'));
    } else {
      setStage('exit');
    }
  }, [show]);

  const handleTransitionEnd = () => {
    if (stage === 'enter') {
      onEntered?.();
    } else {
      onExited?.();
      if (unmountOnHide) setMounted(false);
    }
  };

  if (!mounted && unmountOnHide) return null;

  const styles = presetStyles[preset];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        'ease-[var(--laurel-ease-default)]',
        durationClasses[duration],
        stage === 'enter' ? styles.enter : styles.exit,
      )}
      onTransitionEnd={handleTransitionEnd}
      aria-hidden={!show}
    >
      {children}
    </div>
  );
};

Transition.displayName = 'Transition';

export { Transition };
