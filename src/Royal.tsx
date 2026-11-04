import {ArrowRight,ArrowUpRight,BookOpen,CalendarDays,Clock,Flame,Flower2,GraduationCap,HandHeart,Heart,MapPin,Music2,Sun,Users} from 'lucide-react';
import {ADDRESS,MAP} from './content';

const enquiry='https://wa.me/919119436809?text=Hare%20Krishna%21%20I%20would%20like%20to%20enquire%20about%20temple%20seva.';
const cards=[
  {icon:Sun,kicker:'01 / DARSHAN',title:'Darshan & timings',description:'Morning 4:30 AM – 1:00 PM · Evening 4:15 PM – 9:00 PM',href:'/visit',caption:'Plan your visit'},
  {icon:BookOpen,kicker:'02 / PRAYERS',title:'Damodar Ashtakam',description:'Eight sacred verses, with Sanskrit, transliteration and simple meanings.',href:'/damodar-ashtakam',caption:'Begin reading'},
  {icon:Music2,kicker:'03 / COMMUNITY',title:'Sunday Feast',description:'Kirtan, katha, maha aarti and maha prasad every Sunday, 5–8 PM.',href:'/sunday-feast',caption:'Explore the gathering'},
  {icon:MapPin,kicker:'04 / DIRECTIONS',title:'Visit the mandir',description:'15 Number, Hadapsar, Pune · Find your way to the temple.',href:'/visit',caption:'Get directions'}
];

function OrnateDivider(){return <span className="royal-ornament" aria-hidden="true"><span/><Flower2 size={17}/><span/></span>}
function RoyalButton({href,children,outline=false}:{href:string;children:React.ReactNode;outline?:boolean}){return <a className={'royal-button'+(outline?' royal-button-outline':'')} href={href}>{children}<ArrowUpRight size={17} strokeWidth={1.8}/></a>}
export function RoyalHome(){return <>
  <section className="royal-hero" aria-labelledby="royal-title">
    <div className="royal-hero-image" role="img" aria-label="Sri Sri Radha Krishna Chandra deity darshan at the temple"/>
    <div className="royal-hero-veil"/>
    <div className="royal-hero-content wrap">
      <div className="royal-hero-copy">
        <span className="royal-overline"><span className="royal-overline-mark"/> WELCOME TO OUR MANDIR</span>
        <h1 id="royal-title">Shree Shree<br/><em>Radha Krishna</em><br/>Chandra Mandir</h1>
        <OrnateDivider/>
        <p>A space for darshan. A home for bhakti. Discover sacred moments, heartfelt worship and a community brought together by devotion.</p>
        <div className="royal-actions"><RoyalButton href="/temple">Discover our temple</RoyalButton><RoyalButton href="/visit" outline>Darshan & timings</RoyalButton></div>
        <span className="royal-hero-location"><MapPin size={15}/> 15 Number, Hadapsar · Pune, Maharashtra</span>
      </div>
      <div className="royal-hero-seal" aria-hidden="true"><Flower2 size={24}/><span>RADHE<br/>RADHE</span></div>
    </div>
    <div className="royal-hero-bottom"><span>॥ श्री राधा कृष्ण चन्द्र भगवान् की जय ॥</span><a href="#royal-explore">Explore the experience <span aria-hidden="true">↓</span></a></div>
  </section>
  <section className="royal-quick wrap" id="royal-explore" aria-label="Temple highlights">
    {cards.map(({icon:Icon,kicker,title,description,href,caption})=><a className="royal-quick-card" href={href} key={kicker}>
      <span className="royal-quick-icon"><Icon size={26} strokeWidth={1.6}/></span>
      <span className="royal-quick-content"><small>{kicker}</small><strong>{title}</strong><span>{description}</span><b>{caption} <ArrowRight size={14}/></b></span>
    </a>)}
  </section>
  <div className="royal-mantra" aria-label="Hare Krishna maha mantra"><span aria-hidden="true">✦</span> हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे <span aria-hidden="true">✦</span> हरे राम हरे राम राम राम हरे हरे <span aria-hidden="true">✦</span></div>
  <section className="royal-editorial wrap" aria-labelledby="royal-devotion-title">
    <div className="royal-editorial-heading"><span className="royal-kicker">A MOMENT OF STILLNESS</span><h2 id="royal-devotion-title">Where devotion<br/><em>finds a home.</em></h2><p>More than a destination, the mandir is a place to pause, hear the holy names and reconnect with what matters.</p><a className="royal-inline" href="/temple">Our story <ArrowUpRight size={17}/></a></div>
    <div className="royal-editorial-image"><img src="/images/temple.webp" width="900" height="675" alt="Sri Sri Radha Krishna Chandra deities adorned with flowers" loading="lazy"/><div className="royal-image-caption"><Flower2 size={18}/> दर्शन · कीर्तन · सेवा</div></div>
    <div className="royal-side-note"><span>01</span><p>Beauty in every offering.<br/>Peace in every prayer.</p></div>
  </section>
  <section className="royal-kartik" aria-labelledby="royal-kartik-title">
    <div className="wrap royal-kartik-grid"><div className="royal-kartik-image"><img src="/images/sacred-night.webp" alt="Original devotional artwork showing a brass diya, lotus and peacock feather" loading="lazy"/><span>THE LAMP OF DEVOTION</span></div>
    <div className="royal-kartik-copy"><span className="royal-kicker">KĀRTIKA · THE PRAYER OF LOVE</span><h2 id="royal-kartik-title">A little flame.<br/><em>An endless love.</em></h2><p>Remember the loving pastime of Mother Yaśodā and little Krishna through Śrī Dāmodarāṣṭakam. Read each of the eight verses at your own pace.</p><div className="royal-kartik-benefits"><span><BookOpen size={17}/> All 8 verses</span><span><Flower2 size={17}/> Devanagari & meaning</span></div><RoyalButton href="/damodar-ashtakam">Read Damodar Ashtakam</RoyalButton></div></div>
  </section>
  <section className="royal-gather wrap" aria-labelledby="royal-gather-title">
    <div className="royal-section-heading"><div><span className="royal-kicker">LIFE AT THE MANDIR</span><h2 id="royal-gather-title">Gather. Celebrate.<br/><em>Belong.</em></h2></div><p>Find simple ways to connect with sacred traditions and the temple community.</p><a className="royal-inline" href="/festivals">View experiences <ArrowUpRight size={17}/></a></div>
    <div className="royal-experience-grid">
      <a href="/sunday-feast" className="royal-experience royal-experience-feast"><div className="royal-experience-photo"><img src="/images/devotional-art.webp" alt="Devotional still life with brass diya, flowers and flute" loading="lazy"/></div><span className="royal-experience-number">01 · EVERY SUNDAY</span><h3>Sunday Feast</h3><p>Kirtan, katha, maha aarti & maha prasad · 5–8 PM</p><span className="royal-experience-arrow"><ArrowUpRight/></span></a>
      <a href="/aarti" className="royal-experience royal-experience-prayers"><div className="royal-experience-photo"><img src="/images/sacred-night.webp" alt="Devotional lamp and lotus artwork" loading="lazy"/></div><span className="royal-experience-number">02 · DEVOTIONAL READING</span><h3>Prayers & aarti</h3><p>Discover the prayers that accompany the day.</p><span className="royal-experience-arrow"><ArrowUpRight/></span></a>
      <a href="/learning" className="royal-experience royal-experience-learning"><div className="royal-experience-photo"><img src="/images/temple.webp" alt="Deity darshan at the temple" loading="lazy"/></div><span className="royal-experience-number">03 · LEARN TOGETHER</span><h3>Growing in bhakti</h3><p>Explore Kids Sanskar classes and spiritual learning.</p><span className="royal-experience-arrow"><ArrowUpRight/></span></a>
    </div>
  </section>
  <section className="royal-rhythm" aria-labelledby="royal-rhythm-title"><div className="wrap royal-rhythm-grid">
    <div className="royal-rhythm-copy"><span className="royal-kicker">YOUR VISIT, THOUGHTFULLY PLANNED</span><h2 id="royal-rhythm-title">A rhythm of<br/><em>daily devotion.</em></h2><p>Join us for aarti and darshan. The mandir has an afternoon rest period; please check the daily schedule before coming.</p><RoyalButton href="/visit">See complete timings</RoyalButton></div>
    <div className="royal-timing-list"><div><span>04:30 AM</span><i/><p><strong>Mangal Aarti</strong><small>A devotional start to the day</small></p><Sun size={24}/></div><div><span>08:30 AM</span><i/><p><strong>Darshan Aarti</strong><small>Morning deity darshan</small></p><Flower2 size={24}/></div><div><span>07:00 PM</span><i/><p><strong>Sandhya Aarti</strong><small>Evening worship & kirtan</small></p><Flame size={24}/></div><p className="royal-timing-disclaimer">Indicative regular schedule · Festival timings may change.</p></div>
  </div></section>
  <section className="royal-seva wrap" aria-labelledby="royal-seva-title"><div className="royal-seva-symbol"><HandHeart size={38} strokeWidth={1.4}/></div><div><span className="royal-kicker">SERVICE WITH HEART</span><h2 id="royal-seva-title">Every offering begins<br/><em>with love.</em></h2><p>Interested in temple seva, volunteering or supporting devotional programs? Connect with the organisers for current opportunities and verified arrangements.</p></div><RoyalButton href="/seva">Explore seva</RoyalButton></section>
  <section className="royal-visit-strip"><div className="wrap royal-visit-row"><div><span className="royal-kicker">WE WOULD LOVE TO WELCOME YOU</span><h2>Come for darshan.<br/><em>Stay for the peace.</em></h2><p>{ADDRESS}</p></div><a className="royal-button" href={MAP} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={17}/></a></div></section>
</>}

export function RoyalFestivals(){return <>
  <section className="wrap royal-inner-intro"><span className="royal-kicker">FESTIVALS · DAILY DEVOTION · COMMUNITY</span><h2>Sacred days, shared together.</h2><p>Whether it is a regular Sunday gathering or a special season of prayer, the temple community invites you to experience devotion with care and joy. Specific festival dates and timings should always be confirmed with the organisers.</p></section>
  <div className="wrap royal-inner-cards"><a className="royal-featured-event" href="/damodar-ashtakam"><img src="/images/sacred-night.webp" alt="Devotional diya and lotus artwork" loading="lazy"/><div><span>FEATURED · KARTIK READING</span><h2>Śrī Dāmodarāṣṭakam</h2><p>Eight beautiful prayers remembering the love of Mother Yaśodā and Lord Krishna. Sanskrit, transliteration and simple English reading meanings.</p><b>Read the eight verses <ArrowUpRight size={17}/></b></div></a>
  <div className="royal-inner-link-grid"><a href="/sunday-feast"><Music2/><span>EVERY SUNDAY · 5–8 PM</span><h3>Sunday Feast</h3><p>Kirtan, katha, maha aarti and maha prasad.</p><ArrowRight/></a><a href="/ekadashi"><CalendarDays/><span>FASTING & PARANA</span><h3>Ekadashi guidance</h3><p>Find the planner and learn what to confirm before observing.</p><ArrowRight/></a><a href="/aarti"><Flame/><span>DAILY PRACTICE</span><h3>Aarti & sacred prayers</h3><p>A prayerful rhythm from morning to evening.</p><ArrowRight/></a><a href="/learning"><GraduationCap/><span>COMMUNITY LEARNING</span><h3>Classes & spiritual learning</h3><p>Enquire about current classes and activities.</p><ArrowRight/></a></div></div>
  <section className="wrap royal-inner-note"><Clock/><p><strong>Planning a visit for a festival?</strong> Public events can change with temple arrangements. Confirm the relevant date, parana window and program timing with the mandir before travelling.</p><a href="/contact">Ask the organisers <ArrowRight size={16}/></a></section>
</>}

export function RoyalSeva(){return <>
  <section className="wrap royal-inner-intro"><span className="royal-kicker">SEVA · PARTICIPATION · COMMUNITY</span><h2>Service is an expression of love.</h2><p>Interested in supporting daily worship, offering your time or helping with community programs? Reach out to the mandir organisers and ask about current needs. This website does not process payments.</p></section>
  <div className="wrap royal-inner-link-grid royal-seva-grid"><div><Flower2/><span>SACRED WORSHIP</span><h3>Daily temple seva</h3><p>Ask about opportunities to support the worship and care of the temple.</p></div><div><Users/><span>COMMUNITY</span><h3>Festival & gathering seva</h3><p>Enquire about volunteering for gatherings and temple activities.</p></div><div><BookOpen/><span>LEARNING</span><h3>Spiritual education</h3><p>Support classes and devotional learning through verified organisers.</p></div></div>
  <section className="wrap royal-seva royal-inner-seva"><div className="royal-seva-symbol"><Heart size={35}/></div><div><span className="royal-kicker">START WITH A CONVERSATION</span><h2>Offer what you can.<br/><em>With care.</em></h2><p>For donation methods or volunteering, please confirm the current details directly with the temple before making any payment or commitment.</p></div><a className="royal-button" href={enquiry} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <ArrowUpRight size={17}/></a></section>
</>}
