const { env } = require('process');

describe('Checkly', () => {
    it('should create and delete a new alert channel', () => {

        browser.setTimeout({ 'implicit': 15000 })

        browser.url('https://app-test.checklyhq.com/')

        browser.waitUntil(() => $('.auth0-lock-submit').isDisplayed())
        browser.$('input[name="email"]').click()
        browser.$('input[name="email"]').setValue(process.env.EMAIL)
        browser.$('input[type="password"]').click()
        browser.$('input[type="password"]').setValue(process.env.PASSWORD)
        browser.$('.auth0-lock-submit').click()

        browser.waitUntil(() => $('#create-check-button__BV_button_').isDisplayed())
        browser.$('a[href="/alert-settings"]').click()

        browser.$('.mb-3:nth-child(4) > .d-flex > .btn').click()
        browser.$('#add-alert-channels-modal__BV_body_ .btn-no-focus').click()
      
        browser.$('input[name="email"]').setValue(process.env.EMAIL)
        
        browser.$('#add-email-alert-button').click()
        browser.$('.octicon-trash').click()
        browser.$('#delete-alert-channel-modal__BV_body_ .btn-danger').click()
        
        browser.waitUntil(() => $('.text-uppercase').isDisplayed())

    });
});



