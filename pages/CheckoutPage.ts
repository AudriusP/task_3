import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  readonly loginButton: Locator;
  readonly planPrice: Locator;

  constructor(page: Page) {
    super(page);
    this.loginButton = page.getByTestId('user-profile-login-button');
    this.planPrice = page.getByTestId('SelectedCartSummaryCard-atomic-price');
  }

  async waitForAutoScrollToFinish() {
    await this.page.waitForTimeout(3000);
  }

  async clickLogIn() {
    await this.loginButton.click();
  }

  async verifyHeader() {
    await super.verifyHeader('Order summary', 2);
  }

  async verifyPlanPrice(planPrice: string) {
    await expect(this.planPrice).toHaveText(planPrice);
  }
}
