import { APIRequestContext } from '@playwright/test';

export class UsersHelper {
  constructor(private readonly request: APIRequestContext) {}

  async getUsers() {
    const response = await this.request.get('/users');
    return response;
  }

  async createUser(payload: Record<string, unknown>) {
    const response = await this.request.post('/users', { data: payload });
    return response;
  }
}
