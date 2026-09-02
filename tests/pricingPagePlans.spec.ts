import { test } from '@playwright/test';
import { PricingPage } from '../pages/PricingPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';

test('Verify that different pricing plans can be selected', async ({
  page,
}) => {
  const pricingPage = new PricingPage(page);
  await pricingPage.goto();
  await pricingPage.verifyHeader();
  await pricingPage.clickAcceptCookies();
  await pricingPage.clickGetPlan('Get Basic');

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.verifyHeader();
  await checkoutPage.waitForAutoScrollToFinish();
  await checkoutPage.clickLogIn();

  const loginPage = new LoginPage(page);
  await loginPage.verifyHeader('Log in');
  await loginPage.verifyUrlContains('login');

  await pricingPage.goto();
  await pricingPage.verifyHeader();
  const mostPopularPlanPrice = await pricingPage.clickGetMostPopularPlan();

  await checkoutPage.verifyHeader();
  await checkoutPage.verifyPlanPrice(mostPopularPlanPrice);
});
