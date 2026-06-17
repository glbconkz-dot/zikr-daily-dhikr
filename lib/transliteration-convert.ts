/** Turkish-style Latin → English Islamic transliteration */
export function toEnTransliteration(tr: string): string {
  return tr
    .replace(/Allâhümme/gi, 'Allahumma')
    .replace(/Allâhu/g, 'Allahu')
    .replace(/Allâh/gi, 'Allah')
    .replace(/Bismillâh/gi, 'Bismillah')
    .replace(/Yâ/g, 'Ya')
    .replace(/yâ/g, 'ya')
    .replace(/â/g, 'a')
    .replace(/Â/g, 'A')
    .replace(/î/g, 'i')
    .replace(/Î/g, 'I')
    .replace(/û/g, 'u')
    .replace(/Û/g, 'U')
    .replace(/ü/g, 'u')
    .replace(/Ü/g, 'U')
    .replace(/ö/g, 'o')
    .replace(/Ö/g, 'O')
    .replace(/ş/g, 'sh')
    .replace(/Ş/g, 'Sh')
    .replace(/ç/g, 'ch')
    .replace(/Ç/g, 'Ch')
    .replace(/ğ/g, 'gh')
    .replace(/Ğ/g, 'Gh')
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'I');
}

const PHRASES_RU: [RegExp, string][] = [
  [/Allâhümme/gi, 'Аллахумма'],
  [/Allâhu/g, 'Аллаху'],
  [/Allâh/gi, 'Аллах'],
  [/Bismillâh/gi, 'Бисмиллях'],
  [/Sübhân/gi, 'Субхан'],
  [/Elhamdülillâh/gi, 'Альхамдулиллях'],
  [/Estağfirullah/gi, 'Астагфируллах'],
  [/Hasbünallâhu/gi, 'Хасбуналлаху'],
  [/Hasbiyallâhu/gi, 'Хасбийаллаху'],
  [/Hasbunallâhu/gi, 'Хасбуналлаху'],
  [/Sallallâhu/gi, 'Салляллаху'],
  [/Sübhanallah/gi, 'Субханаллах'],
  [/Allahu Ekber/gi, 'Аллаху акбар'],
  [/La ilahe illallah/gi, 'Ля иляха иллаллах'],
  [/Yâ\s+/g, 'Я '],
  [/yâ\s+/g, 'я '],
  [/lâ\s+/g, 'ля '],
  [/illâ\s+/g, 'илла '],
  [/ ve /g, ' ва '],
  [/ min /g, ' мин '],
  [/ bi /g, ' би '],
  [/ fi /g, ' фи '],
  [/ fil-/g, ' фил-'],
  [/ fis-/g, ' фис-'],
  [/ velâ /g, ' вела '],
  [/ ve /g, ' ва '],
  [/Rabbi/g, 'Рабби'],
  [/Rabbenâ/g, 'Раббана'],
  [/Muhammed/gi, 'Мухаммад'],
  [/Muhammedin/gi, 'Мухаммадин'],
  [/İbrâhîm/gi, 'Ибрахим'],
];

const CHARS_RU: Record<string, string> = {
  â: 'а', Â: 'А', î: 'и', Î: 'И', û: 'у', Û: 'У',
  ü: 'у', Ü: 'У', ö: 'о', Ö: 'О', ş: 'ш', Ş: 'Ш',
  ç: 'ч', Ç: 'Ч', ğ: 'г', Ğ: 'Г', ı: 'ы', İ: 'И',
  a: 'а', A: 'А', b: 'б', B: 'Б', c: 'к', C: 'К',
  d: 'д', D: 'Д', e: 'е', E: 'Е', f: 'ф', F: 'Ф',
  g: 'г', G: 'Г', h: 'х', H: 'Х', i: 'и', I: 'И',
  j: 'дж', J: 'Дж', k: 'к', K: 'К', l: 'л', L: 'Л',
  m: 'м', M: 'М', n: 'н', N: 'Н', o: 'о', O: 'О',
  p: 'п', P: 'П', q: 'к', Q: 'К', r: 'р', R: 'Р',
  s: 'с', S: 'С', t: 'т', T: 'Т', u: 'у', U: 'У',
  v: 'в', V: 'В', w: 'в', W: 'В', x: 'кс', X: 'Кс',
  y: 'й', Y: 'Й', z: 'з', Z: 'З',
  "'": 'ъ', '-': '-', ' ': ' ',
};

/** Turkish-style Latin → Russian Cyrillic phonetic transliteration */
export function toRuTransliteration(tr: string): string {
  let s = tr;
  for (const [re, rep] of PHRASES_RU) {
    s = s.replace(re, rep);
  }
  return Array.from(s)
    .map((ch) => CHARS_RU[ch] ?? ch)
    .join('');
}

/** Russian/Cyrillic → Kazakh Cyrillic adjustments */
export function ruToKkTransliteration(ru: string): string {
  return ru
    .replace(/^Йа\s+/g, 'Я ')
    .replace(/^Va\s+/gi, 'Я ')
    .replace(/ ва /g, ' жә ')
    .replace(/ак\b/g, 'ақ')
    .replace(/ек\b/g, 'ек')
    .replace(/ик\b/g, 'ик')
    .replace(/гъ/g, 'ғ')
    .replace(/Гани\b/g, 'Ғани')
    .replace(/гу/g, 'ғу')
    .replace(/кув/g, 'қув')
    .replace(/ку/g, 'қу')
    .replace(/Куддус/g, 'Құдыс')
    .replace(/Кадир/g, 'Қадир')
    .replace(/ля /g, 'ла ')
    .replace(/илла /g, 'илла ');
}

const PHRASES_KK: [RegExp, string][] = [
  [/Allâhümme/gi, 'Аллахумма'],
  [/Allâhu/g, 'Аллаху'],
  [/Allâh/gi, 'Аллах'],
  [/Bismillâh/gi, 'Бисмиллаһ'],
  [/^Yâ\s+/g, 'Я '],
  [/^Ya\s+/g, 'Я '],
  [/\bYâ\s+/g, 'Я '],
  [/\bYa\s+/g, 'Я '],
  [/ ve /g, ' жә '],
  [/ min /g, ' мин '],
  [/ bi /g, ' би '],
];

/** Turkish-style Latin → Kazakh Cyrillic */
export function toKkTransliteration(tr: string): string {
  let s = tr;
  for (const [re, rep] of PHRASES_KK) {
    s = s.replace(re, rep);
  }
  const viaRu = ruToKkTransliteration(toRuTransliteration(s));
  return viaRu.replace(/^Йа\s+/g, 'Я ').replace(/^Va\s+/gi, 'Я ');
}

/** Short Esma pattern: "Yâ Name" — title fields often carry correct script */
export function isShortEsmaTransliteration(tr: string): boolean {
  return /^Yâ\s+\S+(\s+\S+)?\.?$/u.test(tr.trim());
}
