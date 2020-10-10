import puppeteer from 'puppeteer'
// import delay from 'delay'
import cheerio from 'cheerio'
import { render } from './render'

async function run(url: string) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  // await delay(3000)
  const html = await page.$eval('body', (body) => body.outerHTML)
  const $ = cheerio.load(html)
  const text = render($('body').text()!)

  console.log(text)

  await browser.close()
}

run(process.argv[2])
