# imoo Watch Phone Z3

```yaml
---
model: imoo Watch Phone Z3
brand: imoo (BBK Electronics, Guangdong, China)
release_year: 2025               # ESTABLISHED 2026-08-19. imoo Singapore's own YouTube channel
                                 # uploaded "imoo Watch Phone Z3 Launches Tomorrow!" on
                                 # 2025-11-07 (launch livestream "7 Nov, 7-9PM"); the "imoo
                                 # Watch Phone" channel uploaded "Launches Now!" 2025-12-22.
                                 # Earliest verified-purchase EU owner review: Amazon DE
                                 # 2025-11-18. So: Nov 2025, ~9 months old. See scrutiny pass.
still_sold: yes                  # imoo EU store EUR 126.65 and UK store GBP 129.00, both live 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status: likely                # UPGRADED from unknown 2026-08-19: the shared imoo account flow
                                 # was completed first-hand with a +40 number (this research) —
                                 # account created, no SMS challenge presented (corrected same
                                 # day), pair-watch screen reached.
                                 # Same app (com.imoo.watch.global), same account system as Z7.
                                 # See "RO registration test" in the Z7 file. Z3-on-a-RO-network
                                 # remains untested.
ro_evidence_tier: 3              # dated first-hand RO reports exist for the imoo platform
                                 # (RO App Store, RO Play), none for the Z3 itself.
                                 # Tier 1 NOT reached: imoo names no RO carrier, lists no RO
                                 # storefront, and +40 registration is undemonstrated.
ro_killer: n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands: [B1, B3, B5, B7, B8, B20, B28]   # FDD. Plus TDD B34/B38/B39/B40/B41 (no RO use).
                                            # Also WCDMA B1/B5/B8 (dead in RO), GSM 900/1800.
band_b20: true
band_b28: true                   # LTE B28 on the device. In Romania 700 MHz is 5G NR n28,
                                 # not LTE - this band buys nothing here.
volte: true                      # imoo spec table: "VoLTE: Supported"
voice_fallback: UNKNOWN          # Still unverified as a 2G-CSFB question. But the VoLTE
                                 # WHITELIST fear is largely defused: a French owner runs the
                                 # Z3 on Free Mobile - an operator absent from imoo's carrier
                                 # list - with LTE in the status bar and working two-way voice
                                 # (2026-07); and Romanian VoLTE is provisioned as a SIM
                                 # PROFILE, routinely activated by putting the SIM in any
                                 # supported handset once. See scrutiny pass gap 5.
modem_chipset: Spreadtrum/UNISOC UWS6135E

# --- Positioning (the #1 criterion) ---
positioning: [GPS, GLONASS, QZSS, WiFi, LBS]   # NO Galileo, NO BeiDou (the Z7 has both)
wifi_positioning: true
update_interval_min: on-demand   # CORRECTED 2026-08-19. imoo's own EU Data Act disclosure
                                 # (v1.0, 2025-10-29) names the Z3 and states Historical Track
                                 # is "Only Z7 is supported overseas". imoo's EU store markets
                                 # the Z7 as "GPS & 14 days of location history" and the Z3 as
                                 # "Real time location tracking" only. So outside China the Z3
                                 # has NO breadcrumb trail and no hourly background report -
                                 # the parent taps and the watch fixes. See scrutiny pass.

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah: 740
battery_claimed_h: 24-48         # imoo's OWN Amazon DE listing title says "1-2 Tage Nutzung"
                                 # (1-2 days' use), seller IMOO Direct, accessed 2026-08-19.
                                 # Three louder vendor/retail claims CONFLICT and are not
                                 # supported: imoo's own SG page meta says "8 days battery
                                 # life", Deutsche Telekom's shop spec says "Akkulaufzeit
                                 # 6 Tage", MediaMarkt says up to 168 h. imoo's product spec
                                 # tables still publish no runtime at all.
battery_observed_h: 48           # ~2 days on mixed real use. FOUR independent dated first-hand
                                 # Z3 owners converge: French owner after 3 weeks (2026-07-22)
                                 # "l'autonomie ... tourne autour de 2 jours"; Bea, Amazon DE
                                 # verified purchase 2026-07-16, "hält der Akku bei uns gute
                                 # 2 Tage"; Allegro PL 2026-08-11 "Bateria trzyma dwa dni";
                                 # Allegro PL 2026-03-20 "bateria na 2 dni". Spread: one PL
                                 # household gets 3-4 days, another charges "codziennie lub co
                                 # drugi dzień" under heavy outdoor use plus calls.
                                 # SCHOOL-DAY FLOOR: the French owner reports a full
                                 # morning-to-evening day of wear ends at "plus ou moins les
                                 # 50 %". Charge 10->60% in 30 min.

# --- App & service ---
app_name: imoo Watch Phone
app_android_min: "6.0"
app_ro_playstore: yes            # CONFIRMED 2026-08-19 in a real browser at the RO storefront:
                                 # localised Romanian listing, "Aplicația este disponibilă
                                 # pentru dispozitivul tău", 1 mil.+ installs, footer
                                 # "România (română)", last updated 21 iul. 2026.
app_last_update: 2026-08         # Android 9.36.71 on 2026-08-01; iOS 9.36.70 on 2026-07-27.
                                 # Watch FIRMWARE is a separate and slower track: the French
                                 # Z3 owner was on watch firmware 1.5.0 dated 2026-03-21 with
                                 # no update in the four months to 2026-07-22.
data_region: UNKNOWN             # still no EU-established controller. imoo's declared company
                                 # address on its own Trustpilot profile is 9 Raffles Place,
                                 # #26-01 Republic Plaza, SINGAPORE 048619; the Android app is
                                 # published by PT IMOOLINK GLOBAL TRADING (Indonesia); the EU
                                 # privacy policy is still Shopify boilerplate with no
                                 # controller. imoo DOES publish an EU Data Act disclosure and
                                 # a Responsible Disclosure page. See Security & privacy.

# --- Practical ---
sim: nanoSIM
water_rating: '"water-resistant up to 20 metres" per ISO 22810:2010 (imoo). Retail listings
  disagree: eMAG says IP68, German listings say IPX8. Vendor wording is the 20 m / ISO figure.'
weight_g: UNKNOWN                # not published; 53.61 x 43.25 x 14.25 mm, strap excluded
camera: true                     # 2 MP front only. Sensors on the Z3 = accelerometer ONLY
                                 # (imoo spec table) - so NO heart rate and NO temperature,
                                 # now settled rather than merely suspected.
games: few                       # A few games ship on the watch and CAN be switched off from
                                 # the parent app - Bea, Amazon DE verified purchase
                                 # 2026-07-16: "es sind nur wenige Spiele auf der Uhr welche
                                 # man über die Elternapp deaktivieren kann". imoo's own
                                 # Amazon title says "NO Spiele" and the French owner found
                                 # the App Center empty. Small and controllable either way.
extras_disableable: partial      # Class Mode (per-day schedules), Sleep Mode, App control,
                                 # Unknown Caller Alert, dial-pad lock, step counter all
                                 # confirmed disableable by owners. NOT disableable: the
                                 # call-location report ("Raportul locațiilor de apel"), per a
                                 # German owner 2026-01-29. Child can reach watch Settings and
                                 # toggle flight mode (sibling Z1 report).
price_display_eur: "€126.65"      # normalized for the site tile; picked from the price fields below
price_display_ron: "663.86 lei"
price_eur: 126.65                # imoo EU store (from EUR 149.00), live 2026-08-19; GBP 129.00 UK;
                                 # MediaMarkt DE EUR 125.00 (UVP 149); Telekom DE shop lists it too
buy_from: Amazon.de (sold by IMOO Direct, "Deliver to Romania", free delivery) is now cheaper
  and simpler than the imoo EU store; imoostore.com/eu still ships to RO and adds a 30-day
  money-back guarantee and a stated 2-year warranty
price_ro_eur: 'RON 663.86 (~EUR 130) - Amazon.de, sold by IMOO Direct, free delivery to Romania,
  verified 2026-08-19. This is LESS THAN HALF the eMAG marketplace price of 1,522.99 RON
  (seller DeiTim), which is unchanged and still the only Romanian retail route. Amazon returns
  window is 14 days.'
---
```

## Verdict

> **Superseded in part by the [Scrutiny pass (2026-08-19)](#scrutiny-pass-2026-08-19).** The
> battery blank is now filled (~2 days observed, ~50% left after a full day's wear), the Android
> app is confirmed in the Romanian Play storefront, and the VoLTE fear is largely defused. Three
> things got worse: **no location history outside China**, **SOS is a screen gesture not a
> button**, and **geofence school-arrival alerts appear Wi-Fi-anchored and may not fire.**

Best radio in this whole field — B1/3/7/8/20 plus VoLTE, verified on imoo's own spec table —
attached to a vendor that has never named a Romanian carrier, never opened a Romanian
storefront, and left Europe entirely once already.
The main risk is not the network; it is that Romania is a shipping address to imoo and nothing more.
It clears the radio floor and the positioning floor on paper; it does **not** clear the
"works in RO" floor, because nobody has demonstrated a +40 registration and imoo publishes
no battery runtime at all.

## Does it work in Romania?

**Tier reached: 3.** Not tier 1.

### The two conflicting lists — resolved, and the framing was wrong

The brief treats `imoo.com/eu/countrys` as imoo's "official supported-country page". It is not.
Fetched 2026-08-19, its heading is **"Select Your Country/Region"** and its only explanatory
text is **"Products may have different prices and availability based on country/region"**.
It is a **storefront selector** — the markets where imoo runs a localised shop. Its European
entries are: Europe (generic/English), Germany, United Kingdom, France, Italy, Ireland, Spain,
Poland. Romania is absent.
<https://www.imoo.com/eu/countrys> — accessed 2026-08-19

The imoo EU store shipping policy is a **logistics list**. Fetched 2026-08-19, verbatim:
> "Ireland, Spain, Germany, Denmark, France, Netherlands, Belgium, Greece, Italy, Portugal,
> **Romania**, Slovenia, Sweden, Poland, Czech Republic, Luxembourg, Slovakia, Hungary,
> Lithuania, Bulgaria."

It also carries the constraint **"Orders can only be shipped to the country where the order is placed."**
<https://www.imoostore.com/eu/pages/shipping-policy> — accessed 2026-08-19

So the two documents are not in conflict at all: one says where imoo *sells*, the other says
where imoo *ships*. **Neither is an account-registration allow-list, and imoo publishes no
registration allow-list anywhere I could reach.** The question the brief asks — which one
governs registration — has a blunt answer: **neither**. That is the finding.

### What actually bears on +40 registration

Two independent facts, pulling in opposite directions.

**For:** the imoo Watch Phone app is genuinely distributed in the Romanian storefront on iOS.
Verified directly rather than by search: `itunes.apple.com/lookup?id=1057845227&country=ro`
returns the app, `sellerName` **PT. IMOOLINK GLOBAL TRADING**, version 9.36.70,
`currentVersionReleaseDate` **2026-07-27**, and RO-storefront rating figures of
**2.5 stars from 4 ratings** — a Romanian install base that rounds to nothing, but a real one.
The Romanian-storefront review feed returns Romanian users' reviews, which cannot happen
without RO distribution.
<https://itunes.apple.com/lookup?id=1057845227&country=ro> and
<https://itunes.apple.com/ro/rss/customerreviews/page=1/id=1057845227/sortby=mostrecent/json>
— both accessed 2026-08-19

More persuasively, one of those two Romanian reviewers is plainly describing a **paired,
running watch**, which is impossible without a successful account:

> **Serban12345**, Romanian App Store, **2025-05-20**, 1★, title *"Imoo kid watch - I don't recomand"*:
> "Very poor signal, loses time zone and connectivity most of the time. Cannot make a normal,
> nor a video call GPS also loses connectivity."
> *(original in English)*

This corroborates the earlier sweep's Romanian Play review of 2026-07-13 —
*"slabă cu locația, și tot apare alt fus orar deși este setat corect nu se sincronizează"*
("poor with the location, and a different time zone keeps appearing even though it's set
correctly, it doesn't sync") — also from a parent with a working, bound watch.
Two independent Romanian users, both with functioning accounts, both reporting the **same
time-zone desync symptom**.

**Against:** the other Romanian review is the exact failure mode this project exists to screen for.

> **Vlad Sabau.ro**, Romanian App Store, **2025-07-13**, 1★, title *"Junk"*:
> "Can not login with the phone number because o do not get the sms confirmation code."
> *(original in English; "o" is a typo for "I")*

One report. The cause is not established — imoo's own support article attributes missing
verification codes to handset spam blockers rather than to country support, so this is
**not** proof of a +40 block. But it is a Romanian user, in the Romanian storefront, unable
to complete phone-number authentication.

**Conclusion: +40 registration is probably possible, and is unproven.** Two Romanian users
evidently got accounts; one evidently did not. I could not obtain a vendor statement either
way. imoo's published support channel for the question is **support@imoo.com**
(named on both the EU and India sites). Writing to it before purchase is the cheapest
possible resolution and is **the** action item on this device.

### The other Romania signals

- **Retail (tier 4) is weaker than previously recorded.** OPTIONS.md lists the Z3 as
  "eMAG 1P". It is not. Every imoo Z3 listing on eMAG on 2026-08-19 is a **marketplace**
  listing: the 1,522.99 RON blue SKU is sold by **DeiTim** ("ultimele 3 produse"), and the
  other listings sit behind third-party sellers. **There is no first-party eMAG Z3.**
  That removes the strongest Romanian distribution signal the device was credited with.
  Legal conformity warranty of 24 months (OUG 140/2021) still applies; the return window is
  the 14-day distance-selling minimum, not eMAG 1P's 30 days.
  <https://www.emag.ro/search/imoo%20z3> and the blue SKU product page — accessed 2026-08-19
- **No Romanian carrier is named by imoo anywhere** (next section).
- **Bands fit (tier 5)** — necessary, not sufficient.
- **Z3-specific Romanian first-hand reports: none exist.** Both eMAG Z3 listings show zero
  reviews ("Fii primul care scrie un review").

### Still unproven

- Whether the imoo app accepts a +40 number at signup — **unverified**.
- Whether the Android app is published in the Romanian Play storefront — **unverified**
  (play.google.com returned 403 and truncated content on repeated attempts; the earlier
  discovery sweep reported it present, which I could not independently reproduce).
- Whether any Romanian operator will provision VoLTE against this device's TAC — **unverified**.

## Pre-purchase test

*Revised by the scrutiny pass, 2026-08-19. Step 1 is already done.*

1. ~~Check the Romanian Play storefront.~~ **Done — the app is live in the RO Play storefront**,
   fully localised, verified 2026-08-19. This no longer needs testing.
2. **Register with your +40 number and confirm the SMS verification code arrives.** Still the
   single decisive step, and still free. Note that the identical "Register button stays disabled"
   / "no SMS code" failure is reported from **Germany**, a first-tier imoo market, so a failure
   here is a bug to retry, not necessarily a country block.
3. **Activate the VoLTE profile on your Romanian SIM *before* it goes in the watch** — put it in
   your own phone, confirm 4G calling is on in the operator account, then move it. Prefer
   **Orange or Digi** (2G still live) over Vodafone. If VoLTE does not appear, one phone call to
   the operator provisions it manually.
4. **Buy from Amazon.de, not eMAG and not the imoo EU store.** RON 663.86, sold by **IMOO Direct**,
   dispatched by Amazon, **free delivery to Romania**, verified 2026-08-19 — under half the eMAG
   marketplace price of 1,522.99 RON. Trade-off: Amazon gives a 14-day return; the imoo EU store
   (€126.65) advertises a **30-day money-back guarantee and a 2-year warranty**, but every
   Trustpilot complaint about imoo is about its own support, and Amazon's returns process is not.
5. **Week one, in this order:**
   a. Place an **incoming** voice call to the watch on LTE, several times over several days —
      this is the platform's most persistent failure and a German Z3 owner needs *"mehrere
      Versuche"*.
   b. **Set a school geofence and confirm the arrival/departure alert actually fires** without
      putting the school Wi-Fi password on the watch. One Polish owner says it does not.
   c. Check the location **inside the school building**, and remember there is **no location
      history** to fall back on — only the live fix.
   d. Watch for the **2-hour clock drift** (reported every 2–4 days in France); the fix is to
      toggle the time setting off and on in the app.
6. **Accept that the watch UI will be in English.** Romanian is not among the Z3's 14 supported
   watch languages. The parent app is Romanian; the watch is not.
7. If you still want a vendor answer, imoo now publishes a phone line — **(+0044) 800-640-6588** —
   as well as support@imoo.com. A Canadian owner of the sibling X10 got a useful written band
   answer out of them.

## Positioning quality in real use

The Z3's stack is **GPS + GLONASS + QZSS + Wi-Fi + LBS** (imoo spec table, accessed 2026-08-19).
Two things to notice.

**No Galileo and no BeiDou.** The Z7 in the same range carries five constellations including
Galileo; the Z3 does not. QZSS is a Japanese regional system and contributes nothing in
Romania. So in practice the Z3 is a **GPS + GLONASS** device in Europe — a weaker satellite
picture than the cheaper Z7, and materially weaker than the dual-band L1+L5 hardware in the
TCL MT48.

**Wi-Fi positioning is present**, which is the part that matters indoors at school, and it is
the reason this is not simply a GNSS-only device. But Wi-Fi positioning is also the mechanism
behind the classic failure in this category — the watch reports a plausible-looking but wrong
location from a stale or mislocated access point.

Observed behaviour, all platform-level (no Z3-specific report exists):

- **Romania, 2025-05-20**, App Store: *"GPS also loses connectivity."* (Serban12345)
- **Romania, 2026-07-13**, Play: *"slabă cu locația"* ("poor with the location").
- **UK, 2022-05-28**, App Store, 1★, **Mr Opinion Giver**: "The locate tracker to find your kid
  is awful. It works sporadically at best and often claims the network is to blame despite the
  network clearly being fine (because the phone function still works perfectly well).
  We're in the UK but sometimes it even says our kid is in Germany!" — **note this is 2022**,
  four years old, and about an earlier model on the same app.
- **UK, 2024-02-04**, App Store, 3★, **fb80fb**: "The location is not loading properly, unless
  you do video call."
- **UK, 2023-12-11**, App Store, 1★, **cmilneabdn**: "the tracking feature pretty much never
  works despite the network being fine" — **2023**, marked as older.

Four independent reports across two countries describe the same shape of problem: the fix is
not absent, it is *stale or wrong*, and the app blames the network. The Romanian reports match.
**No source establishes the Z3's fix time, drift, or indoor accuracy** — those are UNKNOWN.

## Battery in real use

**Claimed: nothing.** imoo publishes **no runtime figure for the Z3 in any storefront**.
Checked the EU, UK and Singapore product pages on 2026-08-19; all three give only
740 mAh plus marketing language — imoo's words: *"Ultra-long battery life"*, *"smart
power-saving mode"*, *"supports all-day exploration and seamless communication for your child"*,
and the hedge *"The actual battery life of the Z3 may vary slightly depending on the usage
environment."* That is imoo's copy, attributed, not a specification.

For contrast, imoo **does** publish a figure for the cheaper Z1 (approximately 1–2 days). Its
refusal to publish one for the Z3, X10 or Z7 is a pattern across the range and should be read
as such.

**Observed: UNKNOWN.** I could not find a single dated, attributable first-hand runtime figure
for the Z3.

Two numbers are circulating and **neither is evidence**:

- **"14 hours."** Traced to an AliExpress `wiki-ssr` article comparing Z1/Z3/Z7. It presents
  itself as a parent's two-month test but carries no author, no date, links only to AliExpress
  product pages, and carries the site's own disclaimer: *"This content is provided by
  third-party contributors or generated by AI."* **Disqualified.** Recorded here only so a
  future pass does not re-launder it.
- **"Up to 2 days."** This is the eMAG marketplace seller DeiTim's listing copy
  (*"autonomie de până la 2 zile"* — "autonomy of up to 2 days"). **Retailer copy, not imoo's**,
  and not attributable to any measurement.

So the honest position is: 740 mAh is the same cell imoo puts in the Z1, Z7 and X10, and the
Z3 drives a 1.5" 320×360 TFT with GPS and 4G. **Assume nightly charging and verify in week one.**

## Network & bands

Confirmed from the primary source — imoo's own Z3 specification table, quoted verbatim,
fetched 2026-08-19 from <https://www.imoo.com/eu/products/z3> and reproduced identically on
<https://www.imoostore.com/eu/products/imoo-smartwatch-z3>:

> "2G GSM 900/1800MHz  3G WCDMA B1/B5/B8  4G FDD-LTE B1/B3/B5/B7/B8/B20/B28
> 4G TD-LTE B34/B38/B39/B40/B41"
> "VoLTE: Supported"
> "Z3 requires a SIM card and VoLTE service to use the calling function."
> "With a multi-mode adjustable antenna, imoo supports coverage across Southeast Asia and Europe."
> "Global connectivity is subject to the coverage provided by local network operators."

**Fit against Romania.** B3 (1800) is the national workhorse — present. **B20 (800) is
present**, which is what matters on Orange, whose only sub-1 GHz LTE band it is, and which is
what decides whether a wrist antenna reaches a child inside a concrete school. B1, B7 and B8
are all present too. This is a **Romania-complete FDD list** and the best in the candidate
field alongside the Canyon KW-49. **B28 is present but worthless here** — Romanian 700 MHz is
5G NR n28, not LTE. The WCDMA and TDD bands are dead weight in Romania.

**VoLTE is the live risk, and it is not a band problem.** imoo states VoLTE is supported and
also states that calling *requires* it. Romanian operators provision VoLTE per device
IMEI/TAC, and imoo has never engaged a Romanian operator (next paragraph), so no Romanian
network has any reason to have whitelisted this TAC. If VoLTE provisioning fails:
the device does carry GSM 900/1800, so 2G CSFB is physically possible — **but imoo's own
wording implies the calling function depends on VoLTE, and I found no source confirming a 2G
fallback works on this model. Treat `voice_fallback` as UNKNOWN.** That argues for Orange or
Digi, which still run 2G, over Vodafone.

### The missing Romanian carrier — certification gap or marketing scope?

**Marketing scope.** The Z3 page's carrier list, verbatim and complete as of 2026-08-19:

> "United Kingdom: O2/EE/Vodafone  Germany: Telecom/O2/Vodafone  Spain: MOVISTAR/Vodafone/ORANGE
> Poland: Play/Orange/T-Mobile  France: Orange/SFR/Bouygues  Italy: TIM/Vodafone/Windtre
> Australia: Telstra/Optus/Vodafone  Southeast Asia: AIS/TRUE/DTAC/Singtel/Starhub/M1/Celcom/
> Maxis/Umobile/VIETTEL/VINAPHONE/MOBIFONE/Telkomsel/Indosat/XL"

Note this is **broader than the earlier sweep recorded** (which saw only UK/DE/ES/PL) —
France and Italy are now included. And note what the set is: **exactly imoo's storefront
countries.** UK, DE, ES, PL, FR, IT — the same list as the country selector, minus Ireland.
The carrier list tracks where imoo runs a shop, not where the radio is legal or capable.

That is the answer to the question. There is no per-country radio certification to obtain in
the EU — CE/RED is EU-wide, and imoo markets the Z3 as meeting EU standards. Romania is not
missing because of a certification gap; **it is missing because imoo has not opened a Romanian
storefront and therefore has not done the carrier-validation legwork there.** That distinction
matters, because it means the radio is fine and the *relationship* is absent — and the
relationship is what would get a TAC onto an operator's VoLTE list. The gap is commercial,
but its consequence (unprovisioned VoLTE) is technical and real.

## Features & what can be disabled

imoo's published app feature list (<https://www.imoo.com/en/imoo-app>, accessed 2026-08-19),
with imoo's own wording:

| Feature | imoo's description | Parent can disable? |
|---|---|---|
| Video / voice calling | "Speed Dial — Easily initiate, HD video call" | Governed by Class Mode; per-feature toggle UNKNOWN |
| Chat / voice messages | "Stay in touch effortlessly" | UNKNOWN |
| Location + 14-day history | "With a 14-day location history, you can see where they've been each day" | Not disableable (it is the product) |
| **Class mode** | "Activate class mode on the imoo Smartwatch, helping your child stay focused on their studies" | **Yes — vendor-documented** |
| **App restrictions** | "manage which apps on the smart watch are accessible or set time limits for usage" | **Yes — vendor-documented** |
| **Unknown Caller Alert** | "Only saved contacts can reach the watch, and parents will receive notifications for all unknown callers" | **Yes — vendor-documented** |
| Camera (2 MP front) | — | Presumed covered by App Restrictions; **unverified** for the Z3 |
| Games | imoo does not publish the Z3's preinstalled app list | UNKNOWN |
| Heart rate / temperature | Listed as app features | Present on higher models; **presence on the Z3 is unverified** — the Z3 spec table does not list these sensors |
| SOS | Listed in retail specs | Assumed always-on; **unverified** |

The contact-approval model is the genuinely good part: the earlier sweep records that a new
contact must be approved by the parent, and imoo's Unknown Caller Alert enforces a
saved-contacts-only policy. `extras_disableable: partial` reflects that the three controls
above are documented and the rest are not.

## Security & privacy

**Vulnerability research: none exists for imoo.** The published kids-watch security corpus
covers other platforms entirely —
Rapid7's R7-2019-57 disclosure (2019, default password "123456", no SMS filtering);
Pen Test Partners' work on the **Thinkrace** cloud;
the STALK academic analysis (Saatjohann et al., 2020);
and mnemonic's **Xplora 4 / Qihoo 360** backdoor report (updated 2020-10-13), which found
firmware functions named for "remote snapshot", "send location" and "wiretap" triggered by
encrypted SMS with *"zero indication on the watch that a photo was taken."*
**I checked that report directly: neither imoo nor BBK Electronics is named in it.**
No CVE and no independent audit naming imoo, BBK or the UWS6135E platform was found.
**Absence of research is not a clean bill of health** — imoo has, as far as I can establish,
never been independently audited in public. Write this as **unverified**, not as "secure".

**Data hosting jurisdiction: UNKNOWN, and the vendor's own materials do not settle it.**

- imoo's marketing claim, verbatim, from <https://www.imoo.com/eu/why-imoo> (accessed 2026-08-19):
  > "All data on imoo devices is securely stored locally. Our industry-leading practices in
  > data encryption and privacy protection comply with stringent GDPR privacy and data regulations."

  That is imoo's assertion, attributed here and **not restated as fact**. It is also internally
  odd: a watch whose defining feature is showing a parent the child's live location is not
  storing that data "locally".
- **No EU-established data controller is named.** The app's publisher of record is
  **PT. IMOOLINK GLOBAL TRADING** — a `PT` is an Indonesian limited company — confirmed as
  `sellerName` in the Apple lookup and as the developer on the Android package
  (accessed 2026-08-19). No EU representative, registered address, or DPO is published on the
  EU site.
- **The only privacy policy reachable under imoo's EU and India domains is Shopify
  e-commerce boilerplate**, not a watch-service policy. It states verbatim:
  *"Your information will be transferred outside of Europe, including to Canada and the
  United States."* That governs **the online shop**, not the watch. It names no server
  location for location data, gives no effective date, addresses children's data not at all,
  and does not identify a controller. <https://www.imoo.com/eu/privacy-policy> and
  <https://www.imoo.com/in/privacy-policy> — accessed 2026-08-19.
  `https://www.imoostore.com/eu/policies/privacy-policy` returns 404.
- One first-hand technical observation, **UK, 2024-12-26**, App Store, 1★, **Herbs bey**:
  > "The watch requires network communication with many Chinese servers (some of which were
  > blocked by adblock tools leading to confusion and dysfunction)."

  **One report**, unverified, but it is a specific and falsifiable claim and it is the only
  direct evidence about where the traffic goes.
- **iOS privacy label, Romanian App Store, accessed 2026-08-19** —
  *Data linked to you:* User ID, Phone Number, Contacts.
  *Data not linked to you:* Precise Location, Coarse Location, Physical Address,
  Photos or Videos, **Audio Data**, Device ID, Crash/Performance/Other diagnostics.
  The declared **Audio Data** collection is explained by the voice-message feature, but it is
  worth knowing the audio pipeline exists.
- One further allegation, recorded but not established — **UK, 2023-11-20**, App Store, 1★,
  **DinaNiem**: "This app leaked our phone numbers and all 3 family members who downloaded the
  app started receiving scam calls the very next day." **One uninvestigated report from 2023.**

**Covert remote-listen: not advertised, not ruled out.** imoo's published feature list names
no listen-in, monitor, ambient-audio or remote-photo capability — a real contrast with the
SeTracker2 white-label tier, which advertises *"monitorizare spion"* ("spy monitoring") as a
selling point on Romanian listings. So there is no *parent-facing* remote-listen button.
Whether such a capability exists in firmware is **unverified**: no one has decompiled imoo's
firmware in public, and the Xplora case is the standing proof that a covert capability can
exist with no UI whatsoever. **It cannot be locked, because it cannot be confirmed to exist
or not exist.**

## Reality check

- **"Ultra-long battery life" means imoo will not tell you a number.** 740 mAh, no published
  runtime in three storefronts, and a published 1–2 day figure only on the cheaper Z1. The
  "14 hours" you will find online is AI-generated AliExpress copy; the "up to 2 days" is a
  Romanian marketplace reseller's own words. Plan on charging nightly.
- **"Multi-mode adjustable antenna… coverage across Southeast Asia and Europe" means the bands
  are genuinely there** — that one checks out, on imoo's own spec table, and B20 is the part
  that matters. It does **not** mean any Romanian operator has ever validated the device.
- **"Precise Location Tracking" is GPS + GLONASS + Wi-Fi.** No Galileo, in Europe, in 2026 —
  the €60-cheaper Z7 has five constellations and this one has two useful ones.
- **"7-system GPS" and "8 days battery"**, which appear on third-party listings and
  aggregator pages, appear **nowhere in imoo's own specification**. Both are reseller
  inventions. imoo's table says GPS/GLONASS/QZSS/Wi-Fi/LBS and gives no runtime.
- **"imoo ships to Romania" means a courier will deliver a box.** It is not a statement about
  accounts, carriers, VoLTE, support, or warranty service.
- **"Complies with stringent GDPR" is imoo's sentence about itself**, on a site with no named
  EU controller, whose only reachable privacy policy is a Shopify template that routes data to
  Canada and the US.

## What users say

No Romanian user has ever publicly reviewed a Z3. Both eMAG Z3 listings carry zero reviews as
of 2026-08-19. Everything below is **platform-level** — the shared imoo app and cloud — and is
labelled with country and date accordingly. The Romanian App Store rating for the app is
**2.5 from 4 ratings**, which is too small a sample to mean anything except that almost no
Romanian owns one.

**Works:**

- **Romania, 2025-04-22**, Google Play, 5★: *"Excelent"* ("Excellent"). One word, one report.
- **Romania, 2026-08-13**, eMAG (imoo **X10**, not Z3), **Popa Aurel**, 1★ overall but with the
  load-bearing sentence: *"Când suni cu video semnalul foarte slab se întrerupe mereu. Când
  suni normal este ok."* — "When you call with video the signal is very weak, it constantly
  cuts out. When you call normally it's OK." **This is the only Romanian confirmation that
  imoo voice calling works on a Romanian network.** It is one report, and it is about a
  different model.
- **UK, 2025-02-09**, App Store, 4★, **Rainbow ro**: "I love this watch it gives my kids
  responsibility but while keeping him safe… it needs network and a lot of random crashes and
  limited apps but it's a great watch and it serves its purpose."
- **UK, 2024-04-28**, App Store, 4★, **VivGo**: "this watch is absolutely amazing" (with a
  contacts-display feature request).

**Fails:**

- **Romania, 2025-07-13**, App Store, 1★, **Vlad Sabau.ro**: "Can not login with the phone
  number because o do not get the sms confirmation code." — **the registration failure mode.
  One report, cause unestablished.**
- **Romania, 2025-05-20**, App Store, 1★, **Serban12345**: "Very poor signal, loses time zone
  and connectivity most of the time. Cannot make a normal, nor a video call GPS also loses
  connectivity."
- **Romania, 2026-07-13**, Google Play, 3★: *"slabă cu locația, și tot apare alt fus orar deși
  este setat corect nu se sincronizează, lam resetat tot și app, nu merge."* — "poor with the
  location, and a different time zone keeps appearing even though it's set correctly, it
  doesn't sync, I reset everything and the app, it doesn't work."
- **The time-zone symptom appears in two of the three Romanian reports** (2025-05-20 and
  2026-07-13), independently. That is the strongest repeated Romanian signal on this platform,
  and it is consistent with a device provisioned against a region profile that does not match
  where it is being used — which is exactly what you would expect from a vendor that has no
  Romanian storefront.
- **UK, 2026-06-18**, App Store, 1★, **Helen Balic**: "The app doesn't pair easily to the
  watch. It took about 10 hours of troubleshooting and still didn't work even after trying to
  work it out with customer support."
- **UK, 2025-12-31**, App Store, 1★, **gordoninlondon**: "After upgrading watch software, it
  forgot it was bound so can't do anything. App still thinks it is bound."
- **UK, 2025-04-21**, App Store, 2★, **Craig Ir**: "Sim is in phone, all active, watch rings
  but won't answer."
- **UK, 2024-12-26**, App Store, 1★, **Herbs bey**: "It took us hours to setup (many
  miss-steps)… The watch requires network communication with many Chinese servers."
- Older, marked as such: **UK 2023-12-11** ("tracking feature pretty much never works"),
  **UK 2022-05-28** ("sometimes it even says our kid is in Germany!"), **UK 2020–2021**
  repeated login/admin-approval lockouts.

**Pattern worth naming:** across five years and three countries the recurring complaint is not
the hardware — it is **binding, login and the account layer**. Six of the reports above are
pairing or authentication failures. That is the same subsystem a +40 registration has to pass
through, and it is the reason the pre-purchase test is non-negotiable here.

## Vendor commitment risk (3–4 year horizon)

imoo **left Europe entirely for roughly three years and returned only in June 2024**, launching
the Z7 in the **UK and Germany only**. The PR is dated **2024-07-05** and contains **no
statement of further country expansion**.
<https://www.prnewswire.co.uk/news-releases/imoo-is-returning-to-europe-after-3-years-with-the-newest-kids-flagship-sports-watch-phone-z7-302189692.html>

Two years on, the picture as of 2026-08-19:

**Reassuring:** the EU store is live with four models; localised storefronts now exist for DE,
FR, IT, ES, PL, IE and the UK (up from two markets in 2024); the carrier list has grown to
include France and Italy; and **both apps are actively maintained** — Android 9.36.71 shipped
**2026-08-01**, iOS 9.36.70 shipped **2026-07-27**. Those are not the signals of a platform
being wound down.

**Not reassuring, specifically for Romania:** in two years of European re-expansion imoo has
added storefronts, carriers and languages — and **Romania has been added to none of them.**
It remains a shipping destination on the generic "Europe / English" store. There is no
Romanian carrier, no Romanian storefront, no Romanian first-party retail, and four iOS
ratings in the entire country.

**The asymmetry that matters over four years:** because Romania is not a market imoo has
invested in, it is the market that costs imoo nothing to drop. A vendor that has already
walked away from Europe once, and that serves Romania only by parcel, has no commercial
reason to keep serving it if the European return underperforms.

**The one structural mitigation:** the Z3 takes **a plain nano-SIM from a Romanian operator**.
There is no vendor SIM, no eSIM, no subscription gate — so imoo cannot brick the radio the way
Vodafone bricked its Smart Tech line or the way an Xplora-style connectivity withdrawal would.
What imoo *can* withdraw is the app and the cloud, and without those the watch is a phone on a
wrist with no tracking and no parental control. **Rate this a moderate risk with a hard floor:
worst case you lose the product, not the hardware.**

## Scrutiny pass (2026-08-19)

A second, adversarial pass. The headline is that **this device is much better documented than the
first pass concluded, and slightly better than it looks** — the battery blank is filled from two
independent owners, a Romanian VoLTE workaround is documented, and the Android app is confirmed
live in the Romanian Play storefront. Against that, three things get **worse**: the Z3 has **no
location history at all outside China**, its SOS is a **screen gesture, not a button**, and the
Amazon rating everyone will see is a **merged Z1/Z3/X10 pool**, not a Z3 pool. A fourth finding,
from a review pool every earlier pass missed, may matter most of all: **geofence arrival/departure
alerts appear to be Wi-Fi-anchored and do not reliably fire** — see the Allegro section.

**Method note.** Allegro.pl and Trustpilot both refuse plain fetches (403) and both render fine in
a browser tab; **Allegro alone held 13 verified-purchase Polish Z3 owner reviews that no previous
pass had seen.** Amazon storefronts also require a real browser. eMAG and the imoo/Telekom/
MediaMarkt pages fetch fine with a spoofed desktop User-Agent. `r.jina.ai` is now itself behind a
Cloudflare challenge and was useless in this pass.

### Corrections to what this document previously said

1. **"'7-system GPS' and '8 days battery' … Both are reseller inventions" — wrong.** Both phrases
   are in **imoo's own page metadata** on imoo.com. Verbatim, `<meta name="description">` on
   <https://www.imoo.com/sg/products/z3>, fetched 2026-08-19:
   > "imoo Watch Phone Z3: Children's smartwatch with dual camera, 4G HD video calls, **7-system
   > GPS tracking** & IPX8 water protection. **8 days battery life.** Discover now!"

   The same page's own specification table says GPS/GLONASS/QZSS/Wi-Fi/LBS and publishes no
   runtime. So imoo contradicts itself on its own product page. That is a worse finding than
   "resellers made it up", and it is the reason no imoo battery number can be taken at face value.
   (The EU and UK store meta descriptions do **not** carry either claim — this is SG-only.)

2. **The feature table's "Location + 14-day location history — Not disableable (it is the
   product)" is wrong for the Z3.** imoo's own EU Data Act disclosure v1.0 (2025-10-29), which
   explicitly names "imoo Watch Phone z3" among its covered products, says of Historical Track:
   > "1. **Only Z7 is supported overseas**  2. Users need to open 'Location' -> 'Historical
   > Trajectory' in the mobile app  3. The watch end will report once every 1H; If the user
   > initiates positioning, it will be reported immediately"

   imoo's own EU storefront home page confirms the split in its product blurbs: Z7 = *"GPS &
   14 days of location history"*; **Z3 = *"Real time location tracking"* only.**
   <https://www.imoo.com/eu/> and
   <https://static-res-www.imoo.com/EU/files/Data_Act--imoo_Watch_Phone-V1.0_2025.10.29.pdf>
   **So the Z3 gives you a live fix on demand and no breadcrumb trail.** `update_interval_min` is
   now recorded as `on-demand`, not `60`. The Z7's hourly background report does **not** transfer.

3. **The time-zone symptom is not a Romanian provisioning artefact.** This document inferred that
   the repeated Romanian time-zone desync was "consistent with a device provisioned against a
   region profile that does not match where it is being used — exactly what you would expect from
   a vendor that has no Romanian storefront." That inference is **not supported**: a French Z3
   owner reports the identical bug in France, a fully supported market with three named carriers.
   > **Edm-Tech&House**, YouTube, **2026-07-22**, *"imoo z3 avis finale"*, after 3 weeks of use:
   > *"On se retrouve une fois tous les deux 3 jours ou 4 jours à avoir l'heure qui n'est plus la
   > bonne. On va avoir un décalage de 2h. … la seule possibilité est de désactiver réactiver
   > l'option pour que l'heure rebascule."*
   > ("Every two, three or four days we find the time is no longer right. We get a 2-hour offset.
   > … the only option is to disable and re-enable the setting so the time flips back.")

   It is a **current Z3 firmware bug**, present on firmware 1.5.0 (dated 2026-03-21). Nothing to
   do with Romania.

4. **Heart rate and temperature are settled absent, not "unverified".** imoo's Z3 spec table lists
   `Sensors: Accelerometer` and nothing else.

5. **imoo does have European carrier and first-party retail relationships — in Germany.** The
   Z3 is stocked by **Deutsche Telekom's own shop** (<https://shop.telekom.de/geraete/imoo-watch-phone-z3-blau>,
   EAN 6953281010142, distributor BRODOS, "Sofort verfügbar"), by **MediaMarkt** (€125, Art.-Nr.
   3020369) and on Amazon.de by **IMOO Direct**. There is also a Telekom-branded bundle SKU
   ("imoo Kids Watch Z3 … Telekom SIM Card, 30 € Amazon Voucher after Registration"). This does
   not help Romania directly, but it kills the reading that imoo has no operator relationship
   anywhere in the EU, and it means at least one European operator has the TAC.

6. **Buying route: the document's advice is now out of date.** Amazon.de sells the Z3 at
   **RON 663.86 with free delivery to Romania**, sold by IMOO Direct and dispatched by Amazon
   (verified 2026-08-19, "200+ bought in past month"). That is **less than half** the eMAG
   marketplace price of 1,522.99 RON that this document recommends against, and slightly under
   the imoo EU store. The imoo EU store's own product page does, however, advertise a **30-Day
   Money-Back Guarantee** and a **2-Year Comprehensive Warranty**, versus Amazon's 14-day window.

7. **imoo has a phone support line, not just an email address.** The EU site footer carries
   **(+0044) 800-640-6588**, plus Chat and Email. Use it for the pre-purchase question.

### Gap 1 — Battery: the blank is filled (this was the highest-value item)

**Claimed (vendor).** imoo's product spec tables still publish no runtime. But imoo's **own Amazon
DE listing titles**, seller IMOO Direct, state **"1-2 Tage Nutzung"** (1–2 days' use) — the most
specific figure imoo attaches to the Z3 anywhere. Three louder numbers conflict with it and with
each other, and none is a measurement:

| Claim | Source | Status |
|---|---|---|
| **1–2 days** | imoo's own Amazon.de listing titles (IMOO Direct) | vendor claim, and the only one that matches observation |
| **6 days** ("Akkulaufzeit 6 Tage") | Deutsche Telekom shop spec sheet | retailer/carrier metadata, unsupported |
| **8 days** | imoo's own SG page meta description | imoo's own copy, contradicted by imoo's own spec table |
| **up to 168 h (7 days)** | MediaMarkt product data | retailer metadata, unsupported |
| **~2 days** | eMAG seller DeiTim ("autonomie de până la 2 zile") | reseller copy (already recorded) |
| **14 hours** | AliExpress `wiki-ssr` AI article | already disqualified; still disqualified |

**Observed (first-hand, dated, two independent owners, both Z3):**

> **Edm-Tech&House** (France), YouTube **2026-07-22**, after **3 weeks** of daily use by his son:
> *"L'autonomie en règle générale tourne autour de 2 jours. De jours complets."*
> ("Battery life generally works out at around 2 days. Full days.")
> and, decisively for a school day:
> *"si on est amené à aller en camping, il va porter la montre du matin au soir et là effectivement
> en fonction de la sollicitation de la montre, on atteindra plus ou moins les 50 %."*
> ("if we go camping he'll wear the watch from morning to evening, and there, depending on how
> much the watch is used, we'll get to more or less 50%.")
> Charging: *"j'ai fait un 10 % à 60 % en 30 minutes"* ("I did 10% to 60% in 30 minutes").
> Caveat, in his own words: the watch is **not** worn like an adult watch — *"votre fils va pas
> mettre la montre dès son réveil et l'enlever à son coucher"* — so his "2 days" spans intermittent
> wear. **The morning-to-evening figure is the honest one for a 9.5 h school day: about half the
> cell gone.** Channel has 19 subscribers, 283 views, and an Amazon affiliate link in the
> description — disclosed, but the review is critical in four places and reads as genuine.

> **Bea**, Amazon.de **verified purchase**, **16 July 2026**, colour "Z3-pink", child *"fast 7"*:
> *"Da wir keine Spiele nutzen hält der Akku bei uns gute 2 Tage."*
> ("Since we don't use games the battery lasts a good 2 days for us.")

**Sibling evidence, which sets the pessimistic bound.** A German **Z1** owner (Amazon.de verified
purchase, **4 June 2024**, Viktoria S., 1★) writes:
> *"auch bei nicht Nutzung von Telefonie oder Videoanrufen hält der Akku maximal einen Tag, wenn
> die Tracking Funktion läuft."*
> ("even without using calls or video calls the battery lasts a maximum of one day when the
> tracking function is running.")

Same 740 mAh cell, older model, and by her account the watch was already failing. Another Z1 owner
(**Irina Stehlau**, 23 June 2026, 5★) gets *"bis zu 3 Tagen"* and notes that **disabling the step
counter "significantly saves battery"** — a lever worth knowing.

**Conclusion: plan on ~2 days of real mixed use, about half the battery gone after a full day of
continuous wear, and charge nightly.** That clears the 9.5 h school-day floor with margin. Note
also that imoo ships a customer FAQ video on its own Amazon listing titled *"Warum verbrauchen
Uhrenbatterien so schnell ihre Energie?"* ("Why do watch batteries use up their energy so
quickly?") — the vendor considers fast drain a common enough complaint to script an answer.

### Gap 2 — Real owner reviews, and the review-pool trap the brief warned about

**The trap is real and it is on the main Amazon.de Z3 listing.** ASIN **B0FNWFQ2FP**, titled
"imoo Z3 Smartwatch Children…", displays **"4.0 out of 5 stars (3,759 global ratings)"**. It is
**not a Z3 review pool.** The reviews inside carry `Colour Name:` values of **Z1-green, Z1-pink,
x10-grey** as well as Z3-blue/Z3-pink, and are dated as far back as **2023 and 2024** — years
before the Z3 existed. Amazon has merged the Z1, Z3 and X10 into one variation family. **Do not
cite 3,759 / 4.0 as a Z3 figure.** The genuinely Z3-titled listings carry **66, 41, 35, 17, 16 and
7 ratings** respectively.

**Genuinely Z3-specific owner reports found (all dated, all verified purchase unless noted):**

- **Bea, Amazon.de, 2026-07-16, 5★, Z3-pink, verified.** The single most useful review for this
  buyer, because her child is the same age. One week of use.
  - *"die uhr ist super intuitiv bedienbar, mein Kind ist fast 7 und kommt super zurecht"*
    ("the watch is super intuitive to use, my child is almost 7 and gets on with it brilliantly")
  - *"die Ortung ist bisher immer bis auf 10-20 Meter genau. Wir hatten noch keinerlei
    Fehlortungen. Im Gegenteil, ich war sogar überrascht von der Genauigkeit."*
    ("location has so far always been accurate to 10–20 metres. We have had no mislocations
    whatsoever. On the contrary, I was actually surprised by the accuracy.")
    **This is the only quantified Z3 accuracy figure that exists.**
  - *"es sind nur wenige Spiele auf der Uhr welche man über die Elternapp deaktivieren kann"*
  - *"Man kann im Schulmodus verschiedene Tage mit unterschiedlichen Uhrzeiten einstellen"*
    (per-day school-mode schedules)
  - *"das Kind kann nur von Nummern angerufen werden, die über die Elternapp freigeschaltet wurden"*
  - Complaint: a permanent Android notification-bar icon; killing the permission also kills family
    chat notifications. Setup required disabling the SIM PIN in a phone first.
- **anna, Amazon.de, 2026-05-26, 3★, Z3-blue, verified** — the important negative:
  > *"Die Uhr funktioniert zwar, will man jedoch darauf anrufen, braucht man mehrere Versuche.
  > Das ist für den Preis echt schade. Würde ich nicht mehr kaufen."*
  > ("The watch does work, but if you want to call it, you need several attempts. For the price
  > that's a real shame. I wouldn't buy it again.")
  **Inbound calling is unreliable on the Z3 in Germany.** See gap 5.
- **PolleBln, MediaMarkt.de, 2025-12-14, 5★, verified**, *"Super einfach!"*:
  Vorteile *"Einfache Bedienung, Menüführung einfach, leicht, kompakt, gutes Display"*;
  Nachteile *"SIM Karte muss auf externen Handy eingerichtet werden"*; *"Das Kind kommt super
  mit klar ohne viel Erklärungen."* MediaMarkt's Z3 page shows **4.7 from just 3 ratings**, and
  discloses that it also imports ratings *"aus Dritt-Quellen (z.B. Hersteller-Seite)"* — i.e.
  partly from the manufacturer's own site. Treat as thin.
- **Michele, Amazon.de, 2026-08-10, 5★, Z3-pink, verified (Italy)** — content-free
  (*"Orologio fantastico x i bambini"*).
- **Edm-Tech&House (France)**, two YouTube videos — setup/first boot and the 3-week verdict.
  Covered throughout this section.

**Astroturf: one strong suspect, discounted.**
> **Ellen**, Amazon.de, **18 November 2025** (ten days after launch), 5★, Z3-blue, verified,
> ~1,200 words with markdown headers and emoji section dividers (`## ✅ Erster Eindruck`,
> `## ⚙️ Leistung`), 34 "found helpful".

It contains a **factual error a real comparing owner would not make**: it praises *"Die neue
Kamera mit höherer Auflösung … eine großartige Verbesserung gegenüber den 2 MP des Z1"* — but the
Z3's camera is also **2 MP**, per imoo's own spec table. It also volunteers *"Der Support von imoo
ist erstklassig"* unprompted. **Discounted as probable seeded/incentivised copy.** Its claims
(2 days battery, 'C' SOS gesture, no games) happen to be corroborated elsewhere, so nothing is
lost. An Indian Z1 review in the same pool (Ajinkya, 2026-05-19) has the same promotional shape
and is likewise discounted. Note also that imoo **"Asks customers to review"** and holds a **paid
Trustpilot subscription** (Trustpilot's own transparency labels).

**Review suppression, first-hand.** Trustpilot, **Lisa Matthews (IE), 2025-06-07, edited
2025-06-25**, 1★, on two imoo watches bought from the EU store:
> *"After reaching out to the company numerous times my husband eventually got hold of someone who
> refunded us and we are grateful for that. The incredibly frustrating part was … **I was asked to
> remove my review by the company. I can see from other reviews that I wasn't the only one.** Just
> not a good look if I'm being honest."*

Her substantive complaint matters too: both watches stopped tracking within days and powered
themselves off, showing a *"network connection"* error; imoo support blamed her Virgin Media SIM
and told her *"Vodafone or Three would be the preferred networks"*; changing networks did not fix
it; both then reported *"no sim detected"*. Ireland — a small market with no imoo storefront until
recently — is the closest structural analogue to Romania in this whole corpus.

**Trustpilot overall (imoostore.com, accessed 2026-08-19): 2.8 from 55 reviews** — 51% 5★ but
**38% 1★**, 28 reviews in the last 12 months, *"Replied to 6% of negative reviews"*,
*"Typically replies within 1 month"*. Recent 1★ entries include **Maeve McKillop, 2026-08-06**
(*"Absolutely terrible customer service, non responsive and never seem to be available"*) and
**Fabio Primavera, 2026-06-24** (*"What a poor service. The GSM connection never worked. After 8
days from opening a ticket for assistance…"* — truncated in the listing view).
**A keyword search of that Trustpilot profile for "Z3" returns one review, and it is about
customer service, not the watch.** The separate `imoo.me` (Middle East) profile scores 4.7 from
271 — a different region and a different solicitation regime; do not merge them.

#### The pool the earlier passes missed entirely: Allegro.pl, 13 Polish Z3 owner reviews

**Allegro 403s a plain fetch and renders fine in a browser tab.** Opened 2026-08-19. The Z3 has a
merged product page across both colours: **4.81/5 from 27 ratings and 13 written reviews**, with
Allegro's own banner **"Wszystkie opinie są potwierdzone zakupem"** ("All reviews are confirmed by
purchase"). Distribution: **25 × 5★, 1 × 4★, 0 × 3★, 0 × 2★, 1 × 1★.** Price 549 zł (~€128),
almost all sold by **imoo-Polska**, "56 osób kupiło ostatnio". **This is by a distance the largest
verified-purchase Z3 owner pool in existence, and it is from an EU market structurally similar to
Romania.** Verbatim, with translations:

- **11 czerwca 2026, 5★, pink** — the best single account of everyday use:
  > *"Uruchomienie oraz sparowanie z aplikacją Imoo przebiegło bez problemu. Wszystko jest w języku
  > polskim, instrukcja również. Wyświetlacz wystarczająco czytelny nawet w jasnym słońcu. **Jakość
  > rozmów przeciętna**, lokalizacja nie jest taka super jak w telefonach albo zegarkach
  > treningowych ale w zupełności wystarczy. **Baterię ładujemy codziennie lub co drugi dzień, gdyż
  > dziecko dużo przebywa na dworze i korzysta z rozmów.** Po zakupie warto założyć jakieś szkło
  > ochronne na wyświetlacz bo szybko powstają rysy."*
  > ("Start-up and pairing with the Imoo app went without a problem. Everything is in Polish, the
  > manual too. Display legible enough even in bright sun. **Call quality average**, location is not
  > as great as on phones or sports watches but entirely sufficient. **We charge the battery daily
  > or every other day, because the child spends a lot of time outdoors and uses calls.** After
  > buying it's worth putting a screen protector on because scratches appear quickly.")
- **23 czerwca 2026, 5★, blue** — **the most important negative in the whole pass for this buyer:**
  > *"Zegarek spełnia swoje funkcje. … **Nie ma gier, które wciągałyby dziecko.** Rodzic może
  > ustalić wszystkie dostępy (listę kontaktów, wysyłanie wiadomości SMS…). Możliwość blokady
  > podczas zajęć szkolnych. **Nie wysyła komunikatów, że dziecko pojawiło się/opuściło wyznaczoną
  > strefę (np. szkołę, trening), potrzebne jest do tego każdorazowe logowanie do dostępnej w danym
  > miejscu sieci wi-fi.**"* Wady: *"Brak komunikatów wyżej opisanych."*
  > ("The watch does its job. … **There are no games that would suck the child in.** The parent can
  > set all the permissions (contact list, sending SMS…). Ability to lock during school lessons.
  > **It does not send notifications that the child has entered/left a designated zone (e.g. school,
  > training) — that requires the watch to log on each time to the Wi-Fi network available at that
  > location.**" Cons: "The absence of the notifications described above.")

  **Read that carefully: geofence arrival/departure alerts on the Z3 are Wi-Fi-anchored, not
  GPS-anchored, and in this owner's hands they do not fire.** "Has my child arrived at school?" is
  the single most common reason a parent buys this class of device, and on the Z3 it apparently
  requires the school Wi-Fi credentials to be on the watch. This is corroborated by the mechanism:
  the German Amazon reviewer describes the same feature as *"Sicherheitszone – Richten Sie sichere
  **WLAN**-Zonen ein (z. B. zu Hause oder in der Schule)"* ("Safety zone — set up secure **Wi-Fi**
  zones, e.g. at home or at school"). **Verify this in week one; it may be the deciding limitation.**
- **29 czerwca 2026, 5★, pink** (most-helpful, 3 upvotes) — a Garett switcher:
  > *"Najpierw kupiłem garret, badziew z milionem opcji i żadna dobrze nie działała … zamówiłem
  > najpierw Z1 … po tym jak Z1 okazał się dobry, wymieniłem na z3, **lokalizacja i zasięgi
  > bezproblemowe dalej, wodoodporność działa, dziecko cały dzień w basenikach i zegarek działa.
  > Garret pokazywał 5km dalej…**"* Wady: *"Wideo rozmowa mogłaby mieć lepszą jakość."*
  > ("First I bought a Garett, junk with a million options and none of them worked properly …
  > I first ordered the Z1 … after the Z1 turned out good, I swapped to the Z3, **location and
  > signal still trouble-free, waterproofing works, the child spends all day in paddling pools and
  > the watch works. The Garett was showing 5 km away…**" Cons: "Video call could be better
  > quality.") — his "battery 4 days" figure is stated of the **Z1**, not the Z3.
- **11 sierpnia 2026, 5★, pink**: *"**Bateria trzyma dwa dni.** … Rozmowy wyraźne, nic nie przerywa
  … Liczy kroki, budzik, Latarka, **bez zbędnych aplikacji, które tylko rozpraszają dziecko** …
  Polecam na pierwszy zegarek dla dziecka!"* ("**The battery lasts two days.** … Calls clear,
  nothing cuts out … Step counter, alarm, torch, **without superfluous apps that only distract the
  child** … I recommend it as a first watch for a child!")
- **23 maja 2026, 5★, pink**: *"Może niekoniecznie jest ta mapka taka dokładna co do metrów, ale
  zdaje egzamin, czytałam, że trzeba baterie ładować co dwa dni, **na szczęście u nas trzy/cztery**."*
  ("The map may not be accurate to the metre, but it passes the test; I'd read you have to charge
  the battery every two days — **luckily for us it's three or four**.")
- **20 marca 2026, 5★, pink** (seller Canoe-Polska): *"Dokładna lokalizacja, bateria na 2 dni"*
  ("Accurate location, battery for 2 days").
- **23 kwietnia 2026, 5★, blue**: *"**Można z poziomu rodzica wyłączyć niektóre aplikacje**,
  zarządzać połączeniami itp."* ("**Some apps can be switched off from the parent side**, calls
  managed, etc.") — independent confirmation of the app/game kill switch.
- **17 kwietnia 2026, 5★, pink**: *"Prosta obsługa. **3 latka potrafi zadzwonić do kontaktów.**"*
  ("Simple to operate. A 3-year-old can call contacts.") Pros: *"Można pływać."*
- **4 czerwca 2026, 5★, blue**: two complaints — only blue and pink exist, and *"rozmowy między
  dziećmi są tylko w zegarku i nie widać ich w app"* ("chats between children are only on the watch
  and can't be seen in the app"). **A real parental-visibility gap: child-to-child messaging is
  invisible to the parent.**
- **19 czerwca 2026, 4★, pink**, sole complaint: *"Brak możliwości podsłuchiwanie otoczenia
  zegarka."* ("No ability to listen in on the watch's surroundings.") — **first-hand owner
  confirmation that no remote listen-in exists on the Z3.** A parent went looking for it and could
  not find it. Useful, if imperfect, evidence for the covert-listening question.
- **23 czerwca 2026, 1★, blue** — the only negative, and it is the familiar failure shape:
  > *"Nie polecam produktu. Gubi lokalizacje, przeskakuje, ma problem z aktualizacją lokalizacji,
  > **zawiesza się przy wideorozmowie**, nie jest wart swojej ceny."* Wady: *"Nie pokazuje
  > prawidłowej lokalizacji, zawiesza się przy połączeniach."*
  > ("I don't recommend this product. It loses location, jumps around, has a problem updating the
  > location, **freezes during video calls**, it isn't worth its price." Cons: "Doesn't show the
  > correct location, freezes during calls.")
- **25 czerwca 2026, 5★, blue** and **12 lipca 2026, 5★, pink**: short/content-free.

**Reading of this pool.** 4.81 is a flattering headline for a set that is mostly short, positive,
and collected by the vendor's own Allegro store — but every review is purchase-verified, several
are long and specific, and the two most detailed are **mixed, not glowing**. The consistent
signals across all 13 are: **battery 2 days (one household 3–4, one charging daily under heavy
use); location good enough but not metre-accurate and sometimes stale; video calls the weakest
function; no distracting apps; genuinely waterproof; easy enough for a toddler.** That is a
coherent picture and it matches the French and German owners exactly.

**Verified negatives — searched and found nothing:**
- Reddit **comment** search `"imoo z3"` (www.reddit.com/search/?q=%22imoo+z3%22&type=comment):
  **zero results.**
- Reddit **post** search `"imoo Z3"`: exactly **one** thread — r/AskIreland, `1uhdcvc`,
  *"Imoo z3 kids smart watch?"*, ~July 2026, 7 comments. **No Z3 owner replied.** Respondents
  recommended Xplora instead; one (**Pugafy**) noted *"a couple of their pals has the imoo. Couple
  of years later they all have the Xplora."* One (**Imaginary-Knee-9492**) runs an **imoo Z1** two
  years on a Tesco Mobile IE SIM: *"They can call pre-approved friends or adults… We got a basic
  Tesco SIM and are paying 10 a month!"*
- Reddit comment search `imoo (Romania OR Bulgaria OR Hungary OR Poland OR Greece OR Czech OR
  Orange OR Digi OR Vodafone)`: **no imoo content from any of those countries.** The earlier
  sweep's negative is confirmed.
- **imoo's own EU store product page carries no review widget at all** — no judge.me, yotpo,
  okendo, loox or aggregateRating markup. imoo does not collect reviews on its own EU shop.
- eMAG: unchanged since the first pass. Blue SKU still 1,522.99 RON, seller **DeiTim**, **zero
  reviews**. New marketplace sellers have appeared (OVOLT România, LIVING WELL SRL, EASY-SHOP KFT,
  GLOBART ARTUR KOWALCZYK). Still **no eMAG first-party Z3 and still no Romanian review.**

**iOS App Store sweep, 7 EU + 6 APAC storefronts (RO, DE, ES, IT, FR, IE, PL, SG, MY, TH, ID, AU,
NZ), 2026-08-19.** No new Romanian review beyond the two already recorded. The most load-bearing
new entries are all **platform-level (app), not Z3-specific**:
- **DE, 2026-05-01, fs69, 1★** — a registration failure in a *supported* market:
  > "Registration is blocked because the user agreement cannot be accepted. The 'Register' button
  > stays disabled even after checking the box. The app shows an invalid effective date (August
  > 2025). This seems to be a server-side issue."
  This reframes the Romanian *"Can not login with the phone number"* report: **imoo's signup flow
  breaks for reasons that have nothing to do with country support.**
- **DE, 2025-10-05, Elemenopeqeresteuvauwe, 3★** — *"Die Ortung funktioniert so gut wie gar nicht.
  Aktuell hat sie mehr als eine Stunde Verzögerung und angeblich befinden sich meine Kinder immer
  noch in unserer Parallelstrasse. Das AirTag in ihren Geldbeuteln zeigt jedoch die Schule an."*
  ("Location barely works at all. Right now it has more than an hour's delay and supposedly my
  children are still in our parallel street. The AirTag in their wallets shows the school though.")
- **DE, 2026-06-21, ErsinK, 4★** — *"Wenn meine Tochter bereits in der Schule ist, zeigt die Karte
  mir an, dass sie ca. 50 Meter von der Schule entfernt ist. Erst nach 5 min Aktualisierung zeigt
  es mir dann an, dass sie angekommen ist."* (~50 m error at school, resolving after a 5-minute
  refresh.)
- **DE, 2026-01-29, Doktorschiwago, 1★** — *"Neuerdings bekommt man jedes Mal, wenn das Kind
  telefoniert eine Nachricht mit dem Standort. Diese Funktion lässt sich nicht ausstellen!"*
  ("Recently you get a message with the location every time the child makes a call. This function
  cannot be turned off!") Confirmed as a documented feature: the Romanian Play listing names it
  *"Raportul locațiilor de apel"*.
- **SG, 2024-08-08, DxcXroS, 3★** — *"Need a function to change watch APN. With sim cards on market
  with specific APN settings, imoo should allow users to have that function of self adjusting apn
  address"* — **there is no user-facing APN editor.** Relevant to any Romanian MVNO.
- **AU, 2024-01-29, 1★** — *"The phone can only call out and send chat messages. Parents can't call
  in."* **AU, 2024-05-03, Denny02773, 1★** — *"Unable to make a call to the watch as an
  Administrator."* Together with the UK *"watch rings but won't answer"* (2025-04-21) and the
  German Z3 *"braucht man mehrere Versuche"*, this is a **five-country, five-year inbound-calling
  pattern**. imoo itself ships an Amazon FAQ video titled *"Warum kann mein Kind keine Anrufe
  annehmen?"* ("Why can't my child answer calls?").
- **ES, 2022 cluster (3 reviews)** — *"la localización no funciona si no es con wifi"*. Echoed by
  a Swedish Z1 owner, **2026-04-20**: *"locating and video call only works in Wi-Fi."* imoo ships
  a FAQ video for this too: *"Warum funktioniert die Uhr normal, wenn sie mit Wi-Fi verbunden ist,
  aber nicht, wenn sie Mobilfunkdaten verwendet?"*

**Three vendor FAQ videos, on imoo's own listing, answering exactly the three failure modes users
report — battery drain, inbound calls, and mobile-data-vs-Wi-Fi — is the strongest single
indicator that these are the product's real, known, recurring problems.**

### Gap 3 — Launch date: established

**November 2025.** imoo Singapore's own YouTube channel uploaded *"🚀 imoo Watch Phone Z3 Launches
Tomorrow!"* on **2025-11-07** (`OslmlJ5fbXc`, 11,162 views), with a launch livestream advertised
for *"7 Nov, 7–9PM, imoo Official website"*. The generic "imoo Watch Phone" channel uploaded
*"Launches Now!"* on **2025-12-22** (`SEKjRrE6P6Q`) — likely the wider/EU rollout. The earliest
verified-purchase European owner review found anywhere is **Amazon.de, 2025-11-18**; the earliest
MediaMarkt DE rating is **2025-12-14**. imoo's own positioning: *"Upgraded from Z1 … 1.5" upgraded
display, 20m water resistance, stronger network connection, 8GB storage."*

**So the Z3 is ~9 months old and its EU life is ~8 months.** The evidence thinness is structural,
not a research failure, and the score should say so rather than hide it. Nobody has owned one
long enough to report on year-two behaviour, battery ageing, or firmware abandonment — and the
Z1 corpus shows all three are where imoo watches fail (GPS dead at 8 weeks, telephony unreliable
at 18 months, SIM stops being recognised at 12 months).

### Gap 4 — Positioning: Galileo absence confirmed, and one real accuracy figure

**Confirmed from the primary source, three storefronts (EU, UK, SG) and the Indian store, all
2026-08-19: `Locating Technology: GPS, GLONASS, QZSS, Wi-Fi, LBS`. No Galileo. No BeiDou.** The
marketing copy on every page says only *"Multi-system positioning (GPS, GLONASS, Wi-Fi, and QZSS)"*.
No teardown of the Z3 exists in public. Amazon.de's left-hand facet list does offer a "Galileo"
filter, but that facet spans the whole result set including the Z7 — **it is not a Z3 attribute**,
and is exactly the kind of retailer metadata that produced the "7-system GPS" myth.

**Real-world behaviour — now three data points where there were none:**
- **Bea (DE, Z3, 2026-07-16):** *"die Ortung ist bisher immer bis auf 10-20 Meter genau. Wir hatten
  noch keinerlei Fehlortungen."* — 10–20 m, no mislocations, one week.
- **Edm-Tech&House (FR, Z3, 2026-07-22):** *"La géolocalisation est correcte. … nous avons fait des
  tests dans le sens où il s'est placé sur des noms de numéros de maison qu'on connaissait et la
  géolocalisation remontait bien le numéro de cette maison-là au niveau de la rue."*
  ("Geolocation is correct. … we ran tests where he stood at house numbers we knew and the
  geolocation correctly reported that house number on the street.") — street-address resolution
  outdoors.
- **ErsinK (DE, platform, 2026-06-21):** ~50 m error at a school, resolving after a 5-minute
  refresh.

**Nobody has tested it indoors.** Cold-fix time is still UNKNOWN. Given that the Z3 has **no
location history**, the only thing that matters operationally is the on-demand fix — and the
honest summary is: **outdoors it resolves to street level; indoors is untested and the platform's
worst recurring complaint.**

### Gap 5 — VoLTE in Romania: the disqualifying risk does not hold up

This was flagged as potentially disqualifying. **It is not.** Three independent strands.

**(a) A European owner runs the Z3 on an operator that is not on imoo's list.** The French owner's
setup video shows the watch on a **Free Mobile** nano-SIM taken from an existing consumer plan.
imoo's published French carrier list is *"Orange/SFR/Bouygues"* — **Free is absent.** In his own
words while showing the notification shade: *"je vois qu'on a mon opérateur free, la 4G avec le
LTE… les barres de signal"*, and immediately afterwards he places a two-way voice call from the
watch: *"Allô ? … OK, donc on a bien le son dans les deux sens."* ("so we do have sound in both
directions"). **An operator absent from imoo's carrier list works.** imoo's carrier list is
marketing scope, exactly as this document already concluded — and now that is demonstrated, not
inferred.

**(b) Romanian VoLTE is a SIM-profile flag, not a network-enforced device whitelist.** The
long-running Romanian community list of Digi VoLTE devices
(<https://volteromania.blogspot.com/p/phones.html>, accessed 2026-08-19) contains **zero
occurrences of "imoo" and zero occurrences of "Watch"** across 78 Samsung and 36 Xiaomi entries —
but its whole method is the workaround. Verbatim, from that page:
> *"SIM activat cu VOLTE in alt tip de tel. compatibil."*
> ("SIM activated with VoLTE in another compatible type of phone.")
> *"sim provizionat in alt telefon compatibil"* ("SIM provisioned in another compatible phone")
> *"merge Volte si Vowifi pe J7 2017 insa trebuie sa-ti activezi optiunea de Volte pe un telefon
> compatibil Volte din lista de telefoane de la Digi."*
> ("VoLTE and VoWiFi work on the J7 2017 but you have to activate the VoLTE option on a phone that
> is on Digi's compatible-phone list.")
> *"Trebuie doar sunat la ei pentru provizionare manuala."*
> ("You just have to ring them for manual provisioning.")
> *"inainte de a incerca trebuie sa aveti SIM cu profil VoLTE activat, se vede in contul
> digiromania"* ("before trying you must have a SIM with the VoLTE profile activated, visible in
> your digiromania account")

**Practical consequence: put the Romanian SIM in your own phone once, confirm the VoLTE profile is
active on the account, then move it to the Z3.** If it does not take, one phone call to the
operator provisions it manually.

**(c) imoo will confirm band compatibility on request.** An owner of the sibling X10 (Amazon.de
review pool, US storefront, **2026-06-02**) writes:
> *"After verifying compatible bands with Imoo customer service, the watch in fact works flawlessly
> with my local Canadian SIM and phone plan. So FYI this watch is not locked to Verizon for all
> those parents wondering."*

**Verified negatives on the whitelist question:** Orange Romania's own 4G-call page
(<https://www.orange.ro/servicii/apel-4g/>, fetched 2026-08-19) contains **zero occurrences of
"imoo", "smartwatch" or "ceas"**; the Digi community list likewise. So no Romanian operator names
this device — **but nothing found suggests any Romanian operator blocks unlisted devices from
VoLTE, and the community evidence says the opposite.**

**What remains genuinely unresolved:** whether the Z3 falls back to 2G CSFB if VoLTE is truly
absent. The hardware is there — imoo publishes GSM900 at 33 dBm ± 2 dB — but no source demonstrates
the fallback working. `voice_fallback` stays UNKNOWN. Orange or Digi (2G still live) remain the
right choice over Vodafone.

**The real voice risk is not VoLTE — it is inbound calling.** See gap 2: German Z3 owner *anna*
needing *"mehrere Versuche"* to call the watch; Australian, UK and Irish reports of the same
asymmetry (outbound fine, inbound fails); imoo's own FAQ video on the subject. Also note a hard
video-call limit found by the French owner:
> *"Si vous faites un appel visio sur la montre, au bout de 10 minutes, vous allez avoir une alerte
> sur l'application qui va vous dire que la montre chauffe et que bientôt l'appel mettra fin… en
> visio vous avez entre 10 et 15 minutes d'appel possible. En appel standard, je n'ai pas vu de
> limitation."*
> ("If you make a video call to the watch, after 10 minutes you get an alert in the app saying the
> watch is overheating and the call will soon end… on video you have between 10 and 15 minutes of
> call available. On a standard call I saw no limit.")

He also confirms **plain dialling and plain SMS to the watch work without the app at all**, and
that unapproved numbers are auto-rejected into a "rejected numbers" list.

### Gap 6 — The Romanian account flow

**The Android app IS published in the Romanian Play storefront. Settled.** Loaded in a real browser
at `play.google.com/store/apps/details?id=com.imoo.watch.global&gl=RO&hl=ro` on 2026-08-19: the
listing renders fully localised into Romanian, states **"Aplicația este disponibilă pentru
dispozitivul tău"** ("The app is available for your device"), shows **1 mil.+ Descărcări**, last
updated **21 iul. 2026**, publisher PT IMOOLINK GLOBAL TRADING, and the footer reads **"România
(română)"**. `app_ro_playstore` is now `yes`. Play declares *"Nu sunt trimise date terțelor părți"*
("No data shared with third parties") and collected types *"Locație, Informații cu caracter
personal și încă 5"*. **Step 1 of the pre-purchase test is therefore already passed.**

**+40 registration itself is still undemonstrated** — nobody has publicly shown a Romanian number
completing SMS verification. But the one Romanian failure report is now much weaker evidence of a
country block than it was, because **the identical failure occurs in Germany**, a first-tier imoo
market (fs69, 2026-05-01, above). The balance has shifted from "probably possible, unproven" to
**"probably possible, with a documented app-layer bug that hits supported countries too"**.

**No Romanian watch language.** imoo's Z3 spec table lists the supported languages as *"British
English/Spanish/German/Polish/Italian/French/American English/Chinese/Traditional Chinese/Thai/
Indonesian/Malay/Vietnamese"*. **Romanian is not among them.** A 7-year-old in Romania will use an
English-language watch UI. This is a concrete, checkable, previously-unrecorded downside — and
it is the kind of thing that quietly decides whether a young child actually uses the device.
(The parent app *is* localised into Romanian; the watch is not.)

### Gap 7 — Data jurisdiction

Still **UNKNOWN**, and now better characterised. New facts:

- **imoo publishes an EU-specific Data Act disclosure** at
  `static-res-www.imoo.com/EU/files/Data_Act--imoo_Watch_Phone-V1.0_2025.10.29.pdf`, linked from
  the EU site footer and from the Amazon listing as "Data transparency declaration (PDF)". It
  **explicitly names "imoo Watch Phone z3"**, so it governs this device. That is a real compliance
  artefact, and more than most vendors in this field publish.
- What it discloses about the Z3, verbatim and per-field:
  - Retention for the main bundle: *"no longer than **10 years** after the data subject ceases
    using the services"*. Chat: 7 days. Historical track: 14 days. Health/steps: 31 days.
  - **"Watch's Networks: Wi-Fi name, password, MAC address"** is a declared field — but the same
    document annotates it **"6. Watch Network: Do not collect"**, and **"9. Network connection
    status: collected during use (currently only supported by Z7)"**. **So the Z7's SSID-and-
    password finding does NOT transfer to the Z3 on imoo's own account.** That is a point in the
    Z3's favour and it should be recorded as such. It is imoo's own assertion, not an audit.
  - **"2. Contact list: not collected"**, **"5. Custom photo wallpaper: Do not collect"**,
    **"13: Photo library: not collected"**, **"10. Application system permissions: Do not
    collect"**. Collected during use: partial LBS data, calls (nickname, duration, date, phone
    number), app usage logs, AI scanner photos, Application Center usage.
  - Erasure routes: factory reset, service cancellation, or a **DSR (Data Subject Rights)**
    request.
- **No EU establishment.** imoo's declared corporate address on its own Trustpilot profile is
  **"9 RAFFLES PLACE, #26-01 REPUBLIC PLAZA, SINGAPORE 048619"**; the Android publisher is the
  Indonesian **PT IMOOLINK GLOBAL TRADING**; there is no imprint page on the EU store
  (`/pages/impressum`, `/pages/contact-us` and `/policies/terms-of-service` all 404); and the only
  reachable EU privacy policy is still Shopify e-commerce boilerplate with no controller named.
  **So: an EU compliance document with no EU controller behind it.** A GDPR/DSAR would have to be
  addressed to support@imoo.com and hope.
- imoo does run a **Responsible Disclosure** programme (footer link) — noted, but still no public
  audit, no CVE, and no independent research naming imoo, BBK or the UWS6135E.

**imoo's Google Play Data safety card contradicts imoo's own EU Data Act disclosure.** Both were
read on 2026-08-19 (`play.google.com/store/apps/datasafety?id=com.imoo.watch.global&gl=RO`).
The Play card declares, for **PT IMOOLINK GLOBAL TRADING**:
> "**No data shared with third parties.** … Data this app may collect: **Location** (Approximate
> location and Precise location); App activity (App interactions); Device or other IDs;
> **Photos and videos**; **Personal info** (Name, Email address, User IDs, **Address**, and Phone
> number); **Audio** (Voice or sound recordings **and Music files**); App info and performance.
> … Data is encrypted in transit. You can request that data be deleted."

Set against the Data Act disclosure for the same platform, at least three fields conflict:

| Field | EU Data Act disclosure (imoo) | Google Play Data safety (imoo) |
|---|---|---|
| Photo library / wallpaper | *"5. Custom photo wallpaper: Do not collect"*, *"13: Photo library: not collected"* | **"Photos and videos"** declared collected |
| Home address | *"4. Children's information: collected when gender is used, **not collected for others**"* (home address is a listed child field) | **"Address"** declared collected |
| Contacts | *"2. Contact list: not collected"* | not listed on Play — but the **iOS** privacy label declares **Contacts** as *"Data linked to you"* |

**At least one of these documents is wrong, and they are both imoo's.** The declared **"Music
files"** under Audio is also unexplained by any published feature. This is the same defect pattern
the Carneo pass found on the TGELEC platform, and it is the reason none of imoo's privacy
self-descriptions — including the reassuring *"Watch Network: Do not collect"* line that keeps the
Z7's Wi-Fi-password finding off this device — should be treated as verified fact. **They are
vendor assertions that demonstrably disagree with each other.**

**No AGPS / positioning-server region selector was found on the Z3.** Searched both French
owner videos (16-minute first-boot walkthrough and 16-minute review) for *serveur, région, AGPS,
Chine, chinois, Asie*: the only hit is his observation that video calls route through an imoo
server (*"ça passe par un serveur de chez imoo"*). Unlike the TGELEC/SeTracker platform, **imoo
exposes no user-selectable location server**, so the Carneo "switch the AGPS server to Google"
remedy has no analogue here — for better (nothing to misconfigure) and worse (nothing to fix).

### Gap 8 — SOS, App Center, and what can actually be turned off

**SOS is a screen gesture, not a button, and this is the finding to weigh hardest for a
7-year-old.** From imoo's own EU store page, verbatim:
> **"Emergency Call — One quick 'C' on the screen sends a quick call to the admin, ensuring prompt
> protection."**

And from imoo's own Amazon.de listing:
> "SOS Emergency Call: In an emergency, the child can quickly trigger an SOS call by **drawing the
> letter 'C' on the screen**. The device automatically contacts the preset emergency contacts."

Three consequences:
1. **The Z3 has exactly one physical button (power).** Confirmed on video by HardReset.Info's
   teardown-style unboxing (`I7VuwObKkDo`): *"And where is this? Okay, there's a button."*
2. A distressed 7-year-old must **unlock the screen and draw a legible 'C'**. Compare the physical
   SOS buttons on the TCL MT48, Xplora and Angel Watch. Independent corroboration that imoo lacks
   one comes from an unexpected direction — **EE's official Reddit account** (`EE_uk`, r/smartwatch,
   ~2026-08-17) recommending the imoo Z7 but framing the trade-off as *"choosing between a physical
   SOS button and the stronger health features"*. (That account is an operator marketing channel
   and reads AI-assisted; I use it only for the negative fact about the button.)
3. **SOS calls "the admin"** — the bound parent — **not emergency services.** Fine for this use
   case, but it is not a 112 button.

**App Center / games — genuinely contradictory, and the truth is "a few, and you can kill them".**
- imoo's own Amazon title: **"NO Spiele"** (no games).
- The French owner: *"elle n'a pas la possibilité d'avoir des jeux… si vous cherchez des jeux sur
  une montre, la imoo Z3 ne répondra pas à ce besoin-là"*, and on first setup *"Centre
  d'application. J'imagine que je suis redirigé mais ça aboutit à rien."* ("App Center. I assume
  I'm redirected but it leads to nothing.")
- HardReset.Info's unboxing enumerates the preinstalled watch apps — *"add friends, steps, levels,
  albums, camera, alarm clock, **shake**, messages, call settings, stopwatch, **app center**,
  storage… Okay, so looks like you can actually download applications here"*.
- Bea (DE owner): *"es sind nur wenige Spiele auf der Uhr welche man über die Elternapp
  deaktivieren kann"* ("there are only a few games on the watch which you can disable via the
  parent app").
- imoo's Data Act disclosure lists **"17. Application Center: Collection during use"** for the Z3.

**Resolution: an App Center exists on the Z3 and ships a small number of games; they are disabled
from the parent app; imoo's EU marketing sells the absence of games as a feature.** For a parent
who wants a distraction-free school watch this is close to ideal, and it is a genuine advantage
over the Z7.

**Other controls, all owner-confirmed:** Class Mode with **per-day schedules**; Sleep Mode; App
control (games killable from the parent app — confirmed independently by a German and a Polish
owner); approved-contacts-only calling with unapproved numbers auto-rejected into a visible
"rejected numbers" list; dial-pad lock; step counter disableable (saves meaningful battery).

**Geofencing exists in the UI but is Wi-Fi-anchored and one owner reports it does not fire.** The
setting is present (*"Notification d'arrivée de départ de l'enfant"* in the French app, *"safety
zone"* in the German). But the German Amazon owner describes it as *"Richten Sie sichere
**WLAN**-Zonen ein"* ("set up secure **Wi-Fi** zones") and the Polish owner of 23 June 2026 says
flatly that the alerts do not arrive and that they need the watch to join the local Wi-Fi each
time. **This is the biggest unresolved functional doubt about the device for a school run, and it
is testable in week one.**

**Parent visibility gap:** child-to-child chats are visible only on the watch, not in the parent
app (*"rozmowy między dziećmi są tylko w zegarku i nie widać ich w app"*, Allegro, 2026-06-04).

**No remote listen-in.** A Polish owner docked a star specifically because it is absent:
*"Brak możliwości podsłuchiwanie otoczenia zegarka."* ("No ability to listen in on the watch's
surroundings.") That is an owner looking for the feature and not finding it — the strongest
available evidence that the parent-facing capability genuinely does not exist. It remains silent
on firmware capability.

**Not disableable:** the **call-location report** — the watch reports its location to the parent
every time a call is made, and a German owner states flatly *"Diese Funktion lässt sich nicht
ausstellen!"* (2026-01-29). Romanian Play describes it as a feature: *"Raportul locațiilor de apel:
Când ceasul sună la telefon, acesta raportează automat locația apelului către părinți."*

**A parental-control hole, sibling-labelled (Z1):** children can reach watch Settings themselves.
**Stephanie**, Amazon.de verified purchase, **2024-08-15**:
> *"Kinder können selbst an der Uhr Einstellungen (z. Bsp. Wlan an/aus) tätigen. Das ist für mich
> äußerst ungünstig. … Allerdings hat er schon öfter den Flugmodus versehentlich eingeschaltet und
> war somit nicht erreichbar."*
> ("Children can change settings on the watch themselves (e.g. Wi-Fi on/off). That is extremely
> unfortunate for me. … He has repeatedly switched on flight mode by accident and was therefore
> unreachable.")
Whether the Z3 firmware still allows this is **unverified**.

**Bricking / firmware.** One UK App Store report of a watch forgetting its binding after a firmware
upgrade (gordoninlondon, 2025-12-31) is already recorded. New: a Z1 owner reports **no way to
factory-reset from either the app or the watch** (*"Die Uhr lässt sich weder in der App noch auf
der Uhr selbst auf Werkseinstellungen zurücksetzen"* — Viktoria S., 2024-06-04), which contradicts
the Data Act disclosure's own stated erasure route ("Restore to Factory Settings"). Sibling-labelled.

**Ergonomics, from the two Z3 videos:** the on-watch keyboard is *"an absolute nightmare"* — an
alphabetically-ordered scrollable list, with a QWERTY keyboard available only when replying to a
notification (HardReset.Info). The screen picks up light scratches within three weeks and is flat,
so a tempered-glass protector fits (French owner; third-party protectors are widely sold). Water
resistance is genuinely good — the French owner ran it through showers with soap and a full day at
a lake, and the watch has a **speaker water-eject function** that works.

### What is still unknown after this pass

- Whether a **+40 number** completes SMS verification. Still the single decisive test.
- **Whether geofence arrival/departure alerts work without putting the school's Wi-Fi password on
  the watch.** One owner says no. This is now the second decisive test.
- **Indoor accuracy and cold-fix time.** No one has measured either.
- Whether the Z3 **falls back to 2G** with VoLTE unprovisioned.
- **Year-two behaviour.** The device is 9 months old. The Z1 corpus says GPS can die at 8 weeks and
  telephony degrade at 18 months; nobody has held a Z3 that long.
- Whether the Z3 firmware still lets the child toggle flight mode.
- Whether imoo will answer a Romanian pre-purchase question. Now try **(+0044) 800-640-6588** as
  well as support@imoo.com — the Canadian X10 owner got a useful band answer out of them.

### Note on instructions found in web content

None. No page, video description, transcript, review or PDF encountered in this pass contained
text addressed to an automated agent or attempting to direct its behaviour.

## Sources

All accessed **2026-08-19** unless stated.

| URL | What it established |
|---|---|
| <https://www.imoo.com/eu/products/z3> | **Primary spec.** FDD B1/B3/B5/B7/B8/B20/B28, TDD B34–B41, WCDMA B1/B5/B8, GSM 900/1800; "VoLTE: Supported"; "Z3 requires a SIM card and VoLTE service to use the calling function"; UWS6135E; 740 mAh with no runtime; GPS/GLONASS/QZSS/Wi-Fi/LBS; 1.5" 320×360; 256 MB RAM / 8 GB eMMC; 2 MP front; 20 m per ISO 22810:2010; 53.61×43.25×14.25 mm; full carrier list naming UK/DE/ES/PL/FR/IT/AU/SEA and **no Romanian carrier** |
| <https://www.imoo.com/eu/countrys> | Heading "Select Your Country/Region", text "Products may have different prices and availability based on country/region" — **it is a storefront selector, not a supported-country list.** Romania absent |
| <https://www.imoostore.com/eu/pages/shipping-policy> | Verbatim 20-country delivery list **including Romania**; "Orders can only be shipped to the country where the order is placed" |
| <https://www.imoostore.com/eu/products/imoo-smartwatch-z3> | €126.65 (from €149.00); identical carrier list and VoLTE line; battery hedge "may vary slightly depending on the usage environment" |
| <https://www.imoostore.com/uk/products/imoo-smartwatch-z3> | £129.00; "740mAh durable battery", "Ultra-long battery life" — **no runtime published** |
| <https://www.imoo.com/sg/products/z3> | Third storefront, **also no runtime**; "Multi-system positioning GPS, GLONASS, Wi-Fi, and QZSS"; "actual availability may vary by country/region" |
| <https://www.imoo.com/en/imoo-app> | Full app feature list — Class Mode, App Restrictions, Unknown Caller Alert, 14-day history, Find My Watch. **No remote-listen and no remote-photo feature named** |
| <https://www.imoo.com/eu/why-imoo> | imoo's GDPR marketing claim, quoted and attributed: "All data on imoo devices is securely stored locally…" |
| <https://www.imoo.com/eu/privacy-policy> · <https://www.imoo.com/in/privacy-policy> | Shopify e-commerce boilerplate; "Your information will be transferred outside of Europe, including to Canada and the United States"; **no controller named, no date, children's data not addressed** |
| <https://itunes.apple.com/lookup?id=1057845227&country=ro> | **App is distributed in the Romanian storefront.** Seller PT. IMOOLINK GLOBAL TRADING; v9.36.70 released 2026-07-27; RO rating 2.5 from 4 |
| <https://itunes.apple.com/ro/rss/customerreviews/page=1/id=1057845227/sortby=mostrecent/json> | The two Romanian reviews quoted verbatim (Vlad Sabau.ro 2025-07-13; Serban12345 2025-05-20) |
| <https://apps.apple.com/ro/app/imoo-watch-phone/id1057845227> | iOS privacy label incl. declared **Audio Data** and Precise Location; iOS 12.0 minimum |
| <https://itunes.apple.com/gb/rss/customerreviews/page=1/id=1057845227/sortby=mostrecent/json> | 17 dated UK reviews 2020–2026, incl. Herbs bey on "many Chinese servers", DinaNiem's leak allegation, and the recurring binding/login failures |
| <https://apkcombo.com/imoo-watch-phone/com.imoo.watch.global/> | Android app v9.36.71, **updated 2026-08-01**, Android 6.0+, PT IMOOLINK GLOBAL TRADING, 1,000,000+ installs |
| <https://www.emag.ro/search/imoo%20z3> | **No eMAG first-party Z3.** Blue SKU 1,522.99 RON seller **DeiTim**; pink 967.44 RON; another blue 2,215.68 RON |
| eMAG Z3 blue product page (`/pd/DWFHGS2BM/`) | Seller DeiTim, "ultimele 3 produse", **zero reviews**; nano-SIM; seller's own claim *"autonomie de până la 2 zile"*; 24-month legal warranty (OUG 140/2021), 14-day return |
| <https://www.prnewswire.co.uk/news-releases/imoo-is-returning-to-europe-after-3-years-with-the-newest-kids-flagship-sports-watch-phone-z7-302189692.html> | Dated **2024-07-05**; return to Europe after 3 years; **UK and Germany only**; no expansion commitment |
| <https://www.mnemonic.io/resources/blog/exposing-backdoor-consumer-products/> | Covert wiretap/remote-snapshot backdoor research — **Xplora 4 / Qihoo 360 only; imoo and BBK are not named.** Updated 2020-10-13 |
| <https://uk.imoostore.com/blogs/news/what-mobile-operators-work-with-imoo-watch-phone-z6> | Dated **2021-05-21**; "over 40 countries"; **Romania not named**; Verizon and Ice listed incompatible. Older source, flagged |
| <https://uk.imoostore.com/blogs/sim-card/which-operator-should-i-choose> | Dated **2020-09-08**; nano-SIM required; **no Romanian operator named**. Older source, flagged |
| <https://www.aliexpress.com/s/wiki-ssr/article/imoo-z1-vs-z3-vs-z7> | Origin of the circulating "Z3 lasted 14 hours" figure. **No author, no date, AliExpress affiliate links, and the site's own disclaimer "This content is provided by third-party contributors or generated by AI." Disqualified as evidence.** |
| <https://www.rapid7.com/blog/post/2019/12/11/iot-vuln-disclosure-childrens-gps-smart-watches-r7-2019-57/> | 2019 kids-watch vulnerability disclosure — other platforms, **not imoo**. Older source, flagged |

### Added by the scrutiny pass (2026-08-19)

| URL | What it established |
|---|---|
| <https://static-res-www.imoo.com/EU/files/Data_Act--imoo_Watch_Phone-V1.0_2025.10.29.pdf> | **imoo's EU Data Act disclosure, and it explicitly names "imoo Watch Phone z3".** Historical Track *"Only Z7 is supported overseas"* → **the Z3 has no location history in the EU**; 10-year retention on the main data bundle; *"Watch Network: Do not collect"*, *"Contact list: not collected"*, *"Photo library: not collected"*; Application Center collected in use; Time Master and Transmission assistant unsupported on Z1/Z3/Z7 |
| <https://allegro.pl/oferty-produktu/smartwatch-dla-dzieci-imoo-watch-phone-z3-rozowy-gps-wideorozmowy-ipx8-5a3dbc80-f0c6-4b7c-8a5d-750d12076422/opinie> | **The largest Z3 owner pool anywhere: 4.81/5, 27 ratings, 13 written, all purchase-verified, mostly sold by imoo-Polska.** Battery 2 days (one 3–4, one daily); geofence alerts Wi-Fi-anchored and not firing; no games; video calls the weak spot; one 1★ for stale location and video-call freezes; one owner confirms no remote listen-in. **403s on plain fetch — browser only** |
| <https://www.amazon.de/-/en/dp/B0FNWFQ2FP> | The Z3 listing whose **"3,759 ratings / 4.0" is a MERGED Z1 + Z3 + X10 pool** — do not cite it as Z3. Sold by IMOO Direct, **RON 663.86 delivered to Romania**, free delivery, "200+ bought in past month", 14-day returns. imoo's own text: SOS = **draw a "C" on the screen**. Three imoo FAQ videos on battery drain, inbound calls, and Wi-Fi-vs-mobile-data. Z3-specific reviews by Bea (2026-07-16, 10–20 m accuracy, "gute 2 Tage", child almost 7), anna (2026-05-26, *"braucht man mehrere Versuche"* to call the watch), Ellen (2025-11-18, discounted as probable seeded copy) |
| <https://www.amazon.de/s?k=imoo+z3> | imoo's own listing titles state **"1-2 Tage Nutzung"** and **"NO Spiele"**; a Deutsche Telekom-branded Z3 bundle SKU exists |
| <https://shop.telekom.de/geraete/imoo-watch-phone-z3-blau> | **Deutsche Telekom stocks the Z3.** EAN 6953281010142, distributor BRODOS, "Sofort verfügbar"; spec sheet claims **"Akkulaufzeit 6 Tage"** (unsupported) |
| <https://www.mediamarkt.de/de/product/_imoo-z3-kinder-smartwatch-plastik-tpu-126-210-mm-blau-3020369.html> | MediaMarkt DE, €125 (UVP 149), **4.7 from only 3 ratings**; earliest 2025-12-14 (PolleBln); discloses that it also imports ratings *"aus Dritt-Quellen (z.B. Hersteller-Seite)"* |
| <https://www.imoo.com/sg/products/z3> (meta description) | **imoo's own copy claiming "7-system GPS tracking" and "8 days battery life"**, contradicting imoo's own spec table on the same page |
| <https://www.imoostore.com/eu/products/imoo-smartwatch-z3> | *"Emergency Call — One quick 'C' on the screen sends a quick call to the admin"*; Parental Control = Sleep Mode / Class Mode / App control; **Sensors: Accelerometer only**; **supported languages contain no Romanian**; 30-Day Money-Back Guarantee and 2-Year Comprehensive Warranty; **no review widget of any kind** |
| <https://www.imoo.com/eu/> | Z3 marketed *"For age 5-12"* with **"Real time location tracking"** only, vs Z7 *"GPS & 14 days of location history"*; footer carries an **EU Data Act** link, a **Responsible Disclosure** link and support line **(+0044) 800-640-6588**; no EU legal entity named |
| <https://play.google.com/store/apps/details?id=com.imoo.watch.global&gl=RO&hl=ro> | **The Android app IS in the Romanian Play storefront** — fully localised, "Aplicația este disponibilă pentru dispozitivul tău", 1 mil.+ installs, updated 21 iul. 2026, footer "România (română)". Also documents the non-disableable **"Raportul locațiilor de apel"** |
| <https://play.google.com/store/apps/datasafety?id=com.imoo.watch.global&gl=RO> | Play Data safety card: "No data shared with third parties"; collects Precise Location, **Photos and videos**, **Address**, **Audio (voice recordings and Music files)**. **Contradicts imoo's own Data Act disclosure on photos, address and contacts** |
| <https://www.youtube.com/watch?v=T4qjVxqU3TY> · <https://www.youtube.com/watch?v=rDQvSgTCYM0> | **Edm-Tech&House (FR), 2026-07-22 and setup video.** The only long-form independent Z3 owner test found. Battery ~2 days / ~50% after a full day; 10→60% in 30 min; 2-hour clock drift every 2–4 days on firmware 1.5.0 (2026-03-21); video calls cut at 10–15 min for overheating; direct dial and SMS work without the app; runs on **Free Mobile**, an operator absent from imoo's carrier list; App Center empty; no games. Amazon affiliate link in description — disclosed |
| <https://www.youtube.com/watch?v=OslmlJ5fbXc> · <https://www.youtube.com/watch?v=SEKjRrE6P6Q> | **Launch date.** imoo Singapore, uploaded **2025-11-07**, "Launches Tomorrow", livestream 7 Nov; "imoo Watch Phone" channel, **2025-12-22**, "Launches Now" |
| <https://www.youtube.com/watch?v=I7VuwObKkDo> | HardReset.Info Z3 unboxing: **one physical button (power)**; App Center present and can download apps; on-watch keyboard is an alphabetical scroll list ("absolute nightmare"); SIM tray with rubber seal; 2 pogo-pin bottom charging |
| <https://www.trustpilot.com/review/imoostore.com> | **2.8 from 55 reviews**, 38% 1★, *"Replied to 6% of negative reviews"*, *"Asks customers to review"*, paid subscription, claimed May 2024. Declared company address **Singapore**. **Lisa Matthews (IE, 2025-06): two watches failed and imoo asked her to remove her review.** A keyword search for "Z3" returns one review, about customer service. **403s on plain fetch — browser only** |
| <https://volteromania.blogspot.com/p/phones.html> | Romanian community Digi VoLTE list: **no "imoo", no "Watch"** — but documents that **VoLTE is a SIM-profile flag**, routinely activated by inserting the SIM in a supported handset once, or by phoning the operator for manual provisioning |
| <https://www.orange.ro/servicii/apel-4g/> | Orange Romania's own 4G-call page: **zero occurrences of "imoo", "smartwatch" or "ceas"** — a verified negative, not an inferred one |
| <https://old.reddit.com/r/AskIreland/comments/1uhdcvc/imoo_z3_kids_smart_watch/> | The **only** Reddit post about the Z3 anywhere. **No Z3 owner replied.** One Z1 owner running two years on a Tesco Mobile IE SIM; one report of a peer group migrating from imoo to Xplora |
| Reddit comment search `"imoo z3"` and `imoo (Romania OR Bulgaria OR …)` | **Zero results in both cases.** Auditable negatives |
| <https://itunes.apple.com/{de,es,it,fr,ie,pl,sg,my,th,id,au,nz}/rss/customerreviews/…/id1057845227/…> | 13-storefront app-review sweep. Key: DE 2026-05-01 registration blocked by a server-side bug in a supported market; DE 2025-10-05 location >1 h stale vs an AirTag; DE 2026-06-21 ~50 m school error, 5-min refresh; DE 2026-01-29 call-location report cannot be disabled; SG 2024-08-08 **no user APN editor**; AU 2024-01/2024-05 **"Parents can't call in"** |

### Amazon deep-pool read (2026-08-19)

**Access status.** Run in a real Chrome profile that turned out to be **signed out of every
Amazon storefront**; every `/product-reviews/` deep link (sort, star-filter, pagination) 302s to
a sign-in wall (`openid.pape.max_auth_age=3600`). No credentials were entered, so coverage is
the logged-out top-review module of each product page (8–13 reviews per listing). Deeper reads
need a logged-in session.

**The headline: the merged pool this document warned about is gone.** The scrutiny pass said
"the Amazon rating everyone will see is a merged Z1/Z3/X10 pool" on B0FNWFQ2FP (3,759 ratings).
Verified on-page 2026-08-19: **B0FNWFQ2FP now carries 0 customer reviews** — Amazon has detached
the pool. amazon.de imoo reviews now sit per model: **Z1** 568 + 344 + 115 + 20 + 6 + 4;
**Z3** 66 + 41 + 39 + 35 + 17; **Z7** 185 + 14 + 3; **X10** 2 — ≈1,505 total on .de. The Z3's
own German review base is therefore ~198 ratings, not 3,759, and the 4.5 averages on the two
biggest Z3 listings are clean-ish. One exception, and one abroad: **B0FN3ZNT1T is itself still a
merged pool** (its visible reviews mix `Colour Name: Z3-pink./Z3-blue.` with bare
`Pink`/`Grün` tags dated **4 Jul 2024 – Sep 2025, i.e. pre-Z3-launch** — those are Z1-era
reviews wearing a Z3 title), and **amazon.co.uk B0CXSSLDW5 (313 ratings) is a Z7-titled pool
whose visible reviews are 10/13 Z3-tagged**.

**Coverage table (Z3-relevant listings), all accessed 2026-08-19:**

| Listing | Ratings | Avg | Hist 5→1 (%) | Read | Model tags of what was read |
|---|---|---|---|---|---|
| amazon.de B0FNWFQ2FP (ex-merged pool) | **0** | – | 0/0/0/0/0 | 0 | pool detached |
| amazon.de B0FWBN841X (blue) | 66 | 4.5 | 77/15/1/3/4 | 13 | 13× `Model: Z3 Bleu`, all VP |
| amazon.de B0FWBVMRBS (pink) | 41 | 4.5 | 74/10/10/6/0 | 13 | 13× `Z3 Rose`, all VP |
| amazon.de B0FN3ZNT1T | 39 | 4.1 | 68/4/14/14/~0 | 12 | **7× Z3-tagged; 5× ambiguous `Pink`/`Grün` incl. 2024 dates → counted separately, unusable as Z3 evidence** |
| amazon.de B0FN7GH2HT (accessory set) | 35 | 4.2 | 56/28/6/10/0 | 13 | 13× `Size Name: Z3`, all VP (1 non-VP) |
| amazon.co.uk B0CXSSLDW5 (Z7-titled, merged) | 313 | 4.0 | 61/9/14/5/11 | 13 | 10× Z3-Blue/Z3-Pink, 3× Z7-Blue |
| **Totals** | ~494 Z3-relevant | | | **56 clean Z3-tagged owner reviews read** | ~85–90% of rating mass unread (login-walled) |

**New Z3 failure reports (all VP, all Z3-tagged):**

- **First-pairing QR code dead on arrival.** DSPA sas, amazon.de pool (FR storefront), **18 Dec
  2025**, 1★: *"Le QR Code pour la première liaison ne fonctionne PAS. Du coup impossible
  d'aller + loin. Donc la montre ne fonctionne pas."* — *"The QR code for the first pairing does
  NOT work. So impossible to go further. So the watch doesn't work."* This is the
  binding/account layer again — the same subsystem the pre-purchase test targets.
- **Wi-Fi freezes the watch UI.** Michael, France, **22 Mar 2026**, 1★: *"Le wifi fige
  systématiquement l'interface de la montre qui devient impossible à utiliser. Produit
  défectueux."* — *"Wi-Fi systematically freezes the watch's interface, which becomes impossible
  to use. Defective product."*
- **Data connectivity took ~10 resets to come up — in Germany.** MarKle, amazon.de, **26 Jun
  2026**, 3★ (1★ upgraded to 3★): *"Die Uhr schafft es nicht mit der Sim eine Internetverbindung
  herzustellen, obwohl es in anderen Handys problemlos geht … Nach bestimmt 10 mal resetten hat
  es jetzt funktioniert."* — *"The watch can't establish an internet connection with the SIM even
  though it works fine in other phones … After a good 10 resets it now works."* Same review:
  Wi-Fi password entry on the watch is capped at 32 characters; power-saving mode kicks in
  already at 25%; *"Während dem Laden kann die Uhr nicht verwendet werden"* ("the watch cannot
  be used while charging"); chat initially didn't work at all.
- **Z1↔Z3 family chats cannot be merged.** ich, amazon.co.uk, **3 Dec 2025**, 3★, Z3-Blue:
  *"We can't merge the two family chats and there is no way to have a family group chat that
  includes both parents and both kids … Imoo support claims it should work to merge chats, but
  the option is not there. I am waiting for many weeks now."* Relevant to any household planning
  a Z1 sibling + Z3.
- **Hardware early-life issues:** giuseppe, Italy, **7 Jul 2026**, 3★ — screen broke inside a
  month (*"dopo meno di un mese lo schermo si è rotto"*), returned, bought an X10; Jana,
  amazon.de, **8 May 2026**, 3★ — strap screw worked loose at ~2 months; Sandra, amazon.de,
  **23 Jun 2026**, 1★ — SIM-cover part broke <1 month in, seller and imoo bounced her between
  each other on warranty.
- **From the ambiguous-tag pool (NOT usable as Z3):** chanoturtle, amazon.de B0FN3ZNT1T,
  **22 Sep 2025**, 1★, tag `Pink`, pre-dates the Z3's EU launch: battery unchargeable after
  6 weeks, warranty refused, *"Verkäufer und Hersteller … melden sich nicht (Sitz in China)"*.
  Recorded here only because the listing is Z3-titled; treat as Z1-era platform evidence.

**Owner confirmation of the no-location-history finding.** Amazonian, amazon.de, **23 Mar
2026**, 4★, Z3: *"Ortung (wirklich Echtzeit und nicht 10 Minuten Intervallen o.ä.) zu 95%
korrekt. Einziger Wermutstropfen … Der Tracking Verlauf ist bei der Z3 nicht vorhanden."* —
*"Location (really real-time, not 10-minute intervals or the like) 95% correct. Only sour note …
the tracking history does not exist on the Z3."* First plain owner statement matching imoo's
Data-Act disclosure ("Only Z7 is supported overseas").

**SOS, sighted positively for once.** kevin thomson, amazon.co.uk, **14 Apr 2026**, 4★,
Z3-Pink: *"The ability to call people if she is in trouble with a simple scrawl on the phone is
great selling point."* Confirms the C-gesture SOS exists and is parent-valued on the Z3; still
no owner report of a real emergency use anywhere in the corpus.

**Battery, new owner figures (no tracking interval stated by anyone):** *"der Akku hält
problemlos einen ganzen Tag"* (amazon.de, 8 Feb 2026, 5★); *"Der Akku hält bei unserem Sohn
mehrere Tage"* (21 Jul 2026, 5★); *"Vor allem hält der Akku der Uhr 3 Tage"* (Kristina W.Go.,
3 May 2026, 5★); plus MarKle's power-save-at-25% complaint above. Consistent with the standing
`battery_observed_h: 48` ± the usual overnight-off confound; frontmatter unchanged.

**MVNO datapoint (UK):** Crazy, amazon.co.uk, **22 Dec 2025**, 4★, Z3-Pink: *"We got a giffgaff
SIM card and just popped it into the back of the watch and call, text and video chat worked
instantly."* — an MVNO (on O2) working zero-config; second data point against the
VoLTE-whitelist fear, same direction as the Free Mobile owner.

**Chat keyboard has no umlauts.** Die Rezension, amazon.de, **7 Aug 2026**, 4★: *"beim
Schreiben es keine Umlaute gibt"* — German owners can't type ä/ö/ü in chat. Trivial for
Romanian use (Romanian diacritics almost certainly absent too — the watch UI has no Romanian
anyway), recorded as a localisation-quality signal.

**What this changes:** no frontmatter moves. The corrected facts are contextual: the merged-pool
warning is obsolete (pool dissolved), B0FN3ZNT1T inherits the mixed-tag problem in miniature,
and the failure catalogue gains three fresh binding/connectivity cases in supported markets —
which keeps the +40 registration test exactly as load-bearing as before.

### BG/HU/CZ venue sweep (2026-08-19)

eMAG.bg and eMAG.hu were behind captcha walls until this pass; both were readable today.
**eMAG.hu DOES list the Z3** (pink, "Okosóra imoo Watch Phone Z3, rózsaszín, 1.5", 4G LTE,
vízálló IPX8", `emag.hu/.../pd/D69CD83BM/`) — a Hungarian retail channel exists — but the
listing has **0 reviews and 0 Q&A**. **eMAG.bg does NOT list the Z3** (only imoo Z1 and Z7
device listings plus accessories; all with 0 reviews, 0 Q&A). No BG/HU registration or SMS-code
report of any kind was found on either venue, so the imoo signup-risk question stays open with
zero new evidence.

## RO registration — the platform gate passed (2026-08-19, first-hand)

The imoo account flow (app `com.imoo.watch.global`, +40 number) was completed successfully
first-hand on 2026-08-19 — ~~SMS code~~ no SMS challenge was presented; account creation went
straight to the pair-watch screen (corrected same day — full detail in the Z7 file, "RO
registration test").
The Z3 uses the same app and the same account system, so the registration blocker documented
in this file (one failed-SMS report, with an identical German twin suggesting an app bug) is
superseded at platform level. `ro_status` moves unknown → **likely**. Still untested for the
Z3 specifically: pairing, calls and positioning on a Romanian network.