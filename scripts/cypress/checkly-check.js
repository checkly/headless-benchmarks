context('Actions', () => {

  it('checkly test', () => {
    cy.visit('')
    cy.get('input[name="email"]').type(Cypress.env('EMAIL'))
    cy.get('input[type="password"]').type(Cypress.env('PASSWORD'))
    cy.get('.auth0-lock-submit').click()

    cy.get('#create-check-button__BV_button_').click()
    cy.get('.add-api-check-button').click()

    cy.get('.form > .form-section > .form-group > .mb-4:nth-child(1) > .form-control').type('BENCHMARK')
    cy.get('input[placeholder="https://api.example.com/products/"]').type('https://jsonplaceholder.typicode.com/todos/1')
    cy.get('#run-request-button').click()
    cy.get('.modal-content > #run-check-modal__BV_body_ > div > div > .btn').click()
    cy.get('div > .container > .row > .col-sm-12 > .form').click({force: true})
    cy.get('.col-sm-4:nth-child(3) > .list-group > .list-group-item:nth-child(1)').click()
    cy.get('.col-sm-4:nth-child(3) > .list-group > .list-group-item:nth-child(2)').click()

    cy.get('.form-toggle-link').click()
    cy.get('.setup-teardown .form-check-input').first().click()

    cy.get('li[tabindex="0"]').first().click()
    cy.get('li[tabindex="1"]').first().click()

    cy.get('.setup-teardown > .form-section > span > .form-group > .custom-select').select('6395')

    cy.get('.container > .row > .col-sm-12 > .form > .btn').click()

    cy.get('#run-check-modal__BV_body_ > div > div > .text-center > .btn').click()

    cy.get('.home-dash-check-row-title').contains('BENCHMARK').click()
    cy.get('#edit-check-button').click()

    cy.get('.api-check-nav > .container > .nav > .nav-item:nth-child(7) > .nav-link').click()
    cy.get('#delete-check-button').click()
    cy.get('.modal-dialog .btn-danger').click()
    
    cy.get('#create-check-button__BV_button_').should('be.visible') 

  })
})