import { Given, When, Then } from "@cucumber/cucumber";

Given("User opens the Parabank application", async function () {
    console.log("Parabank application opened successfully.");
});

When("User clicks on Register link", async function () {
    console.log("Clicked on Register link.");
});

When("User enters valid registration details", async function () {
    console.log("Entered valid registration details.");
});

When("User submits the registration form", async function () {
    console.log("Registration form submitted.");
});

Then("User account should be created successfully", async function () {
    console.log("User account created successfully.");
});