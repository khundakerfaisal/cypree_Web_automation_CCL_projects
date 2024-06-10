import LoginPage from "../Pages/loginPage";
import comparativestatementPage from "../Pages/comparativestatementPage";

describe("Create Comparative statement", () => {

    const loginPage = new LoginPage();
    const comparativestatementpage = new comparativestatementPage();


    beforeEach(() => {
        loginPage.CCLLoginPage();
    })
    it("Create New Comparative statement", () => {
        comparativestatementpage.CCLCSPage();
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

})
