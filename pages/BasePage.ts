import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  readonly cookiesAcceptButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookiesAcceptButton = page.getByTestId('consent-widget-accept-all');
  }

  async verifyHeader(headerText: string, headingOrder: number = 1) {
    await expect(
      this.page.locator(`h${headingOrder}`, { hasText: headerText })
    ).toBeVisible();
  }

  async verifyUrlContains(url: string) {
    expect(this.page.url()).toContain(url);
  }

  async clickAcceptCookies() {
    await this.cookiesAcceptButton.click();
    await expect(this.cookiesAcceptButton).toBeHidden();
  }
}
