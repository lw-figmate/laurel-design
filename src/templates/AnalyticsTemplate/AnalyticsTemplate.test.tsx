import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AnalyticsTemplate } from './AnalyticsTemplate';

describe('AnalyticsTemplate', () => {
  const defaultCharts = [
    { title: 'Revenue', content: <div>Chart 1</div> },
    { title: 'Traffic', content: <div>Chart 2</div> },
  ];

  it('renders title', () => {
    render(<AnalyticsTemplate title="Analytics" charts={defaultCharts} />);
    expect(screen.getByText('Analytics')).toBeInTheDocument();
  });

  it('renders chart cards', () => {
    render(<AnalyticsTemplate title="Analytics" charts={defaultCharts} />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('Traffic')).toBeInTheDocument();
    expect(screen.getByText('Chart 1')).toBeInTheDocument();
  });

  it('renders stats when provided', () => {
    render(
      <AnalyticsTemplate
        title="Analytics"
        charts={defaultCharts}
        stats={[{ label: 'Page Views', value: '50K' }]}
      />,
    );
    expect(screen.getByText('Page Views')).toBeInTheDocument();
  });

  it('renders filters', () => {
    render(
      <AnalyticsTemplate
        title="Analytics"
        charts={defaultCharts}
        filters={<button>Last 30 days</button>}
      />,
    );
    expect(screen.getByRole('button', { name: 'Last 30 days' })).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<AnalyticsTemplate ref={ref} title="Analytics" charts={defaultCharts} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
