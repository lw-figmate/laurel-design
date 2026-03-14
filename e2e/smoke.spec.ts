import { test, expect } from '@playwright/test';
import AxeBuilder from 'axe-playwright';

test.describe('smoke test', () => {
  test('storybook loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/storybook/i);
  });

  test('no accessibility violations on landing page', async ({ page }) => {
    await page.goto('/');
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
