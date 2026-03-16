import figma from '@figma/code-connect';
import { Table } from './Table';

figma.connect(Table, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1479', {
  props: {
    striped: figma.boolean('Striped'),
  },
  example: (props) => <Table {...props}>{figma.children('*')}</Table>,
});
