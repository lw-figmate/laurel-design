import figma from '@figma/code-connect';
import { MediaGallery } from './MediaGallery';

figma.connect(MediaGallery, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=33:4826', {
  props: {
    columns: figma.enum('Columns', { '2': 2, '3': 3, '4': 4 }),
  },
  example: ({ columns }) => <MediaGallery items={[]} columns={columns} />,
});
