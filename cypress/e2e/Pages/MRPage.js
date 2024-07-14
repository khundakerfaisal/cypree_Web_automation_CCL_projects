class MRPage{
    CCLMR(){
        cy.get('.o_grid_apps_menu__button').eq(0).click()
 
        cy.get('[href="#menu_id=237&action=400"]').click()
        cy.xpath('//button[@data-menu-xmlid="mrr_inventory.stock_warehouse_categ"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="material_requisition_issue.material_requisition_menu"]').click()
        cy.wait(1000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
        cy.get('#vehicle_id_0').type('{enter}')

        cy.contains('a', 'Add a line').click()
        cy.wait(1000)
        cy.get('[data-tooltip-delay="1000"][name="product_id"] > .o_field_widget > .o_field_many2one_selection > .o_input_dropdown > .o-autocomplete > .o-autocomplete--input').click()
        cy.wait(500)
        cy.contains('a', 'CCL Test product 1').click()
        cy.wait(500)

        cy.get('.o-autocomplete').eq(4).click()
        cy.wait(1000)
        cy.get('.o-autocomplete').eq(4).type('{enter}')
        cy.wait(500)

        cy.xpath('//div[@name="quantity"]/input').click()
        cy.xpath('//div[@name="quantity"]/input').clear().type('5')

        cy.wait(500)

  
        cy.xpath('//button[@data-tooltip="Save manually"]').click()
        cy.wait(500)
     
        // Using for model valdation ok button pressed
        cy.xpath('//button[@name="action_review"]').click()
        cy.wait(500)
       

        cy.xpath('//button[@name="action_confirm"]').click()
        cy.wait(500)

       
 

        cy.get('.breadcrumb-item').eq(0)
        .contains('Material Requisition')
        .should('exist');
 
    }
}
export default MRPage;