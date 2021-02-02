const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  
  await page.goto(process.env.URL)

  await page.setViewportSize({ width: 1366, height: 768 })

  await page.waitForSelector('input[name="email"]', { visible: true })
  await page.type('input[name="email"]', process.env.EMAIL)
  await page.type('input[type="password"]', process.env.PASSWORD)
  await page.click('.auth0-lock-submit')
  
  await page.waitForSelector('#create-check-button__BV_button_')
  await page.click('a[href="/alert-settings"]')

  await page.click('.mb-3:nth-child(4) > .d-flex > .btn')
  await page.click('#add-alert-channels-modal__BV_body_ .btn-no-focus')

  await page.type('input[name="email"]', process.env.EMAIL)
  
  await page.click('#add-email-alert-button')
  await page.click('.octicon-trash')
  await page.click('#delete-alert-channel-modal__BV_body_ .btn-danger')
  
  await page.waitForSelector('.text-uppercase', { visible: true })
  
  await browser.close()
})()