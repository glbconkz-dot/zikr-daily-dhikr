const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'dhikr-i18n.ts');
const fixesPath = path.join(__dirname, 'kk-fixes.json');
const KK_FIXES = JSON.parse(fs.readFileSync(fixesPath, 'utf8'));
let content = fs.readFileSync(filePath, 'utf8');

function escapeStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

let fixed = 0;
const failed = [];

for (const [id, fix] of Object.entries(KK_FIXES)) {
  const re = new RegExp(
    `('${id}':\\s*\\{[\\s\\S]*?kk:\\s*\\{)([\\s\\S]*?)(\\n    \\},\\n  \\},)`,
    'm'
  );
  if (!re.test(content)) {
    failed.push(`${id} (no match)`);
    continue;
  }
  const replacement = `\n      meaning: '${escapeStr(fix.meaning)}',\n      explanation: '${escapeStr(fix.explanation)}',`;
  content = content.replace(re, `$1${replacement}$3`);
  fixed++;
}

fs.writeFileSync(filePath, content);

const forbidden = [
  'О Аллах',
  'Можно',
  'Эта молитва',
  'читается',
  'Оқуға болады ниетімен просить',
];
const kkBlocks = [...content.matchAll(/kk:\s*\{([\s\S]*?)\n    \},/g)].map((m) => m[1]);
const verifyFails = forbidden.filter((p) => kkBlocks.some((b) => b.includes(p)));

console.log('Fixed:', fixed);
if (failed.length) console.log('Failed:', failed.join(', '));
if (verifyFails.length) console.log('Verify fails:', verifyFails.join(', '));
else console.log('Verify: OK');
