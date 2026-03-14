import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlogPost } from './BlogPost';

describe('BlogPost', () => {
  const defaultProps = {
    title: 'My Blog Post',
    author: 'Jane Doe',
    date: 'January 1, 2026',
    children: <p>Post body content</p>,
  };

  it('renders title', () => {
    render(<BlogPost {...defaultProps} />);
    expect(screen.getByRole('heading', { name: 'My Blog Post' })).toBeInTheDocument();
  });

  it('renders author name', () => {
    render(<BlogPost {...defaultProps} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('renders date', () => {
    render(<BlogPost {...defaultProps} />);
    expect(screen.getByText(/January 1, 2026/)).toBeInTheDocument();
  });

  it('renders reading time', () => {
    render(<BlogPost {...defaultProps} readingTime="5 min read" />);
    expect(screen.getByText(/5 min read/)).toBeInTheDocument();
  });

  it('renders body content', () => {
    render(<BlogPost {...defaultProps} />);
    expect(screen.getByText('Post body content')).toBeInTheDocument();
  });

  it('renders cover image', () => {
    render(<BlogPost {...defaultProps} coverImage="/cover.jpg" coverImageAlt="Cover" />);
    expect(screen.getByAltText('Cover')).toBeInTheDocument();
  });

  it('renders tags', () => {
    render(<BlogPost {...defaultProps} tags={['React', 'Design']} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Design')).toBeInTheDocument();
  });

  it('renders back link', () => {
    render(<BlogPost {...defaultProps} backHref="/blog" />);
    const backLink = screen.getByText(/Back/);
    expect(backLink).toHaveAttribute('href', '/blog');
  });

  it('renders related posts section', () => {
    render(<BlogPost {...defaultProps} relatedPosts={<div>Related post 1</div>} />);
    expect(screen.getByText('Related Posts')).toBeInTheDocument();
    expect(screen.getByText('Related post 1')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLElement | null };
    render(<BlogPost ref={ref} {...defaultProps} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
