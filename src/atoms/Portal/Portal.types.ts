export interface PortalProps {
  /** Content to render inside the portal */
  children: React.ReactNode;
  /** Target DOM element (defaults to document.body) */
  container?: Element | DocumentFragment;
}
