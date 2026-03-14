import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const meta = {
  title: 'Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: { control: { type: 'number', min: 1 } },
    currentPage: { control: { type: 'number', min: 1 } },
    siblingCount: { control: { type: 'number', min: 0, max: 3 } },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination totalPages={10} currentPage={page} onPageChange={setPage} />;
  },
};

export const FewPages: Story = {
  args: { totalPages: 3, currentPage: 2, onPageChange: () => {} },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(10);
    return <Pagination totalPages={50} currentPage={page} onPageChange={setPage} />;
  },
};
