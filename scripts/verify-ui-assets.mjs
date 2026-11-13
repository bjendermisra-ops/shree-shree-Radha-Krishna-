import fs from 'node:fs';
import assert from 'node:assert/strict';

const faviconSvg=fs.readFileSync('public/favicon.svg','utf8');
const emblemSvg=fs.readFileSync('public/brand/radha-krishna-seal.svg','utf8');
const legacyMark=fs.readFileSync('public/brand/temple-mark.svg','utf8');
assert.equal(faviconSvg,emblemSvg,'favicon.svg must match approved Radha-Krishna emblem');
assert.equal(legacyMark,emblemSvg,'legacy temple-mark.svg must no longer show the old mark');
assert(faviconSvg.includes('data:image/png;base64,'),'Favicon must contain its own artwork with no external dependency');
assert(fs.readFileSync('index.html','utf8').includes('href="/favicon.svg"'),'Site must advertise updated SVG');
assert(fs.statSync('public/favicon-48.png').size>1000,'PNG favicon missing or unexpectedly small');
const media=['gita-chariot.webp','krishna-flute.webp','krishna-moon.webp','lotus-sunrise.webp','prayer-scripture.webp','temple-architecture-art.webp','yamuna-moon.webp','worship-diya.webp','bhagavad-gita-book.webp','puja-thali.webp','tulsi-japa.webp','bal-krishna.webp'];
for(const file of media){
 const path='public/media/'+file;
 assert(fs.existsSync(path),'Missing production media: '+path);
 const b=fs.statSync(path).size;
 assert(b>5_000 && b<550_000,'Unexpected / oversized media asset: '+path+' bytes='+b);
}
const src=['src/CinematicHome.tsx','src/Palace.tsx','src/Royal.tsx','src/MediaLibrary.ts','src/FestivalSpotlight.tsx'];
for(const filename of src){
 const content=fs.readFileSync(filename,'utf8');
 for(const m of content.matchAll(/(?:['"])(\/(?:media|images|visual)\/[A-Za-z0-9_.\/-]+)(?:['"])/g)){
   assert(fs.existsSync('public'+m[1]),filename+' references missing file '+m[1]);
 }
}
const content=JSON.parse(fs.readFileSync('public/content/spotlights.json','utf8'));
assert(Array.isArray(content.items) && content.items.length>0,'Festival CMS manifest missing');
for(const item of content.items){
 assert(item.label?.en && item.label?.hi && item.label?.mr,'Festival label must have 3 languages');
 assert(item.title?.en && item.title?.hi && item.title?.mr,'Festival heading must have 3 languages');
 assert(item.description?.en && item.description?.hi && item.description?.mr,'Festival description must have 3 languages');
 assert(item.cta?.en && item.cta?.hi && item.cta?.mr,'Festival button must have 3 languages');
 assert(fs.existsSync('public'+item.image),'Missing festival image '+item.image);
 if(item.startDate)assert(/^\d{4}-\d{2}-\d{2}$/.test(item.startDate),'Bad festival start date');
 if(item.endDate)assert(/^\d{4}-\d{2}-\d{2}$/.test(item.endDate),'Bad festival end date');
}
const polish=fs.readFileSync('src/production-polish.css','utf8');
for(const breakpoint of [330,375,580,800,1080,1500])assert(polish.includes(String(breakpoint)+'px'),'Missing responsive viewport '+breakpoint);
assert(polish.includes('prefers-reduced-motion'),'Missing reduced-motion support');
assert(polish.includes('.cin-store-badge'),'Missing Google Play badge styles');
const provenance=fs.readFileSync('MEDIA-PROVENANCE.md','utf8');
assert(provenance.includes('not documentary photography'),'Art provenance must be documented');
const home=fs.readFileSync('src/CinematicHome.tsx','utf8');
const app=fs.readFileSync('src/App.tsx','utf8');
const entry=fs.readFileSync('src/main.tsx','utf8');
const editorial=fs.readFileSync('src/editorial.css','utf8');
assert(home.includes('/images/temple.webp'), 'Homepage must retain the original deity photograph');
assert(!home.includes('/media/'), 'Homepage should not introduce illustrative replacement photographs');
assert(!app.includes('<ExperienceFX/>'), 'Retired custom cursor must not intercept the editorial experience');
assert(entry.includes("import './editorial.css';"), 'Approved theme is not loaded');
assert(editorial.includes('prefers-reduced-motion'), 'Theme must respect reduced motion');
console.log('PASS: original temple image, multilingual assets, responsive editorial theme and reduced-motion support.');
