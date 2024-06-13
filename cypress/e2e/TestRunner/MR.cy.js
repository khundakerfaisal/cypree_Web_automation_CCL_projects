import LoginPage from "../Pages/loginPage";
import MRPage from "../Pages/MRPage";


describe("Create MRR", () => {

  const loginPage = new LoginPage();
  const MrPage = new MRPage();


  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it("Create New MRR", () => {
    MrPage.CCLMR();

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