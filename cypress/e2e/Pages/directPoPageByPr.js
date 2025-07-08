class directPoPageByPr{
    CCLDirectPo(){
        cy.xpath('//div/button[@title="Home Menu"]').click()
        cy.wait(1000)
        cy.get('[href="#menu_id=360&action=558"]').click()
        cy.xpath('//button[@data-menu-xmlid="purchase.menu_procurement_management"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="direct_local_foreign_po.menu_direct_purchase"]').click()
        cy.wait(2000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
      //------------Purchase base Purchase requisition part --------------------
        cy.get('#direct_po_base_0').select("Purchase Requisition")            
        cy.wait(1000)
        // cy.xpath('//div[@name="partner_id"]').type('DreamIT Ltd').type('{enter}')
        cy.xpath('//div[@name="partner_id"]').type('Fair Trading').type('{enter}')       
        cy.wait(500)
        cy.get('#purchase_request_id_0').click() 
        cy.wait(1500)              
        cy.get('#purchase_request_id_0').type('{downArrow}{enter}')  
        cy.wait(1500)                  
        // cy.get('.dropdown-item').eq(1).type('{enter}')   
        cy.wait(1000)
        cy.get('.o_monetary_cell.o_required_modifier').click()                  
        cy.get('.o_monetary_cell.o_required_modifier').clear().type('200')      
        cy.xpath('//button[@data-tooltip="Save manually"]').click()
        cy.wait(500) 
        cy.xpath('//button[@name="button_submit"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="button_confirm"]').click()
        cy.wait(500) 
        cy.get('.breadcrumb-item').eq(0)
        .contains('Direct Purchase')
        .should('exist');
        cy.wait(500) 
        //------------End Purchase requisition part--------------------
    }
}
export default directPoPageByPr;