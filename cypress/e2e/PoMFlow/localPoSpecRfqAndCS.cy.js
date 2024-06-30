describe('Local PO Test Suite With RFQ And CS', () => {
    it('should run login test', () => {
      require('../TestRunner/login.cy.js');
    });
  
    it('should run purchase requisition test', () => {
      require('../TestRunner/PurchaseRequisition.cy.js');
    });
  
    it('should run RFQ test', () => {
      require('../TestRunner/Rfq.cy.js');
    });
  
    it('should run CS test runner test', () => {
      require('../TestRunner/csTestRunner.cy.js');
    });
  
    it('should run local PO test', () => {
      require('../TestRunner/localPo.cy.js');
    });
    it('should run MRR with QC test', () => {
        require('../TestRunner/MrrWithQc.cy.js');
      });
  });
  