import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LandingPage } from './LandingPage';

describe('LandingPage', () => {
  const defaultProps = {
    hero: <div>Hero content</div>,
    sections: [
      { id: 'features', content: <div>Features section</div> },
      { id: 'testimonials', content: <div>Testimonials section</div> },
    ],
  };

  it('renders hero content', () => {
    render(<LandingPage {...defaultProps} />);
    expect(screen.getByText('Hero content')).toBeInTheDocument();
  });

  it('renders all sections', () => {
    render(<LandingPage {...defaultProps} />);
    expect(screen.getByText('Features section')).toBeInTheDocument();
    expect(screen.getByText('Testimonials section')).toBeInTheDocument();
  });

  it('renders navigation', () => {
    render(<LandingPage {...defaultProps} navigation={<nav>Nav</nav>} />);
    expect(screen.getByText('Nav')).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(<LandingPage {...defaultProps} footer={<footer>Footer content</footer>} />);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('renders sticky CTA', () => {
    render(<LandingPage {...defaultProps} cta={<div>Get started now</div>} />);
    expect(screen.getByText('Get started now')).toBeInTheDocument();
  });

  it('sets section IDs for anchor links', () => {
    const { container } = render(<LandingPage {...defaultProps} />);
    expect(container.querySelector('#features')).toBeInTheDocument();
    expect(container.querySelector('#testimonials')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<LandingPage ref={ref} {...defaultProps} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
