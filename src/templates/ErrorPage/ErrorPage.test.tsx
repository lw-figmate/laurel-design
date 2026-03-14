import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ErrorPage } from './ErrorPage';

describe('ErrorPage', () => {
  it('renders error title', () => {
    render(<ErrorPage title="Page not found" />);
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('renders error code', () => {
    render(<ErrorPage code={404} title="Page not found" />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<ErrorPage title="Not found" description="The page you are looking for does not exist." />);
    expect(screen.getByText('The page you are looking for does not exist.')).toBeInTheDocument();
  });

  it('renders illustration', () => {
    render(<ErrorPage title="Error" illustration={<img alt="Error illustration" src="/error.svg" />} />);
    expect(screen.getByAltText('Error illustration')).toBeInTheDocument();
  });

  it('renders primary action', () => {
    render(<ErrorPage title="Not found" action={<button>Go home</button>} />);
    expect(screen.getByRole('button', { name: 'Go home' })).toBeInTheDocument();
  });

  it('renders secondary action', () => {
    render(<ErrorPage title="Not found" secondaryAction={<button>Go back</button>} />);
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
  });

  it('renders support link', () => {
    render(<ErrorPage title="Error" supportHref="/support" />);
    expect(screen.getByText('Contact support')).toHaveAttribute('href', '/support');
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<ErrorPage ref={ref} title="Error" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
