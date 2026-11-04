import {PLAY} from './content';
import type {SiteLang} from './Palace';

/** Brand-aware linked Google Play badge, not an image fetched from a third party. */
const sub:Record<SiteLang,string>={en:'GET IT ON',hi:'डाउनलोड करें',mr:'डाउनलोड करा'};
export function StoreBadge({lang}:{lang:SiteLang}){
 return <a className="cin-store-badge" href={PLAY} target="_blank" rel="noopener noreferrer" aria-label={sub[lang]+' Google Play'}>
   <svg width="29" height="31" viewBox="0 0 32 36" role="img" aria-label="Google Play" focusable="false">
     <path fill="#43D0DD" d="M3 2.5v31l16-16z"/>
     <path fill="#4DD56C" d="m3 2.5 22 12.8-6 2.2z"/>
     <path fill="#F9BF37" d="M19 17.5 25 15.3l5 2.9-5 2.7z"/>
     <path fill="#EF5970" d="M3 33.5 25 20.9l-6-3.4z"/>
   </svg>
   <span><small>{sub[lang]}</small><strong>Google Play</strong></span>
 </a>;
}
