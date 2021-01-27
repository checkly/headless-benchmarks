const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto('https://app-test.checklyhq.com/')
  
  await page.waitForSelector('input[name="email"]', { visible: true })
  await page.type('input[name="email"]', process.env.EMAIL)
  await page.type('input[type="password"]', process.env.PASSWORD)
  await page.click('.auth0-lock-submit')
  
  await page.waitForSelector('#create-check-button__BV_button_')
  await page.click('a[href="/snippets"]')

  await page.waitForSelector('#add-snippet')
  await page.click('#add-snippet')
  
  await page.waitForSelector('.col-12 > .form-control')
  await page.type('.col-12 > .form-control', 'BENCHMARK')

  await page.waitForSelector('.CodeMirror-line')
  await page.click('.CodeMirror-line')
  await page.type('.CodeMirror-line', 'console.log("hello world!")')
  
  await page.waitForSelector('.view-snippet-editor .btn-success')
  await page.click('.view-snippet-editor .btn-success')
  
  await page.waitForSelector('.octicon-trash', {visible:true})
  const trashButtons = await page.$$('.octicon-trash')
  trashButtons[1].click({ force: true }),
  
  await page.waitForSelector('.modal.fade.show', { visible: true })
  await page.click('.btn-danger')
  await page.waitForSelector('.modal.fade.show', { hidden: true })
  
  await browser.close()
})()