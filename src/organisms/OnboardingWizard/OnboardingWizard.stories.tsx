import type { Meta, StoryObj } from '@storybook/react-vite';
import { OnboardingWizard } from './OnboardingWizard';
import { Icon } from '../../atoms/Icon';

const meta = {
  title: 'Organisms/OnboardingWizard',
  component: OnboardingWizard,
  tags: ['autodocs'],
} satisfies Meta<typeof OnboardingWizard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      {
        title: 'Welcome to Laurel',
        description: 'A modern design system for building beautiful apps.',
        illustration: <div className="w-64 h-48 bg-blue-100 rounded-xl flex items-center justify-center"><Icon size="xl" label="Design"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z" /></Icon></div>,
      },
      {
        title: 'Set up your workspace',
        description: 'Configure your team and project settings.',
        content: (
          <div className="max-w-xs mx-auto">
            <input className="w-full border rounded p-2" placeholder="Team name" />
          </div>
        ),
      },
      {
        title: "You're all set!",
        description: 'Start building amazing things.',
        illustration: <div className="w-64 h-48 bg-green-100 rounded-xl flex items-center justify-center"><Icon size="xl" label="Launch"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z" /></Icon></div>,
      },
    ],
    onComplete: () => alert('Onboarding complete!'),
    onSkip: () => alert('Skipped'),
  },
};
