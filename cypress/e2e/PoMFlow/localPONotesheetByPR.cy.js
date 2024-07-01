describe('Local PO Test Suite With Notesheet',()=>{
    it('should run login test',()=>{
    require('../TestRunner/login.cy.js');
    });
    it('should run Local purchase requisition test', () => {
    require('../TestRunner/PurchaseRequisition.cy.js');
    });
    it('should run Local PO By Notesheet', () => {
        require('../TestRunner/notesheetByPR.cy.js');
    });
    it('should run Local PO By Notesheet', () => {
        require('../TestRunner/localPoByNotesheet.cy.js');
    });
    it('should run MRR with QC test', () => {
        require('../TestRunner/MrrWithoutQc.cy.js');
    });



});