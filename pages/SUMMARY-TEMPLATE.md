# Curated summary template (for summary-writing agents)

Each watch gets TWO files in `pages/src/content/summaries/`:
`<slug>.en.md` and `<slug>.ro.md`, where `<slug>` is exactly the filename of the
watch doc (e.g. `imoo-z7`). The ONLY input is `research/watches/<slug>.md`.

## Frontmatter (both files, real YAML frontmatter with --- fences)

```yaml
---
slug: imoo-z7
lang: en              # or ro
name: imoo Watch Phone Z7   # human name, from the doc's `model:` field
verdict_line: ""      # ONE sentence for the homepage table, <120 chars, in this file's language
---
```

## Body — exactly these sections, in this order

`## Verdict` — 2–4 sentences. The honest bottom line for a parent.
`## Does it work in Romania?` — the RO gate: status, what the evidence actually is, what remains unknown.
`## Connectivity` — the GSM/LTE side and how resilient it is indoors/rural: LTE bands (does it have B20, the band that penetrates buildings and covers rural cells in Romania), VoLTE status as the doc states it, what voice falls back to (2G CSFB or nothing), and any owner-reported signal behaviour indoors or in weak-coverage areas.
`## Positioning` — GPS/GNSS reality: constellations, indoor behaviour, owner-reported accuracy.
`## Battery` — claimed vs observed, ALWAYS separated. Name the measurement window when the doc does.
`## Buying` — price and venues as stated in the doc, with the doc's date.
`## Watch out for` — caveats: security, registration flow, review contamination, app issues.
`## Sources` — bulleted list of the key sources FROM THE DOC (linked, dated). Only URLs that appear in the doc.

## Hard rules

1. **Every figure verbatim from the doc.** No rounding, no unit conversion, no
   arithmetic. If the doc says "740 mAh" you write "740 mAh".
2. **No cross-watch comparisons or superlatives.** Never "best/worst/better than X".
   You see one watch; comparative claims are made elsewhere, by hand.
3. **No new claims, no web access.** If it's not in the doc, it does not exist.
4. **Preserve uncertainty.** "unknown", "contested", "single report" carry over as-is.
   Where the doc shows a visible correction (strikethrough + note), reflect the
   CORRECTED state and, if material, mention that it was corrected.
5. **Quotes stay in their original language** in both files; the RO file adds a short
   Romanian gloss in parentheses after each quote.
6. **Romanian:** natural idiomatic Romanian with diacritics (ă â î ș ț), not
   word-for-word translation. Keep model names, band names (B20, B28), VoLTE,
   GPS/Galileo etc. untranslated. Same section ORDER; section headings in Romanian:
   Verdict / Funcționează în România? / Conectivitate / Localizare / Baterie / De unde se cumpără /
   Atenție la / Surse.
7. **Length:** 150–300 words per language, excluding Sources.
8. Battery values must match the doc's `battery_claimed_h` / `battery_observed_h`
   distinction — never merge them.
