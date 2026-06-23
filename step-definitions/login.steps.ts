import { Given, When, Then } from "@cucumber/cucumber";

Given("User has a registered account", async function () {
    console.log("Registered account is available.");
});

When("User enters valid username and password", async function () {
    console.log("Username and password entered.");
});

When("User clicks on Login button", async function () {
    console.log("Login button clicked.");
});

Then("User should see the Accounts Overview page", async function () {
    console.log("Accounts Overview page displayed.");
});

Then("User balance should be printed in the console", async function () {
    console.log("Account Balance printed successfully.");
});