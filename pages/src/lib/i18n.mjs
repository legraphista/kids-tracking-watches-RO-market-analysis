export const LANGS = ['en', 'ro'];

export function href(base, lang, path) {
  return `${base}${lang === 'ro' ? '/ro' : ''}${path}`;
}

const S = {
  siteTitle: {
    en: 'Kids’ 4G GPS watches in Romania — the honest comparison',
    ro: 'Ceasuri 4G cu GPS pentru copii în România — comparația onestă',
  },
  tagline: {
    en: 'Every claim traces to a linked, dated source. Corrections are left visible. No affiliate links.',
    ro: 'Fiecare afirmație are o sursă datată, cu link. Corecturile rămân vizibile. Fără linkuri de afiliere.',
  },
  navHome: { en: 'Watches', ro: 'Ceasuri' },
  navMethod: { en: 'Method', ro: 'Metodă' },
  navBattery: { en: 'Battery', ro: 'Baterie' },
  navReviews: { en: 'Fake reviews', ro: 'Recenzii false' },
  decisionTitle: { en: 'The 60-second answer', ro: 'Răspunsul în 60 de secunde' },
  tableTitle: { en: 'Every watch we examined', ro: 'Toate ceasurile analizate' },
  colWatch: { en: 'Watch', ro: 'Ceas' },
  colCap: { en: 'Capability', ro: 'Capabilitate' },
  colEv: { en: 'Evidence', ro: 'Dovezi' },
  colRo: { en: 'Works in RO?', ro: 'Merge în RO?' },
  colB20: { en: 'B20', ro: 'B20' },
  colVolte: { en: 'VoLTE', ro: 'VoLTE' },
  colBattery: { en: 'Battery claimed / observed', ro: 'Baterie promisă / observată' },
  colPrice: { en: 'Price (EUR / in RO)', ro: 'Preț (EUR / în RO)' },
  colVerdict: { en: 'One-line verdict', ro: 'Verdict pe scurt' },
  gated: { en: 'Cannot work here', ro: 'Nu poate funcționa aici' },
  doNotBuy: { en: 'Do not buy', ro: 'Nu cumpărați' },
  roStatus: {
    en: { verified: 'verified', likely: 'likely', unknown: 'unknown', fails: 'fails' },
    ro: { verified: 'confirmat', likely: 'probabil', unknown: 'necunoscut', fails: 'nu merge' },
  },
  yes: { en: 'yes', ro: 'da' },
  no: { en: 'no', ro: 'nu' },
  unknown: { en: 'unknown', ro: 'necunoscut' },
  fullEvidence: {
    en: 'Full research document (English) — every source, every correction, as researched',
    ro: 'Documentul complet de cercetare (în engleză) — toate sursele și corecturile, așa cum au fost cercetate',
  },
  specTitle: { en: 'Key facts from the research file', ro: 'Date-cheie din dosarul de cercetare' },
  summaryNote: {
    en: 'Curated summary. Figures are quoted from the research document below; nothing here is new information.',
    ro: 'Rezumat curatoriat. Cifrele sunt preluate din documentul de cercetare de mai jos; nimic de aici nu este informație nouă.',
  },
  matrixNote: { en: 'Scoring note from the ranking', ro: 'Notă de punctaj din clasament' },
  gateReason: { en: 'Why it is excluded', ro: 'De ce este exclus' },
  sortHint: { en: 'Click a column header to sort.', ro: 'Clic pe antetul unei coloane pentru sortare.' },
  footer: {
    en: 'Research corpus and site source on',
    ro: 'Corpusul de cercetare și sursa site-ului pe',
  },
  batteryTitle: { en: 'Battery: claimed vs observed', ro: 'Baterie: promis vs observat' },
  methodTitle: { en: 'How this was researched', ro: 'Cum a fost făcută cercetarea' },
  reviewsTitle: { en: 'Why you cannot trust the reviews', ro: 'De ce nu te poți baza pe recenzii' },
  colMah: { en: 'Cell (mAh)', ro: 'Acumulator (mAh)' },
  colClaimed: { en: 'Vendor claim', ro: 'Promisiunea vânzătorului' },
  colObserved: { en: 'Observed', ro: 'Observat' },
  langName: { en: 'English', ro: 'Română' },
};

export function t(key, lang) {
  const v = S[key];
  if (!v) throw new Error(`i18n: missing key ${key}`);
  const s = v[lang];
  if (s === undefined) throw new Error(`i18n: key ${key} missing lang ${lang}`);
  return s;
}
