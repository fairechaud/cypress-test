describe('Login/authentication page', () => {
  
  it('fails to log in a fake user', () => 
  {
    // same as cy.loginSuccess() but pass in fake credentials
    cy.login('fakeUser')
  })
  
  it('successfully takes demo user to dashboard', () => {
    cy.login()
    // assert that the dashboard page is shown, username shall
    // be in display on the dropdown menu
  })
})

// Figure out a way to access cookies and maintain login session open, 
// otherwise, just execute one test after the other to save time.

context('Access the recruitment section', () => {
  it('verify stuff is displayed on screen', () => {


  })

  it('verify buttons are functional', () => {

  })


  it('verify views are correctly displayed', () => {
    
  })

  it('context is maintained through and through', () => {
    
  })
})