import { forwardRef, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Avatar } from '../../atoms/Avatar';
import { ScrollArea } from '../../molecules/ScrollArea';
import type { ChatWidgetProps } from './ChatWidget.types';

const chatBubbleIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M3.43 2.524A41.29 41.29 0 0 1 10 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.102 41.102 0 0 1-3.55.414c-.28.02-.521.18-.643.413l-1.712 3.293a.75.75 0 0 1-1.33 0l-1.713-3.293a.783.783 0 0 0-.642-.413 41.108 41.108 0 0 1-3.55-.414C1.993 13.245 1 11.986 1 10.574V5.426c0-1.413.993-2.67 2.43-2.902Z"
      clipRule="evenodd"
    />
  </svg>
);

const ChatWidget = forwardRef<HTMLDivElement, ChatWidgetProps>(
  (
    {
      messages,
      onSend,
      title = 'Chat',
      agentName,
      agentAvatar,
      placeholder = 'Type a message...',
      defaultOpen = false,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const [open, setOpen] = useState(defaultOpen);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof messagesEndRef.current?.scrollIntoView === 'function') {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages]);

    const handleSend = () => {
      if (inputValue.trim()) {
        onSend(inputValue.trim());
        setInputValue('');
      }
    };

    return createPortal(
      <div
        ref={ref}
        className={['fixed bottom-[var(--laurel-space-6)] right-[var(--laurel-space-6)] z-50 font-[family-name:var(--laurel-font-sans)]', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {open && (
          <div
            className={[
              'mb-[var(--laurel-space-4)] w-[360px] max-w-[calc(100vw-2rem)]',
              'bg-[var(--laurel-bg-surface)]',
              'border border-[var(--laurel-border-subtle)]',
              'rounded-[var(--laurel-radius-xl)] shadow-lg overflow-hidden',
              'flex flex-col',
            ].join(' ')}
            style={{ height: '480px' }}
            role="dialog"
            aria-label={title}
          >
            {/* Header */}
            <div className="flex items-center gap-[var(--laurel-space-3)] px-[var(--laurel-space-4)] py-[var(--laurel-space-3)] border-b border-[var(--laurel-border-subtle)] bg-[var(--laurel-bg-brand)]">
              {agentAvatar && <span className="shrink-0">{agentAvatar}</span>}
              <div className="flex-1 min-w-0">
                <Text as="span" size="sm" weight="semibold" className="text-[var(--laurel-text-on-brand)] block">
                  {title}
                </Text>
                {agentName && (
                  <Text as="span" size="xs" className="text-[var(--laurel-text-brand-on-dark)]">
                    {agentName}
                  </Text>
                )}
              </div>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)} aria-label="Close chat" className="text-[var(--laurel-text-on-brand)]">
                ×
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1">
              <div className="p-[var(--laurel-space-4)] space-y-[var(--laurel-space-3)]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={['flex', msg.sender === 'user' ? 'justify-end' : 'justify-start'].join(' ')}
                  >
                    <div
                      className={[
                        'max-w-[80%] px-[var(--laurel-space-3)] py-[var(--laurel-space-2)]',
                        'rounded-[var(--laurel-radius-lg)]',
                        msg.sender === 'user'
                          ? 'bg-[var(--laurel-bg-brand)] text-[var(--laurel-text-on-brand)]'
                          : 'bg-[var(--laurel-bg-subtle)] text-[var(--laurel-text-heading)]',
                      ].join(' ')}
                    >
                      <Text as="p" size="sm">
                        {msg.content}
                      </Text>
                      <Text
                        as="span"
                        size="xs"
                        className={msg.sender === 'user' ? 'text-[var(--laurel-text-brand-on-dark)]' : 'text-[var(--laurel-text-placeholder)]'}
                      >
                        {msg.timestamp}
                      </Text>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="flex items-center gap-[var(--laurel-space-2)] p-[var(--laurel-space-3)] border-t border-[var(--laurel-border-subtle)]">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
                inputSize="sm"
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
              />
              <Button size="sm" onClick={handleSend} disabled={!inputValue.trim()}>
                Send
              </Button>
            </div>
          </div>
        )}

        {/* Floating trigger */}
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open chat"
            className={[
              'h-14 w-14 rounded-full',
              'bg-[var(--laurel-bg-brand)] text-[var(--laurel-text-on-brand)]',
              'shadow-lg flex items-center justify-center',
              'hover:bg-[var(--laurel-bg-brand-hover)] transition-colors cursor-pointer',
            ].join(' ')}
          >
            {chatBubbleIcon}
          </button>
        )}
      </div>,
      document.body,
    );
  },
);

ChatWidget.displayName = 'ChatWidget';

export { ChatWidget };
