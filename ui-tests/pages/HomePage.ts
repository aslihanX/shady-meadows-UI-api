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
}