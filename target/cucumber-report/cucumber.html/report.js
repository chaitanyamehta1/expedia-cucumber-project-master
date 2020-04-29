$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/expedia/resources/featurefile/Flight.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Destination and Search Flight Functionality",
  "description": "As a User\r\nI want to visit expedia website to book flight ticket\r\nSo I can travel to choice of my destination",
  "id": "flight-destination-and-search-flight-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 28404108300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should navigate to Flight Page",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-navigate-to-flight-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flight button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to Flight page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightDestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 4092259799,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnFlightButton()"
});
formatter.result({
  "duration": 4565156499,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iShouldNavigateToFlightPageSuccessfully()"
});
formatter.result({
  "duration": 162723301,
  "status": "passed"
});
formatter.after({
  "duration": 123400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify user should find destination according there choice",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Flight tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select flying from \"\u003cFlying from\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Going to \"\u003cGoing to\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select Departing date \"\u003cDeparting date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select Returning date \"\u003cReturning date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select two Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on close button after selection of passengers",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see my selected \"\u003cDestination\u003e\" successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;",
  "rows": [
    {
      "cells": [
        "Flying from",
        "Going to",
        "Departing date",
        "Returning date",
        "Destination"
      ],
      "line": 26,
      "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;1"
    },
    {
      "cells": [
        "London",
        "Ahmedabad",
        "20/12/2020",
        "10/02/2021",
        "Select your departure to Ahmedabad"
      ],
      "line": 27,
      "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;2"
    },
    {
      "cells": [
        "Birmingham",
        "Delhi",
        "10/12/2020",
        "10/01/2021",
        "Select your departure to Delhi"
      ],
      "line": 28,
      "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;3"
    },
    {
      "cells": [
        "Ahmedabad",
        "Mumbai",
        "18/12/2020",
        "10/01/2021",
        "Select your departure to Mumbai"
      ],
      "line": 29,
      "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15059116400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user should find destination according there choice",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Flight tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select flying from \"London\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Going to \"Ahmedabad\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select Departing date \"20/12/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select Returning date \"10/02/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select two Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on close button after selection of passengers",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see my selected \"Select your departure to Ahmedabad\" successfully",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FlightDestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnAcceptButton()"
});
formatter.result({
  "duration": 1241069401,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnFlightTab()"
});
formatter.result({
  "duration": 779041800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 22
    }
  ],
  "location": "FlightDestinationTest.iSelectFlyingFrom(String)"
});
formatter.result({
  "duration": 4253111099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmedabad",
      "offset": 19
    }
  ],
  "location": "FlightDestinationTest.iSelectGoingTo(String)"
});
formatter.result({
  "duration": 854124399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/12/2020",
      "offset": 25
    }
  ],
  "location": "FlightDestinationTest.iSelectDepartingDate(String)"
});
formatter.result({
  "duration": 1028017600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/02/2021",
      "offset": 25
    }
  ],
  "location": "FlightDestinationTest.iSelectReturningDate(String)"
});
formatter.result({
  "duration": 1401562099,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnTravellers()"
});
formatter.result({
  "duration": 320636900,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iSelectTwoTravellers()"
});
formatter.result({
  "duration": 322282201,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnCloseButtonAfterSelectionOfPassengers()"
});
formatter.result({
  "duration": 10460406300,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnSearchButton()"
});
formatter.result({
  "duration": 19319509600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Ahmedabad",
      "offset": 26
    }
  ],
  "location": "FlightDestinationTest.iShouldSeeMySelectedSuccessfully(String)"
});
formatter.result({
  "duration": 194664599,
  "status": "passed"
});
formatter.after({
  "duration": 58200,
  "status": "passed"
});
formatter.before({
  "duration": 28357999700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify user should find destination according there choice",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Flight tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select flying from \"Birmingham\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Going to \"Delhi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select Departing date \"10/12/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select Returning date \"10/01/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select two Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on close button after selection of passengers",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see my selected \"Select your departure to Delhi\" successfully",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FlightDestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 282999,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnAcceptButton()"
});
formatter.result({
  "duration": 343463601,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnFlightTab()"
});
formatter.result({
  "duration": 406216900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Birmingham",
      "offset": 22
    }
  ],
  "location": "FlightDestinationTest.iSelectFlyingFrom(String)"
});
formatter.result({
  "duration": 824411100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 19
    }
  ],
  "location": "FlightDestinationTest.iSelectGoingTo(String)"
});
formatter.result({
  "duration": 422971899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/12/2020",
      "offset": 25
    }
  ],
  "location": "FlightDestinationTest.iSelectDepartingDate(String)"
});
formatter.result({
  "duration": 683619900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/01/2021",
      "offset": 25
    }
  ],
  "location": "FlightDestinationTest.iSelectReturningDate(String)"
});
formatter.result({
  "duration": 799533800,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnTravellers()"
});
formatter.result({
  "duration": 227803200,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iSelectTwoTravellers()"
});
formatter.result({
  "duration": 248171400,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnCloseButtonAfterSelectionOfPassengers()"
});
formatter.result({
  "duration": 10204671900,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnSearchButton()"
});
formatter.result({
  "duration": 13783330600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Delhi",
      "offset": 26
    }
  ],
  "location": "FlightDestinationTest.iShouldSeeMySelectedSuccessfully(String)"
});
formatter.result({
  "duration": 330691700,
  "status": "passed"
});
formatter.after({
  "duration": 65900,
  "status": "passed"
});
formatter.before({
  "duration": 16693441100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify user should find destination according there choice",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Flight tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select flying from \"Ahmedabad\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Going to \"Mumbai\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select Departing date \"18/12/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select Returning date \"10/01/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select two Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on close button after selection of passengers",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see my selected \"Select your departure to Mumbai\" successfully",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FlightDestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 38700,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnAcceptButton()"
});
formatter.result({
  "duration": 600914300,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnFlightTab()"
});
formatter.result({
  "duration": 850709300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmedabad",
      "offset": 22
    }
  ],
  "location": "FlightDestinationTest.iSelectFlyingFrom(String)"
});
formatter.result({
  "duration": 2078579800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 19
    }
  ],
  "location": "FlightDestinationTest.iSelectGoingTo(String)"
});
formatter.result({
  "duration": 1440419700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18/12/2020",
      "offset": 25
    }
  ],
  "location": "FlightDestinationTest.iSelectDepartingDate(String)"
});
formatter.result({
  "duration": 1614256800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/01/2021",
      "offset": 25
    }
  ],
  "location": "FlightDestinationTest.iSelectReturningDate(String)"
});
formatter.result({
  "duration": 1397280100,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnTravellers()"
});
formatter.result({
  "duration": 550965000,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iSelectTwoTravellers()"
});
formatter.result({
  "duration": 648366100,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnCloseButtonAfterSelectionOfPassengers()"
});
formatter.result({
  "duration": 10372404100,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnSearchButton()"
});
formatter.result({
  "duration": 15219003400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Mumbai",
      "offset": 26
    }
  ],
  "location": "FlightDestinationTest.iShouldSeeMySelectedSuccessfully(String)"
});
formatter.result({
  "duration": 87367200,
  "status": "passed"
});
formatter.after({
  "duration": 38500,
  "status": "passed"
});
formatter.uri("src/test/java/uk/co/expedia/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a User\r\nI want to visit expedia website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16906617200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User should navigate to sign in page",
  "description": "",
  "id": "login-functionality;verify-user-should-navigate-to-sign-in-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on account button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be in sign in page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightDestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 60300,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnAcceptButton()"
});
formatter.result({
  "duration": 242396500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnAccountButton()"
});
formatter.result({
  "duration": 300326700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 462021700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldBeInSignInPageSuccessfully()"
});
formatter.result({
  "duration": 813226000,
  "status": "passed"
});
formatter.after({
  "duration": 30900,
  "status": "passed"
});
formatter.before({
  "duration": 22570381300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on account button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter email in email field \"dhannobhag@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password in password field \"dhanno123456@\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see system showing error message",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightDestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.match({
  "location": "FlightDestinationTest.iClickOnAcceptButton()"
});
formatter.result({
  "duration": 341371400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnAccountButton()"
});
formatter.result({
  "duration": 264213100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1176134800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhannobhag@gmail.com",
      "offset": 30
    }
  ],
  "location": "LoginTest.iEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 6251841300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhanno123456@",
      "offset": 36
    }
  ],
  "location": "LoginTest.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 625420400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnSignInTab()"
});
formatter.result({
  "duration": 591415200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldSeeSystemShowingErrorMessage()"
});
formatter.result({
  "duration": 310874600,
  "status": "passed"
});
formatter.after({
  "duration": 35600,
  "status": "passed"
});
});