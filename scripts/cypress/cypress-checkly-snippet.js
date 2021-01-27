context('Actions', () => {

  it('checkly snippet test', () => {
    cy.visit('https://app-test.checklyhq.com/')
    cy.get('input[name="email"]').type(Cypress.env('EMAIL'))
    cy.get('input[type="password"]').type(Cypress.env('PASSWORD'))
    cy.get('.auth0-lock-submit').click()

    cy.get('#create-check-button__BV_button_').should('be.visible') 

    cy.get('a[href="/snippets"]').click()
    cy.get('#add-snippet').click()
    cy.get('.col-12 > .form-control').type('BENCHMARK')
    cy.get('.CodeMirror-line').type('console.log("hello world!")')
    cy.get('.view-snippet-editor .btn-success').click()
    cy.get('.octicon > path:nth-child(3)').eq(1).click({ force: true })

    cy.get('.btn-danger').click()

    cy.get('#add-snippet').should('be.visible') 
  })
})