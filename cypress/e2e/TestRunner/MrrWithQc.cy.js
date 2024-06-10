import LoginPage from "../Pages/loginPage";
import MRRWithQCPage from "../Pages/MRRWithQCPage";


describe("Create MRR", () => {

  const loginPage = new LoginPage();
  const mrrWithQcPage = new MRRWithQCPage();


  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it("Create New MRR", () => {
    mrrWithQcPage.CCLMRRWithQC();

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