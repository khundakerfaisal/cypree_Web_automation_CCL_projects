import LoginPage from "../Pages/loginPage";
import RfqForNotesheetPage from "../Pages/RfqForNotesheetPage";

describe("Create Request For Quotation", () => {
  const loginPage = new LoginPage();
  const rfqForNotesheet = new RfqForNotesheetPage();


  beforeEach(() => {
    loginPage.CCLLoginPage();
  })
  it("Create New Request For quotation", () => {
    // rfqPage.CCLRfq();
    rfqForNotesheet.CCLRfqForNotesheet();
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
  it("closes the test browser", () => {
    // Close the browser window
    cy.window().then(win => {
      win.close();
    });
  });

})
