import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

  it('renders all slides', () => {
    render(
      <Carousel>
        {slides.map((s) => <div key={s}>{s}</div>)}
      </Carousel>,
    );
    slides.forEach((s) => expect(screen.getByText(s)).toBeInTheDocument());
  });

  it('has carousel role', () => {
    render(
      <Carousel>
        {slides.map((s) => <div key={s}>{s}</div>)}
      </Carousel>,
    );
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('shows prev/next arrows by default', () => {
    render(
      <Carousel>
        {slides.map((s) => <div key={s}>{s}</div>)}
      </Carousel>,
    );
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument();
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument();
  });

  it('hides arrows when showArrows=false', () => {
    render(
      <Carousel showArrows={false}>
        {slides.map((s) => <div key={s}>{s}</div>)}
      </Carousel>,
    );
    expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument();
  });

  it('shows dot indicators', () => {
    render(
      <Carousel>
        {slides.map((s) => <div key={s}>{s}</div>)}
      </Carousel>,
    );
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument();
  });

  it('navigates to next slide on arrow click', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Carousel>
        {slides.map((s) => <div key={s}>{s}</div>)}
      </Carousel>,
    );
    const track = container.querySelector('.flex.transition-transform') as HTMLElement;
    expect(track.style.transform).toBe('translateX(-0%)');
    await user.click(screen.getByLabelText('Next slide'));
    expect(track.style.transform).toBe('translateX(-100%)');
  });

  it('hides dots when showDots=false', () => {
    render(
      <Carousel showDots={false}>
        {slides.map((s) => <div key={s}>{s}</div>)}
      </Carousel>,
    );
    expect(screen.queryByLabelText('Go to slide 1')).not.toBeInTheDocument();
  });

  it('each slide has aria-roledescription', () => {
    render(
      <Carousel>
        {slides.map((s) => <div key={s}>{s}</div>)}
      </Carousel>,
    );
    const groups = screen.getAllByRole('group');
    groups.forEach((g) => expect(g.getAttribute('aria-roledescription')).toBe('slide'));
  });
});
