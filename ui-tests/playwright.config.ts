import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://automationintesting.online',
    headless: true,
  },

  reporter: [
    ['html', { open: 'never' }]
  ],
});
