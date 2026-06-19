import fs from 'fs';

const expanded = fs.readFileSync('data/dhikr-expanded.ts', 'utf8');
const blocks = [...expanded.matchAll(
  /id: '([^']+)'[\s\S]*?category: '([^']+)'[\s\S]*?meaningTr: '((?:\\'|[^'])*)'/g
)].map((m) => ({
  id: m[1],
  category: m[2],
  meaningTr: m[1].replace(/\\'/g, "'"),
}));

// fix meaningTr extraction - use m[3]
const entries = [...expanded.matchAll(
  /id: '([^']+)'[\s\S]*?category: '([^']+)'[\s\S]*?meaningTr: '((?:\\'|[^'])*)'/g
)].map((m) => ({
  id: m[1],
  category: m[2],
  meaningTr: m[3].replace(/\\'/g, "'"),
}));

const unique = [...new Set(entries.map((e) => e.meaningTr))];
console.log('Total:', entries.length);
console.log('Unique meanings:', unique.length);
unique.forEach((m, i) => console.log(`${i + 1}. ${m}`));
