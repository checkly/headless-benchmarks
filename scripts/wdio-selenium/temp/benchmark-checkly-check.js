const { env } = require('process');

describe('Checkly', () => {
    it('should create and delete a new API check', () => {

        browser.setTimeout({ 'implicit': 15000 })

        browser.url('https://app-test.checklyhq.com/')

        browser.waitUntil(() => $('.auth0-lock-submit').isDisplayed())
        browser.$('input[name="email"]').click()
        browser.$('input[name="email"]').setValue('giovanni+bench@checklyhq.com')
        browser.$('input[type="password"]').click()
        browser.$('input[type="password"]').setValue(process.env.PASSWORD)
        browser.$('.auth0-lock-submit').click()

        browser.$('#create-check-button__BV_button_').click()
        browser.$('.add-api-check-button').click()
        browser.$('.form > .form-section > .form-group > .mb-4:nth-child(1) > .form-control').setValue('BENCHMARK')
        browser.$('.form-group > .mb-4 > .input-tags > .type-ahead > .form-control').setValue('benchmark')
        browser.$('input[placeholder="https://api.example.com/products/"]').setValue('https://jsonplaceholder.typicode.com/todos/1')
        browser.$('.form-group #run-request-button').click()
        browser.$('.modal-content > #run-check-modal__BV_body_ > div > div > .btn').click()
        browser.$('div > .container > .row > .col-sm-12 > .form').click()
        browser.$('.form-group > .row > .col-sm-4:nth-child(3) > .list-group > .list-group-item:nth-child(1)').click()
        browser.$('.form-group > .row > .col-sm-4:nth-child(3) > .list-group > .list-group-item:nth-child(2)').click()
       
        browser.execute(() => {
            document.querySelector('.form-toggle-link').click()
        });

        browser.execute(() => {
            document.querySelector('.setup-teardown .form-check-input').click();
        });
        
        browser.$('li[tabindex="0"]').scrollIntoView()
        browser.waitUntil(() => $('li[tabindex="0"]').isDisplayed())
        browser.execute(() => {
            document.querySelector('li[tabindex="0"]').click();
            document.querySelector('li[tabindex="1"]').click();
        });

        browser.$('.setup-teardown > .form-section > span > .form-group > .custom-select').click()
        browser.$('.setup-teardown .custom-select option[value="74"]').click()
        browser.$('.container > .row > .col-sm-12 > .form > .btn').click()
        browser.$('#run-check-modal__BV_body_ > div > div > .text-center > .btn').click()

        browser.waitUntil(() => $('.home-dash-check-row-title').isDisplayed())
        browser.execute(() => {
            [...document.querySelectorAll('.home-dash-check-row-title')].find(element => element.textContent.includes('BENCHMARK')).click();
        });

        browser.$('.container #edit-check-button').click()
        browser.$('.api-check-nav > .container > .nav > .nav-item:nth-child(7) > .nav-link').click()
        browser.$('.container #delete-check-button').click()
        browser.$('.modal-dialog .btn-danger').click()
        browser.waitUntil(() => $('.home-dash-check-row-title').isDisplayed())

    });
});



