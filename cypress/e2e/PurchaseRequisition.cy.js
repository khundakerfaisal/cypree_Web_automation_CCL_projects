import LoginPage from "./Pages/loginPage";
describe("Create Purchase Request", () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        loginPage.CCLLoginPage();
    })

    it("Create PR", () => {
        cy.get('.dropdown-toggle > .oi').click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.get('.d-xl-none > .o_list_button_add').click()
        cy.get('#priority_0').select('High')
        cy.get('#requisition_type_0').select('Local Purchase')
        cy.get('#budget_id_0').type('DevOps Budget - Entertainment - 2023-2024 (267169.75) (905648.22)').click()

        // cy.xpath("").select('High')  
        // cy.xpath("//a[contains(.,'Purchase')]").click()  

    })
})