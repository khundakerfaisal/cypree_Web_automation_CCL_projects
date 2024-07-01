class noteSheetByRFQPage {
    CCLNotesheetByRFQ() {
        cy.get('[title="Home Menu"]').click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.wait(2000)
        cy.xpath('//button[@data-menu-xmlid="purchase.menu_procurement_management"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="notesheet_agreement.notesheet_menu"]').click()
        cy.wait(2000)
            cy.contains('button', 'New').click()
            cy.wait(1000)
            cy.get('#radio_field_0_rfq').check();
            cy.wait(1000)
            cy.get('#rfq_id_0').click()
            cy.wait(1000)
            cy.get('#rfq_id_0').type('{enter}')
            cy.wait(1000)
            cy.get('#quotation_id_0').click()
            cy.wait(1000)
            cy.get('#quotation_id_0').type('{enter}')
            cy.wait(1000)
            // cy.get('#vendor_id_0').type('Fair Electronics Limited').type('{enter}')
            // cy.wait(1000)
            // cy.get('#currency_id_0').type('BDT').type('{enter}')
            // cy.wait(1000)
            cy.get('#subject_0').type('This is subject Test').type('{enter}')
            cy.wait(1000)
            cy.get('#body_0').type('This is Body Test').type('{enter}')
            cy.wait(1000)
            cy.get('#approver_comments_0').type('This is Approver comment Test').type('{enter}')
            cy.wait(1000)

            // First  Unit Price  Inputed
            // cy.get('[name="price_unit"]').click().clear().type('500')
            // cy.wait(500)
   
            // From submission and Approval Start point
            cy.xpath('//button[@data-tooltip="Save manually"]').click()
            cy.wait(500)
            cy.get('[name="action_submit"]').click()
            cy.wait(500)

            cy.get('[name="action_layerOne_submit"]').click()
            cy.wait(500)

            cy.get('[name="action_layerTwo_submit"]').click()
            cy.wait(500)

            cy.get('[name="action_scm_hod_approve"]').click()
            cy.wait(500)
            cy.get('[name="action_md_approve"]').click()
            cy.wait(500)
             //Approval End point

            cy.get('li.breadcrumb-item')
                .contains('Note sheet')
                .should('exist');
            cy.wait(1000)
      
    }
}

export default noteSheetByRFQPage;