import { createPortal } from 'react-dom';
import type { PortalProps } from './Portal.types';

const Portal = ({ children, container }: PortalProps) => {
  const target = container ?? (typeof document !== 'undefined' ? document.body : null);
  if (!target) return null;
  return createPortal(children, target);
};

Portal.displayName = 'Portal';

export { Portal };
