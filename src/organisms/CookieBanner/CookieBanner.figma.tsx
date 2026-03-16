import figma from '@figma/code-connect';
import { CookieBanner } from './CookieBanner';

figma.connect(CookieBanner, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3935', {
  props: {
    position: figma.enum('Position', { Top: 'top', Bottom: 'bottom' }),
    message: figma.string('Message'),
    acceptLabel: figma.string('AcceptLabel'),
    rejectLabel: figma.string('RejectLabel'),
    settingsLabel: figma.string('SettingsLabel'),
  },
  example: ({ position, message, acceptLabel, rejectLabel, settingsLabel }) => (
    <CookieBanner
      onAccept={() => {}}
      onReject={() => {}}
      onSettings={() => {}}
      position={position}
      message={message}
      acceptLabel={acceptLabel}
      rejectLabel={rejectLabel}
      settingsLabel={settingsLabel}
    />
  ),
});
