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

  await expect(admin.invalidCredentialsAlert()).toBeVisible()
})

test('Bonus: Verify Room Details with Browser Context', async ({ browser }) => {
    
    const context = await browser.newContext()
    const userPage = await context.newPage()
    const adminPage = await context.newPage()

   
    const home = new HomePage(userPage)
    const admin= new AdminPage(adminPage)

   
    await userPage.goto('https://automationintesting.online/')
    await userPage.waitForLoadState('networkidle')
     const allRooms = await home.getAllRoomNames()
    console.log(`Rooms detected on the home page: ${allRooms.join(', ')}`)

    
    await adminPage.goto('https://automationintesting.online/admin')
    await admin.login('admin', 'password')
    await expect(adminPage).toHaveURL(/admin\/rooms/)

    //  LOOP: Verify each room type from the home page in the Admin panel
    for (const roomName of allRooms) {
        console.log(`Verification started for: ${roomName}`)
        
        // Calling the dynamic ID method from AdminPage (#typeSingle, #typeDouble, etc.)
        await admin.verifyRoomTypeVisible(roomName)
        
        console.log(`Success: ${roomName} is visible in the admin panel.`)
    }
  
    await context.close()
})