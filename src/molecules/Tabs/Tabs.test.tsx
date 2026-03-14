import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Tabs, TabList, Tab, TabPanel } from './Tabs';

describe('Tabs', () => {
  const renderTabs = (props = {}) =>
    render(
      <Tabs defaultValue="one" {...props}>
        <TabList>
          <Tab value="one">Tab 1</Tab>
          <Tab value="two">Tab 2</Tab>
          <Tab value="three">Tab 3</Tab>
        </TabList>
        <TabPanel value="one">Content 1</TabPanel>
        <TabPanel value="two">Content 2</TabPanel>
        <TabPanel value="three">Content 3</TabPanel>
      </Tabs>,
    );

  it('renders tab list with role tablist', () => {
    renderTabs();
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('renders tabs with role tab', () => {
    renderTabs();
    expect(screen.getAllByRole('tab')).toHaveLength(3);
  });

  it('renders active tab panel', () => {
    renderTabs();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('hides inactive tab panels', () => {
    renderTabs();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('marks active tab with aria-selected', () => {
    renderTabs();
    expect(screen.getByText('Tab 1')).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Tab 2')).toHaveAttribute('aria-selected', 'false');
  });

  it('switches tabs when clicked', async () => {
    const user = userEvent.setup();
    renderTabs();
    await user.click(screen.getByText('Tab 2'));
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toHaveAttribute('aria-selected', 'true');
  });

  it('calls onValueChange when tab is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    renderTabs({ onValueChange: handleChange });
    await user.click(screen.getByText('Tab 2'));
    expect(handleChange).toHaveBeenCalledWith('two');
  });

  it('supports controlled mode', () => {
    const { rerender } = render(
      <Tabs value="one" onValueChange={() => {}}>
        <TabList>
          <Tab value="one">Tab 1</Tab>
          <Tab value="two">Tab 2</Tab>
        </TabList>
        <TabPanel value="one">Content 1</TabPanel>
        <TabPanel value="two">Content 2</TabPanel>
      </Tabs>,
    );
    expect(screen.getByText('Content 1')).toBeInTheDocument();

    rerender(
      <Tabs value="two" onValueChange={() => {}}>
        <TabList>
          <Tab value="one">Tab 1</Tab>
          <Tab value="two">Tab 2</Tab>
        </TabList>
        <TabPanel value="one">Content 1</TabPanel>
        <TabPanel value="two">Content 2</TabPanel>
      </Tabs>,
    );
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('supports disabled tabs', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Tabs defaultValue="one" onValueChange={handleChange}>
        <TabList>
          <Tab value="one">Tab 1</Tab>
          <Tab value="two" disabled>Tab 2</Tab>
        </TabList>
        <TabPanel value="one">Content 1</TabPanel>
        <TabPanel value="two">Content 2</TabPanel>
      </Tabs>,
    );
    await user.click(screen.getByText('Tab 2'));
    expect(handleChange).not.toHaveBeenCalled();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });
});
