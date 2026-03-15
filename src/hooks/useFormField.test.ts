import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useFormField } from './useFormField';
import { validators } from '../utils/form';

describe('useFormField', () => {
  it('starts with initial value', () => {
    const { result } = renderHook(() => useFormField('hello'));
    expect(result.current.value).toBe('hello');
  });

  it('starts untouched with no error', () => {
    const { result } = renderHook(() =>
      useFormField('', [validators.required()]),
    );
    expect(result.current.touched).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it('updates value', () => {
    const { result } = renderHook(() => useFormField(''));
    act(() => result.current.setValue('new'));
    expect(result.current.value).toBe('new');
  });

  it('validates on blur (setTouched)', () => {
    const { result } = renderHook(() =>
      useFormField('', [validators.required()]),
    );
    act(() => result.current.setTouched());
    expect(result.current.touched).toBe(true);
    expect(result.current.error).toBe('This field is required');
  });

  it('clears error when value becomes valid after touch', () => {
    const { result } = renderHook(() =>
      useFormField('', [validators.required()]),
    );
    act(() => result.current.setTouched());
    expect(result.current.error).toBe('This field is required');

    act(() => result.current.setValue('filled'));
    expect(result.current.error).toBeUndefined();
  });

  it('resets to initial state', () => {
    const { result } = renderHook(() =>
      useFormField('init', [validators.required()]),
    );
    act(() => {
      result.current.setValue('changed');
      result.current.setTouched();
    });
    act(() => result.current.reset());
    expect(result.current.value).toBe('init');
    expect(result.current.touched).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it('getInputProps returns correct aria attributes', () => {
    const { result } = renderHook(() =>
      useFormField('', [validators.required()]),
    );
    act(() => result.current.setTouched());
    const props = result.current.getInputProps('email');
    expect(props['aria-invalid']).toBe(true);
    expect(props['aria-describedby']).toBe('email-error');
  });

  it('getInputProps returns no aria-invalid when valid', () => {
    const { result } = renderHook(() =>
      useFormField('valid', [validators.required()]),
    );
    act(() => result.current.setTouched());
    const props = result.current.getInputProps();
    expect(props['aria-invalid']).toBe(false);
  });
});
