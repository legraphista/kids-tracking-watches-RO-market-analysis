# RANKING — 4G kids' GPS watches for Romania

Built 2026-08-19 from the 18 documents in [`watches/`](watches/), the five discovery sweeps in
`.discovery/`, and the dedicated battery investigation in [`BATTERY.md`](BATTERY.md).
Target: a 7-year-old at school in Romania, parents at work.

---

## Method — two axes, deliberately no single score

An earlier version of this document produced one number per watch. It ranked the **Garmin
Bounce 2 second**, which was wrong, and the way it went wrong is instructive:

- "Works in Romania" was scored as a 30%-weighted criterion. But **that is a gate, not a
  dimension.** If a vendor won't accept a Romanian account the watch is worthless whatever
  else it does; if it will, that earns no credit — it is table stakes. Garmin banked 3.0
  points for being *activatable*.
- "Position & signal" bundled two different things: **can the radio work here** (bands, VoLTE
  — Garmin is fine) and **does it actually work** (calls connecting, position arriving —
  Garmin is not). Averaging them hid the failure.

So this version does three things instead:

1. **A gate.** Anything that cannot work in Romania is excluded outright, with the reason
   recorded. No points, no partial credit.
2. **Axis A — Capability.** If this watch performs as documented, how good is it at the job?
   Positioning hardware and update behaviour, battery reserve at hour 12 with tracking active,
   radio fitness for Romanian networks, security design, and practical fit for a 7-year-old.
3. **Axis B — Evidence strength.** How much do we actually *know*? Are the specs from
   regulatory filings or from marketing? Has anyone measured the battery at a stated tracking
   interval? Do dated Romanian owners exist? Is the evidence base contaminated by seeded
   reviews or cross-model pooling?

**Axis B measures how well-founded the verdict is, not how likely the watch is to be good.**
Garmin scores high on it precisely because we know, in unusual detail, that it disappoints.

---

## The gate — excluded before scoring

| Watch | Why it cannot work here |
|---|---|
| **Xplora, all models** | Vendor's own supported-country list excludes Romania; Romanian buyers report being unable to create accounts |
| **Anio 6** | Anio's compatible-SIM table covers nine countries and Romania is not one; vendor states non-listed providers are not guaranteed even on a listed network. Ships DE/AT only, and both Amazon.de variants are unavailable |
| ~~LAMAX WatchY4 Play~~ | **UN-GATED 2026-08-19** — the blocking unknown was a fetch failure: its app is live in the RO Play store (updated Nov 2025) and registration is email-only with no country selector. Moved to the matrix at 3/3 |
| **Elari KidPhone 4GR** | *(Gated on capability and stock, not on proven RO non-function — `ro_status: unknown`.)* Old stock only, ~10 h battery, and the better-maintained of its two apps in the Romanian store is the Moscow build |
| **SaveFamily Iconic Plus 2** | *(Gated mostly on capability — `ro_status: unknown`; the RO evidence is two failure reviews.)* Both Romanian reviews are connection failures; app rated 1.7/5 globally; vendor's own GPS-active battery figure is 8–12 h against a 9.5 h school day |
| **Canyon Zefir KW-49** | eSIM-only, and no Romanian operator is proven to issue a standalone wearable eSIM this watch can install. Blocked rather than failed — reopen if that changes |
| Everything in Tier B of [`OPTIONS.md`](OPTIONS.md) | Geo-blocked, region-locked outside the EU, dead radio, or dead vendor |

---

## The matrix

Both axes 0–10. **Capability** = how good if it works. **Evidence** = how much we know.

| Watch | Capability | Evidence | Where it sits |
|---|---|---|---|
| **TCL MOVETIME MT48** | **4** | **7** | **Was 5/7. Best available — but its lead is evidence and retail channel, not capability** |
| **imoo Watch Phone Z7** | **4** | **6** | **Evidence 5→6: two drain tests, 30 Trustpilot, 10 Play, dated Irish owners, a school-day figure — and 47 model-tagged Amazon reviews (2026-08-19), incl. the Australian mis-provisioning cluster** |
| **imoo Watch Phone X10** | **4** | **6** | **Evidence 3→6 (deep pass 2026-08-19): 11 model-verified owners across 6 countries, contaminated pool quarantined, seeded comments proven with receipts. SOS is an opt-in screen gesture** |
| **imoo Watch Phone Z3** | **4** | **5** | **Was 5/3, then 4/6. Capability corrected — see below; evidence 6→5 (one favourable pass); clean Amazon owner base quadrupled to ~56 tagged reviews on 2026-08-19, score held pending depth** |
| Carneo GuardKid+ Platinum | **3** | **8** | **Was 5/5. Location broken for a large minority; SOS false-fires undisableably** |
| Carneo GuardKid+ ULTRA 2nd gen | **3** | **7** | **Was 5/4. Indoors it is a cell-tower device by design; no DoC exists; ~10% early deaths** |
| Garett Kids 4G line | **3** | **7** | **Was 5/3. Wi-Fi→LBS→GPS by design; app 1.70★ on iOS; named in DEF CON 34** |
| White-label / SeTracker2 class | 3 | 7 | **Platform row, not a purchasable SKU** — per-SKU evidence is ~2 |
| Wingereich 4G | 3 | **7** | **Evidence 5→7: all 676 review texts read via a logged-in session. Orange (YOXO) AND Vodafone owners confirmed working — firsts for the cheap tier. Seller's fix for garbled calls is "disable VoLTE", so voice de facto rides 2G; drift reaches 10 km; early mortality 2.5–6.6%. Capability raise rejected: three networks working is not better tracking** |
| WIRSEN 4G | 3 | **5** | **Evidence 4→5: all 149 readable texts now read (model W-066). Still zero Orange/Vodafone owners in a fully-read pool; first interval-qualified battery figure: 12 h at a 1-hour poll; drift complaints exist after all; deaths 3/159** |
| Canyon Sunny KW-48 | **3** | **5** | **Evidence 3→5 (CEE sweep): 11 owners in 4 countries. No Bluetooth in the hardware; frozen-pin failure owner-confirmed; Precise mode drains fast. Capability raise proposed by the sweep agent was rejected — every owner datapoint on the two decisive criteria is pessimistic** |
| **LAMAX WatchY4 Play** | **3** | **3** | **Un-gated 2026-08-19** (RO Play live, email signup — the "evidence vacuum" was a fetch failure). GPS-only "PinPoint", 9-min interval floor, Wi-Fi ~300 m / LBS up to 1 km by the vendor's own numbers, one Czech owner 2 km off at school, ~40 h observed, bands and VoLTE unknown |
| **Garmin Bounce 2** | **2** | **9** | **Was 3/9. No automatic location interval at all, and no reserve at hour 12 under tracking** |
| Angel Watch Series R | **2** | **6** | **Was 3/2; first deep sweep 2026-08-19. The Android app has been REMOVED from Google Play (live Jan 2026, gone Aug 2026) — fails this buyer's Android requirement outright. OEM identified as Wonlex; every SKU is NA-coded and the family's US FCC grant certifies a no-B20 radio; support functionally unreachable across four countries; the covert listen was used in a custody case and the watch plays dead during a listen-in. Out of the parent-facing table; in the Do-not-buy list** |

**Five adversarial audit lenses ran on 2026-08-19 and found 25+ errors in these documents.** The
scores above already incorporate their corrections. The largest single class: **source counts in
this file and in `COMPARISON.md` were repeatedly larger than the number of distinct people in the
per-watch documents underneath them.** The per-watch files are mostly sound; **the summaries are
where the inflation happened.** Every claim found with no file behind it was in one of these two
documents.

**The scrutiny pass of 2026-08-19 confirmed that scrutiny is deflationary.** Four watches that had
never been examined beyond a single research pass were given the treatment the MT48 and Z7 got.
**Three of the four lost two capability points; none gained any.** Their evidence scores rose by
three to five. That is the signature of a score built on vendor claims meeting owner reports for
the first time — and it is why the remaining unexamined rows above should be read as *unmeasured*
rather than *middling*. ~~The imoo X10 at 5/2 is now the only unscrutinised capability-5 left.~~
**Resolved 2026-08-19: the X10 got its deep pass the same day and landed at 4/6 — the prediction
held; the unearned 5 did not survive examination.** No unscrutinised capability-5 remains.

### Correction: the imoo Z3 was over-scored, and the reason is instructive

The scrutiny pass returned the Z3 at capability **5**, above the Z7 at **4**. That was wrong,
and it was wrong in two ways worth recording because both are easy to repeat.

**1. The battery comparison was not like-for-like — and the first attempt to fix it was also
wrong.** The Z3 was credited with *"~50% left after a full day's wear"* against the Z7's *"12%
left after 24 h"*. An earlier correction (2026-08-19) normalised these to ~3.7 %/h each and
declared parity. **An audit the same day found that normalisation was itself uncalibrated**, in
the very way it claimed to fix. Both terms were wrong:

- **The Z7's 24 h is probably not 24 awake hours.** [`BATTERY.md`](BATTERY.md) infers that
  Notebookcheck ran with the **factory overnight shutdown in force**, giving *"88 percentage points
  … over roughly 15–16 awake hours — about 5.5–6 points per awake hour"*. Using the wall-clock rate
  ignored `BATTERY.md`'s own Rule 2 (*"Overnight shutdown inflates everything… Every case is
  flagged"*). It was not flagged. **Second correction, 2026-08-19:** an earlier version of this
  paragraph said `BATTERY.md` had *established* this. It had not, and said so itself — *"arithmetic
  on a single datapoint with an assumed sleep window, not a measurement."* **Notebookcheck never
  states whether the shutdown ran during its test.** The mechanism is now owner-corroborated (see
  below); its application to that specific test is still an inference.
- **The Z3's window was invented.** The source is a conditional remark about a camping trip —
  *"du matin au soir… on atteindra plus ou moins les 50%"* — with no clock times.
  [`watches/imoo-z3.md`](watches/imoo-z3.md) reads it as a **9.5 h school day** (≈5.3 %/h); the
  correction silently widened it to 12–14 h (3.6–4.2 %/h) to make the arithmetic come out.

| | Consumed | Over | Rate |
|---|---|---|---|
| imoo Z7 | 88% | ~15–16 **awake** h (shutdown removed) | **5.5–6 %/h** |
| imoo Z3 | ~50% | 9.5 h if read as a school day / 12–14 h if read as a long wear | **4.2–5.3 %/h** |

**Update, 2026-08-19 — a dedicated sweep partly resolved this, and in the Z7's favour.** A Spanish
owner on a model-verified listing (Breogán, 6 Jan 2025, 5★ verified purchase, `Style Name: Z7`)
reports *"Lo cargan todas las noches con un 50% de batería"* — they charge it nightly at 50%. Over a
~14 h waking day that is **~3.6 %/awake-hour, or roughly 50–65% left after a 9.5 h school day** — which
sits almost exactly between the two lab tests, and almost exactly on top of the Z3's French owner
figure. **Same cell, same rate, now with owner evidence on both sides.** So the original "identical
rate" instinct was right; the arithmetic used to justify it was not. The Z7 comfortably clears the
school-day floor.

**The conclusion below still stands as written at the time:**

**The honest conclusion is that these two watches cannot be compared on battery at all.** One
figure is contaminated by a shutdown, the other rests on an assumed window that this project
states two different ways. The ranges overlap. Neither is a measurement. The earlier "identical
rate" claim reached a defensible answer by combining an over-generous Z3 window with an
under-corrected Z7 rate — **two errors pointing in opposite directions that happened to cancel.**
That is luck, not method, and it is recorded here because it was being cited as this project's
model of good practice.


**2. Price leaked into a capability score.** The Z3's other headline advantage was cost (664 lei
delivered vs ~1,115 for the Z7). **Cost is not a capability**, and for this buyer it is not even
a filter. It belongs in the purchase recommendation, not the axis.

Strip price out, and set battery aside as indeterminate, and the Z3 has **no established**
capability edge — while the Z7 keeps two that bear directly on the primary criterion: **Galileo
and BeiDou** (the Z3 has neither — GLONASS and QZSS only), and **14-day location history sampling
every 2 seconds** (the Z3 has no history at all outside China). Corrected to **4 / 6** — level
with the Z7 on capability, ahead of it on evidence.

**Note what the score now rests on**, since the original reasoning did not survive: not a battery
comparison, but two concrete Z7 advantages against a Z3 battery edge that may well be real and
cannot be demonstrated. If someone measures the Z3 over a stated window with tracking on and it
beats the Z7, this score should go back up.

**The general lesson.** Scores produced by independent agents against the same rubric are not
automatically comparable, because each agent calibrates against its own watch alone. Cross-agent
calibration has to be done afterwards, by hand, and this document did not do it the first time.

### The four quadrants

**The ASCII quadrant diagram that stood here has been removed.** An audit found it did not track
either axis: it drew the Z7 right of the Z3 despite lower evidence, drew Garmin (evidence 9) left
of entries at 7, collapsed a four-point evidence spread into one column — and, by its own geometry,
placed the MT48 *inside* the top-right quadrant that the document's central conclusion says is
empty. It had been redrawn by hand three times and was wrong after each. The table above is the
data; a picture that disagrees with it is worse than no picture.

**The conclusion it was drawn to illustrate still holds, and is now stronger:** nothing in this
field reaches capability 5 at all — the last watch holding one had never been examined, and it fell
to 4 the moment anyone looked. There is no entry that is both good at the job and proven to be good
at it.

### The TCL MT48's evidence gap closed — and the reviews are not good

An EU-wide owner-review sweep (2026-08-19) found **35 model-verified owner reports across six
countries** (DE 8, IT 5, ES 3, UK 4, TR 14, RS 1), harvested from ~2,800 reviews and comments,
each carrying a per-review `MT48X` variant tag. The MT48 is no longer unreviewed. Four things
it reveals, all of which cut against the earlier capability score of 8:

1. **Hardware mortality is a live problem.** Of nine dated longevity reports, **five are
   outright device deaths inside four months** — Spain day 2, Italy week 1, Germany "short
   time", Turkey "a few weeks", Germany 4 months — across four countries and two retail
   channels, with after-sales failing in four of them. A German owner's authorised repairer
   stated on the record that it did not know **whether TCL would ever supply replacement
   units**, which is corroborated by Deutsche Telekom's own MT48X page being marked
   `schema.org/OutOfStock`. **Nobody anywhere reports owning one for longer than four months**,
   and that oldest report is a total failure including water ingress — against an IP68 + 2ATM
   rating.
2. **The dual-band GNSS advantage — the main reason this watch ranked first — is unconfirmed
   in daily use.** ~~Two independent owners who had previously owned single-band MOVETIME models
   report positioning is no better. One quantifies the non-GNSS fallback at ~200 m.~~
   **Corrected 2026-08-19:** it is **one** repeat TCL buyer; the second owner upgraded from an
   *Xplora*, not a MOVETIME. And the "~200 m" figure comes from a **positive** reviewer whose words
   are *"On GPS is spot on. On cellular the precision is around 200 m"* — evidence **for** the
   receiver, previously quoted against it. The capability reduction stands on the other three
   bullets; this one is weaker than stated.
   Indoors it falls back to Wi-Fi and cell, and the geofence flaps.
3. **Battery: seven reports say roughly one day against two saying more.** TCL claims 2.5
   days. The single Swedish "more than a day" this document previously leaned on is not
   contradicted, but it is now clearly the optimistic end.
4. **Manual APN entry may be required** — one UK owner needed it, another failed across three
   operators. Added to the pre-purchase checks.

**Still zero Romanian owners**, re-verified: eMAG RO, HU and BG all return zero reviews.
Also unobserved anywhere: the **MT48EX** eSIM variant, which has no listing and no review in
existence.

Contamination found and flagged, including one live trap: **ASIN `B0GLN6F842` is the MT48X on
amazon.de, .es and .it but the Family Watch 2 on amazon.fr**, with a separate rating pool.
Also an AI-generated French "review" site inventing scorecards from a single real Amazon
review, and retailer search engines silently rewriting MT48 queries to MT46. The Amazon MT48
pool itself tested clean of seeding.

Capability drops 8→5, evidence rises 5→6.

**Correction to that sweep, from a second agent covering UK and Nordic retail.** The
"35 model-verified" figure is **overstated**. Amazon's EU catalogue cross-posts reviews between
the MT48 ASINs and *other* TCL kids-watch ASINs — ten review IDs appear on both an MT48 listing
and on an MT46-4G or a "7-day battery, 1.54-inch" listing that is not this watch. **Only 17
review IDs are exclusive to MT48 ASINs**, and the contamination **skews positive** — six of the
ten strays are 5★. **Arithmetic corrected 2026-08-19:** the 17-exclusive count is Amazon-only; the 16 non-Amazon reports (MediaMarkt TR, Play, App Store, YouTube) are untouched by ASIN cross-posting, so the real model-verified base is **~25 of 35, not 17** — reduced, not halved.

Two things nonetheless improved:

- **The MT48's own reviews are clean.** No Vine or incentivised badges appear on any MT48
  ASIN — these are genuine purchaser reviews. Its sibling **MT46-4G is a different story**:
  eight of about ten UK reviews carry "Vine Customer Review of Free Product" badges, all 4–5★,
  clustered over three months, and several read as AI-written non-owner copy (one reviewer says
  the strap *"appears* comfortable"). Three of those bleed onto the MT48 page via the cross-ASIN
  mechanism and should be discarded.
- **Four genuine UK owner reports were recovered**, including the only source anywhere that
  names the MT48 in the review body.

**And the four-month question is answered — badly.** A German owner, 1★, 9 August 2026:
*"Am Anfang war die Uhr super. GPS sehr genau, Telefon etc super. Nun, nach 4 Monaten, geht
nichts mehr. Display reagiert nicht mehr… und Telefongespräche werden von der Uhr einfach
beendet. Wasserdicht ist sie nicht!!!"* — "At the start the watch was great. GPS very accurate,
phone great. Now, after 4 months, nothing works any more. The display no longer responds… and
phone calls are simply ended by the watch. It is not waterproof!!!" That is the longest
ownership report in existence for this watch, and it is a total failure at exactly the
four-month mark, contradicting the 5★ reviews written in the first weeks.

Structurally, no long-term UK owner *can* exist yet: **Amazon UK's MT48 listing only went live
on 6 February 2026**, and its earliest review is 17 April 2026.

New UK owner detail worth carrying: one owner **could not get voice and video calling working
simultaneously across three different operators**; another needed **manual APN entry** (guided
by ChatGPT) on a Lebara MVNO and warns that a less technical buyer would simply return the
watch; a third reports a call-routing bug where the watch rings both phone and app and then
reports "call failed". On GPS: *"works ok if kid is outside. Difficult if they're indoor…
if kid is inside somebody house, will take long time to track."*

**Battery: still not one report anywhere states a tracking interval.** The retrieved figures
run from *"barely 24h even though it is brand new"* (DE) through 36–40 h with "several video
calls a day and GPS active" (ES) to "lasts days" (UK) — an unusable spread precisely because
nobody says what the watch was doing.

### Retry pass with proxies and yt-dlp — what it added

**The Nordic review is read.** Kjell's reviews are TestFreaks-powered behind a
`POST /resolvedynamicdata` endpoint; the earlier HTTP 500 was a body-encoding bug, not a block.
"Marius", verified buyer, **6 June 2026, 5/5**: *"Bästa barnklocka hittills!"* with the pro
*"Mycket bra GPS"* — "Best kids' watch so far", "Very good GPS". Twenty-two characters, and
**the first owner statement anywhere praising the MT48's GPS.**

**The eSIM variant is no longer unobserved.** The Swedish MVNO Hallon sells the MT48 on
subscription, with a spec table reading `Version 1: Endast Nano SIM / Version 2: Endast eSIM`
and a linked eSIM terms document. It never prints the string MT48EX, so the SKU is observed
and the model designation is not.

**The four-month ceiling should be reworded rather than withdrawn.** A Turkish commenter
claims five months of happy use, but names only "this model", and five months before February
2026 predates the Turkish launch. Correct phrasing: **no model-verified report exceeds four
months.**

**A new failure mode: abandonment rather than death.** A three-month owner switched to a
competitor because the battery would not last a school day. The deaths tally did not grow; the
failure spectrum did.

**The worst battery figure is now 5–6 hours per day** (Turkish owner, three days in), against
48–72 h from another owner and "up to two days, many times" in a Swedish video test. Still no
tracking interval anywhere — though the sponsored Turkish reviewer gets closest to the real
problem by **refusing to quote a number at all, because it depends on how much live tracking
you use.**

**Two new hard facts against it:** the contact list holds **20 entries, cut from 50 on the
MT42** (per an explicit upgrader), and there is **no wrist-off or removal detection** — the
highest-liked comment on the largest review asks for it and was never answered. For a child
tracker, no removal detection means a watch left in a bag tracks the bag.

**Two shipped-broken findings:** outbound video calling **fails out of the box** and needs a
hidden camera permission enabled in TCL Connect; and the AI features are region-gated and
shipped broken in Turkey on firmware v047, fixed by OTA around March 2026.

**Three UNKNOWNs became positive zeros**, which is a real gain: Trustpilot holds 76 TCL
reviews at 1.4/5 and **none mentions MOVETIME or the MT48**; Reddit contains exactly one MT48
item site-wide, a press-release repost; and **Altex and Flanco return literal zero-results
pages**, so Romanian retail absence is now evidenced rather than assumed. Prisjakt.nu reports
*"no store sells this product right now"* with no price history — a supply signal worth noting
alongside Telekom's out-of-stock listing.

**Seeding, for the record:** all three high-view Turkish reviews are disclosed-sponsored, one
with a supplied test sample and one with an affiliate link; competitor astroturfing for Wiky
and Spovan runs through those threads; and the two English-language "reviews" are AI content
farms that call the product "the Mount 48".

**Still unreachable, and now documented as such:** Argos — the product ID was found (8963644,
Cosmic Pink, £139.99) but Akamai defeated ten methods and there are no Wayback captures —
plus Amazon's full review archive, the Softpedia thread, Currys UK, AO.com, eBay UK, eVoMAG,
PC Garage and Cel.ro. `r.jina.ai` was the workhorse: it beat Vercel, AWS WAF and the UK, Irish
and Romanian retailer walls, but not Akamai, Cloudflare Turnstile or Amazon.

Evidence rises 6→7.

### The imoo Z7's evidence base is not independent — it is the vendor's

A dedicated EU-wide owner-review sweep (2026-08-19) found roughly **15 reviews in all of
Europe that name the Z7 — and every single one sits on imoo's own Trustpilot profile or
imoo's own website.** Zero identifiable Z7 owner reports exist on any independent retailer,
price-comparison site or app store, across 13 European Apple storefronts and the German and
UK Play stores. Where a model is named in those places it is a Z1, Z3 or Z6 — never a Z7.

Worse, the vendor-hosted pool cannot be read at face value:

- **Two dated 1★ reviews allege imoo solicited or paid for removal of negative reviews**
  ("Was asked by company to remove my review", 7 Jun 2025; "Imoo bribed me to remove this",
  4 Feb 2025). So the *absence* of negative Z7 reviews is not evidence of reliability.
- **The same brand scores 4.7/271 on one Trustpilot profile and 2.8/55 on another.**
- **11 of the 15 Z7 reviews fall inside a single 7-week launch window**, several written in
  marketing register; one is from an aunt who gifted the watch rather than a parent living
  with it.
- **testbericht.de's "57 aggregated user ratings" is first-party** — it resolves to Amazon
  ratings whose sole German seller is imoo's own Amazon storefront. One quoted testimonial
  contains "Schneidkante", a machine translation of "cutting edge".

The one substantive independent-sounding report is a 1★ from 23 Oct 2025 describing exactly
the failure this project screens for: *"location accurate but there are serious software
issues. History is not being recorded and location is not being updated automatically, so
it's basically useless."* The same reviewer notes the reviews page was **removed from imoo's
EU website**.

Two further findings: **registration failures are live in 2026 and are not Romania-specific** —
nine independent reports across DE, UK, IE and RO, including a current-build German report
that the Register button stays disabled because the user agreement cannot be accepted, which
looks server-side. And **no Z7 owner anywhere reports more than a few weeks of ownership**:
two years on sale, 271 Trustpilot reviews, not one account of living with it for a year.

### Retry pass with proxies and yt-dlp — corrections to the above

A second sweep routed through CORS proxies and used `yt-dlp` to pull YouTube captions and
comment trees. It corrects the section above in four places and hardens it in one.

**Corrections:**

- **"Every Z7 review sits on imoo's own property" is no longer true.** Google Play carries
  **ten** Z7-naming reviews (PL, DE/AT, FR, GB/IE) that the earlier sweep recorded as zero,
  and the YouTube comment sections carry more. The *retailer* half of the claim survives —
  eMAG, PcComponentes, MediaExpert, Geizhals, Otto and Coolblue are still at zero.
- **Trustpilot holds 30 Z7 reviews, not ~15, and the countries are extractable** after all
  (via `r.jina.ai` with an HTML respond-with header, reading `__NEXT_DATA__`). Of 20 read:
  DE 5, ES 5, GB 4, IE 4, EG 1, AT 1 — **11 of the 20 are single-review accounts.** Note the
  document's key negative Z7 review, the one describing history not recording and location
  not auto-updating, is from **Egypt**, not Europe.
- **The PapasVlog seeding suspicion is cleared.** 34 comments spread over ~12 months, the
  uploader answered two, no brand-representative pattern, and the substance is overwhelmingly
  complaints.
- **The "3 Tage" battery figure was manufactured by the citation chain, not by the reviewer.**
  His captions show he never says three days. He says the 740 mAh cell *"soll bis zu 168
  Stunden halten — bzw. ist das ja immer diese Standby-Zeit"* and then, twice, *"aus meinen
  Erfahrungswerten halten diese Uhren immer ungefähr ein Tag."* 168 hours is exactly seven
  days, and he identifies it on camera as imoo's **standby** figure — which is the origin of
  the unsourced "bis zu 7 Tage" that retailers and search summaries have been repeating.
- **`testbericht.de`'s 57 ratings should be struck entirely**, not merely discounted: its Z7
  pages describe a 300 mAh, IP67, BLE 5.3, 1.43-inch, 100-sport-mode band with "up to 10
  days" runtime. That is a different product.
- **WhatGadget is not the origin of "almost three days" and it is dated** (2024-07-22, three
  months after GizNext). Both say the watch can be *expected* to deliver it — a spec-sheet
  expectation, with an affiliate link attached. It does yield one hard fact: **mass 65 g**,
  corroborated on camera.

**A second measured battery figure now exists, and the two disagree by 2.6×.** Jagat Review
(ID, 29 Apr 2025) ran a drain test and got *"baterai akan berkurang sekitar 34% per hari"* on
cellular; Notebookcheck measured ~88%/day. Same watch. **Neither states a tracking interval.**

**And the substance found in those comment sections is worse than what it replaced:**

- One German owner ran his own control experiment: *"Seit Update geht keine Ortung mehr im
  Gebäude"* → *"Habe die gleiche Uhr nochmal bestellt, kein Update gemacht und siehe da Ortung
  funktioniert wieder."* ("Since the update there is no more locating inside buildings" →
  "I ordered the same watch again, didn't apply the update, and lo and behold, locating works
  again.") **That is the best evidence in this project that a firmware update degraded indoor
  positioning** — and indoor positioning at school is the core requirement.
- **The SOS is not a physical button**, and a Polish owner reports a child could not trigger
  it under stress.
- **There is no way to lock a child out of the watch's settings** (German owner).
- The app **forces permanent background activity or logs the parent out**.
- A third independent instance of the location jumping countries: *"the imoo watch location
  suddenly shows as being in China"* (Ireland).

**Both review-removal allegations verified verbatim** — *"Imoo contacted me & offered me a free
watch if I removed this review!"* and *"I was asked to remove my review by the company. I can
see from other reviews that I wasn't the only one."* Caveat: neither names the Z7, so this is
brand-level rather than model-level.

Net: evidence 2→4 (there is more independent material than thought), capability 5→4 (what it
says is worse). **Otto.de's seven German ratings are genuinely unreachable** — its pages return
HTTP 400 from the origin itself even with a browser user-agent, so that is not a bot block.

**The finding a single score was hiding: the top-right quadrant is empty.** Not one watch in
this market is both good at the job *and* proven to be good at it in Romania. Every option is
either well-understood and mediocre, or promising and untested.

- **Top-left — promising, unproven.** You are the tester. Buy only with a real return window
  and run the checks below in week one.
- **Bottom-right — known quantities, known to disappoint.** Garmin is here because we know
  exactly how it fails, from owners in five countries. WIRSEN and the white-label tier are
  here because they demonstrably work on Romanian networks and are demonstrably insecure.
- **Top-right — empty.** No safe choice exists. Anyone telling you otherwise has not looked.

---

## The recommendation, stated honestly

### TCL MOVETIME MT48 — 897.99 RON, sold first-party by eMAG

It remains the pick, but **on narrower grounds than before, and with lower confidence.** What
is genuinely solid: bands confirmed from the RED Article 10(8) declaration (B1/B3/B7/B8/B20,
plus GSM 900/1800 as a fallback if VoLTE is refused), app confirmed live in the Romanian Play
store, plain nano-SIM with no vendor connectivity to withdraw, eMAG first-party with a 30-day
return and a 24-month Romanian warranty.

**What the owner reviews took away:** five device deaths inside four months out of nine dated
longevity reports; an authorised repairer unsure whether TCL will supply replacements; no
owner anywhere past four months; the dual-frequency GNSS advantage unconfirmed in daily use;
and a battery that seven owners put at about one day against a 2.5-day claim. **Still no
Romanian owner exists.** Constellations beyond GPS remain undocumented, Wi-Fi positioning
behaviour is unknown, TCL's data controller is in Shenzhen, and its ISO claims are
unsubstantiated.

It wins because **everything else is worse**, not because it is good. Nothing above it exists:
Carneo Platinum now scores **3/8 against its 4/7** — *lower* capability on *stronger* evidence — plus
far worse privacy; Garmin is better understood and clearly poorer at the job; the cheap tier works but is indefensible.

So the recommendation is: **buy from eMAG first-party, not a marketplace seller, keep the
receipt, and treat the first fortnight as the test.** Given an empty top-right quadrant and a
documented four-month mortality pattern, the 30-day return window and the 24-month warranty
are not incidental — they are a substantial part of why this is the one to buy.

### Reddit — reached via a logged-in browser session (2026-08-19)

Reddit had 403'd every agent since the first sweep. Opened through the user's own browser
session it yielded material nothing else could, including the first plausible **mechanism** for
the Garmin failures.

**Garmin Bounce 2 may run on LTE-M / IoT connectivity, not ordinary LTE.** A well-regarded
r/smartwatch contributor: *"as the lte is with garmin due to it using IoT and LTE-M — this goes
through dense areas like buildings / trees etc better, however the local masts can't be the old
3g/4g only they need to be the upgraded masts (so would check that in your area if you
decide)."* Corroborating context: Garmin's Fenix 8 Pro is also described as LTE-M.

**If true, this explains the entire Romanian failure pattern.** LTE-M has to be enabled
per-mast. Romania has commercial LTE-M on Orange, Vodafone and ex-Telekom — but availability is
not ubiquity. A watch that only works where LTE-M is switched on would behave exactly as
Romanian owners describe: fine in larger cities, and *"o brățară ce măsoară pași"* (a bracelet
that counts steps) elsewhere, with most calls failing. **Recorded as a hypothesis from one
knowledgeable commenter, not as fact** — but it is testable, it is the first coherent
explanation anyone has offered, and it would make Garmin *worse* in rural Romania, not better.

**Garmin's SOS is a physical button** — hold the top button 10 seconds, three vibrations and an
on-screen countdown, cancellable. That is a genuine advantage over the imoo (below).

Two further points from an experienced contributor, both worth carrying:

- **Optical heart-rate on young children is unreliable** — blood flow is not consistent enough
  until roughly 16 — and that is reportedly *why* Garmin omits it. Several watches in this
  market sell "health monitoring" to this age group; treat it as decoration.
- **Listen-in is a legal grey area**, because whether it is lawful depends on who else is
  within earshot. That maps directly onto the *"monitorizare spion"* feature the Romanian
  white-label sellers advertise in their product titles.

**imoo Z7: a "UK owner" reported that the SOS is a screen gesture — you draw a "C" — and that
their six-year-old could not reliably perform it.** ~~That explains the Polish report of a child
unable to trigger SOS under stress.~~ **Retracted as sourcing on 2026-08-19 — see the dedicated
Reddit sweep below.** The single account behind it does not survive scrutiny, and the same post
was the sole source for two other claims recorded here.

**Correction to this document:** ~~the same owner reports there is no auto-answer / listen-in on
UK units, so the note treating imoo's Auto Answer as a covert-listen risk on European units is
withdrawn.~~ **The withdrawal is itself withdrawn** — it rested entirely on the same suspect
account. Auto Answer's behaviour on EU units is **unresolved in both directions**.

**One smaller result.** **imoo posts to Reddit under a "Brand Affiliate" flag** in a parenting
subreddit; disclosed, but it is seeded content.

**The r/Romania threads exist but are stale.** The kids'-GPS-watch discussions are two and three
years old and recommend the ~200-lei LBS-only tier — one commenter names a MoreFIT model whose
listing includes *"monitorizare spion"* — which is precisely the class this research shows died
when the network moved on. They confirm the market pattern rather than adding current evidence.

### Second Reddit sweep, one agent per watch (2026-08-19)

**A method error first, because it invalidates a claim made twice in this document.** The
earlier passes searched Reddit *posts*. **Reddit's post search does not index comment bodies**;
`www.reddit.com/search/?type=comment` does. Everything previously recorded as "Reddit is
unreachable" or "the MT48 has two items site-wide" was measured with the wrong instrument. The
corrected MT48 count is **three items — still all non-owner**, so the conclusion survives but
the earlier confidence in it was not earned.

**The Z7 gesture-SOS report is retracted as sourcing.** It has exactly one origin on Reddit:
`AlertMask_Official`, r/smartwatch, 12 Aug 2026, cross-posted verbatim to r/ParentingAndTech the
same day. Account created 20 Jan 2026, 13 karma, `_Official` brand suffix, and **its profile
overview returns zero items although both posts are live and searchable**. It steers readers to
TickTalk 5 and Angel Watch Series R — so if it is marketing, it is *against* imoo. Its five
replies contain **no second imoo owner**. No Reddit source anywhere describes triggering the Z7
SOS, or a physical-button SOS on any imoo model. The underlying *usability* concern still stands
on the independent Polish Play Store review; the **mechanism** does not.

**What genuinely moved:**

- **The country page is not a hard account gate.** A Portuguese parent runs an imoo **Z1** with
  live GPS, video calls and contact whitelisting — and **Portugal is not on imoo's supported-
  country list**. First evidence anywhere pointing *against* the failure mode that killed the
  Xplora. One report, sibling model — it does not clear the Romanian gate, but it is the first
  datapoint on that side.
- **Independent, dated, positive EU Z7 ownership now exists.** r/AskIreland, ~6 May 2026, Tesco
  SIM at €10/mo: *"Live location, she can ring or message anytime… it's been a great help
  daily."* Plus a Dec 2025 Z7 owner: GPS *"seems pretty good"*, parent interface *"a bit
  janky"*. This partially falsifies the retry pass's finding that the Z7's evidence base is
  vendor-controlled.
- **The strongest Z7-family negative is app-layer, in a small market.** Three independent
  Irish/NI users on the **Z1**: *"I can ring the watch but the watch can't ring me"*, calls
  placed through the imoo app get rejected, manual APN entry needed, and the watch
  *"frequently saying it's not connected even when indoors and on WiFi."* Not radio — imoo's
  software failing outside its core markets. Romania is a smaller market than Ireland.
- **The Wi-Fi credential upload is independently corroborated.** A reader of imoo's in-setup
  privacy policy, r/DigitalPrivacy, 4 Jan 2026: GPS plus **the SSID and password of every Wi-Fi
  network** go to company servers, *"no option to opt out other than not using the $300 watch."*
  Independent of the Data Act schema where we first found that field.
- **MT48 registration: Reddit contains nothing in either direction** — no post and no comment, any
  TCL model, any language, describes creating a TCL Connect account, a country selector, or a
  country refusal. ~~This is a verified negative.~~ **It is not.** Reddit contains almost no MT48
  content at all (three items site-wide), so this measures Reddit, not TCL Connect. **Registration
  remains untested.** The nearest positive is an MT42 owner in **Zürich**
  (+41, non-EU) whose only stated regional limit is cellular, not account.
- **A second independent source says MT48-family location is polled, not streamed.** An MT40
  owner: *"GPS ist nicht dauerhaft aktiviert bzw. ist 'on demand'"*, matching TCL's own manual
  and cutting against the "1-second location refresh" marketing.
- **MT48-family battery clusters at 20–24 h** in French and German owner reports
  (*"environ 20 heures"*, *"Der Akku hält bei Benutzung gut 24h"*), agreeing with the MT48
  retail reports already recorded. Predecessor hardware, so not merged into the frontmatter.
- **MT40 longevity, one generation back:** r/Polska, two units, **~13 months each**, the second
  *"resets itself, loses signal, sends SOS alerts by itself, and now it won't even switch on."*
- **A concrete MT48 thing to test after purchase:** an MT42X owner reports the watch *"doesn't
  allow you to disable outgoing calls to watch contacts (and you can't remove all contacts)."*

**A soft negative on the MT48 worth weighing.** Two 2026 German kids-watch buying threads
recommend Xplora, Anio, imoo, one2track, ZTE and Garmin. **The MT48 is never named** — in its
lead market, where both Vodafone and Telekom stock it, ten months after launch.

**Still unknown after both sweeps.** Z7 tracking interval (a Redditor asked exactly this in Feb
2025 and got no reply); Z7 battery with any stated usage; permanent camera/games disable; any
GDPR/DSAR outcome; MT48 constellations beyond GPS; MT48 chipset. And **zero imoo content from
RO, BG, HU, PL, GR or CZ in any language.**

**Astroturf and conflicted sources catalogued.** `TCL_Official_UK` is TCL's entire Reddit
presence and posts verbatim press releases. **The two largest kids-watch threads on r/smartwatch
are AMAs by the disclosed CEO of a competing brand (COSMO)** — which skews that subreddit as a
recommendation source for every watch in this project. On the imoo side: one account posted the
same endorsement twice in a single thread, and another's imoo endorsement is the only comment it
has ever made — and contains a claim ("no games, no apps") that is **false for the Z7**. A
competitor account claims the Z7 is "designed for China Mobile's network", which is wrong for
the EU SKU.

**One Romanian trap, flagged so a later pass does not fall into it.** The only Romanian-language
Reddit mention of a TCL kids watch is an LLM-styled listicle, downvoted to −4, claiming the MT40
*"poate oferi și o anumită înregistrare a sunetului ambiental"*. It contradicts owner evidence.
**Do not cite.** Romanian owner count for the MT48 remains **zero**.

### The UNISOC tier cannot receive Galileo — established at silicon level (2026-08-19)

This is a **class finding**, not a per-watch one, and it is the hardest technical fact in this
document. It covers everything built on UNISOC's **SL8521E / SL8541E / SC8541E** — which means
the **Garett line, the Carneo GuardKid+ ULTRA 2nd gen, and the entire white-label tier**.

**The GNSS block is on-die and supports GPS + GLONASS + BeiDou, single-band (L1 / B1I) only.
There is no Galileo and no QZSS. It can run only ONE secondary constellation at a time —
GPS+GLONASS *or* GPS+BeiDou — selected by which of two firmware images is flashed, and the
default is GPS+GLONASS.**

The evidence is measured artefact rather than marketing:

- **Kernel and device tree** for the SL8541E-1H10 reference board: `sprd,integrate_gnss`,
  `CONFIG_SC2342_INTEG=y`, no external GNSS part anywhere on the board. Two firmware images,
  `gpsgl` and `gpsbd`, appear as **real flash partitions on four independent shipping-watch
  device trees**. `gnss_common_ctl.c` rejects any other constellation selection with `-EINVAL`.
- **The GNSS HAL pulled off a real shipping watch** carries NMEA talker IDs `$GPGSV`, `$GLGSV`
  and `$BDGSV` — and **no `$GAGSV` (Galileo), no `$GQGSV` (QZSS)**.
- **A UNISOC-focused Chinese source names the parts explicitly** (2022-05-08): 「不支持的芯片：
  SC9820E、SC9832E、SC9863A、**SL8521E**、**SL8541E**、UIS8581E」 — *"chips that do not support
  Galileo"*. Its rule of thumb — parts with 5 GHz Wi-Fi have Galileo, parts without do not —
  puts every 2.4 GHz-only watch SoC in this project on the wrong side.
- A Chinese SL8541E dev-board spec states 「支持四种定位模式：GPS，北斗，GPS+北斗，GPS+GLONASS」,
  an exact match for the two-image architecture.

**Why it matters here.** Galileo is the European constellation, and its absence is permanent —
no firmware update adds a band the silicon cannot receive. Combined with the Carneo finding that
these watches ship pointed at an **Asian AGPS server via AutoNavi** (Alibaba's Amap) — reported by
**one** owner, with a second merely repeating the instruction and citing that first review, not
corroborating it — it gives a
coherent mechanism for the kilometre-scale position errors owners report right across this tier:
a single-band, Galileo-less receiver taking its assistance data from the wrong side of the world.

**The honest limit.** This is firmware architecture, not a field measurement. **No owner-side
constellation capture — GPSTest screenshot, logcat, NMEA dump — was found for any watch on this
platform.** So the ceiling is established; actual reception is not.

**What survives this.** The **imoo Z7** publishes Galileo *and* BeiDou. The **imoo Z3** has
GLONASS and QZSS but **no Galileo**. **TCL has never stated any constellation but GPS** for the
MT48, which after this finding looks less like an oversight and more like a question worth
forcing — hence the NMEA talker-ID check in the pre-purchase list.

### The eMAG pool opened (2026-08-19) — and the tier's Romanian story changed twice

A logged-in browser session rendered **every page of every eMAG review stream** for WIRSEN and both
Wingereich SKUs — the pagination "login wall" recorded earlier was an XHR artefact, not a real wall.
Roughly **825 review texts** (835 ratings; ten carry no text) were read where ~20 had been readable before. Three results:

- **Orange and Vodafone now have working owners** — both on the Wingereich D-023: a YOXO SIM with
  *"actualizarea locatiei este buna"* (Aug 2025) and a Vodafone owner with two-way calls and ~2-day
  battery (Jul 2025). The earlier YOXO *failure* reporter returned in May 2026 with a 4★ "recomand" —
  his problem had been setup, not radio. **The "Digi-only" picture of the cheap tier is dead.**
- **The mortality panic deflates, the mechanism stands.** "Six deaths in ten readable texts" becomes
  **1.9% (WIRSEN) and 2.5–6.6% (Wingereich)** of full review pools — a visibility artefact corrected,
  though infant mortality under two months and the identical-failure warranty replacement both held.
- **The battery reality is worse than the claims by an order of magnitude**: the first
  interval-qualified WIRSEN figure is **12 h at a 1-hour GPS poll**, and the best-quantified test in
  the whole tier is the Wingereich D-011 at **7 h sensors-on across two units**. Two buyers mock the
  advertised 168 h by name.

One mechanism finding that generalises: the **seller's official fix for garbled calls is "disable
VoLTE"** — the toggle exists but is broken in practice, so voice on this tier de facto rides 2G,
which has no committed end date in Romania but no future either.

### The Australian pre-enactment of the Romanian risk (2026-08-19)

Three verified Australian imoo Z7 owners (Telstra, 2024–2025, Amazon ES pool): the watch ran
**audio-only** — no GPS updates, no video — because data/VoLTE never provisioned, so it silently
lived on 3G circuit-switched voice. When Australia shut 3G down, it died: *"this device is 3g
only… seeking return."* It was never 3G-only; it was mis-provisioned, and nobody noticed until the
network moved. **Romania's 3G is already off, so the identical failure here is silent from day
one** — this is now the strongest concrete argument for the incoming-call test in the pre-purchase
list, and it hardens every `voice_fallback`/VoLTE caveat in the watch docs. (Same read also
sighted the time-zone desync in a third country and one Z7 whose Historical Trajectory died
silently in hours — see `watches/imoo-z7.md` § Amazon deep-pool read.)

### Why not Garmin Bounce 2

It is the best-governed product here by a distance — the only one declaring conformity against
EN 18031-1/-2, the only one with no covert-listen feature *documented* anywhere in it (absence of documentation is not proof of absence in firmware), the only vendor that
names Romania in its own documentation. And it appears to be a kids' fitness watch with
location features, sold as a tracker: **no automatic location interval is documented at all**,
its only continuous mode auto-ends every 30 minutes, and running it flattens the battery by
hour ~8 (8.5 from a full charge; 7.8 from the observed 90% start). Owners in Romania, Poland, Ireland, the UK and the US report the same call failures;
the latest firmware contains no LTE fix; and with no SIM slot there is no operator to switch
to. Security support is declared only to 17 September 2027.

### Why not the cheap Romanian best-sellers, even though they work

WIRSEN and Wingereich are the most *proven* watches in this document — ~~dozens of dated Romanian
owners~~ three dated Romanian owners as of the audit of 2026-08-19, **superseded the same day when a
logged-in session opened the full eMAG pools (~825 review texts of 835 ratings, previously ~20 readable): Wingereich
D-023 now has a working Orange (YOXO) owner and a working Vodafone owner — the first non-Digi
confirmations anywhere in the cheap tier — while WIRSEN, fully read, still has not one owner naming
Orange or Vodafone** — at 295–400 RON. They sit bottom-right because in August 2026
researchers used this platform to track a journalist across Manhattan from the Wi-Fi names his
watch broadcast, photograph him twice silently and open his microphone, **using only the email
address the parent registered with**. The covert listening is not a bug; Romanian sellers
advertise it in the product title as *"monitorizare spion"*.

---

## Reality check — the marketing, translated

| Claim | Reality |
|---|---|
| Garmin: "up to 2 days of battery" | Measures a watch that **is not tracking**. Its only continuous mode auto-ends every 30 minutes; running it, an owner went 90% → 32% in five hours |
| Carneo: "up to 4 days" | Carneo's own manual says **20–24 hours** at the 10-minute tracking interval |
| Garett (on eMAG): "up to 3 days" | Garett's own spec sheet says **"up to 1 day"** |
| imoo Z7: "almost three days" | The one "3-day" lab figure is a pure extrapolation whose own tester calls it *"a rough picture"* and whose own advice is "charge it nightly" (Jagat video, read 2026-08-19). Two sites carry the marketing sentence word-for-word — one unattributed claim. **Two measurements exist and disagree by 2.6×**: 12% left after 24 h (DE, with the watch powered off part of that time) versus ~34%/day (ID) — and the second does reach "almost three days". Neither states a tracking interval |
| imoo Z7, across retailers | Sold as "3 days", "7 days", "168 hours" **and** "240 hours" — same product |
| imoo X10 | Amazon listings pool reviews across imoo models — a Z3-titled listing's "3,759 ratings" is a merged Z1+Z3+X10 pool. The seeded-comments claim, withdrawn earlier as unsourced, was **reinstated the same day with receipts** (`watches/imoo-x10.md`): one account wrote 19 of 76 comments on one affiliate video and 8 on another. Only the "machine-generated hourly battery drain article" half of the old claim stays withdrawn — no source for it exists |
| Canyon: "EU-based servers" | Canyon's own app privacy policy says data may be transferred outside the EU |
| Canyon: "Safetrack AI" indoor positioning | Wi-Fi and Bluetooth appear **zero times** in the 98-page manual, which says that indoors it uses cell towers accurate to "100 m or more" |
| Angel Watch: bands including B20 | Three mutually contradictory vendor lists; its own support article says **B1/B3/B5/B7/B8 — no B20** |
| TCL: "dual-band L1+L5 GNSS" | The receiver is real and verified. But TCL confirms only **GPS** — Galileo, GLONASS and BeiDou are never stated anywhere |
| Cheap watches: "autonomie 168 h" | No owner corroborates 168 h, or even 72 h. Real reports run from a few hours to 48–60 h |

---

## Before paying — the checks that beat this entire document

1. Install the companion app **from the Romanian Play store**.
2. Attempt registration with a **+40** number, *before* buying anything.
3. Buy where the return window is real — eMAG first-party gives 30 days, marketplace sellers
   and EU distance selling 14. Check who the seller actually is.
4. Week one: an outgoing **and** an incoming call with the watch registered on LTE; location
   checked **inside the school building**, not in the garden.
5. Read the battery **at the end of a school day, not the next morning**, with tracking set to
   the interval you actually intend to use.
6. For the MT48 specifically: check the NMEA talker IDs to see which constellations it really
   uses — `$GP` GPS, `$GL` GLONASS, `$GA` Galileo, `$GB` BeiDou, `$GQ` QZSS, `$GN` mixed.

---

## Honest limits

- **The two axes are judgements, not measurements.** ~~Component scores are recorded in each watch's
  document; disagree with them there.~~ **There are no component scores** — no watch document contains
  a score of any kind, and that misdirection is a large part of why cross-agent calibration went
  unchecked. The numbers exist only here and in `COMPARISON.md`; the evidence behind them is in
  `watches/`.
- **The evidence axis punishes newness.** ~~The Canyon KW-48 scores low partly because it is too
  recent to have reviews.~~ **Stale — the CEE sweep of 2026-08-19 found 11 owners in four
  countries.** The point survives for the MT48 and Angel Watch: a young or tiny market presence
  caps evidence regardless of product quality.
- ~~**Reddit, Trustpilot, the Softpedia forum and Amazon's full review archives** were inaccessible to every agent. r/Romania is unrepresented.~~ **Stale — corrected 2026-08-19.** Reddit was opened through a logged-in browser session and swept twice; r/Romania was read and found stale; Trustpilot yielded 76 TCL and 30 Z7 reviews. **Only Softpedia and Amazon's full review archive remain genuinely unreachable.** Note the real gap this was hiding: MT48, Z7, Z3, Garett and Carneo were swept on Reddit and Trustpilot; **Garmin and Anio were not** (the X10, Canyon, WIRSEN, Wingereich and now Angel and LAMAX gaps were closed on 2026-08-19), and those two evidence scores should be read in that light.
- **A meaningful share of the visible evidence in this market is manufactured** — seeded
  comments, reviews pooled across different models, machine-generated retailer copy, and at
  least one figure an AI invented that search engines now repeat. Watches with the most
  convincing-looking reviews sometimes have the least real testing behind them.
- Nobody has field-tested any of these watches in **rural** Romania; the rural assessment is
  derived from band sets and documented fallback behaviour, not observation.
