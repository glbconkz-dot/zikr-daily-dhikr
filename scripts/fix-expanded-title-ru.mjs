import fs from 'node:fs';
import path from 'node:path';

const EXPANDED_PATH = path.join(process.cwd(), 'data', 'dhikr-expanded.ts');

const ESMA_EN_TO_RU = {
  'Ya Quddus': 'Я Куддус',
  'Ya Selam': 'Я Салям',
  'Ya Mümin': 'Я Мумин',
  'Ya Muheymin': 'Я Мухеймин',
  'Ya Aziz': 'Я Азиз',
  'Ya Cebbâr': 'Я Джаббар',
  'Ya Mutekebbir': 'Я Мутакеббир',
  'Ya Hâlık': 'Я Халик',
  'Ya Bâri': 'Я Бари',
  'Ya Musavvir': 'Я Мусаввир',
  'Ya Gaffâr': 'Я Гаффар',
  'Ya Kahhâr': 'Я Каххар',
  'Ya Vedûd': 'Я Вадуд',
  'Ya Mecid': 'Я Маджид',
  'Ya Bâis': 'Я Баис',
  'Ya Şehid': 'Я Шахид',
  'Ya Hak': 'Я Хакк',
  'Ya Vekil': 'Я Вакиль',
  'Ya Kavi': 'Я Кавий',
  'Ya Metin': 'Я Матин',
  'Ya Veliy': 'Я Валий',
  'Ya Hamid': 'Я Хамид',
  'Ya Muhsi': 'Я Мухсий',
  'Ya Mubdi': 'Я Мубди',
  'Ya Muid': 'Я Муид',
  'Ya Muhyi': 'Я Мухйи',
  'Ya Mümit': 'Я Мумит',
  'Ya Hayy': 'Я Хайй',
  'Ya Kayyum': 'Я Кайюм',
  'Ya Vâcid': 'Я Вадид',
  'Ya Mâcid': 'Я Маджид',
  'Ya Vâhid': 'Я Вахид',
  'Ya Samed': 'Я Самед',
  'Ya Kâdir': 'Я Кадир',
  'Ya Muktedir': 'Я Муктадир',
  'Ya Mukaddim': 'Я Мукаддим',
  'Ya Muahhir': 'Я Муаххир',
  'Ya Evvel': 'Я Авваль',
  'Ya Âhir': 'Я Ахир',
  'Ya Zâhir': 'Я Захир',
  'Ya Bâtın': 'Я Батин',
  'Ya Vâli': 'Я Вали',
  'Ya Müteâli': 'Я Мутали',
  'Ya Berr': 'Я Барр',
  'Ya Tevvâb': 'Я Тавваб',
  'Ya Müntekim': 'Я Мунтаким',
  'Ya Afüvv': 'Я Афувв',
  'Ya Rauf': 'Я Рауф',
  'Ya Mâlik-ül Mulk': 'Я Маликуль-Мульк',
  'Ya Zül Celâli vel İkrâm': 'Я Зуль-Джалали валь-Икрам',
  'Ya Muksit': 'Я Муксит',
  'Ya Câmi': 'Я Джами',
  'Ya Ganiyy': 'Я Ганий',
  'Ya Muğni': 'Я Мугни',
  'Ya Mâni': 'Я Мани',
  'Ya Dârr': 'Я Дарр',
  'Ya Nâfi': 'Я Нафи',
  'Ya Nûr': 'Я Нур',
  'Ya Hâdi': 'Я Хади',
  'Ya Bâdi': 'Я Бади',
  'Ya Bâki': 'Я Баки',
  'Ya Vâris': 'Я Варис',
  'Ya Reşid': 'Я Рашид',
  'Ya Sabur': 'Я Сабур',
};

const MANUAL_TITLES_RU = {
  niyet_001: 'Намерение на терпение',
  niyet_002: 'Намерение на благодарность',
  niyet_003: 'Намерение на покаяние',
  niyet_004: 'Намерение на прямой путь',
  niyet_005: 'Свет сердца',
  niyet_006: 'Намерение на прощение',
  niyet_007: 'Намерение на знание',
  niyet_008: 'Намерение на покаяние',
  niyet_009: 'Дуа в трудности',
  niyet_010: 'Дуа о помощи',
  tefekkur_001: 'Субханаллах',
  tefekkur_002: 'Альхамдулиллях',
  tefekkur_003: 'Аллаху Акбар',
  tefekkur_004: 'Ля иляха илляллах',
  tefekkur_005: 'Астагфируллах',
  tefekkur_006: 'Хасбияллах',
  tefekkur_007: 'Инна лилляхи ва инна иляйхи раджиун',
  tefekkur_008: 'Бисмиллях',
  tefekkur_009: 'Короткий салават',
  tefekkur_010: 'Раббана',
};

let content = fs.readFileSync(EXPANDED_PATH, 'utf8');
let fixed = 0;

content = content.replace(
  /id: '([^']+)'[\s\S]*?titleEn: '([^']+)'[\s\S]*?titleRu: '([^']+)'/g,
  (match, id, titleEn, titleRu) => {
    const next =
      ESMA_EN_TO_RU[titleEn] ?? MANUAL_TITLES_RU[id] ?? titleRu;
    if (next !== titleRu) {
      fixed++;
      return match.replace(`titleRu: '${titleRu}'`, `titleRu: '${next}'`);
    }
    return match;
  }
);

fs.writeFileSync(EXPANDED_PATH, content, 'utf8');
console.log('Fixed titleRu:', fixed);
