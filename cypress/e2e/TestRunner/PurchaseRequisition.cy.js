import LoginPage from "../Pages/loginPage";
import PRPage from "../Pages/PRPage";
import PRPageAccessGroupWise from "../Pages/PRPageAccessWise";
import RFQTypeWiseWithAccessGroup from "../Pages/REQTypeWiseWithAccessControl"
describe("Create Purchase Request", () => {
    const loginPage = new LoginPage();
    const prPage=new PRPage();
    const prAccessPage=new PRPageAccessGroupWise();
    const RfqType= new RFQTypeWiseWithAccessGroup();

    beforeEach(() => {
        loginPage.CCLLoginPage();
    })
    it("Create New Purchase Requisition", () => {
        prPage.CCLPRPage();
        // prAccessPage.CCLPRPageAccessGroupWise();
        // RfqType.CCLRFQTypeWiseWithAccessGroup();

    })
})

