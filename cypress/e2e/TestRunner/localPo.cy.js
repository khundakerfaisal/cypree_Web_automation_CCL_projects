import LoginPage from "../Pages/loginPage";
import LocalPoPage from "../Pages/localPoPage";
describe("Create Local PO", () => {

  const loginPage = new LoginPage();
  const localPoPage = new LocalPoPage();


  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it("Create New Local PO", () => {
    localPoPage.CCLLocalPo()
  })


  it("closes browser", () => {
    // Close the browser window
    cy.window().then(win => {
      win.close();
    });
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})