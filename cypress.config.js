const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotsFolder: "images",
  watchForFileChanges:false,

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = 
 
      [
        'cypress/e2e/PoMFlow/localPoSpecRfqAndCS.cy.js',
        'cypress/e2e/PoMFlow/directPoByPR.cy.js',
        'cypress/e2e/PoMFlow/directPOByRfq.cy.js',
        'cypress/e2e/PoMFlow/localPONotesheetByPR.cy.js',
        // 'cypress/e2e/PoMFlow/localPONotesheetByRFQ.cy.js',

        
        // 'cypress/e2e/TestRunner/notesheetByPR.cy.js',
        // 'cypress/e2e/TestRunner/PurchaseRequisition.cy.js',
        // 'cypress/e2e/TestRunner/RfqForNotesheet.cy.js',
        // 'cypress/e2e/TestRunner/notesheetByRFQ.cy.js',
        // 'cypress/e2e/TestRunner/localPo.cy.js',
        // // 'cypress/e2e/TestRunner/foreignPo.cy.js',
        // // 'cypress/e2e/TestRunner/directPo.cy.js',
        // // 'cypress/e2e/TestRunner/MrrWithoutQc.cy.js',
        // 'cypress/e2e/TestRunner/MrrWithQc.cy.js',
        // 'cypress/e2e/TestRunner/MR.cy.js',
      ]
      return config;
      // implement node event listeners here
    },
  },
});


