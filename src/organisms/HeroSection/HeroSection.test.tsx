import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  it('renders headline', () => {
    render(<HeroSection headline="Welcome to our platform" />);
    expect(screen.getByText('Welcome to our platform')).toBeInTheDocument();
  });

  it('renders subtext when provided', () => {
    render(<HeroSection headline="Title" subtext="Supporting text" />);
    expect(screen.getByText('Supporting text')).toBeInTheDocument();
  });

  it('renders primary and secondary actions', () => {
    render(
      <HeroSection
        headline="Title"
        primaryAction={<button>Get Started</button>}
        secondaryAction={<button>Learn More</button>}
      />,
    );
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('applies background image style', () => {
    const { container } = render(<HeroSection headline="Title" backgroundImage="hero.jpg" />);
    const section = container.querySelector('section')!;
    expect(section.style.backgroundImage).toContain('hero.jpg');
  });

  it('renders media element', () => {
    render(<HeroSection headline="Title" media={<img alt="hero" src="img.png" />} />);
    expect(screen.getByAltText('hero')).toBeInTheDocument();
  });

  it('applies left alignment', () => {
    render(<HeroSection headline="Title" align="left" />);
    const heading = screen.getByText('Title');
    expect(heading.closest('div')).toHaveClass('text-left');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLElement>;
    render(<HeroSection ref={ref} headline="Title" />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
