# OPTIONS — candidate list for a 4G kids' GPS watch usable in Romania

Compiled 2026-08-19 from five parallel discovery sweeps (`.discovery/lens-1..5`).
Target: 7-year-old, school days, parents at work, Romania.
Floor requirement: **reliable position and cell signal everywhere, including indoors at
school**. 4G mandatory (no 3G in Romania). At least one real day of battery. Android
companion app. Any EU retailer. Cost is not a filter.

---

## The structural finding that reframes the whole search

**The Romanian network is not the constraint. The vendor's cloud is.**

Cheap SeTracker2 white-label watches demonstrably register, call and video-call on Digi,
Orange and Vodafone in 2026 — confirmed by multiple dated Romanian reviews. Meanwhile
every documented failure in this research is a **vendor-side failure**: Xplora's account
backend refusing Romanian registration, SeTracker2's servers returning "device is off",
Lagenio's "IMPOSIBIL DE CONECTAT LA SERVER", Canyon's "device is not allowed", Garmin's
roaming partner delivering unusable LTE.

So the screening question is **not** "does it support Romanian LTE bands". It is:

> Can I demonstrate that this vendor's account flow accepts a Romanian user *today*,
> and does this vendor have a commercial reason to keep serving Romania *tomorrow*?

On that test only **Garmin** passes cleanly, and **imoo** passes weakly. Everything else
is unproven, and the burden of proof sits with the vendor.

### Supporting facts worth keeping in view

- **3G is gone** across all Romanian operators (Orange completed end-2025; Digi retains
  only a reserved slice in the Bucharest metro). Telekom Mobile no longer exists — split
  between Vodafone and Digi, legal merger into Vodafone completed June 2026.
- **2G survives on Orange and Digi** but no operator has committed to a public end date.
  Vodafone's own 2025 wording: non-VoLTE devices route to 2G, and where there is no 2G,
  "making calls will become impossible". Do not buy a watch whose voice depends on 2G.
- **B20 (800 MHz) is Orange's only sub-1 GHz LTE band.** A watch without B20 on Orange has
  no low band at all — bad wrist antenna, concrete school, cell edge. B3 (1800) is the
  national workhorse. **B28 (700 MHz) in Romania is 5G NR n28, not LTE** — a spec sheet
  advertising B28 buys nothing here.
- ~~**VoLTE is provisioned per device IMEI/TAC by Romanian operators**~~ **CORRECTED 2026-08-19:
  Romanian VoLTE is a flag on the SIM profile, not a device whitelist.** Digi's own community
  documentation describes activating it by inserting the SIM in any supported handset once, or by
  phoning for manual provisioning; a French owner runs an imoo Z3 on an operator absent from imoo's
  own carrier list, with working two-way voice. It is a setup step, not a blocker. It remains true
  that no kids' watch appears on any Romanian operator's VoLTE list. "The watch supports VoLTE" and "VoLTE
  works on this Romanian SIM" are different claims. Prefer Orange or Digi, which still
  run 2G, so a VoLTE provisioning failure degrades to 2G voice rather than silence.
- **On the Wonlex/UNISOC SL8521E white-label platform, B20 is a build-time option** chosen
  per production order. Same model number, same photos, different radio. No band claim on
  a marketplace listing for a white-label watch is trustworthy without a CE/RED
  declaration for that exact SKU.
- **Only ~5 of 60+ models on the market publish their LTE bands at all.**
- **"39 brands, one server" — DEF CON 34, 8 August 2026 (Solferini & Stykas).** Security
  researchers presented evidence that dozens of kids'-watch brands are the same backend
  wearing different stickers. **SaveFamily is named on that slide**, the `com.tgelec.*`
  package stem maps to SETracker / YQT (3G Electronics, Shenzhen), and the data
  *"sits on Alibaba Cloud in China"*. In the researchers' words, moving from Wonlex to
  SaveFamily is **"a sticker change"**. Corroborated independently in this project by
  the Carneo workup, whose child-safety app is `com.tgelec.carneoguard` even though its
  fitness app sits under Carneo's own Slovak namespace.
  **Consequence: Carneo, Garett and SaveFamily are not meaningfully "European
  alternatives" to the white-label tier — they are the white-label tier with EU
  branding.** Any claim of EU data residency from these vendors needs proof, not
  marketing copy. Earlier platform research (STALK, ARES 2020) found no
  watch-to-backend authentication, enumerable IMEI-derived device IDs leaking user
  emails, SQL injection in "almost all" REST parameters, and a covert-call command that
  dials an arbitrary number with the screen off.
  **What that means concretely, demonstrated live on stage:** the researchers tracked
  WIRED journalist Andy Greenberg across Manhattan using the Wi-Fi network names his
  watch was broadcasting, silently photographed him twice, and opened his microphone in
  the WIRED newsroom — **using only the email address the parent registered with.**
  SETracker told WIRED the issue was fixed; the researchers could not confirm it.
  **Data hosting, resolved:** SeTracker's published Europe server reverse-resolves to
  AWS Frankfurt — but it is operated from Shenzhen, with user photos on Alibaba Cloud.
  **EU compute, not EU control.**
  And the covert listening is not a lurking bug — it is the advertised product. A
  Romanian seller's own copy, verified live: *"Ori de cate ori doriti puteti asculta ce
  se intampla in jurul ceasului **fara ca posesorul sa realizeze ca este ascultat**"*
  ("whenever you like you can listen to what is happening around the watch **without the
  wearer realising they are being listened to**"). It is a server-issued command, and
  third parties triggered it in both 2020 and 2026.

---

## Status key

| Status | Meaning |
|---|---|
| `verified` | Vendor names Romania, or dated first-hand RO user confirms it working |
| `likely` | App live in RO storefront + vendor serves EU broadly + bands fit |
| `unknown` | Sold/shippable to RO, no evidence either way |
| `fails` | Documented RO failure, geo-block, dead radio, or dead vendor |

---

## TIER A — research in full (Phase 2 writes a doc for each)

| # | Model | Price | RO status | Strength | Main risk |
|---|---|---|---|---|---|
| 1 | **Garmin Bounce 2** | 1,499–1,836 RON | `verified` — but **supported ≠ working** | Romania **re-verified on both en-US and ro-RO** coverage pages. **Bands found in the owner's manual: LTE B3, B8, B20** — a sane Romanian set (B20 for Orange/Vodafone, B8 for Digi, B3 national). eMAG 1P. **Best governance in the field by a distance:** declares against **EN 18031-1/-2:2024** (RED cybersecurity, incl. childcare wearables), which almost nothing else here can claim; **no covert remote-listen feature exists anywhere in the manual** | **The reliability failure is a Bounce 2 platform problem, not a Romanian one — which is worse, because there is no operator to switch to.** The identical complaint appears on Garmin's own forums from **Poland (95:5 call failure), Ireland (>95% location errors), the UK ("LTE has completely failed") and the US** — one US poster's "calls fail 9/10, texts delayed 10/10" is numerically identical to a Romanian reviewer's. Latest firmware contains **no LTE fix**. **The DoC cites no GSM or UMTS standard**, so there is likely no 2G fallback — voice must be VoLTE (unverified inference). **UK DoC declares security support only until 17 September 2027.** Garmin refuses to disclose its roaming partner. No SIM slot, so no fallback if Garmin withdraws. Battery observed 24–36 h against 48 claimed. **Garmin's own child-consent floor is age 8; the target child is 7** |
| 2 | **imoo Watch Phone Z3** | €126.65 / 1,523 RON (marketplace, not 1P) | `unknown` (downgraded from `likely`) | Bands **B1/3/5/7/8/20/28** + VoLTE, confirmed from primary source — Romania-complete; imoo EU store ships to RO | **The "conflicting lists" were a category error** — imoo's country page is a storefront selector, not an allow-list, and imoo publishes **no registration allow-list at all**, so RO registration is simply untested. **No eMAG 1P listing exists** (all marketplace, 14-day return). Positioning is GPS+GLONASS+QZSS only — **no Galileo, no BeiDou**, worse than the cheaper Z7. No runtime figure published anywhere. Dominant imoo complaint across 5 years is the **account layer** |
| 3 | **imoo Watch Phone Z7** | €186.15 / 1,115 RON (marketplace) | `unknown` | Bands B1/B3/B8/**B20** + VoLTE confirmed from imoo's own spec table. **Missing B7 costs close to nothing** — it is a 2600 MHz capacity layer, the watch moves ~731 KB/day, and it carries B38/B40 TDD for 2600 anyway; B28's absence costs nothing since RO 700 MHz is 5G n28. 5 constellations + WiFi + LBS + **barometer**. **imoo is on none of the three shared backends named in the Black Hat 2026 research** — it runs its own platform, a real structural advantage | **The "almost three days" battery claim collapses** — two sources carry it word-for-word identically, so it is one unattributed claim. **Two lab measurements now exist and disagree by 2.6×** — Notebookcheck (12% left after 24 h, overnight shutdown likely included) vs Jagat Review (~34%/day); a model-verified Spanish owner puts a school day at **~50–65% remaining**, must be charged daily, and the watch **powers itself off overnight by factory default**, which is how multi-day figures get built. imoo publishes no runtime on imoo.com — but its own Amazon listings say **"1 to 2 days"** (claimed 24–48 h). Background reporting is **once per hour** by default. Two dated RO failures incl. an SMS code that never arrives. **Australia pre-enacted the RO risk (read 2026-08-19): three Telstra owners ran audio-only for months (VoLTE/data never provisioned, silently on 3G CSFB) and the watch died at AU's 3G shutdown — Romania's 3G is already off, so that failure is silent from day one here.** Data hosting UNKNOWN; the collected-field schema includes school name, home address and **home Wi-Fi password**. "Auto Answer" is functionally a covert listen — parent-enabled, child cannot revoke |
| 4 | **imoo Watch Phone X10** | €299 direct (€239 MediaMarkt.de); **3,630.00 RON (~€700) on eMAG — 2.3×**, marketplace not 1P | `likely`, tier 3 (per the doc; one dated RO owner) | Widest band list found (incl. B20), VoLTE confirmed on two imoo storefronts; Snapdragon 4100; barometric floor detection. **Battery clears a school day** — nine dated reviews cluster at **~1–2 days (24–48 h)** — the 72 h top was contradicted by its own outlet's second test; worst credible case ~1 day intensive including GPS tracking and video calls | **No reviewer states the location update interval**, so the aggressive-polling case — this category's dominant battery failure — is untested by anyone. **UPDATED 2026-08-19:** the clean pool now spans RO/DE/SG/IT/US/PL (11 model-verified owners); imoo's own Amazon copy claims "1 to 2 days"; **SOS is an opt-in screen gesture** (off until the parent enables it); MediaMarkt.de undercuts imoo at **€239**. **Too big for a 7-year-old:** 67 g, 56×43×14 mm, and four of six hands-on reviewers call it bulky on a child's wrist. **The 1,610 RON listing is not this product** (titled "pentru femei", specs list no 4G, GPS, SIM or camera). No privacy policy covering the watch or app service exists at all |
| 5 | **TCL MOVETIME MT48** | 897.99 RON (**eMAG 1P**) | **`likely`, tier 2 — strongest evidence position of any candidate** | **Bands confirmed from the RED Art.10(8) declaration: B1/B3/B7/B8/B20 — Romania-complete**, plus GSM 900/1800 so a VoLTE refusal degrades to 2G rather than silence. **App confirmed live in the RO Play storefront** (`com.trackerandroid.trackerandroid`, updated 17 Jul 2026, 1M+ installs, listing names MT48X/MT48EX, Romanian among its languages). Dual-band **L1+L5 GNSS**, 900 mAh, IP68+2ATM, plain nano-SIM with no vendor eSIM or subscription | **Data controller is in China** (Shenzhen) per TCL's own children's privacy notice. ISO 27701/27001 claims unsubstantiated — no certificate, body or scope found, and they appear in none of TCL's own privacy notices. 2020 incident: the MOVETIME app's Facebook login handed one parent **random strangers' accounts**, exposing children's live GPS (patched in under 24 h, publicly owned). Only one qualitative battery observation exists. +40 registration still unobserved — but now free to test before buying |
| 6 | **Canyon Sunny KW-48** | 529.99 RON (marketplace "Prestigio Plaza", **not 1P**) | `likely`, tier 2 | **Bands found in ASBIS's own 98-page manual: 4G B1/2/3/5/7/8/20 — B20 present**, plus GSM 900/1800 as a 2G backstop if VoLTE provisioning fails. **Nano-SIM confirmed twice** from primary sources — no vendor connectivity layer. Orange RO bundle verified and **corrected**: it ran ≥13 months (Aug 2024 → Sep 2025) and repriced *downward*, so it is a standing programme, not a one-off — **but for the KW-44 only** | **Wi-Fi positioning is disputed, not confirmed** — "Safetrack AI" is marketing; the manual's spec table has no Wi-Fi row, the words Wi-Fi and Bluetooth appear **zero times in 98 pages**, and §5.1 says that indoors it falls back to **GSM-tower LBS at "100 m or more."** That is the decisive school-indoors criterion. Battery is **750 mAh** (not 900), with "2 days" conditioned on a 10-minute interval while Precise mode polls every minute; **SUPERSEDED 2026-08-19: 11 owner ratings (8 substantive texts) across LV/HU/SK/BG/KZ exist** — the earlier "zero reviews in any language" was a reach artefact. The pool confirms the pessimistic indoor story (frozen pin, Precise-mode drain) and that the hardware has **no Bluetooth**. **Covert remote-listen and remote camera, both surviving Do-Not-Disturb, neither lockable.** "EU servers" contradicted by Canyon's own app privacy policy. Two RO users report **Digi SIMs where voice works but data does not** |
| 7 | **Canyon Zefir KW-49** | 650.53 RON (marketplace, ~2× the Slovak price) | `unknown` | Bands verified from the primary source: B1/2/3/5/7/8/**20**/28A + TDD; 900 mAh with the most transparent battery test profile published by anyone | **SETTLED: eSIM-only.** *Not* vendor-locked — it is a bring-your-own-operator GSMA eSIM, so there is no Canyon connectivity layer to withdraw. But **no Romanian operator is proven to issue a standalone wearable eSIM with its own number that this watch can install**. Blocking until demonstrated. Also: GPS+WiFi+LBS only (weakest positioning stack of the primary candidates); covert "stealth calls" with no documented lock |
| 8 | **Carneo GuardKid+ 4G ULTRA (2nd gen)** | 865.41 RON (marketplace) / €129 | `likely`, tier 4 (doc reaffirmed 2026-08-19) | **2nd-gen bands now independently sourced** from carneo.cz and carneo.sk: FDD-LTE B1/B2/B3/B5/B7/B8/**B20**/B28A. nano-SIM, no vendor SIM. 1.72" Super AMOLED, IP68. Carneo runs `carneo-store.ro` with a named Bucharest service centre. App store is a **parent-push** mechanism — the child cannot install anything | **Named in the DEF CON 34 research as one of 39 brands on the Chinese SETracker/YQT backend** — data on Alibaba Cloud, mainland China; researchers could spoof location, listen silently and trigger the camera from the parent's email alone. Carneo has not responded; the same platform was found open by Pen Test Partners in 2020. **The manual advertises covert listening verbatim** — "the watch appears switched off, with no activity whatsoever" — and eMAG sells it in the product title as *"monitorizare spion"*. No disable. App rated **2.7/5** (settled multi-locale read; range 2.2–3.1 by storefront country). **Battery: the manual says 20–24 h at the 10-minute interval**, against marketing claiming ~4 days. VoLTE UNKNOWN. Single-constellation GPS only. Zero RO reviews |
| 9 | **Carneo GuardKid+ 4G Platinum** | 565–708 RON (marketplace) / ~€85 in CZ | `likely` | Published bands **B1/2/3/5/7/8/20/28A**; 1000 mAh; **nano-SIM, no vendor SIM or subscription**; Carneo Guard live in the RO Apple storefront **with Romanian language** | **"4 days" is false** — the only hands-on test got **~30 h** at a 10-min interval, and Carneo's own manual says 1–3 days at that interval. **VoLTE unmentioned anywhere including the manual** — leaning negative. CE/RED declaration retrieved but lists **only the 2.4 GHz WiFi/BT standard — no LTE, GSM or GNSS standards**, so the band list is vendor-published but unsubstantiated. **App is `com.tgelec.carneoguard` — the TGELEC/Shenzhen namespace, i.e. the same ODM platform family as SeTracker, Garett and SaveFamily.** Rated 2.7/5 from ~1,110 ratings (settled 2026-08-19 by a controlled multi-locale Play read; Play serves country-dependent averages, 2.2–3.1, for this one pool). Covert listening is advertised in Carneo's own manual and is not disableable |
| 10 | **Garett Kids 4G line** (Twin 2, Essa, Tech, Nice Pro) | 311–575 RON | `likely`, tier 3 | **Bands found — in the RED Art.10(8) statement printed at the back of every Garett manual**, which is why every sweep missed them: LTE 800/900/1800/2100/2600 = **B20, B8, B3, B1, B7**. Romania-complete. A real 2G radio is declared at full power and the watch exposes a VoLTE toggle, so voice likely works via 2G CSFB on Orange/Digi today | **CORRECTION: the review counts were wrong.** Twin 2 shows 1 review, Nice Pro 1, and the other six SKUs have no reviews tab at all — **two Romanian reviews exist across the entire range**, not 51 and 41. ~~**The price gap is also gone** (+3% / −1% vs Poland at current rates)~~ **CORRECTED 2026-08-19:
the Romanian price is +25% over Polish street and +40% over the cheapest Polish offer. The "+3%"
compared against a list price nobody pays**; big gaps survive only via third-party resellers. **Battery: Garett's own spec table says "up to 1 day"** while eMAG markets three; **CORRECTED 2026-08-19: four of five dated Twin 2 owner reports converge on ~2 days (48 h); the fifth says it
does not last until evening.** None states a tracking interval. Band table is byte-identical across three different chipsets, so it is boilerplate — binding, but boilerplate. Twin 2's DoC lists **no radio standard at all**. App is `com.tgelec.garetts` (**2.33★ on Play PL and 1.70★ on the Polish App Store** — the "2.6" was
a Romanian-locale histogram artefact) — and `com.garett.ekids` is the **eSIM-line app, not a successor**, so there is no escape route. **The manual publishes the factory SMS password `123456`**, and a `ts` command returns IMEI and server IP to any sender. Data Safety form **omits Location entirely** |
| 11 | **LAMAX WatchY4 Play** | **1,294 RON vs ~€90 in CZ — a 2.8× markup** | `unknown` → **un-gated 2026-08-19**: app live in RO Play (tier 1), email-only registration, no country selector — the tier-0 vacuum was a fetch failure. In the scored matrix at 3/3 | IP68, Gorilla Glass, **confirmed SIM-unlocked** with no vendor connectivity layer | **LAMAX's own store country list excludes Romania.** No RO storefront, no Romanian in the UI/app/manual, no RO warranty entity, 0 reviews, marketplace seller. **"PinPoint" is GPS-only** — no GLONASS/Galileo/BeiDou; vendor's own fallback accuracy is Wi-Fi ~300 m and LBS **up to 1000 m**; tightest interval is 9 minutes. Czech parent, 2024-11-22: *"as soon as he arrived at school the app showed a position outside the school, roughly 2 km away"*. DoC retrieved but **contains no frequency table** — B20 UNKNOWN. VoLTE never mentioned. Four contradictory vendor battery claims (120 h / 72 h / 2–3 d / 3–5 d); one observed figure ~40 h |
| 12 | **Anio 6** | €199 | `fails` | Radio verified and genuinely excellent — **B1/B3/B7/B8/B20 + explicit VoLTE**, no SIM lock, no camera, no games, and **not** on the SeTracker/Wonlex platform that carries this category's vulnerability history | **Anio publishes a compatible-SIM table with a country column — nine countries, Romania absent** — and states that non-listed providers are not guaranteed *even on a listed network*. Helpcenter search for "Rumänien" returns 0 results. **No route to buy:** ships DE+AT only, both Amazon.de variants unavailable today. **Battery convicts itself:** Anio publishes ~5% of capacity per 10 minutes in school-route mode and 24 h at a 5-minute interval — a real school day lands **under 24 h**; no measured runtime exists from any reviewer or owner. Wi-Fi positioning needs **≥3 nearby WLANs** from a crowd-sourced database built across nine Western/Northern European countries. The one Romanian reviewer wrote *"Nu pot conecta"*; **Anio replied in German** |
| 13 | **Angel Watch Series R** | £149.99, vendor-direct only | **effectively `fails` for an Android household (2026-08-19): the Android app has been removed from Google Play** (live Jan 2026; APK mirrors still carry a Jul 2026 build). iOS RO remains live | **No country gate exists in registration at all** (email + password, no phone field); iOS app live in the RO store with a Romanian localisation; **VoLTE explicit device-side** with a config screen; observed **96+ h** battery in a week of hands-on wear | **The band claim does not survive.** The vendor publishes **three mutually contradictory lists**, and its own support KB spec article says **B1/B3/B5/B7/B8 — no B20**. Same article also contradicts itself on IP rating, screen and camera. No FCC ID under this brand — but the OEM is now identified with high confidence as **Wonlex** (photo match, Wonlex factory-reset code in the manual, "former SeTracker2 app"), **every SKU is NA-coded, and the family's US FCC grant certifies a no-B20/no-B3 radio variant**. Android package is **`com.tgelec.angelwatch`** — the same Shenzhen platform stem again. **WhatsApp ships preinstalled and reaches outside the parent-approved contact list**, with no documented removal. Covert "Sound Guardian" listen with no disable procedure. 15–40 day shipping against a 14-day return window. Owner pool now 30+ dated reports (2026-08-19 sweep): Trustpilot 100% 1★, support unreachable in four countries, the $4.99/mo "warranty" billed without service, and a custody case where the covert listen was used against a household — during which the watch **plays dead** on the child's wrist |
| 14 | **SaveFamily Iconic Plus 2** | €129 | `unknown` (shipping only) | Vendor ships to Romania; registration flow has **no documented country gate** | **Named on the DEF CON 34 "39 brands, one server" slide; data on Alibaba Cloud in China — the "datos europeos" claim collapses.** App rated **1.7/5 from 1,832 ratings** — the two Romanian "cannot connect" reviews are weak evidence of a RO block and strong evidence of a globally broken app. APN guide lists **17 carriers, all Spanish**. "VoLTE" appears in zero SaveFamily sources. **Vendor's own GPS-active battery figure is 8–12 h** against a ~9.5 h Romanian school day + commute — gen 1 (1000 mAh, 9–14 h, €24 cheaper) is the better buy. Refund policy imposes a **72-hour claim window** |
| 15 | **Wingereich 4G** (Wonlex OEM) | 399.98 RON (D-023) / 379.94 RON (D-011) | `verified` (**working owners on all three networks — ~11 Digi, 1 Orange/YOXO, 1 Vodafone — full pool read 2026-08-19**) | Largest Romanian evidence base in the market; brand entity identified as **SWEINSTEIGER DB GROUP S.R.L.**, a Bucharest reseller — no engineering team | **CORRECTION: "Wingereich 4G" is TWO different watches.** The 524-review listing (D-023) is 1.91" AMOLED / 900 mAh; the 700 mAh figure belongs to **D-011**, a different 1.4" IPS SKU with 152 reviews — and **most of the reviews quoted in the first pass sit on D-011, not D-023.** The evidence cannot be pooled. **SUPERSEDED Orange signal (2026-08-19, full pool read):** a working **YOXO owner** exists (*"actualizarea locatiei este buna"*, Aug 2025), the earlier YOXO-failure reporter returned with a 4★ "recomand" (his issue was setup, not radio), and a **Vodafone owner** confirms two-way calls — the first non-Digi confirmations in the cheap tier. Older text follows: a buyer reports a YOXO SIM does not work, a second asks the same and is unanswered — **zero Orange successes against two Digi confirmations**, exactly the asymmetry a no-B20 build produces (hypothesis, not finding). Honest ratio **8 detailed positives to 10 detailed negatives** against a 4.77 headline; **six independent hardware deaths** including two dead on arrival — **superseded by the full-pool rates: 13/524 (2.5%) on D-023 and ~10/152 (6.6%) on D-011**. **No owner corroborates the claimed 168 h, or even 72 h.** Google Play needs an unsupervised **adult** Google account with no Family Link. Review farming evidenced — one name posted twice in three days across two colour variants |
| 16 | **WIRSEN 4G** (Wonlex OEM) | 295 RON | `verified` (**Digi only — now a fully-read result, 2026-08-19**: all 149 review texts read (word-search over all 159 ratings) via a logged-in session; zero Orange/Vodafone owners) | The 48–60 h battery report is corroborated: Wonlex's own catalogue rates the matching SKU at "up to 48 hours", so it needs no special explanation. SeTracker2 confirmed by the seller | **SUPERSEDED 2026-08-19: the full pool was opened and read (all 149 rendered texts; the "login wall" was an XHR artefact).** Drift complaints **do exist** ("other end of the country", wrong neighbourhood); early deaths are **3/159 (1.9%)**; the first interval-qualified battery figure is **12 h at a 1-hour GPS poll**; model code **W-066**. ~~No report states its tracking interval~~ **(one now does — 12 h at a user-set 1-hour poll; the factory default remains unstated)**, which is the parameter that decides battery. `extras_disableable: false` — "school mode" blocks notifications only; no camera, game or Play Store lock. OEM model UNKNOWN, no CE/RED declaration, bands unpublished. Vendor's own dimensions are geometrically impossible. **"Monitorizare spion" is in the product title** |
| 17 | **Elari KidPhone 4GR** | €119 / RON via TradeInn | `fails` | Bands **B1/3/7/8/20 published in Elari's own manual** (the website publishes nothing — the manual does); GLONASS | **REJECT.** Battery fails the floor: manual states 580 mAh in EN/RU and 620 in DE/FR/ES/IT, no vendor active-use figure at all, owner reports split around ~10 h. VoLTE never mentioned; the one spec-DB value for the sibling records `volte: false`. **Jurisdiction is the worst found anywhere:** four corporate identities, and the *better-maintained* of the two apps live in the Romanian store is the **Moscow** build, with nothing telling a parent which to pick; the privacy policy admits verbatim transferring data to countries lacking EU-adequate protection. **kidgram.org — the URL both live Play listings send Romanian parents to — now serves an Indonesian gambling site.** Covert remote-listen confirmed from Elari's own marketing, no off switch. Old-stock only; absent from the current line-up |
| 18 | **White-label / SeTracker2 class** (category doc) | 250–450 RON | `verified` (works, badly) | Proven on all four RO networks; Romanian distributors with Romanian phone support and returns. **The lineage is now proven from the resellers' own mouths** — xkids.ro tells customers *"Pentru ceasurile Xkids, Wonlex, Twinkler, **YQT** recomandam aplicatia SeTracker 2"* | **At Black Hat / DEF CON in August 2026, researchers tracked a WIRED journalist across Manhattan using the Wi-Fi network names his watch broadcast, photographed him twice silently, and opened his microphone in the WIRED newsroom — needing only the email address the parent registered with.** 46 apps / 39 brand names on one server, ~10M watches. SETracker told WIRED it was fixed; the researchers could not confirm it. This is a documented **2017 → 2019 → 2020 → 2026** pattern. **Data hosting resolved: EU compute, not EU control** — SeTracker's Europe server reverse-resolves to AWS Frankfurt, but is operated from Shenzhen with user photos on Alibaba Cloud. **The B20 lottery is now airtight:** the SL8521E platform page publishes B1–B20/B28A, the KT26S publishes *"(Optional: B20…)"*, the KT26 publishes the same list **without** B20, and the KT30 only B1/3/5/8 — same chipset, same factory, three different radios |

---

## TIER B — unusable in Romania (no doc; killer reason recorded here)

### Vendor geo-block or market withdrawal

| Model / brand | Killer reason |
|---|---|
| **Xplora — all models** (X6 Play, X6 Pro, XGO3, XGO3 G2, X5 Play, XGO2) | Xplora's own live FAQ lists 10 countries for online purchase and 16 for service — **Romania is on neither**. Vendor instruction is to activate in the country of purchase or another supported country. Corroborated: RO review pool is **7 reviews for a 500K-install app, six of them 1★**, including *"usless in some countries"*; eMAG presence collapsed to one out-of-stock SKU plus a Hungarian marketplace seller. **This is the device already lost once.** Confirmed structural, not bad luck |
| **Spacetalk** (Adventurer 2, Loop) | Romania not among its 14 regions; watches soft-locked to Spacetalk plans. Also: 2025 platform migration left watches that "stopped working, stopped pairing"; company took $3M rescue funding and had $1M debt forgiven the same year |
| **Vodafone Neo (Disney)** | **Vodafone switched off its entire Smart Tech line on 1 August 2024** — working hardware remotely bricked. Second documented mass-bricking in this category |
| **Pingonaut** (Panda, Puma) | Manufacturer **insolvent since September 2020**; support discontinued. Hardware is 2G anyway. Stock still floats on Amazon/eBay |
| **Locon / Bezpieczna Rodzina** (PL) | Embedded SIM works only with Polish operators; Polish-only app and site. Structurally the same national geo-gate as Xplora |
| **Moochies** | Bundled-SIM + own-plan architecture; UK/US/AU only; no RO evidence, no RO storefront app |

### Region-locked outside the EU

| Model / brand | Killer reason |
|---|---|
| **Fitbit Ace LTE** (Google) | **LTE limited to the USA**, no SIM slot, cannot be activated without a US Ace Pass plan. No RO storefront app |
| **Garmin Bounce (Gen 1)** | Superseded; its coverage list did not include Romania (Gen 2's does) |
| **TickTalk 5** | US carriers only; vendor tells international buyers to add a line to their own carrier. No EU channel |
| **Cosmo JrTrack / Gabb Watch / Bark Watch** | US-only service, no EU distribution |
| **Verizon GizmoWatch 3 / T-Mobile SyncUP KIDS 2 / AT&T amiGo** | Carrier-locked to US networks |
| **Xiaomi Mi Rabbit / Mi Bunny 4G** | China-market only, Chinese app, no EU release. (Xiaomi's global "Smart Kids Watch" is non-cellular) |
| **Huawei Children's Watch 4X / Kids Watch 5X** | Discontinued / no functioning EU channel; tied to Huawei Mobile Services |
| **360 / Qihoo** | No EU distribution or app-store presence |
| **imoo "Little Genius"** (CN domestic) | Chinese-domestic SKUs; buy the EU imoo SKUs instead |

### Dead radio — 2G or 3G-dependent, therefore dead in Romania

| Model / brand | Killer reason |
|---|---|
| **Kruger&Matz Smartkid (KM0469)** | **2G only.** On sale on eMAG at 181 RON *right now* — and **the listing itself states it does not work on Digi and only partially on Vodafone**. Companion app orphaned; support tells buyers to use SeTracker2 |
| **Carneo GuardKid+ MINI** | 2G/3G only, €109, from a brand whose other models are among the best documented. Brand-halo trap |
| **Wonlex KT24S** | 2G, on eMAG at 300–369 RON |
| **Wonlex KT26 / KT30 (and any KT SKU unconfirmed for B20)** | OEM band list **B1/B3/B5/B8 — no B20, no B7, no B28**. On Orange this leaves zero sub-1 GHz LTE |
| **SaveFamily Junior 2G** | 2G, on eMAG at 142.49 RON |
| **Elari KidPhone 2 / KidPhone 3G** | Generation stated in the listing title; still on Amazon.fr in 2026 |
| **Anio 5 / Anio 3 Touch** | 2G only; still €119–169 at smartwatch.de |
| **Weenect Kids** | GPRS/2G only, and a screenless tracker rather than a watch |
| **MoreFIT MX528** | LBS-only (cell-tower positioning), legacy 2G/3G. 941 RO reviews split 506×5★ / 202×1★ — the signature of a product that stopped working as the network moved on |
| **Calmean, Bemi Kid, Klack RELJNINOSY36, non-4G Celly KidsWatch** | 2G-class or 2G-suspect at their price points |
| **Any listing advertising "2G/3G fallback" as a feature** | In Romania that fallback is fiction |

### Dead or dying vendors

| Model / brand | Killer reason |
|---|---|
| **MyKi Watch 4 / Watch 4 Lite** (Allterco) | **`myki.watch` TLS certificate expired** as of 2026-08-18; news feed has nothing after 2017–2018; parent company rebranded around Shelly home automation. Four of five eMAG SKUs are **refurbished**, last new unit "ultimul produs in stoc". RO rating **2.4/5**, repeated reports **Orange SIMs do not work**, and MyKi support reportedly told a buyer the watch is **2G-only**. Despite a real Telekom Romania app and RO site, this is a legacy programme |
| **doki / dokiPal** | `doki.com` does not resolve (DNS NXDOMAIN) |
| **Spotter (NL)** | `spotter.nl` is a parked domain; Dutch prepaid ecosystem; a 2G variant still sells on Amazon.de |
| **Niceboy Watch Kids Patrol** | Product page 404s; model absent from current catalogue |
| **Prixton Watchii** | Legacy locator; no current 4G model |
| **Tinitell / Filip / hereO** | First-generation brands, all wound down (pre-2020, unsourced in this sweep) |

### Shipping or channel dead ends

| Model / brand | Killer reason |
|---|---|
| **SoyMomo Space (own shop)** | Ships **only to mainland Spain and the Balearics**; vendor explicitly excludes other EU states. Reachable only via Amazon.es / smartwatch.de resellers. Bands unpublished; recurring complaint that battery does not last a school day |
| **Safekid Zenit** (SE), **One2track** (NL), **Qlokkie** (NL), **DEPLAY** (NL), **Kidywatch** (FR), **Leotec / Kiano / Forever / Manta** (PL), **Techmade / Trevi / Celly** (IT), **ZTE K1 Pro**, **Watchu Guardian**, **My Gator Watch**, **Vidimensio** | No Romanian evidence of any kind, and in most cases no published bands, no supported-country statement, and a home-market-scoped SIM or top-up model. Not disproven — **not researched**. Listed so a future pass knows they were seen and skipped |
| **imoo Watch Phone Z1** | **No B20** (bands B1/3/5/28). Fails the indoor-coverage floor on Orange. Cheap, wrong compromise |
| **SaveFamily Slim** | 550 mAh — weakest battery found; also aimed at 8+, not 7 |
| **TCL MT46 / MT42X / MT40** | Superseded by MT48; **IP65 only**, wrong rating for a 7-year-old; VoLTE unstated |
| **Xplora X6 Pro** | eSIM-only, and the Otto.de variant is Telekom-or-Freenet-locked — on top of the Xplora geo-block |
| **Garett Kids eSIM 4G** | eSIM-only, no physical SIM slot; RO wearable-eSIM provisioning unverified |

---

## Contradictions Phase 2 must resolve

1. ~~**Canyon Zefir KW-49: nano-SIM or eSIM-only?**~~ **SETTLED 2026-08-19: eSIM-only,
   high confidence.** The product is named "Zefir KW49 **E-SIM** 4G LTE" on canyon.eu;
   the spec field reads `SIM Card Type: eSIM`; and the decisive control is that the
   sibling KW-48 reads `Nano-SIM` in the same field on the same site, so Canyon
   populates it per model. Canyon also publishes an eSIM activation video (2026-01-05).
   **But the follow-on question inverts the risk:** this is a *bring-your-own-operator*
   GSMA consumer eSIM — Canyon sells no SIM, plan or subscription, so there is no vendor
   connectivity layer to withdraw. The new blocker is whether **any Romanian operator
   issues a standalone wearable eSIM with its own number that this watch's LPA can
   install**. Orange offers only Number Share (shares the parent's number, device list
   is Apple/Samsung/Huawei only); Digi sells a prepaid eSIM with its own number but
   publishes no device list and age-restricts the tariff to 14–25; Vodafone unchecked.
   No manual, quick-start guide or CE/RED declaration for CNE-KW49PB could be found —
   Canyon's Downloads section is empty. Unbuyable until the install path is demonstrated.
2. ~~**Garmin Bounce 2 Romanian coverage.**~~ **RESOLVED 2026-08-19: confirmed on both
   locales**, and the disagreement is explained — **the page is JavaScript-rendered**, so
   a plain HTTP fetch of either locale returns only Garmin's nav chrome with no table at
   all. Through a text-rendering proxy both render reliably. Any future check of this
   page must render JS. Two caveats found in passing: the two locales carry **different
   lists** (ro-RO adds Denmark and drops Czechia, Israel, Mexico and Norway), and the
   en-US table lists **Czech Republic — which Garmin publicly stated on X in September
   2025 is not covered**, so the table contradicts Garmin's own support channel.
3. ~~**TCL Connect Android app in the RO Play storefront**~~ **RESOLVED 2026-08-19: it is
   there.** The earlier search failed because the package name is not what anyone would
   guess — TCL Connect is **`com.trackerandroid.trackerandroid`**, inherited from an
   older tracker app. Fetched against `hl=ro&gl=RO`: live Romanian listing, updated
   17 July 2026, 1M+ installs, 3.8★/16,600 reviews, and the listing text names
   **MT48X/MT48EX** explicitly with Romanian among its 21 languages. A control fetch of
   `com.tcl.connect&gl=RO` returned 404 in the same session, so the method distinguishes
   present from absent rather than producing a false positive.
   **Bands also resolved** from TCL's MT48X/MT48EX safety document (`CQF7AV0LCAAC`),
   which carries the RED Art.10(8) power declaration: **LTE FDD B1/B3/B7 and B8/B20 at
   24 dBm**, plus GSM 900/1800 and UMTS B1/B8. B20 confirmed.
4. ~~**Carneo GuardKid+ ULTRA 2nd generation bands**~~ **RESOLVED 2026-08-19:** carneo.eu
   publishes the *identical* list for the ULTRA 2nd gen — B1/2/3/5/7/8/20/28A, 1000 mAh,
   nano-SIM, no VoLTE stated. Same caveat applies: the CE/RED declaration for this
   platform (model LD-01) lists only the 2.4 GHz WiFi/BT standard, with no LTE, GSM or
   GNSS standards, so the band list is vendor-published but not substantiated by the
   conformity paperwork.
5. ~~**Anio's supported-country statement**~~ **RESOLVED 2026-08-19.** Anio publishes no
   page headed "supported countries" — it publishes something more binding: a
   **compatible-SIM table with a country column**, updated 2026-03-24, covering nine
   countries (DE, AT, CH, ES, IT, FR, FI, DK, LU). **Romania is absent**, as is every
   other CEE country, and the article states that SIM cards from non-listed providers
   cannot be guaranteed *even where those providers use a listed network*. Retrieved by
   fetching `support.anio.eu` with a browser user-agent, which the earlier agents' tool
   could not do. Note the honest qualification: **no hard +40 geo-block was demonstrated**
   — what fails is the commercial and support envelope, not necessarily the account flow.
6. **Whether any Romanian operator provisions a wearable eSIM at all.** Unresolved, and
   it gates every eSIM-only device.

---

## Known coverage gaps in this research

- **Reddit was completely inaccessible** to the community sweep — reddit.com and
  old.reddit.com both blocked, and the search backend returned no Reddit results.
  r/Romania, r/CasualRO, r/daddit and r/Parenting are **entirely unrepresented**.
- **forum.softpedia.com** (thread `1203559-ceas-gps-copil`), **Trustpilot**,
  **Amazon reviews (all marketplaces)**, PcComponentes, gutefrage and
  comunitate.orange.ro all returned 403.
- **Altex, Flanco, Cel.ro, Evomag, PC Garage, Quickmobile** were blocked or timed out.
- Every sweep exhausted its 200-call web-search budget; the gaps above are a direct
  consequence and are listed rather than guessed.
- **Review-farming caution:** several eMAG white-label listings show clusters of short
  generic 5-star reviews posted within days of each other. Detailed and negative reviews
  were weighted far more heavily than star averages. One listing advertised 55 reviews
  while its product page surfaced 5.

---

## The check that beats all of this

Whatever is chosen, the decisive test costs nothing and takes ten minutes:

1. Install the candidate's Android companion app **from the Romanian Play storefront**.
2. Attempt account registration with a **+40** number, before paying for anything.
3. Buy from a seller with a real return window (eMAG 1P gives 30 days; EU distance
   selling gives 14).
4. In week one, place **an outgoing and an incoming voice call while the watch is on
   LTE**, and check location accuracy **inside the school building** — not in the garden.

No datasheet substitutes for step 2, because the failure mode this whole project exists
to avoid is a vendor cloud that will not accept a Romanian account.
