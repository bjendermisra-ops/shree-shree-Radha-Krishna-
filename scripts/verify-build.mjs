import {readFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
import {siteUrl} from '../site.config.mjs';
import {pages,render} from '../.prerender/entry-server.js';
assert.equal(Object.keys(pages).length,16,'Expected sixteen website routes');
const titles=new Set();
const localizedFiles=[];
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
const sitemap=readFileSync('dist/sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,Object.keys(pages).length*3,'Sitemap must include English, Hindi and Marathi routes');
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

for(const lang of ['hi','mr']){
 for(const path of Object.keys(pages)){
  const file=path==='/'?'dist/'+lang+'/index.html':'dist/'+lang+path+'.html';
  assert(existsSync(file),'Missing '+lang+' page: '+path);
  const html=readFileSync(file,'utf8');
  const url=siteUrl+'/'+lang+(path==='/'?'/':path);
  assert(html.includes('<html lang="'+lang+'">'),file+': language');
  assert(html.includes('<link rel="canonical" href="'+url+'"/>'),file+': canonical');
  assert(html.includes('hreflang="hi-IN"')&&html.includes('hreflang="mr-IN"')&&html.includes('hreflang="en-IN"'),file+': hreflang');
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file+': H1');
  assert(html.includes('<meta name="description"'),file+': description');
  assert(!html.includes('<!--PAGE_META-->'),file+': metadata');
  assert(html.includes('"inLanguage":"'+lang+'"'),file+': JSON-LD language');
  const jsonLd=html.split('<script type="application/ld+json">')[1]?.split('</script>')[0];assert(jsonLd,file+': JSON-LD missing');JSON.parse(jsonLd);
  localizedFiles.push(file);
 }
}
assert.equal(localizedFiles.length,32);
assert(sitemap.includes('hreflang="hi-IN"')&&sitemap.includes('hreflang="mr-IN"')&&sitemap.includes('hreflang="x-default"'));
assert(!sitemap.includes('https://sriradha.vercel.app/'),'Sitemap uses old domain');
console.log('PASS: 48 distinct indexable multilingual documents, canonical + reciprocal hreflang, sitemap and JSON-LD.');
