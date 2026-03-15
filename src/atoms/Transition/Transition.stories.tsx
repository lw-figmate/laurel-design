import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Transition } from './Transition';
import { TRANSITION_PRESETS, TRANSITION_DURATIONS } from './Transition.types';

const meta = {
  title: 'Atoms/Transition',
  component: Transition,
  tags: ['autodocs'],
  argTypes: {
    show: { control: 'boolean' },
    preset: { control: 'select', options: TRANSITION_PRESETS },
    duration: { control: 'select', options: TRANSITION_DURATIONS },
    unmountOnHide: { control: 'boolean' },
  },
  args: {
    show: true,
    preset: 'fade',
    duration: 'normal',
  },
  parameters: {
    docs: {
      description: {
        component: 'Animates children in and out using CSS transition presets. Supports fade, scale, and directional slide animations with configurable duration.',
      },
    },
  },
} satisfies Meta<typeof Transition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [show, setShow] = useState(args.show);
    return (
      <div>
        <button
          onClick={() => setShow((v) => !v)}
          className="mb-[var(--laurel-space-4)] rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] px-[var(--laurel-space-4)] py-[var(--laurel-space-2)]"
        >
          Toggle
        </button>
        <Transition {...args} show={show}>
          <div className="rounded-[var(--laurel-radius-lg)] bg-[var(--laurel-bg-subtle)] p-[var(--laurel-space-6)]">
            Animated content
          </div>
        </Transition>
      </div>
    );
  },
};

export const Scale: Story = {
  args: { preset: 'scale' },
  render: (args) => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <button
          onClick={() => setShow((v) => !v)}
          className="mb-[var(--laurel-space-4)] rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] px-[var(--laurel-space-4)] py-[var(--laurel-space-2)]"
        >
          Toggle
        </button>
        <Transition {...args} show={show}>
          <div className="rounded-[var(--laurel-radius-lg)] bg-[var(--laurel-bg-subtle)] p-[var(--laurel-space-6)]">
            Scale transition
          </div>
        </Transition>
      </div>
    );
  },
};

export const AllPresets: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <button
          onClick={() => setShow((v) => !v)}
          className="mb-[var(--laurel-space-6)] rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] px-[var(--laurel-space-4)] py-[var(--laurel-space-2)]"
        >
          Toggle all
        </button>
        <div className="grid grid-cols-2 gap-[var(--laurel-space-4)]">
          {TRANSITION_PRESETS.map((preset) => (
            <div key={preset}>
              <p className="mb-[var(--laurel-space-2)] text-sm font-medium">{preset}</p>
              <Transition show={show} preset={preset}>
                <div className="rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-subtle)] p-[var(--laurel-space-4)]">
                  {preset}
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
