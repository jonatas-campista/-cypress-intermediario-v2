Cypress.Commands.add('login',(
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
) => {
    const login = () =>{
        cy.get("[data-qa-selector='login_field']").type(user);
        cy.get("[data-qa-selector='password_field']").type(password, { log: false });
        cy.get("[data-qa-selector='sign_in_button']").click();
    }
    login();
})

Cypress.Commands.add('loginFail',(user,password) => {
    cy.get("[data-qa-selector='login_field']").type(user);
    cy.get("[data-qa-selector='password_field']").type(password, { log: false });
    cy.get("[data-qa-selector='sign_in_button']").click();
})

Cypress.Commands.add('userValidation',(password) => {
    cy.get("[data-qa-selector='password_field']").type(password, { log: false });
    cy.get("[data-qa-selector='sign_in_button']").click();
})

Cypress.Commands.add('passwordValidation',(user) => {
    cy.get("[data-qa-selector='login_field']").type(user);
    cy.get("[data-qa-selector='sign_in_button']").click();
})

Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
  })