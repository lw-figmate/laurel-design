import type { ComponentPropsWithRef } from 'react';

export interface CookieBannerProps extends ComponentPropsWithRef<'div'> {
  /** Banner message */
  message?: string;
  /** Position (default: 'bottom') */
  position?: 'top' | 'bottom';
  /** Accept button label (default: 'Accept all') */
  acceptLabel?: string;
  /** Reject button label (default: 'Reject all') */
  rejectLabel?: string;
  /** Settings button label */
  settingsLabel?: string;
  /** Called when accepted */
  onAccept: () => void;
  /** Called when rejected */
  onReject?: () => void;
  /** Called when settings clicked */
  onSettings?: () => void;
  /** Privacy policy link href */
  policyHref?: string;
}
