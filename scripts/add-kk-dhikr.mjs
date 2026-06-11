import fs from 'fs';

const path = 'data/dhikr-i18n.ts';
let content = fs.readFileSync(path, 'utf8');

/** Adapt Russian dhikr text to Kazakh Cyrillic (Kazakhstan Islamic literature style). */
function ruToKk(ru) {
  return ru
    .replace(/О Аллах/g, 'Алла')
    .replace(/Аллаха/g, 'Алланың')
    .replace(/Аллаху/g, 'Аллаға')
    .replace(/Аллахом/g, 'Алламен')
    .replace(/который/g, 'ол')
    .replace(/которая/g, 'ол')
    .replace(/которое/g, 'ол')
    .replace(/которые/g, 'олар')
    .replace(/можно читать/g, 'оқуға болады')
    .replace(/Можно читать/g, 'Оқуға болады')
    .replace(/с намерением/g, 'ниетімен')
    .replace(/Из имён/g, 'Алланың есімдерінен')
    .replace(/Имя Аллаха/g, 'Алланың есімі')
    .replace(/для всех/g, 'барлық')
    .replace(/живых существ/g, 'тірі жандардың')
    .replace(/исцеления/g, 'шипа')
    .replace(/исцеление/g, 'шипа')
    .replace(/покой/g, 'тыныштық')
    .replace(/защит/g, 'қорғаныс')
    .replace(/благодат/g, 'береке')
    .replace(/удел/g, 'ризық')
    .replace(/пропитание/g, 'ризық')
    .replace(/щедрость/g, 'жомарттық')
    .replace(/милость/g, 'мейірім')
    .replace(/благодарност/g, 'шүкіршілік')
    .replace(/терпелив/g, 'шыдамды')
    .replace(/духовн/g, 'рухани')
    .replace(/сердц/g, 'жан')
    .replace(/умиротворен/g, 'тыныштандыру')
    .replace(/облегчает/g, 'жеңілдетеді')
    .replace(/открывает/g, 'ашады')
    .replace(/дарующий/g, 'беруші')
    .replace(/создающий/g, 'жаратушы');
}

const entryRegex = /'([^']+)':\s*\{([\s\S]*?)\n  \},/g;
let match;
const entries = [];
while ((match = entryRegex.exec(content)) !== null) {
  entries.push({ id: match[1], body: match[2] });
}

for (const { id, body } of entries) {
  if (body.includes('kk:')) continue;

  const ruMeaning = body.match(/ru:\s*\{[^}]*meaning:\s*'((?:\\'|[^'])*)'/s)?.[1]?.replace(/\\'/g, "'");
  const ruExplanation = body.match(/ru:\s*\{[^}]*explanation:\s*'((?:\\'|[^'])*)'/s)?.[1]?.replace(/\\'/g, "'");
  const trMeaning = body.match(/tr:\s*\{[^}]*meaning:\s*'((?:\\'|[^'])*)'/s)?.[1]?.replace(/\\'/g, "'");
  const trExplanation = body.match(/tr:\s*\{[^}]*explanation:\s*'((?:\\'|[^'])*)'/s)?.[1]?.replace(/\\'/g, "'");

  const meaning = ruMeaning ? ruToKk(ruMeaning) : trMeaning ?? '';
  const explanation = ruExplanation ? ruToKk(ruExplanation) : trExplanation ?? '';

  const kkBlock = `    kk: {\n      meaning: '${meaning.replace(/'/g, "\\'")}',\n      explanation: '${explanation.replace(/'/g, "\\'")}',\n    },`;

  const arClosePattern = new RegExp(
    `('${id}':\\s*\\{[\\s\\S]*?ar:\\s*\\{[\\s\\S]*?\\},)\\n(  \\},)`,
    'm'
  );
  content = content.replace(arClosePattern, `$1\n${kkBlock}\n$2`);
}

fs.writeFileSync(path, content);
const kkCount = (content.match(/kk: \{/g) || []).length;
console.log(`Added kk entries. Total kk blocks: ${kkCount}`);
