import LoginPage from "../Pages/loginPage";
import PRPage from "../Pages/PRPage";
import PRPageAccessGroupWise from "../Pages/PRPageAccessWise";
describe("Create Purchase Request", () => {
    const loginPage = new LoginPage();
    const prPage=new PRPage();
    const prAccessPage=new PRPageAccessGroupWise();

    beforeEach(() => {
        loginPage.CCLLoginPage();
    })
    it("Create New Purchase Requisition", () => {
        prPage.CCLPRPage();
        // prAccessPage.CCLPRPageAccessGroupWise();

    })
})

