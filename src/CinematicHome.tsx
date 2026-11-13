import {ArrowUpRight,ArrowRight,BookOpen,CalendarDays,Clock,Flower2,Heart,MapPin,Music2,Smartphone,Sun,Moon} from 'lucide-react';
import {MAP} from './content';
import type {SiteLang} from './Palace';
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


const editorialCopy={
 en:{title1:'Shree Shree',title2:'Radha Krishna',title3:'Chandra Mandir',intro:'A sacred space for devotion, darshan and community.',visit:'Plan your visit',about:'Explore the Mandir',explore:'Your everyday connection.',overline:'EXPLORE THE MANDIR',sunday:'Come together in devotion.',sundayText:'Kirtan, katha and prasadam. Every Sunday, 5–8 PM.',read:'A little time for the eternal.',readText:'Pause, read and reflect with the eight prayers of Sri Damodar Ashtakam.',readCta:'Read Damodar Ashtakam',seva:'An offering, made with love.',sevaText:'Find your place in the temple community through service and shared devotion.',sevaCta:'Explore seva',note:'All timings in IST. Festival timings may vary.',caption:'Sri Sri Radha Krishna Chandra',morning:'Morning',evening:'Evening',temple:'15 Number, Hadapsar, Pune',cards:['Join the daily aarti and prayers to deepen your devotion.','Explore sacred dates and prepare for your observance.','Share an evening of kirtan, katha and prasadam.','Keep darshan, prayers and learning close.']},
 hi:{title1:'श्री श्री',title2:'राधा कृष्ण',title3:'चंद्र मंदिर',intro:'दर्शन, प्रार्थना और भक्त समुदाय से जुड़ने का पावन स्थान।',visit:'दर्शन की योजना बनाएँ',about:'मंदिर के बारे में',explore:'हर दिन, भक्ति से जुड़ें।',overline:'मंदिर की जानकारी',sunday:'मिलकर भक्ति का आनंद लें।',sundayText:'कीर्तन, कथा और प्रसाद। हर रविवार, शाम 5–8 बजे।',read:'कुछ पल, प्रभु के नाम।',readText:'श्री दामोदर अष्टकम् की आठ प्रार्थनाओं के साथ पढ़ें, ठहरें और चिंतन करें।',readCta:'दामोदर अष्टकम् पढ़ें',seva:'प्रेम से अर्पित एक सेवा।',sevaText:'सेवा और भक्ति के माध्यम से मंदिर के समुदाय से जुड़ें।',sevaCta:'सेवा की जानकारी',note:'भारतीय समय। उत्सव पर समय बदल सकता है।',caption:'श्री श्री राधा कृष्ण चंद्र',morning:'प्रातः',evening:'सायं',temple:'15 नंबर, हडपसर, पुणे',cards:['आरती और प्रार्थनाओं के साथ दिन को भक्तिमय बनाएँ।','पवित्र तिथियों और व्रत की जानकारी पाएँ।','कीर्तन, कथा और प्रसाद में सम्मिलित हों।','दर्शन, प्रार्थना और शिक्षा अपने साथ रखें।']},
 mr:{title1:'श्री श्री',title2:'राधा कृष्ण',title3:'चंद्र मंदिर',intro:'दर्शन, प्रार्थना आणि भक्तांच्या सहवासासाठी एक पवित्र स्थान.',visit:'दर्शनाचे नियोजन करा',about:'मंदिराची ओळख',explore:'दररोज भक्तीशी जोडा.',overline:'मंदिराची माहिती',sunday:'एकत्र भक्तीचा आनंद घेऊया.',sundayText:'कीर्तन, कथा आणि प्रसाद. दर रविवारी, सायं. 5–8.',read:'काही क्षण, प्रभूच्या नामात.',readText:'श्री दामोदर अष्टकमच्या आठ प्रार्थनांसह वाचन आणि चिंतन करा.',readCta:'दामोदर अष्टकम् वाचा',seva:'प्रेमाने अर्पण केलेली सेवा.',sevaText:'सेवा आणि भक्तीच्या माध्यमातून मंदिराच्या समुदायाशी जोडा.',sevaCta:'सेवेची माहिती',note:'भारतीय वेळ. उत्सवात वेळ बदलू शकते.',caption:'श्री श्री राधा कृष्ण चंद्र',morning:'सकाळ',evening:'सायंकाळ',temple:'15 नंबर, हडपसर, पुणे',cards:['दररोजच्या आरती आणि प्रार्थनेत सहभागी व्हा.','पवित्र दिवस आणि व्रतांची माहिती मिळवा.','कीर्तन, कथा आणि प्रसादाचा आनंद घ्या.','दर्शन, प्रार्थना आणि शिक्षण सदैव जवळ ठेवा.']}
};
export function CinematicHome({lang}:{lang:SiteLang}){
 const w=translations[lang],c=editorialCopy[lang];
 const cards=[{title:w.feat1,href:'/aarti',Icon:BookOpen},{title:w.ekadashi,href:'/ekadashi',Icon:CalendarDays},{title:w.feat6,href:'/sunday-feast',Icon:Music2},{title:w.appShort,href:'/features',Icon:Smartphone}];
 return <div className="editorial-home" lang={lang}>
  <section className="rkc-hero wrap" aria-labelledby="rkc-title">
   <div className="rkc-hero-copy"><span className="rkc-label">{w.place}</span><h1 id="rkc-title"><span>{c.title1}</span><em>{c.title2}</em><span>{c.title3}</span></h1><p>{c.intro}</p><div className="rkc-actions"><a className="rkc-button" href="/visit">{c.visit}<ArrowUpRight size={18}/></a><a className="rkc-button rkc-outline" href="/temple">{c.about}</a></div></div>
   <figure className="rkc-darshan"><div><img src="/images/temple.webp" width="1200" height="901" fetchPriority="high" alt={c.caption}/></div><figcaption><span className="rkc-caption-rule"/>{c.caption}<span className="rkc-caption-rule"/></figcaption></figure>
  </section>
  <section className="rkc-schedule" aria-label={w.schedule}><div className="wrap"><h2><Clock size={19}/>{w.darshan}</h2><p><Sun size={21}/><strong>{c.morning}</strong><span>4:30 AM – 1:00 PM</span></p><p><Moon size={20}/><strong>{c.evening}</strong><span>4:15 PM – 9:00 PM</span></p><a href="/visit" aria-label={w.scheduleCta}><ArrowRight size={24}/></a></div></section>
  <section className="wrap rkc-explore"><div className="rkc-section-head"><div><span className="rkc-label">{c.overline}</span><h2>{c.explore}</h2></div><span className="rkc-timing-note">{c.note}</span></div><div className="rkc-links">{cards.map(({title,href,Icon},i)=><a href={href} key={href}><Icon size={29} strokeWidth={1.4}/><h3>{title}</h3><p>{c.cards[i]}</p><ArrowUpRight className="rkc-card-arrow" size={19}/></a>)}</div>
  <div className="rkc-sunday"><Flower2 size={52} strokeWidth={1}/><div><h2>{c.sunday}</h2><p>{c.sundayText}</p></div><a className="rkc-button" href="/sunday-feast">{w.sundayCta}<ArrowUpRight size={18}/></a></div></section>
  <section className="wrap rkc-deeper"><article><span className="rkc-label">{w.festivalTag}</span><h2>{c.read}</h2><p>{c.readText}</p><a className="rkc-text-link" href="/damodar-ashtakam">{c.readCta}<ArrowRight size={18}/></a><BookOpen className="rkc-deeper-icon" size={66} strokeWidth={.8}/></article><article><span className="rkc-label">{w.community}</span><h2>{c.seva}</h2><p>{c.sevaText}</p><a className="rkc-text-link" href="/seva">{c.sevaCta}<ArrowRight size={18}/></a><Heart className="rkc-deeper-icon" size={66} strokeWidth={.8}/></article></section>
  <div className="wrap rkc-location"><span><MapPin size={18}/>{c.temple}</span><a href={MAP}>{w.directions}<ArrowUpRight size={17}/></a></div>
 </div>
}
