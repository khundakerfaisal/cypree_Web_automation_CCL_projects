import LoginPage from "../Pages/loginPage";
import PRPage from "../Pages/PRPage";
import RfqPage from "../Pages/RfqPage";
import comparativestatementPage from "../Pages/comparativestatementPage";
import LocalPoPage from "../Pages/localPoPage";
import MRRWithQCPage from "../Pages/MRRWithQCPage";

describe('Local PO Test Suite With RFQ And CS', () => {
  const loginPage = new LoginPage();
  const prPage = new PRPage();
  const rfqPage = new RfqPage();
  const comparativestatementpage = new comparativestatementPage();
  const localPoPage = new LocalPoPage();
  const mrrWithQcPage = new MRRWithQCPage();

  beforeEach(() => {
    loginPage.CCLLoginPage();
  })

  it("should run Create New Purchase Requisition test", () => {
    prPage.CCLPRPage();
  })
  it("should run Create New Request For quotaion test", () => {
    rfqPage.CCLRfq();
  })

  it('should run Create New CS test', () => {
    comparativestatementpage.CCLCSPage();
  });

  it('should run Create New local PO test', () => {
    localPoPage.CCLLocalPo()
  });
  it('should run Create New MRR with QC test', () => {
    mrrWithQcPage.CCLMRRWithQC();
  });
});
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

// it('should run RFQ test', () => {
//   require('../TestRunner/Rfq.cy.js');
// });

