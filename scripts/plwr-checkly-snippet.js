const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  
  await page.goto(process.env.URL)
  
  await page.waitForSelector('input[name="email"]', { visible: true })
  await page.type('input[name="email"]', process.env.EMAIL)
  await page.type('input[type="password"]', process.env.PASSWORD)
  await page.click('.auth0-lock-submit')
  
  await page.waitForSelector('#create-check-button__BV_button_')
  await page.click('a[href="/snippets"]')

  await page.click('#add-snippet')
  await page.type('.col-12 > .form-control', 'BENCHMARK')

  await page.click('.CodeMirror-line')
  await page.type('.CodeMirror-line', 'console.log("hello world!")')
  await page.click('.btn-success')

  await page.waitForSelector('.octicon-trash', {visible:true})
  const trashButtons = await page.$$('.octicon-trash')
  trashButtons[1].click({ force: true }),
    
  await page.waitForSelector('.modal.fade.show', {state: 'visible'})
  await page.click('.btn-danger')
  await page.waitForSelector('.modal.fade.show', {state: 'hidden'})

  await browser.close()
})()