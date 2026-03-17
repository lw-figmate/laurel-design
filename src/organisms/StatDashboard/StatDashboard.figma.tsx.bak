import figma from '@figma/code-connect';
import { StatDashboard } from './StatDashboard';

figma.connect(StatDashboard, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_STAT_DASHBOARD', {
  props: {
    title: figma.string('Title'),
    columns: figma.enum('Columns', { '2': 2, '3': 3, '4': 4 }),
  },
  example: ({ title, columns }) => <StatDashboard stats={[]} title={title} columns={columns} />,
});
