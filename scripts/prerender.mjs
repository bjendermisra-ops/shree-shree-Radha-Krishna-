import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {dirname} from 'node:path';
import {render,pages,seoLocales,localizedUrl,getPageArtwork} from '../.prerender/entry-server.js';
import {siteUrl as base} from '../site.config.mjs';

const languages=['en','hi','mr'];
const locales={en:'en_IN',hi:'hi_IN',mr:'mr_IN'};
const htmlLang={en:'en',hi:'hi',mr:'mr'};
const escapeHtml=value=>String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const escapeXml=escapeHtml;
const template=readFileSync('dist/index.html','utf8');
const canonicalPath=(path,lang)=>localizedUrl(path,lang);
const absolute=(path,lang)=>base+canonicalPath(path,lang);
const accessibleImage=(path)=>base+getPageArtwork(path).src;

const temple={
 '@type':'HinduTemple','@id':base+'/#temple',
 name:'Sri Sri Radha Krishna Chandra Mandir',
 alternateName:[
  'Shree Shree Radha Krishna Chandra Mandir',
  'Shri Shri Radha Krishna Chandra Mandir',
  'Sri Sri Radhakrishna Chandra Mandir',
  'ISKCON 15 Number Hadapsar',
  'ISKCON 15 No Hadapsar Pune',
  '15 Number Radha Krishna Temple Hadapsar',
  'श्री श्री राधा कृष्ण चंद्र मंदिर',
  'श्री श्री राधाकृष्ण चंद्र मंदिर'
 ],
 url:base+'/',
 image:base+'/images/temple.webp',
 logo:{'@type':'ImageObject',url:base+'/brand/temple-logo-512.png',width:512,height:512},
 address:{
  '@type':'PostalAddress',
  streetAddress:'15 Number, Hadapsar',addressLocality:'Pune',
  addressRegion:'Maharashtra',postalCode:'411028',addressCountry:'IN'
 },
 hasMap:'https://www.google.com/maps/search/?api=1&query=Sri+Sri+Radha+Krishnachandra+Mandir+Hadapsar+Pune',
 openingHours:['Mo-Su 04:30-13:00','Mo-Su 16:15-21:00']
};
const website={
 '@type':'WebSite','@id':base+'/#website',
 name:'Sri Sri Radha Krishna Chandra Mandir',
 url:base+'/',
 alternateName:['Shree Shree Radha Krishna Chandra Mandir','Shri Shri Radha Krishna Chandra Mandir','ISKCON 15 Number Hadapsar'],
 inLanguage:['en','hi','mr']
};
const pageType=path=>path==='/temple'?'AboutPage':path==='/contact'?'ContactPage':['/gallery','/aarti','/festivals'].includes(path)?'CollectionPage':'WebPage';
let count=0;
for(const [path,english] of Object.entries(pages)){
 for(const lang of languages){
  const p=lang==='en'?english:seoLocales[lang]?.[path];
  if(!p?.title||!p?.description)throw new Error('Missing localized SEO content for '+lang+' '+path);
  const url=absolute(path,lang);
  const alternates=languages.map(l=>'<link rel="alternate" hreflang="'+(l==='en'?'en-IN':l+'-IN')+'" href="'+absolute(path,l)+'"/>').join('')+
   '<link rel="alternate" hreflang="x-default" href="'+absolute(path,'en')+'"/>';
  const sourceImage=getPageArtwork(path);
  const imgUrl=base+sourceImage.src;
  const graph=[
   temple,website,
   {
    '@type':pageType(path),'@id':url+'#page',url,name:p.title,
    description:p.description,isPartOf:{'@id':base+'/#website'},
    about:{'@id':base+'/#temple'},
    inLanguage:lang,
    primaryImageOfPage:{'@type':'ImageObject',url:imgUrl}
   }
  ];
  if(path!=='/')graph.push({
    '@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:lang==='hi'?'मुख्य पृष्ठ':lang==='mr'?'मुख्यपृष्ठ':'Home',item:absolute('/',lang)},
      {'@type':'ListItem',position:2,name:p.title,item:url}
    ]
  });
  if(path==='/features'||path==='/')graph.push({
    '@type':'MobileApplication',
    name:'Shree Shree Radha Krishna Chandra Mandir',
    operatingSystem:'Android',applicationCategory:'LifestyleApplication',
    installUrl:'https://play.google.com/store/apps/details?id=com.iskcon.hadapsar.santosh.in',
    inLanguage:['en','hi','mr']
  });
  if(path==='/damodar-ashtakam')graph.push({
    '@type':'CreativeWork','@id':url+'#prayer',name:'Sri Damodar Ashtakam',
    alternateName:['Damodarashtakam','Damodarastakam','दामोदर अष्टकम्','दामोदराष्टकम्'],
    inLanguage:['sa','en','hi','mr'],genre:'Devotional hymn',
    url,isAccessibleForFree:true,mainEntityOfPage:{'@id':url+'#page'}
  });
  const head=[
    '<title>'+escapeHtml(p.title)+'</title>',
    '<meta name="description" content="'+escapeHtml(p.description)+'"/>',
    '<link rel="canonical" href="'+url+'"/>',
    alternates,
    '<meta name="robots" content="index,follow,max-image-preview:large"/>',
    '<meta property="og:site_name" content="Sri Sri Radha Krishna Chandra Mandir"/>',
    '<meta property="og:locale" content="'+locales[lang]+'"/>',
    '<meta property="og:type" content="website"/>',
    '<meta property="og:title" content="'+escapeHtml(p.title)+'"/>',
    '<meta property="og:description" content="'+escapeHtml(p.description)+'"/>',
    '<meta property="og:url" content="'+url+'"/>',
    '<meta property="og:image" content="'+imgUrl+'"/>',
    '<meta property="og:image:alt" content="'+escapeHtml(sourceImage.alt[lang])+'"/>',
    '<meta name="twitter:title" content="'+escapeHtml(p.title)+'"/>',
    '<meta name="twitter:description" content="'+escapeHtml(p.description)+'"/>',
    '<meta name="twitter:image" content="'+imgUrl+'"/>',
    '<meta name="twitter:card" content="summary_large_image"/>',
    '<script type="application/ld+json">'+JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')+'</script>'
  ].join('');
  const dest=lang==='en'?(path==='/'?'dist/index.html':'dist'+path+'.html'):(path==='/'?'dist/'+lang+'/index.html':'dist/'+lang+path+'.html');
  mkdirSync(dirname(dest),{recursive:true});
  const markup=template
   .replace('<html lang="en">','<html lang="'+htmlLang[lang]+'">')
   .replace('<!--PAGE_META-->',head)
   .replace('<div id="root"></div>','<div id="root">'+render(path,lang)+'</div>');
  writeFileSync(dest,markup);
  count++;
 }
}

writeFileSync('dist/404.html',template
 .replace('<!--PAGE_META-->','<title>Page not found | Radha Krishna Chandra Mandir</title><meta name="robots" content="noindex"/>')
 .replace('<div id="root"></div>','<div id="root">'+render('/404')+'</div>'));

const sitemapEntries=Object.keys(pages).flatMap(path=>languages.map(lang=>{
 const href=absolute(path,lang);
 const altLinks=languages.map(l=>'<xhtml:link rel="alternate" hreflang="'+(l==='en'?'en-IN':l+'-IN')+'" href="'+escapeXml(absolute(path,l))+'"/>').join('')+
  '<xhtml:link rel="alternate" hreflang="x-default" href="'+escapeXml(absolute(path,'en'))+'"/>';
 return '<url><loc>'+escapeXml(href)+'</loc>'+altLinks+
  '<image:image><image:loc>'+escapeXml(accessibleImage(path))+'</image:loc></image:image></url>';
}));
writeFileSync('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>'+
 '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">'+
 sitemapEntries.join('')+'</urlset>');
writeFileSync('dist/robots.txt','User-agent: *\\nAllow: /\\n\\nSitemap: '+base+'/sitemap.xml\\n');

const guide=`# Sri Sri Radha Krishna Chandra Mandir
15 Number, Hadapsar, Pune 411028. Alternate names: Shree Shree, Shri Shri, Radhakrishna Chandra Mandir, ISKCON 15 Number Hadapsar.

## Visitor information
Morning darshan: 04:30–13:00 IST. Evening: 16:15–21:00 IST. Sunday Feast: 17:00–20:00. Confirm changes for holidays with organisers. This website does not calculate live Ekadashi or parana dates.

## Searchable pages (English, Hindi and Marathi)
${Object.entries(pages).map(([p,v])=>'- ['+v.title+']('+base+p+'): '+v.description).join('\\n')}

Each page has an English route and separate Hindi (/hi) and Marathi (/mr) versions. The linked pages are the authoritative content, not this optional index.
`;
writeFileSync('dist/llms.txt',guide);
console.log('Pre-rendered '+count+' language-specific pages with canonical, hreflang, structured data, images and sitemap.');
