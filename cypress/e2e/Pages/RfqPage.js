// const URL = require('E://CY_CCL_Projects/cypress/fixtures/login_URL.json')
// const authGroup = require('E://CY_CCL_Projects/cypress/fixtures/userAccessGroup.json')
class RfqPage {
    CCLRfq() {
        cy.get('[title="Home Menu"]').click()
        cy.xpath('//*[@data-menu-xmlid="purchase.menu_purchase_root"]').click();
        cy.xpath('//button[@data-menu-xmlid="purchase.menu_procurement_management"][1]').click()
        cy.wait(1000)
        cy.xpath('//div/a[@data-menu-xmlid="purchase_request.request_for_quotation_menu"]').click()
        cy.wait(2000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
        cy.screenshot()
        cy.get('#purchase_request_ids_0').click()
        cy.wait(1000)
        cy.get('#purchase_request_ids_0').type('{enter}')
        cy.wait(1000)

        cy.get('.o_form_button_save').click()
        cy.wait(1000)
        cy.xpath('//button[@name="action_rfq_confirm"]').click()
        cy.wait(1000)
        cy.xpath('//button[@name="action_multiple_quotation_creation"]').click()
        cy.wait(1000)
 
         //Dynamically select vendor
        const vendorCount = 5;
        for (let i = 0; i < vendorCount; i++) {
            cy.get('#partner_ids_0').click().wait(500).type('{enter}')
            cy.wait(1000)
        }
        //End Dynamically select vendor


        //Start product price input dynamically selection part 
       
        const totalNumber = 10;
        const prices = ['100', '200', '300', '400', '500'];

        for (let i = 0; i < totalNumber; i++) {
            const rowIndex = i + 1; // XPath is 1-based
            const price = prices[i] || ((i + 1) * 100).toString(); // Fallback to calculated price

            // Step 1: Click the price cell to activate input
            cy.xpath(`//tbody/tr[position()=${rowIndex}]/td[position()=8][@name='price_unit']`).click();
            cy.wait(500);

            // Step 2: Type the price into the input
            cy.xpath(`//tbody/tr[position()=${rowIndex}]/td[position()=8]//input`)
                .should('exist')
                .clear()
                .type(price);
        }
        //End product price input dynamically selection part 

        cy.wait(500)
        cy.screenshot()

        cy.xpath('//button[@name="action_create_quotations"]').click()
        cy.wait(500)



    }
}
export default RfqPage;