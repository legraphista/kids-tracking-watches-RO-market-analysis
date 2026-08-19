// Romanian band/operator knowledge for the per-watch widgets.
// Every claim here traces to the corpus: OPTIONS.md ("B20 for Orange/Vodafone,
// B8 for Digi, B3 national"; "B20 is Orange's only sub-1 GHz LTE band") and
// COMPARISON.md §2 (B20 indoor/rural; B3 national heavy lifting; B28 = RO 5G n28;
// 2G survives on Orange and Digi).
export const RO_BANDS = [
  {
    id: 'B20', freq: '800 MHz', ops: 'Orange, Vodafone', key: true,
    role: {
      en: 'The band that decides indoor (school) and rural coverage. Sub-1 GHz penetrates concrete.',
      ro: 'Banda care decide acoperirea în interior (școală) și în mediul rural. Sub 1 GHz pătrunde prin beton.',
    },
  },
  {
    id: 'B8', freq: '900 MHz', ops: 'Digi', key: true,
    role: {
      en: "Digi's sub-1 GHz band — the indoor/rural equivalent of B20 on Digi.",
      ro: 'Banda sub 1 GHz a Digi — echivalentul lui B20 pentru interior și rural, pe Digi.',
    },
  },
  {
    id: 'B3', freq: '1800 MHz', ops: { en: 'all networks', ro: 'toate rețelele' },
    role: {
      en: 'The national workhorse: most coverage outdoors and in towns.',
      ro: 'Banda de bază a acoperirii naționale: duce grosul traficului în exterior și în orașe.',
    },
  },
  {
    id: 'B1', freq: '2100 MHz', ops: '—',
    role: {
      en: 'Urban capacity. Short reach; does not help inside buildings.',
      ro: 'Capacitate urbană. Rază scurtă; nu ajută în interiorul clădirilor.',
    },
  },
  {
    id: 'B7', freq: '2600 MHz', ops: '—',
    role: {
      en: 'Dense-urban capacity. The shortest reach of the set.',
      ro: 'Capacitate în zonele urbane dense. Cea mai scurtă rază din listă.',
    },
  },
  {
    id: 'B28', freq: '700 MHz', ops: '—', trap: true,
    role: {
      en: 'A trap in Romania: 700 MHz here is 5G (n28), not LTE — a B28 line on a spec sheet buys nothing.',
      ro: 'O capcană în România: 700 MHz aici e 5G (n28), nu LTE — un B28 pe fișa tehnică nu aduce nimic.',
    },
  },
];

export const G2_ROW = {
  id: '2G', freq: 'GSM 900/1800', ops: 'Orange, Digi',
  role: {
    en: 'Voice fallback if VoLTE never provisions. Alive on Orange and Digi; Vodafone has shut its 2G down.',
    ro: 'Rezerva de voce dacă VoLTE nu se activează. Funcțională pe Orange și Digi; Vodafone și-a închis rețeaua 2G.',
  },
};

// -> Set of band ids, or null when the doc doesn't publish a machine-readable list
export function parseBands(v) {
  if (Array.isArray(v)) return new Set(v.map((b) => String(b).toUpperCase().replace(/A$/, '')));
  return null;
}

export function parse2g(voiceFallback) {
  const s = String(voiceFallback ?? '').split(' # ')[0].trim();
  if (!s || /^unknown/i.test(s)) return 'unknown';
  if (/2g|gsm|csfb/i.test(s)) return 'yes';
  return 'no';
}

// battery strings like "24-48", ">24 h", "2-60 (18 reports)" -> {min,max} or null
export function parseHours(v) {
  const s = String(v ?? '').split(' # ')[0].split('(')[0].trim();
  if (!s || /unknown|n\/a/i.test(s)) return null;
  const nums = [...s.matchAll(/\d+(?:\.\d+)?/g)].map((m) => Number(m[0])).slice(0, 2);
  if (!nums.length) return null;
  return { min: nums[0], max: nums[1] ?? nums[0], gt: /^[>≥]/.test(s) };
}

// Tile-level derivations for the homepage. Spec-derived from the doc's YAML,
// never hand-written: B20 = Orange/Vodafone sub-1 GHz (indoor), B8 = Digi's.
export function operatorFit(lteBands) {
  const bands = parseBands(lteBands);
  if (!bands) return { orange: 'unknown', vodafone: 'unknown', digi: 'unknown' };
  const hasLte = bands.size > 0;
  const lvl = (sub1) => (bands.has(sub1) ? 'full' : hasLte ? 'outdoor' : 'none');
  return { orange: lvl('B20'), vodafone: lvl('B20'), digi: lvl('B8') };
}

export function indoorFit(lteBands) {
  const bands = parseBands(lteBands);
  if (!bands) return { level: 'unknown', bands: [] };
  const sub1 = ['B20', 'B8'].filter((b) => bands.has(b));
  return { level: sub1.length ? 'yes' : 'no', bands: sub1 };
}

export function positioningFit(positioning) {
  if (!Array.isArray(positioning)) return 'unknown';
  const p = positioning.map((x) => String(x).toLowerCase());
  const clean = (n) => p.some((x) => x.replace(/a-?gps/g, '').includes(n));
  if (clean('galileo')) return 'galileo';
  if (p.some((x) => x.includes('l5'))) return 'dualband';
  if (clean('gps')) return 'nogalileo';
  return 'unknown';
}

// Standardised tile price from the docs' free-text price fields.
// Both fields are EUR-denominated by schema; RON amounts appear inside the text.
// Regex literals only — string-built regexes lose backslashes in this toolchain.
const P_EUR_PRE = /(?:€|EUR)\s*(~?\d[\d.,]*(?:\s*[–-]\s*\d[\d.,]*)?)/i;
const P_EUR_POST = /(~?\d[\d.,]*(?:\s*[–-]\s*\d[\d.,]*)?)\s*EUR/i;
const P_RON_POST = /(~?\d[\d.,]*(?:\s*[–-]\s*\d[\d.,]*)?)\s*(?:RON|lei)/i;
const P_RON_PRE = /(?:RON|lei)\s*(~?\d[\d.,]*(?:\s*[–-]\s*\d[\d.,]*)?)/i;
const P_LEAD = /^(~?\d[\d.,]*(?:\s*[–-]\s*\d[\d.,]*)?)/;
function pTok(re, s) {
  const m = s.match(re);
  if (!m) return null;
  const t = m[1].replace(/\s+/g, '').replace(/[.,]+$/, '');
  return { approx: t.startsWith('~'), num: t.replace(/^~/, '') };
}
export function parsePrice(vEur, vRo) {
  const clean = (v) => String(v ?? '').split('#')[0].trim();
  const na = (str) => !str || /^(n\/a|not published|unknown|—|-)/i.test(str);
  const e = clean(vEur), r = clean(vRo);
  const eur = na(e) ? null : pTok(P_EUR_PRE, e) || pTok(P_EUR_POST, e) || pTok(P_LEAD, e);
  // RON: prefer the RO field, fall back to a RON figure quoted inside the EUR field
  const ron = (na(r) ? null : pTok(P_RON_POST, r) || pTok(P_RON_PRE, r)) || (na(e) ? null : pTok(P_RON_POST, e));
  const roEur = na(r) || ron ? null : pTok(P_EUR_PRE, r) || pTok(P_LEAD, r);
  const fmt = (t, unitPre, unitPost) => (t.approx ? '≈ ' : '') + unitPre + t.num + unitPost;
  const parts = [];
  if (eur) parts.push(fmt(eur, '€', ''));
  if (ron) parts.push(fmt(ron, '', ' lei'));
  else if (roEur) parts.push(fmt({ approx: true, num: roEur.num }, '€', ' (RO)'));
  return parts.length ? parts.join(' · ') : '—';
}
