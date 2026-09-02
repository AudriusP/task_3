# Nord VPN Pricing Plans Page — Automated Test Suite with Playwright

Automated test script written with Playwright for the **Nord VPN Pricing Plans Page** (`https://nordvpn.com/pricing/`).

## Repository structure

| Directory | Purpose                                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `pages`   | Pages' elements' selectors and methods for each page, includes `BasePage.ts`, `CheckoutPage.ts`, `LoginPage.ts`, `PricingPage.ts` |
| `tests`   | Test scenarios, includes test script `pricingPagePlans.spec.ts`                                                                   |

## How to run

### Playwright (CLI)

- Use command `npx playwright test` - it will run all tests in `tests` directory.

### Playwright (GUI)

- Use command `npx playwright test --ui` - it will open Playwright Test GUI, in which need to choose `pricingPagePlans.spec.ts` to run.

## Example video of a test run

https://github.com/user-attachments/assets/596a26a7-283b-4d31-b439-ee1fe86e3bd7
