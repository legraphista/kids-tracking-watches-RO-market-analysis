---
description: Research a newly discovered kids' 4G GPS watch and integrate it into the corpus + site
argument-hint: <brand and model, e.g. "Xplora X7 Play">
---

Add a new watch to the Romania kids'-GPS-watch research corpus and site: **$ARGUMENTS**

You are extending a finished, methodical research project. The method is not optional — it is
what makes the site trustworthy. Read these first, in this order:

1. `research/TEMPLATE.md` — the per-watch document template and YAML schema.
2. `research/RANKING.md` — the two-axis method (Capability × Evidence), the Romania gate, the
   evidence tiers, and the audit history. Your scores must be calibrated against these rows.
3. The method page prose in `pages/src/data/site/method.en.md` — the compressed playbook.
4. `pages/SUMMARY-TEMPLATE.md` — the site summary format (8 sections, EN + RO).

## Step 0 — is it actually new?

Grep `research/OPTIONS.md` (both Tier A and the Tier B rejected table) and `research/watches/`
for the model and its aliases/OEM names. Many "new" watches are white-label Wonlex/TGELEC SKUs
already covered by `white-label-setracker-class.md` — check the ODM catalogue angle before
assuming novelty. If it is a rebrand, extend the class doc instead of creating a new one.

## Step 1 — research (the doc is the deliverable, not your report)

Write `research/watches/<kebab-slug>.md` per TEMPLATE.md. Write partial findings into the doc
AS YOU GO — an interrupted agent must leave evidence in the file, not in a lost transcript.

Non-negotiable rules (each one exists because it failed once):

- **Romania gate first**: no 3G here; B20 (800 MHz) = Orange/Vodafone indoor band, B8 = Digi's;
  B28 is a trap (RO 700 MHz is 5G n28, not LTE); VoLTE is a SIM-profile flag, not an IMEI
  whitelist; 2G survives on Orange and Digi only. `ro_status ∈ verified/likely/unknown/fails`
  with evidence tier; marketplace presence alone is nearly worthless; "global" marketing is
  never evidence. Always include a free pre-purchase test the parent can run in the return window.
- **Never infer bands from a "4G" label.** Find the CE/RED declaration, the RED Art.10(8)
  statement in the manual, or an FCC filing. For UNISOC-chip watches remember the silicon
  finding: SL8521E/SL8541E/SC8541E have no Galileo, regardless of what the listing claims.
- **Battery**: `battery_claimed_h` and `battery_observed_h` are separate fields, NEVER merged.
  Every figure needs its window, tracking interval, and overnight-shutdown state. An hours
  figure without an interval is nearly worthless.
- **Reviews**: count people, not mentions. De-merge pooled listings via per-review model tags
  (`Style Name:` / `Modell:`). Check for seeding (free-product campaigns, brand-affiliate
  posts, anonymous 100%-5★ pools). Play ratings are country-dependent — quote with `hl=`/`gl=`.
  Reddit post-search misses comments: also use `/search/?type=comment`.
- **"Nobody reports X" is a claim about your search** until you list the queries that failed.
  Walls are usually the reason: retail sites often render in a real browser when fetches 403.
  The user's Chrome profile (via the `mcp__claude-in-chrome__*` browser tools) is the standard
  way past Cloudflare, login walls (Reddit, Amazon, eMAG review pagination) and captchas — if
  those tools are not available in your session, STOP and ask the user to grant browser access
  before concluding any absence. Captchas are never solved by you: ask the user to clear them
  in their browser, then continue. In that profile you are strictly READ-ONLY — never post,
  rate, vote, buy, subscribe, or enter credentials; stop at sign-in prompts and report.
- **UNKNOWN is a legal value and never a guess.** Every claim gets a source URL and a date.

## Step 2 — score and gate (hand-calibrated)

Propose Capability and Evidence (0–10 each) by comparing against existing matrix rows in
RANKING.md — "is my 4 the same 4 as the Z3's?" Scores from a fresh agent are usually inflated;
scrutiny is deflationary. Then:

- Matrix watch → add a row to RANKING.md's matrix table (keep sort order: capability desc,
  evidence desc) and a row in OPTIONS.md Tier A.
- Gated watch → add it to RANKING.md's gate table (`| Watch | Why it cannot work here |`).

## Step 3 — register in the site build

Add the slug to `MATRIX_NAMES` or `GATE_NAMES` in `pages/src/lib/watches.mjs` with the EXACT
name used in the RANKING table — the build fails loudly on any mismatch, which is intentional.

## Step 4 — site summaries

Write `pages/src/data/summaries/<slug>.en.md` and `<slug>.ro.md` per `pages/SUMMARY-TEMPLATE.md`
(8 sections including Connectivity/Conectivitate). Every figure verbatim from the doc; no
cross-watch comparisons; quotes must exist in the doc before they may appear in a summary.
Romanian must be natural, not calqued — known traps already caught once: "scrutin" (ballot, not
scrutiny), "bazin" (pool), "însămânțat" (seeded → use "plantat"), "listare" (→ "anunț"),
"Statut" (→ "Stare"), "fix" GPS (→ "poziționare"), "a cădea pe" (→ "a trece pe"), quote pairs
are „…”.

Then generate the watch's **social/OG cards**: every watch page references
`pages/public/og/<slug>-ro.png` and `<slug>-en.png` (1200×630) in its `og:image` meta — a
missing file is a silent 404, the build will NOT catch it. Match the existing cards exactly
(open any `pages/public/og/*.png` for reference): background `#14171a`, blue brand line
(`Ceasuri GPS · cercetare RO` / `GPS watches · RO research`), the watch name as headline, the
language's `verdict_line` as body, and chips for Capability/Evidence scores, RO status and the
display price. Render an HTML card in a headless browser and screenshot at 1200×630 (the
Playwright/Chrome MCP tools do this; ask the user for browser access if you have none).

## Step 5 — propagate and verify

Update COMPARISON.md's ranked table (and the decision path ONLY if the new watch changes the
recommendation) and BATTERY.md. Then run:

    cd pages && npm run build

The build-time lint traces every summary figure and URL back to the doc and fails on mismatch.
Then grep the new watch's headline numbers across RANKING/COMPARISON/OPTIONS/BATTERY — the
project's recurring failure was a correction landing in one file and not the others.

## Step 6 — corrections stay visible

If anything you wrote turns out wrong, strike it through in place with a dated note
(`~~claim~~ **Corrected YYYY-MM-DD — reason**`). Never silently fix. Do not commit — report
what you added and let the user review and commit.
