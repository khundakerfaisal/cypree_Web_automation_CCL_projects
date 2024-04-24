import LoginPage from "./Pages/loginPage";
describe("Create Purchase Request", () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        loginPage.CCLLoginPage();
    })

    it("Create PR", () => {
        cy.get('[title="Home Menu"]').click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.get('.d-xl-none > .o_list_button_add').click()
        cy.get('#priority_0').select('High')
        cy.get('#requisition_type_0').select('Local Purchase')
        cy.wait(2000)
        cy.get('#budget_id_0').type('{downArrow}{enter}')
        cy.contains('a', 'Add a line').click()
        cy.wait(1000)
        cy.get('[data-tooltip-delay="1000"][name="product_id"] > .o_field_widget > .o_field_many2one_selection > .o_input_dropdown > .o-autocomplete > .o-autocomplete--input').click()
        cy.wait(1000)
        cy.contains('a','CCL Test product 1').click()
        cy.wait(1000)
        cy.get('[data-tooltip-delay="1000"][name="product_qty"] > .o_field_widget > .o_input').click()// cy.xpath("(//a[contains(.,'Add a line')])[1]").click()    
        cy.get('[data-tooltip-delay="1000"][name="product_qty"] > .o_field_widget > .o_input').clear().type('5')
        cy.wait(500)
        cy.get('.o_form_button_save').click()

        cy.get('[name="action_submit"]').click()
        cy.wait(500)
        cy.get('[name="action_hod_hoit_approve"]').click()
        cy.wait(500)
        cy.get('[name="action_gm_approve"]').click()
        cy.wait(1000)
        cy.get('li.breadcrumb-item')
      .contains('Purchase Requisition')
      .should('exist');
        cy.wait(1000)
    })  
})   