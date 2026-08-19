# CARNEO GuardKid+ 4G Platinum

```yaml
---
model:                  CARNEO GuardKid+ 4G Platinum (CE model designation "LD-01")
brand:                  CARNEO — trademark of TRUST System s.r.o., Trnava, Slovakia (IČO 36249343)
release_year:           2022          # EU Declaration of Conformity signed 2022-11-07; EU retail from 2023
still_sold:             yes           # in stock at CARNEO CZ, eMAG.ro, irisimo.ro, tonerpartner.ro, 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status:              likely
ro_evidence_tier:       3             # RAISED 2026-08-19 by scrutiny pass. Google Play **RO** storefront
                                      # now CONFIRMED live and fully Romanian-localised ("Aplicația este
                                      # disponibilă pentru dispozitivul tău"), play.google.com …&gl=RO&hl=ro,
                                      # 2026-08-19. Apple RO confirmed. Registration is **email + password
                                      # only** — the vendor manual documents no phone-number step, so there
                                      # is no +40 gate at account creation. Still missing: any dated RO
                                      # owner, and the live +40 SIM test.
ro_killer:              n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands:              [B1, B2, B3, B5, B7, B8, B20, B28A]   # vendor-published BOILERPLATE; not substantiated by the CE/RED DoC
band_b20:               true          # vendor-published — but CONFIDENCE DOWNGRADED 2026-08-19: the identical
                                      # byte-for-byte string also appears on the 2024/25 ULTRA 2nd gen (AMOLED,
                                      # IP68, different SoC) and on the Buddy (560 mAh, 1.52"). Three physically
                                      # different devices cannot share one radio spec — it is copy-paste across
                                      # the whole 4G line. The earlier "MINI has no LTE list, therefore the
                                      # tables are model-specific" test only separated the 2G/3G product.
band_b28:               true          # B28A published — but see note: B28 in RO is 5G NR n28, buys nothing
volte:                  UNKNOWN       # still unverified. NEW 2026-08-19: absent from the manual, the DoC, and
                                      # FOUR Carneo product pages incl. the two newest models (grep: only the
                                      # Czech word "zvolte" in Shoptet JS). Sole direct evidence either way is
                                      # one owner listing "volani (volte)" as a pro — Heureka.cz, PZ, verified
                                      # purchase, 2022-09-30 — ambiguous and uncorroborated. See scrutiny pass.
voice_fallback:         UNKNOWN       # manual implies a 2G layer is expected; not confirmed
modem_chipset:          UNKNOWN       # LEAD only: carneo.cz's ULTRA 2nd gen page disparages "dvoujádrových
                                      # platformách «například: SL8521E»" — implying the older/cheaper GuardKid
                                      # models use the Unisoc SL8521E. Consistent with Android 8.1 / 512 MB /
                                      # 240×240. NOT confirmed for this SKU.

# --- Positioning (the #1 criterion) ---
positioning:            [GPS, WiFi, LBS]   # no GLONASS / Galileo / BeiDou published by the vendor
wifi_positioning:       true          # explicitly documented in the vendor manual — but see scrutiny pass:
                                      # WiFi/LBS fallback is the single largest owner complaint, and multiple
                                      # owners fix it by DISABLING WiFi on the watch to force a GPS fix
positioning_observed:   poor          # NEW 2026-08-19. Dominant failure mode across ~400 CZ/SK owner reviews:
                                      # errors of 2-15 km are routinely reported, with outliers at 300 km and
                                      # "Hong Kong". Also two owners report the default AGPS server is an
                                      # "Asian" one and must be switched to Google in watch Settings →
                                      # Mobile networks before positioning is usable. Corroborated by the
                                      # CARNEO GUARD privacy policy naming **AutoNavi** (Alibaba/Amap) as the
                                      # location-service provider.
update_interval_min:    10            # tightest automatic interval documented in the vendor manual

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:            1000
battery_claimed_h:      96            # "4 days" / "up to 96 hours" on carneo.eu and carneo.cz spec tables.
                                      # The vendor's OWN manual gives a lower, mode-dependent figure:
                                      # 10-min interval = 24-72 h; 1-hour interval = 48-96 h; sleep = 72-120 h
battery_observed_h:     30            # HEADLINE OBSERVED FIGURE — itmix.cz (CZ, 2025-04-14): 10-min interval,
                                      # ~10 messages, 2 photos, ~10 min of calls, night disconnect 22:00-06:00
                                      # enabled. The Hungarian figure is the same test, republished.
                                      # NO LONGER THE ONLY DATAPOINT (2026-08-19). Owner observations now span
                                      # ~14 h to ~96 h:
                                      #   ~15.8 h (labelled ~14 h before recomputation: 60%/9.5 h -> 6.3%/h -> 15.8 h) Heureka poradna, 2024-09-10 — SLEEP mode (manual location
                                      #          only), pedometer off, on WiFi: 100% at 21:00 → 40% at 06:30,
                                      #          i.e. 60% burned in 9.5 h IDLE. Manual claims 72-120 h here.
                                      #   ~24 h  Alza, Richard/Olbramovice 2024-10-22 "slabá baterie (Max 1
                                      #          den) a to se nemusí vůbec používat"; Adam/Dubňany 2024-08-02;
                                      #          Petr/Tišnov 2025-01-25 "hodinky je potřeba denně nabíjet".
                                      #   ~60 h  Alza, Tomas/Pašovice 2026-08-17: 100%→60% in 24 h UNUSED,
                                      #          on a warranty-replacement unit that behaved identically.
                                      #   ~48 h  Lukáš/Teplice 2026-01-08; Tomáš/Zbýšov 2026-01-28 "max 2 dny".
                                      #   72-96 h claimed by a minority of owners, conditions never stated.
                                      # Spread this wide on one SKU points at unit-to-unit variance and/or
                                      # signal-dependence, not at a single true figure.
battery_school_day:     clears*       # CAVEAT 2026-08-19: the "worst observed case" (~15.8 h) is a SLEEP-mode idle figure, not a tracking figure. A 9.5 h school day at the 10-min interval is inside even the worst
                                      # observed case, but only just, and the ~14 h datapoint means a unit
                                      # sent out at less than a full charge can die before pickup.

# --- App & service ---
app_name:               CARNEO Guard (Android package com.tgelec.carneoguard)
app_android_min:        5.0
app_ro_playstore:       true          # CORRECTED 2026-08-19. Google Play **RO** storefront renders and offers
                                      # the app: "Aplicația este disponibilă pentru dispozitivul tău", full
                                      # Romanian listing text, footer "România (română)". Apple RO also TRUE.
app_last_update:        2026-06-13    # CORRECTED: Google Play itself (RO and SK) says "Aktualizované
                                      # 13. 6. 2026" / "Ultima actualizare 13 iun. 2026", not 06-22 (that was
                                      # an apkcombo mirror figure). iOS v2.9, 2026-06-27, release note "fix bugs".
app_rating_play:        2.7           # SETTLED 2026-08-19 by controlled multi-locale Play read (SK
                                      # storefront hl=sk&gl=SK, ~1,110 ratings). Play's average is
                                      # storefront-country-dependent over one global count: US/default 2.2,
                                      # SK 2.7, CZ 3.1, DE 3.1 (n=13), RO none shown. The apkcombo 2.2 was
                                      # NOT stale - it is the live default-storefront view. See
                                      # "#### Controlled Play read (2026-08-19)" in the scrutiny pass.
data_region:            EU-Frankfurt  # CORRECTED 2026-08-19 — the doc was WRONG that no Guard privacy policy
                                      # exists. A CARNEO GUARD-specific policy is published at
                                      # carneo.sk/user/documents/appguard/privacy-en.htm and states servers in
                                      # "the European Union, specifically Frankfurt am Main, Germany", ISO/IEC
                                      # 27001:2013 / 27017:2015 / 27018:2014 certified. TREAT AS VENDOR CLAIM,
                                      # NOT AS ASSURANCE: the same document is a machine-translated Chinese
                                      # policy that names AutoNavi, Aliyun, ChuanShanJia (ByteDance),
                                      # Guangdiantong (Tencent), KuaiShou, Baidu Alliance, JuXiao, Wanhui and
                                      # Leida SDKs, and describes Chinese "IoT SIM real-name / face
                                      # recognition" flows. See scrutiny pass §5.
# --- Practical ---
sim:                    nanoSIM       # physical slot, operator-agnostic; no eSIM
water_rating:           IP67
weight_g:               52
camera:                 true
games:                  true          # CORRECTED 2026-08-19 — owner-confirmed, not vendor-confirmed. Heureka
                                      # verified purchase 2022-05-31 lists "Hry – Matematika a Angličtina"
                                      # ("Games – Maths and English") as a pro; Jana, Heureka 2025-03-28,
                                      # "zábavné hry vhodné i pro menší děti"; two Alza reviewers list "hry"
                                      # among pros. eMAG.ro's own spec table also lists educational games.
                                      # NO documented way to disable them.
extras_disableable:     partial       # weaker than the doc implies: games, WhatsApp/third-party app install,
                                      # the Friends bump-to-pair feature, the camera and odposlech all have
                                      # NO documented off switch, and owners report the SOS button
                                      # self-triggering in a school bag with no way to disable it.
price_eur:              155           # carneo.eu EU list. Real CZ price 2,150 CZK (~EUR 85) — see Verdict
buy_from:               eMAG.ro (marketplace seller HomeMode), Romania — 565.52 RON black/pink, in stock 2026-08-19
price_ro_eur:           ~113          # 565.52 RON at ~5.0 RON/EUR; blue variant 707.65 RON (~EUR 142)
---
```

## Verdict

> **REVISED 2026-08-19 — see the Scrutiny pass at the end of this file.** The verdict below names
> the platform/privacy story as "the main risk". That is no longer the right headline. Once ~400
> Czech and Slovak owner reviews are read, **the main risk is that the positioning does not work**:
> 2–15 km errors are routinely reported, the geofence fires kilometres late, and the fix — switching
> the AGPS server off its default "Asian" setting — is undocumented by the vendor. The paragraph
> below on Romania and pricing still stands; the risk ranking does not.

Suits a parent who wants a documented low band and a physical SIM at a mid price, and who
accepts a 2022 device on a Chinese white-label cloud. **The main risk is not Romania — it is
the platform:** the app is a rebadged TGELEC/3G Electronics build, the family whose backend
ARES 2020 found unauthenticated and SQL-injectable, and CARNEO publishes no privacy policy for
it at all. It clears the position/signal and one-day floors on paper, but **only just** — the
sole real-world battery test on record is ~30 hours, not 4 days.

Note before anything else: **the end-of-life pricing signal in the brief does not survive
checking.** CARNEO's Czech shop sells the Platinum at 2,150 CZK (~EUR 85), *below* the newer
ULTRA at 3,290 CZK (~EUR 130), in stock in three colours. The EUR 155 figure is carneo.eu's
stale pan-EU list price, not a market price.

## Does it work in Romania?

**Status: `likely`. Tier 2, partially — and the decisive Android test has not been run.**

What is established, dated:

- **Sold in Romania, in stock.** eMAG.ro lists all three colours in stock on 2026-08-19:
  black and pink at 565.52 RON, blue at 707.65 RON. Contrary to an earlier sweep, these are
  **not** eMAG 1P — the seller is the marketplace vendor **HomeMode** (rated 4.7/5). The
  listing states a **14-day right of return**, not eMAG's 30, and a **"24-month legal
  conformity warranty per OUG 140/2021"** — Romanian consumer law, so there is a route to
  redress inside Romania.
  <https://www.emag.ro/smartwatch-pentru-copii-carneo-guardkid-4g-platinum-negru-8588007861579/pd/DSX6NVYBM/>
  (accessed 2026-08-19)
- **Other Romanian storefronts:** irisimo.ro at 560.00 RON, tonerpartner.ro at 604.48 RON
  ("In stoc 15 bucăți"), vivantis.ro. Note that tonerpartner.ro's legal entity is
  **Ledum Kamara SK s.r.o., Zámocká 30, 811 01 Bratislava** — a Slovak company operating a
  .ro storefront with a Romanian phone line, **not** a Romanian warranty entity.
  (accessed 2026-08-19)
- **The companion app is live in the Romanian Apple storefront.** `apps.apple.com/ro/` returns
  the listing: seller **TRUST System s.r.o.**, version **2.9, updated 27 Jun** (2026), iOS
  15.6+, and **Română is among the 45 listed languages**. App Privacy declares Precise
  Location, Email Address and User ID as *linked to you*.
  <https://apps.apple.com/ro/app/carneo-guard/id1552178771> (accessed 2026-08-19)
- **Physical nano-SIM, no vendor SIM, no subscription.** There is no vendor connectivity layer
  that could be withdrawn from Romania — structurally the opposite of the Xplora failure mode.
  The manual simply tells you to buy a data SIM and disable its PIN.
- **The bands fit** (tier 5, necessary not sufficient) — see *Network & bands*.

What is **unverified** and must not be smoothed over:

- **The Google Play RO storefront was not confirmed.** Play listings would not render for this
  research (repeated fetches returned navigation chrome only). What is confirmed comes from a
  Play mirror: package `com.tgelec.carneoguard`, developer TRUST System spol. s r.o.,
  **v1.3.0 released 2026-06-22**, **100,000+ installs**, **rating 2.2/5 from 1,071 ratings**,
  requires Android 5.0+. <https://apkcombo.com/carneo-guard/com.tgelec.carneoguard/>
  (accessed 2026-08-19). The 2.2/5 is itself a warning, and it is not RO-specific.
- **No dated first-hand Romanian user report of this model exists** in anything reachable here.
  The eMAG listings carry **zero customer reviews**. The only Romanian voice found is an
  unanswered question on the blue listing: **"Pot sa instalez pe el whatsApp și youtube? Are
  calculator?"** ("Can I install WhatsApp and YouTube on it? Does it have a calculator?")
  — Mihnea, RO, 2025-06-21. That is interest, not use.
- **No Romanian distributor or service entity was identified.** Support routes are Czech/Slovak:
  info@carneo.cz, +420 244 094 444, +421 33 293 3112.
- **One Romania-specific platform behaviour is documented and untested here.** The vendor manual
  states that some features appear in the app only after a delay **"Je to způsobeno prověřováním
  legislativy země v níž se hodinky nacházejí"** ("This is caused by checking the legislation of
  the country in which the watch is located"). The platform therefore performs **country-based
  feature gating**. Which features it gates in Romania is UNKNOWN.

## Pre-purchase test

1. Install **CARNEO Guard** from the **Romanian Google Play storefront** on the actual phone
   that will be used. If it is not offered in the RO storefront, stop — the Apple result does
   not carry over.
2. Register an account with a **+40** number and a Romanian email **before paying**. The manual
   registers by email + password, then pairs by scanning the QR on the watch, so the account
   can be created before the hardware arrives.
3. Buy from **eMAG.ro**, and note the seller is the marketplace vendor **HomeMode** with a
   **14-day** return window — not eMAG's 30-day 1P window. Diarise day 12.
4. Week one, on the chosen SIM: place an **outgoing and an incoming voice call while the watch
   is on LTE**, and ask the operator whether the IMEI is VoLTE-provisioned. Then check the
   reported position **inside the school building**, not in the garden.
5. Also in week one: confirm whether the **odposlech / remote-listen** control is present in the
   app in Romania (the platform gates features by country, up to 48 h after pairing).

## Positioning quality in real use

The vendor manual is unusually candid, and it is the primary source here. Original Czech,
followed by translation:

> **"Hodinky využívají prioritně svou lokalizaci ze zabudovaného GPS přijímače 'přesnost je
> několik desítek metrů'. Pokud se však hodinky nacházejí na místě s nízkým nebo žádným GPS
> signálem 'budova, podzemní garáž, škola apod.' Využívají na lokalizaci dostupné WIFI sítě...
> Přesnost může být od 5m až do 300m... Pokud nejsou dostupné ani žádné WIFI sítě, ani GPS
> signál ze satelitů, hodinky provádějí lokalizaci pomocí BTS 'LBS' vykrývače operátora...
> přesnost lokalizace ovlivněna počtem BTS ... 'až do několika km'."**
>
> "The watch primarily uses its position from the built-in GPS receiver ('accuracy is several
> tens of metres'). However, if the watch is in a place with low or no GPS signal ('building,
> underground garage, school etc.') it uses available WiFi networks for positioning... Accuracy
> can be from 5 m up to 300 m... If neither WiFi networks nor GPS satellite signal is available,
> the watch positions using the operator's BTS 'LBS'... positioning accuracy is affected by the
> number of BTS ... 'up to several kilometres'."
> — CARNEO GuardKid+ 4G Platinum user manual (CZ), TRUST System s.r.o., undated PDF hosted on
> carneo.cz, accessed 2026-08-19

Three things follow. First, the vendor's own headline "accuracy up to 5 metres" is the
best-case GPS figure and the *best* case of the WiFi range; the manual's own worst cases are
300 m indoors and kilometres on LBS. Second, **it does silently fall back** — there is no
documented indicator in the app distinguishing a GPS fix from a WiFi or LBS estimate. Third,
WiFi positioning is real and enabled, which is the right architecture for a school interior,
but its accuracy depends on third-party WiFi geolocation databases having mapped the school's
access points — unproven for Romanian schools.

The single field test on record agrees:

> **"Během našeho testování většinou poloha hodinek zobrazená v aplikaci odpovídala realitě.
> Pouze v několika případech (při umístění hodinek v budově) byla určena poloha o několik
> desítek metrů dál."**
>
> "During our testing the watch's position shown in the app mostly matched reality. Only in a
> few cases (when the watch was placed inside a building) was the position determined several
> tens of metres away."
> — itmix.cz, Czechia, updated 2025-04-14

Fix time: the manual asks you to put the watch outdoors or on a windowsill **five minutes**
before pairing, and warns first server sync can take **up to ~30 minutes**. No cold-fix figure
is published. **UNKNOWN.**

LBS and GPS can each be switched off individually in the app, which is unusual and useful —
turning LBS off removes the "child is 3 km away" class of false report, at the cost of losing
all position when GPS and WiFi both fail.

## Battery in real use

**Claimed and observed are far apart, and the vendor contradicts itself between its shop page
and its manual.**

| Source | Figure | Conditions |
|---|---|---|
| carneo.eu / carneo.cz spec table (marketing) | "4 days" active, "up to 96 hours" standby | none stated |
| eMAG.ro / tonerpartner.ro listings (marketing, restated) | "up to 96 hours" | none stated |
| **Vendor manual — normal mode** | **max. 1–3 days (24–72 h)** | automatic location every **10 minutes** |
| **Vendor manual — power-save mode** | max. 2–4 days (48–96 h) | automatic location every **1 hour** |
| **Vendor manual — sleep mode** | max. 3–5 days (72–120 h) | position requested **manually only** |
| **itmix.cz observed** | **~30 hours** | 10-min interval, ~10 messages, 2 photos, ~10 min of calls, pedometer OFF, night disconnect 22:00–06:00 ON |

The manual, verbatim:

> **"Výdrž baterie na základě zvoleného pracovního režimu: Normální režim / automatická
> lokalizace každých 10 minut = výdrž max. 1-3 dny. Režim úspory energie / automatická
> lokalizace každou 1 hodinu = výdrž max. 2 - 4 dny. Režim spánku. Polohu si můžete vyžádat
> manuálně = výdrž max. 3-5 dní. Výdrž baterie je uváděna při 100% 4G GSM signály. V případě,
> že se hodinky během dne nacházejí se slabším GSM 4G signálem se výdrž baterie rapidně
> zkracuje."**
>
> "Battery life based on the selected working mode: Normal mode / automatic location every 10
> minutes = max. 1–3 days. Power-saving mode / automatic location every 1 hour = max. 2–4 days.
> Sleep mode, position can be requested manually = max. 3–5 days. Battery life is stated at 100%
> 4G GSM signal. If the watch is in weaker GSM 4G signal during the day, battery life shortens
> rapidly."
> — vendor manual, accessed 2026-08-19

The manual adds that enabling the pedometer **"může zkrátit výdrž baterie až o 30%"**
("can shorten battery life by up to 30%").

The observed test:

> **"Během našeho testování jsme se rozhodli pro automatickou lokalizaci každých 10 minut.
> Krokoměr jsme ponechali vypnutý... Během dne jsme odeslali zhruba 10 zpráv a vyfotili 2 fotky.
> Rovněž jsme přibližně 10 minut za celý den telefonovali. Také jsme zapnuli noční režim úspory
> energie, kdy se hodinky odpojí od sítě v době mezi 22:00 a 6:00. V popsaném případě jsme
> hodinky nabíjeli po zhruba 30 hodinách."**
>
> "During our testing we chose automatic location every 10 minutes. We left the pedometer off...
> During the day we sent about 10 messages and took 2 photos. We also called for about 10 minutes
> over the whole day. We also enabled night power-saving mode, where the watch disconnects from
> the network between 22:00 and 6:00. In the described case we charged the watch after about 30
> hours."
> — itmix.cz, Czechia, updated 2025-04-14

**How many independent reports back this: one.** The Hungarian figure — guidelee.hu, 2025-05-12,
**"körülbelül 30 óra után feltöltöttük az órát"** ("we charged the watch after approximately 30
hours") — reports the *identical* test conditions and the identical number. It is the same test
republished, not corroboration. Treat ~30 h as a single datapoint, and note it was obtained
**with night-time network disconnect already enabled** — i.e. ~30 h is not a naive figure, it is
a figure already helped by a power-saving setting.

Verdict for a school day: **it clears the one-day floor and nothing more.** Charge nightly.

## Network & bands

**Published band list (vendor primary source, not a retailer table):**

> "GSM B2 B3 B5 B8, WCDMA B1 B2 B5 B8, FDD-LTE B1 B2 B3 B5 B7 B8 B20 B28A"
> — identical string on carneo.eu and carneo.cz product pages for the Platinum, accessed 2026-08-19

**How much to trust it.** Two tests were run.

*Test 1 — is this a boilerplate string pasted across the catalogue?* **No.** The GuardKid+ MINI
page on the same site shows only "SIM card support: 2G/3G" with **no LTE band list at all**,
correctly reflecting that it is a 2G/3G device. CARNEO's spec tables are model-specific. This
materially raises confidence.
<https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-mini-black/> (accessed 2026-08-19)

*Test 2 — does the CE/RED Declaration of Conformity substantiate it?* **No, and this is the
finding that matters.** The DoC was retrieved and read in full. It is real, specific and signed:

- Product: **"Inteligentné hodinky / Smart watch — CARNEO — LD-01 — GuardKid+ 4G Platinum"**
- Issuer: **TRUST System s.r.o., Jiráskova 19, 917 02 Trnava**, signed **Andrej Kopáč**
- Date: **7.11.2022**
- Directives: RED **2014/53/EU**, EMC 2014/30/EU, LVD 2014/35/EU, RoHS 2011/65/EU + 2015/863/EU
- Harmonised standards listed, in full: EN IEC 62368-1:2020+A11:2020; EN 62479:2010;
  EN 50663:2017; ETSI EN 301 489-1 V2.2.3; ETSI EN 301 489-17 V3.2.4;
  **ETSI EN 300 328 V2.2.2**; plus the IEC 62321 RoHS series.

<https://www.carneo.cz/user/documents/upload/podpora/vyhlaseni-o-zhode/carneo_GuardKid-plus_4G_Platinum_prehlasenie-o-zhode-cz.pdf>
(retrieved and text-extracted 2026-08-19)

ETSI EN 300 328 is the **2.4 GHz wideband** standard — WiFi and Bluetooth. **The DoC lists no
cellular standard whatsoever**: no ETSI EN 301 511 (GSM), no EN 301 908-1/-2/-13 (UMTS/LTE user
equipment), no EN 301 489-52 (cellular EMC), no EN 303 413 (GNSS receivers). For a device whose
entire purpose is a cellular modem, that is an incomplete declaration, and the practical
consequence for this project is precise:

> **The CE/RED declaration for this SKU does not substantiate a single LTE band.** The band list
> rests entirely on CARNEO's own spec table. That is better than a retailer table and better than
> ~55 of the 60+ models in this market, but it is **not** independent verification, and it should
> be written as **unverified** until a Romanian SIM is seen camping on B20.

**Fit against Romanian operators.** On the published list:
- **B20 (800 MHz)** — present. This is Orange's only sub-1 GHz LTE band, and it is the single
  most important line item for a wrist antenna inside a concrete school.
- **B3 (1800)** — present. The national workhorse across all RO operators.
- **B1 (2100), B7 (2600), B8 (900)** — all present.
- **B28A (700)** — present but worthless here: in Romania 700 MHz is deployed as **5G NR n28**,
  not LTE B28. Do not count it.
- **B2, B5** — irrelevant in Romania.

So the LTE fit is complete for Romania on the bands that exist. The list is the strongest in the
candidate field alongside Canyon Zefir KW-49 and imoo Z3.

**VoLTE: UNKNOWN, and leaning negative. This is the real risk on this device.**

Every vendor surface was checked and **not one mentions VoLTE**:
- carneo.eu Platinum product page — no VoLTE.
- carneo.cz Platinum product page — no VoLTE.
- The full Czech user manual, text-extracted and searched — **zero** occurrences of "VoLTE".
  (The only string matches are the Czech word *zvolte*, "choose".)
- The CE Declaration of Conformity — no cellular standards at all, so no IMS/VoLTE evidence.
- The eMAG.ro and tonerpartner.ro listings — VoLTE "not specified".

Worse, the framing is exactly the ambiguous kind OPTIONS.md warns about: "SIM card support:
**3G/4G**" plus a WCDMA band list on a 2022 device. And the manual contains what reads like an
implicit admission that voice/alerting is expected to lean on a legacy layer:

> **"Tato funkce je důležitá, pokud jsou hodinky na místě se slabým 4G signálem, kdy je informace
> o slabé baterii nebo SOS varování odeslána přímo v textové zprávě na váš telefon, na což je
> postačující i slabý signál, případně 2G signál."**
>
> "This function is important if the watch is in a place with weak 4G signal, where the low
> battery or SOS warning is sent directly as a text message to your phone, for which even a weak
> signal, or 2G signal, is sufficient."
> — vendor manual (the SMS-alert setting), accessed 2026-08-19

**What this means in Romania.** 3G is gone nationally. If the watch has no VoLTE, or has VoLTE
but is not IMEI/TAC-provisioned by the operator, **every voice call — including the SOS call —
falls to 2G**. Orange and Digi still run 2G with no committed end date; Vodafone's own 2025
wording is that where there is no 2G, "making calls will become impossible". Practical
consequences:
1. **Prefer Orange or Digi**, so a VoLTE failure degrades to 2G voice rather than silence.
2. The **watch's data/location path is unaffected** — that runs over LTE regardless.
3. The failure would be **voice-only**, and would arrive without warning on the day an operator
   retires 2G.

`voice_fallback` is therefore **UNKNOWN**, most plausibly `2g-csfb`, and that must be treated as
**unverified** until tested on a live +40 SIM.

**Modem chipset: UNKNOWN.** Not published anywhere; the DoC names no radio module.

## Features & what can be disabled

The vendor manual documents the parent app's control set in detail. This is where the device is
genuinely better than the white-label field.

| Feature | Present | Can the parent app switch it off? |
|---|---|---|
| Voice calls (in/out) | yes | **Yes, partly** — "Odmítnout neznámé hovory" blocks all numbers not in the watch phonebook |
| Child dialling arbitrary numbers | yes, numeric keypad | **Yes** — "Funkce vytáčení" disables the keypad entirely. Manual notes this also prevents accidental 112 calls |
| SOS | yes, 3 numbers, sequential redial | Not disableable (correctly) |
| Camera / remote photo | yes | **No documented off switch** for the camera. Remote photo is parent-triggered and silent |
| Video call | yes | No documented off switch |
| Games | not listed on any spec sheet | UNKNOWN |
| Text / voice messages | yes (voice ≤15 s, text ≤30 chars) | **Yes** — "Zobrazení přijatých SMS" toggles SMS receipt |
| Class mode | yes — "Zákaz používání ve třídě" | Yes, time-window based |
| Pedometer / health | yes | **Yes** — off by default, and the manual warns it costs up to 30% battery |
| LBS cell positioning | yes | **Yes** — individually toggleable |
| GPS | yes | **Yes** — individually toggleable |
| Night network disconnect | yes, 22:00–06:00 | Yes |
| Remote power-off / restart / factory reset | yes | Parent-side only |
| Friends (watch-to-watch, bump to pair) | yes | No documented off switch |
| **Odposlech / covert remote listen** | **yes** | **No.** See below |

Contacts: the manual states **100** contacts in one section and **15** in another — an internal
inconsistency in CARNEO's own documentation. Treat as UNKNOWN.

Child-side power-off is deliberately hardened: **"Po zapnutí a spárování hodinek s aplikací nelze
jednoduše hodinky vypnout... Pouze v případě, že podržíte tlačítko pro zapnutí / vypnutí po dobu
cca 8 sekund"** ("Once switched on and paired with the app, the watch cannot simply be switched
off... only by holding the power button for about 8 seconds") — good for a 7-year-old, and it
also means a determined child can still defeat it.

Data budget, per the manual: **"Předpokládaný přenos dat při standardním používání je do 200MB
měsíčně... video hovoru, který má spotřebu dat 5MB / 1 minutu"** ("expected data transfer in
standard use is up to 200 MB per month... video call, which consumes 5 MB per minute").
The manual explicitly **advises against prepaid top-up SIMs**, because when credit runs out the
watch loses its connection to the app.

## Security & privacy

This is the section that should decide the purchase, and it is the weakest part of the device.

**1. The app is not CARNEO's. It is a rebadged Chinese white-label.**

The Android package is **`com.tgelec.carneoguard`**. The `com.tgelec.*` namespace is the code
namespace of **3G Electronics Co., Ltd.** (Shenzhen) — the SeTracker platform vendor. The ARES
2020 STALK paper hooks the class **`com.tgelec.securitysdk.config.SignUtils`** while reverse
engineering the SeTracker app itself. The contrast inside CARNEO's own catalogue is telling:
CARNEO's fitness app is `sk.trustsystem.carneo` — CARNEO's own namespace — while the child-safety
app sits in the ODM's.

*This inference is strong but it is an inference.* CARNEO Guard was not itself analysed by any
published research. **Written as unverified:** CARNEO Guard is a TGELEC/3G Electronics build, and
the findings below apply to that platform family, not to this exact binary.

**2. What has been found on that platform.**

Saatjohann, Ising, Krings & Schinzel, *STALK: Security Analysis of Smartwatches for Kids*,
ARES 2020, DOI 10.1145/3407023.3407037 — against 3G Electronics watches and the SeTracker /
SeTracker2 apps:

- **No authentication on the watch-to-backend channel.** "Instead of authentication, the API
  requires identification by the device ID. The ID of a smartwatch is derived from the
  International Mobile Equipment Identity (IMEI) number and consists of 10 digits."
- **Enumerable accounts with data leakage.** "By iterating the device ID, an attacker can scan
  the server for active IDs, email addresses, and user icons."
- **SQL injection almost everywhere.** "During our tests of the 3G API, we found that almost all
  parameters of the REST API were vulnerable to SQL injections... it is safe to assume that a
  motivated attacker can use this vulnerability to access other user accounts and track arbitrary
  watches."
- **Unsalted client-side MD5 passwords**, with the hash stored server-side.
- **A covert recording command and a covert call command on the `sendOrder` endpoint.** "One
  triggered a 15-second recording on the smartwatch... The watch gives no visual or audible
  indication that this recording is in progress. The other command allows specifying a phone
  number to call from the watch. This command causes the watch screen to turn off, and the
  specified number is called – a remote monitoring functionality. **The called number is not
  restricted to the watch's phone book.**"
- **Where the data lives.** "the communication server for the smartwatch is an Amazon AWS instance
  located in Frankfurt, Germany... Since smartwatches of different labels use the same server, we
  assume that this server is owned and maintained by 3G Electronic, located in Shenzhen, China."
- An admin console URL was reachable and its functionality enumerable **without credentials**.

This research is **2020 and must be read as dated** — 3G Electronics was cooperative and fixes
were developed. But the class of problem has not gone away: at **Black Hat, 7 August 2026**,
Vangelis Stykas and Felipe Solferini reported reviewing 70+ GPS trackers and finding tens of
millions of devices tracing to three Shenzhen backends (**YiQingTeng/Wonlex/SETracker,
NewGPS2012, SinoTrack**), with flaws including "a complete absence of authentication", covert
microphone activation and remote photo capture — and SETracker still exploitable on 2026-08-06
after being declared fixed. **3G Electronics/TGELEC was not named among those three**, so this
2026 work does **not** directly implicate CARNEO Guard. It establishes the base rate, not the
finding.

**3. The covert remote-listen feature is real, documented, sold as a feature, and cannot be
locked.**

CARNEO's own manual, verbatim:

> **"Odposlech: Zadejte do prázdného pole své telefonní číslo a potvrďte OK. Na vámi zadané číslo
> hodinky okamžitě zavolají. Po zvednutí hovoru na telefonu bude přenášen pouze zvuk z hodinek,
> díky čemuž je můžete odposlouchávat. Hodinky se při odposlechu tváří jako vypnuté bez jakékoliv
> aktivity."**
>
> "Remote listening: Enter your phone number in the empty field and confirm OK. The watch will
> immediately call the number you entered. After answering the call on the phone, only the audio
> from the watch will be transmitted, so you can listen in on it. **During remote listening the
> watch pretends to be switched off, with no activity whatsoever.**"
> — vendor manual, accessed 2026-08-19

That is a verbatim behavioural match for STALK's covert-call finding on the same platform. Note
also that **remote photo capture is equally silent** — itmix.cz: *"Hodinky poté automaticky
vytvoří fotografii, aniž by se o tom dítě dozvědělo"* ("The watch then automatically takes a
photograph without the child finding out about it").

**There is no documented way for the parent to disable either.** They are parent-side features by
design, which means the security question is not "can I turn it off" but **"who else can reach
the endpoint that triggers it"** — and on this platform family that is exactly the question ARES
2020 answered badly.

One mitigating oddity, and it cuts both ways: the manual states these features appear only after
the platform checks the local law — *"prověřováním legislativy země v níž se hodinky nacházejí"*
("checking the legislation of the country in which the watch is located"). Covert audio recording
of third parties is legally fraught across the EU. Whether the feature is exposed or suppressed in
Romania is **UNKNOWN** and should be checked in week one.

**4. Data hosting jurisdiction: UNKNOWN, and CARNEO does not tell you.**

- CARNEO's published privacy policy (carneo.eu and carneo.sk/ochrana-osobnych-udajov) is a
  **CARNEO FIT policy**. It names the controller as **TRUST System s.r.o., Priemyselná 8/E,
  917 01 Trnava, Slovakia**, states *"The CARNEO FIT App does not transfer Personal Data outside
  the European Union to third countries"* — and **does not mention CARNEO Guard or the GuardKid
  watches anywhere**. It even states the sites and apps *"are not intended for people under the
  age of 16"*, which is incoherent for a company selling child trackers.
- **There is therefore no published statement of where a Romanian child's location history is
  stored, who processes it, or for how long.** `data_region: UNKNOWN`. The ARES 2020 finding
  (AWS Frankfurt, operated from Shenzhen) is the best available guess for the platform family
  and is explicitly **unverified** for this product.
- Apple's App Privacy card for the RO listing declares **Precise Location, Email Address and
  User ID as linked to the user**; Phone Number as not linked. That is a disclosure of collection,
  not of jurisdiction.
- Minor but worth noting: the Trnava address on the 2022 DoC and manual (**Jiráskova 19, 917 02**)
  differs from the one in the privacy policy (**Priemyselná 8/E, 917 01**). Same company number
  (IČO 36249343); presumably a relocation.

**5. No CVE.** No CVE or advisory naming CARNEO, GuardKid, or `com.tgelec.carneoguard` was found.
Absence of a CVE for a device on a white-label platform means nobody has looked, not that it is
clean.

## Reality check

- **"4 days battery"** means 4 days in power-save mode (position once an hour) at full 4G signal,
  per the vendor's own manual. At the 10-minute interval a parent actually wants, the *manual*
  says 1–3 days and the only real test says **~30 hours** — with night-time network disconnect
  already switched on. Plan to charge every night.
- **"Accuracy up to 5 metres"** is the GPS best case outdoors. The same manual's stated worst
  cases are **300 m** on WiFi and **kilometres** on cell-tower LBS, and it switches between them
  silently. Indoors at school you are relying on WiFi positioning working in that specific
  building.
- **"4G / any operator"** is true about the SIM slot and probably true about the bands. It says
  nothing about VoLTE, which is what decides whether calls work once 2G goes.
- **"IP67"** — see below. It is not a swimming rating and CARNEO says so plainly.
- **"EUR 155, above the newer ULTRA"** — an artefact of carneo.eu's stale pan-EU list. The real
  vendor price in CZ is 2,150 CZK (~EUR 85) vs 3,290 CZK (~EUR 130) for the ULTRA, both in stock.
  **The end-of-life pricing signal in the brief does not hold up.** The genuine age signals are
  different and milder: a 2022 CE date, Android 8.1, a 240×240 1.44" screen, and no GNSS
  constellation beyond bare GPS.
- **"CARNEO, a European brand"** — the hardware and, more importantly, the *cloud and app* are
  a Shenzhen white-label. TRUST System s.r.o. is the EU importer and the entity on the DoC. That
  is worth something legally and nothing technically.

**On IP67 for a 7-year-old.** IP67 is dust-tight plus 30 minutes at 1 m depth in *still, cold,
fresh* water, under lab conditions, on a *new* seal. It is not a swimming rating and it degrades.
CARNEO is unusually explicit, which is to its credit:

> **"Nepoužívejte hodinky při koupání, sprchování, teplé lázni. Tlaková respektive teplá voda se
> může dostat do těla hodinek... Odolnost vůči stříkající vodě a prachu není trvalým stavem a v
> důsledku běžného opotřebení se může odolnost snížit. Na škody způsobené kapalinou se nevztahuje
> záruka... Zařízení není určeno pro používání během vodních sportů, plavání, potápění, sprchování
> nebo saunování."**
>
> "Do not use the watch when bathing, showering, or in a hot bath. Pressurised or hot water can
> get into the body of the watch... Resistance to splashing water and dust is not a permanent
> state and may decrease through normal wear. **Damage caused by liquid is not covered by the
> warranty**... The device is not intended for use during water sports, swimming, diving,
> showering or sauna."

Translated for a 7-year-old: **rain, handwashing, spilled juice, puddles — fine. Bath, shower,
pool, sea, water fights — take it off.** Two aggravating factors specific to this model. First,
the seal depends on a **user-removable plastic SIM flap** that the manual says needs real force to
open and must be pressed firmly back — a child-scale failure point that will be opened at least
once during setup. Second, **liquid damage is explicitly excluded from warranty**, so an IP67
failure is a total loss. IP68 devices in this field (TCL MT48 at IP68+2ATM, LAMAX WatchY4) are
meaningfully better for this age, and it is a fair reason to prefer them.

## What users say

> **SUPERSEDED 2026-08-19 — read the Scrutiny pass §2 instead.** This section's conclusion of
> "effectively two independent sources" was wrong. Roughly **400** owner reviews exist on Alza.cz,
> Heureka.cz and Google Play; they were missed because Alza is Cloudflare-gated and Heureka 403s to
> plain fetches. The section is left in place unaltered for audit. Its verdict does not survive.

The evidence base is thin, and none of it is Romanian.

**Works:**

- Positioning outdoors, one report. **"Během našeho testování většinou poloha hodinek zobrazená
  v aplikaci odpovídala realitě"** — "During our testing the watch's position shown in the app
  mostly matched reality." itmix.cz, Czechia, updated 2025-04-14.
  <https://www.itmix.cz/recenze/chytre-hodinky/carneo-guardkid-4g-platinum/>
- Overall, one review scores it **4.1/5**. guidelee.hu, Hungary, 2025-05-12 — but this is the
  itmix test republished, **not an independent report**.
- carneo.cz shows **5.0/5 from 5 reviews** on the blue variant. Unverifiable, vendor-hosted,
  undated, and a 5-review sample. Do not weight it.

**Fails:**

- Battery under realistic use. **"V popsaném případě jsme hodinky nabíjeli po zhruba 30 hodinách"**
  — "In the described case we charged the watch after about 30 hours." itmix.cz, CZ, 2025-04-14.
  **One report** (the Hungarian repeat is the same test).
- Indoor positioning. **"Pouze v několika případech (při umístění hodinek v budově) byla určena
  poloha o několik desítek metrů dál"** — "Only in a few cases (when the watch was placed inside a
  building) was the position determined several tens of metres away." itmix.cz, CZ, 2025-04-14.
- Display outdoors, call volume. Both reviews list *"displej špatně čitelný na denním světle"* /
  Hungarian equivalent — "display poorly readable in daylight" — and no in-call speaker volume
  control. Same single test.
- **The companion app is rated 2.2/5 across 1,071 ratings** on Google Play (via mirror,
  accessed 2026-08-19). This is the single largest body of user sentiment about this product and
  it is bad. The individual reviews could not be read here (Play would not render), so the
  *reasons* are **UNKNOWN**. This is the biggest unclosed gap in this workup and it is worth
  closing before buying.
- **Zero Romanian reviews exist** on eMAG for any of the three colour SKUs. The only Romanian
  text found is an unanswered pre-sales question (Mihnea, 2025-06-21, quoted above).

**Number of independent sources overall: effectively two** (one Czech hands-on test, syndicated
once into Hungarian; plus an aggregate app rating). For a device being considered for a
7-year-old's safety, that is not much.

## Sources

| URL | Accessed | What it established |
|---|---|---|
| <https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-4g-platinum-black/> | 2026-08-19 | Vendor-primary spec: GSM B2/B3/B5/B8, WCDMA B1/B2/B5/B8, **FDD-LTE B1 B2 B3 B5 B7 B8 B20 B28A**; 1000 mAh / "4 days" / 96 h standby; nanoSIM; IP67; GPS+LBS+WiFi; 1.44" 240×240; 512 MB+4 GB; 52 g; EUR 155. **No VoLTE mention.** |
| <https://www.carneo.cz/smart-hodinky-carneo-guardkidplus-4g-platinum-blue> | 2026-08-19 | Same band list on the CZ site; "odposlech" listed as a feature; DoC link; 2,690 CZK blue; 5.0/5 from 5 vendor-hosted reviews |
| <https://www.carneo.cz/hodinky-pro-deti/> | 2026-08-19 | **Platinum still "Skladem (>5 ks)" at 2,150 CZK (black/pink)** vs ULTRA 2nd gen 3,290 CZK — refutes the inverted-pricing EOL premise |
| <https://www.carneo.cz/user/documents/upload/podpora/navody/CARNEO-GuardKid+4G_PL-manual-CZ.pdf> | 2026-08-19 | **Primary manual.** Mode-by-mode battery figures; positioning fallback chain and accuracy ranges; covert `Odposlech` description; country-legislation feature gating; full list of parent-disableable features; nanoSIM + PIN-off setup; 200 MB/month; IP67 water warnings; DoC statement naming TRUST system s.r.o., IČ 36249343, Jiráskova 19, 91702 Trnava. **No VoLTE anywhere in the document.** |
| <https://www.carneo.cz/user/documents/upload/podpora/vyhlaseni-o-zhode/carneo_GuardKid-plus_4G_Platinum_prehlasenie-o-zhode-cz.pdf> | 2026-08-19 | **EU Declaration of Conformity**, model **LD-01**, dated **7.11.2022**, signed Andrej Kopáč. Standards list contains **ETSI EN 300 328 only** for radio — **no GSM/UMTS/LTE/GNSS harmonised standards**, so the DoC does not substantiate any cellular band |
| <https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-4g-ultra-black/> | 2026-08-19 | ULTRA publishes the **identical** band list, 1000 mAh, nanoSIM, EUR 129, no VoLTE — **resolves OPTIONS.md contradiction #4** (ULTRA 2nd-gen bands do match the 1st gen, per vendor) |
| <https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-mini-black/> | 2026-08-19 | MINI shows "2G/3G" and **no LTE band list** — proves CARNEO's spec tables are model-specific, not boilerplate |
| <https://www.carneo.sk/ochrana-osobnych-udajov> | 2026-08-19 | Privacy policy covers **CARNEO FIT only**; no mention of CARNEO Guard or GuardKid; controller TRUST System s.r.o., Priemyselná 8/E, 917 01 Trnava; no storage location, no processors, no retention period → `data_region: UNKNOWN` |
| <https://www.itmix.cz/recenze/chytre-hodinky/carneo-guardkid-4g-platinum/> | 2026-08-19 | **CZ, updated 2025-04-14.** The only hands-on test found: **~30 h observed** at 10-min interval with stated conditions; indoor GPS error of tens of metres; silent remote photo; negatives |
| <https://www.guidelee.hu/teszt/okosora/carneo-guardkid-4g-platinum/> | 2026-08-19 | **HU, 2025-05-12.** "körülbelül 30 óra" — same 30 h under identical conditions; **a republication of the itmix test, not independent corroboration**; 4.1/5 |
| <https://www.emag.ro/smartwatch-pentru-copii-carneo-guardkid-4g-platinum-negru-8588007861579/pd/DSX6NVYBM/> | 2026-08-19 | RO retail: 565.52 RON, in stock, seller **HomeMode (marketplace, not eMAG 1P)**, **14-day return**, **24-month OUG 140/2021 warranty**, Nano SIM, IP67, Android 8.1. **Zero customer reviews.** Spec table lists no bands and no VoLTE |
| <https://www.emag.ro/smartwatch-pentru-copii-carneo-guardkid-4g-platinum-albastru-8588007861593/pd/DLX6NVYBM/> | 2026-08-19 | Blue at 707.65 RON, in stock, HomeMode. **Only Romanian user text found:** Q&A from Mihnea, 2025-06-21, unanswered |
| <https://www.tonerpartner.ro/carneo-kids-gps-watch-guardkid-4g-platinum-negru-134741ro/> | 2026-08-19 | RO storefront, 604.48 RON, 15 units in stock — but the legal entity is **Ledum Kamara SK s.r.o., Bratislava**, i.e. **not** a Romanian warranty entity |
| <https://apps.apple.com/ro/app/carneo-guard/id1552178771> | 2026-08-19 | **CARNEO Guard is live in the Romanian Apple storefront**; seller TRUST System s.r.o.; v2.9, updated 27 Jun (2026); iOS 15.6+; **Română among 45 languages**; App Privacy: Precise Location + Email + User ID linked to user |
| <https://apkcombo.com/carneo-guard/com.tgelec.carneoguard/> | 2026-08-19 | Play metadata via mirror: package **com.tgelec.carneoguard**, developer TRUST System spol. s r.o., **v1.3.0 2026-06-22**, **100,000+ installs**, **2.2/5 from 1,071 ratings**, Android 5.0+. Establishes both that the app is actively maintained and that it is poorly rated |
| <https://play.google.com/store/apps/details?id=com.tgelec.carneoguard> | 2026-08-19 | Package confirmed to exist on Google Play. **Listing body would not render** (with `&gl=RO`, `&hl=ro` and plain) — RO storefront availability, Data safety section and review text all remain **UNKNOWN** |
| <https://www.hb.fh-muenster.de/opus4/frontdoor/deliver/index/docId/12354/file/Saatjohann_et_al-2020-STALK.pdf> | 2026-08-19 | **STALK**, Saatjohann/Ising/Krings/Schinzel, **ARES 2020**, DOI 10.1145/3407023.3407037. Establishes the `com.tgelec.*` namespace as 3G Electronics/SeTracker code; no watch-to-backend auth; IMEI-derived enumerable device IDs leaking emails; SQLi in "almost all" REST parameters; unsalted MD5 passwords; `sendOrder` covert 15-s recording and covert screen-off call; AWS Frankfurt server "owned and maintained by 3G Electronic, located in Shenzhen, China"; credential-free admin console. **Dated 2020 — read as historic base rate, not a current finding about CARNEO Guard** |
| <https://latestincyber.substack.com/p/that-cheap-smartwatch-it-might-be> | 2026-08-19 | **2026-08-07**, reporting Stykas & Solferini at Black Hat: 70+ devices, three Shenzhen backends (**YiQingTeng/Wonlex/SETracker, NewGPS2012, SinoTrack**), covert mic and camera activation, "backend systems that failed to properly authenticate requests at all". **TGELEC/3G Electronics not among the three named** — context, not a direct finding |
| <https://www.manualslib.com/manual/3294250/Carneo-Guard-Kid-Plus-4g-Platinum.html> | 2026-08-19 | English rendering of the water/warranty warnings; confirms no band table and no VoLTE mention in the EN manual either |

### Open items this workup could not close

> **PARTLY CLOSED 2026-08-19 by the Scrutiny pass.** Items 1 (Play RO storefront + Data safety) and
> 2 (why the app is badly rated) are now closed; item 4 (band-list independence) got *worse*, not
> better. Items 3, 5 and 6 remain open. See the Scrutiny pass's own open-items list at the end.

1. **Google Play RO storefront availability and the Data safety card** — Play would not render.
   This is step 1 of the pre-purchase test and remains the single decisive unknown.
2. **Why the app is rated 2.2/5 by 1,071 users.** The aggregate is confirmed; the reasons are not.
3. **VoLTE.** No vendor source states it either way. Only a live +40 SIM test settles it.
4. **Independent confirmation of the LTE band list.** The CE/RED DoC does not cover cellular at
   all. Options: ask TRUST System for the radio test report, or check the IMEI/TAC against a
   band database once purchased.
5. **Whether the `odposlech` feature is exposed in Romania**, given the documented
   country-legislation gate.
6. **Firmware update cadence.** No firmware downloads or changelog are published on carneo.cz
   support. Whether the *watch* (as opposed to the app) still receives firmware is UNKNOWN.

---

## Scrutiny pass (2026-08-19)

A second pass on the assumption that the first one under-searched. It did. The first pass found
**two** independent sources; this pass found roughly **400 owner reviews** in Czech and Slovak
that the first pass never opened, because Alza.cz sits behind Cloudflare and Heureka.cz returns
403 to plain fetches — both render normally in a real browser. What those reviews say changes the
picture materially, and **not in the direction the first pass leaned**. The first pass's headline
risk was the platform/privacy story. The actual headline risk is that **the primary function does
not work reliably**.

Three factual corrections to the existing document are recorded below and have been applied to
the YAML. They are called out rather than silently fixed.

### 1. VoLTE — still UNKNOWN, but the search is now auditable, and there is one positive datapoint

**What was checked and found empty.** The string "VoLTE" (any case) does not occur in:

- the full Czech user manual, re-downloaded and text-extracted here (`grep -i volte` → 0 hits;
  `grep -i ims` → 0 hits; the only network settings the manual documents are **APN**);
- the CE/RED Declaration of Conformity;
- **four** CARNEO product pages fetched and grepped in raw HTML — Platinum CZ, Platinum EU,
  **ULTRA 2nd gen** and **Buddy**. Every apparent hit resolved to the Czech word *zvolte*
  ("choose") inside Shoptet e-commerce JavaScript. **The two newest models in the range do not
  claim VoLTE either**, which weakens the "it's just an old spec sheet" explanation;
- the eMAG.ro and tonerpartner.ro listings.

Queries run that returned nothing usable, so the negative is auditable: `Carneo GuardKid VoLTE
volání nefunguje 3G vypnuto operátor`; `Carneo GuardKid 4G "VoLTE" hodinky podpora`; `"Carneo"
hodinky "2G" volání "nefunguje" OR "vypnuli" 3G síť T-Mobile O2 Vodafone dítě`; `ceas copii 4G
Romania 3G inchis apeluri nu functioneaza VoLTE smartwatch`. Reddit post search and Reddit
**comment** search (`type=comment`) for `Carneo GuardKid` and `"GuardKid"` returned **zero**
relevant results — there is no Reddit corpus on this product at all.

**The one positive datapoint.** A verified-purchase owner review on Heureka.cz opens its pros
list with:

> **"volani (volte)"**
>
> "calling (VoLTE)"
> — PZ, Heureka.cz, verified purchase, added **30 September 2022**, bought at MALL by Allegro,
> rated 60%. <https://chytre-hodinky.heureka.cz/carneo-guardkid-plus-4g-platinum/>

**How much to believe it.** Handle with care in both directions. Czech *volte* is the imperative
of *volit* (to choose/vote), not of *volat* (to call), so "volání (volte)" would be nonsense as
plain Czech — the natural reading is "calling (VoLTE)". The same reviewer is technically literate
elsewhere in the same review, distinguishing a GPS fix from LBS/WiFi and complaining the app is
*"nedotažená/odflaknutá"*. Against it: one person, four years old, no method, and Czech 2G was
(and is) still running, so it does not prove voice was actually riding LTE.

**Net position.** `volte: UNKNOWN` stands. But the balance has shifted slightly positive rather
than "leaning negative" as the first pass had it, and the practical advice is unchanged and now
better founded: **prefer Orange or Digi in Romania**, so that a VoLTE failure degrades to 2G voice
rather than to silence. Note also a supporting negative: comparable kids-watch vendors in the same
CZ/SK retail channel **do** advertise VoLTE explicitly when they have it (LAMAX BCool is listed as
"eSIM 4G VoLTE"), so CARNEO's silence is a silence in a market where the term is used.

One more thing the manual does establish, and it matters for Romania: the watch has a
**Settings → Mobilní síť → Název přístupového bodu (APN)** menu, and the manual's own
troubleshooting says that if the watch stays offline after 30 minutes you must set the APN by
hand. A Romanian SIM will very likely need this. There is no country lock described.

### 2. Real owner reviews at volume — the first pass's "effectively two sources" was off by ~400

**Alza.cz** — pooled across the three Platinum colours (all three pages report the same totals,
so this is one pool, not three): **3.7/5 from 328 ratings, 161 written reviews**, spanning
2023-05 to **2026-08-17**. **Heureka.cz** — **86%, 186 ratings, 230 reviews**, distribution
5★ 137 / 4★ 13 / 3★ 18 / 2★ 4 / 1★ 14. **Google Play** — **2.7/5 from 1,110 reviews**, read
directly rather than via a mirror.

**Astroturf and pooling audit.** What was discounted: (a) Heureka labels only **93 of 230**
reviews "Verified", and **70** are auto-translated imports from Heureka.sk — the 86% headline is
not 230 independent verified owners; (b) carneo.cz's own on-site reviews (5.0/5 from 5) include
one praising *"dárek v podobě SIMkarty"* (a gifted SIM) and *"monitoring spánku"* on a model
whose own spec table has no sleep tracking — incentivised and inaccurate, discarded; (c)
**recenzopedia.cz** and **arecenze.cz** are affiliate content — recenzopedia states battery
"2–3 days" in the body and "up to 4 days" in its own FAQ, has 15+ shopping links, an unnamed
first-person "tester" and stock photography. Discarded; (d) **carneo.cz's own blog** publishes a
"Test dětských GPS hodinek 2026" bylined *"Redakce CARNEO"* which recommends three CARNEO models
and compares them to no competitor. Discarded as vendor marketing dressed as a test. What was
kept: Alza verified purchases, Heureka verified purchases, and Google Play reviews, all of which
carry names and dates.

**The dominant finding, by a wide margin: positioning does not work.** This is not a nuance about
indoor accuracy. Verbatim, oldest to newest:

> **"na tomto kusu nam nefunguje GPS lokalizace, pouze LBS/WiFi. Testovano mnohokrat i na volnem
> prostranstvi po dlouhy cas - vzdy pouze LBS/WiFi, GPS se nikdy nechytla."**
> "on this unit GPS positioning does not work, only LBS/WiFi. Tested many times, including in the
> open for a long time — always only LBS/WiFi, GPS never locked on."
> — PZ, Heureka, verified purchase, 2022-09-30

> **"GPS lokace vůbec nefunguje. Ukazuje mi klidně druhou stranu Prahy a ani po opakované
> aktualizaci polohy se nechytne."**
> "GPS location does not work at all. It readily shows me the other side of Prague and does not
> lock on even after repeatedly refreshing the position."
> — Zákazník, Praha, Alza verified purchase, 2023-09-28

> **"Gps naprosto NEPOUŽITELNÁ. Doma se zjevuje v sousední ulici cca, 100m. … Na zahradě cca 70m
> od domu se lokalizuje 13km!!! daleko."**
> "GPS absolutely UNUSABLE. At home it appears in the next street, about 100 m. … In the garden
> about 70 m from the house it locates 13 km!!! away."
> — Markéta, Netvořice, Alza verified purchase, 2025-06-29

> **"Hodinky podla GPS sú 300km odomna, aj keď ich mam na stole."**
> "According to GPS the watch is 300 km from me, even though I have it on my desk."
> — Marian Petro, Google Play, 2025-02-17

> **"Jednou mi dokonce ukázala, že se syn nachází v Hongkongu a při tom neopustil ČR. Běžně
> ukazuje polohu k 'nejbližší wifi' což je klidně stovky metrů daleko … A nelze přenastavit na
> přesnější GPS vyhledávání."**
> "Once it even showed me that my son was in Hong Kong when he had not left the Czech Republic.
> It routinely shows the position of the 'nearest wifi', which can easily be hundreds of metres
> away … And it cannot be reconfigured for more accurate GPS searching."
> — Anonymous, Alza verified purchase, 2025-09-03 (owner of one year)

> **"Vůbec nám nefunguje GPS lokátor. Venku se zobrazuje pouze poloha LBS (ob 2 vesnice jinde)
> nebo Wi-Fi (což nevím jaké, protože ukazuje ještě hůř než LBS, cca 15-20 km od skutečné polohy)."**
> "The GPS locator does not work for us at all. Outdoors it shows only the LBS position (two
> villages away) or Wi-Fi (which I don't know what it is, because it shows even worse than LBS,
> about 15-20 km from the real position)."
> — Michaela, Plzeň, Alza verified purchase, 2025-12-27

> **"Terrible GPS. I set a boundary that if my daughter crosses, I will receive a notification.
> I took the watch, crossed the boundary from 3 villages (min. 10 km) and only then did I receive
> a notification that my daughter crossed the boundary"**
> — Veronika, Bašť, Alza verified purchase, 2025-05-19 (Alza's own English rendering)

That last one is the important one for a school-run use case: **the geofence fires ~10 km late**,
which means SafeZone alerts are decorative.

**And there is a fix the vendor never documents.** Two independent owners report the watch ships
with an **Asian AGPS server** selected, and that changing it transforms performance:

> **"Chyba byla v nastaveni hodinek. V mobilnich sitich zmenit parametr agps. Je potreba zmenit z
> asijskeho systemu vyhledavani na moznost gogle. Pak uz je lokalizace o 100% lepsi a jsem
> spokojen. To bude asi duvod nekterych spatnych recenzi."**
> "The fault was in the watch settings. In mobile networks, change the AGPS parameter. It needs to
> be changed from the Asian search system to the Google option. Then the location is 100% better
> and I am satisfied. That is probably the reason for some of the bad reviews."
> — Tomáš, Zbýšov, Alza verified purchase, **2026-01-28**, 10 people found it useful

> **"However, it is necessary to set the parameter in mobile networks to non-Chinese, as someone
> has already mentioned in the reviews."**
> — Dalibor, Kojetín, Alza verified purchase, **2026-06-22**

This is corroborated from an unexpected direction: the CARNEO GUARD privacy policy (§5 below)
names **AutoNavi** — Alibaba's Amap — as the app's location-service provider. A Chinese AGPS/
assistance path in a device sold in Central Europe is a coherent explanation for the whole
complaint pattern. **A third owner reports the opposite lever works too** — turning WiFi
positioning *off* to force a satellite fix:

> **"Po precitani navodu pisu vypnut wifi na hodinach lebo potom je urcovanie polohy nepresne az
> nemozne. Vypol som wifi, hodiny polozil vonku a po chvilke na meter presne hodiny lokalizoval gps."**
> "After reading the manual they write to turn off wifi on the watch because otherwise position
> determination is inaccurate or impossible. I turned off wifi, put the watch outside, and after a
> while the watch located to the metre by gps."
> — Peter Plaskura, Google Play, 2025-09-15, 5 found useful

**This inverts the first pass's reading.** The first pass concluded WiFi positioning "is the right
architecture for a school interior". In practice it is the component owners disable to make the
device work. Two of the three positioning technologies are actively harmful in the field.

**Other recurring failures, each from more than one owner:**

- **The watch reboots continuously without an active data SIM**, and this is nowhere on the box.
  *"Nejvíc mě ale překvapila nutnost mít datovou SIM, o které se nikde nic nepíše … Pokud data
  nejsou, hodinky se často restartují a jsou prakticky nepoužitelné."* ("What surprised me most was
  the necessity of a data SIM, which is written nowhere … If there is no data, the watch often
  restarts and is practically unusable.") — Jiří, Týn nad Vltavou, Alza, 2024-11-21. **Alza's
  supplier confirmed this in an official reply**, 2025-02-19: *"Samovolné restartování hodinek může
  být způsobeno tím, že na SIM kartě nejsou aktivovaná nebo dostupná mobilní data."*
- **The SOS button false-triggers and cannot be disabled.** *"Nemožnost vypnutí SOS tlačítka - když
  je dítě dá do batohu, pořád to vytáčí SOS volání"* ("Impossible to switch off the SOS button —
  when the child puts it in a backpack, it keeps dialling SOS") — Jiří, 2024-11-21;
  *"posielajú SOS samé od seba"* ("they send SOS by themselves") — Rastislav, Nové Zámky, 2025-08-08;
  *"SOS tlačítko je umístěno tak, že je lehké ho aktivovat omylem. Typický příklad, syn je ve škole,
  mě přijde několikrát za sebou SOS varovaní"* — Petr, Tišnov, 2025-01-25;
  *"SOS tlacitko hned vedle zapinaciho, musel jsem vypnout posilani SMS, dite si to casto plete"* —
  Heureka verified purchase, 2022-03-13. The manual says the watch **re-dials all three SOS numbers
  repeatedly** if the call is not answered. For a 7-year-old with a school bag, this is a
  cry-wolf generator that will train the parent to ignore SOS alerts.
- **The parent app blocks login, and there is a lockout.** *"nejde a píše že žiadne internetové
  pripojenie. ale mne internet ide"* ("it doesn't work and says no internet connection, but my
  internet works") — Palo Boto, Google Play, 2025-12-11 (4 found useful), same complaint from
  Monika Blašková 2025-09-02 and Evka Tarhovická 2026-03-07. And:
  *"Kerý idiot môže nastaviť funkciu prihlasovania na 10hod čakanie, pokial app dementne odmieta
  heslo opakovane??? Ako mám dieťa skontrolovať? Po desiatych hodinách?"* ("What idiot sets the
  login function to a 10-hour wait, when the app idiotically rejects the password repeatedly??? How
  am I supposed to check on my child? After ten hours?") — Peter Tomaška, Google Play, 2025-07-26.
  **A ten-hour lockout on a child-safety app is a safety defect, not a usability one.**
- **The vendor's answer to the connectivity complaints is that there is no problem.** Owner:
  *"urobte s tou aplikáciou niečo, lebo ten problem s pripojením tu má skoro každý"* ("do something
  with that app, because almost everyone here has that connection problem") — Monika Furmaniková,
  2026-06-05. TRUST System s.r.o., replying 2026-06-29: *"Dobrý deň, aplikácia pracuje správne."*
  ("Good day, the application works correctly.")
- **Remote listen frequently does nothing.** *"Ked kliknete na odposluch, zakaždým musite zadať
  telefonne cislo … ale VÔBEC NIČ SA NESTANE. Čiže cely odposluch je na dve veci"* ("When you click
  on eavesdrop you must enter the phone number every time … but ABSOLUTELY NOTHING HAPPENS. So the
  whole eavesdrop is useless") — Ja Šve, Google Play, 2025-07-17; *"odposluch sa nedá spustit"* —
  Jan Pavuk, 2025-05-10; *"Vzdálený odposlech jsem nenašla v aplikaci"* — Heureka, 2022-04-21.
- **In-call volume is too low on the watch side**, i.e. the child cannot hear the parent.
  *"weak speaker, I have to shout into the phone so my son can hear me, even though the volume is at
  max"* — Tomas, Pašovice, Alza, 2026-08-17; a Heureka Q&A asks the same on 2025-02-28. The manual
  and app expose no in-call volume control.
- **The SIM PIN re-locks.** *"how do I prevent the SIM card from being blocked in the watch? It
  happens several times a day. I can't call my son until he enters the PIN"* — Heureka Q&A,
  2024-10-15; *"Skoro každý deň treba znovu a znovu zadať PIN na SIM kartu"* — Janči P., Play,
  2025-05-22.
- **The app is machine-translated and partly untranslated.** *"their app is machine translated, so
  some texts are not translated"*, and *"support is useless"* — Heureka Q&A, 2024-12-18;
  *"aplikace je typicky čínská a neovladatelná"* — Alza, 2024-11-21; *"divný překlad z čínštiny -
  nedává moc smysl ani v angličtině"* — Alza, 2024-08-25.
- **It is too big for the target child.** Repeated across all three sites: *"The watch is terribly
  big for a child's hand. My husband tried it on and it's the size for an adult man"* — Veronika,
  Bašť, 2025-05-19; *"Too big for a 6 year old"* — Václav, Brno, 2025-08-05. Most pointedly, a Czech
  parent reviewing it **for a 7-year-old daughter** rejected it on size and bought a TCL MOVETIME
  Family Watch 40 instead (maminkoutek.cz, 2024-06-12). At **41 × 47 × 16 mm and 52 g** this is a
  real constraint for the buyer's use case.

**What genuinely works, from the same pool** — and it is consistent: **voice calling**. Even the
angriest reviewers ring-fence it. *"What does work, fortunately, is calling"* (Michal, Hýskov,
2025-08-02); *"jedine čo zatiaľ funguje tak volanie"* (Jan Pavuk, 2025-05-10); *"Apart from
location, the watch is usable for a child … it's great"* (Václav, Brno, 2025-08-05). Call audio
quality on the *parent* side is repeatedly praised. Contact whitelisting and keypad blocking are
repeatedly confirmed working — with one dissent (Lenka, Hrádek nad Nisou, 2025-11-06: *"We set it
up so that no one in our contacts can call our daughter, but she can still call other people's
numbers"*).

#### Controlled Play read (2026-08-19)

One browser session, one tab, six reads minutes apart, `play.google.com/store/apps/details?id=com.tgelec.carneoguard&hl=XX&gl=YY`, all on 2026-08-19. Histogram counts are the page's own per-bar aria-labels; each average was arithmetic-checked against its own histogram (all consistent).

| Storefront (hl/gl) | Header avg / count | Ratings-section avg / count | Histogram 5/4/3/2/1 (sum) | Written reviews visible | Page's "Updated on" |
|---|---|---|---|---|---|
| en / US | 2.2 / 1.11K | 2.2 / 1.09K (Phone tab) | 182 / 0 / 182 / 182 / 546 (1,092) | 3 (2023-2025, EN + CZ authors) | Jun 13, 2026 |
| cs / CZ | 3,1 / 1,11 tis. | 3,1 | 359 / 148 / 126 / 104 / 349 (1,086) | >=3 | 13. 6. 2026 |
| sk / SK | 2,7 / 1,11 tis. | 2,7 | 268 / 149 / 99 / 119 / 457 (1,092) | 3 (dated Jun-Jul 2026) | 13. 6. 2026 |
| ro / RO | **none** - badge row shows only "100 K+ / Descarcari" | **none** - the "Evaluari si recenzii" heading renders with an EMPTY block: no average, no count, no histogram | none | 0 | 13 iun. 2026 |
| de / DE (page served in EN) | none - only downloads | 3.1 / **13** | 6 / 1 / 0 / 0 / 6 (13) | >=1 | June 13, 2026 |
| en / RO (control) | none | none | none | 0 | - |

What the read establishes:

1. **There is no single Google Play rating for this app.** The header *count* is global and identical
   everywhere it renders (~1,110); the *average* and the histogram are storefront-country-dependent
   (`gl`, not `hl` - the `hl=en&gl=RO` control is as blank as `hl=ro&gl=RO`). Served averages on
   2026-08-19: **2.2 (US/default), 2.7 (SK), 3.1 (CZ), 3.1 (DE, n=13), nothing (RO)**.
2. **The histograms cannot all be literal country subsets** - CZ sums to 1,086 and SK to 1,092
   against a global pool of ~1,110, which cannot both be true - so the large-market views are
   locale-weighted/quantised renderings of one pool. The US view is visibly quantised
   (5:4:3:2:1 = 1:0:1:1:3 exactly). DE, by contrast, honestly renders a 13-rating country subset.
3. **The apkcombo "2.2/1,071" was NOT stale** - 2.2 is the live default-storefront (en-US) average;
   the mirror had simply scraped the default view at an earlier count. The earlier correction note
   in this file's frontmatter was wrong to call it stale.
4. **The RO 5.00/1,106, 100%-five-star, zero-written-reviews reading (recorded in
   `garett-kids-4g.md`) did NOT reproduce.** The RO storefront today shows the *stronger* form of
   the same country-quantisation artefact: the entire ratings block is suppressed - empty section,
   no header badge - while the app remains installable ("Aplicatia este disponibila pentru
   dispozitivul tau"). Zero-or-near-zero RO ratings render either as collapsed/degenerate buckets
   (the earlier 5.00 read) or as full omission (today). Either way it is a rendering artefact of a
   near-empty RO pool, not vendor astroturf and not a usable figure.

**Settled number: 2.7/5 from ~1,110 ratings (Google Play, SK storefront `hl=sk&gl=SK`, read
2026-08-19).** Caveat that must travel with it: Play serves country-dependent averages over one
global count - 2.2 on the default/US storefront, 3.1 on CZ and DE - and the Romanian storefront a
Romanian buyer actually sees shows **no rating at all**. SK is chosen as the headline because it is
the vendor's home market, an actually-served figure (not an average of averages), and the midpoint
of the served range. Every locale that renders at all agrees the app is rated poor-to-mediocre.

### 3. Battery — a second and third observation, and the vendor now contradicts itself three ways

The claimed/observed split is preserved. `battery_claimed_h: 96` and `battery_observed_h: 30`
remain **separate fields and are not merged**.

New: **carneo.cz's Platinum page contradicts itself within a single page.** Near the top:
*"Výdrž až 4 dny na jedno nabití, při 100% GSM signálu. **Ve stand-by režimu až 7 dní**"* ("Up to
4 days on one charge at 100% GSM signal. In stand-by mode **up to 7 days**"). Further down the
same page: *"Ve stand-by režimu dosahuje výdrž až **96 hodin**"* ("In stand-by mode it reaches up
to **96 hours**"). So the vendor publishes 7 days and 4 days as the same number, on the same page,
and 1–3 days in the manual for the mode a parent actually uses.

The **second independent observation**, and it is the worst on record, with a stated mode:

> **"we have a new Carneo Guardkid+ 4G watch and the battery doesn't last a day. I set sleep mode,
> manual location request, pedometer off and at 9 pm I take the fully charged watch off the charger
> and at 6:30 in the morning it has 40%. And that's on WiFi."**
> — Heureka.cz poradna, 2024-09-10 (Heureka's English rendering)

That is **60% consumed in 9.5 hours doing nothing**, in the mode the manual rates at 72–120 hours.
Caveat recorded honestly: the poster writes "Guardkid+ 4G", posted on the *Platinum* product
thread — it may be the non-Platinum predecessor. Treat as strong but not certain for this SKU.

A **third**, on this SKU and unambiguous:

> **"I'm not talking about the fact that when the watch is not used, the battery drops from 100% to
> 60% within 24 hours"** — and this is a **warranty-replacement unit** which behaved identically to
> the first: *"I already complained about one because of the battery and the problems I described
> above, and they sent me a new one, which is the same"*
> — Tomas, Pašovice, Alza verified purchase, **2026-08-17** (two days before this pass)

Against these, several owners report 3–4 days, and one reports 3 days *after reducing screen
brightness* (Heureka, auto-translated from Heureka.sk, 2026-06-20). **The honest conclusion is not
a number, it is a variance**: reported endurance on one SKU ranges from under a day to four days,
which points at unit-to-unit variation, signal-dependence, or both. One further owner-reported
constraint that matters more than the headline: *"when the battery drops below 20%, the location
function is not reliable"* (Heureka, verified, 2025-06-20) — so the usable window is shorter than
the runtime.

**For the buyer's floor — a 9.5 h school day with tracking active — it clears, but with no margin
worth having, and the ~14 h datapoint means a watch that left home at 70% may not report at
pickup.** Charge nightly, without exception.

### 4. The Romanian account flow — the decisive unknown is now closed, and it passes

**Google Play RO storefront: CONFIRMED.** `play.google.com/store/apps/details?id=com.tgelec.carneoguard&gl=RO&hl=ro`
renders fully, in Romanian, with **"Aplicația este disponibilă pentru dispozitivul tău"** ("The app
is available for your device"), a Romanian feature description, "Ultima actualizare 13 iun. 2026",
and the footer **"România (română)"**. This was step 1 of the pre-purchase test and it passes.
(The first pass could not render Play; it renders in a browser session.)

**There is no `+40` gate, because there is no phone-number step.** The manual's registration
sequence is: choose language → *Registrovat* → email address → on-screen verification code →
8–16 character password → accept the user agreement → pair by scanning the watch QR. **No phone
number is requested at any point.** Phone numbers are entered later, into the watch's contact list,
in international format — the manual's examples are Czech (`+420…`) but nothing in the flow
constrains the country code. Structurally, **the Xplora failure mode cannot occur here**: there is
no vendor SIM, no vendor connectivity, and no phone-number-based account.

**Two caveats, both real.** First, registration is not universally reliable *anywhere*:
*"Aj to tu niekto číta? Nejaký vývojár, správca? **Nejde ani registrácia v aplikácii!!!**"*
("Is anyone even reading this? Any developer, admin? **Registration in the app doesn't even
work!!!**") — VLADIMIR BIZON, Google Play, 2026-06-27; and *"I don't have a verification code for
the carneo guardkid+ 4g watch. How do I register my watch to the app if I don't have a code?"* —
Heureka poradna, 2025-12-25, **still unanswered**; and *"Nepošle kod pri zabudnuti hesla!"*
("It doesn't send the code when you forget your password!") — Mirka Krajniaková, Play, 2026-06-09,
to which TRUST System replied on 2026-06-29 telling her to check her spam folder. These are not
Romania-specific — which is the point: **register and log in before you pay**, from Romania, on
the actual phone.

Second, **eMAG.ro still carries zero customer reviews** on the black SKU (re-checked 2026-08-19:
*"Fii primul care scrie un review"*), and no dated Romanian owner report of this model was found
anywhere. Romanian queries run: `"Carneo Guard" OR "GuardKid" Romania +40 aplicatie cont
inregistrare`; `ceas copii 4G Romania 3G inchis apeluri nu functioneaza VoLTE smartwatch`; Reddit
post and comment search. **The Romanian evidence base remains empty.** What did surface is a
general Romanian-market warning from the specialist retailer xkids.ro: *"Ceasurile nu functioneaza
in toate retelele"* ("The watches do not work on all networks") and *"Unele ceasuri trebuie
configurate pentru a functiona in Romania. Configurarea consta in setarea APN-ului corect pentru
reteaua dvs."* ("Some watches must be configured to work in Romania. Configuration consists of
setting the correct APN for your network"). The Carneo manual documents exactly that APN menu, so
this is a solved problem, but it is a step the Romanian buyer will probably have to perform.

One further Romania-relevant detail the first pass missed: **the Czech/Slovak retail box includes a
prepaid SIM** (*"SIM karta s předplaceným kreditem 200 MB v balení"*), which several owners
complain about (*"Dodávaná SIM má nevyhovující drahý tarif"* — Alza, 2025-08-05; *"Slovenskou sim
jsem vyhodil"* — Alza, 2026-01-28). It is a CZ/SK SIM and is **worthless in Romania**; ignore it and
budget for a Romanian data SIM. Note the manual explicitly advises against prepaid top-up SIMs
while the vendor bundles one.

### 5. Data jurisdiction and the DEF CON 34 exposure — one correction, one confirmation, one unresolved conflict

**CORRECTION. The document states CARNEO "publishes no privacy policy for it at all" and that
`data_region` is UNKNOWN. Both are wrong.** A CARNEO GUARD-specific privacy policy is published:

<https://www.carneo.sk/user/documents/appguard/privacy-en.htm> (retrieved and text-extracted
2026-08-19; footer "Copyright© 2026 TRUST System s.r.o.")

> **"In accordance with GDPR laws and regulations, we store your personal data collected and
> generated during the use of the CARNEO GUARD application on servers in the European Union,
> specifically Frankfurt am Main, Germany. We will not provide the above information to any third
> parties without your consent. The server ensuring communication between the CARNEO GuardKid+
> watch and the CARNEO GUARD application is certified to comply with ISO/IEC 27001: 2013, 27017:
> 2015 and 27018: 2014."**

Also from the same document: photos taken by remote camera are *"cached on the server for 3 days,
and after 3 days automatically delete"*. That is a real, specific retention statement and it is to
CARNEO's credit that it exists.

**But read the rest of the document before crediting it.** It is a machine-translated Chinese
policy with a CARNEO name on it, and it discloses an advertising and analytics stack that has no
business inside a child-tracking app:

- **Location is shared with a Chinese provider.** *"When you use location related services, we
  share GPS information with our location service provider **(AutoNavi)** so that we can return
  location results to you. GPS information is sensitive personal information."* AutoNavi is
  Alibaba's Amap. This is almost certainly the "Asian AGPS system" that owners in §2 report having
  to switch to Google.
- **Named third-party SDKs**, verbatim from the document's own table: **ChuanShanJia SDK**
  (ByteDance/Pangle ads), **Guangdiantong SDK** (Tencent ads), **KuaiShou SDK**, **Baidu Alliance
  SDK**, **Aliyun code SDK**, **JuXiao SDK**, **Wanhui SDK**, **Leida SDK (Advertising Statistical
  Analysis)**, plus "Himalayan (SDK)" (Ximalaya) and OPPO/MEIZU push channels. Collected fields
  include device brand, model, OS version, resolution, **network signal strength**, sensor
  information and installed-application lists.
- Provisions for **"IoT SIM card" real-name authentication via "face recognition"** through a
  "Third Party Certification Agency" — a mainland-Chinese regulatory construct with no EU meaning.
- Provisions for "posts, comments, likes", a "Personal Page", "Dynamic" and "Articles" — a social
  feed this app does not have.
- On minors it says only that *"If you are a minor under the age of 18, you should read and agree
  this Policy under the supervision and guidance of your parent or other guardian"* — no GDPR
  Article 8 handling, no data-minimisation commitment for the child's data.

**And this creates a hard, checkable contradiction with the Google Play listing.** Play's Data
safety card for `com.tgelec.carneoguard`, read directly in both the RO and SK storefronts on
2026-08-19, declares: **"Nu sunt trimise date terțelor părți" / "S tretími stranami nie sú zdieľané
žiadne údaje"** — *no data is shared with third parties*. The developer's own privacy policy says
GPS is shared with AutoNavi and lists ten advertising/analytics SDKs. **One of these two
developer-supplied statements is false.** That is worth more than any CVE: it means the disclosures
this product ships with cannot be relied on.

**CONFIRMATION of the DEF CON 34 exposure.** The first pass concluded the 2026 research did "not
directly implicate CARNEO Guard". **That is now superseded.** Reporting on the talk slides names
the brand:

> "Behind SETracker, according to the slides, stands a company called **YQT, also trading as 3G
> Electronics. The data sits on Alibaba Cloud in China.**" … "46 apps, 39 brand names, more than
> twenty countries, aimed at children aged three to twelve" … brands including Wonlex, SaveFamily,
> KidiWatch, Garett Kids, **Carneo Guard**, Osmile, Kuus and Beafon; Android packages under
> **com.tgelec**.
> — Notebookcheck, *"Your child's GPS watch tells everyone where they are"*, reporting Felipe
> Solferini and Vangelis Stykas, *"Tracking the Trackers: How We Took Over 36 Million GPS Devices
> Protecting Children and Vehicles"*, **DEF CON 34, 8 August 2026**
> <https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html>
> (accessed 2026-08-19)

Capabilities claimed: "read and spoof location, intercept text and voice messages, listen in
silently, trigger the camera". The researchers state 45 vulnerabilities were reported and **no list
has been published**; Wonlex posted a blog on 10 August claiming three points fixed, without
crediting the researchers; SinoTrack and Thinkrace did not respond. **No CARNEO or TRUST System
response to this research was found** — queries: `Carneo reakce bezpečnostní zranitelnost detské
hodinky SETracker 2026 vyjádření`; `Stykas Solferini DEF CON 34 slides "Carneo"`. CARNEO's most
recent security-adjacent publication is its own marketing blog, which does not mention the research.

**THE UNRESOLVED CONFLICT — and the most useful thing in this section.** Three sources disagree
about where the data is:

| Source | Claim |
|---|---|
| DEF CON 34 slides, via Notebookcheck, 2026-08 | SETracker/YQT data is on **Alibaba Cloud in China**; Carneo Guard is one of the 39 brands |
| CARNEO GUARD privacy policy, 2026 | Servers in the **EU, Frankfurt am Main**, ISO 27001/27017/27018 |
| oTechnice.cz test, 2020-09-18 (predecessor model, dated) | *"Výrobce hodinek tak nemá sebraná data plně pod svou kontrolu, neboť jsou ukládána na **čínských serverech** provozovatele tohoto systému"* — "the watch maker does not have the collected data fully under its control, because it is stored on **Chinese servers** of the operator of this system." Ranked CARNEO 3rd and concluded: *"Po bezpečnostní stránce je tak nemůžeme doporučit"* ("From a security standpoint we cannot recommend them") |

**A reconciliation that fits all three, offered explicitly as inference, not as finding.**
SETracker's own commercial pitch offers OEM partners the option to "integrate devices on their own
server". **Alibaba Cloud operates a Frankfurt region**, and Alibaba Cloud holds exactly the
ISO 27001 / 27017 / 27018 trio the policy cites. A dedicated CARNEO instance of the SETracker/YQT
platform, hosted in Alibaba Cloud's Frankfurt region, would be simultaneously "servers in Frankfurt
am Main, Germany" **and** "Alibaba Cloud", and would satisfy the 2020 finding's evolution. If that
is what is happening, the practical consequence is precise and is the thing to take away:

> **The data may well be in Germany. The *code* is not CARNEO's, and neither is the operational
> control.** CARNEO cannot patch the platform's authentication design, because it did not write it.
> A dedicated instance limits blast radius from other brands' users; it does not fix an
> architecture in which, per ARES 2020 on this same code family, "instead of authentication, the
> API requires identification by the device ID".

**Server endpoints: NOT FOUND.** DNS resolution was attempted for `api.carneo.sk`, `guard.carneo.sk`,
`carneoguard.com`, `eu.i365.tech`, `api.i365.tech`, `gpsnet.cc`, `api.setracker.com`, `tgelec.com`,
`www.tgelec.com`, `3gelectronics.com` — all NXDOMAIN or captive-resolver responses from this
environment; only `app.carneo.sk` (51.38.117.199, OVH) and `setracker.com` (35.207.66.151, Google
Cloud) resolved, and neither is demonstrably the watch's telemetry endpoint. **The actual endpoint
remains unidentified.** The only way to settle it is to capture the watch's traffic, or to
decompile `com.tgelec.carneoguard` — neither of which was done here. No APK was downloaded.

**No CVE and no advisory** naming CARNEO, GuardKid or `com.tgelec.carneoguard` was found, which
remains a statement about attention, not about safety.

### 6. Age risk and longevity — the most valuable new evidence, and it is bad

The device is a 2022 design (DoC 2022-11-07) still on sale in 2026. Owner reports of unit lifetime:

> **"ako prvé hodinky pre dieťa fajn / už po roku prestali fungovať, mrznú, reklamácia zakaždým
> zamietnutá"**
> "as a first watch for a child, fine / **after just a year they stopped working, they freeze,
> the warranty claim was rejected every time**"
> — Erika, Prievidza, Alza verified purchase, **2026-03-29**

> **"Unfortunately, the first piece worked for about a week. Without any apparent reason, it was
> replaced as part of a complaint. … high failure rate (2 complaints, no apparent cause)"**
> — Ivo, Beroun, Alza verified purchase, 2025-10-07

> **"aušus první třídy jedny už jsme reklamovali dali nové a zase dělají to co ty předtím"**
> "first-class junk, we already claimed one, they gave a new one, and it does the same thing as the
> one before"
> — Veronika, Poštovice, Alza verified purchase, 2025-08-07

> **"It's shit!!! GPS doesn't work. … Claim not accepted! I don't recommend buying the product."**
> — Jaroslav, Neuměřice, Alza verified purchase, 2025-05-05

> **"u hodinek se po 3 tydnech rozbila nabíječka"** ("the charger broke after 3 weeks") — Ladislav,
> Polerady, 2024-09-18; *"magnetic charging is a disaster … the watch charger often loses power"* —
> Heureka poradna, 2024-12-07; *"Mic se rozbil reklamovano"* ("the mic broke, claimed") — Ivana,
> Praha, 2024-08-26; *"the display on the watch stopped working"* — Heureka poradna, 2025-07-11;
> *"Neustale se restartovali"* — Alza, 2024-06-06.

**The counter-evidence exists and should be stated:** *"Fungují už 2 roky bez problému"* ("They've
been working for 2 years without a problem") — Denisa, Malíkovice, Alza verified purchase,
2025-03-23. And Petr, Tišnov (2025-01-25) had a working unit after "něco přes rok" — though he
called the GPS unusable throughout.

**The warranty-rejection pattern is the part that should worry a Romanian buyer.** At least four
owners report claims refused (Erika, repeatedly; Jaroslav; Ladislav; Michaela 2025-12-27 pending).
These are Czech and Slovak buyers dealing with Alza and CARNEO **inside the CARNEO home market**. A
Romanian buyer's counterparty is a **marketplace seller (HomeMode) with a 14-day return window**,
with recourse thereafter to OUG 140/2021 against an eMAG marketplace vendor and ultimately to a
Slovak manufacturer with Czech/Slovak-language support. That is a materially worse position than
the people already having claims rejected.

**Firmware.** Still no published firmware, changelog or version history on carneo.cz support —
re-checked 2026-08-19; the support page carries only a manual PDF, two videos and a phone number,
and the app page offers only `carneoguard_V1.2.8.apk`. The manual mentions an in-menu
*"aut. aktualizace online"*, and one owner in 2022 wrote *"pokud to funguje, bylo by to super"*
("if it works, that would be great") — i.e. unconfirmed even then. **Whether the watch has ever
received a firmware update remains UNKNOWN**, four years after the DoC.

**App updates that broke things** — the gap-6 question, answered:

> **"Zedli ste koňovi tágo. Vynutena aktualizacia nepriniesla nic pozitivneho, ale znemoznila
> pouzivanie starej verzie, kde pri pisani chatu nezavadzala klavesnica."**
> "You've lost the plot. The **forced update** brought nothing positive, but made it impossible to
> use the old version, where the keyboard didn't get in the way when writing chat."
> — Onennee Houbeles, Google Play, **2026-07-06**; the same defect independently reported by Robert
> Žiak, 2026-07-27: *"V CHATE SA NEDA PISAT LEBO ZAVADZIA KLAVESNICA!"*

So: the app is maintained, updates are forced, and the most recent one broke text chat.

### 7. Games, disabling, and the remaining odds and ends

- **`games: UNKNOWN` → `true`.** Owner-confirmed: *"Hry - Matematika a Angličtina"* (Heureka
  verified purchase, 2022-05-31); *"zábavné hry vhodné i pro menší děti"* ("fun games suitable even
  for smaller children" — Jana, Heureka verified purchase, 2025-03-28); "hry" listed among pros by
  two Alza reviewers. eMAG.ro's own spec table lists educational maths and English games.
  **No documented way to disable them**; the only lever is the time-window "Zákaz používání ve
  třídě" class mode.
- **The watch installs third-party Android apps, including WhatsApp.** Multiple owners confirm
  installing WhatsApp (Petr, Náchod 2025-04-15; Jana 2025-03-28; Michaela, Plzeň 2025-12-27), and
  others report it failing (*"Whatsapp worked for about 2 hours after installation, then it
  crashed"* — Tomáš, Most, 2025-12-25; *"WhatsApp nefunguje, prý carneo umožňuje výměnu za jiný
  hardware, ovšem chce za to 1000 Kč"* — Alza, 2024-08-25, implying an undocumented hardware
  revision sold as a paid swap). **For a 7-year-old this is a downside, not a feature**: it is a
  general-purpose Android device with an app store, not a locked appliance, and there is no
  documented parental control over app installation.
- **Cold fix.** Still no published figure. Owner evidence suggests it is slow and often fails
  entirely: *"GPS lokalizace po pár minutách přeci jen zafunguje"* ("GPS localisation does
  eventually work after a few minutes") — Alza, 2024-10-22; and PZ's unit never achieved a fix at
  all in repeated outdoor testing.
- **Contacts 100 vs 15 is not an error in the doc's source, it is two different lists in the
  manual.** The app's map-screen phonebook is documented at *"až 100 kontaktů"*; a separate
  *"Tel. seznam"* setting is documented at *"až 15 kontaktů"*. One owner reports "kolem 100" in
  practice. The doc's "internal inconsistency" reading should be softened.
- **The Friends feature is a stranger-contact vector.** The manual: any CARNEO GPS watch can be
  paired by bumping two watches together, after which they can call and message each other. **No
  off switch is documented.**
- **`odposlech` in Romania:** untested and still UNKNOWN. Note that owners in CZ/SK report it
  frequently doing nothing at all even where it is exposed.

### 8. What this pass changes

1. **The primary function is unreliable.** Positioning — the reason to buy this class of device —
   fails or is grossly wrong for a large minority of owners, with 2–15 km errors routine and the
   geofence firing kilometres late. There are two undocumented mitigations (switch AGPS from the
   "Asian" server to Google; disable WiFi positioning) which some owners say fix it completely.
   That is the single most important thing a buyer needs to know, and CARNEO does not tell them.
2. **The safety features degrade in the wrong direction.** SOS false-triggers and cannot be
   disabled; the app can lock a parent out for ten hours; in-call volume can be too low for the
   child to hear; there is no missed-call indication for a watch left in a locker.
3. **RO access is fine.** Play RO confirmed, App Store RO confirmed, registration is email-only
   with no phone-number gate, RO retail with statutory warranty. The gate the first pass worried
   about is not the gate that matters.
4. **The privacy story is better documented and worse in substance than the doc had it.** There is
   a real policy with a real EU storage claim and a real retention period — and it also discloses a
   Chinese ad-tech SDK stack, contradicts the app's own Play Data safety declaration, and belongs
   to a platform named on stage at DEF CON 34 eleven days ago.
5. **Longevity is genuinely poor and warranty recourse is genuinely contested**, in the vendor's
   home market, by verified purchasers.

### Sources added by this pass

| URL | Accessed | What it established |
|---|---|---|
| <https://www.alza.cz/recenze/carneo-guardkid-4g-platinum-blue-7721534.htm> (+ `-p2`…`-p4`, and the black `-7721535` and pink `-7721533` pools) | 2026-08-19 | **The main new evidence base.** Pooled **3.7/5, 328 ratings, 161 written reviews**, 2023-05 → 2026-08-17, verified purchases with names and dates. Source of the GPS, SOS, battery, data-SIM-reboot, size, warranty-rejection and AGPS-fix quotes. Requires a real browser — Cloudflare-gated |
| <https://chytre-hodinky.heureka.cz/carneo-guardkid-plus-4g-platinum/> and `/poradna/` | 2026-08-19 | **86%, 186 ratings, 230 reviews** (only 93 verified, 70 imported from Heureka.sk). The **"volani (volte)"** datapoint; the 9.5 h sleep-mode battery report; games confirmed; charger, display, SIM-PIN, login and call-volume failures in the Q&A. 403s to plain fetch |
| <https://play.google.com/store/apps/details?id=com.tgelec.carneoguard&gl=RO&hl=ro> | 2026-08-19 | **Google Play RO storefront CONFIRMED** — "Aplicația este disponibilă pentru dispozitivul tău", Romanian listing, footer "România (română)", updated 13 Jun 2026. Data safety: **"Nu sunt trimise date terțelor părți"** |
| <https://play.google.com/store/apps/details?id=com.tgelec.carneoguard&gl=SK&hl=sk> (full review pane) | 2026-08-19 | **2,7/5 from 1,110 reviews** (corrects the doc's stale 2.2/1,071). Registration-failure, password-reset, 10-hour-lockout, "no internet connection", forced-update and 300 km GPS reports, plus **TRUST System's own replies** |
| <https://www.carneo.sk/user/documents/appguard/privacy-en.htm> | 2026-08-19 | **CARNEO GUARD privacy policy — the doc was wrong that it does not exist.** "servers in the European Union, specifically Frankfurt am Main, Germany"; ISO 27001/27017/27018; 3-day photo retention. Also **AutoNavi**, ChuanShanJia, Guangdiantong, KuaiShou, Baidu Alliance, Aliyun, JuXiao, Wanhui, Leida SDKs; Chinese IoT-SIM face-recognition clauses |
| <https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html> | 2026-08-19 | **DEF CON 34, 8 Aug 2026, Solferini & Stykas, "Tracking the Trackers".** Names **Carneo Guard** among 39 brands / 46 apps on **SETracker**, operator **YQT / 3G Electronics**, **"data sits on Alibaba Cloud in China"**, ~10 M watches. 45 vulns reported, no list published, most vendors silent |
| <https://otechnice.cz/test-chytrych-detskych-hodinek-ktere-jsou-skutecne-bezpecne/> | 2026-08-19 | CZ comparative test, **2020-09-18, predecessor model — dated**. "stored on Chinese servers of the operator of this system"; ranked CARNEO 3rd; *"Po bezpečnostní stránce je tak nemůžeme doporučit"* |
| <https://www.carneo.cz/user/documents/upload/podpora/navody/CARNEO-GuardKid+4G_PL-manual-CZ.pdf> | 2026-08-19 | Re-extracted and grepped: **0 hits for VoLTE / IMS / LTE**; registration is **email + password only, no phone number**; watch has Settings → Mobilní síť → **APN**; SOS re-dials all 3 numbers repeatedly; Friends bump-pairing with no off switch |
| carneo.cz product pages: Platinum blue, ULTRA 2nd gen. blue, Buddy blue; carneo.eu Platinum blue | 2026-08-19 | Raw-HTML grep across all four: **no VoLTE anywhere** (all hits = Czech *zvolte* in Shoptet JS). **The band string is byte-identical on all three 4G models** → boilerplate, not model-specific. Platinum page states **both "stand-by až 7 dní" and "stand-by až 96 hodin"**. Box includes a **CZ/SK prepaid SIM with 200 MB**. ULTRA 2nd gen page disparages the **SL8521E** platform, implying older models use it |
| <https://www.maminkoutek.cz/2024/06/recenze-chytre-hodinky-pro-deti-carneo-guardkid-4g-platinum/> | 2026-08-19 | CZ parent review, 2024-06-12, **for a 7-year-old daughter** — rejected the Platinum as too bulky and bought a TCL MOVETIME Family Watch 40 instead. Reads as unsponsored |
| <https://www.xkids.ro/informatii-utile-ceasuri-copii/> | 2026-08-19 | RO specialist retailer: *"Ceasurile nu functioneaza in toate retelele"*; *"Unele ceasuri trebuie configurate pentru a functiona in Romania. Configurarea consta in setarea APN-ului corect"* |
| <https://www.recenzopedia.cz/carneo-guardkid-4g-platinum/> and <https://www.carneo.cz/blog/test-detskych-gps-hodinek-2026/> | 2026-08-19 | **Discounted as affiliate / vendor astroturf.** recenzopedia: 15+ shopping links, unnamed tester, stock photos, "2–3 days" in body vs "up to 4 days" in its own FAQ. carneo.cz blog: bylined *"Redakce CARNEO"*, recommends three CARNEO models, compares to no competitor |

### Open items this pass could not close

1. **VoLTE.** One ambiguous owner annotation from 2022 is all that exists. Only a live +40 SIM test,
   or an operator IMEI/TAC check, settles it.
2. **The actual backend endpoint.** DNS gave nothing; would need traffic capture or APK analysis.
3. **Whether the Frankfurt claim and the "Alibaba Cloud in China" claim describe the same
   infrastructure.** The reconciliation offered above is inference, not finding.
4. **Whether the watch has ever received a firmware update.** Still no changelog anywhere.
5. **Any Romanian owner, of any date.** Still zero.
6. **Whether `odposlech` is exposed in Romania** — unchanged, and less interesting now that owners
   report it often does nothing anywhere.

### A note on instruction-injection

No page read during this pass contained text addressed to the researcher or attempting to direct
this work. The nearest thing was ordinary vendor marketing copy (*"Před koupí Android smart hodinek
si vždy ověřte použitý procesor"* — "Before buying an Android smart watch, always check the
processor used") on carneo.cz's ULTRA 2nd gen page, which is sales rhetoric aimed at shoppers, not
an instruction, and was treated as data.

### BG/HU/CZ venue sweep (2026-08-19)

Heureka.cz was manually unblocked in-browser for this pass (previously 403/captcha to every
fetch); eMAG.bg and eMAG.hu likewise. **No captcha re-armed.** Review texts were extracted from
the page's own data layer (React props), so quotes are the original Czech, not machine
translation.

#### Heureka.cz — negative pool read in full, sponsorship label check

`chytre-hodinky.heureka.cz/carneo-guardkid-plus-4g-platinum/` — **86 %, 230 reviews, 186
ratings** (5★×137, 4★×13, 3★×18, 2★×4, 1★×14). Filters: Ověřené 93, Negativní 17, Odborné 3,
Video 3, **Zahraniční 70** — matching this file's earlier audit. **No "Sponzorováno" label was
seen on any Platinum review sampled** (all 17 negatives + first page of all) — consistent with
the Testuj.to campaign being an ULTRA-2nd-gen campaign, not a Platinum one. Heureka.sk's mirror
pool: **85 %, 222 reviews, 122 ratings (1★×14), Overené 64, Negatívne 12, Odborné 2,
Zahraničné 133** — i.e. the CZ and SK pools import each other in both directions (70 into CZ,
133 into SK); neither side's headline percentage is an independent national sample. No
"Sponzorované" labels on the SK Platinum pool either.

**All 17 "Negativní" reviews on Heureka.cz, verbatim (new ones not previously in this file):**

- **Jiří, verified (Dr. Max lékárna), 2026-06-25, 60 %, does not recommend:** *"Hodinky mají být
  pro děti základní školy. Jsou obrovské. I na ruce dospělého člověka vypadají mohutně.
  Objednávali jsme je přes internet, tak že jsme si velikost hodinek nedokázali představit."*
  ("Supposed to be for primary-school children. They are enormous — even on an adult's arm they
  look massive. We ordered online and couldn't picture the size.") — the size problem is not
  unique to the ULTRA.
- **anon, verified (Alza.cz), 2026-02-05, 50 %:** pro *"Dobré na volani"*; con *"GPS je
  katastrofální, o 11 km mimo!"* ("GPS is catastrophic — 11 km off!") — a new worst-case
  positioning figure for the Platinum.
- **Mamina, verified (Carneo.cz), 2025-09-05, 60 %, does not recommend:** *"dlouho se nám
  nedařilo sprárovat s aplikací. GPS poloha ukazuje s roztylem 1,5km. Videohovory a hlasové
  fungují pouze při wifi připojeni. Pokud chcete jen volání a sms tak ok … Ostatní zatím
  neodpovídá našim potřebám."* ("pairing with the app failed for a long time; GPS scatter
  1.5 km; video and voice messages work only on Wi-Fi; fine if you only want calls and SMS.")
- **anon, verified (Carneo.cz), 2025-07-29, 60 %, does not recommend:** *"moc velké i pro
  dospělého natož pro dítě … opravdu abnormálně veliké pouzdro a na běžné nošení spíše překáží."*
- **Lukáš, verified (planeo.cz), 2025-06-03, 20 %, does not recommend:** *"Totálně nepoužitelná
  lokace hodinek."* ("Totally unusable watch location.") — the lowest-rated text review in the
  pool.
- **anon, verified (Alza.cz), 2025-03-31, 50 %:** *"Cena hodinek odpovida +/- tomu co dostanete.
  Ja bych si rad priplatil za lepsi kvalitu HW i SW. Bohuzel zatim neni."* ("price matches what
  you get; I would happily pay more for better HW and SW — unfortunately there isn't any.")
- **anon, verified (Alza.cz), 2024-09-18, 40 %, does not recommend:** cons *"Hodně nekvalitní
  výrobek - už jsem musel reklamovat"* + *"Strašně špatná malá vydrž baterie"* ("very poor
  quality — already had to claim warranty; terribly poor battery life").
- **Soňa, verified (Allegro.cz), 2024-07-04, 60 %, does not recommend:** *"Hodinky jsem bohužel
  reklamovala, protože se při používání vypínají."* ("returned under warranty — they switch
  themselves off during use.")
- **CLAIRE, verified (Electro World), 2024-03-31, 50 %:** *"Průměrné hodinky pro děti."* Cons:
  *"Nepřesná GPS; Horší nastavení, nutná podpora"*.
- **murena1, verified (Alza.cz), 2023-10-04, 60 %:** pro *"funguje"* (sic — the entire review).
- **lulu, verified (Alza.cz), 2023-09-28, 60 %, does not recommend:** con: *"GPS lokace vůbec
  nefunguje. Ukazuje mi klidně druhou stranu Prahy … Někdy se taky stává, že adresa je správně
  (plus mínus několik ulic), ale mapa ukazuje úplně jinam."* ("GPS doesn't work at all — happily
  shows the other side of Prague; sometimes the address is right but the map points somewhere
  completely different.") Summary: *"Kdo nechce dávat dítěti mobil, ale chce se mu umět dovolat,
  hodinky jsou ideální. Tím ale výhody končí."*
- **anon, verified (Electro World), 2023-06-30, 60 %:** *"straně krátká vydrž baterie. Nevydrží
  ani od rána do večera"* ("terribly short battery life — doesn't last from morning to
  evening.")
- **anon, verified (MALL by Allegro), 2022-12-28, 20 %, does not recommend:** *"nefunguje
  ovladani displeje"* ("display/touch control doesn't work.")
- **PZ, MALL by Allegro, 2022-09-30, 60 %** — already quoted in this file (the "volani (volte)"
  review); re-read unchanged, cons include *"na tomto kusu nam nefunguje GPS lokalizace, pouze
  LBS/WiFi … GPS se nikdy nechytla"*.
- **Michal, verified (Svět Počítačů), 2022-08-20, 60 %:** *"Katastrofa je ale určování polohy,
  z 90% ukážou hodinky úplně jinou polohu, někdy rozdíl i přes dva kilometry. … koupili jsme
  dvoje a oboje fungují stejně blbě. Stál jsem uprostřed pole s hodinkami … a stejně oboje
  hodinky ukazovali že jsou kilometr jinde. Takže ty povídačky od výrobce jak musíte stát venku
  a pak ukáží na 5 metrů přsnou polohu jsou nesmysl."* ("positioning is a catastrophe — 90 % of
  the time a completely different position, sometimes >2 km off; we bought two units and both
  are equally bad; I stood in the middle of a field and both showed me a kilometre away. The
  manufacturer's tales about 5-metre accuracy outdoors are nonsense.") Also confirms the covert
  listen: *"Dáte hodinkám pokyn přes aplikaci a oni vám samy zavolají, aniž by o tom dítě
  vědělo."*
- **anon, verified (Electro World), 2022-07-02, 30 %, does not recommend:** *"Polohu hodinky
  naprosto nezvladaji, udávaná adresa se lisi od zobrazení polohy o stovky metru i vice …
  Vyrobce v recenzich uvadi odchylku 5m, coz je lez a nesmysl. … Hodinky neupozornuji na
  zameskany hovor … Zpravy poslane z hodinek nekdy chodi jako sms, nekdy do aplikace, kde
  neexistuje upozorneni."* ("watch utterly fails at positioning — stated address differs from
  displayed position by hundreds of metres or more; the maker's 5 m claim is a lie … no missed-
  call alert, so the child doesn't know someone called; messages sometimes arrive as SMS,
  sometimes into the app with no notification.")
- **anon, verified (TonerPartner), 2022-04-21, 60 %** — already in this file (*"Vzdálený
  odposlech jsem nenašla v aplikaci"*); full close: *"Po vyzkoušení hodinek a aplikace, bych je
  znovu nepořídila."* ("having tried the watch and app, I would not buy them again.")

#### Heureka.cz /poradna/ — the 14 h battery thread now has its replies read

The **2024-09-10 "Vybíjení baterie"** question (sleep mode, manual location only, pedometer off,
Wi-Fi on: **100 % at 21:00 → 40 % at 06:30**, the basis of this file's ~15.8 h recomputation)
received **two replies, both 2024-09-11, neither disputing the measurement**: Heureka's
anonymous staff answer ("obraťte se na zákaznickou podporu výrobce") and hodinky-365.cz's
customer-care answer — *"bohužel asi nezbývá než hodinky reklamovat u svého prodejce :("*
("unfortunately nothing left but to return them under warranty"). The thread is closed with the
asker marked satisfied. **The 9.5 h/60 % overnight-drain datapoint stands unchallenged, and the
shop's own answer treats it as warranty-grade behaviour.**

New in the poradna since the last pass: **"Nemám ověřovací kód pro hodinky carneo guardkid+ 4g"**
— *"Jak mam registrovat at hodinky do aplikace když nemám.kod"* ("how do I register the watch in
the app when I have no code"), 2025-12-25, **still unanswered** — one more registration-flow
failure report for the Guard app.

#### eMAG.bg / eMAG.hu

eMAG.bg Platinum pink (`/pd/DVX6NVYBM/`): **0 reviews, 0 Q&A**. No Platinum listing found on
eMAG.hu in this pass. Zero Bulgarian/Hungarian owner evidence for the Platinum remains the
result.
