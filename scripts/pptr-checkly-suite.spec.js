const puppeteer = require('puppeteer');

let browser
let page
let url
let email
let password
let snippetId

beforeAll(async () => {
  email = process.env.EMAIL
  password = process.env.PASSWORD
  snippetId = process.env.SNIPPET_ID
  url = process.env.URL
})

beforeEach(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
  await page.goto(url)
})

describe('Checkly Tests', () => {

  test('Creates alert',async () => {
    
    await page.setViewport({ width: 1366, height: 768 })

    await page.waitForSelector('input[name="email"]', { visible: true })
    await page.type('input[name="email"]', email)
    await page.type('input[type="password"]', password)
    await page.click('.auth0-lock-submit')

    await page.waitForSelector('#create-check-button__BV_button_')
    await page.click('a[href="/alert-settings"]')

    await page.waitForSelector('.mb-3:nth-child(4) > .d-flex > .btn')
    await page.click('.mb-3:nth-child(4) > .d-flex > .btn')

    await page.waitForSelector('#add-alert-channels-modal__BV_body_ .btn-no-focus')
    await page.click('#add-alert-channels-modal__BV_body_ .btn-no-focus')

    await page.waitForSelector('input[name="email"]')
    await page.type('input[name="email"]', email)

    await page.waitForSelector('#add-email-alert-button')
    await page.click('#add-email-alert-button')

    await page.waitForSelector('.octicon-trash')
    await page.click('.octicon-trash')

    await page.waitForSelector('#delete-alert-channel-modal__BV_body_ .btn-danger')
    await page.click('#delete-alert-channel-modal__BV_body_ .btn-danger')

    await page.waitForSelector('.text-uppercase', { visible: true })
    
  }, 60000)

  test('Creates snippet',async () => {

    await page.waitForSelector('input[name="email"]', { visible: true })
    await page.type('input[name="email"]', email)
    await page.type('input[type="password"]', password)
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
    
    await page.waitForSelector('.octicon-trash', { visible:true })
    const trashButtons = await page.$$('.octicon-trash')
    trashButtons[1].click({ force: true }),
    
    await page.waitForSelector('.modal.fade.show', { visible: true })
    await page.click('.btn-danger')
    await page.waitForSelector('.modal.fade.show', { hidden: true })
    
  }, 60000)

  test('Creates check',async () => {
      
      await page.setViewport({ width: 1920, height: 1080 })
    
      await page.waitForSelector('input[name="email"]', { visible: true })
      await page.type('input[name="email"]', email)
      await page.type('input[type="password"]', password)
      await page.click('.auth0-lock-submit')
      
      await page.waitForSelector('#create-check-button__BV_button_')
      await page.click('#create-check-button__BV_button_')
      
      await page.waitForSelector('.add-api-check-button')
      await page.click('.add-api-check-button')
      
      await page.waitForSelector('.form > .form-section > .form-group > .mb-4:nth-child(1) > .form-control')
      await page.type('.form > .form-section > .form-group > .mb-4:nth-child(1) > .form-control', 'BENCHMARK')
      
      await page.waitForSelector('.form-group > .mb-4 > .input-tags > .type-ahead > .form-control') 
      await page.type('.form-group > .mb-4 > .input-tags > .type-ahead > .form-control', 'benchmark')
      
      await page.type('input[placeholder="https://api.example.com/products/"]', 'https://jsonplaceholder.typicode.com/todos/1')
      
      await page.waitForSelector('#run-request-button')
      await page.click('#run-request-button')
      
      await page.waitForSelector('#run-check-modal__BV_body_ > div > div > .btn')
      await page.click('#run-check-modal__BV_body_ > div > div > .btn')
      
      await page.waitForSelector('div > .container > .row > .col-sm-12 > .form')
      await page.click('div > .container > .row > .col-sm-12 > .form')
      
      await page.waitForSelector('.col-sm-4:nth-child(3) > .list-group > .list-group-item:nth-child(1)')
      await page.click('.col-sm-4:nth-child(3) > .list-group > .list-group-item:nth-child(1)')
      
      await page.waitForSelector('.col-sm-4:nth-child(3) > .list-group > .list-group-item:nth-child(2)')
      await page.click('.col-sm-4:nth-child(3) > .list-group > .list-group-item:nth-child(2)')
      
      await page.waitForSelector('.form-toggle-link', { visible: true })
      await page.evaluate(() => {
        document.querySelector('.form-toggle-link').click();
      });
      
      await page.waitForSelector('.setup-teardown .form-check-input', { visible: true })
      await page.evaluate(() => {
        document.querySelector('.setup-teardown .form-check-input').click();
      });
    
      await page.waitForSelector('li[tabindex="0"]')
      await page.evaluate(() => {
        document.querySelector('li[tabindex="0"]').click();
        document.querySelector('li[tabindex="1"]').click();
      });
    
      await page.waitForSelector('.setup-teardown > .form-section > span > .form-group > .custom-select')
      await page.click('.setup-teardown > .form-section > span > .form-group > .custom-select')
      
      await page.select('.setup-teardown > .form-section > span > .form-group > .custom-select', snippetId)
      
      await page.waitForSelector('.container > .row > .col-sm-12 > .form > .btn', {visible: true})
      await page.evaluate(() => {
        document.querySelector('.container > .row > .col-sm-12 > .form > .btn').click();
      });
      
      await page.waitForSelector('#run-check-modal__BV_body_ > div > div > .text-center > .btn')
      await page.click('#run-check-modal__BV_body_ > div > div > .text-center > .btn')
    
      await page.waitForSelector('div.home-dash-check-row-title')
      await page.evaluate(() => {
        [...document.querySelectorAll('.home-dash-check-row-title')].find(element => element.textContent.includes('BENCHMARK')).click();
      });
    
      await page.waitForSelector('#edit-check-button')
      await page.click('#edit-check-button')
    
      await page.waitForSelector('.api-check-nav > .container > .nav > .nav-item:nth-child(7) > .nav-link')
      await page.click('.api-check-nav > .container > .nav > .nav-item:nth-child(7) > .nav-link')
    
      await page.waitForSelector('.container #delete-check-button')
      await page.click('.container #delete-check-button')
      
      await page.waitForSelector('.modal-dialog .btn-danger')
      await page.click('.modal-dialog .btn-danger')
    
      await page.waitForSelector('.modal-dialog .btn-danger', {hidden: true})
    
    }, 60000)

  })

  afterEach(async () => {
    await browser.close()
  })
  