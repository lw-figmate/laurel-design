import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DataList, DataListItem, DataListLabel, DataListValue } from './DataList';

describe('DataList', () => {
  it('renders a description list', () => {
    const { container } = render(
      <DataList>
        <DataListItem>
          <DataListLabel>Name</DataListLabel>
          <DataListValue>Alice</DataListValue>
        </DataListItem>
      </DataList>,
    );
    expect(container.querySelector('dl')).toBeInTheDocument();
    expect(screen.getByText('Name').tagName).toBe('DT');
    expect(screen.getByText('Alice').tagName).toBe('DD');
  });

  it('supports horizontal orientation', () => {
    const { container } = render(
      <DataList orientation="horizontal">
        <DataListItem>
          <DataListLabel>Key</DataListLabel>
          <DataListValue>Value</DataListValue>
        </DataListItem>
      </DataList>,
    );
    expect(container.querySelector('dl')!.getAttribute('class')).toContain('grid');
  });

  it('supports vertical orientation', () => {
    const { container } = render(
      <DataList orientation="vertical">
        <DataListItem>
          <DataListLabel>Key</DataListLabel>
          <DataListValue>Value</DataListValue>
        </DataListItem>
      </DataList>,
    );
    expect(container.querySelector('dl')!.getAttribute('class')).toContain('space-y');
  });

  it('renders multiple items', () => {
    render(
      <DataList>
        <DataListItem>
          <DataListLabel>A</DataListLabel>
          <DataListValue>1</DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListLabel>B</DataListLabel>
          <DataListValue>2</DataListValue>
        </DataListItem>
      </DataList>,
    );
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });
});
