import LoginPage from "../Pages/loginPage";
import MIPage from "../Pages/MIPage";


describe("Create MRR", () => {

  const loginPage = new LoginPage();
  const MiPage = new MIPage();


  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it("Create New MI", () => {
    MiPage.CCLMI();

  })


  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it("closes browser", () => {
    // Close the browser window
    cy.window().then(win => {
      win.close();
    });
  });

})