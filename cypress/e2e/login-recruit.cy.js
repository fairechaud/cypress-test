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

context.only('The recruitment section', () => {
  beforeEach(() => {
    cy.login()
    cy.get('a:contains("Recruitment")')
    .first()
    .click()
    
  })
  it('loads on screen', () => {
    cy.get('h6').should("contain", "Recruitment")
  })
  /*
  it.only('deletes all vacancies', () => {
    cy.get('a:contains("Vacancies")').
    first()
    .click()
    cy.get('h5').should("contain","Vacancies")
    cy.get('.orangehrm-horizontal-padding > .oxd-text').invoke('text')
    .as("records").then((x)=>{
    const number = x.match(/([^()]+)/)
    for (let i = 1; i <= number; i += 1) {    // nth-child is 1-based not 0-based
      cy.get(':nth-child(${i}) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon')  
      .first()  
      .click()
    }
    })
    cy.get("@records").should("contain", "0")
    
  })
  */

  it('adds and finds a candidate', () => {
    // click on add candidate
    // use search function
    // type the test candidate first name
    // assert hint suggestion
    // click on search
    // assert (1) candidate found

  })

  it('adds and finds a vacancy' , () => {
    // click on add vacancy
    // fill in information
    // get current username
    // verify vacancy is posted in https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.html
    // search for username's positions
    // at least 1 vacancy found in the results
  })


  it('deletes a candidate', () => {
    
  })

  it('deletes a vacancy', () => {
    
  })

  it('edits a candidate', () => {

  })

  it('edits a vacancy', () => {
    
  })
})