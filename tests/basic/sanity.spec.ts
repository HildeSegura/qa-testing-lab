import { test, expect } from '@playwright/test';

test.describe('Sanity checks', () => {
  test('basic arithmetic', () => {
    expect(1 + 1).toBe(2);
  });

  test('string operations', () => {
    expect('qa-testing-lab'.includes('testing')).toBeTruthy();
  });

  test('array assertions', () => {
    const items = [1, 2, 3];
    expect(items).toHaveLength(3);
    expect(items).toContain(2);
  });
});
