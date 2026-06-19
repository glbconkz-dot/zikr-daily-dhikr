import fs from 'fs';

const dhikr = fs.readFileSync('data/dhikr.ts', 'utf8') + fs.readFileSync('data/dhikr-expanded.ts', 'utf8');
const esma = [...dhikr.matchAll(/id: '(esma[^']*)'[\s\S]*?arabic_text: '([^']+)'/g)];
const broken = esma.filter((m) => {
  const ar = m[2];
  return ar.length < 5 || ar === 'يَا' || ar === 'يا' || !ar.includes('يَا');
});
console.log('Esma total:', esma.length);
console.log('Broken arabic:', broken.length);
broken.forEach((m) => console.log(m[1], m[2]));

const expanded = fs.readFileSync('data/dhikr-expanded-i18n.ts', 'utf8');
const kkBad = [...expanded.matchAll(/kk:\s*\{[\s\S]*?meaning: '([^']+)'/g)].filter((m) =>
  /[A-Za-zğüşıöçĞÜŞİÖÇ]/.test(m[1])
);
console.log('Expanded kk latin in meaning:', kkBad.length);

const i18n = fs.readFileSync('data/dhikr-i18n.ts', 'utf8');
const ids = [...i18n.matchAll(/'([a-z_0-9]+)':/g)].map((m) => m[1]);
const uniqueIds = [...new Set(ids)];
console.log('dhikr-i18n entries:', uniqueIds.length);
