import figma from '@figma/code-connect';
import { ProfileCard } from './ProfileCard';

figma.connect(ProfileCard, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_PROFILE_CARD', {
  props: {
    name: figma.string('Name'),
    role: figma.string('Role'),
  },
  example: ({ name, role }) => <ProfileCard name={name} role={role} />,
});
