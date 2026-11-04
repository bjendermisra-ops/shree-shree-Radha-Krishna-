
import {useEffect,useState} from 'react';
import {ArrowRight,Flame} from 'lucide-react';
import type {SiteLang} from './Palace';

type Languages={en:string;hi:string;mr:string};
type SpotlightItem={
 id:string;enabled:boolean;priority:number;startDate:string|null;endDate:string|null;
 image:string;href:string;artworkType:'illustration'|'verified-photo';
 label:Languages;title:Languages;description:Languages;cta:Languages;
};
type Fallback={label:string;title:string;description:string;cta:string};
function puneDate(){
 const formatter=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'});
 const parts=formatter.formatToParts(new Date());
 const get=(type:string)=>parts.find(x=>x.type===type)?.value||'';
 return [get('year'),get('month'),get('day')].join('-');
}
function isValid(item:SpotlightItem,day:string){
 return !!item && item.enabled===true && (!item.startDate||item.startDate<=day) && (!item.endDate||item.endDate>=day)
   && /^\/images\/[a-zA-Z0-9_./-]+$/.test(item.image)
   && /^\/(?!\/)[a-zA-Z0-9_/#-]+$/.test(item.href)
   && !!item.title?.en && !!item.title?.hi && !!item.title?.mr;
}
export default function FestivalSpotlight({lang,fallback}:{lang:SiteLang;fallback:Fallback}){
 const [item,setItem]=useState<SpotlightItem|null>(null);
 useEffect(()=>{
  const abort=new AbortController();
  fetch('/content/spotlights.json',{cache:'no-cache',signal:abort.signal}).then(r=>r.ok?r.json():null).then(data=>{
   if(!data || !Array.isArray(data.items))return;
   const day=puneDate();
   const selected=(data.items as SpotlightItem[]).filter(x=>isValid(x,day)).sort((a,b)=>(b.priority||0)-(a.priority||0))[0];
   if(selected)setItem(selected);
  }).catch(()=>{});
  return ()=>abort.abort();
 },[]);
 const label=item?.label?.[lang]||fallback.label;
 const title=item?.title?.[lang]||fallback.title;
 const description=item?.description?.[lang]||fallback.description;
 const cta=item?.cta?.[lang]||fallback.cta;
 const image=item?.image||'/images/sacred-night.webp';
 const href=item?.href||'/damodar-ashtakam';
 const alt=item?.artworkType==='verified-photo'?'Verified festival photograph':'Artistic devotional illustration; not a documentary photograph';
 return <a className="cin-damodar cin-focus-card" href={href}>
   <img src={image} width="1100" height="800" loading="lazy" alt={alt}/>
   <span className="cin-focus-dim" aria-hidden="true"/>
   <div className="cin-damodar-copy"><span className="cin-chip"><Flame size={14}/>{label}</span><h3>{title}</h3><p>{description}</p><span className="cin-small-cta">{cta}<ArrowRight size={17}/></span></div>
 </a>;
}
