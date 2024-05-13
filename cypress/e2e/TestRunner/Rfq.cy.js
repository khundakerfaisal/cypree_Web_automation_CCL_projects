import LoginPage from "../Pages/loginPage";
import RfqPage from "../Pages/RfqPage";
describe("Create Request For Quotation", () => {
    const loginPage = new LoginPage();
    const rfqPage=new RfqPage();


    beforeEach(() => {
        loginPage.CCLLoginPage();
    })
    it("Create New Purchase Requisition", () => {
        rfqPage.CCLRfq();
        // prAccessPage.CCLPRPageAccessGroupWise();
        // RfqType.CCLRFQTypeWiseWithAccessGroup();

    })
    
    it("closes the test browser", () => {
        // Close the browser window
        cy.window().then(win => {
          win.close();
        });
      });
      
})
