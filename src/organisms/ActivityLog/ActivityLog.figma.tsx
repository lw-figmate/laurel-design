import figma from '@figma/code-connect';
import { ActivityLog } from './ActivityLog';

figma.connect(ActivityLog, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3587', {
  props: {},
  example: () => (
    <ActivityLog
      events={[]}
    />
  ),
});
