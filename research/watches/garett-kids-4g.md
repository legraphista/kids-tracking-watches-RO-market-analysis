```yaml
---
model:                  Garett Kids Twin 2 4G          # representative model for the whole Garett Kids 4G line
brand:                  Garett (GARETT Sp. z o.o., Kielce, Poland)
release_year:           2024                            # EU Declaration of Conformity 01/24/TWI issued 15.11.2024
still_sold:             yes                             # in stock at garett.com.pl and on eMAG.ro, checked 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status:              likely
ro_evidence_tier:       3                               # unchanged. Re-verified 2026-08-19: there are exactly TWO Romanian-language reviews of the app in its entire history (both 1*, both 2025) and ZERO Apple RO ratings. But the registration risk is LOWER than the doc assumed - the account key is an E-MAIL, not a phone number, and there is no country picker, so the Xplora-style country-refusal failure mode is structurally absent. See "Scrutiny pass" section 5
ro_killer:              n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands:              [B20, B8, B3, B1, B7]           # from vendor RED Art.10(8) statement "LTE 800/900/1800/2100/2600 MHz"
band_b20:               true
band_b28:               false
volte:                  UNKNOWN                         # on-watch Settings exposes a VoLTE toggle; no vendor support statement, no RO provisioning evidence. Re-searched 2026-08-19 across 972 Play + 165 App Store reviews: still zero owner reports of a voice call on a Romanian network
voice_fallback:         2g-csfb                         # GSM 900/1800 declared. Garett's own support FAQ (2026-08-19) conditions cross-border use on 2G: "Tak, o ile karta SIM ma włączony roaming danych i działa w sieci 2G w danym kraju" - i.e. the vendor appears to treat 2G as the voice-bearing layer, not as a fallback. Works on Orange/Digi RO today; at risk when either retires 2G
modem_chipset:          UNISOC SL8521E

# --- Positioning (the #1 criterion) ---
positioning:            [GPS, AGPS, LBS, WiFi]          # RESOLVED at silicon level 2026-08-19. GALILEO IS CONFIRMED ABSENT: a UNISOC technical source (CSDN, 2022-05-08) names SL8521E in its "chips that do not support Galileo" list. GLONASS and BeiDou are probably present but unclaimed - INFERRED from the sibling SL8541E's GNSS HAL (talker IDs $GPGSV/$GLGSV/$BDGSV, no $GAGSV; firmware images gpsgl/gpsbd; probe default GPS+GLONASS). Single-band L1/B1I either way. Wonlex's marketing sheet for the 8521E claims GPS L1 only. No owner-side GPSTest capture exists for any watch on this silicon. See "Scrutiny pass" section 7a
positioning_priority:   [WiFi, LBS, GPS]                # ADDED 2026-08-19. The watch tries Wi-Fi FIRST, LBS second, and only attempts GPS automatically when out of LBS range - it prefers LBS to GPS even outdoors, to save power. This, not the receiver, is why owners report errors of 2-30 km. Documented by a Polish owner (Media Expert, 2023-10-12) and consistent with every wrong-location report in the corpus
wifi_positioning:       true
update_interval_min:    1                               # CONFIRMED 2026-08-19 from a 2nd independent source: "Mod de urmărire – actualizează la fiecare minut" (Garett RO manual) + SeTracker2 platform manual "Follow mode: Updating GPS location takes place every minute". Platform default, not a Garett feature. Costs roughly half of runtime vs the 10-min Normal mode. NOBODY has reported running a Twin 2 at 1 min for a full day

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:            900
battery_claimed_h:      24                              # Garett's own spec table: "Typowy czas pracy baterii: Do 1 dnia" = the SeTracker platform's Follow-mode (1-min) figure. Standby claim 144 h. Retail 72 h = roughly the platform's Saving-mode (1 h) figure. Garett support FAQ 2026-08-19 gives "zazwyczaj od 1 do 3 dni". Platform manual (setracker.eu, 2026-08-19): 1-min approx 0.5-1 day; 10-min approx 1-1.5 days; 1-h approx 3-5 days
battery_observed_h:     48                              # POPULATED 2026-08-19 (was UNKNOWN). Five dated Twin 2 owner reports on Media Expert exist; **four** converge on ~2 days and the fifth fails the school day: "2, 3 dni" (Mateusz 2025-09-22), "trzyma 2 dni" (Bartosz 2025-05-11), "ok 2 dni" (Martyna 2025-07-03), "max dwa dni - przy wlozonej karcie, nie graniu w gry" (Pawel 2025-01-02). INTERVAL NOT STATED in any of them - almost certainly the 10-min default, NOT the 1-min tracking mode. One outlier well below the school-day floor: "nie wytrzymuje nawet do wieczora" (Karolina 2025-07-21, going to RMA). Runtime at 1-min tracking remains UNOBSERVED. See "Scrutiny pass" section 2a

# --- App & service ---
app_name:               Garett Tracker (com.tgelec.garetts)
app_android_min:        Android 8.0
app_ro_playstore:       true                            # listing fully localised into Romanian, but only 2 RO reviews ever and 0 Apple RO ratings
app_last_update:        2026-06                         # Android 1.4.1, 16 Jun 2026. iOS is 1.6.3 of 2 Jul 2026, and had a 15-month gap between Jan 2024 and Apr 2025
app_rating:             2.33                            # CORRECTED 2026-08-19. The doc's "2.6" was a Google RO-locale privacy artefact (3 of 5 histogram buckets read zero). Real Play PL-locale figure is 2.33 over 3,634 ratings with 52% one-star; of 972 text reviews the mean is 1.68 and 68.7% are one-star. Apple App Store Poland is 1.70 over 441 ratings, 70.7% one-star. Flat at this level since 2023 - not a bad update, a floor
data_region:            EU-edge-CN-platform             # CORRECTED 2026-08-19 (was EU). 52.28.132.157 is verifiably AWS eu-central-1 Frankfurt (PTR ec2-...compute.amazonaws.com, ARIN AT-88-Z, AS16509) - but it is SeTracker's SHARED Europe/Africa node, not a Garett instance. The platform's own hostname agpse.3g-elec.com resolves to Alibaba HK 47.91.138.192 and 3g-elec.com to Alibaba Hangzhou 114.55.99.221. DEF CON 34 (8 Aug 2026) names "Garett Kids" on the "39 brands, one server" slide, backend YQT/3G Electronics, "data sits on Alibaba Cloud in China"

# --- Practical ---
sim:                    nanoSIM
water_rating:           IP67
weight_g:               54                              # "max. 54 g"
camera:                 true                            # 2 x
games:                  true                            # 10
extras_disableable:     partial
price_eur:              64.83                           # CORRECTED 2026-08-19 (was 78.49). 279.99 PLN street at Media Expert / RTV Euro AGD; 248.99 PLN lowest on Ceneo/Allegro (EUR 57.65). The old figure was garett.com.pl RRP 339 PLN, which nobody pays. Makes the RO premium +25%, not +3%
buy_from:               garett.com.pl (Poland), or the GARETT vendor account on eMAG.ro (Romania)
price_ro_eur:           80.81                           # 423.75 RON, eMAG.ro, 2026-08-19
---
```

## Verdict

> **Superseded in part by the "Scrutiny pass (2026-08-19)" section below. Read that first.** The three claims struck through in spirit here are: "EU-hosted" (the tracker endpoint is AWS Frankfurt but it is SeTracker's shared node, and the platform's own hostname resolves to Alibaba Cloud in China); the app rating (2.6 was a locale artefact — the real figures are 2.33 on Play and **1.70 on iOS**); and the price advantage (Polish street price is 280 zł, not the 339 zł RRP, so Romania carries a +25% premium). The battery "contradiction" also dissolved: it was a tracking-mode conflation, not a lie.

The only candidate in this field whose manufacturer actually publishes its radio bands — **LTE 800/900/1800/2100/2600 MHz, i.e. B20 present, B28 absent** — which is a Romania-complete band set, and it does so for every model in the line. Suits a parent who wants cheap, warranted hardware with a real Romanian-language manual and a 24-month Polish manufacturer warranty, and who is willing to accept a Shenzhen white-label backend. The risk is on the software side and it is worse than first assessed: the companion app is a TGELEC white-label rated **2.33/5 on Play (52% one-star) and 1.70/5 on iOS (71% one-star)**, whose owners across four countries report positions wrong by 100 m to 200 km, positions two days stale, and geofences that either fire an hour late or fire falsely dozens of times a day. **Garett Kids is named by name in the DEF CON 34 / Black Hat 2026 "39 brands, one server" research.** It clears the signal floor on paper, and the battery turns out to be the *least* of its problems — five dated Twin 2 owners report ~2 days, comfortably past a 9.5 h school day. **The position-quality floor it does not clear, and the reason is architectural: the watch tries Wi-Fi first and cell-tower second, and only falls back to GPS when it has to, on a single-band receiver with no Galileo.** That is not fixable by a setting, and it is the one thing this buyer actually needs.

## Does it work in Romania?

**Tier reached: 3, with caveats.** The evidence, all checked 2026-08-19:

**Tier 4 — vendor channel.** GARETT is itself the seller of record on eMAG.ro for the Twin 2 4G in black ([D0SCRQYBM](https://www.emag.ro/ceas-smartwatch-pentru-copii-garett-twin-2-gps-8gb-negru-1-8-twin-2-4g-blk/pd/D0SCRQYBM/)) and pink ([DPSCRQYBM](https://www.emag.ro/ceas-smartwatch-garett-kids-twin-2-4g-roz-8gb-cu-gps-set-cu-holografic-stickers-5904238486290/pd/DPSCRQYBM/)) — the page reads *"Vândut și livrat de: GARETT"* / "Sold and delivered by GARETT", 423.75 RON, in stock. A Polish manufacturer selling first-party into Romania is a genuine channel signal.

**Tier 4 — vendor names Romania in documentation.** Garett publishes a full **Romanian-language user manual** for the Twin 2 4G and for the Essa 4G, plus a Romanian warranty card, on its own support portal ([support.garettelectronics.com](https://support.garettelectronics.com/product/smartwatch-garett-kids-twin-2-4g/)). The manual states a 24-month manufacturer warranty. **Note the gap:** Kids Tech 4G, Nice Pro 4G, Sun Ultra 4G and Cute 2 4G have a Romanian *warranty card* but **no Romanian manual** — only the Twin 2, Essa, Essa 2 and Vibe AI do.

**Tier 2 — app live in the RO storefront.** Fetched with `hl=ro&gl=RO` on 2026-08-19: **Garett Tracker** (`com.tgelec.garetts`), GARETT Sp. z o.o., **2,6★ / 3,63 K de recenzii / 500 K+ Descărcări**, last updated **16 iun. 2026**. Live, current, and carrying Romanian-language reviews — so the storefront and the review pipeline both serve Romania.

**Tier 3 — dated first-hand Romanian reports.** Two, both on the platform rather than on the Twin 2 specifically, and both negative on quality rather than on connectivity (full text under "What users say"). Daniel Condurache, 26 June 2025, describes standing outdoors *with his child* while the app showed the child 100 m away and reports *"bateria tine maxim doua zile"* — that is a Romanian user with a **working, connected, tracking watch**, which is the connectivity question answered in the affirmative. Oana, 25 April 2025, could not get the app to connect at all.

**Tier 5 — bands fit.** The manufacturer's own RED Article 10(8) statement lists **LTE 800 MHz**, which is Orange Romania's only sub-1 GHz LTE band. See "Network & bands".

**What is still unproven, and must be written as unverified:**

- **No Romanian user has reported placing or receiving a voice call on this watch.** Both RO reports concern location and app connection. Given Romania has no 3G, the voice path is the single unresolved risk and it is **unverified**.
- **VoLTE is unverified.** The watch's own Settings menu exposes a VoLTE toggle (Garett's Romanian manual, *"Rețea mobilă: Configurarea setărilor de rețea (VoLTE, APN, roaming de date)"*). A toggle is not a certification and not an operator provisioning. No Romanian operator VoLTE listing was found for this IMEI/TAC.
- **The "51 reviews / 41 reviews" figure from the brief does not survive checking.** On 2026-08-19 the Twin 2 4G black product page shows **`Recenzii (1)`** — one review, 5★. The Nice Pro 4G page shows **`Recenzii (1)`** — one review, 4★. **Corrected later the same day by a SKU-by-SKU sweep of all 30 Garett Kids listings on eMAG.ro: there are THREE Romanian reviews in total, not two.** The third is **Adrian, 19 Jun 2026, 1★, verified buyer, Garett Kids Tech 4G: *"Nu corespunde locația unde te afli"*** — "The location where you are doesn't match." Twenty-seven of thirty SKUs have zero reviews. See "Scrutiny pass" §5a. Whatever produced the 51/41 counts was an aggregation at listing level, not product-page evidence — exactly the pattern OPTIONS.md flagged ("One listing advertised 55 reviews while its product page surfaced 5").
- **APN guidance is Polish-only.** Even the *Romanian-language* manual's APN troubleshooting section lists only Polish operators — Play, T-Mobile, Virgin Mobile, Plus, Orange, NJU Mobile. A Romanian buyer with an APN problem gets no relevant instruction, and the "Orange" APN string given (`internet,internet,internet`) is the Polish one.
- **Support answers Romanians in Polish.** Both Romanian Play Store reviews received vendor replies written in Polish. Support hours are Mon–Fri 09:00–15:00 Polish time on a +48 number, with a separate hotline for Czech/Slovak and none for Romanian.

## Pre-purchase test

1. Install **Garett Tracker** (`com.tgelec.garetts`) from the **Romanian** Play storefront — confirmed present and updated 16 June 2026.
2. **REVISED 2026-08-19.** Register an account *before paying* — but the test is **not** "+40 accepted". Registration is **e-mail based**: e-mail → on-screen verification code → password → accept terms → *then* scan the watch's QR code. There is no country picker and the phone number is only the watch-phonebook admin entry, so a country refusal cannot occur. **The real barrier is the password validator**, which silently rejects special characters and diacritics while telling you the password is "too simple": use **8–16 characters, ASCII letters and digits only**. If you cannot create an account, stop — one Polish buyer ran this exact test in April 2026 and abandoned the purchase. Note also that adding the watch can sit in "administrator approval" limbo for a week.
3. Buy from the **GARETT vendor account on eMAG.ro**. Note the return window is **14 days**, not 30 — the page reads *"14 zile drept de retur"*, because this is a marketplace seller, not eMAG 1P. Buying direct from **garett.com.pl** gives the same 14 days (*"Do 14 dni na zwrot"*) plus a lower price on some models.
4. In week one: place **an outgoing and an incoming voice call with the watch on LTE**, and separately with LTE forced off, to see whether voice is actually riding VoLTE or dropping to 2G. Then check the reported position **inside the school building**, not in the garden.
5. Immediately change the SMS admin password away from the factory default — see "Security & privacy".
6. **Added 2026-08-19.** In the app, look for an **AGPS / server-region selector** and confirm it is set to Europe, and check which map provider renders. On the sibling Carneo build an "Asian" default was reported to wreck accuracy. Also verify the watch's server field reads the **numeric** `52.28.132.157` and not the hostname `agpse.3g-elec.com`, which resolves to Alibaba Cloud in Hong Kong.
7. **Added 2026-08-19.** Set a geofence around the school and watch it for a week *before* trusting it. The most-reported failure is not a missed alert but **dozens of false exit alerts a day**, which trains you to ignore the real one.
8. **Added 2026-08-19.** Charge from a low-current source. Garett specifies 0.15 A; Polish owners report modern 2 A chargers damaging the watch.

## Positioning quality in real use

Garett's own spec table for every model in the line reads **`Lokalizacja: Tak (GPS, AGPS, LBS, Wi-Fi)`** — GPS with assisted GPS, cell-tower positioning and Wi-Fi positioning. No GLONASS, Galileo or BeiDou is claimed anywhere, which for a 2024–2025 device is a single-constellation receiver and a meaningful weakness for urban fix quality.

**The fallback behaviour is documented by the vendor and it is the classic failure mode.** From the Romanian manual: *"dacă ceasul pierde semnalul GPS, de exemplu, pentru că se află în interiorul unei clădiri, locația este determinată pe baza celui mai apropiat emițător de rețea mobilă"* — "if the watch loses GPS signal, for example because it is inside a building, the location is determined on the basis of the nearest mobile network transmitter." The app screen shows which source produced the current fix (GPS/LBS/WiFi), so a parent can at least tell when it has degraded — but the watch does not warn, it just moves the pin.

**Update intervals** the app allows (Romanian manual, "Moduri de funcționare"):

| Mode | Interval | Vendor note |
|---|---|---|
| Mod de urmărire (tracking) | every 1 minute | *"reduce timpul de funcționare al ceasului"* — reduces runtime |
| Mod normal | every 10 minutes | vendor-recommended |
| Mod de economisire a bateriei | every 1 hour | |
| Mod de repaus | manual only | |

Geofence radius is capped at **2 km**, which is coarse for a school-catchment fence.

**Observed accuracy, Romania, 1 report:** Daniel Condurache, 26 June 2025 (Play Store, RO): *"Precizia in aer liber (afara) este jalnică. Sunt cu copilul afara și imi arată ca este la cel puțin 100 m."* — "The accuracy outdoors is pitiful. I'm outside with my child and it shows me he's at least 100 m away." He also complains the map itself is stale: *"Harta nici nu este actualizata 2025. Eram intr-un cartier nou și nu îmi afisa harta, doar un punct."* — "The map isn't even updated for 2025. I was in a new neighbourhood and it didn't show me the map, just a dot."

**Observed accuracy, Poland, 1 report:** GuideLee.pl, independent review of the **Essa 4G**, 12 May 2025 — outdoor position on the map was reasonably accurate, but indoors *"aplikacja wyświetlała inny adres (poprawna ulica, ale zły numer budynku)"* — "the app displayed a different address (correct street, but wrong building number)."

**Two independent reports, two countries, both saying the same thing: outdoor is workable, indoor drifts to a neighbouring address.** That is the LBS fallback doing exactly what the manual says it does. For the specific requirement in this project — knowing where a 7-year-old is *inside a concrete school building* — this is the weakest part of the device and it is not fixable by settings.

## Battery in real use

**These are three different numbers and they must not be merged.**

| Source | Figure | What it actually measures |
|---|---|---|
| eMAG.ro retail listing (machine-translated marketing) | *"timpul de functionare la o singura incarcare este de pana la 3 zile"* — up to 3 days | marketing claim, **attributed, not restated as fact** |
| Garett's own spec table, garett.com.pl / garett.eu | **`Czas czuwania: Do 6 dni`** (standby up to 6 days) and **`Typowy czas pracy baterii: Do 1 dnia`** (typical battery life: up to 1 day) | the manufacturer's own honest split |
| Observed, Twin 2 4G | **UNKNOWN** | no dated first-hand runtime measurement found |

**~~The manufacturer contradicts its own retailer listing.~~ CORRECTED 2026-08-19 — this was a tracking-mode conflation, not a contradiction.** The SeTracker platform manual publishes runtime per mode: 1-minute Follow ≈ ½–1 day, 10-minute Normal ≈ 1–1½ days, 1-hour Saving ≈ 3–5 days. Garett's "up to 1 day" is the **Follow-mode** figure; eMAG's "3 days" is roughly the **Saving-mode** figure. Both are true of different settings. The substantive criticism stands — the retailer quotes the mode nobody uses for a school run — but the vendor is not contradicting itself. See "Scrutiny pass" §2.

This pattern holds across the whole line — every model's Garett spec table says "typical up to 1 day" or "up to 1.5 days" regardless of the marketing:

| Model | Battery | Vendor standby | **Vendor typical** | Retail marketing |
|---|---|---|---|---|
| Twin 2 4G | 900 mAh | 6 days | **1 day** | "up to 3 days" |
| Essa 4G | 710 mAh | 5 days | **1.5 days** | "up to 4 days" |
| Essa 2 AI 4G | 800 mAh | 5 days | **1 day** | — |
| Sun Ultra 4G | 900 mAh | 5 days | **1 day** | — |
| Cute 2 4G | 700 mAh | 7 days | **1 day** | — |
| Vibe AI 4G | 680 mAh | 3 days | **1.5 days** | "up to 3 days" |
| Nice Pro 4G | 670 mAh | 5 days | **1 day** | — |
| Kids Tech 4G | 550 mAh | 6 days | **1 day** | — |

**The morele.net "120 mAh" figure for the Essa 4G is a listing error, now positively refuted.** Garett's Romanian manual for the Essa 4G states `Baterie: 710 mAh`, and garett.com.pl states `Pojemność baterii: 710 mAh`. Two vendor-primary sources agree on 710 mAh.

**Nearest observed datapoints (neither is the Twin 2 — treat as line-indicative only):**

- **Essa 4G (710 mAh), GuideLee.pl, Poland, 12 May 2025.** With location updates **every 10 minutes**, one ~1-minute video call a day, a few short voice calls (~5 min total) and night power-saving 22:00–06:00 enabled, the watch reached low battery after **~28 hours**. In power-saving mode with **hourly** updates it reached **~40 hours**. The reviewer's conclusion: *"trzeba być przygotowanym na ładowanie zegarka co noc"* — "you have to be prepared to charge the watch every night."
- **Unspecified Garett model, Romania, 26 June 2025.** *"Bateria tine maxim doua zile."* — "The battery lasts a maximum of two days."
- **Sun Ultra 4G (900 mAh), Poland, 6 Feb 2026**, on Garett's own moderated shop: Dagmara, 5★, *"bateria wytrzymuje nawet dłużej niż się spodziewałam"* — "the battery lasts even longer than I expected." No figure given.

Scaling the Essa's 28 h at 710 mAh to the Twin 2's 900 mAh would suggest roughly a day and a half under the same regime — but the Twin 2 also drives a bigger screen, Android 8.1, two cameras and video calling, so **do not treat that as a measurement**. It is **unverified**.

**Practical reading: at the 10-minute interval with a school-day call or two, plan on charging nightly.** At the 1-minute tracking interval, plan on less than a school day.

## Network & bands

**This is the finding that closes the biggest documentation gap in the project.** The bands are not on garett.com.pl, not on any retailer, and not in the Declaration of Conformity — they are in the **RED Article 10(8) frequency and power statement printed in the back of every user manual**, which is why every previous sweep missed them.

From the Garett **Romanian-language** manual for the Kids Twin 2 4G, and identically from the Polish manuals for Nice Pro 4G, Sun Ultra 4G, Cute 2 4G, Kids Tech 4G, and the English manuals for Vibe AI 4G and Essa 2 AI 4G:

| Gama de frecvențe / Zakres częstotliwości (frequency range) | Puterea maximă emisă / Maksymalna moc emitowana (max power) |
|---|---|
| GSM 900/1800 MHz | 33,51 / 30,44 dBm EIRP |
| UMTS 900/2100 MHz | 23,77 / 23,87 dBm EIRP |
| **LTE 800/900/1800/2100/2600 MHz** | 23,49 / 23,10 / 23,10 / 23,44 / 23,27 dBm EIRP |
| Wi-Fi 2412–2472 MHz | 16 dBm EIRP |
| Bluetooth 2402–2480 MHz | ≤ 20 dBm EIRP |

Mapped to the standard European LTE band numbering: **800 = B20, 900 = B8, 1800 = B3, 2100 = B1, 2600 = B7.**

**Fit against Romanian operators:**

- **B20 (800 MHz) is present.** This is Orange Romania's only sub-1 GHz LTE band. A kids' watch has a bad antenna on a small wrist; without B20 it would have no low band at all on Orange. The Garett line has it.
- **B3 (1800) is present** — the national workhorse across all Romanian operators.
- **B1, B7, B8** are present, covering the capacity layers.
- **B28 (700 MHz) is absent.** Per OPTIONS.md this costs nothing in Romania, where 700 MHz is 5G NR n28, not LTE.
- **2G GSM 900/1800 is present**, so a VoLTE provisioning failure degrades to 2G voice on Orange or Digi rather than to silence. Do not pair this watch with an operator that has retired 2G.

**Three caveats that must be stated plainly:**

1. **The band table is byte-identical — including the decimal dBm figures — across models built on three different chipsets** (UNISOC SL8521E in Twin 2 / Essa / Sun Ultra / Vibe AI; ASR3603 / ASR3603S / ASR3603C in Kids Tech / Nice Pro / Cute 2; ASR8601 in Essa 2 AI). Identical measured emission figures across different radios is a boilerplate signature. It is nonetheless the manufacturer's own regulatory statement for each named product, made under the Radio Equipment Directive, and it is the only band data that exists for this line anywhere. Treat it as the vendor's binding claim, not as an independent measurement.

2. **The Declarations of Conformity do not corroborate it, and one of them is defective.** The **Essa 4G** DoC (No. 11/24/ESS, 15.11.2024, Kielce) cites the right radio standards — ETSI EN 301 511 (GSM), EN 301 908-1 and **EN 301 908-13 (LTE user equipment)**, EN 300 328 (2.4 GHz), EN 303 413 (GNSS receivers), the EN 301 489 EMC series, and the EN 62209 / EN 50360 / EN 50566 SAR series — but lists **no frequency bands and no maximum power**. The **Twin 2 4G** DoC (No. 01/24/TWI, same date and place, same signatory) is worse: it invokes Directive RED 2014/53/EU but the standards it lists are **only EMC and RoHS** (EN 55032, EN 55035, the EN 61000 series, the IEC 62321 series). **It cites no radio standard whatsoever for a 2G/3G/4G product.** That is a documentation defect in the manufacturer's own conformity paperwork for the flagship model of the line, and it means the DoC cannot be used to verify the manual's band claim.

3. **Note also that neither DoC cites a UMTS/WCDMA user-equipment standard** (there is no EN 301 908-2 or -11 on the Essa's list), even though both manuals declare UMTS 900/2100. Irrelevant in Romania, where there is no 3G, but it is a further sign the paperwork is not carefully maintained.

**VoLTE.** The brief was right to be suspicious of the *"2G/3G/4G LTE"* phrasing, but the answer here is better than feared and still not clean:

- The watch **does** carry a real 2G radio (GSM 900/1800 declared, at full 33.51 dBm), so it is not a data-only device pretending to make calls.
- The watch's **on-device Settings menu contains a VoLTE control**: *"Rețea mobilă: Configurarea setărilor de rețea (VoLTE, APN, roaming de date)"*. A VoLTE toggle in the modem settings is meaningful evidence that the UNISOC stack supports IMS voice.
- But **Garett makes no VoLTE claim anywhere** — not on garett.com.pl, not on garett.eu, not on eMAG, not in the DoC. And "the watch supports VoLTE" is a different claim from "VoLTE is provisioned for this TAC on Orange/Digi/Vodafone Romania". No Romanian operator listing was found.
- **Therefore: `volte: UNKNOWN`, and in Romania the realistic expectation is 2G CSFB for voice with LTE for data.** That works today on Orange and Digi. It stops working the day either retires 2G, and neither has published an end date.

## Features & what can be disabled

Every model's Garett spec table lists **`Zdalny podsłuch`** — remote listening — as a shipped feature, and the eMAG.ro listing markets it in Romanian: *"apeluri vocale si video si ascultare de la distanta"* ("voice and video calls and remote listening"). See "Security & privacy" for what that means in practice.

| Feature | Present | Can the parent app switch it off? |
|---|---|---|
| Voice calls | yes | **Yes, partly** — "Listă albă" (whitelist) restricts incoming calls to numbers saved in the watch phonebook |
| Dial-any-number keypad | yes | **Yes** — app tab *Gestionare > Tastatură numerică*. The manual explicitly advises turning it off: *"Dacă nu doriți ca utilizatorul ceasului să poată contacta numere care nu sunt introduse în agenda telefonică, dezactivați această funcție."* |
| Video calls | yes | **UNKNOWN** — no dedicated disable documented |
| SOS (3 numbers) | yes | Not disableable by design; sequential dial to 3 numbers |
| **Remote listening** | yes | **No off switch documented.** The manual says: enter a phone number to activate; the watch then auto-dials that number. Removing the number is the only documented control. Garett's support FAQ confirms the call is placed **silently**: *"Telefon zadzwoni na zegarek w trybie cichym"*. This is the feature that makes such watches illegal to place on the German market (BNetzA, §8(1) TDDDG) — see "Scrutiny pass" §1 |
| Camera (2×), incl. remote photo capture | yes | **UNKNOWN** — no camera disable documented; remote capture is a parent-side function |
| Games (10, gyroscope-based) | yes | **Partly — updated 2026-08-19.** Garett's support FAQ says game time can be capped from the app: *"gry logiczne wspierające rozwój dziecka – z możliwością ograniczenia czasu gry w aplikacji"*. A time cap, not an off switch |
| Third-party apps (WhatsApp etc.) | yes on Android 8.1 models | **Yes** — app tab *App Store*; garett.com.pl advertises *"WhatsApp i inne aplikacje (możliwość kontroli rodzicielskiej)"* — parental control available |
| Class mode / lesson plan | yes ("Plan de lecții") | scheduling function, not a lockdown |
| GPS positioning | yes | **Yes** — *"Poziționare GPS: opțiune pentru activarea/dezactivarea"* |
| LBS cell-tower positioning | yes | **Yes** — separate on/off toggle |
| Wi-Fi | yes | on Nice Pro and Cute 2 the spec reads *"Wi-Fi: Tak (tylko lokalizacja)"* — positioning only, no data |
| Bluetooth | yes | *"Tak (brak transferu danych)"* — no data transfer, audio pairing only |
| Whole-device lockdown / class mode | — | **Yes, but read the warning.** *"Blocarea dispozitivului: posibilitatea de a restricționa funcționalitățile ceasului la apelurile SOS"*. **Added 2026-08-19:** an owner documents that this blocks the *parent* too — *"jeśli ustawimy dziecku blokadę zegarka np. w czasie lekcji to my również się do dziecka nie dodzwonimy – zegarek odrzuca połączenia od wszystkich (klawisz SOS działa)"*. During lessons you cannot reach your child; only the child's own SOS key works |
| Remote power off / restart / factory reset | — | Yes, all three from the app |
| Account deletion | — | Yes — *"Ștergere cont: Trimiteți o solicitare de ștergere a contului de pe serverul aplicației. Contul ar trebui să fie șters în decurs de o oră."* |

`extras_disableable: partial` — the keypad, apps, GPS, LBS and the whole device can be locked down; the camera, games and remote-listen feature have no documented off switch.

## Security & privacy

**~~Where the data goes: EU, on paper.~~ CORRECTED 2026-08-19 — see "Scrutiny pass" §1, which supersedes this paragraph.** Garett's own manual instructs owners to verify that the watch's server field reads exactly `ip_url:52.28.132.157; port:8001;`. That address does resolve to **Amazon Technologies Inc. (ARIN handle AT-88-Z, AS16509), Frankfurt am Main** — AWS `eu-central-1`, re-verified 2026-08-19. **But it is not Garett's server.** It is **SeTracker's published Europe/Africa node**, the same address given to every brand on that platform, and the platform documents the *same endpoint* by hostname as `agpse.3g-elec.com` — which resolves to Alibaba Cloud in Hong Kong, with the parent domain `3g-elec.com` on Alibaba Cloud in Hangzhou. The question "who operates that server" is now answered: **YQT / 3G Electronics of Shenzhen**, per the DEF CON 34 research that names Garett Kids directly.

**The privacy documentation is the real problem.** The privacy policy that **Garett Tracker declares on Google Play is `garett.com.pl/polityka-prywatnosci/` — Garett's generic e-commerce privacy policy.** It is a standard GDPR/RODO shop notice covering order processing, names, addresses and tax identifiers. It says nothing about children's location data, nothing about retention of location history, nothing about audio recordings, and names no processor. For an app whose entire function is continuous location tracking of a child, that is a material GDPR documentation failure.

By contrast the **newer `com.garett.ekids` app has a dedicated policy** at `garett.com.pl/garett-ekids-polityka-prywatnosci/`, which does the job properly: it names GARETT Sp. z o.o. (Sandomierska 209, Kielce) as controller, names a **Data Protection Officer (Grzegorz Kamiński)**, states the GDPR legal bases (Art. 6(1)(a) and Art. 9(2)(a)), explicitly classes *"lokalizacja w przypadku używania funkcji GPS"* as processed data, states transport is HTTPS, and — most usefully — **names the cloud provider and the data-processing agreement**: *"Z deweloperem świadczącym usługi chmury, którym jest OPTICOM.SOLUTIONS MACIEJ KRAWCZYK, ul. Sowia 7B, 25-658 Kielce"* — a Polish hosting company in Garett's own city, under a written processing agreement, with the app developed by "MAMF".

**The Play Store Data Safety declaration for Garett Tracker does not list Location at all.** Fetched 2026-08-19: the declared categories are device/other identifiers, crash logs, photos and videos, personal info (name, e-mail, user IDs, phone number), audio recordings, and contacts. Data is declared encrypted in transit and deletable on request, and declared not shared with third parties. **Location is absent from a child-location-tracking app's own data-safety form.** Either the declaration is incomplete or it is wrong; either way it should not be relied on.

**Covert remote listening: present, marketed, and with no documented lock.** Both the Polish spec table (`Zdalny podsłuch`) and the Romanian retail copy (*"ascultare de la distanta"*) advertise it. The Romanian manual describes the mechanism: *"Monitorizare vocală: monitorizare vocală de la distanță. Introduceți un număr de telefon pentru a activa funcția. Ceasul va apela automat…"* — "Voice monitoring: remote voice monitoring. Enter a phone number to activate the function. The watch will call automatically…". The watch silently places a call to the configured number. The only documented control is which number is configured; there is no documented way to disable the capability, and no documented indication to the child that it is active.

**A default password published in the manual.** The Twin 2 and Essa manuals both instruct owners to configure the watch by SMS using the factory password `123456`, with `523681` as the fallback if that fails:

```
pw,123456,ts#          -> returns software version, device ID, IMEI, server IP
pw,123456,apn,...#     -> rewrites the APN
pw,123456,reset#       -> reboots the device
```

The `ts` command returns the **IMEI and the server address** to whoever sent the SMS. Anyone who knows the watch's phone number and has not been locked out by a changed password can enumerate the device and, with the APN and server commands, redirect its configuration. The credential is not merely weak — it is printed in a publicly downloadable manual, in every language, for every model in the line. **Change it on day one.**

**~~Platform vulnerability research: UNKNOWN.~~ CLOSED 2026-08-19 — see "Scrutiny pass" §1.** Research now exists and it names this brand. **Garett Kids appears on the DEF CON 34 "39 brands, one server" slide** (Solferini & Stykas, 8 Aug 2026), and three CVEs — **CVE-2026-9220 / -9221 / -9222**, CISA advisory VA-26-176-01, vendor Shenzhen i365-Tech — describe hardcoded AES keys, MD5-derived session signatures and hash-only authentication in the sibling `com.tgelec.setracker` app. The CVEs do **not** name `com.tgelec.garetts`, so the read-across is strong inference rather than proof for this SKU. Everything else in this section still stands: a published default SMS password, a mis-scoped privacy policy, and a Play data-safety form that omits location.

**One further contradiction, found 2026-08-19:** the two stores' privacy declarations disagree. Google Play's Data Safety form for Garett Tracker **omits Location entirely**. Apple's App Privacy label for the same app **does** declare "Precise Location" and "Email Address", both marked *not linked to your identity*. A child-location app that declares location on one store and not the other has one incorrect declaration; neither should be relied on.

## Reality check

- **"2G/3G/4G LTE"** does not conceal a dead radio here — the watch genuinely carries GSM 900/1800 and LTE 800/900/1800/2100/2600. What it conceals is that **nobody has verified whether voice rides VoLTE or drops to 2G in Romania**, and that the answer only matters until Orange or Digi switch 2G off.
- **"Up to 3 days battery"** on the eMAG listing means 6 days sitting on a shelf. Garett's own datasheet says **one day** of typical use. The nearest real measurement in the line — the 710 mAh Essa at 10-minute intervals with one daily video call — was **28 hours**, and the reviewer's advice was to charge every night.
- **"GPS location / geofencing"** means GPS outdoors and cell-tower guessing indoors, which the manual states outright. Two independent reports, one Romanian and one Polish, both describe the indoor result as the wrong address or a 100 m error.
- **"GARETT sells first-party into Romania"** is true for the Twin 2 (black and pink) and Kids Tech — and **not** for the rest of the range as of 2026-08-19, where Essa, Cute 2, Sun Ultra, Vibe AI and Essa 2 are all third-party marketplace sellers at substantially higher prices. Also, the Nice Pro listing sold *by GARETT* is a damaged unit: *"Ceasul prezinta defecte sub forma de zgarieturi minore pe sticla. Cutia este incompleta."* — "The watch has defects in the form of minor scratches on the glass. The box is incomplete."
- **"Polish retail is 40–55% cheaper"** was true when the brief was written and is largely **no longer true**. Using the NBP mid rates of 2026-08-18 (1 EUR = 4.3189 PLN; 1 RON = 0.8236 PLN):

| Model | garett.com.pl | eMAG.ro (cheapest) | RO premium | eMAG seller |
|---|---|---|---|---|
| **Twin 2 4G** | 339 zł / €78.49 **(RRP — nobody pays it; street is 279.99 zł / €64.83)** | 423.75 RON / €80.81 | **+3% vs RRP, but +25% vs street** | **GARETT** |
| **Essa 4G** | 479 zł / €110.91 | 575.51 RON / €109.75 | **−1%** | OVOLT România |
| Nice Pro 4G | 299 zł / €69.23 *(out of stock)* | 373.75 RON / €71.27 *(damaged unit)* | +3% | **GARETT** |
| Vibe AI 4G | 579 zł / €134.06 | 757.97 RON / €144.54 | +8% | Super Merchant (3.3★) |
| Essa 2 AI 4G | 599 zł / €138.69 | 833.18 RON / €158.88 | +15% | OVOLT România |
| Kids Tech 4G | 249 zł / €57.65 | 373.75 RON / €71.27 | **+24%** | **GARETT** |
| Cute 2 4G | 329 zł / €76.17 | 552.90 RON / €105.43 | **+38%** | mindNS |
| Sun Ultra 4G | 249 zł / €57.65 *(out of stock)* | 620.21 RON / €118.28 | **+105%** | CUDOWNE ZAKUPY (PL) |

  ~~For the two primary models the Romanian price is now within ±3% of Polish retail, so importing buys nothing.~~ **CORRECTED 2026-08-19 — see §"Price" below: this row compared against Garett's list price, not Polish street. The real Romanian premium on the Twin 2 is +25% over street and +40% over the cheapest Polish offer.** What the premium buys is a 24-month manufacturer warranty inside a Romanian consumer-law relationship, which the reliability evidence suggests you may need. The big gaps survive only where a third-party reseller sits in the middle — Kids Tech, Cute 2 and above all Sun Ultra, which costs twice as much in Romania as it does at the factory shop. Note that Sun Ultra and Nice Pro are **out of stock at Garett's own shop**, which reads as end-of-life.

## What users say

**Works:**

- **Romania, eMAG, 20 Feb 2026, 5★, Anca Gherasim** (Twin 2 4G black, verified eMAG buyer): *"Mult superior fata de ce am achiziționat pana acum cam la acelasi pret"* — "Much better than what I've bought so far at roughly the same price." <https://www.emag.ro/ceas-smartwatch-pentru-copii-garett-twin-2-gps-8gb-negru-1-8-twin-2-4g-blk/pd/D0SCRQYBM/>
- **Romania, eMAG, 13 Jul 2025, 4★, Adi** (Nice Pro 4G): *"Merita. Raport pret calitate acceptabil."* — "Worth it. Acceptable price-quality ratio." <https://www.emag.ro/ceas-inteligent-garett-kids-n-ce-pro-4g-roz-5904238484913/pd/D5WKCYYBM/>
- **Poland, garett.com.pl, 11 May 2026, 5★, Patryk** (Twin 2 4G black, verified purchase): *"Zegarki dobrze wykonane, dzieci zadowolone."* — "Well-made watches, the children are happy."
- **Poland, garett.com.pl, 24 Mar 2026, 5★, Iwona** (Sun Ultra 4G): *"To już czwarty zegarek tej firmy w mojej rodzinie i każdy jest zadowolony."* — "This is already the fourth watch from this company in my family and everyone is satisfied." *(Repeat-purchase signal, on the vendor's own moderated shop.)*
- **Poland, garett.com.pl, 6 Feb 2026, 5★, Dagmara** (Sun Ultra 4G): *"bateria wytrzymuje nawet dłużej niż się spodziewałam"* — "the battery lasts even longer than I expected." No figure given.

**Fails:**

- **Romania, Google Play, 26 Jun 2025, 1★, Daniel Condurache** (Garett Tracker) — the single most substantive Romanian report in the corpus: *"O aplicație care funtioneaza foarte slab. Precizia in aer liber (afara) este jalnică. Sunt cu copilul afara și imi arată ca este la cel puțin 100 m. Nu se poate asa ceva. Am dat banii degeaba pe acest ceas. Nu afiseasa nici notificările pe el. Harta nici nu este actualizata 2025. Eram intr-un cartier nou și nu îmi afisa harta, doar un punct. Bateria tine maxim doua zile."* — "An app that works very poorly. The accuracy outdoors is pitiful. I'm outside with my child and it shows me he's at least 100 m away. This can't be. I wasted my money on this watch. It doesn't show notifications either. The map isn't even updated for 2025. I was in a new neighbourhood and it didn't show me the map, just a dot. The battery lasts a maximum of two days." Garett replied on 18 Jul 2025 — **in Polish**.
- **Romania, Google Play, 25 Apr 2025, 1★, Oana** (Garett Tracker): *"care ar fi motivele pentru care la mine nu se conecteaza aplicația?"* — "what could be the reasons the app doesn't connect for me?" Garett replied on 30 Apr 2025 — **in Polish**.
- **Poland, garett.com.pl, 25 Feb 2026, 4★, Marta** (Sun Ultra 4G, verified purchase): *"Mieliśmy jednak nie mały problem żeby ogarnąć już samą aplikację i kwestię lokalizacji. Ale dało radę (dlatego 4 a nie 5 gwiazdek)"* — "We had quite a problem getting to grips with the app itself and the location question. But we managed (that's why 4 and not 5 stars)."
- **Poland, GuideLee.pl, 12 May 2025** (Essa 4G, independent review): ~28 h runtime at 10-minute tracking, *"trzeba być przygotowanym na ładowanie zegarka co noc"* — "you have to be prepared to charge the watch every night"; indoors *"aplikacja wyświetlała inny adres (poprawna ulica, ale zły numer budynku)"*; poor Polish localisation with untranslated strings; and during remote listening *"Dźwięk miał tendencję do zacinania się w niektórych miejscach"* — "the sound tended to stutter in places."
- **Aggregate, Romanian storefront, 2026-08-19:** Garett Tracker **2,6★ across 3,63 K ratings**. Both of its Romanian-language reviews are 1★.

**How many independent reports back each point:**

**Revised 2026-08-19 after the scrutiny pass.**

| Claim | Independent reports |
|---|---|
| Position is wrong — by 100 m, a building number, a neighbouring town, 200 km, or "China" | **9+** (RO 2025-06-26; PL 2025-05-12; PL iOS 2025-06-06; PL iOS 2025-07-15; PL 2025-12-07; PL iOS 2025-12-19; CZ iOS 2026-03-09; PL 2026-06-28; PL 2026-07-24 — plus 2 SOS-in-China reports) |
| Geofence fires late, fails to fire, or fires falsely many times a day | **5** (PL iOS 2024-01-15; PL 2025-07-22; PL 2025-08-07; PL 2025-09-04; PL iOS 2025-09-23) |
| Real runtime is ~1–2 days, not 3–4 | **4** (Garett's spec table; the SeTracker platform manual; PL 2025-05-12 measured 28 h on the Essa; PL 2025-02-27 "charge it daily") |
| Registration or login is blocked / the app locks you out | **6+** (RO 2025-04-25; PL 2026-02-25; PL 2023-10-04; PL 2026-04-13; PL 2026-04-20; PL 2026-05-12 — 187 of 972 Play reviews touch this) |
| Build quality and value are good | **6** (RO ×2, PL ×4, incl. 2 verified-purchase Media Expert reviews) |
| Hardware failed / needed warranty replacement | **3** (PL Essa 4G ×3 units 2024-11→2025-02; PL Cute 2 4G; PL Twin 4G "nothing worked") |
| **Voice calls work on a Romanian network** | **0 — untested, unverified after two dedicated searches** |
| **Registration succeeds with a Romanian account** | **0 — but registration is e-mail-based with no country gate, so no country-specific barrier exists to find** |

Note the review-farming caution from OPTIONS.md applies to the Polish column: garett.com.pl reviews are moderated by the vendor, restricted to verified purchasers, and heavily weighted to one-line 5★ entries ("Polecam", "Super", "Ok"). The four substantive comments above were weighted; the one-liners were not.

## Scrutiny pass (2026-08-19)

A second, adversarial pass. **Three of the doc's load-bearing claims did not survive it**: the EU-hosting differentiator, the app rating, and the price advantage. One claim was confirmed and strengthened (the 1-minute interval). One risk was *reduced* (Romanian registration). Everything below is dated and sourced; where a search returned nothing, the queries are listed so the negative is auditable.

### 1. The `data_region: EU` contradiction — RESOLVED, AND THE DOC WAS WRONG

**Correction. `data_region` changed from `EU` to `EU-edge-CN-platform`.** The doc inferred "EU-hosted" from the fact that the manual's server address resolves to AWS Frankfurt. That inference does not hold.

**The Frankfurt IP is not Garett's. It is SeTracker's shared Europe/Africa node.** Garett's manual tells owners to set `ip_url:52.28.132.157; port:8001;`. That is the *platform's* standard regional endpoint, published for every SeTracker-family watch regardless of brand. The full published set (smartwatchphone.fr SeTracker server-by-region page, accessed 2026-08-19; ownership from ipinfo.io the same day):

| Region | Server | Owner |
|---|---|---|
| **Europe & Africa** | **52.28.132.157:8001** | AWS `eu-central-1`, Frankfurt, DE |
| Asia & Pacific | 54.169.10.136:8001 | AWS `ap-southeast-1`, Singapore |
| North America | 54.153.6.9:8001 | AWS `us-west-1`, San Jose |
| South America | 54.207.93.14:8001 | AWS `sa-east-1`, São Paulo |
| Hong Kong (legacy) | 47.91.138.192 | **Alibaba (US) Technology Co., Ltd., Hong Kong** |

So Garett has not built an EU instance; it has pointed its watches at the region-appropriate edge of a Shenzhen platform. Every other brand on that platform sold in Europe uses the identical address. The Frankfurt endpoint is real, and it does mean the location beacon terminates inside the EU — but it is a *platform edge shared with dozens of brands*, not evidence of an EU-resident service, and it says nothing about where the account, media and history data live.

**The other host, which the doc never looked for, is in China.** The platform documents its server not only as a numeric IP but as a **hostname**, and the SMS provisioning commands published for these watches offer the two interchangeably — `pw,123456,ip,agpse.3g-elec.com,8001#` **or** `pw,123456,ip,52.28.132.157,8001#`. That hostname belongs to **3G Electronics Co., Ltd.** — the same entity DEF CON named as *"YQT, also trading as 3G Electronics"*. Resolved 2026-08-19 via 8.8.8.8:

| Host | Resolves to | Owner |
|---|---|---|
| **`agpse.3g-elec.com`** (the platform's AGPS / server hostname) | **47.91.138.192** | **Alibaba (US) Technology Co., Ltd. — Hong Kong (AS45102)** |
| **`3g-elec.com`** | **114.55.99.221** | **Hangzhou Alibaba Advertising Co., Ltd. — Hangzhou, Zhejiang, CN (AS37963)** |
| `www.3g-elec.com` | 101.37.69.103 | Alibaba, CN |

**This is the resolution of the doc's contradiction.** Garett hard-codes the European *numeric* address in its manual, which does pin the location beacon to Frankfurt. But the platform's own domain — its AGPS assistance host and its corporate host — sits on **Alibaba Cloud in Hong Kong and mainland China**, which is exactly what the DEF CON slides say. An EU-looking endpoint and a Chinese backend are not alternatives here; they coexist. Note also that `agpse.3g-elec.com` resolves to the *same IP as the platform's Hong Kong node*, so a watch provisioned by hostname rather than by the European numeric IP is talking to Hong Kong.

**One thing Garett does get right, and it should be said.** A neighbouring pass on the Carneo Guard (same platform, `com.tgelec.carneoguard`) found that brand's "Frankfurt" claim reconcilable with Alibaba Cloud's own Frankfurt region. **That reconciliation does not apply to Garett.** `52.28.132.157` was independently verified this pass as genuinely Amazon: reverse DNS `ec2-52-28-132-157.eu-central-1.compute.amazonaws.com`; RIPE/ARIN `OrgName: Amazon Technologies Inc.`, `NetName: AT-88-Z`, `AS16509`. Alibaba Cloud's Frankfurt ranges sit in `AS45102`/`AS37963` and look nothing like it. **Garett's tracker endpoint is real AWS in the EU.** What it is not is *Garett's*, or the only host in the picture.

**Not established, and recorded as open:** which map/geocoding provider the Garett build uses. The Carneo pass found AutoNavi (Alibaba's Amap) named in that brand's privacy policy, and two Carneo owners reported that switching an in-app AGPS server away from an "Asian" default improved location dramatically. **No equivalent AGPS-server selector, and no map-provider name, was found in Garett's app, manual, support FAQ or privacy policy.** The platform-level documentation does say the map provider "typically depends on the selected region when registering your account", which implies Garett's European registration should get a Western map — but that is inference, not verification. The one suggestive symptom is Romanian: Daniel Condurache's *"Harta nici nu este actualizata 2025. Eram intr-un cartier nou și nu îmi afisa harta, doar un punct"* — "The map isn't even updated for 2025. I was in a new neighbourhood and it didn't show me the map, just a dot" — which is what a map with thin non-Chinese coverage looks like. **Suggestive, not proof. Treat the map provider as UNKNOWN and worth one minute of checking in the app before purchase.**

**Garett Kids is named in the DEF CON 34 / Black Hat 2026 research.** Felipe Solferini and Vangelis Stykas, *"Tracking the Trackers: How We Took Over 36 Million GPS Devices Protecting Children and Vehicles"*, Black Hat 7 Aug 2026 / DEF CON 34 on 8 Aug 2026. Notebookcheck's report of 14 Aug 2026 describes the relevant slide:

> "One slide is headed \"39 brands, one server\" and names them: Wonlex, SaveFamily, KidiWatch, **Garett Kids**, Carneo Guard, Osmile, Kuus, Beafon and more."
> — <https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html>, 2026-08-14

And on where the data actually sits:

> "Behind SETracker, according to the slides, stands a company called YQT, also trading as 3G Electronics. **The data sits on Alibaba Cloud in China.** 46 apps, 39 brand names, more than twenty countries, aimed at children aged three to twelve."

The same article names the package prefix as the public proof, and names Garett's package specifically:

> "Every Android app carries a technical package name that shows up in the Play Store address bar. **For the Garett watch it reads com.tgelec.garetts**, for KidiWatch com.tgelec.kidiwatch."

The researchers' summary of what brand choice buys you: *"Moving from Wonlex to SaveFamily, the researchers write, is a sticker change."*

**What the researchers demonstrated:** read and spoof location, intercept text and voice messages, listen in silently, and trigger the camera — with nothing shown on the watch. Notebookcheck: *"Nothing of it showed on the watch."* Their device-count estimate is 36 million (one of their own slides says 26 million); Notebookcheck flags this as the researchers' own estimate, not independently verified, and notes that the 45 reported vulnerabilities have not been published as a list.

**Vendor response:** SETracker/Wonlex published a blog post on 10 Aug 2026 describing three points as fixed, found during an *"internal security audit"*, without naming the researchers, Black Hat or DEF CON. **No Garett response of any kind was found** — see the audited-negative list at the end of this section.

**The doc's "Platform vulnerability research: UNKNOWN" is now partly closed.** CVEs exist against this platform family. CISA advisory **VA-26-176-01** (published 25 Jun 2026, updated 3 Aug 2026; reported by Huancheng Hu, Hasso Plattner Institute, with Prof. Christian Doerr), vendor **Shenzhen i365-Tech Co. Ltd.**, product **`com.tgelec.setracker`** — the same `com.tgelec.*` lineage as `com.tgelec.garetts`:

- **CVE-2026-9220** (CVSS 4.0: 8.7 High) — *"Setracker2 Android Companion App com.tgelec.setracker versions 3.1.5 and prior encrypts requests between the watch and its backend with static hardcoded AES keys and initialization vectors. This allows an attacker to decrypt Setracker2 watch traffic."* Fixed in 3.4.1.
- **CVE-2026-9221** — MD5 used to generate the request signature; the signature can be reversed to recover the session ID, allowing impersonation of a legitimate user.
- **CVE-2026-9222** — the client authenticates to the backend with **only the password hash**, so anyone who knows the hash gets full access.

CISA's own advisory metadata records **"Company headquarters location: China"** and **"Countries/areas deployed: Worldwide"**.

**Important scope caveat, stated plainly:** these CVEs name `com.tgelec.setracker`, **not** `com.tgelec.garetts`. Garett's app is a sibling white-label in the same package namespace, not the named artefact, and its version numbering is independent. The Notebookcheck/DEF CON brand-list evidence is what ties Garett to the platform; the CVEs describe how that platform was broken. Treat the read-across as **strong inference, not proof for this SKU**.

**Community corroboration that Garett shares an account backend with other brands.** Two independent owner reports, both surfaced in this pass:

> **Marcin W., Google Play (Garett Tracker), 29 Mar 2024, 1★, 52 thumbs (v1.2.7):** *"Uzywacie tego samego serwera logowania co Forever! Kupiłem nowy zegarek Forever, zainstalowałem apke, ustawiłem nowe hasło i automatycznie zmienilo też hasło w apce garetta… Wpisanie złego hasła na jednym blokuję oba… Będę wysyłał zgłoszenie do GIODO."*
> — "You use the same login server as Forever! I bought a new Forever watch, installed the app, set a new password, and **it automatically changed the password in the Garett app too**… A wrong password on one locks out both… I will file a complaint with [the Polish DPA]."

> **Marcin Albo, Google Play, 12 May 2026, 2★, 3 thumbs (v1.4.0):** *"…najgorsze jest to, że czasami widzę w aplikacji lokalizację jakiegoś chińskiego dziecka - to wygląda na poważny błąd zabezpieczeń"*
> — "…the worst thing is that **sometimes I see the location of some Chinese child in the app** — this looks like a serious security bug."

A single credential namespace spanning Garett and Forever, and an owner seeing another family's child on his map, are precisely the symptoms the researchers describe.

**A regulatory point the doc missed entirely.** Germany has banned children's watches with a listening function since 2017 — Bundesnetzagentur guidance (dated July 2024) classes them as prohibited telecommunications equipment under §8(1) TDDDG; manufacture or placing on the market is a criminal offence carrying up to two years, and the agency works by ordering destruction of the device. Garett's own spec table markets **`Zdalny podsłuch`** and the eMAG.ro copy markets *"ascultare de la distanta"*. Garett's support FAQ confirms the control exists and is silent to the child:

> *"Jak włączyć nasłuch otoczenia? Wybierz w aplikacji „Nasłuch otoczenia" a następnie „Monitoring głosu", wpisz swój numer i zatwierdź. **Telefon zadzwoni na zegarek w trybie cichym.**"*
> — "How do I enable ambient listening? Select 'Ambient listening' then 'Voice monitoring' in the app, enter your number and confirm. **The phone will call the watch in silent mode.**"
> <https://garett.com.pl/pomoc-techniczna-smartwatche-dla-dzieci/>, accessed 2026-08-19

Romania is not Germany and this is **not** a Romanian legal bar. But a device whose marketed feature set is illegal to place on the market in a neighbouring EU member state is a material fact about the product, and it reinforces `extras_disableable: partial`. Notebookcheck also notes that since 1 Aug 2025 privacy-by-design has been a market-access requirement under **RED Article 3(3)(e)**, and that *"Not a single case is on record where a watch was pulled from the market on those grounds."*

### 2. Battery — the claim structure explained (see also §2a, which supersedes the first paragraph)

**Superseded in part: deeper mining later in this same pass produced five dated Twin 2 observations, and `battery_observed_h` is now populated at 48. See §2a.** What remains true is that **no observation states the tracking interval**, so runtime at the 1-minute setting is still unmeasured.

What *did* close is the question of why the vendor and the retailer disagree. **The SeTracker platform's own manual publishes runtime per mode, and Garett's spec table is simply the platform's Follow-mode figure:**

| Mode | Interval | Platform's stated runtime |
|---|---|---|
| Normal (platform-recommended) | every 10 minutes | *"The clock battery time is approx. 1-1½ day."* |
| Saving | every hour | *"approx. 3-5 days."* |
| **Follow / tracking** | **every minute** | ***"approx. ½-1 day."*** |

— SeTracker2 user manual, <https://setracker.eu/how-to-use-setracker>, accessed 2026-08-19.

So Garett's `Typowy czas pracy baterii: Do 1 dnia` is the **Follow-mode** number, and eMAG's "up to 3 days" is roughly the **Saving-mode** number. Both are true of different settings. **This dissolves the doc's "the manufacturer contradicts its own retailer listing" finding: it is a mode conflation, not a contradiction.** The doc should not keep asserting a conflict that does not exist — though the retailer is still quoting the mode nobody uses for a school run, which is the substantive criticism and it stands.

**Garett's own support FAQ gives a third figure**, a range rather than a point:

> *"Jak długo wytrzymuje bateria w zegarku Garett Kids? W zależności od modelu i sposobu użytkowania – **zazwyczaj od 1 do 3 dni**."*
> — "How long does the battery last in a Garett Kids watch? Depending on model and usage — **typically 1 to 3 days**."

**New line-indicative observation, Essa 4G, Poland, dated.** elektroda.pl thread *"Garett Kids Essa 4G - brak reakcji na ładowanie w nocy, działa w dzień"*:

> **bithshopping, 27 Feb 2025:** *"…dajemy na ładowanie wieczorem (**trzeba ładować codziennie, tak btw**) i niby ładuje do 100%…"*
> — "…we put it on charge in the evening (**you have to charge it daily, by the way**) and it supposedly charges to 100%…"
> <https://www.elektroda.pl/rtvforum/topic4100873.html>

That is the **third** independent "charge it every night" datapoint (GuideLee.pl measured ~28 h on the Essa, 12 May 2025; Garett's own spec table; now this).

**Against the buyer's floor — a 9.5 h school day with tracking active.** Taking the platform's own Follow-mode figure of ½–1 day, a 1-minute interval yields **roughly 12–24 h from a full charge**. A 9.5 h school day therefore fits, but the bottom of that range leaves almost no margin and nothing for the evening. At the 10-minute Normal interval (1–1.5 days) a school day is comfortable. **Practical reading, now better grounded: the watch clears the 9.5 h floor at 1-minute tracking, but only just, and only if it starts the day at 100%. It does not disqualify the watch outright.** This is a generic platform figure, not a Twin 2 measurement on a 900 mAh cell driving a 1.83" screen, two cameras and video calling, and is therefore **unverified for this model**.

Retailer marketing continues to conflate standby with runtime: RTV Euro AGD's Twin 2 spec table reads **`Wytrzymałość baterii: do 6 dni`** ("battery endurance: up to 6 days") — the *standby* number presented as endurance.

### 3. The 1-minute tracking interval — CONFIRMED, and its cost is now quantified

**`update_interval_min: 1` stands, and is corroborated from a second, independent source.** The doc had it only from Garett's Romanian manual. The SeTracker platform manual independently documents *"Follow mode: Updating GPS location takes place every minute"* for the whole platform family, with the ½–1 day runtime attached (table above).

The claim is real, and it is the best automatic interval in this field. Two qualifications belong on it:

1. **It is a platform default, not a Garett engineering achievement.** Every SeTracker-family watch has it. It is not a differentiator against the other TGELEC-based watches in this project — it is a differentiator only against watches on other platforms.
2. **The tension the brief identified is real and the vendor concedes it.** Garett's Romanian manual already says tracking mode *"reduce timpul de funcționare al ceasului"*; the platform quantifies that as roughly halving runtime versus Normal mode. **Nobody in the corpus reports actually running a Twin 2 at 1-minute intervals for a full day**, so the combination of 1-minute polling *and* usable battery life remains unobserved.

A third qualification, from §4 below: a 1-minute nominal interval is worth little when owners report the displayed position being hours or days stale, or wrong by 200 km. **Interval is not the binding constraint on this watch; fix quality and freshness are.**

### 4. The companion app — the doc's 2.6★ figure is an artefact, and the truth is worse

**Correction to the doc.** The "2,6★ / 3,63 K recenzii" reading was taken from the Romanian storefront. Google serves differentially-privatised, locale-specific averages over one global rating count, and the Romanian histogram is visibly quantised (three of five buckets read zero). The credible figures, fetched 2026-08-19:

| Store / locale | Average | Ratings | 1★ share |
|---|---|---|---|
| Google Play, `hl=pl&gl=PL` | **2.33** | 3,634 (global count) | **52%** (1,900) |
| Google Play, `hl=en&gl=GB` | 2.28 | — | — |
| Google Play, `hl=ro&gl=RO` | 2.60 *(quantised — do not use)* | — | — |
| **Apple App Store, Poland** | **1.70** | **441** | **70.7%** (312 of 441) |
| Apple App Store, Romania | **— none —** | **0** | 0 reviews, 0 ratings |
| Apple App Store, CZ / HU / DE | 1.83 / 1.73 / 1.71 | 12 / 11 / 7 | — |

Of 972 Play reviews carrying text, the mean is **1.68** and **68.7% are one-star**. The gap between 1.68 (text) and 2.33 (all ratings) means the ~791 five-star Polish ratings are overwhelmingly textless taps.

**It was not a bad update.** Monthly means of text reviews have sat between 1.29 and 2.14 continuously since 2023. By Android version: 1.2.6 → 1.58, 1.2.9 → 1.83, 1.3.7 → 1.85, **1.4.1 (the 16 Jun 2026 build) → 1.69**. The June 2026 update neither caused nor fixed anything. **This is a multi-year floor (flat since 2023), not a regression** — which is worse news than a broken update, because it means there is no fix coming.

**iOS is materially worse and materially staler.** iOS 1.6.3 shipped 2 Jul 2026 with the release note *"1.Fix some errors"*. There was a **15-month gap between 1.5.8 (Jan 2024) and 1.5.9 (Apr 2025)**. The iOS build carries at least one untranslated/mistranslated string in the registration flow (a user quotes the password requirement rendered as *"8-16 bitów"* — "8–16 bits").

**Stale and wrong locations are the dominant complaint, and the failure is worse than the doc records.** Selected verbatim, all Garett Tracker:

> **oldzowa, iOS PL, 15 Jul 2025, 1★, "Tragedia":** *"Wczoraj potrzebowałam tego zegarka bardzo mocno! Nie wiedziałam gdzie jest moje dziecko… Lokalizacja na zegarku totalnie nie działał. Pokazywała mi że jest w domu i datę 2 dni wcześniej o 4 w nocy."*
> — "Yesterday I needed this watch badly! I didn't know where my child was… The location totally didn't work. **It showed me she was at home, with a timestamp from 2 days earlier at 4 a.m.**"

> **karolina sentyrz, Play, 28 Jun 2026, 1★ (v1.4.1):** *"Często pokazuje mi inne urządzenie. obecnie różnica to ok 200km! Jak ktokolwiek ma znaleźć dziecko skoro błąd lokalizacji to 200 km?"*
> — "It often shows me a different device. Currently the discrepancy is about **200 km**! How is anyone supposed to find a child when the location error is 200 km?"

> **hsawe, iOS CZ, 9 Mar 2026, 1★:** *"Polohu meho mobilu to ukazuje presne, ale polohu meho ditete, to ukazuje velice cast dost nepresne, nekdy je dokonce v Cine. Zkousim support, ale nikdo mi neodpovida."*
> — "It shows my phone's location precisely, but my child's location very often quite inaccurately — **sometimes he's even in China**. I've tried support but nobody replies."

> **Piotr Pokrywa, Play, 7 Dec 2025, 1★, 10 thumbs:** *"…nigdzie się nie przemieszczamy, a aplikacja nagle zwraca mi lokalizację córki w mieście obok… aplikacja nadal pokazuje, że dziecko podróżuje właśnie drogą krajową"*
> — "…we're not moving anywhere, and the app suddenly returns my daughter's location **in the next town**… the app still shows the child travelling on the national road."

> **artkoz8, iOS PL, 6 Jun 2025, 1★:** *"Jeszcze się nie zdążyło żeby Tracker pokazał chociaż przybliżoną lokalizację zegarka. Większość czasu aplikacja pokazuje że zegarek poza siecią."*
> — "It has **never yet** happened that the Tracker showed even an approximate location. Most of the time the app says the watch is out of network."

**Geofence is unreliable in both directions — and the false-positive mode is the dangerous one for this buyer's use case:**

> **EddieCrane, iOS PL, 23 Sep 2025, 1★, "Multiple problems":** "…regularly, many times a day, it shows random locations (often the same ones) that are kilometers away from where the child actually is. Sometimes the children are at home, but the app shows that they just left the previously set 'fence' area. **This ends up with you receiving dozens of notifications a day saying that the child is outside of school, and you stop paying attention to them. And when one day the child really does wander off, you'll assume it's just another app error.**"

> **Arkadiusz Kudela, Play, 4 Sep 2025, 1★:** *"Powiadomienia o opuszczeniu geoogrodzenia - dramat. Dostałem powiadomienie ponad godzinę później niż córka faktycznie opuściła strefę."*
> — "Geofence-exit notifications — a disaster. **I got the notification over an hour after** my daughter actually left the zone."

> **Pneumo Thorax, Play, 22 Jul 2025, 2★:** *"geoogrodzenie nie działa mimo ustawienia granic, zegarek nie wibruje po ich przekroczeniu, a rodzice nie dostają o tym powiadomienia"*
> — "Geofencing doesn't work despite setting boundaries; the watch doesn't vibrate on crossing them and parents get no notification."

That EddieCrane review is the most important single item in this section. A geofence that cries wolf daily is not a degraded safety feature; it is a **negative** one, because it trains the parent to ignore the alert that matters. This is a direct hit on the primary use case — knowing when a 7-year-old leaves the school grounds.

**SOS is reported failing, twice with a location in China:**

> **Monika Mieszczakowska, Play, 14 Jan 2025, 1★, 2 thumbs:** *"Błędnie określa lokalizację SOS. Po wysłaniu przez dziecko powiadomienia SOS, otrzymuję SMS z lokalizacją w Chinach….."*
> — "It gets the SOS location wrong. **After my child sends an SOS alert, I receive an SMS with a location in China.**"

> **Julia Gorelik, Play, 18 Jan 2024, 4★:** "sos location in sms is pointed somewhere in China )"

**A lockout mechanism that is actively dangerous in a safety device:**

> **Rafał Bartosik, Play, 12 May 2026, 1★, 3 thumbs:** *"Źle wpiszesz hasło do aplikacji i masz blokadę na 16 godzin, w razie poszukiwań, niebezpieczeństwa tracisz możliwość namierzenia dziecka."*
> — "Enter the password wrong and **you're locked out for 16 hours** — in a search or an emergency you lose the ability to locate your child."

Lockouts of 4, 5, 7, 8, 14, 15 and 16 hours are reported by different users. Updates are also reported wiping contacts and child profiles (**mac0-**, iOS PL, 12 Jul 2026, 1★: *"Wszystkie kontakty skasowane w czasie aktualizacji"* — "All contacts wiped during the update"). Push notifications for chat, voice messages and video calls are widely reported as not arriving unless the app is open.

**Developer responses:** 434 of 972 Play reviews (44.6%) carry a GARETT reply. Language split: **Polish 375, Czech 34, English 16, Slovak 1, Romanian 0.** There are **zero** developer responses on the Apple App Store. Users describe the replies as templated (Ryszarda Błachut, Play, 18 Mar 2026, 1★: *"Rozwiązanie problemu: 'Dziękujemy za opinie'."* — "The solution to the problem: 'Thank you for your feedback'.").

### 5. Romania — the registration risk is LOWER than the doc assumed

**This is the one place the doc is too pessimistic, and it matters, because it is the buyer's stated worst fear.** The doc's pre-purchase test says *"Register an account with a +40 number before paying… If registration with +40 fails, stop."* **Registration does not take a phone number as the account key, and there is no country selector.** From Garett's own tutorial (Polish subtitle track, *"Konfiguracja oraz sparowanie aplikacji Garett Tracker"*, <https://www.youtube.com/watch?v=BR_0uwxomFg>, retrieved 2026-08-19):

> *"Jeśli korzystasz z aplikacji po raz pierwszy, konieczna będzie rejestracja. Aby się zarejestrować, **wpisz swój adres email**, przepisz kod weryfikacyjny wyświetlony na ekranie, utwórz hasło i zaakceptuj regulamin. Po rejestracji przejdź do sekcji, w której możesz dodać swoje urządzenie… skierujesz go na kod QR przypisany do smartwatcha i zeskanujesz go. Gdy kod zostanie zeskanowany, wpisz nazwę użytkownika oraz numer telefonu…"*
> — "If you are using the app for the first time, registration is required. To register, **enter your e-mail address**, copy the verification code shown on screen, create a password and accept the terms. After registration go to the section where you can add your device… point it at the QR code on the smartwatch and scan it. Once scanned, enter a username and a phone number…"

The phone number is entered only *after* the watch's QR code is scanned, as the admin entry in the watch's phonebook — not as an account identifier and not subject to a country whitelist. Garett's support FAQ agrees, troubleshooting registration purely in terms of e-mail and password. **The Xplora-style failure mode — vendor refuses a country at signup — is structurally absent here.** That is a genuine, material de-risking of the buyer's primary concern, and it is the strongest thing this pass found in the watch's favour.

**But there IS a registration barrier, and it is severe — it is just not country-specific.** 187 of 972 Play reviews concern registration or login. The cause is a password validator that rejects strong passwords:

> **Developer's own reply, Play, 27 Jul 2022 (Polish):** *"Hasło musi składać się z minimum 8 znaków (maksymalnie 16). Hasło może składać się jedynie z cyfr i liter. Polskie znaki (np. ś, ó, ź) oraz znaki specjalne (np. @, _, $) są niedozwolone."*
> — "Password must be 8–16 characters. It may consist **only of digits and letters**. Diacritics and special characters (@, _, $) are not allowed."

Because the error message tells the user their password is *too simple*, it is undiagnosable. Still unfixed four years on:

> **Paulina Dym, Play, 13 Apr 2026, 1★, 6 thumbs (v1.3.7):** *"nie mozna sie zarejestrować. 2 tygodnie walczę i już nie wiem co mam zrobić. nie ma w ogole opcji przejść rejestrację bo hasło jest ciągle niepoprawne mimo ze wszystko wpisywane według wskazówki."*
> — "Can't register. I've been fighting for **2 weeks** and don't know what to do. There's simply no way to get through registration because the password is always invalid even though everything is entered per the instructions."

> **Katarzyna Ka, Play, 20 Apr 2026, 1★:** *"…tym razem zanim dokonałam zakupu zegarka sprawdziłam aplikację - niestety i w tym wypadku aplikacja blokowała możliwość rejestracji konta… Zrezygnowałam z zakupu zegarka."*
> — "…this time I checked the app **before** buying the watch — unfortunately here too the app blocked account registration… **I abandoned the purchase.**"

**Revised pre-purchase test, replacing step 2 of the doc's list:** install Garett Tracker from the Romanian storefront and complete registration before paying — but the test is not "is +40 accepted", it is "**can I create an account at all**". Use an 8–16 character password of **ASCII letters and digits only**, no special characters and no diacritics. This is free and takes five minutes; Katarzyna Ka's review is proof it is worth doing.

A further pairing hazard to test in the same session:

> **Monika Płaskota, Play, 14 May 2026, 1★, 7 thumbs:** *"już jakiś tydzień trwa zatwierdzanie przez administratora zegarka i nie wiem czy kiedykolwiek zostanie dodany do mojego konta."*
> — "**Administrator approval of the watch has been running about a week now** and I don't know if it will ever be added to my account."

**Romanian review volume is smaller than the doc implies, not larger.** Confirmed by querying the Play reviews endpoint with `hl=ro` against `gl=RO`, `MD`, `IT`, `ES` and `DE`: there are exactly **two** Romanian-language reviews in the app's entire history — the same Daniel Condurache (26 Jun 2025) and Oana (25 Apr 2025) reviews the doc already carries, both 1★. Apple's Romanian storefront returns `totalNumberOfRatings: 0`. The Play listing *is* fully localised into Romanian, so this is an install-base fact, not a language-availability artefact. **There is no hidden Romanian evidence pool. A confirmed working +40 registration does not exist in any public source and will have to be produced by the buyer.**

One addition to the Condurache quote the doc truncates — he also reports: *"Pe ceas nu îți afișează pulsul sau câți pași ai făcut."* — "The watch doesn't show your pulse or step count."

### 6. VoLTE — still UNKNOWN, but Garett's own FAQ points at 2G

No owner report of a voice call on a Romanian network was found (queries listed below). **`volte: UNKNOWN` stands.** But one new vendor statement moves the prior. Garett's support FAQ, asked whether the watch works abroad:

> *"Czy zegarek działa za granicą? Tak, o ile karta SIM ma włączony roaming danych i **działa w sieci 2G w danym kraju**. Karta powinna obsługiwać sieć 2G/3G/4G LTE."*
> — "Does the watch work abroad? Yes, **provided the SIM has data roaming enabled and works on the 2G network in that country.**"

Garett itself conditions cross-border operation on **2G availability**, not on LTE or VoLTE. That is the manufacturer treating 2G as the voice-bearing layer. In Romania this still works — Orange and Digi retain 2G — but it converts "VoLTE unverified" into "**the vendor appears to assume 2G**", and it means the day Orange or Digi retire 2G, this watch's voice path is at risk with no vendor commitment behind it. `voice_fallback: 2g-csfb` is, if anything, understated: on this evidence 2G looks like the primary voice path rather than the fallback.

Pair it with Orange or Digi. Do not pair it with an operator that has retired 2G.

### 7. Positioning — vendor claim CONFIRMED at chipset level (extended in §7a, which is the fuller answer)

`positioning: [GPS, AGPS, LBS, WiFi]` is correct, and the absence of GLONASS/Galileo/BeiDou is now confirmed below the level of Garett's marketing. The UNISOC 8521E platform specification published by **Wonlex** — a sibling brand on the same platform using the same SoC — lists GNSS as **GPS L1 only**: *"L1, 1575.42 MHz C/A"*, 22 channels, positioning accuracy *"5～15 meters"*. No GLONASS, BeiDou or Galileo. (<https://www.iwonlex.net/wonlex-4g-kids-watches-work-with-unisoc-8521e/>, accessed 2026-08-19.)

**Single-constellation, single-frequency. This is a confirmed weakness, not merely an unclaimed feature**, and it is the physical reason the watch falls back to LBS indoors and in urban canyons.

A useful owner workaround surfaced, worth passing to the buyer:

> **m…k, Ceneo, **Garett Kids Twin 4G Czarny**, 4/5, verified purchase ("Zaufana Opinia potwierdzona zakupem"), posted after 2 weeks of use:** *"Produkt spełnia swoje zadanie. Ma dużą baterie w porównaniu do innych tego typu produktów. Dla osób którym niedokładnie działa GPS- wyłącznie na kilka dni LBS. Zegarek zamiast szukać po sieciach komórkowych będzie starał się wyszukiwać satelity przez to pomiar będzie coraz dokładniejszy. Gwiazdka minus za słaba aplikacje mobilną, część rzeczy jak czat słabo działa."*
> — "The product does its job. It has a big battery compared to other products of this type. **For people whose GPS is inaccurate — turn LBS off for a few days.** Instead of searching via mobile networks the watch will try to find satellites and the fix will get more accurate. Minus one star for the weak mobile app; some things like chat work poorly."

Both LBS and GPS have independent on/off toggles (already in the doc's feature table), so this is actionable — at the cost of losing indoor position entirely. It also independently corroborates that the LBS fallback is what produces the wrong-address behaviour. **Note this is the Twin 4G, not the Twin 2.**

### 8. Reliability, DOA and warranty — new evidence, and it is mixed

> **bithshopping, elektroda.pl, 27 Feb 2025, Garett Kids Essa 4G:** *"Ten zegarek to jest jakaś porażka... Mam ten sam od listopada. Właśnie dzisiaj dostałem 3 sztukę... [1] Zegarek zakupiony w listopadzie miał tak, że na ręce sam potrafił włączać ekran podczas ruszania… generalnie bateria mocno się rozładowywała, więc poszedł na reklamację. Dali od razu nowy, bo zakup był kilka dni wcześniej. [2] Drugi zegarek… Kiedyś na cały weekend zostawiliśmy podpięty i rano w poniedziałek był całkowicie rozładowany!!! Więc kolejna reklamacja i dzisiaj przyszedł trzecią sztuka. [3] I już przy tej sztuce widzę jaja… nagle zegarek dead… To jest jakiś totalny badziew, czy mi się wydaje? Od listopada do dzisiaj w sumie 3 zegarki mieliśmy nowe, zapakowane i każdy to jakaś porażka."*
> — "This watch is a disaster... I've had it since November. **Today I received the third unit**... [1] The one bought in November would turn its screen on by itself while moving… the battery drained heavily, so it went back under warranty. **They gave a new one immediately.** [2] The second watch… once we left it plugged in all weekend and on Monday morning it was **completely flat**!!! So another warranty claim, and today the third unit arrived. [3] And on this one I already see nonsense… suddenly the watch is dead… Is this total junk or is it just me? From November to today we've had 3 brand-new, boxed watches and every one is a disaster."
> <https://www.elektroda.pl/rtvforum/topic4100873.html>

Three units in three months in one household, all warranty-replaced. **The positive: Garett's Polish warranty process worked and replaced promptly each time** — which is a real argument for buying inside a warranted channel rather than from a marketplace reseller. The negative is what needed replacing. The thread's original poster later reported (7 Oct 2025) that his own unit *"się unormował"* — settled down — and closed the topic.

Also on elektroda.pl: a **Garett Kids Cute 2 4G** that will not power on after a full discharge (topic4124152), and reports that over-current chargers damage the device — the manufacturer specifies charging at 0.15 A while a modern USB charger delivers up to 2 A. **Charge it from a low-current source.**

Ceneo, **Garett Kids Twin 4G**, 1★, verified purchase, posted after a month of use:

> **g…5:** *"Telefon ani żadne jego funkcje nie działały.Miał być prezentem"* — "Neither the phone nor any of its functions worked. It was meant to be a present."

Media Expert, **Twin 2 4G black**, 4/5, verified purchase, 22 Jan 2026, titled *"Pasek od zegarek"* ("The watch strap"):

> **Karolzg:** *"Smartwatch dość prosty w obsłudze, wydaje się w porządku z opisem, poza jednym, pasek po 2 dniach…"* — "Fairly simple to operate, seems to match the description, except for one thing: **the strap after 2 days…**"

Note the RTV Euro AGD spec table lists `Możliwość wymiany paska: nie` — the strap is **not** replaceable.

### 9. Astroturf found — Media Expert's 4.4★ on the Twin 2 does not survive inspection

**Media Expert, Garett Kids Twin 2 4G Czarny** (read in-browser 2026-08-19): headline **4.4/5 from 36 opinii**, but only **7 carry the "Potwierdzony zakup" (verified purchase) badge**. The unverified majority contains a burst of **5★ reviews dated 7, 10, 12, 12, 12, 13, 13 and 23 December 2025** — eight in seventeen days — written in product-copy register (*"oferuje łączność 4G, dwie kamery, lokalizacja…"*, *"łączy nowoczesny wygląd…"*), with two different reviewers ("Paulina" and "Ula", 12–13 Dec) filing the **identical title "Dobry zegarek w dobrej cenie"**. **Discounted.**

The two *verified* reviews are the ones worth keeping, and they are more measured:

> **Piotr, 5/5, verified purchase, 18 June 2026, "Super":** *"Jestem pozytywnie zaskoczony mimo skrajnych opinii. Syn używa zegarek od 2 miesięcy. Sprawuje się su[per]…"* — "I am positively surprised **despite the extreme opinions**. My son has used the watch for 2 months…" — **kept**; this is the only dated verified Twin 2 long-run ownership report found anywhere, and it is positive. It gives no battery figure.

> **Karolzg, 4/5, verified purchase, 22 Jan 2026** — quoted above. **Kept.**

**A second astroturf signature, on a sibling brand, worth recording because it shows the pattern is platform-wide:** `com.tgelec.carneoguard` (Carneo Guard, CZ/SK) shows **1,106 ratings, 100% five-star, zero ratings in any other bucket, and zero written reviews** — against SeTracker's own unbranded app at 2.82★ with 41% one-star and Garett's at 2.33★. Carneo's figure is not a usable benchmark for anything.

**Garett's own moderated shop reviews remain the weakest source in the corpus** and the doc's existing caution about them stands. Two of the Polish "review" sites returned by search for this product — `drbresearch.pl` and `mobilemania.pl` — are SEO content farms whose text paraphrases vendor copy and cites no testing; **discounted, not used**.

**Retailer spec tables are unreliable here.** RTV Euro AGD's Twin 2 table claims `Ekran dotykowy: nie` (no touchscreen), `Żyroskop: nie` and `Akcelerometr: nie` for a watch Garett markets with a touchscreen, gyroscope-based games and a pedometer. Do not treat retailer spec tables in this category as evidence.

### 10. Model contamination — what belongs to what

Every piece of evidence in this document, labelled by the model it is actually about:

| Evidence | Actual model | Must not be read as |
|---|---|---|
| GuideLee.pl ~28 h @ 10-min interval, 12 May 2025 | **Essa 4G** (710 mAh) | a Twin 2 measurement |
| "trzeba ładować codziennie", 27 Feb 2025 | **Essa 4G** | " |
| Three warranty replacements, Nov 2024 – Feb 2025 | **Essa 4G** | " |
| "Neither the phone nor any of its functions worked" | **Twin 4G** (first-gen Twin) | Twin 2 |
| "turn LBS off for a few days" GPS workaround | **Twin 4G** | Twin 2 |
| Ceneo 4.0★ / 6 opinii | **Twin 4G** | Twin 2 (which has **zero** Ceneo opinions) |
| spyshop.pl "30 s after dialling it discreetly records ambient sound", 800 mAh | **Twin** (first-gen) | Twin 2 (900 mAh) |
| Won't power on after full discharge | **Cute 2 4G** | Twin 2 |
| Daniel Condurache 100 m error + "max two days", 26 Jun 2025 | **unspecified Garett** (app review) | any named model |
| Media Expert 4.4★/36; verified Piotr + Karolzg | **Twin 2 4G black** ✔ | — |
| RTV Euro AGD 3.5★ / 6 opinii | **Twin 2 4G black** ✔ | — |
| eMAG 5★ Anca Gherasim, 20 Feb 2026 | **Twin 2 4G black** ✔ | — |
| All 972 + 165 Garett Tracker app reviews | **the app**, across all models | Twin 2 hardware |

**Ceneo, the source the brief expected to be richest, is empty for this model.** The Twin 2 4G Czarny page (<https://www.ceneo.pl/170956006>) shows no rating block and only a "Napisz opinię" prompt — **zero opinions**, verified in-browser 2026-08-19. The 6 opinions Ceneo does carry sit on the **Twin 4G** page (<https://www.ceneo.pl/135534869>, 4.0★; 5★ 66% / 4★ 17% / 3★ 0% / 2★ 0% / **1★ 17%**), and Ceneo cross-sells Twin 2 offers directly underneath them — precisely the mechanism that would contaminate a careless pass. **The "rich untapped Polish review pool" premise turned out to be largely false for the Twin 2 specifically.** Total genuine Twin 2 owner reviews located across all of Polish and Romanian retail: **Media Expert 7 verified, RTV Euro AGD 6, eMAG 1, Ceneo 0.**

### 11. Price — the doc's "+3% Romanian premium" is wrong

The doc compared eMAG.ro against **garett.com.pl RRP (339 zł)**. Nobody in Poland pays that. Street prices, all checked 2026-08-19:

| Source | Price | EUR (NBP 2026-08-18) |
|---|---|---|
| Ceneo lowest offer (Allegro) | 248,99 zł | €57.65 |
| Media Expert / RTV Euro AGD (with code) | **279,99 zł** | **€64.83** |
| RTV Euro AGD list | 319 zł | €73.86 |
| garett.com.pl (vendor RRP) | 339 zł | €78.49 |
| **eMAG.ro (GARETT, first-party)** | **423,75 RON** | **€80.81** |

The Romanian price is **+25% over Polish street** and **+40% over the cheapest Polish offer** — not +3%. `price_eur` updated from 78.49 to 64.83 accordingly. The doc's conclusion that "importing buys nothing" holds only against the manufacturer's own RRP, not against real Polish retail.

Set against that: buying on eMAG from GARETT keeps the 24-month manufacturer warranty inside a Romanian consumer-law relationship, and the elektroda evidence in §8 suggests that is a facility you may well need. **The premium is real but it is arguably buying something.**

### 12. Cross-check against the sibling platform (Carneo Guard) — what transfers and what does not

A parallel pass on the **Carneo Guard** (`com.tgelec.carneoguard`) covers a different brand on the *same* TGELEC/SETracker platform. Its findings were tested against Garett rather than assumed. Labelled explicitly: this is **platform evidence**, not Garett evidence, except where confirmed on Garett.

| Carneo finding | Holds for Garett? |
|---|---|
| Grossly wrong location is the dominant owner complaint (13 km, Hong Kong, 300 km) | **CONFIRMED on Garett, independently.** 200 km, "sometimes he's even in China", "the next town", a position 2 days stale, SOS SMS locating the child in China. Same failure, same magnitude, different brand. **This is a platform defect, not a brand defect.** |
| Geofence fires ~10 km / far too late | **CONFIRMED on Garett.** Notification "over an hour after" the zone was left; and the inverse — dozens of false exit alerts per day (EddieCrane, §4). |
| Watch ships with an "Asian" AGPS server; switching to Google improves location ~100% | **NOT FOUND on Garett.** No AGPS-server selector is documented in Garett's app, manual, support FAQ or tutorial video. Recorded as an audited negative — but **worth looking for in the app**, because if it exists it is the single highest-value setting on the device. |
| Privacy policy names AutoNavi (Alibaba's Amap) as location provider | **NOT ESTABLISHED for Garett.** Garett Tracker declares a generic e-commerce privacy policy naming no processor at all (already in the doc). Map provider **UNKNOWN**. |
| Disabling Wi-Fi positioning forces a better satellite fix | **Analogue confirmed on Garett** via the LBS route: a verified Ceneo owner reports turning **LBS** off for a few days makes GPS accurate (§7). Both LBS and Wi-Fi have independent toggles. |
| "Frankfurt" claim reconciles with *Alibaba Cloud's* Frankfurt region | **DOES NOT APPLY to Garett** — its endpoint is verifiably Amazon `AS16509` (§1). Garett is the better case here. |
| Band list is boilerplate, byte-identical across models | **Same pattern on Garett** — the doc already flags the band/power table as byte-identical across three different chipsets. Garett's is at least a **RED Article 10(8) statement** rather than retail copy, which is a stronger instrument, but it is still a vendor claim and not a measurement. Unchanged. |
| SOS false-triggers from a backpack and cannot be disabled | **NOT FOUND on Garett.** Searched; no Garett owner report of spurious SOS dialling was located. Garett's SOS is likewise not disableable by design (already in the doc), so the *hazard* transfers even though the *reports* do not. Recorded as an audited negative, not as an absence of risk. |
| App rating is 5.00★ from 1,106 ratings with zero written reviews | **Reclassified 2026-08-19: this is almost certainly the same Google locale-quantisation artefact this document diagnosed for Garett's own "2.6"** (other locales read the same pool as 2.7/SK and 3.1/CZ, and named written reviews for the app demonstrably exist), **not vendor astroturf.** Rejected as a benchmark either way (§9). Garett's own 2.33★ is consistent with SeTracker's unbranded 2.82★; Carneo's is the outlier. |

**Net:** the two brands' *hardware* documentation differs and Garett's is better, but their *failure modes in the field are the same failure modes*, because they are the same software on the same servers. **Anything this project concludes about location reliability on one TGELEC watch should be assumed true of the others until shown otherwise.**

### 2a. Battery — ADDENDUM: the Twin 2 finally has observations, and one of them breaches the school-day floor

Deeper mining of Media Expert (including a Wayback snapshot of `20251006203251`, which predates the seeded December burst in §9 and shows the honest aggregate of **4.20/5 from 17 reviews**) produced **five dated Twin 2 owner runtime reports**. `battery_observed_h` is now populated at **48**. None states the tracking interval, so all should be read as the 10-minute default.

> **Mateusz, 22 Sep 2025, "Garett":** *"Śledzenie GPS to jakaś tragedia. Dokładność to chyba z 5 km. **Bateria 2, 3 dni wytrzymuje**"* — "GPS tracking is a total disaster. Accuracy is maybe 5 km. **The battery lasts 2, 3 days.**"

> **Bartosz, 11 May 2025, "Kiepska bateria i GPS":** *"Smartwatch dobry, **kiepska bateria trzyma 2 dni**, GPS się gubi, źle pokazuje gdzie osoba się znajduje."* — "Watch is good, **poor battery, lasts 2 days**, GPS gets lost, shows the wrong place."

> **Martyna, 3 Jul 2025 — a 7-year-old, i.e. exactly this buyer's case:** *"Wybraliśmy ten model jako pierwszy taki zegarek dla Syna lat 7… **bateria trzyma ok 2 dni**, połączenia są dobrej jakości, lokalizacja całkiem niezła, jednak nie jest ze 100% dokładnością."* — "We chose this model as the first such watch for our 7-year-old son… **the battery lasts about 2 days**, calls are good quality, location is quite decent though not 100% accurate."

> **Paweł, 2 Jan 2025 (Twin 2 blue) — the only Twin 2 report that states usage conditions:** *"Bateria zegarka **przy włożonej karcie, nie graniu w gry bateria wytrzyma max dwa dni**."* — "**With the SIM card inserted and not playing games, the battery will last max two days.**"

> **Karolina, 21 Jul 2025 — the outlier, and it breaches the floor:** *"…W dodatku **bateria bardzo słaba nie wytrzymuje nawet do wieczora** więc będę reklamować."* — "…On top of that **the battery is very weak, it doesn't even last until the evening**, so I'm going to file a warranty claim."

**Reading:** the Twin 2's 900 mAh really is the best cell in the line, and ~2 days at the default interval is a genuine, repeatedly-observed result that comfortably clears a 9.5 h school day. **But units exist that do not last one day**, and the owner in question was taking hers back under warranty. Test yours in week one.

**A vendor admission that changes the interval question.** Garett's own FAQ page on extending battery life (<https://garett.com.pl/faq/jak-wydluzyc-prace-baterii-zegarka-dzieciecego/>):

> *"Tryb „Śledź" – **co 1 minutę**, Tryb „normalny" – co 10 minut, Tryb „oszczędzanie energii" – co 1 godzinę… **Jeżeli w aplikacji po rejestracji zegarka ustawiony jest domyślnie tryb śledź**, to w tym wypadku… zalecamy ustawić tryb normalny. Przy tym trybie czas pracy baterii **powinien być przybliżony do tego, który jest opisany w specyfikacji**."*
> — "'Follow' mode — **every 1 minute**; 'normal' — every 10 minutes; 'power saving' — every 1 hour… **If, after registering the watch, the app is set by default to Follow mode**, then… we recommend setting normal mode. In that mode the battery life **should approximate what is described in the specification.**"

**Garett concedes two things there: that the app can ship defaulted to 1-minute polling, and that its advertised runtime is only reachable after the customer manually downgrades to 10 minutes.** So the buyer may get the best-in-field 1-minute interval out of the box — and a battery that behaves nothing like the box.

Independent line calibration, all with the interval or the load stated:

- **Essa 4G (710 mAh), GuideLee.pl** — full method now recovered: *"utrzymać częstotliwość monitorowania lokalizacji **na poziomie co 10 minut**… około jednominutowe rozmowy wideo… kilka krótkich połączeń (łącznie około 5 minut)… tryb nocnego oszczędzania energii… zegarek zaczął zgłaszać niski poziom naładowania baterii **po około 28 godzinach**. Czas pracy baterii w trybie oszczędzania energii (tj. **przy monitorowaniu lokalizacji co godzinę**) wynosił około **40 godzin**."*
- **Essa 4G, Marcin, Media Expert, 12 Sep 2023, "bateria wszystko psuje"** — the best per-action figures anywhere: *"**bateria nie wytrzymuje nawet jednego dnia** przy oszczędnych ustawieniach… **Połączenie telefoniczne 2-3 minutowe to mniej więcej 3-4 % mniej baterii. Dodatkowo samo czuwanie zabiera kilka procent na godzinę.**"*
- **Sun Ultra 4G (900 mAh, same cell as the Twin 2), Radek, Media Expert, 1 Oct 2023, "Dramat":** *"**bateria dokładnie w 60 minut straciła 10% (wyłączony Bluetooth i WiFi)**"* — 10% per hour with BT and Wi-Fi off ⇒ **~10 h total**.
- **Essa 2 AI 4G (800 mAh), benchmark.pl:** *"naładowany do pełna rozładował się po **40 godzinach samego czuwania**"* — 40 h of **pure standby** against a "up to 5 days" claim; ~12 h with moderate use; **4–5 h with the always-on display**.

### 6a. VoLTE — MATERIALLY ADVANCED: Garett's own support tells owners to turn it OFF

`volte: UNKNOWN` is retained as a *provisioning* answer, but the picture is now much clearer and it points hard at 2G.

> **rahemos91, Apple App Store PL, 17 Mar 2026, 3★, iOS v1.6.1, "Aktualizacja aplikacji":** *"Pokazuje zegarek jako podłączony a co nie kliknę to komunikat że zegarek nie jest w sieci… **Po kontakcie z pomocą techniczną problem rozwiązany. Należy wyłączyć w ustawieniach volte.**"*
> — "It shows the watch as connected but whatever I click gives 'watch is not on the network'… **After contacting technical support the problem was solved. You have to turn VoLTE off in the settings.**"

**Garett's own technical support's remedy for a watch that will not stay on the network is to disable VoLTE.** With 3G dead in Romania, VoLTE-off means circuit-switched voice on **2G only**. That works on **Orange RO and Digi RO**; it would leave the child unreachable on an operator without 2G.

The one positive VoLTE datapoint found, and it is five years old:

> **Robert Uszok, Google Play PL, 12 May 2021, 4★:** *"Ma zasięg GPS i GSM (**razem z VoLTE**), fajnie działa z nju."* — "It has GPS and GSM coverage (**including VoLTE**), works nicely with nju." (nju mobile is an Orange Poland MVNO.)

And two showing the 4G badge does not mean 4G service:

> **Monika Nawrocka, Google Play PL, 8 May 2022, 1★:** *"Po stronie operatora jest wszystko ok, zegarek również poprawnie ustawiony (apn)… **Poza tym mamy model REX 4G a pracuje jedynie na 2G**…jak to możliwe się pytam."* — "…**we have the REX 4G model and it only works on 2G**… how is that possible, I ask."

> **Jacek Dziasek, Google Play PL, 27 Apr 2022, 4★:** *"**większość problemów znikła kiedy w zegarku wymieniłem kartę sim z fioletowego na pomarańczowego operatora**"* — "**Most of the problems disappeared when I swapped the SIM from the purple to the orange operator**" (Play → Orange).

**Operator choice materially changes whether these watches work.** For Romania that argues specifically for **Orange or Digi**, and against Vodafone RO or Telekom RO.

### 7a. Positioning — the mechanism, and the constellation answer at silicon level

**Constellations, revised and sharpened.** The doc's `positioning` line recorded only an *absence of vendor claims*. There is now a positive chip-level finding, and it splits into a confirmed part and an inferred part:

- **Galileo is genuinely absent — CONFIRMED for the SL8521E by name.** A UNISOC-focused Chinese technical source (CSDN, 8 May 2022) lists the parts that do not support Galileo: 「不支持的芯片：SC9820E、SC9832E、SC9863A（内置）、**SL8521E**、SL8541E、UIS8581E（内置）等」 — *"Chips that do not support Galileo: SC9820E, SC9832E, SC9863A (built-in), **SL8521E**, SL8541E, UIS8581E (built-in), etc."* The same source's rule of thumb — UNISOC GNSS parts with 5 GHz Wi-Fi have Galileo, those without do not — puts the SL8521E (Wi-Fi 4, 2.4 GHz only) on the same side independently. **For a European buyer this is a real, permanent downgrade against any watch with Galileo.**
- **GLONASS and BeiDou are probably present and active, though Garett never claims them — INFERRED from the sibling SL8541E**, which shares the integrated-GNSS design: single-band L1/B1I, NMEA talker IDs `$GPGSV`, `$GLGSV`, `$BDGSV` and **no `$GAGSV`**, with two mutually exclusive firmware images (`gpsgl`, `gpsbd`) and a probe default of **GPS+GLONASS**. This is firmware architecture, not a measurement, and the SL8521E-specific evidence is only the Galileo exclusion.
- Wonlex's own marketing spec for the 8521E lists **GPS L1 only** ("L1, 1575.42 MHz C/A", 22 channels, 5–15 m). Where it disagrees with the HAL evidence, treat the marketing sheet as under-stating rather than the silicon as over-stating.
- **No owner-side constellation capture (GPSTest, logcat) was found for any UNISOC watch of this family.** Audited negative; if a Polish owner ever posts a GPSTest screenshot that would be genuinely new evidence.

**Net: single-band, no Galileo, probably GPS+GLONASS. A single-frequency GNSS with no Galileo, pointed at whatever AGPS server the platform defaults to, is a coherent mechanism for the kilometre-scale errors owners report — and it is not fixable by any setting.**

**The best mechanistic account of the positioning behaviour found anywhere**, and it explains every wrong-location report in this document. Łukasz, Media Expert, 12 Oct 2023, reviewing the Sun Ultra 4G under the title *"Technicznie Poprawny, algorytm lokalizacji świetny – choć trzeba rozumieć jak działa"*:

> *"W zegarku jest położony **nacisk na lokalizację po Wi-Fi (w pierwszej kolejności) i po LBS (w drugiej kolejności)**… **Dopiero kiedy zegarek jest poza zasięgiem przekaźników LBS podejmuje próbę lokalizacji po GPS z automatu**… **Trzeba być świadomym, że zegarek kiedy tylko się da nie korzysta z GPS — nawet na otwartej przestrzeni niejednokrotnie preferuje LBS zamiast GPS.** Jest tak dlatego że lokalizacja GPS wymaga silnego i stabilnego sygnału… co oznacza **duży pobór energii**… **jak nie jest możliwym uzyskanie tego sygnału w ciągu kilku sekund to zegarek opiera się na odczycie Wi-Fi lub LBS i oszczędzi energię.**"*
> — "The watch places **emphasis on Wi-Fi positioning first and LBS second**… **only when it is out of range of LBS transmitters does it automatically attempt GPS**… **You must be aware that whenever it can, the watch does not use GPS — even in open space it repeatedly prefers LBS over GPS**, because a GPS fix needs a strong stable signal from several satellites at once, which in practice means **high power draw**… **if it cannot get that signal within a few seconds it falls back on the Wi-Fi or LBS reading and saves energy.**"

He also documents an **undocumented SMS command that forces a proper GPS acquisition**: with LBS disabled in the app, send `pw,123456,cr#`, which makes the watch wait *"może 60 albo więcej sekund"* for a satellite fix instead of a few seconds. And a warning that matters for a school-day use case:

> *"**jeśli ustawimy dziecku blokadę zegarka np. w czasie lekcji to my również się do dziecka nie dodzwonimy – zegarek odrzuca połączenia od wszystkich (klawisz SOS działa)**"*
> — "**If you set the watch lockout for the child, e.g. during lessons, then you cannot call the child either — the watch rejects calls from everyone (the SOS key still works).**"

**That is a direct hit on the doc's "Blocarea dispozitivului" row.** Class mode is not a parental filter; it is a total inbound block that includes the parent.

Two further reports that pin the failure on the cell/Wi-Fi fix rather than on GPS drift:

> **Patrycja, Media Expert, Essa 4G pink, 1 Oct 2023, "Beznadzieja":** *"**pokazywała dobrze w domu jak ściągało z wi-fi, jak już wyszła to pokazywało rozbieżność 30km**"* — "**it showed correctly at home when it was pulling from Wi-Fi; once she went out it showed a 30 km discrepancy.**"

> **kowalesko, Apple App Store PL, v1.6.2, 1★:** *"Lokalizacja od czapy pokazuje 3 km dalej, **co ciekawe oba zegarki pokazują dokładnie tą samą błędną lokalizację**"* — "**interestingly both watches show exactly the same wrong location**" — two devices returning an identical error is a shared cell/Wi-Fi fix, not per-unit GNSS noise.

And a folk remedy that three separate verified owners independently report working: **disable LBS for ~24 h** to force the receiver to learn satellites (Twin 4G m…k; Essa 4G a…t; corroborated by Garett's own FAQ advising GPS-only). One owner reports the opposite failure — *Cute 2, Artur MW, 6 Mar 2025:* *"GPS to żart, tylko po wifi łapie lokalizację, **LBS mimo wyłączenia dalej działa**"* — "LBS keeps working despite being disabled."

### 5a. Romania — a third eMAG review exists, and the registration defect is worse than a password validator

**Correction to the doc and to §5 above.** The doc states there are two Romanian reviews across the whole eMAG.ro range. A SKU-by-SKU sweep of **all 30 Garett Kids listings on eMAG.ro** found **three**. The new one is negative and it is about location:

> **Adrian, eMAG.ro, 19 Jun 2026, 1★, verified eMAG buyer, "Nu recomand"** — **Garett Kids Tech 4G** (SKU D2W4STYBM): *"Nu corespunde locația unde te afli."* — "**The location where you are doesn't match.**"

So the Romanian retail corpus is: Anca Gherasim 5★ (Twin 2, 20 Feb 2026), Adi 4★ (Nice Pro, 13 Jul 2025), **Adrian 1★ (Kids Tech, 19 Jun 2026)**. Twenty-seven of thirty SKUs have zero reviews.

**The eMAG Q&A seam is dry.** Of all 30 SKUs, exactly one has any questions, and **both are unanswered**: *"Buna ziua, a cumparat cineva acest ceas si poate sa ne lase o recenzie?"* (lori, 19 Jun 2025) and *"Salutare. Ceasul are NFC?"* (Laurentiu Brânzoiu, 18 Sep 2024). **Nobody in Romania has ever asked eMAG about network compatibility for this line** — which is itself a measure of how small the Romanian installed base is.

**The registration defect is not only a password validator. In app versions 1.3.6–1.4.1 the Register button went missing.** A dated Czech cluster, same app, same servers:

> **olilex olilex, 26 Dec 2025, 1★, v1.3.6:** *"DO APLIKACE SE NEJDE REGISTROVAT, POUZE PRIHLASIT, ALE TO BEZ REGISTRACE NENI MOŽNÉ."* — "**YOU CAN'T REGISTER IN THE APP, ONLY LOG IN, BUT THAT'S NOT POSSIBLE WITHOUT REGISTERING.**"

> **Michaela Dobošová, 15 Jan 2026, 1★, v1.3.6:** *"mám problém v aplikaci není nabídka na registraci. Pouze na přihlášení."* — "Problem: **the app has no registration option. Only login.**"

> **Petr Chmela, 27 Apr 2026, 1★, v1.3.7:** *"Nejde vytvořit účet!"* — "Can't create an account!"

> **moneylove luck, 21 Jun 2026, 1★, v1.4.1:** *"nejde zaregistrovat, **neni na to ani nikde odkaz**!! nepoužitelná aplikace!"* — "Can't register, **there isn't even a link for it anywhere**!! unusable app!"

Thirteen such Czech reviews were catalogued between Jan 2025 and Jun 2026, plus Hungarian and Polish equivalents. **And there is a workaround, which the buyer should know before concluding the app is broken:**

> **Eli S, Google Play CZ, 6 Mar 2026, 4★, v1.3.6:** *"Dobrý typ, **registraci lze udělat tak, že kliknete na přihlášení, to vás pozve na registraci**."* — "Good tip: **you can register by tapping Login, which then invites you to register.**"

**This is still not country-specific.** A keyword sweep of ~2,700 reviews across eight storefronts for `rumun|romania|român|\+40|prefix|kierunkow|kraj|country|codul de tara` returned **zero** hits tying registration to a country or prefix. The conclusion in §5 stands and is now doubly verified.

**There is no Romanian support channel.** Romanian *documentation* exists (Twin 2 manual and warranty card in Română). Support does not: Garett answered both Romanian complaints in Polish and routed them to `serwis@garett.pl` / +48 41 252 75 10. Czech and Slovak buyers get a local RMA partner (`garett@rmasluzby.cz`, +420 603 573 592). **Romania gets neither.**

One report worth flagging without over-weighting it, because it is a single voice and it contradicts the Frankfurt endpoint:

> **Zmijoz, Apple App Store PL, 25 Sep 2024, 1★, v1.5.8:** *"**Działa tylko przez VPN.** Aplikacja nie działa w Polsce. Nie łączy się z serwerami, nie da zalogować ani utworzyć konta. Natomiast **jeśli użyć VPN i przełączyć się na sieć np. w Singapurze, to działa.** Dystrybutor nie powinien oferować tych zegarków w Europie, skoro **nie ma w tym regionie serwerów**."*
> — "**Works only via VPN.** The app doesn't work in Poland. It doesn't connect to the servers, you can't log in or create an account. But **if you use a VPN and switch to a network in e.g. Singapore, it works.** The distributor shouldn't be offering these watches in Europe if **there are no servers in this region.**"

One user, one date, and possibly a transient outage — but it is consistent with §1: the European endpoint is a shared platform edge, and the account layer may not be in Europe at all.

### 9a. Astroturf — a second, larger and cruder farm at Komputronik

Media Expert's December 2025 burst (§9) is the smaller problem. **Komputronik carries 88 Garett Kids "reviews" and every single one is five stars, anonymous, undated, with no verified-purchase badge and 0/0 helpfulness votes:**

| Page | Reviews | 5★ | 4★ | 3★ | 2★ | 1★ |
|---|---|---|---|---|---|---|
| 929446 Twin 2 4G black | 36 | **36** | 0 | 0 | 0 | 0 |
| 929447 Twin 2 4G blue | 36 | **36** | 0 | 0 | 0 | 0 |
| 997827 Essa 2 AI 4G black | 16 | **16** | 0 | 0 | 0 | 0 |

The distribution alone would be suggestive. The decisive tell is that **entries containing explicit complaints are still scored 5/5** — something no genuine reviewer does:

- *"Produkt jest całkiem okej, ale… **ekran ma kilka rys**."* ("the screen has several scratches") → **5★**
- *"…nie jestem do końca zadowolona z jakości wykonania, **trochę jest poobijany**."* ("a bit knocked about") → **5★**
- *"Zegarek sam w sobie ok, ale **aplikacja GPS czasem się zacina**."* ("the GPS app sometimes freezes") → **5★**
- *"…uważam, że **cena jest nieco zbyt wysoka**… **czasami łączność z telefonem jest niestabilna**."* → **5★**

Others read as marketing copy with a built-in objection-handle, e.g. an Essa 2 AI entry praising *"opcja dyskretnego podsłuchu (monitoringu głosu)"* and adding *"Może brzmi to nadopiekuńczo, ale w dzisiejszych czasach daje to ogromny komfort psychiczny"* ("It may sound overprotective, but these days it gives enormous peace of mind").

**All 88 Komputronik entries are discarded.** Note the scale of the distortion: **Komputronik's 36 fake five-star Twin 2 reviews outnumber the entire genuine Twin 2 corpus everywhere else combined.**

By contrast, **Ceneo's reviews are clean** — every one quoted in this document carries the green "Zaufana Opinia potwierdzona zakupem" shield, and no incentive/points badges were found on any Garett page. Two structural caveats on Ceneo: it publishes the reviewer's *elapsed usage time*, and a large share of the 5★ entries were written after **3–6 days**, before battery drift, GPS drift or charging failure could appear, while the negatives cluster at **2 weeks to 1 month**; and its AI-generated "summary of the most useful opinions" is materially softer than the raw text and should be treated as vendor-adjacent, not evidence.

**Media Expert appears genuine apart from the December burst** — its Wayback aggregates (4.20 on the Twin 2 in Oct 2025, **1.00** on the Sun Ultra blue, 3.40 on the Sun Ultra pink) include real 1★ content and named, dated reviewers.

### 8a. Undocumented limits and further failure modes

- **Contacts and photos are capped, and the caps are not in any spec.** Comment by "Michał" under two separate Ceneo Nice Pro 4G reviews: *"tego Wam nikt nie da w specyfikacji. **maksymalna liczba kontaktów? 15. Maksymalna liczba zdjęć? 3.** Jak dla mnie istotne elementy a sztucznie zablokowane…"* — "nobody gives you this in the spec. **Max contacts? 15. Max photos? 3.** Important things for me, and artificially capped."
- **The whitelist does not actually restrict dialling on some models.** *Vibe AI 4G, Mateusz Majewski, 30 Dec 2025:* the whitelist is unavailable on Android and, where it is available on iOS, *"i tak można dzwonić gdziekolwiek się zechce"* — "you can still call anywhere you like anyway."
- **A recurring deep-discharge brick across at least three models.** Essa 4G (Magda, Media Expert, 28 Oct 2023: two days old, *"nie chciał ładować po nocy ładowania ani drgnie"*), Cute 2 4G (elektroda `topic4124152`, 29 May 2025, unresolved), and further Essa reports. The shop assistant's advice to one owner was *"nie można ich rozładowywać"* — "you must not let them fully discharge" — which for a watch on a child's wrist is not advice, it is a defect.
- **The SIM tray is fragile on the Sun Ultra**, with four separate owner reports of stripping or snapping it. One of them is also **the single clearest positive about Garett's after-sales**: *"**Na plus oceniam serwis firmy Garett — po zgłoszeniu problemu (po dosłaniu dowodu zakupu) wysyłają nową tackę gratis. Brawo za ten gest.**"* (Bartek, 4 Aug 2024) — "Credit to Garett's service — after reporting the problem and sending proof of purchase they send a new tray free of charge."
- **Warranty replacement is real but not always curative.** Patrycja, Media Expert, 30 Aug 2024: *"**Pierwszy zegarek popsuł się po dwóch dniach**… W toku reklamacji został wymieniony na nowy, **który również nie działa**."* — "The first watch broke after two days… it was replaced under warranty with a new one, **which also doesn't work.**" And TonangeCZ, Apple App Store CZ, 14 Nov 2024: *"Hodinky uz byly **4x v oprave**. Pokazde neco jineho."* — "The watch has already been **in for repair 4 times**. Something different every time."
- **Review-base reality across the line:** Kids Tech 4G has **no locatable Polish owner reviews at all**; Vibe AI 4G has one (broken step counter); Cute 2 4G has one forum thread (bricked). Any claim that this line is well-reviewed does not survive contact with the sources.

### Audited negatives — searched, nothing found

Recorded so a later pass does not repeat them. All 2026-08-19.

- **Reddit** (logged in; **post and comment search both**; strictly read-only — nothing posted, voted or subscribed). Queries run: `Garett smartwatch dzieci` (comments) → 0 results; `Garett zegarek` (comments) → 0 results; `"Garett" smartwatch` (comments) → 5 hits, none an ownership report (a Lithuanian link to a Garett *senior* watch, a BuyFromEU brand list, a Zegarkomaniacy link, two off-topic); `"Garett Kids"` (comments) → 4 hits, three off-topic name collisions plus one Hungarian r/askhungary one-liner recommending the brand; `smartwatch copil Garett OR emag ceas GPS` (comments) → 0 results. **Reddit contains no first-hand Garett Kids ownership evidence in any language.** r/Polska's "Smartwatch dla dziecka" thread (2 yr old) contains only a second-hand remark about iOS support.
- **No Romanian owner report of a voice call on this watch**, on any operator, was found — searched across the full Play (972 text reviews) and Apple (165) corpora and by web search. Unchanged from the first pass, now independently re-verified.
- **No mention of a country prefix or country picker at registration** exists anywhere in either review corpus. Both corpora were grepped for `+40`, `+48`, `+420`, `+421`, `+36`, `prefiks`, `prefix`, `kod kraju`, `country code`, `wybierz kraj`, `select country`, `codul de tara`, `numar romanesc`, `rumuńsk`, `moldov` — **all zero matches.**
- **No Garett statement responding to the DEF CON 34 / Black Hat 2026 research** was found. Queries: `Garett odpowiedź podatność smartwatch dzieci Black Hat 2026 bezpieczeństwo serwery Chiny`; `"Garett" smartwatch vulnerability Stykas Solferini brands list "Tracking the Trackers"`. Garett's site, blog and support pages carry nothing. **Silence, not denial.**
- **No CVE names `com.tgelec.garetts`.** The three 2026 CVEs name `com.tgelec.setracker` only.
- **No dated Twin 2 runtime measurement with the tracking interval stated** exists in any source reached across two passes.
- **Garett's official setup tutorials have comments disabled on YouTube** (`BR_0uwxomFg`; yt-dlp returns *"Comments are turned off"*), so the usual seam of owner reports under vendor videos does not exist for this brand.
- **crt.sh certificate-transparency enumeration** of `i365gps.com`, `tgelec.com` and `garett.com.pl` returned empty/non-JSON on every attempt — **not successfully attempted**, and no conclusion is drawn from it in either direction.
- **`tgelec.com` does not resolve** (NXDOMAIN via 8.8.8.8). `i365gps.com` and its `api.`, `app.`, `eu.`, `api2.` and `sever.` subdomains all resolve to Cloudflare anycast `104.18.8.146`, which conceals the origin; `setracker.com` resolves to `35.207.66.151` (Google Cloud, Frankfurt). **The Garett app's own REST API host was not positively identified in this pass** — the `3g-elec.com` findings in §1 are the *watch-side* server and AGPS hosts, not proof of where the parent app's API terminates.
- **No AGPS-server selector and no map-provider name** was found in Garett Tracker, its manual, Garett's support FAQ, Garett's privacy policies or the official setup video. Searched: `Garett Tracker aplikacja mapa AutoNavi Amap Google Maps serwer AGPS ustawienia wybór`; `SeTracker "AGPS" server setting Asia Europe Google map provider AutoNavi kids watch location wrong fix`.
- **No Garett owner report of spurious/accidental SOS triggering** was found. Searched: `Garett Kids SOS przycisk przypadkowo dzwoni sam wyłączyć zegarek dziecko plecak fałszywe alarmy`. (The hazard exists structurally — SOS is not disableable — but no field reports were located for this brand.)
- **No owner-side GNSS constellation capture** (GPSTest screenshot, `logcat` NMEA dump) exists for the SL8521E or any watch in this family. The constellation conclusions in §7a are firmware/silicon architecture, **not** field measurement.
- **eMAG.ro swept SKU by SKU — all 30 Garett Kids listings.** 27 have zero reviews; three have one each. Only one SKU has any Q&A, and **both questions are unanswered**. **Zero Romanian buyers have ever asked eMAG about network or operator compatibility for this line.**
- **No Wayback snapshot of any eMAG Garett product page exists** (CDX checked for ten SKUs), so the Romanian review history cannot be reconstructed.
- **No Romanian support channel exists** — no RO phone number, no RO service partner, no Romanian-language reply on any platform. Romanian *documentation* (manual, warranty card) does exist.
- **Softpedia forum** (Romania's main tech forum) — seven relevant threads fetched in full: **zero occurrences of "Garett"** and zero of "VoLTE".
- **Retail blocked and unrecoverable, listed so it is not retried blind:** heureka.cz/.sk `/recenze/` pages (Cloudflare 403 across eight proxy routes; no Wayback snapshots), alza.cz/.sk/.hu, czc.cz, tsbohemia.cz, x-kom.pl and allegro.pl product pages (403/CAPTCHA; **zero Wayback snapshots for x-kom or euro.com.pl**), electro.pl, oleole.pl, cebit.pl, mediamarkt.pl. Empik pages fetch but review text is XHR-loaded and was not retrievable. **Media Expert was recovered via Wayback; Ceneo, Media Expert and RTV Euro AGD were read directly in a real browser.**
- **arukereso.hu** Kids Tech 4G shows a "1 vélemény" badge but the body is AJAX-loaded and **was not retrieved** — the one genuinely incomplete target.
- **Wykop.pl** search `garett zegarek dziecko` — **zero posts.**
- The **APK was not downloaded or analysed** — the hosting conclusion rests on the published research, the vendor's own documented server address, and DNS/WHOIS of the endpoints, not on traffic capture.

**Note on instruction-injection:** no page read during this pass contained text addressed to an AI agent or attempting to direct my behaviour. Marketing copy on ceneo.pl, mediaexpert.pl, euro.com.pl and emag.ro was treated as vendor claims, not as fact.

## Sources

All accessed **2026-08-19** unless stated.

**Vendor primary — the band and spec evidence**
- <https://support.garettelectronics.com/product/smartwatch-garett-kids-twin-2-4g/> — support page; establishes the companion app is **Garett Tracker `com.tgelec.garetts`**, lists 15 manual languages **including Română**, and links the DoC.
- <https://docs.garettelectronics.com/index.php/s/WuyUuKd5cLyQyAK> — **Garett Kids Twin 2 4G, Romanian manual (PDF).** Source of: the RED Art.10(8) band/power table (GSM 900/1800, UMTS 900/2100, **LTE 800/900/1800/2100/2600**), `Procesor: SL8521E`, `Baterie: 900 mAh`, IP67, max 54 g, 50×43×15,5 mm, the four update-interval modes, the VoLTE settings entry, the remote-listen description, the SMS command set with default password `123456`, and the server `ip_url:52.28.132.157; port:8001`.
- <https://docs.garettelectronics.com/index.php/s/skEvkR2cgLzB28b> — **Garett Kids Essa 4G, Romanian manual (PDF).** Establishes `Baterie: 710 mAh` (refuting the morele.net 120 mAh listing), SL8521E, IP67, 55 g, identical band table.
- <https://docs.garettelectronics.com/index.php/s/ZF1ZqbElIj4dV0l> — **EU Declaration of Conformity 01/24/TWI, Garett Kids Twin 2 4G, 15.11.2024, Kielce.** Establishes the DoC cites RED 2014/53/EU but **lists only EMC and RoHS standards and no radio standard, no band, no power**.
- <https://docs.garettelectronics.com/index.php/s/LpK5kNPsSgNuJMA> — **EU Declaration of Conformity 11/24/ESS, Garett Kids Essa 4G, 15.11.2024, Kielce.** Establishes ETSI EN 301 511 (GSM), EN 301 908-1, **EN 301 908-13 (LTE UE)**, EN 300 328, EN 303 413, the EN 301 489 and EN 62209/50360/50566 series — and **no band or power table**, and no UMTS UE standard.
- Polish manuals confirming the identical band table and per-model specs: Nice Pro 4G <https://docs.garettelectronics.com/index.php/s/kJjsrw58M5oyi4J> (ASR 3603S, 670 mAh, **IP65**, 46 g); Kids Tech 4G <https://docs.garettelectronics.com/index.php/s/iBXcC6m8RzmYyQx> (ASR 3603, 550 mAh, IP67, 37 g); Sun Ultra 4G <https://docs.garettelectronics.com/index.php/s/pJ4ZW9mKQ9li2j5> (SL8521E, 900 mAh, IP67, 58 g); Cute 2 4G <https://docs.garettelectronics.com/index.php/s/iNDqUNRMzSI7Ami> (ASR3603C, 700 mAh, IP67, 48 g); Vibe AI 4G (EN) <https://docs.garettelectronics.com/index.php/s/IJPJm989okrxqu3> (SL8521E, 680 mAh, AMOLED 1,78", IP67, 55 g); Essa 2 AI 4G (EN) <https://docs.garettelectronics.com/index.php/s/P6JOcIIphJmL8Cd> (**ASR8601**, 800 mAh, AMOLED, IP68, 48 g).
- Per-model support pages confirming **every** non-eSIM model uses `com.tgelec.garetts`: <https://support.garettelectronics.com/product/smartwatch-garett-kids-tech-4g/>, `.../smartwatch-garett-kids-nice-pro-4g/`, `.../smartwatch-garett-kids-sun-ultra/`, `.../smartwatch-garett-cute-2-4g/`, `.../smartwatch-garett-kids-vibe-ai-4g/`, `.../smartwatch-garett-kids-essa-2/`. The **eSIM** page `.../smartwatch-garett-kids-esim/` is the only one that lists **`com.garett.ekids`** — confirming eKids is the eSIM-line app, not a replacement for Twin 2/Essa.

**Vendor primary — specs, prices, stock, Polish reviews**
- <https://garett.com.pl/produkt/smartwatch-garett-kids-twin-2-4g-czarny/> — 339 zł, in stock, 2 opinie; spec table incl. **`Typowy czas pracy baterii: Do 1 dnia`**, `Czas czuwania: Do 6 dni`, `Lokalizacja: Tak (GPS, AGPS, LBS, Wi-Fi)`, `Zdalny podsłuch`, `Dedykowana aplikacja: Garett Tracker`, `Android 8.0 (i nowsze)`, nanoSIM.
- <https://garett.com.pl/produkt/smartwatch-garett-kids-essa-4g-czarny/> — 479 zł, 710 mAh, typical **up to 1.5 days**, 5 opinie.
- Also used for price/stock/opinions: `.../smartwatch-garett-kids-tech-4g-rozowy-velcro/` (249 zł, 9 opinie), `.../smartwatch-garett-kids-nice-pro-4g-czarny/` (299 zł, **out of stock**), `.../smartwatch-garett-kids-sun-ultra-4g-czarny/` (249 zł, **out of stock**, 21 opinii), `.../smartwatch-garett-cute-2-4g-czarny/` (329 zł, 700 mAh), `.../smartwatch-garett-kids-vibe-ai-4g-czarny/` (579 zł), `.../smartwatch-garett-kids-essa-2-4g-czarny/` (599 zł, 800 mAh, IP68).
- <https://garett.eu/product/smartwatch-garett-kids-twin-2-4g-black/> — English EU storefront, same spec table ("Typical battery life: Up to 1 day"); **listed out of stock**.
- <https://garett.com.pl/polityka-prywatnosci/> — the generic e-commerce privacy policy that **Garett Tracker declares on Google Play**; contains no location, retention or processor terms.
- <https://garett.com.pl/garett-ekids-polityka-prywatnosci/> — the **eKids** app policy; names the controller, the DPO (Grzegorz Kamiński), GDPR Art. 6(1)(a)/9(2)(a), GPS location as processed data, and the cloud processor **OPTICOM.SOLUTIONS Maciej Krawczyk, Kielce** under a processing agreement.

**Romania — retail and first-hand**
- <https://www.emag.ro/ceas-smartwatch-pentru-copii-garett-twin-2-gps-8gb-negru-1-8-twin-2-4g-blk/pd/D0SCRQYBM/> — 423.75 RON, *"Vândut și livrat de: GARETT"*, in stock, *"14 zile drept de retur"*, **`Recenzii (1)`**; the 5★ Anca Gherasim review of 20 Feb 2026; and the machine-translated marketing text claiming *"ascultare de la distanta"* and *"pana la 3 zile"*.
- <https://www.emag.ro/ceas-inteligent-garett-kids-n-ce-pro-4g-roz-5904238484913/pd/D5WKCYYBM/> — 373.75 RON, sold by GARETT, **`Recenzii (1)`**, the 4★ Adi review of 13 Jul 2025, IP65 / 670 mAh, and the disclosure that the unit has scratched glass and an incomplete box.
- Zero-review SKUs verified individually: Kids Tech 4G `DCFHM1YBM` (373.75 RON, GARETT), Essa 4G blue `D8BBSS3BM` (575.51 RON, OVOLT România), Essa 4G black `DJQ8CYYBM` (658.25 RON, VEXIO), Cute 2 4G `DM752R3BM` (552.90 RON, mindNS), Sun Ultra 4G `DSJ8CYYBM` (620.21 RON, CUDOWNE ZAKUPY SP. Z O.O., last 3 units), Twin 2 4G pink `DPSCRQYBM` (423.75 RON, GARETT), Essa 2 4G `D2MT5W3BM` (833.18 RON, OVOLT România), Vibe AI 4G `DXLQ663BM` (757.97 RON, Super Merchant 3.3★).
- <https://play.google.com/store/apps/details?id=com.tgelec.garetts> (fetched `hl=ro&gl=RO`) — **2,6★ / 3,63 K de recenzii / 500 K+ Descărcări / Ultima actualizare 16 iun. 2026**, developer GARETT SP Z O O, Kielce; the two Romanian 1★ reviews of 26 Jun 2025 and 25 Apr 2025 with Garett's Polish-language replies of 18 Jul 2025 and 30 Apr 2025.
- <https://play.google.com/store/apps/datasafety?id=com.tgelec.garetts> — declared data categories (**no Location category**), encryption in transit, deletion on request, no third-party sharing.
- <https://play.google.com/store/apps/details?id=com.garett.ekids> (fetched `hl=ro&gl=RO`) — **10 K+ Descărcări, PEGI 3, Ultima actualizare 1 iul. 2026, no rating and no reviews at all**, support phone +48412527510.

**Independent review**
- <https://www.guidelee.pl/recenzja/smartwatch/garett-kids-essa-4g/> — Polish independent review, 12 May 2025. The only measured runtime in the corpus: **~28 h** at 10-minute tracking with a daily video call and night power-save; **~40 h** at hourly. Indoor address error; poor Polish localisation; stuttering audio on remote listening.

**Infrastructure and FX**
- <https://ipinfo.io/52.28.132.157/json> — AS16509 Amazon.com Inc., Frankfurt am Main, Hesse, **Germany**.
- <https://stat.ripe.net/data/whois/data.json?resource=52.28.132.157> — Organization: Amazon Technologies Inc. (AT-88-Z), NetRange 52.0.0.0–52.79.255.255.
- <https://api.nbp.pl/api/exchangerates/tables/A?format=json> — NBP table 159/A/NBP/2026, effective **2026-08-18**: EUR 4.3189 PLN, RON 0.8236 PLN. All EUR conversions in this document use these rates.

**Added by the scrutiny pass of 2026-08-19**

*Platform security research*
- <https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html> — Steffen Zahn, 14 Aug 2026. **The source that names "Garett Kids" on the DEF CON 34 "39 brands, one server" slide**, names YQT / 3G Electronics as the entity behind SETracker, states the data sits on Alibaba Cloud in China, cites `com.tgelec.garetts` as the public proof of platform membership, and records Wonlex's 10 Aug 2026 non-acknowledging blog response. Also the source for the German BNetzA listening-device ban and RED Art. 3(3)(e).
- <https://vulnerability.circl.lu/vuln/cve-2026-9220>, `-9221`, `-9222` and the CISA CSAF advisory `va-26-176-01` — Setracker2 / `com.tgelec.setracker`, vendor Shenzhen i365-Tech Co. Ltd., reported by Huancheng Hu (Hasso Plattner Institute) with Prof. Christian Doerr. Hardcoded AES keys, MD5 request signatures, hash-only authentication. **These name SeTracker, not Garett.**
- <https://www.digitaltrends.com/wearables/kids-smartwatches-are-meant-to-keep-children-safe-but-hackers-can-turn-them-into-stalking-devices/> and <https://mlq.ai/news/researchers-show-childrens-gps-watches-can-be-hijacked-across-shared-backends/> — corroborating coverage of the Black Hat 7 Aug 2026 / DEF CON 34 8 Aug 2026 talk.

*Platform infrastructure (all resolved 2026-08-19 via 8.8.8.8, ownership via ipinfo.io and stat.ripe.net)*
- <https://www.smartwatchphone.fr/pages/setracker-serveur-selon-regions> — the published SeTracker regional server list proving **52.28.132.157 is the platform's shared Europe/Africa node**, not a Garett address.
- `agpse.3g-elec.com` → 47.91.138.192 (**Alibaba (US) Technology, Hong Kong, AS45102**); `3g-elec.com` → 114.55.99.221 (**Hangzhou Alibaba Advertising, Hangzhou CN, AS37963**); `www.3g-elec.com` → 101.37.69.103. `52.28.132.157` PTR `ec2-52-28-132-157.eu-central-1.compute.amazonaws.com`, ARIN `Amazon Technologies Inc. / AT-88-Z / AS16509` — **genuinely AWS, not Alibaba Frankfurt.**
- <https://setracker.eu/how-to-use-setracker> — the SeTracker2 manual giving **runtime per tracking mode** (Follow 1 min ≈ ½–1 day; Normal 10 min ≈ 1–1½ days; Saving 1 h ≈ 3–5 days) — the figures that reconcile Garett's spec table with eMAG's marketing.
- <https://www.iwonlex.net/wonlex-4g-kids-watches-work-with-unisoc-8521e/> — UNISOC 8521E platform spec: **GPS L1 only**, 22 channels, 5–15 m.

*Vendor primary, newly mined*
- <https://garett.com.pl/pomoc-techniczna-smartwatche-dla-dzieci/> — **Garett's own support FAQ.** Source of: battery *"zazwyczaj od 1 do 3 dni"*; the abroad answer conditioning operation on **2G** availability; the ambient-listening procedure (*"Telefon zadzwoni na zegarek w trybie cichym"*); e-mail-based registration troubleshooting; and the GPS-outdoors / Wi-Fi-indoors / LBS split. (403s to WebFetch; fetched with a desktop User-Agent.)
- <https://www.youtube.com/watch?v=BR_0uwxomFg> — Garett's official setup video, Polish subtitle track. **Establishes that registration is by e-mail with an on-screen verification code, with no country selector.** Comments are disabled on the video.

*Owner evidence, newly mined*
- Google Play `com.tgelec.garetts` reviews endpoint, 972 text reviews across PL/RO/GB/CZ/HU/SK, and the Apple RSS customer-review feeds for PL/RO/CZ/SK/HU/GB/DE/US/IT (165 reviews) — the source of the corrected ratings, the version-by-version trend, the registration-password bug, and the location/geofence/SOS quotations in §4–5 of the scrutiny pass.
- <https://www.elektroda.pl/rtvforum/topic4100873.html> — **Essa 4G**, three warranty replacements Nov 2024–Feb 2025, and *"trzeba ładować codziennie"*. <https://www.elektroda.pl/rtvforum/topic4124152.html> — **Cute 2 4G** will not power on after full discharge.
- <https://www.mediaexpert.pl/smartfony-i-zegarki/smartwatche-i-zegarki/smartwatche/smartwatch-garett-kids-twin-2-4g-czarny> — **Twin 2 4G black: 4.4★ / 36 opinii but only 7 verified**, with an unverified 5★ burst of 8 reviews in 17 days in December 2025. The two verified reviews (Piotr 18 Jun 2026; Karolzg 22 Jan 2026) are quoted in §9.
- <https://www.euro.com.pl/smartwatch/garett-kids-twin-2-4g-czarny.bhtml> — **Twin 2 4G black: 3.5★ / 6 opinii**, 279,99 zł, 24-month warranty, `Wytrzymałość baterii: do 6 dni`, `Możliwość wymiany paska: nie`. Spec table is machine-populated and wrong in at least three fields.
- <https://www.ceneo.pl/170956006> — **Twin 2 4G black: ZERO opinions.** <https://www.ceneo.pl/135534869> — **Twin 4G (first-gen): 4.0★ / 6 opinii**, source of the "turn LBS off" workaround and the 1★ *"Telefon ani żadne jego funkcje nie działały"*.

**Attempted and unavailable** (recorded so a later pass does not repeat them): `garett.com.pl`, `garett.eu`, `komputronik.pl`, `euro.com.pl`, `appbrain.com` and `benchmark.pl` all return **HTTP 403** to the WebFetch tool but `garett.com.pl` and `garett.eu` are reachable by plain HTTP client with a browser user-agent. `magazyn.ceneo.pl` redirects to a CAPTCHA. Pen Test Partners and the Norwegian Consumer Council **#WatchOut** report returned 404 at the URLs tried, so **no platform-specific vulnerability research on TGELEC could be sourced in this pass** and none is asserted. The web-search budget for the session was exhausted before that line of enquiry could be reopened.
