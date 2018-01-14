Feature: Booking and Payment

@ryanairScenario
Scenario: Booking and Payment Method
Given I am on ryanair page
When I log in
And I booking from "POZ" to "DUB" on "02-02-2018"
Then I pay for booking with credit card details "5555555555555557" expiry "10"-"20" and "265"
And I shold get declined message