class PRPage {
    CCLPRPage() {
        cy.get('[title="Home Menu"]').click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.wait(2000)
        for (let i = 0; i < 2; i++) {
            cy.wait(2000)
            cy.contains('button','New').click()

            // cy.get('.d-xl-none > .o_list_button_add').click()
            cy.wait(1000)
            cy.get('#priority_0').select('High')
            cy.get('#requisition_type_0').select('Local Purchase')
            cy.wait(3000)
            cy.get('#budget_id_0').type('{downArrow}{downArrow}{enter}')
            // Budget Selections point
            cy.wait(6000)
            // First  product line created
            cy.contains('a', 'Add a line').click()
            cy.wait(1000)
            cy.get('[data-tooltip-delay="1000"][name="product_id"] > .o_field_widget > .o_field_many2one_selection > .o_input_dropdown > .o-autocomplete > .o-autocomplete--input').click()
            cy.wait(2000)
            cy.contains('a', 'CCL Test product 1').click()
            cy.wait(3000)
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
            cy.get('[name="action_hod_hoit_approve"]').click()
            cy.wait(500)
            cy.get('[name="action_gm_approve"]').click()
            cy.wait(1000)
            // cy.get('li.breadcrumb-item')
            //     .contains('Purchase Requisition')
            //     .should('exist');
            // cy.wait(1000)
        }
    }
}

export default PRPage;