import { forwardRef, useState } from 'react';
import { Text } from '../../atoms/Text';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import type { CommentThreadProps, Comment } from './CommentThread.types';

function CommentItem({
  comment,
  depth,
  onReply,
  onDelete,
}: {
  comment: Comment;
  depth: number;
  onReply?: (parentId: string, content: string) => void;
  onDelete?: (commentId: string) => void;
}) {
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleSubmitReply = () => {
    if (replyText.trim() && onReply) {
      onReply(comment.id, replyText.trim());
      setReplyText('');
      setReplying(false);
    }
  };

  return (
    <div
      className={depth > 0 ? 'ml-[var(--laurel-space-8)] border-l-2 border-[var(--laurel-border-subtle)] pl-[var(--laurel-space-4)]' : ''}
    >
      <div className="flex gap-[var(--laurel-space-3)] py-[var(--laurel-space-3)]">
        <Avatar initials={comment.author.slice(0, 2).toUpperCase()} src={comment.avatar} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-[var(--laurel-space-2)]">
            <Text as="span" size="sm" weight="semibold">
              {comment.author}
            </Text>
            <Text as="span" size="xs" className="text-[var(--laurel-text-placeholder)]">
              {comment.timestamp}
            </Text>
          </div>
          <Text as="p" size="sm" className="mt-[var(--laurel-space-1)]">
            {comment.content}
          </Text>
          <div className="flex gap-[var(--laurel-space-2)] mt-[var(--laurel-space-2)]">
            {onReply && (
              <Button variant="ghost" size="sm" onClick={() => setReplying(!replying)}>
                Reply
              </Button>
            )}
            {onDelete && (
              <Button variant="ghost" size="sm" onClick={() => onDelete(comment.id)}>
                Delete
              </Button>
            )}
          </div>

          {replying && (
            <div className="flex gap-[var(--laurel-space-2)] mt-[var(--laurel-space-2)]">
              <Input
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                inputSize="sm"
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSubmitReply();
                }}
              />
              <Button size="sm" onClick={handleSubmitReply}>
                Send
              </Button>
            </div>
          )}
        </div>
      </div>

      {comment.replies?.map((reply) => (
        <CommentItem key={reply.id} comment={reply} depth={depth + 1} onReply={onReply} onDelete={onDelete} />
      ))}
    </div>
  );
}

const CommentThread = forwardRef<HTMLDivElement, CommentThreadProps>(
  ({ comments, onReply, onDelete, emptyContent, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {comments.length === 0 && emptyContent ? (
        emptyContent
      ) : (
        <div className="divide-y divide-[var(--laurel-border-muted)]">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} depth={0} onReply={onReply} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  ),
);

CommentThread.displayName = 'CommentThread';

export { CommentThread };
