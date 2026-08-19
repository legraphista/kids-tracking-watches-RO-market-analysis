# Angel Watch Series R

```yaml
---
model: Angel Watch Series R
brand: Angel Watch (The Angel Watch Company / ANGEL WATCH COMPANY LTD, UK)
release_year: 2021   # **unverified** — no vendor launch date published; earliest dated third-party
                     # coverage is 2021-08-20, and the US Amazon ASINs date from 2021
still_sold: yes      # in stock on the vendor's own store, US $149.99 / UK £149.99, checked 2026-08-19.
                     # BUT: same day, the geo-localised RO view of the product page priced it at
                     # 689 lei with BOTH purchase buttons greyed "OUT OF STOCK" (while a badge
                     # claimed "JUST 53 LEFT IN STOCK"), and Amazon US/IE searches no longer
                     # surface a purchasable listing. Availability is wobbling — see deep sweep §5

# --- Romania verdict (the pass/fail question) ---
ro_status: likely
ro_evidence_tier: 2  # iOS app confirmed live in the RO App Store with a Romanian localisation;
                     # Android app updated 2026-07-25; account registration takes an EMAIL ONLY —
                     # there is no phone-number or country field to reject a +40 number.
                     # No RO retailer, no RO user report, so tiers 1/3/4 are not reached.
ro_killer: n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands: [B1, B2, B3, B5, B7, B8, B12, B17, B20, B28]   # vendor product page.
                     # CONTRADICTED BY THE VENDOR'S OWN DOCS — see "Network & bands".
                     # Support KB "frequency bands": B1,B2,B3,B4,B5,B7,B8,B12,B17,B20,B28,B38,B39,B40,B41
                     # Support KB "technical specifications": B1,B3,B5,B7,B8 only — no B20.
band_b20: unverified # DOWNGRADED from "true" 2026-08-19. Deep sweep found no FCC ID, no CE/RED
                     # DoC and no TAC entry for this brand. Hardware family identified as Wonlex
                     # (see "First deep sweep" §1): Wonlex's own global SKU carries B20
                     # (FDD B1/B2/B3/B5/B7/B8/B20/B28A) — but Wonlex's US FCC-certified kids-watch
                     # SKU (FCC ID 2A7S9-KT21, granted 2022-07-18) carries ONLY B2/B4/B5/B7/B12,
                     # i.e. NO B20 and NO B3. The OEM demonstrably builds regional radio variants,
                     # and every Angel Series R SKU code is "AW-R-NA-*" (NA = North America),
                     # including the "No SIM (International Customers)" variant. Which radio an
                     # EU buyer receives is not determinable from any public source.
band_b28: true       # vendor-stated, same caveat. Irrelevant in RO: B28 there is 5G NR n28, not LTE
volte: true          # device-side. Vendor support: "Settings → Mobile Networks → VoLTE. Make sure
                     # VoLTE is turned ON", plus a VoLTE config screen taking an operator code
                     # (e.g. 310030). Whether an RO operator PROVISIONS VoLTE for this TAC: UNKNOWN
voice_fallback: 2g-csfb   # **unverified** — inferred only from the quad-band GSM 850/900/1800/1900
                     # on the vendor spec sheet. No vendor statement on what happens if VoLTE fails
modem_chipset: UNKNOWN    # vendor KB says only "1845 chipset, Quad-core (1.3 GHz per core)".
                     # That string matches no publicly identifiable part. No FCC ID located.
                     # 2026-08-19: platform inference (unverified) — Wonlex-family watches of this
                     # era run UNISOC "Mocor5 OS (based on Android 4.4.2)" then Android 8.1-class
                     # UNISOC parts, matching the vendor KB's own "Android 4.4 before 2021 /
                     # Android 8.1 2022+" line. Chipset itself remains unidentified

# --- Positioning (the #1 criterion) ---
positioning: [GPS, WiFi, LBS]   # no GLONASS, Galileo or BeiDou claimed anywhere by the vendor
wifi_positioning: true          # and unusually, the vendor publishes an accuracy figure: 50–100 m
update_interval_min: 10         # options are manual / 10 min / 1 hour. No live-tracking mode
# GPS accuracy 5–10 m, LBS accuracy 50–1000 m (vendor figures)

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah: 800                # "800mAh (3.04 Wh)", 3.7 V, "Dual Lithium-Ion"
battery_claimed_h: 48-72        # vendor support KB: "typically lasts between 2–3 days".
                                # A second vendor KB page says "1–3 days" (24–72 h). Vendor is
                                # inconsistent with itself; both figures are recorded here
battery_observed_h: 96+         # SafeWise, 2025-01-08, one week of hands-on wear: battery lasted
                                # over 96 h. ONE source only. Conditions: 10- or 60-minute location
                                # updates, no live tracking available. Call volume not stated

# --- App & service ---
app_name: Angel Watch™
app_android_min: "5.0"
app_ro_playstore: false         # RO **App Store** (iOS): TRUE, confirmed — page resolves at
                                # apps.apple.com/ro/ and Romanian is in the app's language list.
                                # RO **Play Store**: REMOVED. 2026-08-19 (RO IP, logged-in Chrome):
                                # the listing URL returns "requested URL was not found on this
                                # server" and Play search does not surface the app (SeTracker2 and
                                # com.tgelec.carneoguard still render). Wayback shows the listing
                                # live (HTTP 200) on 2026-01-31; APK mirrors logged v1.2.5 on
                                # 2026-07-25. Removal window 2026-01-31..2026-08-19 — spanning
                                # DEF CON 34 (08-08) and the Notebookcheck exposé (08-14), but the
                                # cause and whether removal is global or RO-only are UNVERIFIED
app_last_update: 2026-07        # Android v1.2.5, 2026-07-25
data_region: UNKNOWN            # See "Security & privacy". Two conflicting pointers, neither
                                # conclusive: (a) the vendor tells every user to set the account
                                # region to "North America"; (b) the Android package is
                                # com.tgelec.angelwatch, the same stem as brands documented in
                                # Aug 2026 to share a China-hosted backend

# --- Practical ---
sim: nanoSIM                    # 2021 source; not restated on any current vendor page
water_rating: IP67              # product page. Vendor's own spec KB says IP65. CONTRADICTORY
weight_g: UNKNOWN               # only a package weight is published (8 oz / 0.23 kg)
camera: true                    # front camera. 0.3 MP per the spec KB, "2MP" per another KB
                                # article. CONTRADICTORY
games: false                    # "Your child can't play online games, browse the internet, or
                                # access social media on Angel Watch™"
extras_disableable: partial     # games/browser/social/SMS absent by design; WhatsApp is present
                                # and its removability is UNKNOWN; covert remote listen CANNOT be
                                # switched off, only withheld by not granting Family Member status
price_eur: not published        # £149.99 (UK storefront) / $149.99 (US storefront), both 2026-08-19
buy_from: angelwatchco.com direct (US + UK warehouses, ships worldwide). No EU retailer found
price_ro_eur: n/a
---
```

## Verdict

Suits a parent who wants a SIM-unlocked, subscription-free watch and is willing to import from
the UK and self-support it. The main risk is not geo-blocking — the account layer is email-only
and has no country gate — it is that the vendor contradicts its own band list, has no EU entity,
and the app sits on a package stem tied to the Shenzhen shared-backend family broken open at
DEF CON in August 2026. It probably clears the floor on battery and plausibly on radio, but the
B20 claim it would be bought for is **unverified** and internally disputed.

## Does it work in Romania?

**Tier reached: 2.** The evidence, in order of strength.

**1. The account layer has no country gate at all.** This is the decisive finding, and it is
better than "accepts +40". The vendor's own registration article lists exactly three required
inputs — email address, an image verification code, and a password — and states: *"Enter a
valid email address. This is required for password recovery."* There is no phone-number field
and no country selector at signup. The one region instruction is:

> "Set your account region to North America, regardless of your physical location."
> — Angel Watch support KB, *Registering your app account*, accessed 2026-08-19,
> <https://support.angelwatchco.com/kb/the-angel-watch-app/registering-your-app-account>

So a Romanian parent is never asked where they are; they are told to pick North America like
everyone else. The travel article reinforces that the region is a single global setting rather
than a market allow-list: *"Your Angel Watch™ app region and watch region must always match,
even when traveling"*, and *"Yes—Angel Watch™ can be used while traveling internationally"*
(<https://support.angelwatchco.com/kb/the-angel-watch/can-i-travel-with-the-watch>, accessed
2026-08-19). **No supported-country list exists anywhere on the vendor's site.** That is the
opposite of the Xplora architecture: there is no allow-list to be excluded from.

**2. The iOS app is live in the Romanian App Store and ships a Romanian localisation.**
`https://apps.apple.com/ro/app/angel-watch/id1526273778` resolves (accessed 2026-08-19), seller
**"THE ANGEL WATCH COMPANY LLC"**, free, 4+, and the language list includes **Romanian** among
45 languages. An app not distributed in a storefront does not render there.

**3. The Android app is actively maintained.** `com.tgelec.angelwatch`, version 1.2.5, updated
**2026-07-25**, 10,000+ installs, rated **2.6/5 from 134 reviews**
(<https://apkcombo.com/angel-watch/com.tgelec.angelwatch/> and
<https://apkpure.com/angel-watch/com.tgelec.angelwatch>, both accessed 2026-08-19). The RO Play
storefront page renders under Romanian chrome but its metadata could not be extracted —
**unverified**.

**4. The vendor ships to Romania.** The shipping policy offers international delivery at
"15-40 days" and the storefront's country list includes Romania
(<https://angelwatchco.com/policies/shipping-policy>, accessed 2026-08-19). A Shopify country
selector is weak evidence on its own; the "other parts of the world" shipping line is what
carries it.

**5. The device is unlocked and the vendor expects local SIMs.**
> "The watch is fully unlocked and works on most global 4G / GSM / LTE networks."
> — <https://support.angelwatchco.com/kb/cellular-networks/im-not-in-the-usa-or-id-like-to-use-my-own-network-what-sim-plan-do-i-need>, accessed 2026-08-19

The prior sweep read the same guidance as a negative ("activate a SIM card with a local
provider"). Structurally it is a positive: there is no vendor SIM to withdraw and no
subscription to geo-restrict. The vendor recommends a plan with "1,000 voice minutes" and
"1 GB of data", and warns international buyers off Verizon/AT&T/T-Mobile partner plans.

**What is still unproven:**
- **No Romanian user report of any kind exists.** Not one, in any source reachable here.
- **No RO or EU retailer.** Vendor-direct only.
- **No RO Play Store metadata and no Romanian-language review** was retrievable — **unverified**.
- **VoLTE provisioning on a Romanian operator** is untested and, per this project's own
  structural finding, is granted per IMEI/TAC. Device support ≠ network provisioning.
- **APN must be set by hand.** The vendor instructs users to look up their carrier's Android
  APN and enter it at Settings → Mobile Networks → APN. For Digi/Orange/Vodafone RO this is a
  manual step nobody has documented for this watch.

## Pre-purchase test

The standard test is *weaker than usual here, and a different test is needed*, because the app
never asks for a phone number — a "+40 registration" cannot fail, so passing it proves little.

1. Install **Angel Watch™** (`com.tgelec.angelwatch`) from the Romanian Play storefront. If it
   is not installable in RO Play, that alone is disqualifying — resolve this before paying.
2. Register an account with a Romanian email, set the region to North America as instructed,
   and confirm the account is created and can reach the map and settings screens. Free.
3. **The real test is post-purchase and must fit the return window:** insert an Orange or Digi
   nano-SIM, set the APN by hand, enable Settings → Mobile Networks → VoLTE, and place an
   outgoing *and* an incoming voice call while on LTE. If VoLTE is not provisioned, verify the
   watch falls back to 2G rather than going silent.
4. **Return window: 14 days from delivery**, stated to apply identically to international
   customers (<https://support.angelwatchco.com/kb/refunds-and-exchanges>, accessed 2026-08-19).
   Refunds "minus any applicable restocking fee", processed ~7 days after the return arrives.
   Shipping to RO is quoted at **15-40 days**, so a 14-day clock against a 15-40 day transit
   each way leaves almost no slack if a return is needed. Budget for that.

## Positioning quality in real use

Vendor figures, from the product page (accessed 2026-08-19):

| Method | Vendor-stated accuracy |
|---|---|
| GPS | 5–10 m |
| Wi-Fi | 50–100 m |
| LBS (cell tower) | 50–1000 m |

Publishing a Wi-Fi positioning figure at all is unusual and is a point in the vendor's favour.
But note what is *not* claimed: **no GLONASS, no Galileo, no BeiDou on any vendor page.**
Single-constellation GPS plus Wi-Fi plus LBS. Against imoo's five-constellation receivers or
TCL's L1+L5, this is the weaker receiver in the field.

The only independent hands-on test found reports exactly the failure mode this project worries
about:

> "often showed my location darting across the street" — while stationary **indoors**
> — SafeWise review, USA, 2025-01-08, one week of wear
> <https://www.safewise.com/kids-safety/smartwatches/angel/>

The same reviewer found it performed acceptably on neighbourhood walks and drives. Read
together: outdoors GPS is fine; indoors it falls back to Wi-Fi/LBS and jitters by roughly a
street width — which at 50–100 m Wi-Fi accuracy is exactly what the datasheet predicts. For a
school building, expect "right building, wrong side of the road", not a wrong district.

**There is no live-tracking mode.** The available settings are manual on-demand, every 10
minutes, or every hour
(<https://support.angelwatchco.com/kb/the-angel-watch/how-often-does-the-watch-pick-up-the-wearers-location-using-gps>,
accessed 2026-08-19). Ten minutes is the tightest interval the app allows.

## Battery in real use

- **Claimed (vendor):** *"The Angel Watch battery typically lasts between 2–3 days"* — support
  KB, accessed 2026-08-19. The vendor's technical-specification article on the same site says
  **"1–3 days"**. Both are recorded; the vendor does not agree with itself.
- **Observed (independent):** **over 96 hours** — roughly 4 days — across a week of hands-on
  wear by SafeWise, 2025-01-08. This is *better* than the vendor claim, which is rare in this
  category and worth flagging as such.
- **Conditions:** location updating at 10- or 60-minute intervals (the reviewer does not state
  which), no live tracking available, call volume not stated. Video calling is separately
  flagged by the vendor as a heavy drain.
- **The vendor names the lever:** *"The most impactful way to improve battery life is by
  adjusting the Location Update Schedule."* At 10-minute updates plus school-day calls, treat
  the observed figure as an upper bound, not a typical day.

**One independent datapoint is one datapoint.** 800 mAh driving a 240×240 IPS panel and a
1.3 GHz quad-core is a plausible multi-day design and 96 h is not implausible — but it is
uncorroborated.

## Network & bands

**This is where the case for the watch is weakest, and weaker than the discovery sweeps
recorded.** The vendor publishes three different band lists across three of its own pages:

| Vendor source (all accessed 2026-08-19) | LTE bands stated |
|---|---|
| Product page, `angelwatchco.com/products/angel-watch-r` | "Supported Bands **1,2,3,5,7,8,12,17,20,28**" + GSM 850/900/1800/1900 |
| Support KB, *What frequency bands does the device support?* | "B1, B2, B3, B4, B5, B7, B8, B12, B17, B20, B28, B38, B39, B40, B41" |
| Support KB, *What are the technical specifications of Angel Watch™?* | "4G / GSM" with "LTE **B1, B3, B5, B7, B8**" — **no B20, no B28** |

That third page also states IP65 (product page: IP67), a 1.3" display (product page: 1.44"), a
0.3 MP camera (another KB article: 2 MP), and "Android 4.4 (models before 2021)" or "Android
8.1 (models 2022 and newer)". The charitable reading is that it is a stale generic sheet
covering the whole Angel Watch line rather than the current Series R. The uncharitable reading
is that nobody at the vendor knows which radio is in the box. Either way, **the headline claim
that made this watch interesting — a published, complete, B20-inclusive band list — is
contradicted by the vendor's own documentation and confirmed by no independent source.** No
CE/RED declaration of conformity was found. No FCC ID was located, so the usual primary-source
escape hatch (FCC internal photos naming the modem) is not available. Treat B20 as
**vendor-claimed and unverified**.

Against Romanian networks, *if* the product-page list is right:
- **B3 (1800)** — present. The national workhorse. Good.
- **B20 (800)** — claimed. Orange RO's only sub-1 GHz LTE band, and the whole reason to
  consider this watch.
- **B7 (2600)** — present.
- **B1 (2100)** — present.
- **B28** — buys nothing in Romania, where 700 MHz is 5G NR n28, not LTE.
- **B2, B12, B17** — North American bands, irrelevant here. Their presence is consistent with a
  US-market SKU and is a mild hint that this is a global superset rather than an EU SKU sheet.

**VoLTE: established, and the answer is yes — device-side.** The prior sweeps left this
unstated; it is stated, just buried in support rather than on the spec sheet:

> "Navigate to: **Settings → Mobile Networks → VoLTE**. Make sure **VoLTE is turned ON**"
> — <https://support.angelwatchco.com/kb/cellular-networks/im-having-issues-making-outgoing-calls-with-angel-watch>, accessed 2026-08-19

There is also a **VoLTE config** screen where an operator code is entered manually (the vendor
gives `310030` for AT&T, i.e. an MCC/MNC). A device exposing per-operator VoLTE configuration
is a device with a VoLTE stack. **What this does not establish** is that Orange RO, Digi or
Vodafone RO will provision VoLTE for this watch's IMEI/TAC — per this project's own structural
finding, no kids' watch appears on any Romanian operator's VoLTE list. Buy on Orange or Digi,
which still run 2G, so a provisioning failure degrades to 2G voice rather than silence. The
vendor publishes quad-band GSM 850/900/1800/1900, so a 2G path exists in hardware; that the
watch actually performs CSFB rather than going data-only is **unverified**.

**Chipset: UNKNOWN.** The vendor's only statement is *"1845 chipset, Quad-core (1.3 GHz per
core)"*, with 1 GB DDR3 and 8 GB storage on Android 8.1. That string does not map to any
publicly documented part, and no teardown, FCC filing or regulatory document was found. It is
left unidentified here rather than guessed at.

## Features & what can be disabled

| Feature | Present? | Can the parent switch it off? |
|---|---|---|
| Voice calls | Yes, to app-approved contacts | Contact list is parent-controlled |
| Video calls | Yes, HD, via the app | Per-family-member permission |
| Incoming calls from unknown numbers | Blocked | Yes — "Reject Unknown Caller" |
| SMS | **Absent by design** — vendor states SMS "cannot be fully filtered or blocked" | n/a |
| Family chat (text / voice / picture) | Yes, registered Family Members only | Membership-controlled |
| **WhatsApp** | **Yes — preinstalled**, described by the vendor as allowing calls and messages with contacts **outside the family group** | **UNKNOWN.** No vendor article says it can be removed or disabled |
| Camera | Yes, front-facing | No disable option documented |
| Games / app store / browser / social media | **None.** *"Your child can't play online games, browse the internet, or access social media"* | n/a — absent |
| SOS | Yes, 3-second press, cycles up to 3 contacts | Configured in app |
| Class / school mode | **"Do Not Disturb"** is the vendor's term | Yes, scheduled |
| Health sensors (HR, BP, body temp, SpO2) | Yes, readable remotely | No disable option documented. Vendor disclaims: "non-medical use, only for general fitness/wellness purpose" |
| **Sound Guardian (covert remote listen)** | Yes | **No.** See below |

The **WhatsApp** finding deserves emphasis, because it cuts against the "no social media, no
distractions" pitch on the same site. The vendor's own messaging category is titled
*"MESSAGING & THE WHATSAPP APP"* and contains an article *"What is WhatsApp"* describing it as
a channel to contacts outside the parent-approved family group
(<https://support.angelwatchco.com/kb/messaging-and-the-line-slash-lite-lite-app>, accessed
2026-08-19). Note that the URL slug reads `the-line-slash-lite-lite-app` — an artefact
suggesting the article originally described a **LINE Lite** client, the messenger that ships on
several Shenzhen white-label kids' watches, later relabelled. Whether the watch runs genuine
WhatsApp or a lookalike is **unverified**, and either way it is an open, non-family messaging
channel on a 7-year-old's wrist that the vendor does not document how to remove. **Establish
this before buying.**

## Security & privacy

**Vulnerability research — the single most important finding in this document.**

The Angel Watch Android package is **`com.tgelec.angelwatch`**. On 2026-08-14 Notebookcheck
reported on research presented by Felipe Solferini and Vangelis Stykas at **DEF CON 34
(2026-08-08)** and **Black Hat (2026-08-07)** covering kids' GPS watches that share a small
number of Chinese backends. The article's core observation is about package names:

> "Three brands, three price points, the same package name stem."

with the examples given as `com.tgelec.garetts` (Garett), `com.tgelec.kidiwatch` (KidiWatch)
and `com.tgelec.beafon` (Beafon). On the SETracker platform specifically:

> "Behind SETracker, according to the slides, stands a company called YQT, also trading as
> 3G Electronics. **The data sits on Alibaba Cloud in China.** 46 apps, 39 brand names, more
> than twenty countries."

and what the researchers could do:

> "read and spoof location, intercept text and voice messages, listen in silently, trigger the
> camera. **Nothing of it showed on the watch.**"

Reportedly, only the parent's registration **email address** was needed to take over a device.
Brands explicitly named include Wonlex, SaveFamily, KidiWatch, Garett Kids, Carneo Guard,
Osmile, Kuus and Beafon.
(<https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html>,
2026-08-14; corroborated by
<https://mlq.ai/news/researchers-show-childrens-gps-watches-can-be-hijacked-across-shared-backends/>
and <https://pasqualepillitteri.it/en/news/11605/kids-smartwatch-hacked-spying>, all accessed
2026-08-19.)

**Angel Watch was NOT named in that research.** The link is by package-name stem only:
`com.tgelec.angelwatch` shares the stem with three brands that were named. That is a strong
structural indicator that Angel Watch is a rebadge on the same Shenzhen white-label app
platform — **but it is an inference, and it is written here as unverified.** It is not proof
that Angel Watch's specific backend was tested or is vulnerable. It does mean the "Angel Watch
is a US/UK brand" framing is misleading: the app is a rebranded build of a Chinese OEM
platform, whatever the shopfront says.

This reframes the "structurally lowest geo-block risk" thesis. That thesis is *still correct on
its own terms* — no vendor SIM, no subscription, no country allow-list, so nothing for a vendor
to switch off. But the geo-block risk it removes is traded for a shared-backend security risk
that Garmin and imoo do not carry, and that risk landed in the press eleven days before this
document was written.

**Where the data is hosted: UNKNOWN.** Three things are known and none of them answers it:
1. Every user, worldwide, is told to set their account region to **"North America"**. There is
   therefore no EU data-residency option, and Romanian users' accounts are homed to a
   North-America-designated region by vendor instruction.
2. The published privacy policy at `angelwatchco.com/policies/privacy-policy` is **stock
   Shopify e-commerce boilerplate**. It covers the *webshop* — Shopify, Google Analytics, order
   information — and says "your information will be transferred outside of Europe, including to
   Canada and the United States". **It does not describe the watch or the app at all**: no
   controller named for location data, no processor, no server region, no retention period for
   a child's location history. For a device that continuously logs a child's position, that is
   a material gap and, for an EU buyer, a GDPR-shaped one. It carries no last-updated date. No
   Chinese processor is named — but nor is any processor for the watch service.
3. The package-stem inference above points at a China-hosted shared backend.

The App Store privacy label states *"The developer does not collect any data from this app."*
For a product whose entire function is transmitting a child's location and vitals to a cloud,
that label is not credible on its face and should be read as an unfilled declaration rather
than a finding.

**Covert remote listen: present, and it cannot be turned off.**

> "Sound Guardian™ allows trusted Angel Watch™ App Family Members to discreetly listen to the
> watch's surroundings." … "**No notifications, sounds, or alerts appear on the Angel Watch™.
> The watch remains completely silent and unaware.**"
> — <https://support.angelwatchco.com/kb/the-angel-watch/what-is-sound-guardian-and-how-can-i-enable-or-disable-it>, accessed 2026-08-19

Mechanically it works by callback: the Family Member enters their number in `+[country code]`
format and taps "Activate Callback", and the watch places a one-way incoming call to them.
Despite the article's title promising how to "enable or disable it", **it gives no disable
procedure.** The only mitigation the vendor offers is access control: *"do not add them as a
Family Member. Instead, add them as a regular phone contact."* There is no device-side lock, no
parent switch, and no indicator for the child. Note also that Sound Guardian consumes a voice
call — so in Romania, if VoLTE is not provisioned and 2G is unavailable, the covert-listen
feature fails along with ordinary calling. Remote photo and video capture are marketed
alongside it: *"Discreet remote listening, photo capture, even video using the Angel Watch
app"* (product page, accessed 2026-08-19).

**Vendor security claims** amount to a marketing line on the spec sheet — "App Link Security:
Government Grade Data Encryption" — with no protocol, no key management and no audit named.
Attributed here as marketing, not restated as fact.

**No CVE was found naming Angel Watch or `com.tgelec.angelwatch`.** Absence of a CVE here means
nobody has looked at this brand specifically, not that it is clean.

## Company, support and continuity

Asked directly: **who makes and supports this, and are they alive in 2026?**

- **UK entity: ANGEL WATCH COMPANY LTD, company number 12953092.** Status **Active**.
  Incorporated 15 October 2020. Registered office Amba House, 15 College Road, Harrow,
  Middlesex HA1 1BA. SIC 47421 / 47429 (retail sale of mobile telephones / telecoms equipment)
  — i.e. registered as a **retailer, not a manufacturer**. Last accounts made up to 31 December
  2024, next due 30 September 2026. Last confirmation statement 27 March 2026. **No overdue
  filings, no strike-off notice.**
  <https://find-and-update.company-information.service.gov.uk/company/12953092>, accessed
  2026-08-19.
- **US entity: The Angel Watch Company, LLC**, Sheridan, Wyoming. The App Store seller of record
  is "THE ANGEL WATCH COMPANY LLC" while the app's copyright line reads "© 2022 The Angel Watch
  Company LTD". The company reportedly started in Wyoming in November 2019.
- **Actual manufacturer: UNKNOWN, and not either of the above.** The Android package
  `com.tgelec.angelwatch` places the software on a Shenzhen white-label platform (see Security
  & privacy). The UK/US entities are the brand and the channel.
- **EU entity: none found.** The UK is not the EU. For a Romanian buyer this is a distance
  purchase from a third country: customs and import VAT on entry, and any warranty return
  travelling back to the UK at 15-40 days each way.
- **Warranty:** 12 months against manufacturer defects, plus the 14-day trial. An "Enhanced
  Warranty" is sold separately at **$4.99/month** — a subscription, though not one gating the
  app or the connectivity.
- **Support channels:** `support@angelwatchco.com`, Mon-Fri (hours given variously as 9am-6pm
  and 8am-3pm MST on different pages), US phone +1 888 787 4757, and a reasonably detailed
  self-service knowledge base of roughly 60 articles. No EU phone number, no RO-language
  support.
- **Signs of life in 2025-26:** Android app updated **2026-07-25**; storefront live with a 2026
  copyright and a running sale; Companies House confirmation statement filed March 2026.
  **Signs of neglect:** the blog last posted **2023-09-05**; the spec KB still references
  "Android 4.4 (models before 2021)"; three mutually contradictory band lists; a privacy policy
  that never mentions the product. This is a small operation that keeps the shop and the app
  running and has stopped maintaining everything else.

## Reality check

- **"Publishes a full band list"** → publishes *three different* band lists across its own
  pages, one of which omits B20 entirely. The property that made this watch a candidate is the
  property the vendor is least consistent about.
- **"SIM-unlocked, no subscription gate, lowest geo-block risk"** → true, and it holds up: no
  allow-list, no vendor SIM, email-only signup. But it is not a US/UK-engineered product with a
  US/UK cloud; the app is a rebrand on a Shenzhen white-label platform, and the buyer trades
  vendor-cloud geo-risk for shared-backend security risk.
- **"Government Grade Data Encryption"** (vendor marketing) → an unsubstantiated phrase on a
  spec sheet, sitting next to a stock Shopify privacy policy that never mentions the watch.
- **"2–3 days battery"** → the one independent test got **more** than the claim: 96+ hours at
  10-or-60-minute updates. Unusually, the marketing here is conservative.
- **"No social media, no games, no distractions"** → no games, no browser, no app store, no SMS
  — all confirmed by the vendor. But **WhatsApp ships on it**, reaching outside the
  parent-approved contact list, and no removal procedure is documented.
- **"UK company"** → real and active (Companies House 12953092), but the last blog post is from
  **September 2023**. The shop, the app and the filings are current; the public-facing content
  operation stopped three years ago.

## What users say

**This is the honest position: the evidence base is extremely thin.** One independent hands-on
review exists, in any language. There are no Romanian owner reports at all. Reddit, Trustpilot
and Amazon reviews were all inaccessible from this environment (403/500), which is a limitation
of this pass rather than proof of absence — but even the reachable web surfaced nothing beyond
the following. **SUPERSEDED 2026-08-19: the deep sweep below broke through to the Apple review
feeds, the archived Play listing, Trustpilot and Reddit — see "First deep sweep (2026-08-19)"
for the full owner pool (30+ dated reports).**

**Works:**
- *"lasted over 96 hours"* — battery, across a week of hands-on wear. SafeWise (USA),
  2025-01-08. <https://www.safewise.com/kids-safety/smartwatches/angel/> — **1 source.**
- GPS performed acceptably "during neighborhood walks and drives" — same source, same date.
  **1 source.**

**Fails:**
- *"often showed my location darting across the street"* — while stationary indoors. SafeWise
  (USA), 2025-01-08. **1 source.**
- *"two minor dings on the screen already"* after one week; navigation "frustrating, requiring
  frequent reboots"; default settings "weren't considered child-safe" and need changing out of
  the box. Same source, same date. **1 source.**
- **Aggregate signal:** the Android app is rated **2.6 / 5 from 134 ratings** (apkcombo /
  apkpure, accessed 2026-08-19). The individual review texts could not be retrieved, so *why*
  it is rated 2.6 is **unknown**. Note that 2.6/5 is the same rating this project recorded for
  the Garett companion app, which shares the `com.tgelec` stem — one more sign these are builds
  of the same platform.

No Romanian-language review, forum post or retailer rating for this model was found anywhere.
Nothing here should be generalised from: a single US reviewer plus an unexplained 2.6-star
aggregate is not a body of evidence.

## First deep sweep (2026-08-19)

First depth pass on this watch (previous evidence score 2/10). Methods that actually worked from
this environment: Apple's customer-review RSS feeds (US/GB/DE/FR/NL/RO storefronts), the Wayback
copy of the pulled Google Play listing, Reddit comment search, Trustpilot via browser, the FCC
equipment-authorisation database via fccid.io, Google Lens reverse-image search on the vendor's
product photo, and the vendor's own 24-page user manual mirrored on device.report. Facebook out
of scope per project rules. Every negative below lists the queries that produced it.

### 1. The band contradiction and the OEM identity

**B20 verdict: still unresolved — and the risk profile got worse, not better.**

**No regulatory artefact exists under this brand.** Searched: fccid.io (`ANGEL`, full-text
"angel watch"), Google `"angel watch" smartwatch "FCC ID" OR site:fccid.io OR site:fcc.report`,
`site:device.report "angel watch"` (manuals only, no certification), and the vendor's own manual
(24 pp — no FCC ID, no model number, no band list, no CE marking text). No EU RED Declaration of
Conformity is published anywhere on angelwatchco.com. The device.report copies are the vendor's
own Shopify-hosted manuals, not FCC filings — i.e. **the US-market watch surfaces no FCC ID at
all in the public index**, which for a US-sold cellular device is itself a red flag (either it
ships under an undisclosed OEM grant or it was never separately certified).

**The OEM family is now identified with high confidence: Wonlex (SHENZHEN IWONLEX TECHNOLOGY
CO., LTD).** Four independent lines converge:

1. **Reverse image search.** Google Lens on the vendor's own hero photo
   (`cdn.shopify.com/.../products/1.png`) returns, as visual matches, Wonlex KT17S listings on
   eMAG.ro and Secutek.ro, "Wonlex Android 4G KT17S Smart Watch for Elderly" on Alibaba, Wonlex
   KT15 (AtumSmart.ro), Wonlex KT24 (Skroutz), and Techone KT23T (eMAG, a Wonlex rebadge) —
   i.e. the entire match set is one OEM's catalogue.
2. **Firmware fingerprint.** The Angel manual's factory-reset dial code `*#174714#*` is the
   documented reset code for Wonlex KT15 and the Wonlex-built Xplora XGO2/XGO3 (hardreset.info)
   and appears verbatim in generic AliExpress/eBay Wonlex-class listings.
3. **App lineage.** A US App Store owner wrote on **2020-08-21**: *"getting it to work and
   cooperate with the former SeTracker2 app… So it's the same app just with a new interface"*
   (review "Can't even log in...", user vergetten). The Angel app is a rebadged SETracker2 —
   the 3G Electronics/YQT platform named at DEF CON 34 — and Wonlex is a SETracker-family OEM.
4. **OS oddity explained.** The vendor KB's strange "Android 4.4 (models before 2021) / Android
   8.1 (2022 and newer)" line matches the Wonlex platform exactly: KT17S spec sheets say "Mocor5
   OS (based on Android 4.4.2)" (made-in-china.com, Wonlex storefront), with later models on
   Android 8.1-class UNISOC parts.

Feature-set mapping supports the same family: Wonlex uniquely pairs a kids model (KT17-class:
1.4" IPS, video call, take-off alarm) with a senior model (KT17S: HR/BP/temp, fall detection)
— exactly Angel's Series R / Series R Assist pairing, down to the fall alert and medication
reminder. **Exact model not pinned:** KT17 publishes 700 mAh / IP65 vs Angel's claimed 800 mAh /
IP67-or-IP65, so the Series R is either a customised build or an adjacent family member. All
band statements below are therefore **platform evidence, not Series R evidence**.

**What the Wonlex platform says about bands — this is the sting:**

| Source (platform, not Series R) | LTE bands |
|---|---|
| iwonlex.net, KT17 & KT17S product pages (accessed 2026-08-19) | "FDD: B1 B2 B3 B5 B7 B8 **B20** B28A" — one global SKU incl. B20 |
| **FCC ID 2A7S9-KT21** (Wonlex "Kids GPS watch", granted 2022-07-18) | FDD LTE **B2, B4, B5, B7, B12 only** + GSM 850/1900 — a **US-only radio with NO B20 and NO B3** |

The FCC grant (fccid.io/2A7S9-KT21; equipment list 699.7–715.3 MHz = B12, 1712.5–1752.5 = B4,
824–849 = B5/GSM850, 1850–1910 = B2/GSM1900, 2510–2560 = B7; grant note: *"This device supports
LTE… for FDD LTE Bands 2 and 4; … Band 7; and … Bands 5 and 12"*) proves the Wonlex family ships
**regional radio variants** — and the US variant would fail not only Romanian indoor coverage
(no B20) but Romanian LTE generally (no B3). Aside: that FCC ID was a "Change in Identification"
from **2A4WI-SPACE2 (Sosmart Spa / SoyMomo, Chile)** — the same board certified for another
Western rebrand, confirming how this OEM operates.

Now note that **every Series R variant SKU is coded `AW-R-NA-*`** ("NA" = North America — from
the Shopify product JSON, including "No SIM (International Customers)": `AW-R-NA-BLUE-NOSIM`),
the included SIM is US T-Mobile, and the app region for all users worldwide is "North America".
If Angel stocks a single, US-oriented hardware SKU, the product-page list (which includes the
purely-North-American B12/B17 alongside B20) may be a paper superset of two real radios. The
vendor's three contradictory lists now have a coherent, unproven explanation: product page =
marketing superset, support-KB "frequency bands" = modem datasheet superset (adds B4, B38–41),
tech-spec KB (B1/B3/B5/B7/B8) = possibly the actual international variant — **which would mean
no B20 on the shipped device**, exactly as the support KB says.

**How to actually settle it** (not possible from public sources): get the IMEI from a delivered
unit (Settings → Device Info per the manual) and run a TAC lookup, or field-test on Orange RO
800 MHz. Nothing short of that resolves B20 for this brand.

One more manual-sourced radio fact: *"AT&T and CDMA carriers like Verizon, US Cellular and
Cingular are not supported"* — while the storefront simultaneously sells an "Angel Watch™ SIM
(AT&T)" variant (`AW-R-NA-*-GSMA`). The vendor contradicts itself on carriers, too.

### 2. Owner reports

**Apple App Store review feeds** (`itunes.apple.com/<cc>/rss/customerreviews/id=1526273778`,
fetched 2026-08-19): US = 25 reviews (2020-08 → 2026-07), GB = 2, **DE/FR/NL/RO = zero
entries** (negative result, exact feed URLs fetched per storefront). The app is Angel-specific,
so this is the owner pool. 1–3★ first, verbatim:

- *"First use crashing all the time, location way off … seems very unreliable, which is
  arguably worse than nothing."* — Flip963, US, 1★, **2026-07-17**
- *"SCAM: User support no longer provided … when I ran into trouble trying to set them up,
  Angelwatch have ghosted me. They won't answer any emails or other forms of online
  communication."* — Neevyweev3y, **GB**, 1★, **2025-09-19** (a repeat customer)
- *"once you do get it setup it is missing half the features it claims to have … Support team
  will never get back to you."* — l.erin.m, US, 1★, 2024-01-24
- *"Really good watch but most time it doesn't work with app and not reliable."* — Prof291,
  US, 1★, 2024-05-18
- *"Location accuracy is joke, even when the watch is outdoors with clear sky … Half the time
  you receive notification of a new message but when you go to the app, there isn't any new
  messages."* — Iggi---, US, 1★, 2022-08-17
- *"a lot of the time the watch has trouble connecting to 4G … The GPS is slow and not very
  accurate. It sometimes would show my child as being two blocks from where she was … I'm on my
  second watch with this company."* — Michig00se, US, 1★, 2021-05-14
- *"I get notifications that he's receiving text from scams … So either I got someone else's
  number or someone else got the number we're using."* — this1yah, US, 3★, 2021-09-18 (recycled
  SIM numbers, not vendor's fault, but a real onboarding failure mode)
- *"The app is riddled with issues … The video calling doesn't come through most of the time …
  **The sound guardian call back feature doesn't always work.**"* — leenalove00, US, 1★,
  2021-10-20

Positive pole, for balance: *"We decided to go with their cell partner Red Pocket GSMA and it
worked right away … It's not some Chinese junk"* (Narduski, US, 5★, 2020-08-28 — ironic given
§1) and two adjacent 5★ reviews dated 2021-10-24/25 with marketing-adjacent phrasing.

**Google Play**: the listing is **gone** (see frontmatter). From the Wayback copy of
2026-01-31: **2.6★ from 134 ratings — distribution 54×1★, 19×2★, 16×3★, 15×4★, 28×5★** —
and three dated review texts:

- *"no matter where the watch was indoors, it constantly struggled to connect to our cell plan
  … Unless the watch was outside, It could barely hold a signal … **The battery is not great**
  and the way the charger connects to the watch it sometimes didn't charge fully or properly.
  It's a finicky magnetic connection."* — David, 2★, 2023-01-06
- *"customer service doesn't answer their phone line or respond to emails or their chat …
  I've been trying for 3 weeks to contact them to use the extra warranty I paid for … Unable to
  turn off Amber Alerts, even with Do Not Disturb mode enabled."* — J H, 1★, 2024-07-24
- *"the app does not save the names you input for the watches … all the watches on my device
  list are renamed to 'baby'."* — Glen Lovelace, 2★, 2021-12-29

**Reddit** (comment search, `reddit.com/search/?type=comment`, queries: `"angel watch" kids
smartwatch` [0 hits], `angelwatchco`, `"angel watch" GPS`): exactly **one owner worldwide** —
u/Initial_E, r/askSingapore: *"I got my kid an Angel Watch and I can lock it down so tight it's
barely fun to play with. But it does make phone calls and WhatsApp and gps tracking"* (~2023)
and *"Can still track gps and call/whatsapp each other in emergencies… This was from Shopee"*
(~2024). Notable: bought via **Shopee Singapore** — a non-vendor-direct channel existed at
least in SG. Plus one custody case (see §3).

**Trustpilot** (`trustpilot.com/review/angelwatchco.com`): **10 reviews, 100% 1-star,
TrustScore 2.0** — quotes in §5.

**Amazon**: US search results (ship-to-RO session) contain no Angel listing; amazon.ie search
likewise (out-of-stock listings are hidden by default). SERP metadata only: Amazon.ie 3.3★
(12 ratings), Amazon.se 2.3★ (3). Review texts unretrieved — recorded as a gap, not absence.

**Romanian owner reports: still zero.** Queries: RO Play (listing gone), RO App Store feed
(empty), Google Lens matches surfaced RO *retailers of Wonlex clones* (eMAG, Secutek, AtumSmart,
Techone) but no Angel-branded RO listing, Reddit comment queries above. The closest RO-relevant
fact is new and useful: **the same Wonlex hardware family is sold in Romania today** as Wonlex
KT17S / Techone KT23T on eMAG with local warranty — a Romanian buyer can get this platform
without importing the Angel skin.

### 3. Sound Guardian (covert listen)

Three genuinely new data points:

1. **It is used in the wild, against households.** r/legaladvice, *"Spying threw Childs
   device"*, BC Canada, ~2026-01 (7 mo before this sweep): a non-custodial parent gifted the
   watch; OP found *"He can listen in at any time, take pictures, track her with gps"*, was
   removed from the device by the other parent's admin account, and heard the watch ring at
   school hours with no incoming-call log. The device is identified as an Angel Watch by the
   OP's own use of the trademarked feature name ("Sound guardian") and a commenter linking the
   Angel KB article.
2. **The covert mode is not actually invisible on the watch.** Same OP, after testing it
   herself: *"trying 'sound guardian' out myself **it disables the watch and it will appear to
   be dead** while it is performing this feature"* — her daughter said *"oh no my watch died
   mom"*. The vendor's claim that *"the watch remains completely silent and unaware"* is
   half-true: no alert, but the watch visibly plays dead during a listen — an observable tell,
   and a functional loss (a child cannot SOS during a listen-in if the UI is unresponsive;
   inference, unverified).
3. **Reliability**: *"The sound guardian call back feature doesn't always work"* — owner,
   2021-10-20 (US App Store, above).

Vendor stance on disabling, restated across manual and KB: none. The manual only adds a legal
disclaimer: *"Sound Guardian must be used with consent and in accordance with any applicable
laws."* Access control (not granting Family Member status) remains the only mitigation. The
manual also confirms **Remote Camera** photo capture as a sibling covert feature.

### 4. Battery

**No second quantitative observation exists.** The 96 h SafeWise figure (2025-01-08, no live
tracking available, 10-or-60-min updates) remains the only measured number. New, weaker second
point: *"The battery is not great"* plus a *"finicky magnetic connection"* that *"sometimes
didn't charge fully"* — Play review, David, 2023-01-06, conditions unstated. Directionally this
contradicts SafeWise; both are single anecdotes. Also newly relevant to interpreting any owner
figure: the manual documents a **Night Power Savings Mode** ("Disconnect from 10pm to 6am every
night") — an owner running it gets ~8 h/day of the battery life "for free", so owner-reported
multi-day figures are not comparable without knowing this setting. Searched YouTube for a
second hands-on: FourieFamCam unboxing (2021-02-22, 28.6k views) is vendor-echoing promotional
content with comments disabled and **no battery observation** (transcript grepped for
battery/hours/days); the only other "Angel Watch Review" hit (RaTamaZone, 2017) is an unrelated
Tamagotchi-style toy. `yt-dlp ytsearch12:"Angel Watch kids smartwatch review"` — no further
independent tests.

### 5. Vendor viability

The 2024-2026 owner record is uniformly one story: **the product still ships; the support
organisation has stopped answering.**

- *"For the past two weeks, I have called Angel Watch's customer support line daily during
  their posted business hours … an automated voice message instructing me to call back later,
  with no option to leave a message … I have been paying a monthly fee of $4.99 for an extended
  replacement and service warranty … the warranty I am paying for [is] completely ineffective."*
  — K Ordonez, Trustpilot, US, 1★, 2024-09-07
- *"DONT BUY! It has taken over two weeks to reply … We have been with you over two years but
  **your uk number is never picked up on any option** … And then to charge £40 for a
  replacement…"* — Katherine Littlejohn, Trustpilot, **GB**, 1★, 2025-05-10
- *"Worst customer service ever, i.e. they don't exist. At least not on planet earth."*
  — Jana Nordmann, Trustpilot, DE, 1★, 2025-07-19
- *"This is a scam. **They keep charging and have no method for canceling or returning.** I
  sent multiple emails and never heard back … Finally had to call my cc and dispute the
  charges."* — James Goldman, Trustpilot, **NL**, 1★, 2026-07-24
- *"I received a used watch … the number that they have listed says you can't leave a message
  and hangs up … now I'm stuck with this watch with no way to return it. I know years ago Angel
  Watch used to be very good and very responsive **now it seems like they're just going out of
  business and taking your money.**"* — Nikki S, Trustpilot, US, 1★, 2025-08-17
- Same pattern independently on the app stores: GB 2025-09-19 ("ghosted", above) and Play
  2024-07-24 (3 weeks, paid warranty, no answer).

Trustpilot aggregate: **10 reviews, 100% 1★**, "1 review in the last 12 months" flagging low
volume; no vendor responses to any review. Set against the file's earlier structural facts
(Companies House filings current, app updated 2026-07-25, storefront live), the picture is a
solvent shell with dead support. Practical consequences for the RO plan:

- The **14-day return window is fictional in practice** if nobody answers the RMA mailbox —
  two owners report being unable to return at all; one needed a card chargeback.
- The **$4.99/mo Enhanced Warranty is a liability**, not protection: it keeps billing while
  support is unreachable (two independent reports, 2024 and 2026).
- **Availability is wobbling**: RO-geo storefront showed 689 lei with both buy buttons OUT OF
  STOCK (2026-08-19); no purchasable Amazon listing in US/IE searches the same day; the Google
  Play app is gone (window 2026-01-31 → 2026-08-19, v1.2.5 still pushed 2026-07-25 per
  apkcombo/apkpure). An Android-parent purchase today would depend on sideloading an APK from a
  mirror — disqualifying for this project's threat model.
- US entity checks: Wyoming SoS blocked (r.jina.ai abuse-block), OpenCorporates CAPTCHA-gated —
  not retried per rules; the D&B citation from the prior pass stands as the only US-registration
  source.

### Manual findings that correct this file (vendor's own 24 pp manual, device.report mirror, dated 2022-05-07)

- **SMS is present and parent-toggleable** — *"If enabled by the parent, SMS can be used to
  send text messages to any approved contact"*; the app "intercepts" all SMS. This contradicts
  the KB's "SMS absent by design" recorded above. Another vendor self-contradiction.
- **There IS an on-watch App Store**: *"Install available child safe applications. Apps can
  only be installed using the Angel Watch app"* — which reframes WhatsApp: it arrives via the
  parent-controlled store ("other messaging apps in the watch's App Store offer direct
  messaging"), so it is likely parent-installable rather than irremovably preloaded.
  **unverified** which apps ship enabled by default.
- **Dial pad and GPS can each be disabled** by the parent (Function Restrictions) — the watch
  ships with a free-dial keypad ON by default (*"Use the dial pad to freely dial any number"*),
  which one reviewer (SafeWise) already flagged as defaults "not child-safe".
- **Any SIM change factory-resets the watch** (*"For security, any change of SIM will factory
  restore the watch requiring re-registration"*) — directly affects the RO pre-purchase test:
  swapping between Orange/Digi/Vodafone SIMs wipes the pairing each time.
- USB **Data Transfer** mode exports files to a computer (gallery is claimed non-exportable
  from the watch UI, but the USB path exists).
- GPS accuracy is stated as 5–50 m here vs 5–10 m on the product page — a fourth spec-sheet
  inconsistency.

### Score movement

- CAPABILITY 3 → **2**: no live tracking, single-constellation GPS, B20 now formally
  unverifiable with a documented no-B20 US variant in the same OEM family, Android app no
  longer installable from Play, and the covert-listen feature both undisableable and visibly
  buggy. The hardware family is competent; this skin of it is degrading.
- EVIDENCE 2 → **6**: 27 dated app-store reviews across two storefronts, 3 archived Play
  reviews + full rating distribution, 5 dated Trustpilot reports from 4 countries, 1 Reddit
  owner + 1 real-world covert-listen case, the OEM family identification with an FCC grant and
  OEM spec sheets, and the vendor's own manual. Still zero Romanian reports and one hands-on
  test — a thin but now well-mapped pool.

## Sources

All accessed **2026-08-19** unless a different date is given.

| URL | What it established |
|---|---|
| <https://angelwatchco.com/products/angel-watch-r> | Product spec block: bands "1,2,3,5,7,8,12,17,20,28", GSM 850/900/1800/1900, GPS 5-10 m, Wi-Fi 50-100 m, LBS 50-1000 m, 800 mAh, 1.44" touchscreen, IP67, Android 8.1, 1-year warranty, "Social Media & Games: No", $149.99 |
| <https://angelwatchco.com/products/angel-watch-series-r> | UK storefront: £149.99 (from £169.99), 12-month warranty, 14-day trial, EE SIM for UK / no SIM for international, "Discreet remote listening, photo capture, even video", Class Mode |
| <https://angelwatchco.com/collections/all> | Series R in stock at $149.99; Series R Assist $189.99; Enhanced Warranty $4.99/mo; UK and USA SIM cards sold separately |
| <https://angelwatchco.com/policies/shipping-policy> | International shipping offered, 15-40 days; Romania in the destination list |
| <https://angelwatchco.com/policies/privacy-policy> | Stock Shopify e-commerce policy; Shopify + Google Analytics; transfers outside Europe to Canada/US; **no watch/app data handling described**; no last-updated date |
| <https://angelwatchco.com/blogs/news> | Blog dormant since 2023-09-05; no 2024-2026 posts |
| <https://support.angelwatchco.com/> | KB structure, 10 categories |
| <https://support.angelwatchco.com/kb/the-angel-watch> | 38-article index incl. Sound Guardian, vitals, "no games/apps/social media", the 2 MP camera claim |
| <https://support.angelwatchco.com/kb/the-angel-watch/what-are-the-technical-specifications-of-angel-watch> | The contradicting spec sheet: LTE B1/B3/B5/B7/B8 only, IP65, 1.3" 240×240, 0.3 MP camera, "1845 chipset, Quad-core (1.3 GHz)", 1 GB DDR3 / 8 GB, 800 mAh 3.7 V, "1-3 days", GPS+Wi-Fi+LBS, 40×50×15 mm |
| <https://support.angelwatchco.com/kb/the-angel-watch/how-often-does-the-watch-pick-up-the-wearers-location-using-gps> | Update intervals: manual / 10 min / 1 hour; no live tracking |
| <https://support.angelwatchco.com/kb/the-angel-watch/what-is-sound-guardian-and-how-can-i-enable-or-disable-it> | Covert remote listen; silent on the watch; callback mechanism; **no disable procedure** |
| <https://support.angelwatchco.com/kb/the-angel-watch/can-i-travel-with-the-watch> | Works internationally; no unsupported-country list; app and watch region must match |
| <https://support.angelwatchco.com/kb/the-angel-watch/can-you-play-games-download-apps-music-social-media-etc-on-angel-watch> | No games, browser, app store or social media |
| <https://support.angelwatchco.com/kb/the-angel-watch-app> | App article index; registration, family members, Reject Unknown Caller |
| <https://support.angelwatchco.com/kb/the-angel-watch-app/registering-your-app-account> | **Email + captcha + password only; no phone number; "Set your account region to North America, regardless of your physical location"** |
| <https://support.angelwatchco.com/kb/cellular-networks> | Networks/SIM article index |
| <https://support.angelwatchco.com/kb/cellular-networks/what-frequency-bands-does-the-device-support> | Third band list: B1,2,3,4,5,7,8,12,17,20,28,38,39,40,41 |
| <https://support.angelwatchco.com/kb/cellular-networks/im-not-in-the-usa-or-id-like-to-use-my-own-network-what-sim-plan-do-i-need> | "fully unlocked… most global 4G / GSM / LTE networks"; 1000 min + 1 GB; manual APN required |
| <https://support.angelwatchco.com/kb/cellular-networks/im-having-issues-making-outgoing-calls-with-angel-watch> | **VoLTE toggle at Settings → Mobile Networks → VoLTE, must be ON**; VoLTE config takes an operator code |
| <https://support.angelwatchco.com/kb/battery-and-charging-questions-and-issues> | Claimed "2-3 days"; 800 mAh / 3.7 V dual Li-ion; Location Update Schedule named as the main drain lever |
| <https://support.angelwatchco.com/kb/messaging-and-the-line-slash-lite-lite-app> | WhatsApp preinstalled, reaches outside the family group; SMS deliberately absent; slug artefact "line/lite lite app" |
| <https://support.angelwatchco.com/kb/refunds-and-exchanges> | 14-day return, identical for international customers; refund ~7 days, less any restocking fee |
| <https://apps.apple.com/ro/app/angel-watch/id1526273778> | **App live in the Romanian App Store**; seller "THE ANGEL WATCH COMPANY LLC"; Romanian among 45 languages; iOS 15+; "developer does not collect any data" |
| <https://apkcombo.com/angel-watch/com.tgelec.angelwatch/> | Package `com.tgelec.angelwatch`, v1.2.5, updated **2026-07-25**, Android 5.0+, 10,000+ installs, **2.6/5 from 134 reviews**, developer "Angel Watch Company Ltd" |
| <https://apkpure.com/angel-watch/com.tgelec.angelwatch> | Corroborates version, date, package name and developer |
| <https://www.safewise.com/kids-safety/smartwatches/angel/> (2025-01-08, Cathy Habas) | **The only independent hands-on test found.** 96+ h battery; indoor location "darting across the street"; 10/60-min updates, no live tracking; screen dings within a week; frequent reboots; defaults not child-safe |
| <https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html> (2026-08-14, Steffen Zahn) | **`com.tgelec.*` shared package stem across Garett / KidiWatch / Beafon**; SETracker operated by YQT / 3G Electronics; data on Alibaba Cloud in China; 46 apps, 39 brands, 20+ countries; silent listen, camera trigger, location spoof |
| <https://mlq.ai/news/researchers-show-childrens-gps-watches-can-be-hijacked-across-shared-backends/> | Corroborates the shared-backend research |
| <https://pasqualepillitteri.it/en/news/11605/kids-smartwatch-hacked-spying> | DEF CON 34, 2026-08-08, Solferini & Stykas; Black Hat demo 2026-08-07; parent's email address sufficient for takeover |
| <https://find-and-update.company-information.service.gov.uk/company/12953092> | ANGEL WATCH COMPANY LTD — **Active**, inc. 2020-10-15, Harrow HA1 1BA, SIC 47421/47429, accounts to 2024-12-31, confirmation statement 2026-03-27, no overdue filings |
| <https://www.dnb.com/business-directory/company-profiles.the_angel_watch_company_llc.2032db1f630f9b595d7697809ba7a2ae.html> | The Angel Watch Company, LLC — Sheridan, Wyoming, USA |
| <https://www.smartwatchspecifications.com/angel-watch-a-kids-smart-watch-review/> (2021-08-20) | **Older source, marked as such.** Nano-SIM slot, front camera, IP67. Spec rehash, not a hands-on test |

Added by the first deep sweep (all accessed 2026-08-19):

| URL | What it established |
|---|---|
| `itunes.apple.com/{us,gb,de,fr,nl,ro}/rss/customerreviews/id=1526273778/sortby=mostrecent/json` | The Apple owner pool: US 25 reviews (2020-2026), GB 2, DE/FR/NL/RO **empty**. All Q2/Q3/Q5 app-store quotes |
| <https://device.report/manual/2949107> | Vendor's 24-page Series R user manual (dated 2022-05-07): reset code `*#174714#*`, SMS toggle, on-watch App Store, dial-pad/GPS disable, SIM-change factory reset, Night Power Savings, Sound Guardian consent line, "AT&T … not supported", no FCC ID/model/band list |
| <https://angelwatchco.com/products/angel-watch-r.json> | Shopify product JSON: created 2021-01-30; all SKUs `AW-R-NA-*` incl. `-NOSIM` international variant; AT&T + T-Mobile SIM variants |
| Google Lens on `cdn.shopify.com/s/files/1/0281/3467/0441/products/1.png` | Visual matches: Wonlex KT17S (eMAG.ro, Secutek.ro, Alibaba), KT15, KT24, Techone KT23T — the OEM-family identification |
| <https://www.iwonlex.net/products/wonlex-new-functional-video-call-kids-watch-kt17> | Wonlex global radio SKU: "FDD: B1 B2 B3 B5 B7 B8 B20 B28A", 1.4" IPS, 700 mAh, IP65 |
| <https://fccid.io/2A7S9-KT21> | **Wonlex US FCC grant (2022-07-18): FDD LTE B2/B4/B5/B7/B12 only — no B20, no B3.** Proof of regional radio variants. Originally certified as 2A4WI-SPACE2 (SoyMomo, Chile) |
| <https://fccid.io/2A7S9> + <https://fccid.io/ANGEL> | Wonlex grantee record (Shenzhen iWonlex, code 2A7S9); **no Angel Watch FCC ID exists** |
| hardreset.info (Xplora X5P/XGO2/XGO3, Wonlex KT15 pages, via Google) | `*#174714#*` reset code shared across the Wonlex-class platform |
| Wayback `web.archive.org/web/20260131054022/https://play.google.com/store/apps/details?id=com.tgelec.angelwatch` | Last live Play snapshot: 2.6★, 134 ratings (54/19/16/15/28 by star), v1.2.4; three dated review texts. Live listing 404s on 2026-08-19 |
| <https://play.google.com/store/search?q=angel%20watch%20tgelec&c=apps> | Play search does not surface the app; SeTracker2 (SJE LIMITED) still listed |
| <https://www.trustpilot.com/review/angelwatchco.com> | 10 reviews, 100% 1★, TrustScore 2.0; the five dated support/warranty-failure quotes (US/GB/DE/NL, 2024-2026) |
| <https://www.reddit.com/r/legaladvice/comments/1qhnhr2/spying_threw_childs_device/> (~2026-01) | Real-world covert-listen custody case, BC Canada; "sound guardian … it disables the watch and it will appear to be dead" |
| Reddit comment search (`?type=comment`: `"angel watch" kids smartwatch`=0, `angelwatchco`, `"angel watch" GPS`) | One owner worldwide (u/Initial_E, r/askSingapore, via Shopee SG); no RO reports |
| YouTube via yt-dlp (`ytsearch12:"Angel Watch kids smartwatch review"`, video YRNypYOvzYw) | FourieFamCam unboxing 2021-02-22 is promotional, comments disabled, no battery data; no second independent hands-on exists |
| Amazon US/IE searches (`amazon.com/s?k=angel+watch+series+r+kids`, `amazon.ie/s?k=angel+watch+kids+smartwatch`) | No purchasable Angel listing surfaced in either storefront on 2026-08-19; Amazon.ie SERP metadata 3.3★/12, Amazon.se 2.3★/3 |

**Retrieval failures in this pass** (recorded rather than guessed around): Amazon US product
pages returned HTTP 500; Trustpilot, AppBrain and JustUseApp returned 403; the `manuals.plus`
Series R user manual returned 403; the Google Play listing would not render its metadata in
either the US or the RO storefront, so the Play review texts, install-country list and data
safety section are **unread**. The web-search budget for this session was exhausted, so no
further discovery was possible. No FCC ID and no CE/RED declaration of conformity were located
for this model.

**Retrieval failures in the deep sweep (2026-08-19):** Amazon US/IE review *texts* (search
results hid the out-of-stock listing; only SERP rating metadata captured); Wyoming SoS
(`wyobiz.wyo.gov` proxy-blocked) and OpenCorporates (CAPTCHA-gated) for the US LLC — the D&B
citation stands alone; `manuals.plus` still 403 (but the vendor manual was obtained via
device.report instead); Play review pages beyond the three texts embedded in the 2026-01-31
Wayback snapshot. CAPTCHA/bot-check pages were never completed, per rules.
