### KanbanBoard

**Import**: `import { KanbanBoard } from '@anthropic/laurel-design'`

Kanban task board with draggable columns and items.

**Example**:
```tsx
<KanbanBoard columns={[{ id: 'todo', title: 'To Do', items: tasks.todo }, { id: 'progress', title: 'In Progress', items: tasks.inProgress }]} onMoveItem={handleMoveItem} />
```
