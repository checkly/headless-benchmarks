const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({})
  const page = await browser.newPage()
  
  await page.goto(process.env.URL)

  await page.setViewport({ width: 1366, height: 768 })

  await page.waitForSelector('input[name="email"]', { visible: true })
  await page.type('input[name="email"]', process.env.EMAIL)
  await page.type('input[type="password"]', process.env.PASSWORD)
  await page.click('.auth0-lock-submit')
  
  await page.waitForSelector('#create-check-button__BV_button_')
  await page.click('a[href="/alert-settings"]')

  await page.waitForSelector('.mb-3:nth-child(4) > .d-flex > .btn')
  await page.click('.mb-3:nth-child(4) > .d-flex > .btn')
  
  await page.waitForSelector('#add-alert-channels-modal__BV_body_ .btn-no-focus')
  await page.click('#add-alert-channels-modal__BV_body_ .btn-no-focus')

  await page.waitForSelector('input[name="email"]')
  await page.type('input[name="email"]', process.env.EMAIL)
  
  await page.waitForSelector('#add-email-alert-button')
  await page.click('#add-email-alert-button')
  
  await page.waitForSelector('.octicon-trash')
  await page.click('.octicon-trash')
  
  await page.waitForSelector('#delete-alert-channel-modal__BV_body_ .btn-danger')
  await page.click('#delete-alert-channel-modal__BV_body_ .btn-danger')
  
  await page.waitForSelector('.text-uppercase', { visible: true })
  
  await browser.close()
})()