// Build-time drift guard: summaries are hand-written, so every figure and source
// URL in them must be traceable to the watch doc underneath. Fails the build on
// any mismatch. This exists because ~150 corrections in this project were all
// in hand-written summary layers, never in the docs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const WATCH_DIR = path.join(ROOT, 'research', 'watches');
const SUMMARY_DIR = path.join(ROOT, 'pages', 'src', 'data', 'summaries');

const SECTIONS = {
  en: ['## Verdict', '## Does it work in Romania?', '## Connectivity', '## Positioning', '## Battery', '## Buying', '## Watch out for', '## Sources'],
  ro: ['## Verdict', '## Funcționează în România?', '## Conectivitate', '## Localizare', '## Baterie', '## De unde se cumpără', '## Atenție la', '## Surse'],
};

const errors = [];
const warn = [];

// digit runs: digits with . or , directly between groups ("1.114,56" -> "111456")
function digitRuns(text) {
  const runs = new Set();
  for (const m of text.matchAll(/\d+(?:[.,]\d+)*/g)) runs.add(m[0].replace(/\D/g, ''));
  return runs;
}

const slugs = fs.readdirSync(WATCH_DIR).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
for (const slug of slugs) {
  const doc = fs.readFileSync(path.join(WATCH_DIR, `${slug}.md`), 'utf-8');
  const docRuns = digitRuns(doc);
  for (const lang of ['en', 'ro']) {
    const name = `${slug}.${lang}.md`;
    const file = path.join(SUMMARY_DIR, name);
    if (!fs.existsSync(file)) { errors.push(`${name}: MISSING`); continue; }
    const raw = fs.readFileSync(file, 'utf-8');
    const fmMatch = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if (!fmMatch) { errors.push(`${name}: no frontmatter`); continue; }
    let fm;
    try { fm = yaml.load(fmMatch[1]); } catch (e) { errors.push(`${name}: frontmatter YAML error: ${e.message}`); continue; }
    const body = fmMatch[2];
    if (fm.slug !== slug) errors.push(`${name}: frontmatter slug is "${fm.slug}"`);
    if (fm.lang !== lang) errors.push(`${name}: frontmatter lang is "${fm.lang}"`);
    if (!fm.name) errors.push(`${name}: missing name`);
    if (!fm.verdict_line || !String(fm.verdict_line).trim()) errors.push(`${name}: missing verdict_line`);
    else if (String(fm.verdict_line).length > 130) errors.push(`${name}: verdict_line ${String(fm.verdict_line).length} chars (>130)`);
    let pos = -1;
    for (const sec of SECTIONS[lang]) {
      const i = body.indexOf(sec);
      if (i === -1) { errors.push(`${name}: missing section "${sec}"`); continue; }
      if (i < pos) errors.push(`${name}: section "${sec}" out of order`);
      pos = i;
    }
    for (const m of body.matchAll(/https?:\/\/[^\s)>\]"']+/g)) {
      const url = m[0].replace(/[.,;)]+$/, '');
      if (!doc.includes(url)) errors.push(`${name}: URL not in doc: ${url}`);
    }
    const bodyNoUrls = body.replace(/https?:\/\/[^\s)>\]"']+/g, '');
    for (const run of digitRuns(bodyNoUrls)) {
      if (run.length < 2) continue;
      if (!docRuns.has(run)) errors.push(`${name}: figure "${run}" not found in doc`);
    }
  }
}

for (const f of fs.readdirSync(SUMMARY_DIR)) {
  const m = f.match(/^(.+)\.(en|ro)\.md$/);
  if (!m) { warn.push(`summaries: unexpected file ${f}`); continue; }
  if (!slugs.includes(m[1])) errors.push(`summaries: ${f} has no watch doc`);
}

if (warn.length) console.log('WARN:\n' + warn.join('\n'));
if (errors.length) {
  console.error(`LINT FAILED — ${errors.length} problem(s):\n` + errors.join('\n'));
  process.exit(1);
}
console.log(`lint OK: ${slugs.length} watches × 2 languages checked`);
