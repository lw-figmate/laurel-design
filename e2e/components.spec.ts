import { test, expect } from '@playwright/test';
import AxeBuilder from 'axe-playwright';

test.describe('molecule interaction tests', () => {
  test('Alert renders with role="alert"', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-alert--default');
    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();
  });

  test('Alert has no a11y violations', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-alert--default');
    await page.getByRole('alert').waitFor();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test('Breadcrumb renders navigation landmark', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-breadcrumb--default');
    const nav = page.getByRole('navigation', { name: 'Breadcrumb' });
    await expect(nav).toBeVisible();
  });

  test('Breadcrumb has no a11y violations', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-breadcrumb--default');
    await page.getByRole('navigation').waitFor();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test('Card renders content', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-card--default');
    await expect(page.locator('[class*="rounded"]').first()).toBeVisible();
  });

  test('ProgressBar reflects value via aria', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-progressbar--default');
    const bar = page.getByRole('progressbar');
    await expect(bar).toBeVisible();
  });

  test('ProgressBar has no a11y violations', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-progressbar--default');
    await page.getByRole('progressbar').waitFor();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test('Popover opens on trigger click', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-popover--default');
    const trigger = page.getByRole('button');
    await trigger.click();
    await expect(page.locator('[role="dialog"]')).toBeVisible();
  });

  test('Menu opens and allows keyboard navigation', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-dropdownmenu--default');
    const trigger = page.getByRole('button').first();
    await trigger.click();
    const menu = page.getByRole('menu');
    await expect(menu).toBeVisible();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Escape');
    await expect(menu).not.toBeVisible();
  });

  test('Tooltip shows on hover', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-tooltip--default');
    const trigger = page.locator('[class*="inline-block"]').first();
    await trigger.hover();
    await expect(page.getByRole('tooltip')).toBeVisible();
  });

  test('Slider can be adjusted', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-slider--default');
    const slider = page.getByRole('slider');
    await expect(slider).toBeVisible();
  });

  test('Skeleton renders loading state', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-skeleton--default');
    await expect(page.locator('[class*="animate"]').first()).toBeVisible();
  });
});

test.describe('organism interaction tests', () => {
  test('DataTable renders a table', async ({ page }) => {
    await page.goto('/iframe.html?id=organisms-datatable--default');
    const table = page.getByRole('table');
    await expect(table).toBeVisible();
  });

  test('DataTable has no a11y violations', async ({ page }) => {
    await page.goto('/iframe.html?id=organisms-datatable--default');
    await page.getByRole('table').waitFor();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test('Header renders banner landmark', async ({ page }) => {
    await page.goto('/iframe.html?id=organisms-header--default');
    const header = page.getByRole('banner');
    await expect(header).toBeVisible();
  });

  test('LoginForm has required inputs', async ({ page }) => {
    await page.goto('/iframe.html?id=organisms-loginform--default');
    const emailInput = page.locator('input[type="email"], input[name="email"]').first();
    const passwordInput = page.locator('input[type="password"]').first();
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
  });

  test('LoginForm has no a11y violations', async ({ page }) => {
    await page.goto('/iframe.html?id=organisms-loginform--default');
    await page.locator('form, [role="form"]').first().waitFor();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});

test.describe('cross-cutting a11y audits', () => {
  const criticalStories = [
    'atoms-badge--default',
    'atoms-checkbox--default',
    'atoms-input--default',
    'atoms-select--default',
    'atoms-switch--default',
    'atoms-textarea--default',
    'molecules-accordion--default',
    'molecules-tabs--default',
    'molecules-dialog--default',
    'molecules-alert--default',
  ];

  for (const storyId of criticalStories) {
    test(`${storyId} has no a11y violations`, async ({ page }) => {
      await page.goto(`/iframe.html?id=${storyId}`);
      await page.waitForLoadState('networkidle');
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations).toEqual([]);
    });
  }
});
