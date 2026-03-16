import figma from '@figma/code-connect';
import { Carousel } from './Carousel';

figma.connect(Carousel, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1740', {
  props: {
    autoPlay: figma.boolean('AutoPlay'),
    showDots: figma.boolean('Show Dots'),
    showArrows: figma.boolean('Show Arrows'),
  },
  example: (props) => (
    <Carousel {...props}>
      <div>Slide 1</div>
      <div>Slide 2</div>
    </Carousel>
  ),
});
