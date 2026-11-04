import {readFileSync,writeFileSync} from 'node:fs';
import {render,pages} from '../.prerender/entry-server.js';
import {siteUrl as base} from '../site.config.mjs';
const template=readFileSync('dist/index.html','utf8');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const temple={'@type':'HinduTemple','@id':base+'/#temple',name:'Shree Shree Radha Krishna Chandra Mandir',alternateName:['Sri Sri Radha Krishna Chandra Mandir','Shri Shri Radha Krishna Chandra Mandir','श्री श्री राधाकृष्ण चंद्र मंदिर','Sri Sri Radhakrishna Chandra Mandir','ISKCON 15 Number Hadapsar'],url:base+'/',image:base+'/images/temple.webp',logo:{'@type':'ImageObject',url:base+'/brand/temple-logo-512.png',width:512,height:512},address:{'@type':'PostalAddress',streetAddress:'15 Number, Hadapsar',addressLocality:'Pune',addressRegion:'Maharashtra',postalCode:'411028',addressCountry:'IN'},hasMap:'https://www.google.com/maps/search/?api=1&query=Sri+Sri+Radha+Krishnachandra+Mandir+Hadapsar+Pune',openingHours:['Mo-Su 04:30-13:00','Mo-Su 16:15-21:00']};
for(const [path,p] of Object.entries(pages)){
const url=base+(path==='/'?'/':path);
const graph=[temple,{'@type':'WebSite','@id':base+'/#website',name:'Shree Shree Radha Krishna Chandra Mandir',url:base+'/',alternateName:['Sri Sri Radha Krishna Chandra Mandir','Shri Shri Radha Krishna Chandra Mandir','ISKCON 15 Number Hadapsar'],inLanguage:['en','hi','mr']},{'@type':path==='/temple'?'AboutPage':path==='/contact'?'ContactPage':['/gallery','/aarti','/festivals'].includes(path)?'CollectionPage':'WebPage','@id':url+'#page',url,name:p.title,description:p.description,isPartOf:{'@id':base+'/#website'},about:{'@id':base+'/#temple'},inLanguage:'en',primaryImageOfPage:{'@type':'ImageObject',url:base+'/images/temple.webp',width:1200,height:901}}];
if(path!=='/')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base+'/'},{'@type':'ListItem',position:2,name:p.title,item:url}]});
if(path==='/features'||path==='/')graph.push({'@type':'MobileApplication',name:'Shree Shree Radha Krishna Chandra Mandir',operatingSystem:'Android',applicationCategory:'LifestyleApplication',installUrl:'https://play.google.com/store/apps/details?id=com.iskcon.hadapsar.santosh.in',inLanguage:['en','hi','mr']});
if(path==='/damodar-ashtakam')graph.push({'@type':'CreativeWork','@id':url+'#prayer',name:'Sri Damodar Ashtakam',alternateName:['Damodarashtakam','Damodarastakam','दामोदर अष्टकम्'],inLanguage:['sa','en'],genre:'Devotional hymn',url,isAccessibleForFree:true,mainEntityOfPage:{'@id':url+'#page'}});
const head=`<title>${esc(p.title)}</title><meta name="description" content="${esc(p.description)}"/><link rel="canonical" href="${url}"/><meta name="robots" content="index,follow,max-image-preview:large"/><meta property="og:site_name" content="Sri Sri Radha Krishna Chandra Mandir"/><meta property="og:locale" content="en_IN"/><meta property="og:type" content="website"/><meta property="og:title" content="${esc(p.title)}"/><meta property="og:description" content="${esc(p.description)}"/><meta property="og:url" content="${url}"/><meta property="og:image" content="${base}/images/temple.webp"/><meta property="og:image:alt" content="Sri Sri Radha Krishna deity darshan at the temple"/><meta name="twitter:title" content="${esc(p.title)}"/><meta name="twitter:description" content="${esc(p.description)}"/><meta name="twitter:image" content="${base}/images/temple.webp"/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')}</script>`;
writeFileSync(path==='/'?'dist/index.html':`dist${path}.html`,template.replace('<!--PAGE_META-->',head).replace('<div id="root"></div>',`<div id="root">${render(path)}</div>`));
}
writeFileSync('dist/404.html',template.replace('<!--PAGE_META-->','<title>Page not found | Radha Krishna Chandra Mandir</title><meta name="robots" content="noindex"/>').replace('<div id="root"></div>',`<div id="root">${render('/404')}</div>`));
const sitemap=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${Object.keys(pages).map(p=>`<url><loc>${base}${p==='/'?'/':p}</loc><image:image><image:loc>${base}/images/temple.webp</image:loc></image:image></url>`).join('')}</urlset>`;
writeFileSync('dist/sitemap.xml',sitemap);
writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
console.log(`Pre-rendered ${Object.keys(pages).length} pages, metadata, structured data, sitemap and 404.`);

const guide=`# Sri Sri Radha Krishna Chandra Mandir

Temple and Android app information for 15 Number, Hadapsar, Pune, Maharashtra 411028, India. Also written Shri Shri or Shree Shree Radha Krishna Chandra Mandir.

Morning darshan: 04:30–13:00 IST. Evening: 16:15–21:00 IST. Sunday Feast: 17:00–20:00. Confirm festival arrangements with organisers. This website does not compute live Ekadashi/parana timings.

## Pages
${Object.entries(pages).map(([p,v])=>`- [${v.title}](${base}${p}): ${v.description}`).join('\n')}

This file is an optional navigation summary, not a ranking directive. Use the linked pages for full information.
`;
writeFileSync('dist/llms.txt',guide);
