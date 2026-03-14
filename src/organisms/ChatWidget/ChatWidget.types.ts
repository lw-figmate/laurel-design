import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ChatMessage {
  /** Unique identifier */
  id: string;
  /** Message content */
  content: string;
  /** Sender identifier */
  sender: 'user' | 'agent';
  /** Timestamp string */
  timestamp: string;
}

export interface ChatWidgetProps extends ComponentPropsWithRef<'div'> {
  /** Chat messages */
  messages: ChatMessage[];
  /** Called when a message is sent */
  onSend: (content: string) => void;
  /** Widget title (default: 'Chat') */
  title?: string;
  /** Agent name */
  agentName?: string;
  /** Agent avatar */
  agentAvatar?: ReactNode;
  /** Input placeholder */
  placeholder?: string;
  /** Whether initially open */
  defaultOpen?: boolean;
}
