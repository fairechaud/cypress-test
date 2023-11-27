const nonvalidLogin = "login"

describe('The authentication page', () => {
  
  it('fails to log in a fake user', () => 
  {
    // pass in fake credentials
    cy.login('fakeUser')
    cy.url().should('include', "login")
  })

  it('shows empty user span', () => 
  {
    cy.emptyUser()
    cy.url().should('include', "login")
    // alert displayed
    cy.get('.oxd-input-group > .oxd-text')
    .should("contain", "Required")
  })

  it('shows empty password span', () => 
  {
    cy.emptyPassword()
    cy.url().should('include', "login")
    // alert displayed
    cy.get('.oxd-input-group > .oxd-text')
    .should("contain", "Required")
  })

  it('lets user know password is wrong', () => 
  {
    cy.login('badPassword')
    // shall not go beyond the login page
    cy.url().should('include', "login")
    // alert displayed
    cy.get('div[role="alert"]')
    .should("contain", "Invalid")
  })
  
  it("is able to reset password", () =>
  {
    cy.forgotPassword()
    cy.url().should("include","Reset")
    cy.get('h6').should("contain","Reset")
    cy.get("input[placeholder='Username']")
    .type("Admin")
    cy.get('.oxd-button--secondary').click()
    cy.get('h6').should("contain","successfully")
  })

  it('logs "Admin" to dashboard', () => {
    cy.login()
    // assert that the dashboard page is shown
    cy.url()
    .should('include', "dashboard")
    // dropdown menu includes 'Logout' option
    cy.get('.oxd-userdropdown-tab').click()
    cy.get(".oxd-userdropdown-link")
    .should("contain","Logout")
  })

  it('logs out succesfully', () => {
    cy.login()
    // assert that the dashboard page is shown
    cy.url()
    .should('include', "dashboard")
    // multiple GET operations in place, 
    // allocate enough time for these to finish
    cy.wait(5000)
    // dropdown menu includes 'Logout' option
    cy.get('.oxd-userdropdown-tab').click()
    cy.get('a:contains("Logout")').first().click()
    // successfull logout
    cy.url().should("include","login")
  })
})

// Figure out a way to access cookies and maintain login session open, 
// otherwise, just execute one test after the other to save time.

context('The recruitment section', () => {
  beforeEach(() => {
    cy.login()
    
  })
  it('loads on screen', () => {
    cy.get('a:contains("Recruitment")')
      .first()
      .click()
    cy.get('h6').should("contain", "Recruitment")
  })

  it('verify buttons are functional', () => {

  })


  it('verify views are correctly displayed', () => {
    
  })

  it('context is maintained through and through', () => {
    
  })
})