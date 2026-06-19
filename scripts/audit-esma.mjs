import fs from 'fs';

function parseDhikrFile(path) {
  const c = fs.readFileSync(path, 'utf8');
  return [...c.matchAll(
    /\{\s*id: '([^']+)'[\s\S]*?category: '([^']+)'[\s\S]*?title: '((?:\\'|[^'])*)'[\s\S]*?arabic_text: '((?:\\'|[^'])*)'[\s\S]*?meaningTr: '((?:\\'|[^'])*)'[\s\S]*?explanationTr: '((?:\\'|[^'])*)'[\s\S]*?premium: (true|false)/g
  )].map((m) => ({
    id: m[1],
    category: m[2],
    title: m[3].replace(/\\'/g, "'"),
    arabic: m[4].replace(/\\'/g, "'"),
    meaningTr: m[5].replace(/\\'/g, "'"),
    explanationTr: m[6].replace(/\\'/g, "'"),
    premium: m[7] === 'true',
    file: path,
  }));
}

const base = parseDhikrFile('data/dhikr.ts');
const expanded = parseDhikrFile('data/dhikr-expanded.ts');
const all = [...base, ...expanded];

const esma = all.filter((d) => d.category === 'esmaul-husna');
const ids = all.map((d) => d.id);
const dupIds = ids.filter((id, i) => ids.indexOf(id) !== i);

const badArabic = esma.filter((d) => {
  const ar = d.arabic.trim();
  return ar.length < 6 || ar === 'يَا' || ar === 'يا' || !ar.includes('يَا');
});

const genericExpl = all.filter((d) =>
  d.explanationTr.includes('Premium koleksiyon')
);

console.log('=== ESMA ===');
console.log('Total esma:', esma.length);
console.log('Base esma:', base.filter((d) => d.category === 'esmaul-husna').length);
console.log('Expanded esma:', expanded.filter((d) => d.category === 'esmaul-husna').length);
console.log('Duplicate IDs:', [...new Set(dupIds)]);
console.log('Bad Arabic:', badArabic.length);
badArabic.forEach((d) => console.log(' ', d.id, d.arabic));

console.log('\n=== ALL DHIKR ===');
console.log('Total:', all.length);
console.log('Premium:', all.filter((d) => d.premium).length);
console.log('Free:', all.filter((d) => !d.premium).length);
console.log('Generic explanation:', genericExpl.length);

// i18n coverage
const i18n = fs.readFileSync('data/dhikr-i18n.ts', 'utf8');
const i18nIds = [...new Set([...i18n.matchAll(/'([a-z_0-9]+)':/g)].map((m) => m[1]))];
const expI18n = fs.readFileSync('data/dhikr-expanded-i18n.ts', 'utf8');
const expIds = [...expI18n.matchAll(/"([a-z_0-9]+)":/g)].map((m) => m[1]);

const missingI18n = all.filter((d) => !i18nIds.includes(d.id) && !expIds.includes(d.id));
console.log('\nMissing i18n:', missingI18n.length, missingI18n.map((d) => d.id).join(', '));

// List esma titles
console.log('\n=== ESMA TITLES ===');
esma.sort((a, b) => a.id.localeCompare(b.id)).forEach((d, i) => {
  console.log(`${i + 1}. ${d.id} | ${d.title} | ${d.arabic} | premium=${d.premium}`);
});
