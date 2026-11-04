import {readFileSync,writeFileSync} from 'node:fs';
import {render,pages} from '../.prerender/entry-server.js';
const base='https://sriradha.vercel.app';
const template=readFileSync('dist/index.html','utf8');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const temple={'@type':'HinduTemple','@id':base+'/#temple',name:'Shree Shree Radha Krishna Chandra Mandir',alternateName:['Sri Sri Radha Krishna Chandra Mandir','Shri Shri Radha Krishna Chandra Mandir','श्री श्री राधाकृष्ण चंद्र मंदिर'],url:base+'/',image:base+'/images/temple.webp',address:{'@type':'PostalAddress',streetAddress:'15 Number, Hadapsar',addressLocality:'Pune',addressRegion:'Maharashtra',addressCountry:'IN'},openingHours:['Mo-Su 04:30-13:00','Mo-Su 16:15-21:00']};
for(const [path,p] of Object.entries(pages)){
const url=base+(path==='/'?'/':path);
const graph=[temple,{'@type':'WebSite','@id':base+'/#website',name:'Shree Shree Radha Krishna Chandra Mandir',url:base+'/',inLanguage:'en'},{'@type':'WebPage','@id':url+'#page',url,name:p.title,description:p.description,isPartOf:{'@id':base+'/#website'},about:{'@id':base+'/#temple'}}];
if(path!=='/')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base+'/'},{'@type':'ListItem',position:2,name:p.title,item:url}]});
if(path==='/features'||path==='/')graph.push({'@type':'MobileApplication',name:'Shree Shree Radha Krishna Chandra Mandir',operatingSystem:'Android',applicationCategory:'LifestyleApplication',installUrl:'https://play.google.com/store/apps/details?id=com.iskcon.hadapsar.santosh.in',inLanguage:['en','hi','mr']});
const head=`<title>${esc(p.title)}</title><meta name="description" content="${esc(p.description)}"/><link rel="canonical" href="${url}"/><meta property="og:type" content="website"/><meta property="og:title" content="${esc(p.title)}"/><meta property="og:description" content="${esc(p.description)}"/><meta property="og:url" content="${url}"/><meta property="og:image" content="${base}/images/temple.webp"/><meta property="og:image:alt" content="Sri Sri Radha Krishna deity darshan at the temple"/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')}</script>`;
writeFileSync(path==='/'?'dist/index.html':`dist${path}.html`,template.replace('<!--PAGE_META-->',head).replace('<div id="root"></div>',`<div id="root">${render(path)}</div>`));
}
writeFileSync('dist/404.html',template.replace('<!--PAGE_META-->','<title>Page not found | Radha Krishna Chandra Mandir</title><meta name="robots" content="noindex"/>').replace('<div id="root"></div>',`<div id="root">${render('/404')}</div>`));
const sitemap=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(pages).map(p=>`<url><loc>${base}${p==='/'?'/':p}</loc></url>`).join('')}</urlset>`;
writeFileSync('dist/sitemap.xml',sitemap);
console.log(`Pre-rendered ${Object.keys(pages).length} pages, metadata, structured data, sitemap and 404.`);
