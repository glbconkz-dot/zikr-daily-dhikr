import fs from 'fs';

const ESMA_DUPLICATE_ARABIC = new Set([
  'يَا قُدُّوسُ', // esma_004 = ext_001
  'يَا عَزِيزُ',   // esma_005 = ext_005
  'يَا جَبَّارُ',  // esma_006 = ext_006
  'يَا خَالِقُ',  // esma_007 = ext_008
  'يَا قَادِرُ',  // esma_009 = ext_034
  'يَا تَوَّابُ',  // esma_012 = ext_045
]);

const FREE_ESMA_COUNT = 30;

const FREE_DHIKR_IDS = new Set([
  // Temel günlük zikirler (3 per core category)
  'rizik_001', 'rizik_002', 'rizik_003',
  'sifa_001', 'sifa_002', 'sifa_003',
  'huzur_001', 'huzur_002', 'huzur_003', 'huzur_004',
  'korunma_001', 'korunma_002', 'korunma_003',
  'salavat_001', 'salavat_002',
  'iliski_001', 'iliski_002', 'iliski_003',
  'ev_is_001', 'ev_is_002', 'ev_is_003',
  // Esma 001-030 free (set below)
]);

const PREMIUM_CATEGORIES = new Set(['huzur-sukunet']); // niyet/tefekkur in expanded

function parseBlocks(path) {
  const c = fs.readFileSync(path, 'utf8');
  return [...c.matchAll(/\{([\s\S]*?)\n  \},/g)].map((m) => m[1]);
}

function getField(block, field) {
  const m = block.match(new RegExp(`${field}: '((?:\\\\'|[^'])*)'`));
  return m ? m[1].replace(/\\'/g, "'") : null;
}

function setField(block, field, value) {
  const escaped = value.replace(/'/g, "\\'");
  if (block.includes(`${field}:`)) {
    return block.replace(new RegExp(`${field}: '((?:\\\\'|[^'])*)'`), `${field}: '${escaped}'`);
  }
  return block;
}

function setPremium(block, premium) {
  return block.replace(/premium: (true|false),/, `premium: ${premium ? 'true' : 'false'},`);
}

function setSortOrder(block, order) {
  return block.replace(/sort_order: \d+,/, `sort_order: ${order},`);
}

// Apply premium to dhikr.ts
let dhikr = fs.readFileSync('data/dhikr.ts', 'utf8');
const dhikrBlocks = dhikr.split(/\n  \{/);
let esmaOrder = 0;
let stats = { esmaFree: 0, esmaPremium: 0, dhikrFree: 0, dhikrPremium: 0 };

const updatedDhikr = dhikrBlocks.map((block, i) => {
  if (i === 0) return block;
  let b = '  {' + block;
  const id = getField(b, 'id');
  const cat = getField(b, 'category');
  if (!id) return b;

  if (cat === 'esmaul-husna') {
    esmaOrder++;
    const free = esmaOrder <= FREE_ESMA_COUNT;
    b = setPremium(b, !free);
    b = setSortOrder(b, esmaOrder);
    if (free) stats.esmaFree++;
    else stats.esmaPremium++;
    FREE_DHIKR_IDS.add(id);
  } else if (FREE_DHIKR_IDS.has(id)) {
    b = setPremium(b, false);
    stats.dhikrFree++;
  } else {
    b = setPremium(b, true);
    stats.dhikrPremium++;
  }
  return b;
});

fs.writeFileSync('data/dhikr.ts', updatedDhikr.join(''));
console.log('dhikr.ts premium updated:', stats);

// Apply to dhikr-expanded.ts
let expanded = fs.readFileSync('data/dhikr-expanded.ts', 'utf8');
const expBlocks = expanded.split(/\n  \{/);
let removedDupes = 0;
let niyetPremium = 0;

const updatedExp = expBlocks.map((block, i) => {
  if (i === 0) return block;
  let b = '  {' + block;
  const id = getField(b, 'id');
  const cat = getField(b, 'category');
  const arabic = getField(b, 'arabic_text');

  if (id?.startsWith('esma_ext_') && ESMA_DUPLICATE_ARABIC.has(arabic)) {
    removedDupes++;
    return null; // mark for removal
  }

  if (cat === 'esmaul-husna' && id?.startsWith('esma_ext_')) {
    esmaOrder++;
    const free = esmaOrder <= FREE_ESMA_COUNT;
    b = setPremium(b, !free);
    b = setSortOrder(b, esmaOrder);
    if (free) stats.esmaFree++;
    else stats.esmaPremium++;
  } else if (id?.startsWith('niyet_') || id?.startsWith('tefekkur_')) {
    b = setPremium(b, true);
    niyetPremium++;
  }

  return b;
}).filter(Boolean);

fs.writeFileSync('data/dhikr-expanded.ts', updatedExp.join(''));
console.log('Removed duplicate esma_ext:', removedDupes);
console.log('niyet/tefekkur premium:', niyetPremium);
console.log('Final esma count in order:', esmaOrder);
console.log('Esma free:', stats.esmaFree, 'premium:', stats.esmaPremium);
