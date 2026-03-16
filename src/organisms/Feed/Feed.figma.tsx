import figma from '@figma/code-connect';
import { Feed } from './Feed';

figma.connect(Feed, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=26:4002', {
  props: {},
  example: () => <Feed items={[]} />,
});
