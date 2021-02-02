context('danube', () => {

    it('checkly snippet test', () => {
      cy.visit('https://danube-webshop.herokuapp.com/')
      cy.get('#login').click()
      cy.get('#n-email').type(Cypress.env('USER_EMAIL'))
      cy.get('#n-password2').type(Cypress.env('USER_PASSWORD'))
  
      cy.get('#goto-signin-btn').click()

      cy.get('#login-message').should('be.visible') 
    })
})