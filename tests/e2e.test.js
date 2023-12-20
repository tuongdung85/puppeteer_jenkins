const puppeteer = require('puppeteer');
const expect = require('chai').expect;
describe('Section 3 Test', () => {
    let browser;
    let page;
before(async function() {
    browser = await puppeteer.launch({
        headless: false,
        slowMo:10,
        devtools: false
})
    page = await browser.newPage();
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(20000);
})
after (async function() {
    await browser.close();
})

beforeEach( async function() {
    //run before each test step 
})

afterEach(async function() {
    //run after each test step 
})

    it('Shoule submit form', async () => {
        await page.goto("https://devexpress.github.io/testcafe/example/");  
        await page.waitForXPath('//h1');      
        await page.type('#developer-name', 'mike');
        await page.click('#tried-test-cafe', {clickCount: 2, delay:1000});
        await page.click("#submit-button");
        await page.waitForSelector(".result-content", {hidden:true, timeout: 5000});
        // const title = await page.title()
        // const url = await page.url()
        // const text = await page.$eval("h1", Element => Element.textContent);
        // const count = await page.$$eval("p", Element => Element.length);
        // expect(title).to.a('string', 'Thank you!');
        // expect(url).to.include('example');
        // expect(text).to.a('string', 'Thank you');
        // expect(count).to.equal(1);

        // console.log('TITLE: ' + title);
        // console.log('URL: '+ url);
        // console.log('TEXT: '+ text);
        // console.log('count: '+ count);
        // await new Promise(function(resolve) {setTimeout(resolve, 1000)});
    });
    it('Shoule select value form selectbox', async () => {
        await page.goto("https://devexpress.github.io/testcafe/example/");  
        await page.waitForSelector('#main-form');
        await page.select('#preferred-interface', 'JavaScript API');
    });
});
