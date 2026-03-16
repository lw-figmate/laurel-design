import figma from '@figma/code-connect';
import { Pagination } from './Pagination';

figma.connect(Pagination, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1356', {
  props: {},
  example: (props) => (
    <Pagination totalPages={10} currentPage={1} onPageChange={() => {}} {...props} />
  ),
});
