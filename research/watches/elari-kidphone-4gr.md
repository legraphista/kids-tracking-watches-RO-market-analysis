---
model: Elari KidPhone 4GR
brand: ELARI
release_year: 2020
still_sold: old-stock-only

# --- Romania verdict (the pass/fail question) ---
ro_status: fails
ro_evidence_tier: 2
ro_killer: "580 mAh with dated owner reports of ~10 h and \"barely a day\" fails the one-school-day floor; separately, Romania is absent from all four of Elari's own store markets (20 countries)."

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands: [B1, B3, B7, B8, B20]
band_b20: true
band_b28: false
volte: UNKNOWN
voice_fallback: UNKNOWN
modem_chipset: UNKNOWN

# --- Positioning (the #1 criterion) ---
positioning: [GPS, GLONASS, WiFi, LBS]
wifi_positioning: true
update_interval_min: UNKNOWN

# --- Battery (claimed and observed are SEPARATE facts) ---
# 580 mAh per Elari's manual (EN + RU). The SAME manual states 620 mAh in its
# DE/FR/ES/IT sections — an unresolved self-contradiction in one official document.
battery_mah: 580
# STANDBY only. Elari manual (EN): "Average standby time is up to 72 hours".
# TradeInn states 48 h for the same watch. No vendor ACTIVE-USE figure exists at all.
battery_claimed_h: 72
# ~10 h ("батарейкой на 10 часов", 3★, 2022-10-10) and "barely a day, must charge
# strictly every day" (2★, 2022-09-27), against "about two days" from two 5★ reporters.
# No reporter states a usage profile. All observed data is 2020-2024.
battery_observed_h: 10

# --- App & service ---
# Two separate Android builds are BOTH live in the Romanian Play storefront:
#   com.wherecom.elarisafefamily_eu "ELARI SafeFamily for parents"
#       ELARI TECH LTD, 9 Uzi Hitman, NETANYA 4266106, Israel
#       v3.6.7, updated 2026-03-24, 10 K+ installs, no rating shown
#   com.wherecom.elarisafefamily "ELARI SafeFamily"
#       ELARI IT LTD, ul. Akademika Koroleva d.13, Moscow, Russia 129515
#       v4.1.0, updated 2026-08-13, 1 M+ installs, 4.3 from 51,300 ratings
app_name: ELARI SafeFamily
app_android_min: "7.0"
app_ro_playstore: true
app_last_update: 2026-03
data_region: UNKNOWN

# --- Practical ---
sim: nanoSIM
water_rating: "splash-resistant only; no IP rating published"
weight_g: UNKNOWN
camera: true
games: true
extras_disableable: partial
price_display_eur: "€119"      # normalized for the site tile; picked from the price fields below
price_eur: 119
buy_from: "TradeInn / Kidinn (ES) — ships to Romania. Elari's own store: sold out."
price_ro_eur: n/a
---

## Verdict

Reject. The band list is genuinely right for Romania — **B1/B3/B7/B8/B20 confirmed from
Elari's own manual**, which is better primary-source evidence than almost anything else in
this field — but 580 mAh with dated owner reports clustering at ~10 h of real use fails the
one-school-day floor, and no vendor active-use figure exists to argue against them.

The deeper problem is the vendor. **Romania is absent from all four of Elari's own store
markets**, the 4GR is discontinued from Elari's current line-up and sold out at source, and
a Romanian parent searching the Play Store finds **two near-identically-named apps, the
larger and more actively maintained of which is published from a Moscow address**.

Do not buy. Not a close call.

## Does it work in Romania?

**Tier reached: 2** — the companion app is live in the Romanian Play storefront, fully
localised into Romanian, and recently updated. That is real evidence and it is the ceiling
of what exists.

**What is confirmed:**

- Both Android builds render in the RO storefront with Romanian descriptions and
  `"priceCurrency":"RON"` in their structured data. Verified by direct fetch with `gl=RO`
  on 2026-08-19.
- The EU build (`..._eu`) was updated **2026-03-24**, version 3.6.7 — matching the
  2026-03-25 iOS date a prior sweep recorded.
- The watch takes a **plain nanoSIM** (Elari manual). There is no bundled-SIM or
  subscription-SIM architecture to withdraw from Romania, which is structurally safer than
  the Xplora/Garmin model.
- **TradeInn/Kidinn ships to Romania with a 30-day return window** (stated on the product
  page, accessed 2026-08-19). A prior sweep recorded RON pricing there on 2026-08-18; I
  could not re-render the RON price today (the page prices via JS/geo-IP), so treat the
  **lei figure as carried forward, not re-verified**.

**What is disconfirmed:**

Elari's own storefront (`elari.tech`, a Shopify store) publishes its market configuration
in-page. It defines exactly four markets:

| Market | Countries |
|---|---|
| Israel (**primary**, `www.elari.tech`) | IL |
| International | DE, US |
| ELARI India | IN |
| Elari Europe | AT, BE, CH, CZ, DK, ES, FI, FR, GB, IE, IT, NL, NO, PL, PT, SE |

`"code":"RO"` occurs **zero** times in the page; the string `Romania` occurs **zero** times.
Poland and Czechia are included, so this is not a blanket CEE exclusion — Romania is
specifically absent. Verified by direct fetch 2026-08-19.

**Read this precisely.** This is a *webshop* market list, not a proven *account-level*
geo-block. It does not demonstrate that the SafeFamily backend would refuse a +40
registration. It does demonstrate that Elari has chosen not to sell into Romania and
therefore has no commercial reason to keep serving it — which is exactly the screening
question OPTIONS.md poses.

**What remains unproven:**

- Whether the app accepts a **+40** registration: **UNKNOWN**. No Romanian evidence of any
  kind was found — no RO retailer, no RO carrier relationship, no RO user report, no RO
  Play review located. Elari's own registration help article (`help.elari.net/.../44001901149`)
  returns **HTTP 404** as of 2026-08-19, so the documented registration flow cannot even be
  read.
- Whether voice works on a Romanian SIM: **UNKNOWN**, and see Network & bands below — this
  is the second serious risk after battery.

## Pre-purchase test

Moot — the battery failure is country-independent and disqualifies the device before
Romania is reached. If run anyway, the test has an extra step unique to this brand:

1. Install from the **Romanian Play storefront** — and install the **right one**. Search
   results return two apps with near-identical names. The one you want is
   **"ELARI SafeFamily for parents"**, package `com.wherecom.elarisafefamily_eu`, developer
   **ELARI Tech Ltd**. The one you do *not* want is **"ELARI SafeFamily"**, package
   `com.wherecom.elarisafefamily`, developer **ELARI IT LTD, Moscow**. The wrong one is the
   more prominent listing (1 M+ installs vs 10 K+).
2. Attempt registration with a **+40** number before paying.
3. Confirm the 4GR is actually supported by the EU build — it is discontinued, and the EU
   build's description says only "all ELARI kids' smartwatches" without naming models.
4. Buy from **TradeInn/Kidinn**, which states a **30-day return** window, so an `unknown`
   stays recoverable. EU distance selling gives 14 days as a floor.

## Positioning quality in real use

Elari's manual is unusually specific, and its own numbers are the honest ones:

> "KidPhone 4GR gets position from 3 sources: GPS, Wi-Fi, GLONASS, LBS. GPS-mode is very
> accurate (5-10 meters). In tall buildings and other urban obstructions there is a small
> chance of larger deviation. KidPhone 4GR will try to get its position via Wi-Fi if GPS
> signal is not available. **Wi-Fi location accuracy is about 50-100 meters.** If both
> Wi-Fi and GPS signals are not available, KidPhone 4GR will use LBS to get location.
> **LBS accuracy is about 500-5000 meters.**"
> — Elari KidPhone 4GR Multilingual User Manual, EN section, FAQ

**Wi-Fi positioning is present and is a genuine plus** — most of this field has none. But
Elari itself documents the silent-degradation chain the template asks about: GPS → Wi-Fi
(50–100 m) → LBS (**500 m to 5 km**). Inside a concrete Romanian school with no Wi-Fi the
watch can legitimately report a child anywhere within a 5 km radius, and nothing in the
parent app is documented to flag which source produced a given fix.

Elari also publishes an unusually candid antenna admission on its specifications page:

> "due to its size, an ELARI watch does not have additional space for big antenna and
> receiver that would allow the same accuracy as smartphone or special GPS navigation
> system. Please bear this in mind while using ELARI kids' watches."
> — elari.tech, Technical specifications listing policy, accessed 2026-08-19

**Observed reports are split.** A Russian reviewer measured well:

> "Если модели, поддерживающие только 2G, частенько выдают погрешности около 500 метров,
> то тут 3-5 метров."
> *"Where 2G-only models often produce errors of around 500 metres, here it's 3–5 metres."*
> — vilianov.com review, Russia, **2020-10-26** (older source, marked)

Against that, two of ten owner reviews on onliner.by complain directly:

> "Геолокация не точная" — *"Geolocation is not accurate."* — Сергей, 1★, **2022-11-14**
> "Джипиэс отстой" — *"The GPS sucks."* — Денис, 3★, **2022-10-10**
> "точность местоположения низкая" — *"location accuracy is low."* — Alexander, 2★, **2022-09-27**

Three independent negative reports against one positive review. All are 2020–2022; **no
2024+ positioning report was found**. `update_interval_min` is **UNKNOWN** — the app
advertises "Set the frequency of the geolocation updates" but publishes no floor value.

## Battery in real use

**This is the decisive section, and the answer is no.**

**Claimed — and Elari contradicts itself twice.**

1. *Capacity.* The single official multilingual manual states **580 mAh** in its English
   and Russian sections and **620 mAh** in its German, French, Spanish and Italian
   sections. Same PDF, same model. Independently, imei.info lists the older sibling
   **KidPhone 4G** at 620.0 mAh — so the most likely explanation is that the 620 figure is
   un-updated copy-paste from the previous generation and **580 mAh is the true 4GR
   figure**. That is *inference*, flagged as such; Elari has not resolved it.
2. *Runtime.* Elari's manual says **"Average standby time is up to 72 hours."** TradeInn's
   listing for the same watch says **"up to 48 hours on standby."** Neither is an
   active-use figure, and **Elari publishes no active-use figure at all**.

Elari also pre-emptively disclaims its own runtime numbers:

> "all the standby or operational time as declared in tech specs of products refer to
> average values, real operational and standby time depends from many factors including
> outside temperature, battery health, charge level, usage of different functions and
> frequency of using them."
> — elari.tech, Technical specifications listing policy, accessed 2026-08-19

**Observed.** From directly-fetched owner reviews on onliner.by (Belarus/Russia
marketplace, ten reviews total):

| Date | Rating | Quote | Translation |
|---|---|---|---|
| 2022-10-10 | 3★ | "батарейкой на 10 часов" | "a 10-hour battery" |
| 2022-09-27 | 2★ | "еле-еле на день, заряжать строго каждый день" | "barely lasts a day, must charge strictly every day" |
| 2022-10-01 | 5★ | "Заряжать нужно каждый день" | "You need to charge it every day" |
| 2023-01-18 | 5★ | "Батарея держит около двух дней" | "The battery lasts about two days" |
| 2022-09-06 | 5★ | "около двух дней автономной работы" | "about two days of autonomous operation" |

Plus, from an adult wearing it for review rather than a child using it:

> "У меня на руке часы жили весь день, и еще до утра оставалось."
> *"On my wrist the watch lasted all day, and there was still some left by morning."*
> — vilianov.com, Russia, **2020-10-26**

A widely-repeated "8–10 hours under active use" figure appears in search indexes attributed
to review aggregators, but **the primary pages could not be opened** (revain.org rendered no
review content; likechef.ru no longer resolves in DNS). Treat that specific phrasing as
**unverified** — though the directly-sourced 10 h and "barely a day" reports corroborate the
same magnitude.

**Verdict on the school day.** Three of five battery reporters describe daily charging or
~10 h; two describe ~2 days. **Not one reporter states their usage profile**, so the spread
is uninterpretable — which is itself the finding. A 7-year-old's school day plus commute is
roughly 07:30 to 17:30 = **10 hours minimum**, before any calls, before the camera, before
the four bundled games, and before a tight location-update interval. The optimistic reports
land *on* that number and the pessimistic ones land under it. There is **no margin**, and
the only vendor number that exists is a standby figure that is itself published in two
mutually inconsistent versions.

**It does not clear the floor.** Reject on battery.

## Network & bands

**Bands are confirmed from a primary source — and the prior research was wrong that no such
source exists.** Elari's own multilingual user manual states the band list identically in
seven language sections:

> "KidPhone 4GR supports 2G: 900/1800, 3G: 2100/900 WCDMA, LTE **(B1/B3/B7/B8/B20)**
> nanoSIM card."
> — Elari KidPhone 4GR Multilingual User Manual, EN section (repeated in RU, DE, FR, ES, IT)

Independently corroborated for the sibling KidPhone 4G by imei.info's band map, which sets
`1_2100`, `3_1800`, `7_2600`, `8_900`, `20_800` and `38_2600` true and every other band
false — including `28_700` false.

**Fit against Romanian operators: good.** B20 (800 MHz) is present, which is Orange's only
sub-1 GHz LTE band and the single most important band for a wrist antenna inside a school.
B3 (1800) covers the national workhorse layer, B1 and B7 cover capacity. B28 is absent,
which per OPTIONS.md costs nothing in Romania since B28 there is 5G NR n28, not LTE. The
2G 900/1800 support is real and matters as a fallback. **The 3G/WCDMA support is dead
weight — Romania has no 3G.**

**VoLTE: UNKNOWN, and leaning negative.** This is the second serious risk.

- Elari's manual **never mentions VoLTE**, in any of its seven language sections.
- Elari's website publishes no specifications at all (see below).
- The only spec-database value I could retrieve — imei.info's entry for the **KidPhone 4G**,
  not the 4GR — records **`"volte":false`**.

The prior sweep's note that VoLTE is "stated capable at retailer/spec-database level" is
therefore **unverified and actively contradicted** by the one database value I could reach.
It should not be relied on.

**Consequence.** If VoLTE is genuinely absent, voice falls back to 2G CSFB. Orange and Digi
still run 2G with no announced end date, so voice would probably work today on those two —
but this is precisely the architecture OPTIONS.md says not to buy: *"Do not buy a watch whose
voice depends on 2G."* Combined with the fact that no Romanian operator provisions VoLTE for
any kids' watch IMEI, `voice_fallback` must be recorded as **UNKNOWN** and assumed fragile.

**The transparency finding, recorded in its own right.** Elari's website has a page titled
*"Technical specifications listing policy"* where a specifications table should be. It
publishes no specifications. It says:

> "Technical specifications of ELARI products as provided on this site are for reference
> purposes only. […] Tech specs may be changed without additional notice if they do not
> have direct influence on user experience. **CPU model, RAM and ROM module are also
> subject to change without additional notice.**"
> — elari.tech/pages/technical-specifications, accessed 2026-08-19

For a device bought for its radio, a vendor reserving the right to silently change the
silicon is a real problem: it means the manual's band list is a snapshot of one production
run, not a commitment. It is the same build-time-option hazard OPTIONS.md documents for the
Wonlex/UNISOC platform, except here the vendor has written it down. `modem_chipset` is
recorded as **UNKNOWN** for exactly this reason — a Spreadtrum SC8521E figure circulates at
spec-aggregator level but is **unverified**, and Elari disclaims it in advance regardless.

## Features & what can be disabled

Taken from the two Play Store listings' own feature lists (accessed 2026-08-19) and the
manual.

| Feature | Present | Can the parent app switch it off? |
|---|---|---|
| Voice calls | yes | Contact list is whitelist-controlled — "Customize the contact list on the watch for phone- and video-calling" |
| Video calls | yes | Same whitelist. Manual notes a minimum 5-minute interval between video chats |
| SOS button | yes | No — and it transmits an audio recording (see below) |
| Camera (2 MP) | yes | **UNKNOWN** — no disable control documented |
| Games (4 bundled) | yes | **UNKNOWN** — no per-app disable documented |
| MP3 player, pedometer | yes | **UNKNOWN** |
| Class mode | yes | Yes — "Set availability of content schedule and manage in-class time when no content is available" |
| Geofences | yes | Parent-defined; kindergarten/school/home |
| KidGram messenger | yes | Yes — contacts and channels are approval-gated |
| Remote audio monitoring | yes | **No documented off switch** |
| Power-off lock | yes | German manual section lists "Ausschalten des Geräts verbieten" (*forbid switching the device off*) |

`extras_disableable: partial` — communication is properly whitelisted, class mode is real,
but **no source documents a way to disable the camera or the four bundled games**, which is
what actually matters for a 7-year-old in a classroom.

## Security & privacy

**Vulnerability research: none found.** The NIST NVD returns **zero** results for
`elari`, `kidphone` and `safefamily` (queried 2026-08-19). This is the absence of published
research, not evidence of security — no independent researcher appears to have examined this
platform, unlike the well-documented SeTracker/white-label tier.

**Covert remote-listen: present, and confirmed by Elari's own marketing.** Both Play Store
listings advertise it:

> "Monitor the sounds around the watch to ensure safety"
> — ELARI SafeFamily for parents, Google Play (EU build), accessed 2026-08-19

The Romanian localisation of the same line reads *"Monitorizați sunetele din jurul ceasului
pentru a asigura siguranță"*; the Moscow build's Romanian text is blunter — *"Monitorizați
mediul audio din jurul ceasului"* (*"Monitor the audio environment around the watch"*).

That it is **covert** — i.e. gives the child no indication — is confirmed by a reviewer:

> "Можно незаметно звонить ребенку и слушать, что происходит вокруг него."
> *"You can call the child unnoticed and listen to what is happening around them."*
> — vilianov.com, Russia, **2020-10-26** (older source, marked)

**No source documents any way to lock or disable this.** Separately, the SOS flow also
transmits audio: *"along with the alert, you'll receive your kid's location, as well as an
audio recording from the watch microphone."*

**Server jurisdiction — the central question for this brand, and the answer is genuinely
bad.** Four different corporate identities are attached to one product:

| Identity | Where | Source |
|---|---|---|
| **ELARI TECH LTD** | 9 Uzi Hitman, NETANYA 4266106, **Israel**, +972 53-681-6814 | Google Play verified developer record for `com.wherecom.elarisafefamily_eu` |
| **ELARI IT LTD** | ul. Akademika Koroleva d.13, Moscow 129515, **Russia**, +7 985 582-39-35 | Google Play verified developer record for `com.wherecom.elarisafefamily` |
| **SIA ELARI EUROPE** | (SIA = Latvian company form; no address published) | Named as data controller in the elari.tech privacy policy |
| **ELARI** (`elari.net`) | Russian-facing storefront, prices in ₽, support domain `элариайти.рф`, "2026 © ELARI" | elari.net, accessed 2026-08-19 |

Elari's own store's primary market is **Israel** and its base currency across all markets is
**ILS**. A prior sweep recorded a Riga, Latvia address on elari.net; that site now presents
as a Russian storefront and no Latvian address was visible on 2026-08-19 — only the "SIA"
company form in the privacy policy hints at Latvia.

**Where the data goes is not stated, and the transfer is admitted.** The privacy policy says
verbatim:

> "We transfer your personal data to the countries that do not provide for a sufficient
> level of protection of data subjects' rights under the European Union law. When doing so,
> we employ the standard contractual clauses issued by the European Commission."

and, on infrastructure, only:

> "AWS metrica complies with all standard cloud storage rules and regulations."
> — elari.tech/pages/privacy-policy, accessed 2026-08-19

No data centre, no region, no country is named anywhere. `data_region: UNKNOWN` — with an
explicit vendor admission of transfer to inadequate third countries. For a device holding a
7-year-old's live location, that is the answer to the question, and it is a failing one.

**The concrete, exploitable hazard.** A Romanian parent searching the RO Play Store for
"ELARI SafeFamily" is shown **two apps with near-identical names**. The more prominent one —
1 M+ installs, 4.3 stars from 51,300 ratings, updated **2026-08-13**, i.e. *more actively
maintained* than the EU build — is published by **ELARI IT LTD of Moscow** and points at a
different privacy policy (`elari.it/privacy_policy`). The EU build has 10 K+ installs, no
displayed rating, and was last updated 2026-03-24. Nothing in either store listing warns a
parent which one their watch and their jurisdiction call for. Picking the obvious one sends a
child's live location to a Moscow-registered developer.

**Vendor hygiene: a live listing points parents at a gambling site.** Both Play Store
listings, in Romanian, tell parents *"Citiți mai multe despre ELARI KidGram:
https://www.kidgram.org"*. That domain now serves an Indonesian online-gambling site titled
*"NASABAHTOGEL: Link Resmi Slot Gacor Slot 777 No.1 & Toto Slot Eksklusif"*. Verified
2026-08-19 by direct fetch of three URL forms (`https://www.kidgram.org`, `http://kidgram.org`,
`https://kidgram.org`), all HTTP 200 to the same gambling page. Elari let the domain for its
flagship child-safety service lapse and is **still linking parents to it from a store listing
it updated on 2026-08-13**.

**What KidGram actually is, and whether it is an asset or a liability.** From Elari's own
description: it is a **Telegram-platform client**, not an independent messenger. Content is
pushed *"directly from your Telegram account"*; children *"get access to messaging and
content/channels on Telegram platform."*

- *As a control surface:* genuinely good. Contacts, groups and channels are approval-gated —
  *"the child won't be able to add a new contact or enter/subscribe to a new channel without
  your approval"* — and the parent sees statistics plus **three months of chat history**,
  including, on the Moscow build, *"mesajele șterse de corespondenți"* (**messages deleted by
  the correspondents**).
- *As a privacy proposition:* a **liability**. It adds Telegram as a third processor of a
  7-year-old's conversations on top of an operator that will not name its own servers, and
  it requires the parent to bind their personal Telegram account to the child's device.
  Retaining messages the sender deleted is a deliberate design choice worth understanding
  before adopting.
- *Commercially:* it is **subscription-gated**. Chat-history access requires **ELARI Premium**
  (in-app purchases listed at 4,99–42,99 RON in the RO storefront), after a 2-week trial.
  Whatever the brief's framing, this is a paid recurring service attached to a discontinued
  watch from a vendor that does not sell into Romania.

Net: KidGram is the most interesting thing about this watch and still not a reason to buy it.

## Reality check

- **"Up to 48/72 hours standby"** means the watch sitting still, not being used. The vendor
  publishes *no* active-use figure, publishes the standby figure in two conflicting versions
  (72 h in its manual, 48 h at its retailer), and pre-disclaims both as "average values".
  Owners actually report ~10 h to "barely a day" as often as they report two days.
- **"580 mAh"** is what the English manual says; the same manual's German, French, Spanish
  and Italian pages say 620 mAh. Elari cannot state its own battery capacity consistently.
- **"4G"** here is real and the band list genuinely fits Romania — but **VoLTE is unstated by
  the vendor and recorded as `false` by the one spec database reachable for the sibling
  model**, so "4G" may still mean voice drops to 2G.
- **"GPS accuracy 5–10 metres"** is the manual's best case. The same manual states the
  fallbacks: 50–100 m on Wi-Fi and **500–5000 m on cell towers**, with no documented
  indication to the parent of which one produced the fix on screen.
- **"Own servers, full control"** (the marketing line a prior sweep recorded) sits against a
  privacy policy that names no server location and explicitly admits transferring personal
  data to countries without adequate protection.
- **"Technical specifications"** on Elari's website is a page explaining that Elari does not
  commit to its technical specifications.

## What users say

No Romanian-language review of this watch, and no Romanian Play Store review of either
companion app, was located. Everything below is Russian-market, and **all of it predates
2024** — flagged as older sourcing.

**Works:**

- *"около двух дней автономной работы"* — "about two days of autonomous operation" —
  Василиса, 5★, **2022-09-06**, onliner.by. Backed by one further report:
  *"Батарея держит около двух дней"* — Виолетта, 5★, **2023-01-18**. **2 independent
  reports.**
- *"связь, звук и качество на высоте"* — "connection, sound and quality are excellent" —
  Василиса, 5★, **2022-09-06**. Corroborated by *"слышимость во время звонка хорошая"*
  ("audibility during a call is good") — Нина, 5★, **2023-04-07**. **2 independent reports.**
- *"Точно показывают местонахождение ребенка"* — "they show the child's location accurately"
  — Василиса, 5★, **2022-09-06**. **1 report**, plus the 2020 reviewer's 3–5 m measurement.

**Fails:**

- *"еле-еле на день, заряжать строго каждый день"* — "barely lasts a day, must charge
  strictly every day" — Alexander, 2★, **2022-09-27**. With *"батарейкой на 10 часов"*
  ("a 10-hour battery") — Денис, 3★, **2022-10-10** — and *"Заряжать нужно каждый день"*
  ("you need to charge it every day") — Светлана, 5★, **2022-10-01**. **3 independent
  reports**, one of them from a 5-star reviewer, which is the strongest signal here.
- *"точность местоположения низкая"* — "location accuracy is low" — Alexander, 2★,
  **2022-09-27**. With *"Геолокация не точная"* ("geolocation is not accurate") — Сергей,
  1★, **2022-11-14** — and *"Джипиэс отстой"* ("the GPS sucks") — Денис, 3★, **2022-10-10**.
  **3 independent reports**, directly contradicting the positive report above.

**Read the split honestly.** The battery and GPS complaints each come from three separate
reporters against two or fewer positives, and none of the ten reviewers states a usage
profile. On a sample of ten reviews from a single marketplace, in one country, four years
old, the correct conclusion is not "it's fine for some people" — it is that **the vendor has
never published the number that would settle it**.

## Sources

All accessed **2026-08-19** unless noted.

| Source | Established |
|---|---|
| [Elari KidPhone 4GR Multilingual User Manual (PDF, hosted by Elisa.ee)](https://www.elisa.ee/files/eraklient/apid-ja-lisateenused/ponniradar/Elari_Kidphone_4GR_kasutusjuhend.pdf) | **Primary source for bands**: "2G: 900/1800, 3G: 2100/900 WCDMA, LTE (B1/B3/B7/B8/B20) nanoSIM". Battery 580 mAh (EN/RU) vs 620 mAh (DE/FR/ES/IT). "Average standby time is up to 72 hours". GPS 5–10 m / Wi-Fi 50–100 m / LBS 500–5000 m. Splash-resistant only. Bluetooth for pairing friend watches. No mention of VoLTE anywhere |
| [elari.tech — Technical specifications listing policy](https://www.elari.tech/pages/technical-specifications) | The transparency finding, verbatim: "for reference purposes only", "CPU model, RAM and ROM module are also subject to change without additional notice", the antenna-size admission, and the pre-disclaimer of all runtime figures |
| [elari.tech — KidPhone 4GR product page](https://www.elari.tech/products/kidphone-4gr) | €119.00 / €129.00; **"Sold out"**, `available":false`. No specifications published |
| [elari.tech — Privacy Policy](https://elari.tech/pages/privacy-policy) | Controller "SIA ELARI EUROPE"; verbatim admission of transfer to countries without sufficient EU-law protection under SCCs; "AWS metrica" as the only infrastructure statement; **no server location named**. Also carries the Shopify market config: four markets, 20 countries, `"code":"RO"` = 0 occurrences, `Romania` = 0 occurrences |
| [Google Play — ELARI SafeFamily **for parents** (`..._eu`), RO storefront](https://play.google.com/store/apps/details?id=com.wherecom.elarisafefamily_eu) | Live in RO, Romanian-localised, `priceCurrency: RON`. **ELARI TECH LTD, 9 Uzi Hitman, NETANYA 4266106, Israel**, +972 53-681-6814, appdev@elari.tech. v3.6.7, updated **2026-03-24**, 10 K+ installs, min Android 7.0, IAP 4,99–42,99 RON. Data safety: "no data shared with third parties", deletion on request. Feature list incl. "Monitor the sounds around the watch" and the SOS audio recording |
| [Google Play — ELARI SafeFamily, RO storefront](https://play.google.com/store/apps/details?id=com.wherecom.elarisafefamily) | Also live in RO, Romanian-localised. **ELARI IT LTD, ul. Akademika Koroleva d.13, Moscow, Russia 129515**, +7 985 582-39-35, it@elari.net, policy at elari.it. v4.1.0, updated **2026-08-13**, **1 M+ installs, 4.3 from 51,300 ratings**, first released 2017-07-21 |
| [kidgram.org](https://www.kidgram.org) | The domain Elari links parents to from both live Play listings now serves "NASABAHTOGEL: Link Resmi Slot Gacor Slot 777 No.1 & Toto Slot Eksklusif", an Indonesian gambling site. HTTP 200 on all three URL forms |
| [elari.net](http://elari.net/) | Now a Russian-facing storefront: prices in ₽, support domain элариайти.рф, "2026 © ELARI". Current line-up = Watch GT, Watch SE, 4G Wink, **KidPhone 4G GO**, KidGram Watch — **the 4GR and 4G Lite are absent** |
| [onliner.by — Elari KidPhone 4GR owner reviews](https://catalog.onliner.by/smartwatch/elari/kidphone4black/reviews) | Ten dated owner reviews, 2022-09 to 2024-08. All battery and GPS quotes above |
| [vilianov.com — "Обзор Elari KidPhone 4GR"](https://vilianov.com/gadgets-mobile/obzor-elari-kidphone-4gr-detskie-chasy-s-sim-kartoy-na-maksimalkah/) | **2020-10-26** (older, marked). Covert remote-listen confirmed verbatim; 3–5 m GPS; all-day battery on an adult wrist |
| [imei.info — Elari **KidPhone 4G** (sibling model)](https://www.imei.info/phonedatabase/elari-kidphone-4g/) | Band map: B1/B3/B7/B8/B20 + B38 true, B28 false. **`"volte": false`**. `battery_capacity: 620.0` — the likely origin of the 4GR manual's 620 figure |
| [TradeInn / Kidinn — KidPhone 4GR](https://www.tradeinn.com/kidinn/en/elari-kidphone-4gr-smartwatch/139880660/p) | 580 mAh, **"up to 48 hours on standby"** (conflicts with Elari's 72 h), GPS/Wi-Fi/LBS/Glonass, 4 games, MP3, pedometer, class mode. **30-day return**. RON pricing recorded 2026-08-18 by a prior sweep, not re-verified today |
| [TradeInn / Kidinn — KidPhone 4G Lite](https://www.tradeinn.com/kidinn/en/elari-kidphone-4g-lite-smartwatch/142635017/p) | Variant: **600 mAh**, 1.3" IPS 240×240, USB-C, GPS + Wi-Fi + LBS — **GLONASS not listed**, free shipping, 30-day return. **Bands UNKNOWN** |
| [NIST NVD API](https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=elari) | **Zero** CVEs for `elari`, `kidphone`, `safefamily` |
| help.elari.net — SafeFamily registration article | **HTTP 404**. The vendor's own documentation of the registration flow is unreachable |

### Variant note — KidPhone 4G Lite

Covered as a variant and **not separately recommendable**. It is cheaper (€75.99 at TradeInn
vs €119 list for the 4GR) and has a marginally larger **600 mAh** cell with USB-C, but:

- **Its LTE bands are UNKNOWN.** The 4GR's B20 must **not** be assumed to carry over — its
  manual is not reachable (manuals.plus returns HTTP 403) and no other primary source was
  found. Per OPTIONS.md, band support is never to be inferred from a "4G" label.
- **GLONASS is not listed** for the Lite by TradeInn, unlike the 4GR — so it may be GPS-only.
- 600 mAh does not fix a battery problem that 580 mAh caused; it is a 3% increase.
- It is equally absent from Elari's current line-up and equally subject to every corporate,
  jurisdictional and app-confusion finding above.
