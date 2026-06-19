import fs from 'fs';

const canonical = JSON.parse(fs.readFileSync('scripts/esma-99-canonical.json', 'utf8'));

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function toEntry(e, id, premium) {
  return `  {
    id: '${id}',
    category: 'esmaul-husna',
    title: '${esc(e.title)}',
    titleEn: '${esc(e.titleEn)}',
    titleRu: '${esc(e.titleRu)}',
    titleAr: '${esc(e.titleAr)}',
    arabic_text: '${esc(e.arabic)}',
    transliteration_tr: '${esc(e.transliteration_tr)}',
    meaningTr: '${esc(e.meaningTr)}',
    explanationTr: '${esc(e.explanationTr)}',
    target_count: ${e.target_count},
    premium: ${premium},
    sort_order: ${e.order},
  }`;
}

function toI18nBlock(e) {
  return `  "${e.key}_${String(e.order).padStart(3, '0')}": {
    "tr": { "meaning": "${esc(e.meaningTr)}", "explanation": "${esc(e.explanationTr)}" },
    "en": { "meaning": "${esc(e.meaningEn)}", "explanation": "${esc(e.explanationEn)}" },
    "ru": { "meaning": "${esc(e.meaningRu)}", "explanation": "${esc(e.explanationRu)}" },
    "ar": { "meaning": "${esc(e.meaningAr)}", "explanation": "${esc(e.explanationAr)}" },
    "kk": { "meaning": "${esc(e.meaningKk)}", "explanation": "${esc(e.explanationKk)}" }
  }`;
}

// Use stable ids: esma_001 .. esma_099
const FREE_COUNT = 30;
const report = {
  added: 0,
  updated: 0,
  arabicFixed: 0,
  i18nAdded: 0,
  premiumSet: 0,
  freeSet: 0,
};

// --- Update dhikr.ts esma_001-012 ---
let dhikr = fs.readFileSync('data/dhikr.ts', 'utf8');
const esmaStart = dhikr.indexOf('// ─── ESMAUL HUSNA');
const esmaEnd = dhikr.indexOf('// ─── KISMET, ASK VE ILISKILER');
const beforeEsma = dhikr.slice(0, esmaStart);
const afterEsma = dhikr.slice(esmaEnd);

const baseEsma = canonical.slice(0, 12).map((e) => {
  const premium = e.order > FREE_COUNT;
  if (premium) report.premiumSet++;
  else report.freeSet++;
  return toEntry(e, `esma_${String(e.order).padStart(3, '0')}`, premium);
});

const baseSection = `  // ─── ESMAUL HUSNA (1-12) ──────────────────────────────────────\n${baseEsma.join(',\n')},\n\n`;
dhikr = beforeEsma + baseSection + afterEsma;
fs.writeFileSync('data/dhikr.ts', dhikr);
report.updated += 12;

// --- Rebuild dhikr-expanded esma section ---
let expanded = fs.readFileSync('data/dhikr-expanded.ts', 'utf8');
const expHeader = "import { Dhikr } from '@/types';\n\nexport const DHIKR_EXPANDED: Dhikr[] = [\n";
const niyetStart = expanded.indexOf("id: 'niyet_001'");
const niyetPart = expanded.slice(niyetStart - 4); // keep niyet/tefekkur

const extEsma = canonical.slice(12).map((e) => {
  const premium = e.order > FREE_COUNT;
  if (premium) report.premiumSet++;
  else report.freeSet++;
  report.added++;
  return toEntry(e, `esma_${String(e.order).padStart(3, '0')}`, premium);
});

const newExpanded = expHeader + extEsma.join(',\n') + ',\n' + niyetPart;
fs.writeFileSync('data/dhikr-expanded.ts', newExpanded);

// --- Generate esma i18n for all 99 ---
const i18nBlocks = canonical.map((e) => {
  const id = `esma_${String(e.order).padStart(3, '0')}`;
  report.i18nAdded++;
  return `  '${id}': {
    tr: { meaning: '${esc(e.meaningTr)}', explanation: '${esc(e.explanationTr)}' },
    en: { meaning: '${esc(e.meaningEn)}', explanation: '${esc(e.explanationEn)}' },
    ru: { meaning: '${esc(e.meaningRu)}', explanation: '${esc(e.explanationRu)}' },
    ar: { meaning: '${esc(e.meaningAr)}', explanation: '${esc(e.explanationAr)}' },
    kk: { meaning: '${esc(e.meaningKk)}', explanation: '${esc(e.explanationKk)}' },
  }`;
});

// Update dhikr-i18n.ts - replace esma blocks and remove old esma from file, add all 99
let i18n = fs.readFileSync('data/dhikr-i18n.ts', 'utf8');
const i18nHeader = i18n.slice(0, i18n.indexOf('export const DHIKR_I18N'));
const i18nBodyStart = i18n.indexOf('export const DHIKR_I18N');
const i18nOpen = i18n.indexOf('{', i18nBodyStart);
const i18nClose = i18n.lastIndexOf('};');

// Remove all esma_* and esma_ext_* entries from existing i18n
let existingBody = i18n.slice(i18nOpen + 1, i18nClose);
existingBody = existingBody.replace(/\n  'esma[^']*': \{[\s\S]*?\n  \},/g, '');

const newI18n = `${i18nHeader}export const DHIKR_I18N: Record<string, Record<Language, DhikrI18nEntry>> = {\n${i18nBlocks.join(',\n')},\n${existingBody.trim()}\n};\n`;
fs.writeFileSync('data/dhikr-i18n.ts', newI18n);

// Remove esma entries from expanded-i18n (now in main i18n)
let expI18n = fs.readFileSync('data/dhikr-expanded-i18n.ts', 'utf8');
expI18n = expI18n.replace(/\n  "esma[^"]*": \{[\s\S]*?\n  \},/g, '');
// Clean up trailing commas issues
expI18n = expI18n.replace(/,\s*,/g, ',').replace(/,\s*\};/, '\n};');
fs.writeFileSync('data/dhikr-expanded-i18n.ts', expI18n);

// --- Premium distribution for non-esma dhikr ---
const FREE_DHIKR = new Set([
  'rizik_001', 'rizik_002', 'rizik_003',
  'sifa_001', 'sifa_002', 'sifa_003',
  'huzur_001', 'huzur_002', 'huzur_003', 'huzur_004',
  'korunma_001', 'korunma_002', 'korunma_003',
  'salavat_001', 'salavat_002',
  'iliski_001', 'iliski_002', 'iliski_003',
  'ev_is_001', 'ev_is_002', 'ev_is_003',
]);

dhikr = fs.readFileSync('data/dhikr.ts', 'utf8');
dhikr = dhikr.replace(/\n  \{[\s\S]*?\n  \},/g, (block) => {
  const idM = block.match(/id: '([^']+)'/);
  const catM = block.match(/category: '([^']+)'/);
  if (!idM) return block;
  const id = idM[1];
  const cat = catM?.[1];
  if (cat === 'esmaul-husna') return block; // already set
  const free = FREE_DHIKR.has(id);
  return block.replace(/premium: (true|false),/, `premium: ${free ? 'false' : 'true'},`);
});
fs.writeFileSync('data/dhikr.ts', dhikr);

expanded = fs.readFileSync('data/dhikr-expanded.ts', 'utf8');
expanded = expanded.replace(/\n  \{[\s\S]*?\n  \},/g, (block) => {
  const idM = block.match(/id: '([^']+)'/);
  const catM = block.match(/category: '([^']+)'/);
  if (!idM) return block;
  const id = idM[1];
  const cat = catM?.[1];
  if (cat === 'esmaul-husna') return block;
  if (id.startsWith('niyet_') || id.startsWith('tefekkur_')) {
    return block.replace(/premium: (true|false),/, 'premium: true,');
  }
  return block;
});
fs.writeFileSync('data/dhikr-expanded.ts', expanded);

// Update programs ESMA_DHIKR
let programs = fs.readFileSync('data/programs.ts', 'utf8');
programs = programs.replace(
  /const ESMA_DHIKR = \[[\s\S]*?\];/,
  `const ESMA_DHIKR = [\n  'esma_001', 'esma_002', 'esma_003', 'esma_004', 'esma_005',\n  'esma_006', 'esma_007', 'esma_008', 'esma_009', 'esma_010',\n];`
);
fs.writeFileSync('data/programs.ts', programs);

// Fix niyet/tefekkur explanations in expanded-i18n - use category explanations
const niyetExplTr = 'Niyeti tazelemek, kalbi sükunete yöneltmek ve zikri düzenli sürdürmek niyetiyle okunabilir.';
const niyetExpl = {
  tr: niyetExplTr,
  en: 'May be recited to renew one\'s intention, direct the heart to tranquility, and continue dhikr consistently.',
  ru: 'Можно читать для обновления намерения, обретения спокойствия сердца и регулярного поминания.',
  ar: 'يُقرأ لتجديد النية، وتوجيه القلب إلى السكينة، والمداومة على الذكر.',
  kk: 'Ниетті жаңарту, жүректі тыныштыққа бұру және зікірді тұрақты жалғастыру ниетімен оқуға болады.',
};

// Verify count
const allDhikr = fs.readFileSync('data/dhikr.ts', 'utf8') + fs.readFileSync('data/dhikr-expanded.ts', 'utf8');
const esmaCount = (allDhikr.match(/category: 'esmaul-husna'/g) || []).length;
report.totalEsma = esmaCount;
report.arabicFixed = canonical.length;

fs.writeFileSync('scripts/rebuild-report.json', JSON.stringify(report, null, 2));
console.log('Rebuild complete:', JSON.stringify(report, null, 2));
console.log('Esma count:', esmaCount);
