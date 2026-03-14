import figma from '@figma/code-connect';
import { Timeline } from './Timeline';

figma.connect(Timeline, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_TIMELINE', {
  props: {},
  example: () => <Timeline>{figma.children('TimelineItem*')}</Timeline>,
});
