import LoginPage from "../Pages/loginPage";
import LocalPoPageByNotesheet from "../Pages/localPoPageByNotesheet";
describe("Create Local PO", () => {

  const loginPage = new LoginPage();
  const localPoPageByNotesheet = new LocalPoPageByNotesheet();


  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it("Create New Local PO By Notesheet", () => {
    localPoPageByNotesheet.CCLLocalPoByNotesheet();
  })


  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})