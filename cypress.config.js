const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotsFolder: "images",
  watchForFileChanges:false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        'cypress/e2e/TestRunner/login.cy.js',
        'cypress/e2e/TestRunner/PurchaseRequisition.cy.js',
        
      ]
      return config;
      // implement node event listeners here
    },
  },
});
