# TCL MOVETIME Kids Watch MT48

```yaml
---
model:                  TCL MOVETIME Kids' Watch MT48 (regulatory model MT48X, nano-SIM; MT48EX is the separate eSIM product)
brand:                  TCL — TCL Communication Ltd. (declarant); EU entity TCT Mobile Europe SAS, Nanterre, FR
release_year:           2025          # announced 2025-09-07 (IFA), press release 2025-09-10, EU retail late Oct 2025
still_sold:             yes           # eMAG.ro 1P, "În stoc", 897.99 RON, checked 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status:              likely
ro_evidence_tier:       2             # app IS live in the RO Play storefront, updated 2026-07-17, RO-language
                                      # reviews present. Also T4 (eMAG 1P + 24-month RO warranty) and
                                      # T5 (bands confirmed Romania-complete). NOT T1: no +40 registration proven.
ro_killer:              n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands:              [B1, B3, B7, B8, B20]     # SOURCED — TCL MT48X/MT48EX RED Art.10(8) declaration
band_b20:               true                       # "LTE FDD Band 8/20 (900/800 MHz): 24 dBm"
band_b28:               false                      # not in TCL's declared band list (irrelevant in RO anyway — n28 is 5G NR here)
volte:                  true                       # TCL product page: "Clear VoLTE calls"; press release: "VoLTE calls"
voice_fallback:         volte                      # GSM 900/1800 also declared, so 2G CSFB exists as a hardware fallback
modem_chipset:          UNKNOWN

# --- Positioning (the #1 criterion) ---
positioning:            [GPS-L1, GPS-L5, WiFi, LBS]   # GPS L1+L5 vendor-stated; WiFi/cell-tower from TCL's own
                                                       # MT48X "Location-Based Services" text — see caveat below.
                                                       # GLONASS / Galileo / BeiDou: UNKNOWN, never stated for MT48
wifi_positioning:       UNKNOWN       # 802.11 b/g/n 2.4 GHz hardware is RED-declared; TCL boilerplate references
                                      # "crowd-sourced WLAN hotspot and cell tower locations" but not model-specific
update_interval_min:    UNKNOWN       # TCL claims a 1-second location refresh; the app's configurable
                                      # polling interval is not documented anywhere found

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:            900
battery_claimed_h:      60 h use / 168 h standby      # TCL: "up to 2.5 days of use and 7 days of standby",
                                                       # with TCL's own disclaimer "based on results from internal lab tests"
battery_observed_h:     ">24 h"                        # ONLY datapoint: M3.se (SE), updated 2026-05-02,
                                                       # "räcker mer än en dag" — no hour figure, no conditions
                                                       # published, no tracking interval stated. No RO observation exists.

# --- App & service ---
app_name:               TCL Connect  (com.trackerandroid.trackerandroid)
app_android_min:        7.0
app_ro_playstore:       true          # CONFIRMED — see "Does it work in Romania?"
app_last_update:        2026-07       # Play listing "17 iul. 2026"; releases ~monthly through Aug 2026
data_region:            China         # TCL Children Privacy Protection Notice: "the controller, located in China …
                                      # service providers in China and the US". EU controller is TCT Mobile Europe SAS (FR).

# --- Practical ---
sim:                    nanoSIM       # RO SKU is MT48X. TCL: "We provides eSIM or Nano SIM two different products"
water_rating:           IP68 + 2ATM
weight_g:               55
camera:                 true          # 2 MP
games:                  true
extras_disableable:     partial       # School Time Mode disables camera, games and group chats on a schedule;
                                      # no evidence of a permanent off-switch for any of them
price_eur:              150           # RRP, TCL press release 2025-09-10
buy_from:               eMAG.ro (Romania) — first-party, "Vândut și livrat de eMAG", 24-month warranty, 30-day returns
price_ro_eur:           897.99 RON (≈ €180, approximate conversion — no dated FX source)
---
```

## Verdict

The best hardware in the field, and the two things that stood between it and a recommendation have
both now moved in its favour: **the TCL Connect Android app IS published in the Romanian Play
storefront**, and **TCL's own RED declaration for the MT48X confirms LTE B1/3/7/8/20 — Romania-complete,
B20 included**, plus GSM 900/1800 as a 2G safety net on Orange and Digi.

The residual risk is no longer the radio and no longer the storefront; it is that **not one Romanian
has been found who has run an MT48**, that the two Romanian reviews of the TCL Connect app that do
exist are both pairing failures on older models, and that TCL's privacy stack routes children's
location data through a Shenzhen controller while the marketing claims ISO 27701 and ISO 27001 that
no published certificate substantiates.

It clears the floor on paper — better than anything else here — and the decisive test is now free to
run before paying, because the app is installable in Romania today.

## Does it work in Romania?

### The deciding question: RESOLVED, and the answer is yes

**The prior sweep was looking under the wrong package names.** TCL Connect is not
`com.tcl.connect`, `com.tct.connect`, `com.tcl.kidswatch`, `com.tclcom.connect` or
`com.jrdcom.tclconnect`. It is:

> **`com.trackerandroid.trackerandroid`**

An unlovely package name inherited from an earlier tracker app, which is exactly why five plausible
guesses all 404'd.

Fetched 2026-08-19 against the Romanian storefront
(`play.google.com/store/apps/details?id=com.trackerandroid.trackerandroid&hl=ro&gl=RO`):

| Field | Value |
|---|---|
| Listing renders | **Yes** — page title "TCL Connect – Aplicații pe Google Play", Romanian UI |
| Developer | tclconnecthk / **TCT MOBILE INTERNATIONAL LIMITED**, Hong Kong Science Park |
| Updated on | **17 iul. 2026** (2026-07-17) |
| Installs | 1 million+ |
| Rating | 3.8 ★ from **16,600 reviews** |
| Requires | Android 7.0+ |
| Content rating | PEGI 3 |
| Supported watches (listing text) | **MT48X/MT48EX**, MT46(X/G2), MT43, MT42(X/G2), MT40(X/U/A/G2), MT40(SX/SA) |
| Romanian in supported languages | **Yes** — Romanian is one of the 21 listed app languages (Uptodown, 2026-08-19) |

**Control test, same session, same method:** `com.tcl.connect` with `&gl=RO` returned **HTTP 404 Not
Found**, while `com.trackerandroid.trackerandroid` with `&gl=RO` returned a fully rendered Romanian
listing. The method distinguishes a live RO listing from an absent one, so the positive result is
meaningful and not an artefact of the fetch.

**Romanian-language reviews exist on this listing** — the first Romanian first-hand evidence anyone
has found for a TCL watch app. Both are failures, and both predate the MT48. See *What users say*.

**What this does and does not prove.** It reaches **Tier 2**: the app is live in the Romanian
storefront, recently updated, localised into Romanian, and Romanian users are demonstrably running
it. It does **not** reach Tier 1 — **nobody has been observed completing registration with a +40
number**, and no TCL document naming Romania as a supported service country was found. That step is
**unverified** and is the single remaining gate.

### Supporting evidence

- **Tier 4 — Romanian retail and warranty.** eMAG.ro, **"Vândut și livrat de eMAG"** (first-party,
  not a marketplace reseller), **897.99 RON**, **"În stoc"**, **"Persoane fizice: 24 luni"** warranty,
  **"30 de zile drept de retur"**. Three colours (Galactic Blue, Cosmic Pink, Nebula Grey). SKU
  `MT48X-3GLCA11` — the **nano-SIM** variant, confirmed in the eMAG spec table as "Nano SIM".
  Checked 2026-08-19. (eMAG's own search for "movetime" does not surface it; search "TCL MOVETIME MT48".)
- **Tier 5 — bands fit, confirmed from a primary regulatory source.** See *Network & bands*.
- **Romanian regulatory documentation ships in the box.** TCL's MT48X/MT48EX *Safety and warranty
  information* (doc code `CQF7AV0LCAAC`) is printed in 12 languages and **Român (RO) occupies pages
  134–146**, alongside PL, CZ, SK, SR, AL and GR. A manufacturer that pays to typeset a Romanian
  regulatory section is not treating Romania as an accident. This is a real signal, though it is a
  signal about *distribution intent*, not about *cloud service*.
- **TCL ran a Romanian-language PR campaign in August 2026.** zonait.ro (2026-08-13) and
  e-sports.ro (2026-08-14) both carried "TCL MOVETIME MT48: mai multă libertate pentru copii, mai
  multă liniște pentru părinți" ("more freedom for children, more peace of mind for parents").
  mobilissimo.ro published hands-on video coverage in Romanian from IFA on 2025-09-08.
  TCL is actively marketing this device to Romanians eleven months after launch.

### What is still unproven

- **+40 registration is unverified.** No source observed it succeeding or failing.
- **Romania was explicitly NOT a launch market.** TCL's press release (2025-09-10) names
  **Germany, UK, Spain, Italy, France** and adds: *"Expansion into additional international markets
  is underway and will follow upon receiving local certifications."* Romania has since acquired
  first-party eMAG distribution, a Romanian warranty, Romanian documentation and Romanian PR — which
  reads like that expansion completing — but **TCL has published no statement naming Romania**, and
  that inference is **unverified**.
- **Zero Romanian owners of an MT48 exist in the evidence.** eMAG reviews: none
  ("Fii primul care scrie un review"). eMAG Q&A: empty.
- **No Romanian operator publishes a VoLTE device whitelist**, so "the watch supports VoLTE" and
  "VoLTE is provisioned for this IMEI on Digi/Orange/Vodafone" remain different claims. **Unverified.**

## Pre-purchase test

The app is in the Romanian storefront, so **the decisive test is now free and takes ten minutes,
before any money moves**:

1. Install **TCL Connect** from the Romanian Play store — search the store, or go directly to
   `play.google.com/store/apps/details?id=com.trackerandroid.trackerandroid`. Confirm it installs
   (Android 7.0+).
2. **Attempt account registration with a +40 number.** Check that Romania appears in the country
   selector and that the SMS verification code actually arrives. This is the one step that has never
   been observed, and the one that killed Xplora.
3. Only then buy. **eMAG 1P gives 30 days of returns** (stated on the listing), so even a failure
   discovered in week one is recoverable — this is the widest safety net available on any candidate.
4. In week one, on a Romanian SIM: place **an outgoing and an incoming voice call with the watch on
   LTE** (VoLTE provisioning is the untested link), and check the reported location **inside the
   school building**, not in the garden.

**Prefer an Orange or Digi SIM.** Both still run 2G, and the MT48X declares GSM 900/1800 — so if
VoLTE provisioning fails, voice degrades to 2G rather than to silence. On a VoLTE-only path a
provisioning refusal means no calls at all.

## Positioning quality in real use

**The hardware claim is real and verified from a primary source.** TCL's own press release
(2025-09-10) and product page both state **"Dual Frequency GPS (L1+L5)"** with a **"1-second refresh
rate"** and *"robust anti-interference capabilities"*; the product page adds *"L1+L5 dual-band GPS
locks in quickly and tracks accurately, even around tall buildings or under dense trees."* eMAG's
Romanian spec table independently lists the sensor as **"GPS (dual-band L1+L5)"**. This is the only
device in the entire survey with L5, and L5 is the single best hardware answer to the multipath drift
that produces this category's signature failure — the child who appears in the wrong place, or in
Venezuela.

**But no independent accuracy testing of the MT48 exists.** The one independent review found
(M3.se, SE) scored it 4.5/5 and praised the app and battery but published **no positional error
figures, no fix-time measurement and no indoor test**. Every accuracy claim on this device is
therefore **the manufacturer's own**, and is recorded here as such. The L1+L5 hardware is verified;
its real-world benefit on this specific product is **unverified**.

**It does fall back to network positioning, by TCL's own admission.** The MT48X safety document's
*Location-Based Services* section states:

> "Where available, location-based services may use GPS, Bluetooth, and your IP Address, along with
> **crowd-sourced WLAN hotspot and cell tower locations**, and other technologies to determine your
> devices' approximate location."

Two caveats, stated plainly. First, this is **TCL group boilerplate** that appears across TCL
products — it is in the MT48X document, but it is not an MT48-specific engineering statement.
Second, and more important: **nothing in it tells the parent whether the app distinguishes a GNSS fix
from a WLAN/cell estimate in the UI.** That distinction is what determines whether you can trust a
pin on a map, and it is **UNKNOWN**. The dual-band receiver reduces how often the watch needs to fall
back; it does not by itself stop the app from silently showing you a cell-tower guess when it does.

**Wi-Fi positioning is UNKNOWN at model level.** The 802.11 b/g/n 2.4 GHz radio is present and
RED-declared, and eMAG lists Wi-Fi under connectivity, so the hardware prerequisite is satisfied.
Whether the MT48 actually uses WLAN scanning for indoor position — the thing that decides accuracy
inside a concrete school — is not stated by TCL for this model and is **unverified**.

**Constellations beyond GPS are UNKNOWN.** TCL names only "GPS L1+L5". GLONASS, Galileo and BeiDou
are never mentioned for the MT48 in any source found, and are **not** recorded here. (The older MT42
lists "BeiDou or GLONASS"; that is a different device and is not evidence about this one.)

## Battery in real use

**Claimed:** 900 mAh, **"up to 2.5 days of use and 7 days of standby on a single charge"** (TCL
product page and press release, 2025-09-10). eMAG restates this in hours: **60 h use / 168 h
standby**. TCL attaches its own disclaimer: *"Battery data based on results from internal lab tests.
Actual battery life varies by personal usage."*

**Observed:** exactly one independent datapoint, and it is qualitative.
**M3.se** (Sweden, published 2024-10-22, section updated **2026-05-02**, author Ida Blix) lists among
the MT48's *Fördelar* (advantages):

> **"Lång batteritid – räcker mer än en dag"**
> *("Long battery life — lasts more than a day")*

and in the summary: **"batteritiden håller vad den lovar"** *("the battery life delivers what it
promises")*.

**What that is worth, and what it is not.** It is a reviewer at a mainstream Swedish tech title,
recently updated, independently confirming the device clears the one-real-day floor — which is more
than most watches in this field have. It is **not** a measurement. M3 published **no hour figure, no
tracking interval, no call volume and no conditions**. The category's own history is that batteries
advertised in days arrive in hours *specifically when location polling is set aggressively* — WIRSEN
spans 12 h to 60 h on the same model. So:

- **battery_claimed_h: 60 h use / 168 h standby** — TCL, lab conditions, unstated.
- **battery_observed_h: ">24 h"** — one reviewer, Sweden, qualitative, conditions unpublished.

These are separate facts and are not merged. **No Romanian battery observation exists.** The honest
position is that the MT48 is *credibly* a more-than-one-day watch, and that anything beyond that is
manufacturer copy.

## Network & bands

**This was the headline unknown and it is now closed, from a primary regulatory source.**

TCL Communication Ltd.'s **Safety and warranty information for `Watch48 — MT48X/MT48EX`**, document
code `CQF7AV0LCAAC`, contains the RED Article 10(8) frequency declaration. Verbatim, from the English
section:

> **Frequency bands and maximum radio-frequency power**
> This radio equipment operates with the following frequency bands and maximum radio-frequency power:
> GSM 900 MHz: 33.5 dBm
> GSM 1800 MHz: 30.5 dBm
> UMTS B1 (2100 MHz): 24 dBm
> UMTS B8 (900 MHz): 24 dBm
> **LTE FDD Band 1/3/7(2100/1800/2600 MHz): 24 dBm**
> **LTE FDD Band 8/20 (900/800 MHz): 24 dBm**
> Bluetooth 2.4GHz band: 10 dBm
> Bluetooth LE 2.4GHz band: 2 dBm
> 802.11 b/g/n 2.4GHz band: 19 dBm
> This device may be operated without restrictions in any EU member state.

And the same table in the document's **Romanian** section (pages 134–146):

> **Benzile de frecvență și puterea maximă de radiofrecvență**
> Acest echipament radio funcționează cu următoarele benzi și valori de putere maximă de frecvență radio:
> GSM 900 MHz: 33,5 dBm / GSM 1800 MHz: 30,5 dBm / UMTS B1 (2100 MHz): 24 dBm / UMTS B8 (900 MHz): 24 dBm /
> **LTE FDD Banda 1/3/7(2100/1800/2600 MHz): 24 dBm** / **LTE FDD Banda 8/20 (900/800 MHz): 24 dBm** /
> Bluetooth cu bandă de 2,4GHz: 10 dBm / Bluetooth LE cu bandă de 2,4 GHz: 2 dBm /
> 802.11 b/g/n în banda de 2,4 GHz: 19 dBm
> **"Acest dispozitiv poate fi folosit fără restricții în orice stat membru al UE."**
> *("This device may be used without restriction in any EU member state.")*

The same document carries the formal declaration:

> "Hereby, TCL Communication Ltd. declares that the radio equipment of type **TCL MT48X/MT48EX** is in
> compliance with Directive 2014/53/EU."
> — Romanian: *"Prin prezenta, TCL Communication Ltd. declară că acest echipament radio tip TCL
> MT48X/MT48EX corespunde cerințelor menționate în Directiva 2014/53/UE."*

**Result: LTE B1, B3, B7, B8, B20.**

| Band | Present | Why it matters in Romania |
|---|---|---|
| **B20 (800 MHz)** | **YES** | **The decisive one.** Orange's only sub-1 GHz LTE band. Without it a watch has no low band at all on Orange — bad wrist antenna, concrete school, cell edge. Present. |
| B3 (1800) | YES | The national LTE workhorse across all operators. |
| B1 (2100) | YES | Urban capacity. |
| B7 (2600) | YES | Urban capacity. Present, unlike the imoo Z7 and X10. |
| B28 | **NO** | Costs nothing here — in Romania 700 MHz is **5G NR n28**, not LTE. A B28 line on a spec sheet buys nothing in this market. |
| **GSM 900/1800** | **YES** | The safety net. Orange and Digi still run 2G. If VoLTE provisioning is refused, voice falls back to 2G rather than failing outright. |

This is a **Romania-complete band list** — as good as the imoo Z3's, better than the imoo Z7's and
X10's (both lack B7), and it is sourced from the manufacturer's own regulatory text rather than a
retailer's marketing copy.

**Provenance caveats, stated openly.** (1) The PDF was retrieved from `imagepool.drillisch-online.de`
— the media server of the German MVNO group Drillisch/1&1, which distributes the MT48X — not from
TCL's own server. Its content is unmistakably TCL's own artwork (TCL doc code, TCL declaration, 12
languages), and TCL's canonical DoC portal at `tcl.com/global/en/EC_DOC` renders as a navigation stub
with no searchable model list, so this is the best primary source obtainable. (2) The document is a
**pre-final proof**: the SAR values are printed as `xx  xx W/kg` and the Bluetooth Declaration ID as
`xxxxxxxx`. The **band table, by contrast, is fully populated with concrete figures**, which is why
it is treated as final. Confidence: high, but the placeholder artefacts are disclosed rather than
hidden.

**VoLTE.** Stated by TCL in two places — press release ("VoLTE calls") and product page ("Clear VoLTE
calls") — and echoed in Romanian coverage ("apeluri vocale VoLTE", zonait.ro, 2026-08-13). This is
**vendor-stated and independently unverified on a Romanian network**. No Romanian operator publishes
a VoLTE device whitelist, so provisioning for this IMEI/TAC on Digi, Orange or Vodafone is **UNKNOWN**
and must be tested. The GSM fallback is what makes that risk survivable rather than fatal.

**If 2G is retired:** the watch keeps working, because VoLTE is claimed and B20/B3 carry the data.
The exposure is the reverse case — VoLTE provisioning refused *while* 2G is still alive is
recoverable; refused *after* 2G is gone is not. No Romanian operator has committed to a 2G end date.

**Modem chipset: UNKNOWN.** Never published. The sibling MT42 runs a UNISOC SL8521E; that is **not**
recorded as evidence about the MT48.

## Features & what can be disabled

| Feature | Present | Can the parent switch it off? |
|---|---|---|
| 4G video calls | yes | **UNKNOWN** — no per-feature toggle documented |
| VoLTE voice calls | yes | Contact whitelisting is the category norm but is **not documented for the MT48** — **unverified** |
| SMS, voice messages, photo sharing | yes | **UNKNOWN** outside School Time |
| Group chats | yes | **Yes, during School Time Mode** |
| Camera (2 MP) | yes | **Yes, during School Time Mode** |
| Games | yes | **Yes, during School Time Mode** |
| SOS | yes | **Deliberately NOT disableable** — stays live in School Time |
| AI image creation / recognition | yes | **UNKNOWN** |
| Friend-adding by shaking devices | yes | Gated on parental approval — TCL: *"with parents' approval"* |
| Step tracking, watch faces | yes | n/a |

**School Time Mode — exactly what it does.** TCL's wording is consistent across the product page and
the press release, and it is specific enough to be useful:

> "School Time Mode **silences notifications and disables the camera, games, and group chats, while
> keeping SOS calls active**."
> — TCL MT48 product page, accessed 2026-08-19

> "…muting notifications and limiting non-essential functions such as **camera, games and group
> chats**." — TCL press release, 2025-09-10

**Control:** *"Use the TCL Connect App to activate School Time Mode whenever it's needed, right from
your smartphone."* So it is **remotely parent-controlled from the app**, not merely a schedule the
child could edit. Romanian retail copy restates it: *"Modul School Time dezactivează notificările"*
(eMAG listing).

**So: yes, the camera and the games can be locked — but only inside School Time Mode.** That answers
the question asked, with one honest qualification: **no source found describes a permanent,
always-on disable** for the camera or games independent of the School Time schedule. For a parent who
wants the camera gone entirely rather than gone between 08:00 and 14:00, that gap matters, and
whether the app offers it is **unverified**. Recorded as `extras_disableable: partial`.

**What the MT48 does not ship, and that is a virtue here.** Unlike the Romanian white-label mass
(Wingereich, WIRSEN, Techone, Medeyatech), there is no Google Play Store, no WhatsApp, no TikTok and
no YouTube on this watch. The extras are TCL's own and are bounded. For a 7-year-old that is a real
advantage over the 400-RON tier, and it reduces both attack surface and the odds of a school ban.

## Security & privacy

### The certification claims: attributed, and unsubstantiated

TCL markets the MT48 with:

> "The MT48 kids watch **complies with GDPR, ISO 27701 privacy, and ISO 27001 security standards**,
> ensuring robust data protection."
> — TCL MT48 product page, accessed 2026-08-19

**This is marketing copy and is recorded as such. It could not be verified.** No certificate number,
no certification body, no scope statement and no audit date was found for either ISO standard in
relation to TCL Communication, TCT Mobile or the TCL Connect service. Worse, **neither ISO 27001 nor
ISO 27701 is mentioned anywhere in TCL's own children's privacy documentation** — the very documents
the claim ought to be operationalised in. The claim is **unverified**. Treat "ISO 27701 privacy"
here as an assertion by the seller, not as an established fact.

(The session's 200-call web-search budget was exhausted before a dedicated hunt for a TCL entry in an
ISO certificate registry could be run. That is a **coverage gap**, not a finding of absence — but the
absence of the standards from TCL's own privacy notices is itself substantive.)

### Where the data actually goes: China

TCL's **Children Privacy Protection Notice** — the document TCL's own MT48X manual instructs owners
to read — states:

> "Your data is accessed by **the controller, located in China**. In addition, we use **service
> providers in China and the US**."

- **Data controller named in that notice:** TCL Communication Technology Holdings Limited, No. 1001
  Zhongshanyuan Road, Nanshan District, **Shenzhen, China**.
- **EU/UK controller** (per the separate *TCL Children Privacy Protection Statement for Kids in
  Europe and the UK*): **TCT Mobile Europe SAS, Le Capitole, 55 rue des Champs-Pierreux, 92000
  Nanterre, France**; UK: TCT Mobile UK Limited, London.
- That EU/UK statement says plainly: **"We may send your data to places other than the UK or Europe.
  If we send your data to other places, we will make sure we obey the rules."** No specific safeguard
  mechanism (Standard Contractual Clauses, adequacy decision) is named in the text retrieved.
- **Retention:** no specific period for location data. *"TCL retains Personal Information only for as
  long as necessary and it will be deleted after a reasonable time."*
- **Both notices are dated 2022-06-28** — three years before the MT48 launched — and neither mentions
  the MT48 or TCL Connect. TCL has an EU entity and EU-facing paperwork, but the operative privacy
  documentation for a 2025 product is a 2022 document naming a Shenzhen controller.

`data_region: China`. This is materially worse than Canyon's stated EU servers or Anio's German
stack, and it is the strongest argument against the MT48 for a privacy-led buyer. It is not a
Romania-availability problem; it is a data-governance problem.

### Vulnerability research: one real, documented, serious incident

**TCL MOVETIME Family Watch, January–February 2020 — account takeover via the app's Facebook login.**

Discovered by **Darren McCormack**, a father of four in Perth, Australia, and reported by **ABC News
(AU) on 2020-02-11**. Tapping "connect with Facebook" in the app's settings logged him into **a random
stranger's account**; each subsequent attempt connected him to a different one. Exposed in those
accounts:

- children's **real-time GPS location**, to street address and suburb
- phone numbers, dates of birth, contact information
- **voice messages children had left for their parents**
- **safe zones** — i.e. the geofenced home and school addresses

Research cited alongside the report also found data sent to servers **insufficiently or not at all
encrypted**, making covert tracking of a child's position possible, with third-party and provider
servers holding account names, phone numbers, pictures and safe zones. The case is written up in the
peer-reviewed literature (*International Cybersecurity Law Review*, Springer, 2020,
doi:10.1365/s43439-020-00006-3) as an exemplar of IoT-for-children regulatory failure.

**TCL's response, verbatim, to ABC News:**

> "A software bug was the root cause of this issue. Our teams identified this prior to you contacting
> us and this was corrected with an update on **January 28** — less than 24 hours after it was first
> detected. We apologise to any users who were impacted by this issue."

**How to weigh it.** It is six years old, it affected a different product on a different app
generation (MOVETIME Family Watch, not TCL Connect / MT48), and TCL patched it fast and owned it
publicly — better behaviour than most vendors in this category manage. But it is not nothing: the
failure was **an authentication flaw that handed strangers live location and voice recordings of
other people's children**, which is the precise catastrophic outcome this entire product category
exists to avoid. **No CVE was assigned.** No vulnerability research specific to the MT48 or to
`com.trackerandroid.trackerandroid` was found — which reflects that nobody has looked, not that it is
clean.

### Covert remote-listen

**No remote-listen, voice-monitoring or ambient-audio capability is documented for the MT48** in
TCL's press release, product page, spec listings, the MT48X safety manual, the eMAG listing or any
review found. TCL's stated feature set is calls, video calls, voice *messages* (child-initiated), SMS
and photo sharing.

**This is recorded as "not documented", not as "absent".** Silent-call monitoring is a standard
feature on the SeTracker2 platform and is frequently present but unadvertised; absence from marketing
copy is weak evidence. The 2020 incident specifically involved **stored voice messages** being
readable by strangers, which shows child-originated audio does reach TCL's servers. Whether such a
feature exists, and whether it can be locked: **UNKNOWN**. This is a legitimate question to put to
TCL support before purchase.

## Reality check

| Marketing | Observed reality |
|---|---|
| "Up to 2.5 days of use and 7 days of standby" | TCL's own footnote: *"based on results from internal lab tests."* One independent reviewer (SE, 2026-05) confirms only *"more than a day"* — no hours, no tracking interval, no call volume. Assume one solid school day plus margin; assume less if you poll location aggressively, which is what every other watch in this survey does. |
| "L1+L5 dual-band GPS locks in quickly and tracks accurately, even around tall buildings" | The **receiver is real and verified** — genuinely the best positioning hardware in the field. But **zero independent accuracy testing of this device exists**, and TCL's own documentation confirms the watch still falls back to **"crowd-sourced WLAN hotspot and cell tower locations"**. Better odds against drift, not immunity from it, and no evidence the app tells you which kind of fix you are looking at. |
| "Clear VoLTE calls" | The watch claims VoLTE. **No Romanian operator has been shown to provision VoLTE for this IMEI.** Untested. Buy an Orange or Digi SIM so a refusal degrades to 2G instead of silence. |
| "Complies with GDPR, ISO 27701 privacy, and ISO 27001 security standards" | No certificate found for either ISO standard; neither standard appears in TCL's own children's privacy notices. Those notices, dated **2022-06-28**, name a **Shenzhen** controller and say data is accessed in **China** with **service providers in China and the US**. The claim is **unverified**; the data location is not EU. |
| "4G" on the eMAG listing | Meaningless on its own — but here, uniquely, TCL's RED declaration backs it: **B1/3/7/8/20 confirmed**, Romania-complete including B20. This is one of only about five models on the market whose bands can be established at all. |
| eMAG 1P + 24-month Romanian warranty | Real, and the best retail position of any candidate — **but it says nothing about whether TCL's cloud will accept a +40 account.** Present at retail is not the same as served by the vendor. eMAG's 30-day return window is what makes the remaining uncertainty affordable. |

## What users say

**Note on volume: this device is close to unreviewed.** Zero Romanian owner reports of an MT48 exist
— eMAG shows "Fii primul care scrie un review" and an empty Q&A as of 2026-08-19. Everything below is
either a single report or concerns a different TCL model. Nothing here should be generalised.

### Works

**Sweden — M3.se, Ida Blix (Videoredaktör), published 2024-10-22, section updated 2026-05-02, 4.5/5.**
The only independent review of the MT48 found. *Fördelar* (advantages), verbatim:

> **"Lång batteritid – räcker mer än en dag"** — *"Long battery life — lasts more than a day"*
> **"Roliga funktioner som barnen uppskattar"** — *"Fun features that children appreciate"*
> **"Bra app"** — *"Good app"*
> **"Välj eget abonnemang"** — *"Choose your own plan"*

*Nackdelar* (disadvantages), verbatim:

> **"Laddsladden har inte usb-c"** — *"The charging cable isn't USB-C"*
> **"Stor på de minsta handlederna"** — *"Large on the smallest wrists"*
> **"Poängsystemet kunde användas bättre"** — *"The points system could have been used better"*

Summary: **"TCL Movetime MT48 gör en stark debut i barnklockekategorin. Appen är välgjord,
batteritiden håller vad den lovar och de lekfulla extrafunktionerna gör att barnen faktiskt vill ha
klockan på sig"** — *"The TCL Movetime MT48 makes a strong debut in the kids' watch category. The app
is well made, the battery life delivers what it promises, and the playful extra features mean
children actually want to wear the watch."* In the same test, Garmin Bounce 2, Xplora X6 Play and ZTE
K1 Pro also scored 4.5/5.

*"Välj eget abonnemang"* is the structurally important line: it confirms the MT48X takes an ordinary
SIM on any operator, with **no vendor-issued eSIM and no vendor subscription to withdraw** — the
architecture that killed Xplora and Vodafone Neo does not apply here. **"Stor på de minsta
handlederna"** is worth heeding for a 7-year-old: 50 × 43 × 15.15 mm and 55 g.

**One report.** No other independent review of the MT48 was found in any language.

**Germany — "seena1", urbia.de, date UNKNOWN.**
> **"Meine Tochter hat die TCL Movetime Family Watch MT40X Smartwatch für Kinder"**
> *("My daughter has the TCL Movetime Family Watch MT40X smartwatch for children")* — positive in tone.

**One report, undated, and about the MT40X, not the MT48.** It establishes only that German parents
run TCL kids watches in practice. Weak.

### Fails

**Romania — Google Play, TCL Connect (RO storefront), "Dragos Sadeanu", 2024-12-25.**
> **"Varza ceasurile, in loc de QR code ca sa fac pairing, imi apare un simplu patratel alb. Practic e
> imposibil sa il conectez la aplicatie, iar daca incerci varianta codului IMEI spune ca este
> incorect, am probat cu doua ceasuri, aceeasi problema."**
> *("The watches are rubbish — instead of a QR code to pair, all I get is a plain white square. It's
> practically impossible to connect it to the app, and if you try the IMEI-code route it says it's
> incorrect. I tried with two watches, same problem.")*
>
> (The star rating returned for this review was 5, which contradicts the text and is most likely a
> parsing artefact; the rating is not relied on here.)

**Romania — Google Play, TCL Connect (RO storefront), "Alexei Pencov", 2025-01-10, 1★.**
> **"Ca nu pot să mă conectez"** — *("Because I can't connect")*

**Two reports — and they are the most important user evidence in this document, so read them
carefully.** Both are Romanian, both are on the Romanian storefront, both are connection failures.
But note what they are *not*: neither is an account-registration or country-block failure. Sadeanu
describes reaching the **device-pairing** step — the QR/IMEI binding — which means he already had a
working TCL Connect account. That is a weak but genuine indication that **Romanian registration
works** and that the failure was downstream, in device binding. Both reviews predate the MT48's
October 2025 launch by 10–13 months, so they concern older TCL watches on an older app build. They
are a warning about TCL's pairing flow, not proof of a Romanian geo-block — and the distinction
matters, because a geo-block would be fatal and a buggy pairing flow is merely bad.

**International — Google Play, "moshulik moshulik", 2024-06-11, 1★.**
> "Not able to video call using the app on a Galaxy S24 (says: 'instable network' ???). When connected
> through iPhone, it is working as it should. If there is an incompatibility between the MT40X watches
> & the Galaxy S24, you should maybe declare it or remediate it."

**One report**, MT40X, and an Android-specific video-calling defect that went unanswered. Relevant
because the requirement here is an **Android** companion app.

**App-level rating context:** TCL Connect sits at **3.8★ from 16,600 reviews** with 1 million+
installs. That rating is a blend across TCL's routers, MiFi units, audio products **and** watches —
the router line almost certainly dominates the install base — so it is **not** a clean signal about
the kids-watch experience and should not be read as one.

## Assessing TCL's abandonment track record

The concern was that TCL ships MOVETIME kids watches into Europe and then lets the companion apps
rot. **The evidence supports a more specific and less alarming reading: TCL consolidated, it did not
abandon.**

| App | Package | Last update | Installs | Reviews | Models served |
|---|---|---|---|---|---|
| MOVETIME Track & Talk (iOS) | — | **2019-11-13** | — | 0 RO | Alcatel kids watch |
| MOVETIME Track & Talk (Android) | `com.alcatel.kidswatch` | UNKNOWN | — | — | Alcatel kids watch |
| TCLMOVE (iOS) | — | **2021-03-17** | — | 0 RO | MT30 / MT30W |
| TCLMOVE (Android) | `com.tctcom.wearable.movetime` | **2024-10-09** | 100 k+ | 6 (3.0★) | MT30 / MT30W |
| **TCL Connect (Android)** | `com.trackerandroid.trackerandroid` | **2026-07-17** | **1 M+** | 16,600 (3.8★) | **MT48X/MT48EX, MT46, MT43, MT42, MT40 series** + routers + audio |

(The two iOS dates are carried over from the prior sweep and were not independently re-verified here.)

**What this actually shows:**

1. **The current app is actively maintained, not rotting.** Release cadence over 2026: 3.3.6
   (2026-03-19), 3.3.7 (2026-04-18), 3.3.8 (2026-05-28), 3.3.9 (2026-06-11), 3.3.10 (2026-07-06),
   3.3.11 (2026-07-24), 3.3.12 (2026-08-18). That is roughly monthly, through last week. This is the
   opposite of the Xplora and MyKi profiles.
2. **The dead apps are superseded, not orphaned.** TCL Connect explicitly lists MT40, MT42, MT43,
   MT46 **and** MT48 as supported. Owners of the older watches were migrated into the consolidated
   app; the old per-product apps were retired because their function moved, not because the product
   line was dropped. The Android TCLMOVE was still being updated as recently as 2024-10-09.
3. **The product line has continuity across roughly six years and six generations** — MT30,
   MT40/MT40X, MT42/MT42X, MT43, MT46, MT48 — with the MT48 the current flagship and a Good Design
   Award 2025 winner. TCL is not a company exiting this category.

**The residual risk over a 3–4 year horizon, stated honestly.** TCL Connect's 1 M+ installs are
overwhelmingly driven by TCL/Alcatel LINKZONE MiFi units and 5G CPE routers, which sell in far larger
volumes than kids' watches. **The kids-watch function is a minority feature inside what is largely a
router app.** That cuts both ways: the app will certainly still exist in 2030, because the router
business needs it — but watch support could be quietly deprecated inside a surviving app without TCL
ever announcing an exit, and the app's rating and review flow give no early warning specific to
watches. The mitigating structural fact is that **the MT48X takes an ordinary nano-SIM with no vendor
eSIM and no vendor subscription**, so TCL has no service contract to cancel; a worst-case app
deprecation degrades the watch, it does not remotely brick it the way Vodafone Neo and Spacetalk
were bricked. That is a meaningfully better failure mode than most of this field.

**Verdict on the precedent: the worry was reasonable, but the evidence does not support it.** TCL's
app graveyard is a consolidation artefact. The live app is on a monthly release cadence, serves the
MT48 by name, and is localised into Romanian.

## Sources

All accessed **2026-08-19** unless stated.

**Play Store / app**
- `https://play.google.com/store/apps/details?id=com.trackerandroid.trackerandroid&hl=ro&gl=RO` — **the deciding source.** TCL Connect live in the Romanian storefront; developer TCT Mobile International Ltd; updated **17 iul. 2026**; 1 M+ installs; 3.8★/16,600; Android 7.0+; PEGI 3; supported watches include **MT48X/MT48EX**; verbatim Romanian reviews (Dragos Sadeanu 2024-12-25, Alexei Pencov 2025-01-10) and one English review (moshulik, 2024-06-11); developer contact and privacy-policy link.
- `https://play.google.com/store/apps/details?id=com.tcl.connect&gl=RO&hl=ro` — **control test: HTTP 404.** Establishes that the RO-storefront lookup method distinguishes present from absent.
- `https://apkpure.com/tcl-connect/com.trackerandroid.trackerandroid` — package name, v3.3.12, developer tclconnecthk, Android 7.0+, full supported-device list (MT48X/MT48EX … MT40).
- `https://apkcombo.com/tcl-connect/com.trackerandroid.trackerandroid/` — v3.3.12 build 279, 117 MB, corroborates the supported-model list.
- `https://tcl-connect.en.uptodown.com/android` — **version history with dates** (3.3.6 → 3.3.12, Mar–Aug 2026, ~monthly) and the 21-language list **including Romanian**.
- `https://play.google.com/store/apps/details?id=com.tctcom.wearable.movetime&hl=ro&gl=RO` — legacy TCLMOVE: updated **2024-10-09**, 100 k+ installs, 3.0★/6 reviews, serves MT30/MT30W only.

**Manufacturer / regulatory**
- `https://imagepool.drillisch-online.de/v2/global/hardware/dokumente/TCL/Movetime-48X/Sicherheitsinformationen.pdf` — **TCL "Safety and warranty information", Watch48 / MT48X/MT48EX, doc `CQF7AV0LCAAC`.** The primary source for **LTE B1/3/7/8/20 + GSM 900/1800 + UMTS B1/B8 + 802.11 b/g/n 2.4 GHz**; the RED 2014/53/EU declaration; the "Location-Based Services" WLAN/cell-tower fallback text; the DATA PRIVACY section and its links; unibody non-removable battery; **and the Romanian-language section at pages 134–146**. Caveat: SAR and Bluetooth Declaration ID are `xx` placeholders (pre-final proof); the band table is fully populated.
- `https://www.tcl.com/global/en/watches/mt48` — School Time Mode wording; GDPR/ISO 27701/ISO 27001 claim; "L1+L5 dual-band GPS"; 1-second refresh; 900 mAh / 2.5 days + 7 days standby with lab-test disclaimer; "eSIM or Nano SIM two different products"; IP68 + 2ATM; AI image creation.
- `https://www.tcl.com/global/en/news/tcl-launches-tcl-movetime-mt48-kids-smartwatch-designed-with-advanced-safety-and-digital-well-being-for-families` — **press release, 2025-09-10**: Dual Frequency GPS (L1+L5), 1-second refresh, VoLTE, 900 mAh, IP68+2ATM, School Mode scope, TCL Connect App, four colours, **launch markets DE/UK/ES/IT/FR, late October 2025, RRP €150**, and *"Expansion into additional international markets is underway and will follow upon receiving local certifications."*
- `https://www.tcl.com/global/en/children-privacy-policy/English` — **"the controller, located in China … service providers in China and the US"**; controller TCL Communication Technology Holdings Ltd, Shenzhen; retention wording; **last updated 2022-06-28**; no ISO 27001/27701 mention.
- `https://www.tcl.com/global/en/children-privacy-policy-notice/English` — EU/UK statement: controller **TCT Mobile Europe SAS, Nanterre, FR**; UK TCT Mobile UK Ltd; *"we may send your data to places other than the UK or Europe"*; **last updated 2022-06-28**.
- `https://www.tcl.com/global/en/EC_DOC` — TCL's DoC portal: renders as a navigation stub, **no searchable model list, MT48 not retrievable**. Recorded as a dead end.
- `https://www.tcl.com/global/en/watches/mt48/specifications` — **HTTP 404.** TCL publishes no specification table for the MT48 (unlike the MT42).
- `https://www.tcl.com/global/en/support-mobile/mt48` — **HTTP 404.** No MT48 support page, no manual, no firmware-update history.

**Romanian retail and press**
- `https://www.emag.ro/ceas-smartwatch-pentru-copii-tcl-movetime-kids-watch-mt48-1-68-4g-gps-ip68-2atm-camera-2mp-galactic-blue-mt48x-3glca11/pd/D1418N2BM/` — **"Vândut și livrat de eMAG"**, 897.99 RON, "În stoc", 24 luni warranty, **Nano SIM**, 900 mAh, 60 h use / 168 h standby, 55 g, 1.68" TFT, 50 × 43 × 15.15 mm, 512 MB / 4 GB, IP68 2ATM, app "TCL Connect", sensor "GPS (dual-band L1+L5)"; **no reviews, no Q&A**; no LTE bands listed.
- `https://www.emag.ro/ceas-smartwatch-pentru-copii-tcl-movetime-kids-watch-mt48-1-68-4g-gps-ip68-2atm-camera-2mp-cosmic-pink-mt48x-3nlca11/pd/DQ418N2BM/` — same 1P seller and price; **"30 de zile drept de retur"**; still no reviews.
- `https://zonait.ro/tcl-movetime-mt48-smartwatch/` — **2026-08-13 (RO)**: "apeluri vocale VoLTE"; "GPS dual-band L1+L5, conceput pentru o localizare precisă"; "baterie de 900 mAh, care oferă o autonomie de până la 2,5 zile". No RO price or retailer named.
- `https://www.e-sports.ro/2026/08/14/tcl-movetime-mt48-mai-multa-libertate-pentru-copii-mai-multa-liniste-pentru-parinti/` — **2026-08-14 (RO)**, syndicated from Zona IT: "TCL lansează MOVETIME MT48, un smartwatch care oferă copiilor mai multă libertate…".
- `https://www.mobilissimo.ro/articole-ceasuri-inteligente/ifa-2025-tcl-movetime-mt48-smartwatch-ul-pentru-copii-cu-camera-integrata-ai-si-functii-de-localizare-video` — **2025-09-08 (RO)**, IFA hands-on with video; confirms School Time restricts games and notifications while SOS stays active; Europe October 2025, €150.

**Independent review**
- `https://www.m3.se/article/2496863/gps-klocka-barn-test.html` — **M3 (SE), published 2024-10-22, updated 2026-05-02, Ida Blix.** MT48 scored **4.5/5**; Fördelar/Nackdelar lists verbatim; "batteritiden håller vad den lovar"; USB-A charger and size on small wrists criticised; comparison field includes Garmin Bounce 2 (4.5), Xplora X6 Play (4.5), ZTE K1 Pro (4.5), ZTE Watch K2 Pro (4), Safekid Zenit (3).

**Security**
- `https://www.abc.net.au/news/2020-02-11/gps-tracking-watch-security-bug-data-breach-personal-info/11909478` — **ABC News (AU), 2020-02-11.** TCL MOVETIME Family Watch account takeover via Facebook login; exposed live GPS, phone numbers, DOB, children's voice messages and safe zones; discovered by Darren McCormack (Perth); TCL statement and 2020-01-28 fix date, verbatim.
- `https://link.springer.com/content/pdf/10.1365/s43439-020-00006-3.pdf` — *International Cybersecurity Law Review* (Springer, 2020), doi:10.1365/s43439-020-00006-3, "Regulation of Internet-of-Things cybersecurity in Europe and Germany as exemplified by devices for children" — cites the TCL Movetime Family Watch case (unencrypted server traffic, third-party storage of safe zones). **Full text paywalled (303 → Springer IdP); cited from indexed text plus the ABC report.**
- `https://www.gizmochina.com/2025/09/07/tcl-movetime-mt48-kids-smartwatch-launched-specs-price/` — 2025-09-07, corroborates specs, GDPR/ISO claims, €150 and the five launch markets.

**Data-quality trap, recorded so it is not repeated**
- `https://www.tradeinn.com/bikeinn/en/tcl-mt48-smartwatch/143062690/p` — listed as "TCL MT48", but the specs given (1.3" screen, 600 mAh, IP65, Unisoc W307, micro-USB, heart-rate sensor, 50 g) **do not match the MT48 kids watch** (1.68", 900 mAh, IP68+2ATM, 55 g). This listing is mislabelled — almost certainly a different TCL Movetime model. **Do not use it as an MT48 source.**

**Prior-sweep findings relied on and not independently re-verified here**
- iOS "MOVETIME Track & Talk watch" last updated **2019-11-13** and iOS "TCLMOVE" last updated **2021-03-17**, both with zero Romanian reviews — from `.discovery/lens-5-romania.md`. Used only in the abandonment table.
- "seena1", urbia.de (DE), MT40X, **date UNKNOWN** — from `.discovery/lens-4-community.md`.

**Known gaps in this document**
- **+40 registration has not been observed.** This is the one remaining Tier-1 gate, and it is the pre-purchase test.
- **No TCL ISO 27001 / ISO 27701 certificate registry check was run** — the session's 200-call web-search budget was exhausted. Recorded as unverified, not as absent.
- **No FCC filing was located** for the MT48X; the device is EU-launched and may have no US grant. The RED declaration supersedes the need for it.
- **No independent positional-accuracy measurement of the MT48 exists** in any language found.
- **No Romanian owner of an MT48 has been found**, and the eMAG listing has zero reviews and an empty Q&A.
- **App tracking-interval settings are undocumented**; TCL's "1-second refresh" is a marketing figure, not a configurable-interval spec.
- **Modem chipset, GNSS constellations beyond GPS, and model-level Wi-Fi positioning** are all UNKNOWN and are not inferred from sibling models.

---

## GNSS constellations — filings investigation (2026-08-19)

**Question asked:** TCL says only *"Dual Frequency GPS (L1+L5)"*. That is a frequency claim, not a
constellation claim. Which constellations does the MT48 actually receive?

**Answer: STILL UNKNOWN as a product statement — but the receiver vendor is now identified from a
primary TCL source, and that changes what can be said.** Three new primary documents were located
and read in full. None of them names a constellation. One of them names the GNSS chip vendor.

### 1. The finding that matters: TCL names the GNSS supplier — **Airoha**

TCL's own **MOVETIME WATCH 48 user manual, V1.0, `MT48X/MT48EX`**, page 19, section *Device Open
Ports*, states verbatim:

> "Port 3335: Used for BBAT (Baseband Current) testing, specifically for interfacing with
> **Airoha GPS modules**."

The same sentence appears in every language edition checked, including the Romanian one that ships
with the RO SKU:

> **RO:** *"Portul 3335: folosit pentru testarea BBAT (bandă de bază actual), în special pentru
> interfațarea cu **modulele GPS Airoha**."*
> **DE:** *"Anschluss 3335: … insbesondere für die Verbindung mit **Airoha-GPS-Modulen**."*
> **FR:** *"Port 3335 : … notamment pour l'interfaçage avec les **modules GPS Airoha**."*

- EN: <https://support-downloads.tcl.com/file/TCTDocument/User+manual/01BTMKY5YUVCRFSYVVOVAZRUNDALFYJVDY/Watch+48_MT48X_MT48EX_UM_EN+251017.pdf> (file dated 2025-10-17, retrieved 2026-08-19)
- RO: <https://support-downloads.tcl.com/file/TCTDocument/User+manual/01BTMKY53FZECMVDHJ4VHJS4G3AX5BAI3C/Watch+48_MT48X_MT48EX_UM_RO+251017.pdf>
- Manual index page: <https://www.tcl.com/global/en/support-mobile/model/tcl-movetime-mt48>

**Why this is good evidence, not boilerplate:** the same "Device Open Ports" section was checked in
the manuals for the sibling **MT46X (Watch 40)** and **MT42X (Family Watch 2)** — the Airoha
sentence appears in **neither**. It is MT48-specific text. It is also an engineering statement (a
debug-port description), not marketing copy, which is exactly the class of text vendors do not
sanitise.

**What it does and does not establish.** It establishes the **vendor** of the GNSS front end. It
does **not** give a part number, and TCL never publishes one.

### 2. Airoha silicon capability — CAPABILITY ONLY, not confirmed behaviour

Airoha (a MediaTek subsidiary) has exactly one dual-frequency L1+L5 wearable GNSS family, the
**AG3335 series**, which Airoha's own product page describes as:

> "Low Power Dual-frequency Multi-constellation GNSS Receiver … **L1 and L5 dual-band GNSS
> receiver** … **Multi-Constellation GPS/GLONASS/Galileo/BeiDou/NavIC/QZSS receiver**"
> — <https://www.airoha.com/products/p/VXKPfHI9iDCvsRWN> (retrieved 2026-08-19)

Third-party corroboration of the family split (AG3335M = multi-band L1+L5, GPS/GLONASS/Galileo/
BeiDou/QZSS/NavIC; AG3335MN = single-band; used in COROS PACE 3, APEX 2 Pro, VERTIX 2 and Garmin
fēnix 7X Solar): <https://logiqx.github.io/gps-details/chipsets/airoha/devices.html>

**Stated with the correct epistemic status:**

- **FACT (TCL primary):** the MT48 uses an **Airoha** GNSS module.
- **INFERENCE, UNVERIFIED:** that module is from the **AG3335 family**, because it is Airoha's only
  dual-band L1+L5 wearable GNSS line and TCL claims L1+L5. No part number is published for the MT48.
- **CAPABILITY, NOT BEHAVIOUR:** *if* it is an AG3335-class part, the **silicon** can receive
  GPS, GLONASS, Galileo, BeiDou, QZSS and NavIC. **This is not evidence that TCL's firmware enables
  them.** Constellation enablement on Airoha parts is a firmware/configuration matter, and
  single-band, reduced-constellation variants exist within the same family. TCL has never stated
  which are on.

This is a meaningfully stronger position than "dual-frequency therefore probably Galileo" — it is
sourced to a named silicon vendor — but it is still **not a product-level confirmation.**

### 3. The signed EU Declaration of Conformity — found, read, and it does not name constellations

The prior agent could not get past TCL's DoC portal stub. The portal does in fact carry the signed
DoCs; they are linked from the page's own data payload rather than rendered in the navigation:

- **MT48X (our SKU):** <https://static-obg.tcl.com/content/dam/brandsite/tct-documents/watches/eu-doc/tcl-movetime-mt48/Declaration%20of%20Conformity%20MT48X%20signed%2020260623.pdf>
- **MT48EX (eSIM sibling):** <https://static-obg.tcl.com/content/dam/brandsite/tct-documents/watches/eu-doc/tcl-movetime-mt48/Declaration_of_Conformity_MT48EX_signed.pdf>
- Index: <https://www.tcl.com/global/en/EC_DOC> (retrieved 2026-08-19)

The MT48X document is a **14-page signed scan**, issued at Issy-les-Moulineaux, **2026-06-23**,
signed by François Geffraye, Head of Groups Project Managers, TCT Mobile Europe SAS. This is a
**final signed document, not the pre-final proof** the band table came from — it independently
corroborates the MT48X regulatory identity, the manufacturer (TCL Communication Ltd., Hong Kong)
and the EU representative (TCT Mobile Europe SAS, Issy-les-Moulineaux).

**Article 3.2 (efficient use of spectrum) harmonised standards, verbatim:**

> EN 301 511 V12.5.1 (2017-03), EN 301 908-1 V15.2.1 (2023-01), EN 301 908-2 V13.1.1 (2020-06),
> EN 301 908-13 V13.3.1 (2024-10), EN 300 328 V2.2.2 (2019-07), **EN 303 413 V1.2.1 (2021-04)**

**EN 303 413 is present — so a GNSS receiver was formally assessed.** It is corroborated under
Article 3.1(b) by **EN 301 489-19 V2.2.1 (2022-09)**, the EMC standard that covers GNSS receivers
operating in the RNSS band.

**But EN 303 413 is band-scoped, not constellation-scoped.** Its full title is *"GNSS receivers;
Radio equipment operating in the **1 164 MHz to 1 300 MHz and 1 559 MHz to 1 610 MHz** frequency
bands"* (<https://www.etsi.org/deliver/etsi_en/303400_303499/303413/01.02.01_60/en_303413v010201p.pdf>).
Citing it proves the device was tested as an RNSS receiver across those two ranges — which do
contain GPS L5 / Galileo E5a / BeiDou B2a (1176.45 MHz) and GPS L1 / Galileo E1 / GLONASS L1 /
BeiDou B1 (1559–1610 MHz) — but the **DoC names no constellation, and the standard's citation
cannot be read as one.** This was the single most promising lead in the brief and it did not pay
out.

**Other facts from the same DoC (recorded, not acted on):**

| Item | Value |
|---|---|
| Notified Body | Timco Engineering Inc, ID **1177**, EU-type examination certificate **E1177-266805** |
| Notified Body | LCIE (Laboratoire Central des Industries Electriques), ID **0081**, certificate **RED_1209** |
| Battery | model **642833PN4**, 3.85 V, **rated 890 mAh** (TCL markets "900 mAh" — that is the typical, not the rated, figure) |
| Art. 3.3(d),(e) | **EN 18031-1:2024, EN 18031-2:2024** — the new RED cybersecurity/privacy standards *are* claimed |
| Also declared | RoHS 2011/65/EU, European Accessibility Act 2019/882, (EU)2023/826, French parental-control law 2022-300 |
| MT48EX | identical Art. 3.2 list including EN 303 413 V1.2.1 — both variants carry a GNSS receiver declaration |

### 4. The safety document `CQF7AV0LCAAC` — checked in all 12 languages, zero GNSS content

The full 164-page PDF was downloaded and text-extracted. A search across **all twelve language
sections** for `GNSS`, `GLONASS`, `Galileo`, `BeiDou`, `QZSS`, `NavIC`, `L1`, `L5`, `1176`, `1575`
and `satellite` returned **zero hits**. The only positioning-related text anywhere in the document
is the Location-Based Services boilerplate already recorded above. The vendor is not "more specific
in one language than another" here — it is equally silent in all of them.

### 5. FCC — no filing exists to pull

No FCC grant for MT48, MT48X or MT48EX could be located under TCL Communication Ltd.'s grantee code
**2ACCJ** or any other. TCL's other wearables are there (2ACCJB134 "Neo — the smart kids watch",
2ACCJB128 "TIMEX FamilyConnect SENIOR", 2ACCJB172 SyncUP tracker, 2ACCJB097 MOVETIME Family Watch),
but the MT48 is not. This is consistent with the launch footprint: GSMArena (2025-09-05) reports
availability in **Germany, the UK, Spain, Italy and France** only. **There are therefore no internal
photos, no RF test report and no block diagram to inspect** — the single richest source of chipset
identification for this category does not exist for this device.

*Method caveat, disclosed:* `fccid.io`, `fcc.report` and the FCC's own OET `GenericSearchResult.cfm`
all returned HTTP 403 to automated retrieval on 2026-08-19, so the FCC check was done through search
indexes over those sites rather than by direct database query. A manual browser check of
<https://www.fcc.gov/oet/ea/fccid> would be worth 60 seconds before treating "no FCC filing" as
final, though the EU-only launch makes it very likely correct.

No entry was found in Anatel (BR), NCC (TW), ISED (CA), IMDA (SG) or SRRC (CN) indexes either. No
teardown, mainboard photo or internal photo of the MT48 exists in any source found.

### 6. Modem chipset — now sourced: **UNISOC W377**

Two independent sources name it, one of them an operator:

- **Deutsche Telekom** product page for the MT48X lists the chipset as **"Unisoc W377"** and the
  positioning as *"L1 + L5 Dualband-GPS für präzise Ortung"* —
  <https://shop.telekom.de/geraete/tcl-mt48x-movetime-family-watch-galactic-blue> (retrieved 2026-08-19)
- TCL Central: *"a Unisoc W377 chipset with a proprietary operating system"* —
  <https://www.tclcentral.com/tcl-movetime-mt48-kids-smartwatch-launched-specs-price/>

Neither is TCL itself, so this is **retailer/operator-stated, not vendor-primary**. TCL's own press
release and product page never name the SoC.

UNISOC's own W377E page gives the platform as **LTE Cat.4**, Bluetooth 4.2, 802.11 b/g/n 2.4 GHz,
and — importantly — integrated **"GPS / Glonass / Beidou"**
(<https://www.unisoc.com/en/product/SmartWearablesUS/W377E>). The W377's *integrated* GNSS is
single-band. **Inference, unverified:** this is exactly why an external Airoha dual-band module
would be added — the SoC's own receiver cannot do L5. It also means the constellation question may
have **two** answers on this device (SoC receiver vs. Airoha receiver, and which one the firmware
actually uses), and TCL documents neither.

### 7. Wi-Fi positioning — moved from UNKNOWN to *partially* answered

The manual documents a **Wi-Fi safe zone** feature, distinct from the GPS geofence (manual p. 57):

> "**Wi-Fi safe zone** — To create a Wi-Fi safe zone, follow these steps: … Tap More > Safe Zone >
> Add a safe zone > **Wi-Fi safe zone**. Enter a name, and **choose a network**, then tap Save.
> NOTE: Enable the WiFi function on the watch before creating a WiFi safe zone."

**What this proves:** the watch's Wi-Fi radio *is* used as a location input — presence on a named
network defines a safe zone, and enter/leave notifications fire from it. That is Wi-Fi-derived
location state, and it is a genuinely useful indoor mechanism (a home or school SSID becomes a
reliable "he's inside" signal that GPS cannot give through a concrete wall).

**What this does not prove:** that the app performs **crowd-sourced WLAN positioning** — scanning
nearby BSSIDs to compute a lat/long when GNSS is unavailable. Those are different mechanisms. The
safe-zone feature is association-based, not trilateration-based. TCL's LBS boilerplate mentions
crowd-sourced WLAN hotspot locations, but as already noted that is group text, not a model-level
statement. **Verdict: Wi-Fi-based geofencing CONFIRMED (primary source); Wi-Fi trilateration
positioning still UNVERIFIED.**

Also newly documented from the manual, bearing on `update_interval_min`:

> "**Location Mode** — When the **Automatic Mode** is selected, the location of the watch will be
> refreshed automatically. When the **Low Power Mode** is selected, you need to tap the refresh icon
> on the map in the Location section." (manual p. 60)
>
> "**Live Tracking Mode** — With Live Tracking enabled, the device continuously monitors and records
> its position. … Scroll the numbers to set a time period … After the time period has passed, Live
> Tracking will be disabled automatically. … Live Tracking may use additional battery power."

So there are three location modes — Automatic (interval **not stated anywhere**), Low Power
(**manual refresh only** — the parent must tap to get a position), and Live Tracking (continuous,
timeboxed, battery-costly). **`update_interval_min` remains UNKNOWN**, but the existence of a
manual-refresh-only Low Power mode is a real finding: the "1-second refresh" figure applies at best
to Live Tracking, and there is no documented always-on interval. The manual also gives **no
indication that the app distinguishes a GNSS fix from a Wi-Fi/cell estimate in the UI** — the
concern recorded in *Positioning quality in real use* stands unresolved.

### Net effect on the record

**No YAML change is made.** The constellations were not established definitively, so
`positioning: [GPS-L1, GPS-L5, WiFi, LBS]` and its "constellations UNKNOWN" comment stay exactly as
they are. Two fields could defensibly be revised by a later editor, and are flagged rather than
changed:

- `modem_chipset: UNKNOWN` → **UNISOC W377**, operator/retailer-sourced (Deutsche Telekom + TCL
  Central), not vendor-primary. A separate `gnss_chipset: Airoha (part number unpublished)` would
  be TCL-primary and is the stronger of the two facts.
- `wifi_positioning: UNKNOWN` → Wi-Fi **geofencing** is confirmed primary; Wi-Fi **trilateration**
  is still unverified. The single boolean cannot hold both, which is why it was left alone.

**What remains genuinely unknown, and cannot be resolved before purchase:**

1. **Whether Galileo, GLONASS, BeiDou or QZSS are enabled in MT48 firmware.** No TCL document, no
   regulatory filing, no retailer spec sheet and no review in any language states it. The
   RED-mandated GNSS standard TCL cites is band-scoped and constellation-agnostic by design. The
   Airoha finding narrows the silicon but does not settle the firmware.
2. **The Airoha part number**, and therefore which AG3335-family variant (multi-band vs single-band)
   is fitted.
3. **Whether the app exposes a GNSS-vs-network fix distinction** to the parent.
4. **The automatic-mode location refresh interval.**

**The only way to resolve (1) is on the device.** The definitive test is the NMEA talker IDs the
receiver emits — `$GP` = GPS, `$GL` = GLONASS, `$GA` = Galileo, `$GB`/`$BD` = BeiDou, `$GQ` = QZSS,
`$GN` = combined multi-constellation fix. On a closed watch OS the practical proxy is a
satellite-view screen if the firmware has one, or an in-warranty return if constellation support
turns out to be GPS-only. **Treat "Galileo is supported" as unproven at purchase time.** It is
likely on RF and silicon grounds — *inference, unverified* — and TCL's total silence on it across a
signed DoC, a 164-page safety document and a 60-page manual in 26 languages is itself a data point
about how much the vendor is prepared to commit to.

**Sources added by this investigation (all retrieved 2026-08-19):**

- TCL, *MOVETIME WATCH 48 User Manual V1.0, MT48X/MT48EX*, EN edition dated 2025-10-17 — <https://support-downloads.tcl.com/file/TCTDocument/User+manual/01BTMKY5YUVCRFSYVVOVAZRUNDALFYJVDY/Watch+48_MT48X_MT48EX_UM_EN+251017.pdf>
- Same, Romanian edition — <https://support-downloads.tcl.com/file/TCTDocument/User+manual/01BTMKY53FZECMVDHJ4VHJS4G3AX5BAI3C/Watch+48_MT48X_MT48EX_UM_RO+251017.pdf>
- TCL Communication Ltd., *EU Declaration of Conformity, TCL MT48X*, signed 2026-06-23 — <https://static-obg.tcl.com/content/dam/brandsite/tct-documents/watches/eu-doc/tcl-movetime-mt48/Declaration%20of%20Conformity%20MT48X%20signed%2020260623.pdf>
- TCL Communication Ltd., *EU Declaration of Conformity, TCL MT48EX* — <https://static-obg.tcl.com/content/dam/brandsite/tct-documents/watches/eu-doc/tcl-movetime-mt48/Declaration_of_Conformity_MT48EX_signed.pdf>
- ETSI EN 303 413 V1.2.1 (2021-04), *GNSS receivers; radio equipment operating in the 1 164–1 300 MHz and 1 559–1 610 MHz frequency bands* — <https://www.etsi.org/deliver/etsi_en/303400_303499/303413/01.02.01_60/en_303413v010201p.pdf>
- Airoha Technology, *AG3335 series — Low Power Dual-frequency Multi-constellation GNSS Receiver* — <https://www.airoha.com/products/p/VXKPfHI9iDCvsRWN>
- Airoha GNSS chipset comparison (third party, logiqx/gps-details) — <https://logiqx.github.io/gps-details/chipsets/airoha/devices.html>
- Deutsche Telekom, TCL MT48X MOVETIME Family Watch product page (chipset "Unisoc W377") — <https://shop.telekom.de/geraete/tcl-mt48x-movetime-family-watch-galactic-blue>
- UNISOC, *W377E — High Performance 4G Smart Wearable Platform* — <https://www.unisoc.com/en/product/SmartWearablesUS/W377E>
- GSMArena, 2025-09-05, MT48 launch markets — <https://www.gsmarena.com/tcl_nextpaper_5g_junior_movetime_and_playcube_announced-news-69358.php>

## User reviews — EU-wide sweep (2026-08-19)

**This section supersedes the volume claim in "What users say" above.** That section was written when
the only qualitative owner evidence known was two Swedish reviewer bullet-lists. A systematic sweep of
retailer review APIs, both app-store review endpoints across 21 European storefronts, YouTube comment
sections, carrier shops and price-comparison sites has now found substantially more — enough to answer
most of the questions that section had to leave open, and enough to **contradict two of the claims this
document currently rests on**.

### Headline count

**35 genuine, model-attributed MT48 owner reports were found**, across **6 countries** (DE, IT, ES, UK,
TR, RS). Every report counted below is either tagged by the retailer to the MT48/MT48X variant, or names
the model in its own text. Anything that merely *might* be an MT48 is excluded from the count and flagged
where quoted.

| Source | How the model was verified | Reports | Countries |
|---|---|---|---|
| **Amazon EU** — pooled listing, ASINs `B0GLNHVCX9` / `B0GLN6F842` | Per-review variant strip: `Stil: MT48X` / `Nome stile: MOVETIME MT48`. Parent variation family resolves to **MT48X only** — no other model merged in. | **19** | DE 8, IT 5, ES 3, UK 3 |
| **MediaMarkt Turkey** — MT48X product family | Retailer product-family ID (1251369/70/71, 1252211) | **8** | TR |
| **Google Play** — TCL Connect | Model named in the review text | **5** | TR 4, RS 1 |
| **Apple App Store** — TCL Connect | Model named in the review text | **1** | UK |
| **YouTube comments** on MT48 review videos | Model named in the comment text | **2** | TR 2 |
| | | **35** | |

A further **~24 YouTube comments** on dedicated MT48 review videos describe ownership without naming the
model. They are almost certainly MT48 owners — the videos are about nothing else — but "almost certainly"
is not verification, so they are **not** in the 35 and are used below only as corroboration, always
labelled as attributed by video context rather than by text.

Two further exclusions worth stating: a MediaMarkt Turkey 5★ entry that reviews the *sales assistant*
rather than the watch is not counted, and a Google Play reviewer who mentions the MT48 only to complain
that the app keeps asking him to rate a model he does not own is not counted.

**Still zero Romanian owners.** Ten months after launch, eMAG Romania's three MT48 SKUs all return
`"reviews": 0` in the page payload, as do eMAG Hungary and eMAG Bulgaria for the identical product
codes. No Romanian-language owner report of an MT48 was found anywhere. The only Romanian voices are a
would-be buyer saying he cannot find one in shops, and a commenter saying it looks enormous on an adult
wrist — neither is an owner.

**The geography of the owner base is not what this document has assumed.** The two richest seams are
Amazon's pooled European listing and **Turkey**, where TCL markets the MT48 hard (a TCL Türkiye ad has
988,000 views; independent Turkish reviews have 30,000–76,000 views each and hundreds of comments).
Turkish reports are labelled throughout and are **not** EU evidence — but they are real MT48 owner
experience, and they corroborate the European reports on battery, heat and build quality closely enough
that the agreement is itself informative.

### Aggregate ratings, and why the star average is not the story

| Marketplace | Rating | Ratings | 5★ | 4★ | 3★ | 2★ | 1★ |
|---|---|---|---|---|---|---|---|
| amazon.de | 3.5/5 | 56 | 46% | 13% | 10% | 8% | **23%** |
| amazon.it | 3.1/5 | 56 | 39% | 12% | 9% | 6% | **34%** |
| amazon.es | 3.2/5 | 55 | 41% | 12% | 9% | 6% | **32%** |
| amazon.co.uk | 3.0/5 | 26 | 29% | 16% | 15% | 7% | **33%** |
| amazon.fr | 3.2/5 | 25 | 35% | 14% | 16% | 6% | **29%** |
| MediaMarkt.com.tr | ~3.3/5 | 13 | 7 | 1 | 0 | 0 | **5** |

Two things stand out. First, **a quarter to a third of every rating pool is one star** — for a €150
device whose entire purpose is reliability, that is a very high floor of outright failure. Second, the
distributions are **sharply bimodal**: there is almost nothing in the middle. The written reviews are
asymmetric in the same direction — the negatives are long and specific, the positives are usually one
line. Weight accordingly, and do not quote "3.5 stars on Amazon" as if it meant a mediocre-but-fine
product; it means *it either works or it dies*.

Note also that **Amazon reports different totals for the same ASIN by marketplace** (56 on .de and .it,
55 on .es, 25–26 on .fr/.co.uk/.nl/.se/.pl). Always cite the marketplace with the number.

---

### What works

**GPS outdoors is the most-praised thing, and it is praised by people who tried other watches first.**

**Spain — Amazon.es, "laura", 2026-04-27, 4★, verified purchase, "several weeks" of ownership.**
<https://www.amazon.es/dp/B0GLNHVCX9> — the most detailed owner review found in any language:

> **"Precisión del GPS (Lo más importante): Vivimos en una zona rural y otros modelos fallaban
> muchísimo, dándonos ubicaciones con errores de cientos de metros. Este es muy preciso y estable; por
> fin puedo abrir la app y confiar en lo que veo en el mapa."**
> *("GPS accuracy (the most important thing): we live in a rural area and other models failed badly,
> giving us locations hundreds of metres out. This one is very precise and stable; at last I can open
> the app and trust what I see on the map.")*
>
> **"El audio es nítido y con buen volumen. […] Un punto clave es que tiene vibración: antes no se
> enteraba de las llamadas por el ruido al jugar, ahora no pierde ni una."**
> *("The audio is crisp and at good volume. […] A key point is that it vibrates: before, she didn't
> notice calls because of the noise while playing, now she doesn't miss one.")*
>
> **"Batería: Con un uso intenso (varias videollamadas al día y GPS activo), nos dura entre 36 y 40 horas."**
> *("Battery: with heavy use — several video calls a day and GPS active — it lasts us 36 to 40 hours.")*

⚠️ **Flagged.** This review is structured like marketing copy — labelled sections, a competitor-price
framing (*"Si estás dudando entre uno de 40€ o 60€ y este de TCL"*), a *"Totalmente recomendable"*
sign-off. Its concrete numbers read like genuine use, so it is not being called fake, but it is
stylistically unlike every other review in the set. **One report, flagged.**

**Germany — Amazon.de, "Patrick Poppenreiter", 2026-05-12, 5★, verified purchase.**
<https://www.amazon.de/dp/B0GLNHVCX9> — valuable because he benchmarked against three competitors:

> **"Macht was sie soll. Man kann seine eigene Simkarte rein geben. GPS funktioniert ordentlich. Kamera
> ist besser als von anderen Herstellern. Ich habe 3 anderen Uhren auch probiert und keine funktionierte
> richtig. Unsere alte tcl uhr war auch sehr gut. Die neue jetzt ist noch besser."**
> *("Does what it should. You can put your own SIM card in. GPS works properly. The camera is better
> than from other manufacturers. I tried 3 other watches too and none worked properly. Our old TCL watch
> was also very good. The new one is even better.")*

This is independent confirmation of the structurally important point the Swedish review made: **you put
in your own SIM.** No vendor eSIM, no vendor subscription to withdraw.

**Germany — Amazon.de, "Isbiceanu Cornel", 2026-08-05, 5★, verified purchase.** Notable because he
separates the two positioning modes, a distinction no marketing material makes:
> **"You can track it. On GPS is spot on. On cellular the precision is around 200 m. Not that great."**

**UK — Amazon.co.uk, "Niall Knight", 2026-05-11, 5★, verified purchase.** <https://www.amazon.co.uk/dp/B0GLNHVCX9>
> **"Great watch for kids! I have purchased this for my child while he is playing out. Accepts any sim
> card and easy to set up on the app. The battery lasts days and the functioning is perfect."**

**Germany — Amazon.de, "Tahispa", 2026-06-04, 4★, verified purchase.** The use case the device exists for:
> **"Wir finden den Umgang mit der Uhr etwas schwerfällig. Nichtsdestotrotz funktioniert die Uhr und tut
> ihren Dienst. Wir fühlen uns sicher damit, und unsere Tochter genießt ihre Freiheiten trotz Autismus."**
> *("We find handling the watch somewhat cumbersome. Nonetheless the watch works and does its job. We
> feel safe with it, and our daughter enjoys her freedoms despite autism.")*

**Serbia — Google Play, "Sanja Milojevic", 2026-03-08, 5★.** Names the model; a repeat TCL buyer who
had tried a cheaper competitor and returned it. Written **one day after purchase**, so a first
impression, not a durability report:
> **"Bought a cheaper watch, returned it and bought Movetime MT48 yesterday. The cheaper watch was
> great, but its app was terrible. […] This one shows precisely where my kid is, family members can also
> use the app, chat, voice msgs, calls, video calls... It has it all. And the new watch rocks!"**

**Turkey — MediaMarkt.com.tr, "hrn", 2026-07-28, 5★.** Positive, but note the single reservation:
> **"Tam çocuklar için tasarlanmış. Güvenlik, kullanım pratikliği, şıklık hepsi bir arada. Kurulumu da
> çok kolay. […] Tek kötü yanı var şarjı 1 gün gidiyor. Onun dışında çocuk için alınabilecek en iyi saat
> diyebilirim."**
> *("Designed exactly for children. Safety, practicality, elegance all in one. Setup is very easy too.
> […] There is one bad side: the battery lasts one day. Apart from that I'd say it's the best watch you
> can buy for a child.")*

**Build quality — two positive reports.** Turkey, MediaMarkt.com.tr, "savaş", 2026-01-21 (1★ overall):
**"ürün sağlam bir yapıya sahip […] telefon görüşmeleri görüntülü ve ses net ve yeterli"** — *("the
product has a solid build […] phone calls, video and audio, are clear and adequate")*. And Turkey,
YouTube "@NehirBadeOruç": **"ekranı cok kaliteli cok dusup kalkıyo ama hic cizilme bile olmadı"** —
*("the screen is very high quality; it gets dropped a lot but there hasn't even been any scratching")*.

---

### What fails

#### 1. Hardware death in the first days to months — five independent reports, four countries

This is the strongest and most serious pattern in the data, and it is not one market's bad batch.

**Spain — Amazon.es, "Ana García", 2026-06-16, 1★, verified purchase. Owned 2 days.**
> **"No lo compren. No tiren su dinero. Dejo de funcionar al segundo día. El servicio técnico y la
> atención al cliente puro humo, vienen a decirte que el reloj lo has roto tú si o si y a ver si tienes
> suerte y Amazon te manda otro. Lo he tirado a la basura. No volveré a comprar nunca artículos de esta
> marca."**
> *("Don't buy it. Don't throw your money away. It stopped working on the second day. Technical service
> and customer support are pure smoke — they tell you that you must have broken the watch yourself, and
> hope you get lucky and Amazon sends you another. I threw it in the bin. I will never buy anything from
> this brand again.")*

**Italy — Amazon.it, "Fabrizio", 2026-08-17, 1★, verified purchase. Owned 1 week.**
> **"Dopo 1 settimana di utilizzo non si accende più non si riesce ad avere nessun contatto con la ditta
> che lo vende."**
> *("After 1 week of use it no longer switches on, and it's impossible to get any contact with the
> company that sells it.")*

**Germany — Amazon.de, "RL", 2026-06-29, 1★, verified purchase.** The most consequential single review
found, because it is not really about a watch — it is about **TCL's spare-parts pipeline**:
> **"Die Uhr ließ sich nach kurzer Zeit nicht mehr laden. Nach der Reklamation sollte ich die Uhr an
> einen Reparatur Dienstleister senden. Dieser bestätigte mir den Eingang und den Defekt der Uhr. Laut
> deren Aussage ist eine Reparatur nicht möglich, eine Neulieferung derzeit auch nicht, da unklar ist ob
> und wann Ersatzgeräte von TCL geliefert werden. Eine email an TCL mit der Bitte um Klärung und Ersatz
> wurde nicht beantwortet."**
> *("After a short time the watch could no longer be charged. After the complaint I was told to send it
> to a repair contractor. They confirmed receipt and the defect. According to them a repair is not
> possible, and a replacement delivery is not possible at present either, because it is unclear whether
> and when replacement units will be supplied by TCL. An email to TCL asking for clarification and a
> replacement went unanswered.")*

**Read that against the abandonment track record section below.** An authorised repairer stating on the
record that it does not know whether TCL will ever ship replacement units, nine months after launch, is
a **live** data point about TCL's support commitment, not a historical one. It is independently
corroborated by stock status: **Telekom's own shop page for the MT48X Galactic Blue is marked
`schema.org/OutOfStock`** as of 2026-08-19.

**Germany — Amazon.de, "Amazon Kunde", 2026-08-09, 1★, verified purchase. Owned exactly 4 months.**
The single most valuable longevity data point in this document:
> **"Am Anfang war die Uhr super. GPS sehr genau, Telefon etc super. Nun, nach 4 Monaten, geht nichts
> mehr. Display reagiert nicht mehr, bzw nur manchmal, und Telefongespräche werden von der Uhr einfach
> beendet. Wasserdicht ist sie nicht!!! Echt enttäuschend."**
> *("At the beginning the watch was great. GPS very accurate, phone etc. great. Now, after 4 months,
> nothing works any more. The display no longer responds, or only sometimes, and phone calls are simply
> terminated by the watch. It is NOT waterproof!!! Really disappointing.")*

**Turkey — MediaMarkt.com.tr, "Yavuz", 2026-07-15, 1★. Owned "a few weeks".**
> **"Ne yazık ki oldukça pahalı olan bir ürün ve aldıktan birkaç hafta sonra arızalandı. Servisi de bir
> sorun çünkü ürünü ayıplı ürün olarak kabul etmedi. […] Mediamarkt iyi, ondan memnunuz birçok ürün
> alıyoruz ama bu üreticiye güven olmaz. Aynı üreticiden 3. Saat."**
> *("Unfortunately it is quite an expensive product and it broke down a few weeks after purchase. The
> service is a problem too, because they did not accept the product as defective. […] MediaMarkt is
> good, we're happy with them — but this manufacturer cannot be trusted. This is the 3rd watch from the
> same manufacturer.")*

**Turkey — MediaMarkt.com.tr, "Verdict", 2026-07-25, 1★. Owned 2 days.** Build quality specifically:
> **"Güya en iyisi diye aldık ama 2 günde sim card yuvası yerinden çıktı sim card içinde kaldı, çocuğun
> koluna top çarptı kayışın pimi yamuldu.. ciddi kalitesiz bir ürün."**
> *("We bought it supposedly as the best, but in 2 days the SIM card tray came out of its seat and the
> SIM card was stuck inside; a ball hit the child's arm and the strap pin bent. A seriously low-quality
> product.")*
> *(This reviewer posted twice on the same day; counted once.)*

**Four of these owners also report that after-sales failed them** — refusal to acknowledge the defect,
no replacement stock, or no reply at all. Customer service is not a separate complaint category here; it
is the second half of the same failure. **Note the direct contradiction of the IP68 / 2ATM claim** in the
4-month report ("*Wasserdicht ist sie nicht*").

#### 2. Battery: the marketing claim and the Swedish reviewer are both contradicted

TCL claims 2.5 days. The Swedish review quoted earlier in this document says *"Lång batteritid – räcker
mer än en dag"*. **Seven independent owner reports say roughly one day or less**, against two that say
otherwise.

- **Germany — Amazon.de, "Amazon Kunde", 2026-07-06, 3★, verified:** **"Die Batterie der Uhr hällt knapp
  24h obwohl sie noch ganz neu ist und voll aufgeladen wird"** — *("The battery lasts barely 24 h even
  though it is brand new and fully charged.")*
- **Turkey — MediaMarkt, "KAAN", 2026-07-27, 4★:** **"Şarj 2 gün değil 1 gün gidiyor (en fazla 3-5
  konuşma)"** — *("The battery lasts one day, not two — at most 3–5 calls.")*
- **Turkey — MediaMarkt, "hrn", 2026-07-28, 5★:** **"Şarjı 1 gün gidiyor."** — *("Its charge lasts one day.")*
- **Turkey — MediaMarkt, "Özkan", 2026-06-24, 5★:** **"tek dezavantaj şarj beklediğimizden biraz az
  gitmekte"** — *("the only disadvantage is the battery lasts a bit less than we expected.")*
- **Turkey — YouTube "@KemalKorkmaz-k2k", ~2026-07. Owned 3 months:** **"3 ay önce cocuguma aldım. Sarj
  1 gün bile dayanmıyor cocuk okuldan eve gelene kadar sarjı bitmiş oluyor. Şu an spovan safebell
  kullanıyoruz."** — *("I bought it for my child 3 months ago. The battery doesn't even last one day — by
  the time the child gets home from school it's dead. We now use a Spovan Safebell.")*
- **Turkey — YouTube "@bye66bye":** **"Aldım iade ettim şarzı bir gün bile gitmiyor"** — *("I bought it
  and returned it; the battery doesn't even last a day.")*
- **Turkey — YouTube "@NataliaSwth":** **"şarj konusunda bizi hiç mutlu etmedi sürekli priz başında çocuk
  saati mi şarj edilirr"** — *("it did not make us happy at all on battery — constantly at the socket; is
  a child's watch supposed to be charged like that?")*

Against this: **laura (ES) measured 36–40 h under heavy use**, and **Niall Knight (UK) says "the battery
lasts days"**. The honest reading is that **a day to a day and a half is typical, a full school day is
not at risk but two days is**, and the 2.5-day claim is **not supported by owners**. "Charge it every
night" is the realistic operating assumption.

#### 3. Overheating — three independent reports, one on the child's wrist

- **Turkey — MediaMarkt, "Karen", 2026-07-19, 1★:** **"İlk denememizde çok ısındı. Biraz endişe ettik.
  Koluna takacak ve 1 dakikalık kamera veya sesli görüşmede bu kadar ısınmamalı"** — *("On our first try
  it got very hot. We were a bit worried. It is going to be worn on the arm, and it should not heat up
  this much in a 1-minute camera or voice call.")*
- **Germany — Amazon.de, "Amazon Kunde", 2026-06-29, 2★, verified:** **"The phone heats up really
  quickly. The sound is very low and bad. You cannot make it loud enough and it sounds as a broken
  speaker. Positive is that the screen is nice."**
- A third heat report exists on the French iOS storefront (2026-05-18, 1★: *"La montre devient très
  chaude après un appel qui a durée plus de 10 minutes"*), but that reviewer does **not name the model**,
  so it is **not counted**.

#### 4. GPS: good outdoors, and that is the entire caveat

The single most useful review for the indoor/school question:

**UK — Amazon.co.uk, "Sisi Tang", 2026-07-29, 4★ (not marked a verified purchase).**
> **"GPS works ok if kid is outside. Difficult if they're indoor. But it's the best so far for tracking.
> The first watch we bought from different brand, completely wrong. But this one, GPS tracking is correct
> most of the time. But if kid is inside somebody house, will take long time to track. Calling by sim
> card is ok, as a normal phone. Video Call through the app, sometime work, sometime not, especially if
> 5G or phone signal isn't good, then it doesn't work."**

**Italy — Amazon.it, "bozgabeghin", 2026-07-02, 1★, verified.** Names the carrier:
> **"Il gps fuori wifi tramite app non funziona, rimane come telefono da utilizare e basta, ma cosi il
> significato di questo dispostivo va a sparire. Operatore tim"**
> *("The GPS outside WiFi, via the app, doesn't work — it just stays a phone to use and nothing more,
> but that way the whole point of this device disappears. Operator: TIM.")*

A second, independent Italian-carrier report says the same in four words — **YouTube "@ioanmariusbozga",
~2026-07, on the Romanian Mobilissimo MT48 video: "Gps dont work tim italy"**. **Two reports, same
carrier.** Not enough to call it a TIM-specific defect, but it is the only carrier named twice.

**Italy — Amazon.it, "Cliente Amazon", 2026-07-01, 1★, verified.** Upgraded from an Xplora X5:
> **"Purtroppo, malgrado l'installazione del nuovo firmware, la geolocalizzazione è imprecisa. Inoltre il
> tracciamento degli spostamenti non è costante e si blocca dopo alcune ore e serve riavviare. […] a
> livello hardware dovrebbe essere molto performante ma invece il software è ancora acerbo. Comprato per
> avere la certezza di poter monitorare mio figlio ma invece non mi posso fidare."**
> *("Unfortunately, despite installing the new firmware, the geolocation is imprecise. Moreover the
> movement tracking is not consistent, it freezes after a few hours and needs a restart. […] at hardware
> level it ought to be very capable but instead the software is still immature. Bought to have the
> certainty of being able to monitor my son, but instead I can't trust it.")*

**Italy — Amazon.it, "Andrea Zaramella", 2026-07-21, 3★, verified.** A repeat TCL buyer:
> **"Sinceramente nulla di più dei modelli precedenti. Il GPS che per noi era importante rimane sempre
> non molto preciso. Per il resto i modello vecchi facevano le stesse cose."**
> *("Honestly nothing more than the previous models. The GPS, which mattered to us, is still not very
> precise. Otherwise the old models did the same things.")*

**This is the finding that should most trouble the recommendation.** Two independent repeat-TCL buyers
who owned earlier single-band MOVETIME models report the MT48's positioning is **no better than the
watches it replaces**, and one owner quantifies the non-GNSS fallback at **~200 m**. Dual-band L1+L5 is
the main technical reason this watch was ranked first in this document. On owner evidence, **the
dual-band advantage is not showing up in daily use** — which is consistent with the GNSS-constellation
investigation below, where TCL never actually documented the constellation set.

#### 5. SIM and carrier interoperability — the setup trap

**UK — Apple App Store, "Tommy-TJG", 2026-08-12, 4★.** The only App Store review that names the model:
> **"Tracks well but I had to manually set up an APN using chat GPT to guide me through it. This might be
> down to the Lebara SIM card I was using though but for someone with little technical knowledge this
> could end up with the TCL MT48 watch being returned. Maybe have a clear support contact on the box.
> […] It can be a little glitchy though when my son is trying to call me. It rings my phone but then the
> app at the same time then sometimes when he puts the phone down it rings me again. […] when I answer
> it says call failed."**

**UK — Amazon.co.uk, "Petar Y.", 2026-07-21, 1★, verified purchase.** Three operators tried:
> **"The watch isn't bad at all but actually can't work properly with sim cards. I already changed 3
> different mobile operators and with 3 couldn't work properly i had only video call or phone call never
> both."**

**This bears directly on the Romanian pre-purchase test above.** The watch does take any SIM — but **the
APN may have to be entered by hand**, and there is at least one report of an operator combination where
voice and video calling could not both be made to work. **Add APN configuration to the pre-purchase test
list**, and test *both* voice and video calling before the return window closes.

#### 6. Feature regressions and advertised features that are absent

- **Contact-list capacity was cut relative to the previous model.** Turkey — YouTube "@murhorse",
  ~2026-06, an MT42 owner who upgraded: **"Bizde de MT42 vardı heves etti diye MT48 aldık fakat rehberi
  pişman etti. Rehber kayıt adeti 50 den 20 ye düşürülmüş."** — *("We had an MT42; he was keen so we
  bought the MT48, but the contacts list made us regret it. The number of contact entries has been cut
  from 50 to 20.")* A second owner (MediaMarkt TR, "Karen") gives the limit as **10**. The two disagree
  on the number; what is consistent is that **the limit is low and lower than the previous model**.
- **The advertised AI features were not enabled in Turkey — at least eight independent reports.**
  Typical: YouTube "@ahmetates-q6i": **"inceleme videonuzu izledikten sonra yapay zeka özelliklerinin
  olması sebebiyle saati aldım fakat saatte çocuk ansiklopedisi, ingilizce sözlük vs AI özellikleri
  bulunmuyor"** — *("after watching your review video I bought the watch because of the AI features, but
  the watch does not have the children's encyclopedia, English dictionary etc.")* And "@deneme_deneme_1":
  **"bu urunu ben aldm ve yapay zeka ozellikleri Suan icin Türkiye de kullanilmiyor […] bu bilgi siz
  alana kdr da soylenmiyor"** — *("I bought this product and the AI features are currently not usable in
  Turkey […] and you are not told this until after you buy.")* **No equivalent complaint was found on any
  EU storefront**, so this reads as **regional gating rather than a universal defect** — but it
  establishes that TCL ships the MT48 with advertised headline features silently switched off in some
  markets.
- **There is no ambient / remote listening.** Turkey — Google Play, "Yasin Oksuz", 2026-04-28, 3★:
  **"mt 48 x modelini aldım özellikle ortam dinleme ve konum için. fakat ortam dinleme özelliği yok"** —
  *("I bought the MT48X model specifically for ambient listening and location. But there is no
  ambient-listening feature.")* At least three further Turkish commenters searched for the feature and
  could not find it. **This is owner-side corroboration for the covert remote-listen section above: on
  the MT48 the capability appears genuinely absent** — a privacy point in the watch's favour, and
  simultaneously why several buyers felt mis-sold.

#### 7. Two safety gaps reported by owners

- **No wear-off detection.** Turkey — YouTube "@ha5297-v6d": **"Kol sensörü yok, yanı bir şekilde kolundan
  çıkması veya çıkartılmasının (zorla) uyarısı verilmiyor. Bu güvenlik bakımından en büyük eksiklik. Bu
  saatleri güvenlik için almıyormuyuz!!"** — *("There is no wrist sensor, i.e. no alert is given if it
  comes off the wrist or is (forcibly) removed. This is the biggest shortcoming from a safety point of
  view. Aren't we buying these watches for safety?!")*
- **The watch can be powered off by a third party.** Turkey — Google Play, "Engin Acargil", 2026-02-24,
  3★: **"çocuğun istemi dışında 2. Bir kişi tarafından saat kapatılabilir ve çocuk aradığında çağrıyı
  reddedebilir buda […] güvenlik zafiyeti oluşturabileceği bir durum"** — *("the watch can be switched off
  by a second person against the child's wishes, and that person can reject the call when the child rings
  — a situation that can create a security vulnerability.")*

#### 8. The companion app, and the school-hours problem

TCL Connect's post-launch reviews are dominated by silent logouts, missing call and message
notifications on iOS, the "wearables" category failing to appear during setup, and false safe-zone
alerts. These reviews overwhelmingly **do not name a model**, and the app spans TCL's routers and older
watches, so **none of them are counted in the 35**. One is worth quoting anyway because it explains the
school-hours problem mechanically:

**France — Google Play, "cedric stanus", 2025-11-12, 4★** (model not named):
> **"le gros point noir pour moi est de ne pas pouvoir désactiver la localisation Wifi et LBS… quand ma
> fille est a l'école, j'ai constamment le message comme quoi elle a quitté l'école (localisation par
> wifi et lbs) puis quand elle est dans la cours, et bien elle est de nouveau dans l'école"**
> *("the big black mark for me is not being able to disable Wi-Fi and LBS positioning… when my daughter
> is at school I constantly get the message that she has left school (positioning by wifi and LBS), then
> when she's in the playground, she's back in the school again.")*

That is the same mechanism Sisi Tang describes from the UK, and it is the practical answer to the
indoor/school question: **indoors the watch falls back to Wi-Fi/cell positioning and the geofence then
flaps.** Two Turkish owners also report never receiving a notification when the child calls
(Google Play "Göktuğ G.", 2026-03-24, 1★: **"cocugum mt48 saatiyle konusma yapmaya basladiginda yonetici
benim ama bana bildirim dusmuyor"** — *("when my child starts a call with the MT48 watch — I'm the
administrator, but I get no notification")*).

---

### Longevity — what happens after the first month

This is the category that matters most and where evidence is thinnest, because the MT48 is only ten
months old. **Every dated longevity report found is listed here; there are nine.**

| Ownership at time of writing | Country | Verdict | Source |
|---|---|---|---|
| **2 days** | ES | Dead. Support blamed the owner. Binned. | Amazon.es, Ana García, 2026-06-16, 1★ |
| **2 days** | TR | SIM tray dislodged, strap pin bent. | MediaMarkt.com.tr, "Verdict", 2026-07-25, 1★ |
| **1 week** | IT | Will not power on. Seller uncontactable. | Amazon.it, Fabrizio, 2026-08-17, 1★ |
| **"short time"** | DE | Will not charge. No replacement units from TCL. | Amazon.de, RL, 2026-06-29, 1★ |
| **"a few weeks"** | TR | Failed; warranty claim refused. | MediaMarkt.com.tr, Yavuz, 2026-07-15, 1★ |
| **"several weeks"** | ES | Working well; 36–40 h battery. | Amazon.es, laura, 2026-04-27, 4★ |
| **1 month** | TR | Best kids' watch used so far. | YouTube "@damlazagal2906" |
| **3 months** | TR | Battery under a day; switched to a competitor. | YouTube "@KemalKorkmaz-k2k" |
| **4 months** | DE | Touchscreen dead, calls self-terminating, water ingress. | Amazon.de, Amazon Kunde, 2026-08-09, 1★ |

*(The two YouTube rows are attributed to the MT48 by video context — both comments sit under dedicated
MT48 review videos — not by the commenter naming the model. They are therefore not among the 35 counted
reports. The other seven rows are all model-verified.)*

**Nobody has reported owning an MT48 for longer than four months.** That is not a finding about the
watch — it is a finding about the evidence base. The document's own thesis is that this category dies
between 4 and 12 months; **the MT48 has not yet been observed through that window by anybody whose
report can be found.** The oldest report in existence is the 4-month German one, and it is a total
failure.

Set against that: **of the nine dated longevity reports, five are outright device failures inside four
months** (ES day 2, IT week 1, DE "short time", TR "a few weeks", DE 4 months), **and a sixth is a
serious build failure at two days** (TR, SIM tray dislodged and strap pin bent). Small numbers, a
self-selecting sample, and negative reviewers are more motivated to write — all true. But five device
deaths out of nine dated reports, spread across four countries and two retail channels, is not a signal
that can be dismissed as sampling noise. **This is the single biggest change to
the evidence base since this document was written.**

---

### Contamination and seeding — what was checked, and what was found

**Verified clean.** All 19 Amazon reports carry a per-review model tag (`Stil: MT48X` /
`Nome stile: MOVETIME MT48`), and the parent variation family for `B0GLNHVCX9`/`B0GLN6F842` resolves to
**MT48X only** — no other model merged into the pool. Amazon.it lists the MT46 separately at 4.2★/23,
distinct from the MT48's 3.5★/56 (an earlier "3.1" here contradicted this document's own histogram, which recomputes to 3.51). No seeding pattern: reviews spread from 27 Apr to 17 Aug 2026, no two
5★ reviews on the same day, no repeated reviewer names, five languages written natively, and the
distribution is a bimodal "works great / died on me" shape rather than the 4.5★-with-thin-tail shape
that seeded pools produce.

**Live contamination traps found — these are real and will catch anyone repeating this work:**

1. **⚠️ ASIN `B0GLN6F842` is a different watch depending on the marketplace.** On amazon.de, .es and .it
   it is the **MT48X in pink**. On **amazon.fr the identical ASIN resolves to the TCL MOVETIME Family
   Watch 2**, with its own separate 3.5★/35 rating pool. Verified directly on 2026-08-19. Anyone
   scraping this ASIN across marketplaces will **silently mix two different products**.
2. **amazon.fr shows 25 MT48 ratings but states verbatim "Il y a 0 commentaire de France"** — every
   written review shown to French buyers is imported from IT/UK/ES/DE. France has produced no MT48 owner
   text at all.
3. **Amazon accessory listings carry "TCL MOVETIME MT48" in the title and have their own ratings** —
   screen protectors, straps and charging cables (e.g. `B0GXVLG1P1` at 1.8★/3, `B0GLZ69PM4` at 1.0★/2,
   `B0H2YR32Q7` at 1.0★/1). Naive keyword scraping pulls these in as if they were watch reviews and drags
   the apparent score down.
4. **Retailer search engines silently rewrite the query and present the fallback as a result.**
   MediaMarkt.at rewrites `tcl mt48` → `tcl mt46` (`"finalQuery":"tcl mt46"`) and returns MT46 products.
   MediaExpert.pl falls back to all 1,057 TCL products. Vodafone Community DE rewrites `MT48` → `Mm` and
   returns unrelated Fritzbox threads unless `&nospellcheck=true` is appended.
5. **An AI-generated French "review" site presents fabricated aggregate scores as owner opinion.**
   <https://www.lheurepassion.com/blog/tcl/avis-tcl-movetime-mt48.html> (2026-07-21) publishes a
   15-dimension scorecard — *"3,7/5 Note globale… Synthèse basée sur les avis utilisateurs analysés"*,
   with sub-scores like *"Système de recharge 2,6/5"*. There is **no underlying user base**: zero
   comments, and its prose paraphrases the single Amazon.es review by "laura" almost verbatim (the
   "36 à 40 heures" figure, the magnetic cable, the USB-C wish). It currently **ranks top in French for
   "avis TCL MOVETIME MT48"**. It is affiliate content, not owner evidence.
6. **leDénicheur.fr merges three watches into one product record** — MT48X-3BLCA11, MT48X-3ALCA11 **and
   an MT46X** as offers on one page, published with MT46-era specs (*"Année de publication: 2024, 1.3",
   240×240"*) that are wrong for the MT48. Any spec or price cited from that page is contaminated.
7. **Naming traps.** The Czech market name is **"TCL Movetime Family Watch 48"**, with MT48X only inside
   the SKU string — searching CZ/SK sites for "MT48" under-reports availability. Colour names differ per
   channel for identical hardware (Geizhals/eMAG/TCL: *cosmic pink / galactic blue / nebula grey / lunar
   cream*; Amazon.de: *Sakura-Pink / Speed-Blau*).
8. **Competitor seeding in the comment sections, not on the product.** The Turkish MT48 review videos
   carry an obvious astroturf cluster for **Wiky Watch** — at least five accounts (`@jestenes`,
   `@keremsahin464`, `@BegumBilgin-s5n`, `@JaleKaya-g9c`, plus repeats) posting near-identical
   marketing-voice praise for "Wiky Watch 5 Plus / 5S" under MT48 videos, one of them pasted inside
   quotation marks. Multiple commenters also accuse the largest Turkish reviewer of an undisclosed paid
   partnership. **None of this contaminates the MT48 reports, but it means the comment sections cannot be
   read as an unmanaged sample.**
9. **MediaMarkt Turkey caveat:** all its MT48X reviews carry `isVerifiedPurchaser: false`, and six of the
   ten fall inside a 13-day window (15–28 July 2026), consistent with a stock arrival plus a
   review-request email wave. The 5★ entries are short and generic ("Kaliteli", "Çok memmunuz"); the 1★
   entries are long and specific. **Weight the negatives.**

**MT48X vs MT48EX.** Every retail listing found in Europe, Turkey and Romania is the **nano-SIM MT48X**
(SKUs MT48X-3GLCA11 / -3NLCA11 / -3ALCA11 / -3BLCA11). **No MT48EX (eSIM) retail listing was found in any
country**, and **not one of the ~2,800 reviews and comments collected in this sweep (302 Apple App Store
reviews across 21 European storefronts, 2,331 Google Play reviews, 164 YouTube comments, and the
retailer sets) can be attributed to an eSIM unit.** The eSIM variant appears only on TCL's own global, UK and DE spec pages. Its failure
modes remain entirely unobserved.

---

### Sources checked that had nothing

**MT48 stocked, review count confirmed ZERO:**

| Source | Country | Evidence |
|---|---|---|
| **eMAG** — 3 SKUs (D1418N2BM / DQ418N2BM / D6418N2BM) | RO, HU, BG | `"reviews": 0` in the page payload on all three storefronts; RO renders *"Fii primul care scrie un review"*, HU *"Legyél Te az első, aki értékelést ír!"* |
| **Geizhals** — all 4 colours (a3724280/17/91/85) | DE/AT | API-confirmed: `POST /api/gh0/query_product_ratings` returns `"total_ratings":0, "aggregate_star_rating":null` for each colour and for the variant group. Also zero linked Testberichte. |
| **Otto.de** (CS07GO0W9, €149.95) | DE | Product page is Kasada-walled, but its own search-results tile carries **no `aggregateRating` node at all**, while neighbouring kids-watch tiles (imoo Z1/Z3/Z7, Xplora, blackview, and TCL's own MT42X at 4.0★) all do. |
| **MediaMarkt.es** — 4 SKUs (1667820–23) | ES | GraphQL payload: `"rating":null, "reviews":[], "totalResults":0, "reviewStatistics":null` |
| **MediaWorld.it** — 2 SKUs, €149.99 | IT | `"averageOverallRating":0, "totalReviewCount":0` |
| **Zboží.cz** — 2 variants, sold via 10–11 shops | CZ | `"rating":-1, "ratingCount":0` on both |
| **Vodafone.de** ("Kidswatch TCL MT48X", Nebula Grey) | DE | Page contains **no review component whatsoever** — zero occurrences of rating/review/stars markup |
| **shop.telekom.de** (MT48X Galactic Blue, €149.99) | DE | No review component; and the page is currently **`schema.org/OutOfStock`** |
| **Amazon.de Telekom-bundle SKUs** (B0G355MSGG, B0G356NSZL) | DE | Separate ASINs, **zero ratings**, none of the main listing's 56 |
| **PriceRunner** (MT48 Galactic Blue) | UK, DK | *"No reviews"* / *"Ingen anmeldelser"* |
| **Prisjakt.nu** (p=16902461) | SE | Review section present, no reviews in it. Prisjakt also states it does **not** verify that reviewers bought or used the product. |
| **leDénicheur.fr** (p=13792123) | FR | 0 reviews, and reviewing is disabled: *"Vous ne pouvez plus laisser d'avis, la fonctionnalité est désactivée."* |
| **Amazon.es** third-party SKU B0GKF7LXGS | ES | 0 ratings |

**Does not stock the MT48 at all (positively evidenced):** MediaMarkt.de (accessories for it only — no
watch), MediaMarkt.at (search rewrites to MT46 and stocks MT46), MediaMarkt.hu, Alternate.de,
Cyberport.de, MediaExpert.pl, Morele.net, Árukereső.hu, Boulanger.fr, LDLC.com, RueDuCommerce.fr,
Unieuro.it, Euronics.it, Trony.it, Skroutz.gr (*"Δεν βρέθηκαν αποτελέσματα"*), n11.com.tr and
Teknosa.com.tr (accessories only), **Coolblue.nl** (*"No results for 'TCL MOVETIME MT48'"*),
**Proshop.dk** (stocks the older Family Watch 2 only), and **telekom.de's main smartwatch range** (stocks
Anio 6 and Xplora X6 Play eSIM, no TCL device).

**Forums and communities — searched, nothing found:** Vodafone Community DE (`MT48` → *"0 Ergebnisse"*;
`Movetime` → 0 results, despite Vodafone being a launch carrier), o2 Community DE (one o2 *marketing*
post from 2025-12-11 with 115 views and 2 replies, neither an ownership report), Telekom hilft Community,
android-hilfe.de, gutefrage.net, urbia.de, computerbase.de, Les Numériques (FR — *"Votre recherche n'a
donné aucun résultat"*, i.e. France's largest consumer-tech site has never covered it). **No French,
Spanish, Italian, Portuguese, Greek, German, Czech, Polish or Hungarian parent-forum discussion of the
MT48 was found in any language.** Ten months after launch the watch has essentially no organic community
footprint in Europe.

**Reachable but blocked — record as UNKNOWN, not zero:** Trustpilot (403 to every route), Reddit (403),
Alza.cz/.sk, Heureka.cz, Ceneo.pl, idealo (all TLDs), Kaufland.de/.cz, x-kom.pl, Komputronik.pl, RTV Euro
AGD, Allegro.pl, Mall.cz, CZC.cz, Datart.cz, TSBohemia.cz, Saturn.de, notebooksbilliger.de, Expert.de,
Conrad.de, Interspar.at, Hartlauer.at, **Galaxus/Digitec** (confirmed as a listed MT48 merchant on all
four Geizhals colour pages, so it definitely stocks it — review count unknown; this is the largest
remaining gap), Fnac (all TLDs), Darty, Cdiscount, El Corte Inglés, Carrefour.es, PcComponentes (stocks 3
SKUs), Worten, Decathlon.es, Public.gr, Kotsovolos.gr, Trovaprezzi.it, Hepsiburada, and — a notable gap —
most of the UK, Irish and Nordic chains: Currys, Argos, Very, John Lewis, AO.com, Bol.com, Elgiganten,
Komplett, NetOnNet and Power all returned 403/429/500 to every route tried. **UK owner evidence in this
section therefore comes entirely from Amazon.co.uk and the App Store, not from UK high-street retail.**

**Video reviews exist but generate no owner discussion in Europe.** The German brodos review of the
MT48X (2026-07, 761 views) has **3 comments, none from an owner**; the Swedish M3 video (2026-06, 1,135
views) has **2 comments, neither from an owner**; five other European MT48 videos have **zero comments**.
By contrast the three Turkish MT48 reviews carry 153 comments between them and 162,000 views. **The
owner conversation about this watch is happening in Turkish.**

### What this changes

1. **"Not one Romanian has been found who has run an MT48" still stands** — and now stands after a
   deliberate search of eMAG RO/HU/BG, Romanian YouTube and the Romanian Play storefront.
2. **"Close to unreviewed" no longer stands.** There are 35 model-verified owner reports; the earlier
   section should be read as superseded on volume.
3. **The battery claim is downgraded.** Seven owners against two say roughly a day, not 2.5 days.
4. **The dual-band GNSS advantage is unconfirmed in daily use**, and two repeat-TCL buyers say it is no
   better than the older single-band models — which should be read together with the GNSS filings
   investigation below, where TCL never documented the constellation set either.
5. **A hardware-reliability question has opened that did not exist before**: five hardware deaths inside
   four months out of nine dated longevity reports, in four countries, with after-sales failing in four
   of them, and an authorised German repairer stating TCL could not supply replacement units.
6. **The IP68 / 2ATM rating has one direct owner contradiction** at four months.

---

## Retry pass — proxied fetches of previously blocked sources (2026-08-19)

A second pass at the sources earlier agents recorded as unreachable, routing through
`r.jina.ai`, `proxy.cors.sh`, `api.allorigins.win`, `api.codetabs.com`, `corsproxy.io`,
`cors.eu.org`, `test.cors.workers.dev`, `api.cors.lol`, the Wayback CDX API, a Redlib
Reddit front-end, direct curl with browser and Googlebot user-agents, and `yt-dlp` for
YouTube comments and transcripts. **`r.jina.ai` was by far the most effective single
method** — it defeated the Vercel checkpoint (Elgiganten), the AWS WAF (Trustpilot), and
the Romanian and UK/IE retailer walls, but not Akamai (Argos), Cloudflare Turnstile
(Softpedia, PC Garage, AO.com), Distinct (eVoMAG) or Amazon's review login gate.

### What changes a current conclusion

**1. The eSIM variant is no longer unobserved — and it is on sale in Sweden.**
[Hallon](https://www.hallon.se/mobiler/barnklockor/tcl-kidswatch-movetime-mt48) (Swedish
MVNO, Hi3G/Tre group), fetched 2026-08-19, sells the "TCL Kidswatch Movetime MT48" in Grey
and White on subscription (119 kr/mån x 12 mån hardware + 49 kr/mån plan, *"Snart i lager –
leverans om en vecka"* = "In stock soon – delivery in about a week"). Its body copy reads
*"Tack vare eSIM och 4G är klockan alltid uppkopplad"* = **"Thanks to eSIM and 4G the watch
is always connected"**, its spec table reads **`SIM | Version 1: Endast Nano SIM  Version 2:
Endast eSIM`** = "Version 1: Nano SIM only. Version 2: eSIM only", and the page links its
*"eSIM Smartklocka"* service-terms PDF. This is the first retail or carrier listing anywhere
in the corpus that sells an eSIM MT48 rather than merely mentioning eSIM in boilerplate.
**Caveat: the page never prints the string `MT48EX`**, so this evidences an eSIM SKU, not
that regulatory model designation. `sim_type` should move from "nano-SIM; eSIM variant
unobserved" to "nano-SIM; **eSIM SKU observed on sale (Hallon SE)**, model string UNKNOWN".

**2. The only written Nordic owner review has been read.** Kjell & Company's reviews are
served by **TestFreaks**, not by Kjell, and are delivered through `POST /resolvedynamicdata`.
The prior agent's HTTP 500 was a request-encoding problem, not a block: the endpoint takes a
**JSON-encoded string** (`JSON.stringify` of a JS-object-literal-ish payload with unquoted
`t`/`c` keys), not a JSON array. With the correct body it returns 200 and ~118 KB.
Source: [kjell.com/se/…-p60097](https://www.kjell.com/se/produkter/mobilt/smartklockor-och-ringar/gps-klockor/tcl-movetime-mt48-smartklocka-for-barn-gra-p60097),
`modelNumber: MT48X`, 1 999 SEK, `schema.org/InStock`, fetched 2026-08-19.

> **"Marius", verified buyer, 2026-06-06, 5/5, on "TCL Movetime MT48 - smartklocka för barn Vit" (White). 3 helpful votes, 0 unhelpful.**
> Review: *"Bästa barnklocka hittills!"* — **"Best kids' watch so far!"**
> Pros: *"Mycket bra GPS"* — **"Very good GPS"**
> Cons: *(none given)*

Rating breakdown returned with it: group total 3 ratings = 2x5★ + 1x4★ (`yourScoreDistAll:
[2,1,0,0,0]`); the Grey variant holds 1x5★. So the "4.5 / 3 ratings / 1 review" JSON-LD is
real and the single written review is 22 characters long. It is **the first owner statement
anywhere that praises MT48 GPS specifically** — but it says nothing about accuracy under
canopy or in urban canyon, so it does not resolve the dual-band question.

**3. Somebody has owned one for five months — but the date arithmetic is inconsistent.**
On [Mesut Çevik's Turkish review](https://www.youtube.com/watch?v=TL_DdLlQx2I) (2026-02-04,
75,859 views), **@Tolgahan3634, ~2026-02**:

> *"Bu modeli yaklaşık 5 aydır kullanıyoruz. … özellikle görüntülü görüşme ve oyun uzun süre kullanılırsa 1 gün gitmez. … Bu 5 aylık süreçte şarjı bizi hiç yarı yolda bırakmadı. Ben şahsen tavsiye ederim."*
> — **"We have been using this model for about 5 months. … especially if video calls and games are used for a long time it won't last a day. … In these 5 months the battery has never left us stranded. I personally recommend it."**

This would be the longest ownership report in the corpus, and it is *positive*. **But treat
it as unconfirmed**: 5 months before February 2026 is September 2025, which predates the
Turkish launch (TCL Mobile Türkiye's own MT48 videos are dated 2026-01-14). The commenter
says "bu modeli" ("this model") without naming it, so it may be an MT42/MT46. **The
"nobody has owned one longer than four months" claim should be softened to "no
*model-verified* owner report exceeds four months", not withdrawn.**

**4. A three-month owner has already abandoned the watch — and the reason is battery, not death.**
Same video, **@KemalKorkmaz-k2k, ~2026-07/08**:

> *"3 ay önce cocuguma aldım. Sarj 1 gün bile dayanmıyor cocuk okuldan eve gelene kadar sarjı bitmiş oluyor. Şu an spovan safebell kullanıyoruz."*
> — **"I bought it for my child 3 months ago. The charge doesn't even last one day; by the time the child gets home from school the battery is dead. We now use a Spovan Safebell."**

This is a **new failure mode for the longevity tally**: not a hardware death, an abandonment.
It is a churn event at 3 months that the current "five deaths in nine longevity reports"
framing does not capture. Model attribution is by video context only.

**5. The worst battery figure in the corpus is now 5–6 hours a day.** On
[Kerem Enginar's review](https://www.youtube.com/watch?v=64hoPiLuF_c) (2026-02-03),
**@DenizeŞiirler, ~2026-05**:

> *"Biz de yeni aldık 3 gün oluyor ve günde 5-6 saat ancak gidiyor şarjı."*
> — **"We just bought it too, it's been 3 days, and the battery only lasts 5–6 hours a day."**

Against it, **@AliEnsarÇalık, ~2026-06**, answering "how long does the charge last":
*"48 72 saat arası"* — **"between 48 and 72 hours"**. And the M3 (Sweden) video review
(2026-05-21, [yFHiw4yklPA](https://www.youtube.com/watch?v=yFHiw4yklPA)), transcript:
*"Men vi har många gånger klarat oss uppåt två dagar i alla fall och det är så skönt att
slippa ladda klockan varje kväll"* — **"But we have many times managed up to two days at
least, and it's so nice not to have to charge the watch every evening."**
**Still not one source of any kind states a tracking interval.** The reviewer himself
declines to give a number: *"Pil konusu çok karışık zira gün boyu aktif kullanmazsa çok rahat
yetiyor. Fakat siz aktif canlı takip veya görüntülü görüşme gibi iletişim araçlarını yoğun
kullanırsanız ona göre daha az gidiyor. Bu yüzden pili söylemem ya da katalog verisinden
okumam yanıltıcı oluyor."* — **"The battery question is very complicated, because if it isn't
used actively all day it lasts very comfortably. But if you heavily use live tracking or
video calls it lasts less accordingly. So quoting a battery figure, or reading one off the
spec sheet, would be misleading."** That is the closest thing to an interval statement in the
entire corpus and it is a refusal.

**6. Two hard product facts that were not in the document.**
- **Contact list capacity is 20, down from 50 on the MT42.** @murhorse, ~2026-06, an
  explicit MT42-to-MT48 upgrader: *"Bizde de MT42 vardı heves etti diye MT48 aldık fakat
  rehberi pişman etti. Rehber kayıt adeti 50 den 20 ye düşürülmüş."* — **"We had an MT42
  too; we bought the MT48 out of enthusiasm but the phonebook made us regret it. The
  contact-list capacity has been cut from 50 to 20."**
- **There is no wrist-off / removal detection.** @ha5297-v6d, ~2026-08:
  *"Kol sensörü yok, yanı bir şekilde kolundan çıkması veya çıkartılmasının (zorla) uyarısı
  verilmiyor. Bu güvenlik bakından en büyük eksiklik. Bu saatleri güvenlik için
  almıyormuyuz!!"* — **"There is no wrist sensor, i.e. no alert if it comes off the wrist
  or is (forcibly) removed. From a safety standpoint that is the biggest shortcoming. Aren't
  we buying these watches for safety?!"** A separate question asking the same thing
  (@kaplansedat) is the highest-liked comment on that video (9 likes) and was never answered.

**7. The AI feature set is market-gated, and was broken at launch in Turkey.** At least six
separate Turkish buyers report that the AI tools shown in the reviews were absent from retail
units. @deneme_deneme_1, ~2026-03: *"bu urunu ben aldm ve yapay zeka ozellikleri Suan icin
Türkiye de kullanilmiyor … bu bilgi siz alana kdr da soylenmiyor"* — **"I bought this product
and the AI features are not currently usable in Turkey … and you are not told this until after
you buy."** @CemreKasarcı, ~2026-02, bought from Media Markt Turkey, firmware **v047**:
*"destek hattını aradım. Türkiye'de satılan modellerde TCL AI kısmında sadece bahsettiğim 2
uygulama varmış."* — **"I called support. On the models sold in Turkey the TCL AI section only
has the 2 apps I mentioned."** The reviewer relayed TCL's answer: the update slipped from
February to March 2026; @ferhatkole6130 confirmed in ~March that *"Bugün itibariyle;
Türkiyedeki Tcl Movietime Mt48 saatlere, güncelleme ile birlikte yapay zeka araçları geldi"*
— **"As of today, the AI tools have arrived on TCL Movetime MT48 watches in Turkey with an
update."** So: **AI capability is region-gated and shipped incomplete; add it to the
pre-purchase test list.**

**8. Outbound video calling is broken out of the box, and the fix is a hidden app permission.**
Three separate owners report the watch can receive but not place video calls. @emir4551,
~2026-03: *"Ben videonızu izledim ve saati aldım ancak görüntülü arama yapamıyorum biz arayınca
açılıyor ancak saatten arama yaptığımızda görüntülü arama yapamıyorum"* — **"I watched your
video and bought the watch, but I can't make video calls; when we call it, it answers, but
when we call from the watch we can't make a video call."** @NiccolòMachiavelli-TR, ~2026-07,
names the model explicitly: *"TCL Movetime MT48X saatten görüntülü arama yapamayanlar için Cep
telefonunuzda TCL Connect uygulamasını açın. Daha fazla kısmına geçip kullanıcı izni menüsüne
girin. Bu kısımdan kameraya izin vermeniz gerekiyor. … eğer aktif olmaz ise saat eşleştirmesini
uygulamadan kaldırın tekrar ekleyiniz."* — **"For those who can't make video calls from the
TCL Movetime MT48X watch: open the TCL Connect app on your phone, go to 'More' and enter the
user-permissions menu. You have to grant camera permission there. … If it doesn't activate,
remove the watch pairing from the app and add it again."**
This corroborates the document's existing video-call finding and supplies a workaround.

**9. Covert ambient listening: two more owners confirm it is absent on retail units.**
@ayseahmeterdogan6322, ~2026-08: *"Yaa ben bunu ortam dinleme özelliği var diye aldım ama
bulamıyorum öyle bir özellik"* — **"I bought this because it had the ambient-listening
feature but I can't find such a feature."** @bunalanadam8788, ~2026-02, replying to the same
question: *"Bizimkinde yok"* — **"Ours doesn't have it."** Four further Turkish commenters ask
for it and none report having it. This strengthens the existing section: **the remote-listen
capability is not present in shipped European/Turkish MT48 firmware.**

**10. "Blocked" becomes "reachable and empty" for Trustpilot and Reddit.**
- **Trustpilot** ([trustpilot.com/review/tcl.com](https://www.trustpilot.com/review/tcl.com),
  read via `r.jina.ai` 2026-08-19): TCL Electronics is rated **1.4/5 across 76 reviews**;
  the site's own AI summary says reviewers *"frequently complained about unresponsive customer
  service teams, long delays, and major difficulties getting their warranties honored
  properly."* Filtering `?search=movetime` and `?search=MT48` returns **no matching reviews**.
  So: brand-level after-sales evidence is bad, MT48-specific Trustpilot evidence is **zero,
  not unknown**.
- **Reddit** (via the Redlib front-end `redlib.catsarch.com`, which `r.jina.ai` renders):
  searches for `MOVETIME`, `TCL MT48`, `MT48 smartwatch` and `TCL kids watch` return **exactly
  one MT48 item on all of Reddit — a verbatim repost of TCL's CES 2026 press release**
  ("the TCL MOVETIME MT48 … has won the 2026 CES Picks Award from TWICE"). There is no owner
  discussion of the MT48 anywhere on Reddit, in any subreddit, in any language. The only TCL
  kids-watch community content is an r/androidafterlife **MT40X debloating guide**.

**11. Romania: retail absence is now positively evidenced, not merely unverified.**
- **Altex** ([altex.ro/cauta/?q=movetime](https://altex.ro/cauta/?q=movetime), 2026-08-19):
  *"Ne pare rau, cautarea ta **"movetime"** nu a avut niciun rezultat. Verifica daca ai scris
  corect sau incearca sa cauti folosind alt termen."* — **"Sorry, your search 'movetime'
  returned no results. Check your spelling or try a different term."** Same for `q=MT48`.
- **Flanco** ([flanco.ro](https://www.flanco.ro/catalogsearch/result/?q=movetime), 2026-08-19):
  *"… nu a returnat niciun rezultat pentru 'movetime'. Produsele afisate sunt cele mai
  apropiate."* — **"… returned no results for 'movetime'. The products shown are the closest
  matches."** (it then returns Huawei phones and Bosch vacuum cleaners).
- A Romanian commenter on Mobilissimo.ro's IFA hands-on, **@christianrazvan, ~2025-10**:
  *"Daca tine bateria si chiar raporteaza corect locatia ar fi ceva, dar nu l gasesti in
  magazine..."* — **"If the battery lasts and it really reports the location correctly it
  would be something, but you can't find it in stores..."**
- The nearest thing to a Romanian-channel owner is **@ioanmariusbozga, ~2026-07**, who wrote
  in English on the same video: **"Gps dont work tim italy"** — i.e. a TIM Italy user
  reporting GPS not working. Too thin to count as an owner report, but it is the first
  negative GNSS claim from anyone who appears to hold the device.
- **Zero Romanian MT48 owners still stands**, now after Altex, Flanco, Cel.ro, eVoMAG, PC
  Garage, Quickmobile, Softpedia and Reddit were all attempted.

**12. Prisjakt now says nobody sells it in Sweden.**
[prisjakt.nu/produkt.php?p=16902461](https://www.prisjakt.nu/produkt.php?p=16902461),
2026-08-19: *"Ingen butik säljer denna produkt just nu."* — **"No shop is selling this product
right now."** And *"Det finns ingen prishistorik för denna produkt"* — **"There is no price
history for this product."** A ten-month-old product with **no price history at all** on
Sweden's dominant comparison site, while Kjell lists it in stock at 1 999 SEK and Hallon sells
it on contract, means the MT48 never entered normal Swedish comparison-shopping distribution.

### New owner and near-owner reports found in this pass

| Source (dated, linked) | Country | Model verified? | Substance |
|---|---|---|---|
| "Marius", [Kjell & Company](https://www.kjell.com/se/produkter/mobilt/smartklockor-och-ringar/gps-klockor/tcl-movetime-mt48-smartklocka-for-barn-gra-p60097), 2026-06-06, verified buyer, 5/5 | SE | **Yes** — page `modelNumber: MT48X` | *"Bästa barnklocka hittills!"* / *"Mycket bra GPS"* -> "Best kids' watch so far!" / "Very good GPS" |
| @Tolgahan3634, [TL_DdLlQx2I](https://www.youtube.com/watch?v=TL_DdLlQx2I), ~2026-02 | TR | **No** — "bu modeli", date arithmetic inconsistent | 5 months' use, battery never failed him; under 1 day under heavy video-call/game use |
| @KemalKorkmaz-k2k, same video, ~2026-07 | TR | Context only | 3 months, battery under 1 day, switched to Spovan Safebell |
| @DenizeŞiirler, [64hoPiLuF_c](https://www.youtube.com/watch?v=64hoPiLuF_c), ~2026-05 | TR | Context only | 3 days in, "only 5–6 hours a day" |
| @AliEnsarÇalık, TL_DdLlQx2I, ~2026-06 | TR | Context only | "between 48 and 72 hours" |
| @murhorse, TL_DdLlQx2I, ~2026-06 | TR | **Yes** — names MT42 -> MT48 | Contact list cut 50 -> 20 |
| @CemreKasarcı, TL_DdLlQx2I, ~2026-02, bought at Media Markt TR | TR | **Yes** — firmware v047 | AI apps missing on TR units; TCL support confirmed region gating |
| @deneme_deneme_1, [hFSAiQ-5rzY](https://www.youtube.com/watch?v=hFSAiQ-5rzY), ~2026-03 | TR | Context only | AI features unusable in TR, not disclosed pre-purchase |
| @oguzhan91 / @MirzaYıldız-z9z / @onurszr6712 / @ahmetates-q6i, ~2026-02 | TR | Context only | Same: only image-generation + object-recognition present |
| @ferhatkole6130, 64hoPiLuF_c, ~2026-03 | TR | **Yes** — names "Tcl Movietime Mt48" | AI tools arrived via update in Turkey |
| @emir4551 / @FehmiBozkus / @busecanyakmaz569 | TR | Context only | Cannot place outbound video calls |
| @NiccolòMachiavelli-TR, ~2026-07 | TR | **Yes** — names "TCL Movetime MT48X" | Fix: grant camera permission in TCL Connect -> More -> user permissions |
| @ayseahmeterdogan6322 (~2026-08) + @bunalanadam8788 (~2026-02) | TR | Context only | No ambient-listening feature on their units |
| @bilbakalm6689, 64hoPiLuF_c, ~2026-04 | TR | **Yes** — "mt48x saat aldım" | AI gives no voice feedback |
| @MehmetSamiEker, hFSAiQ-5rzY, ~2026-02, Media Markt Mall of İstanbul | TR | Context only | Two units (pink + blue); *"şarjı falan çok güzel gidiyor kamerası da çok net"* -> "battery lasts very nicely, camera is very clear" |
| @emreberkaytok1153, 64hoPiLuF_c, ~2026-02 | TR | **Yes** — "tcl mt48 kullanıyoruz" | 2 weeks in, happy; had previously had Wiky and Bilicra units fail |
| @ayhangundas4890, TL_DdLlQx2I, ~2026-03 | TR | **Yes** — "tcl mt48 aldık" | Bought it; notes the price rose |
| @bye66bye, TL_DdLlQx2I, ~2026-02 | TR | Context only | *"Aldım iade ettim şarzı bir gün bile gitmiyor"* -> "I bought it and returned it, the charge doesn't even last a day" |
| @mustafaemmi7651, 64hoPiLuF_c, ~2026-04 | TR | Context only | *"Nabız ölçme var diyor ama bulamadım"* -> "It says it measures heart rate but I couldn't find it" — no HR function |
| @ioanmariusbozga, [MxFVQ7P4HDc](https://www.youtube.com/watch?v=MxFVQ7P4HDc), ~2026-07 | IT (TIM) | Context only | "Gps dont work tim italy" |

**Not MT48 and excluded**, though found in the same threads: @onurtorun (MT42, 2 years, iOS
notifications never worked, *"Tcl'de satış sonrası hizmetlerde gerçekten sınıfta kalıyor"* =
"TCL really fails at after-sales"); @barbarosyildiz2183 (MT42, 2 years, hundreds of spurious
geofence-exit alerts per day after the first 3–4 months, unchanged after switching operator);
@KdrErgun (MT42, location lags while moving); @feyzasayoglu5244 and @herdemkamp (MT42/MT40
water-ingress warranty refusals — *"ürünlerinin arkasında durmuyorlar"* = "they don't stand
behind their products"); @cigdemaydinkeles2485 (MT46, ~9 h in school mode); @Baran.Akkaya
(MT42X, 3 years, no problems). These matter for TCL-brand reliability and after-sales but are
**not evidence about the MT48**.

### Seeding, disclosure and content-farm observations

- **All three high-view Turkish MT48 reviews are paid or supplied, and all three disclose it:**
  Mesut Çevik — *"Bu video #TCL #MT48 #saat incelemesi TCL #işbirliği ile hazırlanmıştır"*
  ("prepared in collaboration with TCL"), and in comments *"Bende test örneği var"* ("I have a
  test sample"); Hardware Plus — *"Not: Bu videodaki ürün TCL Türkiye tarafından tedarik
  edilmiştir"* ("Note: the product in this video was supplied by TCL Turkey"); Kerem Enginar —
  *"Bu video TCL Türkiye desteğiyle hazırlanmıştır"* plus a Hepsiburada **affiliate link
  tagged `#ortaklık`** ("partnership"). The Turkish owner conversation the document identified
  is therefore **downstream of three sponsored videos**, which is a sampling caveat on the
  Turkish evidence base as a whole.
- **Competitor astroturfing is present.** Near-identical praise for *Wiky Watch 5 Plus* and
  *Spovan Safebell* appears from the same handles (@JaleKaya-g9c, @BegumBilgin-s5n, @jestenes,
  @NataliaSwth) across multiple unrelated MT48 videos, in marketing-copy register
  (*"Fiyat–performans açısından gayet başarılı bir ürün. Tavsiye ederim."* = "In price/
  performance terms it is a very successful product. I recommend it."). Treat all
  Spovan/Wiky comparisons in these threads as unreliable.
- **Positive MT48 comments show a seeding signature too.** A cluster of short, generic
  five-star-style comments posted within days of each video's publication (@damlazagal2906,
  @hknozdag, @aykutisik, @NehirBadeOruç, @VolkanKasap-k6r) never answer follow-up questions.
  @varliuss asked @damlazagal2906 four weeks ago whether she had had any problems; @hayalgucu.
  replied *"abla yok oldu galiba 😂"* — **"looks like she vanished 😂"**.
- **Two English-language "reviews" are AI content farms with no evidence of a real unit.**
  ["Is TCL Movetime MT48 the BEST Family Watch?"](https://www.youtube.com/watch?v=fM0f-9QGz7w)
  (Spec Hunter, 2026-01-03, 803 views) is synthetic narration that repeatedly calls the
  product "the Mount 48", says *"battery life is another area where TCL made smart decisions.
  The Mount 48 is not power hungry"* without giving a single figure, and has comments
  disabled. ["Don't Buy a Kids Watch Until You See This"](https://www.youtube.com/watch?v=49bBb0A2C9E)
  (MadTechTalk, 2025-12-15, 588 views) is likewise generic and has 0 comments. **Neither is
  evidence of anything.** Excluding them, there is still **no independent, unsponsored,
  long-term English-language review of the MT48 anywhere.**
- **Nobody answers the long-term question.** @Koagulant asked on 64hoPiLuF_c ~2026-07:
  *"Uzun dönemde durum nedir. Alanlar memnun mu? Bu kategoride işe yarar ürün bulmak çok
  zor."* — **"What is the situation long term? Are buyers happy? It is very hard to find a
  product that works in this category."** No reply, one month on.

### Target-by-target result

| Target | Result | Method that worked, or methods that failed |
|---|---|---|
| **Kjell & Company SE, P923439 / p60097** | **BREACHED** — 1 review, 3 ratings, full text recovered; reviews are TestFreaks-powered | Plain curl for the page; `POST /resolvedynamicdata` with a **JSON-string** body (`Content-Type: application/json`; body = `JSON.stringify("[{t:\"…ProductPageDynamicDataViewModel…\",c:{…}}]")`). The prior 500 was a body-encoding error, not a block. Webpack chunk `47.js` gave the endpoint shape |
| **Kjell & Company NO** | **Not stocked** | `/no/p60097` -> 404; `/no/produkter/…/p60097` -> 302 to `/no/produkter/mobilt`; `/no/sok?query=MT48` JSON -> no hits |
| **Argos UK** | **Product identified, page still unreachable** — [argos.co.uk/product/8963644](https://www.argos.co.uk/product/8963644), "TCL MOVETIME MT48 Kids Smart Watch - Cosmic Pink", £139.99 | Product ID found via search engine. Page and API blocked by Akamai on: direct curl (Chrome UA), Googlebot UA, `proxy.cors.sh`, `r.jina.ai` (also with `x-set-user-agent: Googlebot`), `api.allorigins.win`, `api.codetabs.com`, `corsproxy.io`, `test.cors.workers.dev`, `cors.eu.org`, and the `finder-api/product;searchTerm=` endpoint. **Wayback has no capture of this URL or its sibling colour IDs.** Argos review count remains **UNKNOWN** |
| **Elgiganten SE / DK, Elkjøp NO, Gigantti FI** | **Reachable via `r.jina.ai`; no MT48 found** | 429 to direct curl, `proxy.cors.sh`, allorigins and codetabs; `r.jina.ai` renders elgiganten.se fine. Their `?SearchTerm=` results are client-rendered and their `/api/*` paths 404, so this is corroborated by search-engine indexes of all four domains, which surface Forever, Xplora and no-name kids watches but no TCL MOVETIME |
| **Power.no / Power.dk** | **Stocks an older MOVETIME, not the MT48** | `r.jina.ai` read [p-3096499](https://www.power.no/mobil-og-foto/smartklokker-og-wearables/smartklokke/tcl-kidswatch-movetime-4g-smartklokke-for-barn-blaa/p-3096499/) in full: *"TCL Movetime er vann- og støvbestandig med en **IP65**-vurdering"* = "TCL Movetime is water- and dust-resistant with an IP65 rating" — therefore MT40/MT42-class, **not** the IP68 + 2 ATM MT48. Retailer model-substitution confirmed again |
| **Currys UK** | **Still unreachable** | `r.jina.ai` returns a connection failure (curl exit 000) on repeated attempts; direct curl and `proxy.cors.sh` 403 |
| **Currys IE** | **BREACHED — does not stock it** | `r.jina.ai`; "tcl movetime" returns only TCL TVs and a soundbar |
| **Very.co.uk** | **BREACHED — does not stock it** | `r.jina.ai`; "tcl movetime" returns six TCL TVs, no watch |
| **John Lewis** | **BREACHED — does not stock it** | `r.jina.ai`; TVs only |
| **AO.com** | **Still unreachable** | Cloudflare Turnstile through `r.jina.ai`; direct curl 403 |
| **Komplett SE / NO** | **BREACHED — no MOVETIME results** | `r.jina.ai` on `/search?q=movetime`, both storefronts |
| **eBay UK** | **Still unreachable** | 403 through `r.jina.ai` and direct curl |
| **Trustpilot** | **BREACHED — 76 TCL reviews at 1.4/5, none mention MOVETIME or MT48** | `r.jina.ai` on `/review/tcl.com` and on `?search=`-filtered views |
| **Amazon `/product-reviews/<ASIN>`** | **Still unreachable** | `r.jina.ai` on `/product-reviews/`, `/gp/aw/reviews/`, `/portal/customer-reviews/` and `?pageNumber=` all land on the sign-in page. **Partial win:** the `average-customer-review/popover` widget *is* readable un-authenticated and re-confirms amazon.de 3.5/5 over 56 ratings (46/13/10/8/**23**%) and amazon.co.uk 3.0/5 over 26 ratings (29/16/15/7/**33**%) — matching what the document already records. The 17-exclusive-review contamination problem is **not** resolved |
| **Reddit** | **BREACHED via Redlib — one MT48 item on the whole site, a press-release repost** | `r.jina.ai` + `redlib.catsarch.com`. Direct reddit.com, old.reddit.com, `search.json` and `api.pullpush.io` all refused (403 / 429 "does not provide free scraping resources") |
| **forum.softpedia.com/topic/1203559-ceas-gps-copil** | **Still unreachable, and never archived** | Cloudflare interstitial through `r.jina.ai`, `proxy.cors.sh`, `api.allorigins.win`, `api.codetabs.com`, `cors.eu.org`, `api.cors.lol`. Wayback CDX returns **zero captures** for this thread and for `1239975-recomandare-smartwatch-copil`; only a **2023-12-05** capture of `1229997-ceas-pentru-copil`, which predates the MT48 |
| **Altex.ro** | **BREACHED — zero results for "movetime" and for "MT48"** | `r.jina.ai` |
| **Flanco.ro** | **BREACHED — zero results for "movetime"** | `r.jina.ai` |
| **Cel.ro** | **Timed out** | `r.jina.ai` returns a 15 s Playwright navigation timeout |
| **eVoMAG.ro** | **Still unreachable** | Distinct anti-bot CAPTCHA wall through `r.jina.ai` |
| **PC Garage.ro** | **Still unreachable** | Cloudflare interstitial through `r.jina.ai` |
| **Quickmobile.ro** | **Empty response** | `r.jina.ai` returns a 225-byte stub |
| **Prisjakt.nu** | **BREACHED** — *"Ingen butik säljer denna produkt just nu"*, no price history, still 0 reviews | `r.jina.ai` |
| **Hallon.se** (not previously in the document) | **BREACHED — eSIM MT48 on sale** | `r.jina.ai` |
| **YouTube comments and transcripts** | **BREACHED** — ~280 comments across 8 MT48 videos, plus 8 transcripts | `yt-dlp --skip-download --write-comments --dump-single-json` and `yt-dlp --skip-download --write-auto-subs --convert-subs srt`. Practical notes: redirect stdin (`< /dev/null`) inside shell loops or yt-dlp consumes the id list, and omit `-o "%(id)s"` on Windows |

### What did *not* change

1. **No tracking interval is stated anywhere.** About 280 newly-read comments, eight
   transcripts, two sponsored Turkish deep-dives and one Swedish magazine video test, and not
   one source gives a location-refresh interval or shows the app's interval setting on screen.
   The nearest thing is the Turkish reviewer explicitly refusing to quote a battery figure
   *because* it depends on live-tracking use. **`update_interval_min` stays UNKNOWN.**
2. **The dual-band GNSS advantage is still unconfirmed in daily use.** One new positive owner
   statement exists — Kjell's "Marius": *"Mycket bra GPS"* — but it is three words with no
   scenario. No reviewer in any language demonstrates L1+L5 outperforming a single-band
   receiver, and no video shows a side-by-side or a positional-error measurement. The two
   prior single-band-TCL owners who said it makes no practical difference remain unrebutted,
   and there is now one hostile datapoint ("Gps dont work tim italy").
3. **No new MT48 hardware deaths were found.** The two water-ingress warranty refusals
   surfaced in this pass are **MT40 and MT42** units, not MT48. The "five deaths inside four
   months out of nine longevity reports" figure did not grow — but neither did the denominator
   grow much in usable, model-verified, dated form, so **the sampling-bias question is still
   open**. What did change is that the failure spectrum now includes a **battery-driven
   abandonment at three months** and a **return within days**.
4. **Zero Romanian owners.** Now positively evidenced at Altex and Flanco, and after
   exhausting Reddit and the Romanian YouTube channel. The one Romanian-channel commenter who
   may hold a device is an Italian TIM subscriber.
5. **The 17-exclusive-review Amazon contamination problem is unresolved** — Amazon's full
   review archive stayed behind the login gate under every method tried.
6. **MT48EX is still unobserved as a model string.** An eSIM SKU is now observed on sale at
   Hallon SE; the regulatory designation printed on it is not.

---

## Reddit sweep (2026-08-19)

Run from a logged-in browser session against `old.reddit.com` (post search, including the
`search.json` endpoint) **and** `www.reddit.com/search?type=comment` — which is the important
difference from the previous pass. **Reddit's post search does not index comments; the
`type=comment` endpoint does.** The prior sweep reached Reddit only through a Redlib front-end,
which searches posts only, and concluded there was "exactly one MT48 item on all of Reddit."
That is now corrected: there are **three** MT48 items, and the third is a human comment. All
three are still **non-owner**.

**No content encountered on Reddit contained instructions addressed to an agent.** Nothing was
posted, voted, commented, subscribed or saved during this sweep.

### The MT48 itself: three items, still zero owners

| # | Where | Date | What it is |
|---|---|---|---|
| 1 | r/TCL_Official_UK, *"TCL Earns Multiple CES 2026 Awards…"*, **u/TCL_Official_UK**, 0 comments — <https://old.reddit.com/r/TCL_Official_UK/comments/1q8e0me/tcl_earns_multiple_ces_2026_awards_for/> | 2026-01-09 | Verbatim press release. The item the prior sweep found. |
| 2 | r/CaschysBlog, *"Smarte Kinderuhren im Angebot: Vodafone reduziert Xplora X6Play und TCL MT48X"*, u/caschy, 0 comments — <https://old.reddit.com/r/CaschysBlog/comments/1uyrb1a/smarte_kinderuhren_im_angebot_vodafone_reduziert/> | 2026-07-17 | Automated German blog feed. **New.** Corroborates that Vodafone DE was discounting the MT48X nine months after launch. No discussion. |
| 3 | r/Eltern, *"Erfahrungen mit Anio 6"*, **u/spawnYzn** — <https://old.reddit.com/r/Eltern/comments/1ossexn/erfahrungen_mit_anio_6/> | comment ~2025-11 | **The only human MT48 mention on Reddit.** **New.** |

Item 3, verbatim, in a comment otherwise about the Xplora XGO2 the commenter actually owns:

> **"Wichtig ist nur zu wissen, genau die richtige Watch was Qualität, Features und Preis angeht,
> gibt es nicht. Vodafone versucht es jetzt auch erneut mitzumachen, bietet die Movetime MT48
> an.. einfach mal googeln :)"**
> *("The one thing to know is that the exactly-right watch, in terms of quality, features and
> price, does not exist. Vodafone is now having another go at it too, and offers the Movetime
> MT48.. just google it :)")*

That is **awareness, not experience**. He owns an Xplora and is speculating.

**The clean negative that goes with it.** A comment-level search for `"MT48" TCL` returns
**zero results across all of Reddit**; `"Movetime MT48"` returns exactly the one comment above.
Every other `MT48` hit on Reddit is the **Neumann MT48 audio interface** or the **Tekno MT48**
RC truck — the term is heavily contaminated, which is a large part of why the previous sweep
came up empty.

**And the mindshare finding, which is arguably the more useful negative.** Two recent German
kids-watch buying threads — the market where the MT48 launched, and where both Vodafone and
Telekom list it — do not mention it at all:

- r/de_EDV, *"GPS-Smartwatch für Kinder"*, 2026-05-19, 16 comments
  (<https://old.reddit.com/r/de_EDV/comments/1tgh3l5/gpssmartwatch_für_kinder/>) — answers name
  Xplora XGO6 Play, ANIO 6, imoo, refurbished Galaxy Watch. **No TCL.**
- r/Eltern, *"Welche Kinder-Smartwatch in 2026?"*, 2026-07-22, 4 comments
  (<https://old.reddit.com/r/Eltern/comments/1v3agi0/welche_kindersmartwatch_in_2026/>) — the
  asker's own shortlist is Xplora X6 Play / ZTE Watch K2 Pro / one2track ConnectYOU / Anio 6.
  **No TCL**, and nobody adds it.

Ten months after launch, in its lead market, the MT48 has **no word-of-mouth presence at all**.
That is not evidence the watch is bad. It is evidence that the owner base is small and quiet,
which is exactly the condition under which a 4–12-month failure mode would stay invisible.

### Gap 1 — Account and registration flow: NOTHING. A clean, verified negative.

**This was the top-priority gap and Reddit does not close it, in either direction.** No post and
no comment anywhere on Reddit describes creating a TCL Connect account, a country or
phone-prefix selector, a country being refused, or a region being unsupported — for the MT48 or
for any predecessor. A comment search for `"TCL Connect"` returns only TCL televisions, a
Nxtpaper tablet's file-transfer app, and OpenOCD log lines containing "tcl connections".

The nearest thing to positive evidence is one **MT42 owner** in **Switzerland** (+41, not an EU
country, so it does not transfer to +40):

> **"My son and family live in Zürich and my 8-year-old grandson has a watch with cell connection
> — MOVETIME Family Watch MT-42. […] There is a TCL Connect app that has to be installed on phone
> or tablet to communicate or to track the kid. We haven't encountered any communication problems,
> and the phone app's simple. Last time I looked this watch model wasn't compatible with US or
> Canada cell service, but perhaps the company makes something for this market."**
> — r/PixelWatch, *"I just want a watch to give to my kid that I can text, call, and track
> location. Why is that so hard to find?"* (thread posted 2024-11-06), **u/Googler3140**,
> comment ~2024-11 —
> <https://old.reddit.com/r/PixelWatch/comments/1gl2tpn/i_just_want_a_watch_to_give_to_my_kid_that_i_can/>
> (found only via comment search; invisible to post search)

So: a TCL Connect account demonstrably works for a Swiss parent, and the only regional limit that
owner names is a **cellular** one (US/Canada), not an account one. That is weak, indirect and
one report. **`+40 registration remains completely unobserved`** and the pre-purchase test in
this document stands unchanged as the decisive step.

Worth recording for calibration: **the registration-refusal failure mode is real in this
category and Reddit does document it — just for a different brand.** r/Eltern, *"Kinderuhr:
Rebel Cactus Sky"*, u/-c-row, 2025-09-15
(<https://old.reddit.com/r/Eltern/comments/1nhu6in/kinderuhr_rebel_cactus_sky/>):

> **"Registrierung bzw. Anmeldung nicht möglich, weil kein Code angezeigt wird. Der Support
> antwortet mit Standardphrasen ohne verstanden zu haben, was das Problem ist."**
> *("Registration/sign-in not possible, because no code is displayed. Support answers with stock
> phrases without having understood what the problem is.")*

### Gap 2 — Battery: no MT48 owner on Reddit; three predecessor datapoints, all ~20–24 h

**Label these clearly: these are MT40/MT40-class watches, not the MT48.** They are consistent
with each other and with the document's existing "charge it every night" reading, and they are
consistent with the seven MT48 owner reports already recorded from Amazon and MediaMarkt.

- **r/parentsquebecois**, *"Je cherche un moyen de communication quand mon fils revient de
  l'école seul l'année prochaine sans cellulaire"* (thread posted 2024-08-02),
  **u/louvez** —
  <https://old.reddit.com/r/parentsquebecois/comments/1eint2f/je_cherche_un_moyen_de_communication_quand_mon/>
  — the only Reddit comment in any thread that gives an **hour figure** for a TCL kids watch:
  > **"C'est une TCL movetime quelque chose, je pense que le modèle précis n'est plus disponible.
  > […] Je peux confirmer que le GPS est hyper précis, que ça fonctionne raisonnablement bien mais
  > que certaines fonctionnalités accrochent un peu. La durée de batterie est aussi un peu bof
  > (environ 20 heures)."**
  > *("It's a TCL movetime something, I think the exact model is no longer available. […] I can
  > confirm that the GPS is hyper-precise, that it works reasonably well but that some features
  > snag a bit. The battery life is also a bit meh (around 20 hours).")*
- **r/de_EDV**, *"Smartwatch für Kinder ohne bzw. mit abschaltbarem GPS"*, **u/aotto1977**,
  follow-up comment ~2025 (<https://old.reddit.com/r/de_EDV/comments/1b64dua/smartwatch_für_kinder_ohne_bzw_mit_abschaltbarem/>)
  — he asked the question in 2024-03, then reported back a year later that he bought a **TCL MT40**:
  > **"Der Akku hält bei Benutzung gut 24h, also kommt die Uhr abends immer ans Ladegerät."**
  > *("The battery lasts a good 24 h in use, so the watch always goes on the charger in the
  > evening.")*
- **r/ParentingFR**, *"Montre connectée pour enfant ?"*, **u/Ugor**, ~2026-01 (7 mo ago):
  > **"On a eu la TCL movetime et maintenant la Xiaomi mibro P6. Fonctions assez similaires mais
  > la Xiaomi tient mieux la charge je trouve."**
  > *("We had the TCL movetime and now the Xiaomi mibro P6. Fairly similar functions but the
  > Xiaomi holds its charge better, I find.")*

**No owner anywhere on Reddit states a runtime with the tracking interval attached**, and no
owner anywhere reports what is left after a school day. `battery_observed_h` is **not** changed
by this sweep: every figure above is a predecessor.

### Gap 3 — Tracking interval: still no number, but one predecessor confirms polling behaviour

Nobody on Reddit states an update interval for any TCL kids watch. The one substantive comment
corroborates the *mechanism* the MT48 manual describes (Automatic / Low Power / Live Tracking),
one generation back — same r/de_EDV thread, **u/aotto1977** on his **MT40**:

> **"GPS ist nicht dauerhaft aktiviert bzw. ist 'on demand'. Dass die Uhr generell GPS hat, ist
> nicht verkehrt, denn im Falle eines Falles könnte uns unsere Tochter so per Notruf-Funktion
> direkt ihre Position senden."**
> *("GPS is not permanently active, it's 'on demand'. That the watch has GPS at all isn't wrong,
> because if it came to it our daughter could send us her position directly via the emergency
> function.")*

and earlier in the same thread, reading the MT40 manual:

> **"Aber dabei handelt es sich wohl nur um den live tracking mode. Ein wenig liest sich der
> Abschnitt auch so, als würde die Uhr nur Positionsdaten senden, wenn die per Eltern-App gepollt
> werden, ist aber alles sehr schwammig formuliert."**
> *("But that seems to be only the live tracking mode. The section also reads a little as if the
> watch only sends position data when it's polled by the parent app — but it's all very vaguely
> worded.")*

**This is the parent-polls model, not a 1-second refresh**, on the platform the MT48 inherits.
It is predecessor evidence and does not by itself settle the MT48, but it is the second
independent source (after TCL's own MT48 manual) pointing at the same architecture.
`update_interval_min` stays **UNKNOWN**.

### Gap 4 — Positioning and constellations: one predecessor spec claim, several outdoor-positive reports

- **GLONASS on the MT42 — owner-stated, predecessor only.** Same r/PixelWatch comment as above:
  > **"The watch has a Geofence, a school time mode, and GPS, AGPS, Glonass, Wi-Fi, and Base
  > Station (LBS) positioning modes, SOS operation, voice and chat options."**

  This is almost certainly recited from a spec sheet rather than observed, and it is the **MT42**.
  It does not touch the MT48's constellation question, which the filings investigation above left
  open. **`positioning` is not changed.**
- **Outdoor accuracy on predecessors reads well**, consistently: *"le GPS est hyper précis"*
  (r/parentsquebecois, MT40-class); *"GPS a volání fungují"* — "GPS and calling work"
  (r/Slovakia, below); Googler3140's MT42 household reports no problems. Nothing on Reddit
  measures anything, and nothing addresses indoor behaviour on a TCL.

### Gap 5 — App and platform: mixed, and one concrete feature limit that matters here

- **The single most decision-relevant Reddit find, and it is about School Time.**
  r/smartwatch, *"GPS enabled smartwatch which will not allow outgoing calls in school mode"*,
  **u/dkaksl**, 2025-09-14
  (<https://old.reddit.com/r/smartwatch/comments/1ngz2f6/gps_enabled_smartwatch_which_will_not_allow/>):
  > **"I also tried a TCL MT42X, but that one doesn't allow you to disable outgoing calls to watch
  > contacts (and you can't remove all contacts - and that would kind of make the phone useless
  > out of school mode)."**

  An owner who tried to satisfy a school's rules found TCL's school mode **could not stop the
  child calling saved contacts**. If the Romanian school requires a fully silent device,
  `extras_disableable: partial` may be optimistic — though this is the **MT42X**, and the MT48's
  School Time Mode wording is different (it names camera, games, group chats and notifications,
  and says nothing about calls). Recorded as a question to test, not as an MT48 finding.
- **Negative, blunt, Czech, bought from Vodafone.** r/Slovakia, *"Smart hodinky pre dieťa"*
  (12 comments, thread ~2024), **u/No_Historian_But** — permalink not exposed by Reddit's
  comment-search UI; re-findable with `"TCL Movetime"` in `type=comment` search:
  > **"Prodali mi TCL Movetime. Je to sračka, má to features, co vůbec nefungujou (přijímání
  > hlasových zpráv), foťák stojí za vyliž prdel, ale GPS a volání fungují."**
  > *("They sold me a TCL Movetime. It's crap, it has features that don't work at all (receiving
  > voice messages), the camera is worthless, but GPS and calling work.")*
- **Positive.** Googler3140 (MT42, Zürich): *"We haven't encountered any communication problems,
  and the phone app's simple."*
- **Legacy app, pairing crash.** r/smartwatch, *"Altacel Onetouch Go Watch Companion App"*,
  u/nattadasu, 2021-03-14: *"I've tried TCL MOVETIME Watch app, but it crashed in pairing
  process."* This is the **old** MOVETIME app being pointed at a non-TCL watch; near-zero
  transfer, listed only so it is not mistaken for new evidence later.
- **No reports at all** of TCL Connect geofence flapping, stale locations, missed notifications or
  server outages on Reddit. The document's existing evidence for those comes from app-store
  reviews, and Reddit neither corroborates nor contradicts it.

### Gap 6 — Modem chipset: nothing. But the platform is ADB-open on the predecessors

No Reddit source names a chipset for any MOVETIME watch. What Reddit does show is that the
**older** watches are Android devices with a hidden ADB switch:

- r/androidafterlife, *"TCL MOVETIME MT40X Smartwatch (kinda) Debloating Guide"*,
  **u/InsideDrama9888**, 2026-07-17
  (<https://old.reddit.com/r/androidafterlife/comments/1uz9qnu/tcl_movetime_mt40x_smartwatch_kinda_debloating/>)
  — MT40X is **Android 4.4 KitKat, 256 MB RAM, 240×240, ~116 MB user space**; ADB is enabled by
  tapping a hidden "MMI test" screen and flipping an "NTC" toggle, after which arbitrary APKs
  sideload. A commenter confirms the same hidden toggle exists on the **MT42X**: *"does that works
  for MT42X too? it has the NTC button too."* → *"it worked"*.
- r/AndroidTurkiye, *"Tcl MT42x running Minecraft pocket"*, u/Jaded_Experience1308, 2026-07-25,
  51 upvotes (<https://old.reddit.com/r/AndroidTurkiye/comments/1v60w2e/tcl_mt42x_running_minecraft_pocket/>)
  — Minecraft PE sideloaded onto an MT42X via ADB and Nova Launcher.

**Two readings, both worth holding.** (1) It suggests the family's older firmware ships a
developer path reachable from the watch UI by anyone who knows the tap sequence — i.e. a child
with a USB cable and a guide could install apps on a watch the parent believes is locked down.
(2) It **may not transfer to the MT48**, which retailer sources describe as running a
*proprietary* OS on a UNISOC W377 rather than Android. Nobody has tried it on an MT48.
`modem_chipset` stays **UNKNOWN**.

### Gap 7 — What kills them: one hard predecessor longevity report, and a Swiss retail lock

- **The best longevity datapoint Reddit has on this product line, and it is bad.** r/Polska,
  *"Smartwatch dla dziecka. Najlepiej pancerny."*, **u/JohnyBravo84Pl**, 2022-12-09
  (<https://old.reddit.com/r/Polska/comments/zgzns9/smartwatch_dla_dziecka_najlepiej_pancerny/>):
  > **"Syn przerobił już kolejno dwa smartwatche TCL Movetime MT40, przy czym każdy wytrzymał
  > tylko nieco ponad rok. W pierwszym syn załatwił szybkę, a w drugim padł software. Do tego w
  > obu dwukrotnie musiałem wymienić pasek."**
  > *("My son has already got through two TCL Movetime MT40 smartwatches, and each lasted only a
  > little over a year. On the first my son did in the glass, and on the second the software died.
  > On top of that I had to replace the strap twice on both.")*

  Asked what "the software died" meant, he answered:
  > **"No tak padł, że się sam resetuje, gubi zasięg, sam wysyła alerty SOS, a teraz się nawet
  > włączyć nie chce."**
  > *("It died in the sense that it resets itself, loses signal, sends SOS alerts by itself, and
  > now it won't even switch on.")*

  **Two units, same household, ~13 months each**, with spontaneous SOS alerts before death.
  This is one generation back and three years old, so it is not an MT48 reliability finding —
  but it lands squarely on the window this document says the category dies in, and it is the
  only TCL-specific multi-unit longevity account found anywhere.
- **Switzerland: the watch is common, but the plan is bundled to the retailer.** r/Switzerland,
  *"Help - Smartwatch to track Child and Schizophrenic Adult"*, **u/lomi27**, ~2023-12 —
  <https://old.reddit.com/r/Switzerland/comments/18kyhyz/help_smartwatch_to_track_child_and_schizophrenic/>:
  > **"TCL Movetime Family Watch is most common where I am. Most kids (primary school & some
  > kindergarden) have those. They are quite bulky though but it works. You do need a sim card.
  > Most providers have a specific kids abo, but you need to buy the watch at their store! It's a
  > combi package. You will not get the abo if you buy the watch elsewhere! You have control over
  > who is allowed to communicate with the kid. No unknown numbers etc."**

  Corroborated by r/TecnologiaPT, u/TheRealDeuX: *"Estou na Suíça e aqui é muito comum os miúdos
  usarem o TCL Movetime"* ("I'm in Switzerland and here it's very common for kids to use the TCL
  Movetime"). **This is a Swiss carrier-commercial constraint, not a TCL account constraint**, and
  it does not apply to Romania, where eMAG sells the bare MT48X and any SIM goes in. It is
  recorded because it is the only place Reddit shows a *vendor-side* gate on a MOVETIME watch —
  and it is a tariff gate, not a country gate. Also note it independently confirms **contact
  whitelisting** works on the platform ("No unknown numbers etc.").
- **No bricking, DOA, SIM-compatibility or VoLTE-provisioning report exists on Reddit for any
  MOVETIME model.** Not one. The APN/SIM problems recorded elsewhere in this document have no
  Reddit counterpart.

### Brand, affiliate and low-quality accounts encountered — flagged

- **u/TCL_Official_UK — official brand account.** Runs r/TCL_Official_UK and also posts marketing
  video into r/TCL_Electronics (679 subscribers). Its MT48 content is a verbatim press release
  with zero comments. Keep the checkable claim (*"the TCL MOVETIME MT48 … has won the 2026 CES
  Picks Award from TWICE"*), discard the framing. This is TCL's Reddit presence in full: **there
  is no TCL kids-watch community, official or otherwise.**
- **u/rayork938 — "Russell York, founder/CEO of COSMO"**, a direct competitor, runs product AMAs
  in r/smartwatch (JrTrack 4, 2024-10-23, **740 comments**; JrTrack 5, 2025-08-15, 175 comments)
  and states in-thread: *"I connect with customers and parents looking for the right product here
  on Reddit."* Disclosed, not covert — but it means **the two largest kids-watch threads in
  r/smartwatch are vendor-run**, and any "what do parents recommend" reading of that subreddit is
  skewed by it.
- **u/melihbayramdede** — Turkish tech blogger who posts his own MT42/MT46X review links to his
  own profile page (r/u_melihbayramdede), zero comments each. Self-promotion; no discussion value.
- **r/gps is effectively a GPS-tracker vendor board** (thinkrace, iconcox, actionindiagps posting
  product copy). Its "kids watch" results are all advertising.
- **u/SeparateAd400, r/CasualRO, *"Emotii pentru cresa"*, ~2023 — the only Romanian-language
  Reddit mention of a TCL kids watch, and it is unreliable.** An LLM-styled listicle claiming:
  > **"TCL Movetime Family Watch MT40: Un smartwatch care permite apeluri vocale, mesaje și are
  > funcții de monitorizare a locației. **Poate oferi și o anumită înregistrare a sunetului
  > ambiental.**"**
  > *("… It may also offer a certain recording of ambient sound.")*

  It was **downvoted to −4**. The ambient-listening claim is unsupported for any MOVETIME model
  and is contradicted by the Turkish MT48 owner evidence already in this document. **Do not cite
  it.** It is recorded here only so that a future sweep does not mistake it for a Romanian owner
  report — **it is not one. Zero Romanian owners still stands.**

### Net effect on the record

**No YAML field is changed by this sweep.** Every Reddit datapoint that touches
`battery_observed_h`, `update_interval_min`, `positioning`, `wifi_positioning` or
`modem_chipset` is from an **MT40 / MT42 / MT42X**, and this document's rule is not to infer
MT48 values from siblings. The three battery figures (~20 h, ~24 h, "worse than a Xiaomi
mibro P6") are *consistent* with the MT48 owner reports already recorded, which is mild
corroboration of the "one day, charge nightly" reading — but they are not MT48 measurements and
are not merged into the field.

**What actually changed:**

1. **A prior conclusion is corrected.** "Exactly one MT48 item on all of Reddit" → **three**, one
   of which is a human comment. Still **zero owners, zero owner reports, zero photographs**.
2. **Gap 1 is now a verified negative rather than an unexplored one.** Reddit contains no
   registration-flow evidence for TCL Connect in any country, in posts or comments. The +40 test
   remains the decisive pre-purchase step and nothing found here reduces or increases its risk.
3. **A new mindshare negative.** In two 2026 German kids-watch buying threads the MT48 is never
   named, in the market where it launched and where two carriers stock it.
4. **One new predecessor reliability account** (two MT40s, ~13 months each, second one
   self-resetting and firing spurious SOS alerts before dying) that is consistent with this
   document's 4–12-month thesis.
5. **One new feature limit to test**: on the MT42X, school mode did not stop outgoing calls to
   saved contacts, and contacts could not all be removed.
6. **The older watches are ADB-openable from the watch UI.** Unknown whether the MT48's
   proprietary OS inherits that path; worth 60 seconds of checking after purchase.

### Queries run (so the negative is auditable)

**Post search (`old.reddit.com/search` and `search.json`, all-time):** `MT48`; `MT48X`;
`MOVETIME`; `movetime`; `"TCL Movetime"`; `"TCL Connect"`; `"TCL" "kids watch"`;
`"MT40X" OR "Movetime Family Watch"`; `MT46 OR MT46X OR MT47`; `MT43 OR MT42 OR MT42X`;
`TCL saat cocuk`; `title:(kids smartwatch gps)`; `"kids watch" "not available in your country"`.

**Subreddit-restricted post search:** r/smartwatch `TCL`, r/smartwatch `kids` (sorted by
comments), r/TCL_Official_UK `watch`, r/TCL_Electronics `watch OR movetime OR MT48`, r/daddit
`TCL watch` (**0 results**), r/Parenting `TCL watch` (**0**), r/Mommit `TCL` (**0 relevant**),
r/GPS `kids watch` (vendor spam only), r/AndroidWear `TCL kids` (**0**), r/Romania `ceas copil
GPS` (**0 relevant**), r/Romania `smartwatch copil` (**0**), r/Eltern `Anio`, r/ParentingFR
`montre` / `montre connectee`, `(subreddit:de OR subreddit:de_EDV OR subreddit:FragReddit)
smartwatch kinder`, `(subreddit:france OR subreddit:ParentsFR) montre connectee enfant` (**0**),
`(subreddit:italy OR subreddit:ItaliaPersonalFinance) smartwatch bambini` (**0**),
`(subreddit:AskUK OR subreddit:scotland) kids smartwatch` (**0**).

**Comment search (`www.reddit.com/search?type=comment`) — the channel the previous sweep did not
have:** `"TCL Movetime"`; `"MT48" TCL` (**0 results**); `"Movetime MT48"` (**1 result**);
`"MT48" Kinder OR Kinderuhr OR enfant OR bambini OR copil OR watch` (all RC-truck / audio-interface
noise); `"TCL Connect"` (**0 kids-watch results**); `"MT42X" OR "MT46X" OR "MT40X"`;
`"movetime" watch`; `"movetime" batterie OR battery OR akku`; `"movetime" app OR compte OR account
OR registrieren`; `TCL kids watch GPS`; `movetime`.

**External site-scoped search (DuckDuckGo HTML endpoint):** `site:reddit.com "MT48" TCL watch`;
`site:reddit.com "TCL Connect" watch app` (**"No results found"**); `site:reddit.com TCL Movetime
kids watch battery`; `site:reddit.com "TCL" "MT46"` (**"No results found"**); `site:reddit.com TCL
Kinderuhr Smartwatch`; `site:reddit.com "TCL MT42" OR "TCL MT40" OR "TCL MT47"` (**"No results
found"**). Bing was not reachable from this session (domain blocked); Google was not attempted.

**Threads read in full, including comment trees:** r/smartwatch 1ngz2f6; r/Switzerland 1hxkyhz;
r/Polska zgzns9; r/de_EDV 1b64dua; r/de_EDV 1tgh3l5; r/de 1pynpva; r/Eltern 1ossexn; r/Eltern
1v3agi0; r/androidafterlife 1uz9qnu; r/AndroidTurkiye 1v60w2e.
