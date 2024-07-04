import LoginPage from "../Pages/loginPage";
import PRPageDirectPO from "../Pages/PRPageDirectPO";
import RfqPage from "../Pages/RfqPage";
import directPoPageByRfq from "../Pages/directPoPageByRfq";
import MRRWithoutQCPage from "../Pages/MRRWithoutQCPage";

describe(' Direct PO Test Suite With RFQ', () => {
  const loginPage = new LoginPage();
  const directprPage = new PRPageDirectPO();
  const rfqPage = new RfqPage();
  const directPoByRfq = new directPoPageByRfq();
  const mrrWithoutQcPage = new MRRWithoutQCPage();

  beforeEach(() => {
    loginPage.CCLLoginPage();
  })

  it('should run Direct purchase requisition test', () => {
    directprPage.CCLPRDPOPage();
  });

  it('should run RFQ test', () => {
    rfqPage.CCLRfq();
  });

  it('should run Direct PO By RFQ', () => {
    directPoByRfq.CCLDirectPo();
  });
  it('should run MRR with QC test', () => {
    mrrWithoutQcPage.CCLMRRWithoutQC();
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
