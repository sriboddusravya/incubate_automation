import { Page } from '@playwright/test';

export class HomePage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openApplication() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
    }

    async clickRegister() {
        await this.page.click('text=Register');
    }

    async login(username: string, password: string) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('input[value="Log In"]');
    }
}