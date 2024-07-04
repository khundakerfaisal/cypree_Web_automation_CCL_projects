import LoginPage from "../Pages/loginPage";
import PRPage from "../Pages/PRPage";
import RfqForNotesheetPage from "../Pages/RfqForNotesheetPage";
import noteSheetByRFQPage from "../Pages/noteSheetByRFQPage";
import LocalPoPageByNotesheet from "../Pages/localPoPageByNotesheet";
import MRRWithQCPage from "../Pages/MRRWithQCPage";

describe('Local PO Test Suite With Notesheet', () => {
    const loginPage = new LoginPage();
    const prPage = new PRPage();
    const rfqForNotesheet = new RfqForNotesheetPage();
    const notesheetRfqPage = new noteSheetByRFQPage();
    const localPoPageByNotesheet = new LocalPoPageByNotesheet();
    const mrrWithQcPage = new MRRWithQCPage();

    beforeEach(() => {
        loginPage.CCLLoginPage();
    })
    it('should run Local purchase requisition test', () => {
        prPage.CCLPRPage();
    });
    it('should run Local PO By RFQ', () => {
        rfqForNotesheet.CCLRfqForNotesheet();
    });
    it('should run Local PO By Notesheet', () => {
        notesheetRfqPage.CCLNotesheetByRFQ();
    });
    it('should run Local PO By Notesheet', () => {
        localPoPageByNotesheet.CCLLocalPoByNotesheet();
    });
    it('should run MRR with QC test', () => {
        mrrWithQcPage.CCLMRRWithQC();
    });

});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})