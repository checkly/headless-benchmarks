const { env } = require('process');

describe('Danube', () => {
    it('should log in', () => {

        browser.setTimeout({ 'implicit': 15000 })

        browser.url('https://danube-webshop.herokuapp.com/')

        browser.waitUntil(() => $('#login').isDisplayed())
        browser.$('#login').click()
        browser.$('#n-email').setValue(process.env.EMAIL)
        browser.$('#n-password2').setValue(process.env.PASSWORD)
        browser.$('#goto-signin-btn').click()
        browser.waitUntil(() => $('#login-message').isDisplayed())

    });
});


