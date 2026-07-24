import { test, expect } from '../fixtures/base.fixture';

test.describe('Home page', () => {
  test('should display the page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
  });
});
