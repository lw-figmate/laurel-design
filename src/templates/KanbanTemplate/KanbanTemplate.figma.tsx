import figma from '@figma/code-connect';
import { KanbanTemplate } from './KanbanTemplate';

figma.connect(KanbanTemplate, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_KANBAN_TEMPLATE', {
  props: {},
  example: () => (
    <KanbanTemplate
      title="Board"
      columns={[{ id: 'todo', title: 'To Do', items: [] }]}
    />
  ),
});
