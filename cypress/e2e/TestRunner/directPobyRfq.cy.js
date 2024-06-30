import LoginPage from "../Pages/loginPage";
import directPoPageByRfq from "../Pages/directPoPageByRfq";

describe("Create Direct PO", () => {

  const loginPage = new LoginPage();
  const directPoByRfq = new directPoPageByRfq();

  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it("Create New Direct PO", () => {
    directPoByRfq.CCLDirectPo();
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