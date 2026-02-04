import { Locator } from "@playwright/test";

export class AdminPage {
  constructor(private page) {}

  async login(username: string, password: string) {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  logoutButton() {
    return this.page.getByRole('button', { name: 'Logout' });
  }

  loginButton() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  invalidCredentialsAlert(): Locator {
    return this.page.getByRole('alert', { hasText: /Invalid credentials/i });
}


}
