import fs from 'fs';

const ESMA_NAMES = [
  ['Ya Quddus', 'يَا قُدُّوسُ', 'Yâ Quddûs', 'Ey her türlü eksiklikten uzak olan Allah.'],
  ['Ya Selam', 'يَا سَلَامُ', 'Yâ Selâm', 'Ey esenlik ve güven veren Allah.'],
  ['Ya Mümin', 'يَا مُؤْمِنُ', 'Yâ Mümin', 'Ey güven veren, iman nurunu artıran Allah.'],
  ['Ya Muheymin', 'يَا مُهَيْمِنُ', 'Yâ Muheymin', 'Ey her şeyi gözeten ve koruyan Allah.'],
  ['Ya Aziz', 'يَا عَزِيزُ', 'Yâ Azîz', 'Ey mutlak güç ve izzet sahibi Allah.'],
  ['Ya Cebbâr', 'يَا جَبَّارُ', 'Yâ Cebbâr', 'Ey dilediğini yapan, kırık gönülleri onaran Allah.'],
  ['Ya Mutekebbir', 'يَا مُتَكَبِّرُ', 'Yâ Mutekebbir', 'Ey büyüklük ve yücelik sahibi Allah.'],
  ['Ya Hâlık', 'يَا خَالِقُ', 'Yâ Hâlık', 'Ey her şeyi yaratan Allah.'],
  ['Ya Bâri', 'يَا بَارِئُ', 'Yâ Bâri', 'Ey kusursuz yaratan Allah.'],
  ['Ya Musavvir', 'يَا مُصَوِّرُ', 'Yâ Musavvir', 'Ey her şeye şekil veren Allah.'],
  ['Ya Gaffâr', 'يَا غَفَّارُ', 'Yâ Gaffâr', 'Ey çok bağışlayan Allah.'],
  ['Ya Kahhâr', 'يَا قَهَّارُ', 'Yâ Kahhâr', 'Ey her şeye galip olan Allah.'],
  ['Ya Vedûd', 'يَا وَدُودُ', 'Yâ Vedûd', 'Ey seven ve sevilen Allah.'],
  ['Ya Mecid', 'يَا مَجِيدُ', 'Yâ Mecid', 'Ey şan ve yücelik sahibi Allah.'],
  ['Ya Bâis', 'يَا بَاعِثُ', 'Yâ Bâis', 'Ey ölüleri dirilten Allah.'],
  ['Ya Şehid', 'يَا شَهِيدُ', 'Yâ Şehid', 'Ey her şeye şahit olan Allah.'],
  ['Ya Hak', 'يَا حَقُّ', 'Yâ Hak', 'Ey hak ve gerçek olan Allah.'],
  ['Ya Vekil', 'يَا وَكِيلُ', 'Yâ Vekil', 'Ey güvenilip dayanılan Allah.'],
  ['Ya Kavi', 'يَا قَوِيُّ', 'Yâ Kavi', 'Ey sonsuz kuvvet sahibi Allah.'],
  ['Ya Metin', 'يَا مَتِينُ', 'Yâ Metîn', 'Ey sağlam ve güçlü Allah.'],
  ['Ya Veliy', 'يَا وَلِيُّ', 'Yâ Veliy', 'Ey dost ve yardımcı olan Allah.'],
  ['Ya Hamid', 'يَا حَمِيدُ', 'Yâ Hamid', 'Ey hamd edilmeye layık Allah.'],
  ['Ya Muhsi', 'يَا مُحْصِي', 'Yâ Muhsi', 'Ey her şeyi sayan Allah.'],
  ['Ya Mubdi', 'يَا مُبْدِئُ', 'Yâ Mubdi', 'Ey yoktan var eden Allah.'],
  ['Ya Muid', 'يَا مُعِيدُ', 'Yâ Muîd', 'Ey tekrar dirilten Allah.'],
  ['Ya Muhyi', 'يَا مُحْيِي', 'Yâ Muhyî', 'Ey hayat veren Allah.'],
  ['Ya Mümit', 'يَا مُمِيتُ', 'Yâ Mümit', 'Ey ölümü takdir eden Allah.'],
  ['Ya Hayy', 'يَا حَيُّ', 'Yâ Hayy', 'Ey diri ve hayat kaynağı olan Allah.'],
  ['Ya Kayyum', 'يَا قَيُّومُ', 'Yâ Kayyûm', 'Ey her şeyi ayakta tutan Allah.'],
  ['Ya Vâcid', 'يَا وَاجِدُ', 'Yâ Vâcid', 'Ey dilediğini bulan Allah.'],
  ['Ya Mâcid', 'يَا مَاجِدُ', 'Yâ Mâcid', 'Ey şeref ve yücelik sahibi Allah.'],
  ['Ya Vâhid', 'يَا وَاحِدُ', 'Yâ Vâhid', 'Ey bir ve tek olan Allah.'],
  ['Ya Samed', 'يَا صَمَدُ', 'Yâ Samed', 'Ey her şeyin muhtaç olduğu Allah.'],
  ['Ya Kâdir', 'يَا قَادِرُ', 'Yâ Kâdir', 'Ey her şeye gücü yeten Allah.'],
  ['Ya Muktedir', 'يَا مُقْتَدِرُ', 'Yâ Muktedir', 'Ey kudreti tam olan Allah.'],
  ['Ya Mukaddim', 'يَا مُقَدِّمُ', 'Yâ Mukaddim', 'Ey dilediğini öne alan Allah.'],
  ['Ya Muahhir', 'يَا مُؤَخِّرُ', 'Yâ Muahhir', 'Ey dilediğini geri bırakan Allah.'],
  ['Ya Evvel', 'يَا أَوَّلُ', 'Yâ Evvel', 'Ey ilk ve başlangıcı olmayan Allah.'],
  ['Ya Âhir', 'يَا آخِرُ', 'Yâ Âhir', 'Ey son ve sonu olmayan Allah.'],
  ['Ya Zâhir', 'يَا ظَاهِرُ', 'Yâ Zâhir', 'Ey apaçık olan Allah.'],
  ['Ya Bâtın', 'يَا بَاطِنُ', 'Yâ Bâtın', 'Ey gizli olan Allah.'],
  ['Ya Vâli', 'يَا وَالِي', 'Yâ Vâli', 'Ey her şeyi yöneten Allah.'],
  ['Ya Müteâli', 'يَا مُتَعَالِي', 'Yâ Müteâli', 'Ey yüce ve ulu Allah.'],
  ['Ya Berr', 'يَا بَرُّ', 'Yâ Berr', 'Ey iyilik ve ihsan sahibi Allah.'],
  ['Ya Tevvâb', 'يَا تَوَّابُ', 'Yâ Tevvâb', 'Ey tövbeleri kabul eden Allah.'],
  ['Ya Müntekim', 'يَا مُنْتَقِمُ', 'Yâ Müntekim', 'Ey haksızlığa karşı intikam alan Allah.'],
  ['Ya Afüvv', 'يَا عَفُوُّ', 'Yâ Afüvv', 'Ey affeden Allah.'],
  ['Ya Rauf', 'يَا رَؤُوفُ', 'Yâ Raûf', 'Ey çok şefkatli Allah.'],
  ['Ya Mâlik-ül Mulk', 'يَا مَالِكَ الْمُلْكِ', 'Yâ Mâlik-ül Mulk', 'Ey mülkün sahibi Allah.'],
  ['Ya Zül Celâli vel İkrâm', 'يَا ذَا الْجَلَالِ وَالْإِكْرَامِ', 'Yâ Zül Celâli vel İkrâm', 'Ey celal ve ikram sahibi Allah.'],
  ['Ya Muksit', 'يَا مُقْسِطُ', 'Yâ Muksit', 'Ey adaletli Allah.'],
  ['Ya Câmi', 'يَا جَامِعُ', 'Yâ Câmi', 'Ey bir araya getiren Allah.'],
  ['Ya Ganiyy', 'يَا غَنِيُّ', 'Yâ Ganiyy', 'Ey zengin ve müstağni Allah.'],
  ['Ya Muğni', 'يَا مُغْنِي', 'Yâ Muğni', 'Ey zenginlik veren Allah.'],
  ['Ya Mâni', 'يَا مَانِعُ', 'Yâ Mâni', 'Ey zararı engelleyen Allah.'],
  ['Ya Dârr', 'يَا ضَارُّ', 'Yâ Dârr', 'Ey hikmetle musibet veren Allah.'],
  ['Ya Nâfi', 'يَا نَافِعُ', 'Yâ Nâfi', 'Ey fayda veren Allah.'],
  ['Ya Nûr', 'يَا نُورُ', 'Yâ Nûr', 'Ey nur ve aydınlık veren Allah.'],
  ['Ya Hâdi', 'يَا هَادِي', 'Yâ Hâdi', 'Ey doğru yola ileten Allah.'],
  ['Ya Bâdi', 'يَا بَدِيعُ', 'Yâ Bâdi', 'Ey eşsiz yaratan Allah.'],
  ['Ya Bâki', 'يَا بَاقِي', 'Yâ Bâki', 'Ey baki ve kalıcı olan Allah.'],
  ['Ya Vâris', 'يَا وَارِثُ', 'Yâ Vâris', 'Ey her şeyin varisi olan Allah.'],
  ['Ya Reşid', 'يَا رَشِيدُ', 'Yâ Reşid', 'Ey doğru yola ileten Allah.'],
  ['Ya Sabur', 'يَا صَبُورُ', 'Yâ Sabur', 'Ey sabırlı ve sabır veren Allah.'],
];

const INTENTIONS = [
  ['Sabır Niyeti', 'اللَّهُمَّ أَعِنِّي عَلَى الصَّبْرِ', 'Allâhümme ainnî alas-sabr.', 'Allah\'ım! Sabır üzere olmama yardım et.'],
  ['Şükür Niyeti', 'اللَّهُمَّ أَعِنِّي عَلَى شُكْرِكَ', 'Allâhümme ainnî alâ şükrık.', 'Allah\'ım! Sana şükretmeme yardım et.'],
  ['Tövbe Niyeti', 'اللَّهُمَّ إِنِّي أَسْتَغْفِرُكَ', 'Allâhümme innî estagfiruk.', 'Allah\'ım! Senden bağışlanma dilerim.'],
  ['Hidayet Niyeti', 'اللَّهُمَّ اهْدِنِي', 'Allâhümmehdinî.', 'Allah\'ım! Beni doğru yola ilet.'],
  ['Kalp Nuru', 'اللَّهُمَّ نَوِّرْ قَلْبِي', 'Allâhümme nevvir kalbî.', 'Allah\'ım! Kalbime nur ver.'],
  ['Af Niyeti', 'اللَّهُمَّ اغْفِرْ لِي', 'Allâhümmeğfir lî.', 'Allah\'ım! Beni bağışla.'],
  ['İlim Niyeti', 'رَبِّ زِدْنِي عِلْمًا', 'Rabbi zidnî ilmâ.', 'Rabbim! İlmimi artır.'],
  ['Tevbe Niyeti', 'رَبَّنَا تُبْ عَلَيْنَا', 'Rabbenâ tüb aleynâ.', 'Rabbimiz! Tövbemizi kabul et.'],
  ['Sıkıntı Duası', 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', 'Hasbünallâhu ve ni\'mel vekîl.', 'Allah bize yeter. O ne güzel vekildir.'],
  ['Yardım Duası', 'اللَّهُمَّ أَعِنِّي', 'Allâhümme ainnî.', 'Allah\'ım! Bana yardım et.'],
];

const REFLECTIONS = [
  ['Subhanallah', 'سُبْحَانَ اللَّهِ', 'Sübhanallah', 'Allah\'ı her türlü eksiklikten tenzih ederim.'],
  ['Alhamdulillah', 'الْحَمْدُ لِلَّهِ', 'Elhamdülillah', 'Hamd Allah\'a mahsustur.'],
  ['Allahu Akbar', 'اللَّهُ أَكْبَرُ', 'Allahu Ekber', 'Allah en büyüktür.'],
  ['La ilaha illallah', 'لَا إِلَٰهَ إِلَّا اللَّهُ', 'La ilahe illallah', 'Allah\'tan başka ilah yoktur.'],
  ['Astaghfirullah', 'أَسْتَغْفِرُ اللَّهَ', 'Estağfirullah', 'Allah\'tan bağışlanma dilerim.'],
  ['Hasbunallahu', 'حَسْبِيَ اللَّهُ', 'Hasbiyallah', 'Allah bana yeter.'],
  ['Inna lillah', 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ', 'İnna lillahi ve inna ileyhi raciûn.', 'Biz Allah\'a aidiz ve O\'na döneceğiz.'],
  ['Bismillah', 'بِسْمِ اللَّهِ', 'Bismillah', 'Allah\'ın adıyla.'],
  ['Salawat Kısa', 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ', 'Allâhümme salli alâ Muhammed.', 'Allah\'ım Muhammed\'e salat eyle.'],
  ['Rabbena', 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً', 'Rabbenâ âtinâ fid-dünyâ haseneten.', 'Rabbimiz! Bize dünyada da iyilik ver.'],
];

function makeEntry(id, category, title, arabic, translit, meaning, sort) {
  return `  {
    id: '${id}',
    category: '${category}',
    title: '${title.replace(/'/g, "\\'")}',
    titleEn: '${title.replace(/'/g, "\\'")}',
    titleRu: '${title.replace(/'/g, "\\'")}',
    titleAr: '${arabic}',
    arabic_text: '${arabic}',
    transliteration: '${translit.replace(/'/g, "\\'")}',
    meaningTr: '${meaning.replace(/'/g, "\\'")}',
    explanationTr: 'Premium koleksiyon — manevi gelişim ve derin zikir pratiği için.',
    target_count: 100,
    premium: true,
    sort_order: ${sort},
  }`;
}

const lines = ['import { Dhikr } from \'@/types\';', '', 'export const DHIKR_EXPANDED: Dhikr[] = ['];

ESMA_NAMES.forEach(([title, arabic, translit, meaning], i) => {
  lines.push(makeEntry(`esma_ext_${String(i + 1).padStart(3, '0')}`, 'esmaul-husna', title, arabic, translit, meaning, i + 13) + ',');
});

INTENTIONS.forEach(([title, arabic, translit, meaning], i) => {
  lines.push(makeEntry(`niyet_${String(i + 1).padStart(3, '0')}`, 'huzur-sukunet', title, arabic, translit, meaning, i + 1) + ',');
});

REFLECTIONS.forEach(([title, arabic, translit, meaning], i) => {
  lines.push(makeEntry(`tefekkur_${String(i + 1).padStart(3, '0')}`, 'huzur-sukunet', title, arabic, translit, meaning, i + 20) + ',');
});

lines.push('];', '');
fs.writeFileSync('data/dhikr-expanded.ts', lines.join('\n'));
console.log('Generated', ESMA_NAMES.length + INTENTIONS.length + REFLECTIONS.length, 'expanded entries');
