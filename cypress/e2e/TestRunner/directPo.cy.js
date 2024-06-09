import LoginPage from "../Pages/loginPage";
import directPoPage from "../Pages/directPoPage";

describe("Create Direct PO",()=>{

    const loginPage = new LoginPage();
    const directPo= new directPoPage();
  
    beforeEach(()=>{
        loginPage.CCLLoginPage();
    })
    it("Create New Direct PO",()=>{
        directPo.CCLDirectPo();
    })
  

    it("closes browser", () => {
        // Close the browser window
        cy.window().then(win => {
          win.close();
        });
      });
      Cypress.on('uncaught: exception', ()=> false)
  
})