import LoginPage from "./Pages/loginPage";

describe("CCL Login page", () => {
    const loginPage = new LoginPage();

    it("Login with valid credentials", () => {
        loginPage.CCLLoginPage();     
    })

})



