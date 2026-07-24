import { test as base } from '@playwright/test';

// Extend this fixture to share common setup across UI and API tests.
export const test = base.extend({});

export { expect } from '@playwright/test';
