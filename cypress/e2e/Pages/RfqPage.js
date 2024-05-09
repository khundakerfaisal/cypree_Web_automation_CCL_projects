// const URL = require('E://CY_CCL_Projects/cypress/fixtures/login_URL.json')
// const authGroup = require('E://CY_CCL_Projects/cypress/fixtures/userAccessGroup.json')
class RfqPage{
    CCLRfq(){
        cy.get('[title="Home Menu"]').click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.xpath('//button[@data-menu-xmlid="purchase.menu_procurement_management"]').click()
        cy.get('[href="#menu_id=375&action=503"]').click()
        cy.wait(2000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
        cy.get('#purchase_request_ids_0').click()
        cy.get('#purchase_request_ids_0').type('{downArrow}{enter}')
        cy.wait(500)
        cy.get('#purchase_request_ids_0').type('{downArrow}{enter}')
        cy.wait(500)
        cy.get('#purchase_request_ids_0').type('{downArrow}{enter}')
        cy.wait(500)
        cy.get('.o_form_button_save').click()
        cy.wait(1000)
        cy.xpath('//button[@name="action_rfq_confirm"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="action_multiple_quotation_creation"]').click()
        cy.wait(1000)

        cy.get('#partner_ids_0').click()
        cy.get('#partner_ids_0').type('{downArrow}{enter}')
        cy.wait(500)
        cy.get('#partner_ids_0').type('{downArrow}{downArrow}{enter}')



    } 
}
export default RfqPage;