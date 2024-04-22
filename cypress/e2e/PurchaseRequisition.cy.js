import LoginPage from "./Pages/loginPage";
describe("Create Purchase Request", () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        loginPage.CCLLoginPage();
    })

    it("Create PR", () => {
        cy.get('.dropdown-toggle > .oi').click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        // cy.xpath("//a[contains(.,'Purchase')]").click()  

    })
})