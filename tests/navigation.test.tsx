import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import App from '../src/App';
let host: HTMLDivElement;
let root: Root;
beforeEach(() => {
  localStorage.setItem('big_trading_language', 'en');
  document.cookie = 'big_trading_language=en;path=/';
  host = document.createElement('div'); document.body.append(host); root=createRoot(host);
});
afterEach(async () => { await act(async()=>root.unmount()); host.remove(); });
async function renderRoute(path:string) {
 await act(async()=>{ root.render(<HelmetProvider><MemoryRouter initialEntries={[path]}><App /></MemoryRouter></HelmetProvider>); });
 await vi.waitFor(async()=>{ await act(async()=>{ await new Promise(resolve=>setTimeout(resolve,20)); }); expect(host.querySelector('main h1, main h2')).not.toBeNull(); });
}
test('direct company route renders verified company profile', async()=>{
 await renderRoute('/about'); expect(host.textContent).toContain('Rikaz Mohamed'); expect(host.textContent).toContain('498-0801');
});
test('navigation changes actual content and resets scroll',async()=>{
 await renderRoute('/about');
 const link=Array.from(host.querySelectorAll('nav a')).find(a=>a.getAttribute('href')==='/contact') as HTMLAnchorElement;
 await act(async()=>link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,button:0})));
 await vi.waitFor(async()=>{await act(async()=>{await new Promise(resolve=>setTimeout(resolve,20));});expect(host.querySelector('#subject')).not.toBeNull();});
 expect(window.scrollTo).toHaveBeenCalledWith(0,0);
});
test('query category filters catalog and preserves direct detail routing',async()=>{
 await renderRoute('/vehicles?category=Excavator');
 const gallery=host.querySelector('#vehicle-gallery')!; expect(gallery).not.toBeNull();
 expect(gallery.querySelectorAll('a[href^="/vehicles/"]').length).toBeGreaterThan(0);
 const all=Array.from(gallery.querySelectorAll('button')).find(b=>b.textContent==='All Vehicles')!;
 const count=gallery.querySelectorAll('a[href^="/vehicles/"]').length;
 await act(async()=>all.click()); expect(gallery.querySelectorAll('a[href^="/vehicles/"]').length).toBeGreaterThan(count);
});
test('Japanese privacy content remains available',async()=>{
 localStorage.setItem('big_trading_language','ja');document.cookie='big_trading_language=ja;path=/';
 await renderRoute('/privacy-policy'); expect(host.querySelector('main')?.textContent).toMatch(/[\u3040-\u30ff]/);
});

test('home keeps the restored hero heading', async()=>{
 await renderRoute('/'); expect(host.querySelector('#hero-title')).toBeNull();
 expect(host.querySelector('main h1')?.textContent).toContain('TRADING');
});
