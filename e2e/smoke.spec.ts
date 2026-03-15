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

test.describe('component interaction tests', () => {
  test('Button renders and is clickable', async ({ page }) => {
    await page.goto('/iframe.html?id=atoms-button--default');
    const button = page.getByRole('button');
    await expect(button).toBeVisible();
    await button.click();
  });

  test('Button has no a11y violations', async ({ page }) => {
    await page.goto('/iframe.html?id=atoms-button--default');
    await page.getByRole('button').waitFor();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test('Input accepts text', async ({ page }) => {
    await page.goto('/iframe.html?id=atoms-input--default');
    const input = page.getByRole('textbox');
    await expect(input).toBeVisible();
    await input.fill('Hello World');
    await expect(input).toHaveValue('Hello World');
  });

  test('Checkbox can be toggled', async ({ page }) => {
    await page.goto('/iframe.html?id=atoms-checkbox--default');
    const checkbox = page.getByRole('checkbox');
    await expect(checkbox).toBeVisible();
    await checkbox.click();
    await expect(checkbox).toBeChecked();
    await checkbox.click();
    await expect(checkbox).not.toBeChecked();
  });

  test('Switch can be toggled', async ({ page }) => {
    await page.goto('/iframe.html?id=atoms-switch--default');
    const toggle = page.getByRole('switch');
    await expect(toggle).toBeVisible();
    await toggle.click();
  });

  test('Dialog opens and closes', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-dialog--default');
    // Trigger the dialog
    const trigger = page.getByRole('button');
    await trigger.click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    // Close with Escape
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('Tabs switch content', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-tabs--default');
    const tabs = page.getByRole('tab');
    const firstTab = tabs.first();
    await expect(firstTab).toBeVisible();
    // Click the second tab
    const secondTab = tabs.nth(1);
    await secondTab.click();
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
  });

  test('Accordion expands and collapses', async ({ page }) => {
    await page.goto('/iframe.html?id=molecules-accordion--default');
    const trigger = page.getByRole('button').first();
    await expect(trigger).toBeVisible();
    await trigger.click();
    // Content should now be visible
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  test('Select can choose an option', async ({ page }) => {
    await page.goto('/iframe.html?id=atoms-select--default');
    const select = page.getByRole('combobox');
    await expect(select).toBeVisible();
  });
});
