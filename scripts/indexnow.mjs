import {readFileSync} from 'node:fs';
import {siteUrl} from '../site.config.mjs';
const {key}=JSON.parse(readFileSync('indexnow.config.json','utf8'));
const sitemap=readFileSync('dist/sitemap.xml','utf8');
const urlList=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
if(!urlList.length||urlList.some(u=>new URL(u).origin!==siteUrl))throw new Error('Build the production sitemap before notifying.');
const body={host:new URL(siteUrl).host,key,keyLocation:`${siteUrl}/${key}.txt`,urlList};
if(!process.argv.includes('--submit')){console.log(JSON.stringify({mode:'dry-run',...body},null,2));console.log('No search engine contacted. Run with --submit after launch when ready.');}
else{
 const proof=await fetch(body.keyLocation,{signal:AbortSignal.timeout(15000)});
 if(!proof.ok||(await proof.text()).trim()!==key)throw new Error('Live IndexNow key verification failed.');
 const response=await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(20000)});
 if(!response.ok)throw new Error(`IndexNow ${response.status}: ${await response.text()}`);
 console.log(`Accepted ${urlList.length} URL notifications (${response.status}). Acceptance does not guarantee crawling, indexing or ranking.`);
}
