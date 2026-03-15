/**
 * Merges class name values, filtering out falsy entries.
 *
 * @example
 * cn('base', false && 'hidden', className) // "base <className>"
 */
export function cn(...inputs: (string | boolean | undefined | null)[]): string {
  return inputs.filter(Boolean).join(' ');
}
