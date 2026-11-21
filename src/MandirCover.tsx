import {ArrowDownRight, ArrowUpRight, BookOpen, Clock, MapPin, Music2} from 'lucide-react';
import {PLAY, type Lang} from './content';
import {localizedUrl} from './seo-locales';

const labels = {
  en: {place:'Hadapsar, Pune', name:['Radha Krishna','Chandra Mandir'], prefix:'Shree Shree', download:'Get the temple app', visit:'Plan your visit', darshan:'Darshan timings', prayer:'Aarti & prayers', feast:'Sunday Feast', sunday:'Sundays · 5–8 PM', morning:'Morning', evening:'Evening'},
  hi: {place:'हडपसर, पुणे', name:['राधा कृष्ण','चंद्र मंदिर'], prefix:'श्री श्री', download:'मंदिर ऐप डाउनलोड करें', visit:'मंदिर का पता', darshan:'दर्शन का समय', prayer:'आरती और प्रार्थना', feast:'रविवार उत्सव', sunday:'रविवार · शाम ५–८', morning:'सुबह', evening:'शाम'},
  mr: {place:'हडपसर, पुणे', name:['राधा कृष्ण','चंद्र मंदिर'], prefix:'श्री श्री', download:'मंदिराचे ॲप मिळवा', visit:'मंदिराचा पत्ता', darshan:'दर्शनाच्या वेळा', prayer:'आरती व प्रार्थना', feast:'रविवार उत्सव', sunday:'रविवार · सायं. ५–८', morning:'सकाळ', evening:'संध्याकाळ'}
};

export function MandirCover({lang}: {lang: Lang}) {
  const c = labels[lang];
  const link = (path: string) => localizedUrl(path, lang);
  return <section className="mandir-cover wrap">
    <div className="mandir-poster">
      <div className="mandir-title">
        <span className="mandir-place"><MapPin size={16}/>{c.place}</span>
        <h1><small>{c.prefix}</small>{c.name.map(line => <span key={line}>{line}</span>)}</h1>
        <div className="mandir-actions">
          <a href={PLAY}>{c.download}<ArrowUpRight/></a>
          <a href={link('/visit')}>{c.visit}<ArrowDownRight/></a>
        </div>
      </div>
      <img className="mandir-portrait" src="/images/krishna-shrine.webp" alt="" width="666" height="888" fetchPriority="high"/>
    </div>
    <nav className="mandir-directory" aria-label={c.place}>
      <a href={link('/visit')}><Clock/><strong>{c.darshan}</strong><span>{c.morning} 4:30 AM–1 PM<br/>{c.evening} 4:15–9 PM</span><ArrowUpRight/></a>
      <a href={link('/aarti')}><BookOpen/><strong>{c.prayer}</strong><img src="/images/lotus-lamp.webp" width="390" height="520" alt=""/><ArrowUpRight/></a>
      <a href={link('/sunday-feast')}><Music2/><strong>{c.feast}</strong><span>{c.sunday}</span><ArrowUpRight/></a>
    </nav>
  </section>;
}
