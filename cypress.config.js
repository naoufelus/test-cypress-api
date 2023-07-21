const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
   baseUrl: "https://reqres.in/api",
    // viewportHeight: 200,
    // viewportHeight: 200,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/features/*.feature",
    // experimentalRunAllSpecs: true,
  },
});
