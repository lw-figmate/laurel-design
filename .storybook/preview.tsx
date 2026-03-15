import type { Preview } from '@storybook/react-vite'
import React from 'react'
import '../src/index.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Theme mode for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
          { value: 'side-by-side', icon: 'sidebar', title: 'Side by side' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      if (theme === 'side-by-side') {
        return (
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div
              data-theme="light"
              style={{
                flex: 1,
                padding: '1.5rem',
                borderRadius: '0.5rem',
                backgroundColor: 'var(--laurel-bg-surface)',
                color: 'var(--laurel-text-primary)',
              }}
            >
              <div style={{ marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: 600, opacity: 0.5 }}>LIGHT</div>
              <Story />
            </div>
            <div
              data-theme="dark"
              style={{
                flex: 1,
                padding: '1.5rem',
                borderRadius: '0.5rem',
                backgroundColor: 'var(--laurel-bg-surface)',
                color: 'var(--laurel-text-primary)',
              }}
            >
              <div style={{ marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: 600, opacity: 0.5 }}>DARK</div>
              <Story />
            </div>
          </div>
        );
      }

      document.documentElement.setAttribute('data-theme', theme);
      return <Story />;
    },
  ],
};

export default preview;