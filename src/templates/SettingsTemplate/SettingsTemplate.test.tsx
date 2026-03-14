import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SettingsTemplate } from './SettingsTemplate';

describe('SettingsTemplate', () => {
  const defaultSections = [
    { title: 'General', content: <div>General settings</div> },
  ];

  it('renders title', () => {
    render(<SettingsTemplate sections={defaultSections} onSave={() => {}} />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('renders custom title', () => {
    render(<SettingsTemplate title="Preferences" sections={defaultSections} onSave={() => {}} />);
    expect(screen.getByText('Preferences')).toBeInTheDocument();
  });

  it('renders settings sections', () => {
    render(<SettingsTemplate sections={defaultSections} onSave={() => {}} />);
    expect(screen.getByText('General')).toBeInTheDocument();
    expect(screen.getByText('General settings')).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(
      <SettingsTemplate
        sections={defaultSections}
        onSave={() => {}}
        navItems={[{ label: 'Account', id: 'account' }]}
      />,
    );
    expect(screen.getByText('Account')).toBeInTheDocument();
  });

  it('renders settings navigation landmark', () => {
    render(
      <SettingsTemplate
        sections={defaultSections}
        onSave={() => {}}
        navItems={[{ label: 'Account', id: 'account' }]}
      />,
    );
    expect(screen.getByRole('navigation', { name: 'Settings navigation' })).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<SettingsTemplate ref={ref} sections={defaultSections} onSave={() => {}} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
