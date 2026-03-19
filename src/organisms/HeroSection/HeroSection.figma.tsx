import figma from '@figma/code-connect';
import { HeroSection } from './HeroSection';

figma.connect(HeroSection, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=27:4330', {
  props: {
    align: figma.enum('Align', { Left: 'left', Center: 'center', Right: 'right' }),
  },
  example: ({ align }) => (
    <HeroSection headline="Headline" subtext="Subtext" align={align} />
  ),
});
