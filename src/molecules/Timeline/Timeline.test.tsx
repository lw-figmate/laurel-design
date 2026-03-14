import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Timeline, TimelineItem } from './Timeline';

describe('Timeline', () => {
  it('renders timeline items', () => {
    render(
      <Timeline>
        <TimelineItem title="Created" />
        <TimelineItem title="Updated" />
      </Timeline>,
    );
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(screen.getByText('Updated')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(
      <Timeline>
        <TimelineItem title="Deployed" description="2 hours ago" />
      </Timeline>,
    );
    expect(screen.getByText('2 hours ago')).toBeInTheDocument();
  });

  it('renders custom icon', () => {
    render(
      <Timeline>
        <TimelineItem title="Event" icon={<span data-testid="icon">🎉</span>} />
      </Timeline>,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <Timeline>
        <TimelineItem title="Commit">
          <p>Fixed a bug</p>
        </TimelineItem>
      </Timeline>,
    );
    expect(screen.getByText('Fixed a bug')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    const { container } = render(
      <Timeline className="my-custom">
        <TimelineItem title="X" />
      </Timeline>,
    );
    expect(container.firstElementChild!.className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(
      <Timeline ref={ref}>
        <TimelineItem title="X" />
      </Timeline>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
