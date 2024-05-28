const URL = require('E://CY_CCL_Projects/cypress/fixtures/login_URL.json')
const authGroup = require('E://CY_CCL_Projects/cypress/fixtures/userAccessGroup.json')
class PRPage {
    CCLPRPage() {
        cy.get('[title="Home Menu"]').click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.wait(2000)
        for (let i = 0; i < 1; i++) {
            // cy.wait(2000)
            cy.contains('button', 'New').click()
            // cy.get('.d-xl-none > .o_list_button_add').click()
            cy.wait(1000)
            cy.get('#priority_0').select('High')
            // cy.get('#requisition_type_0').select('Local Purchase')

            // // cy.get('#requisition_type_0').select('Direct Purchase')
            cy.get('#requisition_type_0').select('Foreign Purchase')

            cy.get('#department_id_0').type('DevOps').type('{enter}')
            cy.wait(1000)

            // cy.get('#department_id_0').type('Testing CCL dept').type('{enter}')
            // cy.wait(2000)
            // cy.get('#budget_id_0').type('{downArrow}{enter}')       
            // // Budget Selections point
            // cy.wait(500)

            // cy.get('#department_id_0').type('Sales').type('{enter}')
            // cy.wait(2000)
            // cy.get('#budget_id_0').type('{downArrow}{enter}')
            // // Budget Selections point
            // cy.wait(2000)

            // cy.get('#budget_id_0').type('{enter}')
            cy.get('#budget_id_0').type('{downArrow}{enter}')
            // cy.get('#budget_id_0').click()
            // cy.get('#budget_id_0').type('DevOps Budget - It-Product').type('{enter}')

            // Budget Selections point
            cy.wait(1000)

            // First  product line created
            cy.contains('a', 'Add a line').click()
            cy.wait(1000)
            cy.get('[data-tooltip-delay="1000"][name="product_id"] > .o_field_widget > .o_field_many2one_selection > .o_input_dropdown > .o-autocomplete > .o-autocomplete--input').click()
            cy.wait(2000)
            cy.contains('a', 'CCL Test product 1').click()
            cy.wait(2000)
            cy.get('[data-tooltip-delay="1000"][name="product_qty"] > .o_field_widget > .o_input').click()
            cy.get('[data-tooltip-delay="1000"][name="product_qty"] > .o_field_widget > .o_input').clear().type('5')
            cy.wait(500)
            // End First  product line created

            // Second product line created
            // cy.contains('a', 'Add a line').click()
            // cy.wait(1000)
            // cy.get('[data-tooltip-delay="1000"][name="product_id"] > .o_field_widget > .o_field_many2one_selection > .o_input_dropdown > .o-autocomplete > .o-autocomplete--input').click()
            // cy.wait(2000)
            // cy.contains('a', 'Chair Executive ').click()
            // cy.wait(3000)
            // cy.get('[data-tooltip-delay="1000"][name="product_qty"] > .o_field_widget > .o_input').click()
            // cy.get('[data-tooltip-delay="1000"][name="product_qty"] > .o_field_widget > .o_input').clear().type('3')
            // cy.wait(500)
            // End product line created
            cy.get('.o_form_button_save').click()
            cy.get('[name="action_submit"]').click()
            cy.wait(500)

            //HoD Approval button permission start

            // cy.visit(URL.TestURL)        // cy.visit("http://192.168.3.187:7071/web/login");
            // cy.get('#login').type(authGroup.PRHoDUser)
            // cy.get('#password').type(authGroup.PRHoDPassword)
            // cy.get('.btn').click()
            // cy.wait(1000)
            // cy.get('[title="Home Menu"]').click()
            // cy.get('[href="#menu_id=309&action=502"]').click()
            // cy.wait(2000)
            // cy.get('[data-id="datapoint_2"] > .o_list_char').click()
            // cy.wait(500)
            cy.get('[name="action_hod_hoit_approve"]').click()
            cy.wait(500)

            //HoD Approval button permission End

            //GM Approval button permission Start
            // cy.visit(URL.TestURL)        // cy.visit("http://192.168.3.187:7071/web/login");
            // cy.get('#login').type(authGroup.PRGMUser)
            // cy.get('#password').type(authGroup.PRGMPassword)
            // cy.get('.btn').click()
            // cy.wait(1000)
            // cy.get('[title="Home Menu"]').click()
            // cy.get('[href="#menu_id=309&action=502"]').click()
            // cy.wait(2000)
            // cy.get('[data-id="datapoint_2"] > .o_list_char').click()
            // cy.wait(500)
            cy.get('[name="action_gm_approve"]').click()
            cy.wait(1000)

            //GM Approval button permission End
            cy.get('li.breadcrumb-item')
                .contains('Purchase Requisition')
                .should('exist');
            cy.wait(1000)
        }
    }
}

export default PRPage;