import LoginPage from "../Pages/loginPage";
import MRRWithoutQCPage from "../Pages/MRRWithoutQCPage";


describe("Create MRR",()=>{

    const loginPage = new LoginPage();
    const mrrWithoutQcPage = new MRRWithoutQCPage();


    beforeEach(()=>{
        loginPage.CCLLoginPage();
    })
    it("Create New MRR",()=>{
      mrrWithoutQcPage.CCLMRRWithoutQC();
    
    })
  

    it("closes browser", () => {
        // Close the browser window
        cy.window().then(win => {
          win.close();
        });
      });
      Cypress.on('uncaught: exception', ()=> false)
})