/**
 * Apple App Store Review — full content & compliance audit.
 * Run: node scripts/apple-review-audit.mjs
 */
import fs from 'fs';

const LANGS = ['tr', 'en', 'ru', 'kk', 'ar'];
const dhikrSrc =
  fs.readFileSync('data/dhikr.ts', 'utf8') + fs.readFileSync('data/dhikr-expanded.ts', 'utf8');
const i18nSrc = fs.readFileSync('data/dhikr-i18n.ts', 'utf8');
const expandedI18nSrc = fs.readFileSync('data/dhikr-expanded-i18n.ts', 'utf8');
const lcSrc = fs.readFileSync('context/LanguageContext.tsx', 'utf8');

function extractDhikrIds(src) {
  return [...src.matchAll(/id: '([^']+)'/g)].map((m) => m[1]);
}

function extractI18nBlock(src, id) {
  const re = new RegExp(`'${id}':\\s*\\{([\\s\\S]*?)\\n  \\},`, 'm');
  const m = src.match(re);
  return m?.[1] ?? null;
}

function fieldForLang(block, lang, field) {
  const re = new RegExp(`${lang}:\\s*\\{[\\s\\S]*?${field}:\\s*'((?:\\\\'|[^'])*)'`, 'm');
  const m = block?.match(re);
  return m?.[1]?.replace(/\\'/g, "'")?.trim() ?? '';
}

function hasLatin(s) {
  return /[A-Za-zğüşıöçĞÜŞİÖÇâîûÂÎÛ]/.test(s);
}

const ids = extractDhikrIds(dhikrSrc);
const uniqueIds = [...new Set(ids)];
const esmaIds = uniqueIds.filter((id) => id.startsWith('esma_'));

const missingByLang = Object.fromEntries(LANGS.map((l) => [l, []]));
const latinMeaningKk = [];
const latinMeaningRu = [];
const emptyFields = [];

for (const id of uniqueIds) {
  const block = extractI18nBlock(i18nSrc, id) ?? extractI18nBlock(expandedI18nSrc, id);
  for (const lang of LANGS) {
    const meaning = fieldForLang(block, lang, 'meaning');
    const explanation = fieldForLang(block, lang, 'explanation');
    if (!meaning) missingByLang[lang].push({ id, field: 'meaning' });
    if (!explanation) missingByLang[lang].push({ id, field: 'explanation' });
    if (lang === 'kk' && meaning && hasLatin(meaning)) latinMeaningKk.push(id);
    if (lang === 'ru' && meaning && /[A-Za-z]/.test(meaning)) latinMeaningRu.push(id);
  }
  const arM = dhikrSrc.match(new RegExp(`id: '${id}'[\\s\\S]*?arabic_text: '([^']+)'`));
  const ar = arM?.[1] ?? '';
  if (!ar || ar.length < 3) emptyFields.push({ id, field: 'arabic_text' });
}

const badEsmaArabic = esmaIds.filter((id) => {
  const m = dhikrSrc.match(new RegExp(`id: '${id}'[\\s\\S]*?arabic_text: '([^']+)'`));
  const ar = m?.[1] ?? '';
  return ar.length < 6 || ar === 'يَا' || !ar.includes('يَا');
});

let freeDhikr = 0;
let premiumDhikr = 0;
for (const id of uniqueIds) {
  const m = dhikrSrc.match(new RegExp(`id: '${id}'[\\s\\S]*?premium: (true|false)`));
  if (m?.[1] === 'false') freeDhikr++;
  else premiumDhikr++;
}

let esmaFree = 0;
let esmaPremium = 0;
for (const id of esmaIds) {
  const m = dhikrSrc.match(new RegExp(`id: '${id}'[\\s\\S]*?premium: (true|false)`));
  if (m?.[1] === 'false') esmaFree++;
  else esmaPremium++;
}

// UI translation key parity
const langBlocks = {};
for (const lang of LANGS) {
  const re = new RegExp(`\\n  ${lang}: \\{([\\s\\S]*?)\\n  \\},?\\n  (?:en|ar|ru|kk|tr):`, 'm');
  const m = lcSrc.match(re) ?? lcSrc.match(new RegExp(`\\n  ${lang}: \\{([\\s\\S]*?)\\n  \\},?\\n  \\};`));
  langBlocks[lang] = m?.[1] ?? '';
}
const keyRe = /(\w+): '/g;
const trKeys = new Set([...langBlocks.tr.matchAll(keyRe)].map((m) => m[1]));
const missingUiKeys = {};
for (const lang of LANGS) {
  if (lang === 'tr') continue;
  const keys = new Set([...langBlocks[lang].matchAll(keyRe)].map((m) => m[1]));
  missingUiKeys[lang] = [...trKeys].filter((k) => !keys.has(k));
}

// Google Play user-visible strings
const googleHits = [];
const userFiles = [
  'context/LanguageContext.tsx',
  'app/(tabs)/premium.tsx',
  'app/settings.tsx',
  'app/(tabs)/index.tsx',
];
for (const f of userFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (/google play|play store|google billing|google subscription|google purchase|google sign|google login/i.test(line)) {
      googleHits.push({ file: f, line: i + 1, text: line.trim().slice(0, 120) });
    }
  });
}

const report = {
  generatedAt: new Date().toISOString(),
  dhikr: {
    total: uniqueIds.length,
    free: freeDhikr,
    premium: premiumDhikr,
  },
  esma: {
    total: esmaIds.length,
    free: esmaFree,
    premium: esmaPremium,
    badArabic: badEsmaArabic.length,
    badArabicIds: badEsmaArabic.slice(0, 10),
  },
  missingTranslations: Object.fromEntries(
    LANGS.map((l) => [l, missingByLang[l].length])
  ),
  missingTranslationSamples: Object.fromEntries(
    LANGS.map((l) => [l, missingByLang[l].slice(0, 5)])
  ),
  kkLatinMeaningCount: latinMeaningKk.length,
  kkLatinMeaningSamples: latinMeaningKk.slice(0, 10),
  ruLatinMeaningCount: latinMeaningRu.length,
  emptyArabicCount: emptyFields.length,
  uiMissingKeys: Object.fromEntries(
    LANGS.filter((l) => l !== 'tr').map((l) => [l, missingUiKeys[l].length])
  ),
  uiMissingKeySamples: Object.fromEntries(
    LANGS.filter((l) => l !== 'tr').map((l) => [l, missingUiKeys[l].slice(0, 8)])
  ),
  googlePlayReferencesRemaining: googleHits,
  appleReadiness: {
    noGooglePlayOnIosStrings: googleHits.filter((h) => !h.text.includes('billing_notice_android')).length === 0,
    esmaComplete: esmaIds.length === 99 && badEsmaArabic.length === 0,
    privacyUrl: 'https://zikr.app/privacy',
    eulaUrl: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
  },
};

const score =
  (googleHits.length === 0 ? 15 : 5) +
  (esmaIds.length === 99 ? 15 : 0) +
  (badEsmaArabic.length === 0 ? 10 : 0) +
  (missingByLang.en.length === 0 ? 10 : 5) +
  (missingByLang.kk.length < 20 ? 10 : 5) +
  (latinMeaningKk.length < 30 ? 10 : 5) +
  (missingUiKeys.en?.length === 0 ? 15 : 10) +
  (report.appleReadiness.esmaComplete ? 15 : 5);

report.appleReviewReadinessScore = `${Math.min(100, score)}/100`;

console.log(JSON.stringify(report, null, 2));
fs.writeFileSync('scripts/apple-review-audit-report.json', JSON.stringify(report, null, 2));
