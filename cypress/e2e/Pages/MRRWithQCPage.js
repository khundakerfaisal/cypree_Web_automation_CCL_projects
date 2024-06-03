class MRRWithQCPage{
    CCLMRRWithQC(){
        cy.get('[title="Home Menu"]').click()
        cy.get('[href="#menu_id=237&action=400"]').click()
        cy.xpath('//button[@data-menu-xmlid="mrr_inventory.stock_warehouse_categ"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="mrr_inventory.menu_mrr_view"]').click()
        cy.wait(1000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
        cy.get('#mrr_type_0').select("Direct")
        // cy.get('#mrr_type_0').select("Local")
        // cy.get('#mrr_type_0').select("Foreign")
        // cy.get('#purchase_base_0').
        cy.wait(1000)

        cy.get('#purchase_order_id_0').click()
        cy.wait(1000)
        cy.get('#purchase_order_id_0').type('{enter}')   
        
         cy.get('#qc_required_0').check()
        cy.wait(500)

        cy.xpath('//button[@data-tooltip="Save manually"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="action_confirm"]').click()
        cy.wait(500)
 

        cy.xpath('//button[@name="btn_send_to_approver"]').click()

        cy.xpath('//header[@class="modal-header"]').click()

        cy.get('. btn-primary').eq(4).click()
        cy.wait(500)


        cy.wait(5000)
        // cy.xpath()

        // cy.xpath('//button[@name="button_validate"]').click()
        // cy.wait(500)
 

        // cy.get('.breadcrumb-item').eq(0)
        // .contains('MRR')
        // .should('exist');
 
    }
}
export default MRRWithQCPage;