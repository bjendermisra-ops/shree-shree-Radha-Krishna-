import {readFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
import {siteUrl} from '../site.config.mjs';
import {pages,render} from '../.prerender/entry-server.js';
assert.equal(Object.keys(pages).length,16,'Expected sixteen website routes');
const titles=new Set();
for(const path of Object.keys(pages)){
 const html=readFileSync(path==='/'?'dist/index.html':`dist${path}.html`,'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${path}: exactly one H1`);
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert(title);assert(!titles.has(title));titles.add(title);
 assert(html.includes(`rel="canonical" href="${siteUrl}${path==='/'?'/':path}"`));
 assert(!html.includes('<!--PAGE_META-->'));
 for(const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs))JSON.parse(m[1]);
 for(const m of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)){
  const p=m[1];assert(p==='/'||existsSync('dist'+p)||existsSync('dist'+p+'.html'),`${path}: missing ${p}`);
 }
}
const reader=readFileSync('dist/damodar-ashtakam.html','utf8');assert.equal((reader.match(/id="verse-\d"/g)||[]).length,8);
const sitemap=readFileSync('dist/sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,Object.keys(pages).length);
for(const f of ['index.html','vercel.html'])assert(readFileSync('app/'+f).equals(readFileSync('dist/app/'+f)),`app/${f} was changed`);
assert(readFileSync('dist/404.html','utf8').includes('noindex'));
console.log('PASS: 16 pages, unique titles, canonical URLs, JSON-LD, internal links/assets, 8 verses, sitemap, 404, unchanged app files.');

assert(readFileSync('dist/robots.txt','utf8').includes(siteUrl+'/sitemap.xml'));
for(const path of Object.keys(pages)){const html=readFileSync(path==='/'?'dist/index.html':`dist${path}.html`,'utf8');assert(!/\/images\/rv-/.test(html),`${path}: placeholder artwork remains`);assert(!html.includes('devotional-art.webp')&&!html.includes('sacred-night.webp'),`${path}: generated artwork remains`);}

for(const lang of ['en','hi','mr'])for(const path of Object.keys(pages)){
 const html=render(path,lang);
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${path}/${lang}: heading`);
 assert(!/\/images\/(rv-|devotional-art|sacred-night)/.test(html),`${path}/${lang}: placeholder artwork`);
 for(const m of html.matchAll(/src="(\/images\/[^"?#]+)"/g))assert(existsSync('dist'+m[1]),`${path}/${lang}: missing image ${m[1]}`);
}
console.log('PASS: real imagery and valid headings/assets across all 48 page-language combinations.');
