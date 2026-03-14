import type { Meta, StoryObj } from '@storybook/react-vite';
import { OnboardingWizard } from './OnboardingWizard';

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
        illustration: <div className="w-64 h-48 bg-blue-100 rounded-xl flex items-center justify-center text-4xl">🎨</div>,
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
        illustration: <div className="w-64 h-48 bg-green-100 rounded-xl flex items-center justify-center text-4xl">🚀</div>,
      },
    ],
    onComplete: () => alert('Onboarding complete!'),
    onSkip: () => alert('Skipped'),
  },
};
