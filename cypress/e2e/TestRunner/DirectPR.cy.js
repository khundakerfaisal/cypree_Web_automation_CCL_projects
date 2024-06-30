import LoginPage from "../Pages/loginPage";
import PRPageDirectPO from "../Pages/PRPageDirectPO";

describe("Create Purchase Request", () => {
    const loginPage = new LoginPage();
    const directprPage = new PRPageDirectPO();


    beforeEach(() => {
        loginPage.CCLLoginPage();
    })
    it("Create New Purchase Requisition", () => {
        directprPage.CCLPRDPOPage();
        // prAccessPage.CCLPRPageAccessGroupWise();
        // RfqType.CCLRFQTypeWiseWithAccessGroup();

    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

