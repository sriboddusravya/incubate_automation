import { test, expect } from '@playwright/test';

test('Register new user and print account balance', async ({ page }) => {

    const username = "user" + Date.now();
    const password = "Password@123";

    await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

    await page.click('text=Register');

    await page.fill('input[name="customer.firstName"]', 'Mohana');
    await page.fill('input[name="customer.lastName"]', 'Sravya');
    await page.fill('input[name="customer.address.street"]', 'Hyderabad');
    await page.fill('input[name="customer.address.city"]', 'Hyderabad');
    await page.fill('input[name="customer.address.state"]', 'Telangana');
    await page.fill('input[name="customer.address.zipCode"]', '500001');
    await page.fill('input[name="customer.phoneNumber"]', '9876543210');
    await page.fill('input[name="customer.ssn"]', '123456789');

    await page.fill('input[name="customer.username"]', username);
    await page.fill('input[name="customer.password"]', password);
    await page.fill('input[name="repeatedPassword"]', password);

    await page.click('input[value="Register"]');

    await expect(
        page.getByRole('heading', { name: new RegExp(`Welcome ${username}`) })
    ).toBeVisible();

    await page.click('text=Accounts Overview');

    const balance = await page
        .locator('#accountTable tbody tr td:nth-child(2)')
        .first()
        .textContent();

    console.log("Account Balance:", balance);

    await page.screenshot({
        path: 'screenshots/parabank-success.png',
        fullPage: true
    });

});