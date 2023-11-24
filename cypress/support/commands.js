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

Cypress.Commands.add('login',(loginInfo = 'demoUser', page = "dashboard") =>
{
    cy.visit(URL)
    // load credentials
    cy.fixture(loginInfo).as('userFixture')
    cy.get('@userFixture').then(user => {
        cy.get(userInput)
        .type(user.username)
        cy.get(pwInput)
        .type(user.password+'{enter}')
        cy.url().should('include', page)
    })
    // if we had access to source code we could try to figure out 
    // if the username is valid right now, the user's ifo is 
    //randomized every now and then verify cookies here
})