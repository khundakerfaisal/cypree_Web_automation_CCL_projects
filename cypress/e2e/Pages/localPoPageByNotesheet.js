class LocalPoPageByNotesheet{
    CCLLocalPoByNotesheet(){
        cy.get('.o_grid_apps_menu__button').eq(0).click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.xpath('//button[@data-menu-xmlid="purchase.menu_procurement_management"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="direct_local_foreign_po.menu_local_purchase"]').click()
        cy.wait(2000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
        cy.get('#purchase_base_0').select("Notesheet")
        cy.wait(1000)
        cy.get('#notesheet_id_0').click()
        cy.wait(1000)
        cy.get('#notesheet_id_0').type('{enter}')   
        cy.wait(1000)
        // cy.get('#cs_ids_0').click()  
        // cy.wait(500)
        // cy.get('#cs_ids_0').type('{enter}')   
        // cy.wait(1000)
        cy.xpath('//button[@data-tooltip="Save manually"]').click()
        cy.wait(500)
 
        cy.xpath('//button[@name="button_submit"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="button_confirm"]').click()
        cy.wait(500)
 

        cy.get('.breadcrumb-item').eq(0)
        .contains('Local Purchase')
        .should('exist');
 
    }
}
export default LocalPoPageByNotesheet;