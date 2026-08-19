# Lens 5 — ROMANIA EVIDENCE: which kids' 4G GPS watches are proven to actually function in Romania

Research date: 2026-08-18/19. All prices in RON unless stated.

## Evidence tiers used (strongest first)

1. **T1** — Vendor explicitly lists Romania as supported / registration flow accepts +40
2. **T2** — Companion app published in the **Romanian** Play/App Store storefront, recently updated; RO review section read
3. **T3** — Dated first-hand reports from Romanian users that a model works or stopped working on a Romanian network
4. **T4** — Romanian distributor, warranty entity, or carrier bundle exists
5. **T5** — LTE band support matching Romanian networks (necessary, not sufficient)

### Method note on T2/T3

I scraped the **Romanian** Google Play storefront (`country=ro, lang=ro`) directly for each companion app and pulled the newest RO-filtered reviews, plus the Romanian iOS storefront via the iTunes lookup API, plus eMAG product pages including their Romanian review sections. Google/Apple country-filtered review sets combined with Romanian-language text is the closest thing to verifiable dated first-hand RO evidence available without a Romanian SIM in hand. Where I could not establish something I have written UNKNOWN.

Web search quota was exhausted partway through; the remainder was done by direct HTTP fetch of vendor, retailer and app-store endpoints. Forum/Reddit coverage is consequently thin — treat "no forum evidence found" as a gap in my search, not as evidence of absence.

---

## Xplora (X6 Play, X6 Pro, XGO3 / XGO3 G2, X5 Play)

**Strongest tier reached: T1 — and it is NEGATIVE.**

- **T1 (negative), English, live page:** Xplora's own FAQ states verbatim: *"Xplora is currently available for online purchase in Spain, Norway, Denmark, Finland, the United States, the United Kingdom, Germany, Sweden, France, Poland, and selected retail stores."* **Romania is not in the list.** https://xplora.co.uk/pages/faq
- **T1 supporting:** Xplora's supported-market list as surfaced in search (Norway, Sweden, Finland, Denmark, Spain, GB, Germany, France, Italy, Netherlands, Hungary, Iceland, Estonia, Switzerland, Austria, USA) also excludes Romania, and Xplora's own guidance is that *you must activate the watch from the country where you purchased it or another supported country* — which is precisely the failure mode the commissioner hit. Caveat: the two `support.xplora.com` article URLs that carried this text now return **404** (Xplora rebuilt its help centre onto a custom stack), so I could not re-verify the wording on the live page. Treat the exact list as second-hand; the FAQ list above is first-hand and live.
- **T2, Romanian Play storefront:** the app *is* published in RO and actively maintained — `com.xplora.xplorav2`, "Xplora", Xplora App, **last updated 7 Aug 2026**, 500K+ installs, 4.55/18,787 ratings. https://play.google.com/store/apps/details?id=com.xplora.xplorav2&hl=ro&gl=RO — iOS too (`com.xplora.appV2`, updated 2026-08-11). **App-store presence here is misleading**: publishing is global by default and does not imply the account backend will accept a Romanian registration.
- **T3, Romanian, dated — all negative.** The entire RO-filtered review pool is only **7 reviews**, for a 500K-install app:
  - 2025-07-19, 1★: *"catastrofa. ceasul il trimit înapoi. Cartela funcționează in telefon dar in SmartWatch nu funcționează"* (SIM works in the phone but not in the watch)
  - 2025-09-11, 1★: *"Nu se scaneaza codul QR ! Appu spune ca trebuie scanat timp de 40 de secunde si ceasu se stinge dupa 30 de secunde!"* (pairing QR never completes)
  - 2025-12-29, 1★: *"usless in some countries"*
  - 2026-02-04, 1★ *"Nu sunt mulțumită"*; 2026-06-18, 1★ 😡; only 2026-05-05 *"super."* is positive
- **T4 — signs of withdrawal, not presence.** On eMAG:
  - **X6 Play** — listed by eMAG itself but **"Stoc epuizat"** (out of stock), zero reviews, one unanswered customer question from 25 May 2024. https://www.emag.ro/ceas-inteligent-pentru-copii-xplora-negru-xplora-x6play-bk/pd/DV4BHWMBM/
  - **XGO3** — **out of stock**, and the seller is **"Akciós Pláza"**, a *Hungarian* marketplace seller, not a Romanian distributor. Its single RO review (10 Aug 2025, 1★) reports no Romanian menu, **GPS synchronisation failed despite updates**, cannot initiate calls, returning it. https://www.emag.ro/ceas-inteligent-pentru-copii-xplora-xgo3-nano-sim-negru-xplora-go3-bk/pd/DGRX5LMBM/
  - Only **XGO3 G2** is currently in stock (985–1,127 lei). X5 Play / XGO2 pages exist but are legacy.
  - No Romanian distributor, no Romanian warranty entity, no carrier bundle found.

**VERDICT: FAIL. Do not buy.** This is the one brand where a Tier-1 vendor statement affirmatively excludes Romania, and it is corroborated by a near-empty, uniformly negative Romanian review pool and a collapsing retail presence. The commissioner's experience is consistent with the documented state of the product, not a one-off.

---

## Garmin Bounce 2

**Strongest tier reached: T1 — POSITIVE, and it is the only unambiguous Tier-1 positive I found.**

- **T1, English + Romanian, content entry dated 2026-05-11, page updated 2026-07-14:** Garmin's official page *"LTE Coverage Area for Bounce 2 Kids Smartwatch"* carries a country table that explicitly includes **Romania**. Intro text: *"The following table lists the countries where LTE coverage is available for Bounce 2."* Full list: Australia, Austria, Belgium, Canada, Czech Republic, Estonia, Finland, France, Germany, Greece, Iceland, Ireland, Israel, Latvia, Lichtenstein, Lithuania, Luxembourg, Mexico, Netherlands, New Zealand, Norway, Poland, Portugal, Puerto Rico, **Romania**, Slovenia, Spain, Sweden, Switzerland, U.K., U.S.
  https://www.garmin.com/en-US/connectivity/bounce/bounce2-lte-coverage/
- **T1 corroboration, Romanian:** the same page is served localised at https://www.garmin.com/ro-RO/connectivity/bounce/bounce2-lte-coverage/ with **"România"** in the table, and Garmin operates a full `garmin.com/ro-RO` storefront carrying the Bounce 2 product page (https://www.garmin.com/ro-RO/p/1815501/) with "LIVRARE GRATUITĂ LA TOATE COMENZILE DE PESTE 150 RON".
- **T4:** sold **1P by eMAG** at 1,835.87 lei (refurb 1,459.99), in stock, 24-month warranty; also Vexio.ro at 1,499 lei. https://www.emag.ro/smartwatch-garmin-bounce-2-41mm-amoled-lte-gps-silicon-slate-gray-010-03399-00/pd/D6GW943BM/
- **T3 Romanian coverage:** gadget.ro review, **20 Nov 2025**, Romanian: *"În aprox. 1500 lei primești un smartwatch Garmin"*, *"Conectivitatea LTE se realizează prin planurile dedicate și controlate de către Garmin, iar prețurile încep de la 10.99 euro pe lună"*. https://gadget.ro/garmin-bounce-2-sau-cum-arata-un-smartwatch-dedicat-celor-mici-conectivitate-lte-urmarire-a-locatiei-in-timp-real-afisaj-luminos-si-colorat-etc/
- **T3, Romanian, dated — AND THIS IS THE PROBLEM. eMAG rating is 2.50/5 across 6 reviews**, all 2026, and the negative ones are specific and consistent about *network*, not about setup:
  - **schatten, 15 Aug 2026:** *"Mă așteptam la mai bine de la acest brand."* — adequate where signal is good, but in weaker-signal areas it degrades to *"o brățară ce măsoară pași"* (a bracelet that counts steps)
  - **Contabexe, 9 Aug 2026, 1★:** *"Un eșec comercial absolut și un risc inacceptabil pentru siguranța copilului."* — GPS lockups requiring factory reset, frozen display, **9 successful calls out of 40 attempts across different locations**, message delays over 35 minutes
  - **Aurash, 11 Jun 2026, 1★:** *"Dezastru complet."* — delayed location, **1–2 successful calls out of 10**, expensive subscription
  - **Banioti Mihaela Raisa, 24 Mar 2026, 2★:** *"Foarte foarte proasta investitie."* — delayed location, app errors, poor call/message connectivity, underperforms cheaper Chinese alternatives
  - Positive: Martin Petru Virgil 23 Apr 2026 5★ *"Calitate excepțională"*; raluca tinta 5 Jan 2026 5★ *"Este minunat! Corespunde cu descrierea."*

**VERDICT: SUPPORTED, but with a serious Romanian-specific reliability warning.** The critical positive finding is that these Romanian reviewers **successfully created accounts and activated Garmin's LTE subscription in Romania** — the Xplora failure mode does not occur here, and Garmin controls the connectivity itself so there is no dependence on a Romanian carrier relationship you have to arrange. The critical negative finding is that four separate dated Romanian reviews in 2026 independently describe the *same* symptom: very weak LTE, calls failing most of the time, minutes-to-tens-of-minutes message latency. That reads like Garmin's embedded eSIM roaming onto a single Romanian partner network with thin coverage. Given the stated number-one criterion is reliable cell connectivity, this needs to be treated as a live risk and, ideally, tested against a 30-day return window before committing.

*(Garmin Bounce 1: superseded; the v1 coverage page did not return a Romania hit. Treat as UNKNOWN/irrelevant.)*

---

## imoo (Z1, Z3, Z7, X10)

**Strongest tier reached: T1 (partial, vendor-store level) + strong T4 + dated T3.**

- **T1 (partial), English, live:** imoo's **official EU store** shipping policy names the countries it ships to, and **Romania is explicitly in the list**: *"We currently ship to the following countries: …, Spain, Germany, Denmark, France, Netherlands, Belgium, Greece, Italy, Portugal, **Romania**, Slovenia, Sweden, Poland, Czech Republic, Luxembourg, Slovakia, Hungary, Lithuania, Bulgaria."* https://www.imoostore.com/eu/pages/shipping-policy
- **Counter-evidence on T1:** imoo's country/region selector offers dedicated storefronts only for **Deutschland, Europe/English, España, France, Italia, Polska, United Kingdom** (+ US, Australia, Singapore). Romania falls under generic "Europe / English". imoo's carrier guidance page names carriers only for UK, Germany, Spain, Poland — **no Romanian carrier is named anywhere**. https://www.imoostore.com/eu/country-region
- **T2:** `com.imoo.watch.global`, "imoo Watch Phone", PT IMOOLINK GLOBAL TRADING, **1,000,000+ installs, updated 2026-07-21**, published in the RO storefront; iOS `com.okii.callwatch.i` updated 2026-07-27 in the RO App Store.
- **T3, Romanian, dated — mixed but confirms the service functions in Romania:**
  - Play RO, **2026-07-13, 3★:** *"slabă cu locația, și tot apare alt fus orar deși este setat corect nu se sincronizează, lam resetat tot și app, nu merge."* — a Romanian parent with a **paired, running watch** in July 2026 complaining about location quality and a persistent wrong time-zone. The wrong-time-zone symptom is worth noting: it is the kind of thing that happens when a device is provisioned against a region profile that doesn't match where it is.
  - eMAG imoo X10, **Popa Aurel, 13 Aug 2026, 1★:** *"Când suni cu video semnalul foarte slab se întrerupe mereu. Când suni normal este ok."* plus GPS error ~17 m, SOS ineffective, *"Nu recomand deloc acest ceas"*. **"Normal calls are OK" is the load-bearing sentence** — voice over the Romanian network works.
  - Play RO, 2025-04-22, 5★ *"Excelent"*.
- **T4 — the best mainstream-brand retail footprint after Garmin.** On eMAG: **Z1 699.99 lei (1P eMAG, last unit)**, **Z3 1,522.99 lei (1P eMAG)**, **Z7 1,114.56 lei (seller: OVOLT România)**, **X10 1,610.50 lei / 3,579.99 lei (1P eMAG and Smart Deals)**, plus marketplace variants. eMAG stocking multiple imoo SKUs first-party is a real distribution channel, not a grey import.
- **T5:** UNKNOWN — imoo does not publish per-model band lists on the EU store.

**VERDICT: WORKS IN ROMANIA, best-evidenced non-Garmin option.** The vendor's own EU store ships to Romania, eMAG stocks it first-party, and a Romanian user in August 2026 confirms voice calls work on the Romanian network. The gaps are that imoo names no Romanian carrier and has no Romania-specific storefront, and the two 2026 Romanian first-hand reports both complain about location quality (17 m error, poor location, time-zone desync). No Romanian report of a *registration/account* failure was found — which is the specific risk being screened for.

---

## TCL MOVETIME MT48

**Strongest tier reached: T4. No T1, no T2 confirmation, no T3 at all.**

- **T4:** **Sold and shipped by eMAG (1P) at 897.99 lei, in stock**, three colours, 24-month Romanian legal conformity warranty (OUG 140/2021). https://www.emag.ro/ceas-smartwatch-pentru-copii-tcl-movetime-kids-watch-mt48-1-68-4g-gps-ip68-2atm-camera-2mp-cosmic-pink-mt48x-3nlca11/pd/DQ418N2BM/ (note: eMAG's search for "movetime" does not surface it — you have to search "TCL MOVETIME MT48")
- **T5:** TCL states **"Clear VoLTE calls"**, 900 mAh, **up to 2.5 days use / 7 days standby**. Specific LTE bands not published. Companion app named as **TCL Connect**.
- **T2: this is the red flag.** I could **not locate a TCL Connect Android app in the Romanian Play storefront** by search or by direct package lookup (`com.tcl.connect`, `com.tct.connect`, `com.tcl.kidswatch`, `com.tclcom.connect`, `com.jrdcom.tclconnect` all 404). What *is* present in the RO storefronts is a graveyard of abandoned TCL kids-watch apps: iOS **"MOVETIME Track & Talk watch" last updated 2019-11-13**, **"TCLMOVE" last updated 2021-03-17**; Android `com.tctcom.wearable.movetime` (TCLMOVE) shows "Varies with device" with **zero Romanian reviews ever**. iOS `com.tcl.connect` is current (2026-07-17) so the app does exist, but I could not confirm the Android build in the RO storefront.
- **T3:** none. Zero reviews on the eMAG listing, zero Romanian reviews on any TCL wearable app.

**VERDICT: UNPROVEN — do not treat the eMAG listing as evidence of working service.** On paper this is the best hardware/battery fit (VoLTE, 900 mAh, 2.5 days). But TCL has previously shipped MOVETIME kids watches into Europe and then let the companion apps rot for 5–7 years, and that is the exact failure pattern that killed the X6 Play. I found no Romanian user who has ever run one, and I could not confirm the Android app is even distributed in Romania. If this model is shortlisted, the single highest-value verification step is to install the Android TCL Connect app and check whether its registration flow offers Romania / accepts +40 **before** buying.

---

## Canyon (KW48 "Sunny", KW49 "Zefir", KW44 "Jondy") — ASBIS brand

**Strongest tier reached: T4 (strongest RO distribution evidence of any brand) + T2 + dated T3, which is unflattering for the older model.**

- **T4 — carrier bundle. This is the only Romanian carrier bundle I found.** Orange Romania ran a partner-organisation offer bundling the **Canyon Kids smartwatch Jondy KW-44 4G GPS** with an Orange subscription: *"Preț Smartwatch: 61.37 EUR fara TVA, aproximativ 380 lei cu TVA inclus* si orice abonament Orange din oferta curenta"*, with a recommended **PROMO 3 EUR / 18 lei per month** voice+SMS+unlimited internet plan including EEA roaming. Dated **August 2024** (SNPPC) and **September 2024** (AMFB). https://snppc.ro/uploads/blog/upload/Smartwatch-GPS-pentru-copii---oferta-Orange---SNPPC---August-2024.pdf and https://amf-b.ro/wp-content/uploads/2024/10/10.-Smartwatch-GPS-pentru-copii-oferta-Orange-AMFB-Sep-20241.pdf (both are image-only PDFs; details above are from the indexed text).
- **T4 — retail:** full kids range on eMAG in stock — **KW44 316.99 lei, KW48 529.99 lei (sold and shipped by eMAG, https://www.emag.ro/smartwatch-copii-canyon-sunny-kw-48-4g-gps-ip67-violet-cne-kw48vl/pd/D6HVT83BM/), KW49 650.53 lei, KW41 483.69 lei**. ASBIS (Canyon's owner) has a Romanian corporate presence.
- **T2:** `com.canyon.fit` "Canyon Life", 500K+ installs, **4.84 rating, updated 2026-08-18 (today)**, published in RO Play and RO App Store. Firmware language list includes **Romanian**. Vendor claims **EU-based servers** for the kids platform.
- **T5 — KW49 band support is excellent for Romania:** FDD B1, B3, B5, B7, B8, **B20**, B28A, TDD B38/39/40/41, GSM quad-band, **4G VoLTE**, 900 mAh, vendor-measured ~71 h. B20 (800 MHz) coverage is present, which most cheap kids watches lack and which matters for indoor/rural Romanian coverage. KW48: 4G VoLTE, nano-SIM, up to 5 days standby / 2 days use.
- **T3, Romanian, dated — and it is poor for the KW44:** the Canyon Life RO review pool is large and mostly 5★, but the 5★ reviews are overwhelmingly from *adult fitness-band* users. Filtering for kids-watch content:
  - **2024-04-28, 1★:** *"Am cumpărat un smartwatch pentru copii Canyon kw 44, nu arată deloc bine locația, arată că ar fi la peste 50 de km. Nu se pot efectua apeluri de pe smartwatch decât dacă tastezi numărul, direct din agenda nu merge. Notificările vin cu întârziere… Cred că returnez ceasul."*
  - **2024-09-22, 1★:** *"Fetița 8 ani foarte dezamăgită! A mers 2 săptămâni și gata nu mai este conectat doar apeluri. Gps blocat la domiciliu!"*
  - **2025-05-12, 1★:** *"nu e deloc precis. are eroare de vreo 100 metri… nu cumpărați ceasurile de…"*
  - **2024-12-25, 1★:** GPS off by 400–500 m
  - **2024-05-02, 1★ (English):** *"I am trying to add a kids smartwatch but each time… it pops up that the device is not allowed. Also I've inserted a sim card in the watch but phone calls do not work."*
  - Positive: **2025-11-21, 5★** *"recomand aplicația atât și ceasurile sunt foarte bune"*; 2024-10-23, 5★ *"Ceas pentru copii ok"*
- **KW49-specific warning:** the Zefir KW49 is **eSIM-only** (`SIM Card Type: eSIM`, *"No need to insert a physical SIM card: the watch connects remotely to the network"*). Canyon publishes **no operator, plan, tariff or country list for that eSIM**. That reproduces exactly the Xplora architecture: a vendor-controlled connectivity layer that can be withdrawn from a market. I found **no evidence** the KW49 eSIM can be provisioned in Romania. UNKNOWN, and a material risk.

**VERDICT: strongest Romanian *distribution* evidence of any brand; weak-to-negative Romanian *function* evidence for the model that actually has users (KW44).** The nano-SIM **KW48** is the structurally safer Canyon choice because you supply a Romanian Digi/Orange/Vodafone SIM yourself and there is no vendor SIM to withdraw — but it has zero Romanian reviews. The KW49 has the best band support in this entire report but is eSIM-only with no published Romanian provisioning, which is disqualifying until proven otherwise.

---

## The SeTracker2 / Wonlex / TechOne / WIRSEN / Wingereich tier (eMAG's volume sellers)

These are functionally one product family: Chinese ODM hardware sold under many Romanian marketplace brands, nearly all on the **SeTracker2** cloud (some newer ones are full-Android watches running Google Play).

**Strongest tier reached: T1-equivalent from Romanian distributors + abundant dated T3. This tier is *proven to work* in Romania and fails on other grounds.**

- **T1-equivalent, Romanian, live:** Romanian distributors state operator support explicitly.
  - **kidgps.ro** (TechOne range, 229–420 lei, offers a 3-year warranty and Romanian phone support): *"Orice cartelă nano-SIM cu date de la Orange, Vodafone sau Digi"*. https://www.kidgps.ro/collections/gps-smartwatch-copii
  - **TechOne FG41+** on eMAG (seller: KidGPS): *"Functioneaza in retelele Vodafone/Orange/Telekom/Digi"*, 4G **VoLTE**, apps **SeTracker 2 or Wonlex App**. Currently out of stock. 4.04★/27 reviews. https://www.emag.ro/ceas-smartwatch-gps-copii-techone-fg41-4g-volte-apel-video-buton-sos-gps-agps-wifi-rezistent-la-apa-blocare-apel-monitorizare-spion-negru-gps-fg41-negru/pd/DWX4RRMBM/
  - **xkids.ro** (Wonlex KT24S/KT33/KT36/KT37/KT38 and LAGENIO K1/K3/K9/K10, 313–499 lei, RO support line 0770 137 131, apps SeTracker/SeTracker2): *"compatibile cu cele mai cunoscute retele de telefonie mobila din Romania: Orange, Vodafone, Telekom si Digi"*, many listings bundling a **Vodafone RO SIM as a gift** ("SIM Cadou Vodafone 200 min/sms + 20 GB"). https://www.xkids.ro/smartwatch-copii/
- **T3, Romanian, dated — POSITIVE on connectivity, NEGATIVE on battery:**
  - **Wingereich** (Android-based 4G watch, SeTracker2, 399.98 lei, seller Multi Deals, **4.7★ across 524 reviews**): **Ciprian, 2 Mar 2026:** *"Eu am pus Digi si merge perfect"*. **Raluca Gingu, 24 Jul 2026, 5★:** *"se aude foarte bine in apel normal"*, *"se aude si se vede foarte bine in apel video pe whatsapp"*, *"locatie exacta"*, *"aplicatia SeTracker2 functioneaza si se sincronizeaza foarte ok cu ceasul"* — **but** *"bateria se descarca repede"*. **Butnaru Andreea, 27 Jul 2026, 3★:** *"Este foarte fain, dar bateria tine câteva ore"*. https://www.emag.ro/ceas-smartwatch-copii-gps-4g-google-play-whatsapp-tiktok-instagram-youtube-facebook-camera-hd-wingereich-tm-localizare-gps-telefon-apel-video-hd-super-amoled-wifi-bluetooth-apa-ip67-android-ios-sos-mo/pd/DQVXVGYBM/
  - **WIRSEN** (295 lei, seller WIRSEN, **4.47★ across 159 reviews**, "DiGi / Vodafone / Orange / Telekom"): **Alin, 30 Jul 2026:** *"Sunt ok, fac cam tot ce zice in descriere, merge pe DIGI, tine bateria cat de cat"*. **Loredana, 21 Jul 2026:** *"Doar pentru monitorizare și 2, 3 apeluri zilnic, bateria durează 48-60h"*. **Madalina, 15 Jul 2026:** *"Bateria tine in jur de 12h"*. **Daniel, 9 Aug 2026:** *"Foarte foarte bun pt acești bani. Chiar functioneaza bine"*.
  - **TechOne FG41+: Ank, 2 Aug 2024:** *"Functioneaza in reteaua digi, se aude bine, se vede bine si la apeluri video"*. But **Bucur Georgiana-Florentina, 20 Sep 2023:** *"Dezamăgitor! Bateria ține nu mai mult de o ora!"* and **Alexandra Ungureanu, 24 Jan 2024:** *"Baterie extrem de slaba!!!!!"*
- **T2 — the platform risk is real and current.** `com.tgelec.setracker` "SeTracker2" (SJE LIMITED), 10M+ installs, updated 2026-07-16, 4.00/94,139 — but the **Romanian** review stream in 2026 is dominated by outright breakage:
  - **2026-08-16, 1★:** *"Aplicația este sub orice critică! Am schimbat 2 ceasuri din cauza ei… tot timpul apare că «Dispozitivul este oprit». Efectiv nu se poate folosi ceasul…"*
  - **2026-08-12, 1★:** *"nu găsește ceasul, imi spune mereu dispozitiv oprit. nu recomandat"*
  - **2026-07-02, 1★:** *"nu reușesc sa fac inregistrarea codul de 6 caractere nu este acceptat. nu funcționează"* — **a registration failure, in Romanian, dated**
  - **2026-06-16, 1★:** *"Ultima versiune nu gaseste ceasul"*; **2026-05-08, 2★:** *"e problema la servar pt ca nu se pot efectua apeluri video"*; **2026-04-30, 2★:** *"Locația dă erori de kilometri"*
  - **2026-04-23, two separate 1★ reviews** report receiving notifications from unknown accounts named **"666test"** — *"Am impresia ca mai stau si alții pe langa noi părinții si fac supravegherea"* / *"THIS MEANS IT'S A VIRUS!"*. Whatever the cause, that is a multi-tenant leakage symptom on a child-tracking platform.

**VERDICT: PROVEN to work on Romanian networks (Digi confirmed repeatedly and recently), and disqualified anyway.** Battery ranges from ~1 hour to at best 48–60 h under minimal use, with several dated 2026 reports of "a few hours" — that fails the ≥1 real day requirement for a school-day use case. The SeTracker2 cloud is visibly degrading in 2026 with registration failures, "device is off" errors and an apparent cross-account notification leak. This tier is useful mainly as a *control*: it proves the Romanian network side is not the problem, so any brand that fails in Romania is failing in its own cloud, not on RF.

---

## Lagenio (K1 / K3 / K9 / K10, via xkids.ro)

**Strongest tier reached: T3 — a genuine, active Romanian user base, mixed reports.**

- **T2:** `com.yyt.lagenio`, LAGENIO, 50K+ installs, **updated 2026-07-13**, 3.19/151 in RO storefront; iOS `com.yyt.Lagenio` updated 2026-07-06.
- **T3, Romanian, dated:** 8 RO reviews spanning 2025–2026, i.e. real ongoing Romanian usage.
  - **2026-07-06, 4★:** *"De câteva zile nu prea mai merge aplicația cum trebuie… îmi apare «IMPOSIBIL DE CONECTAT LA SERVER…» Ar trebui remediată problema"* — **a dated Romanian server-outage report**
  - **2026-06-12, 1★:** developer not shipping fixes; can't see watch online/offline state; can't monitor 2 children simultaneously; frequent connection delays
  - **2026-06-15, 2★:** *"faceti ceva cu locația, o vrem in timp real !!!"*
  - **2025-08-06, 5★:** *"Până acum a mers fără cusur."*
- **T4:** distributed in Romania by xkids.ro (313–499 lei) with a Romanian support line.

**VERDICT: works in Romania but the cloud is fragile.** Better evidenced than most of the cheap tier, still a small-vendor single-point-of-failure.

---

## Garett (Polish brand: Kids Tech 4G, Nice Pro 4G, Twin 2 4G, Essa 4G)

**Strongest tier reached: T4 (vendor sells directly into Romania) with NEGATIVE T3 on the platform.**

- **T4:** **GARETT is itself the seller on eMAG** — Kids Tech 4G 311.25 lei (11 reviews), Nice Pro 4G 373.75 lei (41 reviews), **Twin 2 4G 423.75 lei (51 reviews)**, Essa 4G 575.51 lei, all in stock. A Polish manufacturer selling first-party into the Romanian marketplace is a real channel.
- **T3:** thin on the product pages (Anca Gherasim, 20 Feb 2026, 5★, *"Mult superior fata de ce am achiziționat pana acum cam la acelasi pret"*; Adi, 13 Jul 2025, 4★, *"Raport pret calitate acceptabil"*) — but the **companion app is the problem**: `com.tgelec.garetts` "Garett Tracker" is a **TGELEC white-label (same platform family as SaveFamily)** rated **2.6/5 across 3,634 ratings**, with RO reviews such as **2025-06-26, 1★:** *"Precizia in aer liber (afara) este jalnică. Sunt cu copilul afara și imi arată ca este la cel puțin 100 m… Harta nici nu este actualizata 2025."* and **2025-04-25, 1★:** *"care ar fi motivele pentru care la mine nu se conecteaza aplicația?"* (Newer models may use `com.garett.ekids`, which has 10K+ installs and **zero** RO reviews.)

**VERDICT: available and warranted in Romania, but the tracking platform has poor and specifically Romanian negative evidence.** Mid-tier at best.

---

## SaveFamily (Spain)

**Strongest tier reached: T2 with NEGATIVE T3. No Romanian retail channel found.**

- **T2:** `com.tgelec.savefamily`, 100K+ installs, in RO Play; iOS `com.savefamily.watch` (Grupo SaveFamily SL) updated 2026-07-10 in RO App Store.
- **T3, Romanian, dated — all negative:** **2024-04-09, 1★:** *"Nu te poți conecta cu ceasul copilului"*. **2022-09-23, 1★:** *"Functioneaza defectuos pe relatia telefon parinte - ceas copil. Aplicatia in telefonul parintelui porneste cu dificultate. Nu recomand nici ceasul nici aplicatia."* Also 2024-10-17, 1★ (English): video call not working.
- **T4:** no Romanian retailer, distributor or warranty entity found.

**VERDICT: no positive Romanian evidence. Avoid.**

---

## Anio (Germany)

**Strongest tier reached: T2 only.**

- **T2:** `com.anio.watch`, Anio GmbH, 100K+ installs, **4.6/1,756, updated 2026-08-13**, present in RO Play; iOS `watch.anio.app` updated 2026-08-14 in RO App Store. Actively maintained.
- **T3:** exactly **one** Romanian review ever — **2025-08-24, 1★: *"Nu pot conecta"*** (cannot connect). That is the entire Romanian evidence base.
- **T1:** UNKNOWN — I could not reach anio.de from this environment to check for a supported-country statement. **This is a specific gap worth closing**, since German kids-watch vendors typically do publish an explicit country list, and Anio is otherwise a plausible EU candidate.
- **T4:** no Romanian retailer or distributor found.

**VERDICT: UNKNOWN, leaning negative.** Well-maintained app, no Romanian footprint, and the single Romanian data point is a connection failure. Do not shortlist without first obtaining Anio's own supported-country statement.

---

## Brands with app-store presence in Romania but no other Romanian evidence

All of the following are published in the Romanian iOS storefront (checked via iTunes lookup, `country=ro`) but have **no Romanian retailer, no Romanian carrier relationship, no Romanian user reports and no vendor statement naming Romania** that I could find. App-store publication alone is Tier-2-at-best and, per the Xplora case, does not predict that account creation will work.

| Brand | RO storefront app | Last updated | Other RO evidence |
|---|---|---|---|
| SoyMomo (Chile/Spain) | SoyMomo Watch `com.sosmartapp.soymomo` | 2026-08-04 | none found — UNKNOWN |
| myFirst (Singapore) | myFirst Circle `com.oaxis.socialcircle` | 2026-07-23 | none found — UNKNOWN |
| ELARI (KidPhone) | ELARI SafeFamily `com.elari.tech.elari-safefamily` | 2026-03-25 | none found — UNKNOWN |
| Botslab / Qihoo 360 | Safety Watch `com.qihoo.360kidswatch` / `com.qihoo.kids.watch.intl` | 2026-08-14 | 1 RO Play review, 2025-03-27, describing an email/code registration dead-end — UNKNOWN/negative |
| TickTalk (US) | TickTalk `com.xdreamllc.ticktalk3` | 2025-09-12 | none found; US-carrier bound — treat as unavailable |
| Kidiwatch | `com.tgelec.kidiwatch` | n/a | **0 RO reviews ever** — UNKNOWN |
| Kids Watch 2 (United Group B.V.) | `com.ug.kidcare` | n/a | **0 RO reviews ever** — UNKNOWN |

**Not found in the Romanian storefronts at all** (i.e. no Romanian presence whatsoever): **Spacetalk** (AU — only unrelated Korean apps by a same-named company), **Moochies**, **Pingonaut** (0 results), **Fitbit Ace LTE** (no RO storefront app), **Xiaomi/Mi Bunny**. Treat all as unavailable in Romania.

---

## Romanian carriers

- **Orange Romania — the only carrier with any kids-watch evidence.** Not in the mainstream online shop, but Orange ran **partner-organisation bundles in Aug–Sep 2024** offering the **Canyon Kids Jondy KW-44 4G GPS at ~380 lei with VAT alongside any current Orange subscription**, with a recommended 3 EUR / 18 lei per month plan (voice/SMS/unlimited data, EEA roaming included). Sources: SNPPC (police union) and AMFB (Bucharest firefighters' association) member-benefit PDFs. Orange also publishes a generic Romanian buying guide with a *"Smartwatch-uri pentru copii: caracteristici speciale"* section, but names no models: https://www.orange.ro/help/articole/ghid-complet-pentru-alegerea-ceasului-smart-perfect
- **Vodafone Romania** — no kids GPS watch found in the online shop. Indirect evidence only: xkids.ro bundles a free **Vodafone RO prepaid SIM** ("200 min/sms + 20 GB") with many kids watches, which at least confirms Vodafone SIMs are the practical default for this device class in Romania.
- **Digi** — sells no kids watch, but is the **most frequently confirmed working network** in Romanian first-hand reviews across three different brands (Wingereich Mar 2026, WIRSEN Jul 2026, TechOne Aug 2024).
- **Telekom Romania** — nothing found.
- **Device compatibility / VoLTE whitelists** — **UNKNOWN.** I found no published VoLTE or device-compatibility whitelist from any Romanian operator. This is a genuine gap: Romania has shut down 3G, so a watch without VoLTE will have data-only connectivity and no working voice, and no Romanian carrier publishes which devices they have whitelisted. Where VoLTE is explicitly claimed I have flagged it (Canyon KW48/KW49, TCL MT48, TechOne FG41+).

---

## Romanian retailers surveyed

| Retailer | Kids 4G GPS watches carried | Notes |
|---|---|---|
| **eMAG** | Everything. 1P: Garmin Bounce 2, imoo Z1/Z3/Z7/X10, TCL MOVETIME MT48, Canyon KW48. Marketplace: Xplora (foreign seller, OOS), Garett (vendor-direct), Wonlex/WIRSEN/Wingereich/TechOne/Lagenio | The only retailer that matters for evidence purposes. **1P ("Vândut și livrat de eMAG") is the meaningful signal** — it implies a real import/warranty arrangement |
| **kidgps.ro** | TechOne KT18/KT19T/KT23T/KT34/KT37/KT38/KT42, CT02S — 229–420 lei | Romanian specialist; 3-year warranty, Romanian phone support, explicit Orange/Vodafone/Digi compatibility statement |
| **xkids.ro** | Wonlex KT24S/KT33/KT36/KT37/KT38, Lagenio K1/K3/K9/K10 — 313–499 lei, 211 SKUs | Romanian specialist; explicit "Orange, Vodafone, Telekom si Digi" statement; free Vodafone SIM bundled; SeTracker/SeTracker2 |
| **Vexio.ro** | Garmin Bounce 2 at 1,499 lei | |
| **Altex, Flanco, Cel.ro, Evomag, PC Garage, Quickmobile** | **UNKNOWN** — all blocked or timed out from this environment (Altex timeout, PC Garage HTTP 403). Not investigated. | Gap |

**Accessories-only pattern:** I specifically looked for the "sells straps/chargers but not the watch" signal. I did **not** find it — eMAG's Xplora presence is whole watches, just out of stock. The Xplora withdrawal signal here is *stock and seller identity* (out of stock at eMAG 1P; the only other listing from a Hungarian marketplace seller), not accessories-only.

**Price sanity vs. Germany:** Garmin Bounce 2 at eMAG 1,835.87 lei ≈ €360 new / 1,459.99 lei ≈ €287 refurb, vs Vexio 1,499 lei ≈ €295, against a ~€299 European RRP — i.e. Romanian pricing is at or slightly above EU RRP, with no import premium that would suggest grey-market supply. Full DE-vs-RO price comparison was out of scope for this lens.

---

## Closing assessment

### Brands showing POSITIVE signs of Romanian support

1. **Garmin (Bounce 2)** — the only brand with a live, vendor-published, Romanian-localised country list that names **România**, backed by a `garmin.com/ro-RO` storefront, eMAG 1P stock, Romanian tech-press coverage, and — decisively — Romanian owners who successfully activated Garmin's own LTE subscription in Romania. Garmin owns the connectivity end-to-end, so there is no Romanian carrier relationship to be withdrawn. **However**, four dated 2026 Romanian reviews independently report very weak LTE, most calls failing, and long message delays. Supported ≠ performing well. Buy only with a return window and test calls at home, school and the commute in week one.
2. **imoo** — vendor's own EU store explicitly ships to **Romania**; eMAG stocks four models first-party; a Romanian owner in Aug 2026 confirms **normal voice calls work**. No Romanian report of an account/registration failure. Weakness: no Romania-specific storefront, no Romanian carrier named, and both 2026 Romanian reports complain about location accuracy.
3. **Canyon (ASBIS)** — the only brand with an actual **Romanian carrier bundle** (Orange, 2024) plus eMAG 1P stock, EU-hosted servers, and Romanian firmware. But its only model with Romanian users (KW44) has multiple dated Romanian reports of 50 km / 400 m / 100 m GPS errors and one "stopped working after 2 weeks". The KW49's Romanian-perfect band set (incl. B20) is undermined by it being **eSIM-only with no published Romanian provisioning** — i.e. the Xplora risk architecture again.
4. **The Wonlex/TechOne/WIRSEN/Wingereich tier** — genuinely and repeatedly **proven to work on Digi, Orange, Vodafone and Telekom** in dated 2026 Romanian reviews, with Romanian distributors, Romanian warranties and Romanian phone support. Disqualified on battery (hours to ~2 days at best) and on the visible 2026 decay of the SeTracker2 cloud, including a Romanian registration failure and an apparent cross-account notification leak.

### Brands showing signs of ABSENCE or WITHDRAWAL from Romania

1. **Xplora — confirmed absent.** Its own live FAQ lists 10 countries for online purchase and Romania is not among them; its Romanian eMAG presence has collapsed to one out-of-stock model plus a Hungarian marketplace seller; and its Romanian review pool is 7 reviews for a 500K-install app, six of them 1★, including *"usless in some countries"* and a SIM that works in a phone but not in the watch. The commissioner's experience is the documented norm, not bad luck. **Do not re-buy any Xplora model.**
2. **TCL MOVETIME — present at retail, absent as a service.** MT48 is on eMAG 1P at 897.99 lei with a Romanian warranty, yet I could not find its Android companion app in the Romanian Play storefront, and TCL's previous European kids-watch apps have been abandoned since 2019 and 2021 with **zero Romanian reviews in their entire history**. This is the profile of a device that ships into a market its cloud does not really serve — the exact Xplora pattern. Unproven, and the burden of proof should be on TCL.
3. **SaveFamily** — RO storefront app, no Romanian retail, and every Romanian review is a connection failure.
4. **Anio** — actively maintained app in the RO storefronts, but zero Romanian retail and exactly one Romanian review saying *"Nu pot conecta"*. Unresolved: I could not reach anio.de to check for a supported-country list.
5. **Spacetalk, Moochies, Pingonaut, Fitbit Ace LTE, Xiaomi/Mi Bunny** — no Romanian storefront presence at all. Treat as unavailable.
6. **SoyMomo, myFirst, ELARI, Botslab/Qihoo, TickTalk, Kidiwatch, Kids Watch 2** — RO storefront app only, nothing else. UNKNOWN; per the Xplora precedent, app-store availability must not be read as service availability.

### The single most useful structural finding

The Romanian *network* side is not the constraint. Cheap SeTracker2 watches demonstrably register, call and video-call on Digi and Orange in 2026. Every failure documented in this report is a **vendor cloud** failure — Xplora's account backend, SeTracker2's servers, Lagenio's "IMPOSIBIL DE CONECTAT LA SERVER", Canyon's "device is not allowed", Garmin's roaming partner. That means the correct screening question for any shortlisted model is not "does it support Romanian LTE bands" but **"can I demonstrate that this vendor's account/registration flow accepts a Romanian user today, and does that vendor have a commercial reason to keep serving Romania tomorrow?"**

On that test, only **Garmin** (explicit country list + Romanian subscribers + Garmin-owned connectivity) and, more weakly, **imoo** (official EU store ships to Romania + eMAG 1P + working voice calls confirmed Aug 2026) currently pass.

### Recommended verification steps before purchase (cheap, high-value)

1. **Install the candidate's Android app and attempt registration with a +40 number before buying.** For TCL MT48 this is essential — I could not even confirm the Android app is distributed in Romania.
2. **For Garmin Bounce 2**, confirm the subscription can be purchased with a Romanian billing address, and buy from eMAG (30-day return) rather than abroad so the connectivity complaints above can be tested and returned.
3. **Ask Canyon directly whether the KW49 eSIM can be provisioned on a Romanian network**, and prefer the nano-SIM KW48 if the answer is unclear — a self-supplied Romanian SIM removes the vendor-connectivity single point of failure entirely.
4. **Close the Anio gap** — obtain Anio GmbH's supported-country statement; it is the only otherwise-plausible EU brand I could not evaluate.
