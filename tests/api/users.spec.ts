import { test, expect } from '../fixtures/base.fixture';
import * as allure from 'allure-js-commons';

test.describe('Users API', () => {
  test.beforeEach(async () => {
    await allure.feature('API');
  });

  test('GET /users should return 200 and a list', async ({ request }) => {
    const response = await request.get('/users');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
  });
});
