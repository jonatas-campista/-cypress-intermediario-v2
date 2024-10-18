describe('Login', () => {
  beforeEach(() => {
    cy.visit('/users/sign_in');
  });
  it('Login successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })

  it('Error message when typing wrong login and password', () => {
    cy.loginFail('teste','teste')
    cy.get('.flash-alert span')
      .should('be.visible')
      .and('have.text','Invalid Login or password.')
  });

  it('User field validation', () => {
    cy.userValidation('teste');
    cy.get('.gl-field-error') 
      .should('be.visible')  
      .and('contain', 'This field is required.');

  });

  it('Password validation', () => {
    cy.passwordValidation('teste');
    cy.get('.gl-field-error') 
      .should('be.visible')  
      .and('contain', 'This field is required.');

  });

  it('Checking and unchecking remember me', () => {
    cy.get('#user_remember_me')
      .check()
      .should('be.checked')
      .uncheck()
      .should('not.be.checked');
  });

  it('checking Forgot your password', () => {
    cy.get('.float-right a').click()

    cy.get('.nav-link')
      .should('be.visible')
      .and('have.text', 'Reset Password');
  });

})