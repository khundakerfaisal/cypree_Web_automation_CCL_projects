import LoginPage from "../Pages/loginPage";
import PRPageDirectPO from "../Pages/PRPageDirectPO";
import directPoPageByPr from "../Pages/directPoPageByPr";
import MRRWithoutQCPage from "../Pages/MRRWithoutQCPage";

describe(' Direct PO Test Suite With PR', () => {
  const loginPage = new LoginPage();
  const directprPage = new PRPageDirectPO();
  const directPoByPr = new directPoPageByPr();
  const mrrWithoutQcPage = new MRRWithoutQCPage();

  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it('should run Direct purchase requisition test', () => {
    directprPage.CCLPRDPOPage();
  });

  it('should run Direct PO By PR', () => {
    directPoByPr.CCLDirectPo();
  });
  it('should run MRR with QC test', () => {
    mrrWithoutQcPage.CCLMRRWithoutQC();
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
