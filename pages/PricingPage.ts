import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PricingPage extends BasePage {
  readonly getPlanButton: Locator;
  readonly mostPopularLabel: Locator;
  readonly pricingCard: Locator;
  readonly planPrice: Locator;

  constructor(page: Page) {
    super(page);
    this.getPlanButton = page.getByTestId(
      'MultipleHighlightedCards-PlanCard-cta'
    );
    this.mostPopularLabel = page.getByTestId('card-higlight');
    this.pricingCard = page.getByTestId('PricingFullCard');
    this.planPrice = page.getByTestId('SelectedCartSummaryCard-atomic-price');
  }

  async goto() {
    await this.page.goto('/pricing');
  }

  async clickGetPlan(planName: string) {
    await this.getPlanButton.filter({ hasText: planName }).first().click();
  }

  async verifyHeader() {
    await super.verifyHeader('Choose a VPN price and plan that fits you');
  }

  async clickGetMostPopularPlan() {
    const mostPopularPlanCard = this.pricingCard
      .filter({ has: this.mostPopularLabel })
      .first();
    const mostPopularPlanPrice = (
      (await mostPopularPlanCard.locator(this.planPrice).textContent()) || ''
    )
      .replace('per month ', '')
      .trim();
    const mostPopularPlanText = await mostPopularPlanCard
      .locator(this.getPlanButton)
      .textContent();
    await this.clickGetPlan(mostPopularPlanText || '');
    return mostPopularPlanPrice;
  }
}
