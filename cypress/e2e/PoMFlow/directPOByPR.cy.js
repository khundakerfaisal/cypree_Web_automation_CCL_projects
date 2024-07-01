describe(' Direct PO Test Suite With PR', () => {
    it('should run login test', () => {
      require('../TestRunner/login.cy.js');
    });
  
    it('should run Direct purchase requisition test', () => {
      require('../TestRunner/DirectPR.cy.js');
    });

    it('should run Direct PO By PR', () => {
      require('../TestRunner/directPoByPR.cy.js');
    });
    it('should run MRR with QC test', () => {
        require('../TestRunner/MrrWithoutQc.cy.js');
    });
  });
  