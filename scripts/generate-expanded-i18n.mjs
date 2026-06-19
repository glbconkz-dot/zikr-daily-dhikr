import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const EXPANDED_PATH = path.join(ROOT, 'data', 'dhikr-expanded.ts');
const MEANINGS_PATH = path.join(ROOT, 'scripts', 'expanded-meanings.json');
const OUTPUT_PATH = path.join(ROOT, 'data', 'dhikr-expanded-i18n.ts');

const EXPLANATIONS_BY_CATEGORY = {
  'esmaul-husna': {
    tr: "Allah'ın bu ismini anarak kalbi arındırma, teslimiyet ve güzel ahlak niyetiyle okunabilir.",
    en: 'May be recited with the intention of spiritual purification, surrender to Allah, and good character.',
    ru: 'Можно читать с намерением очищения сердца, покорности Аллаху и укрепления благого нрава.',
    ar: 'يُقرأ بنية تزكية القلب، والتسليم لله، والتحلي بحسن الخلق.',
    kk: 'Алланың осы көркем есімін жүректі тазарту, Аллаға бойсұну және көркем мінез ниетімен оқуға болады.',
  },
  'huzur-sukunet': {
    tr: 'Niyeti tazelemek, kalbi sükunete yöneltmek ve zikri düzenli sürdürmek niyetiyle okunabilir.',
    en: 'May be recited to renew one’s intention, direct the heart to tranquility, and continue dhikr consistently.',
    ru: 'Можно читать для обновления намерения, обретения спокойствия сердца и регулярного поминания.',
    ar: 'يُقرأ لتجديد النية، وتوجيه القلب إلى السكينة، والمداومة على الذكر.',
    kk: 'Ниетті жаңарту, жүректі тыныштыққа бұру және зікірді тұрақты жалғастыру ниетімен оқуға болады.',
  },
};

const expandedContent = fs.readFileSync(EXPANDED_PATH, 'utf8');
const meaningTranslations = JSON.parse(fs.readFileSync(MEANINGS_PATH, 'utf8'));

const entries = [...expandedContent.matchAll(/id: '([^']+)'[\s\S]*?category: '([^']+)'[\s\S]*?meaningTr: '((?:\\'|[^'])*)'/g)].map((match) => ({
  id: match[1],
  category: match[2],
  meaningTr: match[3].replace(/\\'/g, "'"),
}));

const missingMeanings = [...new Set(entries.map((entry) => entry.meaningTr))].filter((meaningTr) => !meaningTranslations[meaningTr]);
if (missingMeanings.length > 0) {
  throw new Error(`Missing translations for ${missingMeanings.length} meaningTr entries:\n${missingMeanings.join('\n')}`);
}

const generated = {};
for (const entry of entries) {
  const trn = meaningTranslations[entry.meaningTr];
  generated[entry.id] = {
    tr: {
      meaning: entry.meaningTr,
      explanation: EXPLANATIONS_BY_CATEGORY[entry.category]?.tr ?? EXPLANATIONS_BY_CATEGORY['huzur-sukunet'].tr,
    },
    en: {
      meaning: trn.en,
      explanation: EXPLANATIONS_BY_CATEGORY[entry.category]?.en ?? EXPLANATIONS_BY_CATEGORY['huzur-sukunet'].en,
    },
    ru: {
      meaning: trn.ru,
      explanation: EXPLANATIONS_BY_CATEGORY[entry.category]?.ru ?? EXPLANATIONS_BY_CATEGORY['huzur-sukunet'].ru,
    },
    ar: {
      meaning: trn.ar,
      explanation: EXPLANATIONS_BY_CATEGORY[entry.category]?.ar ?? EXPLANATIONS_BY_CATEGORY['huzur-sukunet'].ar,
    },
    kk: {
      meaning: trn.kk,
      explanation: EXPLANATIONS_BY_CATEGORY[entry.category]?.kk ?? EXPLANATIONS_BY_CATEGORY['huzur-sukunet'].kk,
    },
  };
}

const fileContent = `import { DhikrI18nEntry } from '@/data/dhikr-i18n';
import { Language } from '@/types';

export const DHIKR_EXPANDED_I18N: Record<string, Record<Language, DhikrI18nEntry>> = ${JSON.stringify(generated, null, 2)} as Record<
  string,
  Record<Language, DhikrI18nEntry>
>;
`;

fs.writeFileSync(OUTPUT_PATH, fileContent, 'utf8');
console.log(`Generated ${OUTPUT_PATH} with ${entries.length} entries.`);
