import figma from '@figma/code-connect';
import { Accordion } from './Accordion';

figma.connect(Accordion, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1012', {
  props: {
    multiple: figma.boolean('Multiple'),
  },
  example: (props) => (
    <Accordion {...props}>
      {figma.children('AccordionItem*')}
    </Accordion>
  ),
});
