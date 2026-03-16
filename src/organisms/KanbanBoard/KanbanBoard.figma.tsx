import figma from '@figma/code-connect';
import { KanbanBoard } from './KanbanBoard';

figma.connect(KanbanBoard, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=27:4338', {
  props: {},
  example: () => (
    <KanbanBoard
      columns={[
        { id: 'todo', title: 'To Do', items: [] },
        { id: 'in-progress', title: 'In Progress', items: [] },
        { id: 'done', title: 'Done', items: [] },
      ]}
    />
  ),
});
