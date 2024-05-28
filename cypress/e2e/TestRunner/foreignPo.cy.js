import LoginPage from "../Pages/loginPage";
import foreignPage from "../Pages/foreignPage";
describe("Create Foreign PO",()=>{

    const loginPage = new LoginPage();
    const foreignPoPage = new foreignPage();


    beforeEach(()=>{
        loginPage.CCLLoginPage();
    })
    it("Create New Local PO",()=>{
        foreignPoPage.CCLForeignPo()
    })
  

    it("closes browser", () => {
        // Close the browser window
        cy.window().then(win => {
          win.close();
        });
      });
      Cypress.on('uncaught: exception', ()=> false)
})