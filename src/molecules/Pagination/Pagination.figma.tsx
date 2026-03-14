import figma from '@figma/code-connect';
import { Pagination } from './Pagination';

figma.connect(Pagination, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_PAGINATION', {
  props: {
    siblingCount: figma.enum('Sibling Count', { '1': 1, '2': 2 }),
  },
  example: (props) => (
    <Pagination totalPages={10} currentPage={1} onPageChange={() => {}} {...props} />
  ),
});
