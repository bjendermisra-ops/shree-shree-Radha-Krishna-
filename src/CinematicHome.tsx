
import {useState} from 'react';
import {ArrowRight,ArrowUpRight,BookOpen,CalendarDays,Check,ChevronRight,Clock,Flame,Flower2,GraduationCap,Heart,MapPin,Music2,Smartphone,Sun,Users,Image as ImageIcon} from 'lucide-react';
import {PLAY,MAP,features,languageIndex} from './content';
import type {SiteLang} from './Palace';

/**
 * Visual direction: user-approved cinematic mobile + desktop references.
 * Actual temple deity image and app captures are reused from public/images.
 * Illustrative festival imagery is not represented as a photograph of the mandir.
 */
const translations:Record<SiteLang,Record<string,string>>={
  en:{
    place:'15 NUMBER · HADAPSAR · PUNE',brand:'SRI SRI RADHA KRISHNA CHANDRA MANDIR',
    title1:'Sri Sri',title2:'Radha Krishna',title3:'Chandra Mandir',
    tagline:'Devotion · Community · Darshan',
    intro:'A sacred place for darshan, prayer and connection in the heart of Hadapsar, Pune.',
    visit:'Come for Darshan',app:'Get the Temple App',
    navTitle:'Your path to devotion',navSubtitle:'Everything meaningful, just a tap away.',
    darshan:'Daily Darshan',ekadashi:'Ekadashi Planner',prayers:'Prayers & Mantras',festivals:'Festivals & Events',community:'Community & Seva',appShort:'Temple App',
    festivalTag:'KARTIK · DEVOTIONAL READING',festivalTitle:'Sri Damodar Ashtakam',festivalDesc:'Eight beautiful prayers remembering Krishna, lovingly bound by Mother Yashoda. Read in Devanagari or transliteration.',
    festivalCta:'Read the eight verses',festivalNote:'A timeless reading for the sacred month',
    today:'At the Mandir',todaySub:'Plan a peaceful visit',schedule:'Daily darshan schedule',morning:'Morning darshan',evening:'Evening darshan',timeNote:'Pune local time (IST). Times may change for festivals.',scheduleCta:'View full schedule',
    featureTag:'EXPLORE THE TEMPLE',featureTitle:'A place for every moment.',featureIntro:'From your first visit to a lifelong spiritual journey—discover what brings you closer.',
    seeMore:'Explore',feat1:'Prayers & Aarti',feat1sub:'Sacred verses for every day',feat2:'Ekadashi & Festivals',feat2sub:'Sacred dates, thoughtfully planned',feat3:'Learn & Grow',feat3sub:'Wisdom for every generation',
    feat4:'Seva & Community',feat4sub:'Come together in devotion',feat5:'Devotional Gallery',feat5sub:'Moments and artistic inspiration',feat6:'Sunday Feast',feat6sub:'Kirtan, katha and prasadam',
    devotional:'A moment to remember',devotionalSub:'Let the day slow down.',devotionalDesc:'Discover the joy of Krishna consciousness through prayer, sacred celebrations and time spent together.',
    pocketTag:'THE OFFICIAL TEMPLE ANDROID APP',pocketTitle:'The Mandir, always close.',pocketDesc:'Darshan, prayers, Ekadashi, learning and devotional tools in one welcoming companion.',
    actual:'ACTUAL ANDROID APP SCREEN',download:'Download on Google Play',
    sundayTag:'EVERY SUNDAY · 5 PM–8 PM',sundayTitle:'Your place is here.',sundayDesc:'Bring your family. Share kirtan, katha, maha aarti and prasadam with the temple community.',
    sundayCta:'Explore Sunday Feast',directions:'Get Directions',closing:'Hare Krishna · Hare Krishna'
  },
  hi:{
    place:'15 नंबर · हडपसर · पुणे',brand:'श्री श्री राधा कृष्ण चंद्र मंदिर',
    title1:'श्री श्री',title2:'राधा कृष्ण',title3:'चंद्र मंदिर',
    tagline:'भक्ति · समुदाय · दर्शन',
    intro:'हडपसर, पुणे में दर्शन, प्रार्थना और भक्तों से जुड़ने का आपका अपना पावन स्थान।',
    visit:'दर्शन के लिए आएँ',app:'मंदिर ऐप डाउनलोड करें',
    navTitle:'भक्ति की अपनी राह',navSubtitle:'सब कुछ एक ही जगह, सहज और सुंदर।',
    darshan:'दैनिक दर्शन',ekadashi:'एकादशी कैलेंडर',prayers:'आरती और मंत्र',festivals:'उत्सव एवं कार्यक्रम',community:'समुदाय और सेवा',appShort:'मंदिर ऐप',
    festivalTag:'कार्तिक · भक्ति पाठ',festivalTitle:'श्री दामोदर अष्टकम्',festivalDesc:'माता यशोदा के प्रेम में बँधे श्रीकृष्ण की आठ मनमोहक प्रार्थनाएँ। देवनागरी या रोमन लिपि में पढ़ें।',
    festivalCta:'आठों श्लोक पढ़ें',festivalNote:'पवित्र कार्तिक मास का सुंदर स्मरण',
    today:'मंदिर में दर्शन',todaySub:'अपनी यात्रा की योजना बनाएँ',schedule:'दैनिक दर्शन का समय',morning:'प्रातः दर्शन',evening:'सायं दर्शन',timeNote:'पुणे का स्थानीय समय। उत्सव पर समय बदल सकता है।',scheduleCta:'पूरा समय देखें',
    featureTag:'मंदिर की जानकारी',featureTitle:'भक्ति के हर पल के लिए।',featureIntro:'पहली यात्रा से लेकर जीवन भर की साधना तक—यहाँ अपने मन का अनुभव पाएँ।',
    seeMore:'और जानें',feat1:'आरती एवं प्रार्थना',feat1sub:'प्रतिदिन के पवित्र पाठ',feat2:'एकादशी और उत्सव',feat2sub:'पवित्र तिथियों की जानकारी',feat3:'सीखें और बढ़ें',feat3sub:'हर पीढ़ी के लिए आध्यात्मिक ज्ञान',
    feat4:'सेवा और समुदाय',feat4sub:'मिलकर भक्ति का आनंद',feat5:'भक्ति चित्र गैलरी',feat5sub:'सुंदर चित्र और स्मृतियाँ',feat6:'रविवार उत्सव',feat6sub:'कीर्तन, कथा और प्रसाद',
    devotional:'एक पावन क्षण',devotionalSub:'मन को शांति दें।',devotionalDesc:'प्रार्थना, पवित्र उत्सव और भक्त समुदाय के साथ कृष्ण भक्ति का आनंद लें।',
    pocketTag:'मंदिर का एंड्रॉइड ऐप',pocketTitle:'मंदिर से हर पल जुड़े रहें।',pocketDesc:'दर्शन, प्रार्थना, एकादशी, शिक्षा और भक्ति के साधन एक ही ऐप में।',
    actual:'वास्तविक एंड्रॉइड ऐप स्क्रीन',download:'Google Play से डाउनलोड करें',
    sundayTag:'हर रविवार · शाम 5–8 बजे',sundayTitle:'आपका हार्दिक स्वागत है।',sundayDesc:'परिवार के साथ आएँ। कीर्तन, कथा, महाआरती और महाप्रसाद का आनंद लें।',
    sundayCta:'रविवार उत्सव देखें',directions:'रास्ता देखें',closing:'हरे कृष्ण · हरे कृष्ण'
  },
  mr:{
    place:'15 नंबर · हडपसर · पुणे',brand:'श्री श्री राधा कृष्ण चंद्र मंदिर',
    title1:'श्री श्री',title2:'राधा कृष्ण',title3:'चंद्र मंदिर',
    tagline:'भक्ती · समुदाय · दर्शन',
    intro:'हडपसर, पुणे येथे दर्शन, प्रार्थना आणि भक्तांच्या सहवासासाठी आपले पवित्र स्थान.',
    visit:'दर्शनासाठी या',app:'मंदिर ॲप डाउनलोड करा',
    navTitle:'भक्तीची आपली वाट',navSubtitle:'सर्व काही एकाच ठिकाणी, सहज आणि सुंदर.',
    darshan:'दैनिक दर्शन',ekadashi:'एकादशी दिनदर्शिका',prayers:'आरती आणि मंत्र',festivals:'उत्सव व कार्यक्रम',community:'समुदाय व सेवा',appShort:'मंदिर ॲप',
    festivalTag:'कार्तिक · भक्तिपाठ',festivalTitle:'श्री दामोदर अष्टकम्',festivalDesc:'माता यशोदेच्या प्रेमाने बद्ध झालेल्या श्रीकृष्णाच्या आठ सुंदर प्रार्थना. देवनागरी किंवा रोमन लिपीत वाचा.',
    festivalCta:'आठही श्लोक वाचा',festivalNote:'पवित्र कार्तिक मासाची आठवण',
    today:'मंदिरातील दर्शन',todaySub:'आपल्या भेटीचे नियोजन करा',schedule:'दैनिक दर्शन वेळापत्रक',morning:'सकाळचे दर्शन',evening:'सायंकाळचे दर्शन',timeNote:'पुण्याची स्थानिक वेळ. उत्सवात बदल शक्य आहेत.',scheduleCta:'पूर्ण वेळापत्रक',
    featureTag:'मंदिराची ओळख',featureTitle:'भक्तीच्या प्रत्येक क्षणासाठी.',featureIntro:'पहिल्या भेटीपासून आयुष्यभराच्या साधनेपर्यंत—आपला अनुभव शोधा.',
    seeMore:'अधिक जाणून घ्या',feat1:'आरती व प्रार्थना',feat1sub:'दररोजचे पवित्र पाठ',feat2:'एकादशी व उत्सव',feat2sub:'पवित्र दिवसांची माहिती',feat3:'शिका व वाढा',feat3sub:'प्रत्येक पिढीसाठी ज्ञान',
    feat4:'सेवा व समुदाय',feat4sub:'एकत्र भक्तीचा आनंद',feat5:'भक्ती चित्रदालन',feat5sub:'सुंदर चित्रे व आठवणी',feat6:'रविवार उत्सव',feat6sub:'कीर्तन, कथा व प्रसाद',
    devotional:'एक पवित्र क्षण',devotionalSub:'मनाला शांतता द्या.',devotionalDesc:'प्रार्थना, उत्सव आणि भक्तांच्या सहवासातून कृष्णभक्तीचा आनंद अनुभवा.',
    pocketTag:'मंदिराचे अँड्रॉइड ॲप',pocketTitle:'मंदिर सदैव आपल्या जवळ.',pocketDesc:'दर्शन, प्रार्थना, एकादशी, शिक्षण आणि भक्तीची साधने एका ॲपमध्ये.',
    actual:'खऱ्या अँड्रॉइड ॲपचा स्क्रीन',download:'Google Play वरून डाउनलोड करा',
    sundayTag:'दर रविवारी · सायं. 5–8',sundayTitle:'आपले हार्दिक स्वागत!',sundayDesc:'कुटुंबासह या. कीर्तन, कथा, महाआरती आणि महाप्रसादाचा आनंद घ्या.',
    sundayCta:'रविवार उत्सव पाहा',directions:'मार्ग पाहा',closing:'हरे कृष्ण · हरे कृष्ण'
  }
};

const shortcuts=[
  {key:'darshan',href:'/visit',Icon:Flower2},
  {key:'ekadashi',href:'/ekadashi',Icon:CalendarDays},
  {key:'prayers',href:'/aarti',Icon:BookOpen},
  {key:'festivals',href:'/festivals',Icon:Flame},
  {key:'community',href:'/community',Icon:Users},
  {key:'appShort',href:'/features',Icon:Smartphone}
] as const;

const discovery=[
  {title:'feat1',desc:'feat1sub',href:'/aarti',image:'/images/prayers.webp',Icon:BookOpen},
  {title:'feat2',desc:'feat2sub',href:'/festivals',image:'/images/calendar.webp',Icon:CalendarDays},
  {title:'feat3',desc:'feat3sub',href:'/learning',image:'/images/learning.webp',Icon:GraduationCap},
  {title:'feat4',desc:'feat4sub',href:'/seva',image:'/images/reader.webp',Icon:Heart},
  {title:'feat5',desc:'feat5sub',href:'/gallery',image:'/images/devotional-art.webp',Icon:ImageIcon},
  {title:'feat6',desc:'feat6sub',href:'/sunday-feast',image:'/images/sacred-night.webp',Icon:Music2}
] as const;

export function CinematicHome({lang}:{lang:SiteLang}){
 const w=translations[lang];
 const [selected,setSelected]=useState(0);
 const f=features[selected];
 const idx=languageIndex[lang];

 return <div className="cin-root" lang={lang}>
   <section className="cin-hero" aria-labelledby="cin-title">
     <img className="cin-hero-photo" src="/images/temple.webp" width="900" height="675" fetchPriority="high" decoding="async" alt="Sri Sri Radha Krishna Chandra deities at the mandir"/>
     <div className="cin-hero-shade" aria-hidden="true"/>
     <div className="cin-hero-inner wrap">
       <div className="cin-hero-copy">
         <span className="cin-overline"><span className="cin-spark">✧</span> {w.place}</span>
         <h1 id="cin-title"><span>{w.title1}</span><strong>{w.title2}</strong><span>{w.title3}</span></h1>
         <p className="cin-tagline">{w.tagline}</p>
         <p className="cin-intro">{w.intro}</p>
         <div className="cin-buttons">
           <a className="cin-btn cin-btn-gold" href="/visit">{w.visit}<ArrowUpRight size={19}/></a>
           <a className="cin-btn cin-btn-outline" href="/features"><Smartphone size={18}/>{w.app}</a>
         </div>
       </div>
       <div className="cin-hero-side-note" aria-hidden="true">॥ राधे राधे ॥</div>
     </div>
     <div className="cin-hero-bottom" aria-hidden="true"><img src="/visual/ornament-divider.svg" alt=""/></div>
   </section>

   <nav className="cin-shortcuts wrap" aria-label={w.navTitle}>
     {shortcuts.map(({key,href,Icon})=><a href={href} key={href}><Icon size={27} strokeWidth={1.7}/><span>{w[key]}</span></a>)}
   </nav>

   <div className="cin-chant" aria-label={w.closing}><span>✺</span> हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे <span>✺</span> हरे राम हरे राम राम राम हरे हरे <span>✺</span></div>

   <section className="cin-intro-section wrap">
     <div className="cin-intro-heading"><span className="cin-label">{w.navTitle}</span><h2>{w.featureTitle}</h2><p>{w.navSubtitle}</p></div>
     <div className="cin-highlights">
       <a className="cin-damodar cin-focus-card" href="/damodar-ashtakam">
         <img src="/images/sacred-night.webp" width="1100" height="800" loading="lazy" alt="Artistic devotional illustration for Kartik reading"/>
         <span className="cin-focus-dim"/>
         <div className="cin-damodar-copy"><span className="cin-chip"><Flame size={14}/>{w.festivalTag}</span><h3>{w.festivalTitle}</h3><p>{w.festivalDesc}</p><span className="cin-small-cta">{w.festivalCta}<ArrowRight size={17}/></span></div>
       </a>
       <div className="cin-schedule-card">
         <div className="cin-schedule-top"><span className="cin-label"><Clock size={17}/>{w.today}</span><h3>{w.schedule}</h3><p>{w.todaySub}</p></div>
         <div className="cin-schedule-row"><Sun size={23}/><span>{w.morning}</span><strong>4:30 AM – 1 PM</strong></div>
         <div className="cin-schedule-row"><Flame size={23}/><span>{w.evening}</span><strong>4:15 PM – 9 PM</strong></div>
         <p className="cin-disclaimer">{w.timeNote}</p>
         <a className="cin-btn cin-btn-maroon" href="/visit">{w.scheduleCta}<ArrowRight size={18}/></a>
       </div>
       <a className="cin-visit-card" href={MAP}>
         <img src="/images/devotional-art.webp" width="1000" height="700" loading="lazy" alt="Devotional illustrative artwork; not a photograph of the temple exterior"/>
         <span className="cin-visit-overlay"><MapPin size={20}/><strong>{w.directions}</strong><ArrowUpRight size={19}/></span>
       </a>
     </div>
   </section>

   <section className="cin-explore wrap" aria-labelledby="cin-explore-title">
     <div className="cin-heading-row"><div><span className="cin-label">{w.featureTag}</span><h2 id="cin-explore-title">{w.featureTitle}</h2></div><p>{w.featureIntro}</p></div>
     <div className="cin-explore-grid">{discovery.map(({title,desc,href,image,Icon})=><a href={href} className="cin-explore-card" key={href}>
       <div className="cin-explore-photo"><img src={image} alt="" loading="lazy"/><span className="cin-explore-icon"><Icon size={20}/></span></div>
       <div className="cin-explore-copy"><div><h3>{w[title]}</h3><p>{w[desc]}</p></div><span className="cin-round-arrow" aria-label={w.seeMore}><ArrowUpRight size={19}/></span></div>
     </a>)}</div>
   </section>

   <section className="cin-reflection">
     <div className="wrap cin-reflection-grid">
       <div><span className="cin-label">{w.devotional}</span><h2>{w.devotionalSub}</h2><p>{w.devotionalDesc}</p><a href="/temple" className="cin-text-action">{w.seeMore}<ArrowRight size={18}/></a></div>
       <div className="cin-reflection-art"><img src="/images/temple.webp" width="900" height="675" loading="lazy" alt="Darshan of Sri Sri Radha Krishna Chandra"/></div>
     </div>
   </section>

   <section className="cin-app-section wrap" aria-labelledby="cin-app-title">
     <div className="cin-app-head"><span className="cin-label">{w.pocketTag}</span><h2 id="cin-app-title">{w.pocketTitle}</h2><p>{w.pocketDesc}</p></div>
     <div className="cin-app-showcase">
       <div className="cin-app-tabs" role="tablist" aria-label={w.appShort}>{features.map((item,i)=><button key={item.id} id={'cin-tab-'+i} aria-selected={selected===i} aria-controls="cin-feature-panel" role="tab" tabIndex={selected===i?0:-1} onClick={()=>setSelected(i)} onKeyDown={e=>{if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();const next=(i+(e.key==='ArrowDown'?1:-1)+features.length)%features.length;setSelected(next);document.getElementById('cin-tab-'+next)?.focus()}}}><span>0{i+1}</span>{item.name[idx]}<ChevronRight size={18}/></button>)}</div>
       <div className="cin-feature-panel" id="cin-feature-panel" role="tabpanel" aria-labelledby={'cin-tab-'+selected}>
         <div className="cin-feature-copy"><span className="cin-label">{w.actual}</span><h3>{f.title[idx]}</h3><p>{f.description[idx]}</p><ul>{f.points.map((point,i)=><li key={i}><Check size={16}/>{point[idx]}</li>)}</ul><a href={PLAY} className="cin-btn cin-btn-gold">{w.download}<ArrowUpRight size={17}/></a></div>
         <div className="cin-phone-stage"><div className="cin-phone"><span className="cin-phone-camera"/><img key={f.image} src={'/images/'+f.image+'.webp'} width="360" height="780" loading="lazy" alt={f.name[idx]+' actual Android application screenshot'}/></div></div>
       </div>
     </div>
   </section>

   <section className="cin-community-section wrap">
     <div className="cin-sunday">
       <span className="cin-label">{w.sundayTag}</span><h2>{w.sundayTitle}</h2><p>{w.sundayDesc}</p>
       <a className="cin-btn cin-btn-gold" href="/sunday-feast">{w.sundayCta}<ArrowRight size={18}/></a>
     </div>
     <a href="/visit" className="cin-visit-note"><span className="cin-label">{w.today}</span><Flower2 size={40}/><h3>{w.visit}</h3><p>{w.timeNote}</p><span>{w.scheduleCta}<ArrowUpRight size={17}/></span></a>
   </section>

   <div className="cin-final-chant wrap"><Flower2 size={20}/><span>॥ {w.closing} ॥</span><Flower2 size={20}/></div>
 </div>;
}
