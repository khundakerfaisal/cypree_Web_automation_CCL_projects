class LocalPO{
    CCLLocalPoFlow(){
        const LocalPOspecPatterns = {
            
            LocalPOall: [
              'cypress/e2e/TestRunner/login.cy.js',
              'cypress/e2e/TestRunner/PurchaseRequisition.cy.js',
              'cypress/e2e/TestRunner/Rfq.cy.js',
              'cypress/e2e/TestRunner/csTestRunner.cy.js',
              'cypress/e2e/TestRunner/localPo.cy.js'
            ]
          };
          
          return LocalPOspecPatterns['LocalPOall'];

    }
}
export default LocalPO;