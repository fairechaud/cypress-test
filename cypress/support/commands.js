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

Cypress.Commands.add('loginSuccess',(loginInfo = 'demoUser') =>
{
    cy.visit(URL)

    cy.fixture(loginInfo).as('demoUserFixture')
    cy.get('@demoUserFixture').then(user => {
        cy.get(userInput)
        .type(user.username)
        cy.get(pwInput)
        .type(user.password+'{enter}')
    })
    cy.url().should('include', 'dashboard')
    cy.get('p.oxd-userdropdown-name')
    .should('contain', 'Anya Taylor')   
})