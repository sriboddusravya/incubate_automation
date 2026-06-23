Feature: Parabank Login

  Scenario: Login with newly created account
    Given User has a registered account
    When User enters valid username and password
    And User clicks on Login button
    Then User should see the Accounts Overview page
    And User balance should be printed in the console