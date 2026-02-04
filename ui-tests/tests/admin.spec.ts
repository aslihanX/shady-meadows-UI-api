import { test as base , expect } from '@playwright/test'
import { AdminPage } from '../pages/AdminPage'
import { HomePage } from '../pages/HomePage';

const test = base.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  }
});

test('Admin login and dashboard', async ({ page }) => {
  const admin = new AdminPage(page)

  await page.goto('/admin')
  await admin.login('admin', 'password')
  await expect(admin.logoutButton()).toBeVisible()
})

test('Admin - redirect & Messages Tab visible', async ({ page }) => {
  await page.goto('/admin')

  await page.getByLabel('Username').fill('admin')
  await page.getByLabel('Password').fill('password')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page).toHaveURL(/admin/)
  await expect(page.getByText('Messages')).toBeVisible()
})

test('Admin - invalid credentials should not login', async ({ page }) => {
  const admin = new AdminPage(page)

  await page.goto('/admin')

  await page.getByLabel('Username').fill('admin')
  await page.getByLabel('Password').fill('wrongpassword')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(admin.invalidCredentialsAlert()).toBeVisible();
})
