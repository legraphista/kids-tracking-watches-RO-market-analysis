---
model: Garmin Bounce 2
brand: Garmin
release_year: 2025
still_sold: yes

# --- Romania verdict (the pass/fail question) ---
ro_status: verified
ro_evidence_tier: 1
ro_killer: n/a   # supported is verified; "working well" is NOT — see "Does it work in Romania?"

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands: [B3, B8, B20]   # EU units only. Source: Garmin's own owner's manual spec table,
                           # "EU wireless frequencies and transmit power: LTE (B3, B8, B20): < 25 dBm".
                           # Cross-checked in the EN-US, DE-DE, FR-FR and NB-NO editions.
                           # No B1, no B7, no B28. US/other-region band sets not published.
band_b20: true
band_b28: false
volte: UNKNOWN             # Garmin never states VoLTE. See "Network & bands".
voice_fallback: UNKNOWN    # Garmin's EU DoC cites no GSM (EN 301 511) or UMTS (EN 301 908-2)
                           # standard, only E-UTRA (EN 301 908-13). **Unverified inference**:
                           # there is no 2G/3G fallback, so voice must be VoLTE or VoWiFi.
modem_chipset: UNKNOWN

# --- Positioning (the #1 criterion) ---
positioning: [GPS, multi-GNSS]   # Garmin markets "multi-GNSS"/GPS but publishes no constellation
                                 # list for this model. GLONASS/Galileo/BeiDou: UNKNOWN.
                                 # Garmin's EU DoC cites EN 303 413 covering 1164-1300 MHz and
                                 # 1559-1610 MHz, i.e. an L1+L5-class receiver — capability only,
                                 # not a constellation list.
wifi_positioning: UNKNOWN
update_interval_min: UNKNOWN     # No fixed polling interval is published. The parent app shows
                                 # "the last reported location of the watch and the time of the
                                 # report" with a manual Refresh, plus on-demand LiveTrack.

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah: UNKNOWN
battery_claimed_h: 48            # Garmin: "up to 2 days of battery life between charges"
battery_observed_h: 24-36        # TechRadar (UK, Apr 2026): "just over a day".
                                 # Front Pack Sports (US, undated): "a day and a half, tops"
                                 # with LTE on, voice notes and location pings.
                                 # Garmin forum user KS (2026-05, unstated country) reported
                                 # 48-60 h before a firmware regression, then ~35% overnight drain.
                                 # A wiki (garminrumors, **unverified**) claims 10-15 h under
                                 # heavy LTE/calling. See "Battery in real use".

# --- App & service ---
app_name: Garmin Jr.
app_android_min: UNKNOWN
app_ro_playstore: true
app_last_update: 2026-07
data_region: US                  # Garmin privacy policy: EEA account data is "collected and
                                 # stored on servers in the U.S., U.K., and/or Australia".
                                 # EEA controller is Garmin Wurzburg GmbH (Germany).

# --- Practical ---
sim: eSIM                        # embedded, non-removable, Garmin-provisioned; no SIM slot
water_rating: 5 ATM
weight_g: 40.4                   # with band; 26.5 g without. Source: garminrumors wiki — **unverified**,
                                 # Garmin's own manual and product page do not publish a weight.
camera: false
games: true
extras_disableable: partial
price_display_eur: "€299"      # normalized for the site tile; picked from the price fields below
price_display_ron: "1,835.87 lei"
price_eur: 299                   # USD 299.99 / GBP 259.99 / ~EUR 299 RRP
buy_from: eMAG Romania (1P, "Vandut si livrat de eMAG"), 24-month warranty; also Altex.ro and Vexio.ro
price_ro_eur: 360                # 1,835.87 RON new at eMAG, 2026-08-19. Launch price 1,509 RON
                                 # (mobilissimo.ro, 2025-09-18); Vexio.ro 1,499 RON.
                                 # PLUS a mandatory Garmin subscription, ~EUR 10/month.
---

## Verdict

The only watch in this field whose vendor publishes a country list naming **România** — and the
only one where Romanian buyers demonstrably reached the point of paying Garmin for LTE. It clears
the vendor-cloud hurdle that kills Xplora, and it clears the band hurdle (B20 + B8 + B3).
It does **not** clear the floor: four dated 2026 Romanian reviews and a matching pile of UK,
Irish, Polish and US forum reports describe the same failure — most calls do not connect, messages
arrive minutes to tens of minutes late, and location fails. Buy only into eMAG's 30-day return
window and treat week one as a test, not a purchase.

## Does it work in Romania?

**Tier 1 reached, and re-verified directly on 2026-08-19 as instructed.**

**Romania is on Garmin's Bounce 2 LTE coverage table — confirmed on both locales.**

- **en-US**, <https://www.garmin.com/en-US/connectivity/bounce/bounce2-lte-coverage/>, read twice
  on 2026-08-19 via two separate renders. Intro verbatim: *"The following table lists the countries
  where LTE coverage is available for Bounce 2."* The table, verbatim: *"Australia, Austria,
  Belgium, Canada, Czech Republic, Estonia, Finland, France, Germany, Greece, Iceland, Ireland,
  Israel, Latvia, Lichtenstein, Lithuania, Luxembourg, Mexico, Netherlands, New Zealand, Norway,
  Poland, Portugal, Puerto Rico, **Romania**, Slovenia, Spain, Sweden, Switzerland, U.K., U.S."*
  Disclaimer, verbatim: *"The network coverage represented in the coverage table does not provide a
  guarantee of coverage."*
- **ro-RO**, <https://www.garmin.com/ro-RO/connectivity/bounce/bounce2-lte-coverage/>, read
  2026-08-19. Page title *"ZONA DE ACOPERIRE LTE PENTRU CEASUL INTELIGENT PENTRU COPII BOUNCE™ 2"*.
  Intro and disclaimer verbatim: *"Tabelul de mai jos prezintă țările în care este disponibilă
  acoperirea LTE pentru Bounce 2. Acoperirea în anumite zone din fiecare dintre aceste țări depinde
  de raza de acoperire a rețelei și de condițiile rețelei fiecărui operator. Raza de acoperire a
  rețelei prezentată în tabel nu oferă o garanție în ceea ce privește acoperirea."*
  ("The table below shows the countries where LTE coverage is available for Bounce 2. Coverage in
  particular areas within each of these countries depends on the network coverage and network
  conditions of each operator. The network coverage shown in the table does not offer a guarantee
  of coverage.") The table contains **România**.

**The prior disagreement between sweeps is explained, not resolved by luck.** The page is
JS-rendered. A plain HTTP fetch of either locale returns only Garmin's navigation chrome and no
table at all — that is what the two sweeps that "could not render it" were seeing. Fetched through
a text-rendering proxy, both locales return the table reliably. So: the page is real, Romania is on
it, and any future check must render JavaScript.

**Three caveats that matter, and one that is damaging:**

1. **The two locales do not carry the same list.** en-US has 31 entries; ro-RO has 28. ro-RO adds
   Denmark and drops Czech Republic, Israel, Mexico and Norway. Both contain Romania, so the
   Romania answer is stable, but the table is evidently maintained per-locale and is not a single
   authoritative source.
2. **Garmin has publicly contradicted its own table.** The discovery sweep recorded Garmin stating
   on X in September 2025 that Bounce 2 LTE coverage is *not* available in Czechia
   (<https://x.com/Garmin/status/1970886350447513667>) — while the en-US table lists Czech Republic.
   That is Garmin's marketing page disagreeing with Garmin's support channel. Treat the table as
   necessary evidence, not sufficient.
3. **Gen 1 did not cover Romania.** The original Bounce coverage page
   (<https://www.garmin.com/en-XD/connectivity/bounce/lte-coverage/>, read 2026-08-19) lists U.S.,
   Canada, Austria, Denmark, France, Germany, Netherlands, Norway, Spain, Sweden, Switzerland,
   Australia, New Zealand — **no Romania**. Romanian coverage is a Bounce 2 addition, i.e. roughly
   one year old.

**Tier 3 corroboration — Romanian owners got as far as paying Garmin.** All six eMAG reviews below
are from Romanian buyers describing use of the LTE service; one explicitly complains about
*"abonamentul foarte scump"* ("the very expensive subscription"). Nobody reports a registration or
account geo-block. **The Xplora failure mode does not occur here.**

**Tier 4.** Sold 1P by eMAG (*"Vândut și livrat de eMAG"*), 1,835.87 lei new / 1,459.99 lei
refurbished, in stock, 24-month warranty, 2026-08-19. Also Altex.ro and Vexio.ro (1,499 lei).
Garmin runs a full `garmin.com/ro-RO` storefront with the Bounce 2 product page.

**What "verified" does not mean here.** The `ro_status: verified` above records that Garmin names
Romania and that Romanian users activated the service. It does **not** record that the service
performs. On the evidence below, the honest summary is: *supported, sold, billable — and, for at
least four Romanian households in 2026, not usable for its stated purpose.*

## Pre-purchase test

The generic test in OPTIONS.md (install the app from the RO Play store, register a +40 number) is
**not the binding test for this device**, because Garmin already passes it. The Garmin Jr. app is
live in the Romanian Play storefront (1M+ installs, 4.6★ from 10.8K ratings, last updated
2026-07-10, with Romanian-language reviews present), and Romanian owners reached the paid state.
The account flow is not the failure mode here — the radio link is.

So the test is:

1. Buy from **eMAG 1P** — 30-day return, and eMAG is the entity that carries the warranty. Do not
   buy from a German or UK retailer; you will lose the return window to cross-border shipping.
2. Before activating, confirm the **subscription checkout accepts your Romanian billing address and
   card**, and record the exact price it charges you. Garmin publishes no RO price and the two
   Romanian outlets that quoted one disagree (see below).
3. In the **first week**, in this order:
   - Place an outgoing call *from the watch* and an incoming call *to the watch* while the watch is
     on LTE with Wi-Fi off. Do it 10 times. Count. The Romanian reports are 9/40 and 1–2/10 —
     you need a number of your own to argue with.
   - Send a message and time its arrival. The reported failure is 35+ minutes, not seconds.
   - Check location **inside the school building**, mid-lesson, not in the yard.
   - Repeat the whole set on the commute.
4. If the numbers look like the reviews below, return it inside 30 days. This is the one device in
   the field where the return window is the entire risk-management strategy.

## Positioning quality in real use

Garmin publishes **no constellation list** for this model. Its EU Declaration of Conformity cites
EN 303 413 for GNSS receivers *"operating in the 1 164 MHz to 1 300 MHz and 1 559 MHz to 1 610 MHz
frequency bands"* — that is an L5/E5-plus-L1/E1-capable front end, but it is a conformity envelope,
not a statement of which constellations are decoded. GLONASS / Galileo / BeiDou: **UNKNOWN**.
Third-party spec-aggregator sites assert GPS+GLONASS+Galileo; none cites a Garmin source and they
are treated here as **unverified**.

**Fix time.** Garmin's own manual: *"It may take 30 to 60 seconds to locate satellite signals"*,
outdoors, front of the watch toward the sky.

**Latency is the documented problem, not raw accuracy.** Garmin has a standing support article,
*"Bounce and Bounce 2: Messaging or Location Tracking Latency"*, which attributes delay to
*"LTE signal coverage"*, *"Materials used in the construction of buildings"* and *"Wi-Fi network
accessibility"*, and advises parents to connect the watch to Wi-Fi at frequently visited locations.
Garmin states **no expected delay figure**. That article existing at all is Garmin conceding the
category of failure the Romanian reviewers describe.

**Indoors at school.** No Romanian or other report was found of the watch reporting a child at a
*wrong* location (unlike the SeTracker2 class). The reported failure is different and, for this use
case, no better: the location simply **does not update**, or returns an error. Garmin forum,
~2026-07 (poster 6325423): *"Location fails 9/10"*. Poster nicolious.ie: *"Location update and live
tracking fail most of the time (>95% of attempts result in error)"*. Romanian reviewer Banioti
Mihaela Raisa, 2026-03-24: *"Locatia ti-o arata cu mari intarzieri sau deloc"* ("it shows you the
location with big delays, or not at all").

Whether the watch falls back to cell-tower positioning at all: **UNKNOWN**. Whether it uses Wi-Fi
for positioning as opposed to for data transport: **UNKNOWN** — Garmin's latency advice implies
Wi-Fi helps the *report* reach the parent, not that Wi-Fi fixes the position.

**Update interval: UNKNOWN.** Garmin publishes no polling interval. The parent app shows
*"the last reported location of the watch and the time of the report"* with a manual **Refresh**,
plus **LiveTrack** for real-time following on request. There is no configurable "every N minutes"
setting documented in the owner's manual.

## Battery in real use

**Claimed:** *"Get up to 2 days of battery life between charges"* (Garmin product page and manual;
the ro-RO page renders it as *"BUCURĂ-TE DE O AUTONOMIE A BATERIEI DE PÂNĂ LA 2 ZILE ÎNTRE
ÎNCĂRCĂRI"*). Garmin's own caveat in the manual: *"The actual battery life depends on the features
enabled on your watch, such as notifications, GPS, and music."* Capacity in mAh: **UNKNOWN** —
Garmin publishes only *"Rechargeable, built-in lithium-ion battery"*.

**Observed — these are separate facts and are not merged with the claim:**

| Source | Country | Date | Conditions | Result |
|---|---|---|---|---|
| TechRadar, Paul Hatton | UK | 2026-04 | two months with the reviewer's son | *"The advertised two-day battery life is definitely the maximum, with real-world experience being just over a day."* |
| Front Pack Sports | US | undated | *"with LTE turned on, voice notes, and location pings running"* | *"you're looking at more like a day and a half, tops"* |
| Garmin forum, user KS | not stated | ~2026-05 | normal use before firmware 16.38 | *"battery previously lasted 48-60 hours"*; after 16.38, ~35% overnight drain in sleep mode vs ~10% without |
| Garmin forum, Talonne | not stated | ~2026-05 | 8pm–6:30am | 100%→86% during the day, then 86%→45% overnight |
| Garmin forum, Cathyafc | not stated | ~2026-05 | — | *"Mine has drained by 18% in an hour since its last charge"* |
| the5krunner | UK | 2025-09-28, upd. 2026-08-10 | heavy calling/messaging | *"you get less than one day of battery life even with a new battery"*; *"Battery will suddenly drain for no known reason"* |
| garminrumors wiki | — | — | heavy LTE/calling | *"10–15 hours"* — **unverified**, community wiki with no cited source |

**One day is achievable; two days is not, once LTE is actually being used.** Note also that battery
life here is *inversely* coupled to the reliability problem: Garmin shipped software 5.10 in
November 2025 specifically to *"improve the battery life of the Bounce 2 smartwatch when the user is
in an area with poor LTE"*. A watch hunting for a marginal cell all day in a Romanian school is
exactly that case.

## Network & bands

**Garmin does not publish the bands on its product page — but it does publish them in the owner's
manual, and this appears to have been missed by every prior sweep.** The Specifications table of the
Bounce 2 Owner's Manual states, under *"EU wireless frequencies and transmit power"*:

> 2400 – 2483,5 MHz: < 20 dBm
> 5150 – 5250 MHz: < 23 dBm
> 5725 – 5850 MHz: < 20 dBm
> **LTE (B3, B8, B20): < 25 dBm**

Verified identical in four language editions of the manual (EN-US, DE-DE, FR-FR, NB-NO), each
downloaded and text-extracted directly from `www8.garmin.com` on 2026-08-19. Device model number
**A05001** (manual footer and both Declarations of Conformity).

**Band fit against Romanian operators — this is the good news:**

| Band | MHz | Romanian relevance |
|---|---|---|
| **B20** | 800 | Orange's only sub-1 GHz LTE band, and Vodafone's. **Present.** This is the band that decides indoor and cell-edge coverage. |
| **B8** | 900 | Digi's low band. **Present.** |
| **B3** | 1800 | The national LTE workhorse on every operator. **Present.** |
| B1 | 2100 | **Absent.** A significant capacity/coverage layer on Digi and Vodafone. |
| B7 | 2600 | **Absent.** Orange and Vodafone capacity layer. |
| B28 | 700 | **Absent** — and irrelevant: in Romania 700 MHz is 5G NR n28, not LTE. |

So the radio is **not** the reason it fails. B3+B8+B20 is a sane Romanian set with a low band for
every operator. Anyone blaming the band list is wrong.

**What Garmin's DoC does *not* cite is more interesting.** The EU Declaration of Conformity for
A05001 / Bounce 2 (issued 26/08/2025) lists EN 301 908-1 and **EN 301 908-13 (E-UTRA UE)** — LTE —
and cites **no** EN 301 511 (GSM/2G) and **no** EN 301 908-2 (UMTS/3G). **Unverified inference,
stated as such:** the Bounce 2 has no 2G and no 3G radio at all. If that is right, voice on this
watch can only be **VoLTE or VoWiFi**, and there is no 2G safety net of the kind that saves other
kids' watches on Orange and Digi. Garmin nowhere states "VoLTE" for this product — `volte: UNKNOWN`.

**Which network does the eSIM roam onto in Romania? Not published, and not found. UNKNOWN.**
What *was* established:

- The eSIM is embedded and Garmin-provisioned; the service is billed by Garmin, not by an operator.
- **Garmin actively refuses to say.** Garmin forum, user Nellie907 (US, ~2022, Bounce gen 1):
  *"I reached out to Garmin to ask what network they use, but they refused to answer my question
  citing that it was 'proprietary information.'"*
- The same user determined the **US** carrier by field test: *"UPDATE: YEP, It's AT&T (at least for
  Kenai Peninsula, Alaska.) ... Verizon cell phone and T-mobile hotspot have 4 bars, Garmin Bounce
  NO SIGNAL."* That is gen-1 and US-only; **it says nothing about which network Garmin uses in
  Romania**, and it is not evidence of a Romanian arrangement.
- No teardown of the Bounce 2 was found. No FCC exhibit was retrievable — fccid.io and fcc.report
  both returned 403 to this research, and the likely FCC ID (Garmin grantee code IPH, model A05001)
  could not be confirmed. The EU/UK Declarations of Conformity are certification-standard lists and
  carry **no band table and no carrier name**.
- No Romanian operator anywhere states a wholesale or roaming relationship with Garmin.

**The most probable mechanism, stated explicitly as an unverified hypothesis.** Given (a) B20/B8/B3
is a good Romanian band set, (b) the watch appears to have no 2G/3G fallback, (c) voice therefore
depends on VoLTE, and (d) VoLTE for *inbound roamers* is provisioned bilaterally and is the single
most commonly broken part of roaming — the failure pattern the Romanian reviewers describe
(data-ish features limp along, *calls* fail 75–90% of the time, messages queue for tens of minutes)
fits **broken or partial VoLTE roaming on Garmin's Romanian partner network** better than it fits a
band gap or a coverage hole. This is a hypothesis. It is **not verified**, no source states it, and
it must not be repeated as fact.

**And the counter-evidence to any Romania-specific explanation is strong.** The identical complaint
is filed on Garmin's own forums by users in the **UK**, **Poland**, **Ireland** and the **US**:

- Poland, ~2026-02: calls *"failure-to-success ratio around 95:5"*, messages *"around 60:40"*,
  location *"40:60"*.
- UK, rpr12, ~2025-11: *"UK user here. We bought a Bounce 2, it was working fine on LTE but as of
  this week then LTE has completely failed."*
- Ireland, nicolious.ie, ~2026-07: *">95% of attempts result in error"*.
- US, 4897304, ~2026-04: *"Coverage is almost non existent. Avoid it like the plague!"* — including
  on a replacement unit.

**So this is very likely a Bounce 2 platform problem, not a Romanian one.** That is worse news, not
better: it means a Romanian buyer cannot expect to fix it by choosing a different operator, because
there is no operator to choose.

## Features & what can be disabled

| Feature | Present | Requires LTE subscription | Can the parent switch it off? |
|---|---|---|---|
| Two-way voice calling | yes | **yes** | Contacts are an allow-list set in Garmin Jr. |
| Text + voice messaging | yes | **yes** | Contacts allow-list; preset messages editable |
| LiveTrack / real-time location | yes | **yes** | On parent request |
| Assistance (SOS) | yes | **yes** | Hold button until 3 vibrations; works even in school mode and DND |
| Chores and rewards | yes | **yes** | — |
| Games | yes | no | **Partial.** School mode "Silent & restricted" *"silence[s] the watch and restrict[s] games and messages during school hours"*. No documented way to remove games entirely. |
| Music (Amazon Music) | yes | no (sideloaded via app) | Needs a separate Amazon Prime/Unlimited subscription; not setting it up is the off switch |
| Camera | **no** | — | n/a — there is no camera. A real advantage for a school. |
| School mode | yes | no | Start/end time and days set in Garmin Jr.; two levels, "Silent" and "Silent & restricted" |
| Do not disturb during sleep | yes | no | Parental controls |
| Kid Mode (app-side) | yes | no | Passcode-protected; **default passcode is 0000** — change it |

Garmin's manual lists the LTE-gated features verbatim: *"Assistance"*, *"Chores and rewards"*,
*"LiveTrack"*, *"Text and voice messaging"*, *"Voice calling"*. Everything else — activities, games,
music, alarms, watch faces, step goals — is local and survives without a subscription.

Garmin's own CAUTION on SOS, verbatim: *"Assistance is a supplemental feature and should not be
relied upon as a primary method to obtain emergency assistance. The Garmin Jr.™ app does not
contact emergency services on your behalf."* Assistance notifies your listed contacts by email or
SMS. It is not a 112 button.

## The subscription — cost, Romanian billing, and what happens if it stops

**Mandatory.** Calls, messages, location and SOS all require it. One subscription **per watch**
(Garmin support: *"Yes, each Bounce™ series watch will require their own LTE subscription."*).

**Price. The exact Romanian figure is UNVERIFIED and the two Romanian sources disagree.**

- mobilissimo.ro, 2025-09-18, Romanian: *"Serviciul necesită un abonament lunar separat, în valoare
  de 9.99 euro."* ("The service requires a separate monthly subscription, worth 9.99 euro.")
- gadget.ro, 2025-11-20, Romanian, Emil Dragotă: *"Conectivitatea LTE se realizează prin planurile
  dedicate și controlate de către Garmin, iar prețurile încep de la 10.99 euro pe lună."* ("LTE
  connectivity is provided through dedicated plans controlled by Garmin, and prices start from
  10.99 euro per month.")
- Elsewhere: $9.99/mo or $99.99/yr (US), £9.99/mo or £99/yr (UK) — T3 (UK, 2025-11-15) and
  TechRadar (UK, 2026-04).
- Garmin's ro-RO pages say only *"Pentru a folosi funcţiile LTE pe fiecare dispozitiv, sunt necesare
  un plan de abonament activ şi conectivitate LTE"* and give no price. Garmin publishes no public RO
  price list; the subscription portal at `garmin.com/subscriptions` requires an account.

**Can it be bought with a Romanian billing address?** **Yes — by inference from first-hand RO
reports, not from a vendor statement.** Four of the six eMAG reviewers describe using the LTE
service, and one complains specifically that *"abonamentul [este] foarte scump"*. No Romanian report
of a billing or country rejection was found. Garmin's activation article documents the flow
(Garmin Jr. → child profile → Settings → Connectivity → View Options → Select a Subscription) and
states **no country, currency or payment restriction**. Confirm it yourself at checkout before the
return window starts — it is step 2 of the pre-purchase test above.

**If the subscription lapses.** Garmin support, verbatim: *"Cancelling a Bounce Subscription cannot
be performed on the same day it was activated or changed"*; *"Service cancellation is immediate and
to re-enable service you will have to complete the service activation process again"*; *"Refund of a
12 month contract can be issued within 14 days only. No other refunds are issued for early
cancellation."* If cancellation happens because a payment failed, you must *"re-establish an LTE
plan"*. The watch is not bricked — it keeps activities, games, music, alarms and step tracking —
but it stops being a kids' safety watch the moment the card declines.

**If Garmin withdraws the service.** There is no physical SIM slot, so there is no fallback: the
device's connectivity cannot be replaced by a Romanian operator SIM. This is the same
single-point-of-failure architecture that bricked Vodafone Neo in August 2024 and stranded Xplora
buyers. Garmin's balance sheet makes near-term withdrawal unlikely, but there is a dated,
Garmin-signed number worth knowing: the **UK Declaration of Conformity (issued 26/08/2025)** states
compliance with the Product Security and Telecommunications Infrastructure regime *"with a defined
support period until 17 September, 2027"*. That is Garmin's own declared minimum security-update
support horizon — **two years from launch**. It is a security-update commitment, not a service
commitment, and it is not a promise to stop on that date. But it is the only dated forward
commitment Garmin makes about this product, and it is short.

## Security & privacy

**CVEs specific to Bounce or Bounce 2: none found.** This is a "found nothing", not a clean bill of
health — cvedetails.com returned HTTP 403 to this research, so the CVE sweep is incomplete.

**Platform-level research that exists, applicability to Bounce 2 UNKNOWN.** Anvil Secure published a
reverse-engineering study of GarminOS and its MonkeyC virtual machine, and CVE-2023-23299 and
siblings affect the Connect IQ API across 100+ Garmin devices. The Bounce 2 manual carries the
Connect IQ™ trademark notice, but Garmin does not offer a Connect IQ store for this watch and no
source establishes that the vulnerable surface is exposed here. **Unverified.** Pen Test Partners
has separately reported that Garmin devices do not universally encrypt data at rest, so a lost or
stolen watch may yield data over USB — again, not tested on this model.

**Where location data lives.** Garmin's global privacy policy: the EEA/UK/Swiss data controller is
*"Garmin Würzburg GmbH, Leightonstr. 7, 97074 Würzburg, Germany"*, but personal data of EEA account
holders is *"collected and stored on servers in the U.S., U.K., and/or Australia"*, under
*"approved model contractual clauses"*, with Garmin's US affiliates *"certified under the EU-U.S.
and Swiss-U.S. Data Privacy Frameworks"*. EU DPO: euprivacy@garmin.com. Children *"8 years of age
and older may provide personal information to Garmin only with verified parental consent"* — note
the stated floor is **8**, and the child in this project is **7**.

**So: this is a US-hosted service with an EU controller and SCCs.** It is not an EU-resident data
stack in the sense that Anio's German offering is. If EU-only hosting is a hard requirement,
Bounce 2 does not meet it.

**Covert remote listen: no such feature is documented, and none was found.** The full feature
inventory in the Bounce 2 Owner's Manual — calling, text and voice messaging, LiveTrack, Assistance,
check-in, chores, games, music, activities — contains **no** parent-initiated audio monitoring, no
"listen in", no silent call answer. Every audio path in the manual is a call the child can see or a
voice message the child records. Absence of a documented feature is not proof of absence in
firmware, but no evidence of one was found, and Garmin's design (an allow-list of contacts, a
visible call UI) does not have the shape of the Chinese white-label "monitor" feature. This is a
genuine differentiator versus the SeTracker2 class.

**Radio-equipment cybersecurity.** Garmin's EU DoC for A05001 cites **EN 18031-1:2024** and
**EN 18031-2:2024** — the harmonised standards for internet-connected radio equipment and,
specifically, for *"childcare radio equipment, toys radio equipment and wearable radio equipment"*.
That is the RED cybersecurity delegated act, and Garmin declaring against it is a meaningful, dated,
legally binding claim that most of this market cannot make.

## Reality check

- **"LTE coverage available in Romania"** means Garmin's marketing table lists România, on both
  locales, and that Garmin will take a Romanian household's money. It does not mean calls connect.
  Garmin's own disclaimer already says so: *"does not provide a guarantee of coverage."*
- **"Up to 2 days of battery"** means about **one day** with LTE on and a school day's worth of
  calls, messages and location pings — and Garmin shipped a firmware update in November 2025 whose
  stated purpose was to stop the battery collapsing *in poor LTE areas*, which is the Romanian case.
- **"Real-time location tracking"** means an on-request LiveTrack and a parent-pressed **Refresh**
  against *"the last reported location"*. There is no published fixed update interval. In four
  Romanian households in 2026 it meant *"cu mari întârzieri sau deloc"*.
- **"Two-way calling"** means, per two Romanian owners counting their own attempts, **9 out of 40**
  and **1–2 out of 10**.
- **"$9.99/month"** is the US price. The Romanian price is unpublished and two Romanian outlets quote
  different numbers two months apart. Budget roughly €10–11/month per child on top of 1,500–1,840 lei.
- **The eMAG 2.5/5 is not review-farming noise.** It is six reviews: four detailed 1★ *Nu recomand*
  with specific counted failures, and two one-line 5★ *Recomand*. The negative ones are the
  informative ones.

## What users say

### Fails

**Romania — four independent, dated 2026 reports on eMAG, all "Nu recomand", all describing the same
failure.** eMAG overall rating for this listing: **2.50/5 from 6 reviews**, read 2026-08-19.

- **Contabexe, Romania, 2026-08-09, 1★, "Nu recomand"** (Turcoaz):
  > *"Un eșec comercial absolut și un risc inacceptabil pentru siguranța copilului... Localizare GPS
  > eronată... Ecran complet blocat... Conectivitate inexistentă pe apeluri... Din 40 tentative de
  > apel... am reușit să conectez poate 9... Mesajele sunt livrate cu minute bune de întârziere..."*

  ("An absolute commercial failure and an unacceptable risk to the child's safety... Erroneous GPS
  location... Screen completely frozen... Non-existent connectivity for calls... Out of 40 call
  attempts... I managed to connect maybe 9... Messages are delivered with many minutes of delay...")
  The discovery sweep additionally recorded this reviewer citing message delays **over 35 minutes**
  and GPS lockups requiring a factory reset.

- **schatten, Romania, 2026-08-15, 1★, "Nu recomand"** (Violet deschis):
  > *"Mă așteptam la mai bine de la acest brand. În orașe mai mari... funcționează conform
  > descrierii, cu mici devieri (rezonabile)... sunet în apeluri execrabil... se transformă, în cel
  > mai bun caz, într-o brățară ce măsoară pași... PĂCAT!"*

  ("I expected better from this brand. In bigger cities... it works as described, with small
  (reasonable) deviations... call audio is atrocious... it turns, at best, into a bracelet that
  counts steps... WHAT A SHAME!") **This is the key nuance in the whole file: the same reviewer says
  it works in a big city and degrades to a pedometer where signal is weak.**

- **Aurash, Romania, 2026-06-11, 1★, "Nu recomand"** (Turcoaz):
  > *"Dezastru complet... Semnalul este foarte slab, are întârzieri de MINUTE bune... la apeluri am
  > reușit să conectez poate 1-2 din 10 tentative... Eșec total."*

  ("Complete disaster... The signal is very weak, there are delays of MANY minutes... for calls I
  managed to connect maybe 1–2 out of 10 attempts... Total failure.")

- **Banioti Mihaela Raisa, Romania, 2026-03-24, 1★, "Nu recomand"** (Negru):
  > *"Foarte foarte proasta investitie... Locatia ti-o arata cu mari intarzieri sau deloc... se
  > conecteaza extrem de greu... abonamentul foarte scump, esec total."*

  ("Very very bad investment... It shows you the location with big delays or not at all... it
  connects extremely poorly... the subscription very expensive, total failure.")

**Four independent Romanian households. Different colour variants, different months (March, June,
August 2026), no overlap in wording, and the same three symptoms each time: calls fail, messages are
late, location is late or absent.** That is not a bad batch; that is a pattern.

**Outside Romania — the same complaint, which argues against a Romania-specific cause.**

- **Poland, Garmin Forums, ~2026-02** (thread *"Bounce 2 has grave LTE issues that render it
  unusable"*, poster 6687399, Garmin Jr. app 7.2.2, watch firmware 5.12): calls fail-to-success
  *"around 95:5"*, messages *"around 60:40"* with hours-long delays, location *"40:60"*.
  > *"As a watch for a kid to make him safe(r), to find him or call in case of emergency... this
  > watch is useless."*

  Garmin's reply (Garmin – KC) was to move it to a support ticket. The thread is locked.

- **Ireland, Garmin Forums, ~2026-07**, poster **nicolious.ie**:
  > *"Location update and live tracking fail most of the time (>95% of attempts result in error),
  > and messaging and calls rarely are received in good time."*

- **Country unstated, Garmin Forums, ~2026-07**, poster 6325423:
  > *"Location fails 9/10, calls fail 9/10 times, texts delayed 10/10. When he's eventually able to
  > call he can't hear me, the speaker is totally dead."*

  Note this is **numerically identical** to Romanian reviewer Aurash's *"1-2 din 10"*.

- **UK, Garmin Forums, ~2025-11**, poster **rpr12**:
  > *"UK user here. We bought a Bounce 2, it was working fine on LTE but as of this week then LTE has
  > completely failed."*

- **US / unstated, Garmin Forums, ~2026-04**, poster 4897304:
  > *"Absolutely not! Coverage is almost non existent. Avoid it like the plague! Noting but
  > connectivity problems."*
  Reported that the replacement unit behaved identically.

- **Unstated, Garmin Forums, ~2026-06**, thread *"Unable to make calls – Bounce 2"*: three separate
  posters, including 2498339: *"Borh my kids have the same issue!! These things are garbage!!"*
  No Garmin staff reply in that thread.

The main Garmin connectivity thread (*"Issues with Bounce 2 connectivity"*) stood at **35 replies
with a post 14 hours before this research on 2026-08-19** — it is live and growing, not a historic
launch wobble. Meanwhile the most recent firmware changelog seen (**18.19**, ~2026-08-05) lists only
*"Fix device crashes"*, *"Fix UI issues"*, *"Update device translations"* — **no LTE fix**.

### Works

- **raluca tinta, Romania, 2026-01-05, 5★, "Recomand"**: *"Este minunat! Corespunde cu descrierea."*
  ("It's wonderful! It matches the description.") One line, no detail.
- **Martin Petru Virgil, Romania, 2026-04-23, 5★, "Recomand"**: *"Calitate excepțională"*
  ("Exceptional quality"). One line, no detail.
- **schatten, Romania, 2026-08-15** (the same 1★ reviewer): concedes that in larger cities it
  *"funcționează conform descrierii, cu mici devieri (rezonabile)"* ("works as described, with small
  (reasonable) deviations").
- **Garmin Forums, ~2026-07**, poster 4691188: *"Works fine on wi fi, however this is not what it was
  bought for."*
- **Front Pack Sports, US**: geofencing worked as intended — arrival and departure notifications
  fired correctly.
- **Garmin Jr. app, Romanian Play storefront**: 4.6★ / 10.8K ratings / 1M+ installs, updated
  2026-07-10, with Romanian reviews present, e.g. Gabriel Ciobanu, 2025-05-05: *"Este o aplicație
  bună, îmi place, și funcționează foarte bine. Recomand!"* ("It's a good app, I like it, and it
  works very well. I recommend it!") — note this app also serves vívofit jr. and is **not** evidence
  about Bounce 2 hardware.

**Count:** 2 substantive positive Romanian reports (both one-liners) against 4 detailed negative
Romanian reports, plus at least 6 independent non-Romanian reports of the identical failure.

## Sources

All accessed **2026-08-19** unless stated.

**Garmin — coverage, the priority-1 re-verification**
- <https://www.garmin.com/en-US/connectivity/bounce/bounce2-lte-coverage/> — en-US coverage table.
  Establishes: Romania listed among 31 countries; intro and disclaimer text. Page is JS-rendered;
  a plain fetch returns navigation only. Read twice through a text-rendering proxy with consistent
  results.
- <https://www.garmin.com/ro-RO/connectivity/bounce/bounce2-lte-coverage/> — ro-RO coverage table.
  Establishes: **România** listed among 28 countries; Romanian intro/disclaimer verbatim; and that
  the ro-RO list differs from en-US (adds Denmark; omits Czech Republic, Israel, Mexico, Norway).
- <https://www.garmin.com/en-XD/connectivity/bounce/lte-coverage/> — Bounce **gen 1** coverage.
  Establishes: Romania **not** listed on gen 1.
- <https://x.com/Garmin/status/1970886350447513667> (Sept 2025; recorded by the discovery sweep, not
  re-fetched here) — Garmin stating Bounce 2 LTE is not available in Czechia, contradicting the
  en-US table.

**Garmin — technical, and the LTE bands finding**
- <https://www8.garmin.com/manuals/webhelp/GUID-ED045F09-4EC3-41F5-AAAC-42B3A3836894/EN-US/Bounce_2_OM_EN-US.pdf>
  — Bounce 2 Owner's Manual (EN-US), downloaded and text-extracted. Establishes: **LTE (B3, B8, B20)
  < 25 dBm**; Wi-Fi 2.4 + 5 GHz; 5 ATM / 50 m; SAR < 1,94 W/kg limb, < 0,51 W/kg head; "up to 2
  days"; 30–60 s satellite acquisition; the LTE-gated feature list; School Mode behaviour;
  Assistance CAUTION text; Kid Mode default passcode 0000; M/N **A05001**. Contains **no**
  remote-listen feature anywhere.
- Same manual, **DE-DE, FR-FR and NB-NO** editions (same GUID path) — establishes the B3/B8/B20 line
  is consistent across language editions, i.e. not a translation artefact.
- <https://static.garmin.com/pumac/Bounce%202_DoC-EU.pdf> — EU Declaration of Conformity, issued
  26/08/2025, model **A05001, Bounce 2**. Establishes: EN 301 908-13 (E-UTRA/LTE) cited; **no GSM or
  UMTS standard cited**; EN 303 413 GNSS 1164–1300 / 1559–1610 MHz; **EN 18031-1/-2:2024** security
  standards; EEA authorised representative Garmin Würzburg GmbH. Contains **no band table**.
- <https://static.garmin.com/pumac/Bounce%202_DoC-UK.pdf> — UK Declaration of Conformity, issued
  26/08/2025. Establishes: PSTI *"defined support period until 17 September, 2027"*.
- <https://www.garmin.com/en-US/p/1815501/> and <https://www.garmin.com/ro-RO/p/1815501/> — product
  pages. Establish the "up to 2 days" claim (RO: *"PÂNĂ LA 2 ZILE"*) and the LTE-subscription
  footnote. Neither publishes bands, mAh, weight or GNSS constellations.

**Garmin — subscription and support**
- <https://support.garmin.com/en-US/?faq=lTu5c4pBe29l5cXedmo7aA> — Managing the LTE Subscription.
  Establishes cancellation and refund terms and that service ends immediately on cancellation.
- <https://support.garmin.com/en-US/?faq=TNEXt70T2C0frtvz12QOm6> — Activating the LTE Subscription.
  Establishes the activation flow; **states no country/currency/payment restriction**.
- <https://support.garmin.com/en-US/?faq=aKm5bZCoS84HTyyx9wEwP6> — establishes one subscription per
  watch.
- <https://support.garmin.com/en-US/?faq=19RSd5QSCBAgxPmGvAvRW6> — *"Bounce and Bounce 2: Messaging
  or Location Tracking Latency"*. Establishes Garmin's own acknowledgement of latency, its three
  stated causes, and that **no expected delay time is given**.
- <https://www.garmin.com/en-US/privacy/global/policy/> — establishes EEA controller = Garmin
  Würzburg GmbH; EEA data stored on servers in the **U.S., U.K. and/or Australia**; SCCs; Data
  Privacy Framework certification; children 8+ with verified parental consent.

**Romanian evidence**
- <https://www.emag.ro/smartwatch-garmin-bounce-2-41mm-amoled-lte-gps-silicon-slate-gray-010-03399-00/pd/D6GW943BM/>
  — establishes 2.50/5 from 6 reviews, 1,835.87 lei new / 1,459.99 lei refurbished, sold 1P by eMAG,
  in stock; and all six review texts, authors, dates, star ratings and Recomand/Nu recomand flags.
  (eMAG rate-limits: the page rendered on a direct fetch and refused a proxied one.)
- <https://www.mobilissimo.ro/stiri-ceasuri-inteligente/garmin-bounce-2-a-sosit-un-nou-smartwatch-dedicat-copiilor-cu-ecran-amoled-functii-de-siguranta-si-apeluri-vocale>
  — Mihai Gabriel Arsene, 2025-09-18. Establishes RO launch price 1,509 lei and a **9.99 EUR/month**
  subscription figure. News piece, not a hands-on test.
- <https://gadget.ro/garmin-bounce-2-sau-cum-arata-un-smartwatch-dedicat-celor-mici-conectivitate-lte-urmarire-a-locatiei-in-timp-real-afisaj-luminos-si-colorat-etc/>
  — Emil Dragotă, 2025-11-20. Establishes ~1,500 lei and *"prețurile încep de la 10.99 euro pe lună"*
  — **contradicting** mobilissimo. News piece, not a hands-on test.
- <https://altex.ro/smartwatch-garmin-bounce-2-41mm-wi-fi-lte-gps-android-ios-silicon-slate-gray/cpd/100339900/>
  and <https://www.vexio.ro/smartwatch/garmin/3251335-bounce-2-41mm-amoled-lte-gps-silicon-light-purple/>
  — RO retail presence. **Both timed out or served a bot-check on 2026-08-19**; the prices
  (1,350 lei Altex, 1,499 lei Vexio) are carried over from the discovery sweep and are **unverified
  here**.
- <https://play.google.com/store/apps/details?id=com.garmin.android.apps.vivokid> (gl=RO, hl=ro) —
  Garmin Jr. app live in the Romanian storefront: 4.6★, 10.8K ratings, 1M+ installs, updated
  2026-07-10, Romanian-language reviews present. Minimum Android version: not shown.

**Garmin Forums — the reliability corpus**
- <https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce-2/430425/bounce-2-has-grave-lte-issues-that-render-it-unusable>
  — Poland, ~2026-02, 95:5 call failure ratio. Thread locked after a Garmin staff redirect to support.
- <https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce-2/437464/issues-with-bounce-2-connectivity>
  — 35 replies, last post 2026-08-18; nicolious.ie (Ireland) and 6325423 quotes; Garmin – KS reply.
- <https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce-2/425934/has-bounce-2-improved-lte-issues-form-bounce-1>
  — UK user rpr12; poster 4897304 (replacement unit identical).
- <https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce-2/434035/unable-to-make-calls--bounce-2>
  — three posters unable to call; no Garmin reply.
- <https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce-2/435204/bounce-2-battery-drain-during-sleep-mode>
  — battery figures from KS, Talonne, Cathyafc, 6800517; Garmin – CF reply.
- <https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce-2/441299/bounce-2-software-update---18-19>
  — 18.19 changelog (~2026-08-05): crashes, UI, translations only. **No LTE fix.**
- <https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce/320474/which-lte-network>
  — Bounce **gen 1**, ~2022, US. Establishes Garmin *"refused to answer... citing that it was
  'proprietary information'"*, and that the US carrier was determined by field test to be **AT&T**.
  Says nothing about Romania.

**Reviews and press**
- <https://www.techradar.com/health-fitness/smartwatches/garmin-bounce-2-review> — Paul Hatton, UK,
  2026-04. Battery *"just over a day"*; *"variable results with the GPS signal, with a significant
  tail-off in signal within rural areas"*; £9.99/mo, £99/yr.
- <https://www.t3.com/active/fitness-trackers/garmin-bounce-2-review> — UK, 2025-11-15. Subscription
  $9.99/£9.99/AU$17 per month or $99/£99/AU$170 per year; battery *"died a lot quicker than other
  watches"*.
- <https://frontpacksports.com/reviews/review-the-garmin-bounce-2/> — US, undated. *"a day and a
  half, tops"* with LTE, voice notes and location pings; geofencing worked.
- <https://the5krunner.com/2025/09/28/garmin-bounce-2-opinion-first-look-review-buyers-guide/> —
  published 2025-09-28, updated 2026-08-10. *"less than one day of battery life even with a new
  battery"*; *"75% of the messages go through"*; *"Battery will suddenly drain for no known reason"*.
- <https://www.notebookcheck.net/Garmin-improves-battery-life-of-LTE-smartwatch-in-new-update.1166733.0.html>
  — 2025-11-19. Bounce 2 software **5.10**: *"improve the battery life... when the user is in an area
  with poor LTE"* and *"the calling experience when switching from Wi-Fi to LTE"*.
- <https://www.garmin.com/en-US/newsroom/press-release/sports-fitness/parents-can-delay-the-smartphone-with-bounce-2-kids-smartwatch-from-garmin/>
  — press release, 2025-09-17. Launch date and feature list.
- <https://wiki.garminrumors.com/Bounce_2> — **unverified community wiki.** The only source found for
  weight (40.4 g with band / 26.5 g without), 43 × 43 × 12.4 mm, 115–180 mm wrist, 4 GB storage, and
  a *"10–15 hours with heavy LTE/calling"* battery figure. Treat all of these as unverified.

**Security**
- <https://www.anvilsecure.com/blog/compromising-garmins-sport-watches-a-deep-dive-into-garminos-and-its-monkeyc-virtual-machine.html>
  — GarminOS / MonkeyC / Connect IQ research (CVE-2023-23299 class, 100+ Garmin devices).
  Applicability to Bounce 2: **UNKNOWN**.
- <https://www.pentestpartners.com/security-blog/how-garmin-watches-reveal-your-personal-data-and-what-you-can-do/>
  — data-at-rest encryption concerns across Garmin devices. Not tested on Bounce 2.
- <https://www.cvedetails.com/vulnerability-list/vendor_id-9704/Garmin.html> — **returned HTTP 403;
  not read.** The CVE sweep for this model is therefore incomplete.

**Could not be retrieved — declared gaps in this document**
- **fccid.io and fcc.report both returned HTTP 403.** No FCC ID confirmed for model A05001; no FCC RF
  exhibit read. The band list here rests on Garmin's own manual, not on a filing.
- **Mozilla "Privacy Not Included"** has been retired; the Garmin Bounce entry now resolves to an
  archive notice. Its findings were not obtainable.
- **Altex.ro** timed out; **Vexio.ro** served a bot-check.
- **The web-search budget was exhausted (200/200)** partway through this research; later work was
  done by direct URL fetch only. Reddit, Trustpilot and forum.softpedia.com remain unrepresented, as
  already flagged in OPTIONS.md.
- **No teardown of the Bounce 2 exists in public** that this research could find. Modem chipset,
  battery capacity and antenna design are all **UNKNOWN**.
- **Which mobile network Garmin's eSIM roams onto in Romania remains UNKNOWN.** Garmin declines to
  say, no operator confirms it, and no filing or teardown reveals it.


## The LTE-M hypothesis (2026-08-19) — recorded here because the summaries cite it

A single anonymous r/smartwatch comment (August 2026, no username or permalink captured — a
sourcing failure noted by audit) claims Garmin's LTE watches use **LTE-M / IoT connectivity**:
*"this goes through dense areas like buildings / trees etc better, however the local masts can't
be the old 3g/4g only they need to the upgarded masts."* If true, it would explain the Romanian
failure pattern exactly — works in larger cities, dies elsewhere — because LTE-M must be enabled
per mast, and Romanian operators' LTE-M coverage is far from universal. It would also make the
watch *worse* rurally, the opposite of what its band list suggests.

**Status: unverified hypothesis from one comment in a subreddit whose largest kids-watch threads
are hosted by a competitor's CEO.** No Garmin document states the radio technology at this level.
Nothing else in this file depends on it; `RANKING.md` and `COMPARISON.md` cite it with this caveat.
