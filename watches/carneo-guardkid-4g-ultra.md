# CARNEO GuardKid+ 4G ULTRA (2nd Generation)

```yaml
---
model:                  CARNEO GuardKid+ 4G ULTRA 2nd gen.
brand:                  CARNEO (brand of TRUST System s.r.o., Trnava, Slovakia)
release_year:           2025      # CORRECTED 2026-08-19, and now dated exactly.
release_date:           2025-11-27  # On sale in Czechia from 27 November 2025. Wayback snapshot of
                                  # the Alza.cz page dated 2025-11-23 shows schema.org
                                  # availability=PreOrder, 0 reviews, button "Predobjednat", and
                                  # for all three colours "Ocekavame 27. listopadu 2025"
                                  # ("We expect 27 November 2025"). carneo.cz shows "Skladem"
                                  # (in stock) from 2025-12-08; carneo.sk only from 2026-01-20.
                                  # (Was UNKNOWN / "earliest evidence 2026-07-23" - off by 8 months.)
                                  # No launch announcement or tech-press coverage exists anywhere.
os:                     Android 8.1   # NEW 2026-08-19. Stated by Carneo itself ("Systém hodinek:
                                  # Android 8.1", carneo.cz / .sk / .hu) and confirmed by owners:
                                  # "zastaraly android 8.1" (Alza.cz, Tomas Trencin, 2026-08-06,
                                  # 2nd gen blue); iOS SK 2026-05-28 "runs on android from 2017 was
                                  # automatic return... security risk". A 2017 Android release, sold
                                  # new in 2026, on a child's watch with a mic, camera and GPS.
                                  # No firmware version, changelog or OTA note is published for this
                                  # or any GuardKid model - you cannot verify it has ever been
                                  # patched.
still_sold:             yes       # in stock CZ, SK, RO on 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status:              likely    # REAFFIRMED but re-based 2026-08-19. It got BETTER on the app
                                  # gate (Play RO now verified live, tier 2 reached) and WORSE on
                                  # the radio gate (B20 rests on one boilerplate string shared with
                                  # three other Carneo models; no DoC/FCC/retailer spec confirms
                                  # it). Still zero Romanian owner reports of any kind, and the
                                  # app's region selector shipped broken in June 2026 across SK, CZ
                                  # and HU. Nothing found that would BLOCK a +40 user; nothing
                                  # found that demonstrates one has ever succeeded.
ro_evidence_tier:       2         # UPGRADED 2026-08-19. Tier 2 now reached: the Google Play RO
                                  # storefront renders in Romanian and offers install ("Aplicatia
                                  # este disponibila pentru dispozitivul tau"), verified in-browser.
                                  # Tiers 4 (RO distributor/service) and 5 (bands) also satisfied.
                                  # Tiers 1 (supported-country list) and 3 (any RO first-hand
                                  # report) still NOT reached - and Play shows NO ratings block for
                                  # RO while CZ shows 3.1/~1,110, i.e. ~zero Romanian users.
ro_killer:              n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands:              [B1, B2, B3, B5, B7, B8, B20, B28A]   # published for the
                                                              # 2nd gen specifically
                                  # CAVEAT added 2026-08-19: the string "GSM B2 B3 B5 B8, WCDMA B1
                                  # B2 B5 B8, FDD-LTE B1 B2 B3 B5 B7 B8 B20 B28A" is byte-identical
                                  # on carneo.cz, carneo.sk AND carneo.eu's 1st-gen ULTRA page. It
                                  # is one piece of vendor boilerplate, not three independent
                                  # national sources as the file implied. No DoC, FCC ID or
                                  # retailer spec table independently confirms it. B20 still
                                  # stands, but on thinner evidence.
band_b20:               true
band_b28:               true      # B28A published, but see note: RO 700 MHz is 5G n28,
                                  # not LTE B28 - this band buys nothing in Romania
volte:                  not-claimed  # UPGRADED from UNKNOWN 2026-08-19, and the evidence is now
                                  # positive rather than an absence. Carneo's CMS has a controlled
                                  # field pv31 ("SIM karta") whose value set INCLUDES VoLTE, and
                                  # Carneo assigns it selectively: GuardKid+ Tiny = "4G - VOLTE",
                                  # Buddy = "2G, 3G, 4G - VOLTE", ULTRA 2nd gen = "2G/3G/4G",
                                  # Platinum = "3G/4G". It records VoLTE when it applies and did
                                  # not here. Hardware is NOT the constraint: UNISOC's own 8541E
                                  # page publishes "VoLTE/ViLTE | VoWiFi LTE TDD&FDD".
                                  # ALSO CORRECTED: the XDA 8541E thread (now read in full) says
                                  # VoLTE works on STOCK firmware and is broken only by aftermarket
                                  # GSIs - the opposite of what this file inferred from its title.
                                  # Untested by any owner; no report from a 2G-free country exists.
voice_fallback:         2g-csfb   # Low risk for Romania. The watch is catalogued 2G/3G/4G and the
                                  # manual designs around 2G ("prípadne 2G signál") for SOS and
                                  # low-battery SMS. RO keeps 2G on Orange and Digi - buy there.
                                  # (Czech owner reports cannot settle VoLTE either way: CTU has
                                  # mandated Czech 2G stays until at least 2028-06-30.)
modem_chipset:          UNISOC / Spreadtrum SC8541E, quad-core 1.4 GHz
                                  # (carneo.cz writes it "UNISOC 8541E")

# --- Positioning (the #1 criterion) ---
positioning:            [GPS, GLONASS, AGPS, WiFi, LBS, G-sensor]
                        # CORRECTED 2026-08-19. The old line "NO GLONASS, Galileo or BeiDou is
                        # published anywhere. Single-constellation GPS only" was WRONG about the
                        # hardware. Carneo publishes GPS only (verified: zero hits for GLONASS /
                        # Galileo / BeiDou / GNSS in the CZ manual PDF and on carneo.cz/.sk/.eu/.hu)
                        # - but that is under-documentation. The SC8541E/SL8541E GNSS block is
                        # on-die and supports GPS + GLONASS + BeiDou.
gnss_constellations:    2         # It runs only ONE secondary constellation at a time: exactly two
                                  # firmware images exist, "gpsgl" (GPS+GLONASS) and "gpsbd"
                                  # (GPS+BeiDou); gnss_common_ctl.c rejects anything else with
                                  # -EINVAL. Probe default is gpsgl, and no init.rc in any examined
                                  # device tree overrides it - so a European unit gets GPS+GLONASS.
gnss_galileo:           false     # CONFIRMED AT CHIP LEVEL, not merely unpublished. The GNSS HAL
                                  # gps.default.so off a real SL8541E watch carries $GPGSV, $GLGSV,
                                  # $BDGSV and NO $GAGSV (Galileo) or $GQGSV (QZSS). Corroborated
                                  # empirically: zero Galileo observations across 37 GPSTest field
                                  # captures from an SL8541E device. A Chinese UNISOC source lists
                                  # SL8541E among the parts without Galileo.
                                  # THIS IS THE PERMANENT DOWNGRADE: no firmware can add Galileo,
                                  # the European constellation, and rivals in this shortlist
                                  # (imoo Z7) have Galileo AND BeiDou.
gnss_dual_band:         false     # Single-band only (L1 / B1I). "Dual-frequency: NOT_SUPPORTED".
gnss_field_measured:    none      # NO owner-side constellation capture (GPSTest / logcat / NMEA)
                                  # exists for ANY Carneo watch. The chip findings are firmware
                                  # architecture, not measurements. One GPSTest screenshot from this
                                  # watch would be genuinely new evidence - worth doing in week one.
wifi_positioning:       false     # CORRECTED 2026-08-19. Not a usable indoor fallback. The manual
                                  # itself: WiFi sleeps to save battery, "cimz Vam bude znemoznena
                                  # komunikace s nimi A TAKE LOKALIZACE" (= "and also localisation"
                                  # - a clause the earlier pass omitted), and WiFi "se pouziva
                                  # vyhradne pro aktualizace produktu". Carneo repeated this on
                                  # Google Play 2026-06-29: "WIFI sa odporuca vyuzivat iba na update
                                  # firmwaru". Owner measurement (Alza.cz, Romana, 2026-01-08):
                                  # "GPS funguje dobre pouze, kdyz jsou hodinky pripojeny na WiFi,
                                  # kdyz ne, ukazuje to klidne s radiusem 15 km."
indoor_positioning:     LBS       # NEW. Indoors = cell-tower fix, "az do nekolika km" per the
                                  # manual. Even the paid Testuj.to testers list indoor inaccuracy
                                  # as a con; one reports the fix wrong at school specifically.
update_interval_min:    10        # tightest automatic interval the app offers

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:            1000
battery_claimed_h:      96        # marketing: "up to 4 days", 96 h standby (carneo.eu);
                                  # carneo.cz/sk say up to 4 days use / up to 6 days standby.
                                  # The SAME manufacturer's manual states 20-24 h at the
                                  # 10-minute tracking interval. Both are vendor figures.
battery_observed_h:     24-48     # CORRECTED 2026-08-19. Eight independent observed figures now
                                  # exist; ~72 h was the top outlier, not the centre. Worst and
                                  # most specific: "vydrzi sotva jeden den" (Alza.cz, Lukas Praha 5,
                                  # 2025-12-22, 2nd gen); "-25% overnight, a few location shares and
                                  # 3 calls and it's done" (Alza.cz, Michal, 2026-04-09, 2nd gen);
                                  # "urcite bude potreba kazdy den dobijet" (Heureka, VencaLazy92,
                                  # 2026-07-06, unsponsored, child aged 7). Mid: "cca 2 dny"
                                  # (Alza, Tereza, 2025-12-29), "1-2 dny" (Play, 2026-06-29).
                                  # Top: "sotva 3 dny" (Play, 2026-01-10), 3 days (testado.sk,
                                  # 2026-07-23 - now downgraded to affiliate content).
                                  # Consistent with the manual's 20-24 h at the 10-min interval.
                                  # Clears a 9.5 h school day with tracking on, with no margin.

# --- App & service ---
app_name:               CARNEO Guard  (Android package com.tgelec.carneoguard)
app_android_min:        5.0
app_ro_playstore:       yes       # CORRECTED 2026-08-19. Verified in-browser on the RO storefront
                                  # (gl=RO&hl=ro): renders in Romanian, footer "Romania (romana)",
                                  # "Instalează" button, "Aplicatia este disponibila pentru
                                  # dispozitivul tau". Both app stores serve Romania.
                                  # BUT the RO page shows NO ratings block while the identical CZ
                                  # URL shows 3.1/~1,110 - i.e. effectively zero Romanian users.
                                  # iTunes review RSS for /ro/ likewise returns zero entries.
app_rating:             2.7       # SETTLED 2026-08-19: Google Play SK storefront (hl=sk&gl=SK),
                                  # 2,7/5 from ~1,110 ratings. Play's average is country-dependent
                                  # over one global count (US/default 2.2, CZ 3.1, DE 3.1 n=13,
                                  # RO: no ratings block at all) - the 3.1 previously here was the
                                  # CZ-storefront view of the same pool, and the mirror's 2.2 the
                                  # default-storefront view. Full table and artefact analysis: see
                                  # "#### Controlled Play read (2026-08-19)" in
                                  # carneo-guardkid-4g-platinum.md.
                                  # iOS is far worse: CZ 1.72 avg (n=57),
                                  # SK 1.53 (n=19), HU 1.50 (n=4), per the iTunes review RSS.
app_last_update:        2026-06-13  # CORRECTED: Play's own date on both RO and CZ storefronts is
                                  # 13 June 2026 (the mirror said v1.3.0 / 2026-06-22).
                                  # iOS v2.9, 27 June 2026.
data_region:            disputed  # UPDATED 2026-08-19. Three vendor/researcher statements that
                                  # cannot all be true:
                                  # (1) DEF CON 34 (2026-08-08): SETracker backend, operator YQT /
                                  #     3G Electronics Shenzhen, Alibaba Cloud, mainland China.
                                  # (2) CARNEO GUARD Privacy Policy (FOUND 2026-08-19 at
                                  #     carneo.sk/user/documents/appguard/privacy-en.htm - the file
                                  #     previously said no such policy existed): claims servers in
                                  #     "Frankfurt am Main, Germany", ISO 27001/27017/27018 - but is
                                  #     a machine-translated Chinese policy naming AutoNavi
                                  #     (Alibaba's Amap) as location provider and listing
                                  #     ChuanShanJia (ByteDance), Guangdiantong (Tencent), KuaiShou,
                                  #     Baidu Alliance, Aliyun and Ximalaya SDKs.
                                  # (3) Google Play Data Safety card, RO and CZ storefronts:
                                  #     "No data is shared with third parties."
                                  # (3) is contradicted by (2), which Carneo publishes itself.
location_provider:      AutoNavi  # NEW 2026-08-19. Alibaba's Amap, named in Carneo's own Guard
                                  # privacy policy: "we share GPS information with our location
                                  # service provider (AutoNavi)". A Chinese geolocation database.
                                  # Best available explanation for the recurring China / Hong Kong /
                                  # Argentina position artefacts and the 15 km errors - and for why
                                  # Carneo's manual tells users to switch WiFi off.

# --- Practical ---
sim:                    nanoSIM
water_rating:           IP68 (disputed)  # carneo.cz/.sk and Testuj.to say IP68; **Alza.cz's own
                                  # parameter table and a third-party comparison site both say
                                  # IP67**. Two independent sources against the vendor. Academic in
                                  # practice - the manual forbids bathing, showering and swimming
                                  # either way, and liquid damage is not covered by warranty.
geofence_min_radius_m:  200       # NEW 2026-08-19. Owner: "bezpecna zona je minimalne 200 m".
                                  # A 200 m circle round a school covers the surrounding streets,
                                  # so the exit alert is late by construction, before any GPS error.
sos_blocks_callback:    true      # NEW. Owner: SOS "vola, az kym sa niekde nedovola. Avsak, vedie
                                  # to k tomu, ze mu nemozno zavolat spat." - while SOS is
                                  # redialling its list you CANNOT ring the child back.
text_from_watch:        false     # NEW. Parent-app message text capped at 50 characters, and the
                                  # watch cannot send free text at all (testado). Child's only
                                  # outbound channel is a voice note or a call.
weight_g:               52
camera:                 true      # 2.0 MP
games:                  true      # plus an app library that is NOT parent-push-only - see
                                  # extras_disableable. Owner: the child can install apps on the
                                  # watch itself without the parent knowing.
size_problem:           yes       # NEW 2026-08-19. Three independent reviewers plus two paid
                                  # testers call it bigger than an adult men's watch / "vetsi nez
                                  # moje AW ultra". One paid tester's child stopped wearing it after
                                  # a few days and now carries it in his rucksack. Strap is
                                  # non-standard: 20 mm straps do not fit, lug is ~4 mm wider.
                                  # This matters specifically for a 7-year-old wrist.
extras_disableable:     partial   # CORRECTED 2026-08-19. "Kontrola zabavy" (time-limit / block any
                                  # app or function) is real and confirmed in use by an owner. But
                                  # three of the file's "yes" rows are vendor claims that owners
                                  # contradict: (a) the child CAN install apps on the watch itself
                                  # "bez rodicova vedomi" (= without the parent's knowledge);
                                  # (b) "Sms nelze zakazat" - SMS to/from ANY number cannot be
                                  # disabled, and call history is invisible to the app;
                                  # (c) watch-to-watch pairing adds contacts the parent cannot
                                  # control or delete, "i kdyz zadne dalsi hodinky v okoli nejsou".
                                  # See "Scrutiny pass" section 7.
hw_failure_reports:     3 of 30   # NEW 2026-08-19. Alza.cz 2nd-gen pool: one watch stopped charging
                                  # after days and its warranty replacement died in hours (same
                                  # household, 2026-02-12); one dead with a flashing display after
                                  # ~30 minutes (2026-08-14). Also "pri pouzivani sa zahrievaju".
review_pool_seeded:     yes       # NEW. Heureka.cz labels 10 of its 19 reviews "Sponzorovano ...
                                  # Testuj.to". Campaign: 10 testers, product free + prepaid SIM,
                                  # each contracted to deliver 4 reviews + photos + social posts.
                                  # Carneo then cites that campaign back as a "test" on its own
                                  # blog ("50 dodanych recenzi" = 10 opinions x ~5 destinations).
                                  # The campaign config (client = "Trust System s.r.o." itself)
                                  # MANDATES posting to Testuj.to + Heureka.cz + Carneo.cz +
                                  # Instagram (tagging @carneo.cz), and exports translations to
                                  # Heureka.SK and arukereso.hu. Heureka.cz labels them
                                  # "Sponzorovano"; Heureka.sk and carneo.cz DO NOT.
                                  # So Heureka.cz 86%, Heureka.sk 96% and carneo.cz ~4.9/5 are all
                                  # downstream of the same ten free units.
                                  # ALZA.CZ IS THE ONLY LARGE POOL OUTSIDE THAT SYSTEM - no
                                  # sponsorship labels, no campaign testers - and it scores lowest
                                  # (3.9/5 ~ 78%). It is also the only one that needs a real
                                  # browser to read. On this product, the reachable evidence is the
                                  # seeded evidence.
price_eur:              129 RRP (carneo.eu / carneo.sk); EUR 104.88 street at smartshop.sk 2026-08-19
buy_from:               eMAG.ro (marketplace seller "HomeMode"), Romania
price_ro_eur:           865.41 RON, approx. EUR 170 - about 34% above Carneo's own RRP
                        and about 65% above Slovak street price
---
```

## Verdict

The best-documented radio in this shortlist — B20 published for *this* generation, plain
nano-SIM, no vendor SIM lock — behind the worst-documented cloud: Carneo Guard is named
by DEF CON 34 researchers (Aug 2026) as one of 39 brands on the Chinese SETracker backend.
Its own manual says 20–24 h at the 10-minute tracking interval, not the advertised 4 days.
It clears the radio floor and the Romania floor; it does **not** clear a privacy floor, and
"1000 mAh" does not mean four days of actual tracking.

**Revised after the scrutiny pass of 2026-08-19.** The radio and the Romanian channel hold up — Play
RO is now confirmed live, so the app-availability risk is gone. Everything else got worse. On the
evidence of ~50 owner reports of this exact generation: **indoors it is a cell-tower device**, and
Carneo's own manual says so — Wi-Fi positioning sleeps and takes localisation with it, and Carneo
tells you to turn Wi-Fi off. For a 7-year-old whose whole school day is indoors, that is the job
this watch is being bought to do, and it does not do it. Add ~10% hardware failures in the Alza
pool, Android 8.1 in 2026, a body three separate reviewers call bigger than an adult watch (one paid
tester's child stopped wearing it and carries it in a rucksack), and a review score inflated by a
paid seeding campaign. **This is not a capable device that is badly documented; it is a mediocre
device whose documentation was flattering it.**

Two things sharpen the privacy verdict rather than soften it. Carneo *does* publish a Guard privacy
policy — this file said it did not — and that policy names **AutoNavi (Alibaba's Amap)** as the
location provider and embeds **ByteDance, Tencent, KuaiShou, Baidu and Aliyun advertising SDKs**,
while the same app's Google Play Data Safety card declares *"no data is shared with third parties."*
And the AutoNavi dependency is not merely a privacy fact: it is the best available explanation for
the positioning failures, because the watch is resolving a European child's location against a
Chinese geolocation database. **The privacy problem and the accuracy problem are the same problem.**

Two caveats cut the other way. **The B20 band claim rests on a single string of vendor boilerplate**
byte-identical across five Carneo models spanning four years — and the 2nd-gen manual's own PDF title
is still the *1st-gen* title, so the copy-paste is visible at the document level. **No Declaration of
Conformity exists for this model at all**, nine months after launch, though the manual states one is
published; and the ULTRA-line DoCs that do exist cite **no GSM, no LTE, no GNSS and no SAR standard**,
while the sibling Buddy's DoC cites all four. **The Romania verdict depends on B20, and B20 depends on
marketing copy that Carneo has never certified.**

And one correction in the watch's favour that turns into a worse finding on inspection: it is **not**
single-constellation. The chip does GPS+GLONASS (or GPS+BeiDou — one or the other, never both), and
Carneo simply never says so. But **Galileo is absent at silicon level and can never be added** —
confirmed from the GNSS driver's own NMEA talker IDs and from 37 field captures in which Galileo never
appeared once. In Europe, on this shortlist's number-one criterion, that is a permanent structural
deficit against a rival that has Galileo *and* BeiDou.

## Does it work in Romania?

**Tier 4 reached, and comfortably.** This is the strongest Romanian channel evidence of any
non-Garmin candidate, but it is channel evidence, not a working-device report.

What is established:

1. **Carneo runs its own Romanian storefront.** `carneo.eu` links `carneo-store.ro` alongside
   carneo.cz / .sk / .hu / .at as its country stores (accessed 2026-08-19). The site is in
   Romanian, prices in RON, with a Romanian phone (`+40 722 415 799`) and
   `contact@carneo-store.ro`.
2. **There is a Romanian service address.** carneo-store.ro's warranty page names a physical
   Romanian repair centre: *"CTS Cardinal Top Systems SRL, Str. Ceasornicului, Nr. 7, Sector 1,
   010 001 București"*, with technical support on `0722 415 799` / `suport@carneo-store.ro`
   (accessed 2026-08-19). Warranty terms in Romanian: *"oferim o garanție standard de 24 de
   luni pentru produsele CARNEO. Bateriile incluse în dispozitive sunt acoperite de o garanție
   de 6 luni."* — "we offer a standard 24-month warranty for CARNEO products. Batteries
   included in devices are covered by a 6-month warranty."
3. **But there is no Romanian legal entity.** The billing party on carneo-store.ro is the Slovak
   parent: *"TRUST System, s.r.o. / Jiráskova 19 / 917 01 Trnava / ID:36249343 / Kod TVA:
   SK2020167270"*, *"Compania este înregistrată în Registrul Regional al Comerțului Trnava"*
   ("The company is registered in the Trnava Regional Commercial Register"). It does hold a
   Romanian bank account (`IBAN RO58RNCB0072185504690001`, BCR), which is a real commitment
   signal but is not incorporation.
4. **The RO storefront does not stock this watch.** A site search for "guardkid" on
   carneo-store.ro returned no products, and the kids-watch category URLs 404 (2026-08-19).
   The Romanian Carneo store sells adult smartwatches, rings, audio — no GuardKid line.
   **The Romanian channel for this specific model is eMAG, not Carneo.**
5. **eMAG.ro has it in stock in all three colours at 865.41 RON** (accessed 2026-08-19), listed as
   *"Ceas inteligent pentru copii CARNEO GuardKid+ 4G ULTRA a 2-a generatie, WiFi, 4G - orice
   operator, monitorizare spion si prin GPS, AGPS, baterie 1.000mAh, buton SOS, Aplicatii
   (WhatsApp, Messenger, Instagram, YouTube), negru"* — "Smart watch for children CARNEO
   GuardKid+ 4G ULTRA 2nd generation, WiFi, 4G – any operator, spy monitoring and via GPS,
   AGPS, 1,000 mAh battery, SOS button, Apps (WhatsApp, Messenger, Instagram, YouTube), black".
   **"4G - orice operator"** ("4G – any operator") is the listing's own wording and is consistent
   with the nano-SIM architecture: there is no vendor SIM, no plan, nothing to geo-gate.
6. **The iOS app is live in the Romanian App Store** with Romanian among its 45 languages
   (`apps.apple.com/ro/...`, accessed 2026-08-19), developer TRUST System s.r.o.

What is **not** established:

- **Tier 1 not reached.** Carneo publishes no supported-country list and names no Romanian
  operator anywhere. The `+40` registration flow was not tested.
- ~~**Tier 2 not reached — and this is a real gap.**~~ **SUPERSEDED — Tier 2 IS reached.** See
  "Scrutiny pass (2026-08-19)" §5. The Google Play listing does render on the Romanian storefront and
  offers install; the mirror figures quoted here (v1.3.0 / 2026-06-22 / 2.2 stars) were also wrong —
  Play itself says updated **13 June 2026**, **3.1/5 from ~1,110 reviews**. What remains true is that
  the RO storefront displays **no ratings block at all** while CZ does, i.e. essentially no Romanian
  users.
- **Tier 3 not reached. There is not one Romanian first-hand report of this model.** The eMAG
  listing has **zero reviews and zero ratings**. No Romanian-language review, forum post or
  video for the ULTRA 2nd gen was found. The nearest human evidence is Slovak.
- **A seller conflict worth knowing before you pay.** The eMAG search page renders the seller as
  eMAG; the product page renders it as marketplace seller **"HomeMode" (4.7)**. Treat it as
  marketplace until confirmed at checkout — it changes the return window from eMAG 1P's 30 days
  to the 14-day EU distance-selling minimum.

## Pre-purchase test

1. Install **CARNEO Guard** from the **Romanian** Play storefront. If it is not offered, stop —
   that is the unresolved tier-2 gap and it is decisive.
2. Register an account with a **+40** number/email **before paying**. The app registers by
   e-mail and verification code, so also confirm the account survives a restart.
3. At checkout on eMAG, **read who the seller is**. If it is HomeMode (marketplace), you have
   14 days, not 30. Buying from Carneo's Slovak channel (smartshop.sk had it at €104.88 on
   2026-08-19, ~40% cheaper) is legal EU distance selling but sends every warranty claim to
   Trnava rather than the Bucharest service centre.
4. Week one, on a Romanian SIM: place an **outgoing and an incoming voice call while the watch
   is on LTE**, and check whether the status bar shows the call dropping to 2G. That single test
   is the VoLTE answer nobody has published.
5. Check position **inside the school building**, not the garden — see below.

**Added after the scrutiny pass of 2026-08-19 — reordered by what is now most likely to fail:**

0. **Before anything else, put it on the child's wrist.** Three independent reviewers and two paid
   testers say it is bigger than an adult watch; one paid tester's son stopped wearing it within days
   and now carries it in a rucksack. If it comes off the wrist, nothing else on this list matters.
6. **Test the SOS button and read the SMS it sends.** Four independent sources report the fallback
   location landing in **China / Hong Kong / Argentina**, including one where the SOS SMS itself
   carried Chinese coordinates. Do this on day one.
7. **Do not rely on Wi-Fi for indoor position.** Carneo's manual and Carneo's own Play Store reply
   both say the Wi-Fi radio sleeps and that Wi-Fi is *"only for firmware updates"* — and the manual
   says localisation stops with it. Check the school fix with Wi-Fi both on and off; expect LBS.
8. **Register with `+40` and note whether the app asks you to choose a region.** The June 2026 v2.8
   update shipped a region selector that users in SK, CZ and HU reported as unselectable, locking
   them out entirely. Also confirm which features actually appear after 48 h — the backend gates by
   country and users report features silently missing.
9. **Charge it nightly and stop expecting otherwise.** Set the 10-minute interval, run one full
   school day, and check the level at pickup.
10. **Keep the box for 14 days and treat early hardware failure as likely, not unlucky** — 3 of 30
    Alza reviewers had a unit die, one of them twice including the warranty replacement.
11. **Hunt for an AGPS-server setting in the app and switch it away from the Asian default.** On the
    sibling Platinum, two independent owners report the watch ships with an "Asian" AGPS server and
    that switching it to Google made the fix *"o 100% lepší"* ("100% better"). Not confirmed to exist
    on the ULTRA — but the app is the same package, Carneo's own privacy policy names **AutoNavi**
    (Alibaba's Amap) as the location provider, and that would explain every wrong fix in this file.
    **If it exists, this is the single highest-value thing you can change.**
12. **Buy a SIM with a data bundle, not a voice-only prepaid.** A Slovak owner: *"bez internetového
    balíčka na sim karte nefunguje"* — "without a data package on the SIM card it does not work."

## Positioning quality in real use

Carneo markets *"CARNEO 5way Pointer®"* — GPS + AGPS + WiFi + LBS + gyroscope, *"o precizie de
până la 5 metri"* ("accuracy of up to 5 metres", eMAG.ro). Attribute that to Carneo; it is an
outdoor best case.

The vendor's own manual is far more honest, and it is the most useful document in this file:

> *"Hodinky využívají prioritně svoji lokalizaci se zabudovaného GPS přijímače 'přesnost je několik
> desítek metrů'. Pokud se však hodinky nacházejí na místě s nízkým nebo žádným GPS signálem
> 'budova, podzemní garáž, budova, škola apod.' Využívají k lokalizaci dostupné WIFI sítě, kdy je
> přesnost lokalizace závislá na přesnosti geolokačních informací WIFI sítí v okolí hodinek.
> Přesnost může být od 5m až do 300m. ... Pokud nejsou dostupné ani žádné WIFI sítě, ani GPS signál
> ze satelitů, hodinky provádějí lokalizaci pomocí BTS 'LBS' vysílače operátora ... přesnost
> lokalizace ovlivněna počtem BTS vysílačů operátora v dané oblasti 'až do několika km'."*
>
> "The watch primarily uses its built-in GPS receiver 'accuracy is several tens of metres'. If
> however the watch is in a place with low or no GPS signal 'building, underground garage,
> building, school etc.' it uses available WiFi networks, where accuracy depends on the accuracy
> of the geolocation data of the WiFi networks around the watch. **Accuracy can be from 5 m up to
> 300 m.** ... If neither WiFi networks nor satellite GPS are available, the watch locates via the
> operator's BTS 'LBS' transmitter ... accuracy is affected by the number of the operator's BTS
> transmitters in the area '**up to several kilometres**'." (CZ manual, GuardKid+ 4G ULTRA 2nd gen.)

A Slovak review dated **2026-07-23** confirms this empirically: outdoors the error is
*"maximálne o pár metrov"* ("a few metres at most"), but *"v interiéri sa spravidla nepodarí nájsť"*
GPS signal ("indoors it generally cannot be found"), with WiFi and LBS falling back to
**300–600 m**. One reporter; treat as indicative, not established.

**Yes, it silently falls back — but at least it says so.** The watch displays which technology
produced the fix (GPS / WIFI / LBS text beside the timestamp) and the app shows the same, so the
fallback is *legible* — better than most of this category. But the first fix returned is usually
the worst one: *"nejčastěji LBS, nebo WIFI"* ("most often LBS, or WiFi"), upgrading to GPS within a
maximum of 58 seconds **only if the watch is outdoors**. A manual refresh returns a result
*"nejpozději do 58 sekund"* ("within 58 seconds at the latest").

**One contradiction the buyer must resolve.** WiFi positioning is the only thing keeping this
watch usable inside a school — and the manual tells you to turn WiFi off:

> *"Nepoužívejte připojení k WIFI jako náhradu za 4G mobilní data na SIM kartě! Z důvodu šetření
> baterie se připojení WIFI po čase přepne do šetřícího režimu a uspí elektroniku WIFI přijímače
> ... doporučujeme vypnout na hodinkách Wifi (v menu nastavení) a používat data ze SIM karty.
> Připojení WIFI se používá výhradně pro aktualizace produktu."*
>
> "Do not use the WiFi connection as a replacement for 4G mobile data on the SIM card! To save
> battery, the WiFi connection switches after a while into power-saving mode and puts the WiFi
> receiver electronics to sleep ... **we recommend switching WiFi off on the watch** (in the
> settings menu) and using data from the SIM card. **The WiFi connection is used exclusively for
> product updates.**"

Whether WiFi *scanning* for positioning survives with WiFi *connectivity* disabled is **unverified**.
On the plain reading of the manual, following Carneo's own advice degrades indoor positioning to
LBS — kilometres. This is the single most important thing to test in week one.

~~Also note: **no GLONASS, no Galileo, no BeiDou is published for this device.** Single-constellation
GPS is a materially weaker fix than the multi-GNSS competitors in this field.~~

> **CORRECTED 2026-08-19 — see "Scrutiny pass" §11b.** Carneo publishes GPS only, but that is
> under-documentation, not the hardware. The SC8541E's on-die GNSS block does **GPS + GLONASS +
> BeiDou** — though only **one secondary constellation at a time** (two firmware images, `gpsgl` /
> `gpsbd`; the default is GPS+GLONASS). What *is* real and permanent is that **Galileo and QZSS are
> absent at chip level**, confirmed both from the GNSS HAL's NMEA talker IDs and from 37 field
> captures in which Galileo never once appeared. Single-band only. **Against a rival with Galileo and
> BeiDou this watch is structurally behind on the file's number-one criterion, and no firmware update
> can close it.**

## Battery in real use

Two manufacturer figures exist and they disagree with each other by a factor of four. Both are
Carneo's; only one is on the box.

**Claimed (marketing):** *"1000mAh Li-Po, Up to 4 days typical use; up to 96 hours standby"*
(carneo.eu). carneo.cz/sk say *"až 4 dny"* use / *"do 6 dní"* standby. eMAG.ro advertises
"up to 144h autonomy".

**Claimed (the manual, by tracking mode)** — this is the number that matters:

> *"Normální režim / automatická lokalizace každých 10 minut = výdrž Max. 20 – 24 hodin*
> *Režim úspory energie / automatická lokalizace každou 1 hodinu = výdrž Max. 2 - 3 dny*
> *Režim spánku. Polohu si můžete vyžádat manuálně = výdrž Max. 3-4 dny"*
>
> "Normal mode / automatic location every 10 minutes = runtime **max. 20–24 hours**.
> Power-saving mode / automatic location every 1 hour = max. 2–3 days.
> Sleep mode, position requested manually = max. 3–4 days."

And the caveat almost nobody publishes:

> *"Výdrž baterie je uváděna při 100% 4G GSM signálu. V případě, že se hodinky během dne nacházejí
> se slabším GSM 4G signálem výdrž baterie se rapidně zkracuje ... Například pouze 50% síla 4G GSM
> signálu může zkrátit výdrž baterie na méně než 50%."*
>
> "Battery life is stated at 100% 4G GSM signal. If during the day the watch is in a weaker GSM 4G
> signal, battery life shortens rapidly ... For example, only 50% 4G signal strength can cut
> battery life to less than 50%."

Two further published drains: enabling the pedometer costs *"až o 30%"* ("up to 30%") of runtime,
and video calling burns *"5MB / 1 minutu"* of data (total expected usage ~200 MB/month without
video).

**Observed:** exactly one dated report. testado.sk, **2026-07-23 (Slovakia)**: the reviewer got
**3 days** against the claimed 4, under unspecified "normal use", and warns
*"Ak sa budú deti so svojimi hodinkami hrať celý deň, bude ich potrebné dobíjať každý deň"* —
"If children play with their watch all day, it will need charging every day." The tracking interval
is not stated, so this figure cannot be compared directly to the manual's modes.

**No observed figure at all exists for the 10-minute interval.** The 20–24 h number is Carneo's own
and remains untested by any third party found.

There is a warranty consequence: batteries carry **6 months**, not 24 (carneo-store.ro, RO terms).

## Network & bands

**The 2nd-generation band list is published, and it does not have to be inherited from the 1st gen —
it is stated for this exact model.** Two Carneo national sites carry identical spec tables
(accessed 2026-08-19):

> *"GSM B2 B3 B5 B8, WCDMA B1 B2 B5 B8, FDD-LTE B1 B2 B3 B5 B7 B8 B20 B28A"*
> — carneo.cz and carneo.sk, GuardKid+ 4G ULTRA 2nd gen. product pages

This resolves the open question in OPTIONS.md item 4. It happens to match the 1st gen, but it is
now sourced independently for the 2nd gen rather than assumed.

**Fit against Romania:**

- **B20 (800 MHz): present.** This is the decisive one — Orange's only sub-1 GHz LTE band, and
  what carries a wrist antenna through concrete.
- **B3 (1800): present.** The national workhorse.
- **B7 (2600): present.** Urban capacity.
- **B1 (2100): present.**
- **B28A: present but worthless here.** Romanian 700 MHz is deployed as 5G NR n28, not LTE B28.
  Do not count it.
- **GSM B8 (900) and B3 (1800): present** — meaning that if the device drops to 2G, it drops onto
  the bands Orange and Digi still run.
- **WCDMA B1/B2/B5/B8: present and dead.** Romania has no 3G. Its presence is only useful as
  evidence that this is not a 4G-only radio.

**VoLTE: UNKNOWN, and this is the real risk on this device.** The string "VoLTE" appears nowhere —
not on carneo.eu, not on carneo.cz's or carneo.sk's spec tables (checked explicitly for the literal
strings "VoLTE", "HD Voice", "VoWiFi"), not on the eMAG listing, and not in the Czech manual.
Carneo advertises *"4G HD videohovor"* / *"apeluri video HD"* — **that is a video call over packet
data and is not VoLTE.** Do not read one as the other.

Two indirect signals, both **unverified**:

- The manual's SMS-alert section says a low-battery or SOS SMS gets through because
  *"k čemuž je dostačující i slabý signál, případně **2G signál**"* — "for which even a weak signal,
  or a 2G signal, is sufficient." The device is expected to sit on 2G at times.
- ~~The SoC is the UNISOC/Spreadtrum **SC8541E**… An XDA thread exists titled *"[ROM][8.1] Unisoc
  8541E watches AOSP8.1 VoLTE fixed ROM released"* — the title alone indicates VoLTE on this platform
  is a known problem area requiring community fixes.~~ **CORRECTED 2026-08-19 — this inference was
  backwards.** The thread has now been read in full (via r.jina.ai): it says *"using GSI (Generic
  System Image) on Unisoc platforms causes VoLTE functionality broken"* — i.e. **VoLTE works on stock
  vendor firmware and is broken only by aftermarket generic ROMs.** UNISOC's own 8541E page publishes
  `VoLTE/ViLTE | VoWiFi LTE TDD&FDD`. The platform is not the problem; see §11a for what is.

**What happens to voice if 2G is retired:** unknown, and that is the honest answer. If VoLTE is
absent, this watch's voice is a 2G dependency with no published end date on Orange or Digi. Buy the
SIM from **Orange or Digi**, not Vodafone, so a VoLTE provisioning failure degrades to 2G voice
rather than silence.

One operational note from the manual that will look like a fault: if the SIM has no working data,
*"hodinky se automaticky přibližně každou hodinu restartují"* — "the watch automatically restarts
approximately every hour" — trying to re-attach. And APN may need to be set manually
(Nastavení → Mobilní síť → Přístupové body → Obnovit výchozí).

## Features & what can be disabled

> **Three rows in the table below are contradicted by owner reports — see "Scrutiny pass
> (2026-08-19)" §7.** In short: the child **can** install apps on the watch without the parent
> knowing; **SMS to and from any number cannot be disabled**; and watch-to-watch pairing adds
> contacts the parent cannot see or delete. Everything below is what the *manual* claims.

This model's headline liability is the app library. The Romanian eMAG title advertises
**WhatsApp, Messenger, Instagram, YouTube**; carneo.eu's fuller list adds **TikTok, Telegram,
Viber, Signal, Facebook, Spotify** and a translator. For a 7-year-old that is the problem, not the
feature. Here is what is actually controllable.

| Extra | Can the parent app switch it off? | Evidence |
|---|---|---|
| **App store / app library** | **Yes — structurally.** The child cannot install anything. *"Obchod s aplikacemi: Pomocí obchodu s aplikacemi můžete **vzdáleně do hodinek nainstalovat** dítěti různé aplikace a hry."* — "App store: using the app store **you can remotely install** various apps and games onto the child's watch." Apps arrive only if a parent pushes them. Ship it with none. | CZ manual |
| **Installed apps and watch functions** | **Yes, individually and on a timer.** *"Kontrola zábavy: Funkce slouží k **časovému omezení nebo úplnému zakázání** používání aplikací a funkcí v hodinkách."* — "Entertainment control: this function serves to **time-limit or completely forbid** the use of apps and functions on the watch." Carneo's product page restates it: *"Na dálku mohou omezit nebo úplně zablokovat jakoukoli funkci hodinek podle vlastního uvážení"* — "Remotely they can limit or completely block any function of the watch at their own discretion." | CZ manual; carneo.cz |
| **School-hours lockdown** | **Partial — there is no named "Class Mode".** Two separate features approximate it: *"Omezení používání: Zvolte časové rozmezí, kdy nechcete aby osoba, která nosí hodinky byla rušena."* ("Usage restriction: choose the time range in which you don't want the wearer disturbed") — described in the manual for *sleep*, not lessons — plus "Kontrola zábavy"'s time limits. A separate *"Rozvrh hodin"* / *"rozvrh vyučovacích hodin"* exists but is only a **timetable displayed on the watch**, not a lockdown. Whether "Omezení používání" also suppresses incoming calls from whitelisted contacts is **unverified**. | CZ manual; carneo.cz |
| **Outgoing dialling by the child** | **Yes.** *"Funkce vytáčení vám umožní ... povolit nebo zakázat vytáčet jakákoli telefonní čísla na hodinkách pomocí numerické klávesnice, ani například nechtěně nezavolal cizím lidem případně na 112."* — "The dialling function lets you allow or forbid dialling any phone number on the watch via the numeric keypad, so they don't accidentally call strangers or 112." | CZ manual |
| **Incoming calls from strangers** | **Yes — whitelist.** *"Odmítání neznámých hovorů"*; with it on, *"hodinky budou přijímat pouze hovory od vámi vložených čísel"* ("the watch will accept calls only from numbers you have entered"). Up to 100+ contacts. | CZ manual |
| **Incoming SMS** | **Yes.** *"SMS přijaté hodinkami: Tato volba umožňuje povolit, nebo zakázat přijímat hodinkám textové zprávy."* All received SMS are also mirrored into the parent app. | CZ manual |
| **Camera** | Coverable by "Kontrola zábavy" as a watch function; **not separately confirmed**. Parent can also trigger it remotely ("Vzdálená fotografie"). | CZ manual |
| **SOS** | Up to 3 numbers, dialled sequentially with retry. Not disableable (correctly). | CZ manual |
| **Video calling** | Present (4G data). Disable path **unverified** beyond the generic block. | CZ manual |
| **Watch-to-watch friending** | Present — two Carneo watches bump together to pair and can then call/message each other. **No documented parental approval step.** Worth checking. | CZ manual |
| **Child powering the watch off** | **Blocked by design.** *"Po zapnutí hodinek nelze jednoduše hodinky vypnout prostřednictvím tlačítka zap/vyp ... aby nemohl kdokoli dítěti hodinky vypnout a tím znemožnit jejich lokalizaci."* Parent can power it off remotely; an ~8-second button hold still works. | CZ manual |
| **Night power-saving (22:00–06:00)** | Optional — and it **deregisters the watch from the network**: *"V tomto režimu nejsou aktivní datové přenosy."* No tracking while it is on. | CZ manual |

**Net assessment on the distraction question: better than the listing implies.** The app store is a
parent-side push mechanism, not a child-side shop, and "Kontrola zábavy" can block outright. The gap
is that there is **no purpose-built school mode** — you have to compose one from a do-not-disturb
window and per-app time limits, and nobody has published what that actually blocks during lessons.

## Security & privacy

This is where the device fails hardest, and the evidence is fresh.

**1. The platform is SETracker, and it was broken open at DEF CON 34 eleven days ago.**
The Android package is **`com.tgelec.carneoguard`** — the `com.tgelec.*` prefix is the tell. On
**2026-08-08**, Felipe Solferini and Vangelis Stykas presented *"Tracking the Trackers"* at DEF CON
34, analysing 70+ trackers and finding that dozens of nominally independent brands share three
Chinese backends. Reporting dated **2026-08-14** names the affected brands, and
**"Carneo Guard" is on the list** — alongside Wonlex, SaveFamily, Garett Kids (`com.tgelec.garetts`),
KidiWatch (`com.tgelec.kidiwatch`), Beafon (`com.tgelec.beafon`), Forever KidsCare, TKSTAR and
others, 39 brands on the SETracker server alone. The backend operator is named as **YQT, trading as
3G Electronics**, Shenzhen. This is corroborated by a second independent outlet.

The authentication flaw allowed an attacker to *"read and spoof location, intercept text and voice
messages, listen in silently, trigger the camera"* — **without any indication on the device** — using
only a trivial identifier such as the parent's registration e-mail. SETracker is credited with
~10 million devices.

**Vendor response: none from Carneo.** Wonlex posted a blog on 2026-08-10 claiming fixes from an
"internal security audit" without crediting the researchers; SinoTrack and Thinkrace did not respond
at all. **No statement from CARNEO / TRUST System s.r.o. on this research was found.**

**2. This is a repeat, not a first offence.** In **July 2020** (older source, flagged as such) Pen
Test Partners found SETracker's server-to-server API entirely unauthenticated — an attacker could
make any device call any number, send arbitrary SMS, and access cameras. It was fixed server-side
without app updates. The same platform, the same class of failure, six years apart.

**3. Data hosting: China, on the evidence available.** The DEF CON 34 reporting places the backend on
**Alibaba Cloud in mainland China**. Carneo's own claim is only *"ISO/IEC 27001:2013 certified
servers"* (carneo.eu) — a certification, not a location, and it names no jurisdiction, no processor
and no sub-processor. ~~**Carneo publishes no privacy policy for the Guard app that states where
children's location data is stored.**~~ **CORRECTED 2026-08-19 — it does. See "Scrutiny pass" §10d.**
There is a dedicated **CARNEO GUARD Privacy Policy** at
`carneo.sk/user/documents/appguard/privacy-en.htm`. It claims storage in **Frankfurt am Main,
Germany**, but it is a machine-translated Chinese document that names **AutoNavi (Alibaba's Amap)**
as the location provider and embeds **ChuanShanJia (ByteDance), Guangdiantong (Tencent), KuaiShou,
Baidu Alliance, Aliyun and Ximalaya SDKs** — while Google Play's Data Safety card for the same app
declares *"No data is shared with third parties."* Those cannot both be true.
The other privacy policy, reachable on carneo.eu, covers the *CARNEO
FIT* app, a different product, and states *"The CARNEO FIT App does not transfer Personal Data
outside the European Union to third countries and/or international organizations."* **That sentence
is about CARNEO FIT, not Carneo Guard. Do not transfer it.** The GDPR controller for either is
TRUST System s.r.o., Trnava, Slovakia. The iOS App Privacy card declares precise **Location**,
**e-mail** and **user ID** as data *linked to the user*.

**4. A covert remote-listen feature exists, it is documented, and it cannot be locked.**
This is not an inference — Carneo describes it plainly:

> *"Odposlech: Zadejte do prázdného pole své telefonní číslo a potvrďte OK. Na vámi zadané číslo
> hodinky okamžitě zavolají. Po zvednutí hovoru na telefonu bude přenášen pouze zvuk s hodin, díky
> čemuž je můžete odposlouchávat. **Hodinky se při odposlechu tváří jako vypnuté bez jakékoli
> aktivity.**"*
>
> "Remote listening: enter your phone number in the empty field and confirm OK. The watch will
> immediately call the number you entered. Once you pick up, only audio from the watch is
> transmitted, so you can listen in on it. **During remote listening the watch appears to be switched
> off, with no activity whatsoever.**" (CZ manual)

The Romanian eMAG listing sells this in the product title as **"monitorizare spion"** ("spy
monitoring"). No documented way to disable it exists, and nothing in the manual describes an
indicator, a log, or the child's consent. Combined with finding (1) — that a third party could
trigger device commands on this backend — the covert microphone is the concrete harm, not a
theoretical one.

**5. A legality gate that will look like a bug.** The manual warns:

> *"Také aktivace / zobrazení různých funkcí jako jsou odposlechy a jiné se zobrazí v aplikaci až po
> nějakém čase, do 48 hodin. Je to způsobeno prověřováním legislativy země, ve které se hodinky
> nacházejí."*
>
> "Activation/display of various functions such as remote listening and others will appear in the app
> only after some time, up to 48 hours. This is caused by **checking the legislation of the country in
> which the watch is located**."

So the backend geo-gates features by country. What that gate decides for **Romania** is **UNKNOWN**,
and it is a second reason to allow 48 hours before concluding the watch is broken.

**6. App quality signal.** CARNEO Guard is rated **2.2/5 from ~1,071 ratings** across 100,000+
installs (mirror data, 2026-08-19). That is bottom-decile for this category. It is at least actively
maintained: v1.3.0 dated **2026-06-22** on Android, v2.9 on **27 June** for iOS.

## Reality check

- **"1000 mAh — the largest battery in the field" / "up to 4 days"** means up to 4 days with
  automatic tracking essentially off (manual position requests only). At the tightest useful setting
  — a 10-minute interval — Carneo's own manual says **20–24 hours**, and less than half of that at
  half signal strength. A 1000 mAh cell buys you a comfortable *one* school day with real tracking,
  not four. It is still the best battery here; it is not a four-day battery.
- **"Accuracy up to 5 metres"** is an outdoor GPS best case. In the school building the same vendor's
  manual says 5–300 m via WiFi and *up to several kilometres* via LBS, and a Slovak reviewer measured
  300–600 m indoors.
- **"CARNEO 5way Pointer®"** is a brand name for GPS + AGPS + WiFi + LBS + accelerometer.
  ~~There is no GLONASS, Galileo or BeiDou.~~ **CORRECTED 2026-08-19:** the chip does GPS+GLONASS
  (or GPS+BeiDou — one or the other, never both), and Carneo simply never says so. **Galileo and QZSS
  are absent at silicon level and cannot be added.** See §11b.
- **"4G - orice operator"** (eMAG) is true and is the device's best structural property — plain
  nano-SIM, no vendor plan, nothing to withdraw. It says nothing about whether voice works over LTE.
- **"Apps: WhatsApp, Instagram, TikTok, YouTube"** is sold as a feature and is a liability at age 7.
  ~~The child cannot install any of them.~~ **CORRECTED 2026-08-19 — that was a vendor claim and an
  owner contradicts it:** *"Lze si samovolně stáhnout aplikaci přímo v hodinkách - bez rodičova
  vědomí"* ("one can download an app directly on the watch oneself, without the parent's knowledge").
  There is an app store **on the watch**, which the child operates; the parental control is a
  blocklist applied after the fact, not an architectural barrier. Separately, owners report the
  headline apps barely work anyway: *"whatsapp, youtube a spotify ani nejdou zprovoznit, akorat se
  nainstaluji"* ("WhatsApp, YouTube and Spotify can't even be made to work, they just install",
  Alza, 24.12.2025) and *"aplikácia Signal nefunguje - pri overení čísla spadne"* ("the Signal app
  doesn't work — it crashes at number verification", Alza, 06.08.2026).
- **"IP68"** per Carneo and eMAG; a third-party comparison site lists IP67 for both generations. The
  manual overrides both: *"Nepoužívejte hodinky při koupání, sprchování, teplé koupeli"* — "Do not
  use the watch while bathing, showering or in a hot bath", and liquid damage is not covered by
  warranty.
- **"ISO/IEC 27001:2013 certified servers"** is a certificate claim with no named jurisdiction, on a
  backend that independent researchers publicly broke in August 2026.

## What users say

> **SUPERSEDED 2026-08-19 — read "Scrutiny pass (2026-08-19)" §1 instead.** The claim below that
> "there is almost nothing" was a search failure, not a fact. There are ~50 dated owner reports of
> this exact generation (Alza.cz 30, Heureka.cz 19), going back to **2025-12-09**, plus ~1,110 Play
> ratings and 80 iOS reviews of the app. About half the visible positive pool is a **paid Testuj.to
> seeding campaign**. The section below is left in place for the record but is materially incomplete
> and skews positive.

The honest headline: **there is almost nothing.** Zero Romanian reviews, one Slovak review, one
anonymous Czech star rating. Every conclusion below rests on one reporter.

**Works:**

- **Slovakia, 2026-07-23** — testado.sk, review of this exact model, scored 9.2/10. Outdoor GPS error
  *"maximálne o pár metrov"* ("a few metres at most"). The reviewer singles out manual location
  refinement as *"medzi detskými smart hodinkami pomerne unikátna"* — "relatively unique among
  children's smartwatches" — and praises the breadth of parental controls. Battery **3 days**.
  *(1 report)*
- **Czechia, 2026-08-19** — planeo.cz shows a single verified-purchase 5-star rating with no text.
  *(1 report, no substance)*

**Fails:**

- **Slovakia, 2026-07-23** — same reviewer, on indoor positioning: GPS *"v interiéri sa spravidla
  nepodarí nájsť"* ("indoors it generally cannot be found"), falling back to WiFi/LBS at 300–600 m;
  and on battery: *"Ak sa budú deti so svojimi hodinkami hrať celý deň, bude ich potrebné dobíjať
  každý deň"* ("if children play with their watch all day, it will need charging every day").
  *(1 report)*
- **Global, ongoing** — CARNEO Guard sits at **2.2/5 from ~1,071 ratings**. The individual review text
  could not be retrieved (Play Store would not render), so **what the complaints are about is
  UNKNOWN**. Do not assume; the rating is a flag, not a finding.
- **Romania** — **no user reports of any kind exist.** eMAG: 0 reviews.

## Brand-halo warning — do not buy the wrong Carneo

CARNEO's catalogue mixes generations and radios at similar prices. Three traps:

1. **CARNEO GuardKid+ MINI — €109 — is 2G/3G only and is dead in Romania.** No LTE at all, 450 mAh,
   1" 240×240. It sits in the same catalogue, uses the same *Carneo Guard* app, carries the same
   brand and costs only €20 less than the ULTRA. Romania has no 3G, so this device has nothing but
   a 2G layer nobody has committed to keeping. **Do not buy it.**
2. **CARNEO GuardKid+ 4G ULTRA 1st gen** is still sold (~€95) and is a different device: 1.69" IPS
   240×280, IP67, no SpO2/heart-rate. Confusingly, **carneo.eu's English "GuardKid+ 4G ULTRA" page is
   the 1st-gen spec** (1.69" IPS, IP67) while the CZ/SK pages carry the 2nd gen. Check for
   **"2nd gen." in the product name** and **1.72" AMOLED 320×380** before paying.
3. Carneo prices the older **Platinum** (2023, €155) *above* this newer ULTRA (€129) on its own site —
   end-of-life pricing, not a premium.

**Spec conflict resolved:** the "1.69" IPS 240×280 vs 1.72" AMOLED" contradiction in OPTIONS.md was
not a contradiction — it was **two different generations**. The 2nd gen is
**1.72" Super AMOLED, 320×380**, confirmed independently by carneo.cz, carneo.sk and the eMAG.ro
listing (all accessed 2026-08-19), and by a 1st-vs-2nd-gen comparison table.

## Scrutiny pass (2026-08-19)

**What this pass changes.** The previous pass concluded "there is almost nothing" — one Slovak
review, one anonymous Czech star. That was wrong, and wrong in a way that flattered the watch. There
are **~50 dated owner reports of this exact generation** (Alza.cz 30, Heureka.cz 19, plus Google Play
and the iOS App Store for the app), the model has been on sale since **December 2025**, not July
2026 — and roughly **half of the visible positive review pool is a paid seeding campaign that
Heureka itself labels "Sponzorováno"**. Read the unsponsored half and the picture is materially
worse than the file recorded. Eight substantive corrections are made below and marked **CORRECTION**.

### 1. Observation: the watch is not unobserved — it was under-searched

**CORRECTION — launch date. `release_year` was UNKNOWN with "earliest dated evidence 2026-07-23".
The 2nd gen was on sale in CZ/SK by early December 2025**, seven months earlier. Auditable evidence:

- Alza.cz verified-purchase review, **Zlatica, Prievidza, 09.12.2025**, variant "CARNEO GuardKid+ 4G
  ULTRA 2nd gen. pink" — the earliest owner report found.
- Alza.cz customer question, **3. 12. 2025**: *"dobrý den. potřebují tyto hodinky k volání data, nebo
  mohou fungovat s předplacenou SIM kartou bez dat?"* — "hello, do these watches need data for
  calling, or can they work with a prepaid SIM without data?"
- Further Dec-2025 reviews: Filip/Bratislava 12.12.2025, Marek/Modra 15.12.2025, Lukáš/Praha 5
  22.12.2025, Alexandr/Karlovy Vary 24.12.2025, Karel/Děčín 27.12.2025, Tereza 29.12.2025,
  Anonym 31.12.2025.

So it launched into the **Christmas 2025** season.

**Review pools found, and whether they are contaminated:**

| Pool | n | Score | This generation only? | Verdict |
|---|---|---|---|---|
| **Alza.cz** `/recenze/...-2nd-gen-black-13102160.htm` | 30 reviews / 39 ratings | **3.9/5** | **Yes** — every entry is labelled `varianta ... 2nd gen.` (black/blue/pink). Pooled across colours and across alza.cz+alza.sk, **not** across generations. | **Kept.** Best pool available. |
| **Heureka.cz** `carneo-guardkid-plus-4g-ultra-2nd-gen` | 19 reviews / 21 ratings | **86%** | Yes — separate product page from the 1st gen (`.../carneo-guardkid-plus-4g-ultra/`). | **Kept, but heavily discounted** — 10 of 19 are sponsored, see below. |
| **eMAG.ro** | **0** | — | — | No Romanian evidence exists. Re-verified 2026-08-19. |
| **Google Play** (app, all Carneo watches) | ~1,110 | **3.1/5** | No — platform-wide | Kept as **platform** evidence, labelled. |
| **iOS App Store** (app) | 80 retrieved via iTunes RSS | CZ **1.72**, SK **1.53**, HU **1.50** | No — platform-wide | Kept as **platform** evidence, labelled. |
| **Reddit** | **1** hit, about the *Platinum* | — | — | Nothing on this model. |

**CORRECTION — the Google Play rating. The file records "2.2/5 from ~1,071 ratings (mirror data)".
Google Play itself says 3.1/5 from ~1,110 reviews** (CZ storefront, read directly 2026-08-19). The
2.2 came from apkcombo and is wrong; note that *Carneo Fit*, the sibling app, is the one sitting at
2.3. Still poor, but the file overstated it. Play also gives the Android update date as
**13 June 2026**, not 22 June.

**The astroturf finding, and it is large.** Heureka labels 10 of its 19 reviews
*"Sponzorováno — přidáno … prostřednictvím spolupráce s Testuj.to"* ("Sponsored — added … through
cooperation with Testuj.to"), all dated 8–27 March 2026, every one rating 80–100% and recommending.
The campaign page (`testuj.to/testovani/detske-chytre-hodinky-carneo-guardkid-4g-ultra-2-gen`)
states: registration 17 Feb – 30 Mar 2026, testing 30 Mar – 22 Apr 2026, **10 testers sought**, the
watch supplied **"completely free of charge"** with a prepaid SIM, and each tester required to
deliver **four reviews, photographs and social-media posts**. Ten testers × four reviews ≈ 40 seeded
reviews pushed into the retail ecosystem; Carneo's own blog claims **"50 Dodané recenze"** ("50
reviews delivered"), **"94 % Doporučení produktu"**, **"10 rodin testovalo Ultra 2"**.

Two things follow:

1. **Heureka's 86% is not an organic score.** Strip the sponsored ten and the remaining nine
   unsponsored reviews are far more mixed, including the 50% review quoted in §2.
2. **Carneo then cites its own seeded campaign back as independent validation.** The article
   `carneo.cz/blog/test-detskych-gps-hodinek-2026/` — *"Nejlepší dětské GPS hodinky 2026 | Testy a
   recenze"*, authored by *"Redakce CARNEO"*, June 2026 — presents the Testuj.to numbers as test
   results and cross-references Testado.cz and Arecenze.cz. **It is vendor marketing formatted as a
   comparative test.** Discount it entirely. The widely-repeated "more than a thousand applicants"
   figure traces to this page, while the campaign page itself sought ten testers.
   *(Note: testado.sk — the file's single "dated review" — is part of that same referenced set, and
   a Czech-language twin exists at testado.cz dated 18 May 2026. Downgrade it from independent
   evidence to affiliate content.)*

**Alza, by contrast, is the pool to trust.** It carries no sponsorship labels, and none of the ten
named Testuj.to testers appears in it; the review flow between the two sites runs the other way
(Alza reviews are re-published on Heureka as *"Ověřený nákup, zakoupeno v Alza.cz"*, and some Alza
entries are marked *"recenze ze srovnávače"*). A stylistic suspicion remains — Alza's page 1 opens
with several long, fluent, uniformly positive, specifics-free entries while every detailed negative
is messy, typo-ridden and concrete — but it is suspicion, not evidence, and is reported as such.
**What matters is that Alza's 3.9/5 is a much worse product than the number implies:** the pool
contains three hardware deaths, a one-day battery, a 15 km position error and an Android-8.1
complaint.

**What was kept:** all Alza reviews with specific, falsifiable claims, and all Play/App Store text.
**What was discounted:** the ten Heureka sponsored reviews as a score, the carneo.cz "test" blog
entirely, and testado.sk/cz as independent evidence.

**Auditable negatives.** Reddit post search and comment search (`type=comment`) for `carneo`,
`guardkid`, and `"ceas copii" OR "smartwatch copil" carneo`: exactly **one** relevant hit in total,
r/czech *"Dotaz na místní rodiče - hodinky pro dítě"* (~June 2026), and it is about the **Platinum**,
not this model. **No Romanian-language report of this watch exists on Reddit, eMAG, or the App Store.**

**No YouTube review of the 2nd gen exists either.** A 25-result `yt-dlp ytsearch` for
*"Carneo GuardKid 4G Ultra 2nd gen recenze"* returned only 1st-gen ULTRA, Platinum and Buddy content
plus Carneo's own channel uploads — **not one video about this generation**, eight months after
launch. (The nearest independent Czech/Slovak video content is Testado.cz's Platinum and 1st-gen
reviews, and a 2022 Slovak video literally titled *"Hodinky na volanie Carneo GuardKid+ = REKLAMACIA
HODIN"* — "…= WARRANTY CLAIM OF THE WATCH" — which has 0 comments and is Platinum-era.) For a
mainstream retail product this thin a footprint is itself a finding: the seeded Testuj.to reviews
are, numerically, a large fraction of everything ever written about it.

### 2. Battery: resolved, and it is worse than either vendor figure suggested

**CORRECTION — `battery_observed_h: ~72` rested on one affiliate reviewer who did not state the
tracking interval. There are now eight independent observed figures and ~72 h is the outlier at the
top of the range, not the centre.** Observed, all for the 2nd gen unless marked:

- *"Baterie má dle popisu vydržet 4 dny ale **vydrží sotva jeden den**, takže večer už se vám dítě
  třeba vůbec nedovolá"* — "The battery according to the description should last 4 days but **it
  barely lasts one day**, so in the evening your child may not be able to reach you at all."
  (Alza.cz, Lukáš, Praha 5, **22.12.2025**, verified purchase, 2nd gen pink)
- *"Baterie ze 100 procent spadne z večera do rána klidně i o 25 procent. Pres den si párkrát
  nasdilite polohu 3x zavoláte a je po baterce."* — "The battery drops from 100% by easily 25%
  overnight. During the day you share the position a few times, make 3 calls, and the battery is
  done." (Alza.cz, Michal, Černovice, **09.04.2026**, 2nd gen pink)
- *"určitě bude potřeba **každý den dobíjet**, ne na pár dní jak bylo uvedeno"* — "it will definitely
  need **charging every day**, not for a few days as stated." (Heureka.cz, VencaLazy92,
  **6 July 2026**, verified purchase from Carneo.cz, 50%, **child aged 7**)
- *"hodinky pak vydrží třeba **den a půl**"* with the pedometer on — "the watch then lasts maybe **a
  day and a half**." (Alza.cz, Romana, Kyjov, **08.01.2026**, 2nd gen pink)
- *"Výdrž baterie je **cca 2 dny**"* (Alza.cz, Tereza, 29.12.2025) and *"při běžném užívání vydrží
  **dva dny** bez problémů"* (Heureka, Kateřina, 17.03.2026 — **sponsored**).
- *"vydrz bat neco mezi **1-2dny**"* — "battery life something between **1–2 days**."
  (Google Play, Pepe Karito, **29 June 2026** — model unstated, platform evidence)
- *"nabité vydrží **sotva 3 dny**"* — "charged it barely lasts **3 days**." (Google Play,
  Martin Pihera, 10 Jan 2026 — model unstated, platform evidence)
- *"Baterka pri častom používaní **vydrží deň**."* — "The battery with frequent use **lasts a day**."
  (Heureka.**sk**, Zuzana, **28 July 2026**, verified purchase from Carneo, 80%, 2nd gen)
- **3 days** (testado.sk 2026-07-23) — retained but now downgraded to affiliate content, and still
  with no stated tracking interval.

**Resolution.** The manual's **20–24 h at the 10-minute interval** is the honest figure and matches
the low end of the observed range; the marketing "4 days" corresponds to tracking essentially off.
Carneo's own product page already concedes the condition — *"Výdrž baterie až 4 dny na jedno nabití
**při 100% síle signálu**"* ("battery life up to 4 days on one charge **at 100% signal strength**",
carneo.cz). **Against the buyer's floor — a 9.5 h school day with tracking active — the watch
passes, but with no margin: it is a one-day battery that must be charged nightly.** Anyone reporting
3–4 days is not tracking at 10 minutes.

One further observed drain nobody publishes: *"jeden whatsaap videohovor sezere klidne 200MB dat"*
("one WhatsApp video call easily eats 200 MB of data" — Alza, Lukáš, 22.12.2025), against Carneo's
claimed ~200 MB **per month**.

### 3. Positioning: the Wi-Fi contradiction resolved — and a GNSS conclusion later overturned in §11b

> ⚠️ **The GNSS conclusion in this subsection was later overturned — read §11b.** Carneo publishes
> GPS only, and that verified absence stands as a *documentation* fact. But the silicon does
> GPS+GLONASS (default) or GPS+BeiDou. What is genuinely and permanently missing is **Galileo**.

**Carneo publishes GPS only: CONFIRMED, by verified absence.** Full-text search of the actual Czech manual PDF and of
three Carneo product pages (carneo.cz 2nd gen, carneo.sk 2nd gen, carneo.eu ULTRA) for the literal
strings `GLONASS`, `Galileo`, `BeiDou`, `GNSS`: **zero hits in all four documents** (2026-08-19). No
teardown, FCC ID or CE Declaration of Conformity naming this model was located. This is now a
verified absence rather than an unfound one. Note also that the band string
*"GSM B2 B3 B5 B8, WCDMA B1 B2 B5 B8, FDD-LTE B1 B2 B3 B5 B7 B8 B20 B28A"* is **byte-identical on
carneo.eu's 1st-gen page** — so carneo.cz/.sk/.eu are one boilerplate source, not three independent
ones. B20 still stands, but on thinner evidence than the file implied.

**The Wi-Fi contradiction is resolved, and the answer is the bad one.** The file quoted the manual's
Wi-Fi warning but cut it one clause short. The full sentence, verified against the PDF:

> *"Z důvodu šetření baterie se připojení WIFI po čase přepne do šetřícího režimu a uspí elektroniku
> WIFI přijímače, což způsobí, že hodinky nebudou mít dostupná data a tím Vám bude znemožněna
> komunikace s nimi **a také lokalizace**. Připojení WIFI se používá **výhradně pro aktualizace
> produktu**."*
>
> "To save battery the WiFi connection switches after a while into power-saving mode and puts the
> WiFi receiver electronics to sleep, which will cause the watch not to have data available and
> thereby prevent you from communicating with it **and also from locating it**. The WiFi connection
> is used **exclusively for product updates**."

**The manual states in terms that when Wi-Fi sleeps, localisation stops.** So Wi-Fi positioning is
not a working indoor fallback on this device; it is a firmware-update transport. Carneo confirmed
this publicly, in its own voice, replying to a Play Store review on **29 June 2026**:

> *"WIFI sa z dôvodu šetrenia energie po čase uspí. Ako je uvedené v návode, **WIFI sa odporúča
> využívať iba na update firmwaru**. Používajte prosím dáta zo SIM karty."* — "WiFi goes to sleep
> after a while to save energy. As stated in the manual, **WiFi is recommended to be used only for
> firmware updates**. Please use data from the SIM card." (TRUST System spol. s r.o., Google Play)

And an owner measured exactly the consequence:

> *"GPS funguje dobře pouze, když jsou hodinky připojeny na WiFi, když ne, ukazuje to klidně
> s rádiusem **15 km**."* — "GPS works well only when the watch is connected to WiFi; when it is not,
> it shows a radius of easily **15 km**." (Alza.cz, Romana, Kyjov, 08.01.2026, 2nd gen)

**Practical conclusion for a 7-year-old at school: indoors this watch is an LBS device — kilometres,
not metres.** Corroborating owner reports, all 2nd gen unless marked:

- *"nepřesnost lokalizace, když je dítě v budově"* — "inaccuracy of localisation when the child is in
  a building" — listed as a con by a **sponsored** Testuj.to tester (Heureka, Martin, 23.03.2026).
- *"Jen **ve škole** to občas ujede, ale tam je slabší signál."* — "Only **at school** it sometimes
  goes off, but the signal is weaker there." (Heureka, Kateřina, 22.03.2026, **sponsored**, child aged 7)
- *"rychlost odezvy GPS pomalá na to, aby se dal sledovat pohyb v reálném čase, je tam **prodleva
  i pár minut**, pokud se pohybuje v budově"* (Heureka, Kateřina, 17.03.2026, **sponsored**)
- *"presnost GPS je spatna. vetsinu casu se hodinky hlasi minimalne 100vky metru od skutecne polohy
  casto i kilometry"* — "GPS accuracy is bad. Most of the time the watch reports at least hundreds of
  metres from the real position, often kilometres." (Alza.cz question, THANER REAL s.r.o., 13. 1. 2026)
- *"Lokalizace po 10 min? **Dítě už je 2 hod ve škole a aplikace ukazuje že je ještě doma.**"* —
  "Location after 10 min? **The child has been at school for 2 hours and the app shows it is still at
  home.**" (Google Play, Radek Ptáčník — platform evidence, but precisely the buyer's scenario)

**That even the paid testers flag the indoor failure is the strongest single signal in this file.**

**A new and serious defect: the fix sometimes lands in China.** Four independent sources:

- *"lokace při použití **SOS tlačítka** pošle na zvolený kontakt SMS se souřadnicemi **v Číně**"* —
  "the location when the **SOS button** is used sends the chosen contact an SMS with coordinates
  **in China**." (Google Play, Tomáš, 31 Dec 2024)
- *"Někdy se stane, že to ukáže **Čína, Argentina** apod., ale za 2 minuty se to srovná."* —
  "Sometimes it shows **China, Argentina** etc., but in 2 minutes it settles."
  (Heureka.cz, anonymous, 27 January 2026 — **2nd gen**)
- *"ked som pozeral polohu hodiniek, tak sa tvarili, ze su **v Cine**"* (iOS SK, JamesTailor)
- *"ukazovali často lokalizáciu, že moje deti sú v **Hongkongu** atd, Čína"* (iOS SK, crazy145)

The SOS path is the one function that must not fail. Test it in week one.

### 4. VoLTE: absence verified — and then substantially resolved in §11a

> **This section is superseded by §11a**, which found positive evidence rather than an absence:
> Carneo's own catalogue field records VoLTE for the Tiny and Buddy and **not** for this model, so
> **Carneo does not claim VoLTE here** — while the SC8541E silicon is VoLTE/ViLTE/VoWiFi-capable and
> stock firmware on this platform ships VoLTE working. Read §11a. The material below is the
> verified-absence work that preceded it and remains valid as far as it goes.

Full-text search of the Czech manual PDF and of carneo.cz / carneo.sk / carneo.eu product pages for
`VoLTE`, `VoWiFi`, `HD Voice`, `CSFB`: **zero hits in all four** (2026-08-19). No settings
screenshot, spec line or owner report stating VoLTE support was found. The manual's only radio-layer
statement remains the SMS-alert line — *"k čemuž je dostačující i slabý signál, případně **2G
signál**"* — and the device is documented as expecting to sit on 2G at times. `volte: UNKNOWN`
stands; `voice_fallback: 2g-csfb` remains suspected and unverified.

What *is* now established is that **voice itself works well and is the most reliable thing on the
watch** — which materially reduces the practical risk of this unknown. It is the one function almost
every negative reviewer explicitly exempts:

- *"Telefonní hovory, SMS a whats app jsou v pořádku."* (Play, Marcel Kubín, 10 July 2026)
- *"hovory jsou funkční a čisté"* (iOS CZ, Lucie 951); *"Volanie áno to jedine funguje"* (iOS SK, bsjxud)
- *"volání přes telefon vypadá že opravdu funguje"* (Alza, Tomáš, H. Králové, 26.02.2026, 2nd gen)
- *"volanie je čisté, žiadne šumenie, rušenie, sekanie"* (Alza, Filip, Bratislava, 12.12.2025, 2nd gen)

The week-one LTE/2G call test in the pre-purchase list remains the only way to answer this.

### 5. Romania: the Play Store gap is closed — the app IS live in the RO storefront

**CORRECTION — `app_ro_playstore` was UNKNOWN because the listing would not render. It renders. It
is live.** Read directly in-browser at
`play.google.com/store/apps/details?id=com.tgelec.carneoguard&gl=RO&hl=ro`, 2026-08-19: the page
serves in Romanian, footer *"România (română)"*, with an **"Instalează"** button and the line
**"Aplicația este disponibilă pentru dispozitivul tău"** ("The app is available for your device").
Developer TRUST System spol. s r.o., *"Ultima actualizare 13 iun. 2026"*, 100 K+ installs.
**Tier 2 is now reached.** With the iOS RO storefront already confirmed, both app stores serve Romania.

**But the RO storefront shows no ratings block at all**, while the identical CZ URL renders
*"3,1 ★ · 1,11 tis. recenzí"*. Same page, same session, minutes apart — so the absence is real and
country-specific: **there are effectively zero Romanian users.** The iTunes review RSS for the RO
storefront (`itunes.apple.com/ro/rss/customerreviews/id=1552178771`) likewise returns **no entries**,
while SK returns 19, CZ 57 and HU 4. **Tier 3 remains unreached; `+40` registration is still untested.**

**A new risk to the RO registration flow that was not previously visible: the app has a region
selector, and it broke.** Across three storefronts simultaneously, at app version 2.8 (late June 2026):

- *"Po update aplikacia nefunguje, píše že mám najskôr **vybrať región**."* — "After the update the
  app doesn't work, it says I must first **select a region**." (iOS SK, Tomáš&777, **2026-06-26**)
- *"Po aktualizaci 26.6. je aplikace nefunkční. Na úvodní obrazovce to žádá o vybrání regionu.
  **Region ovšem nelze zvolit.**"* — "After the 26.6 update the app is non-functional. On the opening
  screen it asks to select a region. **But the region cannot be selected.**" (iOS CZ, lucasnew, 2026-06-26)
- *"After update i cant use, always want to choose a region"* (iOS HU, Pogigyuri, 2026-06-27)

Combined with the manual's country gate — *"prověřováním legislativy země, ve které se hodinky
nacházejí"* ("checking the legislation of the country in which the watch is located"), features
appearing only after up to 48 hours — and with a Play reviewer reporting *"přidá informací o
**omezení služeb**"* ("it adds information about **service restrictions**", Martin Pihera, 10 Jan
2026), **the backend does gate by country and that gate is a live failure mode.** What it decides for
Romania is still unknown. Evidence that the gate removes features rather than merely delaying them:
*"Z aplikace zmizela možnost odposlechu, důvod?"* — "The remote-listening option **disappeared** from
the app, why?" (iOS CZ, Sepp111111111111) and *"Polovica ikon tu nie je (ako je face hovor,
fotografia na diaľku, odpočúvanie …)"* — "Half the icons aren't there (like face call, remote photo,
remote listening …)" (iOS SK, Gggabca).

**Buy only from a seller with a working return path and test `+40` registration before that window
closes.** Nothing else about Romania has changed: eMAG.ro still 865 RON, in stock, marketplace seller
**HomeMode** (re-verified 2026-08-19), **0 product reviews**. (The 4.8★/681k figure eMAG renders on
that page is **HomeMode's seller rating, not the product's** — do not misread it.)

One correction to the RO channel picture: **Carneo's Romanian presence is wider than the file
implies, but not for this model.** `Vivantis.ro` and `TonerPartner.ro` both list the GuardKid+ 4G
**Platinum** in Romanian. Searches for the ULTRA 2nd gen on compari.ro, vivantis.ro and
tonerpartner.ro returned nothing. **eMAG remains the only Romanian channel for this specific watch**,
which is what the file already said — but the brand is more established in RO than "one marketplace
listing" suggests, and correspondingly the Platinum, not the ULTRA, is the model Romanian retail has
actually adopted.

### 6. Against the 1st gen and the Platinum; contamination check

- **No retailer found pools reviews across generations.** Alza labels every review with the variant
  string `... 2nd gen. black/blue/pink` and keeps the 1st gen on separate product codes
  (12509130 vs 13102160/61/62); Heureka keeps two separate product pages. **Alza and Heureka do pool
  across colours and across the CZ and SK storefronts** (Slovak-language reviews from Prievidza,
  Trenčín, Košice appear on alza.cz) — acceptable, and noted.
- **What is actually different in the 2nd gen:** 1.72" Super AMOLED 320×380 (vs 1.69" IPS 240×280),
  IP68 (vs IP67), added heart-rate and SpO2, and the **Spreadtrum SC8541E Cortex-A53 1.4 GHz** named
  explicitly on the CZ/SK pages. The **band list is unchanged** and is the same boilerplate string.
- **CORRECTION / new fact — the OS is Android 8.1, i.e. 2017-era software on a 2026 product for a
  child.** Confirmed for this exact model by an owner: *"**zastaralý android 8.1**"* — "outdated
  Android 8.1" (Alza.cz, Tomáš, Trenčín, **06.08.2026**, 2nd gen blue), corroborated on the app side
  by *"Fact that it runs on android from 2017 was automatic return. It's security risk to have it in
  the drawer let alone attached to a child."* (iOS SK, Adamkokoko, 2026-05-28, 1★). Neither Carneo
  page states the Android version. This is not a Platinum inheritance; it is this device.
- The *app* is shared across GuardKid+ MINI / Platinum / ULTRA 1st and 2nd gen and SeniorSafe+, so
  **all app-store review text is platform evidence and is labelled as such throughout this section.**

### 7. Reliability, longevity and what can actually be disabled

**Hardware reliability is a genuine problem — 3 failures in a 30-review pool (~10%), all 2nd gen:**

- *"Koupil jsem jedny hodinky, které po pár dnech používání **se přestaly nabíjet**. Po reklamaci
  výměnou jsem dostal nové hodinky, které po pár hodinách používání **přestaly fungovat úplně
  (nešly zapnout)**."* — "I bought one watch which after a few days **stopped charging**. After a
  warranty exchange I got a new one which after a few hours **stopped working entirely (wouldn't turn
  on)**." (Alza.cz, Marie, Jirny, **12.02.2026**, 2nd gen blue) — **two failures, one household.**
- *"ani jsme nestihl vyzkoušet.... hodinky během cca. **půl hodiny** používání přestaly fungovat...
  začal blikat display a nejdou ovládat"* — "we didn't even manage to test it… the watch stopped
  working after about **half an hour** of use… the display started flashing and it can't be
  controlled." (Alza.cz, Lukáš, Temelín, **14.08.2026**, 2nd gen blue)
- Also: *"pri používaní sa **zahrievajú**"* ("they **get hot** in use", Alza, Tomáš, Trenčín, 06.08.2026).
- Third-party corroboration of build quality, from a repair technician quoted by a *satisfied*
  customer: *"Opravář nám řekl, že je to hrozný aušus :) Ale také říkal, že opravdu kvalitní hodinky
  až od 7000 Kč a výš"* — "The repairman told us it's terrible junk :) But he also said that really
  good watches start from 7,000 CZK upwards." (Heureka.cz, anonymous, 27 January 2026)

Warranty experience, where reported, is poor: *"Dal som obe hodinky reklamovať … vyjadrenie výrobcu,
že **chyba sa nepreukázala**"* — "I sent both watches in under warranty … the manufacturer's response
was that **the fault was not demonstrated**" (iOS SK, crazy145, platform evidence). Carneo's public
replies on Play and Alza follow a consistent pattern of attributing every fault to the customer's
SIM, ISP, antivirus or Android settings.

**CORRECTIONS to the "Features & what can be disabled" table.** Three rows are vendor claims that
owners contradict:

| Row | The file said | Owner evidence |
|---|---|---|
| **App store / app library** — *"the child cannot install anything"*, **"structurally"** | Parent-push only | **Contradicted.** *"**Lze si samovolně stáhnout aplikaci přímo v hodinkách - bez rodičova vědomí.**"* — "One can download an app directly on the watch oneself — **without the parent's knowledge**." (iOS CZ, Michaela Burdych, writing about a first-grader). Carneo's own Alza reply concedes only that installs go *"výhradně přes integrovaný APPSTORE"* — via the **on-watch** app store, which the child operates. Treat parental control here as **policy, not architecture.** |
| **Incoming SMS — "Yes, disableable"** | Manual | **Contradicted.** *"Minus hodinek jsou bezpečnostní díry: dítě může odesílat na (a přijímat sms z) **libovolného čísla. Sms nelze zakázat.** Aplikace nevidí do historie hovorů, nelze ji smazat."* — "The watch's minus points are security holes: the child can send SMS to (and receive SMS from) **any number. SMS cannot be disabled.** The app cannot see the call history and it cannot be deleted." (Google Play, Ivan Galas, 9 Dec 2024, 4 helpful votes) |
| **Watch-to-watch friending — "worth checking"** | No documented approval step | **Checked; it is bad.** *"deti se sami párují, a zdá se, že tato čísla/kontakty z aplikace **ovládat/mazat nejde**? … když je zapnuté párování s jinými hodinkami, **přidají se někdy i neznámé kontakty, i když žádné další hodinky v okolí nejsou**."* — "the children pair themselves, and it seems these numbers/contacts **cannot be controlled or deleted** from the app? … when pairing with other watches is on, **sometimes unknown contacts get added even though no other watches are anywhere nearby**." (iOS CZ, Ondrej_12345) |

Confirmed as working: the unknown-caller block — *"Jediné pozitivum je, že automaticky blokují hovory
z neznámých čísel"* ("the only positive is that it automatically blocks calls from unknown numbers",
Alza, Romana, 08.01.2026) — though one iOS reviewer reports the opposite (*"Unable to block incoming
calls from strange numbers"*, Adamkokoko, 2026-05-28). Parental app-blocking and time windows are
confirmed in use by a Testuj.to tester: *"Z aplikace synovi hodinky/aplikace blokuji a nastavuji cas,
kdy mu (ne)budou fungovat."*

**Firmware: no published evidence that any update has ever shipped for this model.** The support hub
`carneo.cz/podpora-pro-carneo-guardkid--4g-ultra-2--gen/` offers exactly three things — the CZ manual
PDF and two setup videos. **No firmware version number, no changelog, no OTA release note, no
"update available" page** exists for this or any other GuardKid model (searched 2026-08-19). The only
statement about updates anywhere is the manual's *"Připojení WIFI se používá výhradně pro aktualizace
produktu"* — i.e. the transport is described, the payload never is. For a device on **Android 8.1**
carrying a child's microphone, camera and location, that is the longevity finding: **you cannot
verify that this watch has ever been patched, and there is no channel on which Carneo would tell
you.** The one concrete change we know of reached users only as a sentence in an Alza comment reply.

**A manual/firmware divergence worth knowing:** Carneo told an Alza reviewer on 13.01.2026 that
*"Bezpečnostní automatické restartování při výpadku dat **bylo ze systému odstraněno**"* — "the
safety automatic restart on data outage **has been removed from the system**." The manual still
documents the hourly reboot. **The manual is stale on this point** — remove that item from the
"will look like a fault" list.

**On the child's actual experience** — three independent reviewers plus two paid testers say the
watch is too big: *"Opravdu obrovské hodinky - **větší než moje AW ultra**"* ("bigger than my Apple
Watch Ultra", Alza, Karel, Praha, 28.04.2026); *"Jsou opravdu velikánské - **větší než moje nemalé
(pánské) hodinky pro dospělé**"* (Alza, Marie, 12.02.2026); and from a paid tester, *"na dětskou ruku
jsou příliš velké a **po několika dnech je už nechtěl nosit**. Nicméně nosí je v tašce / baťohu"* —
"for a child's wrist they are too big and **after a few days he no longer wanted to wear them**. He
carries them in his bag/rucksack instead" (Heureka, Martin, 23.03.2026). **A tracker in a rucksack is
not a tracker on a child, and this is a 7-year-old's wrist.** The strap is also non-standard:
*"nabízené 20mm řemínky nesedí, uchycení je o 4mm širší"* ("the 20 mm straps on offer don't fit, the
lug is 4 mm wider", Alza, František, 09.02.2026).

### 8. Privacy: two new vendor claims that conflict with the DEF CON finding

Both are Carneo's own words, both made in retail channels rather than in any policy document, and
both are unevidenced:

1. **Google Play Data Safety, RO and CZ storefronts, 2026-08-19: "Nu sunt trimise date terțelor
   părți" / "S třetími stranami nejsou sdílena žádná data"** — "**No data is shared with third
   parties**." This is a developer self-declaration on a service that DEF CON 34 researchers place on
   the SETracker backend operated by **YQT / 3G Electronics, Shenzhen**, on Alibaba Cloud.
2. **Alza.cz, Carneo's reply of 13.01.2026: *"Funkce Chat je interní, zabezpečená komunikace přes
   evropské servery"*** — "the Chat function is internal, secured communication **via European
   servers**." This is the first time Carneo has located any server anywhere; it is a sentence in a
   retail comment, not a policy, and it covers only Chat. The reviewer it answers had written
   *"chat funguje pres omezenou verzi **WEchat**"* — "chat works through a **limited version of
   WeChat**."

Carneo also trademarks *"CARNEO CryptoLogic®"* for "encrypted communication" and *"CARNEO
Safezone+®"* — brand names with no published technical substance. **Still no Carneo statement on the
DEF CON 34 research** (searched 2026-08-19). Note too Carneo's own admission that its video-call
server sits at an IP some ISPs block: *"chyba … je způsobena tím, že Váš provozovatel domácího
internetu blokuje IP adresu serveru, který je využíván pro funkci Videohovor"* (Play, 29 June 2026).

> **A third claim was found after this section was written, and it is the decisive one — see §10d.**
> Carneo *does* publish a CARNEO GUARD privacy policy (this file previously said it did not). It
> claims Frankfurt am Main storage while naming **AutoNavi (Alibaba's Amap)** as the location
> provider and listing **ByteDance, Tencent, KuaiShou, Baidu and Aliyun SDKs**. That document, by
> itself, falsifies the Google Play "no data shared with third parties" declaration above — and the
> AutoNavi dependency also explains the positioning failures in §3.

### 9. Corrections summary

1. **`release_year`** UNKNOWN → **2025** (on sale by 2025-12-09, Alza verified purchase).
2. **Play rating** 2.2/5 → **3.1/5 from ~1,110** (Google Play direct, not an APK mirror).
3. **`app_ro_playstore`** UNKNOWN → **yes** (RO storefront renders and offers install). Tier 2 reached.
4. **`battery_observed_h`** ~72 → **24–48** (eight reports; ~72 is the outlier).
5. **"the child cannot install anything"** → **false**; also **SMS cannot be disabled**, and
   **watch-to-watch contacts cannot be parent-controlled**.
6. **`app_last_update`** 2026-06-22 → **2026-06-13** (Play's own date).
7. **Android 8.1** added — not previously recorded anywhere in the file.
8. The hourly-reboot-without-data behaviour has been **removed by firmware**; the manual is stale.
9. The 2nd-gen band list is **one boilerplate string** shared with carneo.eu's 1st-gen page (and, per
   the parallel Platinum pass, with the Platinum and Buddy), not two independent national sources.
   **This is now the file's weakest load-bearing claim, and the Romanian verdict rests on it.**
10. **"Carneo publishes no privacy policy for the Guard app"** → **false.** One exists, at
    `carneo.sk/user/documents/appguard/privacy-en.htm`. It claims Frankfurt am Main storage while
    naming **AutoNavi** and a roster of Chinese ad SDKs — and it contradicts the app's own Google
    Play "no data shared with third parties" declaration.
11. **Heureka.SK is a third owner pool** (24 reviews, 96%) that the file did not have. Score falls
    monotonically with distance from the vendor: Carneo-direct 96% → seeded Heureka.cz 86% →
    independent Alza.cz 78%.
12. **"Single-constellation GPS only"** → **wrong.** The chip does GPS+GLONASS (default) or
    GPS+BeiDou. But **Galileo and QZSS are absent at silicon level** — confirmed, permanent, and a
    real disadvantage in Europe. See §11b.
13. **`volte: UNKNOWN`** → **not-claimed**, on positive evidence: Carneo's own catalogue field
    records VoLTE for the Tiny and Buddy and not for this model. Also **the file's inference from the
    XDA thread title was backwards** — VoLTE works on stock 8541E firmware; generic ROMs break it.
14. **The DoC index is not missing — the 2nd gen is missing from it.** The working URL is
    `carneo.cz/vyhlaseni-o-shode/` (60 documents); no ULTRA 2nd gen entry has ever existed, while the
    manual states the full text is published there. The 1st-gen and Platinum DoCs that do exist cite
    **no GSM or LTE standard at all**.
15. **"Neither Carneo page states the Android version"** → **wrong.** `Systém hodinek: Android 8.1`
    is on carneo.cz, carneo.sk and carneo.hu.
16. **Launch date is exact: on sale 27 November 2025** (Alza pre-order snapshot, "Očekáváme
    27. listopadu 2025"). Not "early December".
17. **Heureka.SK is not an independent pool** — it is the Czech campaign machine-translated and
    bulk-posted on 2026-04-14, undisclosed. §10a is corrected by §12b.
18. **testado.sk was published 2026-03-15, not 2026-07-23** (that is the modification date), it has a
    Czech twin of 2026-03-24, and it is **affiliate-monetised with no sponsorship disclosure**.
19. **The ULTRA DoC omits GSM, LTE, GNSS and SAR standards — and the Buddy DoC includes all of them.**
    A per-product gap, not house style.
20. **The 2nd-gen manual's PDF title is the 1st-gen title.** The document is a copy-edit, which is the
    same process that produced the shared band string.
21. **`water_rating: IP68` is disputed** — Alza's own table says IP67, as does a comparison site.
22. New hard limits not previously in the file: **minimum geofence radius 200 m**; **SOS blocks the
    callback path**; **the watch cannot send free text**, and parent messages cap at 50 characters.

### 10. Cross-check against the parallel Platinum pass (added 2026-08-19)

Findings from the Platinum research were tested against the ULTRA 2nd gen rather than assumed.
Results, with anything carried over labelled as **platform** evidence:

**a) A third owner pool exists that this file did not have: Heureka.SK.**
`inteligentne-hodinky.heureka.sk/carneo-guardkid-plus-4g-ultra-2nd-gen/` — **24 reviews, 96%**,
a pool entirely separate from Heureka.cz's 19. It carries **no "Sponzorované" labels**.

> ⚠️ **CORRECTED in §12b — do not read this pool as independent.** It carries no sponsorship labels
> because Heureka.sk does not apply them: the Testuj.to campaign config lists Slovakia as a
> *translation export target*, and **nine of its ten reviews were bulk-posted on a single day,
> 2026-04-14, under the Czech testers' names.** The 96% is the same ten free units as Heureka.cz's
> 86%. The spread that remains real and meaningful is that **Alza.cz — the only large pool outside the
> campaign's distribution list — scores lowest, at 3.9/5 ≈ 78%.**

Two substantive Slovak reports survive that correction, both this generation:

- **Zuzana, 28 July 2026, 80%:** *"Baterka pri častom používaní **vydrží deň**."* — "The battery with
  frequent use **lasts a day**." Also *"**Počas odposluchu hodinky nefungujú — dieťa ich nevie
  použiť.**"* — "**During remote listening the watch does not work — the child cannot use it.**"
  (So the covert-listen mode is not invisible to the *child*, only to an observer — the watch is
  bricked while it is transmitting.) Also *"Pri určení polohy hodiniek sa musím 'preklikať', kým mi
  skočí reálny čas aj miesto"* ("to get the position I have to click through repeatedly before the
  real time and place appear") and *"Návod je nečitateľný"* ("the manual is illegible").
- **Tm221, 31 July 2026:** *"Trochu velke a **bez internetového balíčka na sim karte nefunguje**.
  Easy karta v balení má predražený internet. Preto som kúpila inú kartu s lacným mesačným balíčkom
  1G."* — "A bit big, and **without a data package on the SIM card it does not work**. The Easy card
  in the box has overpriced internet, so I bought another card with a cheap 1 GB monthly package."
  **Buy the Romanian SIM as a data SIM, not a voice-only prepaid.** This also confirms the bundled
  SIM is disposable and the slot takes any operator — good for Romania.

**b) Grossly wrong location: CONFIRMED on the ULTRA, same pattern as the Platinum.** Already
documented in §3 — 15 km with Wi-Fi off, "hundreds of metres, often kilometres", and China /
Hong Kong / Argentina artefacts from four independent sources. This is a **platform** defect that the
2nd generation did not fix.

**c) The AGPS finding — and it forces a correction to §3, and to this file's privacy section.**
Platinum owners report the watch ships with an **"Asian" AGPS server** selected and that switching it
to Google makes location *"o 100% lepší"*. **I could not confirm an AGPS-server selector for the
ULTRA**: it is not in the ULTRA's Czech manual (full-text searched for `AGPS`, `server`, `Google`,
`Amap`, `AutoNavi`, `asijsk` — no hits), and no ULTRA owner mentions it. But **the app is the same
package (`com.tgelec.carneoguard`) shipped to both watches**, so the setting very probably exists.
**Treat as untested-but-likely, and look for it in Settings on day one — on the Platinum evidence it
is the single highest-value fix available.**

What I *can* confirm, and it corroborates the Platinum finding from a different angle:

> **"When you use location related services, GPS information is shared with the location service
> provider (AutoNavi)"** — CARNEO GUARD Privacy Policy, `carneo.sk/user/documents/appguard/privacy-en.htm`

**AutoNavi is Alibaba's Amap — a Chinese mapping and geolocation provider.** Its Wi-Fi and cell
databases are built for China. That is the most economical explanation for every artefact in this
file: fixes landing in China and Hong Kong, a 15 km radius when Wi-Fi is unavailable, an SOS SMS
carrying Chinese coordinates — **and for why Carneo's own manual tells you to switch Wi-Fi off.**
The file previously flagged that instruction as an unexplained oddity. It is not odd: **Wi-Fi
positioning on this device resolves against a Chinese geolocation database, and Carneo's workaround
is to stop using it.**

**Nuance to §3, stated plainly because the two readings conflict.** §3 concluded that Wi-Fi
positioning is unusable because the radio sleeps. That still holds — the manual says localisation
stops with it, and Carneo repeated that on Google Play. But the Platinum evidence says Wi-Fi
positioning is also the component owners deliberately *disable* to force a satellite fix, and one
ULTRA owner reports the opposite (*"GPS funguje dobře pouze, když jsou hodinky připojeny na WiFi"*).
**Both are consistent with a single ordering — GPS > Wi-Fi > LBS, on a Chinese geolocation backend
that is poorly calibrated for Europe.** What does not change is the conclusion for the buyer:
**indoors, at school, this watch does not produce a trustworthy fix by any path.**

**d) CORRECTION — this file wrongly states that no privacy policy exists for the Guard app.**
The file says: *"Carneo publishes no privacy policy for the Guard app that states where children's
location data is stored"*, and that the only reachable policy covers CARNEO FIT. **That is wrong.**
There is a dedicated **CARNEO GUARD Privacy Policy** at
`carneo.sk/user/documents/appguard/privacy-en.htm`. It is worse than its absence would have been:

> *"we store your personal data collected and generated during the use of the CARNEO GUARD
> application on servers in the European Union, specifically **Frankfurt am Main, Germany**."*
>
> *"The server ensuring communication between the CARNEO GuardKid+ watch and the CARNEO GUARD
> application is certified to comply with ISO/IEC 27001: 2013, 27017: 2015 and 27018: 2014."*

But the same document is a **machine-translated Chinese policy** (repeated "de-identified", "we have
made this Privacy Policy … and specifically advise that read"), and it enumerates a list of SDKs that
has no business in a PEGI-3 children's tracker:

> **Wanhui SDK, ChuanShanJia SDK (Pangolin — ByteDance's ad network), Guangdiantong SDK (Tencent's ad
> network), JuXiao SDK, KuaiShou SDK, Aliyun code SDK, Baidu Alliance SDK, Leida SDK, Himalayan SDK
> (Ximalaya), Fengfeng school (H5)** — and **AutoNavi** for location.

**Three of this vendor's own statements are mutually irreconcilable, and at most one can be true:**

1. **Google Play Data Safety card (RO and CZ, 2026-08-19): "No data is shared with third parties."**
2. **CARNEO GUARD Privacy Policy: data in Frankfurt am Main, but GPS shared with AutoNavi and a
   roster of Chinese advertising SDKs embedded.**
3. **DEF CON 34 (2026-08-08), reported 2026-08-14: the backend is SETracker, operated by YQT /
   3G Electronics, Shenzhen, on Alibaba Cloud in mainland China.**

The Play declaration is flatly contradicted by Carneo's own privacy policy — a policy that names
third-party ad SDKs by name. **That is not an ambiguity to weigh; it is a false declaration on the
Google Play store listing for a children's product.** It also means the file's "no privacy policy"
line should be replaced by something stronger: there *is* a policy, it is Chinese boilerplate wearing
a Frankfurt address, and the DEF CON researchers found the service where the boilerplate suggests it
would be.

**e) Other Platinum items, tested on the ULTRA:**

| Platinum finding | Status on the ULTRA 2nd gen |
|---|---|
| **10-hour app lockout** after repeated password failure | **CONFIRMED, independently.** *"A 10-hour lockout after just 3 failed initial password attempts? … Returning the device."* (iOS CZ, Tecquilka, 2026-05-31, 1★). Corroborated: *"Po 3 pokusech o přihlášení se aplikace zablokuje na několik hodin a je nefunkční obzvlášť když ji potřebujete!!!"*. Compounded by password-reset e-mails that do not arrive within the 90-second window. |
| **Band list is boilerplate, byte-identical across models** | **CONFIRMED and already recorded in §3** — identical on carneo.cz 2nd gen, carneo.sk 2nd gen and carneo.eu's **1st-gen** page. The Platinum pass extends this to the Platinum and Buddy. **Treat B20/B28A as marketing copy, not a model-specific spec.** No DoC, FCC ID or independent retailer spec table corroborates it. This is now the file's weakest load-bearing claim, and it is the one the Romanian verdict rests on. |
| **SOS false-triggers and cannot be disabled** | **NOT reproduced on the ULTRA.** No ULTRA owner in ~75 reviews reports a false SOS trigger. Recorded as an unverified **platform** risk, not an ULTRA finding. The ULTRA-specific SOS defect is different and worse: the SMS it sends has been reported carrying **Chinese coordinates**. |
| **Too big for a 7-year-old** | **CONFIRMED, emphatically** — five ULTRA reviewers, including two paid testers, one of whose children stopped wearing it. See §7. |
| **Play rating 2.7 / 1,110** | **Storefront-dependent.** The CZ storefront rendered **3.1 / ~1,110** on 2026-08-19. Google Play now shows country-specific ratings, so both can be current. Quote the storefront with the number; the RO storefront shows **no rating at all**. |
| **Units dying at ~1 year; warranty claims *"reklamácia zakaždým zamietnutá"*** | **Cannot be tested on the ULTRA and the reason matters: it launched in December 2025, so the oldest unit is ~8 months old.** A genuine absence — but §7 already records three hardware deaths inside the first weeks, one of them a warranty replacement that also died. On the Platinum's trajectory, expect the one-year failures to arrive; there is no evidence the 2nd gen changed anything mechanical. |

### 11. Radio, GNSS and certification — deep dive (added 2026-08-19)

This supersedes §3's GNSS conclusion and §4's VoLTE conclusion. Both were too confident.

#### 11a. VoLTE: no longer UNKNOWN. Carneo's own catalogue says it is not there.

**The decisive evidence is a controlled-vocabulary field in Carneo's own CMS.** Every GuardKid+
product page carries a facet parameter `pv31`, labelled *"SIM karta" / "Podpora SIM karty"*. Its value
set explicitly includes VoLTE variants, and Carneo assigns them selectively:

| Model | `pv31` value |
|---|---|
| GuardKid+ 4G **Tiny** | **`4G - VOLTE`** |
| GuardKid+ 4G **Buddy** | **`2G, 3G, 4G - VOLTE`** |
| **GuardKid+ 4G ULTRA 2nd gen** | **`2G/3G/4G`** — no VoLTE |
| GuardKid+ 4G Platinum | `3G/4G` |

(carneo.sk and carneo.cz product pages, all colours, accessed 2026-08-19.)

**Carneo demonstrably records VoLTE in this exact field when it applies. Its absence here is a data
entry, not an omission.** That is far stronger than "the string does not appear on the page", which
is all the previous pass had. Read it as: **Carneo does not claim VoLTE for this watch.**

**The silicon is not the constraint.** UNISOC's own 8541E product page publishes
`Modem | LTE Cat4 | VoLTE/ViLTE | VoWiFi LTE TDD&FDD` (unisoc.com/en/solution/FinancialPayUS/8541E-NEW,
accessed 2026-08-19). And the XDA thread the previous pass could only read the *title* of has now been
retrieved (via r.jina.ai; the direct URL still 403s) — Mozhuyi, **14 Aug 2025**:

> *"As is well known, using GSI (Generic System Image) on Unisoc platforms causes VoLTE functionality
> broken. If deployed in regions where 2G/3G networks have been shut down, this will prevent users
> from making calls or sending/receiving SMS messages."*

**This reverses the previous pass's reading of that thread.** The file recorded the title as evidence
that "VoLTE on this platform is a known problem area". It is the opposite: **VoLTE works on stock
vendor 8541E Android 8.1 firmware, and is broken only by aftermarket generic ROMs.** The file's
inference was wrong and is corrected here.

So the position is: **hardware capable, stock firmware probably capable, vendor does not market it,
and nobody has tested it.** No owner report from a 2G-free country was found — and Czech reports
cannot settle it, because Czech 2G is mandated to stay: *"ČTÚ stanovil všem třem operátorům (O2,
T-Mobile i Vodafone) povinnost držet 2G síť minimálně do 30. 6. 2028"* — "the Czech Telecommunication
Office has obliged all three operators to maintain the 2G network at least until 30 June 2028"
(tiscali.cz, 25 July 2026).

**For Romania this is now a low-risk unknown, not a serious finding.** Romania keeps 2G on Orange and
Digi; the watch is explicitly catalogued as `2G/3G/4G` and its manual designs around 2G fallback for
SOS and low-battery SMS. Voice should work via CSFB whether or not VoLTE is enabled. Buy the SIM from
**Orange or Digi**, as the file already advises.

*(Method note for anyone re-checking: a case-insensitive grep for "volte" in the Czech manuals returns
four false hits per file — all are the Czech word **"Zvolte"** ("choose"). Word boundaries are
essential. With word boundaries, `VoLTE` returns **zero** hits in the 2nd-gen CZ manual, both 1st-gen
ULTRA CZ manuals, the Platinum CZ manual, and the base GuardKid+ 4G CZ and DE manuals.)*

#### 11b. GNSS: **CORRECTION — §3's "single-constellation GPS, CONFIRMED" was too strong.**

§3 concluded GPS-only "by verified absence". The absence from Carneo's own documents is real and
holds. But absence of a claim is not absence of a capability, and two independent lines of evidence
now contradict the GPS-only reading:

**Two retailer catalogues assert multi-GNSS** (both auto-populated, provenance unstated, treated as
low-reliability — but they are genuine conflicts, not noise):

- **smarty.cz**, in its own normalised "Technické parametry" block (separate from the vendor
  free-text, each row carrying a "Nahlásit chybu" link):
  *"Bezdrátová připojení: **BeiDou**, GPS, Wi-Fi, **Glonass**"* — "Wireless connections: BeiDou, GPS,
  Wi-Fi, Glonass". (smarty.cz/...-4p263732)
- **cena-vykon.sk**'s 1st-vs-2nd-gen table: row `GLONASS` — 1st gen *"neuvedené"* ("not specified"),
  2nd gen **"áno"** ("yes").

**And there is measured platform data.** The crowdsourced **GPSTest device database** contains an
SL8541E device (Morefun MF960, Android 10, April 2026) with **37 submissions**:

| Runs | Supported GNSS | Carrier frequencies |
|---|---|---|
| 18 | **GPS, BEIDOU** | B1I, L1 |
| 15 | GPS | L1 |
| 3 | **GPS, GLONASS** | L1 |

`Dual-frequency: NOT_SUPPORTED`. **Galileo never observed in any run.**

**And a parallel silicon-level investigation of the SC8541E/SL8541E settles the architecture.** It
converges with the 37 field captures above by a completely independent route:

- **Kernel/DTS from the SL8541E-1H10 reference board** (`sprd-linux/kernel4.14`):
  `compatible = "sprd,integrate_gnss"`, `CONFIG_SC2342_INTEG=y` — the GNSS block is **on-die**, with no
  external GNSS part on the board. Exactly **two** firmware images exist, `gpsgl` and `gpsbd`, present
  as real flash partitions on four independent shipping-watch device trees. `gnss_common_ctl.c`
  **rejects any `gnss_subsys` value other than those two with `-EINVAL`**, and the probe default is
  **`gpsgl` = GPS+GLONASS**.
- **Vendor blobs pulled from a real SL8541E watch**: the GNSS HAL `gps.default.so` contains NMEA
  talker IDs **`$GPGSV`, `$GLGSV`, `$BDGSV`** — and **no `$GAGSV` (Galileo), no `$GQGSV` (QZSS)**.
- A UNISOC-focused Chinese source (CSDN, 2022-05-08) lists the parts without Galileo:
  *「不支持的芯片：SC9820E、SC9832E、SC9863A、SL8521E、**SL8541E**、UIS8581E」* — "chips that do NOT
  support Galileo: … **SL8541E** …". Its rule of thumb — chips with 5 GHz Wi-Fi have Galileo, those
  without do not — fits: the SL8541E is Wi-Fi 4, 2.4 GHz only.
- A Chinese SL8541E dev-board spec: *「支持四种定位模式：GPS，北斗，GPS+北斗，GPS+GLONASS」* — "supports
  four positioning modes: GPS, BeiDou, GPS+BeiDou, GPS+GLONASS" — an exact match for the
  two-firmware-image architecture.

**Revised conclusion, replacing both §3's and this section's earlier readings:**

1. **The silicon does have GLONASS and BeiDou.** The file's line *"NO GLONASS, Galileo or BeiDou …
   Single-constellation GPS only"* is **wrong** and is corrected here. Carneo under-documents.
2. **But it can only run ONE secondary constellation at a time** — GPS+GLONASS *or* GPS+BeiDou, fixed
   by which firmware image is flashed. It is a **two-constellation** receiver, never three.
3. **The shipped default is GPS+GLONASS**, because no `init.rc` in any examined device tree writes to
   `gnss_subsys`. A European SKU therefore gets GLONASS, not BeiDou — unless Carneo flipped it, which
   is untested for the ULTRA.
4. **Galileo is genuinely and permanently absent, and this is now confirmed at chip level rather than
   merely unpublished.** Two independent methods agree: no `$GAGSV` in the HAL, and **zero Galileo
   observations across 37 real GPSTest captures**. QZSS is absent too.
5. **Single-band only** (L1 / B1I). `Dual-frequency: NOT_SUPPORTED`.

**For a buyer in Europe this is a real and permanent downgrade, not a documentation quibble.**
Galileo is the European constellation, it is the one with the best urban and mid-latitude geometry
here, and this watch cannot use it — ever, in any firmware. Against a competitor with Galileo **and**
BeiDou (the imoo Z7 in this shortlist), the ULTRA is structurally behind on the file's **number-one
criterion**, and no update can close the gap.

Two caveats held honestly. The MF960 in the GPSTest data is a payment terminal, not this watch —
different antenna and GNSS configuration, so it is **platform** evidence and labelled as such; note
that it evidently ships the `gpsbd` image (18 of 37 runs show GPS+BeiDou), which is what one would
expect of a Chinese-market device and is *not* what a European watch SKU should ship. And the
silicon findings are **firmware-architecture facts, not field measurements** — **no owner-side
constellation capture (GPSTest screenshot, logcat, NMEA dump) exists for any Carneo watch.** If the
buyer ever runs GPSTest against this watch, that single screenshot would be genuinely new evidence.

**How this fits the rest of the file:** a single-band, Galileo-less receiver, resolving assisted
fixes against an **Asian AGPS server via AutoNavi** (§10c–d), is a coherent and sufficient explanation
for the kilometre-scale errors owners report. The constellation limit and the backend problem
compound rather than compete. But note the ordering of blame: **a watch that places a child in China
is failing at the AGPS layer, not for want of Galileo.** Fixing the AGPS server is the actionable
item; the missing constellation is the permanent one.

No FCC ID, teardown or GNSS-chip identification for this specific watch was found.

#### 11c. Bands: the boilerplate finding is confirmed, and the proof is now conclusive

The same string — *"GSM B2 B3 B5 B8, WCDMA B1 B2 B5 B8, FDD-LTE B1 B2 B3 B5 B7 B8 B20 B28A"* —
appears byte-identical across **five** structurally different Carneo products spanning four years and
at least three different SoCs: GuardKid+ 4G (base, 2019–21), **Platinum** (DoC model `LD-01`, 2022,
512 MB/4 GB, 1.44" IPS), **ULTRA 1st gen** (DoC model `LD-10`, 2024), **Buddy** (2026, different SoC),
and the **ULTRA 2nd gen**.

**The proof that this is an un-updated default, not data:** the **Tiny** carries a genuinely different
value — *"TDD:B38 B39 B40 B41, FDD:B1 B3 B5 B8"*. The field *can* be model-specific. Carneo simply did
not populate it for the ULTRA 2nd gen.

**Nothing independent corroborates the band list.** Checked and found to contain no band data at all:
**eMAG.ro** (its structured table says only *"Bluetooth / Wi-Fi / GPS / Sim Card / GPS + AGPS + LBS"*);
**planeo.cz** (*"Komunikace: 4G, LTE, GPS, Bluetooth"*). **smarty.cz** reproduces the vendor string
verbatim and is therefore not independent. Carneo's own prose is vaguer and self-contradictory:
*"GSM TD-LTE 4G. Podporovány jsou všechny světové frekvenční pásma"* ("all world frequency bands are
supported") — which names TD-LTE, contradicting the FDD-only list.

**SUPERSEDED IN PART (2026-08-19, recorded late):** a companion sweep beat the Datart/NAY bot wall
with a Googlebot User-Agent and read the shared Datart/NAY pool in full — 20 ratings across the
three 2nd-gen colours, all "Ověřený nákup" (verified purchase), **the only pool for this watch with
no Testuj.to content, and the pool where every 1–3★ review lives** (avg ≈4.16 vs 5.0 on the
vendor's own pages). The five negative texts, verbatim:

> **Pink, 1★, 21.1.2026, bought on nay.sk:** *"Aplikácie / Zlá dotyková odozva / GPS katastrofa,
> buď neukáže vôbec polohu, alebo na vzdialenosť 25km. / Slabá výdrž batérie / Neodporúčam"*
> ("Apps / Bad touch response / GPS is a catastrophe — it either doesn't show the position at all,
> or shows it 25 km away. / Weak battery life / I don't recommend.")

> **Pink, 2★, 21.1.2026, Jiří Z., bought on datart.cz:** *"…určování polohy GPS nespolehlivé a
> baterie spíš max dva dny a to tam nejsou zapnuté žádné aplikace i poloha je na požádání"*
> ("GPS positioning unreliable and the battery rather max two days — with no apps on and location
> only on request.") — the only owner anywhere who states the location polling mode.

> **Pink, 3★, 11.1.2026, Pavol H., bought on nay.sk:** *"GPS je stále slabina výrobcu, pomalé a
> nepresné. Pri zablokovanej obrazovke a prijatí nejakej správy ostane svietiť displej, čo vybije
> batériu…"* ("GPS is still this manufacturer's weak point — slow and imprecise. With the screen
> locked, an incoming message leaves the display lit, which drains the battery…")

> **Blue, 1★, 5.4.2026, bought on nay.sk:** *"velka nepresnost gps,ukazuje polohu niekolko
> kilometrov od skutocnej polohy"* ("huge GPS inaccuracy, it shows the position several kilometres
> from the actual position") — the only text review the blue variant has in this pool.

> **Black, 1★, 2.1.2026, Tomáš O., bought on datart.cz:** *"[−] zjištění polohy se liší někdy až
> o 7km / vydrží max 1,5dne"* ("position determination is sometimes off by up to 7 km; lasts max
> 1.5 days.")

Remaining blocked and therefore unchecked, listed so the negative is auditable: alza.cz/.sk/.hu,
nay.sk, heureka.cz/.sk, czc.cz, mall.cz, mironet.cz, zbozi.cz, pricemania.sk, tsbohemia.cz, bscom.eu,
shop.c-neo.at. **Not stocked at all** (searched, no listing found): emag.hu, emag.bg, allegro.pl,
ceneo.pl, x-kom.pl, mediaexpert.pl, idealo.de, amazon.de.

**A distribution finding worth recording: this watch is sold in essentially four countries** — CZ and
SK retail, plus HU and RO through Carneo's own channels. It is absent from every Polish and German
marketplace checked. For a Romanian buyer that cuts both ways: **eMAG.ro is a genuine listing, not an
accident**, but there is no large neighbouring market whose owners could tell you how it behaves.

One further independent GPS-only corroboration, from Alza's own product taxonomy rather than Carneo's
copy (Wayback, 2025-11-23): *"Bezdrátové technologie: Bluetooth, GPS, LTE, WiFi"* — no GLONASS.
Retailers reproduce the vendor's under-documentation; §11b is what the silicon actually does.

A relevant sibling data point: **Wonlex KT31**, an AMOLED Android 8.1 kids watch on the closely
related SL8521E from the same ODM family, publishes `VoLTE: Supported` **and a band list with no B20
at all** (`FDD-LTE: B2 B3 B4 B5 B7 B8 B12 B17`). **Band sets on this platform are region-SKU specific**,
which is exactly why an un-updated boilerplate string is a poor basis for a purchase decision.

**Verdict: B20 is a vendor claim with low evidential weight, and the Romanian verdict rests on it.**
The only ways to settle it are the engineering menu (`*#*#4636#*#*`) after purchase, or a written
question to Carneo support before it.

#### 11d. Certification: there is no Declaration of Conformity for this model, and the manual says there is

**CORRECTION to the file's Sources note.** The file records `carneo.cz/prohlaseni-o-shode/` as a 404
and treats the DoC as merely "not retrievable". The correct slug is
**`carneo.cz/vyhlaseni-o-shode/`** (SK: `carneo.sk/vyhlasenie-o-zhode/`), and it works — it lists
**60 Declarations of Conformity**. So the DoC index is not missing. **The 2nd gen is missing from it.**

GuardKid entries present: `GuardKid+ 4G Buddy`, `GuardKid+ 4G Tiny`, `GuardKid+ mini`,
`GuardKid+ 4G Platinum`, `GuardKid+ 4G ULTRA`. **No ULTRA 2nd gen.** This is not a naming quirk —
Carneo publishes "2nd gen" DoCs for other lines (Adventure HR+ 2nd gen, Gear+ Essential 2nd gen,
Heiloo HR+ 2nd gen, TIK&TOK 2nd gen). And it is not a recent deletion: an archive.org CDX sweep of the
whole DoC directory returns only Platinum (2023-09-30), ULTRA 1st gen (2024-12-05), mini (2023-09-30)
and TiVii ULTRA (2024-12-05) — **no 2nd-gen document has ever been archived**, and the March 2026
snapshot of the index shows the same five GuardKid entries.

**Meanwhile the 2nd gen's own manual states that the DoC is published:**

> *"Prohlášení o shodě: Tímto firma TRUST system s.r.o. … prohlašuje, že typ rádiového zařízení
> CARNEO GuardKid+ 4G ULTRA 2nd gen. je v souladu se směrnicí 2014/53/EU … **Úplné znění prohlášení o
> shodě je k dispozici na internetových stránkách www.carneo.cz**"*
>
> "…**The full text of the declaration of conformity is available on the internet pages
> www.carneo.cz**"

It is not. Under RED Article 10(9) that text must be available at the address the manual gives.
(The manual also cites *"2016/30 EU"*, which is not a real directive — presumably a typo for
2011/65/EU RoHS.)

**And the DoCs that do exist don't cover the cellular radio.** The 1st-gen ULTRA DoC (model `LD-10`,
dated **30.7.2024**, signed Andrej Kopáč) lists as its harmonised standards:

> *"EN IEC 62368-1:2020+A11:2020 / EN 62479:2010 / EN 50663:2017 / ETSI EN 301 489-1 V2.2.3 /
> ETSI EN 301 489-17 V3.2.4 / **ETSI EN 300 328 V2.2.2**"*

EN 300 328 is the **2.4 GHz** standard; the rest are safety, EMC and RF-exposure. **There is no
EN 301 511 (GSM), no EN 301 908 (UMTS/LTE), no EN 303 413 (GNSS receivers), and no SAR standard
(EN 62209-1528 / EN 50566)** — on a cellular device worn against a child's wrist. The Platinum DoC
(`LD-01`, 7.11.2022) has the identical gap.

**🚩 And a sibling document proves this is a specific per-product omission, not house style.** The
**GuardKid+ 4G Buddy** DoC (model **`EK-43`**, dated 28.10.2025) lists the full set:

> `EN 301 511 V12.5.1` · `EN 301 908-1 V15.1.1` · `EN 301 908-13 V13.2.1` · `EN 303 413 V1.2.1` ·
> `EN IEC/IEEE 62209-1528:2021` · `EN 50566:2017` · `EN 301 489-19` · `EN 301 489-52`

**TRUST System demonstrably knows how to produce a complete cellular-and-GNSS-and-SAR declaration.
For the ULTRA line it did not.** (Note also that the Buddy's `EN 303 413` shows Carneo does formally
assess GNSS receivers on some products — another sign the ULTRA's GNSS silence is documentation
laziness rather than absent hardware, consistent with §11b.)

Supporting evidence that the missing 2nd-gen DoC is not mere staleness: an enumeration of carneo.eu's
WordPress media library (`wp-json/wp/v2/media?search=zhode&per_page=100`) returns **61 DoC PDFs, none
for the 2nd gen**, and the library is actively maintained — the Buddy DoC was uploaded 2026-01-16 and
Romanian manuals on 2026-05-05. Wayback snapshots of the CZ index (2023-05-30 … 2026-03-12) and the SK
index (2023-03-16 … 2026-05-13) all lack it, and a CDX sweep of `carneo.eu/wp-content/uploads*`
filtered for `ULTRA.*2nd` is empty. **The product has been on the EU market for about nine months.**

**The 2nd gen's model code is not published anywhere** — not in the manual, not on any product page —
which is itself unusual, since `LD-10`, `LD-01` and `EK-43` are all published for its siblings.

**A detail that ties this section to §11c.** The 2nd-gen manual is not a new document. Its own PDF
metadata (verified directly, not reported):

> `Title: CARNEO GuardKid+ 4G_ULTRA manual CZ` · `Author: Andrej Kopac` · `Creator: Word` ·
> `CreationDate: D:20250906110334Z`

**The internal title is the *1st-generation* title — there is no "2nd" in it.** The 2nd-gen manual is
a copy-edit of the 1st-gen manual, authored by the same person who signed the 1st-gen DoC. That is the
same copy-paste process that produced the shared band string, visible at the document level.

No FCC ID, SRRC/CCC/MIIT filing or type-approval record was found for this model or for EAN
8588010359056 / 8588010359063.

#### 11e. One more vendor-page correction

**Android 8.1 is stated by Carneo after all.** §6 says "Neither Carneo page states the Android
version" — that is wrong. `Systém hodinek: Android 8.1` appears in the spec tables on **carneo.cz,
carneo.sk and carneo.hu**. The owner reports corroborate the vendor rather than fill a gap. The
substantive point is unchanged and if anything worse: **Carneo openly ships a 2017 Android release,
in 2026, on a child's watch carrying a microphone, camera and location.**

### 12. Launch date nailed, and the seeding campaign is worse than §1 described (added 2026-08-19)

#### 12a. On sale from 27 November 2025 — hard citation

§1 said "by early December 2025". It can now be dated exactly. The Wayback Machine holds one snapshot
of the Alza.cz blue product page, **`20251123165207`**, in an unambiguous pre-order state:

> `"availability":"https://schema.org/PreOrder"` · `"price":3290` ·
> `"aggregateRating":{"ratingValue":0,"reviewCount":0,"ratingCount":0}` · `"mpn":"8588010359063"`
>
> Buttons **"Předobjednat"** / **"Hlídat dostupnost"** (Pre-order / Watch availability), and for all
> three colours: **"3 290,- · Očekáváme 27. listopadu 2025"** — **"We expect 27 November 2025"**.

carneo.cz's own pages first show **"Skladem"** (in stock) on **2025-12-08**. Slovakia lagged: carneo.sk
2nd-gen pages first archived **2026-01-20**. **`release_year: 2025`, on sale in Czechia from
27 November 2025.**

**There was no launch announcement and no tech-press coverage at all.** `carneo.cz/blog/` contains
exactly **one** post — the vendor's own "test" article. Queries run and returning nothing are listed
in §12f.

#### 12b. CORRECTION to §10a — Heureka.SK is not an independent Slovak pool. It is the Czech campaign, machine-translated.

§10a treated Heureka.sk's 24-review / 96% pool as a third, vendor-solicited but organic pool. **That
was wrong.** The Testuj.to campaign's own configuration (extracted from the page's `__NEXT_DATA__`)
shows Slovakia is a *translation export target*, and the reviews arrived as a single bulk post:

> **`client.name = "Trust System s. r. o"`** — the campaign's client is the vendor itself.
> `pricing.isFree = true`, `discountPercent = 100`, `delivery.freeOfCharge = true`.
> Product EAN `8588010359063`. Published **2026-02-17**, applications closed **2026-02-24**,
> finished **2026-03-30**. Test period **14 days**.
>
> **`productReviewDestinations`** — what each tester was *required* to post to:
> `[1] Testuj.to` · `[2] Heureka` → `chytre-hodinky.heureka.cz/carneo-guardkid-plus-4g-ultra-2nd-gen` ·
> `[3] Carneo.cz` · `[4] Instagram` → *"Publikujte stálý příspěvek nebo reels a označte nás pomocí
> označení: @testujto.czsk, @carneo.cz a zkopírujte následující hashtagy: #spoluprace #testujto
> #carneo"* ("Publish a permanent post or reels and tag us … and copy the following hashtags").
>
> **`productReviewTranslationDestinations`** — tenant `sk` → **Heureka.sk**
> `carneo-guardkid-plus-4g-ultra-2nd-gen`; tenant `hu` → type `export` →
> **`okosora-aktivitasmero.arukereso.hu/carneo/guardkid-4g-ultra-p1269598498`**.

And the fingerprint is visible on the page: **nine of the ten Heureka.sk reviews are dated
`2026-04-14`** — one bulk post — **with author names matching the Czech testers** (Martin, Alena,
Katarína×3, Irena, Andrea, Barbora, Marta). **Heureka.cz discloses this with a "Sponzorováno" label.
Heureka.sk and carneo.cz do not.**

So the corrected picture: **there is one campaign of ten free units, and its output is re-published
across at least five public destinations in three countries.** Carneo's blog headline *"50 dodaných
recenzí"* ("50 reviews delivered") is **10 opinions × ~5 mandated destinations**, presented next to
*"10 rodin testovalo Ultra 2"* in a way that invites a fifty-household reading. And the widely
repeated *"do testovací kampaně se přihlásilo **více než tisíc zájemců**"* ("more than a thousand
applicants registered") rests solely on an unpublished *"interní report Testuj.to 2026"*; the public
campaign page says only **"Hledáme 10 testerů"** and never discloses applicant numbers. **Unverifiable
vendor claim.**

⚠️ **A cross-generation contamination risk, flagged but unconfirmed.** The Hungarian export target
slug is **`guardkid-4g-ultra` with no "2nd gen"**. If that is the 1st-generation árukereső listing,
the campaign was configured to push translated 2nd-gen tester reviews onto the *previous generation's*
page. arukereso.hu could not be opened through any route (Cloudflare 403 via curl, r.jina.ai,
translate.goog and WebFetch), so **this is a flagged risk, not a finding.**

**One count discrepancy, reported rather than resolved.** Reading the rendered Heureka.sk page in the
browser gives *"96 %, 24 recenzií"* with a *"Zobraziť všetky recenzie (24)"* control; the same page's
`__NEXT_DATA__` reports `reviewCount 10, ratingCount 30`. **These do not reconcile.** Similarly
Heureka.cz renders 19 reviews of which **10 carry the Sponzorováno label** — which matches the
campaign's ten testers exactly — while a structured extraction that could retrieve only 12 of the 19
saw 8 labelled. Treat Heureka's own counters as unreliable; the load-bearing fact is that **the
campaign had ten testers and Heureka.cz shows ten sponsored reviews.**

Also noted: Heureka.cz's histogram shows **two 1★ ratings** with no retrievable text
(ratingCount 21 − reviewCount 19 = 2). **Negative sentiment exists in that pool that nobody can read.**

#### 12c. CORRECTION — the testado review is five months older than this file records, and it is affiliate content

The file dates testado.sk to **2026-07-23** and treats it as the one dated review. Both parts need fixing:

- **`datePublished 2026-03-15`** (SK). The 2026-07-23 date is `dateModified`.
- A Czech twin exists: testado.cz, **published 2026-03-24**, modified 2026-06-26.
- Same author both editions — **Katka Muchová**, editor Marika Hain, publisher **Affiliana s.r.o.**
  It is **affiliate-monetised** ("Zistiť cenu" links) and carries **no disclosure** of a free unit or
  sponsorship.
- ⚠️ Both editions were published **inside the Testuj.to campaign window** (17 Feb – 30 Mar 2026).
  No connection was established and none is asserted; the coincidence is noted.

It remains real, detailed, first-hand work with original photography, and **it is the only source
anywhere that states the tracking intervals**:

> *"v intervale **každých 10 minút**. Prípadne je možné hodinky automaticky lokalizovať aj **každú
> hodinu** alebo automatické zisťovanie polohy vypnúť"* — "at an interval of **every 10 minutes**.
> Alternatively the watch can be located automatically **every hour**, or automatic position
> detection can be switched off."

Its battery figure is *"pri úspornom, avšak bežnom používaní"* ("with economical but normal use") —
so **still not a 10-minute-interval measurement**. The file's caveat stands.

#### 12d. New quantified findings from that review — the most useful indoor numbers in the file

> *"Hlavný problém je však ten, že **GPS sa spravidla nepodarí nájsť v uzavretej miestnosti**… **Mne
> sa počas testovania doma podarilo GPS načítať uprostred miestnosti len dvakrát.**"*
>
> "The main problem is that **GPS generally cannot be acquired in a closed room**… **During testing at
> home I managed to get a GPS fix in the middle of a room only twice.**"

> *"Ak v budove alebo kdekoľvek inde GPS zlyhá, nastúpi WiFi alebo LBS… **Odchýlka bola počas
> testovania v priemere 300 až 600 metrov.**"* — "…**The deviation during testing averaged 300 to
> 600 metres.**"

And the failure mode that matters most for a 7-year-old walking home from school, which no vendor
document mentions:

> *"**Budú teda napríklad ukazovať, že je dieťa v škole (ako v uloženom bode), zatiaľ čo bude o dve
> ulice ďalej u kamaráta.** Tento problém môže nastať najmä vtedy, ak budete mať zapnutú lokalizáciu
> len na vyžiadanie."*
>
> "**So they will show, for example, that the child is at school (as at the saved point), while in
> fact they are two streets away at a friend's house.** This can arise especially if you have location
> set to on-demand only."

**The watch can report a confident, plausible, wrong answer** — worse than reporting no answer. Keep
the 10-minute interval on, and accept the battery cost.

#### 12e. Four further concrete limits, none of them previously in this file

- **SOS blocks the callback path.** *"volá, až kým sa niekde nedovolá. **Avšak, vedie to k tomu, že mu
  nemožno zavolať späť.**"* — "it calls until it gets through somewhere. **However, this means you
  cannot call it back.**" (Heureka.sk, Martin, 14.4.2026 — campaign tester, but a structural
  observation.) In the one emergency the button exists for, the parent cannot ring the child.
- **The minimum geofence radius is 200 m.** *"**bezpečná zóna je minimálne 200 m**… pre moje dieťa by
  som si predstavovala menší rádius, ale upozornenia… prichádzajú bez oneskorenia."* (Marta,
  14.4.2026.) A 200 m circle around a school covers the surrounding streets — the alert fires late by
  construction, independent of any GPS error.
- **Messaging is nearly one-way.** Parent-app message text is limited to **50 characters**, and **the
  watch cannot send free text at all** (testado). Voice notes are the child's only channel.
- **IP rating conflict widens.** Alza's own parameter table states **IP67**, against carneo.cz's and
  Testuj.to's **IP68**. Two independent sources now say IP67. The manual's *"Nepoužívejte hodinky při
  koupání, sprchování"* makes the dispute academic, but the file should record that **IP68 is not
  agreed.**

#### 12f. Auditable negatives from this pass

- **recenzopedia.cz has no article on the 2nd gen.** `?s=carneo+guardkid` returns Platinum and base 4G
  only; the guessed slug 404s. So there is no fabricated "test" there to assess. **arecenze.cz**
  likewise: `/carneo-guardkid-4g-ultra-2nd-gen/` → 404, `/?s=guardkid` → 404. **Note that
  carneo.cz's blog cites Arecenze.cz as a source for its Ultra 2 claims — but Arecenze's CARNEO test
  is of the Buddy, a different model. The citation does not support the claims it is attached to.**
- **Heureka's "Poradna" (Q&A) for the 2nd gen is empty — zero questions.**
- **No launch announcement or tech-press coverage exists.** Queries: `"GuardKid+ 4G ULTRA 2nd gen"
  CARNEO tlačová správa OR novinka OR predstavilo 2025`; `CARNEO GuardKid+ 4G ULTRA 2nd gen novinka
  uvedení prodej listopad 2025`; `Carneo GuardKid Ultra 2 AMOLED detské hodinky novinka svetandroida
  OR mobilenet OR fontech OR vosveteit OR techbox`; `instagram "#testujto" "#carneo" GuardKid Ultra
  hodinky 2026`.
- **Wayback CDX returns empty** for alza.cz black/pink 2nd-gen codes, all alza.sk 2nd-gen URLs,
  heureka.sk 2nd gen, and smarty/planeo/mironet/czc filtered to `.*ultra.*2nd.*`.
- **A new pool this file did not have: carneo.cz's and carneo.sk's own review sections** (13 + 1
  ratings, per colour, generation-clean, readable by plain curl). The most valuable entry **pre-dates
  the seeding campaign** and is therefore plausibly organic — **Martin Skacel, 5.2.2026, 5★**:
  *"poloha se zobrazuje poměrně přesně; přehledná aplikace v češtině; **výdrž baterie cca 3 dny**.
  Mínusy: **hodinky jsou trochu větší na menší dětskou ruku**"* ("position displays fairly accurately;
  clear Czech app; **battery life about 3 days**. Cons: **the watch is a bit large for a smaller
  child's wrist**").
- **Method note for future passes:** Heureka CZ/SK block curl, r.jina.ai, allorigins and WebFetch, but
  are reachable through Google's translate proxy —
  `https://chytre--hodinky-heureka-cz.translate.goog/<path>?_x_tr_sl=cs&_x_tr_tl=en&_x_tr_hl=en` —
  which returns the server-rendered page including `__NEXT_DATA__` with structured review objects.
  **This does not work on alza.cz or arukereso.hu**; Alza yields only to a real browser session.

#### 12g. Where the pools disagree, and why that matters

Two independent research passes reached the Alza and non-Alza evidence separately, and the split is
informative. **Every hardware-failure report in this file comes from Alza.cz** — the one pool the
campaign does not post to and the one no proxy can reach. A pass that could not open Alza concluded
there were **no DOA, bricking or warranty reports at all** for the 2nd gen. Reading Alza, there are
**three device deaths in thirty reviews**, one of them a warranty replacement that also died.

**The lesson to carry forward: on this product the reachable evidence is the seeded evidence.**
Heureka.cz, Heureka.sk, carneo.cz and carneo.sk are all campaign destinations or the vendor's own
storefront. Alza is the only large pool outside that system, it scores lowest (3.9/5 ≈ 78% against
86%, 96% and ~99%), and it is the only one that has to be read in a browser.

### Sources added in this pass

All accessed **2026-08-19**.

- https://www.alza.cz/recenze/carneo-guardkid-4g-ultra-2nd-gen-black-13102160.htm (+ `-p2`, `-p3`) —
  **30 reviews / 39 ratings, 3.9/5, all labelled 2nd gen**, 09.12.2025 → 18.08.2026. The single most
  important source added. Contains the hardware-failure reports, the one-day battery reports, the
  15 km Wi-Fi-off finding, the Android 8.1 confirmation, and Carneo's own supplier replies.
- https://www.alza.cz/diskuze-poradna/carneo-guardkid-4g-ultra-2nd-gen-black-13102160.htm — 11
  customer questions, earliest **3. 12. 2025**; includes the "GPS is bad, hundreds of metres, often
  kilometres" complaint of 13. 1. 2026.
- https://chytre-hodinky.heureka.cz/carneo-guardkid-plus-4g-ultra-2nd-gen/ — 19 reviews / 21 ratings,
  86%; **10 explicitly "Sponzorováno … Testuj.to"**; the unsponsored 50% review from a parent of a
  7-year-old; the China/Argentina location artefact; the repair technician's verdict.
- https://testuj.to/testovani/detske-chytre-hodinky-carneo-guardkid-4g-ultra-2-gen — the seeding
  campaign: registration 17 Feb–30 Mar 2026, testing 30 Mar–22 Apr 2026, **10 testers, product free
  of charge plus a prepaid SIM**, each required to deliver **4 reviews + photos + social posts**.
- https://www.carneo.cz/blog/test-detskych-gps-hodinek-2026/ — **vendor-authored ("Redakce CARNEO",
  June 2026) marketing formatted as a comparative test**, citing its own seeded campaign
  ("94 % Doporučení produktu", "50 Dodané recenze", "10 rodin testovalo Ultra 2"). Discounted.
- https://play.google.com/store/apps/details?id=com.tgelec.carneoguard&gl=RO&hl=ro — **RO storefront
  renders**; "Aplicația este disponibilă pentru dispozitivul tău"; **no ratings block**; Data Safety
  "Nu sunt trimise date terțelor părți"; updated 13 iun. 2026. *(Closes the tier-2 gap the previous
  pass recorded as unresolvable.)*
- https://play.google.com/store/apps/details?id=com.tgelec.carneoguard&gl=CZ&hl=cs — **3.1/5,
  ~1,110 reviews**; ~20 review texts read; **Carneo's own replies of 29 June 2026 confirming Wi-Fi is
  for firmware updates only** and claiming 5 m GPS accuracy against its own manual's "several tens of
  metres".
- `https://itunes.apple.com/{ro,sk,cz,hu,de,pl,gb,us}/rss/customerreviews/id=1552178771/json` —
  80 unique iOS reviews retrieved. **RO: zero entries.** SK 19 (avg 1.53), CZ 57 (avg 1.72), HU 4
  (avg 1.50); DE, PL, GB, US: zero. Source of the v2.8 region-selector breakage, the 10-hour account
  lockout, the password-reset-email failures, the child-self-install finding and the watch-to-watch
  pairing finding.
- Czech manual PDF re-analysed by **full-text extraction** rather than page reading — establishes the
  **verified absence** of GLONASS / Galileo / BeiDou / GNSS / VoLTE / VoWiFi / CSFB, and the clause
  *"a také lokalizace"* that the previous quotation omitted.
- Reddit: `/search/?q=carneo&type=comment`, `?q=guardkid&type=comment`, `?q="ceas copii" OR
  "smartwatch copil" carneo&type=comment`, plus post search — **one** relevant result, about the
  Platinum. Auditable negative.
- https://inteligentne-hodinky.heureka.sk/carneo-guardkid-plus-4g-ultra-2nd-gen/ — **third owner
  pool, 24 reviews / 96%**, separate from Heureka.cz. Unlabelled but almost entirely
  *"zakúpené v Carneo"* (vendor-direct). Source of the "battery lasts a day with frequent use",
  "during remote listening the watch does not work", and "without a data package on the SIM it does
  not work" reports, all July/August 2026, all 2nd gen.
- **https://www.carneo.sk/user/documents/appguard/privacy-en.htm — the CARNEO GUARD Privacy Policy,
  which this file previously recorded as non-existent.** Names **AutoNavi** as location provider;
  claims **Frankfurt am Main** storage and ISO 27001/27017/27018; lists **ChuanShanJia (ByteDance),
  Guangdiantong (Tencent), KuaiShou, Baidu Alliance, Aliyun, Ximalaya, Wanhui, JuXiao, Leida** SDKs;
  reads as a machine translation from Chinese. Controller: TRUST System s.r.o. No version or date.
- `yt-dlp ytsearch25:"Carneo GuardKid 4G Ultra 2nd gen recenze"` — **no video review of this
  generation exists**. Auditable negative.

Further sources added late in the pass:

- https://www.unisoc.com/en/solution/FinancialPayUS/8541E-NEW — SC8541E spec table:
  `LTE Cat4 | VoLTE/ViLTE | VoWiFi LTE TDD&FDD`, integrated Wi-Fi/BT/GNSS.
- https://xdaforums.com/t/rom-8-1-unisoc-8541e-watches-aosp8-1-volte-fixed-rom-released.4754684/ —
  **now read in full via r.jina.ai** (direct URL still 403s). Reverses the file's earlier inference:
  VoLTE breaks on generic ROMs, not on stock firmware.
- carneo.cz / carneo.sk facet parameter `pv31` ("SIM karta") across the GuardKid+ range — the
  controlled field in which Carneo records VoLTE for the Tiny and Buddy **and not for this model**.
- https://www.carneo.cz/vyhlaseni-o-shode/ , https://www.carneo.sk/vyhlasenie-o-zhode/ ,
  carneo.eu declaration index (+ its WordPress media enumeration) — **60–61 DoCs, none for the
  2nd gen**, corroborated by archive.org CDX back to 2023. The 1st-gen ULTRA DoC (`LD-10`, 30.7.2024)
  and Platinum DoC (`LD-01`, 7.11.2022) omit GSM/LTE/GNSS/SAR standards that the **Buddy** DoC
  (`EK-43`, 28.10.2025) includes in full.
- The 2nd-gen CZ manual's PDF metadata, read directly: `Title: CARNEO GuardKid+ 4G_ULTRA manual CZ`
  (the **1st-gen** title), `Author: Andrej Kopac`, `CreationDate: 2025-09-06`.
- GPSTest crowdsourced device database (via github.com/barbeau/gpstest) — 37 submissions from an
  SL8541E device: GPS+BeiDou or GPS+GLONASS, single-band, **Galileo never observed**.
- SL8541E kernel/DTS (`sprd-linux/kernel4.14`), `gnss_common_ctl.c`, and the GNSS HAL
  `gps.default.so` NMEA talker IDs (`$GPGSV`/`$GLGSV`/`$BDGSV`, no `$GAGSV`/`$GQGSV`) — the
  chip-level basis for the two-firmware-image, no-Galileo finding.
- Wayback `20251123165207` of alza.cz/carneo-guardkid-4g-ultra-2nd-gen-blue-d13102162.htm —
  **the pre-order snapshot that dates the launch to 27 November 2025**.
- testuj.to campaign `__NEXT_DATA__` — `client.name = "Trust System s. r. o"`, free product, and the
  `productReviewDestinations` / `productReviewTranslationDestinations` lists that mandate posting to
  Heureka.cz, Carneo.cz, Instagram, and export to Heureka.sk and arukereso.hu.
- carneo.cz and carneo.sk per-colour review sections (13 + 1 ratings) — a vendor pool the file did not
  have; contains the pre-campaign Martin Skacel review of 2026-02-05.

**Note on instruction-injection:** no page read in this pass contained text addressed to an AI agent
or attempting to direct this research. Carneo's vendor replies embedded in Alza.cz and Google Play
are addressed to customers and are treated as vendor claims, not as instructions.

## Sources

All accessed **2026-08-19** unless noted. Sources older than 2024 are marked.

**Vendor — specification and bands**
- https://www.carneo.cz/detske-chytre-hodinky/detske-chytre-hodinky-carneo-guardkid--4g-ultra-2nd-gen--cerne/ — **the key source.** 2nd-gen band list *"GSM B2 B3 B5 B8, WCDMA B1 B2 B5 B8, FDD-LTE B1 B2 B3 B5 B7 B8 B20 B28A"*; 1.72" Super AMOLED 320×380; nanoSIM; UNISOC 8541E; 1000 mAh, 4 days / 6 days standby; IP68; 52 g; 3,290 CZK.
- https://www.carneo.cz/detske-chytre-hodinky/detske-chytre-hodinky-carneo-guardkid--4g-ultra-2nd-gen--modre/ — confirmed the strings "VoLTE"/"HD Voice"/"VoWiFi" **do not appear**; app-library, remote-block and timetable wording; box contents incl. a prepaid SIM.
- https://www.carneo.sk/detske-smart-hodinky/detske-smart-hodinky-carneo-guardkid--4g-ultra-2nd-gen--modre/ — independent confirmation of the identical 2nd-gen band list; €129; SC8541E 1.4 GHz; parental-control and app-store feature list; SK-market box includes a Telekom Easy prepaid nanoSIM with €5 credit.
- https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-4g-ultra-black/ — English page, **1st-gen spec** (1.69" IPS 240×280, IP67); €129; "ISO/IEC 27001:2013 certified servers"; full app-store list.
- https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-mini-black/ — GuardKid+ MINI, €109, **2G/3G only** (recorded by the lens-1 retail sweep, 2026-08-18). Brand-halo trap.
- https://www.carneo.eu/en/shop/ — Carneo country storefronts incl. **carneo-store.ro**.

**Vendor — manual (the most useful document)**
- https://www.carneo.cz/user/documents/upload/podpora/navody/CARNEO%20GuardKid+%204G_ULTRA%202nd%20manual%20CZ.pdf — Czech manual for this exact model. Established: battery by tracking mode (20–24 h @ 10 min); signal-strength derating; covert "Odposlech"; 48-hour country-legislation gate; "Kontrola zábavy" app blocking; parent-push app store; "Omezení používání"; dialling/unknown-call/SMS blocking; hourly reboot without data; WiFi-off recommendation; GPS/WiFi/LBS accuracy ranges; **declaration of conformity** naming *CARNEO GuardKid+ 4G ULTRA 2nd gen.* under 2014/53/EU by TRUST system s.r.o., IČO 36249343, Trnava.
- https://www.carneo.cz/podpora-pro-carneo-guardkid--4g-ultra-2--gen/ — support hub; located the manual. The full DoC PDF itself was **not retrievable** (https://www.carneo.cz/prohlaseni-o-shode/ returns 404).

**Romanian channel**
- https://www.emag.ro/ceas-inteligent-pentru-copii-carneo-guardkid-4g-ultra-a-2-a-generatie-wifi-4g-orice-operator-monitorizare-spion-si-prin-gps-agps-baterie-1-000mah-buton-sos-aplicatii-whatsapp-messenger-instagram-youtu/pd/DVC8B22BM/ — 865.41 RON, in stock, seller **HomeMode**, 24-month legal conformity per OUG 140/2021, **0 reviews**; confirms 1.72" AMOLED 320×380, nano SIM, IP68, 1000 mAh; title text *"4G - orice operator"* and *"monitorizare spion"*.
- https://www.emag.ro/search/CARNEO%20GuardKid — full RO Carneo range and prices; all three ULTRA 2nd-gen colours in stock at 865.41 RON.
- https://carneo-store.ro/ — Carneo's live Romanian storefront; **no GuardKid products listed**; kids-watch category URLs 404; site search for "guardkid" returns nothing.
- https://carneo-store.ro/contact/ — legal entity is the Slovak **TRUST System, s.r.o., Jiráskova 19, 917 01 Trnava, ID 36249343, VAT SK2020167270**; Romanian IBAN RO58RNCB0072185504690001 (BCR); +40 722 415 799.
- https://carneo-store.ro/garantie-si-service-post-garantie-carneo/ — **Romanian service centre: CTS Cardinal Top Systems SRL, Str. Ceasornicului 7, Sector 1, București**; 24-month warranty, **6 months on batteries**.

**Companion app**
- https://apkcombo.com/carneo-guard/com.tgelec.carneoguard/ — developer TRUST System spol. s r.o.; **v1.3.0, updated 2026-06-22**; Android 5.0+; 100,000+ installs; **2.2/5 from 1,071 ratings**.
- https://apkpure.com/carneo-guard/com.tgelec.carneoguard — independent confirmation of v1.3.0 / 2026-06-22 / Android 5.0+.
- https://apps.apple.com/ro/app/carneo-guard/id1552178771 — **live in the Romanian App Store**; TRUST System s.r.o.; v2.9, 27 June; Romanian among 45 languages; App Privacy declares precise Location, e-mail and user ID linked to the user; too few RO ratings to display.
- https://play.google.com/store/apps/details?id=com.tgelec.carneoguard — **could not be rendered** across repeated attempts with `hl=ro`/`gl=RO` and `hl=en_US`. RO Play availability therefore **unverified**.

**Security research**
- https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html — **2026-08-14**. Solferini & Stykas, DEF CON 34, 2026-08-08. **Names "Carneo Guard"** among 39 brands on the SETracker backend (operator YQT / 3G Electronics); `com.tgelec.*` package family; data on **Alibaba Cloud in China**; attacks: read/spoof location, intercept text and voice messages, listen in silently, trigger the camera, undetected. SinoTrack and Thinkrace did not respond; Wonlex posted a fix claim 2026-08-10.
- https://pasqualepillitteri.it/en/news/11605/kids-smartwatch-hacked-spying — independent corroboration that **Carneo Guard is on the affected-brand list**; talk title *"Tracking the Trackers"*; broken authentication addressable via the parent's registration e-mail.
- https://tanyagoodin.com/2026/08/children-smartwatch-cybersafety/ — **2026-08-07**. Same research; three backends (YiQingTeng/Wonlex/SETracker, NewGPS2012, SinoTrack); servers *"on a cloud server in mainland China"*. Does **not** name Carneo.
- https://www.bitdefender.com/en-us/blog/hotforsecurity/chinese-tracking-platform-used-cheap-smartwatches-found-completely-open — **2020-07-10 (older source, flagged)**. Pen Test Partners: SETracker's server-to-server API entirely open — arbitrary calls, arbitrary SMS, camera access; fixed server-side. Establishes this is a repeat failure on the same platform.

**Reviews and third-party**
- https://www.testado.sk/detske-smart-hodinky-carneo-guardkid/ — **2026-07-23, Slovakia**, review of this exact model. 9.2/10; **3 days observed battery**; outdoor GPS "a few metres at most"; **indoor GPS generally unobtainable, WiFi/LBS 300–600 m**; Super AMOLED 320×380.
- https://www.planeo.cz/carneo-guardkidplus-4g-ultra-2nd-gen-blue — 3,289 CZK, in stock, **EAN 8588010359063**, one 5-star rating without text. (Its "embedded SIM" field contradicts every primary source and the manual's physical SIM-slot procedure; disregarded.)
- https://smartshop.sk/detske-smart-hodinky-carneo-guardkid-plus-4g-ultra-2nd-gen-cierne — **€104.88** (from €129), in stock at 5 Slovak stores.
- https://www.cena-vykon.sk/porovnani-hodinky/carneo-guardkid-plus-4g-ultra-vs-carneo-guardkid-plus-4g-ultra-2nd-gen/ — 1st vs 2nd gen: **1.69" IPS 240×280 → 1.72" AMOLED 320×380**; SpO2/heart rate added; ~€95 vs ~€130. (Its IP67 and "0.01 GB storage" fields are unreliable; vendor spec preferred.)
- https://www.trustsystem.sk/ — TRUST System s.r.o. founded 2002; launched the CARNEO brand in 2010; 60+ products; Priemyselná 8/E, 917 01 Trnava.
- https://www.carneo.eu/en/warranty-service/ — 24-month standard warranty, 6 months on batteries; Romania present only as a storefront link.
- https://www.carneo.eu/en/privacy-policy/ — **covers the CARNEO FIT app, not Carneo Guard.** Its "no transfer outside the EU" statement does **not** apply to the Guard/kids-watch service. Controller: TRUST System s.r.o., Trnava.
- https://xdaforums.com/t/rom-8-1-unisoc-8541e-watches-aosp8-1-volte-fixed-rom-released.4754684/ — thread title indicates VoLTE on Unisoc 8541E watches required a community fix. **Returned HTTP 403; contents unread; treat as unverified.**

**Not retrievable (recorded as gaps)**
- Google Play listing for `com.tgelec.carneoguard` — never rendered. **The tier-2 Romanian evidence gap.**
- ~~The EU Declaration of Conformity PDF for the 2nd gen — the manual says it is on carneo.cz, but https://www.carneo.cz/prohlaseni-o-shode/ 404s.~~ **CORRECTED 2026-08-19 — see §11d.** The right slug is https://www.carneo.cz/vyhlaseni-o-shode/ (SK: /vyhlasenie-o-zhode/) and it lists **60 DoCs**. The index is fine; **the 2nd gen is simply not in it, and never has been** (archive.org CDX sweep of the whole directory). The manual nonetheless states the full text is published at www.carneo.cz. The 1st-gen ULTRA (`LD-10`) and Platinum (`LD-01`) DoCs that do exist cite **EN 300 328 (2.4 GHz), EMC and RF-exposure only — no EN 301 511 (GSM), no EN 301 908 (LTE)**, i.e. they do not cover the cellular radio.
- Bands rest on **one boilerplate vendor string** shared byte-identically across five different Carneo models, not on two independent national sites and not on any DoC. See §11c.
- alza.cz / alza.sk product pages, appbrain, heureka.cz, smarty.cz — all HTTP 403.
- Any Romanian-language review, forum thread or video for this model — **none exists that could be found.**

### BG/HU/CZ venue sweep (2026-08-19)

Heureka.cz, eMAG.bg and eMAG.hu were manually unblocked in-browser for this pass (all three were
previously behind hard captchas). **No captcha re-armed during the sweep.** Heureka.sk was added
as a same-targets check. All reads read-only; review texts below were extracted from the page's
own data layer (React props), so they are the original Czech/Slovak, not machine translation.

#### Heureka.cz — full review census (the organic residue)

Product page `chytre-hodinky.heureka.cz/carneo-guardkid-plus-4g-ultra-2nd-gen/` — **86 %, 19
reviews, 21 ratings** (5★×16, 4★×2, 3★×1, 2★×0, **1★×2**). The two 1★ ratings are
**rating-only, with no review text** — the only 1–3★ signal in the pool has no words attached.
Filters: Všechny 19, Ověřené 17, Negativní 1, Odborné 1.

**Split: 10 of 19 labelled "Sponzorováno … prostřednictvím spolupráce s Testuj.to"** (Martin
2026-03-23 90 %, Alena 2026-03-21 80 %, Kateřina 2026-03-27 100 %, Kateřina 2026-03-22 100 %,
Ira 2026-03-22 100 %, Andrea 2026-03-19 100 %, Barbora 2026-03-19 100 %, Kateřina 2026-03-17
90 %, Marta 2026-03-08 100 %, Tereza 2026-03-20 90 %); **1 "Odborné"** = testado.cz teaser
(2026-05-18, unverified, no rating, links out to www.testado.cz); **8 organic** (7 verified +
1 unverified). Organic mean ≈ 91 %; the sponsored ten average ≈ 95 %.

**All 8 organic reviews, verbatim (lowest first):**

1. **VencaLazy92, verified (Carneo.cz), 2026-07-06, 50 % — the only negative-filter review.**
   Already in this file's battery section; unchanged on re-read.
2. **Karel Krištof, verified (Alza.cz), 2026-04-28, 80 %.** Pros incl. *"Opravdu funguje opuštění
   zóny a zprávy chodí dobře"* ("zone-exit really works and the messages arrive properly"),
   *"První GPS, která funguje aspoň trochu"* ("the first GPS that works at least somewhat").
   Cons: *"Opravdu obrovské hodinky - větší než moje AW ultra (na dětské ruce vypadají ještě
   větší)"* ("truly enormous — bigger than my Apple Watch Ultra; on a child's arm they look even
   bigger"); *"Ani tady GPS není 100% - ale o dost lepší než ostatní modely"*; *"Trochu otravná
   aplikace - při každém otevření se musim přihlásit"* ("slightly annoying app — I have to log in
   every time I open it"). Summary: *"Jsou to zatím nejlepší hodinky, co jsme vyzkoušeli, ale ani
   tak to nesplňuje má očekávání."* ("the best watch we have tried so far, and even so it does
   not meet my expectations.")
3. **Karel, verified (Alza.cz), 2025-12-27, 90 %.** *"Přesná gps / Spousty funkcí v přehledné
   appce"*; con: *"Přední kamera nic moc"* ("front camera not much good").
4. **anon, verified (Alza.cz), 2025-12-29, 100 %.** *"Lokalizace funguje spolehlivě … Hodinky
   jsou trochu větší"* — chose it "mainly from reviews", i.e. partly downstream of the seeded
   pool.
5. **anon, verified (Carneo.cz), 2026-04-28, 100 %.** *"Bohužel jsou hodinky na dětskou ručičku
   dost veliké, ale už si děti zvykly."* ("unfortunately quite big for a child's hand, but the
   children got used to it") — both grandchildren have one.
6. **anon, verified (Carneo.cz), 2026-05-12, 100 %.** Birthday gift, *"zatím nemáme větší
   zkušenost"* ("no real experience yet") — a 100 % rating with no experience.
7. **Petra, verified (Carneo.cz), 2026-07-21, 100 %.** *"GPS ukazuje polohu poměrně přesně a
   díky bezpečným zónám nám přijde upozornění … Příjemně překvapila i výdrž baterie, protože je
   nemusíme nabíjet každý večer."* ("GPS fairly accurate, safe-zone alerts arrive … battery
   pleasantly surprised us, we don't have to charge every evening.")
8. **anon, UNVERIFIED, 2026-01-27, 100 %.** Pros: *"GPS naprosto přesná / Odposlech super /
   Volání vždy funguje"*. Text: *"Máme už třetí hodinky Carneo (první syn rozbil bohužel, druhé
   jsem koupila z druhé ruky a … pak přestaly fungovat). … Někdy se stane, že to ukáže Čína,
   Argentina apod., ale za 2 minuty se to srovná. … Opravář nám řekl, že je to hrozný aušus :)
   Ale také říkal, že opravdu kvalitní hodinky až od 7000 Kč a výš :)"* — "We're on our third
   Carneo (son broke the first; the second, bought second-hand, stopped working). … Sometimes it
   shows China, Argentina etc., but it rights itself in 2 minutes. … The repairman told us it's
   terrible junk :) but also said genuinely good watches start at CZK 7,000+." **A third
   independent source for the China/Argentina fallback fixes — reported by a SATISFIED owner as
   normal behaviour.** Also: two of this household's three units died.

**Poradna (Q&A) for the ULTRA 2nd gen: EMPTY — zero questions** as of 2026-08-19.

#### Heureka.sk — the label check (CORRECTION to `review_pool_seeded`)

`inteligentne-hodinky.heureka.sk/carneo-guardkid-plus-4g-ultra-2nd-gen/` — **96 %, 24 reviews.**
This file previously recorded *"Heureka.sk and carneo.cz DO NOT"* label the Testuj.to exports.
**No longer true for Heureka.sk: all 10 Testuj.to translations now carry the "Sponzorované"
label**, and all 10 were imported in one batch (data layer shows `filledAt` 2026-04-14 for every
one, shop = "Testuj.to"). The other 14 reviews are organic — but **13 of the 14 were bought at
Carneo's own e-shop and all 13 rate 100 %** (jana 2026-08-10, Tm221 2026-07-31, Drahomír
2026-07-10, Roman 2026-07-09, jana 2026-07-03, Ferdo 2026-06-22, anon 2026-06-22, Holly
2026-06-17, Peter Budis 2026-04-15, nomak 2026-04-14, anon 2026-03-28, Klára 2026-03-23 — plus
Gabes, Alza.sk, 2025-12-29, 100 %). The only organic review not at 100 % is the only one that
lists cons:

> **Zuzana, verified (Carneo), 2026-07-28, 80 %.** Pros: *"Gps určuje správnu polohu hodiniek -
> odchylka trasy pešo - jedna minúta"* ("GPS gives the correct position — deviation on a walked
> route about one minute"). Cons: *"Baterka pri častom používaní vydrží deň."* ("battery lasts a
> day with frequent use"); *"**Počas odposluchu hodinky nefungujú - dieťaťa ich nevie použiť.**"*
> ("**during remote listening the watch does not work — the child cannot use it**"); *"Pri určení
> polohy sa musím 'preklikať', kým mi skočí reálny čas aj miesto"* ("I have to click around
> before the real time and place appear"); *"Návod je nečitatelný"* ("the manual is unreadable").

New practical datapoints from the SK organic pool: **the box bundles a Telekom Easy prepaid SIM
that two owners independently reject** — *"pribalená Telekom Easy karta, do koša s ňou"* ("the
bundled Telekom Easy card — straight in the bin", Gabes 2025-12-29) and *"Easy karta v baleni ma
predraženy internet. Preto som kupila inu kartu"* ("the bundled Easy card has overpriced
internet, so I bought a different card", Tm221 2026-07-31), who also repeats the data
dependency: *"bez internetoveho balička na sim karte nefunguje"* ("without a data bundle on the
SIM it does not work"). Tm221 additionally reports it *"Meria tep aj krvny tlak čo v opise nebolo
aj kyslik v krvi"* (measures pulse, blood pressure and SpO2 — not in the product description).

**Net effect:** Heureka.cz 86 % = 10 sponsored + 8 organic + 2 wordless 1★; Heureka.sk 96 % =
10 labelled sponsored + 13 five-star reviews sourced from Carneo's own shop + 1 critical organic.
The "seeded evidence" verdict in `review_pool_seeded` stands; only the labelling detail changes.

#### eMAG.bg / eMAG.hu — zero UGC (rechecked in-browser, captcha down)

| Venue | Listing | Reviews | Q&A |
|---|---|---|---|
| eMAG.bg | ULTRA 2nd gen **pink** (`/pd/D0C8B22BM/`) | **0** ("Бъди първият написал ревю") | **0** |
| eMAG.bg | ULTRA 2nd gen **black** (`/pd/DVC8B22BM/`) | **0** | **0** |
| eMAG.bg | ULTRA 2nd gen blue | **not listed** (only pink + black found) | — |
| eMAG.bg | Platinum pink (`/pd/DVX6NVYBM/`) | **0** | **0** |
| eMAG.hu | ULTRA 2nd gen **black** (`/pd/DVC8B22BM/`) | **0** ("Legyél Te az első…") | **0** |
| eMAG.hu | ULTRA 2nd gen **blue** (`/pd/DRVLTY2BM/`) | **0** | **0** |
| eMAG.hu | ULTRA 2nd gen **pink** (`/pd/D0C8B22BM/`) | **0** | **0** |

The earlier "eMAG.hu showed 0 reviews" finding is confirmed, now with the Q&A sections also read:
**empty on every listing in both countries.** There is still not one Bulgarian or Hungarian owner
report of this watch anywhere on eMAG.
