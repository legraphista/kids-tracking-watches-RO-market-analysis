// Build-time loader for the research corpus. The watch docs in research/watches/
// are the source of truth; any parse failure here must fail the build.
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

// resolved from cwd because bundled modules lose import.meta.url-relative paths;
// astro dev/build always run from pages/
const ROOT = path.resolve(process.cwd(), '..');
const WATCH_DIR = path.join(ROOT, 'research', 'watches');
const SUMMARY_DIR = path.join(ROOT, 'pages', 'src', 'content', 'summaries');

// slug -> exact name used in RANKING.md tables (matrix or gate)
export const MATRIX_NAMES = {
  'tcl-movetime-mt48': 'TCL MOVETIME MT48',
  'imoo-z7': 'imoo Watch Phone Z7',
  'imoo-x10': 'imoo Watch Phone X10',
  'imoo-z3': 'imoo Watch Phone Z3',
  'carneo-guardkid-4g-platinum': 'Carneo GuardKid+ Platinum',
  'carneo-guardkid-4g-ultra': 'Carneo GuardKid+ ULTRA 2nd gen',
  'garett-kids-4g': 'Garett Kids 4G line',
  'white-label-setracker-class': 'White-label / SeTracker2 class',
  'wingereich-4g': 'Wingereich 4G',
  'wirsen-4g': 'WIRSEN 4G',
  'canyon-sunny-kw48': 'Canyon Sunny KW-48',
  'lamax-watchy4-play': 'LAMAX WatchY4 Play',
  'garmin-bounce-2': 'Garmin Bounce 2',
  'angel-watch-series-r': 'Angel Watch Series R',
};
export const GATE_NAMES = {
  'anio-6': 'Anio 6',
  'elari-kidphone-4gr': 'Elari KidPhone 4GR',
  'savefamily-iconic-plus-2': 'SaveFamily Iconic Plus 2',
  'canyon-zefir-kw49': 'Canyon Zefir KW-49',
};

function parseDoc(file) {
  const raw = fs.readFileSync(file, 'utf-8');
  const slug = path.basename(file, '.md');
  let yamlText = null;
  let body = raw;
  // Shape A: real frontmatter at byte 0
  if (raw.startsWith('---')) {
    const end = raw.indexOf('\n---', 3);
    if (end === -1) throw new Error(`${slug}: unterminated frontmatter`);
    yamlText = raw.slice(4, end);
    // re-embed the spec block so the rendered "full evidence" still shows it
    body = '```yaml\n' + yamlText.trim() + '\n```\n' + raw.slice(end + 4);
  } else {
    // Shape B: H1 then a ```yaml fenced block containing --- ... ---
    const m = raw.match(/```yaml\s*\n---\s*\n([\s\S]*?)\n---\s*\n```/);
    if (!m) throw new Error(`${slug}: no YAML block found in either shape`);
    yamlText = m[1];
  }
  let data;
  try {
    data = yaml.load(yamlText);
  } catch (e) {
    throw new Error(`${slug}: YAML parse failed: ${e.message}`);
  }
  if (!data || typeof data !== 'object' || !data.model) {
    throw new Error(`${slug}: YAML parsed but has no 'model' field`);
  }
  return { slug, data, body, raw };
}

let _watches = null;
export function loadWatches() {
  if (_watches) return _watches;
  const files = fs.readdirSync(WATCH_DIR).filter((f) => f.endsWith('.md'));
  const ranking = loadRanking();
  _watches = files.map((f) => {
    const w = parseDoc(path.join(WATCH_DIR, f));
    const mName = MATRIX_NAMES[w.slug];
    const gName = GATE_NAMES[w.slug];
    if (mName) {
      const row = ranking.matrix.find((r) => r.name === mName);
      if (!row) throw new Error(`${w.slug}: expected matrix row "${mName}" not found in RANKING.md`);
      w.capability = row.capability;
      w.evidence = row.evidence;
      w.matrixNote = row.note;
      w.gated = false;
    } else if (gName) {
      const row = ranking.gate.find((r) => r.name === gName);
      if (!row) throw new Error(`${w.slug}: expected gate row "${gName}" not found in RANKING.md`);
      w.gateReason = row.reason;
      w.gated = true;
    } else {
      throw new Error(`${w.slug}: not mapped to either the matrix or the gate table`);
    }
    return w;
  });
  // sort: mirror RANKING.md's own matrix row order; gated watches last, alphabetical
  const order = ranking.matrix.map((r) => r.name);
  _watches.sort((a, b) => {
    if (a.gated !== b.gated) return a.gated ? 1 : -1;
    if (a.gated) return a.slug.localeCompare(b.slug);
    return order.indexOf(MATRIX_NAMES[a.slug]) - order.indexOf(MATRIX_NAMES[b.slug]);
  });
  return _watches;
}

function cellName(cell) {
  return cell.replace(/[*~`]/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').trim();
}

let _ranking = null;
export function loadRanking() {
  if (_ranking) return _ranking;
  const raw = fs.readFileSync(path.join(ROOT, 'research', 'RANKING.md'), 'utf-8');
  const matrix = [];
  const gate = [];
  const mSec = raw.split(/^## The matrix$/m)[1];
  if (!mSec) throw new Error('RANKING.md: "## The matrix" section not found');
  for (const line of mSec.split('\n')) {
    const cells = line.split('|').map((c) => c.trim());
    if (cells.length < 5 || !/^\|/.test(line)) continue;
    const cap = parseInt(cellName(cells[2]), 10);
    const ev = parseInt(cellName(cells[3]), 10);
    if (Number.isNaN(cap) || Number.isNaN(ev)) continue;
    matrix.push({ name: cellName(cells[1]), capability: cap, evidence: ev, note: cellName(cells[4]) });
  }
  const gSec = raw.split(/^\| Watch \| Why it cannot work here \|$/m)[1];
  if (!gSec) throw new Error('RANKING.md: gate table header not found');
  for (const line of gSec.split('\n')) {
    if (!line.startsWith('|')) { if (line.trim() === '' && gate.length) break; continue; }
    const cells = line.split('|').map((c) => c.trim());
    if (cells.length < 3 || cells[1].startsWith('---')) continue;
    gate.push({ name: cellName(cells[1]), reason: cellName(cells[2]) });
  }
  if (matrix.length < 10) throw new Error(`RANKING.md matrix parse suspiciously small: ${matrix.length} rows`);
  _ranking = { matrix, gate };
  return _ranking;
}

export function loadSummaries(lang) {
  const out = {};
  if (!fs.existsSync(SUMMARY_DIR)) return out;
  for (const f of fs.readdirSync(SUMMARY_DIR)) {
    if (!f.endsWith(`.${lang}.md`)) continue;
    const raw = fs.readFileSync(path.join(SUMMARY_DIR, f), 'utf-8');
    const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if (!m) throw new Error(`summary ${f}: missing frontmatter`);
    const fm = yaml.load(m[1]);
    out[fm.slug] = { ...fm, body: m[2] };
  }
  return out;
}
