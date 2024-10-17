describe('Logout', () => {
    beforeEach(() => {
      cy.visit('/users/sign_in')
      cy.login()
    })
  
    it('successfully', () => {
      cy.logout()
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })