/** Russian/Cyrillic or Latin Esma title → proper Kazakh Cyrillic (Я prefix, Kazakh letters). */
const ESMA_RU_TO_KK: Record<string, string> = {
  'Я Раззак': 'Я Раззақ',
  'Я Фаттах': 'Я Фаттах',
  'Я Ваххаб': 'Я Ваххаб',
  'Я Гани': 'Я Ғани',
  'Я Мугни': 'Я Муғни',
  'Я Басит': 'Я Басит',
  'Я Карим': 'Я Кәрім',
  'Я Шафи': 'Я Шафи',
  'Я Кафи': 'Я Кафи',
  'Я Салям': 'Я Салям',
  "Я Му'мин": 'Я Мүмин',
  'Я Халим': 'Я Халим',
  'Я Хафиз': 'Я Хафиз',
  'Я Рахман': 'Я Рахман',
  'Я Рахим': 'Я Рахим',
  'Я Малик': 'Я Мәлік',
  'Я Куддус': 'Я Құдыс',
  'Я Азиз': 'Я Әзиз',
  'Я Джаббар': 'Я Жаббар',
  'Я Халик': 'Я Халық',
  'Я Алим': 'Я Әлим',
  'Я Кадир': 'Я Қадир',
  'Я Самиъ': 'Я Сами',
  'Я Басир': 'Я Басир',
  'Я Таввааб': 'Я Тәуаб',
  'Я Вадуд': 'Я Вадуд',
  "Я Джами'": 'Я Жами',
  'Я Латиф': 'Я Ләтиф',
  'Я Муйессир': 'Я Мүйіссир',
};

const ESMA_LATIN_TO_KK: Record<string, string> = {
  'Ya Quddus': 'Я Құдыс',
  'Ya Selam': 'Я Салям',
  'Ya Mümin': 'Я Мүмин',
  'Ya Muheymin': 'Я Мухеймин',
  'Ya Aziz': 'Я Әзиз',
  'Ya Cebbâr': 'Я Жаббар',
  'Ya Mutekebbir': 'Я Мутекеббир',
  'Ya Hâlık': 'Я Халық',
  'Ya Bâri': 'Я Бари',
  'Ya Musavvir': 'Я Мусаввир',
  'Ya Gaffâr': 'Я Ғаффар',
  'Ya Kahhâr': 'Я Қаххар',
  'Ya Vedûd': 'Я Вадуд',
  'Ya Mecid': 'Я Мәжид',
  'Ya Bâis': 'Я Баис',
  'Ya Şehid': 'Я Шәһид',
  'Ya Hak': 'Я Хақ',
  'Ya Vekil': 'Я Вакил',
  'Ya Kavi': 'Я Кави',
  'Ya Metin': 'Я Мәтин',
  'Ya Veliy': 'Я Вели',
  'Ya Hamid': 'Я Хамид',
  'Ya Muhsi': 'Я Мухси',
  'Ya Mubdi': 'Я Мубди',
  'Ya Muid': 'Я Муид',
  'Ya Muhyi': 'Я Мухйи',
  'Ya Mümit': 'Я Мүмит',
  'Ya Hayy': 'Я Хай',
  'Ya Kayyum': 'Я Қайюм',
  'Ya Vâcid': 'Я Важид',
  'Ya Mâcid': 'Я Мажид',
  'Ya Vâhid': 'Я Вахид',
  'Ya Samed': 'Я Самед',
  'Ya Kâdir': 'Я Қадир',
  'Ya Muktedir': 'Я Муктедир',
  'Ya Mukaddim': 'Я Мукаддим',
  'Ya Muahhir': 'Я Муаххир',
  'Ya Evvel': 'Я Әуел',
  'Ya Âhir': 'Я Әхир',
  'Ya Zâhir': 'Я Заһир',
  'Ya Bâtın': 'Я Батын',
  'Ya Vâli': 'Я Вали',
  'Ya Müteâli': 'Я Мутеали',
  'Ya Berr': 'Я Берр',
  'Ya Tevvâb': 'Я Тәуаб',
  'Ya Müntekim': 'Я Мүнтеким',
  'Ya Afüvv': 'Я Афув',
  'Ya Rauf': 'Я Рауф',
  'Ya Mâlik-ül Mulk': 'Я Мәлікүл-мүлк',
  'Ya Zül Celâli vel İkrâm': 'Я Зүл-жәлали уәл-икрам',
  'Ya Muksit': 'Я Муксит',
  'Ya Câmi': 'Я Жами',
  'Ya Ganiyy': 'Я Ғани',
  'Ya Muğni': 'Я Муғни',
  'Ya Mâni': 'Я Мани',
  'Ya Dârr': 'Я Дарр',
  'Ya Nâfi': 'Я Нафи',
  'Ya Nûr': 'Я Нұр',
  'Ya Hâdi': 'Я Хади',
  'Ya Bâdi': 'Я Бади',
  'Ya Bâki': 'Я Бақи',
  'Ya Vâris': 'Я Варис',
  'Ya Reşid': 'Я Рашид',
  'Ya Sabur': 'Я Сабур',
};

const DUA_TITLE_RU_TO_KK: Record<string, string> = {
  'Молитва о благодати': 'Береке дұасы',
  'Молитва о дозволенном уделе': 'Халал ризық дұасы',
  'Молитва упования': 'Тәуекел дұасы',
  'Аллахумма Раббан-Нас': 'Аллахумма Раббан-нас',
  'Молитва об исцелении': 'Шипа дұасы',
  'Молитва об исцелении сердца': 'Жүрек шипасы дұасы',
  'Молитва пророка Айюба': 'Пайғамбар Айюб дұасы',
  'Молитва при посещении больного': 'Ауруға кіру дұасы',
  'Молитва о здоровье': 'Денсаулық дұасы',
  "Хасбуналлаху ва Ни'маль-Вакиль": "Хасбуналлаху жә ни'мәл-уакиль",
  'Ля Хауля валя Куввата': 'Лә хаула жә лә қуввата',
  'Субханаллахи ва Бихамдихи': 'Субханаллахи жә бихамдихи',
  'Молитва от тревоги': 'Мұңай дұасы',
  'Молитва покорности': 'Разылық дұасы',
  'Аятуль-Курси': 'Аят әл-Күрсі',
  'Сура Аль-Фаляк': 'Әл-Фаляқ сүресі',
  'Сура Ан-Нас': 'Ән-Нас сүресі',
  'Утренняя молитва защиты': 'Таңертеңгі қорғаныс дұасы',
  'Вечерняя молитва защиты': 'Кешкі қорғаныс дұасы',
  'Дорожная молитва': 'Жол дұасы',
  'Аллахумма Салли Аля Мухаммад': 'Аллахумма салли аля Мухаммад',
  'Благородный Салават': 'Ұлы салават',
  'Ибрагимийский Салават': 'Ибраһимий салават',
  'Пятничный Салават': 'Жұма салаваты',
  'Краткий Салават': 'Қысқа салават',
  'Салават Тунджина': 'Тунжина салаваты',
  'Молитва о мире в семье': 'Отбасы тыныштығы дұасы',
  'Молитва о единстве сердец': 'Жүрек бірлігі дұасы',
  'Молитва о прощении': 'Кешірім дұасы',
  'Молитва о праведном супруге': 'Салиқ жұбай дұасы',
  'Молитва о благодати в работе': 'Жұмыс берекесі дұасы',
  'Молитва при входе в дом': 'Үйге кіру дұасы',
  'Молитва о новом начале': 'Жаңа бастама дұасы',
  'Молитва об облегчении дел': 'Істі жеңілдету дұасы',
  'Sabır Niyeti': 'Сабыр ниеті',
  'Şükür Niyeti': 'Шүкір ниеті',
  'Tövbe Niyeti': 'Тәубе ниеті',
  'Hidayet Niyeti': 'Хидаят ниеті',
  'Kalp Nuru': 'Жүрек нұры',
  'Af Niyeti': 'Кешірім ниеті',
  'İlim Niyeti': 'Ілім ниеті',
  'Sıkıntı Duası': 'Мұңай дұасы',
  'Yardım Duası': 'Көмек дұасы',
  Subhanallah: 'Субханаллах',
  Alhamdulillah: 'Әлхамдулиллах',
  'Allahu Akbar': 'Аллаху акбар',
  'La ilaha illallah': 'Лә иляһа иллаллах',
  Astaghfirullah: 'Астағфируллах',
  Hasbunallahu: 'Хасбуналлаху',
  'Inna lillah': 'Инна лиллаһ',
  Bismillah: 'Бисмиллаһ',
  'Salawat Kısa': 'Қысқа салават',
  Rabbena: 'Раббана',
};

const TR_ESMA_TO_KK: Record<string, string> = {
  Rezzâk: 'Раззақ',
  Fettâh: 'Фаттах',
  Vehhâb: 'Ваххаб',
  Ğanî: 'Ғани',
  Muğnî: 'Муғни',
  Bâsıt: 'Басит',
  Kerîm: 'Кәрім',
  Şâfî: 'Шафи',
  Kâfî: 'Кафи',
  Selâm: 'Салям',
  Mümin: 'Мүмин',
  Halîm: 'Халим',
  Hâfız: 'Хафиз',
  Rahmân: 'Рахман',
  Rahîm: 'Рахим',
  Melik: 'Мәлік',
  Kuddûs: 'Құдыс',
  Azîz: 'Әзиз',
  Cebbâr: 'Жаббар',
  Hâlık: 'Халық',
  Alîm: 'Әлим',
  Kâdir: 'Қадир',
  Semî: 'Сами',
  Basîr: 'Басир',
  Tevvâb: 'Тәуаб',
  Vedûd: 'Вадуд',
  "Câmi'": 'Жами',
  Latîf: 'Ләтиф',
  Muyessir: 'Мүйіссир',
};

/** Turkish Yâ / Latin Ya esma → Kazakh Cyrillic title */
export function esmaTrToKkTitle(tr: string): string {
  const trimmed = tr.trim();
  const m = trimmed.match(/^Y[âa]\s+(.+)$/u);
  if (!m) return trimmed;
  const name = m[1].replace(/\.$/, '');
  const latinKey = `Ya ${name}`;
  if (ESMA_LATIN_TO_KK[latinKey]) return ESMA_LATIN_TO_KK[latinKey];
  const kk = TR_ESMA_TO_KK[name];
  return kk ? `Я ${kk}` : `Я ${name}`;
}

export function toKkDhikrTitle(titleRu?: string, titleEn?: string, titleTr?: string): string {
  if (titleRu) {
    if (ESMA_RU_TO_KK[titleRu]) return ESMA_RU_TO_KK[titleRu];
    if (DUA_TITLE_RU_TO_KK[titleRu]) return DUA_TITLE_RU_TO_KK[titleRu];
    if (ESMA_LATIN_TO_KK[titleRu]) return ESMA_LATIN_TO_KK[titleRu];
    if (titleRu.startsWith('Я ')) {
      return titleRu
        .replace(/Раззак/, 'Раззақ')
        .replace(/Гани/, 'Ғани')
        .replace(/Мугни/, 'Муғни')
        .replace(/Куддус/, 'Құдыс')
        .replace(/Карим/, 'Кәрім')
        .replace(/Малик/, 'Мәлік')
        .replace(/Халик/, 'Халық')
        .replace(/Алим/, 'Әлим')
        .replace(/Кадир/, 'Қадир')
        .replace(/Азиз/, 'Әзиз')
        .replace(/Латиф/, 'Ләтиф')
        .replace(/Таввааб/, 'Тәуаб')
        .replace(/Муйессир/, 'Мүйіссир');
    }
    if (titleRu.startsWith('Ya ')) {
      return ESMA_LATIN_TO_KK[titleRu] ?? esmaTrToKkTitle(titleRu.replace(/^Ya/, 'Yâ'));
    }
  }

  if (titleTr && /^Yâ\s+/u.test(titleTr)) return esmaTrToKkTitle(titleTr);

  if (titleEn?.startsWith('Ya ')) {
    return ESMA_LATIN_TO_KK[titleEn] ?? esmaTrToKkTitle(titleEn.replace(/^Ya/, 'Yâ'));
  }

  return titleRu ?? titleEn ?? titleTr ?? '';
}
