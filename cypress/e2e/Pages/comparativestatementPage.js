class comparativestatementPage{
    CCLCSPage(){
        cy.get('[title="Home Menu"]').click()
        cy.get('[href="#menu_id=309&action=502"]').click()
        cy.xpath('//button[@data-menu-xmlid="purchase.menu_procurement_management"]').click()
        cy.xpath('//div/a[@data-menu-xmlid="cs_cutom_view.purchase_compare_menu"]').click()
        cy.wait(2000)
        cy.contains('button', 'New').click()
        cy.wait(1000)
        cy.get('#request_for_quotation_id_0').click()
        cy.get('#request_for_quotation_id_0').type('{enter}')
        cy.wait(1000)
        cy.xpath('//button[@data-tooltip="Save manually"]').click()
        cy.wait(500)
        cy.xpath('//button[@name="btn_open_view"]').click()
        cy.wait(1000)
    }
}
export default comparativestatementPage;