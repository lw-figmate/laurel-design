import figma from '@figma/code-connect';
import { Timeline } from './Timeline';

figma.connect(Timeline, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1458', {
  props: {},
  example: () => <Timeline>{figma.children('TimelineItem*')}</Timeline>,
});
