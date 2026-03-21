/**
 * One-time migration: reads src/conditions/conditions.js exports and writes
 * src/conditions/content/<slug>.json + regenerates conditions.js to import JSON.
 * Run: node scripts/migrate-condition-html-to-json.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const conditionsPath = path.join(root, 'src/conditions/conditions.js');
const conditionsUrl = pathToFileURL(conditionsPath).href;
const contentDir = path.join(root, 'src/conditions/content');

function slugToVar(slug) {
  return slug
    .split('-')
    .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join('');
}

async function main() {
  const { conditions } = await import(conditionsUrl + '?t=' + Date.now());

  fs.mkdirSync(contentDir, { recursive: true });

  for (const c of conditions) {
    const file = path.join(contentDir, `${c.slug}.json`);
    fs.writeFileSync(file, JSON.stringify({ html: c.html }, null, 2), 'utf8');
    console.log('wrote', path.relative(root, file));
  }

  const importLines = conditions.map(
    (c) => `import ${slugToVar(c.slug)} from './content/${c.slug}.json';`
  );

  const items = conditions.map(
    (c) => `  {
    title: ${JSON.stringify(c.title)},
    fullTitle: ${JSON.stringify(c.fullTitle)},
    desc: ${JSON.stringify(c.desc)},
    slug: ${JSON.stringify(c.slug)},
    cover: ${JSON.stringify(c.cover)},
    html: ${slugToVar(c.slug)}.html,
  }`
  );

  const out = `${importLines.join('\n')}

export const conditions = [
${items.join(',\n')},
];
`;

  fs.writeFileSync(conditionsPath, out, 'utf8');
  console.log('updated', path.relative(root, conditionsPath));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
