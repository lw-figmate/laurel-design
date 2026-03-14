import type { Meta, StoryObj } from '@storybook/react-vite';
import { AnalyticsTemplate } from './AnalyticsTemplate';

const meta = {
  title: 'Templates/AnalyticsTemplate',
  component: AnalyticsTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AnalyticsTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Analytics',
    stats: [
      { label: 'Page Views', value: '120K' },
      { label: 'Bounce Rate', value: '32%', trend: 'down' as const },
      { label: 'Avg Session', value: '2m 34s', trend: 'up' as const },
    ],
    charts: [
      { title: 'Traffic Overview', content: <div style={{ height: 200, background: '#f0f0f0', borderRadius: 8 }}>Chart placeholder</div>, span: 2 },
      { title: 'Top Pages', content: <div style={{ height: 200, background: '#f0f0f0', borderRadius: 8 }}>Table placeholder</div> },
      { title: 'Referral Sources', content: <div style={{ height: 200, background: '#f0f0f0', borderRadius: 8 }}>Pie chart</div> },
      { title: 'Device Breakdown', content: <div style={{ height: 200, background: '#f0f0f0', borderRadius: 8 }}>Bar chart</div>, span: 2 },
    ],
  },
};
