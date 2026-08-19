# imoo Watch Phone Z7

```yaml
---
model: imoo Watch Phone Z7
brand: imoo (BBK Electronics, Guangdong CN)
release_year: 2024              # India press coverage Apr 2024; Europe (UK+DE) June 2024
still_sold: yes                 # imoo EU store live at EUR 186.15 and eMAG "in stoc" on 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status: likely               # UPGRADED from unknown 2026-08-19: first-hand +40 registration
                                # SUCCEEDED (this research) — account created, straight to the
                                # pair-watch screen; NO SMS challenge was presented (corrected
                                # same day). See "RO registration test".
ro_evidence_tier: 1             # was 4. First-hand dated +40 account creation (this research,
                                # 2026-08-19) + tier 4 (OVOLT Romania on eMAG, RO warranty)
                                # + tier 2 (app live in RO Play and RO App Store, updated Jul 2026).
                                # The earlier dated RO-storefront failure (13 Jul 2025, no SMS
                                # code) is now superseded on the registration question.
ro_killer: n/a                  # not "fails" -- but see "Does it work in Romania?"; the single
                                # dated RO account-flow report is negative

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands: [B1, B3, B8, B20, B34, B38, B39, B40, B41]   # B1/B3/B8/B20 are FDD; B34/38/39/40/41 are TDD
band_b20: true
band_b28: false
volte: true                     # imoo spec table, verbatim: "VoLTE: Supported"
voice_fallback: 2g-csfb         # GSM 900/1800 present in the radio; Orange and Digi still run 2G
modem_chipset: UWS6131E (UNISOC) # imoo's own spec table. Two reviews say "Spreadtrum W317" -- see Network & bands

# --- Positioning (the #1 criterion) ---
positioning: [GPS, GLONASS, BeiDou, Galileo, QZSS, WiFi, LBS, Barometer]
wifi_positioning: true
update_interval_min: 60         # background auto-report is hourly; parent-initiated locate is
                                # immediate. No user-settable interval is published.
                                # Source: imoo EU Data Act disclosure v1.0, 2025-10-29

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah: 740
battery_claimed_h: 24-48        # imoo's OWN Amazon Z7 listings, live 2026-08-19: "1 to 2 days of
                                # dependable power under moderate daily use" (UK B0CXSSLDW5),
                                # "Laufzeit von 1 bis 2 Tagen" (DE B0D49DD7J4), "autonomia de 1 a
                                # 2 dias" (ES B0CXSTW4BP). NOT on the spec sheet and NOT on imoo's
                                # own EU store, which still shows 740 mAh and no runtime.
                                # Caveat: "1-2 days" is imoo's house number -- the same string is
                                # in its Z1 and Z3 listing titles. The 2020-09-09 support FAQ
                                # ("one day" / 3 days standby) is brand-wide and PREDATES the Z7;
                                # it is NOT a Z7 claim. See "Battery evidence sweep (2026-08-19)".
battery_observed_h: 24          # Notebookcheck DE, 04.04.2025: full day worn, one short call,
                                # some photos -> 12% left after 24 h. Still the only measurement
                                # with both a stated window and a stated end-state.
                                # ~20 dated Z7-verified owner reports now exist; the best of them
                                # (Breogan, Amazon.es, 2025-01-06, Style Name: Z7) is "charged
                                # every night at 50% battery" -> ~50-65% left after a 9.5 h school
                                # day. Owner-reported "2 days" figures are confirmed BY OWNERS to
                                # include the factory overnight power-off. NOT a tracking figure:
                                # no source in any language states a tracking interval.

# --- App & service ---
app_name: imoo Watch Phone (com.imoo.watch.global / iOS com.okii.callwatch.i)
app_android_min: UNKNOWN
app_ro_playstore: true          # also live in the RO App Store, verified 2026-08-19
app_last_update: 2026-07        # Android 2026-07-21; iOS 9.36.70 dated 27 July
data_region: UNKNOWN            # imoo names no data-centre jurisdiction in any document found
sim: nanoSIM                    # manual: "supports Standard Nano-SIM card only"
water_rating: ISO 22810:2010 to 20 m (marketed as IPX8)
weight_g: 65                    # closed 2026-08-19 per §A4: WhatGadget + PapasVlog independently give 65 g (imoo publishes only dimensions, 57.9 x 41.5 x 15.2 mm)
camera: true                    # 2 MP front + 5 MP rear, flip mechanism
games: true                     # watch has an App Center; imoo app offers "Apps Restrictions"
extras_disableable: partial     # Class Mode + per-app restrictions exist; a permanent
                                # camera-off and a permanent friend-adding-off are **unverified**
price_display_eur: "€186.15"      # normalized for the site tile; picked from the price fields below
price_display_ron: "1,114.56 lei"
price_eur: 186.15               # imoo EU store, from EUR 219.00, live 2026-08-19
buy_from: imoo EU store (imoostore.com/eu, ships to Romania) | eMAG.ro via marketplace seller OVOLT Romania
price_ro_eur: ~218              # 1,114.56 RON on eMAG; EUR conversion approximate, FX rate not sourced
---
```

## Verdict

Suits a parent who wants the best positioning hardware and the most complete band list at this
price, and who will treat nightly charging as non-negotiable. The main risk is not the radio —
it is that imoo's own supported-country page excludes Romania while its shop ships here, and the
only dated first-hand report from the Romanian App Store storefront is a **registration failure**.
It clears the radio floor and the positioning floor; it clears the battery floor by roughly a
day with no margin; whether it clears the Romania floor is **unverified** and must be tested
before the return window closes.

## Does it work in Romania?

**What is established.**

- **Bands fit (tier 5, necessary not sufficient).** imoo's own EU spec table for the Z7 states
  `4G FDD-LTE B1/B3/B8/B20  4G TD-LTE B34/B38/B39/B40/B41  3G WCDMA B1/B8  2G GSM900/1800MHz`
  (https://www.imoo.com/eu/products/z7, accessed 2026-08-19). B20 and B3 are both present, which
  is what Romania actually needs.
- **imoo's EU store ships to Romania (tier 1, partial).** The shipping policy lists, verbatim:
  *"Ireland, Spain, Germany, Denmark, France, Netherlands, Belgium, Greece, Italy, Portugal,
  **Romania**, Slovenia, Sweden, Poland, Czech Republic, Luxembourg, Slovakia, Hungary,
  Lithuania, Bulgaria."* Free standard shipping, 3–7 business days
  (https://www.imoostore.com/eu/pages/shipping-policy, accessed 2026-08-19).
  **Shipping is not service.** Do not read this as country support.
- **imoo's official supported-country page excludes Romania.** The country/region selector lists
  only Singapore, Australia, Malaysia, Indonesia, Thailand, Vietnam, India, Europe/English,
  Germany, United Kingdom, France, Italy, Ireland, Spain, Poland, United States. Romania is not
  there (https://www.imoo.com/eu/countrys, accessed 2026-08-19). This is the same page structure
  that made Xplora a documented failure in this project.
- **imoo's carrier list names no Romanian operator.** The Z7 product page lists only
  *"United Kingdom: O2/Vodafone; Germany: Telecom/O2/Vodafone; Spain: MOVISTAR/Vodafone/ORANGE;
  Poland: Play/Orange/T-Mobile"* (accessed 2026-08-19). The store page for the same product lists
  a slightly different UK set (*"O2/EE/Vodafone/3"*), which tells you these lists are maintained
  loosely. Absence of Romania here is weak evidence of anything; absence of Romania on the
  country page is stronger.
- **App is live in both Romanian storefronts (tier 2).** `com.imoo.watch.global`, developer
  PT IMOOLINK GLOBAL TRADING, 1M+ installs, last updated 2026-07-21 in the RO Play storefront;
  iOS build 9.36.70 dated 27 July is live in the RO App Store
  (https://apps.apple.com/ro/app/imoo-watch-phone/id1057845227, accessed 2026-08-19).
  **Romanian is not among the app's supported languages.**
- **A Romanian retail channel with a Romanian warranty entity exists (tier 4).** eMAG lists the
  Z7 at **1,114.56 RON** (from 1,244.24 RON), *"Vândut și livrat de: OVOLT România"*, in stock,
  24-month warranty for consumers, 14-day return
  (https://www.emag.ro/ceas-inteligent-imoo-z7-3-3-cm-1-3-240-x-240-px-wi-fi-gps-roz-57-9x41-5x1-52-cm-act-260b-wlononwcrpx35/pd/DLXDK83BM/,
  accessed 2026-08-19). This is a **marketplace** seller, not eMAG first-party — weaker than the
  1P listings imoo holds for the Z1/Z3/X10. **Zero reviews, zero questions on the listing.**

**What is NOT established, and this is the point.**

**No dated report of a Romanian user successfully registering an imoo account was found.** The
search covered the RO Play storefront, the RO App Store storefront, eMAG, and Romanian retail.
What was found instead, in the Romanian App Store storefront (overall **2.5 / 5 from 4 ratings**),
is two 1-star reviews, both failures. Both are written in English by users in the RO storefront;
the reviewers' country is inferred from the storefront and the names, so treat it as strong but
not conclusive:

> **Vlad Sabau.ro**, RO App Store, **13 July 2025**, 1★ — *"Can not login with the phone number
> because o do not get the sms confirmation code."*
> (Original is in English. This is the exact failure mode this project screens for: the account
> flow, not the radio.)

> **Serban12345**, RO App Store, **20 May 2025**, 1★ — *"Very poor signal, loses time zone and
> connectivity most of the time. Cannot make a normal, nor a video call. GPS also loses
> connectivity."*

The time-zone symptom recurs independently: a Romanian 3★ Play Store review dated **2026-07-13**
reads *"slabă cu locația, și tot apare alt fus orar deși este setat corect nu se sincronizează,
lam resetat tot și app, nu merge."* — *"poor with the location, and a different time zone keeps
appearing even though it is set correctly, it doesn't sync, I reset everything and the app, it
doesn't work."* (Romania, 2026-07-13, recorded in this project's `.discovery/lens-5-romania.md`.)
**Two independent Romanian reports of the same time-zone desync** is a pattern worth naming: it
is what a device provisioned against a region profile that does not include Romania tends to do.
That is an interpretation, not a proven cause.

Against that, the one piece of positive Romanian evidence in the corpus is for a **different
model**: an eMAG reviewer of the imoo **X10** (Popa Aurel, Romania, **13 Aug 2026**, 1★ overall)
wrote *"Când suni cu video semnalul foarte slab se întrerupe mereu. Când suni normal este ok."* —
*"When you make a video call the signal is very weak and it constantly drops. When you call
normally it is OK."* Normal voice working on a Romanian network on an imoo device is meaningful,
but it is the X10, not the Z7, and it is one report.

**Conclusion: `unknown`, and the unknown is on the vendor's side of the line.** The radio is
fine. The shop ships here. The app is in the storefront. What is missing is any evidence that a
Romanian phone number can complete imoo's registration — and the one dated attempt found says it
could not.

## Pre-purchase test

1. Install **imoo Watch Phone** from the **Romanian** Play storefront (`com.imoo.watch.global`)
   or the RO App Store, on the phone that will actually be the parent device.
2. Attempt account registration with the **+40** number you intend to use, **before paying for
   anything**. The specific thing to watch for is whether the **SMS confirmation code arrives** —
   that is the documented failure point (RO App Store, 13 Jul 2025). If no code arrives within a
   few minutes, retry on a different Romanian operator before concluding anything; Romanian A2P
   SMS filtering is a plausible alternative explanation and it is operator-specific.
   *(UPDATE 2026-08-19: the flow observed first-hand presented no SMS step at all — account
   creation went straight to the pair-watch screen. Kept for the case imoo re-enables it.)*
3. If registration succeeds, note it — that single fact would move this model from `unknown` to
   `verified` and is currently the highest-value missing datapoint in this whole research set.

**Return windows.** The eMAG marketplace listing (OVOLT România) states **14 days** return and a
24-month consumer warranty — this is EU distance-selling minimum, *not* eMAG's 30-day 1P
guarantee, because the seller is a marketplace vendor. The imoo EU store is also 14 days under
distance selling. Either way an `unknown` stays recoverable for two weeks, so run the week-one
checks immediately, not eventually.

**Week one, on the actual SIM:** place an **outgoing and an incoming voice call while the watch
is registered on LTE**, and check the reported location **inside the school building**. Prefer an
**Orange or Digi** SIM: both still run 2G, so if VoLTE is not provisioned for this IMEI/TAC the
watch degrades to 2G voice rather than to silence.

## Positioning quality in real use

**On paper this is the most complete positioning stack in the entire candidate field.** imoo's
own spec table lists, verbatim: *"Barometer, GPS, GLONASS, BDS, Galileo, QZSS, WiFi, LBS"*
(https://www.imoo.com/eu/products/z7, accessed 2026-08-19). Five GNSS constellations plus Wi-Fi
positioning plus cell-tower LBS plus a barometer. Only the TCL MT48 (dual-band L1+L5) has a
hardware answer to a problem the Z7 does not address — multipath in urban canyons — and the MT48
has one constellation family and no published bands.

**How often it actually reports.** This is the most useful thing found, and it comes from imoo's
own **EU Data Act disclosure**, v1.0 dated **2025-10-29**
(https://static-res-www.imoo.com/EU/files/Data_Act--imoo_Watch_Phone-V1.0_2025.10.29.pdf,
accessed 2026-08-19). Verbatim, on the Historical Track data type:

> *"1. The user initiates the positioning proactively, with a single data of approximately 1KB.
> 2. Historical trajectory, GPS data is collected every two seconds, with a single time of about
> 52 bytes. Based on the user's ability to effectively collect GPS data for 8 hours per day, the
> daily traffic report is calculated to be approximately 731.25 KB/day."*

and:

> *"1. Only Z7 is supported overseas  2. Users need to open 'Location' -> 'Historical Trajectory'
> in the mobile app  3. The watch end will report once every 1H; If the user initiates
> positioning, it will be reported immediately"*

Three things follow, and they matter more than the constellation count:

- **The background reporting interval is one hour.** There is no published user-settable 1-minute
  or 5-minute tracking interval. If you want to know where the child is *now*, you tap and the
  watch fixes on demand. If you want a passive breadcrumb trail, it is hourly unless Historical
  Trajectory is enabled, in which case the watch samples GPS every 2 seconds while that mode is
  on and uploads hourly.
- **Historical Trajectory is Z7-only outside China.** imoo says so in its own words. This is the
  Z7's genuine differentiator over the Z1/Z3 in the EU line.
- **Location is gated on an active SIM.** Notebookcheck, Germany, 04.04.2025:
  *"Das Tracking funktioniert allerdings nur, wenn eine aktive SIM-Karte eingelegt ist."* —
  *"Tracking only works if an active SIM card is inserted."* There is no Wi-Fi-only tracking mode.

**Real-world accuracy, and this is thin.** No dated, quantified indoor accuracy test for the Z7
was found from any independent source.

- MightyGadget (UK, **18 Aug 2024**, James Smythe): *"GPS tracking is usually accurate, but it
  can sometimes take a while to get a fix, especially when indoors or in urban areas with tall
  buildings."* — an honest but unquantified statement, and the only independent comment on indoor
  behaviour located.
- Notebookcheck (Germany, **04.04.2025**, Benedikt Winkel) tested the watch but published no
  accuracy figure and **no GPX export is available**, which is why no reviewer has produced a
  track comparison.
- Several pages returned by search that quote precise-sounding figures ("10–15 metres urban
  accuracy") are AI-generated buying-guide content on `alibaba.com` subdomains. **They are not
  evidence and are not used here.**

**Does it silently fall back to cell/Wi-Fi and misreport?** **UNKNOWN for the Z7 specifically.**
imoo lists Wi-Fi and LBS alongside GNSS but does not say how the fix is labelled in the app or
whether an accuracy radius is shown. The category-wide failure mode is well documented across
five brands in this project's community sweep (a child shown "in Venezuela", "in another state",
"300 m off"), and the closest imoo datapoint is the Z6, where a US review reported location
*"sometimes… will be in another state"* when falling back to Wi-Fi positioning
(AndroidCentral, https://www.androidcentral.com/imoo-watch-phone-z6-review). **That is the Z6,
not the Z7, and one report.** Treat "does the app distinguish a GNSS fix from an LBS fix" as an
open question to answer in week one, inside the school.

The two dated Romanian reports both complain about location: *"slabă cu locația"* (2026-07-13)
and *"GPS also loses connectivity"* (2025-05-20). Neither is Z7-specific — both are app-level
reviews — but they are the only Romanian signal that exists and it is not reassuring.

## Battery in real use

**Claimed: 1–2 days — but only where imoo sells, never where it specs.** *(Corrected 2026-08-19;
the earlier text here read "Claimed: nothing." That was wrong — see* **Battery evidence sweep
(2026-08-19)** *at the end of this file.)* imoo publishes **no runtime figure** on its EU product
page, its EU store page, the spec table, the manual or the press release — all re-verified
2026-08-19. It **does** publish one on its own Amazon listings, where it is the seller: *"Powered by
a 740mAh battery, it provides **1 to 2 days** of dependable power under moderate daily use"*
(Amazon.co.uk B0CXSSLDW5, sold by IMOO Direct), *"eine **Laufzeit von 1 bis 2 Tagen**"*
(Amazon.de B0D49DD7J4, imoo-Official), *"una **autonomía de 1 a 2 días** con un uso moderado"*
(Amazon.es B0CXSTW4BP). Treat it as a claim, not a measurement: the identical string appears in
imoo's **Z1 and Z3** listing titles, so it is a house number rather than a Z7 result.

**Observed: one hard lab number, and it is 24 hours — plus, since 2026-08-19, about twenty dated
owner reports and one owner percentage.** The owner evidence is tabulated in **Battery evidence
sweep (2026-08-19)** at the end of this file; the short version is that the best single owner
datapoint (Breogán, Amazon.es, 2025-01-06, verified purchase, `Style Name: Z7`) is *"lo cargan todas
las noches con un 50% de batería"* — *"they charge it every night at 50% battery"* — which implies
roughly **50–65% left at the end of a 9.5 h school day**.

> Notebookcheck, Germany, **04.04.2025**, Benedikt Winkel:
> *"Wird die Uhr ganztägig getragen - mit einem kurzen Anruf und einigen Bildern - hat die
> Smartwatch nach 24 Stunden noch 12 Prozent Akkukapazität."*
> — *"If the watch is worn all day — with one short call and a few photos — the smartwatch still
> has 12 percent battery capacity after 24 hours."*
> *"In der Praxis muss die Z7 täglich geladen werden."* — *"In practice the Z7 must be charged
> daily."*
> *"Nachts schaltet sich die Smartwatch ab Werk geplant ab und startet gegen morgen neu."*
> — *"At night the smartwatch shuts down on a factory-set schedule and restarts towards morning."*

That last sentence is the one that reconciles everything else. **The factory default powers the
watch off overnight.** Any "days" figure that includes nights is counting hours in which the
watch is off and untrackable.

**Reviewer claims of "almost three days", and what they are worth.**

- WhatGadget (UK, undated on the page; indexed 2024): *"With a full charge and standard usage,
  expect this smartwatch to deliver almost three days of charge."* **"Standard usage" is not
  defined.** (Page returns HTTP 403 to direct fetch; text retrieved via the search index.)
- GizNext (India, **23 Apr 2024**, Sandeep Sarkar): *"With a full charge and standard usage,
  expect this smartwatch to deliver almost three days of charge."* — **word-for-word identical to
  WhatGadget.** These are not two independent observations; one of them, or both, is derived from
  shared launch material. Count this as **one unattributed claim, not two**.
- MightyGadget (UK, **18 Aug 2024**): *"The watch can last about 2-3 days on a single charge"*
  with typical use, and *"heavy use of features like video calls can significantly reduce battery
  life."* Charging: *"takes about 2 hours to fully charge from empty."* This one at least states
  a usage profile in prose, but gives no measurement.

**Retailer claims, attributed and not adopted.** The German shop noomii.de (retailer page,
09 June 2026, selling the Z7 at €269) states *"740 mAh, bis zu 7 Tage"* — *"740 mAh, up to 7
days."* The eMAG listing's spec table states *"autonomie până la 240 de ore"* — *"autonomy up to
240 hours"* (10 days). **Neither figure appears in any imoo document and neither is supported by
any measurement.** They are retailer copy.

**Net.** Plan for **one school day plus an evening**, charge nightly, and treat anything above
that as a bonus. The one measured figure (24 h → 12%) came from a light profile — one short call,
some photos — which is roughly what a 7-year-old's school day looks like. Add video calls, active
Historical Trajectory (GPS sampled every 2 seconds), or a weak-signal school where the modem
hunts, and it will be tighter. The reported figures span 24 h to ~72 h with **no reviewer
publishing the tracking interval or call volume behind the higher numbers**, which is exactly
the pattern this project has seen across the category.

*Updated 2026-08-19.* The owner sweep sharpens this without overturning it. **The school day itself
is comfortable** — the one owner percentage tied to a day-shaped window puts ~50% left at bedtime,
i.e. roughly 50–65% at pick-up. **The multi-day claims are now confirmed, by owners, to be counting
hours the watch was switched off**: *"das automatische Ausschalten der Uhr über Nacht verlängert die
Akkulaufzeit deutlich"* (DirkH, DE, 18 May 2025) and *"Battery lasts about 2 days and you can set it
to turn off overnight"* (IE, 23 Jan 2026). Two new risks were found and neither is in the numbers
above: an owner reporting the watch **powering itself off at ~50%** (DE, 2★, 16 Jun 2026) and one
reporting a **dead battery at ~11 months** (DE, 2★, 3 Nov 2025). See **Battery evidence sweep
(2026-08-19)**.

## Network & bands

**Primary source, verbatim** (https://www.imoo.com/eu/products/z7, accessed 2026-08-19):

> *"4G FDD-LTE B1/B3/B8/B20   4G TD-LTE B34/B38/B39/B40/B41   3G WCDMA B1/B8   2G GSM900/1800MHz"*
> *"VoLTE: Supported"*

Corroborated independently by the German retailer noomii.de (09 Jun 2026): *"4G LTE
B1/B3/B8/B20 + TD-LTE B38/B39/B40/B41"*, and by the manual, which states the watch
*"supports Standard Nano-SIM card only"* and lists VoLTE support
(https://www.manualslib.com/manual/3643036/Imoo-Watch-Phone-Z7.html, accessed 2026-08-19).

**Fit against Romania.**

| Band | Present | What it does here |
|---|---|---|
| **B20** (800) | **yes** | The one that matters. Orange's only sub-1 GHz LTE band; also held by Vodafone, Digi and the ex-Telekom block (spectrum-tracker.com/Romania, last updated 09.10.2025). Indoor at school, cell edge, concrete. |
| **B3** (1800) | **yes** | The national workhorse layer on every Romanian operator. |
| **B1** (2100) | yes | Secondary urban capacity. |
| **B8** (900) | yes | Sub-1 GHz on Vodafone and Digi (both hold 900 MHz per spectrum-tracker). A second low band on those two networks. |
| **B38/B40** (2600/2300 TDD) | yes | Romania's 2600 TDD block (45 + 5 MHz per spectrum-tracker) sits with Digi as capacity. So on Digi the Z7 *does* have a 2600 MHz path — just the TDD one. |
| **B7** (2600 FDD) | **NO** | See below. |
| **B28** (700) | **NO** | Costs nothing in Romania: 700 MHz here is deployed as **5G NR n28**, not LTE B28 (spectrum-tracker.com/Romania). A spec sheet advertising B28 buys nothing in this market. |

**What missing B7 actually costs — and it is less than it looks.**

B7 is a **capacity layer, not a coverage layer**. 2600 MHz propagates poorly and penetrates
buildings badly; operators deploy it on dense urban macro sites and small cells to add throughput
on top of B3 and B20, not to extend reach. A device without B7 does not lose coverage anywhere —
every B7 site is co-sited with B3, and B3 is the anchor.

The spectrum-tracker table for Romania shows B7 FDD split into four blocks (10 / 20 / 20 / 20 MHz
paired), i.e. it is genuinely licensed and in use across the market; per-operator assignment is
behind that site's login and is therefore **UNKNOWN** here. So yes, the Z7 is locked out of a
real, deployed layer.

**For this device it is close to immaterial, for three reasons:**

1. **The traffic is trivial.** imoo's own Data Act disclosure puts historical-track upload at
   **~731 KB/day** and a single on-demand fix at **~1 KB**. VoLTE voice is tens of kbps. Nothing
   about this workload benefits from a capacity carrier.
2. **Wearables sit on low LTE categories.** A UNISOC UWS6131E wearable modem is not going to
   carrier-aggregate B3+B7 for a 1 KB location ping. The throughput ceiling B7 would raise is one
   the watch never approaches.
3. **The congestion argument is second-order.** In a saturated urban cell the network cannot
   offload this device onto B7, so it competes on B3/B20 with everyone else. At 731 KB/day, it
   loses essentially nothing to that competition — and if the cell is that congested, a VoLTE
   call is the thing at risk, and VoLTE is carried on the anchor band anyway.

**Do not overstate this.** The Z7's band list is Romania-adequate. The imoo **Z3** does carry
B7 and B28 on top (B1/3/5/7/8/20/28), so within imoo's own range the Z7 is the *narrower* radio —
but the difference buys nothing in Romania. If you are choosing between Z3 and Z7, choose on
positioning (Z7 has 5 constellations and Historical Trajectory; Z3 has GPS+GLONASS+QZSS) and on
price, not on B7.

**VoLTE: stated by the vendor, unproven on a Romanian network.** imoo's spec table says
*"VoLTE: Supported"* — that is a device capability claim from a primary source and it is
credible. It is **not** the same claim as "VoLTE works on a Romanian SIM". Romanian operators
provision VoLTE per device IMEI/TAC and no kids' watch appears on any Romanian operator's VoLTE
whitelist. **If VoLTE is not provisioned, voice falls back to 2G** — the watch has GSM 900/1800,
and Orange and Digi still run 2G, so voice degrades rather than dies. Vodafone Romania's own 2025
wording is that non-VoLTE devices route to 2G and where there is no 2G *"making calls will become
impossible"*. **Buy an Orange or Digi SIM.** No Romanian operator has published a 2G shutdown
date, so this fallback has an indefinite but not permanent life.

**Chipset conflict, noted not resolved.** imoo's spec table says **UWS6131E**. WhatGadget and
GizNext both say *"Spreadtrum W317"*. The primary source wins here, but the fact that two reviews
carry the same wrong-looking part number is another sign they share a source document.

## Features & what can be disabled

| Feature | Present | Can the parent switch it off? |
|---|---|---|
| Voice calls | yes (VoLTE stated) | Contacts are a parent-managed whitelist. *"Unknown Caller Alert. Only saved contacts can reach the watch"* (imoo app page). |
| Video calls | yes, HD | **UNKNOWN** whether video specifically can be disabled independently of voice. |
| SOS | yes | Not disableable by design; Class Mode is documented to keep emergency contacts reachable. |
| **Camera** (2 MP + 5 MP flip) | yes | **partial / unverified.** Class Mode *"disables most of the watch's functions during school hours"* (MightyGadget, UK, 18 Aug 2024), and the imoo app offers *"Apps Restrictions. Easily manage which apps on the smart watch are accessible or set time limits for usage"*. **No source found states that the Camera can be permanently switched off outside Class Mode.** The Z7 manual sections retrieved cover how to take a photo, not how to forbid it. **If a permanent camera-off is a school requirement for you, this is unverified — ask imoo support in writing before buying.** |
| Games / apps | yes (App Center) | Yes, via "Apps Restrictions" — access and time limits, per imoo's own app page. |
| **Kid-to-kid "add friend"** | yes | **partial / unverified.** The mechanism is physical: children add each other by touching watches together. Notebookcheck (DE, 04.04.2025): children can befriend other imoo users by holding devices together. imoo's marketing for the sibling X10 model claims *"If children haven't met in person, they can't connect, and even then, every contact still needs parent approval via the imoo app"* — **that is imoo's claim, for the X10, and is restated here as a claim, not a fact.** **No source found confirms the parent can disable friend-adding outright on the Z7**, as opposed to approving each request. |
| Class / school mode | yes | Yes, parent-scheduled from the app: *"Parents can set the times of the child's classes"* (iOS App Store description, v9.36.70). |
| **Auto Answer** | yes | Yes — it is off unless the parent turns it on. See Security & privacy; this is the feature to think hardest about. |
| Health monitoring (HR, temp, SpO2) | yes | **UNKNOWN.** |
| Location history (14 days) | yes | Yes — the Data Act disclosure says the user must *"open 'Location' -> 'Historical Trajectory' in the mobile app"*, i.e. it is off by default. |

## Security & privacy

**Known vulnerability research affecting this model or platform: none found — and that is a
meaningful, if incomplete, result.**

The defining research in this category is Vangelis Stykas and Felipe Solferini's Black Hat talk of
**7 August 2026**, which analysed 70+ kids' GPS watches and trackers and found that dozens of
apparently independent brands run on just **three Chinese backends: YiQingTeng (a.k.a. Wonlex /
the SETracker app), NewGPS2012, and SinoTrack**. The flaws found allowed an attacker to locate a
watch, spoof or intercept messages, alter emergency contacts, falsify or disable location, and
**activate microphones or cameras on devices that have them**.
**imoo and BBK are not named in that research**, and imoo does not appear to sit on any of the
three shared backends — it runs its own vertically integrated platform (`okii.com`; see
https://developer.okii.com/docs/en/). That is a genuine structural advantage over the entire
white-label class this project also evaluated. **It is not a clean bill of health**: not being
named in one study is the absence of evidence, not evidence of absence. **No CVE and no published
security research specific to imoo or BBK smartwatches was located.**

The precedent for a *deliberate* covert-listening backdoor in this category is mnemonic's 2020
work on the **Xplora 4** and the **360 Kids Guard**, where an encrypted SMS to the watch triggered
a silent remote snapshot uploaded to the vendor's server with *"zero indication on the watch that
a photo was taken"*, plus `WIRETAP_INCOMING` and `WIRETAP_BY_CALL_BACK` intents. mnemonic's
assessment was blunt: *"This is a functionality that has been created with intent."*
**Neither imoo nor BBK is named in that work either.**

**Does the Z7 have a covert remote-listen capability? Not an advertised one — but read this.**

imoo does not market a "monitor", "baby monitor" or "listen-in" function, and no source found
describes one. What it *does* ship, in its own words on the App Store listing (v9.36.70, seller
PT. IMOOLINK GLOBAL TRADING, accessed 2026-08-19):

> *"With the auto answer function activated through the APP, if the parents call the child and
> there is no answer, the watch will automatically connect after 10 seconds."*

**Functionally, that is a parent-triggered open microphone.** It is not covert in the technical
sense — it is a ringing phone call, so there is a ring and a call screen — but it means a parent
who has enabled it can hear the child's surroundings without the child doing anything, ten
seconds after dialling. Whether the watch gives any visual indication during an auto-answered
call is **UNKNOWN**. It is **off unless the parent enables it**, and it is controlled from the
parent app only — the child cannot revoke it. **Whether the setting can be locked, or restricted
to a primary guardian on a multi-parent account, is unverified.**

Relevant regulatory context, and an argument rather than a proof: **Germany's Bundesnetzagentur
banned children's smartwatches with a listening function in November 2017**, classing them as
prohibited espionage devices under the German Telecommunications Act, ordering sale and possession
stopped and existing units destroyed. imoo launched the Z7 **into Germany in June 2024** and it is
sold there openly by Amazon.de and German specialist retailers. That makes it structurally very
unlikely that the German/EU SKU carries a hidden SMS-triggered wiretap of the Xplora-4 kind.
**This is inference from market presence, not a tested finding.**

**Where the data goes: UNKNOWN, and imoo will not say.**

- imoo publishes an **EU Data Act disclosure**, v1.0 dated **2025-10-29**, covering the X10, Z1,
  Z3 and Z7. It is unusually specific about *what* is collected and for *how long* — and
  completely silent about *where*. The words "server" and "remote server" appear; no country, no
  jurisdiction, no data-centre location, no named legal entity, no EU representative.
- **Retention, verbatim from that document:** chat and SMS content **7 days**; historical track
  **14 days**; health and step data **31 days**; account, device and profile data *"no longer than
  10 years after the data subject ceases using the services"*.
- **Fields it says the platform can hold**, verbatim: *"Kids Info: Nickname, avatar, gender, date
  of birth …, school name, grade, class, home address, home Wi-Fi details, home floor number"*;
  *"Watch's Networks: Wi-Fi name, password, MAC address"*; *"Device Information: … International
  Mobile Equipment Identity (IMEI), Media Access Control (MAC) address …"*. The document annotates
  many of these as "not collected" in current builds — but the schema exists. **The child's school
  name, home address and home Wi-Fi password are in the data model.**
- The **imoo EU store privacy policy** (https://www.imoo.com/eu/privacy-policy) is Shopify
  boilerplate governing the *webshop*, not the watch service. It states *"your information will be
  transferred outside of Europe, including to Canada and the United States"*, contains **no
  section on children's data**, names no controller, gives no address and carries no effective
  date. The **EU terms of service** on the same site name no legal entity and state the governing
  law is *"the laws of UK"* — on an EU-facing store. For a product whose entire proposition is a
  child's location, that is a weak compliance posture on the paperwork, independent of how the
  engineering actually behaves.
- Google Play Data Safety (developer **PT IMOOLINK GLOBAL TRADING**) declares collection of precise
  and approximate location, audio, photos/videos, device IDs, name, email, phone and address;
  *"the developer says this app doesn't share user data with other companies or organizations"*;
  data is encrypted in transit; deletion can be requested.
- **`data_region: UNKNOWN`.** Do not record this as EU. Nothing found supports that.

**One positive signal.** imoo operates a **real coordinated vulnerability disclosure programme** —
`psirt@imoo.com`, PGP key published, stated response within 7 working days, scope covering
*"products under imoo and its affiliated brands"* including smartwatches and digital services
(https://www.imoo.com/eu/responsible-disclosure). Almost nothing else in this category has a
PSIRT at all. It also imposes a strict embargo on researchers until imoo has patched, and there
is no hall of fame or bounty, so it has never been publicly exercised as far as this search could
determine.

## Reality check

- **"5 satellite systems + Wi-Fi + LBS"** means the best positioning *hardware* in the field, and
  a **background report rate of once per hour**. Live position is on demand, not continuous. It
  will not tell you unprompted that the child left the school at 11:40.
- **"14-day location history"** means Historical Trajectory, which is **off by default**, is
  **Z7-only outside China**, and once on samples GPS every 2 seconds and uploads hourly — so it
  costs battery, on a watch that already needs charging every night.
- **"Almost three days" of battery** is one unattributed claim reprinted in two places, with no
  usage profile. The one **measured** figure is **12% left after 24 hours** on a light day —
  and the watch **switches itself off overnight by factory default**, so any multi-day figure is
  partly counting hours the watch was off and the child untrackable. **Two Z7 owners confirm exactly
  this in their own words** (DE 18 May 2025: *"the automatic switching-off of the watch overnight
  extends the battery life significantly"*; IE 23 Jan 2026: *"Battery lasts about 2 days and you can
  set it to turn off overnight"*), so this is no longer an inference.
- **"Up to 7 days" / "240 hours"** are *retailer* copy (noomii.de and eMAG respectively). imoo's own
  number, published only on its own Amazon listings, is **"1 to 2 days … under moderate daily use"** —
  which agrees with the one lab test and contradicts every multi-day claim in the press. (The 7-day
  figure is 168 h, which is imoo's *standby* number, restated as if it were runtime.)
- **"4G"** here genuinely means B1/B3/B8/B20 with VoLTE stated — better than almost anything else
  in this category, which publishes nothing. The missing B7 is a capacity band and costs this
  device close to nothing; the missing B28 costs nothing in Romania at all.
- **"imoo is back in Europe"** (June 2024, UK and Germany) means back in **seven** European
  countries on its own country page. **Romania is not one of them** — while the same company's
  shop will happily ship you one and eMAG will sell you one with a Romanian warranty. Those two
  facts have not been reconciled by imoo and cannot be reconciled by research; only a +40
  registration attempt settles it.

## What users say

**A note on volume:** the Z7 has **no Romanian reviews anywhere** — zero on the eMAG listing, zero
on any Romanian retailer found. Every Romanian datapoint below is a review of the **imoo app**
(model unspecified) or of a **different imoo model**. That is stated on each item rather than
smoothed over.

**Works:**

- **Voice calls work on a Romanian network — on a different imoo model.** Popa Aurel, **Romania,
  13 Aug 2026**, eMAG, imoo **X10**, 1★ overall: *"Când suni cu video semnalul foarte slab se
  întrerupe mereu. Când suni normal este ok."* — *"When you make a video call the signal is very
  weak and it constantly drops. When you call normally it is OK."* **One report, wrong model**,
  but the load-bearing half-sentence in the whole Romanian corpus for this brand.
- **Location tracking and calling are the acknowledged strengths.** testberichte.de aggregate
  score **1.7 (Gut)**, dated **23.04.2025**, drawing on the Notebookcheck test. Stated Stärken:
  *"Ortung und Telefonie ohne Smartphone"* — *"Location tracking and telephony without a
  smartphone"*; *"Messung von Puls und Blutsauerstoff"* — *"Measurement of pulse and blood
  oxygen"*; *"Einfache Bedienung für Kinder"* — *"Simple operation for children"*. Germany.
- **General GPS accuracy adequate outdoors.** MightyGadget, **UK, 18 Aug 2024**: *"GPS tracking is
  usually accurate"*. Same review notes call quality *"generally good, with the speaker providing
  adequate volume for outdoor use"*. One report.
- **A single positive Romanian app review exists**, Play Store RO, **2025-04-22**, 5★:
  *"Excelent"* — *"Excellent"*. One word, no detail, model unknown.

**Fails:**

- **Account registration failed for a Romanian-storefront user.** Vlad Sabau.ro, **RO App Store,
  13 July 2025**, 1★: *"Can not login with the phone number because o do not get the sms
  confirmation code."* (written in English). **One report — but it is the exact failure this
  project screens for, and no counter-report of a successful +40 registration was found.**
- **Signal, calls and GPS all failing for a second Romanian-storefront user.** Serban12345,
  **RO App Store, 20 May 2025**, 1★: *"Very poor signal, loses time zone and connectivity most of
  the time. Cannot make a normal, nor a video call. GPS also loses connectivity."* (English).
  The Romanian App Store storefront rating for the imoo app is **2.5 / 5 from 4 ratings**.
- **Time-zone desync, reported independently twice from Romania.** Play Store RO, **2026-07-13**,
  3★: *"slabă cu locația, și tot apare alt fus orar deși este setat corect nu se sincronizează,
  lam resetat tot și app, nu merge."* — *"poor with the location, and a different time zone keeps
  appearing even though it is set correctly, it doesn't sync, I reset everything and the app, it
  doesn't work."* **Two independent Romanian reports of the same symptom** (this one and
  Serban12345's *"loses time zone"*), which is the strongest recurring Romanian signal found.
- **Daily charging is mandatory.** Notebookcheck, **Germany, 04.04.2025**: *"In der Praxis muss die
  Z7 täglich geladen werden."* — *"In practice the Z7 must be charged daily."* One test, but it is
  the only measurement anyone had published at the time of writing (superseded: Jagat Review's ~34%/day drain test and ~20 owner observations now exist — see the battery evidence sweep).
- **Display and camera are weak.** testberichte.de Schwächen, **23.04.2025**: *"Display mit
  geringer Leuchtkraft"* — *"Display with low brightness"*; *"Schwache Kamera"* — *"Weak camera"*;
  *"Begrenzte Sportfunktionen"* — *"Limited sports functions"*. Germany.
- **Location is dead without a live SIM.** Notebookcheck, **Germany, 04.04.2025**: *"Das Tracking
  funktioniert allerdings nur, wenn eine aktive SIM-Karte eingelegt ist."* — *"Tracking only works
  if an active SIM card is inserted."* Structural, not a defect, but it removes any Wi-Fi-only
  fallback if the SIM is out of credit.
- **Wi-Fi-positioning drift on the previous generation.** AndroidCentral, US, imoo **Z6**:
  location *"sometimes… will be in another state"*, and the watch *"regularly showing offline when
  in areas of strong signals"*. **Different model, one report** — recorded because it is the
  category's defining failure mode and the Z7 shares the Wi-Fi/LBS fallback design.

## Sources

All URLs accessed **2026-08-19** unless otherwise stated.

**Primary — imoo**

- https://www.imoo.com/eu/products/z7 — manufacturer EU spec table. Established the full band list
  (FDD B1/B3/B8/B20; TDD B34/38/39/40/41; WCDMA B1/B8; GSM 900/1800), *"VoLTE: Supported"*, CPU
  UWS6131E, positioning stack *"Barometer, GPS, GLONASS, BDS, Galileo, QZSS, WiFi, LBS"*, 740 mAh
  with **no runtime stated**, 1.3" 240×240, 2 MP + 5 MP, ISO 22810:2010 to 20 m, 128 MB RAM /
  128 MB + 4 GB ROM, dimensions, and the UK/DE/ES/PL-only carrier list.
- https://www.imoo.com/eu/countrys — imoo's official supported-country page. Established that
  **Romania is not listed** (Europe: DE, UK, FR, IT, IE, ES, PL only).
- https://www.imoostore.com/eu/pages/shipping-policy — established that the imoo EU store **ships
  to Romania**, free standard shipping, 3–7 business days.
- https://www.imoostore.com/eu/products/imoo-smartwatch-z7 — established live price **€186.15**
  (from €219.00), 740 mAh, *"VoLTE Supported"*, and a slightly different UK carrier list.
- https://static-res-www.imoo.com/EU/files/Data_Act--imoo_Watch_Phone-V1.0_2025.10.29.pdf —
  **imoo EU Data Act disclosure v1.0, dated 2025-10-29.** The single most useful document found.
  Established: hourly background position reporting, immediate on-demand fix, GPS sampled every
  2 s under Historical Trajectory, ~731 KB/day, *"Only Z7 is supported overseas"* for Historical
  Trajectory, retention (chat 7 d / track 14 d / health 31 d / account 10 y), and the full
  collected-field schema including school name, home address and home Wi-Fi password. **No data
  centre location or jurisdiction is stated anywhere in it.**
- https://www.imoo.com/eu/privacy-policy — established that the EU store privacy policy is generic
  e-commerce boilerplate; *"your information will be transferred outside of Europe, including to
  Canada and the United States"*; no children's-data section, no controller named, no date.
- https://www.imoo.com/eu/terms-of-service — established that no legal entity is named and that
  governing law is stated as *"the laws of UK"*.
- https://www.imoo.com/eu/responsible-disclosure — established imoo runs a PSIRT
  (psirt@imoo.com, PGP, 7 working days, embargo, no bounty).
- https://www.imoo.com/eu/imoo-app and https://www.imoo.com/en/imoo-app — established the parent-app
  feature set: Class Mode, *"Apps Restrictions"*, *"Unknown Caller Alert"*, *"Find My Watch"*,
  14-day journey record. **No camera-specific disable and no add-friend disable is documented.**
- https://uk.imoostore.com/blogs/sim-card/which-operator-should-i-choose — established imoo's SIM
  guidance: nano-SIM, caller ID must be enabled, ≥500 MB data/month recommended. **No VoLTE
  statement, no country list.**
- https://developer.okii.com/docs/en/ — established that imoo runs its own platform (okii), and
  that it publishes **no** server region or data-centre information.
- https://www.prnewswire.co.uk/news-releases/imoo-is-returning-to-europe-after-3-years-with-the-newest-kids-flagship-sports-watch-phone-z7-302189692.html
  — imoo press release, **5 July 2024**. Established the European return (UK + Germany, June 2024)
  after a ~3-year absence, £189 / €219 launch pricing, and imoo's marketing claims (14-day
  location tracking, *"best global navigation satellite systems"*, IPX8 to 20 m, class mode).
  **All claims here are imoo's own.**
- https://www.manualslib.com/manual/3643036/Imoo-Watch-Phone-Z7.html — Z7 manual. Established
  *"supports Standard Nano-SIM card only"*, caller-ID requirement, camera specs, and that GPS
  *"is turned off until the watch is bound"*.
- https://apps.apple.com/us/app/imoo-watch-phone/id1057845227 — App Store listing v9.36.70,
  seller PT. IMOOLINK GLOBAL TRADING, age rating 9+. Established the **Auto Answer** wording
  verbatim and the Class Mode wording.
- https://play.google.com/store/apps/datasafety?id=com.imoo.watch.global — Google Play Data Safety.
  Established collected data types, no third-party sharing claim, transit encryption, deletion
  route, developer identity.

**Romania**

- https://apps.apple.com/ro/app/imoo-watch-phone/id1057845227 and its `?see-all=reviews` page —
  established the app is **live in the RO App Store**, Romanian is **not** a supported language,
  storefront rating **2.5/5 from 4 ratings**, and the two verbatim 1★ reviews (Vlad Sabau.ro
  13 Jul 2025 — SMS code never arrives; Serban12345 20 May 2025 — no calls, GPS drops, time zone).
- https://www.emag.ro/ceas-inteligent-imoo-z7-3-3-cm-1-3-240-x-240-px-wi-fi-gps-roz-57-9x41-5x1-52-cm-act-260b-wlononwcrpx35/pd/DLXDK83BM/
  — established RO price **1,114.56 RON**, seller **OVOLT România** (marketplace, not eMAG 1P),
  in stock, 24-month warranty, **14-day return**, **zero reviews**, and the retailer's
  unsupported *"autonomie până la 240 de ore"* claim.
- https://www.spectrum-tracker.com/Romania (data last updated **09.10.2025**) — established
  Romanian sub-1 GHz holdings (Orange/Vodafone/Digi/ex-Telekom all hold 800 MHz; Vodafone and Digi
  hold 900 MHz; 700 MHz is n28), that **B7 FDD exists in Romania as four blocks of 10/20/20/20 MHz**
  and B38 TDD as 45 + 5 MHz. Per-operator 2600 MHz assignment is behind a login — **UNKNOWN**.

**Independent reviews**

- https://www.notebookcheck.com/Eltern-tracken-ihre-Kinder-imoo-Watch-Phone-Z7-im-Test.969170.0.html
  — Benedikt Winkel, Germany, **04.04.2025** (updated 18.02.2026). **The only measured battery
  figure and the only hands-on test found**: 12% after 24 h light use, daily charging required,
  factory overnight power-off, tracking requires an active SIM, no GPX export, €219 RRP.
- https://www.testberichte.de/p/imoo-tests/watch-phone-z7-testbericht.html — Germany, **23.04.2025**.
  Aggregate score **1.7 (Gut)**; verbatim Stärken and Schwächen.
- https://mightygadget.com/imoo-watch-phone-z7-review/ — James Smythe, UK, **18 Aug 2024**.
  Established the indoor-fix caveat, *"2-3 days"* battery prose, ~2 h charge, UK carrier list,
  Class Mode description, and the statement that friend-adding is restricted to parent-approved
  contacts.
- https://www.giznext.com/news/imoo-watch-phone-z7-smartwatch-review-advanced-health-and-safety-solution-for-your-kids/
  — Sandeep Sarkar, India, **23 Apr 2024**. Source of *"almost three days"* — **word-for-word
  identical to WhatGadget**, hence counted as one claim, not two. Also the "Spreadtrum W317"
  chipset claim that conflicts with imoo's own spec.
- https://www.whatgadget.net/imoo-z7-kids-smartwatch-review/ — UK. The *"almost three days"* claim
  named in the brief. Page returns **HTTP 403** to direct fetch; text retrieved via search index.
  **Undated on the page.**
- https://techbuzzireland.com/2025/04/15/imoo-z7-smart-watch-phone-review/ — Ireland, **15 Apr 2025**.
  **Returned HTTP 403; not read.** Listed so a later pass knows it exists.
- https://noomii.de/blogs/news/imoo-z7-kinder-smartwatch-guide — German **retailer** page,
  **09 June 2026**, €269. Independently corroborates the band list; source of the unsupported
  *"bis zu 7 Tage"* claim. **Promotional, not independent.**
- https://smartwatch-kids.de/imoo-watch-phone-z7/ — Germany, undated. Klassenmodus and
  nano-SIM confirmation; no battery or accuracy data.
- https://www.androidcentral.com/imoo-watch-phone-z6-review — US, imoo **Z6** (previous
  generation). The *"in another state"* Wi-Fi-positioning drift report and *"regularly showing
  offline"*. **Different model.**

**Security research (category context, none naming imoo)**

- https://mlq.ai/news/researchers-show-childrens-gps-watches-can-be-hijacked-across-shared-backends/
  (**HTTP 403 on direct fetch**; summarised via search index) and
  https://tanyagoodin.com/2026/08/children-smartwatch-cybersafety/ (**7 August 2026**) — Black Hat
  2026, Stykas & Solferini, 70+ devices on three Chinese backends (YiQingTeng/Wonlex/SETracker,
  NewGPS2012, SinoTrack); attackers could locate, spoof messages, alter emergency contacts,
  falsify location, and activate microphones and cameras. **imoo and BBK are not named.**
- https://www.mnemonic.io/resources/blog/exposing-backdoor-consumer-products/ (updated
  **13.10.2020**) — Xplora 4 and 360 Kids Guard covert SMS-triggered snapshot and wiretap
  backdoor; *"zero indication on the watch that a photo was taken"*; *"This is a functionality
  that has been created with intent."* **imoo and BBK are not named.**
- https://www.heise.de/newsticker/meldung/Eltern-ueberwachen-Kinder-Bundesnetzagentur-verbietet-Kinderuhren-mit-Abhoerfunktion-3892498.html
  and https://www.teltarif.de/bnetza-kinderuhren-abhoerfunktion-verboten/news/70715.html —
  **November 2017**, Bundesnetzagentur bans children's watches with a listening function in
  Germany, classes them as espionage devices, orders destruction. Used only as **context** for why
  the German-market Z7 is unlikely to carry a covert wiretap — **an argument, not a finding**.
  *(2017 source — explicitly older than the 2024+ preference.)*

**Project-internal (prior sweeps, not re-verified here)**

- `.discovery/lens-5-romania.md` — the Play Store RO review of **2026-07-13** (*"slabă cu
  locația… alt fus orar"*), the **2025-04-22** 5★ *"Excelent"*, the eMAG X10 review by Popa Aurel
  (**13 Aug 2026**), and Android app metadata (1M+ installs, updated 2026-07-21).
- `.discovery/lens-4-community.md` — the imoo X10 eMAG review detail and the Z6 AndroidCentral
  quotes.
- `.discovery/lens-1-eu-retail.md`, `.discovery/lens-2-brands.md`, `.discovery/lens-3-technical.md`
  — imoo range pricing, the Z3/Z1/X10 band lists used for the intra-range comparison, and the
  June 2024 European re-entry.

---

## User reviews — EU-wide sweep (2026-08-19)

*Scope: retailer review sections in DE/AT/NL/BE/FR/ES/IT/PL/CZ/SE/RO/UK, price-comparison
aggregators, both app stores across 13 European storefronts, Trustpilot, vendor testimonials,
review-site comment sections and German parent forums. Method note: most large EU retailers
(MediaMarkt, Kaufland, idealo, Amazon, Fnac, Argos, Currys, Alza, x-kom, Bol, El Corte Inglés)
return 403/CAPTCHA to direct fetch; where a text-extraction proxy could read them that is stated.
Reddit is unreachable from this environment. Nothing below is inferred from a search-engine
summary — search snippets for this product repeat vendor battery claims ("bis zu 7 Tage",
"2–3 days") that no measurement supports, and were discarded.*

### Headline: how much genuine Z7 owner evidence exists

**Roughly 15 reviews anywhere in Europe explicitly name the Z7, and all 15 sit on imoo's own
Trustpilot profile or its own website. Not one identifiable Z7 owner report was found on any
independent European retailer, price-comparison site or app store.** Breaking that down:

| Bucket | Count | Verifiably about the Z7? |
|---|---|---|
| Trustpilot `imoo.me`, model named "Z7" | 15 | Yes — but 11 of 15 fall inside a 7-week launch-PR window, see contamination |
| imoo.me on-site testimonials tagged Z7 | 3 | Vendor-curated, anonymised, no negatives |
| Otto.de star counts on two Z7 listings | 5 + 2 | Listing-level, **text unreadable** (Otto blocks page fetch) |
| testbericht.de aggregate "57 Bewertungen" | 57 | Scraped from **imoo's own Amazon storefront**; undated, unnamed — see contamination |
| Apple App Store, 13 European storefronts | 0 | **Zero** reviews name the Z7. Where a model is named it is Z1, Z3 or Z6 |
| Google Play, DE/UK storefronts | 0 | **Zero** name the Z7 |
| Independent EU retailers with a Z7 listing | 0 | eMAG.ro, PcComponentes.es, MediaExpert.pl, Geizhals.de all list it with **zero reviews** |

**Countries with a genuine, attributable Z7 owner report: effectively none.** Trustpilot does not
expose reviewer country through the extraction path available here, so the country of all 15 is
**UNKNOWN**. Germany contributes 7 star-ratings on Otto.de whose text could not be read, and 57
undated ratings on imoo's own Amazon storefront. Romania, Spain, Poland, Italy, the Netherlands,
Belgium, Sweden, Czechia and Austria contribute **zero**.

**This is a well-evidenced negative result.** Two years after the June-2024 EU relaunch, the Z7
has no independent European owner-review base at all. The previous "What users say" section's
conclusion — that the Romanian evidence is empty — turns out to understate the problem: the
*EU-wide* evidence is empty too, and what looks like evidence is almost entirely first-party.

### What works

Only two Z7-specific positive reports carry any detail. Both are from the launch window and both
sit on imoo's own Trustpilot profile, so weight them accordingly.

- **Migrating from a Z1 keeps the data; indoor/outdoor GPS distinction is new.** Trustpilot,
  `imoo.me`, **2 April 2025**, 5★, country UNKNOWN, ownership at time of writing: days —
  *"Our almost 9-year-old daughter has been using the Imoo Z1 for some time… That's why we've now
  purchased the new Z7… Change the SIM card and select the 'Switch Assistant' in the app menu -
  scan the watch code - and you're done! Everything worked as before… The highlights for us:
  - Super-accurate GPS tracking, now with a distinction between indoors and outdoors, as well as
  the ability to record movement data."* (written in English). **One report.** The specific,
  checkable claims here (Switch Assistant, indoor/outdoor mode, swim distance recording) are the
  reason it is worth recording at all; the effusive close is not.
  <https://www.trustpilot.com/review/imoo.me?search=Z7>
- **The hardware itself is not the complaint, even in the worst Z7 review.** Trustpilot,
  `imoo.me`, **23 October 2025**, 1★, country UNKNOWN — *"Z7 watch itself is good, location
  accurate…"*. Recorded because it is a positive statement extracted from a hostile witness,
  which makes it worth more than the fifteen 5★ lines around it.
- **Short positive Z7 mentions, no detail** — Trustpilot `imoo.me`: **27 April 2026**
  (*"Our daughter loves her imoo Z7 Kids Smart Watch. Now she can easily communicate with her
  friend and feels very comfortable and safe while hanging around without her parents."*),
  **19 March 2026**, **18 June 2025** (*"GPS is precise and the latest Z7 version has a text
  function too"*), **7 March 2025**, **9 April 2025**, **21 March 2025**, **1 March 2025**,
  **7 March 2025**, **25 March 2025**, **16 April 2025**, **17 April 2025**, **20 March 2025**.
  **Twelve reports, all 4–5★, all short or promotional in register, all on the vendor's own
  Trustpilot profile.** Counted, not relied on.

### What fails

- **Live location does not update; history is not recorded. This is the only detailed negative
  Z7 report in Europe.** Trustpilot, `imoo.me`, **23 October 2025**, 1★, country UNKNOWN, ~7 days
  into a support case — *"Z7 watch itself is good, location accurate but there are serious
  software issues. History is not being recorded and location is not being updated automatically,
  so it's basically useless, unless you can have the application open all the time and refreah
  nonstop. Customer care just asks for patience and for already provided details. There is no
  phone number, emails are not being responded. I am trying to solve the issue since 7 days and
  not getting anywhere. Reviews page was removed recently from EU website."* (English original).
  **One report — but it is the single most informative Z7 owner document that exists in Europe,**
  and it describes exactly the stale-location failure mode this project screens for: the
  complaint is not "the GPS is wrong", it is "the position is real but the app stops refreshing
  it". <https://www.trustpilot.com/review/imoo.me?search=Z7>
- **Order never delivered; no phone support.** Trustpilot, `imoo.me`, **15 July 2025**, 1★ —
  *"Bought Z7 from UK imoostore. The watch never arrived but delivery status says it's delivered
  by Amazon… No one to speak to now. Was it a fraud?"* One report. A fulfilment failure, not a
  product failure, but relevant to buying direct from imoo's EU store.
- **Daily charging confirmed by the only published measurement.** Notebookcheck, Germany,
  **04.04.2025**: roughly **12 % battery remaining after 24 h** of typical use with occasional
  calls and photos; full charge ~80 minutes. This is the *only* number anyone has measured, and
  it flatly contradicts the "bis zu 7 Tage" figure on retailer pages and the "2–3 days" figure in
  the AliExpress machine-generated article.
  <https://www.notebookcheck.com/Eltern-tracken-ihre-Kinder-imoo-Watch-Phone-Z7-im-Test.969170.0.html>
- **Video calls stutter; display too dim for outdoors.** Notebookcheck, **04.04.2025**: maximum
  brightness *"282 cd/m² sehr gering"* — *"282 cd/m², very low"*, making outdoor legibility poor;
  video calls show frequent stuttering despite good connectivity. One lab test.

**Model-unspecified imoo-system failures (NOT Z7 evidence — recorded separately).** The companion
app serves the whole range, so none of the following can be attributed to the Z7. They are listed
because they describe the subsystems the Z7 shares, and because several are recent (app version
9.36.x ≈ 2026):

- **Position goes stale exactly at the school-arrival moment.** ErsinK, **DE App Store**, v9.36.20,
  4★ — *"Am Anfang war das GPS Signal sehr gut. Mittlerweile hängt es. Wenn meine Tochter bereits
  in der Schule ist, zeigt die Karte mir an, dass sie ca. 50 Meter von der Schule entfernt ist.
  Erst nach 5 min Aktualisierung zeigt es mir dann an, dass sie angekommen ist."* — *"At the start
  the GPS signal was very good. Now it lags. When my daughter is already at school, the map shows
  me she is about 50 metres from the school. Only after a 5-minute refresh does it show she has
  arrived."* Model UNKNOWN.
- **Position an hour stale, contradicted by an AirTag in the same bag.** Elemenopeqeresteuvauwe,
  **DE App Store**, v9.29.70, 3★ — *"Die Ortung funktioniert so gut wie gar nicht. Aktuell hat sie
  mehr als eine Stunde Verzögerung und angeblich befinden sich meine Kinder immer noch in unserer
  Parallestrasse. Das AirTag in ihren Geldbeuteln zeigt jedoch die Schule an… Die Ortung ist echt
  der letzte Schrott."* — *"The location works barely at all. Right now it has more than an hour's
  delay and supposedly my children are still in the parallel street to ours. The AirTag in their
  wallets, however, shows the school… The location tracking is really utter rubbish."*
  **Almost certainly a Z1, not a Z7** — the reviewer states they paid €109 instead of €130, which
  is Z1 pricing, not the Z7's €180–219. Flagged, not counted.
- **Timezone resets itself every 1–2 days.** Jo36763367, **DE App Store**, v9.08.60, 2★ (English) —
  *"The watch resets from time to time (every 1-2 days) the timezone settings and start to show the
  wrong time! 2. GPS network is often overloaded and not working despite having good signal on the
  watch."* Model UNKNOWN. This is the **third independent instance of the timezone-desync symptom**
  already recorded twice from Romania, now from a German storefront.
- **Location dead unless on Wi-Fi — a large, repeated Spanish cluster.** ES App Store: mama roser
  (v8.73.10, 1★) *"Si no está en casa con wifi no puedo localizar el reloj"* — *"If it isn't at
  home on Wi-Fi I can't locate the watch"*; Tarjor (v8.73.10, 1★) *"Mismo problema; la
  localización no funciona a no ser que sea con WIFI. Internet va correctamente pero en
  localización tan solo es posible mediante WIFI."* — *"Same problem; the location doesn't work
  unless it's on Wi-Fi. Internet works fine but location is only possible via Wi-Fi."*; Aappvvv
  (v8.73.10, 1★) *"la localización no funciona si no es con wifi, por muchos datos que se tengan
  contratados"* — *"the location doesn't work if not on Wi-Fi, no matter how much data you have on
  the plan"*; Capitanagarfia (v9.04.20, 1★) *"La localización solo funciona cuando está conectado
  a wifi x lo tanto es inútil… El soporte técnico no resuelve los problemas."* — *"Location only
  works when connected to Wi-Fi, so it's useless… Technical support doesn't solve the problems."*
  Plus tolosa peiro, MGG2021 and Océania mas (all 1★, *"la localización no funciona"*).
  **Seven independent Spanish reports of the same symptom**, all on app versions 8.6–9.04 (pre-Z7
  era, so most are Z1/Z6), and **contradicted** by two other Spanish reviewers on the same
  versions — Juenza (v9.08.70, 5★) *"Se quejan de que solo ofrece localización con wifi, a mi me
  va estupendamente tanto con wifi como con datos"* — *"People complain it only gives location on
  Wi-Fi; for me it works splendidly on both Wi-Fi and mobile data"* — and Framesflyer (v8.76.00,
  5★, explicitly **Z1**) *"En nuestro caso localiza perfectamente al reloj, con wifi o datos de la
  sim."* This looks like an APN/carrier-provisioning failure rather than a device fault. Model
  UNKNOWN throughout, and the era predates the Z7.
- **Location "hasn't updated for 81 days".** Trustpilot `imoostore.com`, **15 May 2026**, 1★ —
  *"Location service is pretty not existent, hasn't updated my sons location for 81 days, no matter
  what we do."* Model UNKNOWN.
- **Recent German Play Store reports.** Thomas H, **12 January 2026** — *"Die Uhr verliert ständig
  die WLAN-Verbindung, und man muss das Passwort jedes Mal neu eingeben."* — *"The watch constantly
  loses the Wi-Fi connection and you have to re-enter the password every time."* Seda Aurora,
  **27 April 2026** — *"Anrufe gehen nicht richtig raus, wenn man nicht irgendwas vorher gemacht
  hat um den Kontakt zu erlauben und alle 30 Sekunden kommt eine Benachrichtigung von der App"* —
  *"Calls don't go out properly unless you've done something beforehand to authorise the contact,
  and every 30 seconds a notification arrives from the app."* Models UNKNOWN.
  <https://play.google.com/store/apps/details?id=com.imoo.watch.global>

### Registration, login and binding — the recurring subsystem failure

This is the strongest, most-replicated signal in the entire imoo corpus, and it is **still live in
2026**. It remains model-unspecified — no reviewer names the Z7 — but it is a server-side and
account-layer problem, which means it is unlikely to be model-dependent.

**Nine independent reports across four countries:**

- **Registration blocked server-side, 2026.** fs69, **DE App Store**, v9.36.20, 1★ (English) —
  *"Registration is blocked because the user agreement cannot be accepted. The 'Register' button
  stays disabled even after checking the box. The app shows an invalid effective date (August
  2025). This seems to be a server-side issue."* **This is the closest analogue anywhere in Europe
  to the Romanian registration failure already in this document**, and it is on the current app
  version.
- **Ten hours of pairing, then support gave up.** Helen Balic, **UK App Store**, v9.36.20, 1★ —
  *"The app doesn't pair easily to the watch. It took about 10 hours of troubleshooting and still
  didn't work even after trying to work it out with customer support."*
- **Binding lost after a firmware update.** gordoninlondon, **UK App Store**, v9.36.00, 1★ —
  *"After upgrading watch software, it forgot it was bound so can't do anything. App still thinks
  it is bound."*
- **Watch shows the binding QR code instead of chat.** felixinlondon, **UK App Store**, v9.36.20,
  2★ — *"When you click chat on watch it shows the we code for binding. This is new and never
  happened before"*.
- **Admin-approval lockout, both parents locked out.** djrafuk, **UK App Store**, v8.1.5, 1★ —
  *"Now both parents cannot access the app saying log in failed wrong details and number. Tried
  re-registering the app but cannot without the admin approval (Mrs) and Mrs cannot get into the
  app. Quite worrying for a parent went you want to get hold of your kids."* And BloxyTiger,
  v8.2.1, 1★ — *"it says wait for admin comfirmation they should make it so that we can get the
  admin account back by verifying the number"*.
- **Cannot log in at all.** e sonmez, **UK App Store**, v8.1.0, 1★ — *"I try many times but I can't
  login"*.
- **Binding and setup, Ireland.** fclcg, **IE App Store**, v9.29.51, 1★ — *"Phone sync, locate not
  working, time and date not updating, 'phone not bind' message. 'Phone not on network' error."*
  And DnD fanatic, **IE App Store**, v9.08.70, 1★ — *"binding is so annoying dont buy this!"*
- **Romania** (already in this document): Vlad Sabau.ro, RO App Store, 13 July 2025, 1★ — no SMS
  confirmation code received.

**Assessment:** DE, UK, IE and RO all produce registration/binding failures, and the German one is
on the newest app build (9.36.20). Nothing found in this sweep counts as a *successful* +40
registration report, so the Romania-specific question this document raises remains **unresolved**
— but it is now clear the risk is not Romania-specific.

### Longevity — the category's failure window

**No Z7 owner report anywhere in Europe states an ownership period longer than a few weeks.** This
is the single biggest gap in the evidence base and it cannot be closed with what is published.

Every dated ownership-duration statement found for any imoo model:

| Duration | Source | Date | Model | Outcome |
|---|---|---|---|---|
| ~1 week | Trustpilot `imoo.me`, 2★ | 23 Aug 2025 | UNKNOWN | *"Stopped working right after went swimming"* despite the waterproof rating |
| days | Trustpilot `imoo.me`, 1★ | 7 Jun 2025 | UNKNOWN | stopped working shortly after receipt; reviewer says imoo asked them to delete the review |
| ~7 days into support case | Trustpilot `imoo.me`, 1★ | 23 Oct 2025 | **Z7** | live location and history stopped updating |
| ~6 weeks | Trustpilot `imoo.me`, 1★ | 4 Feb 2025 | UNKNOWN | unresolved support case |
| 3 months | Trustpilot `imoo.me`, 1★ | 7 Aug 2025 | UNKNOWN | *"Most important features do not work"*; refund refused |
| 5 months | Trustpilot `imoo.me`, 1★ | 5 May 2025 | **Z1** | calls intermittent, location tracker unresponsive |
| 81 days without a location update | Trustpilot `imoostore.com`, 1★ | 15 May 2026 | UNKNOWN | location dead |
| 1 year | Mr Opinion Giver, UK App Store, 1★ | app v8.6.8 (pre-Z7) | UNKNOWN | *"Had this for a year. The locate tracker to find your kid is awful. It works sporadically at best… sometimes it even says our kid is in Germany!"* |

**Conclusion on longevity: UNKNOWN for the Z7 specifically, and the surrounding-model evidence is
consistent with this project's 4-to-12-month death assumption rather than against it.** The Z7 has
been on sale in the EU since June 2024 and there is still no published account of anyone owning
one for a year. That absence is itself notable: for a brand with 271 Trustpilot reviews, the
complete lack of a long-term report suggests the review flow is front-loaded at purchase.

### Contamination found in this sweep

1. **The two Trustpilot profiles contradict each other by 1.9 stars.** `imoo.me` shows **4.7 / 5
   from 271 reviews**; `imoostore.com` shows **2.8 / 5 from 55 reviews**. Same brand, same
   products, opposite verdicts. Any citation of "imoo's 4.7 Trustpilot score" is cherry-picking.
   <https://www.trustpilot.com/review/imoo.me> · <https://www.trustpilot.com/review/imoostore.com>
2. **Two dated, independent reviewers allege imoo solicited removal of negative reviews.**
   Trustpilot `imoo.me`, 1★, **7 June 2025**, titled *"Was asked by company to remove my review"*;
   and 1★, **4 February 2025**, titled *"Imoo bribed me to remove this"*. A third reviewer on
   `imoostore.com` reports the same. This is a direct, documented mechanism for the 4.7 vs 2.8
   split and it means **the absence of negative Z7 reviews on `imoo.me` cannot be read as evidence
   of Z7 reliability.**
3. **The Z7 Trustpilot reviews are a launch-window cluster.** 11 of the 15 Z7-named reviews are
   dated **1 March – 17 April 2025**, a seven-week block, all 4–5★, several written in polished
   product-marketing English. The 16 April 2025 entry runs to ~150 words covering *"real-time GPS
   tracking, two-way calling, and a dedicated 'Class Mode' for school hours"* and closes *"If
   you're looking for a smart, age-appropriate gift, I'd definitely recommend the Z7!"* — and is
   written by an **aunt gifting the watch**, not a parent living with it. Only four Z7 reviews
   exist outside that window, one of which is the 1★ October 2025 report.
4. **imoo's on-site testimonial wall is syndicated from Trustpilot, not independent.** `imoo.me`'s
   reviews page shows anonymised initials (`I**`, `S**h`, `S**d`), nothing dated before 2026, and
   **no negative entries at all**. At least one item appears verbatim on both imoo.me and
   Trustpilot on the same date (a Z3 entry, 27 May 2026, *"the best smart watch in this price
   range"*), and a further cluster of on-site testimonials is dated 26–30 May 2026 — a second
   solicitation window. **Only 3 of the ~16 on-site testimonials are tagged Z7.** Treat the whole
   wall as vendor-curated marketing. Note that even this curated wall carries a Z3 testimonial
   admitting *"Akku hält 1-2 Tage"* — *"battery lasts 1-2 days"*.
   <https://imoo.me/de/pages/imoo-watch-reviews>
5. **imoo removed its EU on-site reviews page around October 2025 and later restored it.** The
   23 October 2025 Trustpilot reviewer states *"Reviews page was removed recently from EU website"*.
   The page is live again as of 2026-08-19. Any historical citation of that page is unreliable.
6. **testbericht.de's "57 Bewertungen" is not an independent user base.** It resolves to
   **39 ratings at 4.9★ on the "Z7 blau" variant, sourced from "Amazon Marketplace"**, plus
   **18 ratings at 4.8★ on "Z7 rosa"**, sourced from Amazon Marketplace / Kaufland / Otto. None
   carry a reviewer name or a date. Critically, **Geizhals.de shows the only German seller of the
   Z7 is `imoo-online-de` — imoo's own Amazon storefront** — so these are ratings collected on a
   listing the manufacturer operates. One of the quoted testimonials reads *"Die Materialqualität,
   Verarbeitung, Verpackung und Schneidkante fühlen sich großartig an"* — *"the material quality,
   workmanship, packaging and **cutting edge** feel great"* — a machine translation of the English
   marketing phrase "cutting edge", i.e. translated promotional copy, not a German parent writing.
   **Do not cite the 4.8–4.9 average or the 57 count as user evidence.**
   <https://www.testbericht.de/serien/smartwatches/624456-imoo-z7> ·
   <https://geizhals.de/imoo-z7-smartwatch-kinder-blau-a6763449943.html>
7. **The app-store corpus is pooled across the entire imoo range and cannot be attributed to the
   Z7.** Across 13 European Apple storefronts and the German and UK Play storefronts, **not one
   review names the Z7**. Where a model *is* named it is Z1 (D.Royal, EdiKris, Framesflyer,
   Renata L.), Z3 or Z6 (jr kamaly boss). This confirms the cross-model pooling trap flagged for
   Amazon applies to the app stores too, in the opposite direction: the app reviews are *all*
   pre-Z7 or unattributable.
8. **The most recent Polish App Store review reads as generated promotional copy.** Mariusz.KK,
   PL App Store, v9.36.70, 5★ — *"Ta aplikacja jest niesamowicie potężna, wręcz zbyt potężna. Ma
   tak wiele funkcji, że zaspokoi wszystkie Twoje codzienne potrzeby operacyjne."* — *"This
   application is incredibly powerful, even too powerful. It has so many features that it will
   satisfy all your daily operational needs."* "Operational needs" is not language a parent uses
   about a child's watch. Discarded.
9. **Store rating averages disagree wildly and should not be quoted as a single figure.** Same app,
   same week: apkcombo reports **4.1 / 5 from 13,489**; the Google Play **DE** storefront reports
   **2.5 / 5 from 13.6k**; the Google Play **UK** storefront reports **3.1 / 5 from 13.6k**; the
   Apple **DE** storefront reports **3.26 / 5 from 105**. Only country-scoped figures are
   meaningful, and the aggregator's flattering 4.1 is the one that circulates.
10. **Machine-generated and affiliate sources encountered and rejected**: the AliExpress
    "wiki-ssr" article on the Z7 (fabricated real-world battery narrative, asserts "2–3 days");
    noomii.de's "Z7 guide" (retailer marketing, authored *"Von NooMii"*, no reviews, prices the Z7
    at €269); smartwatch-kids.de (self-declared affiliate-funded, no comments); nextpit.de "Deals"
    page. Search-engine summaries of this product repeat a **"bis zu 7 Tage" / "up to 7 days"**
    battery figure with no source; Notebookcheck's **~12 % remaining after 24 h** is the only
    figure anyone has actually measured.
11. **The "3 Tage" YouTube seeding pattern could not be verified or refuted here.** The German
    Z7 review video *"Kinder Smartwatch imoo Watch Phone Z7 im Test! Unboxing & Review |
    PapasVlog"* (uploaded **5 December 2024**, 17,318 views, **34 comments**) discloses in its
    description that the unit was supplied for review and carries affiliate links. YouTube comment
    text is JavaScript-rendered and did not extract through any available path, so the
    single-account-answering-everything pattern is **UNKNOWN** — neither confirmed nor cleared.
    <https://www.youtube.com/watch?v=GpmfyH94MDo>

### Sources checked that had nothing

**Listed the Z7, zero user reviews:**

- **eMAG.ro** — Z7 pink, 1.114,56 lei, seller **OVOLT România** (marketplace, not eMAG direct),
  page states *"Fii primul care scrie un review"* — *"Be the first to write a review"*. Confirms
  this document's existing finding of zero Romanian reviews, re-verified 2026-08-19.
- **PcComponentes.es** — Z7 blue and Z7 pink, €184.09 each, **no rating on either**. (By contrast
  the Z1 there has 2.8★/4 reviews and the X10 2.5★/1.)
- **MediaExpert.pl** — *Smartwatch IMOO Z7 Niebieski*, 729 zł (from 899 zł), **no rating, no
  opinions**. (The Z3 alongside it has 3★/2 opinions.)
- **Geizhals.de** — four Z7 entries, **zero user reviews**, one seller only (`imoo-online-de`).
- **Otto.de** — two Z7 listings carrying **5 reviews (5★)** and **2 reviews**; the product pages
  return HTTP 400 to every fetch path tried, so **the review text is UNKNOWN**. These 7 German
  ratings are the only plausibly-independent European Z7 review count found, and they could not
  be read.

**Do not stock the Z7 at all:** Coolblue.nl (*"Geen resultaten voor 'imoo'"* — no imoo products
whatsoever), MediaWorld.it (search returns 404), Prisjakt.nu (imoo X10 and Z1 only, no Z7, and no
ratings on anything).

**Zero reviews of the imoo app in the storefront:** Apple App Store **AT**, **BE**, **SE**, **CZ**.
Near-zero and none Z7-relevant: **IT** (2 reviews, both written in Chinese), **NL** (1 review, app
v8.0.0, i.e. years pre-Z7), **PL** (2, one of them item 8 above), **FR** (3, none about hardware —
two are feature requests about French language and emoji).

**Do not exist:** Trustpilot pages for `imoostore.de` and `imoo.eu` (both 404).

**No reader comments / no user-generated content:** MightyGadget's Z7 review (UK, 18 Aug 2024),
Notebookcheck's Z7 test (DE, 04.04.2025), smartwatch-kids.de, noomii.de.

**No German parent-forum thread about the Z7 was found at all** — nothing on urbia, gutefrage,
Android-Hilfe, ComputerBase or mydealz. For a product sold in Germany for two years, that is
itself a signal about how few units are in circulation.

**Blocked to every fetch path attempted (403 / CAPTCHA / 503) — coverage UNKNOWN, not zero:**
MediaMarkt.de, Saturn, Kaufland.de, notebooksbilliger.de, Cyberport, idealo.de, Amazon (.de /
.co.uk / .es — all storefronts), Fnac.fr, Darty, Boulanger, El Corte Inglés, Unieuro, Bol.com,
Alza.cz, x-kom.pl, Morele, Empik, Electro.pl, Argos.co.uk, Currys.co.uk, Very, Elgiganten / Power /
Komplett, Heureka.cz, Ceneo.pl, Skroutz, and **Reddit** (unreachable from this environment).
`testbericht.de` and `trustpilot.com` were readable only through a text-extraction proxy, which is
why reviewer **names and countries are UNKNOWN for every Trustpilot quote above.**

---

## Retry pass — proxied fetches of previously blocked sources (2026-08-19)

*Method: `r.jina.ai` (markdown and, with `x-respond-with: html`, raw HTML including Next.js
`__NEXT_DATA__`), `proxy.cors.sh`, `api.allorigins.win`, `api.codetabs.com`, browser and Googlebot
user-agents, Wayback, Google Play's `batchexecute` `UsvDTd` RPC, and **yt-dlp** for YouTube comments
and auto-captions. Every claim below was read on the page, not from a search snippet.*

### A. Findings that change a conclusion in this document

**A1. The "3 Tage" battery figure attributed to PapasVlog does not exist. He says about ONE day.**
The German Z7 video's caption track (retrieved with yt-dlp) contains the only two battery statements
he makes, and both contradict the figure this document recorded as originating there:

> *"dann habt ihr ein 740 mAmpere Akku, soll bis zu **168 Stunden** halten, bzw. ist das ja immer
> diese Standby-Zeit — sage ich es mal aus meinen Erfahrungswerten: halten diese Uhren immer
> **ungefähr ein Tag**, je nachdem wie viel die Kinder daran rumspielen."*
> — "then you have a 740 mAh battery, **supposed to last up to 168 hours**, but that is always this
> standby figure — from my own experience these watches always last **about one day**, depending on
> how much the kids play with them."

> *"zur Akkulaufzeit — wie immer ist es relativ anzusehen; in den meisten Fällen, so wie wenn ich sie
> jetzt teste, **halten sie ungefähr ein Tag**, aber ich fummel halt dann auch die ganze Zeit drauf
> rum. Wenn euer Kind das vielleicht nur benutzt um mal auf die Uhr zu gucken und mal einmal zu
> telefonieren … wird der Akku sicherlich auch anderthalb, vielleicht sogar zwei Tage halten. Aber
> bei Kinder-Smartwatch Faustregel **ungefähr ein Tag**, wenn eine normale Benutzung vorliegt."*
> — "on battery life — as always it is relative; in most cases, testing it the way I do, **they last
> about one day**, but I am fiddling with it the whole time. If your child only glances at it and
> makes the odd call … the battery will certainly last a day and a half, maybe even two days. But
> the rule of thumb for a kids' smartwatch is **about one day** under normal use."
> <https://www.youtube.com/watch?v=GpmfyH94MDo> (uploaded **5 Dec 2024**, DE)

**Consequence:** remove "PapasVlog / 3 Tage" from the evidence base. It was never in the video.
It also **explains the unsourced "bis zu 7 Tage"** circulating on noomii.de and in search summaries:
**168 hours is exactly 7 days, and it is imoo's *standby* number**, which PapasVlog identifies as
such on camera. No source anywhere states 7 days of *use*.

**A2. A second measured battery figure now exists, and it disagrees with Notebookcheck by ~2.6x.**
Jagat Review (Indonesia, **29 Apr 2025**) ran a drain test and reports it at 17:20 in the video:

> *"untuk baterai berdasarkan hasil pengujian kami dengan pemakaian normal, baterai akan berkurang
> sekitar **34% per hari**. Sebagai catatan, ini adalah hasil pengujian saat jam lebih banyak
> terhubung ke internet lewat koneksi seluler. Jadi, teoritis baterai jam tangan ini baru akan habis
> sekitar **hampir 3 hari penuh**."*
> — "for the battery, based on **our test results** under normal use, the battery drops about
> **34% per day**. Note that this is the result with the watch mostly connected to the internet over
> **cellular**. So theoretically the battery would only run flat after **almost 3 full days**."

Also: *"Jam tangan ini membutuhkan waktu sekitar **1 jam 40-an menit** untuk mengisi baterai dari 0
sampai penuh"* — "the watch takes about **1 hour 40 minutes** to charge from 0 to full."
<https://www.youtube.com/watch?v=sEXcl2YxaBw>

The measured record is now: **Notebookcheck ~88 %/day** (12 % remaining after 24 h, DE, 04.04.2025)
versus **Jagat ~34 %/day** (ID, 29 Apr 2025) versus **PapasVlog's hands-on impression of ~1 day**.
Two lab-style measurements of the same watch differ by a factor of ~2.6. **Neither states a tracking
interval.** `battery_claimed_h: UNKNOWN` should stay UNKNOWN, but the plausible range under cellular
use is now bounded by two real measurements rather than one.

**A3. WhatGadget is not the origin of "almost three days", and the claim is not a measurement.**
Retrieved in full via `r.jina.ai` (direct fetch still 403). The page **is dated in its metadata:
`Published Time: 2024-07-22`** — previously recorded as "undated on the page". GizNext is dated
**2024-04-23**, i.e. **three months earlier**, so GizNext precedes WhatGadget, not the other way
round. Both use the same construction, which is an expectation derived from the spec sheet, not a
test:

> WhatGadget: *"Give the Z7 a full charge and standard usage, **expect** this smartwatch to deliver
> almost three days of charge."*
> GizNext: *"With a full charge and standard usage, **expect** this smartwatch to deliver almost
> three days of charge."*

WhatGadget also closes with an **Amazon affiliate link** (`amzn.to`, £151.20), which was not recorded
before. Treat "almost three days" as **one undated press-kit assertion recycled twice by affiliate
sites**, not as evidence.

**A4. WhatGadget and PapasVlog independently give the mass: 65 g.** `weight_g: UNKNOWN` can be closed.
WhatGadget: *"The Z7 weighs 65 grams."* PapasVlog: *"obwohl die Uhr sehr robust … wirkt, wiegt sie
trotzdem nur **65 g**"* — "although the watch looks very robust, it still weighs only 65 g."

**A5. Trustpilot reviewer names and countries ARE extractable. "Country UNKNOWN for every Z7 review"
is wrong.** Fetching `https://www.trustpilot.com/review/imoo.me?languages=all&search=Z7` through
`r.jina.ai` with the header `x-respond-with: html` returns the page's `__NEXT_DATA__` blob, which
carries `consumer.displayName`, `consumer.countryCode` and `consumer.numberOfReviews` for every
review. Individual review permalinks (`/reviews/<id>`) also expose name and country in their byline.

**A6. The Z7 review count on imoo.me is 30, not 15 — and Spain is not zero.** The all-languages
filter reports `"totalCount": 30, "totalPages": 2`. The English-only view this document used shows
15. Page 1 (20 reviews) was parsed in full; **page 2 could not be fetched** (AWS WAF interstitial on
every retry through every proxy), so 10 Z7 reviews remain unread.

Country and account profile of the 20 that were read:

| Country | Z7 reviews | Of which single-review accounts |
|---|---|---|
| DE | 5 (Sandra, thia zzzoey, BIN, S Mishin, Guo Li) | 3 |
| ES | 5 (Alba, Pablo Blanco Montejo, Manuel Aranda Diaz, MJ Rosero, Anonimo) | 3 |
| GB | 4 (Manish, J G, Wenxuan, E L) | 1 |
| IE | 4 (Peter Martinas, sup san, Roshaney Jkd, San) | 2 |
| EG | 1 (Lenka) | 1 |
| AT | 1 (Dude) | 0 |

**11 of 20 are accounts with a single Trustpilot review**, and one more has two. That is the seeding
signal, and it is now measurable rather than suspected. Note also that **the only detailed negative
Z7 review on imoo.me is from Egypt, not Europe** — Lenka, **1 review, EG**, 23 Oct 2025, the
"history is not being recorded and location is not being updated automatically" report this document
leans on. It stands, but it is not a European owner report.

Spanish Z7 owner reports (all 5★, all on imoo's own profile, four of five single-review accounts):
- **MJ Rosero, ES, 1 review, 1 Dec 2025** — *"Tenemos en Z7 y es una maravilla, la batería dura
  mucho, la localización es precisa"* — "We have the Z7 and it is wonderful, the battery lasts a
  long time, the location is precise." (No figure given.)
- **Pablo Blanco Montejo, ES, 1 review, 6 May 2026** — *"El reloj z7 es duro y desdolido. Lo usa mi
  crio y hasta se ha bañado en el mar con el por despiste. Y sigue funcionando"* — "The z7 watch is
  tough and hard-wearing. My kid uses it and even went swimming in the sea with it by accident. And
  it still works."
- **Alba, ES, 2 reviews, 15 Jun 2026** — *"He notado un gran cambio del Z1 al Z7 … El hecho de que
  los pequeños puedan escribir además de grabar audios es un punto positivo."* — "I have noticed a
  big change from the Z1 to the Z7 … The fact that the little ones can type as well as record audio
  is a positive."
- **Manuel Aranda Diaz, ES, 1 review, 14 Mar 2026** and **Anonimo, ES, 6 reviews, 6 Jan 2026** —
  both generic positives about location and video calls.

**A7. Google Play has ten Z7-naming reviews across four European storefronts. "Zero" was an artefact
of the block.** Retrieved via the Play Store's `batchexecute` `UsvDTd` RPC (366 unique reviews across
DE, GB, ES, IE, RO, IT, NL, PL, AT, FR, CZ). Verbatim, model-verified:

- **Roman Mushchynka, PL, 5★, 28 Jul 2026, app 9.36.71** — *"Imoo Z7 jest super. Lokalizacja idealna.
  Tylko połączenie alarmowe nie da się włączyć. Trzeba się bardzo postarać. Lepiej byłoby gdyby
  działało na przycisk. **Nie wiem jak dziecko włączy alarm w stresującej sytuacji.**"* — "The imoo
  Z7 is great. Location is perfect. Only the emergency call cannot be triggered. You have to try very
  hard. It would be better if it worked on a button. **I don't know how a child would set off the
  alarm in a stressful situation.**" **New safety finding: the SOS is not on a physical button and an
  owner reports it is hard to trigger.**
- **Dawid Czaja, PL, 2★, 3 May 2026, app 9.36.20** — *"Zegarek polecam, Z7 działa bardzo dobrze.
  Aplikacji nie polecam … nie da się selekcjonować na zasadzie od dziecka i głupoty z systemu albo
  **reklamy od imoo**, tylko wszystko do jednego worka"* — "I recommend the watch, the Z7 works very
  well. I do not recommend the app … you cannot separate messages from your child from system rubbish
  or **ads from imoo**, it all goes in one bucket."
- **Thomas H, DE, 3★, 12 Jan 2026, app 9.36.00** — *"Wir haben die Z7 seit Weihnachten in Gebrauch.
  Die Uhr verliert ständig die WLAN-Verbindung, und man muss das Passwort jedes Mal neu eingeben …
  **Außerdem gibt es keine Möglichkeit, zu sperren, dass das Kind in die Einstellungen der Uhr
  gelangt.**"* — "We have used the Z7 since Christmas. The watch constantly loses the Wi-Fi connection
  and you have to re-enter the password every time … **On top of that there is no way to stop the
  child getting into the watch's settings.**" **New parental-control gap.**
- **Andreas Schwanzer, DE/AT, 1★, 19 Apr 2026, app 9.36.20** — *"Leider absolut unbrauchbar. komplett
  eigenes Ökosystem. app und Uhr wenig intuitiv. haben die z7. Viel zu teuer mit 199 Euro."* — "Sadly
  completely unusable. An entirely closed ecosystem. App and watch not very intuitive. We have the z7.
  Far too expensive at 199 euros."
- **Thierry G, FR, 3★, 21 Jan 2026, app 9.36.20** — *"**Automatic time zone bug**, probably selected
  once without update. manual time zone unacceptable, missing cities, random order … **update of
  graphical history of positions or health data seems random**. The good point is position precision"*
  (written in English on the FR storefront; the review names the Z7 explicitly). **Fourth independent
  instance of the timezone-desync symptom, and the first one explicitly on a Z7.**
- **Thomas „Zocker Kill", DE, 3★, 5 Jul 2024, app 9.08.51** — *"Nachrichten app lässt sich nicht
  updaten Imoo Uhr Z7"* — "Messages app cannot be updated, imoo Z7 watch." **The earliest dated Z7
  owner report found anywhere**, three weeks after the EU relaunch.
- **Profil PR MFAR, DE, 5★, 10 Dec 2025** — generic positive. **Tommy Maran, GB/IE, 5★, 5 Feb 2024** —
  praises the Z7 but its longevity content is about a **Z6** used for three years; do not count it as
  Z7 longevity.
- **Eckhard Schumacher, DE/AT, 5★ twice (31 Aug 2025 and 18 Jan 2026)** — flagged, not counted as an
  owner report: he states *"Ich habe jetzt die Uhr (imoo Z7) selber eine Weile **aus beruflichen
  Gründen** getestet"* — "I have now tested the watch (imoo Z7) myself for a while **for professional
  reasons**." A same-account double 5★ with a disclosed professional relationship.

**A8. Independent Z7 owner reports exist outside imoo's own properties. The headline "all ~15 sit on
imoo's own Trustpilot profile or its own website" no longer holds.** Between the Google Play reviews
above and the YouTube comment sections in section B, there are now **Z7-verified owner reports on two
platforms imoo does not control**, from DE, AT, PL, FR, GB and IE. The revised statement should be:
*there is still no Z7 owner review on any independent European **retailer** — eMAG, PcComponentes,
MediaExpert, Geizhals, Otto and Coolblue remain at zero readable Z7 reviews — but the app store and
YouTube do carry them, and they are markedly more negative than the Trustpilot set.*

**A9. testbericht.de's Z7 pages are attached to the wrong product. The "57 ratings" are worthless.**
Read via `r.jina.ai` at the corrected URLs (`/produkte/imoo-z7-rosa`, 4.8/5 from **18** ratings;
`/produkte/imoo-z7-blau`, 4.9/5 from **39** ratings; 18 + 39 = the 57 this document recorded). The
blue page's own feature bullets describe a device that is **not the Z7**:

> *"1,43-Zoll-Full-Touch-HD-Bildschirm … über 100 Sportmodi und **IP67**-Wasserschutz … **BLE 5.3** …
> Ein leistungsstarker **300mAh** Akku sorgt für **bis zu 10 Tage** Laufzeit im Alltagsgebrauch."*

The Z7 has a 740 mAh battery, IPX8 to 20 m, 4G and four sport modes. This is a generic no-name fitness
band's spec sheet. The scraped review texts confirm the contamination — one says *"Wir sind bereits
im Besitz der pinkfarbenen Uhr und haben uns nun auch die **grüne** Variante zugelegt"* ("we already
own the pink watch and have now also bought the **green** variant"; the Z7 ships only in blue and
pink — green is a **Z1** colour), and another describes *"Touch-System, zusätzlich **zwei Knöpfen**"*
("touch system plus **two buttons**"; the Z7 has one). **Strike testbericht.de's 57 ratings from the
count entirely.** One genuinely Z7-specific and useful line did survive: *"Ich musste den
**APN-Parameter** ändern/hinzufügen, und diese Uhr macht es möglich. Der Imoo-Support hat mir dabei
geholfen."* — "I had to change/add the APN parameter, and this watch makes that possible. imoo support
helped me." (APN is manually configurable.)

**A10. Both review-removal allegations verified verbatim — but neither names the Z7.**
- **Sally Rickard, imoo.me, 2★, ~2 May 2025**, title *"Imoo bribed me to remove this"*:
  > *"UPDATE: **Imoo contacted me & offered me a free watch if I removed this review!** … I have a
  > WhatsApp chain of 44 messages going back to Sat 11th January … I was worrying that I had wasted
  > £81"*
  <https://www.trustpilot.com/reviews/680409ea0e3ea1bcd68b3088> — the £81 price rules the Z7 out.
- **Lisa Matthews, imoo.me, 1★, 7 Jun 2025**, title *"Was asked by company to remove my review"*:
  > *"Review edit 25.06.25 — … After reaching out to the company numerous times my husband eventually
  > got hold of someone who refunded us and we are grateful for that. The incredibly frustrating part
  > was … **I was asked to remove my review by the company. I can see from other reviews that I wasn't
  > the only one.**"*
  <https://www.trustpilot.com/reviews/684487c15bae1666ea600468> — two watches, *"we paid €200 +"*,
  network advice to move to Vodafone or Three; model not stated.

A third, independent corroboration of review suppression is on the Z7's own record: **Lenka, EG,
23 Oct 2025** — *"**Reviews page was removed recently from EU website.**"*

So: two direct solicitations plus one report of a vendor review page being taken down. **Record this
as a brand-level pattern, not a Z7-level one** — neither solicitation names the model.

**A11. PapasVlog's comment section is NOT seeded — and it is the richest independent German Z7
evidence found.** All 34 comments extracted with yt-dlp. Tests applied: comments are spread across
roughly twelve months (approx. Aug 2025 – Jul 2026; yt-dlp derives timestamps from YouTube's
relative-time strings, so these are **month-accurate at best**), **the uploader answers only two of
them**, there is no single account answering everything, no cluster in one window, and the
substantive comments are overwhelmingly **problem reports**, which is the opposite of a seeded
pattern. **Item 11 of the "sources checked" list should change from UNKNOWN to cleared.**

### B. New owner reports

**YouTube — PapasVlog (DE), Z7 review, all 34 comments read** <https://www.youtube.com/watch?v=GpmfyH94MDo>
The description discloses both the supplied unit and the affiliate link: *"Die mit ** gekennzeichneten
Links sind Werbung da mir das Produkt zur Verfügung gestellt wurde. Die mit (*) gekennzeichneten Links
sind Affiliate Links"* — "Links marked ** are advertising because the product was made available to
me. Links marked (*) are affiliate links."

- **@viragornvg, approx. Sep 2025** — *"**Seit Update geht keine Ortung mehr im Gebäude**, weder Schule
  noch zu Hause. Vorher immer einwandfrei."* and, in his own follow-up, *"**Habe die gleiche Uhr
  nochmal bestellt, kein Update gemacht und siehe da Ortung funktioniert wieder.**"*
  — "**Since the update there is no more positioning indoors**, neither at school nor at home. Before
  that it was always flawless." / "**I ordered the same watch again, did not apply the update, and lo
  and behold the positioning works again.**"
  **This is the strongest single piece of evidence in the document that a firmware update degraded Z7
  positioning**, because the owner ran the control experiment himself. It corroborates Lenka's
  Trustpilot report and the Play-store update complaints.
- **@ScoobyDoo-rd3xh, approx. Aug 2025, 3 likes** — *"**Aufgrund der wirklich sehr vielen positiven
  Rezessionen haben wir uns für diese Uhr entschieden**, leider haben wir manchmal Probleme damit.
  Tagelang alles super, und plötzlich funktioniert die Ortung nicht mehr. Fehlermeldung:
  Netzwerksignal schlecht, keine Verbindung mit Netzwerk möglich. **Der Support meinte es läge am
  Anbieter**, aber unsere Uhr reagiert auch nicht im heimischen WLAN-Netz, und auch nicht an zig
  verschiedenen Orten … Nächster Tag: Ortung plötzlich wieder möglich."*
  — "**We chose this watch because of the really very many positive reviews**, but unfortunately we
  sometimes have problems with it. Everything is great for days, and suddenly the positioning stops
  working. Error message: network signal poor, no connection to network possible. **Support said it
  was the carrier's fault**, but our watch does not respond on our home Wi-Fi either, nor in dozens of
  different places … Next day: positioning suddenly possible again."
  Note the causal chain: a parent bought on the strength of the review base characterised in A6.
- **@arthurpausch945, approx. Jul 2026** — *"**Alle Updates. Telekom Sim. Bester Empfang, nur Video
  telefonie unbrauchbar. Stockt und verpixelt. Wird verkauft und xplorer gekauft**"* — "All updates
  applied. Telekom SIM. Best reception, only **video calling is unusable. It stutters and pixelates.
  Being sold and an Xplora bought.**" Followed up elsewhere in the thread with *"Lieber nicht, Video
  cal unbrauchbar"* — "Better not, video call unusable."
- **@DudefromEurope, approx. Sep 2025** — *"habt ihr die uhr länger getestet? ich hab schon öfters
  davon gelesen dass **verschiedene Features nach Updates nicht mehr laufen zum Beispiel der
  Tracking-Verlauf** … wir hatten jedoch Probleme bei der Zustellung von Nachrichten, es kommt zwar ein
  Popup aber die Nachricht wird dann nicht auf der Uhr oder am Handy angezeigt."* — "did you test the
  watch for longer? I have read repeatedly that **various features stop working after updates, for
  example the tracking history** … we had problems with message delivery: a pop-up appears but the
  message is then not shown on the watch or the phone." (This account owned a **Z6** and was deciding
  on a Z7 — treat as corroboration of the update-regression theme, not as a Z7 report.)
- **@sezincolkusu5985, approx. Dec 2025** — *"Wie haben sie gemacht Sprache Deutsch, bei mir geht nur
  Englisch"* — "How did you make the language German? Mine only does English."
- **@Jecko88, approx. Aug 2025** — *"Die Uhr lässt sich mit WLAN leider nicht verbinden. Wo könnte das
  Problem liegen?"* — "The watch unfortunately will not connect to Wi-Fi. Where could the problem be?"
- PapasVlog's own on-camera caveat, which should be attached to every figure taken from him:
  *"ich kann ja **nie die Uhren über einen längeren Zeitraum testen**, darum sind das immer nur
  Eindrücke die ich hier in ein paar Tagen gewinne"* — "**I can never test the watches over a longer
  period**, so these are only impressions gained over a few days."

**YouTube — TechBuzzIreland full review (EN)** <https://www.youtube.com/watch?v=moogMFCIX2I>
- **@MrFormenis, approx. Aug 2025, 2 likes** — *"on the end I also bought the watch and send it back it
  was un-usable. **Very slow internet despite a good connection with same SIM card on phone in same
  spot. Location is soo inaccurate. A real piece of junk**"* — an independent UK/IE-market Z7 purchase,
  returned.
- **@Prabhu_njd, approx. Aug 2025, 4 likes** — *"I just got this watch for my kids. Chat is paired to
  the phone and can have 1 admin who can add contacts or remove contacts … the admin approves all
  contacts and chats. You can have several contacts to video call. **You can't install whatsapp.**"*
  Confirms the parent-approval contact model from an owner rather than from marketing.
- **@MDealer, approx. Sep 2025, 2 likes** — *"Why on Earth would someone make a rather expensive smart
  watch to talk to the kids who run jump outside and equip it with **pre-GSM audio quality**"* — an
  audio-quality complaint against the review's own recorded call.

**Google Play — live and relevant, but models not stated; do not attribute to the Z7**
- **Danai Aquarius, IE, 1★, 9 Oct 2025, app 9.29.70** — *"Several times a day, **the imoo watch
  location suddenly shows as being in China.** When this happens, I have to close and reopen the imoo
  application and then log in again. Because of this, my children are unable to reach me via video
  calls."* **Third independent instance of location being misreported to a different country** (after
  the Z6 "in another state" and the UK "our kid is in Germany").
- **Ekmi Relöh, DE/AT, 2★, 5 Jan 2026, app 9.36.00** — *"leider aktualisiert er oft nicht oder zeigt oft
  einen falschen Standort an, sodass ich als Elternteil schon manches mal vor Sorgen umgekommen bin.
  Dann zeigt er an, dass das Kind sich plötzlich **kilometerweit mitten in einem Wald** befindet, dabei
  ist er aber in Wirklichkeit um die Ecke auf dem Spielplatz."* — "unfortunately it often does not
  refresh, or often shows a wrong location, so that as a parent I have sometimes nearly died of worry.
  Then it shows the child suddenly **kilometres away in the middle of a forest**, when in reality he is
  round the corner at the playground."
- **Patou Mizuk, DE/AT, 1★, 30 Mar 2026, app 9.36.20** — *"Anders als WhatsApp **erzwingt diese App
  permanente Hintergrundaktivität**. Deaktiviert man das, wird man nach wenigen Stunden automatisch
  ausgeloggt. **Man wird quasi zur Dauerüberwachung genötigt.** Belastet den Akku und wirft
  Datenschutzfragen auf. Finger weg."* — "Unlike WhatsApp, **this app forces permanent background
  activity**. If you disable it you are logged out automatically after a few hours. **You are
  effectively coerced into permanent surveillance.** It drains the battery and raises data-protection
  questions. Hands off." **New privacy finding.**
- **Arno Nym, DE/AT, 1★, 7 Aug 2025, app 9.29.10** — *"Zu Beginn (**vor 3 Jahren**) konnte man die Uhr
  noch hin und wieder orten. Mittlerweile werden falsche Parameter übertragen. Die Uhr kann nicht mehr
  geortet werden oder befindet sich generell lt. Anzeige an einem falschen Ort … Wie vom Hersteller
  gewünscht haben wir O2 und Vodafone Simkarten verwendet. Kein Prepaid, sondern Verträge mit ü30 GB
  Datenvolumen. Nichts — keine Verbesserung."* — "At the start (**3 years ago**) you could still locate
  the watch now and then. By now wrong parameters are being transmitted. The watch can no longer be
  located, or according to the display it is generally in the wrong place … As the manufacturer advises
  we used O2 and Vodafone SIMs. Not prepaid but contracts with 30+ GB of data. Nothing — no
  improvement." Three-year ownership, but **pre-Z7 hardware**.
- Registration and login failure is live and now heavily corroborated in 2026: **M M, DE/AT,
  13 May 2026** — *"nach dem Update kein einloggen mehr möglich"* ("after the update, logging in is no
  longer possible"); **Aukse, IE, 12 Jul 2026** — *"**Can't login to the app for a few month now** and
  support isn't supporting"*; **Victor B., IE, 22 Jun 2026** — *"password reset doesn't work. login
  doesn't work"*; plus **Stephan Ziegler, DE/AT, 19 Feb 2026**, **Melina von Holt, DE/AT, 26 Jan 2026**,
  **Marco Beuchling, DE/AT, 24 Jan 2026**, **Michael B, DE/AT, 25 Dec 2025**, **Gosh Kob, IE,
  12 Mar 2026**, and **Nikshay Shrivastava, IE, 10 Oct 2025** — *"Tried registering with my mobile
  number multiple times, and it just keeps throwing errors. **Never got any verification SMS either.**"*
  **No successful +40 (RO) registration report was found in this pass either.**

**TechBuzzIreland article, read in full** (`proxy.cors.sh`; direct fetch still 403) —
<https://techbuzzireland.com/2025/04/15/imoo-z7-smart-watch-phone-review/>, Jim O Brien, **15 Apr 2025**.
- A **third** unmeasured battery claim, and it contradicts the other two: *"Call and video quality is
  quite good once you have a decent signal and the battery will last **between 2-5 days** depending on
  use, the location history also lasts 14 days in a cycle."* No method, no interval, no usage profile.
  Do not treat as data.
- He writes *"IP68 water proof"* in his own prose while the block below it says *"IPX8"* — the review is
  internally inconsistent on the rating.
- Everything under his "Features" heading is **verbatim imoo Amazon marketing copy**, including
  *"Real-time Locating & 14-Day History"* and *"IPX8 Swimming Water-resistant … up to 20 metres"*.
- One useful non-marketing detail: *"The watch's default language is English, but it can be set to
  **German, Spanish and Polish**."* Compare @sezincolkusu5985 above, who could not get German.
- The page has **no reader comments** — the section is a JavaScript "Loading Comments…" stub with none.

### C. Things that did NOT change

- **No source in any language states a tracking or location-update interval.** Still UNKNOWN after this
  pass. The closest anyone comes is PapasVlog showing a manual refresh control and saying *"nochmal
  aktualisieren, falls euch die Aktualisierung länger dauert"* ("refresh again if the update is taking
  you a while"), and **Renata L., IE, 2★, 7 May 2026** — *"correct location, but also **refreshing quite
  rarely itself**"* (about a **Z1**).
- **Still no Z7 owner report past about six months.** The longest Z7-verified spans found here are
  Thomas „Zocker Kill" (5 Jul 2024, i.e. at launch) and Thomas H (*"seit Weihnachten"*, about three
  weeks at time of writing). Multi-year accounts exist only for the Z6 and older hardware.
- **PcComponentes.es still shows zero reviews on both Z7 listings**, re-verified 2026-08-19 — and both
  are now **marketplace-only** (*"Vendido y enviado por PuntobyZE"*; blue €245.67, pink €184.09),
  whereas the Z1 is sold and shipped by PcComponentes itself and carries 2.8/5 from 4 reviews.
- **imoo's two Trustpilot profiles still disagree**: `imoo.me` 4.7 from 271; `imoostore.com` 2.8 from
  55. The `imoostore.com` negatives read in this pass (Maeve McKillop US, Fabio Primavera IT, Russell
  Haldin GB, Richard Clarkson GB, Ssve Bee AU, A Galla) **do not name a model**, so none can be
  attributed to the Z7 — including the "81 days without a location update" report and the "GPS not
  working after 12 months" report, both of which should be marked model-UNKNOWN. Two of the six are
  outside Europe (US, AU).
- **`data_region` remains UNKNOWN.** Nothing found in this pass names a data-centre jurisdiction.

### D. Target table — what worked and what did not

| Target | Result | Method that worked, or methods that failed |
|---|---|---|
| techbuzzireland.com Z7 review | **Read in full** | `proxy.cors.sh` (direct = 403) |
| whatgadget.net Z7 review | **Read in full, and dated 2024-07-22** | `r.jina.ai` (direct = 403) |
| Trustpilot `imoo.me` Z7 search, page 1 | **Read — 20 reviews with names, countries, per-account review counts** | `r.jina.ai` + `x-respond-with: html` → `__NEXT_DATA__` |
| Trustpilot `imoo.me` Z7 search, page 2 | **Still blocked — 10 Z7 reviews unread** | AWS WAF interstitial via `r.jina.ai` (3 tries), `proxy.cors.sh` 403, allorigins 522, codetabs 522 |
| Trustpilot individual review permalinks | **Read** (flaky, roughly 60 % success; retrying works) | `r.jina.ai` |
| Trustpilot `imoostore.com` | **Read** | `r.jina.ai` |
| YouTube PapasVlog — 34 comments | **All extracted** | `yt-dlp --write-comments` |
| YouTube PapasVlog — transcript | **Extracted (DE auto-captions)** | `yt-dlp --write-auto-subs` |
| YouTube Jagat Review — transcript and 181 comments | **Extracted** | `yt-dlp` |
| YouTube TechBuzzIreland ×2, domoticaencasa (ES), TNN — comments | **All extracted** | `yt-dlp` |
| Google Play review stream | **366 unique reviews across 12 EU storefronts** | `batchexecute` `UsvDTd` RPC, paginated |
| testbericht.de Z7 rosa and blau | **Read — and shown to describe the wrong product** | `r.jina.ai` at corrected `/produkte/` URLs (the `/imoo-watch-phone-z7` path is a 404) |
| PcComponentes.es | **Read (search listing)** | `r.jina.ai` |
| Otto.de search listing | **Read** — four Z7 listings, incl. `/p/imoo-watch-phone-z7-kinder-smartwatch-3-3-cm-1-3-zoll-mocor-os-2044230252/` | `r.jina.ai` |
| **Otto.de Z7 product pages** | **Still unreadable — the 7 German ratings remain UNKNOWN** | HTTP **400** from `r.jina.ai`, from `proxy.cors.sh`, and from direct curl with a Chrome UA and `Accept-Language: de-DE`. The 400 comes from Otto's origin on every path tried, so it is **not** a bot block; Wayback returned 429. |
| **Amazon `/product-reviews/<ASIN>`** | **Still blocked** | `r.jina.ai` lands on Amazon's sign-in page on .co.uk and .es; `/dp/` for the previously-recorded ASIN now returns 404, i.e. the listing is gone |
| **Reddit** | **Still blocked** | `r.jina.ai` on old.reddit 403; `search.json` with a custom UA 403; codetabs 522; pullpush.io 429 (paid service only) |
| **forum.softpedia.com `1203559-ceas-gps-copil`** | **Still blocked** | `r.jina.ai` → Cloudflare CAPTCHA; `proxy.cors.sh` 403; codetabs 522; Wayback 404 (never archived) |
| Ceneo.pl, Allegro, x-kom, Alza, MediaExpert, Fnac | **Still blocked or no usable content** | `r.jina.ai` returned empty bodies; the Ceneo ID 145243970 recorded earlier resolves to an unrelated product (a rug) |
| Empik.pl | **Read** — 2 imoo products listed, no Z7 review content | `r.jina.ai` |

---

## Reddit sweep (2026-08-19)

*Method: logged-in Chrome session on `old.reddit.com` and `www.reddit.com`. Reddit's post search
(`/search.json`) indexes titles and self-text only; its **comment** search
(`www.reddit.com/search/?type=comment`) does index comment bodies and is where nearly all of the owner
evidence below came from. Every thread cited was opened and read in full, including collapsed and
low-score comments (pulled via each thread's `.json?limit=500`). Queries run are listed at the end. The
previous sweep recorded Reddit as "unreachable from this environment" — that is no longer true, and
everything below is new.*

**Headline: the sweep did not corroborate the Z7's two most damaging claimed defects, and it did not
overturn them either. It also found something worse than either: the single most detailed Z7 "owner"
post on Reddit is a brand-styled account whose profile returns zero content, and the only substantive
replies to it came from two corporate accounts and one Garmin partisan. There is no second Reddit owner
describing the SOS at all.**

### 1. SOS usability — NOT corroborated on Reddit, and the source is weaker than it looked

The "draw a C on the screen" claim has exactly **one** origin on Reddit, and it is the post the previous
sweep already found. Verbatim, from u/**AlertMask_Official**, r/smartwatch, *"Smart Watch for kids?"*,
**12 Aug 2026** (https://old.reddit.com/r/smartwatch/comments/1vmpng6/smart_watch_for_kids/):

> *"**The SOS is a gesture** — you draw a "C" on the screen. My 6-year-old cannot reliably do it. I want
> a physical button."*
> *"**No auto-answer / listen-in** on the UK units. If she doesn't pick up, I've no way to reach her or
> hear what's going on. (Apparently that feature only ships on imoo's Asia models.)"*

The same text, word for word, was posted the same day to r/ParentingAndTech as *"Is the
'does-everything' kids smartwatch a myth? (UK — and I've done the research)"*
(https://old.reddit.com/r/ParentingAndTech/comments/1vmp9d5/is_the_doeseverything_kids_smartwatch_a_myth_uk/),
where it has **0 comments**.

**Account check, and it is not reassuring.** `AlertMask_Official` was created **20 Jan 2026**, has
**13 comment karma and 6 link karma**, carries the `_Official` suffix that Reddit brand accounts use,
and — this is the odd part — **its profile overview returns zero items** (`/user/AlertMask_Official/`
renders *"there doesn't seem to be anything here"*, and `overview.json` returns an empty listing) even
though both posts are live and searchable. Its content is hidden from its own profile listing. Note the
direction of the bias though: the post is *negative* about imoo and steers toward TickTalk 5 and Angel
Watch Series R, so if it is marketing it is **not imoo's** marketing. Treat the framing as promotional
for something else; the two specific claims remain checkable and unchecked.

**Who replied, and why none of it is corroboration.** The thread has 5 comments and **not one is from
another imoo owner**:

- u/**jaamgans**, 15 Aug 2026 — a Garmin advocate, no imoo experience. Useful only as a contrast:
  *"Bounce 2 SOS is press top button for 10s - will vibrate 3 times and show a countdown on the screen -
  if no further action it will go out to the emergency contacts."* He also raises a UK legal point about
  listen-in: *"pretty grey area in UK - while not illegal to sell or buy, using it depends on where the
  kid is and who else may be there."*
- u/**EE_uk** ("— Georgia at EE"), 18 Aug 2026, **twice** — a **carrier brand support account**. It does
  not confirm anything; it paraphrases the OP back at him: *"Realistically, the imoo Z7 sounds closer to
  your wishlist than anything currently available. If physical SOS is the priority, the compromise may be
  accepting weaker health features on another watch."* **Zero first-hand content. Do not count this as a
  second source.** A near-twin account, u/**EE__UK** (two underscores), posted a similar generic reply in
  r/smartwatch *"Smartwatch for kids"* (1s2wtt5) recommending **Samsung** instead — the two EE accounts
  do not even agree with each other.

**Clean negatives, queries listed at the end.** Reddit comment search for `imoo SOS` returns **only the
EE_uk comment** — no owner, anywhere on Reddit, has ever described triggering the Z7's SOS. A search for
`kids watch SOS gesture draw screen` returns **zero results site-wide**. **No Reddit source describes a
physical-button SOS on any imoo model**, and **no Reddit parent reports whether their child can or cannot
use it.** The only independent corroboration of the gesture-SOS problem in this whole project remains the
Polish Play Store review already recorded above (Roman Mushchynka, PL, 28 Jul 2026: *"Nie wiem jak dziecko
włączy alarm w stresującej sytuacji"*). **Two sources, one of them a suspect Reddit account and neither of
them independently verifiable, is where this stands. It is still the single most important thing to test
before the return window closes.**

**Auto-answer / listen-in:** likewise **uncorroborated and unrefuted**. No Reddit owner mentions
auto-answer on any imoo model, in the EU or in Asia. The claim that it is Asia-only firmware rests on one
sentence from one suspect account, and it sits alongside imoo's own App Store copy which *does* describe
the feature. Unresolved.

### 2. Account / registration flow by country — no refusal found anywhere, and one useful counter-example

**There is no report on Reddit, in any subreddit, of imoo registration being refused for a country.**
Comment searches for `imoo account code register` and `"imoo" zegarek OR Polska OR Kinder OR Deutschland
OR copil` return nothing relevant. **Zero imoo content exists on Reddit from Romania, Bulgaria, Hungary,
Poland, Greece or Czechia** — not a negative report, not a positive one, nothing. r/Romania returns no
imoo posts and no `ceas cu GPS` / `ceas smart copil` threads of substance.

**The one genuinely new datapoint cuts *against* the country-page theory** — and it is sibling evidence,
not Z7:

> u/**souljay**, r/CasualPT (**Portugal**), *"Uma airtag ou algo assim"*, ~1 year ago (2025):
> *"Olá a minha filha usa um relógio imoo z1. Tem GPS e posso ver sempre onde está e também posso lhe
> fazer chamadas de áudio e vídeo assim como mandar mensagens. O telefone não tem Internet nem suporta
> outras apps e ainda posso controlar a quem ela pode ligar e quem pode ligar a ela. … Estou 1000pct
> satisfeito."* — *"My daughter uses an imoo z1 watch. It has GPS and I can always see where she is and I
> can also make audio and video calls to her as well as send messages. The phone has no Internet and does
> not support other apps and I can also control who she can call and who can call her. … I am 1000pct
> satisfied."*

**Portugal is not on imoo's supported-country page** (which lists only DE, UK, FR, IT, IE, ES, PL for
Europe) — yet a Portuguese parent registered, bound a watch, and runs video calls. **This is the first
evidence in this project that imoo's country selector is not a hard gate on the account flow.** It is the
**Z1, not the Z7**, and it is one report, so it does not move `ro_status`. But it materially weakens the
inference that "Romania absent from the country page" implies "Romania blocked at registration".

**Working EU/UK/IE registrations found (all sibling models except the first):**

- **Z7, Ireland** — u/**Standard_Pudding_461**, r/AskIreland *"Kids Tracker watch or device?"*, ~6 May 2026
  (https://old.reddit.com/r/AskIreland/comments/1t5razu/kids_tracker_watch_or_device/): *"Recently bought
  a imoo z7 for my daughter who has reached the same age where she's looking for some more freedom etc.
  Got SIM from Tesco, €10 per month. Live location, she can ring or message anytime. Complete control of
  who contacts her, class times etc. I was sceptical at first. But it's been a great help daily to be
  honest."* Daughter turned 11 in February. **This is the only unambiguously positive, dated, first-hand
  Z7 owner report found on Reddit, and it is from the EU.**
- **Z1, Ireland** — u/**Imaginary-Knee-9492**, r/AskIreland *"Imoo z3 kids smart watch?"*, ~27 Jun 2026:
  *"My kids both used the Imoo z1 and they did the job. My son is using his up to 2 years now. They can
  call pre-approved friends or adults, and can send voice messages to anyone with the app, or another
  watch. We got a basic Tesco SIM and are paying 10 a month!"*
- **Z1, Ireland** — u/**Fluffy-Republic8610**, r/CasualIreland *"Imoo Z1 watch"*, 9 Oct 2024: *"Yes I have.
  They work on our networks. I got a cheap pay as you go sim from meteor at the time … And all that geo
  location stuff worked fine and my daughter was able to send me voice messages and emojis etc."*
- **Z1, UK** — u/**ChristmasCage**, r/AskUK, ~2025: *"My 8 year old uses an imoo tracking watch and has
  done for most of the last year … paired with a cheap giffgaff sim allows us to call him and him to call
  us. … We got the imoo Z1 model for reference."*
- **Z1, UK** — u/**CosyColouringBooks**, r/UKParenting *"Imoo Z1 kids watch"*, follow-up **15 Jun 2026**:
  *"We did get it 🙂 so far it's great, we've had no issues with it and the gps is pretty good as well
  which was the main thing we wanted it for."*
- **imoo (model unstated), Ireland** — u/**disagreeabledinosaur**, r/AskIreland and r/Millennials, several
  comments 2025–2026: *"We have the imoo watch for my 9 year old. Works great. It helps that all his
  friends have the same one because there are some features, mostly leaving voice notes, that work best
  with other imoo watches."*
- **imoo (model unstated), UK** — u/**kitknit81**, r/Parenting, 8 Oct 2025: *"U.K. here and my kid as the
  imoo watch. But not a lot of kids seem to use this or a similar brand."*

**Does the flow gate on phone prefix, app-store country or shipping country?** **Still UNKNOWN.** No
Reddit source addresses the mechanism. Nobody describes the sign-up screen at all.

### 3. Battery, observed — two more unquantified "good"s, both from Asia. Nothing changes.

- u/**HereForBeer07**, r/askSingapore *"Smartwatch to track my P3 kid taking public bus to home"*,
  ~Jan 2026 (**Singapore**): *"Bought Imoo Z7 for my kid in 2024, still working fine. **Good battery
  life** and tracking available. **Calling quality could be better.**"* — Z7-verified, but **no figure and
  no usage profile**, and it is an Asian unit. Doubles as the best longevity datapoint found: a 2024 Z7
  still in service in 2026.
- u/**IamDplan**, r/Bengaluru *"Kids Smart watch with GPS can calling function?"*, ~Nov 2025 (**India**):
  *"Imoo . Bought it one month back and love it . Expensive but a very good watch . **Battery lasts for 2
  days easily** which is the best feature."* — **model not stated**, India, non-EU firmware.

**No Reddit owner anywhere gives a percentage after a school day, or any number at all for the Z7.**
`battery_observed_h: 24` (Notebookcheck) stands as the only measured figure; `battery_claimed_h` stays
UNKNOWN. The two "2 days / good" reports are consistent with the unquantified 2–3 day claims already in
this document and add no measurement.

### 4. Tracking interval — the exact question was asked on Reddit and never answered

This is the cleanest negative in the sweep and it is worth recording precisely, because it shows the
question is not just unanswered by imoo but unanswered by the owner community:

> u/**adjei7**, r/CasualIreland *"Imoo Z1 watch"*, ~Feb 2025:
> *"I currently have a porodo watch, where the app automatically updates the gps location every 10mins,
> 30mins or 1h, or I can manually update it whenever I want. **How often does the Imoo update the
> location? Can you change the frequency**, or is it just always on and you can track movement? … does it
> have a geofence feature that tracks when the watch enters or leaves a certain GPS area?"*

**No one replied.** The thread ends there.

The only owner language that touches it is u/Standard_Pudding_461's *"Live location"* (Z7, Ireland,
May 2026) — a satisfied parent's phrase, not a measurement, and fully compatible with imoo's documented
model of an **immediate on-demand fix plus hourly background reporting**. A separate Z1 owner reports
geofencing simply **not firing at all**: u/**hokan0**, r/smartwatch *"Imoo watch z1"*, 1 Feb 2026 —
*"on geofence on Z1 model it does not seem to work i added locations like school or home, but i get no
info when child exits or enters area"* (1 comment, unresolved). Sibling model, but it is the failure mode
you would expect if background position reporting is coarse.

**`update_interval_min: 60` is unchanged and still rests entirely on imoo's own EU Data Act disclosure.
No owner confirms or denies it, and no owner describes a live/follow mode.**

### 5. Data jurisdiction — no DSAR, no traffic capture, but a real owner corroboration of the Wi-Fi-password field

The most substantive privacy finding in the sweep, and it is first-hand:

> u/**slomobileAdmin**, r/DigitalPrivacy, *"kids watch stores all SSIDs and passwords on company servers"*,
> **4 Jan 2026** (https://old.reddit.com/r/DigitalPrivacy/comments/1q3jfzr/kids_watch_stores_all_ssids_and_passwords_on/):
> *"I recently got an imoo child's smartwatch for ages 3-12. There was a QR code link to its privacy
> policy during the setup of the watch. It said that they store the GPS location, SSID, and password of
> **every WiFi network the watch connects to**. Not just on the watch, which would be expected, but it is
> **sent to the company servers** where it is potentially shared. … **There is no option to opt out other
> than not using the $300 watch.**"*
> and, in a follow-up: *"how would changing the network SSID stop the watch from sending the new SSID and
> password **to imoo** once the child connects the watch to it?"*

This is an owner reading **imoo's own in-setup privacy policy** and reporting the same schema this
document already found in imoo's EU Data Act disclosure (*"Watch's Networks: Wi-Fi name, password, MAC
address"*). The Data Act document annotates several such fields as "not collected" in current builds;
**this owner reports the setup-time policy asserting the opposite, without an opt-out.** Model not stated
(the price and age range fit the Z7 or X10) and the user's country is not stated, so it is **not** a
Z7-EU finding. The 33-comment thread produced no jurisdiction answer — the replies argue about whether
this is normal industry practice, not about where the data lands.

**Nobody on Reddit has filed a GDPR/DSAR against imoo, inspected its traffic, or reported an answer from
imoo support about data location. `data_region: UNKNOWN` stands.**

### 6. What can be turned off permanently — nothing new, one useful mechanism confirmation

**No Reddit source describes permanently disabling the camera, the App Center/games, or friend-adding on
any imoo model.** The comment search `imoo camera games class mode` returns **zero results**. Class Mode
is mentioned only in passing (Standard_Pudding_461: *"class times etc"*).

One relevant mechanism note, category/sibling evidence:

> u/**argruid**, r/Bengaluru *"Which kids calling watch Bengaluru parents use?"*, ~May 2026:
> *"Certain features like the **bump to add friends** etc **work only on watches of the same brand**."*

That confirms the physical bump/shake add-friend mechanic is brand-locked — it constrains *who* can be
added, but says nothing about whether a parent can switch the mechanism off. `extras_disableable: partial`
is unchanged.

**A contradiction worth flagging:** u/**MuscleLow8449** (r/smartwatch, 26 Apr 2026) claims of imoo:
*"No games, no apps, no internet bloat."* That is **false for the Z7**, which ships an App Center, and it
is one of the astroturf-suspect accounts below. Discount it.

### 7. Positioning quality — three owner impressions, two of them from suspect accounts

- **Genuine-looking, Z7:** u/**Rumpledum**, r/Parenting, **27 Dec 2025**: *"We just got our eldest an
  imoo z7 which is absolutely a Chinese brand. Gps tracking video calls etc. seems pretty good but could
  absolutely do with some more features, **certain parts of the parent interface are a bit janky**."*
  (Thread is about Western parents; country not stated.)
- **Genuine-looking, Z7, Ireland:** u/Standard_Pudding_461's *"Live location"* report above.
- **Suspect:** u/**marketingmeme**, r/smartwatch *"Smartwatch for kids"* (1s2wtt5) — *"We landed on an
  imoo watch mainly for GPS accuracy; **the multi-satellite tracking held up way better indoors** than a
  single-GPS one we tried first."* **This exact comment was posted twice in the same thread**, three weeks
  apart, with the nephew's age changed from 9 to 10 and the phrase *"Not sponsored, just sharing what
  worked"* present in one version and absent from the other. That is a template, not a memory.
- **Suspect:** u/**MuscleLow8449**, r/smartwatch, 26 Apr 2026 — *"GPS has been solid for us, shows location
  within a few metres consistently."* Account created 2024, **0 comment karma, and this is the only comment
  it has ever made.**

**Net: the only indoor-accuracy praise for imoo on Reddit comes from the two accounts that look seeded.
The believable Z7 owners say "seems pretty good" and "live location", with no numbers, no cold-fix times,
and nothing about Galileo/BeiDou. Positioning quality in real use remains unmeasured.**

### 8. Failure modes, support and firmware

**The strongest negative signal in the sweep is a cluster of app/telephony provisioning failures on
imoo Z1 units in Ireland and Northern Ireland** — the same class of risk as the Romanian unknown, i.e.
vendor/carrier-side rather than radio-side. From r/AskIreland *"Imoo z1 kids watch phone sim advice
please?"*, 20 Dec 2024 (https://old.reddit.com/r/AskIreland/comments/1hiklrd/):

> u/**cloudstrife1111** (Northern Ireland, Lebara): *"Eldest got one of these and having issues with it.
> … I've updated the **APN settings** so hopefully that fixes the issues outside. It's also **frequently
> saying it's not connected even when indoors and on WiFi**. I can call and message but **video calls
> aren't working. When I ring from the watch I can't answer on my phone and when I ring from my phone it
> doesn't ring on the watch.**"* He adds separately: *"The screen can scratch rather easily I've found."*
> u/**OkNeedleworker8989** (Northern Ireland, Lebara): *"I'm in the North also using Lebara and having the
> same issues. **I can ring the watch but the watch can't ring me. Seems kinda pointless if kid needs
> me.**"*
> u/**Tiny-Owl-4609**: *"I'm having the exact same problem. I can ring the watch directly from my phone's
> contacts list no problem, but **if I try ring through the imoo app, it rejects the call**. Can't see any
> reason for it."*

**Three independent users, one-way calling broken, none of them resolved in-thread, and manual APN entry
required.** Sibling model (Z1) and a UK MVNO, so it does not transfer directly to a Z7 on Orange or Digi —
but it is precisely the failure mode a Romanian buyer must test in week one, and it demonstrates that the
imoo app's call path can fail independently of the SIM working.

Other items:

- **Churn away from the brand, Ireland:** u/**Pugafy**, r/AskIreland, ~27 Jun 2026: *"we started off with
  Moochies (load of shite) and **a couple of their pals has the imoo. Couple of years later they all have
  the Xplora.**"* One anecdote about a friend group, not a defect report — but it is the only longitudinal
  comment on imoo in Europe found, and it points the wrong way.
- **Competitor astroturf, flagged and rejected:** u/**TickTalkTech** (a vendor account) in r/smartwatch
  *"Anyone in the US using an Imoo watch?"*, ~21 May 2026: *"The Imoo watch is popular in Asia and
  **designed for China Mobile's network**, so US compatibility is hit or miss."* **This is a competitor
  making a technical claim about a rival's radio, and for the EU SKU it is simply wrong** — imoo's own EU
  spec sheet lists B1/B3/B8/B20 + TD-LTE with VoLTE. Recorded only as an example of the astroturf density
  in this category. The same account posted a sales reply in r/Netherlands.
- **Region/firmware:** the only Reddit thread asking whether an imoo works outside Asia (r/Bangkok, *"Imoo
  watch"*, 2024) received **no answer at all**. u/**Such-Nobody-2482**, r/smartwatch (2024), asked whether
  a Chinese-market **okii R6** can be reflashed to imoo's English firmware — also unanswered. **No Reddit
  source documents any EU-vs-Asia firmware difference**, which means the "auto-answer is Asia-only" claim
  has no support here.
- **No bricking, no failed firmware update, and no imoo warranty or RMA experience of any kind was found
  on Reddit, for any model, in any country.**
- **The Netherlands is an imoo blank.** r/Netherlands *"Smartwatch for kids"* (10 Jul 2026, 21 comments)
  is dominated by **One2Track**; **imoo is not mentioned once**. Useful for calibrating how thin imoo's EU
  consumer footprint actually is outside UK/IE.

### Astroturf ledger for this sweep

| Account | Where | Why flagged | What survives |
|---|---|---|---|
| u/**AlertMask_Official** | r/smartwatch + r/ParentingAndTech, 12 Aug 2026 | `_Official` suffix; identical text cross-posted to two subs the same day; account created Jan 2026 with 13/6 karma; **profile overview returns zero items despite live posts**; steers to TickTalk 5 / Angel Watch R | The two factual claims (gesture SOS, no EU auto-answer) are specific and checkable — **still unchecked**. The praise ("2–3 day battery", "genuinely good GPS") is uncorroborated marketing-shaped prose. |
| u/**marketingmeme** | r/smartwatch 1s2wtt5, two comments | **Same comment posted twice in one thread**, nephew's age changed 9→10, *"Not sponsored"* added to one | Nothing. Discard. |
| u/**MuscleLow8449** | r/smartwatch 1r8s394, 26 Apr 2026 | **Only comment the account has ever made**; 0 comment karma; opens by disparaging a competitor | Nothing. Its factual claim ("no games, no apps") is **wrong for the Z7**. |
| u/**EE_uk** / u/**EE__UK** | r/smartwatch, Aug 2026 and Mar 2026 | Carrier brand accounts signing *"— Georgia at EE"*; two near-identical usernames giving contradictory advice; zero first-hand ownership | Nothing evidentiary. Their apparent endorsement of the Z7 is a paraphrase of the OP. |
| u/**TickTalkTech** | r/smartwatch, r/Netherlands | Competitor vendor account | Nothing. Its imoo radio claim is false for the EU SKU. |
| u/**Ok-Concept-736** | r/ParentsOutsmartKids, 2025 | Emoji-laden *"Raksha Bandhan gift idea … a pair of imoo WatchPhones"*, 0 comments, promo-shaped | Nothing. |

**No account with a "Brand Affiliate" flair was found in these searches**, and no imoo-branded username
was found posting in any parenting or smartwatch subreddit. The astroturf that *is* present is unbranded
seeded accounts and competitor vendor accounts.

### Queries run (so the negatives are auditable)

**Reddit post search** (`old.reddit.com/search`, all-time; relevance, new, top and comments sorts):
`imoo`; `"imoo Z7"`; `imoo watch`; `imoo kids watch`; `title:"Kids Tracker watch or device"`;
`title:"Parents in China give"`; `title:"Smartwatch for kids"`; `title:"Best kid smartwatch mainly for
tracking"`. Subreddit-restricted: `r/smartwatch q=imoo`; `r/Romania q=imoo OR "ceas cu GPS" OR "ceas smart
copil"`.

**Reddit comment search** (`www.reddit.com/search/?type=comment`): `imoo`; `"imoo Z7"`; `"imoo watch"`;
`imoo SOS`; `imoo battery`; `imoo app location`; `imoo account code register`; `imoo camera games class
mode`; `"imoo" friends add`; `"imoo" zegarek OR Polska OR Kinder OR Deutschland OR copil`; `"imoo" privacy
OR GDPR OR data OR servers`; `"imoo" watch problem OR offline OR broken OR support`; `"imoo z6" OR "imoo
z1" OR "imoo x10" OR "imoo z3"`; `"imoo" updates location every minutes`; `kids watch SOS gesture draw
screen`.

**External site-scoped search** (DuckDuckGo HTML endpoint; Bing's `site:` operator returned unrelated
results and was abandoned): `site:reddit.com imoo watch SOS`; `site:reddit.com imoo battery watch kids`;
`reddit "imoo" watch SOS button child`; `site:reddit.com imoo watch account registration country not
supported`; `site:reddit.com imoo Romania OR Bulgaria OR Hungary ceas copil`.

**Threads opened and read in full:** r/smartwatch 1vmpng6, 1tjt8gu, 1uiznh8, 1qt0pgm, 1s2wtt5, 1r8s394,
1c7afap; r/ParentingAndTech 1vmp9d5; r/AskIreland 1uhdcvc, 1hiklrd, 1t5razu; r/CasualIreland 1fzr378;
r/UKParenting 1qqdk2l; r/Parenting 1o1h273; r/Netherlands 1usfqj6; r/DigitalPrivacy 1q3jfzr;
r/askSingapore 1jrb7fl; r/Bangkok 19b2zn4.

### Verified absences (searched, nothing found)

- **No Reddit report of imoo registration failing, or being refused, in any country.**
- **No Reddit content about imoo from Romania, Bulgaria, Hungary, Poland, Greece or Czechia** — none, in
  any language, in posts or comments.
- **No second Reddit owner describing the Z7's SOS**, and no description of a physical-button SOS on any
  imoo model.
- **No Reddit owner quantifying Z7 battery**, and none reporting a school-day percentage.
- **No Reddit answer on tracking interval** — the question was asked directly (Feb 2025) and ignored.
- **No GDPR/DSAR, traffic capture, or data-centre answer** for imoo.
- **No permanent camera-off, games-off or friend-adding-off** report.
- **No bricking, failed firmware update, warranty claim or RMA experience** for any imoo model.
- **No imoo mention at all in r/Netherlands' 2026 kids-smartwatch thread** (One2Track dominates).

### What this changes in the document above

**Nothing in the YAML frontmatter meets the evidence bar to change.** `ro_status` stays `unknown`;
`update_interval_min: 60` stays vendor-sourced; `battery_observed_h: 24` and `battery_claimed_h: UNKNOWN`
stay separate and unchanged; `data_region` stays `UNKNOWN`; `extras_disableable` stays `partial`.

Three prose-level corrections, recorded here rather than edited into the earlier sections:

1. The earlier sweep's line *"Reddit is unreachable from this environment"* (in **User reviews — EU-wide
   sweep**) and the *"Reddit | Still blocked"* row in the **Retry pass** target table are **now obsolete**.
   Reddit was fully readable in this pass.
2. **A dated, positive, first-hand Z7 owner report from an EU country now exists** (Ireland, ~May 2026,
   Tesco SIM). It does not touch Romania, but the earlier framing that essentially all Z7 owner evidence
   sits on imoo's own properties is further weakened.
3. **imoo's supported-country page is demonstrably not a hard gate on the account flow** — a Portuguese
   Z1 owner is running the app and video calls from a country absent from that page. Sibling model, one
   report, but it is the first evidence in either direction on that mechanism.

---

## Battery evidence sweep (2026-08-19)

*Scope: every dated, first-hand battery observation of the **Z7** that could be found in any
language. Method: Chrome (logged-in session) for Trustpilot, Amazon DE/UK/ES/IT, Allegro.pl,
Alza.cz, Heureka.cz, eMAG.ro, Bol.com, MediaMarkt.pl and Reddit; direct `curl` with a desktop UA for
Amazon product HTML (which works even though `/product-reviews/` does not); Google Play's
`batchexecute` `UsvDTd` RPC across 18 locales; Apple's public `rss/customerreviews` feed across 28
storefronts; `yt-dlp` for YouTube transcripts and comment trees; Googlebot UA / `r.jina.ai` /
`proxy.cors.sh` for bot-walled editorial pages. **Every quote below was read on the page.**
Nothing is taken from a search-engine summary.*

**Model verification.** Amazon prints the exact variant each reviewer bought (`Model: Z7 Blau`,
`Style Name: Z7`, `Colour Name: Z3-Blue`, …). Every Amazon row below was checked against that field,
which is why one previously-recorded datapoint had to be struck — see *Corrections*.

### Headline

**Roughly 20 dated, Z7-verified, first-hand battery observations now exist, up from about six.**
But only **three** of them attach a percentage to a stated window, and only **one** of those three
is shaped like a school day. The 2.6× disagreement between the two lab tests is now **partly
explained and partly still open**.

### The table

`W` = window, `Int` = tracking interval stated, `Off?` = was the factory overnight power-off on,
`Ver` = model verified.

| # | Date | Source | Country | W | Int | Off? | Figure / what the watch was doing | Ver |
|---|---|---|---|---|---|---|---|---|
| 1 | 2025-04-04 | Notebookcheck, Benedikt Winkel (lab) | DE | **24 h** | no | **not stated for the run**; article says factory default is ON | **12% left after 24 h** — worn all day, one short call, some photos. Also 3%→45% in 30 min, ~80 min to full | Y |
| 2 | 2025-04-29 | Jagat Review (lab, video only) | ID | **"per day"** — undefined | no | **not stated** | **−34%/day**, "mostly connected over cellular"; extrapolated to "almost 3 full days". Charge 0→100 in ~1 h 40 | Y |
| 3 | 2024-12-05 | PapasVlog (YouTube, supplied unit) | DE | "a few days" | no | not stated | "**about one day**" under normal use; 1.5–2 days if the child only glances at it. Identifies 168 h as the *standby* figure | Y |
| 4 | **2025-01-06** | **Breogán, Amazon.es, 5★ VP, `Style Name: Z7`** | **ES** | **one waking day** | no | n/a — charged nightly | **"Lo cargan todas las noches con un 50% de batería"** — *"they charge it every night at 50% battery."* Heavy video-call household, two children | **Y** |
| 5 | 2025-05-18 | **DirkH**, Amazon.es, 5★ VP, `Style Name: Z7` | DE | ~2 days | no | **ON, and named as the cause** | "Der Akku hält locker **2 Tage** durch, teilweise sogar mehr" + **"das automatische Ausschalten der Uhr über Nacht verlängert die Akkulaufzeit deutlich"** | Y |
| 6 | 2026-01-23 | Amazon Customer, Amazon.de, 5★ VP, `Model: Z7 Blau` | IE | ~2 days | no | **ON (user-set)** | "**Battery lasts about 2 days and you can set it to turn off overnight**" | Y |
| 7 | 2024-12-30 | Tatiana, Amazon.es, 5★ VP, `Style Name: Z7` | ES | 2 days | no | not stated | "con **uso diario a tope** nos ha durado **dos días**" — *"with full-on daily use it lasted us two days"* | Y |
| 8 | 2024-12-06 | alvarogasteiz, Amazon.es, 5★ VP, `Style Name: Z7` | ES | 1–2 days | no | not stated | "**entre 1 y 2 días con un uso intensivo**, incluyendo llamadas, mensajes y videollamadas" | Y ⚠ |
| 9 | 2024-12-25 | IÑIGO RUIZ-OLALLA, Trustpilot `imoo.me`, 1-review acct, 5★ | ES | 1–2 days | no | not stated | "🔋BATERIA: la duración de la batería es bastante buena, **entre 1 y 2 días con un uso intensivo**" | Y ⚠ |
| 10 | 2025-04-11 | **Noby Jose**, Amazon.co.uk, 4★ VP, `Set name: Z7-Blue` | UK | — | no | not stated | "It has good battery life (**Z1 has better life**)" — same household owns both. Also "(Z1 has better indoor GPS tracking)" | Y |
| 11 | 2024-08-25 | Amazon.co.uk, 5★, `Set name: Z7-Blue` | UK | "a full day" | no | not stated | "the battery life is another area where the IMOO Z7 shines… **lasts long enough to get through a full day of use** without needing a recharge" | Y |
| 12 | 2026-06-24 | Balkan Nostalgie, Amazon.de, 4★ VP, `Model: Z7 Weiß` | DE | "beyond the day" | no | not stated | "Je nach Nutzung **reicht eine Ladung problemlos über den Tag hinaus**" | Y |
| 13 | **2026-06-16** | **Dietrich, Lisa**, Amazon.de, **2★** VP, `Model: Z7 Weiß` | DE | — | no | not stated | "**Ständig geht die Uhr aus, obwohl der Akku noch halb voll ist.**" — *"the watch keeps switching off even though the battery is still half full."* | **Y** |
| 14 | **2025-11-03** | Amazon Kunde, Amazon.de, **2★** VP, `Model: Z7 Blau` | DE | **~11–12 months** | no | n/a | "Wir waren **ein knappes Jahr** mit der Uhr zufrieden… Sie fängt an zu laden, bricht dann aber ab. **Ich denke ein defekter Akku kann der Grund sein.** Jetzt startet die Uhr nicht mehr." | **Y** |
| 15 | 2024-09-14 | "Elly", Amazon.de, 5★ VP, `Model: Z7 Blau` | DE | "the first hours" — **unquantified** | no | not stated | "**noch 80% Akku**" after the child spent the first hours trying everything | Y |
| 16 | 2025-03-26 | "JS", Amazon.de, 5★ VP, `Model: Z7 Blau` | DE | ≥3 days | no | not stated | "Akku **mindestens 3 Tage** bei normaler Nutzung. **Ab 20% schaltet die Uhr in den Energiesparmodus**" | Y |
| 17 | 2024-09-20 | Amazon Kunde, Amazon.de, 5★ VP, `Model: Z7 Blau` | DE | — | no | n/a | mechanism, not a figure: "**ich kann per App einstellen in welchem Batteriezustand die Uhr in den Sparmodus geht**" — the reserve threshold is user-set | Y |
| 18 | 2026-03-10 | Fridrik Thordarson, Amazon.co.uk, 5★ VP, `Colour Name: Z7-Blue` | UK | **"just a few days" of ownership** | no | not stated | "The Z1 usually lasted about **five to seven days**… so far the Z7 seems to be the same" — an expectation after a few days, **contradicted by #10**. Discarded | Y |
| 19 | 2025-11-23 | Cliente Amazon, Amazon.es, 5★ VP, `Style Name: Z7` | ES | claims 1 week | no | not stated | "**La batería aguanta 1 semana**"… "después de **7 meses casi de uso**". 1 week = 168 h = imoo's *standby* number. Runtime claim discarded; the **7-month longevity** is the best in the EU corpus | Y |
| 20 | 2025-03-08 | "hemanta", Amazon.de, 5★ VP, `Model: Z7 Blau` | DE | "all day" | no | not stated | "Long Battery Life – **Lasts all day**, even with frequent use!" — checkmark-and-verdict format, English on a DE storefront; low weight | Y |
| 21 | 2026-05-29 | Franziska B., Amazon.de, 5★ VP, `Model: Z7 Blau` | DE | — | no | n/a | mechanism: parent app exposes "**An & Ausschalten der Uhr, Stromsparmodus**" — scheduled power on/off and power-saving are both parent-side settings | Y |
| 22 | 2025-04-16 | Roshaney Jkd, Trustpilot `imoo.me`, 1-review acct | IE | "a couple of days" | no | not stated | "The battery life is decent too, **lasting a couple of days with regular use**" | Y ⚠ |
| 23 | 2025-02-20 / 2025-03-20 / 2025-12-01 / 2025-06-16 | Man Jessica (DE), J G (DE), MJ Rosero (ES), Peter Martinas (IE) — all Trustpilot `imoo.me` | mixed | **none** | no | no | "Akkulaufzeit ist gut" / "battery life is amazing" / "la batería dura mucho" / "la batería dura bastante". **No window, no figure — near-worthless** | Y ⚠ |
| 24 | ~2026-01 | u/HereForBeer07, r/askSingapore | **SG** | none | no | no | "Bought Imoo Z7 for my kid in 2024, still working fine. **Good battery life**." No figure. **Asian firmware** | Y |

⚠ = sits on imoo's own property or is otherwise discounted; see *Astroturf ledger*.

### So what is left after a 9.5 h school day with tracking on?

**Best-supported answer: roughly half to two-thirds of the battery, i.e. ~50–65% remaining at
pick-up. The worst credible rate still leaves ~45%.** That is a pass, with margin, for the school
day itself — but it is *not* a figure for continuous tracking, because the Z7 has no continuous
tracking mode to switch on.

The arithmetic, stated as arithmetic:

| Basis | Implied drain per awake hour | Left after 9.5 h |
|---|---|---|
| Notebookcheck, 88 points / ~15–16 awake hours (assuming the factory night-off ran) | 5.5–6.0 %/h | **~43–48%** |
| **Breogán (#4), ~50 points over a ~14 h waking day** | **~3.6 %/h** | **~66%** |
| Jagat, 34 points / ~15–16 awake hours | ~2.2 %/h | ~79% |

**Breogán is the only observation in the entire corpus that is shaped like the question.** He is a
verified purchaser on a model-tagged Z7 listing, reporting the state of the battery at the end of
every day rather than a headline "days" number — and he lands almost exactly between the two lab
tests. That is the most useful single fact this sweep produced.

**Four caveats, and the third is the serious one.**

1. **Nobody, anywhere, in any language, states a tracking interval alongside a battery figure.** The
   Z7 has no user-selectable one to state (background reporting is hourly, live position is
   on-demand, Historical Trajectory samples GPS every 2 s and is off by default). **The cost of
   running Historical Trajectory has still never been measured by anyone.** If you turn it on, every
   number above is optimistic by an unknown margin.
2. **Video calling is the visible swing factor.** #7 ("full-on daily use" → 2 days) and #8
   (intensive use *including video calls* → 1–2 days) bracket it; imoo's own listing copy says
   "frequent calls and video chats drain power faster"; and a Polish owner reports video calls
   cutting out after ~5 minutes on a **high-temperature** warning (Allegro, 1 Aug 2026, 1★).
3. **Nominal percentage may not be usable percentage.** #13 — Dietrich, Lisa, Amazon.de, 2★,
   verified, `Model: Z7 Weiß`, 16 Jun 2026 — reports the watch **powering itself off at around 50%**,
   repeatedly. One report, but it is exactly the failure that would make a "50% at pick-up" figure
   meaningless. **Test this in week one.**
4. **A dead battery inside a year happened at least once** (#14, DE, 2★, verified, ~11–12 months:
   charging aborts, then the watch will not start). One report against a corpus with only two owners
   past six months, so the base rate is unknown — but it is the first Z7 degradation datapoint.

### Is the 2.6× disagreement explained? Partly — and the mechanism is now owner-confirmed

**What is now established: the overnight power-off inflates owner "days" figures, and owners say so
themselves.** Two independent owners tie the two together in one breath:

> **DirkH, Germany, 18 May 2025**, Amazon.es, 5★ verified purchase, `Style Name: Z7`, review titled
> *"Ein wichtige Hilfe beim Schulstart, für Kind und Eltern"*:
> *"Der Akku hält locker 2 Tage durch, teilweise sogar mehr."* … *"Wifi funktioniert, **das
> automatische Ausschalten der Uhr über Nacht verlängert die Akkulaufzeit deutlich.**"*
> — *"The battery easily lasts 2 days, sometimes even more."* … *"Wi-Fi works; **the automatic
> switching-off of the watch overnight extends the battery life significantly.**"*

> **Amazon Customer, Ireland, 23 January 2026**, Amazon.de, 5★ verified purchase, `Model: Z7 Blau`:
> *"**Battery lasts about 2 days and you can set it to turn off overnight.** Overall great watch."*

That is the first owner-side confirmation of what `BATTERY.md` inferred from Notebookcheck. It
promotes "multi-day figures are counting hours the watch was off" from an inference to a
corroborated mechanism.

**What is still open, and this must be said plainly.**

- **Neither lab states whether the shutdown was running during its own test.** The Notebookcheck
  article was re-read in full on 2026-08-19. Its entire battery content is three sentences —
  *"Wird die Uhr ganztägig getragen … hat die Smartwatch nach 24 Stunden noch 12 Prozent
  Akkukapazität"*, *"In 30 Minuten lädt die Smartwatch von 3 auf 45 Prozent. Für eine vollständige
  Ladung vergehen etwa 80 Minuten"*, and *"In der Praxis muss die Z7 täglich geladen werden"* — plus
  the separate product statement *"Nachts schaltet sich die Smartwatch ab Werk geplant ab und startet
  gegen morgen neu."* The reviewer does say elsewhere, in the sleep-tracking section, that the
  automatic shutdown *"greift"* (takes effect) on his unit. But **the article never says the
  shutdown applied during the 24 h battery run.** `BATTERY.md`'s "the overnight shutdown was still in
  force" is therefore a strong inference, not a quoted fact, and should be labelled as one. If it is
  wrong — if Notebookcheck disabled it — the true awake-hour drain is *lower* than the 5.5–6 %/h in
  the table above, and the conservative end of the school-day estimate improves.
- **The Jagat 34%/day figure exists only in their video.** The Jagat Review *article*
  (gadget.jagatreview.com, Friska, 29 Apr 2025) was retrieved in full with a Googlebot UA: its
  entire battery content is the spec line *"Baterai: 740 mAh. Ini ukuran yang besar sekali ya."*
  **There is no drain test in the article, no percentage, and the page has no comment section.** So
  the disagreeing number has no text corroboration anywhere. (The video itself has since been read
  in full — see "Jagat video read (2026-08-19)" below: the figure is verbatim-confirmed, but the
  test conditions are never stated.)
- **A third mechanism turned up that nobody had considered: imoo quotes different numbers by
  region.** imoo tells EU/UK buyers "**1 to 2 days**" and tells South-East Asia "**up to 100 hours**"
  / "standby up to 7 days" (Amanz, Malaysia, 13 Aug 2024: *"ia boleh digunakan sehingga **100 jam**
  lamanya dalam mod standby"* — *"it can be used for up to 100 hours in standby mode"*). Same 740 mAh
  cell, marketing figures ~3.5× apart. If the Indonesian unit also ships different power defaults,
  that is a candidate explanation for a DE-vs-ID gap — but it is a hypothesis, **not a finding**.

**Net: the gap is narrowed, not closed.** The honest statement is that the two labs bracket a range,
the owner evidence sits in the middle of it, and the German figure is the conservative end.

### Jagat video read (2026-08-19)

The standing open item — the Jagat Review video's full battery passage — is now closed. The video
was pulled with `yt-dlp` (Indonesian auto-captions, word-level ASR; full 181-comment tree):
**"Jam Tangan Canggih Terbaik untuk Anak (dan Orang Tuanya) - REVIEW imoo Z7"**, channel Jagat
Review, uploaded **29 Apr 2025**, 24:12, ~95.6k views.
<https://www.youtube.com/watch?v=sEXcl2YxaBw>

**The full battery passage, verbatim (17:20–18:34).** The previously quoted sentences check out
word-for-word, and the passage continues past where the quote stopped:

> *"Oke, untuk baterai berdasarkan hasil pengujian kami dengan pemakaian normal, baterai akan
> berkurang sekitar **34% per hari**. Sebagai catatan, ini adalah hasil pengujian saat jam lebih
> banyak terhubung ke internet lewat koneksi seluler, ya. Jadi, teoritis baterai jam tangan ini baru
> akan habis sekitar **hampir 3 hari penuh** lah. Ini hasil yang tergolong bagus loh sebenarnya
> mengingat fiturnya kan berlimpah dan LTE-nya aktif tadi itu ya. […] Sedangkan yang ini baterai
> 740 mAh. Dia bisa bertahan lebih lama dari itu. Nah, **kalau pakai Wi-Fi kemungkinan besar emang
> bisa lebih irit lagi.** Sementara saat menggunakan seluler ya memang perlu diperhatikan kalau
> **penggunaan baterai itu akan sangat dipengaruhi oleh kekuatan sinyal di tempat** ya. Jadi
> **anggap aja tes daya tahan baterai tadi itu sebagai gambaran kasarnya lah.** Oke, sekarang kita
> lihat untuk charging. Jam tangan ini membutuhkan waktu sekitar **1 jam 40-an menit** untuk mengisi
> baterai dari 0 sampai penuh. […] Sederhananya, untuk amannya **pastikan aja jam ini dicharge
> setiap malam, walaupun sebetulnya ya 2 hari sekali juga bisa sih harusnya.**"*
> — "OK, for the battery: based on our test results under normal use, the battery drops about
> **34% per day**. As a note, this is the test result with the watch mostly connected to the
> internet over cellular. So theoretically this watch's battery would only run out after almost
> **3 full days**. That is actually a pretty good result, considering the features are abundant and
> the LTE was active. […] Whereas this one has a 740 mAh battery and lasts longer than that
> [a 5,000 mAh smartphone]. Now, **on Wi-Fi it can most likely be even more frugal.** Meanwhile on
> cellular, do bear in mind that **battery use will be very strongly affected by the local signal
> strength**. So **just treat that battery endurance test as a rough picture.** OK, now charging:
> this watch needs about **1 hour 40-odd minutes** to charge from 0 to full. […] Simply put, to be
> safe **just make sure this watch is charged every night, although actually once every 2 days
> should also work.**"
(ASR caveats: captions render "LTE" as "LTI", "Wi-Fi" as "Wii"; corrected above. The "34%",
"3 hari", "740 mAh", "1 jam 40" figures are unambiguous in the audio track's captions.)

**Test conditions: never stated.** The entire methodology on record is "pemakaian normal" (normal
use) + "mostly connected over cellular". The video states **no test duration** (the "3 days" is an
extrapolation from 34%/day, 100/34 ≈ 2.9 — there is no evidence the watch was ever run to empty),
**no tracking interval, no screen/wear profile, no call/camera load, and nothing about the
overnight-shutdown state during the test.** Jagat themselves downgrade the number in the same
breath: it is a "gambaran kasar" (rough picture) that "will be very strongly affected by local
signal strength."

Two secondary observations from the rest of the video bear on the shutdown question:

- **The scheduled power-off is presented as opt-in in the app tour (9:40–9:58):** *"Oke, ada
  schedule power on off. Nah, dengan fitur ini **kita bisa menambahkan** kapan jam tangan ini mati
  secara otomatis dan menyala kembali juga secara otomatis."* — "OK, there is schedule power
  on/off. With this feature **we can add** when this watch turns off automatically and turns back
  on automatically." Phrased as something the parent sets up, not as a factory default they
  observed — a weak hint that the Indonesian unit may not ship with it pre-armed, and in any case
  no statement that it ran during the drain test.
- **A "low power mode" exists (11:05–11:16)** — *"Saat low power mode diaktifkan, jam tangan ini
  hanya bisa digunakan untuk telepon dan tracking GPS aja supaya baterainya lebih hemat"* — another
  unstated variable; the video never says whether the test ran in normal or low-power mode (the
  "fiturnya berlimpah, LTE aktif" framing implies normal mode, but implies only).

**Comment tree (181 comments, Indonesian-firmware region): zero quantified Z7 battery figures.**
The only battery-touching owner reports are: **lingling2399** (upgraded Y1 → Z6 → Z7, 4 likes):
*"Battery awet"* — "battery lasts well", no number; **nicorobin1488** (a **Z5** bought ~2019, now
on its second child): *"batre masih tahan lebih dari sehari"* — "battery still lasts more than a
day"; and **arthacipta6854** (a **Z1**): *"setahun baterenya kembung"* — "after a year the battery
swelled". Nothing that corroborates or contradicts 34%/day for the Z7 itself.

**Does this explain the 2.6× gap with Notebookcheck? No.** The video states no conditions, so the
gap cannot be attributed. What it does add: (a) Jagat's own two candidate mechanisms, in their own
words — **signal strength** and **cellular vs Wi-Fi** — which are usage/environment variables, not
firmware ones; (b) the overnight-shutdown candidate is *weakened*, not strengthened — Jagat frames
the shutdown as opt-in, and arithmetically a shutdown-ON state at Notebookcheck would compress its
88 points into *fewer* awake hours (raising its implied awake drain), which widens rather than
closes the per-hour gap; (c) the "hampir 3 hari" headline is an extrapolation that **Jagat
themselves label a rough picture and then walk back to "charge it every night, though every 2 days
should also work"** — practical advice that lands on the owner consensus (1–2 days), not on the
3-day headline. The honest reading: the 34%/day figure is real but methodology-free, its 3-day
extrapolation is soft even by its author's own framing, and the two labs still bracket a range with
the owner evidence in the middle.

### Correction: imoo DOES publish a Z7 runtime — in its own retail listings, in three languages

`battery_claimed_h: UNKNOWN` and the line *"imoo publishes NO runtime figure for the Z7 anywhere"*
were **wrong**. They are true of imoo's spec sheets and of imoo's own EU store — the
`imoostore.com/eu` Z7 page was re-checked on 2026-08-19 and states **740 mAh with no runtime, and
carries no reviews section at all** — but imoo publishes a figure on its own Amazon listings, where
it is both the seller and the author of the copy:

> **Amazon.co.uk, ASIN B0CXSSLDW5, sold by *IMOO Direct*, live 2026-08-19:**
> *"Powered by a 740mAh battery, **it provides 1 to 2 days of dependable power under moderate daily
> use.** Power-saving tip: Turn off Wi-Fi when not needed and adjust screen brightness outdoors to
> extend battery life."*

> **Amazon.de, ASIN B0D49DD7J4, sold by *imoo-Official*, live 2026-08-19:**
> *"Ausgestattet mit einem 740 mAh Akku bietet die Uhr bei moderater Nutzung eine **Laufzeit von 1
> bis 2 Tagen**."* — Amazon.de ASIN B0G5K5G7HX puts it slightly higher: *"Der 740-mAh-Akku bietet
> eine **Laufzeit von bis zu 2 Tagen**."*

> **Amazon.es, ASIN B0CXSTW4BP, live 2026-08-19:**
> *"Equipado con una batería de 740 mAh, **ofrece una autonomía de 1 a 2 días con un uso
> moderado**."*

It is also baked into imoo's own listing **titles**: *"…Reject Unknown Calls,**1-2 Days Use**"* and
*"…SIM Card,**1-2 Days Battery**"*.

**Two qualifications that stop this being cleaner than it is.**

- **"1–2 days" is imoo's house number, not a Z7 measurement.** The identical string appears in
  imoo's **Z1** and **Z3** listing titles too. And the Spanish Z7 page's box-contents field reads
  *"Reloj inteligente **Z1**"* — imoo recycles this copy across models without editing it.
- **The imoo support FAQ is NOT usable as a Z7 claim.** Its wording is confirmed verbatim
  (uk.imoostore.com, accessed 2026-08-19): *"It takes about an hour for the watch to fully charge.
  When fully charged, the watch can be used normally for **one day**. In the case of not being used,
  the watch can remain on standby for about **3 days**. Note: The data was obtained from laboratory
  tests…"* — but the page's own structured data gives `datePublished: 2020-09-09`, it names no model,
  and **the Z7 did not exist until April 2024**. It is a 2020 brand-wide claim, and `BATTERY.md`
  should drop it as a Z7 source. *(A web-search summariser renders this as "one day **with constant
  video calls**"; that phrase is **not on the page**. Do not propagate it.)*

Accordingly `battery_claimed_h` moves from `UNKNOWN` to **24–48 h**, sourced to imoo's own Z7
listings, and kept rigorously separate from `battery_observed_h`.

### Two vendor statements that cut against things this document currently asserts

Both are imoo-authored listing copy; both sit on pages titled Z7 that also carry Z3 content; both
are therefore **leads, not findings** — but they are checkable in week one.

1. **imoo claims the positioning refresh rate is user-adjustable.** Amazon.es ASIN B0CXSTW4BP
   (titled *"imoo Z7 Reloj Inteligente Niño"*), vendor FAQ, live 2026-08-19:
   > *"**¿Cómo mejorar la duración de la batería?** Para optimizar la batería, le recomendamos
   > **ajustar la frecuencia de actualización del posicionamiento en la App** según sus necesidades
   > (**modo ahorro o normal**)."*
   > — *"**How to improve battery life?** To optimise the battery we recommend **adjusting the
   > positioning refresh frequency in the App** to suit your needs (**saving or normal mode**)."*
   This is the **first source in the whole project that says a Z7 positioning interval is settable at
   all**, and it ties the setting directly to battery. It names no value, so `update_interval_min:
   60` is **not** changed — but "there is no user-settable interval" can no longer be stated flatly.
   **Open this menu on day one and write down what it offers.**
2. **imoo makes an explicit school-day claim.** Amazon.co.uk ASIN B0FMYC7RTM, vendor FAQ:
   > *"How's the kids watch's battery life? Fully charged, it lasts up to 2 days for kids. Frequent
   > calls and video chats drain power faster, but **it stays powered all school day from drop-off to
   > home**."*
   Vendor marketing, unmeasured — recorded because it is the only school-day-shaped statement imoo
   itself makes, and because it is consistent with Breogán's ~50%-at-bedtime.

### Corrections to the existing record

1. **Strike the Amazon.co.uk "school day" quote from `BATTERY.md`.** It is recorded there as a Z7
   owner report — *"Amazon.co.uk, 5★ verified, 2026-05-05: 'typically lasting through a school day
   with a comfortable daily charging routine.'"* It is **Kevin D, UK, 5 May 2026, `Colour Name:
   Z3-Blue`**, and his own first line is *"I bought two **Z3** Smart Watches for my daughters."*
   **It is a Z3 review and must not be counted as Z7 evidence.**
2. **Amazon.co.uk ASIN B0CXSSLDW5 is titled "imoo Z7" but its 313-rating pool is shared with the
   Z3.** Six of the eight top UK reviews on it carry `Colour Name: Z3-Blue` or `Z3-Pink`. The
   "Bea, DE, 16 Jul 2026 — *Akku … gute 2 Tage*" review on the same page is likewise **Z3-Pink**.
   Any figure taken from this ASIN without checking the variant field is unsafe. By contrast
   Amazon.de's B0D49DD7J4 (185 ratings) and Amazon.es's B0D4H9BL39 (90 ratings) tag every review
   `Model: Z7 Blau` / `Style Name: Z7` and are safe to mine.
3. **`BATTERY.md`'s "the overnight shutdown was still in force [during the Notebookcheck run]"
   should be relabelled an inference.** Notebookcheck never says so about the test itself.
4. **The Trustpilot Z7 pool is 30 reviews, and page 2 is no longer blocked.** All ten previously
   unread reviews were read in a logged-in browser session — the AWS WAF interstitial that beat every
   proxy does not appear. They add one battery figure (#9) and nine reviews with none.

### Astroturf ledger for this sweep

| What | Why flagged | What survives |
|---|---|---|
| **#8 alvarogasteiz (Amazon.es, 6 Dec 2024) and #9 IÑIGO RUIZ-OLALLA (Trustpilot, 25 Dec 2024)** | Both ES, both 5★, both single-review-shaped, **19 days apart**, both structured as a labelled feature-by-feature list, both reciting the same GNSS constellation string — and both containing the identical phrase ***"entre 1 y 2 días con un uso intensivo"*** | **Count as ONE seeded template, not two observations.** The number it carries happens to match imoo's own listing copy, which is the point |
| Trustpilot `imoo.me` Z7 pool generally | 30 reviews, on imoo's own profile; 11 of the 20 previously parsed are single-review accounts; five of the ten page-2 reviews cluster on 6–9 Apr 2025 | The four vague battery lines (#22, #23) are recorded and given **no weight** |
| **#20 "hemanta" (Amazon.de, 8 Mar 2025)** | Checkmark-bulleted, "Final Verdict"-structured English review on a German storefront; reads as templated | Verified purchase and model-tagged, so listed — but not relied on |
| **#18 Fridrik Thordarson** | "five to seven days" written after *"just been using it for a few days"*; directly contradicted by #10, an owner of both watches | Discarded as a runtime figure |
| **#19 "1 semana"** | 168 h is exactly imoo's *standby* number, which PapasVlog identifies as standby on camera | Runtime claim discarded; the 7-month ownership span kept |
| Allegro.pl Z7 pool | All 13 purchase-verified ratings were bought from **imoo-Polska / "Oficjalny sklep imoo"** — imoo's own storefront | Moot here: **none of them mentions battery at all** |
| testbericht.de "57 Bewertungen" | Already struck by the previous pass (that listing describes a 300 mAh IP67 fitness band) | Nothing |

No page or comment encountered in this sweep contained text addressed to an AI or attempted to give
instructions. Web content was treated as data throughout.

### Verified absences — searched, nothing found

- **Google Play: zero.** 3,477 unique reviews of `com.imoo.watch.global` pulled via the
  `batchexecute` `UsvDTd` RPC across de/DE, en/GB, es/ES, en/IE, ro/RO, it/IT, nl/NL, pl/PL, de/AT,
  fr/FR, cs/CZ, en/SG, id/ID, ms/MY, en/IN, en/AU, th/TH, vi/VN, both sort orders, paginated.
  **62 mention battery; not one names the Z7.**
- **Apple App Store: zero.** 326 unique reviews via
  `itunes.apple.com/<cc>/rss/customerreviews/id=1057845227` across 28 storefronts. **9 mention
  battery; not one names the Z7.** Storefronts with **no reviews at all**: ro, at, be, pl, cz, hu,
  bg, gr, se, dk, fi.
- **Notebookcheck's comment thread contains no battery discussion.**
  `notebookchat.com/index.php/topic,225856.0.html` — exactly three replies, all 4 Apr 2025, all
  snark about weight and price. **Nobody challenges or refines the 12%-after-24 h figure.**
- **The Jagat Review article has no battery test and no comment section** (Googlebot UA, full page).
- **eMAG.ro, the Z7 listing (`DLXDK83BM`): zero reviews, zero questions**, re-verified 2026-08-19.
  The project's standing "eMAG hides reviews 11+ behind a login" gap is **moot for the Z7** — the
  pool is empty, not hidden.
- **Allegro.pl: three Z7 product pages** (blue / pink / white), 13 purchase-verified ratings, four
  reviews with text, **none mentioning battery**. Two useful non-battery lines did surface: a 1★ of
  1 Aug 2026 reporting video calls cutting out after ~5 min with a **high-temperature** warning, and
  a 25 May 2026 review stating the watch *"nie posiada funkcji nasłuchu"* — *"does not have a
  listen-in function"*, which corroborates the disputed "no auto-answer on EU units" claim.
- **Alza.cz does not stock the Z7 at all** (search returns zero imoo Z7 products).
- **Heureka.cz has no Z7 product page** — only an outbound price link, therefore no reviews.
- **Bol.com sells no Z7**, only third-party screen protectors.
- **MediaMarkt.pl: two Z7 listings, zero reviews.**
- **Reddit: still no quantified Z7 battery figure.** Comment searches `"imoo" battery` and
  `imoo battery percent` return nothing new; the top hits are the already-flagged duplicate
  u/marketingmeme template.
- **No SG/MY/ID editorial hands-on battery test of the Z7 exists** beyond Jagat's video. Amanz (MY)
  carries launch PR only; Liputan6 (ID) self-declares as *"dirangkum … dari berbagai sumber"*
  (compiled from various sources).
- **NOT a negative — a stream that did not finish.** A 13-language YouTube sweep (`yt-dlp`,
  transcripts + full comment trees, EN/DE/ID/MS/ES/IT/FR/PL/NL/CS/HU/VI/TH) was still running when
  this pass closed; ~200 subtitle/metadata files had been pulled. **Do not read the absence of
  YouTube rows in the table above as evidence that none exist.** The specific unanswered target was
  the **Jagat Review video's full battery passage** — how many days they ran, whether the overnight
  power-off was on, and whether tracking was active. **RESOLVED 2026-08-19** — see "Jagat video
  read (2026-08-19)" above: the passage was extracted in full, and the answer to all three questions
  is that the video never states them.
- **Wayback returned HTTP 429 on every `archive.org/wayback/available` probe** for the Amazon review
  URLs, so the pre-login-wall archive route could not be tested. Also a tooling limit, not an
  absence.
- **Amazon `/product-reviews/` is now login-walled on every locale tried** (302 → `ap/signin` on .de
  and .co.uk). No credentials were entered. Only the ~8–13 reviews embedded in each `/dp/` page are
  readable, which is the binding limit on this sweep: Amazon.de alone holds **185** Z7 ratings and
  Amazon.co.uk **313**, of which roughly eight each were readable. **This is a coverage gap, not an
  absence** — Amazon's own aggregator states *"8 clientes mencionan duración de batería, 7 de forma
  positiva, 1 de forma negativa"* on the Spanish Z7 listing and *"7 clients mentionnent
  « autonomie », 6 de façon positive, 1 de façon négative"* on the French one, so more battery
  reviews exist than can currently be read.

### What this changes in the frontmatter

- **`battery_claimed_h`: `UNKNOWN` → `24-48`.** Sourced to imoo's own Amazon UK/DE/ES Z7 listings
  ("1 to 2 days" / "1 bis 2 Tagen" / "1 a 2 días"), verified live 2026-08-19. **Not** to the 2020
  brand-wide FAQ.
- **`battery_observed_h`: stays `24`.** Notebookcheck remains the only measurement with both a stated
  window and a stated end-state. Nothing found here displaces it. The owner corpus is consistent with
  24–48 h of wall-clock life **including an overnight power-off**, which is a different quantity.
- Everything else — `ro_status`, `update_interval_min`, `data_region`, `extras_disableable` — is
  unchanged.

### Amazon deep-pool read (2026-08-19)

**Access status — the deep pools stayed shut.** This pass ran in a real Chrome profile, which
turned out to be **signed out of every Amazon storefront** (.de, .co.uk, .es all show "Hello,
sign in"). Every `/product-reviews/` deep link on every storefront now 302s to a sign-in page
with `openid.pape.max_auth_age=3600` (Amazon's 2024-era login wall on review pagination). Per
protocol no credentials were entered, so **no sort/filter/pagination was reachable**. What was
readable is the top-review module each product page renders logged-out (8–13 reviews per
listing). Coverage below is exact; everything beyond it remains unread and needs a logged-in
session.

**Structural finding first: the merged pools are being re-cut.** The 3,759-rating merged
Z1+Z3+X10 pool on amazon.de **no longer exists** — its host ASIN B0FNWFQ2FP now shows **0
customer reviews** (verified on-page, histogram all 0%). amazon.de imoo ratings now sit in
per-model listings (Z1 568/344/115/20/6/4; Z3 66/41/39/35/17; Z7 185/14/3; X10 2). The UK
listing B0CXSSLDW5 is still merged — Z7-titled, but 10 of its 13 visible reviews are tagged
`Colour Name: Z3-Blue/Z3-Pink`.

**Coverage table (Z7-relevant listings), all accessed 2026-08-19:**

| Listing | Ratings total | Avg | Hist 5→1 (%) | Read this pass | Model-tag breakdown of what was read |
|---|---|---|---|---|---|
| amazon.de B0D49DD7J4 | 185 | 4.2 | 72/6/6/7/9 | 13 | 13× `Model: Z7 Blau` (all VP) |
| amazon.de B0DQ8VRKSG | 14 | 4.8 | 89/11/0/0/0 | 8 | 8× `Z7 blue.` (all VP) |
| amazon.es B0D4H9BL39 | 90 | 4.4 | 78/6/3/5/8 | 13 | 13× `Style Name: Z7` (all VP) |
| amazon.es B0CXSTW4BP | 37 | **3.8** | 56/9/10/13/12 | 10 | 10× `Z7-Pink` (all VP; 4 are Australian) |
| amazon.co.uk B0CXSSLDW5 | 313 | 4.0 | 61/9/14/5/11 | 13 | **3× Z7-tagged, 10× Z3-tagged** — still a merged pool; only the 3 count for the Z7 |
| **Unread remainder** | ~639 ratings across these five | | | **47 Z7-tagged reviews read in total** | ~92% of the rating mass unread (login-walled) |

**New failure reports (all verified purchase, all model-tagged Z7 unless noted):**

- **Historical Trajectory died in hours, unrecoverable.** Eckhard, Amazon.de, **17 Jun 2025**,
  1★: *"Die Uhr funktionierte auch, also Ortung und Historie … ein paar Stunden später
  funktionierte nur noch die Ortung aber die Historie zeichnete nichts mehr auf. Uhr
  zurückgesetzt und die App neu installiert. Nichts hat geholfen."* — *"The watch worked —
  location and history. A few hours later only location still worked and the history recorded
  nothing. Reset the watch, reinstalled the app. Nothing helped."* Returned the watch. First
  owner report that the Z7's one differentiating feature (the 14-day track) can silently stop.
- **The Australia cluster — what an imoo looks like on a carrier imoo never validated.** Three
  Australian VP reviews in the B0CXSTW4BP pool, and they matter for Romania more than anything
  else found: haiyuan li, **3 Jul 2024**, 1★: *"In Australia using the Telstra SIM, video call
  and GPS location are not working. Can only make audio calls."* Chris, **10 Nov 2024**, 1★:
  *"the carrier Optus and Telstra stopped 3g network from 28/Oct/2024, but this device is 3g
  only, therefore … I cannot locate and video call my child most of the time. Then suddenly the
  watch turned off itself."* Doro, **8 Jan 2025**, 2★: *"the app can't update the GPS location
  … The Timezone set up also terrible … whenever I try automatics time zones it was suddenly
  change to Monaco."* Reading: the hardware is not 3G-only — but on an un-validated carrier the
  LTE/VoLTE side evidently never provisioned, the watch lived on 3G CSFB, and the 3G sunset
  killed it. **Romania has no 3G at all; the equivalent failure there is immediate.** And the
  **time-zone desync now appears in a third country** (after two RO reports and one FR) —
  auto-timezone jumping to a wrong region on an out-of-list network is looking like the
  platform's signature symptom, not a Romanian quirk.
- **Watch de-registers itself repeatedly.** Cliente Amazon, Amazon.es, **4 Aug 2026**, 2★ (in
  Galician): *"constantemente desprogramase e hai que sacar e meter a tarxeta de novo"* —
  *"it constantly de-programs itself and you have to take the SIM out and put it back in."*
- **Mexico: no service at all.** Diana, **31 Oct 2025**, 1★ (MX storefront, in the DE pool):
  *"no funciona con las redes de telefonía en México"* — *"doesn't work with Mexican phone
  networks."* Consistent with the supported-country page being the real service boundary.
- **SIM-cap hardware failure at ~2 months, called common.** Rogue S., Amazon.co.uk, **17 Sep
  2024**, 1★, Z7-Blue: *"the plasticky, flimsy cap that holds the sim in place does not want to
  shut properly. So now it's a £200 wristwatch that tells the time … A quick google search …
  indicate that this a common problem too."* Same review: *"location tracking was super
  unreliable and does not seem to work over roaming as others have said."*
- **Support loop, one week, no fix.** gl.eam11, Amazon.es, **24 Sep 2025**, 1★: *"app with
  extremely buggy features … i am repeatingly telling them about my issues with detail and they
  keep asking me again and again about said details with zero resolution … for a week!"*
- (Already recorded in the battery sweep, re-sighted here: Amazon.de 2★, 3 Nov 2025 — watch
  stopped accepting charge at ~11 months, warranty contact failed.)

**New battery datapoints (owner-reported, none states a tracking interval):**

- JS, Amazon.de, **26 Mar 2025**, 5★: *"hält der Akku mindestens 3 Tage bei normaler Nutzung.
  Ab 20% schaltet die Uhr in den Energiesparmodus"* — *"battery lasts at least 3 days in normal
  use. At 20% the watch switches to power-saving mode."*
- Cliente Amazon, Amazon.es, **23 Nov 2025**, 5★: *"La batería aguanta 1 semana"* — *"the
  battery lasts a week"* — **but the same review says the child does not wear it every day**
  (*"no lo pone todos los días"*), and the factory overnight power-off applies. Recorded as a
  confounded figure, not a runtime.
- Fridrik Thordarson, Amazon.co.uk, **10 Mar 2026**, 5★, Z7-Blue, a few days in: *"The Z1
  usually lasted about five to seven days without being recharged and so far the Z7 seems to be
  the same."* Outlier; contradicts every measured figure; noted and not adopted.
- V. B, Amazon.de (B0DQ8VRKSG), **17 Sep 2025**, 5★: *"muss sie aber auch jeden Tag geladen
  werden. Selbst wenn die nur liegt, verbraucht sie den Akku."* — *"it has to be charged every
  day. Even when it just lies there it drains the battery."*
- Net: the owner spread is now 24 h → "1 week", every figure above ~2 days is confounded by
  overnight power-off or non-daily wear, and **`battery_observed_h: 24` stands**.

**New positioning datapoints:** Franziska B., Amazon.de, **29 May 2026**, 5★ (19 helpful):
*"Die Ortung ist wie wir festgestellt haben wirklich SEHR genau, bis auf 10m"* — *"the location
is, as we established, really VERY accurate, to within 10 m"* (only mild complaint: video-call
quality). piperita, Amazon.es, **15 Dec 2025**, 5★: *"Te dice en nombre de la calle y el numero
del piso"* — *"it tells you the street name and the floor number"* — first owner sighting of the
barometric floor readout actually surfacing in the app (on a Z7, in Spain).

**What this changes:** nothing in the frontmatter — the new battery spread confirms the existing
`24`/`24-48` split rather than moving it. It **adds** a third-country instance of the time-zone
desync, a concrete carrier-failure template for the RO risk (AU/Telstra), one new hardware
weak point (SIM cap), and one new software weak point (Historical Trajectory can die silently).

### BG/HU/CZ venue sweep (2026-08-19)

eMAG.bg and eMAG.hu (captcha walls down for this pass): **both list one Z7 device SKU** — the
same marketplace listing in each country ("Imoo Z7 … Wi-Fi, GPS, rózsaszín/розов",
`/pd/DLXDK83BM/`, importer-style SKU `act-260b-wlononwcrpx35`) — and **both show 0 reviews and
0 Q&A**. No Bulgarian or Hungarian owner report, and no registration/SMS-code complaint, exists
on eMAG for the Z7. Negative result, recorded for auditability.

## RO registration test — PASSED (2026-08-19, first-hand)

Executed by this research's operator, on a real Romanian +40 number, exactly per the
"Pre-purchase test" above: imoo Watch Phone app installed from the Romanian storefront,
account registration attempted with a +40 number. ~~The SMS confirmation code arrived, the
account was created, and the app proceeded to the pair-watch screen~~ **CORRECTED the same day,
on the tester's own report: no SMS challenge was ever presented.** The account was created and
the app went **directly to the pair-watch (QR) screen** — the furthest point reachable without
physical hardware. (The struck sentence was this research's own fabrication: the summary-writer
assumed the SMS step because the test template below expects one. Left visible per policy.)
This is still the first known successful Romanian registration, and it supersedes the single
prior dated failure (RO App Store review, 13 Jul 2025) on the outcome — a +40 account can be
created. Operator of the number: **YOXO** (Orange's digital brand). ~~so imoo's registration
SMS is confirmed delivered on the Orange side~~ *(withdrawn with the same correction: no SMS
was involved, so this run says nothing about A2P SMS delivery on any Romanian network).*

**What the no-SMS observation means:** the flow observed 2026-08-19 does not gate account
creation on an SMS code at all. Either imoo changed the flow since Jul 2025, or the SMS step
lives elsewhere (login re-verification, or watch binding). The 2025 failure mode could
therefore reappear at pairing — unresolved until someone pairs a physical watch on a Romanian
number.

**What this changes:** `ro_status` unknown → **likely**; evidence tier → 1 on the account
question. **What it does not change:** the pre-purchase test at line ~169 pre-committed to
`verified` on registration success — that overreached against this file's own "Week one" bar,
and we hold `verified` for a paired watch completing an incoming call on LTE plus an indoor
location fix on a Romanian SIM (the Australian mis-provisioning cluster is the reason).
Registration also says nothing about VoLTE provisioning. The correction is left visible per
project policy.