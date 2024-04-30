// const URL = require('./login_URL.json')
const URL=require('E://CY_CCL_Projects/cypress/fixtures/login_URL.json')
const authGroup = require('E://CY_CCL_Projects/cypress/fixtures/userAccessGroup.json')
class LoginPage {
    CCLLoginPage() {
        cy.visit(URL.TestURL)        // cy.visit("http://192.168.3.187:7071/web/login");
        // cy.get('#login').type(authGroup.authUser)
        // cy.get('#password').type(authGroup.authPassword)

        //Access group wise PR initiate
        cy.get('#login').type(authGroup.PRinitUser)
        cy.get('#password').type(authGroup.PRInitPassword)
        cy.get('.btn').click()
        cy.wait(1000)
    }
}

export default LoginPage;