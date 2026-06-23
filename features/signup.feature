Feature: Parabank User Registration

  Scenario: Register a new user successfully
    Given User opens the Parabank application
    When User clicks on Register link
    And User enters valid registration details
    And User submits the registration form
    Then User account should be created successfully