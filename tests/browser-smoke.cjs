// Run with Playwright available: node tests/browser-smoke.cjs
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({headless:true, executablePath:process.env.CHROMIUM_PATH || undefined, args:['--no-sandbox']});
 const page = await browser.newPage();
 const errors=[]; page.on('pageerror', e=>errors.push(e.message));
 await page.addInitScript(()=>localStorage.setItem('big_trading_language','en'));
 for(const route of ['/','/about','/company-info','/vehicles','/contact','/privacy-policy','/terms-of-service']) {
  await page.goto('http://localhost:5173'+route); await page.locator('main h1, main h2').first().waitFor();
  assert(!(await page.locator('main').innerText()).includes('Page Not Found'),route);
 }
 await page.goto('http://localhost:5173/#/about'); await page.waitForURL('**/about');
 await page.getByText('Rikaz Mohamed',{exact:false}).first().waitFor();
 await page.goto('http://localhost:5173/vehicles?category=Excavator');
 await page.locator('#vehicle-gallery').waitFor();
 await page.getByRole('button',{name:'All Vehicles',exact:true}).click();
 assert(!page.url().includes('category='));
 await page.goto('http://localhost:5173/vehicles/1'); await page.locator('main h1').waitFor();
 assert(!(await page.locator('main').innerText()).includes('mph'));
 await page.goto('http://localhost:5173/about');
 await page.locator('main h1').waitFor();
 await page.evaluate(()=>window.scrollTo(0,1000));
 await page.locator('nav').getByRole('link',{name:'Contact',exact:true}).click();
 await page.waitForURL('**/contact'); await page.locator('#subject').waitFor();
 assert.equal(await page.evaluate(()=>window.scrollY),0);
 await page.evaluate(()=>localStorage.setItem('big_trading_language','ja'));
 await page.reload(); await page.locator('#subject').waitFor();
 assert((await page.locator('#subject').innerText()).includes('件名'));
 await page.goto('http://localhost:5173/privacy-policy'); await page.locator('main h1').waitFor();
 assert(/[\u3040-\u30ff]/.test(await page.locator('main').innerText()));
 assert.deepEqual(errors,[]); await page.screenshot({path:'/tmp/big-japanese.png',fullPage:true});
 await browser.close(); console.log('PASS: direct routes, legacy URL, category filters, metric units, navigation/scroll, Japanese contact/privacy, zero runtime errors');
})().catch(e=>{console.error(e);process.exit(1)});
