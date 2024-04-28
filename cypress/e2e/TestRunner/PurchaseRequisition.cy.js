import LoginPage from "../Pages/loginPage";
import PRPage from "../Pages/PRPage";
describe("Create Purchase Request", () => {
    const loginPage = new LoginPage();
    const prPage=new PRPage();


    beforeEach(() => {
        loginPage.CCLLoginPage();
    })
    it("Create New Purchase Requisition", () => {
        prPage.CCLPRPage();

    })
})

