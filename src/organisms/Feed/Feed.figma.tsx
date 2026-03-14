import figma from '@figma/code-connect';
import { Feed } from './Feed';

figma.connect(Feed, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_FEED', {
  props: {},
  example: () => <Feed items={[]} />,
});
