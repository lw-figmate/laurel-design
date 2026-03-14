import figma from '@figma/code-connect';
import { HeroSection } from './HeroSection';

figma.connect(HeroSection, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_HERO_SECTION', {
  props: {
    headline: figma.string('Headline'),
    subtext: figma.string('Subtext'),
    align: figma.enum('Align', { Left: 'left', Center: 'center', Right: 'right' }),
  },
  example: ({ headline, subtext, align }) => (
    <HeroSection headline={headline} subtext={subtext} align={align} />
  ),
});
