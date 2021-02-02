context('Actions', () => {

  it('checkly snippet test', () => {
    cy.visit('')
    cy.get('input[name="email"]').type(Cypress.env('EMAIL'))
    cy.get('input[type="password"]').type(Cypress.env('PASSWORD'))
    cy.get('.auth0-lock-submit').click()

    cy.get('#create-check-button__BV_button_').should('be.visible') 

    cy.get('a[href="/alert-settings"]').click()
    cy.get('.mb-3:nth-child(4) > .d-flex > .btn').click()
    cy.get('#add-alert-channels-modal__BV_body_ .btn-no-focus').click()

    cy.get('input[name="email"]').type(Cypress.env('EMAIL'))
 
    cy.get('#add-email-alert-button').click()
    cy.get('.octicon-trash').click({ force: true })
    cy.get('#delete-alert-channel-modal__BV_body_ .btn-danger').click()

    cy.get('.text-uppercase').should('be.visible') 
  })
}) 