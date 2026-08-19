---
model: LAMAX WatchY4 Play
brand: LAMAX (legal entity elem6 s.r.o., Praha 6, Czech Republic)
release_year: 2024          # DoC signed 20.10.2024; companion app v1.0 released 23.09.2024
still_sold: yes             # in stock on lamax-electronics.com and eMAG.ro marketplace, checked 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status: unknown          # app confirmed live in RO Play + iOS RO App Store 2026-08-19; end-to-end registration/use in RO still untested
ro_evidence_tier: 1         # first-hand RO storefront confirmation (2026-08-19); still zero RO user reports either way
ro_killer: n/a              # no blocking mechanism identified — see "RO gate check (2026-08-19)"

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands: []               # UNKNOWN — see "Network & bands". Not published anywhere, including the CE/RED DoC
band_b20: UNKNOWN
band_b28: UNKNOWN
volte: UNKNOWN
voice_fallback: UNKNOWN
modem_chipset: UNKNOWN

# --- Positioning (the #1 criterion) ---
positioning: [GPS, A-GPS, WiFi, LBS]   # vendor spec table. No GLONASS, Galileo or BeiDou listed
wifi_positioning: true
update_interval_min: 9      # vendor app page offers 9 minutes / 1 hour / manual only

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah: 680
battery_claimed_h: 120      # vendor "up to 120 hours". Vendor also states 72 h (packaging, per reviewer),
                            # "2-3 days normal use" (web) and "approx. 3-5 days normal use" (manual) — see below
battery_observed_h: 40      # one dated CZ first-hand report (2024-11-22), T-Mobile CZ SIM, school-day use
                            # Single report — not corroborated. Treat as **unverified**

# --- App & service ---
app_name: LAMAX Connect
app_android_min: 5.0        # Google Play / APKCombo listing. Vendor product page says Android 8.0+ — contradiction
app_ro_playstore: yes       # CONFIRMED 2026-08-19: hl=ro&gl=RO listing renders, "Instalează" active, "Aplicația este
                            # disponibilă pentru dispozitivul tău"; iOS RO App Store also live. No rating shown (too few)
app_last_update: 2025-11    # Android v1.0.17, 2025-11-17; iOS v1.1.1b, 2025-11-10
data_region: UNKNOWN        # controller is Czech; privacy policy names no hosting country or sub-processor

# --- Practical ---
sim: nanoSIM
water_rating: IP68
weight_g: 52
camera: true                # 0.3 Mpx
games: true                 # Sokoban
extras_disableable: partial
price_display_eur: "≈ €90"      # normalized for the site tile; picked from the price fields below
price_display_ron: "≈ €255 (RO)"
price_eur: ~90              # 2,249.10 CZK on the vendor's own store. EUR is my arithmetic at ~24.5 CZK/EUR
buy_from: lamax-electronics.com (CZ) — vendor store. eMAG.ro marketplace seller BRANDSLANDIA GROUP (RO)
price_ro_eur: ~255          # 1,294.32 RON on eMAG.ro. EUR is my arithmetic at ~5.08 RON/EUR
---

## Verdict

A competently made Czech-brand watch whose Romanian proposition is broken by price and by
vendor absence: LAMAX charges 2,249 CZK (~€90) on its own store while the eMAG marketplace
reseller charges 1,294 RON (~€255) — roughly 2.8x, and none of that markup buys brand support,
because **LAMAX's own storefront does not list Romania as a country it sells to**.
The main risk is not the radio, it is that nobody in Romania stands behind the device.
It does not clear the floor: bands and VoLTE are unpublished even in the CE declaration,
the tightest tracking interval the app offers is **9 minutes**, and the one dated first-hand
report has the watch placing a child ~2 km from his school.

## RO gate check (2026-08-19)

The single decisive check that had been stuck on a failed fetch — is LAMAX Connect published in
the Romanian storefronts — was settled in a live browser session on 2026-08-19.

- **Google Play RO: LIVE.** `play.google.com/store/apps/details?id=com.ztc.lamax&hl=ro&gl=RO`
  renders fully: "LAMAX Connect – Aplicații pe Google Play", developer elem6 s.r.o., **10 K+
  descărcări**, an active **"Instalează"** button, and the banner *"Aplicația este disponibilă
  pentru dispozitivul tău"*. Last updated **11 nov. 2025** (consistent with Android v1.0.17).
  The description is served in Romanian (Play-side translation — the app itself still ships no
  Romanian locale). **No star rating is displayed and no reviews are visible** on the RO listing
  (too few ratings), so no country/registration complaints exist there in either direction.
- **iOS App Store RO: LIVE.** `apps.apple.com/ro/app/lamax-connect/id6504584125` serves the
  listing: free, v1.1.1b (10/11/2025), iOS 12+, elem6 s.r.o. *"This app has not received enough
  ratings or reviews to display an overview."* Languages "EN + 10 more" — still no Romanian.
- **Registration flow shape** (LAMAX support FAQ, accessed 2026-08-19): account sign-up is
  **by e-mail, verified by an e-mailed code** — no phone number is required at registration and
  no country selector is documented anywhere in the flow. The WatchY4 is then added to the
  account by **QR-code pairing** (older models use a 10-digit device ID). So there is **no
  structural +40-SMS gate**; the residual unknown is whether the white-label backend
  geo-restricts anything, and nothing found suggests it does.
- **Spot-checks of the other gate facts — all still hold (2026-08-19):** eMAG marketplace price
  unchanged at **1.294,32 lei**, in stock, seller BRANDSLANDIA GROUP (rating 3.9), still
  **0 reviews**; LAMAX's own store country selector still offers exactly Croatia, Czechia,
  Germany, Hungary, Poland, Slovakia, Slovenia — **Romania still absent**.

**What this changes:** the app-availability failure mode is off the table on both platforms, and
the e-mail-based registration removes the most likely account-server failure mode. Combined with
the user-supplied nano-SIM (no vendor connectivity layer to withdraw), **no blocking mechanism
remains identified**. What it does not change: zero RO user evidence, no RO support channel, no
Romanian localisation anywhere in the product, undisclosed LTE bands/VoLTE, the 9-minute interval
floor, and the ~2.8x reseller price.

## Does it work in Romania?

**Evidence tier reached: 0.** Nothing was found in either direction. This is not a documented
failure like Xplora or Lagenio — it is a vacuum, and the vacuum is itself informative.

What was established:

- **LAMAX does not sell to Romania.** The country selector on `lamax-electronics.com`
  (accessed 2026-08-19) offers exactly: *Česko (CZK Kč), Chorvatsko (EUR €), Maďarsko (HUF Ft),
  Německo (EUR €), Polsko (PLN zł), Slovensko (EUR €), Slovinsko (EUR €)*. Language options are
  Czech and English only. **Romania is absent from both lists.** There is no `/ro` storefront.
- **No Romanian anywhere in the product.** The vendor spec sheet lists watch UI languages as
  "Czech, English, German, Slovak, Polish, Hungarian, Slovenian, Croatian" — no Romanian
  (accessed 2026-08-19). The iOS app's language list is "English, Croatian, Czech, German,
  Hungarian, Indonesian, Polish, Russian, Simplified Chinese, Slovak, Slovenian" — again no
  Romanian (App Store CZ, accessed 2026-08-19). The multi-language manual PDF ships CZ, EN, DE,
  SK, SI, PL, HU, HR — no Romanian.
- **The eMAG listing is a marketplace import, not a Romanian channel.** Seller is
  **BRANDSLANDIA GROUP** (marketplace vendor, seller rating 3.9), not eMAG 1P. Warranty shown is
  the generic 24-month statutory conformity guarantee under **OUG 140/2021** — i.e. the
  *reseller's* legal obligation, not a LAMAX Romanian service entity. **No Romanian warranty or
  service entity for LAMAX was found.** (eMAG product page, accessed 2026-08-19.)
- **Zero Romanian reviews.** The eMAG page carries **0 reviews** and displays
  *"Fii primul care scrie un review"* — "Be the first to write a review" (accessed 2026-08-19).
  No Romanian-language review of this model was found anywhere.
- **Romanian Play storefront: RESOLVED — LIVE.** The `gl=RO` rendering failure of the first pass
  was beaten in a browser on 2026-08-19: the listing is published and installable in the Romanian
  storefront, and the iOS RO App Store listing is live too. See **"RO gate check (2026-08-19)"**
  above for the full result.
- **Registration in Romania: untested, but the flow is e-mail-based.** Per LAMAX's own FAQ
  (accessed 2026-08-19), registration uses an e-mail address and an e-mailed verification code —
  no phone number, so a +40 number is never demanded at sign-up. End-to-end use from Romania
  remains unreported by any user.

The one genuinely favourable structural fact: **the watch takes an ordinary user-supplied
nano-SIM and there is no vendor connectivity layer to withdraw** (see "The bundled SIM" below).
That removes the Xplora failure mode. It does not remove the account-server failure mode, which
is untested here.

## Pre-purchase test

1. ~~Before paying, install **LAMAX Connect** (`com.ztc.lamax`) from the **Romanian** Play
   storefront.~~ **Answered 2026-08-19: it IS listed and installable in RO** — see "RO gate
   check" above.
2. Register an account (the flow is **e-mail + e-mailed verification code**, no phone number)
   and pair a watch via QR to confirm the backend accepts it from Romania. The app is not
   localised to Romanian, so expect an English UI at best.
3. Buy the return window deliberately. The eMAG seller is **marketplace**, not 1P, so the
   30-day 1P return policy does not apply; you get the **14-day EU distance-selling withdrawal
   right** and the 24-month OUG 140/2021 conformity guarantee against BRANDSLANDIA GROUP.
   Sending a faulty unit to Czech service through a marketplace reseller is the practical risk.
4. Cheaper alternative test: buy from `lamax-electronics.com` at 2,249 CZK to a CZ/SK/PL/HU
   address if you have one. Romania is not a shipping destination there.

## Positioning quality in real use

**What "PinPoint®" actually is.** LAMAX markets *"Second generation of the most accurate
PinPoint® location technology"*. Stripped of the brand name, the vendor's own spec table defines
the positioning stack as exactly: **GPS, LBS, Accelerometer, A-GPS, WiFi**, described as using
*"GPS, LBS, A-GPS, Wi-Fi and Accelerometer for triangulation"*. That is marketing copy
attributed to LAMAX, and the technical content of it is:

- **Single-constellation GPS only.** **No GLONASS, no Galileo, no BeiDou are listed** by the
  vendor. The CE declaration cites `ETSI EN 303 413` (the GNSS receiver standard) but that
  standard's scope covers all constellations and does not tell us which are implemented.
  Multi-constellation support is therefore **UNKNOWN and unclaimed** — and on the evidence
  available, GPS-only is the more likely reading. For a 2024 device this is behind the field.
- **Wi-Fi positioning: yes**, and it is the indoor mechanism.
- **LBS (cell tower) fallback: yes.**
- The accelerometer is dead-reckoning assistance, not a positioning source.
- App v1.1.1b (2025-11-10) release notes add **"manual location calibration"** — i.e. the vendor
  shipped a feature to let parents hand-correct the reported position, more than a year after
  launch. Read that as an admission about accuracy rather than a feature.

**Vendor's own accuracy figures** (LAMAX support FAQ, accessed 2026-08-19): GPS *"5-30 metres"*;
Wi-Fi *"within 300 metres"*; GSM/LBS *"accurate to within 1000 metres"*. So when it falls back
indoors, the vendor itself concedes 300 m to 1 km.

**Observed.** One dated first-hand Czech report (Modrý koník, 2024-11-22, verified review by
*laura144*, Czech Republic):

> *"Aplikace nám na mapě zobrazila polohu hodinek asi 4 ulice dál."*
> "The app showed us the watch's position about 4 streets away."

> *"Během cesty do školy jsem se je pokoušela lokalizovat... Jakmile přišel do školy mi aplikace
> zobrazila polohu mimo školu, přibližně 2 km."*
> "During the journey to school I tried to locate him... As soon as he arrived at school the app
> showed a position outside the school, roughly 2 km away."

The reviewer notes accuracy improved after ~10 minutes outdoors but stayed unreliable indoors.
This is **the exact failure this project exists to avoid**, and it is exactly the silent LBS
fallback: outdoors it eventually gets a GPS fix, indoors at school it reports the child a
kilometre or two from where he is. **One report — not corroborated**, so treat as **unverified**,
but it is consistent with the vendor's own stated LBS accuracy of up to 1000 m.

A second, independent Czech datapoint from Alza.cz reviews (105 ratings, 3.7/5, accessed
2026-08-19) reports the same class of failure — location showing the child on a motorway when he
was 250 metres from home. I could not retrieve the Alza review page directly (HTTP 403) and have
this only via search-result summary, so it is **unverified** and recorded as corroborating in
kind, not as a quotable source.

**Tracking interval is the structural limit.** LAMAX's own app page states the update frequency
options are **9 minutes, 1 hour, or manual**. There is no 1-minute or 3-minute mode. For a
7-year-old walking to school, a 9-minute worst case is a long way to travel between fixes.

## Battery in real use

**Claimed — and LAMAX states four different figures:**

| Source | Claim |
|---|---|
| Product page, `lamax-electronics.com`, accessed 2026-08-19 | *"Up to 120 hours"*; *"5 days in standby mode, 2-3 days in normal use"* |
| Official manual PDF (multi-language), accessed 2026-08-19 | *"680 mAh Lithium-Polymer approx. 3-5 days of normal use"* / CZ: *"výdrž přibližně 3-5 dny běžného užívání"* |
| Retail packaging, as reported by the CZ reviewer 2024-11-22 | 72 hours |
| LAMAX CZ FAQ, accessed 2026-08-19 | *"Při běžném provozu vydrží baterie přibližně 3 dny"* — "In normal operation the battery lasts approximately 3 days" |

The manual's 3–5 days and the web page's 2–3 days are **the vendor contradicting itself on the
same device**. Note also that the "120 hours" number on LAMAX's support pages is tabulated
against a **60-minute** location interval (and, on that page, against the older WatchY2/GPS
Locator hardware — see "Reality check"). It is not a school-day figure.

**Observed:** the same dated CZ review (2024-11-22, T-Mobile CZ SIM with a voice tariff,
school-day use with messaging):

> *"Nám hodinky nevydržely ani 2 dny. Zkoušeli jsme je více dní, ale nezlepšilo se to."*
> "The watch didn't even last us 2 days. We tried it over several days but it didn't improve."

She puts actual endurance at roughly **40 hours** against a 120-hour marketing claim and a
72-hour box claim. Positive Czech reports also exist — onlineshop.cz shows 4.8/5 from 27 verified
reviews with *"Baterie vydrží opravdu dlouho"* ("The battery really does last a long time")
(accessed 2026-08-19) — but **none of the positive reports state a usage profile**, so they
cannot be weighed against a report that does.

**No observed figure at all exists for the 9-minute interval**, which is the setting anyone
buying this for school tracking would actually use. `battery_observed_h: 40` is therefore a
single-source, best-available number and is **unverified**.

680 mAh with a 0.3 Mpx camera, video calling and Wi-Fi scanning is on the low side for the class:
Canyon Zefir KW-49 and TCL MT48 both carry 900 mAh, Carneo GuardKid+ carries 1000 mAh.

## Network & bands

**The bands are not published, and I established that this is true even of the legally required
documentation.** This is the strongest negative finding in this document.

- The vendor product page states only **"2G, 3G, 4G LTE"** — a technology list, not a band list.
  Per the brief: nothing about the word "4G" implies B20, B3 or anything else, and this exact
  phrasing is the standard way a missing VoLTE goes unmentioned.
- I retrieved the actual **EU Declaration of Conformity**:
  `DoC_LAMAX_WatchY4_Play.pdf`, issued by **elem6 s.r.o., Braškovská 15/308, 161 00 Praha 6**,
  signed **Miloš Brejcha, COO**, **Prague, 20.10.2024**, covering *LAMAX WatchY4 Play Blue* and
  *Pink*, serial prefix `LXWY4PLAL(P)A`. Directives 2014/30/EU, **2014/53/EU (RED)**,
  2011/65/EU+2015/863.
  **It contains no frequency table and no maximum RF output power.** What the harmonised standard
  list does establish about the radios:
  - `ETSI EN 301 511 V12.5.1` — **GSM: 2G is present.**
  - `ETSI EN 301 908-1 / -2 V11.1.2` — **UMTS/WCDMA: 3G is present.**
  - `ETSI EN 301 908-13 V13.1.1` — **E-UTRA: LTE is present.**
  - `ETSI EN 300 328` — 2.4 GHz (Wi-Fi/BT). `ETSI EN 303 413` — GNSS receiver.
  So 2G/3G/4G radios are confirmed as *technologies*. **Which LTE bands remains UNKNOWN.**
- The official **manual PDF** has a "Technical specifications" table covering display, resolution,
  memory, camera, weight, dimensions, charging, battery, IP68 and OS compatibility — and **no
  frequency bands and no transmit power**. Under RED Article 10(8) an operating-frequency-band
  and max-power statement is expected in the accompanying information; it is absent here.
- No Czech, Slovak or Romanian retailer spec table found publishes bands either
  (Alza and Datart product pages returned HTTP 403; Heureka 403).

**Therefore: `band_b20: UNKNOWN`, `band_b28: UNKNOWN`.** Do not assume either. On Orange Romania,
B20 (800 MHz) is the only sub-1 GHz LTE band; a watch without it has no low band at all behind
concrete. B28 in Romania is 5G NR n28, not LTE, so it would buy nothing even if present.

**VoLTE: UNKNOWN, and I could not establish it from any source** — not the product page, not the
DoC, not the manual, not the FAQ, not any Czech review. The word does not appear in LAMAX's
material for this product. The absence is not proof of absence, but a vendor that advertises
"2G, 3G, 4G LTE" and never once writes "VoLTE" is the pattern the brief warns about.

**What that means in Romania.** With 3G switched off nationally, the middle term of "2G, 3G, 4G"
is dead on arrival. If VoLTE is absent or is not provisioned for this IMEI/TAC by the operator,
voice falls back to the **2G layer**, which survives on Orange and Digi with **no operator
committed end date**. Data/tracking would keep working on LTE; calls and SOS would be the things
that die. Given that SOS voice is the entire point of the device, and given that this cannot be
resolved from any published document, **the radio must be treated as unproven**.

`voice_fallback: UNKNOWN` follows directly from `volte: UNKNOWN`.

## The bundled SIM — answered

**The watch is not locked to the Czech T-Mobile SIM, and the SIM is a CZ-market promotion only.**

- Vendor marketing (CZ store, accessed 2026-08-19): *"You will receive a free 200MB nano SIM card
  from T-Mobile"*. The CZ FAQ says: *"V balení s hodinkami naleznete T-Mobile SIM kartu (200MB
  zdarma)"* — "In the box with the watch you will find a T-Mobile SIM card (200 MB free)" — and
  answers the lock question directly: *"Mohu použít vlastní zakoupenou SIM kartu? Ano, stačí si
  vybrat SIM kartu u operátora dle vašich preferencí."* — "Can I use my own purchased SIM card?
  Yes, just choose a SIM card from an operator of your preference."
- The **manual** shipped with the international SKUs states the opposite about the bundle, which
  confirms it is market-specific: *"The SIM card is not included in the package. A nano SIM card
  is inserted into the watch."* (DE: *"Die SIM-Karte ist nicht im Lieferumfang enthalten."*)
- Requirement stated in the manual: *"The SIM card used must have an activated data plan."*
  and the PIN must be disabled.

So a Romanian Orange/Digi/Vodafone nano-SIM is the intended path, the 200 MB T-Mobile CZ bundle
is worthless in Romania, and **there is no vendor SIM/subscription that can be geo-withdrawn**.
This is the device's single best structural property.

## Features & what can be disabled

From LAMAX's own LAMAX Connect app page (accessed 2026-08-19):

| Feature | Detail | Parent can disable? |
|---|---|---|
| Voice calls | Only to/from numbers stored in the app; unknown numbers are rejected by design | Restricted by whitelist, not switchable off |
| Video calls | **Max 5 minutes** | UNKNOWN |
| Text messages | **Max 30 characters** each | UNKNOWN |
| Voice messages | Yes, plus family group chat | UNKNOWN |
| Contacts | Approved-contacts-only model; one CZ reviewer reports a **15-contact cap** | Enforced by design |
| SOS | Long-press SOS button dials the SOS contact | Not disableable (correct) |
| Camera | 0.3 Mpx, gallery on watch | UNKNOWN |
| Games | Sokoban | UNKNOWN |
| Class / quiet mode | *"Set time limit (regularly at certain times during the week)"*; "Do not disturb" leaves **only SOS functional** | **Yes** |
| Night shutdown | Scheduled auto power-off | **Yes** |
| Power-saving mode | Limits watch to SOS button and calls | **Yes** |
| Power-off from the watch | Manual: switching off from the watch menu *"only works if switching off is not deactivated in the application"* | **Yes — parent can block the child powering the watch down** |
| Safety zones | **Only 2 geofences** (e.g. school, home) | n/a |
| Location interval | 9 min / 1 hour / manual | n/a |
| Heart rate | **WatchY4 Plus only**, not the Play | n/a |

`extras_disableable: partial`. Schedules, power-saving and power-off-lock are confirmed
switchable; whether the **camera and the game** can be individually turned off is **UNKNOWN** — no
source states it. One Czech review explicitly complains *"Některé funkce nelze zakázat"* — "Some
functions cannot be disabled" (oTechnice.cz, 2025-04-25, CZ).

Two-geofence limit is restrictive; most competitors allow far more.

## Security & privacy

**Vulnerability research: none found specific to this model or app.** A National Vulnerability
Database keyword query for `lamax` returned **`totalResults: 0`** (accessed 2026-08-19). No CVE,
no published research, no disclosure affecting LAMAX Connect, elem6 or the WatchY4 platform was
located. That is an absence of research, **not** evidence of security — this is a 10,000-install
app that has never attracted an audit.

**The app is not LAMAX-built.** The Android package is **`com.ztc.lamax`**. The `ztc` prefix is a
third-party OEM namespace with LAMAX appended, i.e. **LAMAX Connect is a rebadged white-label
application**, published under elem6 s.r.o. Two corroborating tells: the iOS app declares
**Indonesian, Russian and Simplified Chinese** among its languages — none of which are LAMAX
markets — and the Android and iOS builds carry divergent version lines (Android **1.0.17**,
2025-11-17; iOS **1.1.1b**, 2025-11-10). **Who the upstream vendor is, and whose servers the
location data actually terminates on, is UNKNOWN.** For a child-tracking product this is the
material privacy question and it is unanswered.

**Data hosting jurisdiction: UNKNOWN.** The LAMAX Connect privacy policy (accessed 2026-08-19)
names the controller as **elem6 s.r.o., Braškovská 308/15, 161 00 Praha 6, Czech Republic**, and
then declines to localise the data:

> *"Shromážděné informace a údaje mohou být uchovávány a zpracovávány v sídle naší společnosti...
> a/nebo našich přidružených společností."*
> "The collected information and data may be stored and processed at our company's registered
> office... and/or those of our affiliated companies."

No country is named. **No cloud provider, no data-centre location, no sub-processor is
identified, and there is no statement about transfers outside the EU/EEA at all.** Given the
white-label codebase, "affiliated companies" with no geographic bound is the wrong answer to a
question a parent should be able to get a straight answer to. Stated retention:
*"uchováváme vaše osobní údaje pouze po dobu dvou let"* — "we keep your personal data for only
two years". `data_region: UNKNOWN` — a Czech controller does **not** establish EU hosting.

**Declared data collected:** device location; *"kontakty uložené v aplikaci, fotografie a zvukové
soubory"* ("contacts stored in the app, photographs and audio files"); step count and heart rate;
name, e-mail, user ID; device model, OS version, **IP address and carrier details**; and service
logs of browsing, clicks and sharing.

**Contradiction worth flagging:** the Apple App Store privacy label for LAMAX Connect declares
**"The developer does not collect any data from this app."** (accessed 2026-08-19). That is
irreconcilable with the vendor's own privacy policy above, which lists location, audio files,
photographs, contacts, IP address and biometric data. One of these two vendor statements is
wrong. Treat the App Store label as unreliable.

**Covert remote-listen: contradictory evidence, unresolved.**

- oTechnice.cz (CZ, 2025-04-25) states it plainly:
  > *"Hodinky LAMAX WatchY4 Play umožňují rodičům dálkově odposlouchávat okolí dítěte."*
  > "The LAMAX WatchY4 Play watch allows parents to remotely listen in on the child's
  > surroundings."
  and describes the app as able to *"vzdáleně monitorovat okolní zvuky"* ("remotely monitor
  ambient sounds").
- **The official manual contains no such feature** — a full-text search of the multi-language
  manual PDF for listen/monitor/odposlech/abhören/surroundings returned **nothing**. LAMAX's own
  LAMAX Connect app page likewise does not mention it.

So: a Czech review asserts the capability, and the vendor documents it nowhere. Either the
reviewer is describing the white-label platform's standard "voice monitor" callback (which is
exactly the covert-listen feature this category is notorious for), or the review is wrong.
**Whether it exists, whether the watch signals the child when it activates, and whether a parent
can lock it out are all UNKNOWN.** Given that the audio path demonstrably exists (voice messages,
5-minute video calls, "audio files" in the privacy policy), assume the capability is present
until LAMAX says otherwise. Ask support in writing before buying if this matters.

## Reality check

- **"Up to 120 hours"** is not a school-day figure. LAMAX's own support table pins 120 hours to a
  **60-minute** location interval — and on that same page the 120-hour row belongs to the older
  **WatchY2**, because LAMAX's "Watchy4 FAQ" page is still serving WatchY2 and GPS Locator
  content. Meanwhile the box says 72 h, the manual says 3–5 days, the website says 2–3 days, and
  the one parent who measured it got ~40 h. Plan for under two days, and no one has ever
  published a figure at the 9-minute interval.
- **"The most accurate PinPoint® location technology, 2nd generation"** means GPS with A-GPS,
  plus Wi-Fi and cell-tower fallback. **No second constellation is claimed.** The vendor's own
  numbers for the fallback layers are 300 m (Wi-Fi) and up to 1000 m (LBS), and a Czech parent
  measured a 2 km error at her son's school. The v1.1.1b release adding **manual position
  calibration** is the vendor conceding the point.
- **"2G, 3G, 4G LTE"** means, in Romania: 3G does not exist, LTE bands are undisclosed even in
  the CE declaration, and VoLTE is never claimed. Functionally that is "data probably works,
  voice is an open question resting on a 2G layer with no committed lifetime".
- **"Free 200 MB T-Mobile SIM"** is a Czech promotion. In Romania it is packaging. The good news
  is that it is only a promotion — the watch takes any nano-SIM.
- **"1,294 RON"** is not a LAMAX price. LAMAX's price is **2,249 CZK (~€90)**. The Romanian
  number is a marketplace reseller's, at roughly **2.8x**, for a device its manufacturer does not
  sell into Romania and does not support in Romanian.

## What users say

All reports below are Czech. **There is not one Romanian report of this model in existence** that
I could find.

**Works:**

- onlineshop.cz (CZ, accessed 2026-08-19) — **4.8/5 from 27 verified reviews, 96% recommend**:
  *"Baterie vydrží opravdu dlouho"* / "The battery really does last a long time";
  *"Přesná poloha"* / "Accurate location"; *"Jednoduché ovládání"* / "Simple to operate".
  ⚠️ These are short generic phrases with **no stated usage profile**, and per the project's
  review-farming caution they carry little weight against a detailed negative report.
- Alza.cz (CZ, accessed 2026-08-19 via search summary; page itself HTTP 403) — **3.7/5 from 105
  ratings**, with positive comments that battery *"vydrží mnohem déle než u předchozích hodinek"*
  / "lasts much longer than our previous watch". **unverified** — could not open the source page.
- oTechnice.cz (CZ, 2025-04-25) — a favourable review; describes the GPS + Wi-Fi + mobile
  combination as giving reliable localisation *"i uvnitř budov"* / "even inside buildings".
  This is a review claim and it is **directly contradicted** by the parent report below.

**Fails:**

- Modrý koník, verified review by *laura144* (CZ, **2024-11-22**) — the only report in the corpus
  with a stated usage profile (T-Mobile CZ voice+data SIM, walk to school, school day):
  > *"Nám hodinky nevydržely ani 2 dny."* — "The watch didn't even last us 2 days."
  > *"Jakmile přišel do školy mi aplikace zobrazila polohu mimo školu, přibližně 2 km."*
  > — "As soon as he arrived at school the app showed a position outside the school, roughly 2 km
  > away."
  > *"Pokud jsem psala synovi a on měl ve škole tichý režim, na hodinkách se vůbec nezobrazovala
  > informace, že má nepřijatou zprávu."*
  > — "If I messaged my son and he had silent mode on at school, the watch showed no indication
  > at all that he had an unread message."
  Also: max 15 contacts, no real text messaging (voice messages only), **no battery percentage
  display**, and packaging claiming 72 h against marketing's 120 h.
- Alza.cz (CZ, accessed 2026-08-19, via search summary — **unverified**): a review reporting the
  watch *"nevydržely ani půl dne"* / "didn't last even half a day" with the child merely wearing
  it, and another reporting the app showing the child *on a motorway* when he was 250 m from
  home.
- oTechnice.cz (CZ, 2025-04-25) — even the positive review concedes
  *"Některé funkce nelze zakázat"* / "Some functions cannot be disabled".

**Weight of evidence:** battery shortfall is reported by **two independent Czech sources**
(Modrý koník; Alza) and contradicted by generic praise with no profile. Location error indoors is
reported by **two independent Czech sources** (Modrý koník ~2 km at school; Alza motorway/250 m)
and contradicted by one reviewer's untested assertion. Two sources is thin but it is what exists,
and both point the same way.

## Sources

| URL | Accessed | Established |
|---|---|---|
| https://www.lamax-electronics.com/en/products/lamax-watchy4-play-blue | 2026-08-19 | Full spec: 680 mAh 3.8 V Li-pol, "2G, 3G, 4G LTE", positioning "GPS, LBS, Accelerometer, A-GPS, WiFi", nano SIM, IP68, 52 g, 1.4"/240×240 Gorilla Glass, 0.3 Mpx, Sokoban, 2,249.10 CZK (from 2,499), UI languages excluding Romanian |
| https://lamax-electronics.com/en/products/lamax-watchy4-play-pink | 2026-08-19 | Same spec; PinPoint® marketing wording; "5 days standby, 2-3 days normal use"; "free 200MB nano SIM card from T-Mobile" |
| **https://cdn.shopify.com/s/files/1/0842/7310/3180/files/DoC_LAMAX_WatchY4_Play.pdf** | 2026-08-19 | **The EU Declaration of Conformity.** elem6 s.r.o., Praha 6; Miloš Brejcha COO; Prague 20.10.2024; RED 2014/53/EU; EN 301 511 (GSM), EN 301 908-1/-2/-13 (UMTS + LTE), EN 300 328, EN 303 413. **No frequency band table, no max RF power** |
| https://www.lamax-electronics.com/support/doc/ | 2026-08-19 | LAMAX's declaration-of-conformity index; located the WatchY4 Play DoC |
| https://im9.cz/product-docs/ilqft3yq87xsodmx/Návod%20-%20LAMAX%20WatchY4%20Play.pdf | 2026-08-19 | Official multi-language manual. Tech spec table has **no bands/power**; "680 mAh ... approx. 3-5 days of normal use"; "The SIM card is not included in the package"; "must have an activated data plan"; power-off can be blocked from the app; languages CZ/EN/DE/SK/SI/PL/HU/HR (no Romanian) |
| https://lamax-electronics.com/en/pages/lamax-connect-app | 2026-08-19 | Update frequency **9 min / 1 h / manual**; **2** safety zones; 5-min video calls; 30-char messages; 7-day history; power-saving mode; Play link `com.ztc.lamax`; App Store id6504584125 |
| https://lamax-electronics.com/en-sk/pages/watchy4-faq | 2026-08-19 | Vendor accuracy figures: GPS 5-30 m, Wi-Fi ~300 m, LBS up to 1000 m; roaming depends on tariff; "Do not disturb" leaves only SOS; **120 h figure tabulated at 60-min interval, page still serving WatchY2/GPS-Locator content** |
| https://www.old.lamax-electronics.com/cz/lamax-watchy4-manuals-faq/ | 2026-08-19 | CZ FAQ: T-Mobile 200 MB SIM in box; *"Mohu použít vlastní zakoupenou SIM kartu? Ano"* — **not operator-locked**; *"Při běžném provozu vydrží baterie přibližně 3 dny"* |
| https://lamax-electronics.com/pages/lamax-connect-privacy-policy | 2026-08-19 | Controller elem6 s.r.o., Braškovská 308/15, Praha 6; data incl. location, audio files, photos, contacts, IP, carrier; **hosting country not named, no sub-processors, no EU-transfer statement**; 2-year retention |
| https://lamax-electronics.com/ (country selector) | 2026-08-19 | **Vendor sells to Česko, Chorvatsko, Maďarsko, Německo, Polsko, Slovensko, Slovinsko — Romania absent.** Languages: Czech, English only |
| https://apps.apple.com/cz/app/lamax-connect/id6504584125 | 2026-08-19 | Seller elem6 s.r.o.; iOS v1.1.1b 2025-11-10 (adds **manual location calibration**); version history v1.1.1 2025-07-29, v1.0.2 2025-01-28, v1.0.1 2024-11-22, **first release v1.0 on 2024-09-23**; iOS 12+; languages incl. Indonesian/Russian/Simplified Chinese, **no Romanian**; privacy label claims **"does not collect any data"** |
| https://apkcombo.com/lamax-connect/com.ztc.lamax/ | 2026-08-19 | Android package **`com.ztc.lamax`**, developer elem6 s.r.o., **v1.0.17, updated 2025-11-17**, min Android 5.0, **10,000+ installs**, category Parenting |
| https://play.google.com/store/apps/details?id=com.ztc.lamax | 2026-08-19 | Listing exists globally. First-pass `gl=RO` rendering failed — superseded by the row below |
| **https://play.google.com/store/apps/details?id=com.ztc.lamax&hl=ro&gl=RO** | 2026-08-19 | **RO Play storefront: LIVE.** "Instalează" active; "Aplicația este disponibilă pentru dispozitivul tău"; 10 K+ descărcări; last update 11 nov. 2025; RO-translated description; **no rating displayed, no visible reviews** |
| https://apps.apple.com/ro/app/lamax-connect/id6504584125 | 2026-08-19 | **iOS RO App Store: LIVE.** Free, v1.1.1b (10/11/2025), iOS 12+; "not received enough ratings or reviews"; languages EN + 10 more (no Romanian) |
| https://lamax-electronics.com/en-sk/pages/watchy4-faq (setup/registration answers) | 2026-08-19 | Registration = **e-mail + e-mailed verification code, no phone number, no country selector**; WatchY4 pairs via QR code; country selector re-checked — **Romania still absent** |
| https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=lamax | 2026-08-19 | **`totalResults: 0`** — no CVEs referencing LAMAX |
| https://www.emag.ro/lamax-ceas-smartwatch-curea-din-silicon-pentru-copii-watchy4-play-roz-890558/pd/D30PVK2BM/ | 2026-08-19 | **1,294.32 RON**, in stock, seller **BRANDSLANDIA GROUP** (marketplace, rating 3.9), 24-month statutory guarantee per **OUG 140/2021**, **0 reviews** ("Fii primul care scrie un review"), no spec table populated |
| https://www.modrykonik.cz/recenze/bezpecny-detsky-telefon-na-ruku-lamax-watchy4-play/ | 2026-08-19 | **CZ verified parent review, 2024-11-22, laura144.** ~40 h observed battery; box says 72 h; ~2 km location error at school; 4-streets error; silent-mode message failure; 15-contact cap; no battery % |
| https://otechnice.cz/lamax-watchy4-play-recenze/ | 2026-08-19 | CZ review **2025-04-25**. Claims **remote listening to the child's surroundings**; concedes *"Některé funkce nelze zakázat"* |
| https://www.onlineshop.cz/detske-chytre-hodinky/chytre-hodinky-lamax-watchy4-play-blue-1245371P.recenze.html | 2026-08-19 | CZ retailer: **4.8/5, 27 verified reviews, 96% recommend**; short generic positive quotes, no usage profiles |
| https://www.alza.cz/recenze/lamax-watchy4-play-pink-12598451.htm | 2026-08-19 | **HTTP 403 — could not open.** Rating 3.7/5 from 105 ratings and the negative quotes are via search summary only and are **unverified** |
| https://chytre-hodinky.heureka.cz/lamax-watchy4-play/ | 2026-08-19 | **HTTP 403 — not retrieved.** Price floor 1,890 CZK seen in search results only |
| https://www.datart.cz/chytre-hodinky-lamax-watchy4-play-lxkwmwy4plala-modre.html | 2026-08-19 | CAPTCHA wall — **not retrieved** |
| https://www.pilulka.cz/lamax-watchy4-play-pink/recenze-zkusenosti | 2026-08-19 | **HTTP 403 — not retrieved** |

### Coverage gaps in this document

- **Alza.cz, Heureka.cz, Datart.cz and Pilulka.cz all blocked** (403 / CAPTCHA). Alza holds the
  largest Czech review pool for this model (105 ratings) and it could not be read directly.
- ~~Google Play could not be rendered for any storefront~~ **Resolved 2026-08-19** in a browser
  session: `app_ro_playstore: yes` — see "RO gate check (2026-08-19)". Remaining untested: an
  actual registration + QR pairing performed from Romania.
- **LAMAX support was not contacted.** The bands, VoLTE and the remote-listen question are all
  answerable only by writing to LAMAX; every published document has now been checked and none of
  them contain the answers.
- The session's web-search budget (200 calls) was exhausted partway through, so Slovak-language
  sources and Czech discussion forums were not swept.
