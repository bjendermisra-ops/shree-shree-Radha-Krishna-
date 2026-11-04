/** Central asset registry. No image below is an unverified photograph of the Hadapsar building. */
export type MediaKind='temple-photo'|'artwork'|'app-screenshot';
type MediaAlt={en:string;hi:string;mr:string};
export type SiteArtwork={src:string;kind:MediaKind;alt:MediaAlt;caption:MediaAlt};
const artwork=(src:string,en:string,hi:string,mr:string):SiteArtwork=>({
 src,kind:'artwork',alt:{en,hi,mr},caption:{
 en:'Devotional illustration · Not an actual temple photograph',
 hi:'भक्तिपूर्ण कलात्मक चित्र · वास्तविक मंदिर का फोटो नहीं',
 mr:'भक्तिपर कलात्मक चित्र · मंदिराचे प्रत्यक्ष छायाचित्र नाही'
 }});
const real=(src:string):SiteArtwork=>({
 src,kind:'temple-photo',
 alt:{en:'Sri Sri Radha Krishna Chandra deities at Hadapsar temple',hi:'हडपसर मंदिर के श्री श्री राधा कृष्ण चंद्र विग्रह',mr:'हडपसर मंदिरातील श्री श्री राधा कृष्ण चंद्र विग्रह'},
 caption:{en:'Sri Sri Radha Krishna Chandra · Hadapsar',hi:'श्री श्री राधा कृष्ण चंद्र · हडपसर',mr:'श्री श्री राधा कृष्ण चंद्र · हडपसर'}
});
export const TEMPLE_DARSHAN:SiteArtwork=real('/images/temple.webp');
export const PAGE_ART:Record<string,SiteArtwork>={
 '/temple':artwork('/media/temple-architecture-art.webp','Artistic Indian temple architecture in golden light','स्वर्णिम प्रकाश में भारतीय मंदिर की कलात्मक छवि','सुवर्ण प्रकाशातील भारतीय मंदिराचे कलात्मक चित्र'),
 '/visit':TEMPLE_DARSHAN,
 '/damodar-ashtakam':artwork('/media/krishna-moon.webp','Krishna playing the flute under the moon','चंद्रमा के नीचे बांसुरी बजाते श्रीकृष्ण का कलात्मक चित्र','चंद्रप्रकाशात बासरी वाजवणाऱ्या श्रीकृष्णांचे कलात्मक चित्र'),
 '/aarti':artwork('/media/prayer-scripture.webp','Sacred manuscript with brass diya','दीपक और पवित्र ग्रंथ की कलात्मक छवि','दिवा आणि पवित्र ग्रंथाचे कलात्मक चित्र'),
 '/ekadashi':artwork('/media/yamuna-moon.webp','Moonlit sacred river and temple-inspired landscape','चाँदनी में पवित्र नदी का कलात्मक दृश्य','चंद्रप्रकाशातील पवित्र नदीचे कलात्मक दृश्य'),
 '/sunday-feast':artwork('/media/lotus-sunrise.webp','Sunrise and pink lotus blossoms','सूर्योदय और कमल के फूलों का दृश्य','सूर्योदय आणि कमळांच्या फुलांचे चित्र'),
 '/features':{src:'/images/home.webp',kind:'app-screenshot',alt:{en:'Real screenshot of temple Android app',hi:'मंदिर Android ऐप का वास्तविक स्क्रीनशॉट',mr:'मंदिराच्या अँड्रॉइड ॲपचे प्रत्यक्ष स्क्रीनशॉट'},caption:{en:'Real Android app screen',hi:'वास्तविक Android ऐप स्क्रीन',mr:'प्रत्यक्ष Android ॲप स्क्रीन'}},
 '/learning':artwork('/media/gita-chariot.webp','Bhagavad Gita teaching scene with Krishna and Arjuna','कृष्ण और अर्जुन के गीता उपदेश का कलात्मक दृश्य','श्रीकृष्ण व अर्जुन यांचा गीता उपदेश कलात्मक दृश्य'),
 '/contact':artwork('/media/lotus-sunrise.webp','Lotus garden at golden sunrise','सुनहरी सुबह में खिले कमल','सुवर्ण सूर्योदयातील कमळे'),
 '/festivals':artwork('/media/krishna-flute.webp','Krishna flute with peacock feather and flowers','बांसुरी, मोरपंख और फूलों का कलात्मक चित्र','बासरी, मोरपीस आणि फुलांचे कलात्मक चित्र'),
 '/seva':artwork('/media/puja-thali.webp','Brass puja tray and sacred offerings','पूजन सामग्री और पीतल की थाली','पूजासाहित्य आणि पितळी ताट'),
 '/community':artwork('/media/lotus-sunrise.webp','Lotus blossoms at dawn','भोर में खिले कमल के फूल','पहाटे उमललेली कमळे'),
 '/gallery':TEMPLE_DARSHAN,
 '/privacy':artwork('/media/tulsi-japa.webp','Tulsi prayer beads on linen','तुलसी की जप माला','तुळशीची जपमाळ'),
 '/terms':artwork('/media/prayer-scripture.webp','Sacred manuscript and prayer lamp','पवित्र ग्रंथ और दीपक','पवित्र ग्रंथ व दिवा')
};
export function getPageArtwork(path:string):SiteArtwork{return PAGE_ART[path]||TEMPLE_DARSHAN}
