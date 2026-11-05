import type {SiteLang} from './Palace';

const names={
 en:{
  kicker:'FIND THE RIGHT MANDIR',title:'Looking for ISKCON 15 Number, Hadapsar?',
  description:'Our community temple is Sri Sri Radha Krishna Chandra Mandir at 15 Number, Hadapsar, Pune, Maharashtra 411028. People also search for Shree Shree Radha Krishna Chandra Mandir, Shri Shri Radha Krishna Mandir, ISKCON 15 Number or Radha Krishna temple in Hadapsar.',
  question:'Are “Sri Sri” and “Shree Shree” the same name?',
  answer:'Yes. Sri Sri, Shri Shri and Shree Shree are different English spellings used when referring to the same temple name. For directions, use the complete name and the 15 Number, Hadapsar location.',
  cta:'View darshan timings and directions'
 },
 hi:{
  kicker:'सही मंदिर की जानकारी',title:'ISKCON 15 नंबर, हडपसर खोज रहे हैं?',
  description:'श्री श्री राधा कृष्ण चंद्र मंदिर 15 नंबर, हडपसर, पुणे, महाराष्ट्र 411028 में स्थित है। भक्त इसे Sri Sri Radha Krishna Chandra Mandir, Shree Shree Radha Krishna Mandir या ISKCON 15 Number Hadapsar नाम से भी खोजते हैं।',
  question:'Sri Sri और Shree Shree क्या एक ही नाम हैं?',
  answer:'हाँ। श्री श्री के लिए अंग्रेज़ी में Sri Sri, Shri Shri और Shree Shree जैसे उच्चारण-आधारित वर्तनी रूप मिलते हैं। मंदिर का पता और नाम मिलाकर दिशा जाँचें।',
  cta:'दर्शन का समय और रास्ता देखें'
 },
 mr:{
  kicker:'योग्य मंदिर शोधा',title:'ISKCON 15 नंबर, हडपसर शोधत आहात?',
  description:'श्री श्री राधा कृष्ण चंद्र मंदिर 15 नंबर, हडपसर, पुणे, महाराष्ट्र 411028 येथे आहे. भक्त Sri Sri Radha Krishna Chandra Mandir, Shree Shree Radha Krishna Mandir किंवा ISKCON 15 Number Hadapsar या नावांनीही शोधतात.',
  question:'Sri Sri आणि Shree Shree हे एकच नाव आहे का?',
  answer:'होय. श्री श्री या नावासाठी इंग्रजीत Sri Sri, Shri Shri आणि Shree Shree असे वेगवेगळे लिखाण आढळते. मंदिराचा पूर्ण पत्ता पाहून भेटीचे नियोजन करा.',
  cta:'दर्शन वेळा आणि मार्ग पाहा'
 }
};
export function TempleSearchGuide({lang}:{lang:SiteLang}){
 const t=names[lang];
 return <section className="wrap temple-search-guide" aria-labelledby="temple-find-title">
  <div className="temple-search-copy">
   <span>{t.kicker}</span>
   <h2 id="temple-find-title">{t.title}</h2>
   <p>{t.description}</p>
   <details><summary>{t.question}</summary><p>{t.answer}</p></details>
   <a href="/visit">{t.cta} →</a>
  </div>
  <div className="temple-search-visual"><img src="/images/temple.webp" width="900" height="675" loading="lazy" alt="Deity darshan of Sri Sri Radha Krishna Chandra in Hadapsar"/></div>
 </section>;
}
