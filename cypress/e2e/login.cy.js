const nonvalidLogin = "login"

describe('The authentication page', () => {
  
  it('fails to log in a fake user', () => 
  {
    // same as cy.loginSuccess() but pass in fake credentials
    cy.login('fakeUser',nonvalidLogin)
    cy.url().should('include', nonvalidLogin)
  })
  
  it.only('logs Admin to dashboard', () => {
    cy.login()
    // assert that the dashboard page is shown, username shall
    // be in display on the dropdown menu
  })
})

// Figure out a way to access cookies and maintain login session open, 
// otherwise, just execute one test after the other to save time.

context('The recruitment section', () => {
  beforeEach(() => {
    cy.autoLogin()
  })
  it.only('loads on screen', () => {
    cy.get('a:contains("Recruitment")')
      .first()
      .click()
    cy.get('h6')
      .should("contain","Recruitment")
  })

  it('verify buttons are functional', () => {

  })


  it('verify views are correctly displayed', () => {
    
  })

  it('context is maintained through and through', () => {
    
  })
})