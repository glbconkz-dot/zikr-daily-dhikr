import { CategoryInfo } from '@/types';
import { Language } from '@/types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'riziq-bereket',
    label: 'Rızık ve Bereket',
    labelAr: 'الرزق والبركة',
    icon: 'Coins',
    color: '#C9A84C',
    gradient: ['#C9A84C', '#A07830'],
  },
  {
    id: 'sifa',
    label: 'Şifa',
    labelAr: 'الشفاء',
    icon: 'Heart',
    color: '#7BA05B',
    gradient: ['#7BA05B', '#4A7A3A'],
  },
  {
    id: 'huzur-sukunet',
    label: 'Huzur ve Sükunet',
    labelAr: 'السكينة والطمأنينة',
    icon: 'Wind',
    color: '#5B8FA8',
    gradient: ['#5B8FA8', '#3A6A80'],
  },
  {
    id: 'korunma',
    label: 'Korunma',
    labelAr: 'الحفظ والحماية',
    icon: 'Shield',
    color: '#1A3A2A',
    gradient: ['#1A3A2A', '#0D2018'],
  },
  {
    id: 'salavatlar',
    label: 'Salavatlar',
    labelAr: 'الصلاة على النبي',
    icon: 'Star',
    color: '#9B6B3A',
    gradient: ['#9B6B3A', '#6B4520'],
  },
  {
    id: 'esmaul-husna',
    label: 'Esmaül Hüsna',
    labelAr: 'الأسماء الحسنى',
    icon: 'Sparkles',
    color: '#8B5E3C',
    gradient: ['#8B5E3C', '#5C3A20'],
  },
  {
    id: 'kismet-ask-iliskiler',
    label: 'Kısmet, Aşk ve İlişkiler',
    labelAr: 'الزواج والعلاقات',
    icon: 'Users',
    color: '#B56B6B',
    gradient: ['#B56B6B', '#8B4040'],
  },
  {
    id: 'ev-is-hayirli-kapilar',
    label: 'Ev, İş ve Hayırlı Kapılar',
    labelAr: 'البيت والعمل والفرص',
    icon: 'Briefcase',
    color: '#4A7A6A',
    gradient: ['#4A7A6A', '#2A5A4A'],
  },
];

export const CATEGORY_MAP: Record<string, CategoryInfo> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c])
);

interface Inspiration {
  text: string;
  source: string;
  arabic: string;
}

const INSPIRATIONS_BY_LANG: Record<Language, Inspiration[]> = {
  tr: [
    { text: 'Şüphesiz güçlükle birlikte bir kolaylık vardır.', source: 'İnşirah Suresi 94:6', arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا' },
    { text: 'Seni yitik bulup yol göstermedi mi?', source: 'Duha Suresi 93:7', arabic: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ' },
    { text: 'Şüphesiz Allah sabredenlerle beraberdir.', source: 'Bakara Suresi 2:153', arabic: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ' },
    { text: 'Beni zikredin; Ben de sizi zikredeyim.', source: 'Bakara Suresi 2:152', arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ' },
    { text: "Kim Allah'a tevekkül ederse, O ona yeter.", source: 'Talak Suresi 65:3', arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ' },
    { text: 'Rabbim şüphesiz yakındır, duaları kabul eder.', source: 'Hud Suresi 11:61', arabic: 'إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ' },
    { text: "Dikkat edin! Kalpler ancak Allah'ın zikriyle huzur bulur.", source: "Ra'd Suresi 13:28", arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ' },
  ],
  en: [
    { text: 'Verily, with hardship comes ease.', source: 'Surah Al-Inshirah 94:6', arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا' },
    { text: 'Did He not find you lost and guide you?', source: 'Surah Ad-Duha 93:7', arabic: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ' },
    { text: 'Indeed, Allah is with those who are patient.', source: 'Surah Al-Baqarah 2:153', arabic: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ' },
    { text: 'Remember Me, and I will remember you.', source: 'Surah Al-Baqarah 2:152', arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ' },
    { text: 'Whoever relies upon Allah — He is sufficient for him.', source: 'Surah At-Talaq 65:3', arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ' },
    { text: 'Indeed, my Lord is near and responsive.', source: 'Surah Hud 11:61', arabic: 'إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ' },
    { text: 'Verily, in the remembrance of Allah do hearts find rest.', source: "Surah Ar-Ra'd 13:28", arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ' },
  ],
  ru: [
    { text: 'Поистине, вместе с трудностью приходит облегчение.', source: 'Сура Аль-Инширах 94:6', arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا' },
    { text: 'Разве Он не нашёл тебя заблудшим и не направил на путь?', source: 'Сура Ад-Духа 93:7', arabic: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ' },
    { text: 'Поистине, Аллах — с терпеливыми.', source: 'Сура Аль-Бакара 2:153', arabic: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ' },
    { text: 'Поминайте Меня — и Я буду помнить вас.', source: 'Сура Аль-Бакара 2:152', arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ' },
    { text: 'Кто уповает на Аллаха, тому Он достаточен.', source: 'Сура Ат-Талак 65:3', arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ' },
    { text: 'Воистину, Господь мой — близок и отзывчив.', source: 'Сура Худ 11:61', arabic: 'إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ' },
    { text: 'Поистине, только в поминании Аллаха успокаиваются сердца.', source: 'Сура Ар-Раад 13:28', arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ' },
  ],
  kk: [
    { text: 'Шүкір, қиындықпен бірге жеңілдік бар.', source: 'Аш-Шарх сүресі 94:6', arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا' },
    { text: 'Ол сені адасқан кезде таппады ма және бағыттаған жоқ па?', source: 'Ад-Духа сүресі 93:7', arabic: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ' },
    { text: 'Шүкір, Алла шыдамдылармен бірге.', source: 'Аль-Бақара сүресі 2:153', arabic: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ' },
    { text: 'Мені еске ал, мен де сені еске аламын.', source: 'Аль-Бақара сүресі 2:152', arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ' },
    { text: 'Аллаға сенген кісіге Ол жеткілікті.', source: 'Ат-Талақ сүресі 65:3', arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ' },
    { text: 'Шүкір, Раббім жақын және жауап беруші.', source: 'Худ сүресі 11:61', arabic: 'إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ' },
    { text: 'Алланы еске алумен жандар тыныштанады.', source: 'Ар-Раад сүресі 13:28', arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ' },
  ],
  ar: [
    { text: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', source: 'سورة الشرح 94:6', arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا' },
    { text: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ', source: 'سورة الضحى 93:7', arabic: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ' },
    { text: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', source: 'سورة البقرة 2:153', arabic: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ' },
    { text: 'فَاذْكُرُونِي أَذْكُرْكُمْ', source: 'سورة البقرة 2:152', arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ' },
    { text: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', source: 'سورة الطلاق 65:3', arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ' },
    { text: 'إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ', source: 'سورة هود 11:61', arabic: 'إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ' },
    { text: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', source: 'سورة الرعد 13:28', arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ' },
  ],
};

export function getInspirations(language: Language): Inspiration[] {
  return INSPIRATIONS_BY_LANG[language] ?? INSPIRATIONS_BY_LANG.tr;
}

export const INSPIRATIONS = INSPIRATIONS_BY_LANG.tr;
