import LoginPage from "../Pages/loginPage";
import MRRWithQCPage from "../Pages/MRRWithQCPage";


describe("Create MRR",()=>{

    const loginPage = new LoginPage();
    const mrrWithQcPage = new MRRWithQCPage();


    beforeEach(()=>{
        loginPage.CCLLoginPage();
    })
    it("Create New MRR",()=>{
      mrrWithQcPage.CCLMRRWithQC();
    
    })
    // it('should close the validation error modal', () => {
    //   // Ensure the modal is visible
    //   cy.get('.modal-content.o_error_dialog').should('be.visible');
      
    //   // Locate and click the close button within the modal header
    //   cy.get('.modal-content.o_error_dialog .modal-header .btn-close').click();
      
    //   // Assert that the modal is closed
    //   cy.get('.modal-content.o_error_dialog').should('not.exist'); // or .should('not.be.visible')
    // });

    // it("closes browser", () => {
    //     // Close the browser window
    //     cy.window().then(win => {
    //       win.close();
    //     });
    //   });

      Cypress.on('uncaught: exception', ()=> false)
})