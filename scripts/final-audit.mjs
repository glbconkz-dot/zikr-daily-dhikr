import fs from 'fs';

const c = fs.readFileSync('data/dhikr.ts', 'utf8') + fs.readFileSync('data/dhikr-expanded.ts', 'utf8');
const ids = [...c.matchAll(/id: '([^']+)'/g)].map((m) => m[1]);
const esma = ids.filter((id) => id.startsWith('esma_'));
let esmaFree = 0;
let esmaPremium = 0;
for (const id of esma) {
  const m = c.match(new RegExp(`id: '${id}'[\\s\\S]*?premium: (true|false)`));
  if (m?.[1] === 'false') esmaFree++;
  else esmaPremium++;
}
const badAr = esma.filter((id) => {
  const m = c.match(new RegExp(`id: '${id}'[\\s\\S]*?arabic_text: '([^']+)'`));
  const ar = m?.[1] || '';
  return ar.length < 6 || !ar.includes('يَا');
});
console.log(JSON.stringify({
  totalDhikr: ids.length,
  uniqueIds: new Set(ids).size,
  esmaTotal: esma.length,
  esmaFree,
  esmaPremium,
  badArabic: badAr.length,
  has001: esma.includes('esma_001'),
  has099: esma.includes('esma_099'),
}, null, 2));
