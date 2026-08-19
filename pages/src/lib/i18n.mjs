export const LANGS = ['en', 'ro'];

export function href(base, lang, path) {
  return `${base}${lang === 'en' ? '/en' : ''}${path}`;
}

const S = {
  siteTitle: {
    en: 'RO market research: Android GPS watches for kids',
    ro: 'Cercetare de piață RO: ceasuri GPS pentru copii, compatibile Android',
  },
  tagline: {
    en: 'Every claim traces to a linked, dated source. Corrections are left visible. No affiliate links.',
    ro: 'Fiecare afirmație are o sursă datată, cu link. Corecturile rămân vizibile. Fără linkuri de afiliere.',
  },
  navHome: { en: 'Watches', ro: 'Ceasuri' },
  navMethod: { en: 'Methodology', ro: 'Metodologie' },
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
    ro: 'Documentul complet de cercetare (în engleză) — toate sursele și corecturile, în forma în care au rezultat din cercetare',
  },
  specTitle: { en: 'Key facts from the research file', ro: 'Date-cheie din dosarul de cercetare' },
  summaryNote: {
    en: 'Curated summary. Figures are quoted from the research document below; nothing here is new information.',
    ro: 'Rezumat selectiv. Cifrele sunt preluate din documentul de cercetare de mai jos; nimic de aici nu este informație nouă.',
  },
  matrixNote: { en: 'Scoring note from the ranking', ro: 'Notă de punctaj din clasament' },
  gateReason: { en: 'Why it is excluded', ro: 'De ce este exclus' },
  sortHint: { en: 'Click a column header to sort.', ro: 'Clic pe antetul unei coloane pentru sortare.' },
  footer: {
    en: 'Research corpus and site source on',
    ro: 'Corpusul de cercetare și sursa site-ului pe',
  },
  batteryTitle: { en: 'Battery: claimed vs observed', ro: 'Baterie: promisiuni și realitate' },
  methodTitle: { en: 'How this was researched', ro: 'Cum a fost făcută cercetarea' },
  reviewsTitle: { en: 'Why you cannot trust the reviews', ro: 'De ce nu vă puteți baza pe recenzii' },
  colMah: { en: 'Cell (mAh)', ro: 'Acumulator (mAh)' },
  colClaimed: { en: 'Vendor claim', ro: 'Promisiunea vânzătorului' },
  colObserved: { en: 'Observed', ro: 'Observat' },
  langName: { en: 'English', ro: 'Română' },
  themeToggle: { en: 'Light / dark mode', ro: 'Mod luminos / întunecat' },
  tilePriceNote: { en: 'price at research date, 2026-08-19', ro: 'preț la data cercetării, 2026-08-19' },
  tileWorksWith: { en: 'Network fit', ro: 'Potrivire pe rețele' },
  tileIndoor: { en: 'Stays connected indoors', ro: 'Rămâne conectat în interior' },
  tilePositioning: { en: 'Positioning', ro: 'Localizare' },
  tileScores: { en: 'Scores', ro: 'Punctaje' },
  tileRo: { en: 'Works in Romania?', ro: 'Funcționează în România?' },
  vOutdoor: { en: 'outdoor-only bands', ro: 'doar benzi de exterior' },
  vNoSub1: { en: 'no sub-1 GHz band', ro: 'fără bandă sub 1 GHz' },
  vPosGalileo: { en: 'multi-constellation, incl. Galileo', ro: 'multi-constelație, incl. Galileo' },
  vPosDual: { en: 'GPS L1+L5 dual-band; other systems unstated', ro: 'GPS L1+L5 dual-band; restul sistemelor nedeclarate' },
  vPosNoGal: { en: 'no Galileo', ro: 'fără Galileo' },
  tilesNote: {
    en: 'Network and indoor indicators are derived from each watch’s published LTE bands (B20 = Orange/Vodafone indoor band, B8 = Digi’s) — they are spec, not a service guarantee. ✓ indoor-capable band · ~ outdoor-only bands · ? bands unpublished.',
    ro: 'Indicatorii de rețea și interior sunt derivați din benzile LTE publicate ale fiecărui ceas (B20 = banda de interior la Orange/Vodafone, B8 = a Digi) — sunt specificații, nu o garanție de serviciu. ✓ bandă potrivită pentru interior · ~ doar benzi de exterior · ? benzi nepublicate.',
  },
  wGnssTitle: { en: 'What the location tech means', ro: 'Ce înseamnă tehnologia de localizare' },
  wConstellations: { en: 'Satellite systems', ro: 'Sisteme de sateliți' },
  wPosUnknown: { en: 'No machine-readable satellite list is published for this watch.', ro: 'Nu există o listă de sateliți publicată pentru acest ceas.' },
  wGalileoYes: {
    en: 'It can see Galileo, the EU constellation — more usable satellites over Romania, so better odds of a clean GPS fix between buildings instead of falling back to the larger circles below.',
    ro: 'Vede Galileo, constelația UE — mai mulți sateliți utilizabili deasupra României, deci șanse mai mari să prindă un fix GPS curat printre clădiri, în loc să cadă pe cercurile mai mari de mai jos.',
  },
  wGalileoNo: {
    en: 'It cannot see Galileo, the EU constellation. With fewer usable satellites over Romania, it falls back more often to Wi-Fi or cell-tower positioning — the larger circles below.',
    ro: 'Nu vede Galileo, constelația UE. Cu mai puțini sateliți utilizabili deasupra României, trece mai des pe poziționarea Wi-Fi sau pe antene celulare — cercurile mai mari de mai jos.',
  },
  wGalileoUnknown: {
    en: 'Whether it can see Galileo (the EU constellation) is unknown for this watch.',
    ro: 'Nu se știe dacă acest ceas vede Galileo (constelația UE).',
  },
  wNotStated: { en: 'not stated', ro: 'nedeclarat' },
  wGalileoNotStated: {
    en: 'Galileo, the EU constellation, is not among the stated systems. Whether that is proven absence (as on the cheap UNISOC-chip tier) or mere vendor silence — the summary and research document above say which.',
    ro: 'Galileo, constelația UE, nu apare printre sistemele declarate. Dacă e o absență dovedită (ca la nivelul ieftin pe chip UNISOC) sau doar tăcerea producătorului — rezumatul și documentul de cercetare de mai sus spun despre care dintre ele e vorba.',
  },
  wRingGps: { en: 'GPS fix: ~5–15 m', ro: 'Fix GPS: ~5–15 m' },
  wRingWifi: { en: 'Wi-Fi: to ~300 m', ro: 'Wi-Fi: până la ~300 m' },
  wRingLbs: { en: 'Cell towers (LBS): ~1 km, owners report 2–15 km', ro: 'Antene celulare (LBS): ~1 km, proprietarii raportează 2–15 km' },
  wLblLbs: { en: 'Cell towers ~1 km', ro: 'Antene (LBS) ~1 km' },
  wLblWifi: { en: 'Wi-Fi ~300 m', ro: 'Wi-Fi ~300 m' },
  wLblGps: { en: 'GPS 5–15 m', ro: 'GPS 5–15 m' },
  wSchool: { en: 'school', ro: 'școală' },
  wMapNote: {
    en: '“Where is my child?” — the answer is a circle, not a dot. Illustrative radii from vendor figures and owner reports in this research: a clean GPS fix is 5–15 m; indoors every watch falls back to Wi-Fi (~300 m) or cell towers (1 km by vendor claims, 2–15 km in owner reports).',
    ro: '„Unde e copilul meu?” — răspunsul e un cerc, nu un punct. Raze ilustrative din cifrele producătorilor și rapoartele proprietarilor din această cercetare: un fix GPS curat înseamnă 5–15 m; în interior orice ceas trece pe Wi-Fi (~300 m) sau pe antene celulare (1 km după producători, 2–15 km în rapoartele proprietarilor).',
  },
  wNoWifi: { en: 'This watch has no Wi-Fi positioning: indoors it goes straight to the cell-tower circle.', ro: 'Acest ceas nu are poziționare Wi-Fi: în interior trece direct la cercul antenelor celulare.' },
  wWifiDisputed: { en: 'Wi-Fi positioning is disputed for this watch.', ro: 'Poziționarea Wi-Fi este incertă la acest ceas.' },
  wBandsTitle: { en: 'Cellular coverage in Romania', ro: 'Acoperirea celulară în România' },
  wBand: { en: 'Band', ro: 'Banda' },
  wRole: { en: 'What it does in Romania', ro: 'Rolul în România' },
  wOps: { en: 'Who runs LTE on it', ro: 'Operatori cu LTE' },
  wThisWatch: { en: 'This watch', ro: 'Acest ceas' },
  wTrapListed: { en: 'listed — buys nothing', ro: 'listată — nu aduce nimic' },
  wBandsUnknown: {
    en: 'This watch publishes no verifiable band list — every row above is unknown, which is itself the finding.',
    ro: 'Acest ceas nu publică o listă verificabilă de benzi — fiecare rând de mai sus e necunoscut, ceea ce e în sine concluzia.',
  },
  wB20Nuance: {
    en: 'Precision matters: B20/B8 keep the watch connected inside the school — reachable for calls. They do not make the indoor position good; indoors, positioning falls back to the circles above regardless.',
    ro: 'Nuanța contează: B20/B8 țin ceasul conectat în interiorul școlii — adică poate fi sunat. Nu fac însă poziția din interior bună; în interior, localizarea cade oricum pe cercurile de mai sus.',
  },
  wVolteLabel: { en: 'VoLTE per the research file', ro: 'VoLTE conform dosarului' },
  wVolteNote: {
    en: 'without working VoLTE, calls need the 2G row above; if both fail, the watch is silent.',
    ro: 'fără VoLTE funcțional, apelurile au nevoie de rândul 2G de mai sus; dacă pică ambele, ceasul e mut.',
  },
  wBatteryTitle: { en: 'Battery against a school day', ro: 'Bateria față de o zi de școală' },
  wBatVerdictGood: { en: 'Observed runtimes clear a full 24 h day.', ro: 'Duratele observate trec de o zi întreagă de 24 h.' },
  wBatVerdictSchool: { en: 'Observed runtimes clear the 9.5 h school day — charge it every night.', ro: 'Duratele observate acoperă ziua de școală de 9,5 h — se încarcă în fiecare seară.' },
  wBatVerdictRisk: { en: 'Owner reports include days where it dies before the school day ends.', ro: 'Proprietarii raportează zile în care ceasul se descarcă înainte să se termine școala.' },
  wBatVerdictUnknown: { en: 'No independent runtime measurement exists for this watch.', ro: 'Nu există nicio măsurătoare independentă a autonomiei pentru acest ceas.' },
  wBatterySolid: { en: 'Solid bar = at least this long; faded part = reported up to.', ro: 'Bara plină = cel puțin atât; partea estompată = maximul raportat.' },
  wSchoolDay: { en: '9.5 h school day', ro: 'zi de școală de 9,5 h' },
  wBatteryNote: {
    en: 'Bars show the range recorded in the research file, verbatim strings at right. Claimed and observed are separate facts — a vendor figure is not a datapoint about reality, and figures without a measurement window overstate (overnight shutdown inflates everything into “2 days”).',
    ro: 'Barele arată intervalul din dosarul de cercetare, cu textul exact în dreapta. Promis și observat sunt fapte separate — cifra producătorului nu e o măsurătoare a realității, iar cifrele fără fereastră de măsurare exagerează (oprirea pe timpul nopții transformă orice în „2 zile”).',
  },
};

export function t(key, lang) {
  const v = S[key];
  if (!v) throw new Error(`i18n: missing key ${key}`);
  const s = v[lang];
  if (s === undefined) throw new Error(`i18n: key ${key} missing lang ${lang}`);
  return s;
}
