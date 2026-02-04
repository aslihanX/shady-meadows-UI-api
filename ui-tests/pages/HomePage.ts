import { Page, Locator } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  nameInput(): Locator {
    return this.page.getByTestId('ContactName');
  }

  emailInput(): Locator {
    return this.page.getByTestId('ContactEmail');
  }

  subjectInput(): Locator {
    return this.page.getByTestId('ContactSubject');
  }

  messageInput(): Locator {
    return this.page.getByTestId('ContactDescription');
  }

  submitButton(): Locator {
    return this.page.getByRole('button', { name: /submit/i });
  }

  bookButtons(): Locator {
    return this.page.getByRole('link', { name: /book now/i });
  }

  async getAllRoomNames(): Promise<string[]> {
    const roomLocator = this.page.locator('h5.card-title');

    await roomLocator.first().waitFor({ state: 'visible', timeout: 5000 });

    const titles = await roomLocator.allInnerTexts();

    return titles.map(name => name.trim()).filter(name => name.length > 0);
}
}