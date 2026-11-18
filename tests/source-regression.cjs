const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const read = p => fs.readFileSync(p,'utf8');
test('real routes and legacy hash compatibility are configured',()=>{
 assert.match(read('src/main.tsx'),/BrowserRouter/);
 assert.match(read('src/main.tsx'),/replaceState/);
 for(const path of ['/vehicles','/about','/contact','/privacy-policy','/terms-of-service','/company-info']) assert.ok(read('src/App.tsx').includes(`path="${path}"`));
 assert.match(read('src/App.tsx'),/window.scrollTo\(0, 0\)/);
});
test('category links carry filters and gallery reads them',()=>{
 assert.doesNotMatch(read('src/data/categories.ts'),/#/);
 assert.match(read('src/components/home/VehicleGallery.tsx'),/params.get\('category'\)/);
});
test('contact draft does not report a simulated delivery',()=>{
 const s=read('src/pages/ContactPage.tsx');assert.match(s,/mailto:bigtradingjp@gmail.com/);assert.doesNotMatch(s,/setTimeout/);
});
test('metric units and corrected profile',()=>{
 assert.doesNotMatch(read('src/data/vehicles.ts'),/mph/);
 assert.match(read('src/pages/VehicleDetailPage.tsx'),/KMT/);
 assert.match(read('src/components/about/BilingualAboutContent.tsx'),/Rikaz Mohamed/);
 assert.match(read('src/contexts/LanguageContext.tsx'),/498-0801/);
});
test('sitemap routes exist and no fictional language subpaths',()=>{
 for(const match of read('public/sitemap.xml').matchAll(/bigtradingjp.com([^<]*)</g))assert.ok(read('src/App.tsx').includes(`path="${match[1]}"`));
 assert.doesNotMatch(read('index.html'),/\/ja\//);
});
