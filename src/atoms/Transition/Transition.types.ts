export const TRANSITION_PRESETS = ['fade', 'scale', 'slide-up', 'slide-down', 'slide-left', 'slide-right'] as const;
export const TRANSITION_DURATIONS = ['fast', 'normal', 'slow', 'slower'] as const;

export type TransitionPreset = (typeof TRANSITION_PRESETS)[number];
export type TransitionDuration = (typeof TRANSITION_DURATIONS)[number];

export interface TransitionProps {
  /** Whether the children should be shown */
  show: boolean;
  /** Animation preset */
  preset?: TransitionPreset;
  /** Duration token name */
  duration?: TransitionDuration;
  /** Unmount children when hidden (default: true) */
  unmountOnHide?: boolean;
  /** Called after the enter transition finishes */
  onEntered?: () => void;
  /** Called after the exit transition finishes */
  onExited?: () => void;
  children: React.ReactNode;
}
