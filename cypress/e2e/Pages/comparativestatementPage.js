class comparativestatementPage{
    CCLCSPage(){
        
    
        // cy.get('[title="Home Menu"]').click()
        cy.get('.o_grid_apps_menu__button').eq(0).click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.xpath('//button[@data-menu-xmlid="purchase.menu_procurement_management"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="cs_cutom_view.purchase_compare_menu"]').click()
        cy.wait(2000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
        cy.get('#request_for_quotation_id_0').click()
        cy.wait(1000)
        cy.get('#request_for_quotation_id_0').type('{enter}')
        cy.wait(1000)
        cy.xpath('//button[@data-tooltip="Save manually"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="btn_open_view"]').click()
        cy.wait(1000)
        cy.xpath('//div/button[@data-bs-toggle="dropdown"]').click()
        cy.wait(500)
        cy.contains('button', 'Edit').click()
        cy.wait(500)
        cy.xpath('//tr/td/input[@class="o_purchase_selected_qty"]').eq(0).click()
        cy.get('.o_purchase_selected_qty').eq(0).type('{selectall}{del}')
        cy.wait(500)
        cy.get('.o_purchase_selected_qty').eq(0).type(2)
        cy.wait(500)

        cy.xpath('//div/button[@data-bs-toggle="dropdown"]').click()
        cy.wait(500)
        cy.contains('button', 'Save').click()
        cy.wait(500)

        // cy.xpath('//tr[@rfq_line_id="696"]').click()
        // cy.get('.o_purchase_selected_qty').eq(1).type('{selectall}{del}')
        // cy.wait(500)
        // cy.get('.o_purchase_selected_qty').eq(1).type(3)
        // cy.wait(500)
        cy.xpath('//button[@id="btn_send_for_approval"]').click()
        cy.wait(500)
        cy.xpath('//button[@id="btn_approve_hod_and_md"]').click()
        cy.wait(500)
        cy.xpath('//button[@id="btn_approve_hod_and_md"]').click()
        cy.wait(500)

        cy.get('li.breadcrumb-item')
        .contains('Comparative Statement')
        .should('exist');
    cy.wait(1000)
    }
}
export default comparativestatementPage;