## What this site is

One buyer's question, taken seriously: *which 4G GPS watch actually works for a 7-year-old at school in Romania?* Some 108 AI research agents (plus one very patient human) read vendor filings, owner reviews in seven languages, teardown chipset pages and regulatory databases. Everything they found lives in per-watch research documents; this site is a curated view of those documents.

## How the watches were found

Five discovery agents ran in parallel, each with a different lens on the same question: an
**EU retail sweep** (every 4G kids' watch buyable from mainstream EU shops that ship to
Romania), a **brand sweep** searched in eight languages (Spain and Italy have local brands
that never surface in English results), a **technical sweep** working backwards from
Romania's actual networks (which bands are deployed, what died with 3G) to expose watches
sold as "4G" that aren't, a **parent-community sweep** ("the other agents read shops and
spec sheets — you read people"), and a **Romania-evidence sweep** that treats "can I buy
it" and "does it work here" as different questions. Together they catalogued **60+ models**;
18 survived into full research documents, and ~45 were rejected each with a named killer
reason.

## Two axes, no single score

Each watch gets two independent 0–10 scores:

- **Capability** — how good the watch is *if it works*: positioning hardware, battery, bands, app.
- **Evidence** — how much we actually know: how many real, dated, model-verified owner reports exist.

They are deliberately not merged. A 4/7 (well-understood mediocrity) and a 4/3 (the same score on thin evidence) are very different purchases. No watch reached capability 5: **scrutiny is deflationary** — every watch that looked great while lightly researched fell once real owner reports were read.

## The Romania gate

Before scoring, one pass/fail question: *can this watch work in Romania at all?* Romania has no 3G network, so a watch must do VoLTE or fall back to 2G for calls. Vendors that exclude Romania from their account systems (Xplora), publish incompatible SIM tables (Anio), or need an eSIM no Romanian operator issues for it (Canyon Zefir) are gated out regardless of quality.

## Evidence tiers

RO evidence is ranked: tier 1 = dated first-hand Romanian owner report on a named network; tier 2 = app live in the Romanian stores; tier 3 = Romanian storefront reviews; tier 4 = Romanian retail presence with RO warranty. Marketing claims rank nowhere.

## How the evidence was dug up

The per-watch agents ran **919 web searches** and read **1,421 pages across 471 domains**:
retail listings and review pools in a dozen countries, Google Play in 18 country storefronts
(ratings differ per country — 3,477 reviews pulled), the App Store's review feed across 28
storefronts, YouTube reviews via their transcripts *and* comment trees, and primary sources
all the way down — CE/RED declarations, FCC filings, vendor manuals in every language
section, and for the cheap tier the chipset's own kernel code, which is how "no Galileo" was
proven at silicon level rather than guessed.

"Nobody reports X" was treated as a claim about our own search until proven otherwise —
and it usually was. Retail sites that blocked robots rendered fine in a real, logged-in
browser session (strictly read-only: never posting, rating or buying); one bot wall fell to
identifying as a search-engine crawler; captchas were never solved by machines — a human
cleared them. Each recovered wall turned "no evidence" into evidence: one of them alone
un-hid ~400 owner reviews. Every claimed absence in the documents lists the queries that
were run, so even the negatives are auditable.

Reviews got their own forensics: merged review pools de-tangled by per-review model tags,
seeded five-star campaigns traced to free-product programmes, and a standing rule to
**count people, not mentions** — the project was once burned by "dozens of Romanian owners"
who turned out to be three. The full story is on the fake-reviews page.

## How the findings were verified

Every optimistic result got a hostile second look. Dedicated scrutiny passes opened with:
"two watches received passes like yours — both were demoted; a pass that returns 'looks
good' almost certainly did not look hard enough — equally, do not manufacture negatives."
Five adversarial audit lenses then re-derived the numbers, traced every "multiple sources"
back to its origin, hunted unverified absences, checked score logic, and diffed every
figure across every file: ~70 findings, 37 corrections. Their headline conclusion: the
per-watch documents were mostly sound — **the hand-written summaries are where inflation
happens** — which is why this site's build refuses to publish if a summary figure
contradicts its document. Scores proposed by parallel agents were never accepted as-is;
they were re-calibrated by hand against each other, usually downwards. And where a test
could be run for free, it was run for real: the imoo +40 account registration was performed
first-hand on a Romanian number — then corrected the same hour when the write-up described
an SMS step that never happened, because the correction policy below applies to us first.

## Corrections stay visible

Five adversarial audit passes ran over this research and found roughly 150 errors — almost all in hand-written summaries, not in the underlying documents. Corrections are struck through and dated in place, never silently fixed. If a number on this site conflicts with the research document on its page, the document wins — and we would like to hear about it.

## AI did the heavy lifting — here is the bill

This project is AI-assisted research at full scale: the reading, the cross-checking, the
summaries and this website itself were produced by AI agents (Anthropic's Claude), directed
and hand-calibrated by one human. That is not a footnote — it shaped the method. AI-written
text drifts and occasionally invents, which is exactly why five adversarial audit passes ran
over this research, why corrections stay visible instead of being silently fixed, and why a
build-time check traces every figure on this site back to a source document before a page
can be published.

The cost is measurable from the project's own transcripts (snapshot taken 2026-08-19, by an
AI agent auditing its own kind): **over 850 million tokens processed** across some 6,400
model responses, including about 6.3 million tokens of newly generated text. The raw
transcripts run to 94 MiB on disk.
