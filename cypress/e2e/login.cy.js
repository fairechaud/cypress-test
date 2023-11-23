describe('Login/authentication page', () => {
  it.only('successfully takes demo user to dashboard', () => {
    cy.loginSuccess()
  })

  it('fails to log in a fake user', () => 
  {
    //same as cy.loginSuccess() but pass in fake credentials
  })

  it('displays the user in dropdown', () => {
    
  })
})

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