import { describe, it, expect } from 'vitest';
import { validators, validate, validateForm } from './form';

describe('validators', () => {
  describe('required', () => {
    const rule = validators.required();
    it('fails on empty string', () => {
      expect(rule.validate('')).toBe('This field is required');
    });
    it('fails on whitespace', () => {
      expect(rule.validate('   ')).toBe('This field is required');
    });
    it('passes with content', () => {
      expect(rule.validate('hello')).toBeUndefined();
    });
  });

  describe('minLength', () => {
    const rule = validators.minLength(3);
    it('fails below minimum', () => {
      expect(rule.validate('ab')).toBe('Must be at least 3 characters');
    });
    it('passes at minimum', () => {
      expect(rule.validate('abc')).toBeUndefined();
    });
  });

  describe('maxLength', () => {
    const rule = validators.maxLength(5);
    it('fails above maximum', () => {
      expect(rule.validate('abcdef')).toBe('Must be at most 5 characters');
    });
    it('passes at maximum', () => {
      expect(rule.validate('abcde')).toBeUndefined();
    });
  });

  describe('pattern', () => {
    const rule = validators.pattern(/^\d+$/, 'Numbers only');
    it('fails on non-match', () => {
      expect(rule.validate('abc')).toBe('Numbers only');
    });
    it('passes on match', () => {
      expect(rule.validate('123')).toBeUndefined();
    });
  });

  describe('email', () => {
    const rule = validators.email();
    it('fails on invalid email', () => {
      expect(rule.validate('notanemail')).toBe('Invalid email address');
    });
    it('passes on valid email', () => {
      expect(rule.validate('user@example.com')).toBeUndefined();
    });
  });
});

describe('validate', () => {
  it('returns first error', () => {
    const result = validate('', [validators.required(), validators.minLength(3)]);
    expect(result).toBe('This field is required');
  });

  it('returns undefined when all pass', () => {
    const result = validate('hello', [validators.required(), validators.minLength(3)]);
    expect(result).toBeUndefined();
  });
});

describe('validateForm', () => {
  it('returns errors keyed by field name', () => {
    const errors = validateForm(
      { name: '', email: 'bad' },
      {
        name: [validators.required()],
        email: [validators.email()],
      },
    );
    expect(errors.name).toBe('This field is required');
    expect(errors.email).toBe('Invalid email address');
  });

  it('returns empty object when all valid', () => {
    const errors = validateForm(
      { name: 'John', email: 'john@example.com' },
      {
        name: [validators.required()],
        email: [validators.email()],
      },
    );
    expect(Object.keys(errors)).toHaveLength(0);
  });
});
