# Canyon Zefir KW-49 (CNE-KW49PB / CNE-KW49BL)

```yaml
---
model:                  Canyon Kids Watch Zefir KW-49 (P/N CNE-KW49PB pink, CNE-KW49BL blue)
brand:                  Canyon (ASBISC Enterprises PLC, Cyprus / ASBIS Romania SRL)
release_year:           UNKNOWN — no vendor announcement found. Earliest dated artefact is
                        Canyon's own activation video, 2026-01-05. Treat as a late-2025/2026 product.
still_sold:             yes

# --- Romania verdict (the pass/fail question) ---
ro_status:              unknown
ro_evidence_tier:       5   # bands fit RO networks (primary-sourced) — necessary, not sufficient.
                        # Tier 4 partially reached for the BRAND (ASBIS Romania SRL, eMAG stock,
                        # Canyon Life in RO Play storefront) but NOT for this model's connectivity.
ro_killer:              n/a — but see the BLOCKING UNKNOWN below. Do not read "unknown" as "probably fine".
                        Until someone demonstrates a Romanian operator eSIM profile installing on this
                        watch, treat this model as unbuyable.

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands:              [B1, B2, B3, B5, B7, B8, B20, B28A, TDD-B38, TDD-B39, TDD-B40, TDD-B41]
band_b20:               true
band_b28:               true    # B28A. In Romania 700 MHz is 5G NR n28, not LTE — this buys nothing here.
volte:                  true    # vendor-stated "4G VoLTE support". Not confirmed provisioned on any RO network.
voice_fallback:         volte   # GSM 850/900/1800/1900 also present, so 2G CSFB exists as a fallback on Orange/Digi
modem_chipset:          Unisoc UMS9117-L

# --- Positioning (the #1 criterion) ---
positioning:            [GPS, WiFi, LBS]   # no GLONASS / Galileo / BeiDou published by the vendor
wifi_positioning:       true    # marketed as "CANYON AI SafeTrack" for indoor positioning
update_interval_min:    UNKNOWN — vendor does not publish the tightest interval the app allows.
                        Canyon's own battery test used a 10-minute geolocation frequency.

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:            900
battery_claimed_h:      72 (vendor "up to 3 days" use / "up to 5 days" standby); ~71 h under a
                        fully published vendor test profile (conditions quoted below)
battery_observed_h:     UNKNOWN — no independent review, teardown or user report found anywhere,
                        in any language.

# --- App & service ---
app_name:               Canyon Life
app_android_min:        8.0
app_ro_playstore:       true
app_last_update:        2026-08   # Android 0.37.2, listed last updated 2026-08-05
data_region:            UNKNOWN — marketing says "EU-based servers"; the binding privacy policy says
                        data may be held outside the EU. The two statements conflict. See Security & privacy.

# --- Practical ---
sim:                    eSIM     # eSIM-ONLY. No physical SIM tray. CONFIRMED — see below.
water_rating:           IP67
weight_g:               54
camera:                 true     # 0.3 MP
games:                  true     # 5 games + educational mini-apps + audio player (1 GB)
extras_disableable:     partial  # vendor states games, gallery and audio player can be locked from the app;
                                 # no evidence the camera or the covert "stealth call" can be locked
price_display_eur: "≈ €67–69"      # normalized for the site tile; picked from the price fields below
price_display_ron: "650.53 lei"
price_eur:              ~67–69 (Slovakia); ~117 (Czechia, planeo.cz)
buy_from:               eMAG.ro marketplace seller "OVOLT România" (NOT eMAG 1P) — or, far cheaper,
                        SK/CZ retail (Axdata.sk, Heureka.sk, ASBIS CZ eshop)
price_ro_eur:           ~131 (650.53 RON, reduced from 797.22 RON)
---
```

## Verdict

Best-published radio in the whole field — B20 included, verified from Canyon's own spec page, not a
retailer table — attached to a connectivity model nobody has shown working in Romania.
**It is eSIM-only; that is now settled, high confidence.** But it is *not* the Xplora architecture:
Canyon sells no SIM, no plan and no subscription, and tells you to get the profile from your own
operator — so the failure mode is not a vendor withdrawing service, it is that no Romanian operator
is known to issue a standalone eSIM profile this watch can install. **Blocked, not condemned.**

## Does it work in Romania?

### THE CONTRADICTION, SETTLED: it is eSIM-only. Confidence: HIGH.

The retail sweep's reading of "nano-SIM, operator-agnostic" is **wrong**. Six independent lines of
primary evidence, all pointing the same way:

1. **The product's own name contains it.** Canyon's page title is
   "Kids Watch **Zefir KW49 E-SIM** 4G LTE" — https://canyon.eu/product/cne-kw49pb/ (accessed 2026-08-19).
2. **The spec field.** `SIM Card Type: eSIM`, with the body copy *"No need to insert a physical SIM
   card: the watch connects remotely to the network and stays active during your child's most
   energetic playtime."* — same page, same date.
3. **The control that makes this decisive.** On the *same site*, in the *same spec field*, Canyon's
   KW-48 Sunny reads **`Nano-SIM`** — https://canyon.eu/product/cne-kw48bl/ (accessed 2026-08-19).
   Canyon populates this field per model. `eSIM` on the KW-49 is therefore a deliberate value, not a
   template default. This is the single strongest piece of evidence, and it also explains the
   contradiction: the "nano-SIM" reading almost certainly bled across from the KW-48.
4. **Every distributor and retail SKU carries E-SIM in the product title**, not just the spec table:
   ASBIS CZ eshop, P/N `CNE-KW49PB`, "Canyon Kids Watch ZEFIR KW-49 **E-SIM** 4G, Pink"
   (https://eshop.asbis.cz/canyon-kids-watch-zefir-kw-49-e-sim-4g-pink_d220759.html);
   Alza.cz "Canyon ZEFIR KW-49 **E-SIM** 4G růžové"; Planeo.cz; Axdata.sk; Datacomp.sk;
   Heureka.cz/Heureka.sk. All accessed 2026-08-19.
5. **Canyon publishes a dedicated activation video for it**: "How to activate an E-SIM in Canyon
   Zefir KW-49 Kids Watch", channel CANYON ACC, **published 2026-01-05** —
   https://www.youtube.com/watch?v=OChpljasOT4 (metadata retrieved 2026-08-19; the video body itself
   could not be retrieved, so its contents are **unverified**).
6. **No nano-SIM variant exists.** The only SKUs found are the two colourways, `CNE-KW49PB` (pink)
   and `CNE-KW49BL` (blue), and both are named "E-SIM 4G". Canyon's kids category page lists eight
   models; the KW-49 is the only one flagged E-SIM.

**Physical SIM tray:** Canyon's page states there is no SIM slot. I could not obtain a photograph of
the watch's side profile at sufficient resolution to confirm the absence of a tray independently, so
"no tray" rests on vendor text plus the absence of any nano-SIM SKU. That specific point is
**unverified by photograph**.

### The part the contradiction got wrong in the other direction

The brief's premise was that eSIM-only ⇒ vendor-controlled connectivity ⇒ Xplora repeat.
**That premise does not hold for this device**, and this is the most consequential finding here.

Canyon does not sell a SIM, a plan, a tariff or a subscription for the KW-49. Its own copy describes
a **bring-your-own-operator** downloadable profile:

> **CZ (canyon.eu Czech site, accessed 2026-08-19):** *"Zapomeňte na plastové SIM karty! S technologií
> eSIM se vaše chytré hodinky připojí k síti rychle, bezpečně a bez nutnosti návštěvy prodejny.
> **Aktivace probíhá online během pár minut přes vašeho mobilního operátora.**"*
> **EN:** "Forget plastic SIM cards! With eSIM technology your smartwatch connects to the network
> quickly, securely and with no need to visit a store. **Activation happens online within a few
> minutes through your own mobile operator.**"
> — https://czech.canyon.eu/product/cne-kw49bl/

And on Canyon's blog, explicitly:

> **EN (Canyon blog, undated — footer reads "© 2014-2023 CANYON"; accessed 2026-08-19):**
> *"The carrier provides a QR code or activation details through their app. You scan this code or
> enter the information into the companion app on your smartphone."*
> — https://canyon.eu/blog/why-do-you-need-a-kids-smartwatch-with-esim-and-what-is-it/

That is a GSMA consumer-eSIM download flow, not a vendor-embedded profile. **There is no Canyon
account layer that can refuse a Romanian user their connectivity, because Canyon is not the
connectivity provider.** The Xplora comparison is therefore not the right one.

### So what actually blocks it — the real question, and it is unresolved

The risk moves from *"will Canyon serve Romania"* to *"will any Romanian operator issue a standalone
eSIM profile, with its own number, that this watch's LPA can install"*. On that:

- **Orange Romania** offers only **Number Share** — the watch shares the *parent's* number, at
  **2.03 €/month incl. VAT per secondary device**. The published compatible-device list is Apple
  Watch, Samsung Galaxy Watch and Huawei Watch models **only**; no kids watch of any brand appears.
  Even if it worked, a shared parent number is the wrong model for a child's watch.
  https://www.orange.ro/servicii/number-share/ (accessed 2026-08-19).
- **Digi Romania** does sell a **prepaid eSIM with its own number**, self-service, QR delivered by
  email after an online form and ID upload: *"După finalizarea plății, primești pe e-mail codul QR
  pentru activarea e-SIM-ului"* ("After completing payment you receive the QR code for activating
  the eSIM by e-mail"). It states *"Poți utiliza cartela prepaid e-SIM doar pe dispozitive compatibile
  eSIM"* ("You can use the prepaid eSIM card only on eSIM-compatible devices") but **publishes no
  device list**. The DIGI eSIM 2 tariff option is restricted to ages 14–25.
  https://www.digi.ro/prepaid-esim (accessed 2026-08-19). Digi has **no** Number Share service.
- **Vodafone Romania** — **UNKNOWN.** https://www.vodafone.ro/esim could not be retrieved in this
  pass. Not checked, not disproven.

**The mechanical unknown that gates everything:** how does an operator's activation code actually get
onto this watch? Canyon says you enter it "into the companion app on your smartphone", i.e. Canyon
Life acts as a proxy LPA. **No manual, no quick-start guide, no support article and no CE/RED
declaration for `CNE-KW49PB` could be located** — Canyon's product page has a "Downloads" heading
with no files behind it, and ASBIS's CE-document CDN (`prod-cdn.prod.asbis.io`) uses hashed paths
that cannot be enumerated. So whether Canyon Life will accept an arbitrary Digi/Orange/Vodafone
activation code, or only codes from an operator Canyon has integrated, is **entirely unverified**.

**Tier reached: 5** (bands fit, primary-sourced). Everything above tier 5 is unproven for this model.
Zero Romanian first-hand reports exist. Zero reports of any nationality exist.

## Pre-purchase test

The normal test (install app from RO Play store, register with +40) is **necessary but not
sufficient here**, because Canyon Life is a shared app across Canyon's whole wearable range and will
almost certainly accept a +40 registration regardless of whether the watch can get on a network.

Run this instead, in order:

1. **Install Canyon Life (`com.canyon.fit`) from the Romanian Play storefront and register with a
   +40 number.** Free, ten minutes. If it fails, stop. Note the KW-44 report below of a
   *"device is not allowed"* pairing error — that is the same cloud, so this step is not a formality.
2. **Before paying, ask Canyon/ASBIS Romania in writing:** *"Can the Zefir KW-49 install an eSIM
   profile issued by Digi / Orange / Vodafone România, using the QR or activation code they supply?
   If yes, which operators have you tested?"* ASBIS Romania SRL, Splaiul Independenței 319, Sector 6,
   Bucharest (https://www.asbis.com/romania). Get the answer in writing before money moves.
3. **Buy a Digi prepaid eSIM (~€2) *first*, separately, and keep the QR.** It is the cheapest
   standalone-number eSIM in Romania and it is the actual test article.
4. **Only then buy the watch**, and install the profile within the return window.

**Return windows:** the eMAG listing is **marketplace, not 1P** — seller "OVOLT România", which
gives **14 days**, not eMAG's 30. Buying from an EU distance seller (Axdata.sk, Planeo.cz) also gives
14 days. There is no 30-day option here.

**Price note worth acting on:** 650.53 RON ≈ €131 on eMAG, against **€67.30 on Heureka.sk** and
**€68.50 at Axdata.sk** (both accessed 2026-08-19). The Romanian listing is roughly double the
Slovak one for the same P/N. If this model is ever cleared, do not buy it in Romania.

## Positioning quality in real use

**No observed data exists.** Nothing to report from any user, reviewer or teardown.

What can be stated from the vendor: positioning is **GPS + Wi-Fi + LBS** only —
https://canyon.eu/product/cne-kw49pb/ (accessed 2026-08-19). Canyon publishes **no GLONASS, Galileo
or BeiDou support** for this model. Against the field that is a real weakness: the imoo Z7/X10 claim
five constellations and the TCL MT48 claims dual-frequency L1+L5. Single-constellation GPS is the
weakest positioning stack among the primary candidates, and Galileo absence matters in Europe.

Indoor positioning is marketed as **"CANYON AI SafeTrack"**, a Wi-Fi-scan feature. Canyon publishes
no accuracy figure, no methodology and no independent validation. Treat the name as marketing.

The silent-fallback risk the template asks about — watch reports LBS cell-tower position as if it
were GPS — is exactly the failure pattern documented on the older Canyon KW-44 (below), and nothing
in the KW-49's published stack rules it out.

## Battery in real use

**Claimed:** 900 mAh; "up to 3 days" use, "up to 5 days" standby.

**The ~71 h figure is the most transparent battery disclosure found on any watch in this project.**
Canyon publishes the full test profile behind it (canyon.eu/product/cne-kw49pb/, accessed 2026-08-19):

> "Connected to Canyon Life app, geolocation frequency: 10 minutes, Default brightness 50%, 1-hour
> outdoor walk with 5 location reports, 'Find device' function used 5 times per day, 1 video call per
> day (5 minutes duration), 1 voice call (VoLTE) per day (1 minute duration), Screen sleep time: 5 seconds"

That answers the brief's question about what produced the number. It is a vendor-run bench test, not
an independent measurement, but it is a **realistic school-day profile** — 10-minute tracking plus a
daily video call is close to actual use, not "idle with tracking off". If it survives contact with
reality even at 60% of claim, that is still ~43 h, comfortably over the one-day floor.

**Observed:** **UNKNOWN.** No independent figure exists. Do not treat 71 h as observed.

**Retailer-table caution:** the eMAG listing's own spec table reads "72 h" battery and **"1.3 inch"**
display — the display figure is wrong (Canyon says 1.44"). Do not use that table for anything.

## Network & bands

**Verified from the primary source** — Canyon's product page, not a retailer table
(https://canyon.eu/product/cne-kw49pb/, accessed 2026-08-19), and matching Canyon's Czech and South
African regional sites:

| | |
|---|---|
| GSM | 850 / 900 / 1800 / 1900 MHz |
| WCDMA | 850 / 900 / 1900 / 2100 MHz |
| FDD-LTE | **B1, B2, B3, B5, B7, B8, B20, B28A** |
| TDD-LTE | B38 (2600), B39 (1900), B40 (2300), B41 (2500) |
| VoLTE | stated supported |

**Fit against Romania:** B3 (1800) national workhorse — present. **B20 (800) — present**, which is
Orange's only sub-1 GHz LTE band and the one that decides indoor coverage in a concrete school.
B1 and B7 present. This is Romania-complete with margin, and it is one of only ~5 models in the
entire market that publish bands at all.

**Caveats that stop this being a win on its own:**
- **B28A is worthless in Romania.** 700 MHz here is 5G NR n28, not LTE. It pads the spec sheet.
- **WCDMA is dead weight.** Romania has no 3G (Orange completed shutdown end-2025).
- **VoLTE stated ≠ VoLTE provisioned.** Romanian operators whitelist VoLTE per IMEI/TAC and no kids
  watch appears on any published list. If VoLTE provisioning fails, the quad-band GSM radio means
  voice degrades to 2G on Orange or Digi rather than going silent — a genuine safety net, though
  neither operator has published a 2G end date.
- **None of this matters if no profile can be installed.** A perfect band list on a radio with no
  SIM is a perfect band list on a brick.

**No CE/RED declaration of conformity for `CNE-KW49PB` could be located**, so the band list rests on
the manufacturer's own spec page. That is a primary source, but it is not an accredited one.

## Features & what can be disabled

Per Canyon (https://canyon.eu/product/cne-kw49pb/, accessed 2026-08-19):

| Feature | Present | Parent can disable? |
|---|---|---|
| Voice calls, video calls, voice chat | yes | Whitelist only — up to 50 trusted contacts; unknown numbers blocked |
| SOS button | yes | UNKNOWN |
| Camera (0.3 MP) | yes | **UNKNOWN** — gallery is lockable, camera itself unstated |
| Gallery | yes | yes — lockable from Canyon Life |
| Games (5) | yes | yes — lockable from Canyon Life |
| Audio player (1 GB) | yes | yes — lockable from Canyon Life |
| Educational mini-apps / English learning | yes | UNKNOWN |
| Class mode / Do Not Disturb | yes (DND, silent call mode) | n/a — it *is* the restriction |
| Pedometer | yes | UNKNOWN |
| **Remote photo capture** | yes | **UNKNOWN** |
| **"Stealth calls" (covert listen-in)** | yes | **UNKNOWN — see below** |

Vendor wording: *"Parents can lock or unlock apps like games, the gallery, or music depending on the
moment"* — so app-level lockdown is real and app-controlled, which is better than most of the field.
The gaps above are gaps in Canyon's documentation, not inferences.

## Security & privacy

**Covert remote listening: present, and Canyon markets it.** Canyon's own product page:

> "silently check what's happening around your child with **stealth calls** or remote photos"

That is a one-way ambient audio call the child is not shown. It is the standard kids-watch
"monitor/listen-in" function under a friendlier name. **Whether it can be locked, PIN-gated, or
disabled by the account owner is UNKNOWN** — Canyon documents no control over it. Combined with
remote photo capture, an attacker with account access gets a live microphone and camera on a
seven-year-old. Treat account security as the primary threat surface, not the device.

**Where the data lives — Canyon's two statements contradict each other.**

- **Marketing** (repeated across canyon.eu, canyon.africa and the KW-44/KW-48 pages, accessed
  2026-08-19): *"It combines precise location tracking, safe-zone alerts, protected video
  communication and strict contact control with **fully encrypted data and EU-based servers**."*
- **The binding privacy policy** (https://canyon.eu/mobile-app-privacy-policy/, **last updated
  2024-03-15**, accessed 2026-08-19): *"We may transfer and maintain some of your personal
  information on our servers or databases **outside the European Union**."* It adds that recipient
  countries *"may not have the same data protection laws as your jurisdiction"* and relies on
  standard contractual clauses — **and it names no country and no processor** other than Google
  Analytics.

So the "EU servers" claim from the earlier sweep is **vendor marketing copy that the vendor's own
legal document does not support**. Attributed, not restated as fact. `data_region: UNKNOWN`.

**Controller and operator:** ASBISC Enterprises PLC, Cyprus (HE 75069), 1 Iapetou, 4101 Agios
Athanasios, Limassol. The User Agreement (https://canyon.eu/watch-terms/) is governed by **Cypriot
law** and gives a second Cyprus address (43 Koronakio St., Diamond Court, 4103 Limassol) — the
inconsistency is Canyon's, not a transcription error.

**The app is not built by Canyon.** Both stores list the publisher as **Perenio IoT spol. s r.o.**
(Czech), not ASBIS — App Store https://apps.apple.com/us/app/canyon-life/id1439310012 and
Play/apkcombo (accessed 2026-08-19). A third party in the chain that the privacy policy never names.

**iOS App Privacy declaration** (accessed 2026-08-19):
- *Used to track you:* **Contact Info**. On an app whose primary users are parents of small children,
  a declared tracking use of contact info is a red flag worth weighing.
- *Linked to you:* precise and coarse **Location**, Health & Fitness, Contact Info, **Contacts**,
  User Content (photos, videos, audio, texts), Identifiers.

**App maintenance is uneven.** Android `com.canyon.fit` v0.37.2, min Android 8.0, 500,000+ installs,
last updated **2026-08-05**, rated 4.0 from 8,167 reviews (apkcombo mirror, accessed 2026-08-19; an
earlier sweep read 4.84 on the RO Play storefront on 2026-08-18 — the two figures disagree and I
could not resolve it, so both are recorded). iOS is the same version number 0.37.2 but shows
**last updated 2024-08-04** with only 35 ratings. A two-year-stale iOS build is a maintenance signal.

**Vulnerability research:** **none found** naming Canyon Life, ASBIS, Perenio or the KW-49. No CVE.
This is an absence of evidence, not evidence of safety — this platform has attracted no published
research at all, which for a kids' tracker is itself a finding.

**Platform-level, and explicitly unconfirmed for this chip:** Kaspersky ICS CERT disclosed
**CVE-2024-39431 / CVE-2024-39432** in Unisoc SoCs — modem-to-application-processor flaws allowing
remote code execution at system privilege
(https://www.kaspersky.com/about/press-releases/kaspersky-identified-security-flaws-in-unisoc-system-on-chip-enabling-remote-hijacking).
The KW-49 runs a **Unisoc UMS9117-L**. **I could not confirm the UMS9117 is in the affected list, and
Canyon publishes no security-update policy or patch channel for this watch.** Both points
**unverified**; recorded because the chip vendor is the same and the patch story is blank.

## Reality check

- **"eSIM — no need to insert a physical SIM card... fewer technical steps for parents"** means: you
  cannot use the Digi SIM already in your drawer. You must obtain a downloadable eSIM profile from a
  Romanian operator with its own number, and hope Canyon Life will install it. That is *more*
  technical steps in Romania, not fewer, and possibly infinitely many.
- **"Up to 3 days battery"** is, unusually, close to honest — Canyon publishes the exact test profile
  and it includes 10-minute tracking and a daily 5-minute video call. It is still a vendor bench
  figure with zero independent corroboration.
- **"B1/B2/B3/B5/B7/B8/B20/B28A"** is the best-published radio in the field and the B20 is real. B28A
  is decorative in Romania and WCDMA is dead weight.
- **"CANYON AI SafeTrack"** is a Wi-Fi scan with a product name. No accuracy figure is published.
- **"Fully encrypted data and EU-based servers"** is marketing that Canyon's own privacy policy
  contradicts in writing.
- **The 1.44" 240×240 IPS screen is small and plain.** Stated as fact, not criticism: it is a
  240×240 panel on a 43 × 56 × 16.5 mm, 54 g body. For a seven-year-old this is arguably correct
  design — less to break, less to stare at, and it is part of why 900 mAh stretches to three days.

## What users say

**Works:** nothing. No positive first-hand report of the KW-49 exists in any language.

**Fails:** nothing. No negative first-hand report of the KW-49 exists either.

The eMAG listing has **no customer reviews** (accessed 2026-08-19). Planeo.cz states plainly:
*"Tento produkt zatím nikdo nehodnotil"* — "Nobody has rated this product yet" (accessed 2026-08-19).
Heureka.cz and Heureka.sk list it with prices but no review content was retrievable. **The review
pool for this model is empty. Every eMAG-blocked-source caveat in OPTIONS.md applies, but the
consistent nil result across five independent retail sites in four countries suggests the product is
simply too new, not that the reports are hidden.**

### The KW-44 question: how much does it predict?

The brief asks how much the older Canyon KW-44 "Jondy" record predicts here. From the prior sweep's
Canyon Life RO review pool:

- **2024-04-28, 1★, Romania:** *"Am cumpărat un smartwatch pentru copii Canyon kw 44, nu arată deloc
  bine locația, arată că ar fi la peste 50 de km. Nu se pot efectua apeluri de pe smartwatch decât
  dacă tastezi numărul, direct din agenda nu merge. Notificările vin cu întârziere… Cred că returnez
  ceasul."*
  **EN:** "I bought a Canyon KW-44 kids' smartwatch, it doesn't show the location at all well, it
  shows it as being over 50 km away. You can't make calls from the smartwatch unless you type the
  number, straight from the contacts it doesn't work. Notifications arrive late… I think I'll return
  the watch."
- **2024-09-22, 1★, Romania:** *"Fetița 8 ani foarte dezamăgită! A mers 2 săptămâni și gata nu mai
  este conectat doar apeluri. Gps blocat la domiciliu!"*
  **EN:** "8-year-old girl very disappointed! It worked 2 weeks and that's it, it's no longer
  connected, only calls. GPS stuck at the home address!"
- **2024-12-25, 1★, Romania:** GPS off by 400–500 m.
- **2025-05-12, 1★, Romania:** *"nu e deloc precis. are eroare de vreo 100 metri… nu cumpărați
  ceasurile de…"* — **EN:** "it's not accurate at all. it has an error of about 100 metres… don't buy
  the watches from…"
- **2024-05-02, 1★, English, Romania-pool:** *"I am trying to add a kids smartwatch but each time…
  it pops up that the device is not allowed. Also I've inserted a sim card in the watch but phone
  calls do not work."*

**My assessment of transfer, split by layer:**

- **Cloud / account / app layer — transfers strongly.** The KW-49 uses the *same* Canyon Life app,
  the *same* ASBIS backend and the *same* account flow. The **"device is not allowed"** pairing
  failure and the delayed-notification complaints are backend behaviours, and there is no reason to
  think a new SKU fixes them. Weight this heavily.
- **"GPS stuck at the home address" and the 50 km error — transfers moderately.** A position frozen
  at the last known point, or thrown tens of kilometres, is the classic signature of a device that
  has silently fallen back to LBS/Wi-Fi and of a backend that reports stale fixes as current. That is
  as much a cloud behaviour as a hardware one, and the KW-49's positioning stack is *also*
  GPS+Wi-Fi+LBS with no extra constellations to arbitrate against. This should not be discounted.
- **100–500 m errors and 2-week hardware death — transfers weakly.** Different generation, different
  radio, different SoC, probably a different ODM build. Not predictive on its own.

Net: the KW-44 record is **not** a clean read-across, but it is not noise either. The parts that
carry are precisely the parts Canyon cannot fix with a new bill of materials. Note also the KW-44 is
the model Orange Romania bundled in Aug–Sep 2024 at ~380 lei with an 18 lei/month plan (SNPPC and
AMFB member-benefit PDFs) — so Romanian carrier interest in Canyon is real, but it attached to the
model with the bad reports, and to a **nano-SIM** device, not this one.

## Sources

All accessed **2026-08-19** unless stated.

**Primary — manufacturer**
- https://canyon.eu/product/cne-kw49pb/ — the decisive source. `SIM Card Type: eSIM`; "No need to
  insert a physical SIM card"; full band list (FDD B1/2/3/5/7/8/20/28A, TDD B38–41, GSM quad,
  WCDMA quad); 4G VoLTE; 900 mAh; the verbatim 71 h battery test profile; "stealth calls" and remote
  photos; lockable games/gallery/audio player; 1.44" 240×240 IPS; IP67; 54 g; 43×56×16.5 mm;
  0.3 MP camera; 30-language firmware list including Romanian.
- https://canyon.eu/product/cne-kw48bl/ — **the control**: same spec field reads `Nano-SIM` for the
  KW-48. Also the "fully encrypted data and EU-based servers" marketing sentence.
- https://czech.canyon.eu/product/cne-kw49bl/ — Czech-language eSIM copy, quoted above; Unisoc
  UMS9117-L; BT 5.1; 24-month warranty.
- https://canyon.africa/product/cne-kw49bl/ — regional page; identical eSIM copy, names no operator
  or country; repeats "EU-based servers".
- https://canyon.eu/blog/why-do-you-need-a-kids-smartwatch-with-esim-and-what-is-it/ — "The carrier
  provides a QR code or activation details through their app." Establishes bring-your-own-operator.
  Undated (footer "© 2014-2023").
- https://canyon.eu/product-category/wearables/for-kids/ — eight kids models; KW-49 the only E-SIM one.
- https://canyon.eu/mobile-app-privacy-policy/ — **updated 2024-03-15**. Controller ASBISC
  Enterprises PLC, Cyprus HE 75069. "We may transfer and maintain some of your personal information
  on our servers or databases outside the European Union." Google Analytics named.
- https://canyon.eu/watch-terms/ — Cypriot governing law; ASBISK Enterprises PLC, Limassol; no
  country availability list; undated.
- https://canyon.eu/watch/ — Canyon Life app page. Says only "The application provides stable work
  and perfect data security"; no server-location statement.
- https://www.youtube.com/watch?v=OChpljasOT4 — "How to activate an E-SIM in Canyon Zefir KW-49 Kids
  Watch", CANYON ACC, **published 2026-01-05**. Metadata only; **video contents unverified**.

**Distributor / retail**
- https://eshop.asbis.cz/canyon-kids-watch-zefir-kw-49-e-sim-4g-pink_d220759.html — ASBIS's own shop;
  P/N `CNE-KW49PB`, "E-SIM 4G", 24-month warranty, no SIM slot mentioned.
- https://www.emag.ro/smartwatch-pentru-copii-canyon-zefir-kw49-4g-gps-roz-900mah-cne-kw49pb/pd/DMH1SM2BM/
  — **650.53 RON** (from 797.22), **seller "OVOLT România" — marketplace, not eMAG 1P**, 14-day
  return, in stock, **zero reviews**. Spec table gives "1.3 inch" (wrong) and "72 h".
- https://www.axdata.sk/canyon-kw-49-...-cne-kw49pb-150718.html — **€68.50 incl. VAT**, in stock (SK).
- https://inteligentne-hodinky.heureka.sk/canyon-kw49/ — from **€67.30** (SK).
- https://www.planeo.cz/canyon-zefir-kw-49-kids-watch-e-sim-4g-blue — 2,899 Kč; "Activation occurs
  online within minutes through your mobile operator"; **"nobody has rated this product yet"**.
- https://chytre-hodinky.heureka.cz/canyon-kw-49/ — from 1,913 Kč (403 on direct fetch).
- https://catalog.asbis.com/product/cne-kw49bl — `SIM Card Type: eSIM`, Unisoc UMS9117-L, 0.3 MP
  (403 on direct fetch; content via search index).
- https://www.asbis.com/romania — ASBIS Romania SRL, Splaiul Independenței 319, Sector 6, Bucharest.

**Romanian operators — eSIM feasibility**
- https://www.orange.ro/servicii/number-share/ — Number Share, 2.03 €/month per secondary device;
  compatible list is Apple / Samsung / Huawei watches only; no kids watch; shares the parent's number.
- https://www.digi.ro/prepaid-esim — prepaid eSIM with its own number, QR by e-mail after online form
  + ID upload; "only on eSIM-compatible devices" with **no device list**; DIGI eSIM 2 option
  restricted to ages 14–25.
- https://www.vodafone.ro/esim — **could not be retrieved. Unchecked.**

**App**
- https://apps.apple.com/us/app/canyon-life/id1439310012 — publisher **Perenio IoT spol s r.o.**,
  v0.37.2, **last updated 2024-08-04**, iOS 13+, 4.7 from 35 ratings; App Privacy: Contact Info
  *used to track you*; precise Location, Contacts, User Content linked to identity.
- https://apkcombo.com/canyon-life/com.canyon.fit/ — Android v0.37.2, min Android 8.0, 500,000+
  installs, **last updated 2026-08-05**, 4.0 from 8,167 reviews. (Conflicts with the prior sweep's
  4.84 RO-storefront reading of 2026-08-18; unresolved.)
- https://play.google.com/store/apps/details?id=com.canyon.fit — could not be parsed directly.

**Platform security**
- https://www.kaspersky.com/about/press-releases/kaspersky-identified-security-flaws-in-unisoc-system-on-chip-enabling-remote-hijacking
  — CVE-2024-39431 / CVE-2024-39432, Unisoc SoC modem→AP remote code execution.
  **Applicability to UMS9117-L unverified.**

**Not found despite targeted search (recorded as gaps)**
- CE/RED Declaration of Conformity for `CNE-KW49PB` or `CNE-KW49BL`. ASBIS hosts DoCs at
  `prod-cdn.prod.asbis.io/s3/cms/document/<hash>/…` with unguessable paths; no index found.
- User manual or quick-start guide PDF for the KW-49. Canyon's "Downloads" section is empty.
- Any statement from Canyon naming an operator, country or tariff for the KW-49 eSIM.
- Any first-hand user report of the KW-49, in any language.
- Any vulnerability research naming Canyon Life, ASBIS or Perenio.
- The WebSearch budget (200 calls) was exhausted during this pass; the Vodafone RO eSIM page and a
  Canyon-Life-specific vulnerability sweep were the two casualties.
