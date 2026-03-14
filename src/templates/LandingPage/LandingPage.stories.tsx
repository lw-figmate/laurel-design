import type { Meta, StoryObj } from '@storybook/react-vite';
import { LandingPage } from './LandingPage';

const meta = {
  title: 'Templates/LandingPage',
  component: LandingPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navigation: (
      <nav style={{ padding: '1rem 2rem', borderBottom: '1px solid #eee', background: 'white' }}>
        <strong>Brand</strong>
      </nav>
    ),
    hero: (
      <div style={{ padding: '6rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Build better products</h1>
        <p>Start your free trial today</p>
      </div>
    ),
    sections: [
      {
        id: 'features',
        content: (
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Features</h2>
            <p>Everything you need to ship faster.</p>
          </div>
        ),
      },
      {
        id: 'testimonials',
        content: (
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Testimonials</h2>
            <p>Trusted by thousands of teams.</p>
          </div>
        ),
      },
    ],
    footer: <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #eee' }}>&copy; 2026 Brand</footer>,
  },
};
