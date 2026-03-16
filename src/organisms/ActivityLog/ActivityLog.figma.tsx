import figma from '@figma/code-connect';
import { ActivityLog } from './ActivityLog';

figma.connect(ActivityLog, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3587', {
  props: {
    title: figma.string('Title'),
    emptyMessage: figma.string('EmptyMessage'),
    showPagination: figma.boolean('ShowPagination'),
  },
  example: ({ title, emptyMessage, showPagination }) => (
    <ActivityLog
      events={[]}
      title={title}
      emptyMessage={emptyMessage}
      totalPages={showPagination ? 5 : undefined}
      currentPage={showPagination ? 1 : undefined}
      onPageChange={showPagination ? (page) => {} : undefined}
    />
  ),
});
