# 4G kids' GPS watches — Romania market analysis

**Site: <https://legraphista.github.io/kids-tracking-watches-RO-market-analysis/>**
(Romanian, with English behind the flag switcher)

Research corpus for choosing a 4G GPS tracker watch for a 7-year-old at school in
Romania (no 3G network; B20 decides indoor coverage; Android companion app required).

- **[research/COMPARISON.md](research/COMPARISON.md)** — the parent-facing answer: ordered
  decision path, ranked table, marketing-vs-reality, do-not-buy list.
- **[research/RANKING.md](research/RANKING.md)** — method: two-axis Capability×Evidence
  matrix, the Romania gate, and the audit trail.
- **[research/watches/](research/watches/)** — 18 per-watch documents, the source of truth.
  Every claim traces to a dated source; corrections are left visible in place.
- **[research/OPTIONS.md](research/OPTIONS.md)**, **[research/BATTERY.md](research/BATTERY.md)** —
  candidate list and battery claimed-vs-observed analysis.
- **pages/** — static site (RO/EN) built from the research docs. Astro, deployed to
  GitHub Pages.
- **[.claude/commands/add-watch.md](.claude/commands/add-watch.md)** — a Claude Code
  slash command (`/add-watch <brand model>`) that steers an agent through researching
  a newly appeared watch and integrating it into the corpus and site by this project's
  method: evidence rules, Romania gate, hand-calibrated scoring, bilingual summaries,
  and the build-time drift lint.
- **[.claude/commands/discover-watches.md](.claude/commands/discover-watches.md)** — a
  slash command (`/discover-watches newer than <date>`) that re-runs the original
  five-lens market sweep incrementally: date-gated novelty detection (CE DoC / FCC /
  press / app-v1.0 dates), vendor-death detection, OEM rebrand dedup, and the query
  patterns that actually worked. New candidates feed into `/add-watch`.

No affiliate links; no vendor relationships. Raw scraped working data stays local
(`research/.sweeps/`, gitignored).
