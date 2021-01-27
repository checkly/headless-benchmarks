const { chromium } = require("playwright");
const { saveVideo } = require('playwright-video');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const capture = await saveVideo(page, 'recording.mp4');

  await page.goto("https://danube-webshop.herokuapp.com/");

  await page.click("#login");

  await page.type("#n-email", process.env.USER_EMAIL);

  await page.type("#n-password2", process.env.USER_PASSWORD);

  await page.click("#goto-signin-btn");

  await page.waitForSelector("#login-message", { visible: true });

  await page.waitForTimeout(500)

  await capture.stop()
  await browser.close();
})();
