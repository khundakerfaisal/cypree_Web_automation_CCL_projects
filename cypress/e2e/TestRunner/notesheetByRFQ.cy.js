import LoginPage from "../Pages/loginPage";
import noteSheetByRFQPage from "../Pages/noteSheetByRFQPage";
describe("Create Local PO", () => {

  const loginPage = new LoginPage();
  const notesheetRfqPage = new noteSheetByRFQPage();


  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it("Create New Notesheet BY PR", () => {
    notesheetRfqPage.CCLNotesheetByRFQ();
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})