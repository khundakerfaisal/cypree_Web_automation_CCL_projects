const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  watchForFileChanges:false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        'cypress/e2e/login.cy.js',
        'cypress/e2e/PurchaseRequisition.cy.js',
      ]
      return config;
      // implement node event listeners here
    },
  },
});
