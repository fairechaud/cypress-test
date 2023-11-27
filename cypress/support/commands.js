// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// SETUP
const URL = "https://opensource-demo.orangehrmlive.com/"
const userInput =  "input[name=username]"
const pwInput = "input[name=password]"

Cypress.Commands.add('login',(loginInfo = 'demoUser') =>
{
    cy.visit(URL)
    cy.fixture(loginInfo).as('userFixture')
    cy.get('@userFixture').then(user => {
        cy.get(userInput)
        .type(user.username)
        cy.get(pwInput)
        .type(user.password+'{enter}')
    })
    // if we had access to source code we could try to figure out 
    // if the username is valid, the user's info is 
    // randomized every now and then. Also how to verify cookies?
})

Cypress.Commands.add('emptyUser',(loginInfo = 'demoUser') =>
{
    cy.visit(URL)
    cy.fixture(loginInfo).as('userFixture')
    cy.get('@userFixture').then(user => {
        cy.get(userInput)
        .type(" ")
        cy.get(pwInput)
        .type(user.password+'{enter}')
    })
})

Cypress.Commands.add('emptyPassword',(loginInfo = 'demoUser') =>
{
    cy.visit(URL)
    cy.fixture(loginInfo).as('userFixture')
    cy.get('@userFixture').then(user => {
        cy.get(userInput)
        .type(user.username)
        cy.get(pwInput)
        .type(" {enter}")
    })
})

Cypress.Commands.add('forgotPassword', () => 
{
    cy.visit(URL)
    cy.get('.orangehrm-login-forgot > .oxd-text').first().click()
})

Cypress.Commands.add('autoLogin',() =>
{
    cy.request({
        method: 'POST',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
        body: {
            token: "myCustom-token",
            username: "Admin",
            password: "admin123"
        }
    }).then((response) => {
        expect(response.status).to.equal(200)
    })   
})