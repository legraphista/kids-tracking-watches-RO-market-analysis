# WIRSEN 4G — 1.91" Super AMOLED kids smartwatch

```yaml
---
model:                  WIRSEN 4G kids smartwatch, 1.91" Super AMOLED
                        # eMAG codes DB9PS4YBM (black) / DF6HCGYBM (pink) / DY9PS4YBM (blue)
                        # No manufacturer model number is published anywhere. OEM designation UNKNOWN.
                        # Seller product code on the eMAG page: W-066 ("Cod produs" breadcrumb, 2026-08-19)
brand:                  WIRSEN® — Romanian marketplace brand; seller of record on eMAG is "Wirsen" (3P marketplace, not eMAG 1P)
release_year:           UNKNOWN
                        # Listing carries reviews from at least 20 Apr 2026; the brand's older
                        # W-033 SKU has reviews from 23 Mar 2024. No launch date published.
still_sold:             yes            # in stock at 295,00 RON, checked 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status:              verified
ro_evidence_tier:       3              # dated first-hand RO user report of it working on a RO network
                                       # (also reaches tier 1 — seller names RO operators — and
                                       #  tier 4 — RO marketplace seller, RO-language support, RO warranty)
ro_killer:              n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands:              []             # UNKNOWN — no band list published by seller, brand or any CE/RED document found
band_b20:               UNKNOWN        # see "Network & bands" — this is the single biggest unresolved risk
band_b28:               UNKNOWN
volte:                  UNKNOWN        # never stated by the seller; not stated on the listing
voice_fallback:         UNKNOWN
modem_chipset:          UNKNOWN        # listing states only "Dual core, 1.5 GHz"; no chipset named

# --- Positioning (the #1 criterion) ---
positioning:            [GPS, AGPS, LBS, WiFi]   # vendor-stated only; no independent confirmation
wifi_positioning:       true           # vendor-stated ("localizare precisa GPS+AGPS+LBS+WiFi", "antena LDS") — **unverified**
update_interval_min:    UNKNOWN        # DEFAULT unknown. One owner (Ursu George, full-pool read 2026-08-19) states a user-set 1-hour GPS poll -> 12 h; no source states the factory default

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:            800            # "800 mAh Li-Polymer", eMAG spec table
battery_claimed_h:      168            # eMAG spec table, "autonomie 168 h" — seller figure, conditions unstated
battery_observed_h:     2-60           # 18 dated RO owner reports, Jun 2024 - Aug 2026 (FULL review pool
                                       # read 2026-08-19). 48-60 h only under a stated minimal profile.
                                       # The only interval-qualified report: 12 h AT A 1-HOUR GPS POLLING
                                       # INTERVAL, social apps disabled (Ursu George, 07 Jun 2026).
                                       # Low end 2-3 h with overheating. See "eMAG full review pool".

# --- App & service ---
app_name:               SeTracker 2 (com.tgelec.setracker, publisher SJE LIMITED)
app_android_min:        5.0
app_ro_playstore:       true           # live in the RO storefront; RO-language reviews present through Aug 2026
app_last_update:        2026-07        # v3.4.1 build 121, 16 Jul 2026
data_region:            China          # 2026 Black Hat research on this backend family: location data goes to
                                       # "a cloud server in mainland China". See "Security & privacy".

# --- Practical ---
sim:                    nanoSIM        # physical slot; seller confirms eSIM is NOT supported
water_rating:           IP67           # listing; the SAME spec table also shows "0 atm" — internally contradictory
weight_g:               49             # vendor-stated, unverified
camera:                 true
games:                  true           # full Android 8.1 + Google Play; TikTok/YouTube/Facebook advertised
extras_disableable:     false          # no camera-lock, no game-lock, no Play-Store lock claimed by the vendor.
                                       # One owner reports Google Family Link can be side-loaded as a workaround.
price_display_eur: "≈ €58"      # normalized for the site tile; picked from the price fields below
price_display_ron: "295 lei"
price_eur:              ~58            # 295 RON, converted at ~5.07 RON/EUR (approximate, uncited rate)
buy_from:               eMAG.ro marketplace, seller "Wirsen" (Romania)
price_ro_eur:           295 RON (~€58), reduced from a claimed 397 RON PRP
---
```

## Verdict

A 295-RON Chinese white-label that demonstrably works on a Romanian network and, uniquely in
this corpus, has one owner report stating its usage profile — but it publishes no LTE bands,
no VoLTE claim and no CE/RED document, so whether it holds a signal inside a concrete school
on Orange is a coin-flip nobody has flipped in public.

It clears the "works in Romania" floor and *may* clear the one-day battery floor under a
monitoring-only profile; it does not clear the "reliable signal everywhere" floor, because
that claim has never been tested by anyone whose report survives.

Buy it as a 295-RON experiment inside a return window, not as the answer.

## Does it work in Romania?

**Tier reached: 3 (dated first-hand Romanian user report), plus tier 1 and tier 4 support.**

**Tier 3 — first-hand, dated, Digi only.**
**Alin**, Romania, **30 Jul 2026** (4★ per the discovery sweep; one render of the page showed
3★ — the star value is inconsistent between renders, the text is not):

> *"Sunt ok, fac cam tot ce zice in descriere, merge pe DIGI, tine bateria cat de cat, nu prea mult dar o zi tot merge"*
> ("They're OK, they do about everything the description says, **it works on DIGI**, the battery holds up somewhat, not much, but it does manage a day.")

[eMAG product page, accessed 2026-08-19](https://www.emag.ro/ceas-copii-smartwatch-4g-gps-whatsapp-apel-telefonic-video-hd-buton-sos-monitorizare-spion-google-play-super-amoled-1-91-slot-sim-localizare-precisa-gps-lbs-wi-fi-bluetooth-foto-hd-meniu-in-romana-com/pd/DB9PS4YBM/)

That is **the only carrier named by any owner of this model.** It is Digi.

**Orange and Vodafone are UNVERIFIED for this model.** No owner report naming either operator
was found. The only Orange/Vodafone/Telekom evidence is the seller's own marketing sentence,
which is a claim, not a datapoint:

> *"Functioneaza in toate retelele de telefonie mobila: DiGi / Vodafone / Orange / Telekom"*
> ("Works on all mobile networks: DiGi / Vodafone / Orange / Telekom") — WIRSEN listing copy, accessed 2026-08-19.

This matters more than usual, because Orange is the operator on which B20 is the *only*
sub-1 GHz LTE band (per `OPTIONS.md`), and the band list for this device is unpublished. A
device confirmed on Digi tells you nothing about indoor performance on Orange.

**Tier 4 — Romanian channel is real.** The seller is a Romanian-facing marketplace account
that answers questions in Romanian on the product page, with dated replies on **29 Jul 2026**
resolving three separate buyer queries, including a support follow-up to a buyer whose unit
would not power on. Warranty is stated on the listing as **"Persoane fizice: 12 luni"**
(12 months for consumers) — note this is *below* the two-year statutory conformity period
under EU/Romanian consumer law, and one buyer challenged it directly:

> **Costa Adriana**, RO, **12 Aug 2026**: *"De ce are doar un an garanție?"* ("Why does it only have a one-year warranty?") — **unanswered on the page.**

**Roaming**, per the seller, **29 Jul 2026**:

> *"Daca aveti activat roamingul pe cartela va merge. Roamingul tine de cartela."*
> ("If you have roaming enabled on the SIM it will work. Roaming is a matter of the SIM.")

**eSIM: no.** The WIRSEN official account, **29 Dec 2024**, on a sibling SKU:

> *"nu este compatibil cu eSIM"* ("it is not compatible with eSIM").

This is structurally *good* — you supply an ordinary Romanian nano-SIM, so there is no vendor
connectivity layer that can be withdrawn from Romania, which is the failure mode `OPTIONS.md`
identifies as the real killer in this category.

**What is still unproven:** LTE bands, B20, VoLTE, behaviour on Orange, behaviour on
Vodafone, behaviour indoors, and what happens to voice if 2G is retired.

## Pre-purchase test

1. Install **SeTracker 2** (`com.tgelec.setracker`, SJE LIMITED) from the **Romanian** Play
   storefront and **complete registration with a +40 number before paying**. This is the
   decisive step: the discovery sweep recorded a dated Romanian Play review, **02 Jul 2026,
   1★**, of a registration failure — *"nu reușesc sa fac inregistrarea codul de 6 caractere nu este acceptat. nu funcționează"*
   ("I can't complete registration, the 6-character code is not accepted. It doesn't work").
   SeTracker2 account creation is not a formality on this platform.
2. **Disable the SIM's PIN code before inserting it.** A WIRSEN owner on a sibling SKU
   (**Ionela**, RO, **23 Mar 2024**) lost the watch's signal repeatedly until the seller told
   her to do this: *"Cere mereu codul pin la cartelă… trebuie dezactivat codul pin de la cartela, prin setările unui telefon."*
   ("It keeps asking for the SIM PIN… the SIM PIN must be disabled, via a phone's settings.")
3. **Return window.** The seller is a **third-party marketplace seller, not eMAG 1P.**
   Distance-selling law gives 14 days minimum; eMAG advertises a 30-day return policy
   site-wide. Confirm which applies to *this* seller before ordering, because the whole value
   of buying this device is that an `UNKNOWN` stays recoverable.
4. **In week one, on the SIM you actually intend to use:** place an outgoing and an incoming
   voice call *from inside the school building*, and read the reported position at the same
   moment. If you are on Orange, this test is the entire purchase decision, because B20 is
   unpublished.

## Positioning quality in real use

**Vendor claim:** *"localizare precisa GPS+AGPS+LBS+WiFi"* with an integrated LDS antenna.
Treat as marketing. No GNSS constellation beyond GPS is claimed — **no GLONASS, no Galileo,
no BeiDou is stated**, and single-constellation GPS is the weakest positioning hardware in
this survey.

**Fix time, drift, indoor behaviour, and fallback behaviour: UNKNOWN.** Not one of the
publicly readable reports for this SKU discusses location accuracy at all — positively or
negatively.

**On the claimed absence of GPS-drift complaints — this does NOT hold up, and the brief's
premise needs correcting.** The listing carries **159 reviews**, but **only the 10 most
recent review texts are publicly readable.** Every attempt to page deeper redirects to
`auth.emag.ro` and requires an eMAG login:

```
https://www.emag.ro/product-feedback/DB9PS4YBM/reviews?page=2
  → 302 → https://www.emag.ro/user/login?redirect_key=... → auth.emag.ro/user/authorize
```

The star distribution *is* public, and it is the important part:

| Stars | Count |
|---|---|
| 5★ | 122 |
| 4★ | 9 |
| 3★ | 16 |
| 2★ | 4 |
| 1★ | 8 |
| **Total** | **159** (83% recommend) |

That means **12 reviews at 1–2★ and 16 at 3★ whose text nobody in this research has read.**
The correct statement is therefore: **no GPS-drift complaint appears in the 10 reviews that
are publicly visible — 6% of the review set. The absence of GPS-drift complaints across this
model is *unverified*, and `OPTIONS.md` line 84 overstates it.** The distinction from the
Wingereich (whose drift complaints surfaced because its review set is far larger and its
negatives were visible) may be an artefact of sample size, not a real difference.

**[SUPERSEDED 2026-08-19 — the full pool has now been read in a logged-in browser session, and
the sample-size suspicion was correct: the login-walled 1–3★ texts contain six GPS/position
complaints, including "shows the child at the other end of the country". See "eMAG full review
pool (2026-08-19)" below. `OPTIONS.md` line 84 is not just overstated — it is false.]**

Two adjacent datapoints, both from a **different WIRSEN SKU** (the 1.91" **IPS** variant,
DGXPS4YBM — same brand, different hardware, so brand-level context only, not evidence about
this model):

- **RUSU CLAUDIU**, RO, **20 Nov 2024**, 1★: *"Ceasul este ok ca si calitate insa localizare GPS slaba"* ("The watch is OK quality-wise but **the GPS location is poor**").
- **Valicec Ivan**, RO, **27 Dec 2024**, 3★: *"localizare buna"* ("good location") — the opposite, on the same SKU.

## Battery in real use

**Claimed: 168 h**, in the eMAG specification table. Conditions unstated. There is no credible
reading of that figure other than idle standby with tracking effectively off.

**Observed: 12–60 h**, from four dated Romanian owner reports, all Jul–Aug 2026, all on the
1.91" AMOLED SKU:

| Owner | Date | Stars | Quote (RO) | English | Stated profile |
|---|---|---|---|---|---|
| **Loredana Gabriela Alexe** | 21 Jul 2026 | 5★ | *"Doar pentru monitorizare și 2, 3 apeluri zilnice, bateria durează 48-60h."* | "For monitoring only plus 2–3 calls a day, the battery lasts 48–60h." | **Yes — monitoring + 2–3 calls/day** |
| **Alin** | 30 Jul 2026 | 4★ | *"tine bateria cat de cat, nu prea mult dar o zi tot merge"* | "battery holds up somewhat, not much, but it does manage a day" | No |
| **Razvan** | 15 Aug 2026 | 5★ | *"Am apreciat ca are un sistem Android si poti instala alternativ aplicatiile de la google (ex family link). Bateria nu tine mai mult de o zi (uneori chiar mai putin)."* | "I appreciated that it has an Android system and you can install Google's apps as an alternative (e.g. Family Link). **The battery doesn't last more than a day (sometimes even less).**" | **Implied — he installs Google Play apps** |
| **Madalina** | 15 Jul 2026 | 3★ | *"Bateria tine in jur de 12h, se comporta ok pentru gama lui de pret."* | "**Battery lasts around 12h**; it behaves OK for its price range." | No |

All four: Romania, eMAG product page, accessed 2026-08-19.

**So which is it — usage profile, unit variance, or production batch?**

**Best-supported answer: usage profile, with tracking interval the dominant unknown. Unit
variance cannot be excluded. Production batch is unsupported by any evidence and is
UNKNOWN.** The reasoning:

- The **OEM's own figure for the closest documented sibling hardware corroborates the top of
  the range.** The Wonlex KT41 — Android 8.1, **800 mAh**, 1 GB/16 GB, IP67, nano-SIM, 54 g,
  i.e. the same battery on the same platform generation as the WIRSEN — is specified by the
  manufacturer at **"up to 48 hours working time"**
  ([iwonlex.net, accessed 2026-08-19](https://www.iwonlex.net/products/wonlex-kt41-4g-android-smartwatch-with-curved-amoled-screen---health-monitoring/)).
  Loredana's 48–60 h therefore sits *at or just above the manufacturer's own working-time
  figure for equivalent hardware* — it is not an outlier that demands a special explanation.
  It is what this class of device does when you do almost nothing with it.
- The **two lowest reports come with the heavier profiles.** Razvan explicitly describes
  installing Google Play applications; that is an active-Android profile, and it lands him at
  "a day or less". Madalina's 12 h is the only report with no stated profile at all.
- **Every one of the four reports is missing the single most important parameter: the
  location-update interval.** Loredana says *"doar pentru monitorizare"* ("for monitoring
  only") but never says at what interval she polls. The discovery corpus identifies polling
  frequency as the variable that collapses battery on this whole platform family. **The best
  battery datapoint in the corpus is still missing its most important condition.**

**What this means for a 7-year-old at school with parents at work:** Loredana's profile is
close to the target use case, and 48–60 h would clear the floor with margin. But three of
four owners report ≤24 h, one reports 12 h, and none of them state their tracking interval.
**Plan for one day, charge nightly, and treat 48 h as a best case you have to reproduce
yourself in week one — not as a specification.**

## Network & bands

**Every radio fact about this device is UNKNOWN, and that is the finding.**

- The listing publishes **no LTE band list**. Its SIM field reads "4G/3G/LTE", which is a
  marketing string, not a band claim — and 3G no longer exists in Romania.
- **No CE/RED Declaration of Conformity for this SKU was found.** WIRSEN publishes no website,
  no datasheet, no DoC, and no importer/manufacturer address is shown on the eMAG page.
  Searches for a Romanian importer entity or conformity declaration returned nothing.
- **VoLTE is never mentioned** by the seller, in the title, the description or the spec table.
  Given Romania has no 3G, a watch without working VoLTE cannot place a voice call except by
  falling back to 2G — which survives on Orange and Digi but has no committed end date.
  **Voice fallback for this device is UNKNOWN and is a live risk.**

**The B20 lottery, demonstrated rather than asserted.** `OPTIONS.md` states that on the
Wonlex/UNISOC platform B20 is a build-time option chosen per production order. That is
directly confirmable from the OEM's own catalogue — four Wonlex SKUs, three different band
sets, two of them with no B20 at all:

| Wonlex SKU | Chipset | LTE FDD bands | B20? | Source |
|---|---|---|---|---|
| **KT41** (Android 8.1, 800 mAh, AMOLED-class) | ASR8601 quad-core A55 @1.5 GHz | B1/B2/B3/B5/B7/B8/**B20** | **yes** | [iwonlex.net](https://www.iwonlex.net/products/wonlex-kt41-4g-android-smartwatch-with-curved-amoled-screen---health-monitoring/), accessed 2026-08-19 |
| **KT37** | UNKNOWN | B1/B2/B3/B5/B7/B8/**B20** | **yes** | manuals.plus KT37 manual (403 on direct fetch; band list per search index, 2026-08-19) — **unverified** |
| **KT31** (Android, 1.78" AMOLED) | **SL8521E** | B2/B3/B4/B5/B7/B8/B12/B17 | **no** | [iwonlex.net](https://www.iwonlex.net/products/wonlex-4g-amoled-screen-gps-android-8-1-kids-videocall-smartwatch-kt31/), accessed 2026-08-19 |
| **KT30** | UNKNOWN | B1/B3/B5/B8 | **no** | discovery sweep, `lens-1-eu-retail.md` |

Note that **KT31 is the SL8521E part named in `OPTIONS.md`, and it ships a North-American
band set with no B20 and no B28.** So the platform genuinely produces both Europe-fit and
Europe-unfit builds under near-identical marketing.

**Is the WIRSEN a Wonlex?** **UNKNOWN — do not treat this as established.** The evidence is
circumstantial: it runs SeTracker 2 (the Wonlex/3G Electronics ecosystem app), it is Android
8.1 with 1 GB/16 GB, 800 mAh, IP67 and a nano-SIM tray — a spec sheet nearly identical to the
Wonlex KT41 — and the 2026 Black Hat research names YiQingTeng "also Wonlex" as the operator
of the SETracker backend. But **no OEM model number is published for the WIRSEN by anyone, and
none of the Wonlex catalogue models matches its 1.91" / 720×368 panel.** It is a Wonlex-*family*
device by platform; the exact OEM SKU is not established, so **its band list cannot be
inherited from any Wonlex datasheet.**

**Practical consequence:** if you intend to use Orange, this device has a genuine chance of
having no sub-1 GHz LTE band at all, and there is no document in existence that will tell you
before you power it on. Digi is the safer SIM here — it is the only network confirmed working,
and it retains 2G as a voice fallback.

## Features & what can be disabled

The listing sells this as a wrist smartphone: **Google Play, WhatsApp preinstalled, TikTok,
Instagram, YouTube, Facebook**, camera, video calling, Romanian-language menu.

What the vendor **claims** a parent can control (quoted from the listing, accessed 2026-08-19):

| Feature | Vendor claim | Can a parent disable it? |
|---|---|---|
| Unknown callers | *"Blocare numere necunoscute"* ("blocking unknown numbers") | **Claimed yes** — **unverified** |
| School / quiet hours | *"'No disturbing time' – Blocarea notificarilor in timpul scolii sau somnului"* ("blocking notifications during school or sleep") | **Notifications only.** This is *not* an app lock — it does not stop the child using the camera, games or Play Store during class. |
| Geofence | *"Perimetru de siguranta"* — alert when the child leaves the zone | Claimed yes — **unverified** |
| Remote power-off | *"Remote shutdown – Posibilitatea opririi de la distanta prin aplicatie"* | Claimed yes — **unverified** |
| Class timetable | *"Class schedule – Organizarea orarului scolar direct pe smartwatch"* | Informational, not a restriction |
| SOS | *"Buton SOS"*, alerts to parent | n/a |
| **Camera** | advertised as a feature | **No disable option claimed anywhere.** |
| **Games** | advertised as a feature | **No disable option claimed anywhere.** |
| **Google Play / app installation** | advertised as a feature | **No disable option claimed anywhere.** |
| **Contact whitelist (who may call the watch)** | not described beyond "block unknown numbers" | **UNKNOWN** |

**So: `extras_disableable: false`.** For a 7-year-old this is the wrong shape of product —
`OPTIONS.md` and the community sweep both note that parents in this market complain when
TikTok *doesn't* work, which tells you who the product is designed for, and it is not a
first-grader.

**The one documented workaround**, and it comes from an owner rather than the vendor —
**Razvan**, RO, **15 Aug 2026**, 5★:

> *"Am apreciat ca are un sistem Android si poti instala alternativ aplicatiile de la google (ex family link)."*
> ("I appreciated that it has an Android system and you can install Google's apps as an alternative (e.g. **Family Link**).")

That is a genuinely useful finding — a full Android 8.1 device with Play Store access can in
principle be governed by Google Family Link, which *would* let a parent block app installs and
restrict the camera. But it is **one unverified owner report**; whether Family Link actually
installs, enrols and enforces on this firmware is **unverified**, and it is a parent-side
workaround, not a vendor feature. Note also that Razvan is the same owner reporting *"nu tine
mai mult de o zi"* — running the Google stack on this hardware is not free.

**Water resistance is contradictory and should not be trusted.** The spec table shows **IP67**
and, in the same table, **"0 atm"**. A buyer, **Denizerdem12** (RO, 07 Aug 2026), asked twice
precisely because the description and the comments disagree:

> *"Scrie ca este resitent la apa dar in comentarii ati scris ca nu este. Deci nu se poate folosi la inot?"*
> ("It says it's water resistant but in the comments you wrote it isn't. So it can't be used for swimming?")

Another owner, **Gheorghita Ciobanu** (RO, 15 Aug 2026), replied that he swam with it for
15 minutes with no damage — **a single unverified owner claim that directly contradicts an
IP67 rating** (IP67 is 1 m for 30 min, static immersion, not swimming). Assume splash-proof.
Relevant precedent from the sibling IPS SKU: **RUSU CLAUDIU**, RO, **20 Nov 2024**, 1★ —
*"i-a 'explodat' capacul din spate din cauza ca s-a umflat bateria"* ("the back cover
'exploded' because the battery swelled").

## Security & privacy

This section is the strongest reason not to buy this device, and none of it is model-specific
— it is the platform.

**1. The listing advertises covert remote listening in the product title.**
*"Monitorizare spion"* — literally "spy monitoring" — appears in the product **title**, and the
description defines it as discreet ambient listening. This is not a hidden capability that
researchers uncovered; it is a marketed feature. The parent's phone can silently open the
watch's microphone and listen to the room the child is in. **There is no documented way to
lock, disable or audit it**, and the vendor does not claim one. Combined with *"Remote
shutdown"*, the parent account is a full remote-control channel over a microphone worn by a
child in a classroom. Whoever holds that account holds that capability.

**2. The backend was found completely open in 2020, and the client was never fixed.**
Pen Test Partners' analysis of the **SETracker** platform, written up **10 July 2020**,
recovered: MySQL passwords for **all** databases, Alibaba Cloud bucket credentials covering
**all stored pictures**, email credentials, SMS credentials, Redis credentials, the IP
addresses and services of **16 servers**, and **the entire server-side source code**. The
default password hardcoded in that source was **`123456`**. Demonstrated capabilities included
making any device call any phone number, **spying on any device**, accessing cameras, and
sending fake parental messages. The manufacturer patched server-side and **did not update the
client applications**.
[Bitdefender HotForSecurity write-up, accessed 2026-08-19](https://www.bitdefender.com/en-us/blog/hotforsecurity/chinese-tracking-platform-used-cheap-smartwatches-found-completely-open)

**3. It was still exploitable in August 2026 — twelve days before this document.**
Vangelis Stykas and Felipe Solferini presented at **Black Hat on 7 August 2026** an analysis of
**70+ GPS-enabled watches**, identifying three Shenzhen backends, of which the first is this
one: **YiQingTeng (also Wonlex, using the SETracker app), covering 30+ smartwatch brands**;
plus NewGPS2012 (30+ brands) and SinoTrack. Reported findings:

- With **only an email address**, an attacker could **track location, disable or spoof GPS,
  intercept and fake messages, conduct live audio eavesdropping, capture photos and video, and
  replace the emergency contacts.**
- Location data transmits to **"a cloud server in mainland China."**
- SETracker stated the issues had been "resolved long before" — but **devices on the platform
  remained exploitable until hours before the Black Hat talk.** NewGPS2012 and SinoTrack did
  not respond and their vulnerabilities reportedly persist.
- Stykas: *"Millions of kids are being exposed and vulnerable to exploitation."*

[Secondary coverage, Aug 2026, accessed 2026-08-19](https://tanyagoodin.com/2026/08/children-smartwatch-cybersafety/) ·
[MLQ News headline, accessed 2026-08-19](https://mlq.ai/news/researchers-show-childrens-gps-watches-can-be-hijacked-across-shared-backends/)

**Caveat: the primary Black Hat briefing page could not be retrieved (403). The details above
rest on secondary coverage and are *unverified* against the primary source.**

**4. Data hosting jurisdiction: China.** Per the 2026 research above. The SeTracker app exposes
a manual region selector ("Europa"), but **no evidence was found that selecting it changes
where data is actually stored**, and no GDPR representative, DPA, privacy policy or EU
establishment for WIRSEN, SJE LIMITED or the backend operator was located. Treat
`data_region: China` as the working assumption, and note that neither the seller nor the app
publisher offers a Romanian or EU data-controller contact.

**5. The "666test" cross-account notification incident, April 2026.**
On **23 April 2026**, **two separate 1★ reviews** of SeTracker2 in the Google Play store
reported receiving notifications from unknown accounts named **"666test"**:

> *"Am impresia ca mai stau si alții pe langa noi părinții si fac supravegherea"*
> ("I get the impression that other people besides us parents are also doing the monitoring")

and, from the second reviewer, *"THIS MEANS IT'S A VIRUS!"*

Whatever the root cause — a leaked internal test account, a tenancy-isolation bug, or misrouted
push notifications — **notifications crossing between accounts on a child-tracking platform is
a multi-tenant isolation symptom**, and it is precisely the failure class the 2026 Black Hat
work describes. **This incident is carried from the discovery sweep
(`.discovery/lens-5-romania.md`) and could NOT be independently re-verified in this pass** —
the Google Play review stream did not render for direct fetch. Treat as **unverified**, but
note it is corroborated in *kind* by independent published research four months later.

**6. Known CVEs specific to this model: none found. That is not reassurance** — WIRSEN
publishes no model number, no firmware version and no security contact, so there is no
identifier under which a CVE *could* be filed.

**7. Platform decay is visible in the Romanian Play review stream in 2026** (carried from
`.discovery/lens-5-romania.md`, **unverified** in this pass):

- **2026-08-16, 1★:** *"tot timpul apare că «Dispozitivul este oprit». Efectiv nu se poate folosi ceasul"* ("it constantly says «The device is off». You effectively can't use the watch")
- **2026-08-12, 1★:** *"nu găsește ceasul, imi spune mereu dispozitiv oprit"* ("it doesn't find the watch, it always tells me device off")
- **2026-07-02, 1★:** *"nu reușesc sa fac inregistrarea codul de 6 caractere nu este acceptat"* ("I can't complete registration, the 6-character code is not accepted") — **a dated Romanian registration failure**
- **2026-05-08, 2★:** *"e problema la servar pt ca nu se pot efectua apeluri video"* ("there's a server problem because video calls can't be made")
- **2026-04-30, 2★:** *"Locația dă erori de kilometri"* ("The location is off by kilometres")

The app itself is alive — **v3.4.1, updated 16 Jul 2026, min Android 5.0, publisher SJE
LIMITED** ([APKCombo, accessed 2026-08-19](https://apkcombo.com/setracker2/com.tgelec.setracker/))
— so this is decay in service quality, not abandonment. Independent documentation of the same
failure modes (registration errors, binding errors after account dormancy, location errors
"sometimes exceeding 3 km", "Unable to locate network equipment") appears in a
[SeTracker review published 04/03/2025, accessed 2026-08-19](https://findmykids.org/blog/en/flaws-in-setracker-app),
which also notes the platform has been owned since 2020 by **3G Electronics, Shenzhen**.

## Reality check

| Marketing | Observed reality |
|---|---|
| **"Autonomie 168 h"** (7 days) | Best owner report is **48–60 h under an explicitly minimal profile**; three of four owners report **≤24 h**, one reports **12 h**. The OEM's own figure for equivalent 800 mAh hardware (Wonlex KT41) is **"up to 48 hours working time"** — so 168 h is standby with the product doing nothing. |
| **"4G"** | Confirmed on **Digi only**, by one owner. No band list, no B20 confirmation, no VoLTE claim, no CE/RED document. On Orange this could be a device with no low band at all. |
| **"Localizare precisa GPS+AGPS+LBS+WiFi"** | Single-constellation GPS (no GLONASS/Galileo/BeiDou claimed) on the platform whose companion app has independent 2025 documentation of location errors *"sometimes exceeding 3 km"*. **No owner of this SKU has publicly reported on accuracy either way.** |
| **"Monitorizare spion"** sold as a safety feature | Covert always-available remote microphone on a platform that 2026 Black Hat research found remotely hijackable **with only an email address**, with data going to a mainland-China cloud. |
| **"Google Play, WhatsApp, TikTok, YouTube, Facebook"** sold as value | For a 7-year-old this is attack surface, battery drain and a reason for the school to confiscate it — and the vendor claims **no way to switch any of it off.** |
| **"IP67"** | Same spec table also says **"0 atm"**. One owner swam with it; a sibling SKU had its back cover blown off by a swollen battery. Assume splash-proof. |
| **1.91" AMOLED** vs **35 × 44.6 × 10 mm, 49 g** | These two vendor figures are **geometrically impossible together** — see below. |

**On size (a 1.91" screen on a 7-year-old's wrist).** The vendor states **35 × 44.6 × 10 mm and
49 g**. A 1.91" (48.5 mm) diagonal at the stated 720×368 aspect implies an active area of
roughly **43.2 × 22.1 mm**, which in a 44.6 mm-tall case leaves about **0.7 mm of bezel in
total** — not physically achievable on a 295-RON device. The same brand's official account gave
**46 × 38 × 8 mm** for a sibling 1.91" SKU, which is equally inconsistent, and a third WIRSEN
SKU lists a **48 mm** case. **Conclusion: either the screen size or the case dimensions (or
both) are wrong, and no vendor dimension for this device should be trusted.** The nearest
*credible* comparator is the OEM sibling Wonlex KT41 at **49.5 × 41 × 16.7 mm and 54 g** —
which is a large, thick watch for a first-grader. The discovery corpus records a Romanian owner
of the comparable Wingereich explicitly saying it is **oversized for a 6-year-old and better
suited to 8+**.

Worth knowing: **WIRSEN's own 2026 line includes a 1.52" "Dimensiune Mica" (small size) model
at 279 RON** (eMAG DJFVWN2BM / DRFVWN2BM / DTFVWN2BM, 4.6★ from **only 6 reviews**). If the
1.91" is the concern, that is the same brand's answer — but with 6 reviews it has none of the
evidence base that makes this SKU worth documenting.

## What users say

All reviews below are from Romania, on the eMAG product page, accessed 2026-08-19.
**Sampling limit: only the 10 most recent review texts of 159 are publicly readable** —
**[SUPERSEDED same day: the full pool was subsequently read logged-in; see "eMAG full review
pool (2026-08-19)". The entries below stand, now with complete context.]**

### Works

- **Loredana Gabriela Alexe**, **21 Jul 2026**, 5★ — *"Doar pentru monitorizare și 2, 3 apeluri zilnice, bateria durează 48-60h."* ("For monitoring only plus 2–3 calls a day, the battery lasts 48–60h.") **1 report.** The only usage-qualified battery figure in this corpus.
- **Alin**, **30 Jul 2026**, 4★ — *"merge pe DIGI"* ("it works on DIGI"). **1 report** — and the only carrier confirmation for this model.
- **Razvan**, **15 Aug 2026**, 5★ — *"Am apreciat ca are un sistem Android si poti instala alternativ aplicatiile de la google (ex family link)"* ("I appreciated that it has an Android system and you can install Google's apps as an alternative, e.g. Family Link"); also *"este rezistent la stropiri accidentale"* ("it resists accidental splashes"). **1 report.**
- **Daniel**, **09 Aug 2026**, 5★ — *"Foarte foarte bun pt acești bani. Chiar functioneaza bine."* ("Very, very good for the money. It really does work well.")
- **Victoria Andreea**, **18 Jul 2026**, 5★ — *"copii chear sunt incantati de ceas… ceasul functioneaza chear bine"* ("the kids are really delighted with the watch… the watch really works well").
- **Bogdan Iuliana** (22 Jul 2026), **Rusu Cristina** (18 Jul 2026), **Adina Aplugaritei** (18 Jul 2026), **Păun Lucia** (09 Aug 2026) — all 5★, all one line, no detail. **Weight these near zero:** the discovery sweep flags this listing family for clusters of short generic 5★ reviews posted within days of each other.

### Fails

- **Madalina**, **15 Jul 2026**, 3★ — *"Bateria tine in jur de 12h, se comporta ok pentru gama lui de pret."* ("Battery lasts around 12h; it behaves OK for its price range.") **1 report** — the low end of the spread.
- **Razvan**, **15 Aug 2026**, 5★ (mixed) — *"Bateria nu tine mai mult de o zi (uneori chiar mai putin)."* ("The battery doesn't last more than a day, sometimes even less.")
- **Alin**, **30 Jul 2026** — *"tine bateria cat de cat, nu prea mult"* ("battery holds up somewhat, not much").
- **Mocanu Constantin**, **06 Jul 2026** (Q&A) — *"Ceasul nu se mai deschide! unde mă pot adresa? Menționez că are 0 luna de când l am cumparat."* ("The watch won't turn on any more! Where can I turn? Note it's been less than a month since I bought it.") Followed **07 Jul 2026** by *"De ce nu răspunde nimeni?"* ("Why is nobody answering?"). The seller replied **29 Jul 2026** saying he had been contacted — i.e. **a dead-on-arrival unit and a ~3-week support latency.** **1 report.**
- **gabi**, **09 Jun 2026** (Q&A) — *"ecranul stă tot timpul aprins am căutat în setări dar tot nu se stinge"* ("the screen stays on all the time; I looked in the settings but it still won't turn off"). **Unanswered.** Directly relevant to the battery spread — an always-on AMOLED is a plausible mechanism for a 12 h result.
- **Costa Adriana**, **12 Aug 2026** (Q&A) — *"De ce are doar un an garanție?"* ("Why only a one-year warranty?"). **Unanswered.**

**Brand-level context from a different WIRSEN SKU** (1.91" IPS, DGXPS4YBM — **not this model**,
7 reviews, 3.14★, now out of stock):

- **RUSU CLAUDIU**, **20 Nov 2024**, 1★ — *"localizare GPS slaba… i-a 'explodat' capacul din spate din cauza ca s-a umflat bateria"* ("poor GPS location… the back cover 'exploded' because the battery swelled").
- **Catalin CIOBANU**, **30 Dec 2024**, 1★ — *"Semnal slab pe wifi si date. In casa trebui sa stai la un metru se router sa se poata conecta"* ("**Weak signal on wifi and data.** Indoors you have to be a metre from the router for it to connect.") — the indoor-signal failure mode this project exists to avoid, on the same brand.
- **Valicec Ivan**, **27 Dec 2024**, 3★ — *"Memoria interna difera de cea din descriere… doar 8 gb din care doar 2 gb sunt utilizabili… localizare buna… bateria tine cam 1 zi."* ("Internal memory differs from the description… only 8 GB of which only 2 GB usable… good location… battery lasts about a day.") — **a documented spec misstatement by this seller**, which is directly relevant to trusting the 16 GB / 168 h / IP67 / 49 g figures on the model documented here.
- **Racovita Cristina**, **01 Jan 2025**, 3★ — *"bateria tine foarte puțin. Nici măcar o zi"* ("battery lasts very little. Not even a day").
- **Ionela**, **23 Mar 2024**, 5★, on WIRSEN W-033 — *"Cere mereu codul pin la cartelă… trebuie dezactivat codul pin de la cartela"* ("It keeps asking for the SIM PIN… the SIM PIN must be disabled") — resolved after the seller contacted her. A setup gotcha worth knowing before day one.

## eMAG full review pool (2026-08-19)

**The login wall fell.** In a logged-in Chrome session the on-page review pagination (an XHR,
not a URL parameter) serves every review with no login prompt. The earlier
`/product-feedback/DB9PS4YBM/reviews?page=2 → 302 → auth.emag.ro` finding is an artefact of
URL-based fetching: that endpoint never serves product reviews — logged in, it redirects to a
generic user-profile page. Method used here: the listing's own star filter + "Pagina
urmatoare" pagination, plus the listing's review search box for exact-word probes
(`orange`, `vodafone`, `digi`, `yoxo`, `cartela`, `semnal`, `168`, `scoala` — the search is
word-tokenised, so "168h" written as one token does not match `168`).

| Metric | Value |
|---|---|
| Texts read | **149 of 149 rendered** (159 ratings; 10 of the 122 5★ carry no text). All 37 texts at 1–4★ read in full; all 112 5★ texts skimmed page-by-page (12 pages), substantive ones read in full |
| Star distribution | 122 / 9 / 16 / 4 / 8 (5★→1★) — unchanged |
| Carriers named | **Digi ×1** (Alin, 30 Jul 2026 — still the only carrier named in all 159). **Orange: 0. Vodafone: 0. YOXO: 0. Telekom: 0 named.** One **indirect Vodafone** datapoint via the OneNumber service (below) |
| Hardware deaths/brickings | **3 of 159 review texts (1.9%)** + 1 Q&A DOA outside the pool |
| Battery figures | 18 dated reports, 2–60 h; **168 h corroborated by nobody — two owners explicitly call the spec false** |
| GPS/position complaints | **6** (vs 0 known before this pass) |

### Carriers — the decisive negative, now auditable

Word-search over all 159 reviews: `digi` → 1 hit (Alin), `orange` → 0, `vodafone` → 0,
`yoxo` → 0. **Nobody who bought this watch has publicly said it works — or fails — on Orange
or Vodafone by name.** The one indirect datapoint:

> **AnRiA**, 15 Apr 2025, 5★ — *"Avem 2 ceasuri, le avem de aproape 1 an… Noi am folosit
> cartela pe abonament si pentru a nu avea mai multe numere de telefon, am folosit optiunea
> OneNumber si folosim acelasi nr de telefon atat pe telefonul copilului, cat si pe ceas."*
> ("We have 2 watches, for almost a year… We used a subscription SIM and, to avoid multiple
> phone numbers, we used the **OneNumber** option — the same number on the child's phone and
> on the watch.")

**OneNumber is Vodafone Romania's number-sharing service.** The reviewer never names the
operator, so this is an **inference, not a confirmation** — but it is the closest thing to a
Vodafone datapoint this model has: two units, ~1 year, on what is almost certainly a Vodafone
companion SIM. Also useful: the same owner used the spy function + camera + GPS to recover a
lost watch.

### Battery — the interval-qualified report that was missing

> **Ursu George**, 07 Jun 2026, filed under 5★, title *"Nu recomand pentru că nu ține bateria
> destul"* — *"În specificații spune că are gps și până la 168ore de funcționare acestea fiind
> principalele motive pentru care am cumpărat produsul. Ținte bateria maxim 12 ore cu setările
> la GPS pe 1h fără alte brizbrizuri, aplicațiile de socializare dezactivate."*
> ("The specs say GPS and up to 168 hours of operation — the main reasons I bought it. **The
> battery lasts at most 12 hours with GPS set to 1 h** and no other frills, social apps
> disabled.")

That is the **first report in this corpus that states its tracking interval** — and at the
gentlest possible polling (1 h), the watch does 12 h, not 168. Corroborating spread:

| Owner | Date | ★ | Figure | Profile stated |
|---|---|---|---|---|
| Crăciun Gheorghe | 05 Mai 2026 | 3★ | *"in 2 3 ore se duce"* (drains in 2–3 h) + *"se încălzește extrem"* (overheats badly) | no |
| Balta Darius | 24 Mar 2026 | 4★ | **5–6 h intense / 8–10 h medium / ~24 h standby** | yes — three-level profile |
| Denisa Bosnea | 13 Ian 2026 | 3★ | 10 h idle; 15–20 min of use burns it in 3–4 h | yes |
| Madalina | 15 Iul 2026 | 3★ | ~12 h | no |
| Fotău Ana Maria | 17 Ian 2026 | 1★ | 2 days switched off; 1 day merely worn | yes |
| auraafloroae | 30 Ian 2026 | 1★ | half a day, almost unused, at 2 weeks old | yes |
| cezu4u | 09 Iun 2025 | 1★ | ≤1 day sitting on the table | yes |
| costysv1 | 13 Ian 2025 | 1★ | <1 day | no |
| Neculai Adrian | 17 Mai 2026 | 3★ | max 1 day; <15% next morning; GPS+phone only, few minutes of calls/day | yes |
| Vlad Andrei Iulian | 22 Apr 2026 | 3★ | *"In specificatii scrie 168h (criteriu care a influentat achizitia), dar in utilizarea reala nu cred ca depaseste 48h (si nu este utilizat intens)"* — spec says 168 h, **real use ≤48 h, not used intensively** | yes |
| Laurentiu Naidin | 17 Feb 2025 | 4★ | ~2.5 days with raise-to-wake disabled and no use | yes |
| Avram Remus | 20 Mar 2026 | 5★ | ~2 days | no |
| Eftime Ramona | 09 Mai 2024 | 5★ | ~2 days | no |
| Eduard KARA / AnRiA / Alin / Razvan / Loredana | 2025–2026 | 4–5★ | 1 day / 1 day / ~1 day / ≤1 day / 48–60 h | as previously documented |

**Reading:** unchanged conclusion, harder evidence — usage profile dominates; plan for nightly
charging; 48–60 h is a minimal-profile best case; and the 168 h spec is now *contradicted by
name* by two owners who bought because of it.

### Position quality — the drift complaints existed after all

- **Alina Dragomir**, 30 Ian 2026, 1★ — *"localizare GPS nefuncțională corect, îmi arată
  locația în celălalt capăt al țării! Nici măcar sa apelez nu funcționează mereu!"* ("GPS
  localisation doesn't work correctly, **it shows me the location at the other end of the
  country!** Even calling doesn't always work!")
- **AndreiH**, 28 Sep 2025, 3★ — *"Gps-ul functiona cum avea el chef: uneori imi arata locatia
  bine, alteori imi arata copilul in alt cartier… in majoritatea cazurilor cand intram in
  aplicatie imi zicea ca ceasul e offline. Desi era langa mine, la un metru si avea semnal."*
  ("The GPS worked as it pleased: sometimes right, sometimes **the child in another
  neighbourhood**… most times the app said the watch was offline although it was a metre from
  me, with signal.") Also: overheats worse than a fast-charging phone; upgraded 1★→3★ only for
  seller support.
- **zhen**, 14 Oct 2025, 2★ — *"pana la 12 cand termina el orele deja este închis… locatia nu
  este mai niciodată exactă"* ("by 12 o'clock when he finishes classes it has already shut
  down… **the location is almost never exact**") — a school-day failure end-to-end.
- **Radu vasiliu**, 17 Feb 2026, 2★ — *"Nu se conecteaza bine la GPS. Raspunde greu"*.
- **Eliza Mocanu**, 24 Feb 2026, 3★ — *"Nu da locatia actuala"* ("doesn't give the current location").
- **bota ciprian vasile**, 20 Ian 2026, 3★ — had to set the location manually.

Against: **Rogo** (19 Feb 2026, 5★, second-hand from the child's mother: good signal, correct
mapping), **Violeta Zaharov** (31 Oct 2025, 5★ — **geofence works**: exact location, perimeter
easy to set, alert message arrives), **Pirvu Reli** (20 Mar 2026, 5★ — tracks an 8-year-old's
walk home from school, plus calls and video). Same silent-coin-flip pattern as the Wingereich.

### Hardware mortality — honest denominator

**3 dead/bricked units in 159 review texts (1.9%)**, plus 1 DOA in Q&A:

| Time to failure | Owner | Date | ★ | What died |
|---|---|---|---|---|
| ≤1 month | Mirela C. | 05 Oct 2025 | 2★ | charging problems, silent calls to some numbers, then **total lock-up, no restart possible** |
| after splash | cezu4u | 09 Iun 2025 | 1★ | brief jacuzzi contact → worked, then **never charged again** (relevant against "IP67") |
| unstated | Claudia Farcaș | 10 Mar 2026 | 5★ | "some problems" — **unit replaced by seller** |
| <1 month (Q&A) | Mocanu Constantin | 06 Iul 2026 | — | won't power on; ~3-week support latency (already documented) |

Degradation short of death: **Ion godinac** (19 Mar 2026, 1★ — became very slow, overheats,
random resets), **George** (14 Iun 2024, 2★ — permanently dropping mobile data and wifi),
**Adina Maria Pui** (19 Mar 2026, 3★ — power button gets hot, weak signal), **munteanu laura**
(5★ — stopped charging, fixed via seller), **alexandra Salceriu** (04 Feb 2025, 5★ — strap
broke early, no compatible spare until the seller intervened via eMAG), **Vasile Cristian**
(05 Mar 2026, 1★ — fast drain, **no invoice and no warranty certificate delivered**, WhatsApp
non-functional).

### Other findings from the walled pool

- **The "spy" function is not reliably covert on this SKU** — **BIANCA CURCU**, 29 Ian 2025,
  3★: *"atunci cand suni pe functia spion copilul vede apel ratat la sfarsitul convorbirii"*
  ("when you call on the spy function **the child sees a missed call** at the end"). And it
  fails outright for **SIMONA SIMIUC BRAN** (14 Ian 2025, 3★ — spy unusable from two phones,
  WhatsApp problems too).
- **Child-usability complaint** — **PANAIT IOANA MEROPE**, 14 Mar 2026, 1★: functions all work
  but the menu is too hard for a child, and **videocall only works with the administrator
  account** — *"nu poti introduce un alt membru al familiei"* ("you can't add another family
  member").
- **Whitelist/pairing quirk** — **Milea Cornelia**, 18 Iun 2026, 4★: ordered two watches,
  received two *different* watches (different memory/features) — seller resolved and let her
  keep both. A spec-consistency warning for multi-unit orders.
- **Review-farming signatures inside the 5★ pool**: **Alexandrescu Antonia ×3** identical
  reviews on 19 Mar 2026; **Maxim ana maria ×2** on 13 Feb 2026; dense same-day clusters
  (19 Mar, 23 Apr 2026); one reviewer is literally named `0734709904 amalia.***@yahoo.com`.
  The 83%-recommend headline should be read with that in mind.
- **Nothing in any of the 149 texts names a school-building signal test, VoLTE, or an LTE
  band.** The B20 question remains untouched by the full pool — an auditable absence, not a
  gap in reading.

## Sources

| URL | Accessed | What it established |
|---|---|---|
| [eMAG — WIRSEN 1.91" Super AMOLED, DB9PS4YBM](https://www.emag.ro/ceas-copii-smartwatch-4g-gps-whatsapp-apel-telefonic-video-hd-buton-sos-monitorizare-spion-google-play-super-amoled-1-91-slot-sim-localizare-precisa-gps-lbs-wi-fi-bluetooth-foto-hd-meniu-in-romana-com/pd/DB9PS4YBM/) | 2026-08-19 | Price 295 RON (PRP 397); seller "Wirsen" (3P, 4.9); 4.47★ / 159 reviews / 83% recommend; star distribution 122/9/16/4/8; full spec table (800 mAh Li-Po, **168 h claimed**, 1.91" Super AMOLED 720×368, dual-core 1.5 GHz, 1 GB/16 GB, Android 8.1, IP67 *and* "0 atm", nano-SIM, GPS/AGPS/LBS/WiFi, 35×44.6×10 mm, 49 g); operator claim "DiGi / Vodafone / Orange / Telekom"; SeTracker 2 named; 12-month consumer warranty; parental-control feature list; **the 10 publicly readable reviews and the full Q&A** |
| Same URL, `?page=2` / `/product-feedback/DB9PS4YBM/reviews?page=2` | 2026-08-19 | **302 → auth.emag.ro** — proves reviews 11–159 are behind a login and therefore that the "no GPS-drift complaints" claim is unverifiable from public data. **[SUPERSEDED 2026-08-19: the wall was an XHR artefact; the full pool was read in a browser — see § eMAG full review pool]** |
| [eMAG search — all WIRSEN SKUs](https://www.emag.ro/search/wirsen) | 2026-08-19 | The 159 reviews are pooled across three colour SKUs (DB9PS4YBM/DF6HCGYBM/DY9PS4YBM) of one product; WIRSEN's 2026 line (1.52"/1.78"/1.83") exists with far smaller review bases; the **1.52" "Dimensiune Mica"** alternative at 279 RON |
| [eMAG — WIRSEN 1.91" IPS sibling, DGXPS4YBM](https://www.emag.ro/ceas-smartwatch-copii-4g-cu-gps-whatsapp-apel-telefonic-video-buton-sos-monitorizare-spion-touchscreen-ips-1-91-slot-cartela-sim-localizare-precisa-gps-lbs-wi-fi-camera-hd-baterie-800mah-compatibil-te/pd/DGXPS4YBM/) | 2026-08-19 | Brand-level QC: swollen battery, weak wifi/data indoors, documented storage-spec misstatement, no eSIM, seller-stated dimensions |
| [eMAG — WIRSEN W-033, DNJWSKYBM](https://www.emag.ro/ceas-copii-smartwatch-wirsenr-4g-cu-gps-monitorizare-spion-buton-sos-slot-cartela-sim-apel-video-camera-foto-mesaj-vocal-waterproof-localizare-precisa-gps-lbs-compatibil-android-ios-negru-w-033/pd/DNJWSKYBM/) | 2026-08-19 | Brand active since at least Mar 2024; SIM-PIN setup gotcha; "funcție spion" sold as a headline feature |
| [Wonlex KT41 product page](https://www.iwonlex.net/products/wonlex-kt41-4g-android-smartwatch-with-curved-amoled-screen---health-monitoring/) | 2026-08-19 | **OEM figure of "up to 48 hours working time" for an 800 mAh Android 8.1 kids watch** — corroborates the top of the observed battery range; and **FDD B1/B2/B3/B5/B7/B8/B20** |
| [Wonlex KT31 product page](https://www.iwonlex.net/products/wonlex-4g-amoled-screen-gps-android-8-1-kids-videocall-smartwatch-kt31/) | 2026-08-19 | **SL8521E with FDD B2/B3/B4/B5/B7/B8/B12/B17 — no B20, no B28.** Direct proof that the same OEM platform ships Europe-unfit builds |
| [Wonlex 4G Android GPS watch catalogue](https://www.iwonlex.net/whole-products/gps-tracking-watches/4g-gps-watch/) | 2026-08-19 | 25+ models; no model matches the WIRSEN's 1.91"/720×368 panel — hence OEM SKU **UNKNOWN** |
| [APKCombo — SeTracker2](https://apkcombo.com/setracker2/com.tgelec.setracker/) | 2026-08-19 | v3.4.1 (121), **updated 16 Jul 2026**, min Android 5.0, publisher **SJE LIMITED**, package `com.tgelec.setracker` |
| [Bitdefender — "Chinese Tracking Platform Used in Cheap Smartwatches Found Completely Open"](https://www.bitdefender.com/en-us/blog/hotforsecurity/chinese-tracking-platform-used-cheap-smartwatches-found-completely-open) | 2026-08-19 | **10 Jul 2020**, Pen Test Partners: full SETracker server source, 16 servers, MySQL/Redis/Aliyun/email/SMS credentials, hardcoded `123456`; demonstrated remote spying, camera access, spoofed parent messages; **clients never updated** |
| [Coverage of Black Hat 2026 kids-smartwatch research](https://tanyagoodin.com/2026/08/children-smartwatch-cybersafety/) | 2026-08-19 | **Stykas & Solferini, Black Hat, 7 Aug 2026**: 70+ watches, three Shenzhen backends incl. **YiQingTeng/Wonlex (SETracker), 30+ brands**; email address alone enables location tracking, GPS spoofing, message interception, **live audio eavesdropping**, photo/video capture, emergency-contact replacement; **data to a mainland-China cloud**; exploitable until hours before the talk. **Secondary source — primary Black Hat page 403.** |
| [MLQ News — "Researchers Show Children's GPS Watches Can Be Hijacked Across Shared Backends"](https://mlq.ai/news/researchers-show-childrens-gps-watches-can-be-hijacked-across-shared-backends/) | 2026-08-19 | Corroborating headline/framing for the above. **403 on direct fetch — title only.** |
| [FindMyKids — SeTracker app flaws review](https://findmykids.org/blog/en/flaws-in-setracker-app) | 2026-08-19 | Published **04/03/2025**: documented registration/binding errors, "Unable to locate network equipment", location error **"sometimes exceeding 3 km"**; platform owned since 2020 by **3G Electronics, Shenzhen** |
| [Saatjohann et al., *STALK: Security Analysis of Smartwatches for Kids* (2020), FH Münster](https://www.hb.fh-muenster.de/opus4/frontdoor/deliver/index/docId/12354/file/Saatjohann_et_al-2020-STALK.pdf) | 2026-08-19 | **Retrieved but could not be parsed** (PDF rendering unavailable). Listed as a known academic source on this device class; **its specific findings are NOT relied on in this document.** |
| `.discovery/lens-1-eu-retail.md`, `lens-2-brands.md`, `lens-4-community.md`, `lens-5-romania.md` | 2026-08-19 (local) | Prior-sweep material carried and explicitly labelled **unverified** where not re-confirmed here: the Google Play RO review stream (registration failure 02 Jul 2026, "Dispozitivul este oprit" 12/16 Aug 2026, server problems 08 May 2026, **the "666test" cross-account notifications of 23 Apr 2026**), Wonlex KT30 bands, and the review-farming caution for this listing family |

**Update 2026-08-19:** eMAG reviews 11–159 are **no longer a gap** — the full pool was read in
a logged-in browser session (see "eMAG full review pool (2026-08-19)"); the `?page=2 → 302`
entry above documents why URL-based fetching failed, not a real wall for a logged-in browser.

**Could not be retrieved (gaps, not absences):** ~~eMAG reviews 11–159 (login wall)~~ (closed, see above); the Google
Play store page for `com.tgelec.setracker` (did not render); the Black Hat US 2026 briefings
pages (403); the manuals.plus Wonlex KT37 manual (403); any CE/RED Declaration of Conformity,
importer identity, or LTE band list for this SKU — **none exists in public that this pass could
find.** The WebSearch budget for this session was exhausted at 200 calls, which capped further
hunting for a conformity document and for Orange/Vodafone owner reports.
