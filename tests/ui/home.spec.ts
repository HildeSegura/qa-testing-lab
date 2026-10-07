import { test, expect } from '../fixtures/base.fixture';
import * as allure from 'allure-js-commons';

test.describe('Home page', () => {
  test.beforeEach(async () => {
    await allure.feature('UI');
  });

  test('should display the page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
  });
});
