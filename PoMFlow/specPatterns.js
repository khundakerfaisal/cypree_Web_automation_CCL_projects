const localSpec = require('E://CY_CCL_Projects/cypress/fixtures/localSpecPattern.json')
const fs = require('fs');
const path = require('path');
class specPattern{
  SpecPatternLocalPo(){
  const specPatternsPath = path.resolve(__dirname, 'config', 'localSpecPattern.json');
  const specPatterns = JSON.parse(fs.readFileSync(specPatternsPath, 'utf-8'));
  
  return specPatterns['LocalPOall'];

  }  

}
export default specPattern;

// function getSpecPatterns(flow) {
//   const specPatterns = {
//     LocalPoall: [
//       'cypress/e2e/TestRunner/login.cy.js',
//       'cypress/e2e/TestRunner/PurchaseRequisition.cy.js',
//       'cypress/e2e/TestRunner/Rfq.cy.js',
//       'cypress/e2e/TestRunner/csTestRunner.cy.js',
//       'cypress/e2e/TestRunner/localPo.cy.js'
//     ]
//   };
  
//   return specPatterns[flow] || specPatterns['LocalPoall'];
// }
