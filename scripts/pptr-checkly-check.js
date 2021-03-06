const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(process.env.URL)

  await page.waitForSelector('input[name="email"]', { visible: true })
  await page.type('input[name="email"]', process.env.EMAIL)
  await page.type('input[type="password"]', process.env.PASSWORD)
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
  
  await page.select('.setup-teardown > .form-section > span > .form-group > .custom-select', process.env.SNIPPET_ID)
  
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

  await browser.close()

})()