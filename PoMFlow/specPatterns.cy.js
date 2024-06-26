import LoginPage from "../Pages/loginPage";
import specPattern from "./PoMFlow/specPatterns";

describe("Create Local PO", () => {
  const loginPage = new LoginPage();
  const specPattern= new specPattern();
  beforeEach(() => {
    loginPage.CCLLoginPage();
  })

  it("Create New Local PO", () => {
    
    specPattern.SpecPatternLocalPo();
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

