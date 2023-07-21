const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
import ApiPage from "./apiPage";

Given("Rest api testing", () => {
    ApiPage.getUserById(2);
});
When("A user call the api with wrong user {string}", (nonExistUser) => {
    ApiPage.nonExistUser(nonExistUser);
});
When("Api testing - Validate headers", () => {
    ApiPage.validateHeaders();
})
When("Api testing - Validate body", () => {
    ApiPage.validateBody();
})

Then("The response will contain {string}", () => {
    ApiPage.apiStatus();
});

Then("The response will contain {string}", () => {
    ApiPage.apiStatus();
});
Then("A user fill email {string} and password {string}", (email, password) => {
    ApiPage.loginRequest(email, password);
});