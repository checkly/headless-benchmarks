const { env } = require('process');

describe('Checkly', () => {
    it('should create and delete a new snippet', () => {

        browser.setTimeout({ 'implicit': 15000 })

        browser.url('https://app-test.checklyhq.com/')

        browser.waitUntil(() => $('input[name="email"]').isDisplayed())
        browser.$('input[name="email"]').click()
        browser.$('input[name="email"]').setValue('giovanni+bench@checklyhq.com')
        browser.$('input[type="password"]').click()
        browser.$('input[type="password"]').setValue(process.env.EMAIL)
        browser.$('.auth0-lock-submit').click()

        browser.$('#create-check-button__BV_button_').click()
        browser.$('a[href="/snippets"]').click()

        browser.$('#add-snippet').click()
        browser.$('.col-12 > .form-control').setValue('BENCHMARK')

        browser.$('.CodeMirror-line').click()
        browser.$('.CodeMirror-line').setValue('console.log("hello world!")')
        browser.$('.btn-success').click()

        browser.waitUntil(() => $('.octicon-trash').isDisplayed())
        const trashButtons = browser.$$('.octicon-trash')
        trashButtons[1].click({ force: true })

        browser.waitUntil(() => $('.octicon-trash').isDisplayed())
        browser.$('.btn-danger').click()
        browser.waitUntil(() => $('.octicon-trash').isDisplayed({ reverse: true }))

    });
});



