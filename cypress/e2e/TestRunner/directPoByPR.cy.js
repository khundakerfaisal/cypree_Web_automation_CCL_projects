import LoginPage from "../Pages/loginPage";
import directPoPageByPr from "../Pages/directPoPageByPr";


describe("Create Direct PO", () => {

  const loginPage = new LoginPage();
  const directPoByPr = new directPoPageByPr();

  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it("Create New Direct PO", () => {
    directPoByPr.CCLDirectPo();
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