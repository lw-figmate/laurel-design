import type { Meta, StoryObj } from '@storybook/react-vite';
import { SettingsTemplate } from './SettingsTemplate';
import { FormField } from '../../molecules/FormField';

const meta = {
  title: 'Templates/SettingsTemplate',
  component: SettingsTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SettingsTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sections: [
      {
        title: 'Profile',
        description: 'Your public profile information.',
        content: (
          <div className="space-y-4">
            <FormField label="Display name" placeholder="Enter your name" name="displayName" />
            <FormField label="Email" type="email" placeholder="you@example.com" name="email" />
          </div>
        ),
      },
      {
        title: 'Notifications',
        description: 'Manage how you receive notifications.',
        content: <div>Notification preferences here</div>,
      },
    ],
    onSave: (values) => alert(JSON.stringify(values)),
    navItems: [
      { label: 'Profile', id: 'profile' },
      { label: 'Notifications', id: 'notifications' },
      { label: 'Security', id: 'security' },
    ],
  },
};

export const WithoutNav: Story = {
  args: {
    sections: [
      {
        title: 'General',
        content: <FormField label="Company name" placeholder="Acme Inc." name="company" />,
      },
    ],
    onSave: () => {},
  },
};
