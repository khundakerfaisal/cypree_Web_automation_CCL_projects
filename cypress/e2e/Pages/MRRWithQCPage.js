class MRRWithQCPage{
    CCLMRRWithQC(){
        cy.get('[title="Home Menu"]').click()
        cy.get('[href="#menu_id=237&action=400"]').click()
        cy.xpath('//button[@data-menu-xmlid="mrr_inventory.stock_warehouse_categ"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="mrr_inventory.menu_mrr_view"]').click()
        cy.wait(1000)
        cy.contains('button', 'New').click()
        cy.wait(1000)

        //-------MRR TYPE Wise selection part------------
        // cy.get('#mrr_type_0').select("Direct")
        cy.get('#mrr_type_0').select("Local")
        // cy.get('#mrr_type_0').select("Foreign")
        // cy.get('#purchase_base_0').
        cy.wait(1000)
        //-------End MRR TYPE Wise selection part------------

        cy.get('#purchase_order_id_0').click()
        cy.wait(1000)
        cy.get('#purchase_order_id_0').type('{enter}')           
         cy.get('#qc_required_0').check()
        cy.wait(500)
        cy.xpath('//button[@data-tooltip="Save manually"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="action_confirm"]').click()
        cy.wait(1000)
        cy.xpath('//button[@name="btn_send_to_approver"]').click()

        // MRR reviewed Modal handle part start
        cy.get('.modal-content.o_error_dialog').within(() => {
        // Check the modal title
            cy.get('.modal-title').should('contain', 'Validation Error');     
        // Check the modal message
            cy.get('.modal-body div[role="alert"] p')
              .should('contain', 'You must required QC');
          });     
        // Close the modal
          cy.get('.modal-content.o_error_dialog').within(() => {
            cy.get('.modal-footer button.btn-primary').click();
          });     
          //    Verfied modal is no longer visible
          cy.get('.modal-content.o_error_dialog').should('not.exist');
        cy.wait(1500)
           // MRR reviewed Modal handle part End

        // QC Part Start   

        cy.xpath('//button[@data-menu-xmlid="mrr_inventory.stock_warehouse_categ"]').click()
        cy.wait(500)
        cy.xpath('//div/a[@data-menu-xmlid="mrr_inventory.menu_stock_quality_control"]').click()
        cy.wait(1000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
        cy.get('#mrr_id_0').click()
        cy.wait(1000)
        cy.get('#mrr_id_0').type('{enter}')   
        cy.wait(1000)
        cy.xpath('//button[@data-tooltip="Save manually"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="btn_reviewed"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="btn_approved"]').click()
        cy.wait(500)
         // QC Part End   

         //MRR Selection for final approval part start

        cy.xpath('//button[@data-menu-xmlid="mrr_inventory.stock_warehouse_categ"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="mrr_inventory.menu_mrr_view"]').click()
        cy.wait(1000)
        cy.get('.o_data_row').eq(0).click()
        cy.wait(500)
        cy.xpath('//button[@name="btn_send_to_approver"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="button_validate"]').click()
        cy.wait(500)
        //MRR Selection for final approval part End
        
        cy.get('.breadcrumb-item').eq(0)
        .contains('MRR')
        .should('exist');
 
    }
}
export default MRRWithQCPage;