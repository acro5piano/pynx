const puppeteer = require("puppeteer");
const delay = require("delay");
const cheerio = require("cheerio");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com/search?q=puppeteer");
  // await page.goto("https://example.com");
  await delay(5000);
  const html = await page.$eval("html", (body) => body.outerHTML);
  const $ = cheerio.load(html);
  console.log($.text());

  await browser.close();
})();
