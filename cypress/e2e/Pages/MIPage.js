class MIPage{
    CCLMI(){
        cy.get('.o_grid_apps_menu__button').eq(0).click()
        cy.get('[href="#menu_id=237&action=400"]').click()
        cy.xpath('//button[@data-menu-xmlid="mrr_inventory.stock_warehouse_categ"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="material_requisition_issue.material_issue_menu"]').click()
        cy.wait(1000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
        cy.get('#requisition_id_0').click()
        cy.wait(1000)
        cy.get('#requisition_id_0').wait(500).type('{enter}')
        cy.wait(1000)
        cy.xpath('//button[@data-tooltip="Save manually"]').click()
        cy.wait(1000)
     
        // Using for model valdation ok button pressed
        cy.xpath('//button[@name="material_issue_approve"]').click()
        cy.wait(1000)

        cy.get('.breadcrumb-item').eq(0)
        .contains('Material Issue')
        .should('exist');
 
    }
}
export default MIPage;