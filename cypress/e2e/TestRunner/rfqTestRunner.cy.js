import LoginPage from "../Pages/loginPage";
import RfqPage from "../Pages/RfqPage";
describe("Create Rfq", () => {
    const loginPage = new LoginPage();
    const rfqPage = new RfqPage();
    beforeEach("Login With Valid Creds", () => {
        loginPage.CCLLoginPage();
    })
    it("Create Rfq", () => {
        rfqPage.CCLRfq()
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})