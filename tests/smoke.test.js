const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('Smoke test', () => {
    it('Load website', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo:10,
            devtools: false
        });
        const page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
        await page.goto("https://devexpress.github.io/testcafe/example/");  
        await page.waitForSelector('#main-form');
        await browser.close();
    });
});
