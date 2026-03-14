import figma from '@figma/code-connect';
import { CommentThread } from './CommentThread';

figma.connect(CommentThread, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_COMMENT_THREAD', {
  props: {},
  example: () => <CommentThread comments={[]} />,
});
