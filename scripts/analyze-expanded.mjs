import fs from 'fs';
const c = fs.readFileSync('data/dhikr-expanded.ts', 'utf8');
const blocks = [...c.matchAll(/\{\s*id: '([^']+)'[\s\S]*?meaningTr: '((?:\\'|[^'])*)'[\s\S]*?explanationTr: '((?:\\'|[^'])*)'/g)];
console.log('entries', blocks.length);
const generic = blocks.filter((b) => b[3].includes('Premium koleksiyon')).length;
console.log('generic explanation', generic);
