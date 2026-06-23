import { Page } from '@playwright/test';

export class LoginPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async printAccountBalance() {

        await this.page.click('text=Accounts Overview');

        const balance = await this.page
            .locator('#accountTable tbody tr td:nth-child(2)')
            .first()
            .textContent();

        console.log("Account Balance : " + balance);
    }
}