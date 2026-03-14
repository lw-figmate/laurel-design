import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChatWidget } from './ChatWidget';
import type { ChatMessage } from './ChatWidget.types';

const messages: ChatMessage[] = [
  { id: '1', content: 'Hello!', sender: 'agent', timestamp: '10:00 AM' },
  { id: '2', content: 'Hi there', sender: 'user', timestamp: '10:01 AM' },
];

describe('ChatWidget', () => {
  it('renders floating trigger button when closed', () => {
    render(<ChatWidget messages={messages} onSend={vi.fn()} />);
    expect(screen.getByLabelText('Open chat')).toBeInTheDocument();
  });

  it('opens chat window on trigger click', () => {
    render(<ChatWidget messages={messages} onSend={vi.fn()} />);
    fireEvent.click(screen.getByLabelText('Open chat'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders messages when open', () => {
    render(<ChatWidget messages={messages} onSend={vi.fn()} defaultOpen />);
    expect(screen.getByText('Hello!')).toBeInTheDocument();
    expect(screen.getByText('Hi there')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<ChatWidget messages={messages} onSend={vi.fn()} defaultOpen title="Support" />);
    expect(screen.getByText('Support')).toBeInTheDocument();
  });

  it('renders agent name', () => {
    render(<ChatWidget messages={messages} onSend={vi.fn()} defaultOpen agentName="Bot" />);
    expect(screen.getByText('Bot')).toBeInTheDocument();
  });

  it('calls onSend when send button is clicked', () => {
    const onSend = vi.fn();
    render(<ChatWidget messages={messages} onSend={onSend} defaultOpen />);
    const input = screen.getByPlaceholderText('Type a message...');
    fireEvent.change(input, { target: { value: 'New message' } });
    fireEvent.click(screen.getByText('Send'));
    expect(onSend).toHaveBeenCalledWith('New message');
  });

  it('calls onSend on Enter key', () => {
    const onSend = vi.fn();
    render(<ChatWidget messages={messages} onSend={onSend} defaultOpen />);
    const input = screen.getByPlaceholderText('Type a message...');
    fireEvent.change(input, { target: { value: 'Enter msg' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSend).toHaveBeenCalledWith('Enter msg');
  });

  it('closes chat on close button click', () => {
    render(<ChatWidget messages={messages} onSend={vi.fn()} defaultOpen />);
    fireEvent.click(screen.getByLabelText('Close chat'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('disables send when input is empty', () => {
    render(<ChatWidget messages={messages} onSend={vi.fn()} defaultOpen />);
    expect(screen.getByText('Send')).toBeDisabled();
  });
});
