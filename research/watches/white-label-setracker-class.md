---
model:                  Wonlex / SeTracker2 white-label class   # category doc, not a single SKU
brand:                  Wonlex — trading name of Shenzhen YiQingTeng Electronics (ODM).
                        # Sold in Romania under at least: Wingereich, WIRSEN, Techone, MiniWATCH,
                        # NEOVANCE, Evolve-x, Camix, MoreFIT, Tovstore, Abcros, LAGENIO, TehnoTek,
                        # TrackMe, iQuality, LikeSmart, ELYTHEN, NOVOTIM, Qyntech, Medeyatech,
                        # plus retailer house labels Xkids and KidGPS.
release_year:           >-
                        continuous production. SKUs on Romanian shelves in Aug 2026 span the
                        KT2x generation (platform page dated 2021-06-21) to KT42. Per-SKU: UNKNOWN
still_sold:             yes — 119 Wonlex SKUs on eMAG.ro alone, plus 211 SKUs at xkids.ro

# --- Romania verdict (the pass/fail question) ---
ro_status:              verified          # it works. It is disqualified on other grounds.
ro_evidence_tier:       1 + 3 + 4         # RO retailers name RO operators; dozens of dated RO
                                          # first-hand reports; two RO specialist distributors
                                          # with RO phone support and RO warranty
ro_killer:              n/a — but see Verdict. Fails the battery floor on most units, and the
                        platform was demonstrated fully compromised at Black Hat/DEF CON, Aug 2026

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands:              PLATFORM-CAPABLE [B1, B2, B3, B5, B7, B8, B20, B28A] — per-SKU ACTUAL UNKNOWN.
                        # Observed OEM builds on the same chipset:
                        #   KT26S: "FDD-LTE :B1 B2 B3 B5 B7 B8 (Optional: B20 B12 B28A)"
                        #   KT26:  "FDD-LTE: B1 B2 B3 B5 B7 B8"          — no B20
                        #   KT30:  "FDD: Band 1/3/5/8"                   — no B20, no B7, no B28
band_b20:               UNKNOWN — build-time option chosen per production order. See "The B20 lottery"
band_b28:               UNKNOWN — offered as optional B28A. Irrelevant in RO (700 MHz here is 5G NR n28)
volte:                  UNKNOWN per SKU — chipset page states "VOLTE support CSFB support SRLTE support";
                        several RO listings claim VoLTE; no RO operator VoLTE whitelist evidence exists
voice_fallback:         UNKNOWN — claimed volte + 2g-csfb. Unverified on any Romanian network
modem_chipset:          UNISOC SL8521E (8521E), Cat-4, dual-core Cortex-A7 @1.2 GHz.
                        Newer "Android + Google Play" SKUs use an unnamed higher-tier SoC — UNKNOWN

# --- Positioning (the #1 criterion) ---
positioning:            [GPS, AGPS, WiFi, LBS]   # OEM platform page states GPS 22-ch, Wi-Fi, LBS only.
                                                 # GLONASS/Galileo/BeiDou NOT stated
wifi_positioning:       >-
                        true — and it is the dominant mode indoors. Accuracy claims: GPS 5–15 m,
                        LBS 100–1000 m (OEM figures)
update_interval_min:    UNKNOWN — SeTracker2 exposes selectable modes; no published minimum

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:            680–1000 typical. KT26/KT30 680 · KT26S/KT27 900 · WIRSEN 800 ·
                        Wingereich listing 900 · Qyntech GE-31 1000 · Abcros W5 claims 1080
battery_claimed_h:      48 h (Wonlex KT27, OEM) rising to 130–168 h in Romanian retail copy
                        (ELYTHEN 130 h, Techone KT19T 140 h, WIRSEN 168 h, Wingereich 168 h)
battery_observed_h:     ~1 h (worst dated RO report) to 48–60 h (best, and only at
                        "monitoring only + 2–3 calls a day"). Most dated RO reports cluster at 5–24 h
                        with location polling active

# --- App & service ---
app_name:               >-
                        SeTracker2 (com.tgelec.setracker). Some SKUs offer "Wonlex App".
                        Outliers in the same class: Abcros → Me.Watch/Alaaeng; LAGENIO → com.yyt.lagenio
app_android_min:        UNKNOWN
app_ro_playstore:       true
app_last_update:        2026-07 (v3.4.1, released 2026-07-16)
data_region:            >-
                        MIXED — EU compute, Chinese operator. The published "Europe and Africa"
                        server 52.28.132.157 resolves to AWS eu-central-1, Frankfurt, Germany.
                        Platform operator: 3G Electronics / YiQingTeng, Shenzhen, China.
                        User-uploaded photos were found on Alibaba Cloud (Aliyun) buckets (2020 research)

# --- Practical ---
sim:                    nanoSIM (class-typical). eSIM variants exist (Wonlex KT36, KT38) — avoid in RO
water_rating:           IP67 typical; observed range IPX7 / IP67 / IP68 / "1 ATM" by SKU
weight_g:               UNKNOWN — not published by any label in this class
camera:                 true (front camera on nearly all 4G SKUs; some dual-camera)
games:                  true (typically 7 built-in; newer SKUs add Google Play)
extras_disableable:     partial — "school mode" blocks games/apps on a schedule; the covert
                        remote-listen feature has NO documented off switch
price_eur:              ~50–90 EUR (250–450 RON)
buy_from:               eMAG.ro marketplace (RO) · kidgps.ro (RO) · xkids.ro (RO)
price_ro_eur:           n/a — this tier is Romanian-native; Romania is the cheap market, not the dear one
---

## Verdict

This is one Chinese ODM product family wearing eighteen Romanian brand names, and it is the only
tier in this whole research that is *repeatedly and recently proven* to register, call and video-call
on Digi, Orange, Vodafone and Telekom. It clears the network floor and nothing else: battery ranges
from one hour to sixty depending on the unit and the polling rate, hardware death between one and
twelve months is routine, and in August 2026 security researchers took live control of a watch on
this exact platform — camera, microphone and location — from the parent's email address alone.
Buy it as a disposable experiment with a 30-day return, never as the thing that tells you where your
child is.

---

## 1. These are one product family, not competing brands

### The accessory vendor names the OEM

The cleanest proof is an accident of the accessory market. Search eMAG.ro for the "Techone KT20S"
and you get a screen protector whose title is:

> **"Set 4 folii de protectie Antireflex Mata Smart Protection pentru Wonlex KT20S pentru display"**
> *("Set of 4 matte anti-reflective protective films … for the **Wonlex** KT20S display")*
> — eMAG.ro, in stock at 76,27 Lei, verified live 2026-08-19.
> https://www.emag.ro/set-4-folii-de-protectie-antireflex-mata-smart-protection-pentru-wonlex-kt20s-pentru-display-2222184/pd/D6S12ZMBM/

Smart Protection cuts film to a die-line, not to a marketing label. It has no reason to invent a
manufacturer, and every reason to name the one whose bezel dimensions it measured. The watch
Romanian parents buy as a "Techone" is a Wonlex KT20S.

### The Romanian retailer names the OEM out loud

xkids.ro, one of the two Romanian specialist retailers in this tier, tells its own customers which
app to use by manufacturer:

> **"Pentru ceasurile Xkids, Wonlex, Twinkler, YQT recomandam aplicatia SeTracker 2."**
> *("For Xkids, Wonlex, Twinkler and YQT watches we recommend the SeTracker 2 app.")*
> — xkids.ro, verified live 2026-08-19. https://www.xkids.ro/informatii-utile-ceasuri-copii/

Note "YQT". That is YiQingTeng — the Shenzhen manufacturer that security researchers identified in
August 2026 as the company behind both the Wonlex brand and the SeTracker app (see §6). A Romanian
shop lists its own house label, the OEM, and the OEM's corporate name as three interchangeable
things that take the same app, because they are.

### The app package names give the game away

Security researchers presenting at Black Hat and DEF CON in August 2026 pointed out that the
shared lineage is visible in the Play Store itself: unrelated-looking brands ship apps whose package
names share the `com.tgelec` stem. In this research alone that covers `com.tgelec.setracker`
(SeTracker2), `com.tgelec.savefamily` (SaveFamily, Spain) and `com.tgelec.garetts` (Garett Tracker,
Poland). Reported figure: **46 applications carrying 39 brand names on a single SETracker server**,
with Wonlex, SaveFamily, KidiWatch, Garett Kids and Beafon named among them.
— Notebookcheck, 2026-08-14, reporting Solferini & Stykas at DEF CON 34 (2026-08-08).
https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html

### Shared model numbering, shared app, shared spec sheet

- **Model numbers travel between brands unchanged.** Wonlex's own KT-series numbering appears on
  eMAG under other labels: "Techone KT42", "Techone KT19T", "Techone KT18", "TrackMe KT34 Maxi",
  "Techone KT20S", "MoreFIT KT06" — while xkids.ro sells KT24S / KT33 / KT36 / KT37 / KT38 as
  plain "Wonlex". (Discovery sweep of eMAG and xkids.ro, 2026-08-18.)
- **The app is the same.** The eMAG listing for the "TechONE KT19T" states the companion app is
  **"SeTracker 2 sau Wonlex App"** — the reseller offers you the choice between the OEM's app and
  the OEM's other app. Verified live 2026-08-19.
  https://www.emag.ro/ceas-smartwatch-gps-copii-cu-localizare-si-telefon-techonetm-kt19t-1-85-inch-retina-4g-lte-temperatura-apel-video-camera-hd-wi-fi-rezistent-la-apa-ip67-telefon-buton-sos-monitorizare-spion-albastru-kt/pd/DTQYNTYBM/
- **The Wingereich listing** (399,98 Lei, 4.77★/524 reviews) instructs: *"Se va descarca gratuit
  aplicatia SeTracker2 din Magazinul Play (Android) sau App Store (iOS)"*. Verified live 2026-08-19.
- **The WIRSEN listing** (295,00 Lei, 4.47★/159 reviews) names SeTracker 2 throughout its
  description and Q&A. Verified live 2026-08-19.
- **The marketing feature list is copy-pasted.** "Monitorizare spion", "buton SOS", "mod scoala",
  "apel video HD", "IP67", "7 jocuri", "camera HD" recur near-verbatim across Wingereich, WIRSEN,
  Techone, MiniWATCH, Evolve-x, NEOVANCE and Tovstore titles. So do the fictional PRP anchors:
  Medeyatech advertises a 63% discount off 1.196,69 Lei; MiniWATCH 258,99 off 605,00; Techone KT19T
  389,10 off 791,34.

### What this means for a buyer

**Choosing between Wingereich and WIRSEN and Techone and NEOVANCE is choosing between resellers,
not between engineering teams.** There is no Wingereich engineering department. There is a
purchase order placed with Shenzhen, a logo silk-screened on a case, and a Romanian marketplace
account. The consequences are concrete:

1. A good review of "brand X" is weak evidence about the *next* batch of brand X, because the
   reseller can change the underlying SKU without changing the listing.
2. A firmware or cloud fault hits every brand at once. When SeTracker2's servers say
   *"Dispozitivul este oprit"*, they say it to Wingereich, WIRSEN, Techone and MiniWATCH owners
   simultaneously.
3. Conversely, evidence gathered on one label — that it attaches to Digi, that the app accepts a
   +40 number — genuinely does transfer across the class. That is why this tier is useful as a
   *control* for the whole project: it proves the Romanian network is not the problem.

**Named exceptions inside the class.** Abcros W5 runs **Me.Watch / Alaaeng**, not SeTracker2, and
LAGENIO runs its own `com.yyt.lagenio`. These are different clouds on similar hardware — the
hardware lineage still holds, the cloud evidence does not transfer.

---

## 2. The B20 lottery — the most important technical finding in this project

### What the OEM's own pages show

Every device in this class runs the **UNISOC SL8521E**. Wonlex publishes the chipset's radio
capability on its own platform page (dated 2021-06-21):

> FDD: **"B1 B2 B3 B5 B7 B8 B20 B28A"** · GSM: "Band B2 B3 B5 B8" · "4G Data: CAT4" ·
> "VOLTE support CSFB support SRLTE support Video call support" · GPS "5～15 meters",
> LBS "100-1000M"
> — https://www.iwonlex.net/wonlex-4g-kids-watches-work-with-unisoc-8521e/ (fetched 2026-08-19)

So the silicon can do B20. Now look at what actually gets built on it:

| SKU | Band line, quoted verbatim from the OEM/retailer page | B20? |
|---|---|---|
| **KT26S** | `"FDD-LTE :B1 B2 B3 B5 B7 B8 (Optional: B20 B12 B28A)"` | **optional** |
| **KT26** | `"FDD-LTE: B1 B2 B3 B5 B7 B8"` | **no** |
| **KT30** | `"FDD: Band 1/3/5/8  TDD: Band 38/39/40/41"` | **no** (and no B7, no B28) |

Sources, all fetched 2026-08-19:
https://www.iwonlex.net/products/wonlex-2023-newest-android-4g-lte-round-gps-kids-videocall-kids-smartwatch-kt26s/ ·
https://www.iwonlex.net/products/wonlex-round-4g-video-call-gps-smartwatch-kt26/ ·
https://www.dinesaw.com/products/wonlex-4g-gps-wifi-video-calling-kids-smart-watch-kt30

That word — **"Optional"** — is the whole finding. The KT26S page is not a consumer spec sheet; it
is a wholesale page aimed at buyers placing production orders. "Optional: B20" means *tell us at
order time whether you want it, and we will fit it*. The KT26 and KT30, same chipset, same factory,
were built without it.

### In plain Romanian-parent language

> **Two watches can carry the same model number, the same photographs and the same spec table on
> the same eMAG listing, and differ in whether they can hear Orange's low band.**

Romania has shut down 3G. **B20 (800 MHz) is Orange's only sub-1 GHz LTE band.** Low bands are what
penetrate concrete. A wrist antenna is already the worst antenna in consumer electronics — a few
centimetres of metal wrapped in a child's arm. Put a no-B20 unit on an Orange SIM in a 1970s
Romanian school building and the only bands left are B3 (1800 MHz) and B1 (2100 MHz), at cell edge,
through walls. That is precisely the "the watch shows offline during school hours" complaint
pattern, and it is not a fault the retailer will accept as a fault.

Note also that **B28 buys you nothing here**: in Romania the 700 MHz block is 5G NR n28, not LTE
B28. A listing advertising B28 is advertising an irrelevance.

### Why no listing can be trusted on this

Across 60+ models catalogued in this research, **only about five publish LTE bands at all**, and
never on a retail listing — only on a manufacturer spec page. **Not one white-label listing on
eMAG.ro publishes bands.** What they publish instead is worse than nothing:

- Wingereich's own listing says **"4G/3G/LTE"**. There is no 3G in Romania. That string is
  ODM boilerplate carried through untouched.
- Bol.com's category copy for the same class of watch states they "automatically fall back to 3G or
  2G where there is no 4G coverage" — a reassurance that is actively misleading in Romania.

And even a *correct* band list on a listing would not settle it, because the listing describes a
product family, not the unit in the box, and the unit in the box was configured by whoever placed
that production order — a Romanian reseller with no RF engineer on staff, ordering against price.

### The only two real remedies

1. **The CE/RED declaration of conformity (or the RF test report) for that exact SKU.** Under the
   Radio Equipment Directive the EU declaration must accompany the product and must state the
   frequency bands. Ask the seller for it *in writing before paying*, quoting the exact SKU code
   from the listing. Refusal, or a generic DoC covering "4G kids watch", is itself the answer.
2. **An in-hand test inside the return window.** Put an **Orange** SIM in it (Orange is the operator
   for which B20 is decisive), then check the serving band and signal *inside the school building*
   during school hours — not in your garden, not at home. If you cannot read the serving band from
   the watch, the proxy test is: does it stay online and locatable, in the classroom, for a whole
   school day, three days running.

There is no third option. **unverified** for every SKU in this class until one of those two is done.

---

## 3. What actually works — the fair case

This is the tier that proves the Romanian network is not the constraint, and it deserves to be
said plainly.

### It attaches, calls and video-calls on all four Romanian networks

- **Digi**, repeatedly and recently. **Ciprian**, RO, eMAG Q&A, **2 Mar 2026**:
  *"Eu am pus Digi si merge perfect"* — "I put Digi in and it works perfectly."
  **Alin**, RO, **30 Jul 2026**: *"merge pe DIGI"*.
  **Ank**, RO, **2 Aug 2024** (Techone FG41+): *"Functioneaza in reteaua digi, se aude bine, se vede
  bine si la apeluri video"* — "It works on the Digi network, sound is good, video calls look good."
- **Vodafone.** **Szabo Gabriel-Adalbert**, RO, **22 Jun 2026** (Tovstore Y88): *"Conform descrierii,
  folosit cu cartela sim de la Vodafone merge perfect, se aude bine"* — "As described; used with a
  Vodafone SIM it works perfectly, sounds good."
- **Video calling over the operator network and over WhatsApp.** **Raluca Gingu**, RO, **24 Jul 2026**,
  5★ (Wingereich): *"se aude foarte bine in apel normal"*, *"se aude si se vede foarte bine in apel
  video pe whatsapp"*, *"locatie exacta"*, *"aplicatia SeTracker2 functioneaza si se sincronizeaza
  foarte ok cu ceasul"* — "normal calls sound very good; WhatsApp video calls look and sound very
  good; exact location; the SeTracker2 app works and syncs very well with the watch."
- **Real-time tracking working as intended.** **Razvan R**, RO, **27 May 2026**, 5★ (MiniWATCH
  eKiD21): *"E conectat tot timpul la internet, vad locația in timp real si pot suna"* — "It's
  connected to the internet the whole time, I see the location in real time and I can call."
- **A recovered lost watch.** **Roxana Boier**, RO, **5 May 2026**, 5★ (Tovstore Y88):
  *"Localizarea GPS este surprinzător de precisă… am reușit să îl localizez rapid"* — she actually
  found a lost watch in a park using the app. That is the highest-quality proof-of-function anyone
  offered for any device in this entire research.

Re-verified live on 2026-08-19: WIRSEN, Wingereich, Techone KT19T and MiniWATCH listings.
Attribution note: the Ciprian / Ank / Szabo / Roxana Boier / Razvan R quotes are as recorded by the
2026-08-18 discovery sweep from the eMAG product pages cited in §11; I re-rendered the WIRSEN,
Wingereich, Techone and MiniWATCH review streams today and confirmed the reviews quoted in §5.

### The vendors state Romanian operator support explicitly — in writing, in Romanian

Nobody else in this market does this. Not Garmin, not TCL, not Anio, not Xplora.

- **kidgps.ro** (TechOne range, 229–420 lei), verified live 2026-08-19:
  > **"Modelele disponibile pe kidgps.ro sunt compatibile cu Orange, Vodafone, Digi și Telekom."**
  > *("The models available on kidgps.ro are compatible with Orange, Vodafone, Digi and Telekom.")*

  Romanian phone support **0371 781 799**. **"30 zile retur gratuit"** — 30 days free returns, no
  reason required. https://www.kidgps.ro/ · https://www.kidgps.ro/collections/gps-smartwatch-copii
- **xkids.ro** (Wonlex + LAGENIO, 313–499 lei, 211 SKUs), verified live 2026-08-19:
  > **"compatibile cu cele mai cunoscute retele de telefonie mobila din Romania: Orange, Vodafone,
  > Telekom si Digi"**

  Romanian support line **0770 137 131**; many listings bundle a Romanian SIM —
  *"SIM Cadou Vodafone 200 min/sms + 20 GB"*. https://www.xkids.ro/smartwatch-copii/
- **The eMAG listings themselves.** WIRSEN: *"Functioneaza in toate retelele de telefonie mobila cu
  o cartela Nano SIM: Vodafone – Orange – Telekom sau DiGi"*. Wingereich: *"Functioneaza in
  retelele: DiGi/Vodafone/Orange/Telekom"*. Techone KT19T: *"Modul 4G - Compatibil
  Digi/Vodafone/Orange/Telekom"*. All verified live 2026-08-19.

**Attribute this as marketing copy, not as a test result.** These are seller claims, not operator
certifications, and they sit alongside claims that are demonstrably false (168 h battery). But
they are *commitments* — a Romanian trader making a written compatibility statement to a Romanian
consumer, enforceable as a conformity requirement under Romanian consumer law. That is a legal
handle no Western brand in this market gives a Romanian buyer.

### Romanian warranty and Romanian support

30-day free returns and a Romanian-language phone line, verified today at kidgps.ro. The discovery
sweep also recorded kidgps.ro offering a **3-year warranty**; I could not re-locate that statement
on the live site on 2026-08-19, so treat the 3-year figure as **unverified** and confirm it in
writing before buying. The statutory Romanian floor is 2 years regardless.

### And the retailers are honest about the hard parts

xkids.ro publishes warnings its competitors do not:

> **"Ceasurile nu functioneaza in toate retelele."** *("The watches do not work on all networks.")*
> **"Unele ceasuri trebuie configurate pentru a functiona in Romania. Configurarea consta in setarea
> APN-ului corect pentru reteaua dvs."** *("Some watches must be configured to work in Romania.
> Configuration consists of setting the correct APN for your network.")*
> **"ceasurile nu functioneaza impreuna cu aplicatia prin Roaming!"** *("the watches do not work
> with the app over roaming!")*
> — https://www.xkids.ro/informatii-utile-ceasuri-copii/, verified 2026-08-19

Read the first sentence again. The retailer closest to this hardware, the one that has handled
thousands of these units, will not warrant that they all attach. That is the B20 lottery and its
sibling problems, stated by the people who ship the boxes.

---

## 4. The SeTracker2 cloud is visibly decaying in 2026

`com.tgelec.setracker`, "SeTracker2", published by **SJE LIMITED**. Version 3.4.1, released
**2026-07-16**. **10,000,000+ installs**, rated **3.3/5 across 93,333 ratings**.
— https://apkcombo.com/setracker2/com.tgelec.setracker/, fetched 2026-08-19. (The Google Play
listing itself could not be rendered by my tooling; the discovery sweep on 2026-08-18 read
4.00/94,139 from Play directly. The two figures disagree and I have not resolved which is current.)

The app is live in the Romanian Play storefront and the Romanian review stream is the evidence.
**Attribution:** the reviews below were read directly from the Romanian Play storefront by the
discovery sweep on 2026-08-18/19. My tooling could not re-render the Play review stream today, so
they are reported as recorded, not re-verified.

**Registration is failing for Romanian users.**
> **2026-07-02, 1★:** *"nu reușesc sa fac inregistrarea codul de 6 caractere nu este acceptat.
> nu funcționează"*
> *("I can't complete the registration, the 6-character code is not accepted. It doesn't work.")*

This is the single failure mode this whole research exists to avoid, appearing on the platform
that is supposed to be the safe, un-geo-blocked one.

**"Device is off" — the dominant 2026 complaint.**
> **2026-08-16, 1★:** *"Aplicația este sub orice critică! Am schimbat 2 ceasuri din cauza ei… tot
> timpul apare că «Dispozitivul este oprit». Efectiv nu se poate folosi ceasul…"*
> *("The app is beneath criticism! I've replaced 2 watches because of it… it constantly says
> 'The device is switched off'. You effectively cannot use the watch…")*
>
> **2026-08-12, 1★:** *"nu găsește ceasul, imi spune mereu dispozitiv oprit. nu recomandat"*
> *("it doesn't find the watch, it always tells me the device is off. not recommended")*
>
> **2026-06-16, 1★:** *"Ultima versiune nu gaseste ceasul"* *("The latest version doesn't find the watch")*

Note the first reviewer: they replaced the *hardware* twice before concluding the fault was the
*cloud*. That is the characteristic cost of a white-label platform — the parent debugs the wrong layer.

**Server-side feature failures.**
> **2026-05-08, 2★:** *"e problema la servar pt ca nu se pot efectua apeluri video"*
> *("it's a server problem because video calls can't be made")*

Corroborated on the device side by **Nedelcu Bogdan**, RO, **7 May 2026**, 1★, on the MiniWATCH
eKiD21 listing: *"am incercat sa sun cu apel video si imi spune conectare la servar a esuat"*
("I tried to make a video call and it tells me the server connection failed") — re-verified live
2026-08-19. Two independent reports, one day apart, on the app and on a device: a platform-wide
video-calling outage in early May 2026.

**Location errors measured in kilometres.**
> **2026-04-30, 2★:** *"Locația dă erori de kilometri"* *("The location gives errors of kilometres")*

### The "666test" incident — an apparent cross-account leak

**On 2026-04-23, two separate Romanian 1-star reviews** reported receiving notifications from an
unknown account named **"666test"**:

> *"Am impresia ca mai stau si alții pe langa noi părinții si fac supravegherea"*
> *("I get the impression that other people besides us parents are also doing the monitoring")*
> and, from the second reviewer, *"THIS MEANS IT'S A VIRUS!"*

**What this was: not established.** Two same-day reports are not a confirmed breach, and I could
not re-render the Play review stream to re-read them. What can be said:

- **The name looks like a factory or QA test account.** "666test" is the shape of a bench account
  left enabled in production, not of an attacker.
- **The platform has a documented mechanism that produces exactly this symptom.** SeTracker binds a
  watch by **device ID**, and the first account to bind becomes administrator; later accounts must be
  authorised by that administrator through in-app notifications. Wonlex's own support text:
  *"The first device that binds the watch will be seen as administrator. The subsequent devices that
  need to bind the watch have to get authorization."*
  (https://setracker.com/tutorial-for-solving-common-issues-of-setracker-app/, dated 2022-07-02.)
  And a third-party support guide states the cause of unknown-account notifications directly:
  > *"the likely cause is your child's smartwatch sharing its ID with another watch (**this happens
  > surprisingly often**)."*
  > — findmykids.org, dated 2025-03-04. https://findmykids.org/blog/en/flaws-in-setracker-app
- **Therefore the most probable explanation** is duplicate device IDs in the field: two physically
  different watches shipped with the same ID, so notifications and authorisation prompts cross
  between two unrelated families' accounts — one of which happened to be called "666test".
  This is **unverified** as the explanation for the April 2026 reports specifically.

That "most probable explanation" is not reassuring. Duplicate IDs on a platform whose identity model
*is* the ID mean that the boundary between one family's child-location feed and a stranger's is a
number printed on a sticker in a Shenzhen factory. And the security research in §6 shows the ID is
not even the weakest link.

### What this section adds up to

Six distinct, dated, Romanian-language failure classes in a five-month window: registration,
device-online state, video calling, location accuracy, app regressions, and cross-account
notifications. This is not a bad review average. It is a platform visibly losing its grip while
still shipping updates.

---

## 5. The failure patterns, quantified

### Battery: claimed 130–168 h, observed 1–60 h

| Label | Claimed (listing) | Capacity | Observed, dated RO reports |
|---|---|---|---|
| WIRSEN (AMOLED 1.91") | **168 h** | 800 mAh | 12 h · "not more than a day" · **48–60 h** at best |
| Wingereich (AMOLED 1.91") | **168 h** | 900 mAh | "a few hours" · "drains quickly with tracking on" · "lasts quite a while" |
| Techone KT19T | **140 h** | 900 mAh | **"5 max"** hours, from new |
| Techone FG41+ | UNKNOWN | UNKNOWN | **"nu mai mult de o ora"** — not more than one hour |
| ELYTHEN D35 | 130 h | 900 mAh | UNKNOWN (out of stock) |
| Evolve-x EvoWatch | UNKNOWN | UNKNOWN | 2–3 days (2 reports) |
| Abcros W5 | "2+ days" (1080 mAh) | 1080 mAh | ~2 days at 2 h/day use · "extrem de slaba" |

The verbatim reports, re-verified live on eMAG 2026-08-19 unless noted:

- **Loredana Gabriela Alexe**, RO, **21 Jul 2026**, 5★ (WIRSEN) — *"Doar pentru monitorizare și 2, 3
  apeluri zilnice, bateria durează 48-60h."* — "For monitoring only plus 2–3 calls a day, the battery
  lasts 48–60h." **This is the ceiling of the class, and note the conditions attached.**
- **Madalina**, RO, **15 Jul 2026**, 3★ (WIRSEN) — *"Bateria tine in jur de 12h, se comporta ok
  pentru gama lui de pret."* — "The battery lasts around 12h; it behaves OK for its price range."
- **Razvan**, RO, **15 Aug 2026**, 5★ (WIRSEN) — *"Bateria nu tine mai mult de o zi"*.
- **Enache Amalia**, RO, **28 Apr 2026** (Techone KT19T) — *"bateria il tine cateva ore (5 maxim)…
  Il avem din ianuarie si de la inceput a tinut asa putin"* — "the battery lasts a few hours (5 max)…
  We've had it since January and from the start it lasted this little." Against an advertised 140 h.
- **Butnaru Andreea**, RO, **27 Jul 2026**, 3★ (Wingereich) — *"Este foarte fain, dar bateria tine
  câteva ore"* — "It's very nice, but the battery lasts a few hours."
- **Bucur Georgiana-Florentina**, RO, **20 Sep 2023** (Techone FG41+) — *"Dezamăgitor! Bateria ține
  nu mai mult de o ora!"* — "Disappointing! The battery lasts no more than an hour!" **[2023 — old,
  flagged]**, corroborated by **Alexandra Ungureanu**, RO, **24 Jan 2024**: *"Baterie extrem de
  slaba!!!!!"* **[2024]**. As recorded by the discovery sweep; listing now out of stock.

**The pattern, stated once:** the same model gives 12 h to one owner and 60 h to another. The
variable that reconciles them is location-polling frequency — **Raluca Gingu** says so explicitly
("battery drains quickly with location active"), and Loredana's 48–60 h figure comes with the
qualifier "for monitoring only plus 2–3 calls a day". **On this class you cannot have both frequent
tracking and a full school day.** Treat any listing figure above 48 h as fiction.

### Hardware death between 1 and 12 months, and warranty replacements that die identically

- **Abcros W5 — two units, dead at exactly one month each.** **Remus**, RO, **10 Mar 2024**,
  re-verified live 2026-08-19:
  > *"Am achizitionat acest ceas initial pe culorea albastra… Problema e ca dupa fix 1 LUNA S-A
  > DEFECTAT… Am facut retur, si am luat altul pe negru… si cel de al doile a tinut FIX o luna.
  > Aceeasi problema cu telefonia."*
  > *("I bought this watch first in blue… The problem is that after EXACTLY 1 MONTH IT BROKE… I
  > returned it and got another one in black… and the second one lasted EXACTLY one month. Same
  > problem with the telephony.")*

  The discovery sweep also recorded him concluding the devices seemed *"facute sa mearga doar de
  proba 30 zile"* — "made to work only for a 30-day trial". **Thirty days is not a coincidence: it
  is the return window.** I am not asserting design intent, which is **unverified** — but the
  coincidence is worth stating, because the practical defence is the same either way: verify
  everything inside 30 days, and prefer a seller whose window is longer.
  Listing now **out of stock**, 3.59★/17 reviews. https://www.emag.ro/smartwatch-ceas-inteligent-pentru-copii-w5-4g-gps-impermeabil-wifi-5903816910479/pd/DYVSS9MBM/
- **Wingereich — warranty replacement failed the same way.** **Trandafir A**, RO, **16 Jul 2026**,
  3★: touchscreen died at **4 months**; the warranty replacement developed **the same fault within
  weeks**. Separately **Alin**, RO, **16 Jul 2026**, 1★: two units in a row, the first dead-battery
  within seconds, the second dead after an hour on a full charge — he suspects refurbished or
  non-conforming stock. And **Goagas Radu**, RO, **30 Jul 2026**: at **1 year**, speaker failed and
  the back cover detached, under light use.
- **Techone KT19T.** **Ionescu Traian**, RO, **31 Jul 2026**, 1★, re-verified live:
  *"ceasul pe care l-am cumparat s-a stricat dupa 3 luni"* — dead after **3 months**; touchscreen
  and SIM compartment both broken.
- **Wingereich.** **Laura Zeicu**, RO, **4 Jul 2026**, 5★ — strap broke at ~1 year, spare parts
  hard to find.

**A warranty replacement that fails identically is the tell.** It means the fault is in the design
or the batch, not in your unit, and the replacement pulls from the same batch. Budget for this: in
this tier a warranty is a right to another example of the same problem.

### Wi-Fi and cell positioning masquerading as GPS

The OEM platform page is honest about what the positioning stack is: **GPS + Wi-Fi + LBS**, with
LBS accuracy stated as **100–1000 m**. There is no GLONASS, no Galileo, no BeiDou. What the parent
app shows is a pin; what produced the pin may be a satellite fix, a Wi-Fi BSSID lookup, or a cell
tower. The app does not distinguish, and that is what generates the two mirror-image complaints:

**Failure mode A — wildly wrong position from Wi-Fi database drift:**
> **Murariu Madalin**, RO, **29 Jul 2026**, 3★ (Wingereich):
> *"locatia lasa de dorit cateodata. **Fiica mea apare in Venezuela**"*
> *("the location leaves something to be desired sometimes. My daughter shows up in Venezuela.")*

That is the signature of Wi-Fi BSSID geolocation: a router whose MAC address is registered in a
crowd-sourced database at its previous, distant location. The watch is not lost. It is confidently
reporting a coordinate for someone else's router.

**Failure mode B — no position at all once away from known Wi-Fi:**
> **Mazilu Iulia Alexandra**, RO, **30 Jul 2026**, 1★ (Wingereich):
> *"Niciodata nu isi ia localizarea. Doar dimineata pe wifi conectat apare locatia."*
> *("It never gets its location. Only in the morning, connected to wifi, does the location appear.")*

**This is the exact inverse and the exact same root cause.** The unit is doing Wi-Fi positioning
against the home network and nothing else. It knows where the child is only when the child is at
home — which is the one place you never need to be told.

Corroborating reports: **Olteanu Ruxandra**, RO, **16 Mar 2026** (Techone KT19T):
*"Locația nu este indicată corect… De multe ori arată o poziție greșită sau cu o diferență destul
de mare"*. And on the app itself, **2026-04-30**: *"Locația dă erori de kilometri"*.

Both Wingereich quotes are as recorded by the discovery sweep from the eMAG listing; I re-rendered
the listing today and confirmed the product, rating and review count but the review pagination did
not surface these two specific entries.

### Batch-to-batch radio inconsistency

The most instructive pair in the corpus, one day apart, same product:
- **Szabo Gabriel-Adalbert**, RO, **22 Jun 2026**, 5★ (Tovstore Y88) — Vodafone SIM, works perfectly.
- **Ion**, RO, **23 Jun 2026**, 1★ (same listing) — *"Chinezarie. Fara sim. Am introdus sim activat
  pe telefon, fara pin, caller id activat, 4g. Tot. Degeaba."* ("Chinese junk. No SIM [detected]. I
  inserted a SIM that was active in a phone, no PIN, caller ID enabled, 4G. Everything. Useless.")

A technically competent user who did everything right and could not get the radio to attach, next
to a user for whom it just worked. Corroborated by **Andreea Ciuchea**, RO, **22 Apr 2026**
(MiniWATCH eKiD21, re-verified live 2026-08-19): the SIM works in a phone and is dead in the watch.
This is what inconsistent modem/band configuration between production batches looks like from the
consumer side — and it is the same phenomenon as the B20 lottery in §2.

### Review-quality caveat

Several eMAG listings in this class show clusters of short, generic 5-star reviews posted within
days of each other. The Evolve-x EvoWatch KIDS search listing advertised "5 stars, 55 reviews" while
the product page surfaced 5, four of them within one week of each other in late June 2026 — an
unresolved discrepancy. NEOVANCE T49 has 7 of 8 reviews between 1 May and 13 Jul 2026, i.e. a launch
cluster with no long-term data at all. Given that the dominant failure mode in this class is death
at 3–12 months, **a product with no reviews older than three months is not evidence of reliability.**
Weight detailed and negative reviews far above star averages.

---

## 6. Security & privacy — the section that matters most in this class

### August 2026: the platform was demonstrated fully compromised, live, on stage

This is the most serious finding in this document and it is under three weeks old.

Researchers **Vangelis Stykas** and **Felipe Solferini** presented at **Black Hat USA (2026-08-06/07)**
and **DEF CON 34 (2026-08-08)** the results of analysing **more than 70 GPS-enabled watches and
vehicle trackers**. Their finding: dozens of apparently independent brands run on just **three
Shenzhen backend platforms** — **YiQingTeng, "also known under the name Wonlex and its SETracker
app"**; NewGPS2012; and SinoTrack.

Reported as demonstrated on stage, live: WIRED journalist **Andy Greenberg** wore a sub-$30 kids'
watch (brand "CJC", manufacturer **YiQingTeng Electronics of Shenzhen**) and walked across
Manhattan. From hundreds of miles away the researchers:

- tracked him to the block, because **the watch was transmitting the names of the Wi-Fi networks it
  passed** to a remote server;
- **silently photographed him twice** — in the lift and at his desk;
- **switched on the microphone** and listened to the WIRED newsroom, overhearing a colleague
  discussing an art exhibit;
- with **nothing shown on the watch face**.

**The only thing needed to take control was the email address the parents had registered with.**

Reported capabilities across the platforms: locate a watch, spoof or intercept text and voice
messages, alter or replace emergency contacts, disable or falsify location data, and activate
microphones and cameras. In some cases the flaw was "as basic as a complete absence of
authentication, meaning anyone could send commands to any device." Stykas, quoted: *"Millions of
kids are being exposed and vulnerable to exploitation. It's just catastrophic."*

Scale, as reported: **46 applications carrying 39 brand names on a single SETracker server** —
Wonlex, SaveFamily, KidiWatch, Garett Kids and Beafon among them; **~10 million watches** on
SETracker; tens of millions of devices across the three platforms.

**SETracker's response,** as reported: the company said the reported issues had been resolved; when
WIRED supplied evidence that researchers had compromised a *current* SETracker watch, the
representative repeated the claim and asked for exploitation evidence. **Hours before the Black Hat
talk on 6 August, the researchers found their SETracker techniques had stopped working — but could
not determine whether the underlying vulnerabilities were actually fixed.**

Primary source: WIRED, Andy Greenberg — *"Hackers Stalked Me by Hijacking a Smartwatch for Kids"*,
https://www.wired.com/story/hackers-stalked-me-by-hijacking-a-smartwatch-for-kids/
**(my tooling is blocked from fetching wired.com; the details above are as reported by the
secondary sources below, which agree with one another on every material point).**
- https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html (2026-08-14)
- https://tanyagoodin.com/2026/08/children-smartwatch-cybersafety/ (2026-08-07)
- https://mlq.ai/news/researchers-show-childrens-gps-watches-can-be-hijacked-across-shared-backends/
- https://www.digitaltrends.com/wearables/kids-smartwatches-are-meant-to-keep-children-safe-but-hackers-can-turn-them-into-stalking-devices/

Two details are worth restating for a Romanian parent. First, **the exposure is the platform, not
the brand** — buying a different logo on the same backend changes nothing. Second, **the Wi-Fi-SSID
leak is the same mechanism that produces the "Fiica mea apare in Venezuela" bug in §5**: this class
of watch continuously reports the names of nearby Wi-Fi networks to a Chinese-operated server. That
is both how it locates your child indoors and how a third party located a journalist.

### 2020: the SeTracker backend was found wide open, with a remote-listen command

**Pen Test Partners, 2020-07-09.** The platform is operated by **3G Electronics, Shenzhen**, across
SETracker, SETracker2 and SETracker3. Researchers found a publicly accessible compiled Node.js file
containing MySQL passwords for all databases, **Alibaba Cloud (Aliyun) bucket credentials for
user-uploaded photos**, email, SMS, Redis, Google API and push-notification credentials, root
credentials, the complete server-side source code, and the IPs of 16–20 supporting servers. An
unrestricted server-to-server API required only a hardcoded authentication string.

Capabilities available to anyone holding that string included: make a device call any number, send
arbitrary SMS, **"spy on any device" — audio monitoring, via a command literally named `D18 MONITOR`**,
access device cameras, and send fake parental messages. Scale: 10M+ app downloads; the researchers
estimated **at least 1 million devices in Western Europe alone**. Vendor response: 3G Electronics
restricted the API by IP within 4 days of the 2020-02-18 disclosure and removed the exposed source
code by 2020-05-29.
https://www.pentestpartners.com/security-blog/hacking-smart-devices-to-convince-dementia-sufferers-to-overdose/ ·
corroborated https://www.bitdefender.com/en-us/blog/hotforsecurity/chinese-tracking-platform-used-cheap-smartwatches-found-completely-open (2020-07-10)
**[2020 — older source, flagged. Its significance is that the 2026 findings are a repeat.]**

### 2019: default password 123456, unauthenticated SMS control

**Rapid7, R7-2019-57, disclosed 2019-12-11.** Three retail brands — "Children's SmartWatch",
"G36 Children's Smartwatch", "SmarTurtles Kid's Smartwatch" — all identical hardware and software,
all using **"SETracker or SETracker2 as the backend cloud service and mobile application"**, all
white-label rebrands of a **3G Elec (Shenzhen)** product. Findings: the SMS configuration interface
had no working filter, so **unlisted numbers could read and write the watch's configuration**; and
the devices shipped with an **undocumented default password of `123456`**. No CVE assigned. Rapid7
records that private vendor contact proved effectively impossible.
https://www.rapid7.com/blog/post/2019/12/11/iot-vuln-disclosure-childrens-gps-smart-watches-r7-2019-57/
**[2019 — older source, flagged.]**

### 2017: the Norwegian Consumer Council's #WatchOut — where this all started

**Forbrukerrådet (Norwegian Consumer Council), published 2017-10-17**, with security firm
**mnemonic**. Watches tested: **Gator 2, Tinitell, Viksfjord and Xplora**, with the explicit note
that "other models similar to those who were tested are being sold under different names" — the
white-label problem, named in 2017. Findings: significant security flaws, unreliable safety
features and a lack of consumer protection; **strangers could seize control of the watches and use
them to track and eavesdrop on children**, communicate with the child, and access stored location
data. The Council referred the manufacturers to the Norwegian Data Protection Authority and the
Consumer Ombudsman for breaches of the Personal Data Act and the Marketing Control Act. BEUC
escalated to DG Justice at EU level.
https://www.beuc.eu/news/watchout-alarming-security-flaws-smartwatches-children ·
https://www.consumersinternational.org/news-resources/news/releases/disturbing-security-flaws-in-smartwatches-for-children/
**[2017 — historical, flagged. Included because it establishes the nine-year pattern.]**

### The pattern

**2017 → 2019 → 2020 → 2026.** Four independent research efforts, nine years apart, on the same
class of device, finding the same things: absent authentication, remote eavesdropping, location
tracking by strangers, and a brand layer that hides which backend you actually bought. As one 2026
report put it, many manufacturers "either failed to fix the underlying issues or continued deploying
the same insecure platforms under new brands." Nothing in this record supports treating a 2026
SeTracker2 watch as a solved problem.

### Where the data lives

- **The "Europe and Africa" server** published for SeTracker is **52.28.132.157**
  (https://setracker.eu/faq — an unofficial reseller FAQ; treat the address as indicative).
  Reverse DNS on 2026-08-19: `ec2-52-28-132-157.eu-central-1.compute.amazonaws.com` —
  **AWS eu-central-1, Frankfurt, Germany**. Five regional servers are offered: Europe/Africa,
  Asia/Oceania, North America, South America, Hong Kong. **The region is chosen manually by the
  parent during setup** — pick the wrong one and the watch will not bind, and a Romanian user who
  accepts the default may be provisioned outside the EU.
- **But EU compute is not EU control.** The platform is operated by a Chinese company
  (3G Electronics / YiQingTeng, Shenzhen), the 2020 research found user-uploaded photos on
  **Alibaba Cloud (Aliyun)** buckets, and the 2026 research placed 39 brands on one shared
  SETracker server. **Whether a Romanian user's data is subject to a GDPR-adequate arrangement:
  UNKNOWN.** No SeTracker privacy policy naming a data controller, a DPO, an EU representative or
  a legal basis was found by this research. **No brand in this class publishes one.**
- **Chat/photo/audio content, not just coordinates.** These watches carry a camera and a microphone,
  and the platform stores photos. The exposure is not "someone learns a coordinate", it is "someone
  gets a photo stream from a 7-year-old's wrist".

### The covert remote-listen feature, advertised openly, in Romanian

Every listing in this class sells this as a feature, in the product title. Here it is described in
the seller's own words, verified live on eMAG 2026-08-19 (TechONE KT19T, seller KidGPS):

> **"Monitorizare spion. Ori de cate ori doriti puteti asculta ce se intampla in jurul ceasului
> fara ca posesorul sa realizeze ca este ascultat"**
>
> *("Spy monitoring. Whenever you wish, you can listen to what is happening around the watch
> without the wearer realising they are being listened to.")*

And on the WIRSEN listing, also verified live 2026-08-19:

> **"Monitorizare spion – Ascultare ambientala discreta pentru siguranta copilului"** and, in the
> seller's Q&A, **"Monitorizarea spion este audio"**
>
> *("Spy monitoring – discreet ambient listening for the child's safety" / "The spy monitoring is audio.")*

Mechanically: the parent app sends a command, the watch silently dials the parent's number and opens
the microphone with no ring, no screen change and no indicator. It is the same `D18 MONITOR` command
Pen Test Partners exploited in 2020 and functionally the same capability Stykas demonstrated in 2026.

**Can it be locked or disabled? No evidence that it can.** No vendor documentation found by this
research describes any way to disable ambient monitoring on the watch or in the app; it is
implemented as a server-issued command, so there is nothing on the watch to switch off. That it was
triggerable by third parties in 2020, and again in 2026, is direct evidence that it is not gated by
anything under the parent's control. Treat this as **confirmed present and unverified as
disableable** — which for practical purposes means: assume any watch in this class can be made to
listen to your child's classroom by whoever holds the right credentials, and that "whoever" has
twice not been you.

For contrast, this is exactly the axis on which German parents in the same market choose differently:
one urbia.de poster picked Pingonaut specifically for *"Abhören / Bluetooth nicht möglich"*
("eavesdropping / Bluetooth not possible").

---

## 7. The drift toward "wrist smartphone" — and why it is anti-value at seven

The 2026 Romanian listings in this class no longer sell a locator. They sell a phone. The actual
eMAG product title of the market's volume seller:

> *"Ceas smartwatch copii GPS 4G, **Google play, Whatsapp, Tiktok, Instagram, Youtube, Facebook**,
> camera HD, Wingereich ™, … monitorizare spion, ritm cardiac, negru"* — 399,98 Lei, 4.77★/524
> reviews, in stock, verified 2026-08-19.

WIRSEN, Techone and Medeyatech advertise the same stack. And Romanian reviewers now complain when
these apps *don't* work — **Daniel Dragan**, RO, **1 Jul 2026**, 1★ (Techone KT19T):
*"aplicația WhatsApp nu funcționează"*.

For a 7-year-old at school this is value running backwards, on four counts:

1. **Battery.** This is the mechanism behind §5's numbers. An 800–900 mAh cell driving a 1.91"
   AMOLED, Wi-Fi, LTE data and background app sync will not survive a school day, and every hour
   spent on YouTube is an hour the watch is not available for the one job you bought it for.
   The single best battery result in the corpus — 48–60 h — came with the qualifier
   *"doar pentru monitorizare și 2, 3 apeluri zilnice"*.
2. **Attack surface.** §6 established that the base platform is compromised. Adding Google Play, a
   browser, WhatsApp and an app store to a device that already has an unauthenticated remote-listen
   command widens the target from "the vendor's cloud" to "the vendor's cloud plus everything the
   child installs". The Abcros W5 reviewers report Google Play on the watch *"se tot blocheaza"*
   ("keeps freezing") — an unmaintained Android stack, on a child's wrist, on the public internet.
3. **Distraction.** TikTok and Instagram on the wrist of a seven-year-old during lessons is a
   behaviour problem you are purchasing deliberately. The device's purpose is to reduce the parent's
   anxiety, not to give the child an unsupervised social-media terminal.
4. **The school will ban it.** German parents in the community sweep report schools prohibiting
   these watches in class outright. A locator that is confiscated at the classroom door is a
   locator that does not work, and a watch advertising TikTok is far more likely to be confiscated
   than a watch that only makes calls to four whitelisted numbers.

**The counter-position, from parents who thought about it:** one urbia.de poster praised the Xplora
XGO-2 precisely because *"die Uhr ziemlich 'Kindersicher' ist"* — the watch is quite child-proof,
with **no games** and whitelisted numbers only. That is the correct spec for seven years old, and
this class is sprinting away from it.

**What can actually be turned off:** a "mod scoala" / school mode exists and is real. MiniWATCH's
listing, verified live 2026-08-19: *"In timpul orelor la școală, ceasul are blocate jocurile si alte
aplicații"* ("During school hours, games and other applications are blocked on the watch"). Contact
whitelisting is also real — a Wingereich reviewer confirms parent-controlled contacts. Whether
Google Play itself can be removed rather than merely scheduled off: **UNKNOWN**, and no listing in
this class states it.

---

## 8. Pre-purchase and first-week test

The check that costs nothing and takes ten minutes, before paying:

1. **Install SeTracker2 from the Romanian Play storefront** (`com.tgelec.setracker`) and **attempt
   registration with a +40 number and your email**, before you buy anything. Note the dated
   Romanian registration failure of 2026-07-02 in §4 — this is not a theoretical step.
2. **Ask the seller in writing for the CE/RED declaration of conformity for the exact SKU**, and
   ask directly: *"Acest model suportă banda LTE B20?"* Keep the answer. Under Romanian consumer
   law a written compatibility claim that turns out false is a conformity defect.
3. **Buy from a seller with a real return window.** kidgps.ro states 30 days free returns; eMAG 1P
   gives 30 days; EU distance selling gives 14 as the floor. **Insist on 30, and count from
   delivery.** Given the Abcros "dead at exactly one month, twice" pattern, 14 days is not enough
   time to find the fault that will kill the device.

Then, in week one — all of it inside the return window:

4. **Voice, both directions, on LTE, away from Wi-Fi.** One outgoing and one incoming call, with the
   watch out of range of any known Wi-Fi network.
5. **Location inside the school building during school hours**, not in the garden. Compare against
   where the child actually is. Do it three days running. If the position is only ever right at
   home, you have failure mode B from §5 and the device is useless for its purpose.
6. **A full school day on one charge, with the polling interval set to what you will actually use.**
   Charge to 100% the night before, check at pickup. If it does not finish the day, no setting will
   fix it — return it.
7. **Try an Orange SIM specifically if you can borrow one**, even if you intend to use Digi. It is
   the fastest available proxy for the B20 question.
8. **Turn on school mode and confirm it actually blocks games**, and set the contact whitelist.
9. **Assume the ambient-listening feature cannot be disabled** and decide, before you buy, whether
   you are comfortable with a device that has it.

If any of 4–7 fails, return it. Do not accept a warranty replacement as the remedy in the first
month — §5 shows replacements from the same batch fail identically. Take the refund and re-buy,
or leave the tier.

---

## 9. Buying rule for a parent who decides to buy in this tier anyway

**The one-paragraph version.** Buy the cheapest credible SKU from a Romanian specialist retailer
with a Romanian phone number and 30-day free returns — not the most feature-laden one, and not from
a foreign marketplace seller. Prefer a **Digi or Orange** SIM, because both still run 2G, so a VoLTE
provisioning failure degrades to a 2G call rather than to silence. Prefer **fewer features**: no
Google Play, no TikTok, more battery. Set the location interval to the longest you can tolerate,
not the shortest available. Run every test in §8 inside 30 days. Then treat the watch as a
**two-year consumable that might die at three months**, and never as the sole answer to "where is
my child" — keep a second, human channel (the school office, an after-school contact) that does not
depend on a Shenzhen server.

**Concrete checklist:**

| Check | Why |
|---|---|
| Register in SeTracker2 with +40 **before paying** | Dated RO registration failures, 2026-07-02 |
| Written answer on **B20** + CE/RED DoC for the SKU | B20 is a per-order build option (§2) |
| **30-day** return, from a RO seller, in writing | The observed death-at-30-days pattern (§5) |
| **nano-SIM only** — refuse eSIM SKUs (KT36, KT38) | No Romanian wearable-eSIM provisioning is proven |
| Prefer **Digi or Orange** SIM | Both still run 2G, so voice degrades rather than dies |
| Ask for **battery capacity in mAh**; ignore the "168 h" | Claimed 130–168 h; observed 1–60 h |
| Prefer **no Google Play / no TikTok** SKU | Battery, attack surface, distraction, school bans (§7) |
| Set the **longest** acceptable polling interval | Polling frequency is the battery variable (§5) |
| Test location **in the school**, 3 days | Wi-Fi positioning failure modes (§5) |
| Keep the box, sticker and **device ID** photographed | Duplicate-ID and re-binding disputes (§4) |
| Assume ambient listening **cannot be turned off** | No documented off switch; twice exploited (§6) |

**What would make me not buy in this tier at all:** the child is 7 and will be indoors in a concrete
school building for six hours a day. That is the worst case for a no-B20 wrist antenna, the worst
case for a Wi-Fi-dependent positioning stack, and the exact window in which the battery has to hold.
This tier is a working proof that Romanian LTE is not the obstacle. It is not a working answer to
the question the project asked.

---

## 10. Reality check — the marketing, translated

| The listing says | What the evidence says |
|---|---|
| **"168 h"** / "140 h" / "130 h" autonomy | 48–60 h at the absolute best, *"doar pentru monitorizare și 2, 3 apeluri zilnice"*; most dated RO reports 5–24 h; one at *"nu mai mult de o ora"* |
| **"4G/3G/LTE"** | There is no 3G in Romania. Boilerplate carried through from the ODM |
| **"Localizare precisa GPS"** | GPS + Wi-Fi + LBS, undifferentiated in the app. LBS accuracy stated by the OEM as **100–1000 m**. Produces both *"Fiica mea apare in Venezuela"* and "location only appears on home wifi" |
| **"Funcționează în toate rețelele"** | The retailer closest to the hardware says the opposite: *"Ceasurile nu functioneaza in toate retelele"* — and some units need manual APN configuration |
| **"Monitorizare spion — pentru siguranța copilului"** | An undisclosed-to-the-wearer hot microphone with no documented off switch, twice demonstrated as remotely triggerable by third parties (2020, 2026) |
| **"Google Play, WhatsApp, TikTok, Instagram, YouTube"** | Battery drain, attack surface, classroom distraction, and a higher chance of confiscation. Anti-value at 7 |
| **"63% reducere" from 1.196,69 Lei** | A PRP anchor nobody ever paid. Real price band for this class: 250–450 Lei |
| **4.7★ / 524 reviews** | Weighted toward short generic 5★ posted in clusters. The detailed reviews split roughly evenly positive/negative, and almost nothing is older than 6 months |

---

## 11. What users say

**Works** *(all Romania; ★ = star rating where recorded)*

- **Ciprian**, RO, 2 Mar 2026 — *"Eu am pus Digi si merge perfect"* / "I put Digi in and it works
  perfectly." (Wingereich)
- **Raluca Gingu**, RO, 24 Jul 2026, 5★ — *"se aude foarte bine in apel normal… se aude si se vede
  foarte bine in apel video pe whatsapp… locatie exacta"* / "normal calls sound very good… WhatsApp
  video calls look and sound very good… exact location." (Wingereich)
- **Loredana Gabriela Alexe**, RO, 21 Jul 2026, 5★ — *"Doar pentru monitorizare și 2, 3 apeluri
  zilnice, bateria durează 48-60h."* / "For monitoring only plus 2–3 calls a day, the battery lasts
  48–60h." (WIRSEN) **The best battery datapoint in the corpus, and the only one that states its
  conditions.**
- **Razvan R**, RO, 27 May 2026, 5★ — *"E conectat tot timpul la internet, vad locația in timp real
  si pot suna"* / "It's connected to the internet all the time, I see the location in real time and
  I can call." (MiniWATCH eKiD21)
- **Roxana Boier**, RO, 5 May 2026, 5★ — *"Localizarea GPS este surprinzător de precisă… am reușit
  să îl localizez rapid"* / "The GPS location is surprisingly precise… I managed to locate it
  quickly" — she recovered a lost watch in a park. (Tovstore Y88)
- **T.**, RO, 2 Dec 2025, 5★ — *"Bun, precisa locatia… bateria… 2-3 zile"* / "Good, accurate
  location… battery… 2–3 days." (Evolve-x EvoWatch)
- **Daniel**, RO, 9 Aug 2026, 5★ — *"Foarte foarte bun pt acești bani. Chiar functioneaza bine."* /
  "Very, very good for the money. It really does work well." (WIRSEN)

*Independent positive reports on connectivity: 6+, across four brands, spanning Aug 2024 – Aug 2026.
Connectivity is the one thing this class consistently delivers.*

**Fails**

- **Mazilu Iulia Alexandra**, RO, 30 Jul 2026, 1★ — *"Niciodata nu isi ia localizarea. Doar
  dimineata pe wifi conectat apare locatia."* / "It never gets its location. Only in the morning,
  connected to wifi, does the location appear." (Wingereich)
- **Murariu Madalin**, RO, 29 Jul 2026, 3★ — *"locatia lasa de dorit cateodata. Fiica mea apare in
  Venezuela"* / "the location leaves something to be desired sometimes. My daughter shows up in
  Venezuela." (Wingereich)
- **Enache Amalia**, RO, 28 Apr 2026 — *"bateria il tine cateva ore (5 maxim)… Il avem din ianuarie
  si de la inceput a tinut asa putin"* / "the battery lasts a few hours (5 max)… we've had it since
  January and from the start it lasted this little." (Techone KT19T, advertised 140 h)
- **Remus**, RO, 10 Mar 2024 — *"dupa fix 1 LUNA S-A DEFECTAT… Am facut retur, si am luat altul pe
  negru… si cel de al doile a tinut FIX o luna."* / "after EXACTLY 1 MONTH IT BROKE… I returned it
  and got another one in black… and the second one lasted EXACTLY one month." (Abcros W5)
- **Trandafir A**, RO, 16 Jul 2026, 3★ — touchscreen dead at 4 months; **warranty replacement
  developed the same fault within weeks**. (Wingereich)
- **Ionescu Traian**, RO, 31 Jul 2026, 1★ — *"ceasul pe care l-am cumparat s-a stricat dupa 3 luni"*
  / "the watch I bought broke after 3 months." (Techone KT19T)
- **Ion**, RO, 23 Jun 2026, 1★ — *"Chinezarie. Fara sim. Am introdus sim activat pe telefon, fara
  pin, caller id activat, 4g. Tot. Degeaba."* / "Chinese junk. No SIM [detected]. I inserted a SIM
  that was active in a phone, no PIN, caller ID on, 4G. Everything. Useless." (Tovstore Y88) —
  posted **one day after** Szabo Gabriel-Adalbert's "works perfectly on Vodafone" on the same listing.
- **Andreea Ciuchea**, RO, 22 Apr 2026 — *"Cand pun cartela in el nu funcționează rețeaua"* / "When
  I put the SIM in it, the network doesn't work" — the same SIM works in a phone. (MiniWATCH eKiD21)
- **Nedelcu Bogdan**, RO, 7 May 2026, 1★ — *"am incercat sa sun cu apel video si imi spune conectare
  la servar a esuat"* / "I tried a video call and it says the server connection failed."
  (MiniWATCH eKiD21)
- **Play Store, RO, 2026-07-02, 1★** — *"nu reușesc sa fac inregistrarea codul de 6 caractere nu
  este acceptat. nu funcționează"* / "I can't complete registration, the 6-character code is not
  accepted. it doesn't work."
- **Play Store, RO, 2026-08-16, 1★** — *"tot timpul apare că «Dispozitivul este oprit». Efectiv nu
  se poate folosi ceasul…"* / "it constantly says 'The device is switched off'. You effectively
  cannot use the watch…"
- **Play Store, RO, 2026-04-23, two separate 1★ reviews** — notifications from an unknown account
  named **"666test"**: *"Am impresia ca mai stau si alții pe langa noi părinții si fac
  supravegherea"* / "I get the impression that other people besides us parents are also doing the
  monitoring."

*Independent negative reports: 12+, across seven brands. Crucially, the negatives cluster on
**battery, hardware mortality, positioning and the cloud** — never on Romanian network
compatibility. That division is the whole finding of this document.*

---

## 12. Known gaps in this document

- **Google Play's review stream could not be rendered by my tooling** on 2026-08-19. All SeTracker2
  Romanian review quotes, and the "666test" reports, are as recorded by the 2026-08-18/19 discovery
  sweep and are **not independently re-verified**. They should be re-read directly before being
  relied on.
- **wired.com is blocked to this tooling.** The Black Hat / DEF CON findings are reported here from
  four secondary sources that agree with one another; the primary WIRED article is cited but unread.
- **The exact cause of the "666test" notifications: UNKNOWN.** The duplicate-device-ID mechanism is
  the most probable explanation and is documented as a common SeTracker fault, but its application
  to this specific incident is **unverified**.
- **No LTE band list exists for any SKU actually sold in Romania in this class.** Every band
  statement in this document comes from an OEM page for a wholesale SKU, not from a Romanian
  listing. The B20 status of every watch on eMAG.ro today is **UNKNOWN**.
- **kidgps.ro's 3-year warranty** was recorded by the discovery sweep but could not be re-located on
  the live site on 2026-08-19. **unverified.**
- **Reddit, forum.softpedia.com (thread 1203559-ceas-gps-copil), Trustpilot and all Amazon
  marketplaces were inaccessible** to this research. The Romanian-language forum discussion of this
  device class is entirely unrepresented.
- **Weight, VoLTE-on-a-Romanian-network, minimum polling interval, Android minimum version, and
  whether Google Play can be removed rather than scheduled off: UNKNOWN** for every SKU in the class.
- **The web-search budget was exhausted** partway through this document; later verification was done
  by direct fetch only.

---

## Sources

*All accessed 2026-08-19 unless stated.*

**The shared-lineage proof**
- https://www.emag.ro/set-4-folii-de-protectie-antireflex-mata-smart-protection-pentru-wonlex-kt20s-pentru-display-2222184/pd/D6S12ZMBM/ — eMAG screen protector titled "pentru **Wonlex** KT20S", sold against the "Techone KT20S". In stock, 76,27 Lei. Establishes the OEM behind the Techone label.
- https://www.xkids.ro/informatii-utile-ceasuri-copii/ — Romanian retailer: *"Pentru ceasurile Xkids, Wonlex, Twinkler, **YQT** recomandam aplicatia SeTracker 2"*; also the network-compatibility, APN and roaming warnings. Establishes Xkids/Wonlex/YiQingTeng as one ecosystem.
- https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html (2026-08-14) — 46 apps / 39 brand names on one SETracker server; the shared `com.tgelec` package stem; Wonlex, SaveFamily, Garett Kids named.

**The B20 lottery**
- https://www.iwonlex.net/wonlex-4g-kids-watches-work-with-unisoc-8521e/ (page dated 2021-06-21) — UNISOC SL8521E platform: FDD "B1 B2 B3 B5 B7 B8 B20 B28A", CAT4, VoLTE/CSFB/SRLTE, GPS 5–15 m, LBS 100–1000 m. Establishes the chipset *can* do B20.
- https://www.iwonlex.net/products/wonlex-2023-newest-android-4g-lte-round-gps-kids-videocall-kids-smartwatch-kt26s/ — KT26S: `"FDD-LTE :B1 B2 B3 B5 B7 B8 (Optional: B20 B12 B28A)"`, SL8521E, 900 mAh, GPS+LBS+WiFi, VoLTE. **The word "Optional" is the finding.**
- https://www.iwonlex.net/products/wonlex-round-4g-video-call-gps-smartwatch-kt26/ — KT26: "FDD-LTE: B1 B2 B3 B5 B7 B8", 680 mAh, **no B20, no VoLTE stated**.
- https://www.dinesaw.com/products/wonlex-4g-gps-wifi-video-calling-kids-smart-watch-kt30 — KT30 reference module: "FDD: Band 1/3/5/8", SL8521E, 680 mAh. **No B20, no B7, no B28.**

**Romanian retail and operator statements**
- https://www.kidgps.ro/ and https://www.kidgps.ro/collections/gps-smartwatch-copii — *"compatibile cu Orange, Vodafone, Digi și Telekom"*; RO phone 0371 781 799; "30 zile retur gratuit"; TechOne range 229–420 lei.
- https://www.xkids.ro/smartwatch-copii/ — *"compatibile cu cele mai cunoscute retele … Orange, Vodafone, Telekom si Digi"*; RO phone 0770 137 131; bundled Vodafone SIM; 211 SKUs; Wonlex KT24S 351 lei, KT36 389 lei, KT37 410 lei, Lagenio K1 313 lei, K9 499 lei.

**Romanian device listings (prices, claims, reviews — all verified live)**
- https://www.emag.ro/ceas-copii-smartwatch-4g-gps-whatsapp-apel-telefonic-video-hd-buton-sos-monitorizare-spion-google-play-super-amoled-1-91-slot-sim-localizare-precisa-gps-lbs-wi-fi-bluetooth-foto-hd-meniu-in-romana-com/pd/DB9PS4YBM/ — **WIRSEN**, 295,00 Lei, 4.47★/159, in stock. 800 mAh / "168 h" claimed. SeTracker 2. *"Functioneaza in toate retelele … Vodafone – Orange – Telekom sau DiGi"*. *"Monitorizare spion – Ascultare ambientala discreta"*, *"Monitorizarea spion este audio"*. Reviews: Razvan 15 Aug 2026, Daniel 9 Aug 2026, Loredana 21 Jul 2026, Madalina 15 Jul 2026.
- https://www.emag.ro/ceas-smartwatch-copii-gps-4g-google-play-whatsapp-tiktok-instagram-youtube-facebook-camera-hd-wingereich-tm-localizare-gps-telefon-apel-video-hd-super-amoled-wifi-bluetooth-apa-ip67-android-ios-sos-mo/pd/DQVXVGYBM/ — **Wingereich**, 399,98 Lei, 4.77★/524, in stock. 900 mAh / "168 h". SeTracker2. *"Functioneaza in retelele: DiGi/Vodafone/Orange/Telekom"*. Title advertises Google Play, WhatsApp, TikTok, Instagram, YouTube, Facebook, "monitorizare spion". Reviews: Raluca Gingu 24 Jul 2026, Butnaru Andreea 27 Jul 2026.
- https://www.emag.ro/ceas-smartwatch-gps-copii-cu-localizare-si-telefon-techonetm-kt19t-1-85-inch-retina-4g-lte-temperatura-apel-video-camera-hd-wi-fi-rezistent-la-apa-ip67-telefon-buton-sos-monitorizare-spion-albastru-kt/pd/DTQYNTYBM/ — **TechONE KT19T**, 389,10 Lei (from 791,34), 4.39★/95. 900 mAh / **"140 h"**. App: *"SeTracker 2 sau Wonlex App"*. *"Monitorizare spion. Ori de cate ori doriti puteti asculta ce se intampla in jurul ceasului fara ca posesorul sa realizeze ca este ascultat"*. Reviews: Enache Amalia 28 Apr 2026, Olteanu Ruxandra 16 Mar 2026, Ionescu Traian 31 Jul 2026.
- https://www.emag.ro/smartwatch-pentru-copii-4g-video-call-ultrahd-miniwatchr-ekid21-infinity-gps-tracking-wifi-lbs-apel-hd-sim-buton-sos-perimetru-siguranta-istoric-monitorizare-activitate-camera-foto-galerie-mod-scoala-/pd/DNHMZRYBM/ — **MiniWATCH eKiD21**, 258,99 Lei, 4.76★/87. 680 mAh. School mode: *"In timpul orelor la școală, ceasul are blocate jocurile si alte aplicații"*. Reviews: Nedelcu Bogdan 7 May 2026, Andreea Ciuchea 22 Apr 2026.
- https://www.emag.ro/smartwatch-ceas-inteligent-pentru-copii-w5-4g-gps-impermeabil-wifi-5903816910479/pd/DYVSS9MBM/ — **Abcros W5**, 3.59★/17, **out of stock**. App Me.Watch/Alaaeng. Remus, 10 Mar 2024: two units dead at exactly one month each.
- https://www.emag.ro/ceas-smartwatch-gps-copii-techone-fg41-4g-volte-apel-video-buton-sos-gps-agps-wifi-rezistent-la-apa-blocare-apel-monitorizare-spion-negru-gps-fg41-negru/pd/DWX4RRMBM/ — **TechOne FG41+** (seller KidGPS), *"Functioneaza in retelele Vodafone/Orange/Telekom/Digi"*, VoLTE claimed, "SeTracker 2 or Wonlex App", 4.04★/27, out of stock. Recorded by the discovery sweep 2026-08-18; not re-verified today.
- https://www.emag.ro/ceas-smartwatch-pentru-copii-ceas-inteligent-conectivitate-4g-localizare-lbs-wifi-cartela-sim-functie-sos-spion-camera-ecran-tactil-1-69-apel-video-autonomie-48h-ipx-67-apelare-rapida-functii-smart-jo/pd/D247QX3BM/ — **Tovstore Y88**, 4.5★/54. Ion vs Szabo Gabriel-Adalbert, one day apart. Recorded 2026-08-18; not re-verified today.
- https://www.emag.ro/ceas-smartwatch-copii-evolve-xr-evowatchtm-kids-localizare-gps-sim-4g-camera-foto-apel-video-hd-geofence-display-ips-1-83-buton-sos-monitorizare-de-la-distanta-7-jocuri-ip67-doua-carcase-incluse-si-hu/pd/D4JBVY3BM/ — **Evolve-x EvoWatch KIDS**, ~366 Lei; review-count discrepancy unresolved. Recorded 2026-08-18.
- https://www.emag.ro/ceas-smartwatch-copii-4g-gps-cu-cartela-nano-sim-ceas-telefon-inteligent-apel-video-sos-control-parental-localizare-in-timp-real-wi-fi-mesaje-1-83-neovance-t49-negru-ksmartw-t49-black/pd/D7FHPD2BM/ — **NEOVANCE T49**, ~400 Lei, 4.8★/8, all reviews inside a 10-week launch window. Recorded 2026-08-18.

**The app**
- https://apkcombo.com/setracker2/com.tgelec.setracker/ — SeTracker2, **SJE LIMITED**, v3.4.1, released **2026-07-16**, 10,000,000+ installs, 3.3/5 from 93,333 ratings.
- https://play.google.com/store/apps/details?id=com.tgelec.setracker — Romanian storefront; source of the dated RO reviews in §4. **Could not be rendered by my tooling on 2026-08-19**; quotes are as recorded by the discovery sweep.
- https://setracker.eu/faq — the five regional server addresses, incl. "Europe and Africa: ip,52.28.132.157". Unofficial reseller FAQ.
- Reverse DNS / ipinfo.io lookup of 52.28.132.157, run 2026-08-19 → `ec2-52-28-132-157.eu-central-1.compute.amazonaws.com`, AWS, Frankfurt, DE.
- https://setracker.com/tutorial-for-solving-common-issues-of-setracker-app/ (2022-07-02) — the device-ID / administrator binding model: *"The first device that binds the watch will be seen as administrator."*
- https://findmykids.org/blog/en/flaws-in-setracker-app (2025-03-04) — unknown-account notifications: *"the likely cause is your child's smartwatch sharing its ID with another watch (this happens surprisingly often)."*
- https://www.iwonlex.net/how-to-set-up-kids-watch-app/ — SeTracker2 setup, 35 languages, 5 servers, device-ID binding.

**Security research**
- https://www.wired.com/story/hackers-stalked-me-by-hijacking-a-smartwatch-for-kids/ — WIRED, Andy Greenberg, Aug 2026. **Primary source; blocked to this tooling.**
- https://tanyagoodin.com/2026/08/children-smartwatch-cybersafety/ (2026-08-07) — Stykas & Solferini, Black Hat 2026; 70+ devices; YiQingTeng/Wonlex/SETracker, NewGPS2012, SinoTrack; 30+ brands on one platform; Stykas quote.
- https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html (2026-08-14) — DEF CON 34, 2026-08-08; ~10M SETracker watches; 46 apps / 39 brands on one server; read/spoof location, intercept messages, listen silently, trigger camera.
- https://mlq.ai/news/researchers-show-childrens-gps-watches-can-be-hijacked-across-shared-backends/ — SETracker's response to WIRED; techniques stopped working hours before the talk, fix unconfirmed.
- https://www.digitaltrends.com/wearables/kids-smartwatches-are-meant-to-keep-children-safe-but-hackers-can-turn-them-into-stalking-devices/ — corroborating coverage.
- https://www.pentestpartners.com/security-blog/hacking-smart-devices-to-convince-dementia-sufferers-to-overdose/ (2020-07-09) — SETracker / 3G Electronics Shenzhen; MySQL, Aliyun, SMS, Redis credentials and full server source exposed; unrestricted server-to-server API; `D18 MONITOR` audio-spy command; 10M+ downloads, ≥1M devices in Western Europe; API IP-restricted within 4 days, source removed 2020-05-29. **[2020]**
- https://www.bitdefender.com/en-us/blog/hotforsecurity/chinese-tracking-platform-used-cheap-smartwatches-found-completely-open (2020-07-10) — corroborates the above. **[2020]**
- https://www.rapid7.com/blog/post/2019/12/11/iot-vuln-disclosure-childrens-gps-smart-watches-r7-2019-57/ — R7-2019-57: three white-label brands on "SETracker or SETracker2", 3G Elec Shenzhen; unauthenticated SMS configuration; default password `123456`; no CVE. **[2019]**
- https://www.beuc.eu/news/watchout-alarming-security-flaws-smartwatches-children (2017-10-17) — Norwegian Consumer Council **#WatchOut** with mnemonic; Gator 2, Tinitell, Viksfjord, Xplora; strangers could take control, track and eavesdrop; referred to the Norwegian DPA and Consumer Ombudsman; note that "other models similar to those who were tested are being sold under different names". **[2017]**
- https://www.consumersinternational.org/news-resources/news/releases/disturbing-security-flaws-in-smartwatches-for-children/ — corroborating coverage of #WatchOut. **[2017]**

**Internal**
- `e:\research\kids-watch\.discovery\lens-1-eu-retail.md`, `lens-2-brands.md`, `lens-3-technical.md`, `lens-4-community.md`, `lens-5-romania.md` (sweeps dated 2026-08-18/19) — source of the review quotes marked "as recorded by the discovery sweep" and of the eMAG white-label price table in §1.

## Constellation ceiling, established at silicon level (2026-08-19)

A dedicated investigation into the **UNISOC SL8521E** — the chipset every device in this class
runs — settles what the OEM spec sheets leave vague.

**The GNSS block is on-die. It supports GPS + GLONASS + BeiDou, single-band (L1 / B1I) only.
There is no Galileo and no QZSS. Only ONE secondary constellation runs at a time — GPS+GLONASS
*or* GPS+BeiDou — chosen by which of two firmware images is flashed, with GPS+GLONASS the
default.**

Evidence, all measured artefact rather than vendor claim:

- A UNISOC-focused Chinese technical source (CSDN, 2022-05-08) lists the parts lacking Galileo
  by name: 「不支持的芯片：SC9820E、SC9832E、SC9863A（内置）、**SL8521E**、SL8541E、UIS8581E
  （内置）等」 — *"chips that do not support Galileo"*. Its own rule of thumb: UNISOC GNSS parts
  with 5 GHz Wi-Fi have Galileo, those without do not. The SL8521E is Wi-Fi 4, 2.4 GHz only.
- On the sibling **SL8541E**, whose integrated-GNSS design is the same: the kernel device tree
  for the reference board declares `sprd,integrate_gnss` with `CONFIG_SC2342_INTEG=y` and no
  external GNSS part; `gnss_common_ctl.c` rejects any constellation selection other than the two
  firmware images with `-EINVAL`; and those images (`gpsgl`, `gpsbd`) appear as **real flash
  partitions on four independent shipping-watch device trees**.
- The GNSS HAL pulled off a real shipping watch carries NMEA talker IDs `$GPGSV`, `$GLGSV` and
  `$BDGSV` — and **no `$GAGSV` (Galileo), no `$GQGSV` (QZSS)**.
- A Chinese SL8541E dev-board spec states 「支持四种定位模式：GPS，北斗，GPS+北斗，GPS+GLONASS」
  — "supports four positioning modes" — an exact match for the two-image architecture.

**How this reads against §"Wi-Fi and cell positioning masquerading as GPS".** It does not
contradict that section; it explains it. A **single-band, Galileo-less receiver** is exactly the
kind of front end that struggles to hold a fix indoors and near buildings, which is what pushes
the stack onto Wi-Fi and LBS in the first place. The sibling Carneo finding — that these watches
ship pointed at an **Asian AGPS server (AutoNavi, Alibaba's Amap)** by default, and that owners
who switch it to Google report location *"100% better"* — supplies the second half of the
mechanism. Assistance data from the wrong side of the world, feeding a receiver with the fewest
satellites it could legally be sold with.

**Direct consequence for a Romanian buyer:** Galileo is the European constellation and its
absence here is **permanent**. No firmware update adds a band the silicon cannot receive. Where
a vendor in this class advertises "Galileo", that claim is false on this chipset.

**The honest limit.** This is firmware architecture, not a field measurement. **No owner-side
constellation capture — GPSTest screenshot, logcat or NMEA dump — was found for any watch on
this platform**, across XDA (36 pages searched), the Full Android Watch forum, and Reddit. 4PDA
could not be reached (403, and both fallback proxies were down), so it is unverified rather than
empty. The ceiling is established; actual reception is not.
