class noteSheetByPRPage {
    CCLNotesheetByPR() {
        cy.get('.o_grid_apps_menu__button').eq(0).click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.wait(2000)
        cy.xpath('//button[@data-menu-xmlid="purchase.menu_procurement_management"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="notesheet_agreement.notesheet_menu"]').click()
        cy.wait(2000)
            cy.contains('button', 'New').click()
            cy.wait(1000)
            cy.get('#purchase_request_ids_0').click()
            cy.wait(1000)
            cy.get('#purchase_request_ids_0').type('{enter}')
            cy.wait(1000)
            cy.get('#vendor_id_0').type('Fair Electronics Limited').type('{enter}')
            cy.wait(1000)
            cy.get('#currency_id_0').type('BDT').type('{enter}')
            cy.wait(1000)
            cy.get('#subject_0').type('This is subject Test').type('{enter}')
            cy.wait(1000)
            cy.get('#body_0').type('This is Body Test').type('{enter}')
            cy.wait(1000)
            cy.get('#approver_comments_0').type('This is Approver comment Test').type('{enter}')
            cy.wait(1000)

            // First  Unit Price  Inputed
            cy.get('[name="price_unit"]').click().clear().type('500')
            cy.wait(500)
   
            // From submission and Approval Start point
            cy.xpath('//button[@data-tooltip="Save manually"]').click()
            cy.wait(1000)
            cy.get('[name="action_submit"]').click()
            cy.wait(1000)

            cy.get('[name="action_layerOne_submit"]').click()
            cy.wait(1000)

            cy.get('[name="action_layerTwo_submit"]').click()
            cy.wait(1000)

            cy.get('[name="action_scm_hod_approve"]').click()
            cy.wait(1000)
            cy.get('[name="action_md_approve"]').click()
            cy.wait(1000)
             //Approval End point

            cy.get('li.breadcrumb-item')
                .contains('Note sheet')
                .should('exist');
            cy.wait(1000)
      
    }
}

export default noteSheetByPRPage;