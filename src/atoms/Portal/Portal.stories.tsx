import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Portal } from './Portal';

const meta = {
  title: 'Atoms/Portal',
  component: Portal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Renders children into a DOM node outside the parent hierarchy using React portals. Defaults to `document.body`. Useful for modals, tooltips, and overlays.',
      },
    },
  },
} satisfies Meta<typeof Portal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <p>This content is in the normal DOM tree.</p>
        <Portal>
          <div
            style={{
              position: 'fixed',
              bottom: 16,
              right: 16,
              padding: '12px 16px',
              borderRadius: 8,
              background: 'var(--laurel-bg-subtle)',
              border: '1px solid var(--laurel-border)',
              zIndex: 50,
            }}
          >
            Portaled to document.body
          </div>
        </Portal>
      </div>
    );
  },
};

export const CustomContainer: Story = {
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
      <div>
        <p>The portaled content renders inside the bordered box below:</p>
        <div
          ref={containerRef}
          style={{
            marginTop: 12,
            padding: 16,
            border: '2px dashed var(--laurel-border)',
            borderRadius: 8,
            minHeight: 80,
          }}
        />
        {containerRef.current && (
          <Portal container={containerRef.current}>
            <p>I was portaled here!</p>
          </Portal>
        )}
      </div>
    );
  },
};
