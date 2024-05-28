class foreignPage{
    CCLForeignPo(){
        cy.get('[title="Home Menu"]').click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.xpath('//button[@data-menu-xmlid="purchase.menu_procurement_management"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="direct_local_foreign_po.menu_foreign_purchase"]').click()
        cy.wait(2000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
        cy.get('#purchase_base_0').select("Comparative Statement")
        // cy.get('#purchase_base_0').
        cy.wait(1000)
        // cy.xpath('//div[@name="partner_id"]').type('DreamIT Ltd').type('{enter}')
        cy.xpath('//div[@name="partner_id"]').type('Fair Electronics Limited').type('{enter}')
        
        cy.wait(500)
        cy.get('#rfq_id_0').click()
        cy.get('.dropdown-item').eq(1).type('{enter}')   
        cy.wait(1000)
        cy.get('#cs_ids_0').click()  
        cy.wait(500)
        cy.get('#cs_ids_0').type('{enter}')   
        cy.wait(1000)

        cy.get('#currency_id_0').type('USD')   
        cy.wait(1000)
        cy.get('#rate_0').type('110')   
        cy.wait(1000)
        cy.get('#port_of_arrival_0').type('Test vehicle')   
        cy.wait(1000)


        cy.xpath('//button[@data-tooltip="Save manually"]').click()
        cy.wait(500)
 
        cy.xpath('//button[@name="button_submit"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="button_confirm"]').click()
        cy.wait(500)
 

        cy.get('.breadcrumb-item').eq(0)
        .contains('Foreign Purchase')
        .should('exist');
    }
}
export default foreignPage;