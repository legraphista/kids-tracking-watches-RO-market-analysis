# Lens 3 — Technical Sweep: 4G Kids' GPS Smartwatches for Romania

Prepared 2026-08-18. Approach: work backwards from the radio and positioning requirements
rather than from brands or shops. Every factual claim carries a source URL. `UNKNOWN` means
I could not find a citable fact — it is never an inference from a "4G" label.

**Method note on sources.** Marketing pages are the weakest evidence and I mark them as such.
Where I have a manufacturer datasheet (PDF), an OEM spec sheet, or an operator press release,
I say so. Three sources here are aggregator databases (thingsdata, Wireless Logic, SkyData)
and they disagree with each other on Romania; I flag those disagreements rather than pick a
winner.

---

## PART 1 — ROMANIAN MOBILE NETWORK GROUND TRUTH (2026)

### 1.1 Market structure

Romania has **three** MNOs as of 2026: Orange, Vodafone, Digi (RCS&RDS). Telekom Romania
Mobile no longer exists as an independent network — Vodafone and Digi split its assets in
2025 (Vodafone: postpaid base, stores, technical network infrastructure, staff, EUR 30m;
Digi: prepaid base, **spectrum**, towers, EUR 40m). The legal merger of Telekom Mobile into
Vodafone Romania completed 30 June 2026.

- https://www.romania-insider.com/digi-vodafone-complete-takeover-telekom-romania-2025
- https://www.romania-insider.com/vodafone-merge-telekom-mobile-communications-romania-june
- https://www.vodafone.com/news/newsroom/corporate-and-financial/acquisition-of-telekom-romania-completes

**Implication for device selection:** a watch that only worked on Telekom is now irrelevant;
and Digi inherited Telekom's 800 MHz (B20) block, which matters below.

### 1.2 3G shutdown — 3G IS EFFECTIVELY DEAD IN ROMANIA

| Operator | 3G status | Evidence |
|---|---|---|
| **Telekom Mobile** | Shut down **H1 2023** (first in RO) | HotNews (2024) |
| **Digi / RCS&RDS** | Announced summer 2023, executed; 2100 MHz refarmed to 4G/5G. **Only surviving 3G is a reserved slice for the Bucharest metro**, for voice on non-4G handsets | HotNews; Mobile Europe (29 Aug 2023) |
| **Orange** | Gradual shutdown **from June 2024, completed end of 2025** (official press release, 22 Jan 2024) | Orange newsroom; orange.ro |
| **Vodafone** | Migration off 3G announced/underway from 2025. One IoT aggregator records Vodafone RO 3G as **Closed, 24 March 2026** | ArenaIT (6 Mar 2025); thingsdata (aggregator) |

- https://hotnews.ro/nchiderea-retelei-3g-a-orange-nu-este-o-premiera-n-romnia-care-este-singurul-loc-unde-rcsrds-mai-permite-vechea-tehnologie-si-telekom-mobile-a-renuntat-la-3g-21264
- https://www.mobileeurope.co.uk/digi-ceases-3g-network-in-romania-signs-belgian-wholesale-deal/
- https://newsroom.orange.ro/comunicate/orange-va-renunta-gradual-la-tehnologia-3g-din-iunie-2024-si-se-va-concentra-pe-transferul-clientilor-spre-retele-mai-rapide-si-mai-eficiente/
- https://www.orange.ro/tehnologii/3g/
- https://arenait.ro/vodafone-renunta-reteaua-3g-terminalele-fara-volte-putea-efectua-apeluri-voce-zonele-fara-acoperire-2g/
- https://thingsdata.com/news/2g-3g-sunset-update-global-iot-2026/

**Verdict: assume zero 3G coverage nationwide.** Any watch whose voice path is "LTE data +
3G CSFB" is non-functional in Romania. Watches listing "WCDMA B1/B8" gain nothing from it.

### 1.3 2G status — still alive, but a decaying safety net, not a plan

- Orange explicitly states 2G/3G handsets keep **voice and SMS via 2G** after the 3G shutdown
  (orange.ro/tehnologii/3g, and the Jan 2024 press release).
- Digi runs 2G voice on **5 MHz within its 900 MHz band** and states voice is available "both
  through VoLTE and through its 2G network" (Mobile Europe, Aug 2023).
- Vodafone's own framing (Mar 2025): non-VoLTE terminals get routed to 2G, and **"in areas
  where 2G coverage is unavailable, making calls will become impossible"** (ArenaIT).
- Announced 2G end-dates are **contradictory across aggregators** and I found no ANCOM or
  operator primary source with a date:
  - CargoTrack table: Orange 2G → 31.12.2030; Vodafone 2G → 31.12.2025. This table also
    contains obviously wrong rows (Digi 2G "01.01.2015", Telekom 2G "01.07.2022"), so treat
    the whole table as low confidence.
  - Wireless Logic: Orange 2G "Dec-2025"; Vodafone 2G "Dec-2025 estimated"; no Digi row.
  - thingsdata: Vodafone RO 2G "date not yet communicated – planned".
  - A general claim that RO 2G runs "until the end of 2030" circulates but I could not tie it
    to a primary regulator source.
- https://cargotrack.ro/blog/inchiderea-retelelor-2g-si-3g-in-transport/
- https://wirelesslogic.com/global-network-closures/
- https://thingsdata.com/news/2g-3g-sunset-update-global-iot-2026/

**Verdict: 2G still exists in 2026 on at least Orange and Digi, but no operator has committed
to it publicly in a way you can rely on for a device you buy today and keep for 3–4 years.
Do not buy a watch whose voice depends on 2G.**

### 1.4 LTE bands actually deployed in Romania

From spectrum-holding databases (spectrum-tracker, frequencycheck):

| Operator | LTE bands | Coverage layer | Capacity layers |
|---|---|---|---|
| **Orange** | **B20** (800, 2x10 MHz), **B3** (1800, 2x30 MHz), B1 (2100, 2x15 MHz), B7 (2600, 2x10 MHz) | **B20 only** | B3 (the workhorse), B1, B7; B32 SDL 1500. 700 MHz is **5G n28**, not LTE |
| **Vodafone** | **B20** (800, 2x10 MHz), **B3** (1800), B1 (2100), plus 900 MHz (n8/B8) holding | B20, B8 | B3, B1. 700 MHz held as n28 |
| **Digi** | **B20** (800, 2x5 MHz + Telekom's ex-2x5 MHz block), **B8** (900, 2x10 MHz), **B3** (1800), B1 (2100), B7/B38 (2600) | B20, B8 | B3, B1, B7/B38 |

- https://www.spectrum-tracker.com/Romania
- https://www.spectrum-tracker.com/Romania/Orange
- https://www.spectrum-tracker.com/Romania/Digi
- https://www.spectrum-tracker.com/Romania/Vodafone
- https://www.frequencycheck.com/countries/romania
- https://prepaid-data-sim-card.fandom.com/wiki/Romania (paywalled on direct fetch; band summary via search index)

**The three facts that decide device selection:**

1. **B20 (800 MHz) is the only sub-1 GHz LTE layer Orange has.** A watch without B20 on an
   Orange SIM has *no* low band at all — it must hold B3/B1/B7, exactly the wrong profile for
   a small wrist antenna inside a concrete school building.
2. **B3 (1800 MHz) is the national workhorse everywhere.** B20 + B3 is the minimum viable
   pair; B1 is a useful third; B8 helps on Digi and Vodafone.
3. **B28 (700 MHz) is deployed as 5G NR n28, not LTE.** A spec sheet advertising "B28A" buys
   nothing in Romania today. Likewise B38/B39/B40/B41 TDD — Chinese-market TDD band lists are
   decoration here.

### 1.5 VoLTE and device certification — the biggest practical risk

- All three operators run VoLTE (Orange and Digi explicitly; Vodafone launched VoLTE/"Call+"
  years ago). https://www.romania-insider.com/vodafone-starts-using-4g-data-network-for-voice-calls-to-implement-interactive-call-in-romania
- **VoLTE is provisioned per device, not per SIM.** The Romanian VoLTE reference blog documents
  Vodafone RO provisioning as *"IMEI based, cel mai probabil bazat pe TAC (modelul telefonului
  din IMEI)"* — the network decides by device type code. Digi maintains an official "supported
  phones" list, plus a community list of ~81 unsupported-but-working devices; the documented
  workaround for an unlisted device is to activate VoLTE on a supported device first, then move
  the SIM.
  - https://volteromania.blogspot.com/p/vf-ro-volte.html
  - https://volteromania.blogspot.com/p/phones.html
  - https://volteromania.blogspot.com/p/2bis.html
- **Neither operator's published list contains smartwatches or IoT devices.** No kids' watch
  model appears on any Romanian VoLTE compatibility list I could find.
- Romanian support material for kids' watches already documents the failure mode: *"without the
  VoLTE call option activated, calls cannot be made on 4G, only on 2G and 3G; Telekom has
  discontinued 3G, which creates a problem when VoLTE is not enabled."*
  https://ro.montressmartwatch.com/blog/how-do-i-troubleshoot-problems-with-an-android-kids-gps-smart-watch-502701.html

**Verdict: "the watch supports VoLTE" and "VoLTE works on this Romanian SIM" are two different
claims.** Validate empirically on a returnable order. Prefer an operator that still has 2G
(Orange, Digi) so a VoLTE provisioning failure degrades to 2G voice rather than to silence.

### 1.6 IoT / wearable connectivity specifics

- **LTE-M**: commercially available in Romania via Orange, Vodafone and (ex-)Telekom.
  https://onomondo.com/iot-sim/the-best-iot-sim-cards-for-romania/ ·
  https://www.gsma.com/solutions-and-impact/technologies/internet-of-things/mobile-iot-commercial-launches/
  **Irrelevant here** — LTE-M/NB-IoT carry no voice service; every kids' watch worth buying
  uses LTE Cat-1 or Cat-4 with VoLTE, not Cat-M1.
- **NB-IoT**: per-operator coverage UNKNOWN; not applicable to a voice-capable watch.
- **eSIM for wearables in Romania**: **UNKNOWN.** I could not verify whether any RO operator
  sells a companion/one-number wearable eSIM profile, nor whether consumer eSIM profiles can be
  provisioned into third-party kids' watches. This is a hard blocker for eSIM-only devices
  (Fitbit Ace LTE, myFirst Fone R2, possibly some Xplora SKUs). Treat eSIM-only as
  disqualifying until proven otherwise.
- **Prepaid SIM in a watch**: mechanically fine — the recommended devices take a nano-SIM and
  need voice + SMS + a small data allowance (Anio, for example, specifies a minimum ~300 MB
  plus voice and SMS). Whether RO prepaid requires ID registration: **UNVERIFIED in this
  sweep** — deliberately not asserted.

### 1.7 Derived hard requirements for Romania

A device must satisfy **all** of these or it is not a candidate:

1. LTE **B20 and B3** at minimum (B1 and B8 are bonuses), published in a manual or datasheet.
2. **VoLTE** in the modem, stated by the manufacturer — there is no 3G, and 2G is expiring.
3. Voice path must not require WCDMA.
4. **Wi-Fi positioning** present — indoor accuracy at a school is a Wi-Fi fingerprint problem,
   not a GPS problem. GPS covers the walk to school; Wi-Fi + LBS answers "which building".
5. Battery ≥ ~700 mAh realistically, given the true duty cycle (frequent location fixes plus
   continuous LTE registration), not the marketing duty cycle.

---

## PART 2 — DEVICES, BY TECHNICAL CAPABILITY

Ordered by how well the radio matches Romania.

---

### 2.1 TCL MOVETIME MT48 (2025) — strongest on paper, band list missing

| Field | Value | Source quality |
|---|---|---|
| LTE bands | **UNKNOWN** — TCL publishes no band list for the MT48 | — |
| VoLTE | **YES** — "4G LTE connectivity … always able to communicate with parents via VoLTE"; product page says "Clear VoLTE calls" | manufacturer page + press release |
| Chipset | UNKNOWN | — |
| LTE category | UNKNOWN | — |
| Positioning | **GPS L1+L5 dual-band**, 1-second refresh, explicitly for urban multipath | manufacturer |
| Wi-Fi positioning | Not stated for MT48 specifically (present on MT42/MT46 siblings) | — |
| Battery | **900 mAh**, "up to 2.5 days use / 7 days standby" | manufacturer |
| Other | IP68 + 2ATM; TCL Connect Android app; School Time mode; GDPR / ISO 27701 / ISO 27001 claims | manufacturer |
| EU availability | Launched **October 2025** in DE, UK, ES, IT, FR at **~EUR 150** | press |

Sources: https://www.tcl.com/global/en/watches/mt48 ·
https://www.prnewswire.com/news-releases/tcl-launches-tcl-movetime-mt48-kids-smartwatch-designed-with-advanced-safety-and-digital-well-being-for-families-302545322.html ·
https://www.gizmochina.com/2025/09/07/tcl-movetime-mt48-kids-smartwatch-launched-specs-price/

**Assessment.** The only 2025-generation device found where the manufacturer states VoLTE *and*
ships an L1+L5 dual-frequency GNSS receiver — L5 is the single biggest real-world accuracy
improvement available in this category (it suppresses the reflected-signal errors you get
between apartment blocks). TCL's sibling MT42 publishes B1/3/7/8/20 on a comparable platform,
so B20 is very likely present, **but that is not recorded here as fact.** Action: obtain the
band list from TCL support or an EU retailer datasheet before purchase.

---

### 2.2 Anio 6 (Anio GmbH, DE) — best-documented radio, weakest battery

Extracted from Anio's own datasheet PDF (Stand 16.01.2024) and the ALSO distributor sheet:

| Field | Value |
|---|---|
| LTE | "Unterstützte 4G/LTE Frequenzen in MHz: **2.600, 2.100, 1.800, 900, 800**" = **B7, B1, B3, B8, B20** |
| GSM | 1800 / 900 |
| VoLTE | **YES** — "Voice over LTE (VoLTE): IP-Telefonie im LTE-Netz in HD-Voice Qualität mit rasantem Rufaufbau" |
| Chipset | **UNISOC W307 (ARM Cortex-A53)** |
| LTE category | UNKNOWN |
| GNSS | "GPS-Multi-Empfänger: **GPS, Galileo, Baidu** [BeiDou]" — **no GLONASS** |
| Positioning stack | "Ortungsmodule: **GPS, WIFI, LBS**" — Wi-Fi positioning present |
| Battery | **595 mAh**, datasheet runtime **"20–32 h"** (the anio.eu shop page claims 24–48 h — trust the datasheet) |
| OS / app | Proprietary **Anio RTOS 2.00.5** (not Android); Anio Android app, GDPR-focused, German servers |
| Other | IP68, nano-SIM (4FF), 44 g, no camera, school mode, SIM-lock free, SAR 0.75 W/kg wrist |

Sources (datasheet PDFs, text extracted locally):
https://d.otto.de/files/811c0cb9-48b2-59ca-8646-167531cedd96.pdf ·
https://www.also.com/pub/assets/5102afa5-b198-4f04-9d8b-2e3de108781e.pdf ·
https://anio.eu/products/anio6-kids-smartwatch

**Assessment.** Radio-wise the cleanest match in the sweep: every Romanian LTE band, explicit
VoLTE, Wi-Fi positioning, evidenced by a manufacturer datasheet rather than a shop blurb. The
disqualifier for this use case is **595 mAh with a manufacturer-stated 20–32 h** — at or under
the "one real school day plus margin" bar, and it will sit at the low end in a weak-signal
school where the modem hunts. No camera (a plus for school policy, a minus for locating a lost
watch). Buy only if nightly charging is accepted as non-negotiable.

---

### 2.3 imoo Watch Phone Z7 — best positioning stack; EU distribution is the question

| Field | Value |
|---|---|
| LTE | **FDD B1 / B3 / B8 / B20**; TDD B34/38/39/40/41 (irrelevant in RO) |
| 3G/2G | WCDMA + GSM present |
| VoLTE | **"Supported"** (manufacturer spec table) |
| Chipset | **UWS6131E** (UNISOC wearable SoC) |
| LTE category | UNKNOWN |
| Positioning | **GPS + GLONASS + BeiDou + Galileo + QZSS**, plus **Wi-Fi positioning** and **LBS** — the most complete stack found |
| Battery | **740 mAh**; claimed runtime not stated |
| Other | 1.3" 240x240, 2 MP front + 5 MP rear, IP68 / ISO 22810 20 m, BT 4.2, Wi-Fi 2.4 GHz, RAM 128 MB / ROM 128 MB + 4 GB |

Source: https://www.imoo.com/eu/products/z7 (manufacturer EU site, full spec table)

**Assessment.** B20 + B3 + B1 + B8 covers all three Romanian networks including Orange's only
low band; VoLTE stated; four-constellation GNSS plus Wi-Fi positioning. On radio and positioning
grounds this is the technical benchmark. Open items outside this lens: EU retail channel and
GDPR posture of the imoo app/servers — flag to the brand/shop agents. The older **Z6** uses a
Snapdragon Wear 2100 and is a generation behind
(https://www.qualcomm.com/products/mobile/snapdragon/wearables/wearables-device-finder/imoo-watch-phone-z6).

---

### 2.4 TCL MOVETIME Family Watch 2 / MT42 — full published band list, but aging and IP65

Manufacturer specification page — the only TCL kids model with a complete band table:

| Field | Value |
|---|---|
| LTE | **B1 / B3 / B7 / B8 / B20** |
| 3G | UMTS B1 / B8 |
| 2G | GSM B3 / B8 |
| VoLTE | **UNKNOWN** — not listed (video calling listed as a service feature) |
| Chipset | **Spreadtrum/UNISOC SL8521E**, 512 MB + 4 GB |
| Positioning | GPS / A-GPS / **BeiDou or GLONASS** / G-sensor / **Wi-Fi** / base station |
| Battery | up to **850 mAh** |
| Other | nano-SIM, 1.54", 2 MP, BT 4.2, Wi-Fi 2.4 GHz, **IP65 only**, micro-USB charging, 57 g |

Source: https://www.tcl.com/global/en/watches/mt42/specifications

**Assessment.** Band list is exactly right for Romania. Two problems: VoLTE is unstated on a
platform (SL8521E) that *can* do VoLTE but is often shipped without it; and IP65 is weak for a
7-year-old (splash only, no immersion). Older generation — fallback, verify VoLTE first.

---

### 2.5 Xplora X6Play — good EU band list, but two different devices share the name

| Field | Value |
|---|---|
| LTE (EU variant) | **B1 / B3 / B7 / B8 / B20**; 3G B1/B8 — per Xplora's own support spec article |
| LTE (US variant) | B2/4/5/7/12/66 — confirmed by the FCC-filed US quick guide |
| VoLTE | **UNKNOWN** — not stated anywhere I could find, including the manual |
| Chipset | **CONFLICTING**: "Qualcomm 2500" (Snapdragon Wear 2500) with 880 mAh on xplora.ie / shop.myxplora; **"Unisoc W377"** with 900 mAh / 72 h on xplora.ie and xplora.co.uk product pages; a third source cites Qualcomm MSM8909W |
| Positioning | **GPS + Wi-Fi + LBS only** — no GLONASS / Galileo / BeiDou stated |
| Battery | 880 mAh (Qualcomm rev) or 900 mAh / "72 hours" (UNISOC rev) |
| Other | 1.52" 360x400, 5 MP, IP68, 1 GB + 8 GB, Android-based |
| SIM | EU: nano-SIM, Xplora Connect SIM preinstalled. **US listing states "only compatible with eSIMs"** — variant-dependent, verify the EU SKU |

Sources: https://support.xplora.com/hc/en-us/articles/8993603641105-X6Play-Technical-specifications (band list; page blocks direct fetch, retrieved via search index) ·
https://xplora.ie/products/x6play · https://xplora.co.uk/products/x6play ·
https://xplora.ie/pages/xgo3-and-x6play-product-specifications ·
https://fccid.io/2AVMJX6 · https://www.manualslib.com/guide/4035595/xplora-x6play-manual.html

**Assessment.** The EU band list is right. Two things against it: (a) **the "X6Play" name covers
at least two distinct hardware platforms** (Qualcomm Wear 2500 vs UNISOC W377) and Xplora's own
regional sites contradict each other, so the band list you read may not describe the unit in the
box; (b) **positioning is GPS + Wi-Fi + LBS with no second constellation**, a real downgrade
versus imoo Z7 or TCL MT48 for urban accuracy. VoLTE unstated is the deciding risk. Ask Xplora
in writing for the LTE band list *and* VoLTE status of the exact SKU.

---

### 2.6 Xplora XGO3 — same band list, much weaker hardware

| Field | Value |
|---|---|
| LTE (EU) | **B1 / B3 / B7 / B8 / B20**; 3G B1/B8; 2G B2/3/5/8 |
| LTE (US) | B2/4/5/7/12 |
| VoLTE | **UNKNOWN** |
| Chipset | **UNISOC W307** (same family as Anio 6) |
| Positioning | Detail UNKNOWN; Xplora line uses GPS + Wi-Fi + LBS |
| Battery | **850 mAh** (comparison page) / 900 mAh (support page) — sources disagree |
| Other | 1.3" 240x240, **128 MB RAM + 128 MB storage**, IP68 |

Sources: https://support.xplora.com/hc/en-us/articles/6324149220881-XGO3-Technical-specifications (via search index) ·
https://xplora.co.uk/pages/x6play-and-xgo3-product-specifications ·
https://phonecurious.com/xplora-xgo3-kids-smartwatches-specs/

**Assessment.** Correct bands; 128 MB/128 MB is very tight; VoLTE unstated. No technical reason
to prefer it over the X6Play except price, which is not a constraint here.

---

### 2.7 Elari KidPhone 4GR / 4G

| Field | Value |
|---|---|
| LTE | **B1 / B3 / B7 / B8 / B20** |
| 3G/2G | WCDMA 900/2100; GSM 900/1800, GPRS class 12 |
| VoLTE | Stated **capable** (retailer / spec-DB level evidence, not a manufacturer datasheet) |
| Chipset | **UNKNOWN** |
| Positioning | GPS + **GLONASS** + Wi-Fi + LBS |
| Battery | **580 mAh**, "up to 48 h standby"; owner reports 8–10 h under active use |

Sources: https://www.imei.info/phonedatabase/elari-kidphone-4g/ (direct fetch blocked; via search index) ·
https://www.tradeinn.com/kidinn/en/elari-kidphone-4gr-smartwatch/139880660/p ·
https://www.elari.tech/products/kidphone-4gr (marketing only — no bands, no mAh)

**Assessment.** Band list is right and GLONASS is a plus, but the evidence chain is
retailer-grade, Elari's own product page publishes neither bands nor battery capacity, and
580 mAh with 8–10 h active-use reports fails the one-school-day requirement. Reject on battery.

---

### 2.8 Wonlex KT26 / KT26S / KT27 and the white-label OEM tier — B20 IS AN OPTION, NOT A FEATURE

This matters far beyond Wonlex: most no-name "4G kids GPS watch" listings on EU marketplaces
(including eMAG) are rebadged Wonlex or equivalent Shenzhen ODM units.

What the OEM actually publishes:

- Platform page: UNISOC **SL8521E / 8521E**, "FDD: B1 B2 B3 B5 B7 B8 **B20** B28A", GSM B2/3/5/8,
  "4G Data: **CAT4**", "**VOLTE support**" plus CSFB and SRLTE; positioning = GPS (22 ch, 5–15 m)
  + Wi-Fi 802.11b/g/n + LBS (100–1000 m). Models named: KT42, KT38, KT37, KT36.
  https://www.iwonlex.net/wonlex-4g-kids-watches-work-with-unisoc-8521e/
- **KT26S product page: "FDD-LTE: B1 B2 B3 B5 B7 B8 (Optional: B20 B12 B28A)"** — CPU SL8521E
  dual-core A7 1.2 GHz, Android 4.4, 900 mAh, IP67, GPS+LBS+Wi-Fi, VoLTE listed.
  https://www.iwonlex.net/products/wonlex-2023-newest-android-4g-lte-round-gps-kids-videocall-kids-smartwatch-kt26s/
- **KT26 product page (OEM): FDD-LTE B1, B2, B3, B5, B7, B8 — no B20 at all**; TD-SCDMA B34/B39,
  WCDMA B1, TDD B38/39/40/41; 680 mAh; GPS+AGPS+LBS+Wi-Fi; VoLTE not stated.
  https://www.iwonlex.net/products/wonlex-round-4g-video-call-gps-smartwatch-kt26/
- Retailer copy of KT26: SL8521E, "FDD Bands 1/3/5/8" — again **no B20**.
  https://www.dinesaw.com/products/wonlex-4g-round-gps-wifi-video-calling-kids-smart-watch-kt26
- KT27: same hardware as KT25–KT27, differing only in case design; 900 mAh, Android 8.1, IP67.
  https://motherplanet.net/products/wonlex-kt27-kids-4g-smart-gps-tracking-watch-video-call-sos-android-8-1

**Assessment — the single most important finding of this sweep.** On this ODM platform **B20 is
a build-time RF option chosen by whoever places the production order.** Two watches with the
same model number, the same photos and the same retailer spec table can differ in whether they
hold Orange's only low band. Therefore:

- No band claim on a marketplace listing for a white-label 4G kids' watch is trustworthy.
- The only way to know is the CE/RED declaration of conformity or the RF test report for that
  exact SKU — or an in-hand test (insert an Orange SIM, check serving band / indoor signal).
- A KT26-class unit without B20, on Orange, has **no sub-1 GHz LTE whatsoever**. Indoors at a
  school it sits on B3/B1 at the cell edge — precisely the "watch shows offline during school
  hours" complaint pattern.

---

### 2.9 Angel Watch Series R — widest band list found, but non-EU brand

| Field | Value |
|---|---|
| LTE | "Supported Bands **1, 2, 3, 5, 7, 8, 12, 17, 20, 28**" — includes B20 |
| GSM | 850/900/1800/1900 |
| VoLTE | **UNKNOWN** |
| Chipset | **UNKNOWN** |
| Positioning | GPS (5–10 m) + **Wi-Fi positioning (50–100 m)** + LBS (50–1000 m) |
| Battery | **800 mAh** |
| OS | Android 8.1 |

Source: https://angelwatchco.com/products/angel-watch-r

**Assessment.** Broadest band coverage in the sweep, and it publishes a Wi-Fi positioning
accuracy figure, which is unusual and welcome. Unknown VoLTE and a US/AU-centric support channel
are the problems. EU retail presence: for the shop-lens agent.

---

### 2.10 myFirst Fone S3 / S3+ / R2 — band data is self-contradictory; treat as unverified

| Field | Value |
|---|---|
| LTE | **CONTRADICTORY.** Three lists circulate for the S3: (a) "EU/Asia/Africa: B2, B5, B7, B12(B17), B13, B40, B41, B66(B4)" — that is a **North American** list mislabelled as EU; (b) "US/Mexico/Canada: B1, B8" — a **European** list mislabelled as US; (c) a generic "B1, B3, B7, B8, B20, B40, B41". The manufacturer's own product page lists only "GSM, WCDMA, WiFi, GPS" and **no LTE bands at all** |
| VoLTE | **UNKNOWN** |
| Chipset | **UNKNOWN** |
| Positioning | "**Wi-Fi, GPS, A-GPS**" — no second GNSS constellation |
| Battery | S3 **650 mAh**; R2 **605 mAh**; reviewers measure **8–16 h**, daily charging required |
| SIM | S3: nano-SIM. R2: **eSIM only** |

Sources: https://myfirst.tech/myfirst-fone-s3/ (manufacturer — no bands listed) ·
https://basic-tutorials.com/reviews/gadget-reviews/myfirst-fone-s3-and-r2-test-good-smartwatches-for-children/ ·
https://myfirsttech.zendesk.com/hc/en-us/articles/35595482723737-Type-of-SIM ·
https://shop.myfirst.tech/products/myfirst-fone-r2

**Assessment.** When a vendor publishes a band list with the regions swapped, the band list is
not evidence. Combined with 605–650 mAh, measured 8–16 h runtime, and the R2's eSIM-only design
against an unverified RO wearable-eSIM situation — **reject unless myFirst supplies a signed
spec sheet for the EU SKU.**

---

### 2.11 SaveFamily (Iconic+, Slim 4G, SaveWatch Plus 2) — no radio data published

| Field | Value |
|---|---|
| LTE bands | **UNKNOWN** — not published anywhere, including SaveFamily's own technical-characteristics support article |
| Network | Iconic+ listed as "4G, 3G, H+" — the "3G/H+" framing is a warning sign in a market with no 3G |
| VoLTE | **UNKNOWN** |
| Chipset | **UNKNOWN** (Plus 2 claims "1.5 GHz quad-core") |
| Positioning | GPS + **Wi-Fi** + LBS |
| Battery | Iconic+ **1000 mAh**; Slim 4G 550 mAh |

Sources: https://soporte.savefamilygps.com/hc/es/articles/14933606097047-Caracteristicas-T%C3%A9cnicas ·
https://savefamilygps.com/collections/gps-infantil-kids

**Assessment.** 1000 mAh on the Iconic+ is the best battery in the sweep and it has Wi-Fi
positioning, so it is worth a direct query to the vendor — but with zero published band or VoLTE
data it cannot be recommended on radio grounds. Ask for the band list and the CE/RED declaration.

---

### 2.12 SoyMomo Space 4G — no radio data published

LTE bands **UNKNOWN**; VoLTE **UNKNOWN**; chipset **UNKNOWN**. Positioning GPS + A-GPS + LBS +
Wi-Fi. Battery quoted as 1000 mAh in one listing and 650 mAh / "24 h use, 50 h standby" in
another; 1 GB + 8 GB, 1.8" screen, IP67, nano-SIM.
Sources: https://www.pccomponentes.com/soymomo-space-4g-smartwatch-para-ninos-negro ·
https://compramania.com/soymomo-space-4g/

**Assessment.** Same verdict as SaveFamily: plausible device, unusable evidence. Do not buy
without a band list.

---

### 2.13 TCL MOVETIME MT46 — good positioning, no bands, weak IP rating

LTE bands **UNKNOWN**; VoLTE **UNKNOWN**; chipset **UNKNOWN**. Positioning **GPS + BeiDou +
A-GPS + GLONASS + Wi-Fi-assisted + base station** (a genuinely multi-layer stack). 256 MB +
512 MB, nano-SIM, **680 mAh**, "2 days working / 6.5 days standby", **IP65 only**, SAR 0.88 W/kg.
Sources: https://www.tcl.com/global/en/watches/mt46 ·
https://www.swisscom.ch/en/residential/products/smartwatches/details.html/tcl-mt-46-watch-11068065

**Assessment.** Superseded by the MT48. IP65 is the wrong rating for a 7-year-old.

---

## PART 3 — REJECT ON RADIO GROUNDS

Each entry gives the specific technical reason, not a general impression.

| Device / class | Reject reason |
|---|---|
| **Any 2G-only "GPS watch"** (original Pingonaut Panda class, Wonlex Q-series, most sub-EUR 60 Amazon/eMAG listings) | Voice, data and location upload all ride 2G. Vodafone RO's 2G is at or past end-of-life per multiple aggregators; Orange/Digi 2G has no committed lifetime. The original Pingonaut Panda explicitly states *"For all communication functions, the mobile network (2G) is used"* — https://www.smartwatch-im-praxistest.de/pingponaut-panda . Buying 2G in Romania in 2026 is buying a dead device. |
| **Any watch whose voice path is LTE-data + 3G CSFB** (spec sheets listing WCDMA B1/B8 but not VoLTE) | 3G is off at all four historical RO networks; the only surviving 3G is Digi's reserved slice in the Bucharest metro (https://hotnews.ro/nchiderea-retelei-3g-a-orange-nu-este-o-premiera-n-romnia-care-este-singurul-loc-unde-rcsrds-mai-permite-vechea-tehnologie-si-telekom-mobile-a-renuntat-la-3g-21264). CSFB to 3G cannot succeed. The device silently becomes "data works, calls fail". |
| **Wonlex KT26 (and any KT-series SKU not confirmed to carry the B20 option)** | OEM spec lists FDD B1/B2/B3/B5/B7/B8 with **no B20**; B20 is documented as an *optional* build on the sibling KT26S. On Orange this leaves zero sub-1 GHz LTE — worst-case indoor school coverage. https://www.iwonlex.net/products/wonlex-round-4g-video-call-gps-smartwatch-kt26/ · https://www.iwonlex.net/products/wonlex-2023-newest-android-4g-lte-round-gps-kids-videocall-kids-smartwatch-kt26s/ |
| **Any white-label marketplace "4G kids watch" whose band list comes only from the listing** | Same platform, same photos, different RF build; B20 is a purchase-order option at the ODM. Without a CE/RED DoC or RF test report for that SKU the band claim is worthless. |
| **myFirst Fone S3 / S3+** | Published EU and US band lists are transposed (the "EU" list is the North American set; the "US" list is B1/B8); manufacturer page publishes no bands at all. Plus 650 mAh and measured 8–16 h. Unverifiable radio + fails the one-day battery bar. |
| **myFirst Fone R2** | eSIM-only (https://myfirsttech.zendesk.com/hc/en-us/articles/35595482723737-Type-of-SIM) and RO wearable-eSIM provisioning is **UNKNOWN/unverified**. 605 mAh. |
| **Fitbit Ace LTE (Google)** | eSIM activated during setup and bound to Google's **Ace Pass** plan, a US-market service; no evidence of Romanian availability. https://support.google.com/fitbitacelte/answer/14949595 · https://store.google.com/us/product/fitbit_ace_lte . No RO carrier path = no connectivity. |
| **Garmin Bounce / Bounce 2** | LTE sold as a Garmin-operated subscription with a per-country coverage list; a US unit *"won't work on LTE in Europe"*. https://www.garmin.com/en-US/connectivity/bounce/bounce2-lte-coverage/ · https://www.dcrainmaker.com/2023/01/garmin-bounce-activity-tracker-lte-in-depth-review.html . Romania not shown as covered; bands and VoLTE undisclosed. |
| **Vodafone Neo** | Bound to Vodafone's own smart-tech SIM/plan ecosystem (UK and selected markets); no evidence of a Romanian channel or of operation on a third-party RO SIM. Bands and VoLTE undisclosed. https://www.vodafone.co.uk/newscentre/press-release/say-hello-to-neo-vodafone-disney-new-smart-kids-watch/ |
| **Elari KidPhone 4GR** | Bands are right (B1/3/7/8/20) but 580 mAh with owner reports of 8–10 h under active use fails the one-school-day requirement; the manufacturer publishes neither bands nor capacity. https://www.tradeinn.com/kidinn/en/elari-kidphone-4gr-smartwatch/139880660/p |
| **imoo Watch Phone Z6** | Snapdragon Wear 2100 generation; band list and VoLTE not published for this model, unlike the Z7. Superseded. |
| **Anything advertising B28A / B38–B41 as its "European" coverage story** | 700 MHz in Romania is deployed as **5G NR n28**, not LTE B28; 2600 TDD (B38) exists only at Digi as capacity. These bands contribute nothing here. https://www.spectrum-tracker.com/Romania |
| **TCL MOVETIME MT46** (soft reject) | IP65 only — splash-resistant, not immersion-resistant; unsuitable for a 7-year-old. Bands and VoLTE undisclosed. Superseded by MT48. |

---

## PART 4 — SHORTLIST AND THE ONE TEST THAT DECIDES IT

**Technically qualified, in order:**

1. **imoo Watch Phone Z7** — B1/B3/B8/**B20**, VoLTE stated, UWS6131E, GPS+GLONASS+BeiDou+Galileo+QZSS+Wi-Fi+LBS, 740 mAh. Best radio + best positioning. Open: EU channel, app/GDPR posture.
2. **TCL MOVETIME MT48** — VoLTE stated, **L1+L5 dual-band GNSS**, 900 mAh / 2.5 days, IP68+2ATM, ~EUR 150, on sale in DE/UK/ES/IT/FR since Oct 2025. Open: **band list not published — must be obtained.**
3. **Anio 6** — the only device with a genuine manufacturer datasheet: B20/B8/B3/B1/B7, VoLTE, GPS+Galileo+BeiDou, Wi-Fi positioning, UNISOC W307, IP68. Open: **595 mAh / 20–32 h is the weak point**; no camera.
4. **Xplora X6Play (EU SKU)** — EU bands B1/3/7/8/20 per Xplora support, 880–900 mAh. Open: **VoLTE unstated**; chipset conflict between two hardware revisions sold under one name; GPS+Wi-Fi+LBS only.
5. **TCL MT42 / Family Watch 2** — published B1/3/7/8/20, SL8521E, 850 mAh, but VoLTE unstated and **IP65**. Fallback only.

**The decisive test, which no datasheet can substitute for.** Because Romanian operators
provision VoLTE per IMEI/TAC and no kids' watch appears on any RO operator's VoLTE list, buy
from a retailer with a no-questions return window, insert the intended SIM, and verify **an
outgoing and an incoming voice call while the watch is registered on LTE** (not 2G) before the
window closes. Prefer an **Orange or Digi** SIM over Vodafone: both still run 2G, so a VoLTE
provisioning failure degrades to 2G voice rather than to silence — Vodafone has stated that
where its 2G is absent, non-VoLTE devices simply cannot call.

**Secondary test for the actual requirement ("is my kid at school?").** Indoor accuracy is a
Wi-Fi-positioning problem. Every shortlisted device has Wi-Fi positioning, but its quality
depends on the vendor's Wi-Fi location database coverage in Romania, which no vendor documents.
Validate inside the school building, not in the garden.

---

## OPEN ITEMS I COULD NOT CLOSE

- **eSIM for wearables in Romania** — whether any RO operator provisions a wearable/companion
  eSIM profile, and whether third-party watches can use it. UNKNOWN. Blocks Fitbit Ace LTE,
  myFirst R2, and possibly some Xplora SKUs.
- **Vodafone RO 2G end date** — no primary source; aggregators contradict each other
  (Dec 2025 estimated vs "not communicated").
- **Vodafone RO 3G closure date** — one aggregator says closed 24 Mar 2026; Vodafone's own
  communication (Mar 2025) describes migration without a date.
- **TCL MT48 LTE band list** — not published by TCL. Highest-value single unknown in this report.
- **VoLTE status for Xplora X6Play / XGO3 and TCL MT42 / MT46** — unstated by the manufacturers.
- **Which physical hardware revision ships as "Xplora X6Play"** in EU retail today (Qualcomm
  Wear 2500 vs UNISOC W377), and whether both carry B20.
- **LTE category (Cat-1 vs Cat-4)** for most devices — only the Wonlex SL8521E platform states
  it (Cat-4). Not decision-relevant, but noted for completeness.
- **RO prepaid SIM identity-registration rules** — deliberately not asserted; unverified.
