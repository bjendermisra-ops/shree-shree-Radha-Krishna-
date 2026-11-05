import fs from 'node:fs';
import assert from 'node:assert/strict';

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
const fx=fs.readFileSync('src/ExperienceFX.tsx','utf8');
const immersion=fs.readFileSync('src/immersive-experience.css','utf8');
const home=fs.readFileSync('src/CinematicHome.tsx','utf8');
const app=fs.readFileSync('src/App.tsx','utf8');
const entry=fs.readFileSync('src/main.tsx','utf8');
assert(immersion.includes('aspect-ratio:4 / 5'), 'Missing consistent editorial thumbnail ratio');
assert(immersion.includes('object-fit:cover'), 'Card images are not edge-to-edge');
assert(immersion.includes('prefers-reduced-motion:reduce'), 'Immersive animations ignore reduced motion');
assert(immersion.includes('(pointer:coarse)'), 'Touch device cursor override missing');
assert(fx.includes('requestAnimationFrame') && fx.includes('pointermove'), 'Desktop cursor animation missing');
assert(fx.includes('IntersectionObserver') && fx.includes('cin-fx-visible'), 'Automatic viewport-aware motion missing');
assert(home.includes('focus:'), 'Missing portrait focal alignment');
assert(app.includes('<ExperienceFX/>'), 'FX component not included in website');
assert(entry.includes("import './immersive-experience.css';"), 'Immersive CSS not loaded last');
console.log('PASS: 12 locally hosted editorial assets, multilingual festival manifest, responsive breakpoints, artwork framing, desktop cursor and reduced-motion-aware mobile animations.');
