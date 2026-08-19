---
description: Incremental market re-sweep — find kids' 4G GPS watches new to the market since a date (and vendors that died since)
argument-hint: <cutoff date, e.g. "newer than 2026-08-18">
---

Re-sweep the kids' 4G GPS watch market for anything NEW since: **$ARGUMENTS**

This repeats the original 2026-08-18 discovery sweep incrementally. Its deliverable is a
CANDIDATE LIST with evidence, not watch docs — each genuinely new candidate is then handed
to `/add-watch` one at a time. Read first: `research/OPTIONS.md` (Tier A + Tier B + the
"seen but not researched" list — that list is your warm start), `research/watches/white-label-setracker-class.md`,
and the Romania gate in `research/RANKING.md`.

## Build the known-name roster first, and inject it into every lens

The lens sub-agents never see OPTIONS.md — anything you don't paste into their prompts,
they will happily "discover" again. Before launching lenses, extract from OPTIONS.md:

- every **Tier A** model (18 as of 2026-08),
- every **Tier B** row across all five kill tables — geo-blocked, region-locked, dead-radio,
  dead-vendor, channel dead-end — WITH its killer reason (one line each),
- the **"seen but not researched"** names (Safekid Zenit, One2track, Qlokkie, DEPLAY,
  Kidywatch, Leotec/Kiano/Forever/Manta, Techmade/Trevi/Celly, ZTE K1 Pro, Watchu
  Guardian, My Gator Watch, Vidimensio — the warm start: these are fair game to research,
  not to re-discover),
- the **white-label pseudo-brand tail** from the class doc and OPTIONS row 18 (Wingereich,
  WIRSEN, Techone, MiniWATCH, NEOVANCE, Evolve-x, PTHTECHUS-class Amazon natives, the
  Wonlex KT-series numbers already catalogued).

Paste this roster into every lens prompt as a KNOWN LIST with three explicit rules:
(1) a known name is reported only if something material CHANGED since the cutoff (new
model, un-geo-blocked, vendor died/revived, radio generation bump) — never re-researched
from scratch; (2) a Tier B killer reason is treated as settled unless the lens finds
dated evidence that it no longer holds (e.g. Xplora adding Romania to its country list IS
a finding); (3) budget goes to names ABSENT from the roster.

## The date gate

A name counts as NEW-since-cutoff only if **at least two** of these fall after the cutoff:
CE/RED Declaration of Conformity signing date (strongest — on the vendor's downloads page,
precedes retail by 1–3 months), FCC grant date (`fccid.io`), press/trade-show announcement
(GSMArena news, IFA/MWC coverage), companion-app **v1.0** release date (`apkcombo.com/<slug>/<pkg>/`
when Play is walled), earliest dated retail listing or price-comparison first-listing
(Geizhals/idealo/Ceneo/Heureka price graphs). **Never gate on Play's "Updated on" date — old
apps update too.** A watch with no date anywhere counts as new only if its earliest dated
artefact of any kind is after the cutoff. ODM ordinal clock: Wonlex KT-numbers ascend with
generation (…KT36→KT37→KT38→KT42) — a KT number above the highest in the class doc is a
new-generation signal.

**Also sweep for DEATHS since the cutoff** — the market list must shrink as well as grow:
DNS NXDOMAIN / expired TLS on vendor domains, app pulled from Play (Angel Watch's Android
app vanished between Jan and Aug 2026), "refurbished only" / last-unit on eMAG, stale
vendor /news feeds, corporate distress (divestments, rescue funding). A dead domain is a
finding, not a fetch failure. Update the affected watch docs' `ro_status`/notes and flag
any ranking impact.

## Architecture — parallel lenses, shared rules

Launch parallel agents, each with a DIFFERENT lens on the same question (identical lenses
all return the same five obvious watches): (1) EU retail storefronts, (2) brand/vendor
sweep, (3) technical (chipset/bands/FCC/CE), (4) parent-community chatter, (5) RO evidence
(app stores + eMAG reviews). Every lens prompt carries the same preamble: today's date,
`ToolSearch "select:WebSearch,WebFetch"` first, every claim needs a source URL and date,
`UNKNOWN` is legal and never a guess, attribute marketing ("the listing claims…"), and the
file-output contract: **write findings to `research/.sweeps/discovery-<date>/lens-N.md` AS
YOU GO** — an interrupted agent must leave evidence on disk, not in a lost transcript.
`research/.sweeps/` is gitignored and never published.

WebSearch budget is a SHARED pool across concurrent agents (the original sweep drained
200/200 collectively and finished on direct WebFetch). Budget explicitly per lens and plan
the tail on direct fetches.

## Query patterns that worked (reuse these shapes)

- **Domain-scoped native-language category queries** via the `allowed_domains` parameter
  (beats `site:`): `"smartwatch copii 4G GPS cartela SIM"` → emag.ro; `"Kinder Smartwatch
  4G GPS SIM Karte Telefon"` → amazon.de; `"dětské chytré hodinky 4G GPS"` → alza.cz; same
  shape for amazon.it/.fr/.es, mediaexpert.pl, x-kom.pl, bol.com, mediaworld.it, fnac.com,
  elcorteingles.es, worten.pt. Price comparators (geizhals.de, idealo.de, ceneo.pl,
  heureka.cz, prisjakt.nu) are the cheapest category enumeration AND give first-listing dates.
- **National "best-of" queries**: `<category in local language> + 4G GPS + <year> + <country>
  + "brands" word (márka/marche/merken/marca/märken) + 2–3 known brand anchors` — this is
  what finds local brands English never surfaces.
- **Multi-brand shotgun**: bundle 4–6 brand names per query
  (`Moochies Nova TechSixtyFour Gator kids smartwatch UK 4G <year> brand`).
- **Geo-block probes**: quoted-country-list form forces allow-list pages —
  `Xplora "Norway" "Sweden" "Finland" … supported markets`.
- **RO negative-phrase queries** surface failure evidence (positive ones return shops):
  `ceas GPS copii pareri "nu functioneaza" OR "am renuntat"`, `ceas copii cont nou eroare`.
- eMAG canonical kids'-watch facet: `emag.ro/smartwatch/filter/pentru-f8641,copii-v-4462260/sort-favorite/c`
  — `sort-favorite` surfaces the volume sellers (that's how the white-label tier was found).
- Generic English "kids gps smartwatch review" queries return affiliate farms — don't spend
  budget there. Retailer spec-filter columns are unreliable (smartwatch.de marked a 4G watch
  "4G: No").

## Dedup before declaring novelty

Most "new" watches are the same Shenzhen OEM under a new sticker. Check, in order of strength:
1. **Android package stem** — `com.tgelec.*` = TGELEC/YQT namespace; a listing telling you
   to install SeTracker2/Wonlex-family apps = the class doc, not a new watch. Package names
   are NOT guessable (TCL Connect is `com.trackerandroid.trackerandroid`) — use appbrain/apkcombo.
2. **Accessory tell** — a screen protector "pentru Wonlex KT20S" sold against another brand's
   listing names the real OEM.
3. **FCC grantee code** (`fccid.io/2A7S9` = iWonlex; one grant has shipped under two brands).
4. **Reseller support pages** naming the app family (xkids.ro names Xkids/Wonlex/Twinkler/YQT
   as one SeTracker2 family).
Rebrands extend `white-label-setracker-class.md`; only a SKU with its own large separable RO
evidence pool earns an individual doc. Within a brand, de-merge pooled listings via
per-review model tags (`Style Name:` / `Modell:`) — "Wingereich 4G" was two different watches.

## Walls and instruments

- `r.jina.ai/https://<url>` is the workhorse text proxy (add header `x-respond-with: html`
  for `__NEXT_DATA__` blobs); it does not beat Akamai, Cloudflare Turnstile, or Amazon.
- Amazon, Alza, most big-box EU retailers, Trustpilot, and Reddit 403 plain fetches. Reddit,
  Amazon, and eMAG review pagination open ONLY through the user's logged-in Chrome profile
  (`mcp__claude-in-chrome__*`) — if those tools are absent, STOP and ask the user for browser
  access before concluding any absence. In that profile you are strictly READ-ONLY — never
  post, rate, vote, buy, subscribe, or enter credentials; captchas are cleared by the user,
  never by you. Reddit POST search misses comments — use `/search/?type=comment`.
- Browser or Googlebot User-Agent opens garett.com.pl/.eu, support.anio.eu, MediaMarkt, the
  Datart/NAY pool. Some coverage pages (Garmin) are JS-rendered — a plain fetch returns nav
  chrome; render JS or use the text proxy.
- Play ratings/pools/histograms are country-dependent: always quote with `hl=`/`gl=`, read
  ≥3 locales, and pair every presence claim with a control fetch that 404s (proves the method
  distinguishes present from absent). `itunes.apple.com/lookup?id=<id>&country=ro` is the
  cheapest unwalled RO-storefront check and returns `currentVersionReleaseDate`.

## Known discovery failure modes (each happened once — don't repeat)

- "Bands UNKNOWN" was usually a search failure: bands live in the **RED Art.10(8) statement
  at the back of the manual** or the CE DoC, never on the listing. Retrieve those before
  recording UNKNOWN.
- "Nobody reports X" is a claim about your search until you list the queries that failed.
- Distinguish four different country lists: shipping list ≠ storefront selector ≠ coverage
  list ≠ account registration gate. Only the last is the Xplora failure mode.
- Marketplace third-party listing = near-worthless RO evidence; eMAG "Vândut și livrat de
  eMAG" (1P, 30-day return) = real tier-4 evidence.
- Vendor-published country support is a gate, not a score — Garmin Bounce 2 passed every
  gate and is the field's worst performer.
- Brand nationality ≠ platform independence (DEF CON 34: "39 brands, one server") — check
  the app package stem first.
- Cross-lens contradictions must be surfaced as an explicit list and settled with a control
  (the KW-48/KW-49 SIM-field method), not by preferring a source.
- Count people, not mentions: open review pools, don't read listing headers; weight detailed
  and negative reviews over star averages; watch for seeded 5★ clusters.

## Stop conditions

The sweep is done when (1) independent lenses converge on the same names from different
query paths, (2) new results are only undifferentiated Amazon-native pseudo-brands with no
bands/app/OEM (fold into the class doc), and (3) each lens ends with a **named list of gaps
it could not close** — that list, not a completeness claim, is the honest terminus. Sanity
floor: the 2026-08 baseline was 60+ models seen, 18 researched, ~45 rejected with a named
killer reason; a sweep finding materially less than the delta implies is broken, not the market.

## Output

Write `research/.sweeps/discovery-<date>/CANDIDATES.md`: each new name with its dating
evidence (which two signals passed the gate), its dedup verdict (novel / rebrand-of-X /
pseudo-brand), and a one-line disposition. Update OPTIONS.md's "seen but not researched"
list with names you saw and skipped. Report deaths separately. Then recommend which
candidates merit `/add-watch` — do not run the full add-watch pipeline yourself, and do not
commit; the user reviews first.
