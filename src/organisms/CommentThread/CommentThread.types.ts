import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface Comment {
  /** Unique identifier */
  id: string;
  /** Author name */
  author: string;
  /** Author avatar URL or initials */
  avatar?: string;
  /** Comment body */
  content: string;
  /** Timestamp string */
  timestamp: string;
  /** Nested replies */
  replies?: Comment[];
}

export interface CommentThreadProps extends ComponentPropsWithRef<'div'> {
  /** Top-level comments */
  comments: Comment[];
  /** Called when reply is submitted */
  onReply?: (parentId: string, content: string) => void;
  /** Called when a comment is deleted */
  onDelete?: (commentId: string) => void;
  /** Custom empty state content */
  emptyContent?: ReactNode;
}
