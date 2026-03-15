import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';

import { Avatar } from '../atoms/Avatar';
import { Badge } from '../atoms/Badge';
import { Blockquote } from '../atoms/Blockquote';
import { Button } from '../atoms/Button';
import { Checkbox } from '../atoms/Checkbox';
import { Divider } from '../atoms/Divider';
import { Input } from '../atoms/Input';
import { Kbd } from '../atoms/Kbd';
import { Label } from '../atoms/Label';
import { Link } from '../atoms/Link';
import { Radio } from '../atoms/Radio';
import { Select } from '../atoms/Select';
import { Spinner } from '../atoms/Spinner';
import { Switch } from '../atoms/Switch';
import { Tag } from '../atoms/Tag';
import { Text } from '../atoms/Text';
import { Textarea } from '../atoms/Textarea';

describe('Atoms — a11y', () => {
  it('Avatar has no violations', async () => {
    const { container } = render(<Avatar name="Jane Doe" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Badge has no violations', async () => {
    const { container } = render(<Badge>Active</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Blockquote has no violations', async () => {
    const { container } = render(<Blockquote>A wise quote.</Blockquote>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Button has no violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Button (danger) has no violations', async () => {
    const { container } = render(<Button variant="danger">Delete</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Checkbox has no violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="check1">Accept terms</label>
        <Checkbox id="check1" />
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Divider has no violations', async () => {
    const { container } = render(<Divider />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Input has no violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="name">Name</label>
        <Input id="name" />
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Input (error) has no violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="email">Email</label>
        <Input id="email" error />
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Kbd has no violations', async () => {
    const { container } = render(<Kbd>⌘K</Kbd>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Label has no violations', async () => {
    const { container } = render(<Label htmlFor="field">Name</Label>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Link has no violations', async () => {
    const { container } = render(<Link href="/about">About</Link>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Radio has no violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="opt1">Option A</label>
        <Radio id="opt1" name="opts" value="a" />
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Select has no violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="sel">Country</label>
        <Select id="sel">
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
        </Select>
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Spinner has no violations', async () => {
    const { container } = render(<Spinner />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Switch has no violations', async () => {
    const { container } = render(<Switch aria-label="Dark mode" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Tag has no violations', async () => {
    const { container } = render(<Tag>React</Tag>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Text has no violations', async () => {
    const { container } = render(<Text>Hello world</Text>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Textarea has no violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="bio">Bio</label>
        <Textarea id="bio" />
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
