# imoo Watch Phone X10

```yaml
---
model: imoo Watch Phone X10 (also sold as "imoo Smartwatch X10")
brand: imoo (BBK Electronics)
release_year: 2025          # SG reviews from Jun 2025, DE reviews from Nov 2025. imoo publishes no launch date.
still_sold: yes             # EUR 299 live on imoo EU store, accessed 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status: likely
ro_evidence_tier: 3         # dated first-hand RO report of this exact model (eMAG, 13 Aug 2026)
                            # + tier 4 (RO retail listing, RO warranty) + tier 1-partial (vendor ships to RO)
ro_killer: n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands: [B1, B2, B3, B4, B5, B8, B12, B13, B17, B18, B19, B20, B26, B28, B66, B38(TDD), B40(TDD), B41(TDD)]
band_b20: true
band_b28: true              # present, but RO 700 MHz is 5G n28, not LTE B28 - buys nothing here
volte: true                 # imoo spec table: "Supported". NOT verified on a Romanian operator.
voice_fallback: 2g-csfb     # GSM B2/B3/B5/B8 present in the spec table; WCDMA also present but 3G is dead in RO
modem_chipset: Qualcomm Snapdragon Wear 4100 ("QUALCOMM SW-4100" per imoo). Exact modem part UNKNOWN.

# --- Positioning (the #1 criterion) ---
positioning: [GPS, GLONASS, BeiDou, Galileo, QZSS, WiFi, LBS, Barometer]
wifi_positioning: true
update_interval_min: UNKNOWN   # imoo publishes no interval; no reviewer states one

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah: 740               # silicon-anode per imoo EU/DE; "carbon anode" per imoo global page (imoo's copy conflicts)
battery_claimed_h: 24-48       # CORRECTED 2026-08-19 (was UNKNOWN). imoo's OWN Amazon listing copy for the X10,
                               # live 2026-08-19: "offre une autonomie de 1 a 2 jours en utilisation moderee"
                               # (amazon.fr B0FNCZP34X, sold by IMOO Direct) and "1-2 Tage Nutzung" in imoo's
                               # amazon.de X10 listing title. House number - identical string in imoo's Z1/Z3/Z7
                               # listings. A separate imoo PR bullet claims "3-day battery life" (reprinted by
                               # techbuzzireland 23 Jul 2026); DE reviewers render it "bis zu drei Tage ... bei
                               # Verwendung in WLAN-Netzen" and two of them reject it outright. imoo's own
                               # storefronts still publish NO number. familie.de's "bis zu 95 Std." = standby.
battery_observed_h: 24-48      # CORRECTED 2026-08-19 (was 24-72). The 72 h top (inside-digital.de, Wellendorf,
                               # 20 Nov 2025, "etwa drei Tagen") is STILL LIVE but is contradicted by the SAME
                               # OUTLET's second test (Hayo Luecke, 29 Jul 2026): "Du solltest eher von rund
                               # einem Tag ausgehen". Four DE reviewers land on ~1 day real use; ~48 h is the
                               # credible top (netzwelt). Worst credible ~24 h intensive incl. GPS + video calls
                               # (connect.de). Only model-verified owner figure: "1 bis 2 tage" (Google Play DE,
                               # 2026-05-09, 1-star, names the X10). NO source states a tracking interval.
                               # See "Evidence sweep (2026-08-19)".

# --- App & service ---
app_name: imoo Watch Phone
app_android_min: UNKNOWN
app_ro_playstore: true         # iOS confirmed live in RO App Store 2026-08-19; Android com.imoo.watch.global
                               # reported in RO Play storefront by the discovery sweep, not re-verified here (Play blocked)
app_last_update: 2026-07       # iOS v9.36.70, "27 July", per the RO App Store listing
data_region: UNKNOWN           # no imoo policy names a hosting country. Store policy says data goes outside Europe.
                               # No privacy policy covering the watch/app service could be located at all.

# --- Practical ---
sim: nanoSIM                   # per the eMAG RO spec table; imoo states only "requires a SIM card and VoLTE service",
                               # and ships a "SIM Card Picker" in the box (i.e. a physical tray)
water_rating: 20 m per ISO 22810:2010 (imoo). eMAG RO listing states "IP68, 20 m".
weight_g: 67                   # imoo publishes no weight. 67 g measured by netzwelt.de and connect.de; 67.5 g by dadslife.de
camera: true                   # 8 MP rear + 5 MP front, flip design. Not physically removable.
games: true                    # on-watch app store; parent app offers "Apps Restrictions"
extras_disableable: partial
price_eur: 299
buy_from: imoo EU store (imoostore.com/eu) - ships to Romania, free standard shipping, 3-7 business days
price_ro_eur: ~700             # 3,630.00 RON (was 3,579.99; discount lapsed 2026-08-19) on eMAG (seller DeiTim), i.e. ~2.3x imoo's own EU price.
                               # RON/EUR rate not sourced here.
---
```

## Verdict

Suits a parent who wants the best hardware in this category and will charge it nightly: it is the
only candidate with a published, Romania-complete band list including B20, plus five-constellation
GNSS with Wi-Fi positioning. The main risk is not the radio — it is that this is a 67 g, 56 mm slab
on a 7-year-old's wrist, that imoo names no Romanian carrier and no data-hosting region, and that the
only Romanian owner on record rates it 1 star.
It clears the floor on battery (worst observed case ~1 day) and on Romanian voice, but "clears" is
not "comfortably clears".

## Does it work in Romania?

**Tier 1 (partial), vendor-level, accessed 2026-08-19.** imoo's EU store shipping policy names the
countries it delivers to and **Romania is explicitly in the list**: "Ireland, Spain, Germany, Denmark,
France, Netherlands, Belgium, Greece, Italy, Portugal, **Romania**, Slovenia, Sweden, Poland, Czech
Republic, Luxembourg, Slovakia, Hungary, Lithuania, Bulgaria." Free standard shipping, 3-7 business
days after dispatch.
<https://www.imoostore.com/eu/pages/shipping-policy>

**Counter-evidence at the same tier.** imoo's own supported-countries page lists only Germany, United
Kingdom, France, Italy, Ireland, Spain and Poland in Europe (plus Singapore, Australia, Malaysia,
Indonesia, Thailand, Vietnam, India, United States). **Romania is not on it.**
<https://www.imoo.com/eu/countrys> (accessed 2026-08-19)

The X10 product page lists compatible European carriers as "Telecom, O2, Vodafone, EE, MOVISTAR,
Orange, and others". **No Romanian operator is named anywhere** — not Orange Romania, not Vodafone
Romania, not Digi. "Vodafone" and "Orange" on that list are the Western-European entities. Shipping to
a country and certifying a device on that country's networks are different claims, and imoo only
makes the first one.
<https://www.imoo.com/eu/products/x10> (accessed 2026-08-19)

**Tier 2 — app in the Romanian storefront.** The iOS app "imoo Watch Phone", seller **PT. IMOOLINK
GLOBAL TRADING**, version 9.36.70 updated 27 July, is live in the **Romanian** App Store, rated
**2.5 / 5 from 4 ratings**. Note that **Romanian is not among the 16 supported languages** listed
(English, Bengali, Filipino, French, German, Hindi, Indonesian, Italian, Malay, Polish, Simplified
Chinese, Spanish, Thai, Traditional Chinese, Turkish, Vietnamese).
<https://apps.apple.com/ro/app/imoo-watch-phone/id1057845227> (accessed 2026-08-19)

The Android package `com.imoo.watch.global` was reported present in the RO Play storefront (updated
2026-07-21, 1M+ installs) by this project's own discovery sweep; **Google Play blocked retrieval from
this environment and that figure is not re-verified here.**

**Tier 3 — dated first-hand Romanian reports.** One for this exact model (see *What users say*). Two
further Romanian-storefront app reviews, **model unknown**, one of which is a registration failure:

> **Vlad Sabau.ro**, RO App Store, **13/07/2025**, title *"Junk"*:
> *"Can not login with the phone number because o do not get the sms confirmation code."*
> (written in English; the *"o"* is the reviewer's typo for *"I"*)

This matters because the whole project screens for exactly this failure mode. It is **one report**, it
does not name a model, and it is 13 months old. But it means the statement in `OPTIONS.md` that "No
Romanian report of a registration/account failure was found" for imoo **is no longer accurate** — a
contradiction the parent research should absorb.

**Tier 4 — Romanian retail.** One eMAG listing for the kids' X10: 3,579.99 RON, "Ultimele 3 produse",
**sold and delivered by the marketplace seller DeiTim, not by eMAG first-party**. `OPTIONS.md` records
the X10 as "1,610 RON 1P" — **that does not match what the listings show today** (see *Price sanity*).

**Tier 5 — bands.** Complete for Romania on the necessary bands (B20 + B3 + B1 + B8). Necessary, not
sufficient.

**What is still unproven, explicitly:**

- That the imoo app accepts a **+40** number at registration today. **unverified**, and one 2025 RO
  report says the SMS code never arrived.
- That **VoLTE is provisioned** for this device's IMEI/TAC by Orange, Vodafone or Digi. imoo states
  VoLTE is supported *by the watch* and that calling *requires* it. No Romanian operator publishes a
  device whitelist. **unverified.**
- That imoo intends to keep serving Romania. imoo exited Europe once already (2021-2024) and has no
  Romania-specific storefront, no Romanian carrier named, and no Romanian app localisation.

## Pre-purchase test

1. Install **imoo Watch Phone** from the **Romanian** Play/App storefront *before paying*.
2. Attempt account registration with a **+40** number and confirm the **SMS verification code
   actually arrives**. This is the single test that matters, and it is the one a Romanian user
   reported failing in July 2025.
3. Buy from **imoo's EU store at EUR 299** (free shipping to RO) rather than eMAG at 3,579.99 RON. EU
   distance selling gives **14 days**; the eMAG listing states 14 days return and a 24-month legal
   conformity warranty under OUG 140/2021. imoo's EU return window is **UNKNOWN** — the shipping-policy
   page does not state it and the returns page was not retrieved.
4. Because five reviewers call this watch bulky, **try it on the child's wrist inside the return
   window**. connect.de says this explicitly (see *Age fit*).
5. In week one: an outgoing *and* an incoming **voice** call on LTE, and a location check **inside the
   school building**.

## Positioning quality in real use

**Hardware.** imoo's spec table lists "Barometer, GPS, GLONASS, BDS, Galileo, QZSS, WiFi, LBS" — five
constellations plus Wi-Fi positioning plus a barometer for floor detection. On paper this is the
second-best positioning stack in the candidate field, behind only the TCL MT48's dual-band L1+L5.

**Fix time, drift, update interval: UNKNOWN.** imoo publishes no positioning accuracy figure, no update
interval, and no statement about how often the watch polls. No reviewer states one either.

**Observed — and the reports disagree.**

Against, from Romania (one report, this model, 13 Aug 2026):

> *"Urmărirea prin GPS are erori destul de mari 17 metri sau mai mult."*
> ("GPS tracking has fairly large errors, 17 metres or more.")
>
> *"Reclama este falsă că poți să vezi pozitia pe etaje, aplicația îți arată doar pozitia in 2D."*
> ("The advertising is false that you can see the position by floor; the app only shows you the
> position in 2D.")

That second sentence is a direct hit on the X10's headline barometric-floor feature. It is one Romanian
report and it is not corroborated.

In favour, from Germany (three independent reports):

> **inside-digital.de**, 20 Nov 2025: *"Die Ortung funktioniert ohne Fehl und Tadel, auch in Innenräumen
> wurde die Watch X10 stets lokalisiert."*
> ("Positioning works flawlessly; even indoors the Watch X10 was always located.")
>
> **familie.de**, 29 Jun 2026: positioning works *"wirklich zuverlässig"* ("truly reliably") in daily use.
>
> **netzwelt.de**, 1 Aug 2026: location tracking is *"besser als bei einem AirTag"* ("better than an AirTag").

**How to read this.** Three German reviewers on German networks report indoor positioning working; one
Romanian owner on a Romanian network reports 17 m+ error and no floor data. 17 m is not a catastrophic
failure — it is roughly the difference between the right classroom and the corridor — but it is not what
the marketing promises. The silent-fallback risk that defines this category (Wi-Fi/LBS position presented
as GPS) is **not** documented for the X10 by anyone; that is absence of evidence, not evidence of absence.
**unverified.**

## Battery in real use

**This is the central question for this model, and imoo refuses to answer it.**

**Claimed: nothing.** Checked four imoo storefronts on 2026-08-19 — EU (`imoo.com/eu/products/x10`),
German (`imoo.com/de/products/x10`), US store, and the global page. **None publishes a runtime figure.**
What they publish instead is marketing copy, which is imoo's claim and not a fact:

> imoo, EU/US store: **"Ultra-long battery life"**, **"Equipped with a state-of-the-art silicon anode
> battery technology"**
>
> imoo, German page: **"Ultralange Akkulaufzeit"**
>
> imoo, global page: **"carbon anode battery technology"** — imoo's own copy contradicts itself on the
> anode chemistry between storefronts.

For contrast, imoo *does* publish a runtime for the cheaper Z1 on the same 740 mAh cell ("approximately
1-2 days", per this project's discovery record). Declining to publish one for the model with an AMOLED
and a Snapdragon Wear 4100 on the *same cell* is, as the brief says, informative.

The only "claimed" number found anywhere is a spec box in a German consumer-magazine review reading
**"740 mAh mit Siliziumanoden-Technologie, bis zu 95 Std. Laufzeit"** ("up to 95 h runtime") —
familie.de, 29 Jun 2026. It is unattributed, appears on no imoo page, and could not be traced to an imoo
press release. Treat as **unverified**; do not record it as imoo's claim.

**Observed — five independent dated German reviews plus one Singaporean, all on the retail unit:**

| Source | Date | Observed runtime | Stated usage profile |
|---|---|---|---|
| connect.de (Andreas Seeger), DE | 2025-11-14 | **~1 day** intensive; **1.5-2 days** normal | *"Das reicht für einen Tag bei intensiver Nutzung, bei normaler Nutzung sind auch anderthalb bis zwei Tage drin."* Adds: *"die Kinder-Smartwatch auch mit mehreren (kurzen) Videocalls und GPS-Tracking problemlos einen Tag schafft"* ("manages a day without problems even with several short video calls and GPS tracking") |
| netzwelt.de (Birte Keller), DE | 2026-08-01 | **~2 days** | *"Der Akku hat bei uns circa zwei Tage durchgehalten."* And: *"Auch wenn euer Kind viel mit der Uhr herumspielt, sollte sie einen ganzen Tag durchhalten."* ("Even if your child plays with the watch a lot, it should last a whole day.") netzwelt's own datasheet entry reads *"Laufzeit: 2 Tage"* |
| inside-digital.de (Matthias Wellendorf), DE | 2025-11-20 | **~3 days** | *"bei normaler Nutzung einen Betrieb von etwa drei Tagen ermöglicht"* ("allows about three days of operation under normal use"). Note: this reviewer writes "750 mAh", not 740 |
| dadslife.de (Kurt Vierthaler), DE, child aged 9 | 2025-11-24 | **1-2 days to several days** | *"die Akkulaufzeit schwankt je nach Nutzung zwischen ein bis zwei und mehreren Tagen"* ("battery life fluctuates depending on use between one to two and several days"). Writes "760-mAh-Akku" |
| familie.de (Charoline Bauer), DE | 2026-06-29 | **"several days"**, less in practice | *"Bei normaler Nutzung hält der Akku der Uhr locker über mehrere Tage"* — immediately qualified: *"Da unser Kind jedoch gerne telefoniert, muss häufiger geladen werden."* ("But because our child likes to make calls, it has to be charged more often.") |
| Tech Edition (Vincent Wee), Singapore | 2025-07-15 | **"a full day"** | *"with a 740mAh battery that comfortably lasts a full day of moderate usage—calls, location updates, and camera use included"* |

**Known battery sink, from a primary review:** connect.de, 2025-11-14 —

> *"Die Laufzeit ist bei dieser Smartwatch sehr stark von der Nutzung abhängig - Videochats mit zwei
> aktiven Kameras über LTE etwa saugen den Akku sehr schnell leer."*
> ("Runtime on this smartwatch depends very heavily on usage — video chats with two active cameras over
> LTE, for instance, drain the battery very quickly.")

**Charging:** proprietary magnetic side-docking cable, 0 to 100% in *"etwas mehr als anderthalb Stunden"*
("a little over an hour and a half") — connect.de, 2025-11-14.

**One figure to discard.** An AliExpress "wiki" article states *"I averaged 14 hours of active GPS usage
per charge, which aligns with manufacturer claims."* It is undated, on a marketplace SEO page, and its
claim to align with a manufacturer figure is false because **no manufacturer figure exists**. Treat as
unusable. A related Alibaba SEO page asserting "nearly four full days" and "up to 72 hours" is the same
class of content. Neither is counted above.

**Correction (2026-08-19) to the table above.** The inside-digital.de row (~3 days, Wellendorf,
20 Nov 2025) is **contradicted by a second test at the same outlet**: Hayo Lücke,
*"imoo Smartwatch X10 im Test: Was Eltern wirklich wissen müssen"*, **29 Jul 2026** —
*"Zwar verspricht der Hersteller bis zu drei Tage Akkulaufzeit bei Verwendung in WLAN-Netzen, das
ist aber zu optimistisch ausgelegt. **Du solltest eher von rund einem Tag ausgehen.**"* Con list:
*"Akkulaufzeit im Alltag meist nur etwa einen Tag."* Note this is **not a retraction** — both
articles were live at separate URLs on 2026-08-19 (an earlier pass recorded the ~3-day page as
"re-dated/re-bylined", which was wrong; see *Evidence sweep (2026-08-19)*). The credible observed
range is therefore **24–48 h**, and the "3 days" figure is imoo's own PR claim (conditioned on
Wi-Fi use), not an independent result. Also note imoo **does** publish a runtime after all — in
its own Amazon listing copy: *"une autonomie de 1 à 2 jours en utilisation modérée"*
(amazon.fr B0FNCZP34X, seller IMOO Direct, live 2026-08-19) and *"1-2 Tage Nutzung"* in the
amazon.de listing title — the same house string used for the Z1/Z3/Z7.

### Honest judgement on the school-day question

**Yes, it clears one real school day — but with less margin than its price implies, and the "active
tracking" half of the question is genuinely unproven.**

- The floor is met on the worst credible observation: connect.de's *one day under intensive use*, and
  that reviewer explicitly includes GPS tracking plus several short video calls in that day. Six
  independent reviewers, across fourteen months, and none reports a sub-day failure.
- **But not one of them states the location update interval.** Every observation above is on the app's
  default polling, whatever that is. This category's dominant battery failure — batteries collapsing when
  polling is set aggressively — is therefore **untested on the X10 by anyone**.
- All the German observations are on German networks. Battery drain rises when the modem hunts for
  signal. A Romanian concrete school on Orange, where B20 is the only sub-1 GHz layer, is a harder radio
  environment than any of these tests.
- Video calling is the documented drain, and the one Romanian owner reports video calls dropping
  constantly — which in practice means repeated retries, which is worse for battery than a call that
  connects cleanly.

Plan on charging it every night, treat "two days" as a fair-weather figure, and do not assume a tight
tracking interval is free.

## Network & bands

**Primary source, imoo's own spec table, confirmed on two independent imoo storefronts (EU and German)
on 2026-08-19:**

- **4G FDD-LTE:** B1 / B2 / B3 / B4 / B5 / B8 / B12 / B13 / B17 / B18 / B19 / B20 / B26 / B28 / B66
- **4G TD-LTE:** B38 / B40 / B41
- **WCDMA:** B1 / B2 / B4 / B5 / B8
- **GSM:** B2 / B3 / B5 / B8
- **VoLTE:** "Supported"
- **Wi-Fi:** 2.4 GHz + **5 GHz** (2412-2472 MHz, 5180-5825 MHz) — unusual in this category
- **Bluetooth:** 4.2

<https://www.imoo.com/eu/products/x10> · <https://www.imoo.com/de/products/x10>

**The band list in `OPTIONS.md` is confirmed exactly, including the absence of B7.**

**Fit against Romanian operators:**

| Operator | Needed | X10 |
|---|---|---|
| Orange | **B20** (800, its only sub-1 GHz LTE), B3 (1800), B1 (2100), B7 (2600) | B20 yes, B3 yes, B1 yes, **B7 no** |
| Vodafone | B20, B3, B1, B8 (900) | B20 yes, B3 yes, B1 yes, B8 yes |
| Digi | B20, B8, B3, B1, B7/B38 | B20 yes, B8 yes, B3 yes, B1 yes, **B7 no** (B38 TDD yes) |

**B20 present** is the important fact: on Orange it is the difference between having a low band inside a
school building and having none.

**B7 absent** is a capacity gap, not a coverage gap. B7 (2600 FDD) is a dense-urban capacity layer on
Orange and Digi; a watch that cannot use it falls back to B3/B1/B20, which are the layers that actually
carry coverage. For a device whose peak demand is a video call, losing a capacity layer in a crowded city
cell is a real but second-order penalty. It is not a reason to reject the watch.

**B28 present buys nothing in Romania.** Per this project's own network research, Romanian 700 MHz is
deployed as **5G NR n28, not LTE B28**. The X10's B28 is dead weight here. Do not let the marketing band
count flatter the device.

**VoLTE.** imoo states the watch supports VoLTE and that "The X10 requires a SIM card and VoLTE service"
for calling. Two distinct claims are involved and only the first is sourced: *the watch supports VoLTE*
(imoo spec table, verified) versus *VoLTE works on a Romanian SIM for this IMEI/TAC* (**unverified** — no
Romanian operator publishes a device whitelist).

**If 2G is retired.** The X10 lists GSM B2/B3/B5/B8, so a VoLTE provisioning failure degrades to 2G CSFB
rather than to silence — *while Orange and Digi still run 2G*. Neither has committed to an end date.
WCDMA is present in the spec table but is irrelevant: Romanian 3G is gone. Practical consequence: prefer
**Orange or Digi**, where the fallback still exists.

**Field evidence that voice works.** The single Romanian owner's most load-bearing sentence is *"Când suni
normal este ok"* — normal calls are fine. One report, but it is a direct observation of voice succeeding
on a Romanian network with this exact model in August 2026.

## Features & what can be disabled

| Feature | Present | Can the parent switch it off? |
|---|---|---|
| Voice calls | yes | Contacts are whitelisted — imoo: *"Only saved contacts can reach the watch, and parents will receive notifications for all unknown callers."* Blocked during Class Mode. |
| Video calls | yes, 8 MP rear + 5 MP front | No documented independent off-switch. **UNKNOWN.** |
| SOS | yes | **Opt-in, not always-on** — corrected 2026-08-19. imoo's own X10 EU page: *"kids can draw a 'C' on the screen to instantly alert parents"* with the note *"These functions are available **after being enabled in the imoo app**."* A parent who never enables it has no SOS. There is no hardware SOS button. See the RO complaint below and *Evidence sweep (2026-08-19)*. |
| Camera | yes | **UNKNOWN.** No imoo page documents a camera off-switch. It is *not* physically removable — the "flip & detach" design detaches the **watch body from the strap** so the child can hold it to an ear, not the camera from the watch. |
| Games / apps | yes (on-watch app store) | **Partial, documented.** imoo: *"Apps Restrictions. Easily manage which apps on the smart watch are accessible or set time limits for usage as needed."* Corroborated by netzwelt.de, 1 Aug 2026: *"Ihr könnt entscheiden, welche Apps installiert werden dürfen und ob es Nutzungslimits gibt."* ("You can decide which apps may be installed and whether there are usage limits.") |
| Chat (text, image, video, voice messages, emoji) | yes | **UNKNOWN.** imoo describes a *"kid-friendly closed network"* that blocks external social media, but documents no off-switch for chat itself. |
| "Bump and add friends" (child-to-child friending by physical bump) | yes — advertised as a headline feature: *"Bump and add friends. Kids connect face-to-face and build friendships safely."* | **UNKNOWN — and this is the one to ask imoo about.** No documented parental disable. It is the only feature on the watch that adds contacts without a parent in the loop. |
| Class Mode | yes | Configurable: "Find 'More' in the mobile APP, then slide down to 'Class Mode'". imoo states the watch will *"reject all calls and messages for a certain period of time"* and *"can only tell the time"*. An option exists to allow contacting parents during the blocked period. **imoo's own Class Mode article is dated 9 September 2020 and does not state whether camera, games or chat are blocked** — only calls and messages are named. |
| Sleep mode | yes | Listed by familie.de (29 Jun 2026): *"Klassenmodus, Schlafmodus, App-Verwaltung, Bildschirmzeit-Kontrolle"* ("class mode, sleep mode, app management, screen-time control") |
| Find My Watch / remote lock | yes | imoo: *"If the watch is lost, you can remotely lock it and track its real-time location through the parent app."* |
| Screen-time reporting | yes | imoo: *"Parents can check detailed time reports on their phones for every app used on their child's smart watch."* |
| Heart rate / fitness | yes | The RO owner reports the fitness app locks up after 60 minutes and cannot be re-used that day, with no setting to fix it |
| AI assistant | yes (marketed) | **UNKNOWN** |

**Net: `extras_disableable: partial`.** App installation and screen time are genuinely controllable and
documented. **Camera, chat and friend-bumping have no documented off-switch**, and imoo publishes no
complete parent-app settings reference. If a parent needs the camera gone, this is the wrong watch, and
that should be confirmed with imoo support before ordering.

## Security & privacy

**Known vulnerability research affecting this model: none found.** No CVE, advisory or published research
naming the imoo X10, imoo, or BBK Electronics was located.

**The relevant platform research does not implicate imoo.** At **Black Hat, 7 August 2026**, Vangelis
Stykas and Felipe Solferini presented work on shared kids'-tracker backends, building on the 2018
"Trackmageddon" disclosure. They analysed **70+ GPS-enabled watches and accessories** and identified three
Shenzhen-based ecosystems: **"YiQingTeng (also known as Wonlex, with its SETracker app), NewGPS2012, and
SinoTrack"**, each with 30+ brands. The attacks included live eavesdropping through the microphone,
capturing photos and video, location tracking, GPS spoofing, message interception, and **replacing a
watch's emergency contacts with a number of the attacker's choosing** — all with no indicator on the
device. **Neither imoo nor BBK Electronics is named.**

This is a genuine structural point in the X10's favour: imoo runs its own OS (CaremeOS) and its own cloud,
so it is not in the shared-backend blast radius that took out the white-label field. But it is **absence
of evidence, not evidence of security** — imoo's stack is simply unexamined in public.

### Where location data is hosted: UNKNOWN

This is the weakest part of the model's file.

- imoo's marketing claim, which must be attributed and not restated as fact:

  > imoo: *"All data on imoo devices is securely stored locally."* and *"Industry-leading practices in
  > data encryption and privacy protection comply with stringent GDPR privacy and data regulations."*
  > <https://www.imoo.com/en/why-imoo> (accessed 2026-08-19)

  **No certification body, no auditor, no cloud provider and no hosting country or region is named
  anywhere on that page.** A claim of GDPR compliance with no named auditor and no stated hosting
  location is not verifiable.

- imoo's **EU store** privacy policy is a generic e-commerce policy covering the shop, not the watch. It
  states: *"your information will be transferred outside of Europe, including to Canada and the United
  States."* It names no data controller entity, gives no retention period, and **contains no section on
  children's data at all**.

- imoo's global site policy names the controller as **IMOO INTERNATIONAL PTE. LTD.** (Singapore) and says
  information *"may be transferred to and processed in one or more countries or regions outside of your
  country of residence"*, with retention only *"for as long as necessary"*. It explicitly states it does
  **not** cover imoo's products — i.e. not the watch and not the app.

- **No privacy policy covering the watch or the companion service could be located.** For a device
  streaming a child's continuous location, that is the single most serious documentation gap here.

- The Play/App Store developer of record is **PT. IMOOLINK GLOBAL TRADING** (Indonesia), a third distinct
  legal entity from imoo International Pte Ltd (Singapore) and the EU shop operator. Which of them is the
  GDPR controller for a Romanian child's location data: **UNKNOWN**.

**App-declared data handling** (iOS App Privacy, RO storefront, accessed 2026-08-19):

- *Linked to the user:* phone number, contacts list, user ID
- *Not linked to the user:* **precise and coarse location**, **photos, videos and audio**, device ID,
  usage data, diagnostics

### Covert remote-listen: not documented — but its absence is not confirmed

No imoo page, no user-manual excerpt retrieved, and none of the six reviews read describes a listen-in,
ambient-audio, "voice monitor" or silent-call feature. This distinguishes the X10 from the SeTracker/Wonlex
class, where covert listening is a standard advertised function and was weaponised in the Black Hat 2026
research. However, imoo publishes no complete parent-app feature reference, so **"the X10 has no covert
remote-listen capability" is unverified**, and there is consequently no documented way to lock such a
feature. If this matters, ask imoo support in writing before ordering.

**One security-relevant field complaint, from Romania (one report):** the owner says the SOS function is
theatre —

> *"Funcția de SOS e la vrăjeală nu ajuta la nimic face doar copilul un C cu degetul pe ecran și după suna
> la numărul setat de tine in aplicație."*
> ("The SOS function is a con, it doesn't help at all — the child just draws a C with a finger on the
> screen and then it calls the number you set in the app.")

That is arguably a description of SOS working as designed rather than a defect, but it tells you the
gesture is easy to trigger accidentally and that no wider escalation happens.

## Reality check

- **"Ultra-long battery life"** means: no number, on any imoo storefront, for a 740 mAh cell driving a
  1.6" AMOLED and a Snapdragon Wear 4100. Independent German reviewers measure roughly **one day under
  heavy use and about two days typically**, on unstated tracking intervals, on German networks. Plan on
  nightly charging.
- **"Ideal for children and teenagers aged 7 to 15"** means: a **67 g**, **56 x 43 x 14 mm** device that
  five independent German reviewers describe as bulky, and that two of them call borderline or too large
  for slim children's wrists.
- **"See which floor your child is on"** (barometric floor detection) means: the one Romanian owner on
  record says *"Reclama este falsă… aplicația îți arată doar pozitia in 2D"* — one report, uncorroborated,
  and contradicted by three German reviewers who found positioning reliable indoors.
- **"Widest band list of any watch found"** means: excellent where it counts (B20, B3, B1, B8), plus a
  long tail of North-American bands (B12/13/17/26/66) that are irrelevant in Romania, plus **B28 that buys
  nothing** because Romanian 700 MHz is 5G n28, and **minus B7**.
- **"GDPR compliant, data stored locally"** means: no named auditor, no named hosting region, no privacy
  policy for the watch service at all, and a store policy that says data goes to Canada and the United
  States.
- **"EUR 299"** means EUR 299 from imoo directly, or **3,579.99 RON (~EUR 700) from the only eMAG listing
  that is actually this watch**.

## What users say

### Works

> **Popa Aurel**, Romania, eMAG.ro, **13 Aug 2026**, 1 star — the same reviewer who condemns the rest of
> the device:
>
> *"Când suni normal este ok."*
> ("When you make a normal call it's fine.")
>
> This is the load-bearing sentence in the entire Romanian evidence base for this model: **voice calling
> works on a Romanian network.** *(1 report)*
> <https://www.emag.ro/smartwatch-pentru-copii-imoo-x10-4g-gps-apeluri-video-si-vocale-camere-duale-5-mp-8-mp-amoled-1-6-32-gb-monitorizare-ritm-cardiac-sos-ip68-20-m-gri-imoo-x10-4g-grey-32gb/pd/DP61WS2BM/>

> **inside-digital.de**, Germany, 20 Nov 2025:
> *"Die Ortung funktioniert ohne Fehl und Tadel, auch in Innenräumen wurde die Watch X10 stets
> lokalisiert."*
> ("Positioning works flawlessly; even indoors the Watch X10 was always located.")
> *(1 of 3 German reports positive on positioning; see also familie.de 29 Jun 2026 and netzwelt.de
> 1 Aug 2026)*

> **connect.de**, Germany, 14 Nov 2025, on the battery clearing a day with real use:
> *"Wichtig ist hier aber die Feststellung, dass die Kinder-Smartwatch auch mit mehreren (kurzen)
> Videocalls und GPS-Tracking problemlos einen Tag schafft."*
> ("The important observation here is that the kids' smartwatch manages a day without problems even with
> several short video calls and GPS tracking.")
> *(corroborated in substance by 4 other German reviews)*

### Fails

> **Popa Aurel**, Romania, eMAG.ro, **13 Aug 2026**, **1 star**, title *"Foarte slab"* ("Very poor"),
> marked as an eMAG user review. **This is the only first-hand Romanian report of the X10 in existence,
> and the listing's overall rating is 1.00 / 5 from this single review. Do not generalise from it — it is
> one report, from one unit, on one network, by one person.** Full text:
>
> *"Când suni cu video semnalul foarte slab se întrerupe mereu. Când suni normal este ok. Aplicațiile
> foarte puține și prost făcute. Urmărirea prin GPS are erori destul de mari 17 metri sau mai mult.
> Reclama este falsă că poți să vezi pozitia pe etaje, aplicația îți arată doar pozitia in 2D. Aplicația
> de fitness se blochează după 60 minute și nu mai poate fii folosită în acea zi, am ince cat sa comunic
> cu cei de la suport la ei și nu ai cu cine sa te înțelegi și nu are nici o opțiune in setări să scoți
> aceasta eroare de software. Practic daca vrei sa faci mai multe activități fizice care însumate
> folosesc aplicația de fitness chiar daca este in background după 60 minte te limitează nu se mai poate
> folosii. Funcția de puls nu este deloc precisă are erori mari. Nu recomand deloc acest ceas. Funcția de
> SOS e la vrăjeală nu ajuta la nimic face doar copilul un C cu degetul pe ecran și după suna la numărul
> setat de tine in aplicație."*
>
> **English translation:** "When you make a video call the signal is very weak and it keeps dropping. When
> you make a normal call it's fine. The apps are very few and badly made. GPS tracking has fairly large
> errors, 17 metres or more. The advertising is false that you can see the position by floor — the app
> only shows you the position in 2D. The fitness app freezes after 60 minutes and can't be used again
> that day; I tried to communicate with their support and there's no one there you can get through to,
> and there isn't any option in the settings to remove this software error. Basically if you want to do
> several physical activities which together use the fitness app, even if it's in the background, after
> 60 minutes it limits you and it can't be used any more. The pulse function is not precise at all, it
> has big errors. I do not recommend this watch at all. The SOS function is a con, it doesn't help with
> anything — the child just draws a C with a finger on the screen and then it calls the number you set in
> the app."
>
> *(1 report. 2 photos attached. Purchased at 3,579.99 RON from seller DeiTim.)*

### Corroborating / contradicting Romanian evidence — searched for, and this is all there is

There is **no second Romanian report of the X10**, anywhere. No other eMAG review, no Romanian tech review,
no Romanian forum thread. Reddit, forum.softpedia.com, Trustpilot and several Romanian retailers were
inaccessible to this research (documented in `OPTIONS.md`), so the absence is partly an artefact of the
search environment. Two adjacent Romanian reports exist at the **app** level, **model unknown**, so they
corroborate the *service* complaints but not the *device* ones:

> **Serban12345**, Romanian App Store, **20/05/2025**, title *"Imoo kid watch - I don't recomand"*
> (written in English):
> *"Very poor signal, loses time zone and connectivity most of the time. Cannot make a normal, nor a video
> callGPS also loses connectivity."*
>
> — **Contradicts** Popa Aurel on normal voice calls, and **corroborates** him on video calls and GPS.
> Different model, 15 months earlier. *(1 report)*

> **Vlad Sabau.ro**, Romanian App Store, **13/07/2025**, title *"Junk"*:
> *"Can not login with the phone number because o do not get the sms confirmation code."*
>
> — the registration failure this whole project screens for. *(1 report, model unknown)*
> <https://apps.apple.com/ro/app/imoo-watch-phone/id1057845227> — overall **2.5 / 5 from 4 ratings** in
> the Romanian storefront.

Plus, from this project's own discovery sweep (not re-verified here): a Romanian Play Store review dated
**2026-07-13, 3 stars** — *"slabă cu locația, și tot apare alt fus orar deși este setat corect nu se
sincronizează"* ("poor with the location, and a different time zone keeps appearing even though it's set
correctly, it doesn't sync") — and one **2025-04-22, 5 stars**, *"Excelent"*.

**Tally for Romania across all imoo models:** five dated Romanian reports total. Three complain about
location quality, two about video calls, one about time-zone desync, one about SMS registration failing,
one about normal voice calls failing, one says normal voice calls work, one says "Excellent". **One** of
the five is about the X10.

## Age fit — is it too large for a 7-year-old?

imoo markets the X10 as *"Ideally suited for children and teenagers aged 7 to 15"* (EU store) / *"Kinder
und Jugendliche im Alter von 7 bis 15 Jahren"* (German page). Note that US marketplace listings for the
same watch variously claim "Ages 3-12" and "Ages 4-12" — marketplace age ranges on this product are not
reliable.

**Measurements.** imoo publishes dimensions but **not weight**:

- Body: **56.29 x 43.0 x 13.9 mm** (imoo). connect.de measured **54 x 43 x 14 mm**; inside-digital.de
  gives 5.5 x 4.4 cm.
- With band: 240.45 x 43 x 13.9 mm (imoo)
- **Weight: 67 g** measured independently by **netzwelt.de** and **connect.de**; **67.5 g** by
  **dadslife.de**. Three independent measurements agree.

**Reviewer comment on fit — six independent hands-on reviews, four of them negative:**

> **netzwelt.de**, 1 Aug 2026: *"Die Uhr ist ganz schön klobig für ein Kinderhandgelenk."* ("The watch is
> pretty chunky for a child's wrist.") and *"Das eckige Gehäuse ist dick gepanzert und wirkt schon am
> Erwachsenenhandgelenk wuchtig."* ("The square case is thickly armoured and looks bulky even on an
> adult's wrist.")

> **inside-digital.de**, 20 Nov 2025: *"Der wertig gearbeitete Korpus wirkt mit Maßen von 5,5 x 4,4 x 0,8
> cm an schlanken Kindergelenken wie ein Klotz"* ("The well-made body, at 5.5 x 4.4 x 0.8 cm, looks like a
> block on slim children's wrists") and *"Schon Erwachsene spüren den Druck auf dem Handgelenk deutlich."*
> ("Even adults clearly feel the pressure on the wrist.") Its con list reads: *"Umfang und Gewicht für
> zarte Kindergelenke grenzwertig"* ("circumference and weight borderline for delicate children's wrists").

> **connect.de**, 14 Nov 2025: *"Die imoo Watch Phone X10 trägt dick auf und wirkt an Kinderhandgelenken
> sehr massiv - wer mit dieser Smartwatch liebäugelt, sollte sie vorher idealerweise ausprobieren, um
> spätere Enttäuschungen zu vermeiden."* ("The imoo Watch Phone X10 is bulky and looks very massive on
> children's wrists — anyone considering this smartwatch should ideally try it on beforehand to avoid
> later disappointment.")

> **familie.de**, 29 Jun 2026: *"Die Uhr ist vergleichsweise klobig und für zarte Kinderhandgelenke etwas
> groß."* ("The watch is comparatively chunky and somewhat large for delicate children's wrists.")

> **dadslife.de**, 24 Nov 2025 — the dissenting view, tested on a **9-year-old**: found it *"relativ groß"*
> but at *"nur knapp 70 g"* it was *"sehr angenehm"* ("very pleasant") to wear. It still warns the watch
> can look *"klobig, wodurch die Uhr bei kleineren Kindern riesig wirken kann"* ("chunky, so the watch can
> look enormous on smaller children").

> **Tech Edition**, Singapore, 15 Jul 2025 — also dissenting: *"The rounded body sits comfortably on
> smaller wrists, and the soft strap ensures long-wearing comfort."*

**Assessment.** For a 7-year-old at the very bottom of imoo's own stated range, the evidence leans clearly
negative: **four of six reviewers describe it as bulky on a child's wrist, and two specifically flag it as
borderline for slim wrists**. The single positive hands-on report is from a 9-year-old. At **67 g** it is
roughly the mass of a full-size adult sports watch.

One nuance cuts the other way on *style*: netzwelt.de concludes the X10 suits **younger** children, not
older ones — *"Wir finden, die Uhr ist eher etwas für Kinder im Grundschulalter, also von 6 bis 10 Jahren.
Für ältere Kinder ist das Design vermutlich zu kindlich."* ("We think the watch is more something for
primary-school-age children, so 6 to 10. For older children the design is probably too childish.") So
imoo's 7-15 framing is wrong at *both* ends: the design reads too young for teenagers, and the physical
bulk reads too large for the smallest 7-year-olds.

**Practical conclusion: do not order this for a 7-year-old sight-unseen.** connect.de's advice — try it on
first — is the correct handling, and it makes the return window (14 days EU distance selling) load-bearing.

## Price sanity — documenting the spread

| Channel | Price | Colour / SKU | Seller | Accessed |
|---|---|---|---|---|
| **imoo EU store** | **EUR 299.00** (no struck-through price) | Pink, White, Grey | imoo, direct. Free standard shipping, 3-7 business days, **ships to Romania** | 2026-08-19 |
| imoo Germany (via reviews) | EUR 299 | — | quoted identically by connect.de, netzwelt.de, inside-digital.de, dadslife.de and familie.de (UVP) | 2025-11 to 2026-08 |
| **eMAG.ro** | **3,579.99 RON** (from 3,630.00 RON) | Grey, 32 GB — the kids' 4G/GPS X10 | **DeiTim** (marketplace, 4.5 rating). "Ultimele 3 produse" | 2026-08-19 |
| **MediaMarkt.de** | **EUR 239.00** (UVP 299 €, −20%) — **cheaper than imoo's own store** | Silber (also Rosa, Weiß) | MediaMarkt first-party, zero product reviews | 2026-08-19 (evidence sweep) |
| eMAG.ro (re-check) | **3,630.00 RON** — the discount above has lapsed | Grey | DeiTim | 2026-08-19 (evidence sweep, later same day) |
| eMAG.ro | 1,610.50 RON (from 1,741.30 RON) | Pink | **OVOLT România**. **See caveat below** | 2026-08-19 |
| Singapore | S$499 | — | hardwarezone.com.sg, 9 Jun 2025 | 2026-08-19 |

**The 1,610 RON figure does not survive checking, and `OPTIONS.md` should be corrected.**

The eMAG listing at 1,610.50 RON is titled **"Smartwatch Imoo X10, silicon, roz, pentru femei"** ("Imoo
X10 smartwatch, silicone, pink, **for women**"). Its specification block lists only *"Stil: Sport"* and
*"Material curea/bratara: Silicon"*. It states **no 4G, no GPS, no SIM, no cameras, no battery capacity,
and no children's features whatsoever.** It has zero reviews. Whether it is a mis-catalogued kids' X10, a
strap, or a different product entirely is **UNKNOWN** — but it cannot be cited as a price for the imoo
Watch Phone X10 kids' watch on the evidence its own page provides.
<https://www.emag.ro/smartwatch-imoo-x10-silicon-roz-pentru-femei-1377319/pd/DWXVT83BM/>

**Two further corrections to `OPTIONS.md`:**

1. It records the X10 at "1,610 RON **1P**". Neither eMAG listing is first-party today. The kids' watch is
   sold by **DeiTim**; the pink listing by **OVOLT România**. The "eMAG 1P" signal — which `OPTIONS.md`
   itself identifies as the meaningful evidence of a real import and warranty arrangement — **does not
   apply to the X10**.
2. The real, documented Romanian price for this watch is therefore **3,579.99 RON**, not 1,610 RON.

**The spread that actually exists.** EUR 299 direct from imoo versus 3,579.99 RON on eMAG. At a rough
5.1 RON/EUR (rate not sourced in this research), that is **approximately EUR 700 — about 2.3x imoo's own
price** for an identical device, from a marketplace seller with three units left, versus a vendor that
ships to Romania for free in 3-7 days.

**Buy from imoo's EU store.** The only argument for eMAG is Romanian consumer-law recourse (24-month
conformity warranty under OUG 140/2021, 14-day return) — and EU distance selling gives the 14 days
regardless. A ~EUR 400 premium does not buy EUR 400 of extra protection.

## Sources

All accessed **2026-08-19** unless otherwise noted.

**Manufacturer (primary):**

- <https://www.imoo.com/eu/products/x10> — full X10 spec table: LTE FDD B1/2/3/4/5/8/12/13/17/18/19/20/26/28/66, TDD B38/40/41, WCDMA B1/2/4/5/8, GSM B2/3/5/8, VoLTE "Supported", Snapdragon "SW-4100", 1 GB/32 GB, 1.6" AMOLED, 740 mAh, GNSS + barometer + WiFi + LBS, 8/5 MP, 56.29x43.0x13.9 mm, 20 m ISO 22810:2010, age 7-15, CaremeOS, WiFi 2.4/5 GHz, BT 4.2. **No runtime figure and no weight.**
- <https://www.imoo.com/de/products/x10> — independent confirmation of the identical band list on a second imoo storefront; age "7 bis 15 Jahren"; **"Ultralange Akkulaufzeit"** with no number.
- <https://www.imoostore.com/eu/products/imoo-smartwatch-x10> — **EUR 299.00**; colours; box contents incl. SIM Card Picker; "Ultra-long battery life"; "silicon anode battery technology"; "Ideally suited for children and teenagers aged 7 to 15"; carrier list naming no Romanian operator.
- <https://www.imoostore.com/us/products/imoo-smartwatch-x10> — "flip & detach" design (watch body detaches, not the camera); "Bump and add friends"; chat/emoji; "kid-friendly closed network"; no runtime figure.
- <https://www.imoo.com/eu/countrys> — supported countries: DE, UK, FR, IT, IE, ES, PL (+ SG, AU, MY, ID, TH, VN, IN, US). **Romania absent. No carriers named.**
- <https://www.imoostore.com/eu/pages/shipping-policy> — verbatim country list **including Romania**; free standard shipping; 3-7 business days.
- <https://www.imoo.com/eu/imoo-app> and <https://www.imoo.com/en/imoo-app> — parental controls: Class Mode, "Apps Restrictions", "Unknown Caller Alert", "Find My Watch", "Health Management" screen-time reports. **No camera / chat / friend-bump disable documented; no listen-in feature mentioned.**
- <https://us.imoostore.com/blogs/class-mode/what-is-class-mode> (article dated **9 Sep 2020**) — Class Mode rejects calls and messages, watch "can only tell the time"; parent-contact exception. Does not address camera/games/chat.
- <https://www.imoo.com/en/why-imoo> — imoo's privacy marketing claims: "All data on imoo devices is securely stored locally"; GDPR compliance asserted. **No auditor, no hosting region, no provider named.**
- <https://www.imoostore.com/eu/policies/privacy-policy> — EU **store** policy: "your information will be transferred outside of Europe, including to Canada and the United States"; no controller identified; no children's-data section.
- <https://www.imoo.com/en/privacy-policy> — controller **IMOO INTERNATIONAL PTE. LTD.**; transfers "outside of your country of residence"; retention "as long as necessary"; explicitly does not cover imoo products/app.

**Romanian evidence:**

- <https://www.emag.ro/smartwatch-pentru-copii-imoo-x10-4g-gps-apeluri-video-si-vocale-camere-duale-5-mp-8-mp-amoled-1-6-32-gb-monitorizare-ritm-cardiac-sos-ip68-20-m-gri-imoo-x10-4g-grey-32gb/pd/DP61WS2BM/> — **3,579.99 RON**, seller **DeiTim**, "Ultimele 3 produse", nano-SIM, IP68 20 m; **1.00/5 from 1 review**; full verbatim text of the Popa Aurel review, 13 Aug 2026. (Note: eMAG's search-results page rendered a "11 reviews" badge against this SKU while the product page itself shows one review; the product page is treated as authoritative and the discrepancy is **unresolved**.)
- <https://www.emag.ro/smartwatch-imoo-x10-silicon-roz-pentru-femei-1377319/pd/DWXVT83BM/> — 1,610.50 RON, seller **OVOLT România**, titled "pentru femei", **no 4G/GPS/SIM/camera in its specs**, zero reviews; 24-month OUG 140/2021 warranty, 14-day return.
- <https://apps.apple.com/ro/app/imoo-watch-phone/id1057845227> — app live in the **Romanian** App Store; seller **PT. IMOOLINK GLOBAL TRADING**; v9.36.70 updated 27 July; **2.5/5 from 4 ratings**; Romanian not among 16 supported languages; App Privacy declarations; verbatim reviews from **Serban12345 (20/05/2025)** and **Vlad Sabau.ro (13/07/2025)**.

**Independent reviews (battery, size, positioning):**

- <https://www.connect.de/testbericht/imoo-watch-x10-kinder-smartwatch-test-3211204.html> — Andreas Seeger, DE, **14 Nov 2025**, EUR 299. Battery 1 day intensive / 1.5-2 days normal; video-chat drain; ~1.5 h full charge; **67 g**, 54x43x14 mm; "sehr massiv" on children's wrists, try before buying.
- <https://www.netzwelt.de/imoo-watch-phone-x10/testbericht.html> — Birte Keller, DE, **1 Aug 2026**, EUR 299. **"circa zwei Tage"**; datasheet "Laufzeit: 2 Tage"; **67 g**, 240.45x43.0x13.9 mm; "klobig für ein Kinderhandgelenk"; suits 6-10; app-install control; positioning "besser als bei einem AirTag".
- <https://www.inside-digital.de/tests/imoo-watch-x10-perfekt-fuers-kind-oder-zu-viel-des-guten> — Matthias Wellendorf, DE, **20 Nov 2025**, EUR 299, **67 g**. ~3 days normal use; "wie ein Klotz" on slim children's wrists; "Umfang und Gewicht für zarte Kindergelenke grenzwertig"; indoor positioning always worked.
- <https://dadslife.de/produkte/kinder-smartwatch-imoo-x10/> — Kurt Vierthaler, DE, **24 Nov 2025**, EUR 299, child aged **9**, **67.5 g**. Battery "zwischen ein bis zwei und mehreren Tagen"; comfortable but can look "riesig" on smaller children.
- <https://www.familie.de/testberichte/imoo-x10-im-test-die-smartwatch-die-uns-eltern-beruhigt-und-unser-kind-begeistert--01KMYV2ADVXSBS2HG8AKMZH9EG> — Charoline Bauer, DE, **29 Jun 2026**, EUR 299 UVP. "über mehrere Tage" but more charging with frequent calls; spec box prints the **unattributed "bis zu 95 Std. Laufzeit"** figure; "klobig und für zarte Kinderhandgelenke etwas groß"; positioning "wirklich zuverlässig"; controls: Klassenmodus, Schlafmodus, App-Verwaltung, Bildschirmzeit-Kontrolle.
- <https://www.techedt.com/imoo-watch-phone-x10-review-possibly-the-best-kids-smartwatch-for-families-today> — Vincent Wee, Singapore, **15 Jul 2025**. "comfortably lasts a full day of moderate usage—calls, location updates, and camera use included"; "sits comfortably on smaller wrists".
- <https://www.hardwarezone.com.sg/lifestyle/photography/tech-news-imoo-watch-phone-x10-features-price> — Ken Wong, Singapore, **9 Jun 2025**. **S$499**; weight given only as an unofficial ~60-70 g; floor-level tracking claim; no runtime figure.
- <https://sg.style.yahoo.com/imoo-watch-phone-x10-review-120036081.html> — Rex, Singapore, **6 Jun 2025**. Tested with an 8-year-old; "noticeably slimmer" than its predecessor; no battery figure.

**Security research (platform-level, imoo not named):**

- <https://tanyagoodin.com/2026/08/children-smartwatch-cybersafety/> — **7 Aug 2026**. Vangelis Stykas and Felipe Solferini at Black Hat; three Shenzhen backends "YiQingTeng (also known as Wonlex, with its SETracker app), NewGPS2012, and SinoTrack"; 70+ devices analysed; eavesdropping, photo/video capture, GPS spoofing, SOS-contact replacement. **imoo / BBK not mentioned.**

**Retrieval failures — recorded rather than guessed:**

- `techbuzzireland.com` (Irish X10 review, 23 Jul 2026), `sethlui.com`, `scribblinggeek.com`, `smartzone.de`, `imoo.me/pages/faqs`, `amazon.co.uk` and `play.google.com` all returned 403 / connection refused / truncated content. The Android Play listing details and the imoo FAQ — which might document a location update interval and any listen-in feature — could not be verified.
- The WebSearch budget for this session was exhausted, so no further search-led corroboration was possible. The absence of a second Romanian X10 report is partly an artefact of this and of the access blocks recorded in `OPTIONS.md`.
- **Marketplace SEO content deliberately excluded:** AliExpress and Alibaba "wiki"/buying-guide pages asserting "14 hours of active GPS usage per charge", "nearly four full days" and "up to 72 hours". Undated, unattributed, and the first falsely claims to align with a manufacturer figure that does not exist.

## Evidence sweep (2026-08-19)

*Scope: every dated, model-verified first-hand X10 observation findable in any language, using the
methods proven on the Z7 sweep. Method: Chrome (logged-in session) for Amazon DE/ES/FR/PL/UK,
Trustpilot (`__NEXT_DATA__`), eMAG.ro, Allegro.pl, Alza.cz, Heureka.cz, MediaMarkt.de, Fnac.fr and
inside-digital.de; Google Play `batchexecute` `UsvDTd` RPC across 18 locales (1,213 unique reviews
of `com.imoo.watch.global` pulled this pass); Apple `rss/customerreviews` across 29 storefronts
(231 unique reviews); `yt-dlp` for 17 X10 video transcripts and full comment trees. **Every quote
below was read on the page or in the downloaded artifact.** Amazon `/product-reviews/` deep pages
force re-authentication (`openid.pape.max_auth_age=3600` -> ap/signin) even in the logged-in
session; no credentials were entered, so only the `/dp/`-embedded review widgets were readable --
that is the binding coverage limit on the merged pool.*

### Headline

**The clean, model-verified X10 owner corpus now stands at 11 people (from ~1), plus 4 flagged as
incentivised or astroturf-shaped and excluded.** Only **one** owner anywhere attaches a number to
the battery ("1 bis 2 tage"), and **nobody** -- owner or reviewer -- states a tracking interval or
an intermediate percentage. The contamination thesis is now quantified rather than suspected, and
the previously-withdrawn "seeded YouTube comment sections" claim is **reinstated with URLs,
quotes and a named account**.

### The contamination, quantified

- **Amazon.de merged pool: 3,759 ratings shared across X10, Z1 and Z3 listings.** The flagship
  "imoo X10" listing (ASIN B0FNCZP34X, seller IMOO Direct, 4.0 stars) displays top reviews tagged
  `Colour Name: Z3-pink`, `Z3-blue`, `Z1-green`, `Z1-pink` -- **eight of the nine readable German
  top reviews on the "X10" page are Z1/Z3 reviews.** The identical 3,759 pool renders on imoo's
  Z1 and Z3 listings. Amazon's "Customers say" AI summary ("battery life... mixed", 141 battery
  mentions) summarises three different watches and is unusable.
- **Pools are per-marketplace.** The same ASIN B0FNCZP34X shows a separate, clean 13-rating pool
  on amazon.pl / amazon.fr (0 local reviews; 5 readable US reviews). amazon.es/it carry a clean
  Style-Name-tagged listing (B0FSR5ZYVK, `Style Name: X10`, 2 ratings).
- **Amazon Vine is inside the US X10 pool**: 2 of the 5 readable US reviews are "Vine Customer
  Review of Free Product" (4 Jan 2026; 10 Feb 2026). Both praise battery ("lasting a couple of
  days between charges" / "battery life is impressive"). **Incentivised -- excluded.**
- **An incentivised DE listing exists**: "imoo Kids Watch X10 ... Telekom SIM-Karte, 30 EUR
  Amazon-Gutschein nach Registrierung" (amazon.de search, 2026-08-19) -- a voucher-for-registration
  bundle. Any review stream it accumulates should be treated as compensated.
- **Trustpilot `imoo.me` has grown to 271 reviews, 4.7 stars.** Exactly **2** name the X10, both DE,
  both 5-star, both thin single-purpose accounts, neither with any figure (Kaethe Isabella, 4-review
  acct, 2026-07-05; Nicole Flamm, 2-review acct, 2026-06-29 -- *"Ein wirklich tolles Produkt!"*).
  4 reviews on the profile mention a **free gift shipped with the order** (e.g. "S G", DE,
  2026-06-29). No weight given to any of them.
- **techbuzzireland.com's X10 "review" (23 Jul 2026) is PR**: its battery content is the verbatim
  imoo launch bullet *"Upgraded 1+32GB ROM & 3-day battery life"* plus a BUY link. This is the
  traceable source of the "3 days" claim circulating in the press.

### Seeded YouTube comment sections -- the withdrawn claim, reinstated with evidence

Two sponsored X10 videos (both carry `imoostore.com` affiliate links in their descriptions) have
comment sections that are not organic:

1. **The Q, "Why I Chose the imoo Smartwatch X10 for My Kid"**
   (`youtube.com/watch?v=XhNNjRRPXa4`, 14 May 2026, 531k views): **925 comments, 904 with zero
   likes, 157 zero-like comments reciting product features** in marketing register from
   Firstname-Lastname-suffix handles -- e.g. *"High-precision GPS huge deal where we live"*, *"Had
   worries re winter weather killing electronics -- seems unfounded phew"*, *"Battery lasts longer
   than our old TickTalk 5 somehow... anyone else notice?"*. (Comment timestamps from yt-dlp are
   quantised from relative dates, so posting-date clustering is **not** used as evidence here.)
2. **TutopolisTV / TuToTV (DE), "Beste Kinder-Smartwatch? Warum die imoo Smartwatch X10..."**
   (`youtube.com/watch?v=FhRezjW0LLI`, 27 May 2026, 95k views): 76 comments, of which **19 -- one
   in four -- are by the single account `@pinghou-h4s`**, which answers every question and
   criticism in fluent German *and* English, always pro-imoo, claiming ownership (*"Mein Kind
   nutzt die imoo"*), quoting runtime (*"the battery generally lasts 2-3 days"*), and asserting
   *"I think imoo's data storage is based in Germany"* -- a claim no imoo document supports
   (`data_region: UNKNOWN` stands). **The same account posts 8 comments on The Q's video.**
   A zero-history account "DorisBrahms" supplies *"der Akku haelt locker 3 Tage durch"*.

**Every battery/GPS claim from these comment sections is discarded.** The prior withdrawal was
correct at the time (no URL); these two URLs and the named account are now the evidence.

### The table -- model-verified X10 observations

`Ver` = how the model was verified. FLAG = flagged, excluded from the clean count.

| # | Date | Source | Country | Stars | Ver | What was observed |
|---|---|---|---|---|---|---|
| 1 | 2026-08-13 | Popa Aurel, eMAG.ro (re-verified this pass: still the only RO review; price now 3,630 RON) | **RO** | 1 | X10-titled listing, purchase-marked | Video calls drop constantly; normal voice OK; GPS error 17 m+; no floor display; fitness app locks after 60 min/day; HR imprecise; SOS = "draws a C... then calls the number set in the app" |
| 2 | 2026-05-09 | "Kisa kisskiss", Google Play, de-DE | DE | 1 | **names the X10 in text** ("Haben die x10") | **"der Akku haelt auch nur 1 bis 2 tage"** -- the only owner battery figure in existence. Also: app shows *yesterday's* position -- *"mir wird angezeigt wo es gestern war... Erst durch video anruf sehe ich wo mein kind ist"* -- live view only via calling; *"Wenn man anruft zeigt es den Ort genau an"* |
| 3 | 2025-10-08 | "athornz", Google Play, en-GB storefront (writes of Singapore schools), app v9.29.70 | SG | 3 | names the X10 ("Using X10") | "Good built quality and tracking"; wishlist: >1 admin, photo export, video-call for approved (not only bound) contacts, WhatsApp. **Oldest identified X10 owner** (~10 months before this sweep) |
| 4 | 2026-06-24 | ATTIAS, Amazon.es listing B0FSR5ZYVK | IT | 5 | `Colour: X10 Grey / Style Name: X10`, VP | *"precisione gps ottima"* -- model-tagged positioning positive |
| 5 | 2026-06-02 | Amazon Customer, US pool (readable via .de/.pl/.fr widgets) | US->CA | 5 | `Colour Name: x10-grey`, VP | Works *"flawlessly with my local Canadian SIM"*; **not carrier-locked**; imoo support confirmed bands pre-purchase |
| 6 | 2025-12-30 | Melissacolorful, US pool | US | 4 | X10 listing, VP | **Region split is real**: the overseas X10 *"is limited to only overseas"* -- cannot contact family in China; returned it |
| 7 | 2026-04-09 | Alexandra Waddell, US pool | US | 3 | X10 listing, VP | US activation friction: must be added as a *phone* line (Verizon, $65/month); "my 9yo loves this" |
| 8 | 2025-12-22 | JANINA GAWEL, Amazon (UK-readable pool B0FNDCV1WY) | PL | 5 | `Colour: White / Style Name: X10`, VP | Cosmetic praise only; thanks the seller for *"dodatkowe niespodzianki w paczce"* (extra surprises in the package) -- mild freebie signal, kept but weightless |
| 9 | 2026-06-10 | Hasan, Amazon.de (same pool) | DE | 5 | `Style Name: X10`, VP | "Sehr gut" -- no content |
| 10 | 2026-03-15 | Amazon Kunde, Amazon.de (X10-only pool) | DE | 5 | X10-only listing, VP (no tag string rendered) | Asks for a **replacement strap securing part** -- earliest X10 hardware-wear signal (~4 months in market). Not a failure report per se |
| 11 | ~2026 (undated comment) | @ADHDlife-hack, comment on HardReset.Info unboxing (`it25w6NH5eg`, non-sponsored channel) | US | -- | states purchase ("I purchased x10") | *"in the U.S. the carrier is the problem... I cannot activate the usim"* -- activation failure, carrier-dependent. Weak tier (YouTube comment), non-seeded channel |
| FLAG | 2026-01-04 | Katherine A., Amazon US | US | 5 | X10, **Vine free product** | "battery... lasting a couple of days between charges" -- **incentivised, excluded** |
| FLAG | 2026-02-10 | Amazon Customer, Amazon US | US | 5 | X10, **Vine free product** | "battery life is impressive", "GPS... updates reliably" -- **incentivised, excluded** |
| FLAG | 2026-07-05 / 2026-06-29 | Kaethe Isabella / Nicole Flamm, Trustpilot imoo.me | DE | 5/5 | name the X10 | Generic praise, no figures, thin accounts on imoo's own profile -- **no weight** |

Plus **4 purchase-verified Allegro.pl ratings** (silver x1, pink x3, all 5-star, seller ELECTROpl at
1,199 zl) with **no text at all** -- counted as existence-of-sales, not as observations.

**Clean count: 11 people** (rows 1-11), of whom **8 say anything substantive**. For comparison,
the pre-sweep file rested on 1 owner (Popa Aurel) plus editorial reviews.

### Battery -- what the sweep adds

Two editorial battery verdicts spoken on camera that exist in no text source:

> **TechGround (ES), "Probamos EL MEJOR SMARTWATCH INFANTIL | Review IMOO X10"**, 26 Jul 2026,
> 21-min hands-on (auto-transcript): *"all this power comes at a price: battery life... The watch
> can easily handle **a full day's use at school and extracurricular activities, but you will
> have to charge it every night**. The real-time GPS and 4G do drain the battery, but fortunately
> **it only takes an hour to charge**... the daily charging requirement is practically
> non-negotiable."* (Amazon affiliate links in description; tone independent.)

> **Todo Smartwatch (ES)**, 17 Apr 2026 (transcript): *"la bateria a este reloj la vas a tener que
> cargar **practicamente todos los dias**... si esta por la manana y por la tarde fuera, la bateria
> le va a durar sin problema... **En cuestion de una hora mas o menos lo tienes cargado del 0 al
> 100%**."* (Same publisher family as "TodoSmartwatch LAB" -- the two channels count as **one**
> source.)

Both agree with connect.de, smartzone and Luecke: **one real day, nightly charge, ~1 h to full.**
The only owner figure (row 2, "1 bis 2 tage") sits exactly on imoo's own "1-2 days" listing claim.

**On the school-day question and the Z7 comparison the brief asks for: unproven, but parity is
the honest reading.** No X10 owner or reviewer anywhere publishes a %-remaining at any hour, so
the Z7's ~3.6-6 %/awake-hour cannot be beaten or matched *on evidence*. What can be said: the X10
drives a 1.6" AMOLED and a Snapdragon Wear 4100 from the **same 740 mAh cell** as the Z7, four
German reviewers land on ~1 day of real use (vs the Z7's one lab figure of 12% left after 24 h),
and the bigger case does **not** hold a bigger battery. Nothing found suggests the X10 outlasts
the Z7; the hardware arithmetic suggests slightly worse under load, and smartzone's ~1%/min video
call figure remains the only hard consumption number.

### Position quality -- owner evidence both ways, still no measurement

- For: ATTIAS (IT, model-tagged): "precisione gps ottima". athornz (SG): "good... tracking".
- Against: Popa Aurel (RO): 17 m+ error, 2D only. **Kisa kisskiss (DE, names X10): the app shows
  stale/yesterday's position unless the parent places a call** -- a German echo of the staleness
  the Romanian Play review complains of ("slaba cu locatia"), and consistent with a pull-based
  fix model rather than continuous tracking.
- Editorial DE positives (inside-digital A, familie.de, netzwelt) stand as recorded. Luecke
  (inside-digital B) praises the 14-day history but publishes no accuracy figure either.
- **No quantified indoor/cold-fix/drift test of the X10 exists in any language found.** The
  barometric-floor headline feature still has one contradicting owner and zero confirming ones.

### SOS -- mechanism settled from imoo's own copy

imoo X10 EU product page (`imoo.com/eu/products/x10`, read 2026-08-19), verbatim:

> *"SOS emergency call -- Quick and reliable: kids can **draw a 'C' on the screen** to instantly
> alert parents in an emergency."*
> *"Note: These functions are available **after being enabled in the imoo app**. Please refer to
> actual usage conditions."*

Amazon.es imoo copy, same mechanism: *"Dibuje una C en la pantalla del reloj y se mostrara el
contacto de emergencia."* Image alt text on the EU page: *"SOS emergency call draw C on screen to
alert parents **enabled in imoo app**"*.

Three consequences. (1) The X10's SOS is a **screen gesture, not a hardware button** -- identical
in kind to the Z3's, and imoo's Z3 marketing describes the same C-gesture. (2) It is **opt-in**:
a parent who never enables it in the app has no SOS at all -- the features table above was
corrected accordingly. (3) Popa Aurel's *"e la vrajeala"* complaint is a fair description of the
scope: the gesture calls/alerts the parent-configured contact and nothing else -- no emergency
services, no escalation, no location broadcast beyond the app. That is SOS working as designed;
the design is thin.

### Longevity / mortality

- **Oldest identified owner: athornz, ~Oct 2025** (10 months at sweep time). Melissacolorful
  (Dec 2025) returned hers for region reasons, not defect.
- **One hardware-wear signal**: the DE strap-part request of 15 Mar 2026 (row 10).
- **Zero dead-battery, dead-unit or bricking reports for the X10** in the 1,213-review Play pull,
  231-review Apple pull, all readable Amazon widgets, Trustpilot, Allegro and eMAG. The fleet is
  simply too young (EU launch ~mid/late-2025) for the Z1-style year-two data; that absence is a
  property of the calendar, not of the device.

### Cold weather

**No owner cold-weather report of the X10 exists anywhere searched.** The only "winter" content
found is in the seeded The Q comment section (*"seems fine even w/ snow?"*) and is discarded. The
governing facts remain imoo's own: **0-35 C operating range** (manual) and the brand-wide
sub-10 C charging limit (~100 mA, no fast charge, 6-7 h to full). A Romanian winter is outside
the stated envelope and nobody has tested it. Verified absence, not reassurance.

### Registration / SMS-code flow -- the pattern by country

Romanian storefronts re-verified this pass: **unchanged** -- still exactly two RO App Store
failures (Vlad Sabau.ro 13 Jul 2025, app v9.29.10, SMS code never arrived; Serban12345 20 May
2025, v9.26.60), both model-unknown, and one new-to-this-file RO Play review (Vasile Catalin
Nistor, 2025-08-19, 1-star, written in German, model unknown: *"unzufrieden. zu viel Unordnung und
unnoetige Benachrichtigungen"*). New non-RO corroboration from the Play pull (all model-unknown,
storefront country not proven residence):

- *"Tried registering with my mobile number multiple times... **Never got any verification SMS**"*
  (Nikshay Shrivastava, en-GB storefront, 2025-10-10, 1-star) -- the exact Romanian failure mode.
- *"**My country isn't in the list. No possibility to register with phone number!!!!**"*
  (Steffen, 2025-04-25, 1-star) -- **this is the mechanism that would hit Romania**: imoo's country
  selector gates registration, and Romania is not on imoo's country page.
- *"Not managed to register new watch at all"* (Natalie, 2025-12-25, 1-star); *"sms will not send.
  password reset doesn't work"* (Victor B., 2026-06-22, 1-star).
- Region split confirmed by an X10 owner (row 6): the overseas service **cannot connect to
  China-registered family accounts** -- the account system is region-partitioned, which is
  consistent with country-list gating at registration.

The pre-purchase test in this file (register with a +40 number *before* paying) is unchanged and
strengthened.

### Verified absences -- searched, nothing found

- **Google Play**: 1,213 unique reviews across 18 locales (de-DE, en-GB, es-ES, en-IE, ro-RO,
  it-IT, nl-NL, pl-PL, de-AT, fr-FR, cs-CZ, en-SG, id-ID, ms-MY, en-IN, en-AU, th-TH, vi-VN),
  both sort orders. **2 name the X10** (rows 2-3). ro-RO storefront: 3 reviews total, none names
  a model. *(The Z7 sweep's run pulled 3,477 with deeper pagination; this pass's pagination cut
  earlier -- a coverage note, not a contradiction.)*
- **Apple RSS**: 231 unique reviews, 29 storefronts. **Zero mention the X10.** RO storefront
  still carries only the two 2025 failures.
- **Trustpilot**: 271 reviews on `imoo.me`; 2 name the X10 (both flagged above); searched across
  all languages via `__NEXT_DATA__`.
- **Alza.cz**: no X10 product at all. **Heureka.cz**: no X10 product page. **Fnac.fr**: no imoo
  results. **MediaMarkt.de**: three X10 colour listings, EUR 239, **zero reviews**. **Allegro.pl**:
  4 verified ratings, zero text. **eMAG.ro**: 1 review (Popa Aurel), re-read on the page.
- **No X10 battery percentage, no discharge curve, no tracking-interval statement, no cold-weather
  owner report, no second Romanian report** anywhere above.
- **Amazon merged-pool depth**: unreadable without fresh login (`max_auth_age=3600` wall); the
  3,759-rating pool's 141 "battery" mentions are unmined. Coverage gap, not absence.
- **T7hVtsnFZ-s (Marcin Klinikowski PL short)**: video deleted/unavailable -- noted, not counted.
- No page or comment encountered in this sweep contained instructions addressed to an AI. Web
  content was treated as data throughout.

### Corrections to the existing record, explicit

1. **`battery_observed_h: 24-72` -> `24-48`** (frontmatter, corrected above). The 72 h top is a
   same-outlet-contradicted outlier tied to imoo's Wi-Fi-conditioned PR claim.
2. **`battery_claimed_h: UNKNOWN` -> `24-48`.** imoo *does* publish a runtime -- in its own Amazon
   listing copy ("1 a 2 jours... utilisation moderee" / "1-2 Tage Nutzung"), the identical house
   string used for Z1/Z3/Z7. imoo's storefronts still publish nothing.
3. **`BATTERY.md`'s "retraction" narrative is wrong in mechanism, right in substance.** It
   records inside-digital's X10 page as "re-dated: Hayo Luecke, 2026-07-29" at "the same URL". In
   fact **two separate articles coexist**: Wellendorf's ~3-day test (20 Nov 2025) was still live
   at its original URL on 2026-08-19, and Luecke's ~1-day test (29 Jul 2026) is a second URL
   (`/tests/imoo-watch-phone-x10-test-das-perfekte-geschenk-zum-schulstart`). "The outlet
   retracted it" should read "the outlet contradicted itself"; the corrected range 24-48 h
   stands either way.
4. **SOS is opt-in, not "not disableable".** The features table said *"Not disableable (by
   design)"*; imoo's own note says SOS works only *"after being enabled in the imoo app"*.
   Corrected in the table.
5. **The "two seeded YouTube comment sections" claim, previously withdrawn as unsourced, is
   reinstated with evidence** (URLs, the `@pinghou-h4s` account, quotes) -- see the seeded-content
   section above.
6. **EUR 299 is no longer the floor price**: MediaMarkt.de sells the X10 first-party at
   **EUR 239** (all three colours, 2026-08-19). The "buy from imoo's EU store" advice should be
   re-weighed against a German big-box retailer undercutting imoo by 20% -- though MediaMarkt does
   not ship to Romania, so for a Romanian buyer imoo's store remains the practical channel.
7. eMAG price moved 3,579.99 -> **3,630.00 RON** during this pass (discount lapsed).

### What this changes in the frontmatter

- `battery_claimed_h`: **24-48** (imoo's own Amazon copy; house number; PR "3 days" attributed
  and rejected).
- `battery_observed_h`: **24-48** (72 h outlier same-outlet-contradicted; only owner figure
  "1-2 days").
- Everything else -- `ro_status: likely`, `update_interval_min: UNKNOWN`, `data_region: UNKNOWN`,
  `extras_disableable: partial` -- unchanged by this sweep.

### Amazon deep-pool read (2026-08-19)

**Access status.** Real-Chrome pass; the profile was **signed out of every Amazon storefront**
and every `/product-reviews/` deep link (sort/filter/pagination) 302s to a sign-in wall
(`openid.pape.max_auth_age=3600`). No credentials entered, so coverage is each product page's
logged-out top-review module. For the X10 that turns out to be nearly the whole pool anyway —
the X10's Amazon review base is tiny.

**Context that matters for the OPTIONS-level numbers:** the 3,759-rating merged Z1/Z3/X10 pool
on amazon.de (B0FNWFQ2FP) has been **dissolved — that ASIN now shows 0 customer reviews** — so
no X10 rating anywhere is inflated by that merge any more. The X10's own listings carry almost
no reviews.

**Coverage table, accessed 2026-08-19:**

| Listing | Ratings | Avg | Hist 5→1 (%) | Read | Notes |
|---|---|---|---|---|---|
| amazon.fr B0FNCZP34X (also served on .de) | 13 | 4.5 | 66/20/14/0/0 | 5 | All five visible reviews are **US-storefront** reviews; tags are colour-only (Gris/Rose) — X10-only listing, so model is unambiguous. **2 of 5 are non-verified-purchase** with marketing-toned copy (see below) |
| amazon.de B0FNDCV1WY | 2 | 5.0 | – | 2 | Both VP, both content-free praise (DE 10 Jun 2026; PL 22 Dec 2025) |
| amazon.de B0FND52SHB / B0FNWG6BYR / B0G5K46B42 | 0 | – | – | 0 | no reviews |
| **Total** | 15 | | | **7 read (5 VP)** | ~8 unread (login-walled) |

**Substantive reports (US storefront, X10):**

- **The overseas region-lock cuts both ways.** Melissacolorful, **30 Dec 2025**, 4★ VP, title
  *"Great watch but not for Chinese family"*: *"This watch is an 'oversea' version of the most
  popular kids watch in China … We thought we could use this to contact our family not only in
  the US but also in China, but this watch is limited to only overseas, so we will have to send
  it back."* — first owner statement that the international X10 cannot interoperate with
  China-side imoo accounts. Confirms the regional account partition is real and enforced, which
  is the same mechanism that makes the supported-country list matter.
- **US carrier provisioning cost and friction.** Alexandra Waddell, **9 Apr 2026**, 3★ VP:
  *"if you're in the US you'll need to add this as a phone number and not a watch number! …
  Verizon is charging me $65 a month, for the phone line."* Plus: *"It seems to not mesh well
  with my apple ios."* Carrier-provisioning friction on an un-listed carrier, again.
- **A vendor-support success, for balance.** Amazon Customer, **2 Jun 2026**, 5★ VP: *"After
  verifying compatable bands with Imoo customer service, the watch in fact works flawlessly with
  my local Canadian SIM and phone plan."* Second sighting of imoo support answering a band
  question usefully (after the Canadian X10 owner already in this file).
- **Review-hygiene flag.** The two **non-VP** 5★ reviews on B0FNCZP34X read like listing copy —
  one recites *"multi-system GPS tracking and up to 14 days of route history"* for the X10,
  which contradicts imoo's own EU Data Act disclosure (Historical Track: *"Only Z7 is supported
  overseas"*). Treat both as promotional, not owner evidence; they are excluded from all counts
  above.

**What this changes:** nothing in the frontmatter. The X10's Amazon evidence base is 5 usable
owner reviews worldwide — the eMAG RO review, the DE/SG press tests and the app-store corpus
remain the load-bearing sources for this model. The one genuinely new fact is the
**China↔overseas account partition** (Melissacolorful), which slots under vendor-commitment/
region risk rather than any spec row.
