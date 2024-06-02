import LoginPage from "../Pages/loginPage";
import MRRPage from "../Pages/MRRPage";

describe("Create MRR",()=>{

    const loginPage = new LoginPage();
    const mrrPage = new MRRPage();


    beforeEach(()=>{
        loginPage.CCLLoginPage();
    })
    it("Create New MRR",()=>{
      mrrPage.CCLMRR();
    
    })
  

    it("closes browser", () => {
        // Close the browser window
        cy.window().then(win => {
          win.close();
        });
      });
      Cypress.on('uncaught: exception', ()=> false)
})