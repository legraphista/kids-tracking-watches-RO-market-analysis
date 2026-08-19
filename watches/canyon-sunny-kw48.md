---
model: Canyon Sunny KW-48 (CNE-KW48BL blue / CNE-KW48VL lilac / CNE-KW48YG green)
brand: Canyon (ASBISc Enterprises PLC, Cyprus)
release_year: 2024            # first EU Declaration of Conformity signed 26.09.2024; retail presence 2025-2026
still_sold: yes               # in stock on eMAG.ro and osiriss.lv, checked 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status: likely
ro_evidence_tier: 2           # Tier 2 solid (Canyon Life live+updated in RO Play & RO App Store).
                              # Tier 4 solid for the BRAND (eMAG stock; Orange RO retailed the sibling
                              #   KW-44 with an Orange nano-SIM through at least Sep 2025).
                              # Tier 5 solid and now PROVEN from the manual (B20 present).
                              # Tier 1 arguable only: the manual prints a country block including RO,
                              #   but canyon.ro (Canyon's own Romanian storefront) 404s on this SKU.
                              # Tier 3 = ZERO. No Romanian user of a KW-48 has been found anywhere.
ro_killer: n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands: [B1, B2, B3, B5, B7, B8, B20]   # manual prints "4G/LTE: B 1/2/3/5/5/7/8/20" -- the repeated
                                           # "5" is a typo in ASBIS's own document. See Network & bands.
band_b20: true                # PRIMARY SOURCE: CNE-KW48 user manual v1.0.1, Table 2, p.19
band_b28: false               # not listed; do not expect 700 MHz
volte: true                   # vendor-stated, and there is a user-facing VoLTE on/off toggle on the watch
voice_fallback: volte         # 2g-csfb available as backstop: GSM 850/900/1800/1900 present in the same table
modem_chipset: UNKNOWN        # manual names only "ARM Cortex-R5, single-core" (AP) and "TD1050" (GNSS)

# --- Positioning (the #1 criterion) ---
positioning: [GPS, GLONASS, AGPS, LBS]     # manual: "TD1050 (GPS, LBS, A-GPS, GLONASS)". No Galileo. No BeiDou.
wifi_positioning: UNKNOWN     # DISPUTED. Marketing claims Wi-Fi AP scanning ("Safetrack AI"); the manual's
                              # spec table has no Wi-Fi row and no Wi-Fi/Bluetooth mention anywhere in 98 pages.
update_interval_min: 1        # "Precise mode - coordinates will be transmitted every minute"; plus a
                              # "Forced positioning" burst of every 15 s for 3 min

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah: 750              # manual Table 2: Li-Po, 750 mAh, 3.8 V, full charge <=2.5 h, <=300 cycles
battery_claimed_h: 48         # "Up to 2 days" active; standby 120 h with SIM / 168 h without; call 3 h;
                              # game 7 h; audio 9 h. Active figure is conditioned on 10-min GPS interval.
battery_observed_h: UNKNOWN   # no numeric figure exists. One SE test says "almost two days" (no interval);
                              # SK owner (unverified): "lasts the whole school day"; BG owner (2★): Precise
                              # mode "drains the battery rapidly". See CEE evidence sweep (2026-08-19).

# --- App & service ---
app_name: Canyon Life (com.canyon.fit)
app_android_min: "8.0"
app_ro_playstore: true
app_last_update: 2026-08      # "18 aug. 2026" on the RO Play listing, read 2026-08-19
data_region: UNKNOWN          # marketing says "EU-based servers"; the app's own privacy policy S9.1 says
                              # data may be held outside the EU. See Security & privacy.

# --- Practical ---
sim: nanoSIM                  # confirmed: manual s2.2 + physical tray + tool in box; app asks you to
                              # "select the SIM card type - physical SIM card"
water_rating: IP67
weight_g: 56                  # with strap; case 55.5 x 43 x 16.5 mm
camera: true                  # 0.3 MP
games: true                   # 7 preinstalled, no more installable
extras_disableable: partial   # no per-app off switch for camera/games; only a scheduled "Do not disturb"
                              # that locks the whole menu
price_eur: 88.27              # osiriss.lv (Latvia), 2026-08-19
buy_from: eMAG.ro (marketplace seller "Prestigio Plaza"), Romania; also osiriss.lv (LV), dateks.lv (LV), digitec.ch (CH)
price_ro_eur: 529.99 RON      # eMAG.ro, both BL and VL listings, 2026-08-19
---

## Verdict

Suits a parent who wants a self-supplied Romanian SIM and no vendor connectivity layer that can be
switched off: it takes an ordinary nano-SIM, and the manual — not the marketing — proves **B20 plus
B3 plus B7**, which is a correct Romanian band set. The risk is not the radio, it is the platform:
750 mAh is small, the manual's own positioning stack is GPS + cell-tower LBS at "100 m or more"
indoors, and the sibling KW-44 has a five-year trail of dated Romanian complaints about exactly that.
It clears the signal floor and (just) the one-day floor; it does **not** yet clear the "reliable
position indoors at school" floor. No Romanian has ever reviewed this model — but a small CEE owner
pool now exists (BG/SK/KZ/HU, see *CEE evidence sweep*), and its negative reports are precisely
about frozen pins and Precise-mode battery drain.

## Does it work in Romania?

**What is proven.**

- **The bands fit Romania, and this is now a fact rather than an inference.** The official ASBIS
  user manual (Installation and Operation User Manual, CNE-KW48 Smart Watch, document version 1.0.1),
  Table 2 "Main technical specifications", p.19, prints under *Frequency ranges*:
  `2G: B 2/3/5/8` / `3G: B 2/5/8/20` / `4G/LTE: B 1/2/3/5/5/7/8/20`, and under *Radio emission power*
  `GSM 850/900/1,800/1,900 MHz`. B20 (800 MHz, Orange's only sub-1 GHz LTE band) and B3 (1800, the
  national workhorse) and B7 (2600) are all present.
  [PDF, hosted by tehnoteka.rs, 2025-11](https://api.tehnoteka.rs/uploads/2025/11/uputstvo-za-upotrebu-en-canyon-sunny-kw-48-cne-kw48vl-ljubicasti-pametni-sat-za-decu-692c481378fc6.pdf)
  Accessed 2026-08-19.
- **Nano-SIM, confirmed from primary sources, twice.** Canyon's own product page lists `Nano SIM`
  ([canyon.eu/product/cne-kw48bl](https://canyon.eu/product/cne-kw48bl/), accessed 2026-08-19), and
  the manual has a whole section (2.2 "SIM Card Installation"), a SIM-tray removal tool in the box,
  and an app registration step that reads *"select the SIM card type — physical SIM card"*. There is
  **no eSIM on this model**. Whatever is true of the KW-49 does not apply here.
- **The app is live and maintained in the Romanian storefront.** Canyon Life (`com.canyon.fit`),
  500 K+ downloads, rating 4.84, Android 8.0+, **last updated 18 August 2026** (i.e. the day before
  this was written), published in the RO Play storefront and the RO App Store.
  [Play RO](https://play.google.com/store/apps/details?id=com.canyon.fit&hl=ro&gl=RO) ·
  [App Store](https://apps.apple.com/ro/app/canyon-life/id1439310012), both accessed 2026-08-19.
- **Registration has no visible country gate.** The manual's account-creation step asks for email,
  password and a phone number *"in the following format: + [country code] [mobile network operator
  code] [phone number]"* — a free-text international field, not a country picker. That is
  structurally permissive of +40, but it is **unverified** until someone actually registers.
- **Romanian is a shipped firmware language**, listed on both the Canyon product page and manual
  Table 2 (23 languages, Romanian among them).
- **The manual prints a country-code block directly under the Simplified Declaration of Conformity**
  (p.6): AE AL AZ BA BG CZ CY DK EE GB GE GR HR HU KZ LT LV MK **PL RO** RS SK SI UA UZ ZA. Romania
  is in it. The block is unlabelled, so its exact legal meaning is **unverified**, but the set is
  clearly a CEE-plus distribution list and Romania is inside it.
- **A Romanian retail channel exists**: 529.99 RON on eMAG.ro for both the blue (D861M13BM) and
  lilac (D6HVT83BM) SKUs, in stock, 24-month warranty, 30-day return.
- **Canyon runs a Romanian country site**, canyon.ro, linked from canyon.eu's own country switcher.

**What is not proven, and must be said plainly.**

- **eMAG 1P is wrong.** OPTIONS.md and the brief record the KW-48 as "sold and shipped by eMAG".
  It is not. Both listings show **`Prestigio Plaza`** as the seller, i.e. a marketplace vendor, not
  eMAG first-party. Checked directly against both product pages on 2026-08-19. Prestigio *is* an
  ASBIS group brand (Canyon's own app privacy policy names "AENO, Canyon, Prestigio, Perenio,
  Lorgar and Prestigio Solutions" as related brands), so this is plausibly ASBIS's own eMAG account
  — but that identification is **unverified**. Practically: you still get eMAG's 30-day return
  window on a marketplace order, but you do not get eMAG's own import/warranty arrangement.
- **canyon.ro does not carry this model.** `https://canyon.ro/product/cne-kw48bl/` returns
  **HTTP 404**, and the Romanian kids-watch category page lists only the older Jondy KW-44,
  Cindy KW-41, Tony KW-31 and Sandy KW-34. Canyon's Romanian storefront is a generation behind.
  Checked 2026-08-19.
- **No EU importer is named.** Manual §9 lists importer/distributor entities for the **United
  Kingdom** and **South Africa** only. No EU importer, no Romanian entity. Warranty service is
  deferred to a list at canyon.eu/user-help-desk which could not be rendered.
- **Zero Tier-3 evidence.** No Romanian owner of a KW-48 has been found: eMAG shows *"Fii primul
  care scrie un review"* on both listings, and no KW-48 appears anywhere in the 149 Canyon Life
  Play reviews retrieved or the 14 Romanian App Store reviews retrieved.
- **VoLTE on a Romanian SIM is unproven.** The watch advertises VoLTE and exposes an on/off toggle;
  no Romanian operator publishes a device whitelist. Treat "the watch supports VoLTE" and "VoLTE
  works on a Digi/Orange SIM in this IMEI range" as different claims. The mitigation is that unlike
  a VoLTE-only device, this one keeps GSM 900/1800, so a provisioning failure degrades to 2G voice
  on Orange or Digi rather than to silence.

## Pre-purchase test

1. Install **Canyon Life** from the Romanian Play storefront and register **before ordering**:
   email + password + a **+40** number in `+40 7xx xxx xxx` form. If registration is refused, stop.
2. Buy from the eMAG listing (marketplace, but eMAG's 30-day return still applies) rather than a
   foreign shop, so an `unknown` stays recoverable. osiriss.lv is €88.27 vs 529.99 RON, but a
   Latvian return is a worse position to be in.
3. In week one, in this order: (a) place an **outgoing and an incoming voice call while the watch is
   on LTE** — check whether the watch shows "VoLTE" top-right, which the manual says appears when
   the setting is active; (b) set **Precise mode** and walk the child into the school building,
   then compare the app's pin to reality. If the pin parks itself and stops moving, you are on LBS
   and the answer is 100 m or worse.
4. Test the **SOS chain deliberately**: Canyon documents that any answering-machine pickup on SOS
   number 1 counts as an answered call and stops the watch dialling numbers 2 and 3 (see Features).
   Make sure SOS 1 is a number that never diverts to voicemail.

## Positioning quality in real use

Canyon's marketing and Canyon's manual do not agree, and the disagreement is exactly on the
criterion that matters most here.

**Marketing (canyon.eu product page, accessed 2026-08-19), attributed, not restated as fact:**
> "Safetrack AI is our enhanced indoor positioning system for kids smartwatches. It uses Wi-Fi
> access point scanning to determine location even when GPS is unavailable. AI-driven analytics
> filter out inaccurate signals and highlight only reliable location data. As a result, you can get
> more precise and stable positioning in malls, schools, and other indoor environments."

**Manual (CNE-KW48 v1.0.1), §5.1 "Tracking" Tab:**
> "Depending on the location, the watch sends GPS or LBS coordinates. In the open area with the
> direct 'GPS-satellite — watch' contact, the location is established with greater accuracy.
> **Inside buildings, data transmission will automatically switch to LBS mode. In this mode, GSM
> tower coordinates are used**, so the location accuracy depends on the number of GSM towers placed
> in the area."

And Table 2 quantifies it: **"GPS accuracy: 1–30 m; LBS accuracy: 100 m or more"**, positioning
hardware **"TD1050 (GPS, LBS, A-GPS, GLONASS)"**, cold-fix **"location time 26 s"**, sensitivity
"Trace −165 dBm, capture −148 dBm".

The manual's specification table has **no Wi-Fi row**, and across 98 pages the words "Wi-Fi",
"WiFi", "WLAN" and "Bluetooth" appear **zero times**. The only weak counter-evidence is that the
EU Declaration of Conformity cites **EN 300 328 V2.2.2** (2.4 GHz wideband transmitters) alongside
the GSM/UMTS/LTE and GNSS standards — which implies *some* 2.4 GHz radio exists in the certified
build. So one of these is true and I cannot tell which:

- Safetrack AI is a newer app/firmware feature that post-dates manual v1.0.1 and does use a 2.4 GHz
  radio the manual failed to document; or
- Safetrack AI is a platform-level claim that does not apply to this SKU, and indoors the KW-48
  falls back to GSM-tower LBS at 100 m or worse.

**Treat `wifi_positioning` as UNKNOWN and assume the pessimistic case when deciding.** The single
most valuable ten minutes of testing on this watch is walking into the school and reading the pin.

For what it is worth, the app's behaviour when it falls back is *silent* — the manual says the map
"displays the last registered location" and you must tap the marker to see "signal type". That is
the classic failure mode this project is trying to avoid: the parent sees a pin, not an error.

Tracking cadence is genuinely good on paper: Off / Energy save (60 min) / Normal (10 min) /
**Precise (1 min)**, plus a "Forced positioning" command that pushes a fix every 15 s for 3 minutes.
Movement history is capped at **7 days**. Geofence radius is adjustable **200–2,000 m**.

## Battery in real use

**Claimed** (manual Table 2, verbatim conditions): "Up to 2 days (under the following conditions:
screen brightness is above average, 4G signal is stable, **GPS coordinates are transmitted every
10 min**; excluding games and audio playback)". Standby "up to 5 days with the SIM card installed;
up to 7 days without". Single-load figures: phone call up to 3 h, a game up to 7 h, audio playback
up to 9 h. Capacity **750 mAh**, 3.8 V, non-removable Li-Po, full charge ≤2.5 h, ≤300 cycles.

**Observed: UNKNOWN as a number — but no longer a total blank.** Nobody has published hours or
percentages. What exists (see *CEE evidence sweep* below for full quotes): PC-Tidningen (SE,
2025-07-15) says "almost two days" with no interval stated; a Slovak Heureka owner (unverified
purchase, 2026-07-14) says the battery "vydrží celý školský deň" (lasts the whole school day);
a second Slovak owner (unverified, 2026-06-12) says it initially "vydržali pár dní" (lasted a
couple of days) and lasted longer after disabling settings and lowering brightness; and a
Bulgarian owner (2★ Play review, 2026-06-05) reports that **"When enabled for precise positioning,
the battery drains rapidly"** — the only datapoint that touches the 1-minute mode, and it is
negative.

What can be said without guessing: the "2 days" figure is explicitly a **10-minute** interval
figure, and the app's Precise mode is **1 minute**. The manual itself warns "The more often the
watch locates, the faster its battery runs out of power." A 750 mAh cell is at the low end of this
field (Canyon's own KW-49 is 900 mAh; Carneo's ULTRA is 1000 mAh). A school day on Precise mode
plus a few calls is **not** covered by any published figure, and there is no observed datapoint to
substitute. Plan on charging nightly and treat Precise mode as a burst tool, not a default.

## Network & bands

| Band | In KW-48? | Romanian relevance |
|---|---|---|
| B20 (800) | **yes** | Orange's only sub-1 GHz LTE. Decisive for concrete buildings and cell edge. |
| B3 (1800) | **yes** | National LTE workhorse on all operators. |
| B7 (2600) | **yes** | Urban capacity. |
| B1 (2100) | yes | Present on RO networks. |
| B8 (900) | yes | Low band, used by Vodafone/Digi. |
| B5, B2 | yes | Not RO-relevant. |
| **B28 (700)** | **no** | Costs nothing here — in Romania 700 MHz is 5G NR n28, not LTE. |
| GSM 900/1800 | yes | 2G backstop; survives on Orange and Digi with no announced end date. |
| 3G B2/5/8/20 | yes | **Dead weight in Romania.** All RO operators have shut 3G. |

This is a correct Romanian band set. It is materially better than the Wonlex/KT-class OEM list
(B1/3/5/8, no B20) and equal to the KW-49 on everything that matters here except B28, which is
irrelevant. **Do not generalise this to other Canyon SKUs** — this list came out of the KW-48's own
manual, not from a family datasheet.

Voice: VoLTE is claimed by the vendor and there is a user-facing VoLTE toggle in the watch's own
settings menu, with a warning that turning it off "may have a negative impact on the quality of
mobile communication". The DoC's radio standards (EN 301 511 for GSM, EN 301 908-2 for UTRA FDD,
EN 301 908-13 for E-UTRA) confirm a 2G+3G+4G modem, so if VoLTE is not provisioned for this
IMEI/TAC on a Romanian network, voice should CSFB to 2G on Orange or Digi rather than fail. That
chain is **unverified** end to end.

The EU DoC itself (`cne_kw48_ce_rohs_declar_signed.pdf`, signed by Andrii Derevianko, CQO ASBIS
brands, **26 September 2024**, ASBISc Enterprises PLC, Limassol) cites RED 2014/53/EU, RoHS and
Battery Regulation (EU) 2023/1542 — but **publishes no frequency table and no radio power table**.
The bands are only in the manual.

## Features & what can be disabled

| Feature | Present | Can the parent switch it off? |
|---|---|---|
| Voice calls | yes, from the app-managed phone book (up to **10** numbers) | Incoming can be restricted: *"Enable the function 'Only Phone Book contacts' to limit incoming calls to your watch to only the phone book contact list. Incoming calls from third-party numbers will be rejected automatically."* |
| SOS | 3 numbers, long-press button 1 for 3–5 s | Numbers configurable; the feature itself is not removable |
| Video call | yes, app→watch | no dedicated off switch documented |
| Chat (text + voice messages) | yes | no dedicated off switch documented |
| Camera | 0.3 MP | **no.** Runs without any app connection |
| Games | 7 preinstalled ("Brave Monkey", "Plane", "Math Game", "God of Wealth", "Car", …); *"Installation of the additional games is not provided"* | **no** |
| Music player | mp3 from 512 MB built-in TF | **no** |
| Pedometer | yes | yes, toggle in app |
| "Do not disturb" (= class mode) | yes, scheduled by day-of-week and time | This is the only real lockdown: *"The sound and other watch functions will be disabled, including access to the watch menu."* |
| Alarms | up to 3 | app-only; the watch shows "Enable in app" |
| Remote power off / reboot | yes | — |
| Account sharing | primary + secondary accounts, unlimited watches per account | — |

The important asymmetry: **the entertainment features cannot be individually disabled**, only
blanket-suppressed on a schedule via Do not disturb. `extras_disableable: partial`.

One vendor-admitted defect worth planning around, quoted verbatim from the manual's troubleshooting
table (p.91):

> "Any answering machine message (wrong number dialed, caller is out of range, etc.) considered an
> established connection and stops dialing to other SOS numbers. **For technical reasons, it is not
> possible to eliminate this defect.**"

So if SOS number 1 diverts to voicemail, numbers 2 and 3 are never tried. Set SOS 1 to a phone that
does not have voicemail enabled.

## Security & privacy

**Who actually operates the service.** The Play Store developer of Canyon Life is **Perenio IoT
spol. s r.o.** — a Czech-registered entity, not Canyon — and all developer replies to reviews are
signed by it. The published developer contact address is **`dev4perenio@gmail.com`**: a free Gmail
account listed as the contact channel for a 500 K-install application that tracks children's
locations. Canyon's app privacy policy names **ASBISC ENTERPRISES PLC** (Cyprus, company number
HE 75069, 1 Iapetou, Agios Athanasios, 4101 Limassol) "and its affiliated companies" as the **data
controllers**, and lists the related brands as "AENO, Canyon, Prestigio, **Perenio**, Lorgar and
Prestigio Solutions". So the chain is ASBIS (CY) → Perenio IoT (CZ) → your child's location history.

**Data hosting: the marketing and the contract contradict each other.**

Marketing, canyon.eu KW-48 product page, accessed 2026-08-19 — *attributed, not asserted*:
> "It combines precise location tracking, safe-zone alerts, protected video communication and
> strict contact control with **fully encrypted data and EU-based servers**."

Canyon Life mobile-app privacy policy, §9, accessed 2026-08-19
([canyon.eu/mobile-app-privacy-policy](https://canyon.eu/mobile-app-privacy-policy/)):
> "9.1. **We may transfer and maintain some of your personal information on our servers or databases
> outside the European Union.**
> 9.2. Countries to which we transfer your data may not have the same data protection laws as your
> jurisdiction. We take reasonable cyber security measures and/or apply standard contractual clauses
> (e.g., Standard Clauses, Data Processing Agreement/Addendum) to ensure that your data is
> adequately protected."

(The separate *corporate* policy at canyon.eu/privacy-policy says the opposite — "Canyon will
refrain from undertaking any Data Transfer outside of the European Union" — but that policy governs
the website, and the app has its own.) **The "EU-based servers" claim is therefore marketing copy
that the binding app policy explicitly reserves the right to break.** `data_region: UNKNOWN`.
No hosting provider, region or sub-processor is named anywhere.

**What is collected.** The app policy's own list includes *"Location Data — exact location
information, location information history, safety zone location"*, contact data including *"phone's
contact information, emergency numbers"*, and special-category health data. The Play data-safety
panel states data is **"Datele sunt criptate în timpul transmiterii"** ("Data is encrypted in
transit") and that the app may collect personal info, health and fitness, and four further
categories. Deletion is available in-app (Setup → General → Account) or at
canyon.eu/account-removal-request, with a **90-day** restore window — i.e. deleted data is retained
for 90 days.

**Covert remote-listen: yes, it exists, and it cannot be locked out.** From the manual, §5.2.2:

> "**Silent callback.** This function allows you to send a command to the watch to make a silent
> outgoing call to the main phone number (account number) **for the purpose of audio monitoring of
> the environment around the watch**. When a command is received, the watch's screen turns off (if
> it was on) and blocks. The blocking is disabled when the call ends."

And a matching covert camera function:

> "**Remote camera control.** The function is used to **covertly take photos** using the watch's
> camera. … The watch is blocked and nothing is displayed on the screen."

Both remain available **even in "Do not disturb" mode** — the manual lists "silent callback from the
Canyon Life app" and "remote camera control" among the four functions that survive DND. There is no
documented setting to disable either. Access is bound to the primary account and to SOS number 1
("SOS number 1 (voice monitoring and SMS notifications) is the main number"), so the exposure is
whoever controls that account and that phone number. Note the watch also has an **SMS-command
channel** with an SMS password displayed on-screen, which the manual says is "recommended only for
specialists and only in emergency cases" — a second control path that does not go through the app.

**Vulnerability research: none found.** NVD keyword queries for `perenio` and `canyon watch`
returned **0 results** (queried 2026-08-19). No CVE, no published teardown, no disclosure affecting
Canyon Life or the KW-48 was located. That is an absence of evidence, not evidence of security — no
independent party appears to have looked at this platform at all.

One user allegation, recorded because it exists but explicitly **not credited**: a Romanian Play
reviewer on **2024-12-15 (1★)** wrote *"Am folosit o aplicație de curățat telefonul și mi a spus că
Canyon Life are virus (Trojan.spy ceva de genul)"* ("I used a phone-cleaner app and it told me
Canyon Life has a virus (Trojan.spy or something)"). A consumer cleaner-app heuristic flagging a
location-tracking app is close to meaningless; there is no corroboration and this should not be
treated as a finding.

## Reality check

- **"4G VoLTE"** means the modem supports VoLTE and there is a toggle. It does *not* mean a Romanian
  operator has whitelisted this device's IMEI range. It is still the right choice because the same
  modem keeps GSM 900/1800, so failure degrades to 2G voice rather than silence.
- **"Accurate GPS Positioning"** means 1–30 m outdoors with a 26-second cold fix. Indoors, by the
  manufacturer's own manual, it switches to GSM-tower LBS at **"100 m or more"** — which is the
  same error size Romanian users of the sibling KW-44 have been complaining about since 2024.
- **"Safetrack AI … Wi-Fi access point scanning"** appears on the sales page and appears nowhere in
  the 98-page manual for this device, whose spec table lists no Wi-Fi. Unresolved.
- **"Up to 2 days"** means 2 days at a **10-minute** location interval with games and music
  excluded. Set the app to Precise (1-minute) tracking, which is what you actually want for a
  7-year-old, and no published figure covers you — and the one owner who used Precise mode (BG,
  2★, 2026-06-05) reports it "drains the battery rapidly".
- **"EU-based servers"** is marketing copy from a company whose binding app privacy policy reserves
  the right to hold your child's location history outside the EU.
- **"eMAG"** — it is on eMAG, but sold by a marketplace vendor, not by eMAG itself.

## What users say

**Correction (2026-08-19): the previous claim that no user reports exist "in any language or
country" was false.** A dedicated CEE sweep found **8 substantive KW-48 owner texts (11 owner
ratings counting text-less ones) across Bulgaria, Slovakia, Kazakhstan and Hungary**, plus a
second independent hands-on review (Latvian, video). See *CEE evidence sweep (2026-08-19)* below
for all of them. What remains true: **zero Romanian owner reports** — both eMAG.ro listings still
show *"Fii primul care scrie un review"*, and no KW-48 mention exists in the 149 Romanian Play
reviews or 14 Romanian App Store reviews retrieved. Everything below in this section is about
**the shared Canyon Life platform** and about the **older Canyon KW-44 "Jondy"**, and is included
only because the KW-48 runs the same app, the same account system and the same cloud.

**How much does the KW-44 record predict about the KW-48?** Split it:

*Carries over (same app, same backend, same account flow):* account registration and device-pairing
failures, "device is not allowed", delayed notifications, map/UI complaints, and the app's silent
LBS fallback behaviour. These are platform properties, and the platform is identical.

*Does not necessarily carry over (different hardware generation):* absolute GPS accuracy, the
"stopped working after 2 weeks" mortality report, and — importantly — the **"calls can only be
dialled by typing the number, not from the contact list"** complaint. The KW-48's manual documents a
proper app-synced phone book of up to 10 contacts with a Contacts app on the watch, so that specific
defect appears to have been designed out. **Unverified** on real hardware.

*Genuinely unresolved:* the 50 km / 400–500 m / 100 m position errors. If those were caused by the
app silently reporting cell-tower LBS as a location, the KW-48 inherits the cause. If they were
caused by the KW-44's GNSS receiver, it may not. Nothing found distinguishes the two.

### Fails

All quotes below are Romanian Play Store reviews of Canyon Life (`com.canyon.fit`), retrieved
2026-08-19, dates and star ratings from the store's own records.

- **2024-04-28, 1★, Romania (ANCA HAIDU)** — the single most on-point report in the corpus:
  > "Foarte slabă aplicație. Am cumpărat un smartwatch pentru copii Canyon kw 44, nu arată deloc
  > bine locația, arată că ar fi la peste 50 de km. Nu se pot efectua apeluri de pe smartwatch decât
  > dacă tastezi numărul, direct din agenda nu merge. Notificările vin cu întârziere, etc. Cred că
  > returnez ceasul."

  *"Very poor app. I bought a Canyon kw 44 kids' smartwatch, it doesn't show the location at all
  well, it shows it as being over 50 km away. You can't make calls from the smartwatch unless you
  type the number, directly from the contact list it doesn't work. Notifications arrive late, etc.
  I think I'll return the watch."*

- **2024-05-02, 1★, Romanian storefront, written in English (Andreea Micu)** — the "device is not
  allowed" report:
  > "I am trying to add a kids smartwatch but each time I m trying to add the [device] number it
  > pops up that the device Is not allowed. Also I Ve inserted a sim card in the Watch but phone
  > calls do not work. Pls support"

- **2024-09-22, 1★, Romania (Loredana Hreniuc)** — died after two weeks:
  > "Fetița 8 ani foarte dezamăgită! A mers 2 săptămâni și gata nu mai este conectat doar apeluri.
  > Gps blocat la domiciliu! Ajutor"

  *"8-year-old girl very disappointed! It worked for 2 weeks and that's it, it's no longer connected,
  only calls. GPS stuck at home! Help"* — note "GPS stuck at the home address" is exactly the
  signature of an app that keeps showing the last known fix instead of erroring.

- **2024-12-25, 1★, Romania (Catalin Prisacariu)** — 400–500 m:
  > "Localizarea prin GPS nu este acurata. Distanța dintre locul unde este ceasul și locul localizat
  > pe harta în aplicație este de vreo 400-500m."

  *"GPS location is not accurate. The distance between where the watch is and the place located on
  the map in the app is about 400-500 m."*

- **2025-05-12, 1★, Romania (valentin mitrache)** — the most recent detailed one, ~100 m:
  > "Toate aplicațiile sunt bune pina ai probleme. 1. aplicatia nu arata poziția ta versus poziția
  > copilului 2. nu arata harta de la început….abia după a 3-a încercare. 3. nu e deloc precis. are
  > eroare de vreo 100 metri. Dacă nu ai un copil care sa facă poze sa vezi unde e….nu cumpărați
  > ceasurile de la aceasta firma."

  *"All apps are good until you have problems. 1. the app doesn't show your position versus the
  child's position 2. it doesn't show the map from the start… only after the 3rd try. 3. it's not
  precise at all. it has an error of about 100 metres. Unless you have a child who takes photos so
  you can see where they are… don't buy watches from this company."*

  Canyon's public reply, same day: *"To adjust the location please use the recommendation that helps
  all our users: go outside with the watch so that the device can better 'pick up' the GPS signal.
  Wait a while and click the 'force positioning' button in the app."* — i.e. the vendor's own answer
  to an indoor-accuracy complaint is "go outside".

- **Romanian SIM-specific data failures, two independent reports:**
  - **2024-01-20, 1★ (Mihaela Tulpan)**: *"nu poate fi conectata cartela digi la telefon deși este
    abonament, are internet, nu are cod pin, dar tot nu poate fi conectata"* — *"the Digi SIM can't
    be connected even though it's a contract, it has internet, no PIN code, but it still can't be
    connected."*
  - **2024-05-09, 1★ (Alexandra Cosma)**: *"nu reușesc sa conectez problema la rețea internet cu
    cartela digi se pot efectua doar apeluri foarte dezamăgita"* — *"I can't get it connected to the
    internet network with the Digi SIM, only calls can be made, very disappointed."*

  Two separate Romanian users, four months apart, both with **Digi** SIMs, both reporting voice
  working but mobile data not. On a watch whose location reporting is entirely data-dependent, this
  is the failure that matters. It is also plausibly an **APN** problem — the KW-48 manual exposes
  manual APN entry and a "Reset APN" button, which the KW-44 generation may not have. **Unverified.**

- **Romanian App Store, kids-watch pairing failures** (older, flagged as such):
  - **2023-08-12, 1★**: *"Ceasul achiziționat nu primește notificări de pe pe telefon, codul qr nu
    poate fi introdus, eroarea afișata fiind cod incorect… Efectiv nu reușesc sa adaug dispozitivul
    Gsm in aplicație. Îl voi returna"* — *"The purchased watch doesn't receive notifications from
    the phone, the QR code can't be entered, the error shown being incorrect code… I simply can't
    add the GSM device in the app. I will return it."*
  - **2023-05-07, 2★ (RO storefront, English)**: *"Please help me connect my kid's smartwatch to the
    app. It only gives the message 'Device not found' after taking all the steps."*
  - **2024-02-24 (RO storefront, English)**: *"I need help with my kid Watch i can't setup the app
    it says to contact suport."*

  Alongside these, roughly a dozen further Romanian 1★ Play reviews from 2022–2025 report inability
  to pair a device at all ("dispozitivul nu a fost găsit"), though most of those are from **fitness
  band** owners, not kids-watch owners, so they are weaker evidence for this use case.

### Works

The positive Romanian evidence is thin and generic, and most 5★ Romanian reviews of Canyon Life are
plainly from adult fitness-band users. Filtering for kids-watch content leaves:

- **2025-11-21, 5★, Romania (gabriela iulia)**: *"recomand aplicația atât și ceasurile sunt foarte
  bune"* — *"I recommend the app and the watches are very good."*
- **2024-10-23, 5★, Romania (Andreea Pisica)**: *"Ceas pentru copii ok"* — *"Kids' watch, ok."*
- **2023-09-12, 5★, Romanian App Store (English)**: *"after I received the help from the people at
  canyon, the watch works perfectly in the application. If you send them an email, they will help
  you and solve your problem"* — i.e. support does respond, and did fix a pairing failure.

Three positives, none detailed, none naming the KW-48. That is not enough to counterweight the
failures above; it is enough to say the platform is not universally broken in Romania and that
support is responsive.

### The Romanian carrier bundle — verified, and corrected

OPTIONS.md records an Orange Romania partner bundle for the KW-44 at "roughly 380 RON with VAT,
Aug–Sep 2024". Verified and extended, from the PDFs directly:

| Source | Date | Price stated |
|---|---|---|
| [SNPPC (police union)](https://snppc.ro/uploads/blog/upload/Smartwatch-GPS-pentru-copii---oferta-Orange---SNPPC---August-2024.pdf) | August 2024, valid to 31 Aug 2024 | *"Preț Smartwatch: **83.19 EUR fara TVA, aproximativ 500\* lei cu TVA inclus**"* |
| [AMFB (Bucharest firefighters)](https://amf-b.ro/wp-content/uploads/2024/10/10.-Smartwatch-GPS-pentru-copii-oferta-Orange-AMFB-Sep-20241.pdf) | Oct 2024 header, valid to 30 Sep 2024 | same, 83.19 EUR ex-VAT ≈ 500 lei |
| [SNPPC, later edition](https://snppc.ro/uploads/diverse-adm/Orange-oferta-ceasuri-copii.pdf) | **Sep 2025** | *"Preț Smartwatch: **61.37 EUR fara TVA, aproximativ 380 lei cu TVA inclus**\* si orice abonament Orange din oferta curenta"*, recommended plan **3.15 EUR/month** |

So the 380 RON figure is real but belongs to the **September 2025** edition, not August 2024 — the
offer was **renewed and repriced downward over 13 months**, which is a stronger signal than a
one-off promo. All three PDFs state: **"Se utilizeaza o cartela nano-SIM Orange"** ("an Orange
nano-SIM card is used"), and the Sep 2025 edition pairs it with "orice abonament Orange din oferta
curenta" ("any Orange subscription from the current offer"), unlimited national minutes/SMS and
unlimited 4G/5G national data with 3.87 GB usable in EEA roaming.

**What this proves:** Orange Romania was, as recently as September 2025, retailing a **Canyon 4G
kids watch with an Orange nano-SIM** on an ordinary Orange consumer subscription. That is the only
Romanian carrier kids-watch bundle found anywhere in this research, and it is the strongest
available evidence that a Canyon kids watch registers and works on a Romanian network.

**What it does not prove:** it is the **KW-44**, not the KW-48. Product codes CND-CAN2501002 /
CND-CAN2501001. **No Orange Romania offer covering the KW-48 was found**, in the partner PDFs or
elsewhere. Orange's mainstream online shop has live product URLs for the Canyon Jondy KW-44
(`orange.ro/magazin-online/canyon-kids-smartwatch-jondy-kw-44-4g-gps-pink-pd-62712` and `…-green-pd-62688`)
but the pages are JavaScript-rendered and current stock/price could not be read — **unverified**.
Orange Moldova, separately, does list the **KW-48** in its shop
(`orange.md/ro/shop/catalog/smart-objects-/toate-smart-objects/canyon-kidswatch-sunny-kw48-music-4g.html`) —
a different country and a different Orange entity, so it carries no weight for Romania beyond
showing the SKU is in an Orange group catalogue somewhere.

## CEE evidence sweep (2026-08-19)

Canyon is ASBIS's consumer brand and ASBIS distributes into CEE/Baltics/CIS, so this pass searched
the markets no earlier pass had touched: Ukraine, the Baltics, Czechia/Slovakia, Hungary, Bulgaria,
Serbia, Kazakhstan — retail review tabs, both app stores per locale, YouTube in seven languages,
and Reddit's comment index. Headline: **the "zero reviews in any language" claim is dead.** The
KW-48 owner pool is small but real: **8 dated first-hand owner texts from 4 countries (BG, SK, KZ,
HU), 11 owner ratings counting text-less ones, plus 2 independent hands-on reviews (SE, LV).**
Romania remains at zero.

### Owner reports, 1–3★ / negative first

**Bulgaria — Canyon Life Play reviews naming the KW-48** (retrieved via Play review API, bg-BG
storefront, 2026-08-19; three distinct people):

- **2026-06-25, 2★, Динко Иванов (BG)** — the stuck-pin failure, on this exact model:
  > "Купих модела KW48 на сина си. Вчера след разходка локацията заби на едно място (на няколко
  > километра от мястото, където живеем). Рестартирах часовника няколко пъти, рестартирах и
  > телефона си, но уви, все още показва тази локация, а вече не е там, а вкъщи."

  *"I bought the KW48 model for my son. Yesterday after a walk the location froze in one place
  (several kilometres from where we live). I restarted the watch several times, restarted my phone
  too, but alas, it still shows that location, and he's not there any more, he's home."* — exactly
  the silent stale-fix signature this project flagged from the manual ("displays the last
  registered location") and from KW-44 reports.

- **2026-06-05, 2★, Miglena Yakimova (BG, wrote in English)** — the only battery datapoint that
  touches Precise mode, and a command-handling defect:
  > "kids kw-48 - When enabled for precise positioning, the battery drains rapidly. Additionally,
  > the accuracy could be improved, as it frequently shows location deviations. Furthermore, the
  > app seems to stop accepting changes after the first command. It will acknowledge subsequent
  > updates with a 'command successful' message, but it completely disregards them. I have tried
  > turning off the battery-saving mode after enabling it, without success so far."

- **2025-08-11, 4★, Ivan Mitev (BG, wrote in English)** — map quality, not GPS:
  > "Main functionality with calls and notifications is not bad (for kw48 device). However a major
  > flaw is the display on the map, as there are not enough details (at least in Bulgaria) to
  > understand the surroundings - only boulevards. Nothing like Google maps. Location can't be
  > copied or opened in Google Maps. My location is also not displayed."

**Slovakia — Heureka.sk aggregated product "Canyon KW-48", 87 %, 3 reviews**
([inteligentne-hodinky.heureka.sk/canyon-kw-48/](https://inteligentne-hodinky.heureka.sk/canyon-kw-48/)):

- **2026-07-02, 80 %, VERIFIED purchase (Datacomp.sk), recommends** — pro: *"Jednoduché
  ovládanie"* (simple controls); con: **"Každé ráno sa odpoja od mobilnej siete"** — *"every
  morning they disconnect from the mobile network."* A daily network-registration drop on the only
  verified Slovak owner is a serious radio/firmware signal, unreplicated elsewhere so far.
- **2026-07-14, 90 %, UNVERIFIED purchase, recommends** — pros: localisation and video calls,
  water resistance, *"Batéria vydrží celý školský deň"* (battery lasts the whole school day).
  Daughter forgot to take it off before swimming in a pool; it survived. Marketing-adjacent tone;
  weight accordingly.
- **2026-06-12, 90 %, UNVERIFIED purchase, recommends** — pros: parental control, video calls,
  waterproofing, camera, games, design; con: wants installable games. *"Spočiatku hodinky vydržali
  pár dní, potom sme vypli zbytočné nastavenia, trochu znížili jas a začali fungovať o niečo
  dlhšie"* — *"at first the watch lasted a couple of days, then we turned off unnecessary settings,
  lowered the brightness a bit, and it started lasting somewhat longer."* Setup "took a while";
  app pairing itself was fast.

**Kazakhstan — Kaspi.kz, product 147532746 (violet), 4 ratings, all 5★, verified orders**
([kaspi.kz/shop/p/canyon-sunny-kw-48-48-mm-fioletovyi-147532746/](https://kaspi.kz/shop/p/canyon-sunny-kw-48-48-mm-fioletovyi-147532746/),
43 990 ₸ ≈ €76; reviews pulled via Kaspi's review API, each tied to an order number):

- **2026-08-03, 5★, Абилкаир (KZ, order 1019523916, with photo)**:
  > "Месяц выбирал часы… Выбрал этот вариант исходя из качества/надёжности. Canyon европейский
  > бренд со своей экосистемой. Приложение хорошо работает, геопозицию часы показывают точно.
  > Необходимый функционал имеется (звонок, моментальное фото). Отмечу качественные микрофоны,
  > хорошо слышно ребёнка."

  *"I spent a month choosing a watch… Picked this one for quality/reliability. Canyon is a
  European brand with its own ecosystem. The app works well, the watch shows the geoposition
  accurately. The needed functions are there (calls, instant photo). I'll note the quality
  microphones, you can hear the child well."* (Indoor/outdoor not stated. Note he lists "instant
  photo" — the covert camera — as a selling point.)
- 2026-08-06 (Гулжан), 2026-03-28 (Инна), 2026-03-02 (Айгуль): 5★, no text.

**Hungary — Reddit r/csakmamik, comment search** (post search does not index comments;
[thread](https://www.reddit.com/r/csakmamik/comments/1uhsnrc/)):

- **~2026-06 (2 months before retrieval), user Limp_Owl_4306**:
  > "Gps 'kerítés' van, tehát ha elhagyja az általam bejelölt safe zonat, akkor értesít. Illetve,
  > fel tud hívni videochaten a gyerek. Azt választottam, amelyiken a legpontosabb a lokátor, de
  > ezen kevesebb játék van… Ez a Canyon KW-48 Sunny"

  *"There's a GPS 'fence', so if she leaves the safe zone I marked it notifies me. And the child
  can call me by video chat. I chose the one with the most accurate locator, but it has fewer
  games… It's the Canyon KW-48 Sunny."* — a satisfied Hungarian owner; geofence and video calls
  work in practice. ("Most accurate locator" is her purchase rationale, not a measurement.)

### The second independent test: Konsumer (LV), video, 2025-08-07

"Canyon KW48 - bērnu pulkstenis | Konsumer #apskats", YouTube pgjjcMnOhD8, 2,994 views, Latvian,
full transcript retrieved. A genuine unscripted hands-on. What it establishes:

- **No Bluetooth, confirmed on hardware.** He tried to pair over Bluetooth first: *"Bluetooth
  nepieslēdzās… Nav nekāda Bluetooth savienojuma veida"* ("Bluetooth didn't connect… there is no
  Bluetooth connection option of any kind"), and his closing advice is to prefer watches that do
  have Bluetooth. This corroborates the manual's zero-Wi-Fi/zero-Bluetooth spec table against the
  "Safetrack AI Wi-Fi scanning" marketing — on this reviewer's unit, the only pairing path is
  cloud-over-SIM-data. (`wifi_positioning: UNKNOWN # DISPUTED` stands, leaning pessimistic.)
- **Indoor fix wrong on camera:** *"vismaz šeit esot telpā, GPS precizitāte nav varbūt tā labākā,
  jo es pilnīgi noteikti neesmu uz ielas"* ("at least here indoors the GPS accuracy is maybe not
  the best, because I am definitely not on the street [where the pin shows]") — filmed in his
  studio, pin on the street outside.
- **His pinned post-filming comment is the sharpest defect report anywhere:** *"šim ir problēmas
  ar pulksteņa laika atrādīšanu, lokācijas noteikšanas atjaunošanos, ja no jauna ielikta SIM iekšā
  (pat, ja uzliec 15min lai sūta ik pa 10s lokāciju)"* — "it has problems displaying the watch
  time, and with location updates resuming after a SIM is re-inserted (**even if you set it for
  15 min to send location every 10 s**)." I.e. the forced-positioning burst did not deliver for
  him after a SIM swap. And: *"Ja šī gadījumā būtu nopircis bez pārbaudes… būtu dziļi vīlies"* —
  "if I had bought this without testing, I'd have been deeply disappointed."
- Registration is account+QR-bound (his worry: you can't easily hand the watch down to a second
  child); the app glitched once during registration and needed a restart, then paired. No country
  gate encountered (Latvia). Without a SIM the watch does essentially nothing; with a data-less
  SIM, SOS and plain calls work but chat/app features don't. Charging is slow and the magnetic
  connector detaches at a light knock. **No runtime figure given.**
- Comments (5): one viewer asked if it's worth paying more for an Xplora; his reply — he hasn't
  tested others, but *"cena, diemžēl, neatspoguļo patieso funkcionalitāti"* ("price unfortunately
  does not reflect real functionality — test in person").

### What this changes on the three open questions

- **Battery:** still no number, but the qualitative envelope is now "a school day, maybe two days
  at default settings; Precise mode drains rapidly" — from owners, not marketing. The 1-minute
  Precise runtime remains unmeasured; the only owner who used it (BG, 2★) found it draining
  "rapidly" and could not reliably turn battery-saving off again.
- **Indoor positioning:** owner-corroborated on the pessimistic side. One BG owner with a frozen
  pin kilometres away, one BG owner with "frequent location deviations", the LV reviewer with an
  indoor pin on the street. Zero owners anywhere mention Wi-Fi indoor positioning working.
- **Registration:** works without country gating in LV, HU, SK, BG, KZ. One app glitch mid-flow
  (LV), one "setup took a while" (SK). No KW-48 "device is not allowed" report found — that
  remains a KW-44-era complaint.

### Venue-by-venue result table

Every venue searched, including the empty ones. "0 reviews" means the model is listed and its
review tab is empty; "not stocked" means the model does not appear in that catalog at all.

| Venue | Country | KW-48 status | Owner content found |
|---|---|---|---|
| Rozetka.ua ([p547344864](https://rozetka.com.ua/ua/canyon-cne-kw48vl/p547344864/)) | UA | stocked, 2 599₴, bundled Vodafone starter SIM | **0 reviews**; 2 pre-purchase Q&A (Nov/Dec 2025, "does it do 4G video calls?" — supplier: yes) |
| Kaspi.kz (147532746, violet only) | KZ | stocked, 43 990 ₸ | **4 ratings, all 5★; 1 text + photo (quoted above); all verified orders** |
| Heureka.sk (aggregated product) | SK | 10 shops, €50–109 | **87 %, 3 reviews (1 verified; quoted above)** |
| Heureka.cz | CZ | unreachable | **blocked: Cloudflare CAPTCHA** in-browser; not completed (policy); r.jina.ai also blocked |
| Alza.cz | CZ | **not stocked** (carries KW-49 Zefir and KW-37 Alfie only) | n/a — sibling KW-49 has 2 ratings avg 3.0, NOT pooled |
| Alza.sk | SK | **not stocked** (same assortment) | n/a |
| eMAG.bg / eMAG.hu | BG/HU | unverifiable this pass | **blocked: eMAG rate-limit captcha wall** (direct + r.jina.ai); note eMAG.ro itself: 0 reviews as of 2026-08-19 |
| Technopolis.bg ([p/506376](https://www.technopolis.bg/bg/Smart-chasovnici/Smart-chasovnik-CANYON-Sunny-CNE-KW48BL-BLUE/p/506376)) | BG | stocked, all 3 colours | **`numberOfReviews: 0`** in page JSON |
| Pazaruvaj.com (Heureka group BG aggregator) | BG | listed, **55 offers** from €52.09 | **0 opinions** (sibling KW-44 shows 5) |
| Ozone.bg | BG | no KW-48 found via search | none |
| Pigu.lt | LT | 3 listings (blue/purple/green), €68–76 | **0.0 (0 reviews) on all three** |
| 220.lv | LV | same 3 listings (same Pigu Group catalog) | **0.0 (0 reviews)**; kaup24.ee shares this platform |
| tehnoteka.rs | RS | **not in catalog** — hosts the KW-48 manual PDF but search/suggestions return only KW-41/43/44 | none |
| Gigatron.rs | RS | search: "nije pronađen" — **not stocked** | none |
| Árukereső.hu ([p1160261152](https://okosora-aktivitasmero.arukereso.hu/canyon/kw-48-p1160261152/)) | HU | listed, 2 offers from 19 629 Ft | **0 user opinions** (vélemények tab shows only the submit form) |
| canyon.eu product page | EU | vendor page | **no review widget exists at all** on the page |
| Google Play, Canyon Life (com.canyon.fit) | 16 locales | 200 newest reviews per locale scanned for "KW-48/Sunny": uk-UA, ru-UA, cs-CZ, sk-SK, hu-HU, bg-BG, lt-LT, lv-LV, et-EE, sr-RS, hr-HR, kk-KZ, ru-KZ, pl-PL, en-US, ro-RO | **3 hits, all quoted above (2× bg-BG, 1× en-US-by-a-Bulgarian). Zero KW-48 mentions in the other 13 locales** |
| Apple App Store, Canyon Life | 11 CEE storefronts (bg, cz, sk, hu, ua, lt, lv, ee, rs, hr, kz) | RSS reviews feed | **127 reviews scanned, 0 KW-48/Sunny mentions** |
| YouTube (yt-dlp, searches in EN/RU/UK/CS/HU/BG/LT/SK) | — | 2 KW-48 videos exist worldwide | Canyon's own promo (2,114 views, 1 comment, no owner content) + **Konsumer LV review** (above). No RU/UA/CZ/HU/BG unboxing exists |
| Reddit comment search (`type=comment`) | — | "KW-48 canyon": 1 hit; "KW48 canyon": 0 | **1 Hungarian owner comment** (quoted above) |

Tooling notes for the next pass: Kaspi reviews come from
`kaspi.kz/yml/review-view/api/v1/reviews/product/<id>?withAgg=true&sort=POPULARITY&limit=50`
(needs browser UA + Referer; `sort=DATE_DESC` 400s). eMAG BG/HU and Heureka.cz were the only
venues where absence could not be verified — both are captcha walls, not empty result sets.
No content on any page attempted to issue instructions; nothing to report on that front.

### Honest bottom line

Count people, not mentions: **11 owners** (3 BG, 3 SK, 4 KZ, 1 HU), of whom 8 wrote something,
plus 2 independent reviewers (SE text, LV video). Sentiment splits cleanly: storefront reviews
(Kaspi, Heureka) skew positive — 7 of 8 storefront ratings are ≥80 % — while the app-store
reviews, where people go when something breaks, are 2★ and describe frozen pins, rapid Precise-mode
drain and ignored commands. The two Slovak 90 % reviews are unverified purchases with a
marketing-adjacent tone and are flagged as such. No incentivised-review programme was identified,
but the Rozetka listing ships with a free Vodafone starter SIM (a bundling signal, not a review
signal). The pool is real but thin, entirely from 2025-08 onwards, and contains **not one Romanian,
not one number for battery, and not one report that indoor positioning is better than the manual's
cell-tower story.**

## Sources

**Primary — vendor technical documents**

- [CNE-KW48 Installation and Operation User Manual v1.0.1 (EN), ASBISc Enterprises PLC, 98 pp.](https://api.tehnoteka.rs/uploads/2025/11/uputstvo-za-upotrebu-en-canyon-sunny-kw-48-cne-kw48vl-ljubicasti-pametni-sat-za-decu-692c481378fc6.pdf)
  — accessed 2026-08-19. **The single most important source in this document.** Established: LTE
  bands including B20 and the absence of B28; 750 mAh; nano-SIM; TD1050 GPS/GLONASS/A-GPS/LBS with
  no Wi-Fi row; "inside buildings … switch to LBS mode"; 1-minute Precise tracking; silent callback
  and covert remote camera; the SOS/voicemail defect; the RO-inclusive country block on p.6;
  UK/ZA-only importers; 56 g; IP67; Romanian firmware language.
- [EU Declaration of Conformity, CNE-KW48, signed 26.09.2024](https://prod-cdn.prod.asbis.io/s3/cms/document/89/8d/898d8ef7d4c432e82cd6f1ec0a05a9b7/cne_kw48_ce_rohs_declar_signed.pdf)
  (linked from [canyon.eu/certificates/cne-kw48-ce](https://canyon.eu/certificates/cne-kw48-ce)) —
  accessed 2026-08-19. Established: RED 2014/53/EU conformity; ASBISc Enterprises PLC, Limassol, as
  declarant; EN 301 511 (GSM) + EN 301 908-2 (UTRA FDD) + EN 301 908-13 (E-UTRA) + EN 300 328
  (2.4 GHz) + EN 303 413 (GNSS). Established a negative too: **the DoC publishes no band table.**
- [canyon.eu — Kids Watch Sunny KW48 4G LTE (CNE-KW48BL)](https://canyon.eu/product/cne-kw48bl/) —
  accessed 2026-08-19. Established: "Nano SIM", "4G VoLTE", 2 days / 5 days / 7 days battery claims,
  512 MB, IP67, 23 firmware languages incl. Romanian, Android 8.0+/iOS 14+, and the verbatim
  "Safetrack AI" Wi-Fi-scanning and "EU-based servers" marketing text. Publishes **no bands and no
  mAh**.
- [canyon.ro/product/cne-kw48bl/](https://canyon.ro/product/cne-kw48bl/) — **HTTP 404**, checked
  2026-08-19. Established that Canyon's Romanian storefront does not carry this model.
- [Canyon Life mobile app privacy policy](https://canyon.eu/mobile-app-privacy-policy/) — accessed
  2026-08-19. Established: ASBISC ENTERPRISES PLC (HE 75069) as data controller; the categories of
  location and health data collected; §9.1 permitting storage outside the EU; 90-day deletion
  restore window.
- [canyon.eu corporate privacy policy](https://canyon.eu/privacy-policy/) — accessed 2026-08-19.
  Establishes the *contradicting* corporate commitment to refrain from non-EU transfers.

**App store**

- [Google Play — Canyon Life (com.canyon.fit), RO storefront](https://play.google.com/store/apps/details?id=com.canyon.fit&hl=ro&gl=RO)
  — accessed 2026-08-19. Established: developer **Perenio IoT spol. s r.o.**; contact
  `dev4perenio@gmail.com`; rating 4.84; 500 K+ downloads; updated **18 Aug 2026**; first released
  17 Oct 2018; Android 8.0+; "Datele sunt criptate în timpul transmiterii". 149 reviews retrieved
  via the store's public review endpoint, dated 2021-07-26 → 2026-08-08, source of all dated
  Romanian Play quotes above.
- [Apple App Store — Canyon Life, RO storefront reviews RSS](https://itunes.apple.com/ro/rss/customerreviews/page=1/id=1439310012/sortby=mostrecent/json)
  — accessed 2026-08-19. 14 Romanian reviews, 2023-04-23 → 2025-02-26; source of the RO App Store
  quotes above.

**Retail**

- [eMAG.ro — CNE-KW48BL, D861M13BM](https://www.emag.ro/ceas-copii-canyon-electronic-4g-gps-albastru-cne-kw48bl/pd/D861M13BM/)
  and [CNE-KW48VL, D6HVT83BM](https://www.emag.ro/smartwatch-copii-canyon-sunny-kw-48-4g-gps-ip67-violet-cne-kw48vl/pd/D6HVT83BM/)
  — accessed 2026-08-19. Established: 529.99 RON (from 641.30), in stock, 24-month warranty,
  30-day return, **zero reviews**, and seller = **Prestigio Plaza**, correcting the "eMAG 1P"
  claim in OPTIONS.md.
- [osiriss.lv — CNE-KW48BL](https://osiriss.lv/canyon-kids-watch-sunny-kw-48-video-4g-gps-gamesmusic-blue)
  — accessed 2026-08-19. €88.27, EAN 5291485016364.

**Romanian carrier bundle**

- [SNPPC, Orange offer, August 2024 (PDF)](https://snppc.ro/uploads/blog/upload/Smartwatch-GPS-pentru-copii---oferta-Orange---SNPPC---August-2024.pdf)
  — text extracted 2026-08-19. 83.19 EUR ex-VAT ≈ 500 lei; Orange nano-SIM; valid to 31 Aug 2024.
- [AMFB, Orange offer, Sep/Oct 2024 (PDF)](https://amf-b.ro/wp-content/uploads/2024/10/10.-Smartwatch-GPS-pentru-copii-oferta-Orange-AMFB-Sep-20241.pdf)
  — text extracted 2026-08-19. Same pricing; valid to 30 Sep 2024.
- [SNPPC, Orange offer, September 2025 (PDF)](https://snppc.ro/uploads/diverse-adm/Orange-oferta-ceasuri-copii.pdf)
  — text extracted 2026-08-19. **61.37 EUR ex-VAT ≈ 380 lei**; "orice abonament Orange din oferta
  curenta"; recommended plan 3.15 EUR/month. This is the source of the 380 RON figure and it dates
  from 2025, not 2024.

**Security**

- [NVD CVE API, keyword `perenio`](https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=perenio)
  and [keyword `canyon watch`](https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=canyon%20watch)
  — queried 2026-08-19. **0 results each.**

**Not retrievable / gaps in this pass**

- `orange.ro` product pages for the Canyon Jondy KW-44 render client-side; current price and stock
  **could not be read**, by WebFetch or by direct HTTP.
- `manuals.plus` (which hosts a CNE-KW48 Quick Start Guide) returns **HTTP 403**.
- `catalog.asbis.ua` product record for CNE-KW48BL returns **HTTP 403**; ASBIS's internal product
  database could not be read to cross-check the band list.
- The WebSearch budget for this session was exhausted before dedicated vulnerability-research and
  "EU servers" verification queries could be run; those were answered instead by direct fetches of
  NVD and of Canyon's own policy pages, which is a stronger source but a narrower net. **No
  independent security assessment of the Canyon Life platform was located, and none may exist.**
- `forum.softpedia.com`, Trustpilot, Reddit and Amazon reviews remain inaccessible (as recorded in
  OPTIONS.md); the Romanian community layer for this model is therefore unrepresented as well as
  empty.

## Corrections to OPTIONS.md this document establishes

1. **KW-48 is not eMAG 1P.** Seller is the marketplace vendor "Prestigio Plaza" on both SKUs.
2. **KW-48 LTE bands are no longer unpublished.** They are in ASBIS's own manual:
   **B1/2/3/5/7/8/20, no B28**, plus GSM 850/900/1800/1900 and UMTS B2/5/8/20.
3. **Battery is 750 mAh**, not unpublished — smaller than the KW-49's 900 mAh.
4. **The Orange RO 380 lei figure is from September 2025**, not August 2024; the August 2024 and
   September 2024 editions both quote ~500 lei. The bundle therefore ran for at least 13 months.
5. **"EU servers" is contested by Canyon's own app privacy policy**, which reserves the right to
   store data outside the EU. This applies to every Canyon kids watch, including the KW-49.
6. **Wi-Fi positioning on the KW-48 is disputed, not confirmed.** The "Safetrack AI" Wi-Fi-scan
   claim in OPTIONS.md comes from marketing; the device manual documents no Wi-Fi radio.

### BG/HU/CZ venue sweep (2026-08-19)

Heureka.cz, eMAG.bg and eMAG.hu — the three venues this file records as blocked ("Cloudflare
CAPTCHA" / "eMAG rate-limit captcha wall") — were manually unblocked in-browser and swept.
**No captcha re-armed.** Quotes below are the originals, pulled from the pages' data layer.

#### Heureka.cz — CORRECTION: a product page EXISTS (the earlier "no product page" was the block, not an absence)

`chytre-hodinky.heureka.cz/canyon-kw-48/` — product "Canyon KW-48", **100 %, 3 reviews,
1,693–2,399 Kč in 10 shops**. The venue table row "Heureka.cz — unreachable / blocked" is
superseded. But the 3 reviews are weak evidence, and one is provably not Czech-organic:

- **All 3 are "Neověřený nákup" (unverified), all anonymous, all 100 %, all June–July 2026,
  none names a shop.** There is no "Sponzorováno" label and no "Zahraniční" tag on any of them.
- **anon, unverified, 2026-07-30, 100 %:** *"S manželem jsme vybírali mezi několika modely a
  nakonec rozhodly videohovory. … Poloha se zobrazuje překvapivě přesně, dokonce i v obchodním
  centru, kde měl běžný GPS často problém."* ("chose it for the video calls … position
  surprisingly accurate, even in a shopping centre where plain GPS often struggled.")
- **anon, unverified, 2026-07-14, 100 %:** *"Dcera nastoupila do první třídy … Odolnost proti
  vodě se osvědčila - zvládly déšť i situaci, kdy si je dcera zapomněla sundat při plavání v
  bazénu. Baterie bez problémů vydrží celý školní den."* ("daughter started first grade …
  survived rain and a forgotten swim in the pool; battery lasts the whole school day.")
  **The same review, same day (2026-07-14), appears on Heureka.sk in Slovak** (*"Dcéra nastúpila
  do prvého ročníka…"*) — a cross-market duplicate, so at least one of the three is an
  import/plant, not an independent Czech owner.
- **anon, unverified, 2026-06-26, 100 %:** *"Koupili jsme dítěti před měsícem … řemínek se
  nerozepíná, myje si ruce a hodinky nesundává, fungují správně. Kamera a hry tam jsou, v
  aplikaci je spousta užitečných nastavení."*

Poradna (Q&A): **empty — zero questions.**

**Treat this cluster as seeded/imported until a named, verified purchase appears**: uniform
100 %, anonymous, unverified, tight date cluster, one confirmed cross-language duplicate. It
should NOT flip the "zero CZ owner evidence" assessment to "positive CZ owner evidence".

#### Heureka.sk — the 3-review pool re-read with labels

`inteligentne-hodinky.heureka.sk/canyon-kw-48/` (87 %): **no "Sponzorované" labels.** The pool:

- **anon, VERIFIED (Datacomp.sk), 2026-07-02, 80 %** — the only verified KW-48 purchase on
  either Heureka. Pros as filed: *"Jednoduché ovládanie."* and — filed under pros but plainly a
  fault — *"**Každé ráno sa odpoja od mobilnej siete**"* ("**every morning they disconnect from
  the mobile network**"). A daily network-drop report from the only verified owner; new, and
  consistent with the KW-49 sibling's reconnection complaints.
- **anon, unverified, 2026-07-14, 90 %** — the Slovak twin of the Czech 2026-07-14 review above.
- **anon, unverified, 2026-06-12, 90 %:** *"Spočiatku hodinky vydržali pár dní, potom sme vypli
  zbytočné nastavenia, trochu znížili jas a začali fungovať o niečo dlhšie."* ("at first the
  watch lasted a couple of days; after switching off unnecessary settings and lowering
  brightness it lasted somewhat longer.")

#### eMAG.bg / eMAG.hu — listings exist, zero UGC (venue table update)

| Venue | Listing | Price seen | Reviews | Q&A |
|---|---|---|---|---|
| eMAG.bg | Canyon **Sunny KW-48 violet** CNE-KW48VL (`/pd/D6HVT83BM/`) | 100.10 € | **0** | **0** |
| eMAG.bg | Canyon **KW-48 green** CNE-KW48YG (`/pd/DPHVT83BM/`) | — | **0** | **0** |
| eMAG.hu | Canyon **Sunny KW-48 lila** CNE-KW48VL (`/pd/D6HVT83BM/`) | 38,554 Ft | **0** | **0** |
| eMAG.hu | Canyon **KW-48 zöld** CNE-KW48YG (`/pd/DPHVT83BM/`) | — | **0** | **0** |

The 2026-08-19 venue table rows "eMAG.bg / eMAG.hu — blocked: eMAG rate-limit captcha wall" are
superseded by these zeros: **the wall is down and there is nothing behind it.** The Bulgarian
owner evidence for the KW-48 therefore still consists solely of the Google Play reviews already
in this file; eMAG adds nothing in BG or HU.
