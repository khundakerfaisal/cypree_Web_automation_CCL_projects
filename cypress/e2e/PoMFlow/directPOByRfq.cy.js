describe(' Direct PO Test Suite With RFQ', () => {
    it('should run login test', () => {
      require('../TestRunner/login.cy.js');
    });
  
    it('should run Direct purchase requisition test', () => {
      require('../TestRunner/DirectPR.cy.js');
    });
  
    it('should run RFQ test', () => {
      require('../TestRunner/Rfq.cy.js');
    });
  
    it('should run Direct PO By RFQ', () => {
      require('../TestRunner/directPobyRfq.cy.js');
    });
    it('should run MRR with QC test', () => {
        require('../TestRunner/MrrWithoutQc.cy.js');
    });
  });
  