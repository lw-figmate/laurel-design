import figma from '@figma/code-connect';
import { ActivityLog } from './ActivityLog';

figma.connect(ActivityLog, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_ACTIVITY_LOG', {
  props: {
    title: figma.string('Title'),
  },
  example: ({ title }) => <ActivityLog events={[]} title={title} />,
});
