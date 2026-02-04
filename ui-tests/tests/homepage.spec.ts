import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Homepage sanity check', async ({ page }) => {
  const home = new HomePage(page);

  await page.goto('/', { waitUntil: 'domcontentloaded' });

  await expect(home.nameInput()).toBeVisible();
  await expect(home.emailInput()).toBeVisible();
  await expect(home.subjectInput()).toBeVisible();
  await expect(home.messageInput()).toBeVisible();
  await expect(home.submitButton()).toBeVisible();

});