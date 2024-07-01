import LoginPage from "../Pages/loginPage";
import noteSheetByPRPage from "../Pages/noteSheetByPRPage";
describe("Create Local PO", () => {

  const loginPage = new LoginPage();
  const notesheetPRPage = new noteSheetByPRPage();


  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it("Create New Notesheet BY PR", () => {
    notesheetPRPage.CCLNotesheetByPR();
  })


  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})