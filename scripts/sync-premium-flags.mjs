import fs from 'fs';

const FREE_IDS = new Set([
  'rizik_001', 'rizik_002', 'rizik_003',
  'sifa_001', 'sifa_002', 'sifa_003',
  'huzur_001', 'huzur_002', 'huzur_003', 'huzur_004',
  'korunma_001', 'korunma_002', 'korunma_003',
  'salavat_001', 'salavat_002',
  'esma_001', 'esma_002', 'esma_003',
  'iliski_001', 'iliski_002', 'iliski_003',
  'ev_is_001', 'ev_is_002', 'ev_is_003',
  'sifa_004', 'huzur_005', 'korunma_004', 'esma_004',
]);

const path = 'data/dhikr.ts';
let src = fs.readFileSync(path, 'utf8');
const blocks = src.split(/\n  \{/);
let free = 0;
let premium = 0;

const updated = blocks.map((block, i) => {
  if (i === 0) return block;
  const idMatch = block.match(/\n    id: '([^']+)',/);
  if (!idMatch) return '  {' + block;
  const id = idMatch[1];
  const isFree = FREE_IDS.has(id);
  if (isFree) free++;
  else premium++;
  const next = block.replace(/premium: (true|false),/, `premium: ${isFree ? 'false' : 'true'},`);
  return '  {' + next;
});

fs.writeFileSync(path, updated.join(''));
console.log(`Updated ${path}: free=${free}, premium=${premium}, total=${free + premium}`);
