import { When, Then, And, Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./loginPage";

Given("A user opens a sauceLabs website", () => {
  // cy.visit("http://zero.webappsecurity.com/login.html")
  LoginPage.visitLoginPage();
})
When("A user enters the username {string}", (username) => {
  LoginPage.fillUsername(username);
});
And("A user enters the password {string}", (password) => {
  LoginPage.fillPassword(password);
});
And("A user clicks on the login button", () => {
  LoginPage.submit();
});
Then("The url will be hompage", () => {
 // cy.url().should("eql", "http://zero.webappsecurity.com/bank/account-summary.html")
 cy.get("#account_summary_tab").should("be.visible");
});

Then('I should see error message', () => {
  LoginPage.shouldErrorMessage();
});