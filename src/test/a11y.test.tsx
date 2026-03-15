import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';

import { Avatar } from '../atoms/Avatar';
import { Badge } from '../atoms/Badge';
import { Blockquote } from '../atoms/Blockquote';
import { Button } from '../atoms/Button';
import { Checkbox } from '../atoms/Checkbox';
import { Code } from '../atoms/Code';
import { Divider } from '../atoms/Divider';
import { Image } from '../atoms/Image';
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
import { VisuallyHidden } from '../atoms/VisuallyHidden';

import { Alert } from '../molecules/Alert';
import { Breadcrumb, BreadcrumbItem } from '../molecules/Breadcrumb';
import { Card, CardHeader, CardBody, CardFooter } from '../molecules/Card';
import { ProgressBar } from '../molecules/ProgressBar';
import { Skeleton } from '../molecules/Skeleton';

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

  it('Code (inline) has no violations', async () => {
    const { container } = render(<Code>const x = 1;</Code>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Code (block) has no violations', async () => {
    const { container } = render(<Code block>{'const x = 1;\nconst y = 2;'}</Code>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Image has no violations', async () => {
    const { container } = render(<Image src="test.png" alt="Test image" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('VisuallyHidden has no violations', async () => {
    const { container } = render(
      <button>
        <VisuallyHidden>Close menu</VisuallyHidden>
      </button>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('Molecules — a11y', () => {
  it('Alert (info) has no violations', async () => {
    const { container } = render(<Alert variant="info">Information message</Alert>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Alert (error) has no violations', async () => {
    const { container } = render(
      <Alert variant="error" title="Error">Something went wrong.</Alert>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Breadcrumb has no violations', async () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
        <BreadcrumbItem active>Current</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Card has no violations', async () => {
    const { container } = render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>Content goes here.</CardBody>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('ProgressBar has no violations', async () => {
    const { container } = render(<ProgressBar value={60} label="Upload progress" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Skeleton has no violations', async () => {
    const { container } = render(<Skeleton />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
