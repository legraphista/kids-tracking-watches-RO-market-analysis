# Wingereich 4G (Wonlex-family OEM, Romanian marketplace brand)

```yaml
---
model:                  >-
                        Wingereich 4G — sold as two distinct hardware products under one brand:
                        "D-023" (1.91" Super AMOLED, eMAG PNK DQVXVGYBM / DDVXVGYBM) and
                        "D-011" (1.4" IPS, eMAG PNK DVXCJDYBM)
brand:                  Wingereich™ — a trademark of SWEINSTEIGER DB GROUP S.R.L. (RO),
                        CUI RO46765222, J40/17256/2022. Not a manufacturer.
release_year:           UNKNOWN — on sale in RO by November 2024 at the latest (dated owner report)
still_sold:             yes

# --- Romania verdict (the pass/fail question) ---
ro_status:              verified
ro_evidence_tier:       1 + 3 + 4 (vendor names RO operators; multiple dated RO first-hand
                        reports; the seller IS a Romanian SRL giving the 24-month legal
                        conformity guarantee). Tier 5 NOT reached — bands unpublished.
                        # 2026-08-19 full-pool read: ~11 named Digi owners, 1 Vodafone owner,
                        # 1 YOXO/Orange owner (all working) — see "eMAG full review pool".
ro_killer:              n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands:              UNKNOWN            # no band list published anywhere by anyone
band_b20:               UNKNOWN
band_b28:               UNKNOWN
volte:                  toggle exists, broken in practice   # a VoLTE switch EXISTS in the watch
                                           # menu; one owner's TWO units had garbled/one-way call
                                           # audio and the seller's official fix was to DISABLE
                                           # VoLTE (giggsy, 11 May 2026, D-023) — voice therefore
                                           # de facto rides 2G/CSFB. See review-pool section.
voice_fallback:         UNKNOWN
modem_chipset:          UNKNOWN

# --- Positioning (the #1 criterion) ---
positioning:            [GPS, AGPS, LBS, WiFi]   # vendor-stated. No GLONASS/Galileo/BeiDou claimed.
wifi_positioning:       true               # vendor-stated, and corroborated negatively by an
                                           # owner whose watch located ONLY on home wifi
update_interval_min:    UNKNOWN

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:            900 (D-023) / 700 (D-011)   # vendor-stated, two different products
battery_claimed_h:      168 (D-023) / 72 "minim 3 zile" (D-011)   # vendor figures
battery_observed_h:     >-
                        4 h - 3 days, bimodal by model and profile (FULL pool read 2026-08-19):
                        D-011 (700 mAh IPS) skews 2-3 days on light use but 7 h with sensors
                        active / 4 h with continuous monitoring (George, tested on 2 units);
                        D-023 (900 mAh AMOLED) skews hours-to-one-day (4-5 h x2 units, "cateva
                        ore", overnight standby 100%->50%), with 2-3 days only on monitoring-only
                        profiles (Dragos Dicu, Ema). Two units DOA (<1 h). Still ZERO
                        corroboration of 168 h; two owners explicitly ridicule the figure.

# --- App & service ---
app_name:               SeTracker2 (com.tgelec.setracker, SJE LIMITED); "Wonlex App" also
                        named as an alternative on the D-011 listing
app_android_min:        UNKNOWN
app_ro_playstore:       true
app_last_update:        2026-07            # per discovery sweep 2026-08-18; not re-verified here
data_region:            China              # SETracker backend hosted on Alibaba Cloud in China
                                           # (DEF CON 34, 2026-08-08)

# --- Practical ---
sim:                    nanoSIM            # eSIM explicitly NOT supported (seller, 2026-07-22)
water_rating:           IP67 (vendor-stated; "not for swimming or diving")
weight_g:               57 (D-023) / 55 (D-011)
camera:                 true
games:                  true
extras_disableable:     partial — **unverified**
price_eur:              ~80 (399.98 RON D-023 / 379.94 RON D-011; approximate conversion)
buy_from:               eMAG.ro marketplace, seller "Sweinsteiger Db Group FBE" (Romania)
price_ro_eur:           n/a — this IS the Romanian price
---
```

---

## Verdict

1. This is the only watch in the survey with a large body of dated Romanian owner evidence,
   and that evidence says it **connects and calls on Digi**, positions accurately for some
   owners and catastrophically for others, and **dies between 3 weeks and 13 months in six
   independent reports**.
2. The main risk is not Romania and not the radio — it is **build quality plus a Chinese
   shared backend that DEF CON 34 (2026-08-08) demonstrated can be used to spoof location,
   intercept messages, listen in silently and trigger the camera**.
3. It does **not** clear the floor: battery is unproven at one day under real tracking,
   positioning fails outright for at least two owners, and a 5★ owner with a 6-year-old says
   it is physically too big — the target child is 7.

---

## What "Wingereich" actually is

**Wingereich is a Romanian marketing label, and its own contact page proves it.**

The brand's shop, `wingereich.com`, discloses the operator as:

> SWEINSTEIGER DB GROUP S.R.L. — CUI **RO46765222**, Trade Register **J40/17256/2022**,
> Str. Lt. Col. Constantin Marinescu, Nr.12, Bl.A39, Sc.2, Ap.17, Sector 5, București —
> contact **wingereich@gmail.com**

(accessed 2026-08-19, https://www.wingereich.com/contact)

A company registered in Bucharest in 2022, whose registered seat is a flat, whose brand
contact address is a Gmail account, and whose webshop runs on the MerchantPro SaaS platform.
It is the same entity that appears as the eMAG seller ("Sweinsteiger Db Group FBE") and the
same entity a satisfied buyer thanks for support by name:

> **Spiridon Gabriela**, RO, 26 Jun 2026 — *"am luat legătura cu echipa SWEINSTEIGER DB
> GROUP S. R. L., care mi-a oferit suport prompt și eficient."*
> ("I got in touch with the SWEINSTEIGER DB GROUP S.R.L. team, who gave me prompt and
> efficient support.")

There is **no engineering team behind the name**. The hardware is Wonlex-family Shenzhen ODM
product: the D-011 listing itself names *"SeTracker2 (Android/iOS) sau Wonlex App"* as the
companion app. Treat every "Wingereich" claim as a reseller's claim.

### The correction that matters most: this is TWO different watches

The brief and the discovery sweep both treat "Wingereich 4G — 700 mAh — 524 reviews" as one
product. Direct retrieval on 2026-08-19 shows it is two:

| | **D-023** (DQVXVGYBM / DDVXVGYBM) | **D-011** (DVXCJDYBM) |
|---|---|---|
| Price | 399.98 RON | 379.94 RON (from 638.88) |
| Reviews | **524**, 4.77/5, 95% recommend | **152**, 4.7/5, 93% recommend |
| Screen | 1.91" Super AMOLED | 1.4" IPS LCD |
| Size / weight | 45 × 35 × 15 mm, 57 g | 55 × 43 × 15 mm, 55 g |
| Battery (claimed) | **900 mAh / up to 168 h** | **700 mAh / "minim 3 zile"** |
| SoC / memory | single-core 1 GHz, 1 GB / 8 GB, Android 8.1 Oreo | quad-core, 512 MB / 4 GB |
| Camera | HD + heart-rate sensor | 1.3 MP |
| App store on watch | **Google Play** | WhatsApp only, "din watch app store" |

The **700 mAh figure in the brief belongs to the D-011**, which has 152 reviews — not to the
524-review listing. And, as retrieved on 2026-08-19, most of the named reviews in the brief
(Mazilu Iulia Alexandra, Murariu Madalin, Trandafir A, Alin, Laura Zeicu, MarianI, Vt, c-ian,
Spiridon Gabriela) appear on the **D-011** page, while Goagas Radu, Butnaru Andreea, Raluca
Gingu and the Ciprian Q&A appear on the **D-023** page. The discovery sweep filed them all
under one URL. **The "524 reviews" figure therefore cannot be used as the evidence base for
any single piece of hardware.** Both listings are covered below, labelled per report.

---

## Does it work in Romania?

**Yes, on Digi — confirmed, dated, first-hand. Orange is a live open question.**

**Confirmed working:**

- **Ciprian**, RO, eMAG Q&A **02 Mar 2026** (D-023): *"Eu am pus Digi si merge perfect."*
  ("I put in a Digi [SIM] and it works perfectly.")
- **Alin**, RO, **16 Jul 2026** (D-011) — a hostile 1★ review that incidentally confirms the
  radio: *"am bagat acel sertat pt SIM mai inauntru si semnlul pe DIGI a aparut, totul ok"*
  ("I pushed that SIM tray further in and the DIGI signal appeared, all fine"). A negative
  reviewer confirming carrier registration is stronger evidence than a positive one.
- Both listings state: *"Functioneaza in retelele: DiGi/Vodafone/Orange/Telekom"*
  — **this is seller marketing copy, not a test result.** Telekom Mobile no longer exists as
  a separate Romanian network, which tells you how carefully the copy is maintained.
- **The warranty entity is Romanian.** The D-023 listing states *"garantie legala de
  conformitate de 24 de luni"* ("24-month legal guarantee of conformity") and the seller is a
  Romanian SRL, so consumer recourse is Romanian law against a Romanian counterparty. That is
  genuinely better than most of the field.

**Counter-evidence, and it points at Orange:**

- **Apetre Constantin Ioan**, RO, eMAG Q&A **05 Feb 2026** (D-023):
  *"Buna! De la ce operator de mobil aveți cartela în acest ceas? Eu am pus una de pe YOXO și
  nu funcționează"* ("Hi! Which mobile operator's SIM do you have in this watch? I put in a
  YOXO one and it doesn't work.") **YOXO is Orange Romania's digital sub-brand.**
- **Alexandru Tanasa**, RO, eMAG Q&A **18 May 2025** (D-011): *"Salut. Functioneaza cu cartela
  Yoxo?"* ("Hi. Does it work with a Yoxo SIM?") — **never answered by the seller.**

So: one dated Orange-network failure report, one unanswered Orange question, **zero Orange
success reports**, against two Digi confirmations. This is **exactly the asymmetry you would
expect from a unit without B20**, since B20 is Orange's only sub-1 GHz LTE band (OPTIONS.md).
It is **not proof** — a YOXO SIM can fail for APN or SIM-PIN reasons too — but it is the
single most important unresolved fact about this watch.

**[SUPERSEDED 2026-08-19 — the full review pool (524 + 152 texts) was read in a logged-in
browser session and the Orange asymmetry DISSOLVES: one dated owner report of a YOXO SIM
working (Adrian, 24 Aug 2025, D-023), one explicit Vodafone-working report (Dinica Stela,
18 Jul 2025, D-023), one owner recommending Orange or Vodafone over Digi, ~11 named Digi (5 on D-023, 6 on D-011 — the ~9 was an undercount against the pool table)
confirmations — and Apetre Constantin Ioan, the YOXO failure above, returned on 01 May 2026
with a 4★ "recomand" review saying the initial setup must be done over the SIM's mobile data.
See "eMAG full review pool (2026-08-19)" below for the verbatim quotes.]**

**Still unproven:** LTE bands (nobody publishes them), VoLTE in practice on any Romanian SIM,
whether Orange works at all, and whether two units bought a year apart carry the same radio.

---

## Pre-purchase test

1. **SeTracker2 is already live in the Romanian Play storefront** with Romanian-language
   reviews, so the "will the app accept a +40 account" gate is not the primary risk here —
   the backend's *health* is (see Security & privacy). Install it and complete registration
   before the watch arrives.
2. **Buy a Digi SIM, not Orange or YOXO**, unless you are prepared to be the person who
   settles the Orange question. Two dated Digi confirmations exist; zero Orange ones do.
3. **On day one, inside the return window:** place an outgoing *and* an incoming voice call
   on LTE, then check the location **inside the school building**, not in the garden. Both
   owners whose positioning failed (Mazilu, Murariu) had watches that *appeared* to work at
   home.
4. **Return window:** eMAG marketplace orders carry the 14-day EU distance-selling right;
   eMAG's own 30-day policy applies to items sold and shipped by eMAG (1P), which this is not
   — it ships FBE from a marketplace seller. **Assume 14 days.** Given owners reporting units
   dying at 2–3 weeks, 4 months and 5 months, 14 days is short relative to the observed
   failure distribution.
5. **Handle the SIM tray carefully.** Three separate buyers could not find the SIM slot
   (Andra Mitan 07 Jul 2026; Dinca Delia 14 Jul 2026; Adrian Ioan 19 Jul 2026, all D-011),
   and Alin's "no signal" turned out to be an under-inserted tray.
6. **Try it on the child's wrist before day 14** — see the size section.

---

## Positioning quality in real use

Vendor-stated stack: **GPS + AGPS + LBS + WiFi**. No GLONASS, Galileo or BeiDou is claimed by
either listing; no dual-band L1+L5. So the hardware has exactly the architecture that produces
this category's defining failure — a wifi/cell-tower fix presented to the parent as a location,
with no error state.

**It works well for some owners.** Four independent dated reports:

- **Vt**, RO, 19 Jun 2026 (D-011): *"Funcția de localizare este precisa."* ("The location
  function is precise.")
- **MarianI**, RO, 08 Jun 2026 (D-011): *"Locatia e foarte precisa bateria tine destul de mult
  fata de alta ceasuri."* ("The location is very precise, the battery lasts quite a while
  compared to other watches.")
- **Laura Zeicu**, RO, 04 Jul 2026 (D-011): *"precizie destul de bună, pot cere oricand o
  reimprospatare a locației si aceasta se afișează in câteva secunde."* ("decent accuracy, I
  can request a location refresh at any time and it displays within seconds.")
- **Raluca Gingu**, RO, 24 Jul 2026 (D-023): *"locatie exacta"* ("exact location").

**And it fails outright for others.** Four independent dated reports:

- **Mazilu Iulia Alexandra**, RO, **30 Jul 2026**, 1★ (D-011):
  *"Efectiv niciodata nu isi ia localizarea. Doar dimineata pe wifi conectat apare locatia.
  Incerc un refresh si nimic."*
  ("It effectively never gets its location. Only in the morning, connected to wifi, does the
  location appear. I try a refresh and nothing.")
  **This is the disqualifying failure mode.** A watch that only knows where it is on home
  wifi knows nothing during the school day — which is the entire use case.
- **Murariu Madalin**, RO, **29 Jul 2026**, 3★ (D-011):
  *"Ok dar locatia lasa de dorit cateodata. Fiica mea apare in Venezuela......"*
  ("OK, but the location leaves something to be desired sometimes. My daughter shows up in
  Venezuela......") Textbook wifi-BSSID drift — a router whose MAC is registered against the
  wrong country in the geolocation database.
- **Adrian Ilea**, RO, eMAG Q&A **26 Jun 2025** (D-011):
  *"L-am conectat la aplicația SeTracker2 și îmi apare cu locația cesului în China."*
  ("I connected it to the SeTracker2 app and it shows the watch's location in China.")
  **Unanswered by the seller.** This is the platform's default/uninitialised position leaking
  through — the watch reporting the server's home, not the child's.
- **Trandafir A**, RO, 16 Jul 2026 (D-011): *"localizarea durea acel refresh"* ("the location
  — that refresh took a while"), i.e. slow fix even on an otherwise working unit.

**Read together: 4 accurate, 4 broken, same brand, same months.** There is no way to predict
which one arrives, and the failure is silent — the parent sees *a* pin, never an error.

---

## Battery in real use

**Claimed (vendor, attributed):** D-023 — *"Baterie polimer de 900 mAh"*, *"autonomie de până
la 168 ore între încărcări"* ("autonomy of up to 168 hours between charges"). D-011 —
*"Bateria de 700 mAh"*, *"autonomie de minim 3 zile, in functie de modul de utilizare"*
("autonomy of at least 3 days, depending on how it is used").

**Observed (owners, dated):**

| Report | Date | Model | Observed | Stated usage |
|---|---|---|---|---|
| Butnaru Andreea, 3★ | 27 Jul 2026 | D-023 | *"bateria tine câteva ore"* — a few hours | not stated |
| Raluca Gingu, 5★ | 24 Jul 2026 | D-023 | *"se descarca repede"* — drains fast | *"ceasul este folosit strict pentru vorbit… probabil din cauza ca este localizarea activata"* — used strictly for talking; she attributes the drain to location tracking being enabled |
| MarianI, 5★ | 08 Jun 2026 | D-011 | *"tine destul de mult fata de alta ceasuri"* — lasts quite a while, vs other watches | not stated |
| Alin, 1★ | 16 Jul 2026 | D-011 | **<1 hour, two units** | both units defective / effectively DOA |

**The honest reading of the contradiction:**

- It is **not symmetric**. The only owner who *qualifies her usage* — Raluca Gingu — is the
  one reporting fast drain, and she names the cause: **location tracking active**. The
  favourable report (MarianI) is comparative and unqualified ("longer than other watches"),
  which is the weakest possible form of a battery claim.
- **Nobody in the retrieved corpus reports days.** Not one owner corroborates 168 h, or even
  72 h. Those are marketing figures with zero owner support anywhere in 676 reviews' worth of
  listings.
- Alin's two sub-hour units are a **defect**, not a battery datapoint, and should not be
  averaged in — but they belong in the QC section below.

`battery_claimed_h` and `battery_observed_h` are kept separate in the front matter for exactly
this reason. **Observed evidence does not currently support one school day with tracking on.**

---

## Network & bands

**No LTE band list exists for this product.** Not on either eMAG listing, not on
wingereich.com, and **no CE/RED Declaration of Conformity for either SKU could be located**.
The seller is the party legally responsible for holding that DoC as the EU distributor; it is
not published anywhere reachable.

What the listings do say:

- *"VOLTE (Voice over LTE): Permite realizarea de apeluri de inalta calitate prin reteaua
  LTE."* ("VoLTE: allows high-quality calls over the LTE network") — a **claim**, on both
  SKUs, with no operator named, no IMEI/TAC, and no owner report confirming VoLTE specifically.
- The D-023 spec table lists connectivity as **"4G/3G/LTE"**. Romania has no 3G on any
  operator (Orange completed shutdown end-2025, per OPTIONS.md). A spec sheet advertising 3G
  in 2026 is a copy-paste artefact, and it tells you how much weight band information from the
  same source would deserve if it existed.

**Why B20 is the whole question, and why it is unanswerable here.**
Per OPTIONS.md, on the Wonlex/UNISOC white-label platform **B20 is a build-time option chosen
per production order** — same model name, same photos, different radio. The reference Wonlex
4G module documented in this project (KT30) publishes **FDD B1/B3/B5/B8 — no B20, no B7, no
B28**. If this SKU inherits that build, then on Orange it has **zero sub-1 GHz LTE**, which is
consistent with the YOXO failure report above and would mean poor coverage inside a concrete
school building on a wrist-sized antenna. **This remains a hypothesis, not a finding.**

**Two units bought a year apart from this seller may not have the same radio**, and no
document exists that would tell you — the seller does not publish a DoC and does not answer
questions (see below).

**If 2G is retired:** unknowable, because VoLTE is unverified. If VoLTE does not actually
provision on the Romanian SIM you use, voice today is riding 2G CSFB and disappears when 2G
does. Prefer Digi or Orange over Vodafone for that reason alone (OPTIONS.md).

---

## Features & what can be disabled

The D-023 is, functionally, **a wrist-worn Android 8.1 phone with Google Play** — its eMAG
title literally advertises *Google play, Whatsapp, Tiktok, Instagram, Youtube, Facebook*. For
a 7-year-old this is the opposite of what you want: more attack surface, more battery drain,
and more reasons for a school to confiscate it.

**What the seller claims can be turned off** (marketing copy, attributed, not restated as fact):

> *"din aplicatie SeTracker2 poti dezactiva toate aplicatiile nefolositoare din ceas"*
> ("from the SeTracker2 app you can disable all the unnecessary apps on the watch")

> *"Administrarea ceasului se face prin aplicatia SeTracker2 (localizare, agenda de contacte
> si apeluri permise, buton SOS)"* ("The watch is administered through the SeTracker2 app
> (location, contact list and permitted calls, SOS button)")

> *"Remote shutdown: Capacitatea de a opri dispozitivul de la distanta."*
> ("Remote shutdown: the ability to switch the device off remotely.")

**What contradicts it:**

1. **The adult-Google-account problem.** The listing states:
   *"Pe ceas se poate folosi un cont Google de adult, necesar exclusiv pentru instalarea
   aplicatiilor din Google Play"* ("An adult Google account can be used on the watch, required
   solely for installing apps from Google Play"). To put anything on the watch you must sign
   it into an **adult** account — which by construction carries **no Family Link supervision,
   no content-rating filter, no screen-time control**. No supervised-child-account path is
   documented, and the listing does not claim one.
2. **Remote control does not always work.** Mazilu Iulia Alexandra, RO, 30 Jul 2026:
   *"Whatup nu merge, nici nu se deschide aplicatia. Remote nu ii pot da restart sau sa
   modific din setari."* ("WhatsApp doesn't work, the app doesn't even open. Remotely I can't
   restart it or change anything in settings.") If remote settings fail, the disabling
   mechanism fails with them.
3. **No "class mode" / "mod școală" is documented** on either listing. Geofencing
   (*"Zona de delimitare virtuala"*) is present; a scheduled school-hours lockout is not
   evidenced anywhere.

**What does work, per owners:**

- **Contact whitelist — independently confirmed.** Vt, RO, 19 Jun 2026: *"Îmi place că
  apelurile sunt limitate doar de la numerele care le are în agenda (aceste numere sunt
  introduse de părinte)."* ("I like that calls are limited to the numbers in the contact
  list — these numbers are entered by the parent.") The D-011 listing states a 50-number
  whitelist and 3 SOS contacts.
- Camera, video call, music playback, math games, pedometer, sleep tracking, face unlock —
  all present, none evidenced as individually lockable.

**Verdict on `extras_disableable`: `partial`, explicitly unverified.** The parent app claims
app-disabling; **no independent owner confirms it**; one owner reports remote settings not
working at all; and the Google Play route requires an unsupervised adult account. Buying this
means trusting a one-sentence claim from a Gmail-contact reseller to keep TikTok off a
7-year-old's wrist.

---

## Security & privacy

This section is the strongest argument against the watch, and it is entirely about the
platform, not the plastic.

### 1. The 2026 platform research — current, severe, unfixed

**"Tracking the Trackers", DEF CON 34, presented 8 August 2026**, by **Felipe Solferini and
Vangelis Stykas**. The researchers attacked the *backends* rather than the devices, covering
three Shenzhen platforms:

- **SETracker — approximately 10 million watches — data hosted on Alibaba Cloud in China.**
- SinoTrack (>6 M vehicle trackers) and TKSTAR/Thinkrace (>20 M devices).

Their framing was **"39 brands, one server"**, with **Wonlex named explicitly** alongside
SaveFamily, KidiWatch, Garett Kids, Carneo Guard, Osmile, Kuus and Beafon. As reported: moving
from Wonlex to SaveFamily *"is a sticker change"*.

Demonstrated capabilities against these backends: **read and spoof location, intercept text
and voice messages, listen in silently, and trigger the camera — with nothing visible on the
watch.**

**Vendor response:** Wonlex published a blog post on **10 August 2026** claiming three points
were "fixed" following an "internal security audit", **without mentioning the researchers or
the conference**. SinoTrack and Thinkrace did not respond at all. There is **no evidence the
issues are fixed**, and no CVE, advisory or patch note tied to this product.

**This watch runs SeTracker2 on the SETracker backend. It sits inside the population studied.**

### 2. The older baseline — this is not new

**STALK: Security Analysis of Smartwatches for Kids** — Christoph Saatjohann, Fabian Ising,
Luise Krings, Sebastian Schinzel, **ARES 2020, 11 August 2020** *(2020 source — six years old,
flagged as such)*. Six kids' smartwatches and their platforms were analysed; findings included
*"sensitive data disclosure, complete watch takeover, and illegal remote monitoring
functionality."* The same platform family produced the same class of finding six years before
DEF CON 34. **The 2026 work is not a regression; it is a continuation.**

### 3. Data hosting jurisdiction

**China.** SETracker's data sits on **Alibaba Cloud in China** per the DEF CON 34 reporting.
Neither eMAG listing, nor wingereich.com, nor the SeTracker2 store entry surfaces a GDPR
controller, a data-processing agreement, an EU representative, or a retention policy for a
Romanian buyer. The Romanian SRL selling the watch is your consumer-law counterparty for the
*hardware*; it is not the data controller for your child's location history, and it does not
say who is.

### 4. Covert remote listening — advertised, not hidden

**The remote-listen capability is a selling point in the product title.** Every Wingereich
eMAG listing carries the words **"monitorizare spion"** ("spy monitoring") in its own title.
This is the classic SeTracker "voice monitor" / callback behaviour: the parent app dials the
watch, the watch answers silently with no ring, no screen change and no indication to the
child, and the parent hears the room.

A buyer asked how to switch it on, and **the seller never answered**:

> **Balta Nicusor**, RO, eMAG Q&A **22 Mar 2026** (D-023):
> *"Buna seara. Cum se activează funcția monitorizare spion? Mulțumesc."*
> ("Good evening. How do you activate the spy monitoring function? Thank you.")

**Can it be locked?** **No evidence of any kind that it can.** No listing, no manual reference,
and no owner report describes disabling it. Given that DEF CON 34 demonstrated silent
listening against the SETracker backend from the *outside*, a feature designed to work
silently from the inside is the mechanism, not the mitigation. Note also that a device with an
undisclosable listening function is the exact class Germany's Bundesnetzagentur has banned
from sale — **unverified** as to whether that specific ruling names this platform.

### 5. The "666test" notifications — what I could and could not establish

**The report:** the discovery sweep (`.discovery/lens-5-romania.md`, compiled 2026-08-18)
records **two separate 1★ Romanian-language reviews of `com.tgelec.setracker` dated
2026-04-23** in which parents describe receiving notifications from an unknown account named
**"666test"**:

> *"Am impresia ca mai stau si alții pe langa noi părinții si fac supravegherea"*
> ("I get the impression that other people besides us parents are doing the monitoring too")

> *"THIS MEANS IT'S A VIRUS!"*

**Status: I could not independently re-retrieve these two reviews in this pass.** The Google
Play web listing returned truncated content to the fetcher on two attempts and AppBrain
returned HTTP 403. This project's own discovery sweep is therefore the sole source, and the
quotes above are reproduced **as reported and unverified by direct retrieval on 2026-08-19**.
The session's web-search budget was exhausted before an alternate mirror could be located.

**What "666test" most plausibly is — mechanism, not conclusion.** SeTracker binds a parent
account to a watch by **device ID**, and documented SeTracker behaviour is that when a second
account attempts to bind a watch ID that is already claimed, the existing administrator
receives an in-app **notification asking to approve the request**. A notification arriving
from an account literally named `666test` is consistent with two explanations, and the
available evidence does not distinguish them:

- **(a) A factory/QC test account left bound.** `666test` reads exactly like a Shenzhen
  production-line test login. If the ODM's QC account was never unbound from that device ID,
  the parent inherits a watch that a third party still administers.
- **(b) Device-ID collision across units.** If two physical watches ship with the same or
  colliding device ID, two unrelated families' accounts bind to the same record — and each
  sees the other's notifications.

**Either explanation is a multi-tenant leak on a child-tracking platform**, and both are
precisely the shared-backend architecture DEF CON 34 described four months later. It is **not**
a virus — the reviewer's reading is wrong about the mechanism and right about the alarm.

**Not established:** which explanation is correct, how many accounts were affected, whether
location or audio was exposed rather than only notifications, and whether anything was fixed.
No vendor statement on it exists.

---

## Reality check

| Marketing claim | Observed reality |
|---|---|
| *"autonomie de până la 168 ore"* (up to 168 h) | **Zero owners corroborate it.** Reports run from *"câteva ore"* (a few hours) to an unquantified *"destul de mult"*. The one owner who states her usage says it drains fast **with location tracking on** — i.e. in the only configuration that matters |
| *"Functioneaza in retelele: DiGi/Vodafone/Orange/Telekom"* | **Digi confirmed twice.** Orange has one dated failure (YOXO SIM) and one unanswered question, and zero confirmations. Telekom Mobile no longer exists as a Romanian network |
| *"4G/3G/LTE"* + *"VOLTE"* | No band list exists, no CE/RED declaration is published, VoLTE is unconfirmed by any owner, and the 3G advertised does not exist in Romania |
| *"localizare GPS"* / *"locatie exacta"* | GPS+AGPS+**LBS+WiFi**. Four owners get accurate fixes; four get home-wifi-only, Venezuela, China, or a slow refresh. It is a coin flip, and the failure is silent |
| *"Google play, Whatsapp, Tiktok, Instagram, Youtube, Facebook"* on a kids' watch | Requires signing the watch into an **adult** Google account with no Family Link supervision. Sold as a feature; for a 7-year-old it is the liability |
| *"monitorizare spion"* | A covert room-listening function, advertised in the title, with no documented way to lock it, on a backend where DEF CON 34 demonstrated silent listening by outsiders |
| *"garantie legala de conformitate de 24 de luni"* | Real, and Romanian — but one owner's warranty replacement **developed the identical fault**, and three owners could not obtain a strap or a charger at all |

---

## What users say

All reports are Romanian (RO), from eMAG, retrieved 2026-08-19. Model noted per report. Star
ratings shown where eMAG surfaced them.

### Works

- **Ciprian**, RO, 02 Mar 2026, Q&A (D-023) — *"Eu am pus Digi si merge perfect."*
  ("I put in a Digi [SIM] and it works perfectly.")
- **MarianI**, RO, 08 Jun 2026, 5★ (D-011) — *"Calitate foarte buna. L-am luat in urma review
  urilor si nu-mi pare rau. Copilul e foarte incantat. Locatia e foarte precisa bateria tine
  destul de mult fata de alta ceasuri."* ("Very good quality. I bought it after the reviews
  and I don't regret it. The child is delighted. The location is very precise, the battery
  lasts quite a while compared to other watches.")
- **Vt**, RO, 19 Jun 2026, 5★ (D-011) — *"Este primul ceas care l-am cumpărat pentru copil.
  Îmi place că apelurile sunt limitate doar de la numerele care le are în agenda (aceste
  numere sunt introduse de părinte). Funcția de localizare este precisa. Partea de apelare
  este una normala, nimic de comentat."* ("This is the first watch I bought for my child. I
  like that calls are limited to the numbers in the contact list — these are entered by the
  parent. The location function is precise. The calling side is normal, nothing to comment
  on.") — the clearest positive on parental control.
- **c-ian**, RO, 24 Jun 2026, 5★ (D-011) — *"Pentru ca face ce zice, micuta ii da 10+, chiar
  si dupa 6 luni de utilizare"* ("Because it does what it says, my little one gives it 10+,
  even after 6 months of use.") — **the longest confirmed trouble-free run in the corpus.**
- **Spiridon Gabriela**, RO, 26 Jun 2026, 5★ (D-011) — *"Ceasul face tot ceea ce promite în
  descriere. Are Play Store, de unde se pot descărca aplicații precum WhatsApp, YouTube și
  multe altele. Inițial am întâmpinat dificultăți la instalarea aplicațiilor"* ("The watch
  does everything the description promises. It has Play Store, from which you can download
  apps like WhatsApp, YouTube and many others. Initially I ran into difficulties installing
  apps") — resolved by seller support.
- **Laura Zeicu**, RO, 04 Jul 2026, 5★ (D-011) — *"precizie destul de bună, pot cere oricand o
  reimprospatare a locației si aceasta se afișează in câteva secunde."* ("decent accuracy, I
  can request a location refresh at any time and it displays within seconds.")
  **But in the same review:** *"Dupa aproximativ 1 an, a rupt cele 2 plasticuri care țin
  cureaua strânsă și nu stiu de unde as putea cumpăra pentru înlocuit"* ("After about 1 year
  the 2 plastic clips that hold the strap tight broke, and I don't know where I could buy
  replacements.")
- **Raluca Gingu**, RO, 24 Jul 2026, 5★ (D-023) — *"se aude foarte bine in apel normal"*;
  *"se aude si se vede foarte bine in apel video pe whatsapp"*; *"locatie exacta"*;
  *"aplicatia SeTracker2 functioneaza si se sincronizeaza foarte ok cu ceasul"*
  ("sounds very good on a normal call"; "sounds and looks very good on a WhatsApp video call";
  "exact location"; "the SeTracker2 app works and syncs very well with the watch").
  **With two caveats, quoted in full below.**
- **Szikszai Petru Cristian**, RO, 29 Jul 2026 (D-023) — *"Un gadget ideal pentru un copil de
  6 ani. Functia de tracking este foarte utila"* ("An ideal gadget for a 6-year-old child.
  The tracking function is very useful.")

### Fails

- **Gabi Coman**, RO, 02 May 2025, Q&A (D-011) — *"au trecut 5 luni de la achizitionare, iar
  touchscreen-ul nu mai functioneaza deloc. Tin sa mentionez faptul ca dispozitivul fost
  folosit ocazional, nicidecum in fiecare zi."* ("5 months have passed since purchase and the
  touchscreen no longer works at all. I should mention the device was used occasionally, not
  every day.") **Unanswered by the seller.**
- **Adrian Ilea**, RO, 26 Jun 2025, Q&A (D-011) — *"L-am conectat la aplicația SeTracker2 și
  îmi apare cu locația cesului în China."* ("I connected it to the SeTracker2 app and it shows
  the watch's location in China.") **Unanswered.**
- **Huncu**, RO, 20 Aug 2025, Q&A (D-011) — *"după aproximativ 2-3 săptămâni, dispozitivul nu
  mai merge. A fost lăsat la încărcat și nu se mai aprinde."* ("after about 2-3 weeks the
  device stopped working. It was left charging and won't turn on again.") **Unanswered.**
- **Apetre Constantin Ioan**, RO, 05 Feb 2026, Q&A (D-023) — *"Eu am pus una de pe YOXO și nu
  funcționează"* ("I put in a YOXO one and it doesn't work.") — YOXO is an Orange sub-brand.
- **Alin**, RO, 16 Jul 2026, 1★ (D-011) — *"Am luat 2 ceasuri pentru fetitele mele gemene. La
  primul din ele, cel roz, dupa cateva secunde se inchidea si imi arata baterie descarcata cu
  toate ca, inainte era full battery… i-l dau copilului si dupa nici o ora se stinge… nicio
  sansa, un dezastru. Tind sa cred ca cele 2 telefoane ori au fost resigilate, refuzate de
  altii si trimise mie"* ("I bought 2 watches for my twin daughters. The first, the pink one,
  shut down after a few seconds showing an empty battery even though it was full before… I
  give it to the child and in under an hour it dies… no chance, a disaster. I tend to believe
  the 2 units were either resealed, rejected by others and sent to me.")
- **Trandafir A**, RO, 16 Jul 2026 (D-011) — *"Am cumpărat acest ceas in noiembrie 2024,
  copilul l-a folosit aproximativ 4 luni dupa care a uitat de el. Anul acesta când l-am folosit
  numai mergea touch-ul. Mi l-au schimbat pe garantie in luna aprilie-mai, insa si acesta acum
  are aceeasi problema, touch-ul nu mai funcționează."* ("I bought this watch in November 2024,
  the child used it about 4 months then forgot about it. This year when we used it the
  touchscreen no longer worked. They replaced it under warranty in April–May, but this one now
  has the same problem, the touchscreen no longer works.")
  **The warranty replacement failed identically.**
- **Butnaru Andreea**, RO, 27 Jul 2026, 3★ (D-023) — *"Este foarte fain, dar bateria tine
  câteva ore"* ("It's very nice, but the battery lasts a few hours.")
- **Murariu Madalin**, RO, 29 Jul 2026, 3★ (D-011) — *"Ok dar locatia lasa de dorit cateodata.
  Fiica mea apare in Venezuela......"* ("OK, but the location leaves something to be desired
  sometimes. My daughter shows up in Venezuela......")
- **Goagas Radu**, RO, 30 Jul 2026 (D-023) — *"Dupa 1 an si o luna a cedat difuzorul, nu mai
  suna si s-a si dezlipit spatele"* ("After 1 year and 1 month the speaker gave out, it no
  longer rings, and the back cover came unstuck.")
- **Mazilu Iulia Alexandra**, RO, 30 Jul 2026, 1★ (D-011) — *"Din pacate nu l-am testat de la
  inceput, probabil l-am fi returnat. Efectiv niciodata nu isi ia localizarea. Doar dimineata
  pe wifi conectat apare locatia. Incerc un refresh si nimic. Whatup nu merge, nici nu se
  deschide aplicatia. Remote nu ii pot da restart sau sa modific din setari. Efectiv il
  folosim doar pt. A vb la telefon. Atat.:("* ("Unfortunately I didn't test it from the start,
  we probably would have returned it. It effectively never gets its location. Only in the
  morning, connected to wifi, does the location appear. I try a refresh and nothing. WhatsApp
  doesn't work, the app doesn't even open. Remotely I can't restart it or change anything in
  settings. We effectively use it only to talk on the phone. That's it. :(")

### The two caveats inside the best positive review

**Raluca Gingu**, RO, 24 Jul 2026, **5★** (D-023):

> *"Ca dimensiune recomand pentru copii de la 8 ani in sus! (al meu are 6 ani si este cam mare
> pentru manuta lui)"*
> ("For size, I recommend it for children from 8 years up! (mine is 6 and it's rather big for
> his little hand)")

> *"bateria se descarca repede (ceasul este folosit strict pentru vorbit) probabil din cauza
> ca este localizarea activata"*
> ("the battery drains fast (the watch is used strictly for talking), probably because
> location tracking is enabled")

**A 5★ reviewer telling you it is too big for a 6-year-old and that the battery collapses
under tracking is worth more than fifty one-line 5★ reviews.**

---

## Counting the reports honestly

**8 detailed independent positives vs 10 detailed independent negatives**, all dated, all
Romanian, spanning May 2025 – July 2026.

Against a headline of **4.77/5 across 524 reviews, 95% recommending**.

**Those two numbers are not describing the same thing, and here is why the headline should be
heavily discounted:**

1. **Clustering.** Page one of the D-023 review stream, retrieved 2026-08-19, is dated
   **20, 24, 24, 25, 27, 27, 27, 28, 29, 30 July 2026** — ten reviews inside eleven days.
2. **Genericity.** Seven of those ten are a single clause: *"Un ceas super ok"*, *"Un produs
   foarte bun"*, *"Copilul este mulțumit"* ("A super OK watch", "A very good product", "The
   child is satisfied"). They contain no fact that could be checked, and no fact that could
   only be known by an owner.
3. **A repeated name.** *"Petre Aurel"* posted on **24 Jul 2026** (black variant) and again on
   **27 Jul 2026** (light pink variant) — two colours, three days apart, both short and
   positive.
4. **Asymmetric detail.** Every long review in the corpus contains a complaint; every one-line
   review is 5★. Length correlates with negativity, which is the opposite of the normal
   pattern for a well-liked product and the expected pattern where short positives are
   solicited.
5. **The seller does not answer questions.** Most Q&A entries above sit unanswered, and one
   buyer said so out loud — **Balaioara Tudor**, RO, 11 Feb 2026: *"De nu răspundeți la
   întrebări?"* ("Why don't you answer questions?"). Several answers that do exist come from
   *other buyers* (Ciprian, Irina, Emilian), not from the seller.

**Weight the detailed and the negative. Discount the 4.77.**

### The QC pattern, stated plainly

Six independent reports of hardware death, ordered by time-to-failure:

| Time to failure | Report | Date | What died |
|---|---|---|---|
| **<1 hour, ×2 units** | Alin | 16 Jul 2026 | battery / immediate shutdown, both twins' watches |
| **2–3 weeks** | Huncu | 20 Aug 2025 | dead on charge, won't power on |
| **4 months** | Trandafir A | 16 Jul 2026 | touchscreen — **and the warranty replacement died the same way** |
| **5 months** | Gabi Coman | 02 May 2025 | touchscreen, occasional use only |
| **~12 months** | Laura Zeicu | 04 Jul 2026 | strap clips; no spare parts obtainable |
| **13 months** | Goagas Radu | 30 Jul 2026 | speaker + back cover detached, light use |

**The touchscreen is the recurring component** — two independent owners, plus one warranty
replacement, making three failures of the same part. And the **warranty replacement failing
identically** is the single most damning fact in the file: it means the fault is in the design
or the batch, not the individual unit, and that an RMA does not fix it.

Compounding it: **three independent owners could not obtain spare parts** — Laura Zeicu
(strap, 04 Jul 2026), Olariu Claudia (strap, 24 Jun 2025), Carla (charger, 24 Jun 2025) — all
unanswered by the seller. A 24-month legal guarantee is worth less when the failure is a 3 EUR
plastic clip nobody will sell you.

### Size for a 7-year-old

- **D-023: 45 × 35 × 15 mm, 57 g.** **D-011: 55 × 43 × 15 mm, 55 g**, strap length 23 cm.
- **Against:** Raluca Gingu, 24 Jul 2026 — recommends **8+**, says it is *"cam mare pentru
  manuta lui"* ("rather big for his little hand") on her 6-year-old.
- **For:** Szikszai Petru Cristian, 29 Jul 2026 — *"Un gadget ideal pentru un copil de 6 ani."*
  ("An ideal gadget for a 6-year-old child.")
- **One explicit report each way**, both about 6-year-olds, so a 7-year-old sits between them.
  Note that **15 mm thick at 55–57 g is heavy for a small wrist**, and the D-011's 55 mm case
  length is substantial across a 7-year-old's forearm. **Neither listing states a minimum age
  or a wrist-circumference range.** Try it on inside the return window; do not resolve this
  from a spec sheet.

---

## eMAG full review pool (2026-08-19)

**The pagination wall fell — and the mechanism is now established.** The prior pass's "eMAG's
paginated review endpoints returned 404 to the fetcher" (this doc) and the WIRSEN doc's
"302 → auth.emag.ro" are the **same artefact seen from two URLs**: eMAG review pagination is an
in-page XHR, not a URL parameter, so *any* URL-based fetch fails. In a logged-in Chrome
session, every page of reviews on both listings rendered through the on-page "Pagina
urmatoare" control with **no login prompt at any depth**. Word-probes used the listings' own
review search boxes (`orange`, `vodafone`, `digi`, `yoxo`, `telekom`, `family link`, `km`,
`China`, `defect`, `garantie`, `schimbat`, `zile`).

| Metric | **D-023** (DQVXVGYBM, 900 mAh AMOLED) | **D-011** (DVXCJDYBM, 700 mAh IPS) |
|---|---|---|
| Star distribution (new) | **457 / 37 / 15 / 5 / 10** = 524 | **125 / 16 / 6 / 2 / 3** = 152 |
| Texts read | all 67 at 1–4★ **in full**; all 5★ swept page-by-page (~53 pages), substantive ones in full | **all 152** (27 at 1–4★ in full; 125 at 5★ swept, substantive in full) |
| Carriers named | **Digi ×5 working** + 1 anti-Digi advice; **Vodafone ×1 working**; **YOXO (Orange) ×1 working**; Telekom 0 | **Digi ×6 working** (one of them advising against Digi for ring reliability); Orange/Vodafone/YOXO: 0 |
| Dead / replaced / defective units in reviews | **13 owners / 524 texts (2.5%)** | **~10 owners / 152 texts (6.6%)** |
| Battery figures | hours-to-1-day dominates; 2–3 days only monitoring-only | 2–3 days common on light use; **7 h sensors-on / 4 h continuous monitoring** (2 units) |
| km-scale position errors | 3 (few km / 3 km / **10 km**) + 1 "China" + 1 frozen-on-highway | "Venezuela" + "China" (known) + city-scale error (DianaB) |

### Carriers — Orange and Vodafone finally have owner datapoints (all D-023 unless noted)

- **YOXO = Orange network, WORKING** — **Adrian**, 24 Aug 2025, 5★:
  *"Ceasul functioneaza perfect, am pus cartela yoxo, merge whatsapp, poate naviga pe internet
  iar actualizarea locatiei este buna."*
  ("The watch works perfectly, **I put in a YOXO SIM**, WhatsApp works, it can browse the
  internet and the location updating is good.") — **the first Orange-network success report in
  this entire project.** One owner, one sentence, but it exists.
- **Vodafone, WORKING** — **Dinica Stela**, 18 Jul 2025, 5★:
  *"acum dupa cateva luni de folosire, imi arata locatia precisa, il folosesc cu o cartela sim
  vodafone si il pot suna si invers si se aude chiar ok. Bateria tine cam 2 zile."*
  ("now after a few months of use it shows the precise location, **I use it with a Vodafone
  SIM** and I can call it and vice-versa and it sounds OK. Battery lasts about 2 days.")
- **Orange-or-Vodafone preferred over Digi** — **Marian Rosca**, 11 Oct 2025, 5★:
  *"Recomand sa folositi orange sau vodafone ca si cartela, nu digi."*
  ("I recommend using **Orange or Vodafone** as the SIM, **not Digi**.") No reason given.
- **The YOXO failure resolved itself** — **Apetre Constantin Ioan** (the 05 Feb 2026 Q&A "YOXO
  doesn't work" report) posted a **4★ review on 01 May 2026**: *"Destul de greu de realizat
  setarile initiale, trebuie facute doar cu internetul de pe cartela ca sa poata sa-ti arate
  locatia si sa poti suna, apoi e ceea ce trebuie pentru un copil, recomand!"*
  ("Initial setup is quite hard — it must be done **over the SIM's mobile data** for location
  and calls to work; after that it's what a child needs, I recommend it!") His earlier failure
  reads as an APN/setup issue, not a radio incompatibility. He does not restate the carrier.
- **Digi, working, ×5 on D-023**: Liviu Jurubita (13 Mar 2026 — child of 7), Dragos Dicu
  (13 Feb 2026 — details below), Cristina Sima (29 Sep 2025 — precise GPS, clear calls),
  Irina (03 Sep 2025 — Digi subscription; note *"funcție de economisire a bateriei — se
  deconectează de la rețea între 22-6"*, a 22:00–06:00 network-off battery saver), Bogdan
  Ticuleanu (30 Jul 2025 — video+audio calls tested on Digi).
- **Digi, working but disliked, D-011** — **Andrei**, 05 Jun 2026, 5★: his 4th watch model;
  calling and tracking fine, charges ~2×/week on a strict call+track profile, **but**
  *"Cateodata trebuie apelat ceasul de mai multe ori ca sa si sune, dar asta cred ca e din
  cauza sim-ului (**nu recomand Digi**)"* ("Sometimes you must call the watch several times
  before it rings — I think it's the SIM; I don't recommend Digi"). Plus D-011 Digi
  confirmations: Oltean Dániel (05 Jun 2026), Grigoras Nicoleta (06 Mai 2025), Claudiu
  (25 Apr 2025, ~2 days battery), Moraru Paula Roxana (02 Oct 2024, ≤2 days), Bogdan Storm
  (17 Dec 2024 — worked on Digi, GPS 10–15 m, then died at 4 months).

**Net: Digi ~11 named working owners across both models, Vodafone 1, Orange/YOXO 1 working +
1 failure-later-resolved + 1 recommendation. Counting people, not mentions; no name appears on
both listings.** The B20 question is still unanswered at the spec level, but the empirical
"does anything but Digi work" question now has its first yes-data.

### VoLTE — exists, and the seller tells you to turn it off

**giggsy**, 11 May 2026, D-023, "Decent": both of his two units had broken call audio
(one-way, multi-second delays, feedback-like garbling). Then:

> *"Am fost contactat - problema se remediază prin dezactivarea opțiunii VOLTE din ceas."*
> ("I was contacted — **the problem is fixed by disabling the VoLTE option in the watch**.")

Three consequences: (1) the hardware **has a VoLTE toggle** — first evidence it exists at all;
(2) VoLTE calling is **broken in practice** on at least one batch; (3) the vendor's own fix
parks voice on **2G CSFB**, which is exactly the fallback whose future OPTIONS.md flags as
unguaranteed. `volte` in the front matter updated accordingly.

### Battery — the model split is real and now quantified

**D-023 (900 mAh, AMOLED) — hour-scale reports dominate the negatives:**
Hotculeanu Marian (30 Apr 2026, 4★, two units): *"bateria nu tine conform descrierii, undeva
la maxim 4-5 ore!!!"* (max 4–5 h). Corina (10 Mar 2026, 3★): drains in **max 2 h unused**.
Butnaru Andreea (27 Jul 2026, 3★): *"câteva ore"*. alarik (28 Sep 2025, 2★, two units):
100%→10% overnight, unused. Diana Bunoiu (11 Oct 2025, 2★): 100%→50% overnight **in sleep
mode**, *"Nu stiu cum sunt calculate cele 168h de autonomie"* ("I don't know how the 168 h
autonomy was computed"). Maia (14 Ian 2026, 1★): hours even in standby, returned. danvaly
(22 Sep 2025, 3★): 6–8 h. Versus the same watch on minimal profiles: **Dragos Dicu**
(13 Feb 2026, 4★, Digi): *"bateria tine 2-3 zile in regim supraveghere copil"* (**2–3 days in
child-monitoring regime** — the best profile-qualified figure on D-023); Ema (10 Jul 2026,
4★): 2–3 days depending on active functions; bianca linca (11 Jul 2026, 5★): 3 days; adyitzu
(15 May 2026, 4★): max 2 days used only as a watch, preinstalled apps unused.

**D-011 (700 mAh, IPS) — the best-quantified battery datapoint in the whole project:**
**George**, 03 Jun 2024, 2★ (27 helpful votes): *"cu senzorii activi bateria tine cam 7 ore
(testat pe 2 aparate). Daca pornesti monitorizarea continua bateria se consuma in 4 ore."*
("with sensors active the battery lasts about **7 h (tested on 2 devices)**. If you turn on
**continuous monitoring it drains in 4 h**.") — the only report anywhere in this corpus that
tests the tracking-on case on multiple units. Light-use D-011 owners meanwhile report 2–3
days routinely (Szidonia, Laura gavan, Raluca Kovacs, Vartic Lilia, Elena Marin, Ittu Ionut,
Niculescu Adriana; Ursache Corina claims ~3 days "cu gps activat non stop"; Andrei charges
2×/week). **The D-011's smaller battery outperforms the D-023's AMOLED in owner reports — the
two models must never be pooled, including on battery.**

**168 h: zero corroboration in 676 texts.** The only owners who mention the number mention it
to mock it (Diana Bunoiu above; cf. WIRSEN's Ursu George / Vlad Andrei Iulian pattern). The
D-011 listing's own AI-generated summary now concedes: *"O rezervă frecventă este autonomia
bateriei, mulți revieweri raportând că trebuie încărcat la 1–3 zile"*.

### Position quality — kilometre-scale errors recur, on both models

New from the walled pool (all dated, all RO):

- **Cristi**, 26 Dec 2025, 1★ (D-023): *"GPS ul nu are acuratete - arata chiar si la 10 km
  distanta."* ("shows even at **10 km** distance.")
- **Maia**, 14 Ian 2026, 1★ (D-023): *"Nu localizează corect… distanta de câțiva km fata de
  locația actuala."* (**a few km off**.)
- **Adrian Dumea**, 15 Noi 2025, 3★ (D-023): *"îmi arată că e la peste 3km fata de locația ei
  reala."* (**3+ km off**.)
- **Silviu Gabriel Gavrila**, 29 Apr 2026, 3★ (D-023): *"îmi arată că dispozitul este in
  China."* — the **second independent China-location report** (after Adrian Ilea's D-011 Q&A).
- **Carmen**, 26 Dec 2025, 4★(!) (D-011): wifi usable only in the router's room; left town and
  the app kept showing home, then froze the pin **on the motorway for hours**; camera fogged
  with condensation; 10:00 full → 20:00 dead; display striping after 12 h off. The most
  complete single failure inventory in the corpus, filed under four stars.
- **Diana Bunoiu**, 11 Oct 2025, 2★ (D-023): *"GPS ul nu functioneaza deloc, mereu gaseste
  fetita mea in alte locatii."* Plus SADOSCHE CRISTINA GINA (23 Sep 2025, 2★): *"GPS-ul
  funcționează foarte prost."* Plus Ciprian (16 Iun 2026, 3★): updates only when it feels like
  it, *"un airtag este mult mai precis"*.

Against: Bogdan Storm's **10–15 m** (D-011, Digi), George's **±5 m in a Bucharest park**
(D-011), Alexandru Mihaila's 100–200 m (D-011), **Ion Cozmin** (12 Noi 2025, 5★, D-023):
*"primesc notificari foarte clare cand copilul a plecat si a ajuns acasa"* — **geofence
arrival/departure alerts working**. The coin-flip verdict stands, now with a longer tail:
the failure mode reaches 10 km and two continents.

### Hardware mortality — recomputed with the honest denominator

**D-023: 13 owners with a dead, defective or replaced unit in 524 review texts (2.5%).**
New deaths beyond the previously documented six: **Stefan** (15 May 2026, 1★ — *"Dupa o luna
de la achizitionare nu mai porneste!"*, dead at 1 month), **fifi** (15 Aug 2025, 1★ — dead at
1 month, return window missed), **raluka** (01 Iul 2026, 3★ — dead <1 month, replaced),
**catalin** (20 Ian 2026, 5★ — first unit defective, swapped <24 h), **Luca Catalin-Iulian**
(27 Aug 2025, 3★ — charging-pin failure at 1.5 months), **eve** (31 Iul 2025, 3★ — severe
overheating + defects, replaced), **Kovacs Lehel** (22 Feb 2026, 5★ — 1 of 2 units
connectivity-dead, replaced; **seller sent two toy tablets as gifts**), **Oana Oana**
(16 Oct 2025, 2★ — WhatsApp/TikTok/Play just dead icons, muffled audio, returned same day),
**Diana-Mihaela Crunteanu** (18 Iul 2025, 4★ — won't start unless on the charger), plus
seller-initiated swaps for Pop Doru Andrei, Dobre Laura and Daniel, and Goagas Radu's
13-month speaker/back failure (also replaced).

**D-011: ~10 owners in 152 texts (6.6%)** — the previously documented set plus **Fota
Alexandra** (22 Iun 2025, 1★ — two units, camera condensation and dead screen stripes inside
2 weeks), **Aszalos Geza** (15 Sep 2025, 5★ — "mobile network not avaible" after ~1 week of
use), **Mihaela** (29 Iul 2025, 4★ — stopped charging at 2 months, and the seller has no
service listing), **DianaB** (23 Aug 2025, 4★ — battery collapsed at 1 month; replaced;
*"fusese defect din fabrică"*), **Adriana** (16 Mar 2026, 2★ — charging failure; seller
offered a swap **2 years** after purchase), **Straticiuc Gianina** (02 Iul 2025, 5★ — random
shutdowns, 7 helpful votes), **Ioana** (29 Sep 2025, 4★ — no-charge fault traced to the
charger, fixed via producer).

**Combined: ~23 failure-reporting owners across 676 review texts ≈ 3.4% — a floor, not a
rate** (silent failures don't write reviews; farmed positives dilute the denominator). The
prior "six deaths in 10 readable texts" is corrected: the visible-negative sample was
massively enriched. But the pattern held: failures cluster at <2 months (infant mortality)
and the touchscreen/charging subsystems recur. Spare-part complaints also grew: **Radoi
Marinela Ioana** (02 Iul 2026, 5★, D-011) and **Lavinia Florea** (29 Sep 2024, 4★, D-011)
both cannot buy a replacement charger — now **five** owners blocked on parts.

### Family Link and the adult-account problem — contradictory, now documented both ways

- **Anita**, 05 Iul 2026, 1★ (D-023), title *"Nu e compatibil cu Family Link"*: child Google
  accounts **cannot** be added — adult account only; opening the Play Store profile **freezes
  the touchscreen**; no Settings→Accounts to sign out; saved contacts intermittently vanish.
- vs **Kyky** (19 Feb 2026, 4★, D-023): *"Il poti conecta prin family link"*; **Ioana Simion**
  (15 Sep 2025, 4★, D-023): uses Family Link for GPS; **Dumitru valentin cornel** (13 Iun
  2025, 5★, D-023): *"Pentru localizare eu folosesc family link"*.
- Reconciliation: Family Link *location sharing* from an adult Google account works for some
  owners; Family Link *child-account supervision* (the thing that would lock TikTok) is what
  Anita shows failing. The listing's own "adult account required" line supports her reading.
- Related: **Boicescu Ana Maria** (13 Mai 2025, 5★, D-023) could not add a Google account at
  all ("da eroare"); **Oana Oana**'s unit had Play as a dead icon; **Burlacu ionut**
  (22 Sep 2025, 4★, D-023) reports the menu language is **a Romanian–Spanish mix**.

### Review-pool hygiene — the 4.77 headline, dissected

Same-day 5★ clusters on D-023: **22 Aug 2025 (~13 reviews)**, **30 Jul 2025 (~14)**,
**23 Apr 2026 (~9)**, 12–13 Feb 2026, 30 Apr 2026; on D-011: **04 Jun 2026 (×6)**,
22 May 2026 (×4). Duplicate names posting both colours: Petre Aurel ×2, Otilia Cristea ×2,
Slatineanu Ciprian ×2, Starparu Roxana ×2, Eugenia Stancu ×2, Hotculeanu Marian ×2. Seller
behaviour visible inside reviews: proactive replacement offers to negative reviewers (Daniel,
Adriana, Dobre Laura) and **gifts to a reviewer** (Kovacs Lehel's two toy tablets). None of
this makes the positives false; all of it justifies weighting detailed negatives over the
4.77/95% headline, as this doc already argued — now with the receipts.

## Sources

All accessed **2026-08-19** unless stated otherwise.

**Product listings (primary evidence — reviews, Q&A, specs, prices, seller)**

- https://www.emag.ro/ceas-smartwatch-copii-gps-4g-google-play-whatsapp-tiktok-instagram-youtube-facebook-camera-hd-wingereich-tm-localizare-gps-telefon-apel-video-hd-super-amoled-wifi-bluetooth-apa-ip67-android-ios-sos-mo/pd/DQVXVGYBM/
  — **D-023, black.** 399.98 RON; seller Sweinsteiger Db Group FBE; **4.77/5, 524 reviews, 95%
  recommend**; 900 mAh / 168 h claim; 1.91" AMOLED; 45×35×15 mm; 57 g; Android 8.1; 1 GB/8 GB;
  VoLTE claim; operator list; Google Play + adult-Google-account statement; app-disabling
  claim; 24-month legal guarantee; reviews by Goagas Radu, Szikszai Petru Cristian, Butnaru
  Andreea, Raluca Gingu, Petre Aurel ×2; Q&A by Ciprian (Digi), Apetre Constantin Ioan (YOXO),
  Balta Nicusor (monitorizare spion), Balaioara Tudor.
- https://www.emag.ro/ceas-smartwatch-copii-gps-4g-google-play-whatsapp-tiktok-instagram-youtube-facebook-camera-hd-wingereich-tm-localizare-gps-telefon-apel-video-hd-super-amoled-wifi-bluetooth-apa-ip67-android-ios-sos-mo/pd/DDVXVGYBM/
  — **D-023, pink.** Same product and review pool; corroborated the 900 mAh / 168 h /
  dimensions / 524-review figures independently.
- https://www.emag.ro/ceas-smartwatch-copii-gps-4g-wingereich-tm-whatsapp-localizare-gps-apel-video-hd-telefon-wifi-agps-lbs-lte-camera-apa-ip67-android-ios-bluetooth-sos-monitorizare-spion-albastru-d-011/pd/DVXCJDYBM/
  — **D-011.** 379.94 RON; **4.7/5, 152 reviews, 93% recommend**; **700 mAh / "minim 3 zile"**;
  1.4" IPS; 55×43×15 mm; 55 g; 512 MB/4 GB; "SeTracker2 sau Wonlex App"; 50-number whitelist;
  verbatim reviews by Mazilu Iulia Alexandra, Murariu Madalin, Trandafir A, Alin, Laura Zeicu,
  MarianI, Vt, c-ian, Spiridon Gabriela; Q&A by Adrian Ilea, Alexandru Tanasa, Gabi Coman,
  Huncu, Emilian (no eSIM), Olariu Claudia, Carla, Andra Mitan, Dinca Delia, Adrian Ioan.

**Brand identity**

- https://www.wingereich.com/contact — **established that Wingereich is SWEINSTEIGER DB GROUP
  S.R.L., CUI RO46765222, J40/17256/2022, Sector 5 Bucharest, wingereich@gmail.com.**
- https://www.wingereich.com/smartwatch-pentru-copii-wingereich-cu-gps-4g-si-whatsapp-albastru-d-011
  — the brand's own D-011 page: 700 mAh, *"autonomie de minim 3 zile"*, GPS+AGPS+LBS+WIFI,
  VoLTE claim, nanoSIM, SeTracker2, 330.99 RON. **Confirms the brand itself publishes no LTE
  bands, no chipset, and no weight or dimensions.**
- https://www.wingereich.com/ — brand shop; *"Magazin online creat cu MerchantPro"*.

**Security research**

- https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html
  (article dated **2026-08-14**) — **DEF CON 34, 8 Aug 2026, "Tracking the Trackers", Felipe
  Solferini & Vangelis Stykas.** SETracker ≈10 M watches, **data on Alibaba Cloud in China**;
  "39 brands, one server" incl. **Wonlex**; read/spoof location, intercept text and voice
  messages, listen silently, trigger camera, invisible on the device. Wonlex blog post
  2026-08-10 claiming three internal-audit fixes without naming the researchers; SinoTrack and
  Thinkrace silent.
- https://www.hb.fh-muenster.de/opus4/frontdoor/index/index/docId/12354 — **STALK: Security
  Analysis of Smartwatches for Kids**, Saatjohann, Ising, Krings, Schinzel, **ARES 2020,
  2020-08-11** *(2020 — older source, flagged as such)*. Six kids' watches; "sensitive data
  disclosure, complete watch takeover, and illegal remote monitoring functionality".

**Project internal**

- `e:\research\kids-watch\OPTIONS.md` — B20 as a build-time option on the Wonlex/UNISOC
  SL8521E platform; Romanian 3G shutdown; B28 in RO is 5G NR n28, not LTE.
- `e:\research\kids-watch\.discovery\lens-1-eu-retail.md` — Wonlex KT30 published bands
  **FDD B1/B3/B5/B8, no B20/B7/B28**; used here only as platform context, **not** as this
  SKU's bands.
- `e:\research\kids-watch\.discovery\lens-5-romania.md` (compiled 2026-08-18) — **sole source
  for the two 2026-04-23 "666test" Romanian Play Store reviews**, and for the
  `com.tgelec.setracker` metadata (SJE LIMITED, 10 M+ installs, updated 2026-07-16,
  4.00/94,139). **Not re-verified by direct retrieval in this pass.**
- `e:\research\kids-watch\.discovery\lens-4-community.md` — review-farming caution and the
  cross-brand failure-pattern taxonomy.

**Retrieval failures, recorded rather than guessed**

- Google Play web listing for `com.tgelec.setracker` returned truncated content on two
  attempts; **AppBrain returned HTTP 403**. The two "666test" reviews could not be
  re-retrieved directly, and are therefore marked **unverified**.
- `mlq.ai` coverage of the DEF CON 34 research returned **HTTP 403**; notebookcheck was used
  instead.
- Only page one of the D-023 review stream (10 of 524) could be rendered; eMAG's paginated
  review endpoints returned 404 to the fetcher. The 8-vs-10 count is therefore over the
  **detailed** reports reachable across both listings, not over all 676.
  **[CLOSED 2026-08-19: the full pool was read in a logged-in browser session — the 404 was an
  artefact of URL-based fetching (review pagination is an in-page XHR). See "eMAG full review
  pool (2026-08-19)".]**
- The session WebSearch budget was exhausted (200/200) before a **CE/RED Declaration of
  Conformity**, a Romanian company-registry record for SWEINSTEIGER DB GROUP S.R.L., or an OEM
  model-number match for D-011 / D-023 could be searched for. **The underlying Wonlex model
  number remains UNKNOWN, and therefore so do the LTE bands, the modem chipset, and B20.**
