---
model:                  Anio 6
brand:                  Anio GmbH (Bremen, Germany)
release_year:           2025          # ALSO distributor sheet: "Verkaufsstart 03-2025". Datasheet itself is "Stand: 16.01.2024"
still_sold:             yes           # €199.00 on anio.eu 2026-08-19; congstar bundle live. But BOTH Amazon.de colour variants "Derzeit nicht verfügbar" 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status:              fails
ro_evidence_tier:       2             # app IS live in the RO Play storefront (confirmed 2026-08-19). Tier 1 was reached and came back NEGATIVE. The only tier-3 datapoint in existence is a failure report.
ro_killer:              Anio's own compatible-SIM table names 9 countries (DE/AT/CH/ES/IT/FR/FI/DK/LU) and explicitly disclaims compatibility for any unlisted provider; Romania is absent, sales are DE+AT only, and the sole RO user report ever is "Nu pot conecta".

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands:              [B1, B3, B7, B8, B20]   # from manufacturer datasheet "2.600, 2.100, 1.800, 900, 800 MHz"
band_b20:               true
band_b28:               false
volte:                  true          # explicit in the manufacturer datasheet, not inferred from a "4G" label
voice_fallback:         volte         # GSM 1800/900 also present per datasheet, so a 2G backstop exists where 2G survives
modem_chipset:          UNISOC W307 (ARM Cortex-A53)

# --- Positioning (the #1 criterion) ---
positioning:            [GPS, Galileo, BeiDou, WiFi, LBS]   # datasheet "Ortungsmodule: GPS, WIFI, LBS" + "GPS-Multi-Empfänger: GPS, Galileo, Baidu". NO GLONASS.
wifi_positioning:       true          # present, but requires >=3 nearby WLANs per Anio's own support article
update_interval_min:    1             # 1 min ONLY inside a "Schulwegzeit" window, max 60 min per window, max 4 windows/day. Standard selectable interval is 5/15/30/60 min, default 60. "Explorer" mode = 5 min for max 60 min.

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:            595
battery_claimed_h:      "20-32 h (datasheet, Stand 16.01.2024) / 24-48 h (shop page, FAQ + helpcenter 2025-06-09 and 2026-06-25). Helpcenter breakdown: 5-min interval -> up to 24 h; 60-min interval -> up to 48 h. Standby 72 h with NO SIM. All figures stated as assuming optimal network reception."
battery_observed_h:     UNKNOWN       # No reviewer or owner anywhere published a measured runtime with a stated polling interval. The one professional German test did not measure it.

# --- App & service ---
app_name:               ANIO watch (com.anio.watch)
app_android_min:        Android 5.0   # per Anio's own Anio 6 FAQ, Q18. Play-listing minimum not independently confirmed.
app_ro_playstore:       true          # confirmed live in the ro/RO storefront 2026-08-19: 4.6 stars / 1,757 ratings, free, Anio GmbH, PEGI 3
app_last_update:        2026-08       # 2026-08-13 per the prior discovery sweep; not re-confirmed directly in this pass
data_region:            EU            # Germany, CLAIMED by vendor for the watch platform -- **unverified** independently. The anio.eu webshop/support stack demonstrably uses US processors.

# --- Practical ---
sim:                    nanoSIM       # 4FF. eSIM explicitly NOT supported (FAQ Q4).
water_rating:           IP68          # vendor adds: not suitable for showering or swimming
weight_g:               44            # incl. strap
camera:                 false         # deliberate omission
games:                  false         # deliberate omission
extras_disableable:     partial       # GPS/positioning fully switchable off; dial pad off by default and parent-enabled; strangers blocked. There is almost nothing else to disable by design.
price_display_eur: "€199"      # normalized for the site tile; picked from the price fields below
price_eur:              199.00        # anio.eu, 2026-08-19
buy_from:               anio.eu (DE/AT only) · congstar.de bundle (DE) · smartwatch.de (DE) · Hartlauer.at (AT) · Amazon.de (both variants out of stock 2026-08-19)
price_ro_eur:           n/a           # no Romanian retail, distributor or warranty entity found
---

## Verdict

The best-documented radio in this entire project sits on the smallest usable battery, inside
the narrowest commercial footprint. Bands, VoLTE and Wi-Fi positioning are proven from a real
manufacturer datasheet — everything a Romanian network needs — and it is the only vendor here
honest enough to publish its own worst case.

It still fails, and not on radio: Anio sells only to Germany and Austria, its compatible-SIM
table covers nine countries and no Romanian operator, its support answered a Romanian reviewer
in German, and the single Romanian user report in existence says *"Nu pot conecta"*.

It also does not clear the battery floor at any tracking interval a parent would actually use.

## Does it work in Romania?

**Tier reached: 2.** The app is live in the Romanian Play storefront and is actively
maintained. Tier 1 was reached this pass — and the answer came back negative.

### The supported-country statement (contradiction #5, settled)

Anio publishes no page headed "supported countries". What it publishes instead is functionally
the same thing and is more binding: a **compatible-SIM-card table with a country column**, last
updated **24 March 2026**.

| Country | Listed operators (Anio 6) |
|---|---|
| Deutschland | O2, Vodafone, Telekom, Congstar, ALDI TALK, Bling Mobile |
| Österreich | HoT, A1.net, T-mobile, yesss! |
| Schweiz | Swisscom |
| Spanien | Movistar |
| Italien | TIM |
| Frankreich | Orange |
| Finnland | Elisa |
| Dänemark | Lebara, Lycamobile, Telia, Telenor, 3 |
| Luxemburg | Post.lu |

Nine countries. **Romania is not one of them**, and neither is any other CEE country.

The article does not treat this as a soft suggestion. Verbatim, in the article's own "Wichtige
Hinweise":

> *"Kompatibilität nicht garantiert: Die Kompatibilität von SIM-Karten anderer, nicht
> gelisteter Anbieter kann nicht garantiert werden, auch wenn diese Anbieter dasselbe
> Mobilfunknetz, wie gelistete Anbieter verwenden."*
>
> "Compatibility not guaranteed: the compatibility of SIM cards from other, non-listed
> providers cannot be guaranteed, even if those providers use the same mobile network as
> listed providers."
> — Anio GmbH helpcenter, Germany, updated 2026-03-24

That last clause matters more than the absence of Romania itself. Anio is saying that even
riding a *listed* network via an unlisted provider voids the compatibility statement. Digi,
Orange RO, Vodafone RO and Telekom Mobile are not merely unlisted — they are outside the frame
the vendor is willing to speak about at all.

Corroborating, from Anio's own live pages, all accessed 2026-08-19:

- **Shipping policy:** *"Anio Produkte werden aktuell nur nach Deutschland und Österreich
  verkauft."* ("Anio products are currently sold only to Germany and Austria.")
- **Setup guide** (updated 2026-07-14): SIM activation instructions exist for exactly two
  countries — 🇩🇪 Deutschland (Bling Anio, Vodafone, congstar/Telekom) and 🇦🇹 Österreich
  (yesss!). No other market has a documented activation path.
- **Helpcenter search for "Rumänien": 0 results** across the entire knowledge base.
- Helpcenter interface languages: Deutsch, Dansk, English (World), Suomi, norsk bokmål,
  Svenska. Anio's service languages are German plus Nordic. No Romanian, no CEE language.

**One contradiction inside Anio's own documentation, recorded rather than smoothed over:** an
old helpcenter article, *"Lieferzeit, Liefergebiete und Lieferkosten"* (Diana, **4 January
2023**), states *"Wir versenden nach Deutschland und ins europäische Ausland"* ("we ship to
Germany and to the rest of Europe") with *"Alle anderen Länder 12,00 €"*. That is a **2023**
article, it is heavily downvoted (−17), and it is directly contradicted by the current shipping
policy page. Treat the 2023 article as stale. The current DE+AT statement is authoritative.

### The Romanian evidence base, in full

It is one review. The complete thread, from the Romanian Play storefront, verified directly
2026-08-19:

**Fails —** *tatiana grigor*, Romania, **2025-08-24, 1★:**
> *"Nu pot conecta"* — "I cannot connect."

**Anio GmbH reply, 2025-08-25** — and note the language it is written in:
> *"Hallo tatiana grigor, bitte stellen Sie eine Anfrage bei uns auf unserer Homepage anio.eu
> in dem Bereich Support und beschreiben uns dort das Problem etwas genauer, damit wir Ihnen
> schnellstmöglich helfen. Vielen Dank."*
>
> "Hello tatiana grigor, please submit a request to us on our homepage anio.eu in the Support
> section and describe the problem there in a little more detail, so that we can help you as
> quickly as possible. Thank you."

Read that carefully, because it cuts both ways and both cuts matter:

- Anio did **not** say "we do not serve Romania." There is therefore **no evidence of a hard
  app-level geo-block on +40 registration.** Whether the Anio app accepts a Romanian +40
  number is **unverified** — it can only be settled by installing the app and trying.
- Anio answered a Romanian-language complaint **in German**, and routed the user to a
  German-language support form. That is what the support experience looks like from Romania.

The cause of the failure is unestablished. It could be the registration flow, a SIM, or user
error. One report is one report and this document will not inflate it.

### What is still unproven

- **Whether the app accepts a +40 registration.** Genuinely open. **Unverified.**
- Whether the failure in the single RO review was vendor-side or local. **Unverified.**
- Whether Anio's Wi-Fi positioning database has any meaningful Romanian coverage (see
  *Positioning quality*). **Unverified**, and structurally doubtful.

### Why this is still a `fails`

Not because a geo-block is proven — it is not. Because every commercial and support structure
around the device stops at a border Romania is on the wrong side of: DE+AT sales only, a
nine-country SIM list that excludes Romania and disclaims the unlisted, German-only support
answers, zero Romanian retail, zero Romanian distributor, zero Romanian warranty entity, and
one Romanian user in recorded history who could not connect. Against the project's own
screening test — *does this vendor have a commercial reason to keep serving Romania tomorrow?*
— the answer is unambiguously no.

## Is there a route to buy it in Romania?

Established this pass, all 2026-08-19:

| Route | Status |
|---|---|
| **anio.eu** (vendor direct) | **No.** Policy: sold to Germany and Austria only. |
| **Amazon.de** | **No.** Fetched with a Romania delivery context ("Liefern nach Rumänien" / "Versand nach Rumänien RO"). Both colour SKUs — B0CW2X8NQM (hibiscus) and B0CW2XLNT3 (blau) — return *"Derzeit nicht verfügbar. Ob und wann dieser Artikel wieder vorrätig sein wird, ist unbekannt."* ("Currently unavailable. Whether and when this item will be back in stock is unknown.") So the Romania question is moot: there is nothing to ship. Note this is also a mild end-of-line signal worth watching. |
| **congstar.de** | Live, but it is a **German tariff bundle** — the commercial model is a German SIM, which is the opposite of what a Romanian buyer needs. |
| **smartwatch.de** | Listing live (specs confirm 4G, WLAN, LBS, nano-SIM, IP68, 595 mAh, 44 g). Its shipping-terms page did not render a country list; **RO shipping UNKNOWN**. |
| **Kaufland.de** | HTTP 403, could not be checked. **UNKNOWN.** |
| **Hartlauer.at** | Austrian retail, listing live. RO shipping **UNKNOWN**. |
| **Forwarding address (DE/AT)** | The only route actually demonstrated to exist — and it buys hardware while leaving every account, SIM-compatibility and support question unanswered. |

### Does the Telekom-branded SKU carry a carrier lock?

**No — no SIM lock, on two independent sources.**

- **Anio's own distributor sheet (ALSO):** *"SIM-Lock: kein Lock"*.
- **eBay.de catalogue entry** for *"Telekom Anio Kidswatch 6 T-Watch blau"* (product 25073103225),
  attribute *Mobilfunkbetreiber: **Ohne Simlock*** ("without SIM lock"). Weaker evidence — an
  eBay catalogue attribute is community-maintained metadata — but it independently corroborates
  the manufacturer sheet.

This is a real point in Anio's favour and worth stating plainly: **the hardware is
operator-agnostic.** The constraint on this device is nothing to do with a carrier lock. It is
the vendor's account, SIM-compatibility and support scope — exactly the failure mode this
project exists to avoid.

## Pre-purchase test

Anio's shipping policy makes the ordinary version of this test impossible: you cannot buy from
the vendor into Romania, so there is no vendor return window to fall back on. That inverts the
usual order — **do the free test first, and only then decide whether to chase a forwarding
address at all.**

1. **Install `com.anio.watch` ("ANIO watch") from the Romanian Play storefront.** Confirmed
   present and installable 2026-08-19 — 4.6★ / 1,757 ratings, free, Anio GmbH, PEGI 3. This
   step costs nothing.
2. **Attempt account registration with a +40 number.** Anio's registration asks for the
   wearer's name, the watch's phone number, your own mobile number in international format
   (`+49...` style), e-mail and password. **If the +40 country code is rejected, or the account
   e-mail never arrives, stop here — the device is dead in Romania and nothing else matters.**
   This is the one open question that decides the model.
3. **If step 2 succeeds, e-mail Anio support before buying** and ask two questions in writing:
   (a) does the Anio 6 work on a Digi / Orange RO / Vodafone RO SIM, given that the compatible-SIM
   list names no Romanian operator; (b) is there any warranty or support path for a device used
   in Romania. Anio answers in German — expect a German reply and be ready to read one. Get the
   answer in writing before any money moves.
4. **Only then consider a route.** If buying via a DE/AT forwarding address, note the vendor's
   own 14-day EU distance-selling window starts at **delivery to the forwarder**, not to you —
   so the practical return window is shorter than 14 days, and returning from Romania is at your
   cost. There is no Romanian 30-day eMAG-style safety net here at all.
5. **In week one:** place an outgoing and an incoming voice call on LTE, and check the reported
   position **inside the school building** — not in the garden. See below for why the indoor
   check specifically matters more on this watch than on most.

## Positioning quality in real use

The hardware is genuinely good and, unusually, verified: **GPS + Galileo + BeiDou** (no
GLONASS), plus **Wi-Fi and LBS positioning modules**, per the manufacturer datasheet rather than
a shop blurb.

**Fix time:** *"Sobald du die App öffnest, versucht sich die Uhr direkt im Hintergrund zu orten.
Dies kann bis zu 60 Sekunden dauern."* ("As soon as you open the app the watch tries to locate
itself in the background. This can take up to 60 seconds.") — Anio helpcenter, updated
2025-03-17. So: up to a minute to a fresh fix, vendor-stated.

**Intervals.** Default is **60 minutes**. Selectable standard intervals are **5 / 15 / 30 / 60
min**. "Explorer" mode polls every 5 min but **only for 60 minutes**, then stops and pushes a
notification. "Schulwegzeiten" (school-route windows) jump to the tightest interval, but a
window is **capped at 60 minutes** and you get at most four per day.

**Indoors — and this is where the honest reading gets uncomfortable.**

Anio's own troubleshooting article (updated **2026-06-25**) is candid:

> *"Deine Anio Smartwatch nutzt GPS und WLAN zur Ortung. GPS funktioniert nur im Freien
> zuverlässig, da Satellitensignale in Gebäuden stark abgeschwächt werden. … **Die WLAN-Ortung
> benötigt mindestens drei umliegende Netzwerke.** Sind deren Standortdaten veraltet, kann
> vorübergehend eine ungenaue Position angezeigt werden – diese Daten aktualisieren sich jedoch
> meist innerhalb weniger Tage automatisch."*
>
> "Your Anio smartwatch uses GPS and WLAN for positioning. GPS only works reliably outdoors,
> because satellite signals are strongly attenuated inside buildings. … **WLAN positioning
> requires at least three surrounding networks.** If their location data is outdated, an
> inaccurate position may temporarily be displayed — however this data usually updates
> automatically within a few days."

Two consequences follow, and the second is the one nobody has tested.

1. **Indoors the watch is a Wi-Fi positioning device, not a GNSS device.** That is the correct
   architecture, and it is why the Wi-Fi module matters more than the constellation list.
2. **Wi-Fi positioning is only as good as the access-point database behind it.** Anio does not
   name its database provider — **UNKNOWN**. But the phrase *"updates automatically within a few
   days"* describes a crowd-sourced, self-correcting dataset, and crowd-sourcing needs local
   users. Anio's user base is nine Western and Northern European countries. Romania has **one
   recorded user, who could not connect.** Whether the database knows a single access point in a
   Romanian primary school is **entirely unverified**, and there is no structural reason to
   expect it does. *(This is inference, flagged as such — but it is the single most important
   untested question about this watch's fitness for the actual use case.)*

Note also a discrepancy inside Anio's own documents: the datasheet lists **LBS** (cell-tower
positioning) as a positioning module, but the support article describes only GPS and WLAN. So
whether the watch silently falls back to cell-tower positioning — and reports a child in the
wrong place with no visible warning — is **UNKNOWN**. Anio does not document a fallback
indicator or an accuracy radius in the app.

**Independent reports.** Thin, and only from Germany:

- **homeandsmart.de, Germany, 2024-08-13** (older than the 2024+ preference, marked): rates
  outdoor tracking reliable, but lists *"GPS-Ortung in Gebäuden unpräzise"* ("GPS positioning in
  buildings imprecise") as a weakness, and reports experiencing **false geofence alerts while
  indoors**. That is the exact failure mode a working parent cares about: a phantom "left the
  safe zone" alert at 10am because the child is in a classroom.
- **No German owner report with measured indoor accuracy was found. UNKNOWN.**
- The one long-run owner account in this project's entire corpus is for a **different, older
  model**: *rainbowbrite81*, Germany, urbia.de, on an **Anio 4 Touch** used for about two years —
  *"Wir waren sehr zufrieden damit, die Ortung war super und die Akkuzeit war auch o.k."* ("We
  were very happy with it, the tracking was great and the battery life was OK too."). Date
  **UNKNOWN**. It says something real about the brand's durability. It says nothing about the
  Anio 6, which is a different platform on a different radio, and it must not be transferred.

## Battery in real use

This is the section where the most honest vendor in the project publishes numbers that convict
its own product for this use case.

**Claimed — and the manufacturer contradicts itself:**

| Source | Date | Figure |
|---|---|---|
| Manufacturer datasheet | Stand 16.01.2024 | **20–32 h** *"(abhängig vom Ortungsintervall und Empfangsstärke des vorhandenen Mobilfunknetzes)"* |
| anio.eu shop page | accessed 2026-08-19 | **24–48 h**, same caveat |
| Anio 6 FAQ (PDF) | undated | **24–48 h**, plus 72 h standby |
| Anio helpcenter, battery article | 2025-06-09 | **24–48 h** in active standby, *"abhängig von der Empfangsstärke"* |
| Anio helpcenter, positioning article | 2026-06-25 | **5-min interval → up to 24 h · 60-min interval → up to 48 h** |

The 20–32 h and 24–48 h figures cannot both be right and Anio has never reconciled them. The
newer helpcenter articles agree on 24–48 h and explain it — the range *is* the polling interval
sweep. The 2024 datasheet's 20–32 h is the more conservative measurement and the older one.
**Record both. Trust neither as a single number.** What is common to every source is the caveat,
which Anio states more plainly than any other vendor here: *"Diese Angaben basieren auf optimalem
Netzwerkempfang, der stark variieren kann."* ("These figures are based on optimal network
reception, which can vary greatly.")

**Observed: UNKNOWN.** This is a real gap, not a formality. The single professional German test
(homeandsmart, 2024-08-13) did not measure runtime — it restated the spec. No German owner
report with a measured runtime *and* a stated polling interval was found anywhere. Amazon.de
reviews were not retrievable (bot wall). Everything below is therefore **the vendor's own
arithmetic**, not observation.

**The vendor's arithmetic against an actual school day.** Anio publishes one more number, and
it is the decisive one — for the school-route window:

> *"Eine Schulwegzeit kann maximal 60 Minuten lang sein. In diesem Intervall ist der
> Akkuverbrauch deiner Uhr sehr hoch. **Pro 10 Min verbraucht die Uhr ca. 5% von der
> Akkukapazität.**"*
>
> "A school-route window can be at most 60 minutes long. In this interval your watch's battery
> consumption is very high. **Per 10 minutes the watch uses approx. 5% of battery capacity.**"
> — Anio helpcenter, Germany, updated 2025-03-17

Run the day a 7-year-old actually has:

- Standard interval at 5 min (the tightest useful setting) → **24 h ceiling**, and that ceiling
  already assumes standby with no usage and optimal reception.
- Morning school-route window, 30 min → **−15%**.
- Afternoon school-route window, 30 min → **−15%**.
- Calls: *"Zusätzlich verkürzen auch lange oder häufige Telefonate die Akkulaufzeit deutlich,
  da sie besonders viel Energie verbrauchen."* ("Long or frequent calls also noticeably shorten
  battery life, as they consume a particularly large amount of energy.")
- Weak-signal concrete school, where the modem hunts — Anio's own stated worst case. On Orange
  Romania, B20 is the *only* sub-1 GHz band available to it.

**Straight verdict: no, it does not clear a school day plus commute plus margin at any tracking
interval a parent would actually choose.**

- At **60-min polling** it will comfortably do a day, possibly two — but hourly updates do not
  tell you where a 7-year-old is, which is the entire reason for buying it. That configuration
  passes the battery test by failing the product test.
- At **5-min polling plus two school-route windows plus school-day calls**, Anio's own figures
  put you meaningfully **under 24 h**, before any allowance for weak indoor signal. That is not
  "a day with no margin" — that is a device that can plausibly be flat before the afternoon
  pickup on a bad-signal day.
- **15–30 min polling with light call use** is the only honest operating point, and even there
  the margin is thin and undemonstrated.

Nightly charging is not a preference on this watch, it is a load-bearing requirement. One
forgotten charge is a dark wrist at 3pm. And because **no independent measurement exists**, even
the pessimistic reading above rests entirely on the manufacturer's own numbers.

Anio deserves credit for publishing figures precise enough to be argued with. Almost no other
vendor in this project does. It does not change the answer.

## Network & bands

Verified from **Anio's own datasheet and the ALSO distributor sheet**, not from a "4G" label:

> *"unterstützte GSM-Frequenzen in MHz: 1.800, 900"*
> *"Unterstützte 4G/LTE Frequenzen in MHz: 2.600, 2.100, 1.800, 900, 800"*
> *"Voice over LTE (VoLTE): IP-Telefonie im LTE-Netz in HD-Voice Qualität mit rasantem Rufaufbau"*

That maps to **B7 (2600) / B1 (2100) / B3 (1800) / B8 (900) / B20 (800)**.

**Fit against Romanian networks — this is the part that is genuinely excellent:**

- **B20 (800 MHz) present.** Orange Romania's only sub-1 GHz LTE band. Without it a watch has no
  low band at all on Orange — bad wrist antenna, concrete school, cell edge. Anio has it.
- **B3 (1800) present.** The Romanian national workhorse band.
- **B7 (2600) and B1 (2100) present.** Urban capacity.
- **B28 absent — and irrelevant.** In Romania 700 MHz is 5G NR n28, not LTE. A watch advertising
  B28 buys nothing here. Its absence costs nothing.

On radio alone this is the cleanest Romanian fit in the whole field, and it is the only one
backed by a manufacturer document rather than a marketplace claim.

**VoLTE.** Explicitly stated by the manufacturer — a real datasheet claim, not a marketing word.
But per this project's own structural finding, "the watch supports VoLTE" and "VoLTE works on
this Romanian SIM" are different claims. Romanian operators provision VoLTE per device IMEI/TAC,
and no kids' watch appears on any Romanian operator's VoLTE list. Whether the Anio 6's TAC is
provisioned by Digi, Orange RO or Vodafone RO is **UNKNOWN and unverifiable without a SIM in the
device**.

**If 2G is retired.** The datasheet lists GSM 1800/900, so a 2G fallback exists in hardware. On
Orange or Digi — both of which still run 2G — a VoLTE provisioning failure would degrade to 2G
voice rather than silence. That is the safe pairing. But no operator has committed to a public
2G end date, and Vodafone's own 2025 wording is that where there is no 2G, for a non-VoLTE
device "making calls will become impossible". Buying on the strength of the 2G backstop would be
buying a dated asset.

**The SIM lottery, restated.** The bands are right. The bands are not the problem. Anio's SIM
compatibility statement is scoped to nine countries and disclaims everything outside it, so a
Digi or Orange RO SIM in this watch is an untested configuration by the manufacturer's own
admission — regardless of how well the frequencies line up.

## Features & what can be disabled

The design philosophy here is genuinely different from the rest of the field, and for a
7-year-old at school it is the right one.

| Feature | Present | Parent control |
|---|---|---|
| **Camera** | **No** | Deliberately omitted |
| **Games** | **No** | Deliberately omitted |
| Calculator | No | Deliberately omitted |
| Open internet / browser | **No** | Architecturally absent |
| WhatsApp / Instagram / TikTok | **No** | Architecturally absent |
| Voice calls | Yes | Restricted to a 20-contact phonebook; **all other callers blocked** |
| Free dialling | Optional | *"Wählfeld"* is **off by default**; parent can unlock it in the app for older children |
| Chat | Yes | Anio's own chat only — child sends voice messages and emoji to the parent app; parent sends text, voice and emoji back. No third-party messaging. |
| SOS | Yes | 3-second press; calls stored SOS contacts in sequence until one answers, and pushes the last location to the app. **Explicitly does not dial an emergency call centre** unless a real emergency number was stored. |
| **GPS / positioning** | Yes | **Can be fully disabled by the parent in the app** — rare in this category, and Anio flags it as such |
| Geofence | Yes | Parent-defined; push on enter/exit |
| School mode | Yes | See below |
| Step counter | Yes | Disable capability **UNKNOWN** |
| OTA updates | Yes | On-watch menu |

**No camera and no games is a genuine advantage, not a missing feature.** Anio states the reason
outright, and it is the reason that matters at a school gate:

> *"Nein, die Anio 6 verzichtet bewusst auf Spiele und eine Kamera, um Ablenkungen zu vermeiden
> und die Sicherheit zu gewährleisten. … Darüber hinaus sind Kinder Smartwatches mit Spielen und
> Kameras an den meisten Schulen verboten."*
>
> "No, the Anio 6 deliberately does without games and a camera, to avoid distractions and ensure
> safety. … Furthermore, children's smartwatches with games and cameras are banned at most
> schools."

Set that against the alternatives in this field that ship with WhatsApp, TikTok and YouTube and
then require a parent to lock them down one by one. Anio removes the problem at the hardware
level. There is nothing to forget to switch off. For a 7-year-old whose watch has to survive a
teacher's judgement every morning, that is worth more than most spec-sheet wins. The one real
cost: **no camera also means no photo to help locate a lost watch.**

**What the school mode actually does** (confirmed from Anio's FAQ and product page):

> *"Die Anio 6 verfügt über einen Ruhemodus, der das Display sperrt und nur die Uhrzeit anzeigt,
> um Ablenkungen in der Schule zu vermeiden. Verpasste Nachrichten und Anrufe werden nachträglich
> mit einem Ausrufezeichen angezeigt."*
>
> "The Anio 6 has a quiet mode which locks the display and shows only the time, to avoid
> distractions at school. Missed messages and calls are shown afterwards with an exclamation
> mark."

So: display locked to a clock face during programmed school hours, notifications suppressed and
queued, surfaced with a `!` when the mode ends. Anio schedules it via parent-set quiet periods.
Whether **SOS remains live during school mode is not stated in any Anio document found —
UNKNOWN**, and it is a question worth asking support directly, because several competing watches
explicitly keep SOS active and Anio does not say either way.

Anio also supplies a **"Lehrerbrief für die Schule"** — a downloadable letter explaining the
watch's functions for a teacher or head — and tells buyers to request one from customer service
if their school objects. That is a small thing that suggests the school-compatibility positioning
is real rather than decorative.

## Security & privacy

**The claim, attributed rather than restated as fact.** Anio's marketing position is a
German-hosted, GDPR-native stack with no third-party servers. In its own words:

> *"Ja, die Anio 6 legt höchsten Wert auf Sicherheit. Sie verfügt über eine sichere Eltern-App,
> die auf datensicheren Servern in Deutschland betrieben wird (100% DSGVO-konform)."*
>
> "Yes, the Anio 6 places the highest value on security. It has a secure parent app which is
> operated on data-secure servers in Germany (100% GDPR-compliant)."
> — Anio 6 FAQ, Anio GmbH

And on the product page: *"Anio RTOS (sicheres DSGVO-konformes Betriebssystem mit Server und App
made by Anio)"* — "secure GDPR-compliant operating system with server and app made by Anio". The
product page further states location data is **retained for only 14 days** on Anio servers, and
that GPS can be fully disabled by the parent.

**Verification attempted. Result: not verified.** No independent audit, certification, technical
teardown or third-party confirmation of German hosting for the *watch platform* was found. The
claim is plausible for a Bremen company selling a GDPR story as its main differentiator, and
Anio is more specific than its competitors. It remains **unverified**.

**One finding that complicates the "no third-party servers" claim — read carefully, because the
distinction matters.** The anio.eu **webshop** privacy policy names a conventional stack of
non-German processors: **Zendesk, Inc. (San Francisco, USA)** for support, Google Analytics,
Microsoft UET, Facebook Pixel, AWIN, and Trusted Shops. It discloses transfers to countries
without an adequacy decision — Australia, India, Singapore — under Standard Contractual Clauses.
The helpcenter itself runs on `anio.zendesk.com`, which is directly observable.

This does **not** disprove the watch-platform claim: a shop and a device backend can legitimately
be separate systems, and "no third-party servers" is a claim Anio makes about the watch service.
But two things should be said plainly:

1. **The support channel is US-hosted.** If you write to Anio about your child's watch, that
   ticket — and whatever location detail you put in it — sits with Zendesk Inc.
2. **Anio publishes no processor list (Verzeichnis / AVV) for the watch platform itself.** So the
   central claim, the one the brand is built on, is the one claim the customer cannot check.
   **UNKNOWN.**

**Vulnerability research and CVEs: none found.** No CVE, security advisory or published research
targeting the Anio 6, Anio RTOS, or Anio's backend was located in this pass. **Absence of
published research is not evidence of security**, and here it cuts two ways:

- *Structurally positive:* the Anio 6 runs **proprietary Anio RTOS 2.00.5 on a UNISOC W307** — it
  is **not** on the SeTracker2 / Wonlex white-label platform that carries this category's entire
  documented vulnerability history (open backend APIs, IMEI-enumerable devices, plaintext
  commands). It is a genuinely different and structurally safer architecture.
- *Structurally negative:* a proprietary RTOS from a small German vendor has had **no external
  scrutiny whatsoever**. Nobody has looked. The security posture is unaudited in both directions.

**Covert remote-listen capability: no such feature is documented, and there is a meaningful
amount of negative evidence.**

- Helpcenter search returns **0 results for "Abhören"** and **0 results for "Mithören"** (the
  German terms for remote listening / eavesdropping), checked 2026-08-19.
- No such function appears in the 23-question official Anio 6 FAQ, on the product page, or in the
  ALSO distributor feature list.
- The call model actively works against it: only 20 stored contacts can reach the watch and *"jeder
  Anrufer bzw. jede Telefonnummer, die nicht im Telefonbuch der Anio 6 abgespeichert sind, werden
  sicherheitshalber blockiert"* ("every caller or phone number not stored in the Anio 6 phonebook
  is blocked as a precaution").

So there is **no parent-facing remote-listen feature to lock**, which is the right answer. Whether
the firmware contains an undocumented monitor capability cannot be established without a teardown
and is **unverified**. Given a German vendor selling primarily on a data-protection proposition,
the commercial incentive runs strongly against shipping one.

**One design weakness worth flagging.** Per the FAQ: *"Jede Anio Smartwatch kann zur Sicherheit
nur einmal registriert werden. Innerhalb der Familie teilt ihr euch also die Zugangsdaten zu
eurem App-Account und könnt diese auch an andere Familienmitglieder/Freunde weitergeben."*
("Each Anio smartwatch can only be registered once for security. Within the family you therefore
share the credentials to your app account, and can also pass them to other family members or
friends.") There is **one account per watch and no separate logins** — Anio's own instruction is
to share a password. That is a poor pattern for an account holding a child's live location, with
no per-user revocation if a shared credential leaks.

**Google Play data-safety declarations** for `com.anio.watch` were present on the listing but did
not render in retrieval. **UNKNOWN.**

## Reality check

- **"Akkulaufzeit 24–48h"** means: 48 h at 60-minute polling, which is not tracking; 24 h at
  5-minute polling in standby with no calls and optimal signal; and *less than that* once you add
  the two school-route windows Anio itself costs at ~5% of the battery per 10 minutes, plus
  calls, plus a weak indoor signal. The manufacturer's own 2024 datasheet says **20–32 h**. There
  is **no independently measured figure at all**.
- **"IP68"** means dust-tight and water-resistant, and Anio immediately adds the part the badge
  hides: *"Die Uhr ist nicht zum Duschen oder Schwimmen geeignet und muss davor abgelegt werden"*
  — take it off before showering or swimming. One German test recorded it as splash-resistant in
  practice.
- **"GPS-Ortung"** means: outdoors, good. Indoors — which is where a child spends the school day —
  it is a **Wi-Fi positioning device** that needs three visible access points and a database that
  knows them, and one German test reported **false geofence alerts indoors**.
- **"Made in Germany / 100% DSGVO-konform / no third-party servers"** means: a credible and
  unusually specific vendor claim, **independently unverified**, from a company whose own webshop
  and support desk run on Zendesk in San Francisco with Google and Meta trackers attached.
- **"Only German kids' smartwatch with 4G"** is true and, for Romania, beside the point. The radio
  was never the problem.
- **"Kinder Smartwatch"** for a Romanian buyer means: a watch you cannot buy from the vendor,
  whose SIM list excludes your country, whose support replies in German, and which one Romanian
  parent has already failed to connect.

## What users say

The evidence base for this model is **thin, and thin in a specific way**: one professional test,
an unretrievable Amazon review pool, and a single Romanian datapoint. Nothing here should be
generalised.

**Works:**

- *(Different model — recorded for brand context only, must not be transferred to the Anio 6.)*
  **rainbowbrite81**, Germany, urbia.de, on an **Anio 4 Touch** used about two years:
  > *"Wir waren sehr zufrieden damit, die Ortung war super und die Akkuzeit war auch o.k."*
  > "We were very happy with it, the tracking was great and the battery life was OK too."

  She powered it down at home each day. **Date UNKNOWN. One report.** This is the only multi-year
  satisfied-owner account in this project's entire research corpus, and it is the strongest
  reason to take the brand seriously. It is also about **2G-era hardware on a different
  platform.**
- **homeandsmart.de**, Germany, **2024-08-13** (pre-2025, marked): scored it *"gut"* (85/100).
  Strengths recorded: simple setup, comfortable strap, clear display, 20 storable contacts, good
  app, dependable SOS function, reliable outdoor tracking. **One professional test.**
- **Amazon.de aggregate** (via testberichte.de, accessed 2026-08-19): **68 customer opinions,
  3.4 / 5** — but the shape matters more than the mean: **47% five-star and 29% one-star**. That
  is a polarised distribution, not a consensus. The underlying review text was **not retrievable**
  (bot wall), so *why* a third of buyers rate it one star is **UNKNOWN** and is a real gap in this
  document.

**Fails:**

- **tatiana grigor**, **Romania**, Google Play (RO storefront), **2025-08-24, 1★:**
  > *"Nu pot conecta"*
  > "I cannot connect."

  **One report — and it is the only Romanian report that has ever existed for this brand.** Anio
  replied the next day, in German, directing her to a German-language support form. Cause never
  established.
- **homeandsmart.de**, Germany, **2024-08-13**: recorded *"GPS-Ortung in Gebäuden unpräzise"*
  ("GPS positioning in buildings imprecise") as a weakness, and an unreliable geofence with
  **false alerts triggered indoors**. **One report**, but it corroborates Anio's own
  documentation, which independently warns that Wi-Fi positioning can show a temporarily
  inaccurate position when access-point data is stale.
- **Anio itself**, helpcenter, **2025-06-09**: *"Im 1&1 Netz sind laut Kundenaussagen die
  Akkulaufzeiten geringer als im Telekom Netz."* ("In the 1&1 network, according to customer
  statements, battery runtimes are lower than in the Telekom network.") The vendor publishing its
  own customers' complaint that battery life is network-dependent is both admirable and a direct
  warning about untested networks — which is what every Romanian operator is here.
- **Availability signal**, Amazon.de, **2026-08-19**: both colour variants *"Derzeit nicht
  verfügbar. Ob und wann dieser Artikel wieder vorrätig sein wird, ist unbekannt."* Not a user
  report, but worth watching.

**Coverage gaps in this section, stated rather than papered over:** Amazon.de review text was
behind a bot wall; Reddit was inaccessible to this project throughout; no German parent forum
thread specific to the Anio 6 was found; the web-search budget was exhausted before a Trustpilot
or gutefrage sweep could run. **No owner-measured battery figure and no owner-measured indoor
accuracy figure exists in this document, because none was found.**

## Sources

All accessed **2026-08-19** unless stated otherwise.

**Vendor primary — the supported-country question (contradiction #5)**
1. https://anio.eu/policies/shipping-policy — *"Anio Produkte werden aktuell nur nach Deutschland und Österreich verkauft."* Establishes DE+AT-only sales. **Authoritative.**
2. https://support.anio.eu/hc/de/articles/12029124920465-Welche-SIM-Karten-sind-mit-der-Anio-kompatibel — **updated 2026-03-24.** The nine-country compatible-SIM table (DE/AT/CH/ES/IT/FR/FI/DK/LU) and the "compatibility not guaranteed for unlisted providers" disclaimer. **This is the settlement of contradiction #5 — Romania is absent.**
3. https://support.anio.eu/hc/de/articles/21286668922385-Anio-6-Einrichten — **updated 2026-07-14.** SIM activation documented for Germany and Austria only.
4. https://support.anio.eu/hc/de/search?query=Rum%C3%A4nien — **0 results for "Rumänien"** across the entire Anio knowledge base.
5. https://support.anio.eu/hc/de/search?query=Liefergebiete — surfaces the stale contradicting article *"Lieferzeit, Liefergebiete und Lieferkosten"* (Diana, **2023-01-04**, −17 votes): *"Wir versenden nach Deutschland und ins europäische Ausland … Alle anderen Länder 12,00 €"*. Recorded as an internal contradiction; superseded by source 1.
6. https://anio.eu/pages/nutzungsbedingungen-anio-app — terms of use: German law applies, *"even if access to our App occurs from outside the Federal Republic of Germany"*. No country restriction on app use is stated.

**Vendor primary — hardware, bands, VoLTE**
7. https://d.otto.de/files/811c0cb9-48b2-59ca-8646-167531cedd96.pdf — **Datenblatt Anio 6, Stand 16.01.2024** (text extracted locally). Establishes 595 mAh, **"20-32h (abhängig vom Ortungsintervall und Empfangsstärke)"**, IP68, UNISOC W307, *"Ortungsmodule: GPS, WIFI, LBS"*, nanoSIM, 44 g, Anio RTOS, SAR 0.75 W/kg wrist, CE/UKCA/RoHS/REACH/EN71.
8. https://www.also.com/pub/assets/5102afa5-b198-4f04-9d8b-2e3de108781e.pdf — **ALSO distributor sheet** (text extracted locally). Establishes **GSM 1800/900**, **LTE 2.600/2.100/1.800/900/800 MHz**, **explicit VoLTE**, **GPS + Galileo + Baidu**, UNISOC W307 (ARM Cortex-A53), Nano-SIM (4FF), 1 GB/1 GB, Anio RTOS 2.00.5, **"SIM-Lock: kein Lock"**, **"Verkaufsstart 03-2025"**, and *"verzichtet auf Schnick-Schnack wie Kamera, Taschenrechner oder Spiele"*.
9. https://mam.mobile-order.de/ab/abf9/abf956da-5dbb-4a50-89c6-0a1d3d66b96a/abf956da-5dbb-4a50-89c6-0a1d3d66b96a_standard_pdf.pdf — **official "FAQ zur Anio 6 Kinder Smartwatch"** (text extracted locally). Establishes: no camera/games/calculator by design, **no eSIM**, 20-contact phonebook with strangers blocked, optional parent-unlocked dial pad, SOS behaviour, Ruhemodus/school mode, no social apps or open internet, GPS fully disableable, Android 5.0 / iOS 13.4 minimum, **one account per watch with shared credentials**, 24–48 h battery, 72 h standby, and the German-server GDPR claim.

**Vendor primary — battery and positioning behaviour**
10. https://support.anio.eu/hc/de/articles/21737630698641-Akkulaufzeit-der-Anio-6 — **2025-06-09.** 24–48 h in active standby; 72 h standby without SIM; *"Diese Angaben basieren auf optimalem Netzwerkempfang"*; **"Im 1&1 Netz sind laut Kundenaussagen die Akkulaufzeiten geringer als im Telekom Netz."**
11. https://support.anio.eu/hc/de/articles/13224190064401-Ortung-funktioniert-schlecht-oder-gar-nicht — **updated 2026-06-25.** **"Die WLAN-Ortung benötigt mindestens drei umliegende Netzwerke"**; stale AP data can show a temporarily inaccurate position; **5-min interval → up to 24 h, 60-min interval → up to 48 h**; short intervals limited to 60 min at a stretch; calls shorten runtime significantly; smaller antennas than a phone.
12. https://support.anio.eu/hc/de/articles/21392128190865-Schulwegzeiten-und-Ortung — **updated 2025-03-17.** Default interval 60 min; selectable 5/15/30/60; Explorer mode 5 min for 60 min; up to 4 school-route windows, each max 60 min; **"Pro 10 Min verbraucht die Uhr ca. 5% von der Akkukapazität"**; fix on app open takes up to 60 seconds; geofence behaviour.
13. https://anio.eu/products/anio6-kids-smartwatch — €199.00 incl. free DE/AT shipping; **"24-48h (abhängig vom Ortungsintervall und Empfangsstärke des vorhandenen Mobilfunknetzes)"**; IP68 with the no-shower/no-swim caveat; no camera/games/calculator; Schulmodus; Anio RTOS GDPR claim; **14-day location-data retention**; parent can disable GPS; congstar / Bling x Anio SIM options.

**Romania-specific**
14. https://play.google.com/store/apps/details?id=com.anio.watch (fetched `hl=ro&gl=RO`) — **app live and free in the Romanian Play storefront**, "ANIO watch" by Anio GmbH, **4.6★ / 1,757 ratings**, PEGI 3, availability InStock. Contains the complete Romanian review thread: **tatiana grigor, 2025-08-24, 1★, *"Nu pot conecta"***, and **Anio GmbH's German-language reply of 2025-08-25**.

**Retail routes**
15. https://www.amazon.de/dp/B0CW2X8NQM (hibiscus) and https://www.amazon.de/dp/B0CW2XLNT3 (blau) — fetched with a Romania delivery context. **Both: *"Derzeit nicht verfügbar. Ob und wann dieser Artikel wieder vorrätig sein wird, ist unbekannt."***
16. https://www.ebay.de/p/25073103225 — eBay.de catalogue entry, **"Telekom Anio Kidswatch 6 T-Watch blau"**, attribute **Mobilfunkbetreiber: "Ohne Simlock"**. Corroborates source 8 on the absence of a carrier lock (weaker: community-maintained metadata).
17. https://www.smartwatch.de/smartwatch/anio-6/ — German retail listing; independently confirms 4G, **WLAN and LBS connectivity**, nano-SIM, IP68, 595 mAh, 44 g, 1.09" IPS 240×240, no camera. Shipping-country list did not render — **RO shipping UNKNOWN**.
18. https://www.congstar.de/geraete/anio/anio-6/ — Anio 6 sold as a German tariff bundle (congstar, Telekom D1 network).

**Independent review**
19. https://www.homeandsmart.de/anio-6-kinder-smartwatch-test-657303 — **2024-08-13** (pre-2025, marked). *"gut"*, 85/100. Reliable outdoors; **"GPS-Ortung in Gebäuden unpräzise"**; **false geofence alerts experienced indoors**; splash-resistant in practice; **no measured battery runtime**.
20. https://www.testberichte.de/p/anio-tests/6-testbericht.html — aggregate **2.2 "gut" from one test**; **Amazon.de: 68 opinions, 3.4/5, 47% five-star / 29% one-star**.

**Privacy / security**
21. https://anio.eu/policies/privacy-policy — webshop privacy policy. Names **Zendesk, Inc. (San Francisco, USA)**, Google Analytics, Microsoft UET, Facebook Pixel, AWIN AG, Trusted Shops SE; adequacy-decision countries incl. USA; **third-country transfers to Australia, India and Singapore under Standard Contractual Clauses**; access logs deleted within 30 days. No processor list for the watch platform. No last-updated date shown.
22. https://support.anio.eu/hc/de/search?query=Abh%C3%B6ren and https://support.anio.eu/hc/de/search?query=Mith%C3%B6ren — **0 results each.** No documented remote-listen / eavesdropping feature anywhere in Anio's knowledge base.

**Prior project research (context, not primary evidence)**
23. `e:\research\kids-watch\.discovery\lens-4-community.md` — the **Anio 4 Touch** two-year owner quote (rainbowbrite81, Germany, urbia.de, date UNKNOWN), sourced there to https://www.urbia.de/forum/6-kids-schule/5435552-empfehlung-gps-uhr
24. `e:\research\kids-watch\.discovery\lens-3-technical.md`, `lens-5-romania.md` — prior extraction of the datasheet PDFs and the RO Play storefront figures, both independently re-verified in this pass.
