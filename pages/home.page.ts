import { Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

  get title() {
    return this.page.title();
  }
}
