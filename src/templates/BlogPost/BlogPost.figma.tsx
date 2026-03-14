import figma from '@figma/code-connect';
import { BlogPost } from './BlogPost';

figma.connect(BlogPost, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_BLOG_POST', {
  props: {},
  example: () => (
    <BlogPost title="Post Title" author="Author" date="2026-01-01">
      <p>Post content</p>
    </BlogPost>
  ),
});
